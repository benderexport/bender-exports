/**
 * Bender Exports Ltd. — Production Server (Supabase Edition)
 *
 * Auth   → Supabase Auth (email/password, JWT issued by Supabase)
 * DB     → Supabase PostgreSQL (via REST API — no native driver needed)
 * Sync   → Supabase Realtime (replaces offline queue)
 * Files  → Supabase Storage  (replaces local icon serving)
 *
 * Setup:
 *   npm install
 *   cp .env.example .env   ← fill in your Supabase credentials
 *   node server/index.js
 */
"use strict";

require("dotenv").config();
const express   = require("express");
const cors      = require("cors");
const path      = require("path");

let helmet, compression, rateLimit;
try { helmet      = require("helmet");             } catch {}
try { compression = require("compression");        } catch {}
try { rateLimit   = require("express-rate-limit"); } catch {}

// ── Config ────────────────────────────────────────────────────────────
const PORT           = process.env.PORT            || 3001;
const PUBLIC_DIR     = path.join(__dirname, "..", "public");
const SUPABASE_URL   = process.env.SUPABASE_URL;
const SUPABASE_KEY   = process.env.SUPABASE_SERVICE_KEY; // service-role key (server only)
const ANON_KEY       = process.env.SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("[ERROR] SUPABASE_URL and SUPABASE_SERVICE_KEY are required.");
  process.exit(1);
}

// ── Supabase helpers ──────────────────────────────────────────────────
// We call Supabase REST directly — no SDK needed on the server.
// The service-role key bypasses Row Level Security for server-side ops.

async function sbFetch(path, opts = {}) {
  const url = `${SUPABASE_URL}/rest/v1/${path.replace(/^\/+/, "")}`;
  const res  = await fetch(url, {
    ...opts,
    headers: {
      "apikey":        SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`,
      "Content-Type":  "application/json",
      "Prefer":        opts.prefer || "return=representation",
      ...(opts.headers || {}),
    },
  });
  const text = await res.text();
  let data;
  try { data = JSON.parse(text); } catch { data = text; }
  if (!res.ok) throw { status: res.status, message: data?.message || data };
  return data;
}

// Supabase Auth Admin API
async function sbAuth(path, body, method = "POST") {
  const res = await fetch(`${SUPABASE_URL}/auth/v1${path}`, {
    method,
    headers: {
      "apikey":        SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`,
      "Content-Type":  "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json();
  if (!res.ok) throw { status: res.status, message: data?.msg || data?.message || "Auth error" };
  return data;
}

// ── Express ───────────────────────────────────────────────────────────
const app = express();
app.set("trust proxy", 1); // Required for Railway / any reverse proxy
if (compression) app.use(compression());
if (helmet)      app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json({ limit: "10mb" }));

if (rateLimit) {
  app.use("/api/auth", rateLimit({
    windowMs: 15 * 60 * 1000, max: 20,
    message: { error: "Too many attempts, try again in 15 minutes" },
  }));
}

// ── Auth Middleware ───────────────────────────────────────────────────
// Verifies the Supabase JWT and attaches user metadata to req.user.
// The token is issued by Supabase on login — we validate it by calling
// /auth/v1/user which requires a valid Bearer token.
async function auth(req, res, next) {
  const h = req.headers.authorization;
  if (!h?.startsWith("Bearer ")) return res.status(401).json({ error: "No token" });
  const token = h.slice(7);
  try {
    const sbUser = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
      headers: {
        "apikey":        ANON_KEY,
        "Authorization": `Bearer ${token}`,
      },
    }).then(r => r.json());
    if (!sbUser?.id) return res.status(401).json({ error: "Invalid or expired token" });
    // Attach Supabase auth user + our app metadata stored in user_metadata
    req.user = {
      id:   sbUser.id,
      role: sbUser.user_metadata?.role || "clerk",
      email: sbUser.email,
    };
    next();
  } catch {
    res.status(401).json({ error: "Token validation failed" });
  }
}

function requireRoles(...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user?.role))
      return res.status(403).json({ error: "Forbidden" });
    next();
  };
}

// ── Auth Routes ───────────────────────────────────────────────────────

// Login — delegates entirely to Supabase Auth
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password)
    return res.status(400).json({ error: "Email and password required" });
  if (!ANON_KEY)
    return res.status(500).json({ error: "Server misconfiguration: SUPABASE_ANON_KEY not set" });
  try {
    console.log("[Login] Attempting:", email, "| URL:", SUPABASE_URL);
    const authRes = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
      method: "POST",
      headers: { "apikey": ANON_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await authRes.json();
    console.log("[Login] Supabase status:", authRes.status, "| body:", JSON.stringify(data).slice(0, 300));

    if (data.error) return res.status(401).json({ error: data.error_description || data.error });

    // Fetch the full user profile from our profiles table
    let profile = {};
    try {
      const rows = await sbFetch(`/profiles?id=eq.${data.user.id}&select=*`);
      if (rows && rows.length > 0) profile = rows[0];
    } catch (_) {}

    // Normalise profile fields for the frontend
    const userOut = {
      id:        data.user.id,
      email:     data.user.email,
      name:      profile.name       || data.user.user_metadata?.name       || data.user.email.split("@")[0],
      role:      profile.role       || data.user.user_metadata?.role       || "clerk",
      cwsAccess: profile.cws_access || data.user.user_metadata?.cwsAccess  || [],
      machineId: profile.machine_id || data.user.user_metadata?.machineId  || null,
      avatar:    profile.avatar     || data.user.user_metadata?.avatar     || data.user.email.slice(0,2).toUpperCase(),
      active:    profile.active     !== false,
    };

    res.json({
      token:         data.access_token,
      refresh_token: data.refresh_token,
      expires_in:    data.expires_in,
      user:          userOut,
    });
  } catch (e) {
    res.status(500).json({ error: e.message || "Login failed" });
  }
});

// Signup — creates Supabase auth user + profile row
app.post("/api/auth/signup", async (req, res) => {
  const { name, email, password, role = "clerk", cwsAccess = [], avatar, machineId } = req.body || {};
  if (!name || !email || !password)
    return res.status(400).json({ error: "name, email, password required" });
  try {
    // Create auth user via Admin API (sets metadata for role)
    const authUser = await sbAuth("/admin/users", {
      email,
      password,
      email_confirm: true,
      user_metadata: { name, role, avatar: avatar || name.slice(0, 2).toUpperCase() },
    });
    // Insert profile row
    await sbFetch("/profiles", {
      method: "POST",
      body: JSON.stringify({
        id:         authUser.id,
        name,
        email,
        role,
        cws_access: cwsAccess,
        machine_id: machineId || null,
        avatar:     avatar || name.slice(0, 2).toUpperCase(),
        active:     true,
      }),
    });
    res.status(201).json({ ok: true, id: authUser.id });
  } catch (e) {
    res.status(400).json({ error: e.message || "Signup failed" });
  }
});

// Get current user
app.get("/api/auth/me", auth, async (req, res) => {
  try {
    const rows = await sbFetch(`/profiles?id=eq.${req.user.id}&select=*`);
    const profile = rows && rows.length > 0 ? rows[0] : {};
    res.json({
      id:        req.user.id,
      email:     req.user.email,
      name:      profile.name       || req.user.email.split("@")[0],
      role:      profile.role       || req.user.role || "clerk",
      cwsAccess: profile.cws_access || [],
      machineId: profile.machine_id || null,
      avatar:    profile.avatar     || req.user.email.slice(0,2).toUpperCase(),
      active:    profile.active     !== false,
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Refresh token — client sends refresh_token, we get a new access_token
app.post("/api/auth/refresh", async (req, res) => {
  const { refresh_token } = req.body || {};
  if (!refresh_token) return res.status(400).json({ error: "refresh_token required" });
  try {
    const data = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=refresh_token`, {
      method: "POST",
      headers: { "apikey": ANON_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({ refresh_token }),
    }).then(r => r.json());
    if (data.error) return res.status(401).json({ error: data.error_description });
    res.json({ token: data.access_token, refresh_token: data.refresh_token, expires_in: data.expires_in });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ── Users ─────────────────────────────────────────────────────────────
app.get("/api/users", async (req, res) => {
  try {
    const rows = await sbFetch("/profiles?select=id,name,email,role,cws_access,machine_id,avatar,created_at,updated_at,active&order=name");
    // Convert snake_case → camelCase so client gets cwsAccess, machineId etc.
    res.json(Array.isArray(rows) ? rows.map(toCamel) : rows);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post("/api/users", auth, requireRoles("sudo","admin","md"), async (req, res) => {
  const { name, email, password, role, cwsAccess, machineId, avatar } = req.body || {};
  try {
    const authUser = await sbAuth("/admin/users", {
      email, password: password || "changeme123",
      email_confirm: true,
      user_metadata: { name, role, avatar: avatar || (name||"?").slice(0,2).toUpperCase() },
    });
    await sbFetch("/profiles", {
      method: "POST",
      body: JSON.stringify({
        id: authUser.id, name, email, role: role || "clerk",
        cws_access: cwsAccess || [], machine_id: machineId || null,
        avatar: avatar || (name||"?").slice(0,2).toUpperCase(), active: true,
      }),
    });
    res.json({ ok: true, id: authUser.id });
  } catch (e) { res.status(400).json({ error: e.message }); }
});

app.put("/api/users/:id", auth, async (req, res) => {
  if (req.user.id !== req.params.id && !["sudo","admin","md"].includes(req.user.role))
    return res.status(403).json({ error: "Forbidden" });

  const { name, role, cwsAccess, machineId, avatar, active, email, password } = req.body || {};
  const paramId = req.params.id;

  try {
    const payload = {
      ...(name       != null && { name }),
      ...(role       != null && { role }),
      ...(cwsAccess  != null && { cws_access: cwsAccess }),
      ...(machineId  != null && { machine_id: machineId }),
      ...(avatar     != null && { avatar }),
      ...(active     != null && { active }),
      updated_at: new Date().toISOString(),
    };

    // Resolve the Supabase auth UUID — needed to update the password in Auth
    let resolvedId = null;

    const isUUID = /^[0-9a-f-]{36}$/i.test(paramId);
    if (isUUID) {
      resolvedId = paramId;
    } else if (email) {
      // Seed user — look up their Supabase UUID by email
      const existing = await sbFetch(`/profiles?email=eq.${encodeURIComponent(email)}&select=id`);
      if (!existing || existing.length === 0)
        return res.status(404).json({ error: "Profile not found — use POST /api/seed-profiles first" });
      resolvedId = existing[0].id;
    } else {
      return res.status(400).json({ error: "Cannot identify user — provide UUID or email" });
    }

    // 1. Update the profile table (name, role, cws_access, etc.)
    await sbFetch(`/profiles?id=eq.${resolvedId}`, { method: "PATCH", body: JSON.stringify(payload) });

    // 2. If a new password was provided, update it in Supabase Auth as well.
    //    Without this step, the old password keeps working on any machine that
    //    pulls credentials fresh from the server.
    if (password && password.trim().length >= 6) {
      await sbAuth(`/admin/users/${resolvedId}`, { password: password.trim() }, "PUT");
    }

    return res.json({ ok: true, supabaseId: resolvedId });
  } catch (e) { res.status(400).json({ error: e.message }); }
});

// ── Generic CRUD (all 20+ resource tables) ────────────────────────────
// Each table maps directly to a Supabase table. We proxy the request
// so the frontend doesn't need the service-role key.
const TABLES = [
  "cws","farmers","seasons","station_seasons","cherry","cashbook",
  "bank_transactions","expenses","debts","stock","fund_requests",
  "warehouse_stock","projects","project_costs","milestones","contractors",
  "machines","assistants","tasks","mach_tx","driver_logs","leaves",
];

// ── Case conversion helpers ───────────────────────────────────────────
// toSnake: client camelCase → Supabase snake_case  (used in /api/sync)
// toCamel: Supabase snake_case → client camelCase  (used in /api/pull, /api/users)
function toSnake(obj) {
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) return obj;
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    const snake = k.replace(/([A-Z])/g, m => "_" + m.toLowerCase());
    out[snake] = v;
  }
  return out;
}
function toCamel(obj) {
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) return obj;
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    const camel = k.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
    out[camel] = v;
  }
  return out;
}

TABLES.forEach(table => {
  const route = `/api/${table.replace(/_/g, "-")}`;

  // GET all (with optional ?since= delta filter)
  app.get(route, auth, async (req, res) => {
    try {
      const { since } = req.query;
      const filter = since ? `&updated_at=gte.${encodeURIComponent(since)}` : "";
      const rows = await sbFetch(`/${table}?order=updated_at${filter}`);
      res.json(rows);
    } catch (e) { res.status(500).json({ error: e.message }); }
  });

  // GET by id
  app.get(`${route}/:id`, auth, async (req, res) => {
    try {
      const rows = await sbFetch(`/${table}?id=eq.${req.params.id}`);
      if (!rows.length) return res.status(404).json({ error: "Not found" });
      res.json(rows[0]);
    } catch (e) { res.status(500).json({ error: e.message }); }
  });

  // POST (upsert)
  app.post(route, auth, async (req, res) => {
    try {
      const data = { ...req.body, updated_at: new Date().toISOString() };
      if (!data.id) return res.status(400).json({ error: "id required" });
      await sbFetch(`/${table}`, {
        method:  "POST",
        prefer:  "resolution=merge-duplicates,return=minimal",
        body:    JSON.stringify(data),
      });
      await logAudit(req.user.id, "SAVE", table, data.id, data);
      res.json({ ok: true, id: data.id });
    } catch (e) { res.status(400).json({ error: e.message }); }
  });

  // PATCH
  app.put(`${route}/:id`, auth, async (req, res) => {
    try {
      const data = { ...req.body, updated_at: new Date().toISOString() };
      delete data.id;
      await sbFetch(`/${table}?id=eq.${req.params.id}`, {
        method: "PATCH",
        body:   JSON.stringify(data),
      });
      await logAudit(req.user.id, "UPDATE", table, req.params.id, data);
      res.json({ ok: true });
    } catch (e) { res.status(400).json({ error: e.message }); }
  });

  // DELETE
  app.delete(`${route}/:id`, auth, async (req, res) => {
    try {
      await sbFetch(`/${table}?id=eq.${req.params.id}`, { method: "DELETE" });
      await logAudit(req.user.id, "DELETE", table, req.params.id, null);
      res.json({ ok: true });
    } catch (e) { res.status(500).json({ error: e.message }); }
  });
});

// ── Batch Sync (offline mutations) ───────────────────────────────────
// Replaces the old SQLite transaction. Each op is upserted into Supabase.
// Supabase Realtime will broadcast the changes to other connected clients.
app.post("/api/sync", auth, async (req, res) => {
  const { operations } = req.body || {};
  if (!Array.isArray(operations))
    return res.status(400).json({ error: "operations[] required" });

  const results = [];
  for (const op of operations) {
    const { table, method, id, data } = op;
    if (!TABLES.includes(table)) {
      results.push({ id, ok: false, error: `Unknown table: ${table}` });
      continue;
    }
    try {
      if (method === "DELETE") {
        await sbFetch(`/${table}?id=eq.${id}`, { method: "DELETE" });
      } else {
        // Convert camelCase → snake_case so fields like cwsId, createdAt,
        // gnrNumber etc. match the actual Supabase column names.
        const snakeData = toSnake({ ...data, updated_at: new Date().toISOString() });
        await sbFetch(`/${table}`, {
          method:  "POST",
          prefer:  "resolution=merge-duplicates,return=minimal",
          body:    JSON.stringify(snakeData),
        });
      }
      await logAudit(req.user.id, method, table, id, data);
      results.push({ id, ok: true });
    } catch (e) {
      console.error(`[sync] ${method} ${table} ${id} failed:`, e.message || e);
      results.push({ id, ok: false, error: e.message || String(e) });
    }
  }

  const failed = results.filter(r => !r.ok);
  if (failed.length) console.warn(`[sync] ${failed.length} op(s) failed:`, failed);
  res.json({ ok: true, synced: results.filter(r => r.ok).length, results });
});

// ── Delta Pull ────────────────────────────────────────────────────────
// Fetch all rows for a table past Supabase's 1000-row default limit
// by paginating with Range headers until a page returns fewer than PAGE_SIZE rows.
async function fetchAllRows(table, since) {
  const PAGE_SIZE = 1000;
  const sinceFilter = `updated_at=gte.${encodeURIComponent(since)}`;
  const all = [];
  let offset = 0;
  while (true) {
    const rows = await sbFetch(
      `/${table}?${sinceFilter}&order=updated_at&limit=${PAGE_SIZE}&offset=${offset}`
    );
    if (!Array.isArray(rows) || rows.length === 0) break;
    all.push(...rows);
    if (rows.length < PAGE_SIZE) break; // last page
    offset += PAGE_SIZE;
  }
  return all;
}

app.get("/api/pull", async (req, res) => {
  const since  = req.query.since || "1970-01-01T00:00:00.000Z";
  const delta  = {};
  await Promise.all(TABLES.map(async t => {
    try {
      const rows = await fetchAllRows(t, since);
      // Convert snake_case column names → camelCase for the client
      delta[t] = rows.map(toCamel);
    } catch { delta[t] = []; }
  }));
  res.json({ since, pulledAt: new Date().toISOString(), delta });
});

// ── System Config ─────────────────────────────────────────────────────
app.get("/api/system", async (req, res) => {
  try {
    const rows = await sbFetch("/system_config?select=key,value");
    const cfg  = {};
    rows.forEach(r => { try { cfg[r.key] = JSON.parse(r.value); } catch { cfg[r.key] = r.value; } });
    res.json(cfg);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put("/api/system", auth, requireRoles("sudo"), async (req, res) => {
  try {
    const rows = Object.entries(req.body).map(([key, value]) => ({
      key, value: JSON.stringify(value), updated_at: new Date().toISOString(),
    }));
    await sbFetch("/system_config", {
      method: "POST",
      prefer: "resolution=merge-duplicates,return=minimal",
      body:   JSON.stringify(rows),
    });
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ── Audit Log ─────────────────────────────────────────────────────────
app.get("/api/audit", auth, requireRoles("sudo","md","admin"), async (req, res) => {
  try {
    const { table, limit = 500 } = req.query;
    const filter = table ? `&table_name=eq.${table}` : "";
    const rows = await sbFetch(`/audit_log?order=created_at.desc&limit=${limit}${filter}`);
    res.json(rows);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

async function logAudit(userId, action, table, recordId, payload) {
  try {
    await sbFetch("/audit_log", {
      method:  "POST",
      prefer:  "return=minimal",
      body:    JSON.stringify({ user_id: userId, action, table_name: table, record_id: recordId, payload: payload ? JSON.stringify(payload) : null }),
    });
  } catch {}
}

// ── Seed profiles from frontend INIT_USERS ───────────────────────────
// Called once by the frontend to push seed users into Supabase profiles table.
// Only sudo can call this.
app.post("/api/seed-profiles", auth, requireRoles("sudo"), async (req, res) => {
  const { users } = req.body || {};
  if (!Array.isArray(users)) return res.status(400).json({ error: "users[] required" });
  const results = [];
  for (const u of users) {
    try {
      // Check if profile already exists
      const existing = await sbFetch(`/profiles?email=eq.${encodeURIComponent(u.email)}&select=id`);
      if (existing && existing.length > 0) {
        // Update existing profile
        await sbFetch(`/profiles?id=eq.${existing[0].id}`, {
          method: "PATCH",
          body: JSON.stringify({
            name:       u.name,
            role:       u.role,
            cws_access: u.cwsAccess || [],
            machine_id: u.machineId || null,
            avatar:     u.avatar || u.name.slice(0,2).toUpperCase(),
            active:     u.active !== false,
            updated_at: new Date().toISOString(),
          }),
        });
        results.push({ email: u.email, ok: true, action: "updated" });
      } else {
        // Create auth user + profile
        try {
          const authUser = await sbAuth("/admin/users", {
            email: u.email,
            password: u.password || "changeme123",
            email_confirm: true,
            user_metadata: { name: u.name, role: u.role, avatar: u.avatar || u.name.slice(0,2).toUpperCase() },
          });
          await sbFetch("/profiles", {
            method: "POST",
            body: JSON.stringify({
              id:         authUser.id,
              name:       u.name,
              email:      u.email,
              role:       u.role,
              cws_access: u.cwsAccess || [],
              machine_id: u.machineId || null,
              avatar:     u.avatar || u.name.slice(0,2).toUpperCase(),
              active:     true,
            }),
          });
          results.push({ email: u.email, ok: true, action: "created" });
        } catch (authErr) {
          // Auth user may already exist — try just upserting profile
          results.push({ email: u.email, ok: false, error: authErr.message });
        }
      }
    } catch (e) {
      results.push({ email: u.email, ok: false, error: e.message });
    }
  }
  res.json({ ok: true, results });
});


// ── Chat Rooms & Messages ─────────────────────────────────────────────
// Rooms are stored in the "chat_rooms" table, messages in "chat_messages".
// Auto-generated rooms (CWS stations, HQ General) are built client-side;
// only custom rooms created by md/admin are persisted here.

// GET /api/chat/rooms — list custom rooms the user is a member of
app.get("/api/chat/rooms", auth, async (req, res) => {
  try {
    const r = await sbFetch("chat_rooms?select=*&order=created_at.asc");
    if (!r.ok) return res.json([]);
    const rows = await r.json();
    // Only return rooms where the user is a member (or user is sudo/md/admin)
    const isAdmin = ["sudo","md","admin"].includes(req.user.role);
    const filtered = rows.filter(room => {
      const members = room.member_ids || room.memberIds || [];
      return isAdmin || members.includes(req.user.id);
    });
    res.json(filtered);
  } catch(e) { res.json([]); }
});

// POST /api/chat/rooms — create a new custom room
app.post("/api/chat/rooms", auth, async (req, res) => {
  try {
    const { id, name, icon, type, color, memberIds, member_ids, createdBy } = req.body;
    const payload = {
      id: id || require("crypto").randomUUID(),
      name, icon: icon || "💬", type: type || "custom", color: color || "#9A5EE0",
      member_ids: memberIds || member_ids || [],
      created_by: createdBy || req.user.id,
      created_at: new Date().toISOString(),
    };
    const r = await sbFetch("chat_rooms", { method: "POST", body: JSON.stringify(payload) });
    res.status(r.ok ? 201 : 400).json(r.ok ? payload : { error: "Failed to create room" });
  } catch(e) { res.status(500).json({ error: e.message }); }
});

// PUT /api/chat/rooms/:id — update room members
app.put("/api/chat/rooms/:id", auth, async (req, res) => {
  try {
    const { memberIds, member_ids } = req.body;
    const payload = { member_ids: memberIds || member_ids };
    const r = await sbFetch(`chat_rooms?id=eq.${req.params.id}`, { method: "PATCH", body: JSON.stringify(payload) });
    res.status(r.ok ? 200 : 400).json({ ok: r.ok });
  } catch(e) { res.status(500).json({ error: e.message }); }
});

// DELETE /api/chat/rooms/:id — delete a room and its messages
app.delete("/api/chat/rooms/:id", auth, requireRoles("sudo","md","admin"), async (req, res) => {
  try {
    await sbFetch(`chat_messages?room_id=eq.${req.params.id}`, { method: "DELETE" });
    const r = await sbFetch(`chat_rooms?id=eq.${req.params.id}`, { method: "DELETE" });
    res.json({ ok: r.ok });
  } catch(e) { res.status(500).json({ error: e.message }); }
});

// GET /api/chat/rooms/:id/messages — last N messages
app.get("/api/chat/rooms/:id/messages", auth, async (req, res) => {
  try {
    const limit = Math.min(parseInt(req.query.limit || "100"), 200);
    const r = await sbFetch(`chat_messages?room_id=eq.${req.params.id}&order=created_at.asc&limit=${limit}`);
    if (!r.ok) return res.json([]);
    const rows = await r.json();
    res.json(rows.map(m => ({
      id: m.id, roomId: m.room_id, senderId: m.sender_id,
      senderName: m.sender_name, senderRole: m.sender_role,
      senderAvatar: m.sender_avatar, text: m.text,
      ts: new Date(m.created_at).getTime(), createdAt: m.created_at,
    })));
  } catch(e) { res.json([]); }
});

// POST /api/chat/rooms/:id/messages — save a message
app.post("/api/chat/rooms/:id/messages", auth, async (req, res) => {
  try {
    const { id, senderId, senderName, senderRole, senderAvatar, text, ts } = req.body;
    const payload = {
      id: id || require("crypto").randomUUID(),
      room_id: req.params.id,
      sender_id: senderId || req.user.id,
      sender_name: senderName || req.user.name,
      sender_role: senderRole || req.user.role,
      sender_avatar: senderAvatar || "",
      text,
      created_at: ts ? new Date(ts).toISOString() : new Date().toISOString(),
    };
    const r = await sbFetch("chat_messages", { method: "POST", body: JSON.stringify(payload) });
    res.status(r.ok ? 201 : 400).json({ ok: r.ok });
  } catch(e) { res.status(500).json({ error: e.message }); }
});

// ── Health ────────────────────────────────────────────────────────────
app.get("/api/health", (_, res) => res.json({ ok: true, version: "2.0.0", db: "supabase", time: new Date().toISOString() }));

// ── Serve PWA static files ────────────────────────────────────────────
app.use(express.static(PUBLIC_DIR, {
  setHeaders(res, filePath) {
    if (filePath.endsWith("sw.js") || filePath.endsWith("manifest.json")) {
      res.setHeader("Cache-Control", "no-cache");
      if (filePath.endsWith("sw.js")) res.setHeader("Service-Worker-Allowed", "/");
    } else if (filePath.endsWith(".js")) {
      res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    }
  }
}));

app.get("*", (_, res) => res.sendFile(path.join(PUBLIC_DIR, "index.html")));

// ── Start ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n  ╔═══════════════════════════════════╗`);
  console.log(`  ║  Bender Exports — Supabase Ready  ║`);
  console.log(`  ╠═══════════════════════════════════╣`);
  console.log(`  ║  http://localhost:${PORT}             ║`);
  console.log(`  ║  DB: Supabase PostgreSQL           ║`);
  console.log(`  ║  Auth: Supabase Auth               ║`);
  console.log(`  ╚═══════════════════════════════════╝\n`);
});
