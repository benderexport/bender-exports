// Run this ONCE on your local machine (NOT on Railway):
//   node seed_users.js
//
// Reads credentials from .env — never hardcode keys in this file.
// Requires Node >= 18 (uses global fetch).

// ── Node version guard ───────────────────────────────────────────────
const [major] = process.versions.node.split(".").map(Number);
if (major < 18) {
  console.error(`\n  ❌  Node ${process.versions.node} detected — Node 18+ is required (for global fetch).\n`);
  process.exit(1);
}

require("dotenv").config();   // loads .env automatically

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_KEY  = process.env.SUPABASE_SERVICE_KEY;

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error("\n  ❌  Missing env vars. Make sure .env contains SUPABASE_URL and SUPABASE_SERVICE_KEY.\n");
  process.exit(1);
}

const USERS = [
  { email: "sudo@bender.rw",          password: "sudo123",   name: "Jean Pierre Habimana", role: "sudo",            cwsAccess: [],                                avatar: "JP" },
  { email: "md@bender.rw",            password: "md123",     name: "Marie Claire Uwimana", role: "md",              cwsAccess: [],                                avatar: "MC" },
  { email: "admin@bender.rw",         password: "admin123",  name: "Patrick Nzabonimpa",   role: "admin",           cwsAccess: [],                                avatar: "PN" },
  { email: "hqfin@bender.rw",         password: "fin123",    name: "Grace Ingabire",       role: "hq_finance",      cwsAccess: [],                                avatar: "GI" },
  { email: "hqacc@bender.rw",         password: "hqacc123",  name: "Claudine Umuhoza",     role: "hq_accountant",   cwsAccess: [],                                avatar: "CU" },
  { email: "hqop@bender.rw",          password: "hqop123",   name: "Samuel Bizimana",      role: "hq_ops",          cwsAccess: [],                                avatar: "SB" },
  { email: "mgr.musaza@bender.rw",    password: "mgr123",    name: "Alice Mutesi",         role: "station_manager", cwsAccess: ["cws1"],                          avatar: "AM" },
  { email: "mgr.nyungwe@bender.rw",   password: "mgr123",    name: "Robert Nkusi",         role: "station_manager", cwsAccess: ["cws2"],                          avatar: "RN" },
  { email: "mgr.nyarubaka@bender.rw", password: "mgr123",    name: "Eric Habimana",        role: "station_manager", cwsAccess: ["cws3"],                          avatar: "EH" },
  { email: "cash.musaza@bender.rw",   password: "cash123",   name: "Diane Uwase",          role: "cashier",         cwsAccess: ["cws1"],                          avatar: "DU" },
  { email: "cash.nyungwe@bender.rw",  password: "cash123",   name: "Sandrine Mukamana",    role: "cashier",         cwsAccess: ["cws2"],                          avatar: "SM" },
  { email: "cash.nyarubaka@bender.rw",password: "cash123",   name: "Thierry Nkurunziza",   role: "cashier",         cwsAccess: ["cws3"],                          avatar: "TN" },
  { email: "clerk.musaza@bender.rw",  password: "clerk123",  name: "Celestin Hategeka",    role: "clerk",           cwsAccess: ["cws1"],                          avatar: "CH" },
  { email: "clerk.nyungwe@bender.rw", password: "clerk123",  name: "Yvonne Uwera",         role: "clerk",           cwsAccess: ["cws2"],                          avatar: "YU" },
  { email: "clerk.nyarubaka@bender.rw",password:"clerk123",  name: "Pacifique Nkurunziza", role: "clerk",           cwsAccess: ["cws3"],                          avatar: "PN" },
  { email: "driver1@bender.rw",       password: "drv123",    name: "Claude Niyomugabo",    role: "driver",          cwsAccess: [],                                avatar: "CN" },
  { email: "driver2@bender.rw",       password: "drv123",    name: "Théophile Gasana",     role: "driver",          cwsAccess: [],                                avatar: "TG" },
];

const headers = {
  "Content-Type":  "application/json",
  "Authorization": `Bearer ${SERVICE_KEY}`,
  "apikey":        SERVICE_KEY,
};

async function createUser(u) {
  // 1. Create in Supabase Auth
  const authRes = await fetch(`${SUPABASE_URL}/auth/v1/admin/users`, {
    method:  "POST",
    headers,
    body: JSON.stringify({
      email:          u.email,
      password:       u.password,
      email_confirm:  true,
      user_metadata:  { name: u.name, role: u.role, avatar: u.avatar },
    }),
  });

  const authData = await authRes.json();

  if (!authRes.ok) {
    // User might already exist — try to find them
    if (authData.message?.includes("already") || authData.code === "email_exists") {
      console.log(`  ⚠  ${u.email} already exists in Auth — updating profile only`);
      // Get existing user id
      const listRes = await fetch(
        `${SUPABASE_URL}/auth/v1/admin/users?email=${encodeURIComponent(u.email)}`,
        { headers }
      );
      const list = await listRes.json();
      const existing = list.users?.[0];
      if (!existing) { console.log(`  ❌ Could not find ${u.email}`); return; }
      await upsertProfile(existing.id, u);
      return;
    }
    console.log(`  ❌ Auth failed for ${u.email}:`, authData.message || JSON.stringify(authData));
    return;
  }

  const userId = authData.id;
  console.log(`  ✓  Auth user created: ${u.email} → ${userId}`);

  // 2. Upsert profile
  await upsertProfile(userId, u);
}

async function upsertProfile(userId, u) {
  const profRes = await fetch(`${SUPABASE_URL}/rest/v1/profiles`, {
    method:  "POST",
    headers: { ...headers, "Prefer": "resolution=merge-duplicates,return=minimal" },
    body: JSON.stringify({
      id:         userId,
      name:       u.name,
      email:      u.email,
      role:       u.role,
      cws_access: u.cwsAccess,
      machine_id: null,
      avatar:     u.avatar,
      active:     true,
    }),
  });

  if (profRes.ok || profRes.status === 204) {
    console.log(`  ✓  Profile upserted: ${u.email} (${u.role})`);
  } else {
    const err = await profRes.text();
    console.log(`  ❌ Profile failed for ${u.email}:`, err);
  }
}

(async () => {
  console.log("═══════════════════════════════════════");
  console.log("  Bender Exports — Supabase User Seed ");
  console.log("═══════════════════════════════════════\n");

  for (const u of USERS) {
    process.stdout.write(`Creating ${u.email}...\n`);
    await createUser(u);
  }

  console.log("\n═══════════════════════════════════════");
  console.log("  Done! Check results above.");
  console.log("  If any failed, run the script again.");
  console.log("═══════════════════════════════════════");
})();
