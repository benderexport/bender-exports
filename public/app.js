const C = {
  // Base
  bg:       "#0A0F0A",
  bgCard:   "#111714",
  bgDeep:   "#0D1210",
  surface:  "#161E17",
  surfaceHover: "#1C2720",
  // Borders
  border:      "#1F2E21",
  borderLight: "#2A3E2C",
  borderGlow:  "#C8A84B30",
  // Text
  text:      "#EDF2ED",
  textMuted: "#7A9A7C",
  textDim:   "#3E5C40",
  // Brand gold
  gold:      "#C8A84B",
  goldLight: "#E4C46A",
  goldDim:   "#7A6020",
  goldGlow:  "#C8A84B20",
  // Coffee / Cherry
  coffee:    "#C4793C",
  coffeeLight:"#E8965A",
  coffeeBg:  "#1A0E06",
  // Machinery
  machinery:     "#4A8EC8",
  machineryLight:"#6AAEE8",
  machineryBg:   "#060F1A",
  // Construction
  construction:      "#9A6A30",
  constructionLight: "#C8903E",
  constructionBg:    "#1A1006",
  // Semantic
  danger:      "#E05050",
  dangerLight: "#F07070",
  dangerBg:    "#1A0808",
  success:     "#4EC866",
  successBg:   "#081A0C",
  warning:     "#E0A030",
  warningLight:"#F0C050",
  warningBg:   "#1A1208",
  info:        "#4A98E0",
  infoBg:      "#080F1A",
  purple:      "#9A5EE0",
  purpleLight: "#BA80F8",
  purpleBg:    "#100816",
  // Gradients (used as strings)
  gradSidebar: "linear-gradient(180deg,#0E1A0F 0%,#0A0F0A 100%)",
  gradGold:    "linear-gradient(135deg,#C8A84B,#E4C46A)",
  gradCard:    "linear-gradient(145deg,#141C15,#111714)",
};
const FONT = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Cormorant:wght@400;600;700&display=swap');`;
const GS = `${FONT}
*{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{font-family:'Inter',sans-serif;background:${C.bg};color:${C.text};overflow:auto;-webkit-font-smoothing:antialiased;}
/* Scrollbar */
::-webkit-scrollbar{width:4px;height:4px;}
::-webkit-scrollbar-track{background:transparent;}
::-webkit-scrollbar-thumb{background:${C.border};border-radius:10px;}
::-webkit-scrollbar-thumb:hover{background:${C.borderLight};}
/* Animations */
@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.35}}
@keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
@keyframes slideIn{from{transform:translateX(-100%);opacity:0}to{transform:translateX(0);opacity:1}}
@keyframes scaleIn{from{transform:scale(.95);opacity:0}to{transform:scale(1);opacity:1}}
/* Typography */
input,select,textarea,button{font-family:'Inter',sans-serif;}
/* Layout helpers */
.tbl-wrap{overflow-x:auto;-webkit-overflow-scrolling:touch;}
.kpi-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:14px;}
.two-col{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
.three-col{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:14px;}
/* Card hover lift */
.card-hover{transition:transform .2s ease,box-shadow .2s ease,border-color .2s ease;}
.card-hover:hover{transform:translateY(-2px);box-shadow:0 8px 32px rgba(0,0,0,.4);}
/* Nav item */
.nav-item{transition:all .18s ease;border-radius:10px;cursor:pointer;}
.nav-item:hover{background:${C.surfaceHover};}
.nav-item.active{background:linear-gradient(135deg,${C.gold}22,${C.gold}0A);border:1px solid ${C.gold}30;}
/* Button base */
.btn{display:inline-flex;align-items:center;gap:6px;border:none;cursor:pointer;font-family:'Inter',sans-serif;font-weight:600;border-radius:8px;transition:all .18s ease;}
.btn:hover{filter:brightness(1.1);transform:translateY(-1px);}
.btn:active{transform:translateY(0);}
/* Table row */
.tbl-row{transition:background .12s;}
.tbl-row:hover{background:${C.surfaceHover}!important;}
/* Input focus */
.inp:focus{border-color:${C.gold}!important;box-shadow:0 0 0 3px ${C.gold}15;}
/* Badge */
.badge{display:inline-flex;align-items:center;padding:3px 9px;border-radius:20px;font-size:10px;font-weight:700;letter-spacing:.3px;}
/* Responsive */
@media(max-width:768px){
  .two-col{grid-template-columns:1fr!important;}
  .hide-mobile{display:none!important;}
  .show-mobile{display:flex!important;}
  .main-content{margin-left:0!important;}
  .page-pad{padding:14px!important;}
  .topbar-title{font-size:16px!important;}
  .kpi-grid{grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:10px;}
}
@media(min-width:769px){
  .show-mobile{display:none!important;}
}`;
const Ctx = createContext(null);
const useApp = () => useContext(Ctx);
// ── Seed data removed — Supabase is the only source of truth ────────
// All data is pulled from Supabase on boot. Nothing is hardcoded here.
// To add initial data, use seed_users.js or insert directly in Supabase.
const INIT_CWS             = [];
const INIT_FARMERS         = [];
const INIT_CHERRY          = [];
const INIT_CASHBOOK        = [];
const INIT_BANK            = [];
const INIT_EXPENSES        = [];
const INIT_DEBTS           = [];
const INIT_STOCK           = [];
const INIT_FUND_REQUESTS   = [];
const INIT_MACHINES        = [];
const INIT_ASSISTANTS      = [];
const INIT_TASKS           = [];
const INIT_MACH_TX         = [];
const INIT_DRIVER_LOGS     = [];
const INIT_LEAVES          = [];
const INIT_SEASONS         = [];
const INIT_STATION_SEASONS = [];
const INIT_WAREHOUSE_STOCK = [];
const INIT_PROJECTS        = [];
const INIT_PROJECT_COSTS   = [];
const INIT_MILESTONES      = [];
const INIT_CONTRACTORS     = [];
const INIT_USERS           = [];
const INIT_PENDING = [];
const INIT_SYSTEM = {
  logoUrl: null,
  heroImageUrl: "",
  companyName: "Bender Exports Ltd.",
  tagline: "Integrated Financial Management \xB7 Kigali, Rwanda",
  labels: { coffee: "Bender Coffee", machinery: "Bender Machine", construction: "Bender Construction" },
  businessModels: [
    { id: "coffee", label: "Bender Coffee", icon: "\u2615", active: true },
    { id: "machinery", label: "Bender Machine", icon: "\u{1F3D7}\uFE0F", active: true },
    { id: "construction", label: "Bender Construction", icon: "\u{1F3DB}\uFE0F", active: true }
  ]
};
const ROLES = {
  sudo: { label: "Super Admin", color: C.purple, light: C.purpleLight, priority: 10 },
  md: { label: "Managing Director", color: C.gold, light: C.goldLight, priority: 9 },
  admin: { label: "Administrator", color: C.info, light: "#68A8E8", priority: 8 },
  hq_finance: { label: "HQ Finance Officer", color: C.warning, light: C.warningLight, priority: 7 },
  hq_accountant: { label: "HQ Accountant", color: "#5A8A6A", light: "#7ABAA0", priority: 7 },
  hq_ops: { label: "HQ Ops Manager", color: "#7A5AC8", light: "#9A7AE8", priority: 6 },
  station_manager: { label: "Station Manager", color: C.coffee, light: C.coffeeLight, priority: 5 },
  cashier: { label: "Cashier", color: C.success, light: "#78D890", priority: 4 },
  clerk: { label: "Clerk", color: "#7AAABB", light: "#9ACADB", priority: 3 },
  driver: { label: "Driver", color: C.machinery, light: C.machineryLight, priority: 2 }
};
const HQ_ROLES = ["sudo", "md", "admin", "hq_finance", "hq_accountant", "hq_ops"];
const WAREHOUSE_ROLES = ["sudo", "md", "admin", "hq_finance", "hq_accountant", "hq_ops"];
const STATION_ROLES = ["station_manager", "cashier", "clerk"];
const hasAccess = (u, sec) => {
  const map = {
    coffee: ["sudo", "md", "admin", "hq_finance", "hq_accountant", "hq_ops", "station_manager", "cashier", "clerk"],
    machinery: ["sudo", "md", "admin", "hq_finance", "hq_accountant", "hq_ops", "driver"],
    construction: ["sudo", "md", "admin", "hq_finance", "hq_accountant", "hq_ops"],
    warehouse: ["sudo", "md", "admin", "hq_finance", "hq_accountant", "hq_ops", "station_manager"],
    users: ["sudo", "md"],
    import: ["sudo", "md", "admin", "hq_finance", "hq_accountant", "hq_ops"],
    system: ["sudo"],
    reports: ["sudo", "md", "admin", "hq_finance", "hq_accountant", "hq_ops", "station_manager", "cashier"],
    driver_log: ["driver"],
    fund_requests: ["sudo", "md", "admin", "hq_finance", "hq_accountant", "hq_ops", "station_manager"]
  };
  return (map[sec] || []).includes(u.role);
};
const canApproveFunds = (r) => ["sudo", "md"].includes(r);
const canVerifyFunds = (r) => ["sudo", "md", "hq_ops"].includes(r);
const canManageCash = (r) => ["sudo", "md", "hq_finance", "cashier"].includes(r);
const canEnterCherry = (r) => ["clerk", "sudo", "md", "admin"].includes(r);
const canPayGNR = (r) => ["cashier", "sudo", "md", "admin"].includes(r);
const canRecordExpense = (r) => ["cashier", "sudo", "md", "admin", "hq_finance"].includes(r);
const canApproveExpense = (r) => ["station_manager", "sudo", "md", "admin", "hq_finance"].includes(r);
const canRegisterFarmer = (r) => ["station_manager", "sudo", "md", "admin"].includes(r);
const canRequestFunds = (r) => ["station_manager", "sudo", "md", "admin"].includes(r);
const canManageSeason = (r) => ["md", "sudo"].includes(r);
const canSeeSeasonReports = (r) => ["sudo", "md", "admin", "hq_finance", "hq_accountant", "hq_ops", "station_manager"].includes(r);
const canSendToWarehouse = (r) => ["station_manager", "sudo", "md", "admin"].includes(r);
const canConfirmWarehouse = (r) => ["sudo", "md", "admin", "hq_finance", "hq_accountant", "hq_ops"].includes(r);
const canManageConstruction = (r) => ["sudo", "md", "admin", "hq_finance", "hq_ops"].includes(r);
const canSeeAllStations = (r) => HQ_ROLES.includes(r) || ["admin"].includes(r);
const fmtRWF = (n) => `${Number(n || 0).toLocaleString()} RWF`;
const fmtKg = (n) => `${Number(n || 0).toLocaleString()} kg`;
const today = () => (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
const BtnS = (color, ghost = false, outline = false) => ({
  display: "inline-flex", alignItems: "center", gap: 6,
  border: "none", borderRadius: 10, cursor: "pointer",
  fontWeight: 600, fontFamily: "'Inter',sans-serif",
  fontSize: 13, transition: "all .18s ease",
  ...(ghost
    ? { background: `${color}15`, color, border: `1px solid ${color}28` }
    : outline
    ? { background: "transparent", color, border: `1px solid ${color}40` }
    : { background: `linear-gradient(135deg,${color},${color}CC)`, color: "#0A0F0A", boxShadow: `0 4px 14px ${color}30` })
});
const selS = () => ({
  width: "100%", padding: "10px 13px",
  background: "linear-gradient(145deg,#0D1210,#111714)",
  border: `1.5px solid ${C.border}`, borderRadius: 10,
  color: C.text, fontSize: 13, outline: "none",
  cursor: "pointer", transition: "border-color .15s",
  appearance: "none", WebkitAppearance: "none",
});
// ── Service Worker bridge ────────────────────────────────────────────
// Sends the current auth token (and flush signal) to the service worker
// so it can authorise background syncs while the tab is closed/inactive.
function swNotify(type, extra = {}) {
  try {
    const sw = navigator.serviceWorker?.controller;
    if (!sw) return;
    sw.postMessage({ type, ...extra });
  } catch (e) {
    console.warn("[Bender] swNotify failed:", e.message);
  }
}

// ── UUID generator ────────────────────────────────────────────────────
// Uses the browser's crypto API to generate RFC-4122 v4 UUIDs.
// Supabase requires proper UUIDs for all primary keys — Date.now() strings
// like "s1234567" are rejected by UUID columns and silently fail to save.
const uid = () => typeof crypto !== "undefined" && crypto.randomUUID
  ? crypto.randomUUID()
  : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
    });

// Global authenticated fetch — attaches Bearer token from localStorage automatically
const apiFetch = async (path, opts = {}) => {
  const token = localStorage.getItem("bender_token");
  const res = await fetch(path, {
    ...opts,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { "Authorization": `Bearer ${token}` } : {}),
      ...(opts.headers || {})
    }
  });
  if (res.status === 401) {
    // Try to refresh the token before giving up
    const refresh = localStorage.getItem("bender_refresh");
    if (refresh) {
      try {
        const rfRes = await fetch("/api/auth/refresh", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refresh_token: refresh }),
        });
        if (rfRes.ok) {
          const rfData = await rfRes.json();
          localStorage.setItem("bender_token", rfData.token);
          if (rfData.refresh_token) localStorage.setItem("bender_refresh", rfData.refresh_token);
          // Keep the service worker token in sync with the refreshed token
          swNotify("SET_TOKEN", { token: rfData.token });
          // Retry original request with new token
          return fetch(path, {
            ...opts,
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${rfData.token}`,
              ...(opts.headers || {}),
            },
          });
        }
      } catch (_) {}
    }
    localStorage.removeItem("bender_token");
    localStorage.removeItem("bender_refresh");
    window.location.reload();
  }
  return res;
};
const EXPENSE_CATS = ["Wages", "Energy", "Travelling", "Packaging", "Communication", "Materials", "Bank Charges", "Donations", "Rent", "Transport", "Legal Fees", "Other"];
const PAYMENT_METHODS = ["cash", "mobile_money", "bank_transfer", "cheque"];
const TABLES = [
  "cws",
  "farmers",
  "cherry",
  "cashbook",
  "bank",
  "expenses",
  "debts",
  "stock",
  "fund_requests",
  "warehouse",
  "projects",
  "project_costs",
  "milestones",
  "contractors",
  "machines",
  "assistants",
  "tasks",
  "mach_tx",
  "driver_logs",
  "leaves",
  "seasons",
  "station_seasons",
  "users",
  "system"
];
const SEED_VERSION = "bender-v1"; // bump this only to force a one-time localStorage wipe
const DB = {
  async load(table) {
    try {
      const v = localStorage.getItem("db:" + table);
      return v ? JSON.parse(v) : null;
    } catch (e) { return null; }
  },
  async save(table, data) {
    try {
      localStorage.setItem("db:" + table, JSON.stringify(data));
      return true;
    } catch (e) { console.error("DB save error", table, e); return false; }
  },
  async loadAll() {
    const result = {};
    await Promise.all(TABLES.map(async (t) => {
      const d = await DB.load(t);
      if (d !== null) result[t] = d;
    }));
    return result;
  },
  async saveAll(state) {
    await Promise.all(TABLES.map(async (t) => {
      if (state[t] !== void 0) await DB.save(t, state[t]);
    }));
  },
  async isSeeded() {
    try { return localStorage.getItem("db:seeded") === SEED_VERSION; }
    catch (e) { return false; }
  },
  async markSeeded() {
    try { localStorage.setItem("db:seeded", SEED_VERSION); } catch (e) {}
  },
  async reset() {
    try {
      TABLES.forEach((t) => localStorage.removeItem("db:" + t));
      localStorage.removeItem("db:seeded");
    } catch (e) {}
  }
};
function App() {
  const [dbReady, setDbReady] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState("Starting up…");
  const [users, setUsersRaw] = useState(INIT_USERS);
  const [cwsList, setCwsListRaw] = useState(INIT_CWS);
  const [farmers2, setFarmersRaw] = useState(INIT_FARMERS);
  const [seasons, setSeasonsRaw] = useState(INIT_SEASONS);
  const [stationSeasons, setStationSeasonsRaw] = useState(INIT_STATION_SEASONS);
  const [cherry, setCherryRaw] = useState(INIT_CHERRY);
  const [cashbook, setCashbookRaw] = useState(INIT_CASHBOOK);
  const [bankTx, setBankTxRaw] = useState(INIT_BANK);
  const [expenses, setExpensesRaw] = useState(INIT_EXPENSES);
  const [debts, setDebtsRaw] = useState(INIT_DEBTS);
  const [stock, setStockRaw] = useState(INIT_STOCK);
  const [fundRequests, setFundRequestsRaw] = useState(INIT_FUND_REQUESTS);
  const [warehouseStock, setWarehouseStockRaw] = useState(INIT_WAREHOUSE_STOCK);
  const [projects, setProjectsRaw] = useState(INIT_PROJECTS);
  const [projectCosts, setProjectCostsRaw] = useState(INIT_PROJECT_COSTS);
  const [milestones, setMilestonesRaw] = useState(INIT_MILESTONES);
  const [contractors, setContractorsRaw] = useState(INIT_CONTRACTORS);
  const [machines, setMachinesRaw] = useState(INIT_MACHINES);
  const [assistants, setAssistantsRaw] = useState(INIT_ASSISTANTS);
  const [tasks, setTasksRaw] = useState(INIT_TASKS);
  const [machTx, setMachTxRaw] = useState(INIT_MACH_TX);
  const [driverLogs, setDriverLogsRaw] = useState(INIT_DRIVER_LOGS);
  const [leaves, setLeavesRaw] = useState(INIT_LEAVES);
  const [pending, setPendingRaw] = useState(INIT_PENDING);
  const [system, setSystemRaw] = useState(INIT_SYSTEM);
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem("bender_user");
      return saved ? JSON.parse(saved) : null;
    } catch { return null; }
  });
  const [online, setOnline] = useState(typeof window.__benderOnline !== 'undefined' ? window.__benderOnline : navigator.onLine);

  // When the device comes back online: flush queued ops, then pull latest data
  useEffect(() => {
    const handleOnline = async () => {
      setOnline(true);
      await flushOfflineQueue();
      // After flushing, pull fresh data so we see changes from other machines
      try {
        const token = localStorage.getItem("bender_token");
        if (!token) return;
        const res = await apiFetch("/api/pull?since=1970-01-01T00:00:00Z");
        if (res.ok) {
          const { delta } = await res.json();
          if (delta) {
            const setters = {
              cherry: setCherryRaw, cashbook: setCashbookRaw,
              bank_transactions: setBankTxRaw, expenses: setExpensesRaw,
              debts: setDebtsRaw, stock: setStockRaw,
              fund_requests: setFundRequestsRaw, warehouse_stock: setWarehouseStockRaw,
              projects: setProjectsRaw, project_costs: setProjectCostsRaw,
              contractors: setContractorsRaw, machines: setMachinesRaw,
              assistants: setAssistantsRaw, tasks: setTasksRaw,
              mach_tx: setMachTxRaw, driver_logs: setDriverLogsRaw,
              leaves: setLeavesRaw, seasons: setSeasonsRaw,
              station_seasons: setStationSeasonsRaw, farmers: setFarmersRaw,
              cws: setCwsListRaw, milestones: setMilestonesRaw,
            };
            for (const [table, rows] of Object.entries(delta)) {
              if (!rows?.length) continue;
              const setter = setters[table];
              if (setter) setter(prev => {
                const map = Object.fromEntries((prev||[]).map(r => [r.id, r]));
                rows.forEach(r => { map[r.id] = { ...map[r.id], ...r }; });
                return Object.values(map);
              });
            }
          }
        }
      } catch (_) {}
    };
    const handleOffline = () => setOnline(false);
    window.addEventListener("online",  handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online",  handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  const [notifications, setNotifications] = useState([
    { id: "n1", text: "Fund request from Nyungwe CWS awaiting verification", type: "fund", read: false, time: "08:30" },
    { id: "n2", text: "Fund request from Nyarubaka CWS awaiting verification", type: "fund", read: false, time: "08:45" },
    { id: "n3", text: "Warehouse shipment from Nyungwe awaiting confirmation", type: "warehouse", read: false, time: "09:00" }
  ]);
  const [page, setPage] = useState({ view: "home", sub: null });
  // Table name mapping: localStorage key → server API table name
  const TABLE_MAP = {
    bank:      "bank_transactions",
    warehouse: "warehouse_stock",
    cws:       "cws",
    farmers:   "farmers",
    cherry:    "cherry",
    cashbook:  "cashbook",
    expenses:  "expenses",
    debts:     "debts",
    stock:     "stock",
    fund_requests: "fund_requests",
    projects:  "projects",
    project_costs: "project_costs",
    milestones:"milestones",
    contractors:"contractors",
    machines:  "machines",
    assistants:"assistants",
    tasks:     "tasks",
    mach_tx:   "mach_tx",
    driver_logs:"driver_logs",
    leaves:    "leaves",
    seasons:   "seasons",
    station_seasons:"station_seasons",
    users:     "users",
    system:    "system",
  };

  // ── Offline queue helpers ────────────────────────────────────────────
  // When a sync fails (offline), ops are queued in localStorage.
  // When the device comes back online, the queue is flushed first,
  // THEN a fresh pull from Supabase merges the latest server state.
  const OFFLINE_QUEUE_KEY = "bender_offline_ops";

  const enqueueOp = (op) => {
    try {
      const q = JSON.parse(localStorage.getItem(OFFLINE_QUEUE_KEY) || "[]");
      // Upsert: replace any existing op for the same table+id so we don't
      // send redundant older versions of the same record.
      const idx = q.findIndex(x => x.table === op.table && x.id === op.id);
      if (idx >= 0) q[idx] = op; else q.push(op);
      localStorage.setItem(OFFLINE_QUEUE_KEY, JSON.stringify(q));
    } catch (e) { console.warn("[Bender] enqueueOp failed:", e); }
  };

  const flushOfflineQueue = async () => {
    const token = localStorage.getItem("bender_token");
    if (!token) return;
    try {
      const q = JSON.parse(localStorage.getItem(OFFLINE_QUEUE_KEY) || "[]");
      if (!q.length) return;
      console.log(`[Bender] Flushing ${q.length} offline op(s) to server...`);

      const systemOp = q.find(op => op.table === "system");
      const otherOps = q.filter(op => op.table !== "system");

      // Track which op ids were successfully sent so we only remove those
      const successfulIds = new Set();

      // ── system op ────────────────────────────────────────────────────
      if (systemOp) {
        try {
          const res = await apiFetch("/api/system", {
            method: "PUT",
            body: JSON.stringify(systemOp.data),
          });
          if (res.ok) {
            successfulIds.add("__system__");
            console.log("[Bender] System config flushed.");
          } else {
            console.warn("[Bender] System flush failed HTTP", res.status);
          }
        } catch (e) {
          console.warn("[Bender] System flush error:", e.message);
        }
      }

      // ── regular ops ──────────────────────────────────────────────────
      if (otherOps.length) {
        try {
          const res = await apiFetch("/api/sync", {
            method: "POST",
            body: JSON.stringify({ operations: otherOps }),
          });

          // Read body ONCE — server always returns HTTP 200, must check per-op results
          const body = await res.json().catch(() => ({ results: [] }));

          if (!res.ok) {
            console.warn("[Bender] Flush sync HTTP", res.status, body.error || "");
          } else {
            // Mark individual ops as successful or failed
            (body.results || []).forEach(r => {
              if (r.ok) {
                successfulIds.add(r.id);
              } else {
                console.warn(`[Bender] Flush: Supabase rejected op ${r.id}:`, r.error);
              }
            });

            // If server returned no results array, assume all sent ops succeeded
            if (!body.results || body.results.length === 0) {
              otherOps.forEach(op => successfulIds.add(op.id));
            }
          }
        } catch (e) {
          console.warn("[Bender] Flush sync error:", e.message);
        }
      }

      // ── Remove only the ops that actually succeeded ───────────────────
      // Failed ops stay in the queue and will be retried next time
      const remaining = q.filter(op => !successfulIds.has(op.id));
      if (remaining.length < q.length) {
        if (remaining.length === 0) {
          localStorage.removeItem(OFFLINE_QUEUE_KEY);
        } else {
          localStorage.setItem(OFFLINE_QUEUE_KEY, JSON.stringify(remaining));
        }
        console.log(`[Bender] Flushed ${q.length - remaining.length}/${q.length} ops. ${remaining.length} still queued.`);
      }
    } catch (e) {
      console.warn("[Bender] Queue flush failed (still offline?):", e.message);
    }
  };

  // Sync a list of records to Supabase via /api/sync
  const syncToServer = async (table, records) => {
    try {
      const token = localStorage.getItem("bender_token");
      if (!token) return; // not logged in — localStorage only
      const serverTable = TABLE_MAP[table] || table;

      // ── system: uses its own PUT /api/system endpoint (key-value store) ──
      if (serverTable === "system") {
        const payload = Array.isArray(records) ? records[0] : records;
        const res = await apiFetch("/api/system", {
          method: "PUT",
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("system sync HTTP " + res.status);
        return;
      }

      // ── users: handled by dedicated /api/users endpoints ──────────────
      if (serverTable === "users") return;

      // ── everything else: batch sync via /api/sync ──────────────────────
      // Split into batches of 100 to avoid hitting payload/timeout limits
      // when a large import pushes hundreds of records at once.
      const allRecords = Array.isArray(records) ? records : [records];
      const BATCH_SIZE = 100;
      for (let i = 0; i < allRecords.length; i += BATCH_SIZE) {
        const batch = allRecords.slice(i, i + BATCH_SIZE);
        const ops = batch.map(r => ({
          table:  serverTable,
          method: "POST", // upsert
          id:     r.id,
          data:   r,
        }));
        const res = await apiFetch("/api/sync", {
          method: "POST",
          body: JSON.stringify({ operations: ops }),
        });
        if (!res.ok) throw new Error("sync HTTP " + res.status);
      }
    } catch (e) {
      // Device is offline or server unreachable — queue for later
      console.warn("[Bender] Sync failed, queuing offline:", e.message);
      const serverTable = TABLE_MAP[table] || table;
      if (serverTable === "system") {
        // system is a single object — store it under a fixed key
        const payload = Array.isArray(records) ? records[0] : records;
        enqueueOp({ table: "system", method: "PUT", id: "__system__", data: payload });
      } else if (serverTable !== "users") {
        // Queue every record individually so they can be flushed one by one
        (Array.isArray(records) ? records : [records]).forEach(r =>
          enqueueOp({ table: serverTable, method: "POST", id: r.id, data: r })
        );
      }
    }
  };

  // Delete a single record from Supabase by id
  const deleteFromServer = async (table, id) => {
    try {
      const token = localStorage.getItem("bender_token");
      if (!token) return;
      const serverTable = TABLE_MAP[table] || table;
      const res = await apiFetch("/api/sync", {
        method: "POST",
        body: JSON.stringify({
          operations: [{ table: serverTable, method: "DELETE", id, data: { id } }]
        }),
      });
      if (!res.ok) throw new Error("delete sync HTTP " + res.status);
    } catch (e) {
      console.warn("[Bender] Delete failed, queuing offline:", e.message);
      const serverTable = TABLE_MAP[table] || table;
      enqueueOp({ table: serverTable, method: "DELETE", id, data: { id } });
    }
  };

  const mkSet = (raw, table) => (val) => {
    const next = typeof val === "function" ? val : () => val;
    raw((prev) => {
      const newVal = next(prev);
      DB.save(table, newVal); // always keep localStorage as offline cache

      // Only sync records that are NEW or CHANGED — never the entire array.
      // This prevents sending thousands of records to Supabase every time
      // a single record is added or updated.
      const prevMap = Object.fromEntries((prev || []).map(r => [r.id, JSON.stringify(r)]));
      const changed = (Array.isArray(newVal) ? newVal : [newVal]).filter(r =>
        r && r.id && prevMap[r.id] !== JSON.stringify(r) // new or modified
      );
      if (changed.length > 0) syncToServer(table, changed);

      return newVal;
    });
  };
  const setUsers = mkSet(setUsersRaw, "users");
  const setCwsList = mkSet(setCwsListRaw, "cws");
  const setFarmers = mkSet(setFarmersRaw, "farmers");
  const setSeasons = mkSet(setSeasonsRaw, "seasons");
  const setStationSeasons = mkSet(setStationSeasonsRaw, "station_seasons");
  const setCherry = mkSet(setCherryRaw, "cherry");
  const setCashbook = mkSet(setCashbookRaw, "cashbook");
  const setBankTx = mkSet(setBankTxRaw, "bank");
  const setExpenses = mkSet(setExpensesRaw, "expenses");
  const setDebts = mkSet(setDebtsRaw, "debts");
  const setStock = mkSet(setStockRaw, "stock");
  const setFundRequests = mkSet(setFundRequestsRaw, "fund_requests");
  const setWarehouseStock = mkSet(setWarehouseStockRaw, "warehouse");
  const setProjects = mkSet(setProjectsRaw, "projects");
  const setProjectCosts = mkSet(setProjectCostsRaw, "project_costs");
  const setMilestones = mkSet(setMilestonesRaw, "milestones");
  const setContractors = mkSet(setContractorsRaw, "contractors");
  const setMachines = mkSet(setMachinesRaw, "machines");
  const setAssistants = mkSet(setAssistantsRaw, "assistants");
  const setTasks = mkSet(setTasksRaw, "tasks");
  const setMachTx = mkSet(setMachTxRaw, "mach_tx");
  const setDriverLogs = mkSet(setDriverLogsRaw, "driver_logs");
  const setLeaves = mkSet(setLeavesRaw, "leaves");
  const setPending = mkSet(setPendingRaw, "pending");
  const setSystem = mkSet(setSystemRaw, "system");
  useEffect(() => {
    async function init() {
      try {
        // ── Supabase-first boot ───────────────────────────────────────
        // Wipe any old demo localStorage from previous versions.
        // SEED_VERSION bump ensures every machine runs this once.
        if (!await DB.isSeeded()) {
          DB.reset(); // clears all db:* keys and old seed flag
          await DB.markSeeded(); // mark done so this only runs once per version
          console.log("[Bender] Old demo data cleared — Supabase is now source of truth");
        }

        // Load whatever is cached in localStorage as the starting state
        // (this is empty on first boot, or the last-known state when offline)
        const d = await DB.loadAll();
        if (d.users)           setUsersRaw(d.users.map(u => ({ ...u, cwsAccess: u.cwsAccess || [] })));
        if (d.cws)             setCwsListRaw(d.cws);
        if (d.farmers)         setFarmersRaw(d.farmers);
        if (d.seasons)         setSeasonsRaw(d.seasons);
        if (d.station_seasons) setStationSeasonsRaw(d.station_seasons);
        if (d.cherry)          setCherryRaw(d.cherry.map(c => ({
          ...c,
          totalKg:    +(c.totalKg    || 0),
          standardKg: +(c.standardKg || 0),
          flotantKg:  +(c.flotantKg  || 0),
          totalPaid:  +(c.totalPaid  || 0),
          avgRate:    +(c.avgRate    || 0),
        })));
        if (d.cashbook)        setCashbookRaw(d.cashbook);
        if (d.bank)            setBankTxRaw(d.bank);
        if (d.expenses)        setExpensesRaw(d.expenses);
        if (d.debts)           setDebtsRaw(d.debts);
        if (d.stock)           setStockRaw(d.stock);
        if (d.fund_requests)   setFundRequestsRaw(d.fund_requests);
        if (d.warehouse)       setWarehouseStockRaw(d.warehouse);
        if (d.projects)        setProjectsRaw(d.projects);
        if (d.project_costs)   setProjectCostsRaw(d.project_costs);
        if (d.milestones)      setMilestonesRaw(d.milestones);
        if (d.contractors)     setContractorsRaw(d.contractors);
        if (d.machines)        setMachinesRaw(d.machines);
        if (d.assistants)      setAssistantsRaw(d.assistants);
        if (d.tasks)           setTasksRaw(d.tasks);
        if (d.mach_tx)         setMachTxRaw(d.mach_tx);
        if (d.driver_logs)     setDriverLogsRaw(d.driver_logs);
        if (d.leaves)          setLeavesRaw(d.leaves);
        if (d.system)          setSystemRaw(d.system);
        // Server pull below will immediately overwrite with real Supabase data
      } catch (e) {
        console.error("DB init error", e);
      }
      // NOTE: setDbReady(true) is called AFTER the server pull below,
      // so the app never renders with stale/empty data.

      // ── Boot sync sequence ───────────────────────────────────────────
      // Pull ALL data before the login screen appears.
      // /api/pull, /api/users, /api/system are now public endpoints on the
      // server (no auth required) so this works even before login.
      // Plain fetch is used (not apiFetch) to avoid the 401→reload loop
      // that apiFetch triggers when no token is stored yet.
      try {
        const token = localStorage.getItem("bender_token");

        // If returning user has a token, flush offline ops first so we
        // don't overwrite changes they made while offline.
        if (token) {
          setLoadingStatus("Syncing offline changes…");
          await flushOfflineQueue();
        }

        setLoadingStatus("Fetching data from database…");

        const headers = { "Content-Type": "application/json" };
        if (token) headers["Authorization"] = `Bearer ${token}`;

        // ── Pull all tables ───────────────────────────────────────────
        const lastSync = "1970-01-01T00:00:00Z";
        const res = await fetch(`/api/pull?since=${encodeURIComponent(lastSync)}`, { headers });
        if (res.ok) {
          const { delta } = await res.json();
          if (delta) {
            const setters = {
              cherry:           setCherryRaw,
              cashbook:         setCashbookRaw,
              bank_transactions:setBankTxRaw,
              expenses:         setExpensesRaw,
              debts:            setDebtsRaw,
              stock:            setStockRaw,
              fund_requests:    setFundRequestsRaw,
              warehouse_stock:  setWarehouseStockRaw,
              projects:         setProjectsRaw,
              project_costs:    setProjectCostsRaw,
              milestones:       setMilestonesRaw,
              contractors:      setContractorsRaw,
              machines:         setMachinesRaw,
              assistants:       setAssistantsRaw,
              tasks:            setTasksRaw,
              mach_tx:          setMachTxRaw,
              driver_logs:      setDriverLogsRaw,
              leaves:           setLeavesRaw,
              seasons:          setSeasonsRaw,
              station_seasons:  setStationSeasonsRaw,
              farmers:          setFarmersRaw,
              cws:              setCwsListRaw,
            };
            for (const [table, rows] of Object.entries(delta)) {
              if (!rows || !rows.length) continue;
              const setter = setters[table];
              if (setter) {
                setter(prev => {
                  const map = Object.fromEntries((prev||[]).map(r => [r.id, r]));
                  rows.forEach(r => { map[r.id] = { ...map[r.id], ...r }; });
                  const merged = Object.values(map);
                  DB.save(table === "bank_transactions" ? "bank" : table === "warehouse_stock" ? "warehouse" : table, merged);
                  return merged;
                });
              }
            }
            localStorage.setItem("last_sync", new Date().toISOString());
          }
        }

        // ── Pull users ────────────────────────────────────────────────
        const usersRes = await fetch("/api/users", { headers });
        if (usersRes.ok) {
          const serverUsers = await usersRes.json();
          if (Array.isArray(serverUsers) && serverUsers.length > 0) {
            const merged = serverUsers.map(u => ({
              ...u,
              cwsAccess: u.cwsAccess || u.cws_access || [],
            }));
            setUsersRaw(merged);
            DB.save("users", merged);
          }
        }

        // ── Pull system config ────────────────────────────────────────
        try {
          const sysRes = await fetch("/api/system", { headers });
          if (sysRes.ok) {
            const cfg = await sysRes.json();
            if (cfg && typeof cfg === "object" && Object.keys(cfg).length > 0) {
              const merged = { ...INIT_SYSTEM, ...cfg,
                labels: { ...INIT_SYSTEM.labels, ...(cfg.labels || {}) },
                businessModels: cfg.businessModels || INIT_SYSTEM.businessModels,
              };
              setSystemRaw(merged);
              DB.save("system", merged);
            }
          }
        } catch (_) {}

      } catch (e) {
        console.warn("[Bender] Server pull failed on boot:", e.message);
      } finally {
        setDbReady(true);
      }
    }
    init();
  }, []);

  // Supabase Realtime — receive live changes from other devices
  useEffect(() => {
    if (!window.__supabase) return;
    const channel = window.__supabase
      .channel("bender-live")
      .on("postgres_changes", { event: "*", schema: "public" }, () => {
        const token = localStorage.getItem("bender_token");
        if (!token) return;
        const since = "1970-01-01T00:00:00Z"; // always full pull so no device misses cross-machine changes
        apiFetch(`/api/pull?since=${encodeURIComponent(since)}`)
          .then(r => r.ok ? r.json() : null)
          .then(d => {
            if (!d?.delta) return;
            localStorage.setItem("last_sync", new Date().toISOString());
            if (d.delta.cherry?.length) setCherryRaw(p => {
              const m = Object.fromEntries((p||[]).map(r=>[r.id,r]));
              d.delta.cherry.forEach(r=>{m[r.id]={...m[r.id],...r};});
              return Object.values(m);
            });
            if (d.delta.fund_requests?.length) setFundRequestsRaw(p => {
              const m = Object.fromEntries((p||[]).map(r=>[r.id,r]));
              d.delta.fund_requests.forEach(r=>{m[r.id]={...m[r.id],...r};});
              return Object.values(m);
            });
          }).catch(()=>{});
      }).subscribe();
    return () => { try { window.__supabase.removeChannel(channel); } catch(_){} };
  }, []);
  const addNote = (text, type = "info") => setNotifications((p) => [{ id: Date.now(), text, type, read: false, time: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }, ...p]);
  const login = async (email, password) => {
    // ── Step 1: Try Supabase Auth via server (primary path) ──────────
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (res.ok && data.token) {
        // Store token — all subsequent API calls use this
        localStorage.setItem("bender_token", data.token);
        if (data.refresh_token) localStorage.setItem("bender_refresh", data.refresh_token);
        window.dispatchEvent(new CustomEvent("bender:token", { detail: data.token }));
        // Tell the service worker the new token so it can authorise background syncs
        swNotify("SET_TOKEN", { token: data.token });
        swNotify("FLUSH_QUEUE");

        // Fetch full profile to get role/cwsAccess from profiles table
        let profile = data.user || {};
        try {
          const meRes = await fetch("/api/auth/me", {
            headers: { "Authorization": `Bearer ${data.token}`, "Content-Type": "application/json" }
          });
          if (meRes.ok) {
            const me = await meRes.json();
            profile = { ...profile, ...me };
          }
        } catch (_) {}

        const p = profile;
        const u = {
          id:        p.id        || p.sub,
          name:      p.name      || email.split("@")[0],
          email:     p.email     || email,
          role:      p.role      || "clerk",
          cwsAccess: p.cwsAccess || p.cws_access || [],
          machineId: p.machineId || p.machine_id || null,
          avatar:    p.avatar    || email.slice(0,2).toUpperCase(),
          active:    p.active    !== false,
          password,  // keep for local fallback
        };
        return u;
      }
    } catch (_) {
      // Server unreachable — fall through to local
    }

    // ── Step 2: Offline fallback ─────────────────────────────────────
    // Only match against real users previously pulled from Supabase and
    // cached in localStorage. INIT_USERS (demo data) is intentionally
    // excluded — demo IDs conflict with real Supabase UUIDs.
    const localMatch = users.find(x => x.email === email && x.password === password && x.active !== false);
    if (localMatch) return localMatch;

    return null;
  };
  const ctx = { users, setUsers, cwsList, setCwsList, syncToServer, deleteFromServer, farmers: farmers2, setFarmers, seasons, setSeasons, stationSeasons, setStationSeasons, cherry, setCherry, cashbook, setCashbook, bankTx, setBankTx, expenses, setExpenses, debts, setDebts, stock, setStock, fundRequests, setFundRequests, warehouseStock, setWarehouseStock, projects, setProjects, projectCosts, setProjectCosts, milestones, setMilestones, contractors, setContractors, machines, setMachines, assistants, setAssistants, tasks, setTasks, machTx, setMachTx, driverLogs, setDriverLogs, leaves, setLeaves, pending, setPending, system, setSystem, currentUser, online, setOnline, notifications, setNotifications, addNote, page, setPage, dbReady };
  if (!dbReady) return <div style={{ minHeight: "100vh", background: C.bg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
      <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 26, letterSpacing: '-0.5px', fontWeight: 700, color: C.gold }}>Bender Exports</div>
      <div style={{ fontSize: 13, color: C.textMuted }}>{loadingStatus}</div>
      <div style={{ width: 180, height: 3, background: C.border, borderRadius: 4, overflow: "hidden" }}>
        <div style={{ height: "100%", background: C.gold, borderRadius: 4, animation: "pulse 1.2s ease infinite" }} />
      </div>
    </div>;
  if (!currentUser) return <Ctx.Provider value={ctx}><style>{GS}</style><LoginPage onLogin={async (e, p) => {
    const u = await login(e, p);
    if (u) {
      setCurrentUser(u);
      try { localStorage.setItem("bender_user", JSON.stringify(u)); } catch(_) {}
      // After login we have a real token — flush offline ops then re-pull
      // so any token-gated data (e.g. role-filtered views) is loaded fresh.
      setDbReady(false);
      setLoadingStatus("Loading your data…");
      await flushOfflineQueue();
      setLoadingStatus("Pulling latest data from server…");
      const token = localStorage.getItem("bender_token");
      const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${token}` };
      try {
        const res = await fetch("/api/pull?since=1970-01-01T00%3A00%3A00Z", { headers });
        if (res.ok) {
          const { delta } = await res.json();
          if (delta) {
            const setters = {
              cherry:setCherryRaw,cashbook:setCashbookRaw,bank_transactions:setBankTxRaw,
              expenses:setExpensesRaw,debts:setDebtsRaw,stock:setStockRaw,
              fund_requests:setFundRequestsRaw,warehouse_stock:setWarehouseStockRaw,
              projects:setProjectsRaw,project_costs:setProjectCostsRaw,milestones:setMilestonesRaw,
              contractors:setContractorsRaw,machines:setMachinesRaw,assistants:setAssistantsRaw,
              tasks:setTasksRaw,mach_tx:setMachTxRaw,driver_logs:setDriverLogsRaw,
              leaves:setLeavesRaw,seasons:setSeasonsRaw,station_seasons:setStationSeasonsRaw,
              farmers:setFarmersRaw,cws:setCwsListRaw,
            };
            for (const [table, rows] of Object.entries(delta)) {
              if (!rows||!rows.length) continue;
              const setter = setters[table];
              if (setter) setter(prev => {
                const map = Object.fromEntries((prev||[]).map(r=>[r.id,r]));
                rows.forEach(r=>{map[r.id]={...map[r.id],...r};});
                const merged = Object.values(map);
                DB.save(table==="bank_transactions"?"bank":table==="warehouse_stock"?"warehouse":table, merged);
                return merged;
              });
            }
          }
        }
        const usersRes = await fetch("/api/users", { headers });
        if (usersRes.ok) {
          const su = await usersRes.json();
          if (Array.isArray(su) && su.length > 0) {
            const m = su.map(u=>({...u,cwsAccess:u.cwsAccess||u.cws_access||[]}));
            setUsersRaw(m); DB.save("users", m);
          }
        }
      } catch(err) {
        console.warn("[Bender] Post-login pull failed:", err.message);
      } finally {
        setDbReady(true); // always unblock — even if pull fails
      }
    }
    return !!u;
  }} system={system} /></Ctx.Provider>;
  return <Ctx.Provider value={ctx}><style>{GS}</style><Shell onLogout={() => {
    localStorage.removeItem("bender_token");
    localStorage.removeItem("bender_user");
    // Clear the token from the service worker so it stops background syncs
    swNotify("SET_TOKEN", { token: null });
    setCurrentUser(null);
    setPage({ view: "home", sub: null });
  }} /></Ctx.Provider>;
}
function LoginHero() {
  return <svg
    viewBox="0 0 800 900"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    preserveAspectRatio="xMidYMid slice"
  >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#060C07" />
          <stop offset="60%" stopColor="#0D1F10" />
          <stop offset="100%" stopColor="#162818" />
        </linearGradient>
        <linearGradient id="hillL" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A3520" />
          <stop offset="100%" stopColor="#0F1F12" />
        </linearGradient>
        <linearGradient id="hillR" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#122815" />
          <stop offset="100%" stopColor="#0A1A0D" />
        </linearGradient>
        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1E3A22" />
          <stop offset="100%" stopColor="#111D13" />
        </linearGradient>
        <linearGradient id="sunGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#C8A84B" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#C8A84B" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E4C46A" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#E4C46A" stopOpacity="0" />
        </radialGradient>
        <filter id="blur2">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        <filter id="blur6">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <clipPath id="clip">
          <rect width="800" height="900" />
        </clipPath>
      </defs>

      <g clipPath="url(#clip)">

        {
    /* Sky */
  }
        <rect width="800" height="900" fill="url(#sky)" />

        {
    /* Stars */
  }
        {[
    [80, 60],
    [150, 30],
    [220, 80],
    [310, 20],
    [400, 50],
    [480, 35],
    [560, 70],
    [640, 25],
    [720, 55],
    [760, 80],
    [50, 120],
    [170, 100],
    [290, 130],
    [390, 90],
    [510, 110],
    [630, 95],
    [740, 120],
    [100, 170],
    [240, 155],
    [370, 180],
    [500, 160],
    [660, 175],
    [780, 145],
    [60, 220],
    [200, 200],
    [340, 230],
    [470, 210],
    [600, 225],
    [740, 195]
  ].map(([x, y], i) => <circle
    key={i}
    cx={x}
    cy={y}
    r={Math.random() < 0.3 ? 1.5 : 0.8}
    fill="#E4C46A"
    opacity={0.3 + Math.sin(i) * 0.4}
    filter="url(#blur2)"
  />)}

        {
    /* Moon */
  }
        <circle cx="680" cy="110" r="38" fill="url(#moonGlow)" filter="url(#blur6)" />
        <circle cx="680" cy="110" r="22" fill="#E8DBA0" opacity="0.9" />
        <circle cx="672" cy="104" r="18" fill="#0D1F10" />
        {
    /* Moon craters */
  }
        <circle cx="690" cy="118" r="4" fill="#D4C485" opacity="0.4" />
        <circle cx="675" cy="125" r="2.5" fill="#D4C485" opacity="0.3" />

        {
    /* Milky way band */
  }
        <ellipse cx="400" cy="300" rx="500" ry="80" fill="#C8A84B" opacity="0.02" transform="rotate(-20 400 300)" filter="url(#blur6)" />

        {
    /* Distant mountain range */
  }
        <path
    d="M0,520 Q80,380 160,420 Q240,360 320,400 Q400,320 480,380 Q560,340 640,390 Q720,360 800,400 L800,600 L0,600 Z"
    fill="#0F1E12"
    opacity="0.8"
  />

        {
    /* Left rolling hill */
  }
        <path
    d="M-50,580 Q100,460 250,510 Q350,480 420,540 L420,900 L-50,900 Z"
    fill="url(#hillL)"
  />

        {
    /* Right hill */
  }
        <path
    d="M380,560 Q500,480 620,520 Q720,490 850,530 L850,900 L380,900 Z"
    fill="url(#hillR)"
  />

        {
    /* Main ground */
  }
        <path
    d="M0,640 Q200,600 400,620 Q600,600 800,630 L800,900 L0,900 Z"
    fill="url(#ground)"
  />

        {
    /* Coffee rows — terrace 1 (top) */
  }
        {[0, 1, 2, 3, 4, 5].map((i) => <g key={i} transform={`translate(${60 + i * 110}, 545)`}>
            {
    /* Plant stem */
  }
            <line x1="0" y1="30" x2="0" y2="0" stroke="#2A4A2E" strokeWidth="2" />
            {
    /* Leaves */
  }
            <ellipse cx="-12" cy="12" rx="14" ry="7" fill="#1E3A22" transform="rotate(-20 -12 12)" />
            <ellipse cx="12" cy="10" rx="14" ry="7" fill="#243E28" transform="rotate(20 12 10)" />
            <ellipse cx="-10" cy="3" rx="12" ry="6" fill="#1A3520" transform="rotate(-35 -10 3)" />
            <ellipse cx="10" cy="2" rx="12" ry="6" fill="#223C26" transform="rotate(35 10 2)" />
            {
    /* Cherries */
  }
            <circle cx="-8" cy="14" r="3.5" fill="#B8400A" opacity="0.9" />
            <circle cx="8" cy="12" r="3.5" fill="#C84820" opacity="0.9" />
            <circle cx="0" cy="8" r="3" fill="#A83808" opacity="0.85" />
            {
    /* Cherry shine */
  }
            <circle cx="-7" cy="13" r="1.2" fill="#E86030" opacity="0.6" />
            <circle cx="9" cy="11" r="1.2" fill="#E86030" opacity="0.6" />
          </g>)}

        {
    /* Coffee rows — terrace 2 (middle) */
  }
        {[0, 1, 2, 3, 4, 5, 6].map((i) => <g key={i} transform={`translate(${30 + i * 105}, 610)`}>
            <line x1="0" y1="32" x2="0" y2="0" stroke="#243E28" strokeWidth="2.5" />
            <ellipse cx="-14" cy="14" rx="16" ry="8" fill="#1E3A22" transform="rotate(-18 -14 14)" />
            <ellipse cx="14" cy="12" rx="16" ry="8" fill="#243E28" transform="rotate(18 14 12)" />
            <ellipse cx="-11" cy="4" rx="13" ry="6" fill="#1A3520" transform="rotate(-32 -11 4)" />
            <ellipse cx="11" cy="3" rx="13" ry="6" fill="#203C24" transform="rotate(32 11 3)" />
            <circle cx="-9" cy="16" r="4" fill="#C8400A" opacity="0.9" />
            <circle cx="9" cy="14" r="4" fill="#B83808" opacity="0.85" />
            <circle cx="0" cy="9" r="3.5" fill="#D04A10" opacity="0.9" />
            <circle cx="-15" cy="18" r="3" fill="#A83000" opacity="0.8" />
            <circle cx="-8" cy="15" r="1.5" fill="#E86030" opacity="0.5" />
            <circle cx="10" cy="13" r="1.5" fill="#E86030" opacity="0.5" />
          </g>)}

        {
    /* Coffee rows — terrace 3 (front) */
  }
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => <g key={i} transform={`translate(${10 + i * 100}, 680)`}>
            <line x1="0" y1="40" x2="0" y2="0" stroke="#2A4A2E" strokeWidth="3" />
            <ellipse cx="-18" cy="18" rx="20" ry="10" fill="#1E3A22" transform="rotate(-15 -18 18)" />
            <ellipse cx="18" cy="16" rx="20" ry="10" fill="#243E28" transform="rotate(15 18 16)" />
            <ellipse cx="-14" cy="5" rx="16" ry="8" fill="#1A3520" transform="rotate(-30 -14 5)" />
            <ellipse cx="14" cy="4" rx="16" ry="8" fill="#203C24" transform="rotate(30 14 4)" />
            <ellipse cx="0" cy="20" rx="10" ry="5" fill="#182E1A" transform="rotate(-5 0 20)" />
            <circle cx="-12" cy="20" r="5" fill="#C8400A" />
            <circle cx="12" cy="18" r="5" fill="#B83808" />
            <circle cx="0" cy="11" r="4.5" fill="#D04A10" />
            <circle cx="-20" cy="22" r="4" fill="#A83000" />
            <circle cx="20" cy="20" r="4" fill="#C03808" />
            <circle cx="-11" cy="19" r="1.8" fill="#E86030" opacity="0.6" />
            <circle cx="13" cy="17" r="1.8" fill="#E86030" opacity="0.6" />
          </g>)}

        {
    /* Traditional hut (CWS building) */
  }
        <g transform="translate(560, 530)">
          {
    /* Hut body */
  }
          <rect x="-35" y="20" width="70" height="45" fill="#1A2E1C" rx="2" />
          {
    /* Door */
  }
          <rect x="-10" y="38" width="20" height="27" fill="#0E1A10" rx="2" />
          {
    /* Window */
  }
          <rect x="14" y="28" width="14" height="12" fill="#0E1A10" rx="1" />
          <line x1="14" y1="34" x2="28" y2="34" stroke="#243E28" strokeWidth="1" />
          <line x1="21" y1="28" x2="21" y2="40" stroke="#243E28" strokeWidth="1" />
          {
    /* Thatched roof */
  }
          <polygon points="-45,22 0,-18 45,22" fill="#2A3E1E" />
          <polygon points="-40,22 0,-14 40,22" fill="#243818" />
          {
    /* Roof lines (thatch texture) */
  }
          {[-25, -15, -5, 5, 15, 25].map((x, i) => <line
    key={i}
    x1={x}
    y1={22}
    x2={x * 0.4}
    y2={-10 + i * 2}
    stroke="#1A2C14"
    strokeWidth="1"
    opacity="0.6"
  />)}
          {
    /* Smoke from chimney */
  }
          <circle cx="25" cy="-10" r="4" fill="#243E28" opacity="0.4" filter="url(#blur2)" />
          <circle cx="27" cy="-20" r="5" fill="#1E3220" opacity="0.3" filter="url(#blur2)" />
          <circle cx="24" cy="-30" r="6" fill="#182A1A" opacity="0.2" filter="url(#blur2)" />
        </g>

        {
    /* Tall eucalyptus / banana trees */
  }
        {[[120, 520], [180, 540], [640, 500], [700, 515]].map(([x, y], i) => <g key={i} transform={`translate(${x},${y})`}>
            <line x1="0" y1="0" x2="0" y2="-90" stroke="#1A2E1C" strokeWidth="4" />
            {
    /* Fronds */
  }
            {[-40, -20, 0, 20, 40].map((angle, j) => <ellipse
    key={j}
    cx={Math.sin(angle * Math.PI / 180) * 25}
    cy={-85 + Math.cos(angle * Math.PI / 180) * 10}
    rx="28"
    ry="8"
    fill="#1E3A20"
    transform={`rotate(${angle} ${Math.sin(angle * Math.PI / 180) * 25} ${-85 + Math.cos(angle * Math.PI / 180) * 10})`}
    opacity="0.9"
  />)}
          </g>)}

        {
    /* Winding path */
  }
        <path
    d="M200,900 Q240,800 260,720 Q280,660 310,620 Q340,590 380,575"
    stroke="#2A4A2E"
    strokeWidth="6"
    fill="none"
    opacity="0.5"
    strokeDasharray="0"
  />
        <path
    d="M200,900 Q240,800 260,720 Q280,660 310,620 Q340,590 380,575"
    stroke="#1E3820"
    strokeWidth="4"
    fill="none"
    opacity="0.4"
  />

        {
    /* Golden light glow (sunrise/moonrise) */
  }
        <circle cx="400" cy="700" r="300" fill="url(#sunGlow)" filter="url(#blur6)" />

        {
    /* Mist in valleys */
  }
        <ellipse cx="300" cy="620" rx="200" ry="25" fill="#1E3A22" opacity="0.3" filter="url(#blur6)" />
        <ellipse cx="580" cy="600" rx="180" ry="20" fill="#1A3020" opacity="0.25" filter="url(#blur6)" />

        {
    /* Fireflies / lights */
  }
        {[[150, 600], [280, 570], [450, 580], [580, 555], [700, 590]].map(([x, y], i) => <g key={i}>
            <circle cx={x} cy={y} r="3" fill="#C8A84B" opacity="0.6" filter="url(#glow)" />
            <circle cx={x} cy={y} r="1.5" fill="#E4C46A" opacity="0.9" />
          </g>)}

        {
    /* "Rwanda" text watermark */
  }
        <text
    x="400"
    y="870"
    textAnchor="middle"
    fill="#C8A84B"
    opacity="0.12"
    fontSize="11"
    fontFamily="Georgia,serif"
    letterSpacing="6"
  >
          BENDER EXPORTS
        </text>

      </g>
    </svg>;
}
function LoginPage({ onLogin, system }) {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const doLogin = async () => {
    setLoading(true);
    setErr("");
    const ok = await onLogin(email, pw);
    if (!ok) setErr("Invalid email or password.");
    setLoading(false);
  };
  return <div style={{ minHeight: "100vh", display: "flex", background: C.bg, flexDirection: "row" }}>
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }} className="hide-mobile">
        {system.heroImageUrl
          ? <img src={system.heroImageUrl} alt="Login background" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          : <LoginHero />}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(8,14,10,.88) 0%,rgba(8,14,10,.35) 55%,rgba(8,14,10,.92) 100%)" }} />
        <div style={{ position: "absolute", height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "40px 52px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, position: "relative", zIndex: 1 }}>
            <img src="/icons/logo_white.png" alt="Bender Exports" style={{ width: 48, height: 48, objectFit: "contain", flexShrink: 0, filter: "brightness(0) invert(1)" }} />
            <div><div style={{ fontFamily: "'Cormorant',serif", fontSize: 20, fontWeight: 700, color: C.text }}>{system.companyName}</div><div style={{ fontSize: 11, color: C.textMuted }}>Integrated Operations System</div></div>
          </div>
          <div style={{ position: "relative", zIndex: 1, animation: "fadeUp .8s ease both" }}>
            <div style={{ fontFamily: "'Cormorant',serif", fontSize: 58, fontWeight: 700, color: "#fff", lineHeight: 1.04, marginBottom: 18, textShadow: "0 2px 24px rgba(0,0,0,.5)" }}>Rwanda's<br /><span style={{ color: C.gold }}>Premium</span><br />Exports</div>
            <p style={{ color: "rgba(255,255,255,.5)", fontSize: 14, lineHeight: 1.7, maxWidth: 360 }}>{system.tagline}</p>
            <div style={{ display: "flex", gap: 10, marginTop: 22, flexWrap: "wrap" }}>
              {system.businessModels.filter((m) => m.active).map((m) => <span key={m.id} style={{ padding: "5px 14px", borderRadius: 20, background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.13)", color: "rgba(255,255,255,.65)", fontSize: 12 }}>{m.icon} {m.label}</span>)}
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "min(440px, 100%)", background: C.bgCard, borderLeft: `1px solid ${C.border}`, display: "flex", flexDirection: "column", justifyContent: "center", padding: "40px 28px", overflowY: "auto" }}>
        <div style={{ animation: "fadeUp .5s ease both" }}>
          {/* Mobile logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }} className="show-mobile">
            <img src="/icons/logo_white.png" alt="Bender Exports" style={{ width: 40, height: 40, objectFit: "contain", flexShrink: 0, filter: "brightness(0) invert(1)" }} />
            <div><div style={{ fontFamily: "'Inter',sans-serif", fontSize: 17, letterSpacing: '-0.2px', fontWeight: 700, color: C.text }}>{system.companyName}</div><div style={{ fontSize: 10, color: C.textMuted }}>Integrated Operations System</div></div>
          </div>
          <div style={{ fontFamily: "'Cormorant',serif", fontSize: 30, fontWeight: 700, color: C.text, marginBottom: 4 }}>Welcome back</div>
          <p style={{ fontSize: 13, color: C.textMuted, marginBottom: 28 }}>Sign in to your account.</p>
          <FI label="Email" type="email" value={email} onChange={setEmail} placeholder="your@bender.rw" onEnter={doLogin} />
          <div style={{ marginTop: 12 }}><FI label="Password" type="password" value={pw} onChange={setPw} placeholder="••••••••" onEnter={doLogin} /></div>
          {err && <div style={{ marginTop: 10, padding: "9px 13px", background: `${C.danger}12`, border: `1px solid ${C.danger}28`, borderRadius: 7, color: C.danger, fontSize: 13 }}>⚠ {err}</div>}
          <button onClick={doLogin} disabled={loading} style={{ ...BtnS(C.gold), width: "100%", marginTop: 18, padding: 13, justifyContent: "center", fontSize: 14, fontWeight: 700, minHeight: 48 }} onMouseEnter={(e) => e.target.style.background = C.goldLight} onMouseLeave={(e) => e.target.style.background = C.gold}>{loading ? "Signing in..." : "Sign In \u2192"}</button>

        </div>
      </div>
    </div>;
}
function Shell({ onLogout }) {
  const { currentUser: u, page, setPage, notifications, online, fundRequests, system: _system } = useApp();
  const system = { ...INIT_SYSTEM, ..._system, labels: { ...INIT_SYSTEM.labels, ...((_system||{}).labels||{}) } };

  // Safety guard
  if (!u || !u.name || !u.role) {
    return <div style={{ minHeight: "100vh", background: C.bg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, padding: 24 }}>
      <div style={{ fontSize: 22, fontWeight: 700, color: C.danger }}>Session Error</div>
      <div style={{ fontSize: 13, color: C.textMuted, textAlign: "center", maxWidth: 320 }}>Your profile could not be loaded. Please sign out and try again.</div>
      <button onClick={onLogout} style={{ ...BtnS(C.gold), padding: "9px 20px", fontSize: 13 }}>Sign out</button>
    </div>;
  }

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const unread = notifications.filter(n => !n.read).length;
  const pendingFunds = fundRequests.filter(f => f.status === "pending_verification" || f.status === "pending_approval").length;

  const NAV = [
    { id: "home",         label: "Dashboard",                                          icon: "⊞" },
    { id: "coffee",       label: (system.labels||{}).coffee       || "Bender Coffee",  icon: "☕", show: hasAccess(u, "coffee") },
    { id: "machinery",    label: (system.labels||{}).machinery    || "Bender Machine", icon: "🏗️", show: hasAccess(u, "machinery") },
    { id: "construction", label: (system.labels||{}).construction || "Construction",   icon: "🏛️", show: hasAccess(u, "construction") && !STATION_ROLES.concat("driver").includes(u.role) },
    { id: "warehouse",    label: "Warehouse",                                          icon: "🏭", show: hasAccess(u, "warehouse") && !["clerk","cashier","driver"].includes(u.role) },
    { id: "reports",      label: "Reports",                                            icon: "📊", show: hasAccess(u, "reports") },
    { id: "users",        label: "Users",                                              icon: "👥", show: hasAccess(u, "users") },
    { id: "system",       label: "System",                                             icon: "⚙️", show: hasAccess(u, "system") },
    { id: "import",       label: "Import Data",                                        icon: "📥", show: hasAccess(u, "import") },
  ].filter(n => n.show !== false);

  const closeSidebar = () => setSidebarOpen(false);

  const SidebarContent = ({ mobile }) => <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
    {/* Logo */}
    <div style={{ padding: "20px 18px 16px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 11 }}>
      <img src="/icons/logo_gold.png" alt="BE" style={{ width: 36, height: 36, objectFit: "contain", flexShrink: 0 }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: C.text, letterSpacing: "-0.3px", lineHeight: 1.2 }}>Bender <span style={{ background: C.gradGold, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Exports</span></div>
        <div style={{ fontSize: 9, color: C.textDim, letterSpacing: "1.2px", textTransform: "uppercase", marginTop: 1 }}>Management System</div>
      </div>
      {mobile && <div onClick={closeSidebar} style={{ cursor: "pointer", color: C.textMuted, fontSize: 18, padding: "2px 4px", lineHeight: 1 }}>✕</div>}
    </div>

    {/* Nav section label */}
    <div style={{ padding: "14px 18px 6px" }}>
      <div style={{ fontSize: 9, fontWeight: 700, color: C.textDim, textTransform: "uppercase", letterSpacing: "1.2px" }}>Main Menu</div>
    </div>

    {/* Nav items */}
    <nav style={{ flex: 1, padding: "2px 10px", overflowY: "auto" }}>
      {NAV.map(item => {
        const active = page.view === item.id;
        const hasBadge = item.id === "coffee" && pendingFunds > 0 && canVerifyFunds(u.role);
        return <div key={item.id}
          onClick={() => { setPage({ view: item.id, sub: null }); if (mobile) closeSidebar(); }}
          style={{
            display: "flex", alignItems: "center", gap: 10,
            padding: "9px 12px", borderRadius: 11, cursor: "pointer", marginBottom: 2,
            background: active ? `linear-gradient(135deg,${C.gold}20,${C.gold}08)` : "transparent",
            color: active ? C.gold : C.textMuted,
            fontWeight: active ? 600 : 400, fontSize: 13,
            border: `1px solid ${active ? C.gold+"28" : "transparent"}`,
            transition: "all .15s ease",
          }}
          onMouseEnter={e => { if (!active) { e.currentTarget.style.background = C.surfaceHover; e.currentTarget.style.color = C.text; } }}
          onMouseLeave={e => { if (!active) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.textMuted; } }}>
          <span style={{ fontSize: 15, width: 20, textAlign: "center", flexShrink: 0 }}>{item.icon}</span>
          <span style={{ flex: 1 }}>{item.label}</span>
          {hasBadge && <span style={{ background: `linear-gradient(135deg,${C.warning},${C.warningLight})`, color: "#0A0F0A", fontSize: 9, padding: "2px 6px", borderRadius: 20, fontWeight: 700 }}>{pendingFunds}</span>}
          {active && <span style={{ width: 4, height: 4, borderRadius: "50%", background: C.gold, flexShrink: 0 }} />}
        </div>;
      })}
    </nav>

    {/* Online status */}
    <div style={{ padding: "8px 12px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", borderRadius: 10, background: online ? `${C.success}0C` : `${C.danger}0C`, border: `1px solid ${online ? C.success : C.danger}20` }}>
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: online ? C.success : C.danger, animation: online ? "pulse 2s infinite" : "none", flexShrink: 0 }} />
        <span style={{ fontSize: 11, fontWeight: 500, color: online ? C.success : C.danger }}>{online ? "Online · Synced" : "Offline mode"}</span>
      </div>
    </div>

    {/* User footer */}
    <div style={{ padding: "10px 14px 14px", borderTop: `1px solid ${C.border}` }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Ava user={u} size={34} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: C.text, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{u.name.split(" ").slice(0, 2).join(" ")}</div>
          <RB role={u.role} sm />
        </div>
        <button onClick={onLogout} title="Sign out" style={{ background: "transparent", border: `1px solid ${C.border}`, borderRadius: 8, cursor: "pointer", color: C.textMuted, fontSize: 14, padding: "5px 7px", lineHeight: 1, transition: "all .15s" }} onMouseEnter={e => { e.currentTarget.style.borderColor = C.danger; e.currentTarget.style.color = C.danger; }} onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.textMuted; }}>↩</button>
      </div>
    </div>
  </div>;

  return <div style={{ display: "flex", minHeight: "100vh" }}>
    {/* Mobile overlay */}
    {sidebarOpen && <div onClick={closeSidebar} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.65)", zIndex: 998, backdropFilter: "blur(4px)" }} className="show-mobile" />}

    {/* Desktop sidebar */}
    <aside style={{ width: 232, background: C.gradSidebar, borderRight: `1px solid ${C.border}`, display: "flex", flexDirection: "column", flexShrink: 0, position: "sticky", top: 0, height: "100vh", overflowY: "auto" }} className="hide-mobile">
      <SidebarContent mobile={false} />
    </aside>

    {/* Mobile sidebar */}
    <aside style={{ width: 248, background: C.gradSidebar, borderRight: `1px solid ${C.border}`, display: "flex", flexDirection: "column", position: "fixed", top: 0, left: 0, height: "100vh", zIndex: 999, transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)", transition: "transform .25s cubic-bezier(.4,0,.2,1)", boxShadow: sidebarOpen ? "8px 0 32px rgba(0,0,0,.4)" : "none" }} className="show-mobile">
      <SidebarContent mobile={true} />
    </aside>

    {/* Main content */}
    <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0, background: C.bg }} className="main-content">

      {/* Inline responsive CSS */}
      <style>{`
        .show-mobile{display:none}
        .main-content{margin-left:0}
        @media(max-width:768px){
          .show-mobile{display:flex!important}
          .hide-mobile{display:none!important}
        }
        table{border-collapse:collapse;width:100%;}
        tr:hover td{background:${C.surfaceHover};}
      `}</style>

      {/* Top bar */}
      <div style={{ height: 58, background: `${C.bgCard}E0`, backdropFilter: "blur(12px)", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", padding: "0 20px", gap: 14, flexShrink: 0, position: "sticky", top: 0, zIndex: 100 }}>
        {/* Hamburger */}
        <button onClick={() => setSidebarOpen(true)} className="show-mobile" style={{ background: "transparent", border: `1px solid ${C.border}`, color: C.textMuted, fontSize: 16, cursor: "pointer", padding: "6px 9px", borderRadius: 9, lineHeight: 1, flexShrink: 0 }}>☰</button>

        {/* Breadcrumb title */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 8 }} className="topbar-title">
          <span style={{ fontSize: 16, fontWeight: 700, color: C.text, letterSpacing: "-0.3px" }}>{NAV.find(n => n.id === page.view)?.label || "Dashboard"}</span>
          {page.sub && <>
            <span style={{ color: C.textDim, fontSize: 13 }}>›</span>
            <span style={{ fontSize: 13, color: C.textMuted, fontWeight: 400 }}>{page.sub}</span>
          </>}
        </div>

        {/* Notification bell */}
        <div onClick={() => setNotifOpen(p => !p)} style={{ position: "relative", cursor: "pointer", width: 36, height: 36, borderRadius: 10, background: unread > 0 ? `${C.gold}12` : C.surface, border: `1px solid ${unread > 0 ? C.gold+"30" : C.border}`, display: "flex", alignItems: "center", justifyContent: "center", transition: "all .15s", flexShrink: 0 }}>
          <span style={{ fontSize: 14 }}>🔔</span>
          {unread > 0 && <span style={{ position: "absolute", top: -3, right: -3, minWidth: 16, height: 16, background: `linear-gradient(135deg,${C.danger},${C.dangerLight})`, borderRadius: 20, fontSize: 9, fontWeight: 700, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", border: `2px solid ${C.bg}`, padding: "0 3px" }}>{unread}</span>}
        </div>

        {/* User chip */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 10px 5px 5px", borderRadius: 20, background: C.surface, border: `1px solid ${C.border}`, cursor: "default" }}>
          <Ava user={u} size={26} />
          <span style={{ fontSize: 12, fontWeight: 500, color: C.text, whiteSpace: "nowrap", maxWidth: 100, overflow: "hidden", textOverflow: "ellipsis" }} className="hide-mobile">{u.name.split(" ")[0]}</span>
        </div>
      </div>

      {/* Page content */}
      <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px", minHeight: 0, animation: "fadeUp .25s ease both" }} className="page-pad">
        <PageRouter />
      </div>
    </div>
  </div>;
}

function PageRouter() {
  const { page, currentUser: u } = useApp();
  if (u.role === "driver") return <DriverHome />;
  const views = { home: <HomePage />, coffee: <CoffeePage />, machinery: <MachineryPage />, construction: <ConstructionPage />, warehouse: <WarehousePage />, reports: <ReportsPage />, users: <UsersPage />, system: <SystemPage />, import: <ImportPage /> };
  return <div style={{ animation: "fadeUp .3s ease both" }}>{views[page.view] || <HomePage />}</div>;
}
function HomePage() {
  const { currentUser: u, cherry, expenses, cashbook, fundRequests, cwsList, machTx, machines, tasks, users, system, setPage } = useApp();
  if (u.role === "clerk") {
    const myCws = cwsList.find((c) => (u.cwsAccess || []).includes(c.id));
    const myCherry = cherry.filter((c) => (u.cwsAccess || []).includes(c.cwsId));
    const todayCherry = myCherry.filter((c) => c.date === today());
    return <div>
        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 22, fontWeight: 700, color: C.text, letterSpacing: '-0.4px', marginBottom: 4 }}>My Dashboard</div>
        <div style={{ fontSize: 13, color: C.textMuted, marginBottom: 18 }}>{ROLES[u.role]?.label} · {myCws?.name}</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 12, marginBottom: 18 }}>
          <SC label="Today's Deliveries" value={todayCherry.length} color={C.coffee} />
          <SC label="Today's kg (Standard)" value={fmtKg(todayCherry.reduce((s, c) => s + (+c.standardKg || 0), 0))} color={C.coffeeLight} />
          <SC label="Today's Total Paid" value={fmtRWF(todayCherry.reduce((s, c) => s + (+c.totalPaid || 0), 0))} color={C.gold} />
        </div>
        <div style={{ background: C.gradCard, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
          <div style={{ padding: "12px 18px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13 }}>Recent GNR Entries</div>
          <GNRTable rows={myCherry.slice(0, 8)} cwsList={cwsList} farmers={[]} />
        </div>
      </div>;
  }
  if (u.role === "cashier") {
    const myCws = cwsList.find((c) => (u.cwsAccess || []).includes(c.id));
    const myCwsId = (u.cwsAccess || [])[0];
    const myCherry = cherry.filter((c) => c.cwsId === myCwsId);
    const pendingPayment = myCherry.filter((c) => c.status === "pending");
    const notPaid = myCherry.filter((c) => c.status === "not_paid");
    const myCashbook = cashbook.filter((c) => c.cwsId === myCwsId);
    const cashBalance = myCashbook.reduce((s, c) => c.type === "inflow" ? s + (+c.amount || 0) : s - c.amount, 0);
    const paidToday = myCherry.filter((c) => c.date === today() && c.status === "paid");
    return <div>
        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 22, fontWeight: 700, color: C.text, letterSpacing: '-0.4px', marginBottom: 4 }}>My Dashboard</div>
        <div style={{ fontSize: 13, color: C.textMuted, marginBottom: 14 }}>{ROLES[u.role]?.label} · {myCws?.name}</div>
        {pendingPayment.length > 0 && <Alert text={`\u{1F4CB} ${pendingPayment.length} GNR(s) from clerk awaiting your payment confirmation.`} color={C.warning} />}
        {notPaid.length > 0 && <div style={{ marginTop: 8 }}><Alert text={`\u26A0 ${notPaid.length} GNR(s) marked NOT PAID \u2014 station owes these farmers ${fmtRWF(notPaid.reduce((s, c) => s + (+c.totalPaid || 0), 0))}`} color={C.danger} /></div>}
        <div className="kpi-grid" style={{ display: "grid", gap: 12, marginTop: 14, marginBottom: 14  }}>
          <SC label="Cash Balance" value={fmtRWF(cashBalance)} color={cashBalance > 5e5 ? C.success : C.danger} sub="Available at station" />
          <SC label="Pending GNRs" value={pendingPayment.length} color={pendingPayment.length > 0 ? C.warning : C.success} sub="Awaiting payment" />
          <SC label="Not Paid (owed)" value={notPaid.length} color={notPaid.length > 0 ? C.danger : C.success} sub="Farmer debts" />
          <SC label="Paid Today" value={paidToday.length} color={C.coffee} sub={`${fmtRWF(paidToday.reduce((s, c) => s + (+c.totalPaid || 0), 0))}`} />
        </div>
        {pendingPayment.length > 0 && <div style={{ background: C.gradCard, border: `1px solid ${C.warning}28`, borderRadius: 12, overflow: "hidden", marginBottom: 14 }}>
            <div style={{ padding: "11px 16px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13, color: C.warning }}>
              GNRs Waiting for Payment
              <button onClick={() => setPage({ view: "coffee", sub: myCwsId })} style={{ ...BtnS(C.warning, true), marginLeft: 14, fontSize: 10, padding: "3px 9px" }}>Open Station →</button>
            </div>
            <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead><tr style={{ background: C.surface }}>{["GNR #", "Farmer", "Date", "kg", "Total to Pay"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
              <tbody>{pendingPayment.slice(0, 5).map((gnr) => {
      const f = (farmers2||[]).find((x) => x.id === gnr.farmerId);
      return <tr key={gnr.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                  <Td style={{ color: C.gold, fontWeight: 700 }}>{gnr.gnrNumber}</Td>
                  <Td style={{ fontWeight: 600 }}>{f?.name || gnr.farmerId}</Td>
                  <Td style={{ color: C.textMuted }}>{gnr.date}</Td>
                  <Td style={{ color: C.coffee }}>{(+(gnr.totalKg||0)).toLocaleString()} kg</Td>
                  <Td style={{ fontWeight: 700, color: C.danger }}>{fmtRWF(gnr.totalPaid)}</Td>
                </tr>;
    })}</tbody>
            </table></div>
          </div>}
        <div style={{ background: C.gradCard, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
          <div style={{ padding: "12px 18px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13 }}>Today's Cash Book</div>
          <CashTable rows={myCashbook.slice(0, 8)} />
        </div>
      </div>;
  }
  if (u.role === "station_manager") {
    const myCwsId = (u.cwsAccess || [])[0];
    const myCws = cwsList.find((c) => c.id === myCwsId);
    const myCherry = cherry.filter((c) => c.cwsId === myCwsId);
    const myExp = expenses.filter((e) => e.cwsId === myCwsId);
    const myCash = cashbook.filter((c) => c.cwsId === myCwsId);
    const cashBal = myCash.reduce((s, c) => c.type === "inflow" ? s + (+c.amount || 0) : s - c.amount, 0);
    const myFR = fundRequests.filter((f) => f.cwsId === myCwsId);
    const totalKg = myCherry.reduce((s, c) => s + (+c.totalKg || 0), 0);
    const totalPaid = myCherry.reduce((s, c) => s + (+c.totalPaid || 0), 0);
    const totalExp2 = myExp.reduce((s, e) => s + (+e.amount || 0), 0);
    return <div>
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 26, letterSpacing: '-0.5px', fontWeight: 700, color: C.text }}>Good {(/* @__PURE__ */ new Date()).getHours() < 12 ? "morning" : "afternoon"}, {u.name.split(" ")[0]}</div>
          <div style={{ fontSize: 13, color: C.textMuted, marginTop: 2 }}>{ROLES[u.role]?.label} · {myCws?.name} · {(/* @__PURE__ */ new Date()).toLocaleDateString("en-RW", { weekday: "long", month: "long", day: "numeric" })}</div>
        </div>
        {cashBal < 5e5 && <Alert text={`\u26A0 Low cash balance at station: ${fmtRWF(cashBal)}. Consider requesting funds from HQ.`} color={C.danger} />}
        <div className="kpi-grid" style={{ display: "grid", gap: 12, marginBottom: 18, marginTop: cashBal < 5e5 ? 12 : 0  }}>
          <SC label="Total Cherry (kg)" value={fmtKg(totalKg)} color={C.coffee} />
          <SC label="Total Payments" value={fmtRWF(totalPaid)} color={C.danger} />
          <SC label="Total Expenses" value={fmtRWF(totalExp2)} color={C.warning} />
          <SC label="Cash Available" value={fmtRWF(cashBal)} color={cashBal > 5e5 ? C.success : C.danger} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 14, marginBottom: 18 }}>
          <div style={{ background: C.gradCard, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
            <div style={{ padding: "12px 18px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13 }}>Recent Cherry Deliveries</div>
            <GNRTable rows={myCherry.slice(0, 5)} cwsList={cwsList} farmers={[]} />
          </div>
          <div style={{ background: C.gradCard, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
            <div style={{ padding: "12px 18px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13 }}>Fund Requests</div>
            <FundTable rows={myFR} users={[]} short cwsList={cwsList} />
          </div>
        </div>
      </div>;
  }
  const totalCherryKg = cherry.reduce((s, c) => s + (+c.totalKg || 0), 0);
  const totalCherryPaid = cherry.reduce((s, c) => s + (+c.totalPaid || 0), 0);
  const totalExp = expenses.reduce((s, e) => s + (+e.amount || 0), 0);
  const totalMachIncome = machTx.filter((t) => t.type === "income").reduce((s, t) => s + (+t.amount || 0), 0);
  const pendingFR = fundRequests.filter((f) => ["pending_verification", "pending_approval"].includes(f.status));
  const stationData = cwsList.map((cws) => ({
    name: cws.name.replace(" CWS", ""),
    "Cherry kg": cherry.filter((c) => c.cwsId === cws.id).reduce((s, c) => s + (+c.totalKg || 0), 0),
    "Payments (k RWF)": +(cherry.filter((c) => c.cwsId === cws.id).reduce((s, c) => s + (+c.totalPaid || 0), 0) / 1000).toFixed(1)
  }));
  return <div>
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 26, letterSpacing: '-0.5px', fontWeight: 700, color: C.text }}>Good {(/* @__PURE__ */ new Date()).getHours() < 12 ? "morning" : "afternoon"}, {u.name.split(" ")[0]}</div>
        <div style={{ fontSize: 13, color: C.textMuted, marginTop: 2 }}>{ROLES[u.role]?.label} · {(/* @__PURE__ */ new Date()).toLocaleDateString("en-RW", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</div>
      </div>
      <AlertsPanel />
      {pendingFR.length > 0 && canVerifyFunds(u.role) && <div style={{ marginBottom: 16, background: `${C.warning}0A`, border: `1px solid ${C.warning}28`, borderRadius: 12, overflow: "hidden" }}>
          <div style={{ padding: "11px 16px", borderBottom: `1px solid ${C.warning}18`, display: "flex", alignItems: "center", gap: 8 }}>
            <span>💰</span><span style={{ fontWeight: 700, fontSize: 13, color: C.warning }}>{pendingFR.length} Fund Request{pendingFR.length > 1 ? "s" : ""} Pending Action</span>
            <button onClick={() => setPage({ view: "coffee", sub: "fund_requests" })} style={{ ...BtnS(C.warning, true), marginLeft: "auto", fontSize: 11, padding: "5px 11px" }}>Review →</button>
          </div>
          {pendingFR.slice(0, 3).map((fr) => {
    const cws = cwsList.find((c) => c.id === fr.cwsId);
    return <div key={fr.id} style={{ padding: "9px 16px", fontSize: 12, borderBottom: `1px solid ${C.border}15`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: C.text }}>{cws?.name} · {fmtRWF(fr.amount)}</span>
              <SB status={fr.status} />
            </div>;
  })}
        </div>}
      <div className="kpi-grid" style={{ display: "grid", gap: 12, marginBottom: 18  }}>
        <SC label="Total Cherry Purchased" value={fmtKg(totalCherryKg)} color={C.coffee} sub="All stations combined" />
        <SC label="Total Cherry Payments" value={fmtRWF(totalCherryPaid)} color={C.danger} sub="Paid to farmers" />
        <SC label="Total Expenses" value={fmtRWF(totalExp)} color={C.warning} sub="All stations" />
        <SC label="Machine Revenue" value={fmtRWF(totalMachIncome)} color={C.machinery} sub="Bender Machine" />
      </div>
      <h3 style={{ fontFamily: "'Inter',sans-serif", fontSize: 16, letterSpacing: '-0.2px', fontWeight: 700, color: C.text, marginBottom: 12 }}>Business Units</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 14, marginBottom: 18 }}>
        <BizCard
    id="coffee"
    label={((system||{}).labels||{}).coffee || "Bender Coffee"}
    icon="☕"
    color={C.coffee}
    colorLight={C.coffeeLight}
    colorBg={C.coffeeBg}
    image={(system?.businessModels||[]).find(m=>m.id==="coffee")?.image||""}
    stats={[{ l: "Cherry Purchased", v: fmtKg(totalCherryKg) }, { l: "Farmer Payments", v: fmtRWF(totalCherryPaid) }, { l: "Active Stations", v: cwsList.length }]}
  />
        <BizCard
    id="machinery"
    label={((system||{}).labels||{}).machinery || "Bender Machine"}
    icon="🏗️"
    color={C.machinery}
    colorLight={C.machineryLight}
    colorBg={C.machineryBg}
    image={(system?.businessModels||[]).find(m=>m.id==="machinery")?.image||""}
    stats={[{ l: "Revenue", v: fmtRWF(totalMachIncome) }, { l: "Machines", v: (machines||[]).length }, { l: "Active Tasks", v: (tasks||[]).length }]}
  />
        <BizCard
    id="construction"
    label={((system||{}).labels||{}).construction || "Bender Construction"}
    icon="🏛️"
    color={C.construction}
    colorLight={C.constructionLight}
    colorBg={C.constructionBg}
    image={(system?.businessModels||[]).find(m=>m.id==="construction")?.image||""}
    stats={[{ l: "Projects", v: "0" }, { l: "Status", v: "Upcoming" }, { l: "Revenue", v: "0 RWF" }]}
  />
      </div>
      <div style={{ background: C.gradCard, border: `1px solid ${C.border}`, borderRadius: 14, padding: "16px 16px 8px" }}>
        <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 4 }}>Station Comparison — Cherry Purchased</div>
        <div style={{ fontSize: 11, color: C.textDim, marginBottom: 12 }}>kg purchased · Payments in thousands RWF</div>
        {stationData.every(d => d["Cherry kg"] === 0)
          ? <div style={{ padding: "28px 0", textAlign: "center", color: C.textDim, fontSize: 12 }}>No cherry data yet — entries will appear here once clerks submit GNRs</div>
          : <ResponsiveContainer width="100%" height={180}>
              <BarChart data={stationData} barGap={4} barCategoryGap="30%" margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={C.border} vertical={false} />
                <XAxis dataKey="name" tick={{ fill: C.textMuted, fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: C.textMuted, fontSize: 10 }} tickFormatter={(v) => v >= 1000 ? `${(v/1000).toFixed(0)}k` : v} axisLine={false} tickLine={false} width={36} />
                <Tooltip contentStyle={{ background: C.gradCard, border: `1px solid ${C.border}`, borderRadius: 12, fontSize: 12 }} formatter={(v, n) => [n === "Payments (k RWF)" ? fmtRWF(v * 1000) : fmtKg(v), n]} />
                <Legend wrapperStyle={{ fontSize: 11, paddingTop: 8 }} />
                <Bar dataKey="Cherry kg" fill={C.coffee} radius={[4, 4, 0, 0]} />
                <Bar dataKey="Payments (k RWF)" fill={C.gold} radius={[4, 4, 0, 0]} opacity={0.8} />
              </BarChart>
            </ResponsiveContainer>}
      </div>
    </div>;
}
/* ── ImagePicker ── reusable image selector (file upload + URL) ────── */
function ImagePicker({ value, onChange, height = 90, label = "Image" }) {
  const id = "img-pick-" + Math.random().toString(36).slice(2);
  return <div>
    <div style={{ fontSize: 10, fontWeight: 600, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.7px", marginBottom: 6 }}>{label}</div>
    {/* Preview */}
    {value
      ? <div style={{ position: "relative", borderRadius: 8, overflow: "hidden", height, marginBottom: 7, border: `1px solid ${C.border}` }}>
          <img src={value} alt="preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <button onClick={() => onChange("")} style={{ position: "absolute", top: 5, right: 5, background: "rgba(0,0,0,.75)", border: "none", borderRadius: 5, color: "#fff", fontSize: 10, padding: "3px 7px", cursor: "pointer", fontWeight: 700 }}>✕</button>
        </div>
      : <div style={{ height, border: `2px dashed ${C.border}`, borderRadius: 8, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4, marginBottom: 7, color: C.textDim, fontSize: 11, cursor: "pointer" }} onClick={() => document.getElementById(id).click()}>
          <span style={{ fontSize: 20, opacity: .35 }}>🖼</span>
          Click to add image
        </div>}
    {/* File input */}
    <input type="file" id={id} accept="image/*" style={{ display: "none" }} onChange={(e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      if (file.size > 5 * 1024 * 1024) { alert("Image must be under 5 MB"); return; }
      const reader = new FileReader();
      reader.onload = (ev) => onChange(ev.target.result);
      reader.readAsDataURL(file);
      e.target.value = "";
    }} />
    {/* Buttons row */}
    <div style={{ display: "flex", gap: 6 }}>
      <button onClick={() => document.getElementById(id).click()} style={{ ...BtnS(C.gold, true), flex: 1, justifyContent: "center", fontSize: 11, padding: "6px 10px" }}>📁 Upload</button>
      <input
        type="url"
        placeholder="or paste URL…"
        value={value?.startsWith("data:") ? "" : (value || "")}
        onChange={(e) => onChange(e.target.value)}
        style={{ flex: 2, padding: "6px 10px", background: C.bgDeep, border: `1.5px solid ${C.border}`, borderRadius: 8, color: C.text, fontSize: 11, outline: "none" }}
        onFocus={e => { e.target.style.borderColor = C.gold; }}
        onBlur={e => { e.target.style.borderColor = C.border; }}
      />
    </div>
  </div>;
}

function BizCard({ id, label, icon, color, colorLight, colorBg, image, stats = [] }) {
  const { setPage } = useApp();
  return <div onClick={() => setPage({ view: id, sub: null })} style={{ background: `linear-gradient(145deg,${colorBg},${C.bgCard})`, border: `1px solid ${color}28`, borderRadius: 13, cursor: "pointer", transition: "all .2s", position: "relative", overflow: "hidden" }} onMouseEnter={(e) => {
    e.currentTarget.style.borderColor = `${color}55`;
    e.currentTarget.style.transform = "translateY(-3px)";
  }} onMouseLeave={(e) => {
    e.currentTarget.style.borderColor = `${color}28`;
    e.currentTarget.style.transform = "translateY(0)";
  }}>
      {/* Optional photo header */}
      {image && <div style={{ height: 72, position: "relative" }}>
        <img src={image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom, transparent 30%, ${colorBg}DD)` }} />
      </div>}
      <div style={{ padding: "14px 16px", position: "relative" }}>
        {!image && <div style={{ position: "absolute", top: -15, right: -15, fontSize: 55, opacity: 0.05 }}>{icon}</div>}
        <div style={{ fontSize: 24, marginBottom: 8 }}>{icon}</div>
        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 16, letterSpacing: '-0.2px', fontWeight: 700, color: colorLight, marginBottom: 10 }}>{label}</div>
        {stats.map((s) => <div key={s.l} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
            <span style={{ fontSize: 10, color: C.textDim }}>{s.l}</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: C.text }}>{s.v}</span>
          </div>)}
        <div style={{ marginTop: 10, fontSize: 11, color, fontWeight: 700 }}>Open {label} →</div>
      </div>
    </div>;
}
function CoffeePage() {
  const { currentUser: u, cwsList, cherry, expenses, cashbook, farmers: farmers2, fundRequests, seasons, stationSeasons, page, setPage, addNote } = useApp();
  const accessible = canSeeAllStations(u.role) ? cwsList : cwsList.filter((c) => (u.cwsAccess || []).includes(c.id));
  if (page.sub === "fund_requests") return <FundRequestsPage onBack={() => setPage({ view: "coffee", sub: null })} />;
  if (page.sub === "seasons") return <SeasonsPage onBack={() => setPage({ view: "coffee", sub: null })} />;
  if (page.sub && cwsList.find((c) => c.id === page.sub)) return <CWSDetailPage cwsId={page.sub} onBack={() => setPage({ view: "coffee", sub: null })} />;
  const activeSeason = seasons.find((s) => s.status === "active");
  const totalKg = cherry.reduce((s, c) => s + (+c.totalKg || 0), 0);
  const totalPaid = cherry.reduce((s, c) => s + (+c.totalPaid || 0), 0);
  const pendingFR = fundRequests.filter((f) => ["pending_verification", "pending_approval"].includes(f.status)).length;
  return <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14, flexWrap: "wrap", gap: 10 }}>
        <div><div style={{ fontFamily: "'Inter',sans-serif", fontSize: 22, fontWeight: 700, color: C.text, letterSpacing: '-0.4px' }}>Bender Coffee</div><div style={{ fontSize: 13, color: C.textMuted }}>Cherry Purchasing · Farmer Management · Cash & Bank · Reports</div></div>
        <div style={{ display: "flex", gap: 8 }}>
          {canManageSeason(u.role) && <button onClick={() => setPage({ view: "coffee", sub: "seasons" })} style={{ ...BtnS(C.gold, true), fontSize: 11, padding: "7px 13px" }}>🗓 Seasons</button>}
          {canVerifyFunds(u.role) && pendingFR > 0 && <button onClick={() => setPage({ view: "coffee", sub: "fund_requests" })} style={{ ...BtnS(C.warning), padding: "7px 14px", fontSize: 12 }}>💰 {pendingFR} Fund Requests</button>}
        </div>
      </div>
      {activeSeason ? <div style={{ marginBottom: 14, padding: "10px 16px", background: `${C.success}0A`, border: `1px solid ${C.success}28`, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span>🌱</span>
            <div><div style={{ fontWeight: 700, fontSize: 13, color: C.success }}>{activeSeason.name} — Active</div>
            <div style={{ fontSize: 11, color: C.textMuted }}>{activeSeason.startDate} → {activeSeason.endDate || "Ongoing"} · Std: {activeSeason.rateStandard} RWF/kg · Flt: {activeSeason.rateFlotant} RWF/kg</div></div>
          </div>
          {canManageSeason(u.role) && <button onClick={() => setPage({ view: "coffee", sub: "seasons" })} style={{ ...BtnS(C.gold, true), fontSize: 10, padding: "4px 10px" }}>Manage →</button>}
        </div> : <div style={{ marginBottom: 14, padding: "12px 16px", background: `${C.danger}0A`, border: `1px solid ${C.danger}28`, borderRadius: 10 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: C.danger }}>⚠ No Active Season</div>
          <div style={{ fontSize: 12, color: C.textMuted, marginTop: 2 }}>{canManageSeason(u.role) ? "Create and open a season before station operations can begin." : "Operations are blocked until the MD opens a new season."}</div>
          {canManageSeason(u.role) && <button onClick={() => setPage({ view: "coffee", sub: "seasons" })} style={{ ...BtnS(C.danger), marginTop: 8, fontSize: 11, padding: "5px 12px" }}>Open Season →</button>}
        </div>}
      <div className="kpi-grid" style={{ display: "grid", gap: 12, marginBottom: 20  }}>
        <SC label="Total Cherry (kg)" value={fmtKg(totalKg)} color={C.coffee} sub={`${cherry.length} GNR records`} />
        <SC label="Farmer Payments" value={fmtRWF(totalPaid)} color={C.danger} />
        <SC label="Active Stations" value={accessible.length} color={C.success} />
        <SC label="Registered Farmers" value={farmers2.filter((f) => accessible.map((c) => c.id).includes(f.cwsId)).length} color={C.info} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 14, marginBottom: 20 }}>
        {accessible.map((cws, i) => {
    const cCherry = cherry.filter((c) => c.cwsId === cws.id);
    const cCash = cashbook.filter((c) => c.cwsId === cws.id);
    const cashBal = cCash.reduce((s, c) => c.type === "inflow" ? s + (+c.amount || 0) : s - c.amount, 0);
    const kg = cCherry.reduce((s, c) => s + (+c.totalKg || 0), 0);
    const paid = cCherry.reduce((s, c) => s + (+c.totalPaid || 0), 0);
    const pendingGNR = cCherry.filter((c) => c.status === "pending").length;
    const mySS = stationSeasons.find((ss) => ss.cwsId === cws.id && ss.status === "active");
    return <div key={cws.id} onClick={() => setPage({ view: "coffee", sub: cws.id })} style={{ background: `linear-gradient(145deg,${C.coffeeBg},${C.bgCard})`, border: `1px solid ${mySS ? C.coffee + "28" : C.border}`, borderRadius: 13, padding: "18px", cursor: "pointer", transition: "all .2s", animation: `fadeUp .3s ease ${i * 0.08}s both`, position: "relative", overflow: "hidden" }} onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = `${C.coffee}55`;
      e.currentTarget.style.transform = "translateY(-2px)";
    }} onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = mySS ? `${C.coffee}28` : C.border;
      e.currentTarget.style.transform = "translateY(0)";
    }}>
              <img src={cws.image} alt="" style={{ position: "absolute", right: 0, top: 0, height: "100%", width: "40%", objectFit: "cover", opacity: 0.08 }} />
              <div style={{ position: "relative" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                  <span style={{ fontSize: 22 }}>☕</span>
                  {mySS ? <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 7px", borderRadius: 10, background: `${C.success}18`, color: C.success }}>Season Active</span> : <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 7px", borderRadius: 10, background: `${C.danger}18`, color: C.danger }}>No Season</span>}
                </div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 17, letterSpacing: '-0.2px', fontWeight: 700, color: C.coffeeLight, marginBottom: 1 }}>{cws.name}</div>
                <div style={{ fontSize: 11, color: C.textMuted, marginBottom: 10 }}>{cws.region}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 5, borderTop: `1px solid ${C.coffee}18`, paddingTop: 9 }}>
                  {[["\u{1F352} Cherry Purchased", fmtKg(kg), C.coffeeLight], ["\u{1F4B0} Farmer Payments", fmtRWF(paid), C.danger], ["\u{1F3E6} Cash Balance", fmtRWF(cashBal), cashBal > 3e5 ? C.success : C.danger], ["\u23F3 Pending GNRs", pendingGNR, pendingGNR > 0 ? C.warning : C.success]].map(([l, v, c]) => <div key={l} style={{ display: "flex", justifyContent: "space-between" }}><span style={{ fontSize: 10, color: C.textDim }}>{l}</span><span style={{ fontSize: 11, fontWeight: 700, color: c }}>{v}</span></div>)}
                </div>
                <div style={{ marginTop: 10, fontSize: 11, color: C.coffee, fontWeight: 700 }}>Open {cws.name} →</div>
              </div>
            </div>;
  })}
      </div>
      {canSeeAllStations(u.role) && <div style={{ background: C.gradCard, border: `1px solid ${C.border}`, borderRadius: 14, padding: "16px 16px 8px" }}>
          <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 14 }}>All Stations — Cherry kg vs Farmer Payments</div>
          {cwsList.every(cws => cherry.filter(c => c.cwsId === cws.id).length === 0)
            ? <div style={{ padding: "28px 0", textAlign: "center", color: C.textDim, fontSize: 12 }}>No cherry entries yet across any station</div>
            : <ResponsiveContainer width="100%" height={180}>
                <BarChart data={cwsList.map((cws) => ({ name: cws.name.replace(" CWS", ""), "Cherry kg": cherry.filter((c) => c.cwsId === cws.id).reduce((s, c) => s + (+c.totalKg || 0), 0), "Payments (k RWF)": +(cherry.filter((c) => c.cwsId === cws.id).reduce((s, c) => s + (+c.totalPaid || 0), 0) / 1000).toFixed(1) }))} barGap={4} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={C.border} vertical={false} />
                  <XAxis dataKey="name" tick={{ fill: C.textMuted, fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: C.textMuted, fontSize: 10 }} tickFormatter={(v) => v >= 1000 ? `${(v/1000).toFixed(0)}k` : v} axisLine={false} tickLine={false} width={36} />
                  <Tooltip contentStyle={{ background: C.gradCard, border: `1px solid ${C.border}`, borderRadius: 12, fontSize: 12 }} formatter={(v, n) => [n === "Payments (k RWF)" ? fmtRWF(v * 1000) : fmtKg(v), n]} />
                  <Legend wrapperStyle={{ fontSize: 11, paddingTop: 8 }} />
                  <Bar dataKey="Cherry kg" fill={C.coffee} radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Payments (k RWF)" fill={C.gold} radius={[4, 4, 0, 0]} opacity={0.8} />
                </BarChart>
              </ResponsiveContainer>}
        </div>}
    </div>;
}
function SeasonsPage({ onBack }) {
  const { currentUser: u, seasons, setSeasons, stationSeasons, setStationSeasons, cwsList, addNote } = useApp();
  const [showForm, setShowForm] = useState(false);
  const [showEnrollForm, setShowEnrollForm] = useState(null);
  const [form, setForm] = useState({ name: "", startDate: "", endDate: "", rateStandard: "155", rateFlotant: "80", notes: "" });
  const [enrollForm, setEnrollForm] = useState({ cwsId: "", startDate: today() });
  const activeSeason = seasons.find((s) => s.status === "active");
  const createSeason = () => {
    if (!form.name || !form.startDate) return;
    if (activeSeason) {
      addNote("Close the current active season before opening a new one", "warning");
      return;
    }
    setSeasons((p) => [{ id: uid(), name: form.name, startDate: form.startDate, endDate: form.endDate || null, rateStandard: +form.rateStandard, rateFlotant: +form.rateFlotant, status: "active", createdBy: u.id, createdAt: today(), closedAt: null, notes: form.notes }, ...p]);
    setShowForm(false);
    setForm({ name: "", startDate: "", endDate: "", rateStandard: "155", rateFlotant: "80", notes: "" });
    addNote("New season created and opened", "success");
  };
  const closeSeason = (id) => {
    setSeasons((p) => p.map((s) => s.id === id ? { ...s, status: "closed", closedAt: (/* @__PURE__ */ new Date()).toLocaleString() } : s));
    setStationSeasons((p) => p.map((ss) => ss.seasonId === id && ss.status === "active" ? { ...ss, status: "closed", endDate: today() } : ss));
    addNote("Season closed \u2014 all station enrollments ended", "warning");
  };
  const enrollStation = () => {
    if (!enrollForm.cwsId || !activeSeason) return;
    if (stationSeasons.find((ss) => ss.cwsId === enrollForm.cwsId && ss.seasonId === activeSeason.id)) return;
    setStationSeasons((p) => [...p, { id: uid(), seasonId: activeSeason.id, cwsId: enrollForm.cwsId, startDate: enrollForm.startDate, endDate: null, status: "active" }]);
    setShowEnrollForm(null);
    addNote(`${cwsList.find((c) => c.id === enrollForm.cwsId)?.name} enrolled in season`, "success");
  };
  const closeStationSeason = (ssId) => {
    setStationSeasons((p) => p.map((ss) => ss.id === ssId ? { ...ss, status: "closed", endDate: today() } : ss));
    addNote("Station season closed", "info");
  };
  return <div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
        <button onClick={onBack} style={{ ...BtnS(C.border, false, true), padding: "6px 12px", fontSize: 12 }}>← Back</button>
        <div><div style={{ fontFamily: "'Inter',sans-serif", fontSize: 20, letterSpacing: '-0.3px', fontWeight: 700, color: C.goldLight }}>Season Management</div>
        <div style={{ fontSize: 12, color: C.textMuted }}>MD creates & closes seasons · Stations join individually</div></div>
        {canManageSeason(u.role) && !activeSeason && <button onClick={() => setShowForm(true)} style={{ ...BtnS(C.success), marginLeft: "auto", padding: "8px 16px", fontSize: 12 }}>+ Open New Season</button>}
        {canManageSeason(u.role) && activeSeason && <button onClick={() => setShowEnrollForm(activeSeason.id)} style={{ ...BtnS(C.coffee, true), marginLeft: "auto", padding: "7px 13px", fontSize: 11 }}>+ Enroll Station</button>}
      </div>
      {canManageSeason(u.role) && activeSeason && (
        <div style={{ marginBottom: 14, padding: "10px 14px", background: `${C.warning}0A`, border: `1px solid ${C.warning}28`, borderRadius: 10, fontSize: 12, color: C.warning }}>
          ⚠ A season is currently active — close it first before opening a new one.
        </div>
      )}
      {seasons.length === 0 && <ES text="No seasons yet — click '+ Open New Season' to create the first one." />}
      {seasons.map((season) => {
    const seasonSS = stationSeasons.filter((ss) => ss.seasonId === season.id);
    const isActive = season.status === "active";
    return <div key={season.id} style={{ background: C.gradCard, border: `1px solid ${isActive ? C.success + "28" : C.border}`, borderRadius: 12, marginBottom: 14, overflow: "hidden" }}>
            <div style={{ padding: "14px 18px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 17, letterSpacing: '-0.2px', fontWeight: 700, color: isActive ? C.success : C.textMuted }}>{season.name}</div>
                <div style={{ fontSize: 11, color: C.textMuted }}>{season.startDate} → {season.endDate || "Open ended"} · Std Rate: <b style={{ color: C.gold }}>{season.rateStandard} RWF/kg</b> · Flt Rate: <b style={{ color: C.gold }}>{season.rateFlotant} RWF/kg</b></div>
                {season.notes && <div style={{ fontSize: 11, color: C.textDim, marginTop: 2 }}>{season.notes}</div>}
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <SB status={season.status} />
                {canManageSeason(u.role) && isActive && <button onClick={() => closeSeason(season.id)} style={{ ...BtnS(C.danger, false, true), fontSize: 11, padding: "5px 11px" }}>Close Season</button>}
              </div>
            </div>
            <div style={{ padding: "12px 18px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: C.textDim, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 10 }}>Station Enrollments</div>
              {seasonSS.length === 0 ? <div style={{ fontSize: 12, color: C.textDim }}>No stations enrolled yet</div> : <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 8 }}>
                  {seasonSS.map((ss) => {
      const cws = cwsList.find((c) => c.id === ss.cwsId);
      return <div key={ss.id} style={{ padding: "8px 12px", background: C.surface, borderRadius: 8, border: `1px solid ${ss.status === "active" ? C.success + "20" : C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div><div style={{ fontSize: 12, fontWeight: 600, color: C.text }}>{cws?.name || ss.cwsId}</div>
                      <div style={{ fontSize: 10, color: C.textMuted }}>{ss.startDate}{ss.endDate ? ` \u2192 ${ss.endDate}` : ""}</div></div>
                      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                        <SB status={ss.status} />
                        {canManageSeason(u.role) && ss.status === "active" && <button onClick={() => closeStationSeason(ss.id)} style={{ ...BtnS(C.warning, false, true), fontSize: 9, padding: "2px 7px" }}>End</button>}
                      </div>
                    </div>;
    })}
                </div>}
            </div>
          </div>;
  })}
      {showForm && <Modal title="Open New Season" onClose={() => setShowForm(false)}>
          <Alert text="Only one season can be active at a time. Closing a season ends all station operations." color={C.gold} />
          <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}>
            <div style={{ gridColumn: "1/-1" }}><FI label="Season Name" value={form.name} onChange={(v) => setForm((p) => ({ ...p, name: v }))} placeholder="e.g. Season 2025-2026" /></div>
            <FI label="Start Date" type="date" value={form.startDate} onChange={(v) => setForm((p) => ({ ...p, startDate: v }))} />
            <FI label="End Date (optional)" type="date" value={form.endDate} onChange={(v) => setForm((p) => ({ ...p, endDate: v }))} />
            <FI label="Standard Rate (RWF/kg)" type="number" value={form.rateStandard} onChange={(v) => setForm((p) => ({ ...p, rateStandard: v }))} placeholder="155" />
            <FI label="Flotant Rate (RWF/kg)" type="number" value={form.rateFlotant} onChange={(v) => setForm((p) => ({ ...p, rateFlotant: v }))} placeholder="80" />
            <div style={{ gridColumn: "1/-1" }}><FI label="Notes" value={form.notes} onChange={(v) => setForm((p) => ({ ...p, notes: v }))} placeholder="Optional notes..." /></div>
          </div>
          <MF onCancel={() => setShowForm(false)} onSave={createSeason} label="Open Season" color={C.success} />
        </Modal>}
      {showEnrollForm && <Modal title="Enroll Station in Season" onClose={() => setShowEnrollForm(null)}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}>
            <div><FL>Washing Station</FL><select value={enrollForm.cwsId} onChange={(e) => setEnrollForm((p) => ({ ...p, cwsId: e.target.value }))} style={selS()}><option value="">— Select Station —</option>{cwsList.filter((c) => !stationSeasons.find((ss) => ss.cwsId === c.id && ss.seasonId === activeSeason?.id)).map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}</select></div>
            <FI label="Station Start Date" type="date" value={enrollForm.startDate} onChange={(v) => setEnrollForm((p) => ({ ...p, startDate: v }))} />
          </div>
          <MF onCancel={() => setShowEnrollForm(null)} onSave={enrollStation} label="Enroll Station" color={C.coffee} />
        </Modal>}
    </div>;
}
function CWSDetailPage({ cwsId, onBack }) {
  const { currentUser: u, cwsList, farmers: farmers2, setFarmers, cherry, setCherry, cashbook, setCashbook, bankTx, setBankTx, expenses, setExpenses, debts, setDebts, stock, setStock, fundRequests, setFundRequests, users, addNote, online } = useApp();
  const cws = cwsList.find((c) => c.id === cwsId);
  const clerkOnly = u.role === "clerk";
  const [tab, setTab] = useState(clerkOnly ? "cherry" : "overview");
  const [showFarmerForm, setShowFarmerForm] = useState(false);
  const [showCherryForm, setShowCherryForm] = useState(false);
  const [showCashForm, setShowCashForm] = useState(false);
  const [showExpForm, setShowExpForm] = useState(false);
  const [showDebtForm, setShowDebtForm] = useState(false);
  const [showStockForm, setShowStockForm] = useState(false);
  const [showFundReqForm, setShowFundReqForm] = useState(false);
  const [showPayGNR, setShowPayGNR] = useState(null);
  const [farmerForm, setFarmerForm] = useState({ name: "", farmerId: "", group: "", phone: "" });
  const [cherryForm, setCherryForm] = useState({ date: today(), farmerId: "", gnrNumber: "", standardKg: "", flotantKg: "", rateStandard: "155", rateFlotant: "80", notes: "" });
  const [cashForm, setCashForm] = useState({ date: today(), type: "inflow", category: "Fund Transfer", description: "", amount: "", ref: "" });
  const [expForm, setExpForm] = useState({ date: today(), category: "Wages", description: "", amount: "", exploitable: true });
  const [debtForm, setDebtForm] = useState({ date: today(), type: "debt_given", party: "", description: "", amount: "" });
  const [stockForm, setStockForm] = useState({ date: today(), description: "", grade: "Parchment", tonnesIn: "", tonnesOut: "", unitCost: "", valuationMethod: "weighted_avg" });
  const [fundReqForm, setFundReqForm] = useState({ amount: "", reason: "" });
  const [payForm, setPayForm] = useState({ paymentMethod: "cash", notes: "", action: "paid" });
  const [inlineNewFarmer, setInlineNewFarmer] = useState(false);
  const [newFarmerForm, setNewFarmerForm] = useState({ name: "", farmerId: "", group: "", phone: "" });
  const saveInlineFarmer = () => {
    if (!newFarmerForm.name) return null;
    const newId = uid();
    const newFarmer = { ...newFarmerForm, id: newId, cwsId, balance: 0, createdAt: today(), active: true };
    setFarmers((p) => [...p, newFarmer]);
    setCherryForm((p) => ({ ...p, farmerId: newId }));
    setInlineNewFarmer(false);
    setNewFarmerForm({ name: "", farmerId: "", group: "", phone: "" });
    addNote(`Farmer ${newFarmerForm.name} registered and selected`, "success");
    return newId;
  };
  if (!cws) return <div style={{ color: C.textMuted, padding: 20 }}>Station not found.</div>;
  const myCwsFarmers = farmers2.filter((f) => f.cwsId === cwsId);
  const myCherry = cherry.filter((c) => c.cwsId === cwsId);
  const myCashbook = cashbook.filter((c) => c.cwsId === cwsId);
  const myBank = bankTx.filter((b) => b.cwsId === cwsId);
  const myExp = expenses.filter((e) => e.cwsId === cwsId);
  const myDebts = debts.filter((d) => d.cwsId === cwsId);
  const myStock = stock.filter((s) => s.cwsId === cwsId);
  const myFR = fundRequests.filter((f) => f.cwsId === cwsId);
  const cashBalance = myCashbook.reduce((s, c) => c.type === "inflow" ? s + (+c.amount || 0) : s - c.amount, 0);
  const bankBalance = myBank.reduce((s, b) => b.type === "credit" ? s + (+b.amount || 0) : s - b.amount, 0);
  const totalKg = myCherry.reduce((s, c) => s + (+c.totalKg || 0), 0);
  const totalStdKg = myCherry.reduce((s, c) => s + (+c.standardKg || 0), 0);
  const totalFltKg = myCherry.reduce((s, c) => s + (+c.flotantKg || 0), 0);
  const totalPaid = myCherry.reduce((s, c) => s + (+c.totalPaid || 0), 0);
  const totalExp = myExp.reduce((s, e) => s + (+e.amount || 0), 0);
  const exploitableExp = myExp.filter((e) => e.exploitable).reduce((s, e) => s + (+e.amount || 0), 0);
  const nonExploitableExp = myExp.filter((e) => !e.exploitable).reduce((s, e) => s + (+e.amount || 0), 0);
  const calcCherry = (f) => {
    const stdKg = +f.standardKg || 0;
    const fltKg = +f.flotantKg  || 0;
    const std   = stdKg * (+f.rateStandard || 0);
    const flt   = fltKg * (+f.rateFlotant  || 0);
    const total = std + flt;
    const totalKgCalc = stdKg + fltKg;
    const avg = totalKgCalc > 0 ? total / totalKgCalc : 0;
    // totalKg MUST be returned as a number — cherry form values are strings
    return { totalKg: totalKgCalc, paymentStandard: std, paymentFlotant: flt, totalPaid: total, avgRate: +avg.toFixed(1) };
  };
  const cherryCalc = calcCherry(cherryForm);
  const saveFarmer = () => {
    if (!farmerForm.name) return;
    setFarmers((p) => [...p, { ...farmerForm, id: uid(), cwsId, balance: 0, createdAt: today(), active: true }]);
    setShowFarmerForm(false);
    setFarmerForm({ name: "", farmerId: "", group: "", phone: "" });
    addNote(`Farmer ${farmerForm.name} registered`, "success");
  };
  const saveCherry = () => {
    if (!cherryForm.farmerId || !cherryForm.gnrNumber || !cherryForm.standardKg) return;
    if (cherry.some((c) => c.gnrNumber === cherryForm.gnrNumber && c.cwsId === cwsId)) {
      addNote(`GNR number ${cherryForm.gnrNumber} already exists at this station`, "danger");
      return;
    }
    const calc = calcCherry(cherryForm);
    const rec = { ...cherryForm, id: uid(), cwsId, ...calc, standardKg: +cherryForm.standardKg || 0, flotantKg: +cherryForm.flotantKg || 0, totalKg: calc.totalKg, rateStandard: +cherryForm.rateStandard || 0, rateFlotant: +cherryForm.rateFlotant || 0, paymentMethod: null, status: "pending", by: u.id, paidBy: null, paidAt: null, notes: cherryForm.notes || "" };
    setCherry((p) => [rec, ...p]);
    setShowCherryForm(false);
    setCherryForm({ date: today(), farmerId: "", gnrNumber: "", standardKg: "", flotantKg: "", rateStandard: "155", rateFlotant: "80", notes: "" });
    addNote(`GNR ${cherryForm.gnrNumber} saved \u2014 waiting for cashier to confirm payment`, "success");
  };
  const confirmGNRPayment = (action) => {
    if (!showPayGNR) return;
    const gnr = cherry.find((c) => c.id === showPayGNR);
    if (!gnr) return;
    const newStatus = action === "paid" ? "paid" : "not_paid";
    setCherry((p) => p.map((c) => c.id === showPayGNR ? { ...c, status: newStatus, paymentMethod: action === "paid" ? payForm.paymentMethod : null, paidBy: u.id, paidAt: (/* @__PURE__ */ new Date()).toLocaleString(), notes: payForm.notes || c.notes || "" } : c));
    if (action === "paid") {
      setCashbook((prev) => [{ id: uid(), cwsId, date: today(), type: "outflow", category: "Cherry Payment", description: `GNR ${gnr.gnrNumber} \u2014 ${myCwsFarmers.find((f) => f.id === gnr.farmerId)?.name || "Farmer"}`, amount: gnr.totalPaid, balance: 0, ref: gnr.gnrNumber, by: u.id }, ...prev]);
      addNote(`GNR ${gnr.gnrNumber} payment confirmed \u2014 ${payForm.paymentMethod?.replace(/_/g, " ")}`, "success");
    } else {
      addNote(`GNR ${gnr.gnrNumber} marked as NOT PAID \u2014 farmer debt recorded`, "warning");
    }
    setShowPayGNR(null);
    setPayForm({ paymentMethod: "cash", notes: "", action: "paid" });
  };
  const saveCash = () => {
    if (!cashForm.amount) return;
    setCashbook((p) => [{ ...cashForm, id: uid(), cwsId, amount: +cashForm.amount, balance: 0, by: u.id }, ...p]);
    setShowCashForm(false);
    setCashForm({ date: today(), type: "inflow", category: "Fund Transfer", description: "", amount: "", ref: "" });
    addNote("Cash book entry saved", "success");
  };
  const saveExp = () => {
    if (!expForm.amount) return;
    setExpenses((p) => [{ ...expForm, id: uid(), cwsId, amount: +expForm.amount, status: "pending", by: u.id }, ...p]);
    setShowExpForm(false);
    setExpForm({ date: today(), category: "Wages", description: "", amount: "", exploitable: true });
    addNote("Expense recorded, pending approval", "info");
  };
  const saveDebt = () => {
    if (!debtForm.amount) return;
    setDebts((p) => [{ ...debtForm, id: uid(), cwsId, amount: +debtForm.amount, balance: +debtForm.amount, status: "outstanding" }, ...p]);
    setShowDebtForm(false);
    setDebtForm({ date: today(), type: "debt_given", party: "", description: "", amount: "" });
    addNote("Debt/liability recorded", "info");
  };
  const saveStock = () => {
    if (!stockForm.tonnesIn) return;
    const val = (+stockForm.tonnesIn || 0) * (+stockForm.unitCost || 0);
    setStock((p) => [{ ...stockForm, id: uid(), cwsId, tonnesIn: +stockForm.tonnesIn, tonnesOut: +stockForm.tonnesOut || 0, tonnesBalance: +stockForm.tonnesIn - (+stockForm.tonnesOut || 0), unitCost: +stockForm.unitCost || 0, totalValue: val }, ...p]);
    setShowStockForm(false);
    setStockForm({ date: today(), description: "", grade: "Parchment", tonnesIn: "", tonnesOut: "", unitCost: "", valuationMethod: "weighted_avg" });
    addNote("Stock movement recorded", "success");
  };
  const saveFundReq = () => {
    if (!fundReqForm.amount || !fundReqForm.reason) return;
    setFundRequests((p) => [{ id: uid(), cwsId, requestedBy: u.id, amount: +fundReqForm.amount, reason: fundReqForm.reason, status: "pending_verification", requestedAt: (/* @__PURE__ */ new Date()).toLocaleString(), verifiedBy: null, verifiedAt: null, approvedBy: null, approvedAt: null, transferMethod: null, transferRef: null, notes: "" }, ...p]);
    setShowFundReqForm(false);
    setFundReqForm({ amount: "", reason: "" });
    addNote("Fund request submitted to HQ for verification", "info");
  };
  const tabDefs = clerkOnly ? [
    { id: "cherry", label: `Cherry (${myCherry.length})` }
  ] : [
    { id: "overview", label: "Overview" },
    { id: "farmers", label: `Farmers (${myCwsFarmers.length})` },
    { id: "cherry", label: `Cherry (${myCherry.length})` },
    { id: "cash", label: "Cash & Bank" },
    { id: "expenses", label: `Expenses (${myExp.length})` },
    { id: "debts", label: `Debts` },
    { id: "stock", label: "Stock" },
    { id: "report", label: "Daily Report" }
  ];
  return <div>
      {
    /* Header */
  }
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
        <button onClick={onBack} style={{ ...BtnS(C.border, false, true), padding: "6px 12px", fontSize: 12 }}>← Back</button>
        <div style={{ width: 40, height: 40, borderRadius: 10, background: `${C.coffee}18`, border: `1px solid ${C.coffee}35`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>☕</div>
        <div>
          <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 20, letterSpacing: '-0.3px', fontWeight: 700, color: C.coffeeLight }}>{cws.name}</div>
          <div style={{ fontSize: 12, color: C.textMuted }}>{cws.region}</div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 7, flexWrap: "wrap", justifyContent: "flex-end" }}>
          {canEnterCherry(u.role) && <button onClick={() => setShowCherryForm(true)} style={{ ...BtnS(C.coffee), fontSize: 11, padding: "6px 12px" }}>🍒 Cherry Entry</button>}
          {canRequestFunds(u.role) && (u.cwsAccess?.includes(cwsId) || canSeeAllStations(u.role)) && <button onClick={() => setShowFundReqForm(true)} style={{ ...BtnS(C.gold, true), fontSize: 11, padding: "6px 12px" }}>💰 Request Funds</button>}
          {canRegisterFarmer(u.role) && (u.cwsAccess?.includes(cwsId) || canSeeAllStations(u.role)) && <button onClick={() => setShowFarmerForm(true)} style={{ ...BtnS(C.info, true), fontSize: 11, padding: "6px 12px" }}>👨‍🌾 Register Farmer</button>}
          {canManageCash(u.role) && <button onClick={() => setShowCashForm(true)} style={{ ...BtnS(C.info, true), fontSize: 11, padding: "6px 12px" }}>+ Cash Entry</button>}
          {canRecordExpense(u.role) && <button onClick={() => setShowExpForm(true)} style={{ ...BtnS(C.warning, true), fontSize: 11, padding: "6px 12px" }}>+ Expense</button>}
        </div>
      </div>

      <Tabs tabs={tabDefs.map((t) => t.id)} labels={tabDefs.map((t) => t.label)} active={tab} onChange={setTab} color={C.coffee} />

      {
    /* ─── OVERVIEW ─────────────────────────────────────── */
  }
      {tab === "overview" && <div>
          <div className="kpi-grid" style={{ display: "grid", gap: 12, marginBottom: 16  }}>
            <SC label="Total Cherry (kg)" value={fmtKg(totalKg)} color={C.coffee} />
            <SC label="Standard kg" value={fmtKg(totalStdKg)} color={C.coffeeLight} />
            <SC label="Flotant kg" value={fmtKg(totalFltKg)} color={C.warning} />
            <SC label="Farmers Served" value={new Set(myCherry.map((c) => c.farmerId)).size} color={C.info} />
          </div>
          <div className="kpi-grid" style={{ display: "grid", gap: 12, marginBottom: 16  }}>
            <SC label="Total Farmer Payments" value={fmtRWF(totalPaid)} color={C.danger} />
            <SC label="Total Expenses" value={fmtRWF(totalExp)} color={C.warning} />
            <SC label="Cash Balance" value={fmtRWF(cashBalance)} color={cashBalance > 3e5 ? C.success : C.danger} />
            <SC label="Bank Balance" value={fmtRWF(bankBalance)} color={C.info} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 14, marginBottom: 16 }}>
            <div style={{ background: C.gradCard, border: `1px solid ${C.border}`, borderRadius: 14, padding: "14px 16px 8px" }}>
              <div style={{ fontWeight: 700, fontSize: 12, marginBottom: 12, color: C.textMuted, textTransform: "uppercase", letterSpacing: "1px" }}>Recent Cherry Deliveries</div>
              <GNRTable rows={myCherry.slice(0, 5)} cwsList={[cws]} farmers={myCwsFarmers} />
            </div>
            <div style={{ background: C.gradCard, border: `1px solid ${C.border}`, borderRadius: 14, padding: "14px 16px 8px" }}>
              <div style={{ fontWeight: 700, fontSize: 12, marginBottom: 12, color: C.textMuted, textTransform: "uppercase", letterSpacing: "1px" }}>Recent Expenses</div>
              <ExpTable rows={myExp.slice(0, 5)} />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12 }}>
            <SC label="Exploitable Expenses" value={fmtRWF(exploitableExp)} color={C.coffee} sub="Directly tied to production" />
            <SC label="Non-Exploitable Expenses" value={fmtRWF(nonExploitableExp)} color={C.danger} sub="Admin / overhead costs" />
          </div>
        </div>}

      {
    /* ─── FARMERS ─────────────────────────────────────── */
  }
      {tab === "farmers" && <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <div style={{ fontSize: 13, color: C.textMuted }}>{myCwsFarmers.length} registered farmers at {cws.name}</div>
            {canRegisterFarmer(u.role) && <button onClick={() => setShowFarmerForm(true)} style={{ ...BtnS(C.coffee), fontSize: 11, padding: "7px 13px" }}>+ Register Farmer</button>}
          </div>
          <div style={{ background: C.gradCard, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
            {myCwsFarmers.length === 0 ? <ES text="No farmers registered yet" /> : <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead><tr style={{ background: C.surface }}>{["Farmer ID", "Name", "Group", "Phone", "Balance", "Status"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
                <tbody>{myCwsFarmers.map((f) => <tr key={f.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                    <Td style={{ color: C.gold, fontWeight: 700 }}>{f.farmerId}</Td>
                    <Td style={{ fontWeight: 600, color: C.text }}>{f.name}</Td>
                    <Td style={{ color: C.textMuted }}>{f.group}</Td>
                    <Td style={{ color: C.textMuted }}>{f.phone}</Td>
                    <Td style={{ color: f.balance > 0 ? C.warning : C.success, fontWeight: 700 }}>{fmtRWF(f.balance)}</Td>
                    <Td><SB status={f.active ? "active" : "rejected"} /></Td>
                  </tr>)}</tbody>
              </table></div>}
          </div>
        </div>}

      {
    /* ─── CHERRY PURCHASES ─────────────────────────────── */
  }
      {tab === "cherry" && <div>
          {
    /* Cashier: pending GNRs queue */
  }
          {canPayGNR(u.role) && myCherry.filter((c) => c.status === "pending").length > 0 && <div style={{ background: C.gradCard, border: `1px solid ${C.warning}28`, borderRadius: 12, overflow: "hidden", marginBottom: 14 }}>
              <div style={{ padding: "11px 16px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13, color: C.warning }}>
                ⏳ GNRs Awaiting Payment ({myCherry.filter((c) => c.status === "pending").length})
              </div>
              <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead><tr style={{ background: C.surface }}>{["GNR #", "Farmer", "Date", "Total kg", "Total to Pay", "Action"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
                <tbody>{myCherry.filter((c) => c.status === "pending").map((gnr) => {
    const f = myCwsFarmers.find((x) => x.id === gnr.farmerId);
    return <tr key={gnr.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                    <Td style={{ color: C.gold, fontWeight: 700 }}>{gnr.gnrNumber}</Td>
                    <Td style={{ fontWeight: 600 }}>{f?.name || gnr.farmerId}</Td>
                    <Td style={{ color: C.textMuted }}>{gnr.date}</Td>
                    <Td style={{ color: C.coffee, fontWeight: 700 }}>{(+(gnr.totalKg||0)).toLocaleString()} kg</Td>
                    <Td style={{ fontWeight: 700, color: C.danger }}>{fmtRWF(gnr.totalPaid)}</Td>
                    <Td><div style={{ display: "flex", gap: 6 }}>
                      <button onClick={() => {
      setShowPayGNR(gnr.id);
      setPayForm({ paymentMethod: "cash", notes: "", action: "paid" });
    }} style={{ ...BtnS(C.success), fontSize: 10, padding: "4px 10px" }}>✓ Pay</button>
                      <button onClick={() => {
      setShowPayGNR(gnr.id);
      setPayForm({ paymentMethod: null, notes: "", action: "not_paid" });
    }} style={{ ...BtnS(C.danger, false, true), fontSize: 10, padding: "4px 10px" }}>Not Paid</button>
                    </div></Td>
                  </tr>;
  })}</tbody>
              </table></div>
            </div>}
          {
    /* Not paid — station owes these farmers */
  }
          {myCherry.filter((c) => c.status === "not_paid").length > 0 && <div style={{ background: C.gradCard, border: `1px solid ${C.danger}28`, borderRadius: 12, overflow: "hidden", marginBottom: 14 }}>
              <div style={{ padding: "11px 16px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13, color: C.danger }}>
                ⚠ Not Paid — Station Owes These Farmers ({myCherry.filter((c) => c.status === "not_paid").length})
              </div>
              <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead><tr style={{ background: C.surface }}>{["GNR #", "Farmer", "Date", "Total kg", "Owed", "Notes", "Action"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
                <tbody>{myCherry.filter((c) => c.status === "not_paid").map((gnr) => {
    const f = myCwsFarmers.find((x) => x.id === gnr.farmerId);
    return <tr key={gnr.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                    <Td style={{ color: C.gold, fontWeight: 700 }}>{gnr.gnrNumber}</Td>
                    <Td style={{ fontWeight: 600 }}>{f?.name || gnr.farmerId}</Td>
                    <Td style={{ color: C.textMuted }}>{gnr.date}</Td>
                    <Td style={{ color: C.coffee, fontWeight: 700 }}>{(+(gnr.totalKg||0)).toLocaleString()} kg</Td>
                    <Td style={{ fontWeight: 700, color: C.danger }}>{fmtRWF(gnr.totalPaid)}</Td>
                    <Td style={{ color: C.textMuted, fontSize: 11 }}>{gnr.notes || "\u2014"}</Td>
                    <Td>{canPayGNR(u.role) && <button onClick={() => {
      setShowPayGNR(gnr.id);
      setPayForm({ paymentMethod: "cash", notes: "", action: "paid" });
    }} style={{ ...BtnS(C.success), fontSize: 10, padding: "4px 10px" }}>Pay Now</button>}</Td>
                  </tr>;
  })}</tbody>
              </table></div>
            </div>}
          <div className="kpi-grid" style={{ display: "grid", gap: 12, marginBottom: 16  }}>
            <SC label="Total Cherry kg" value={fmtKg(totalKg)} color={C.coffee} />
            <SC label="Standard kg" value={fmtKg(totalStdKg)} color={C.coffeeLight} />
            <SC label="Flotant kg" value={fmtKg(totalFltKg)} color={C.warning} />
            <SC label="Total Paid" value={fmtRWF(totalPaid)} color={C.danger} />
          </div>
          <div style={{ background: C.gradCard, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
            <div style={{ padding: "11px 16px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13 }}>All GNR Records</div>
            <GNRTable rows={myCherry} cwsList={[cws]} farmers={myCwsFarmers} full />
          </div>
        </div>}

      {
    /* ─── CASH & BANK ─────────────────────────────────── */
  }
      {tab === "cash" && <div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 12, marginBottom: 16 }}>
            <SC label="Cash Book Balance" value={fmtRWF(cashBalance)} color={cashBalance > 0 ? C.success : C.danger} sub="Station cash on hand" />
            <SC label="Bank Balance" value={fmtRWF(bankBalance)} color={C.info} sub="Station bank account" />
            <SC label="Total Inflows" value={fmtRWF(myCashbook.filter((c) => c.type === "inflow").reduce((s, c) => s + (+c.amount || 0), 0))} color={C.success} />
          </div>
          <Tabs tabs={["cashbook", "bank"]} labels={["Cash Book", "Bank Transactions"]} active={tab === "cash" ? "cashbook" : tab} onChange={(t) => {
  }} color={C.coffee} />
          <div style={{ background: C.gradCard, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden", marginBottom: 14 }}>
            <div style={{ padding: "11px 16px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13 }}>Cash Book</div>
            <CashTable rows={myCashbook} />
          </div>
          <div style={{ background: C.gradCard, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
            <div style={{ padding: "11px 16px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13 }}>Bank Transactions</div>
            <BankTable rows={myBank} />
          </div>
        </div>}

      {
    /* ─── EXPENSES ────────────────────────────────────── */
  }
      {tab === "expenses" && <div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 12, marginBottom: 16 }}>
            <SC label="Total Expenses" value={fmtRWF(totalExp)} color={C.warning} />
            <SC label="Exploitable" value={fmtRWF(exploitableExp)} color={C.coffee} sub="Directly allocated to production" />
            <SC label="Non-Exploitable" value={fmtRWF(nonExploitableExp)} color={C.danger} sub="Overhead & admin" />
          </div>
          {
    /* Pending approval alert */
  }
          {myExp.filter((e) => e.status === "pending").length > 0 && canApproveExpense(u.role) && <div style={{ marginBottom: 14 }}>
              <Alert text={`\u23F3 ${myExp.filter((e) => e.status === "pending").length} expense(s) submitted by cashier awaiting your approval.`} color={C.warning} />
              <div style={{ background: C.gradCard, border: `1px solid ${C.warning}28`, borderRadius: 12, overflow: "hidden", marginTop: 8 }}>
                <div style={{ padding: "10px 16px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 12, color: C.warning }}>Pending Approval</div>
                <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead><tr style={{ background: C.surface }}>{["Date", "Category", "Description", "Amount", "Action"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
                  <tbody>{myExp.filter((e) => e.status === "pending").map((e) => <tr key={e.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(ev) => ev.currentTarget.style.background = C.surface} onMouseLeave={(ev) => ev.currentTarget.style.background = "transparent"}>
                      <Td style={{ color: C.textMuted }}>{e.date}</Td>
                      <Td style={{ fontWeight: 600, color: C.warning }}>{e.category}</Td>
                      <Td style={{ color: C.textMuted }}>{e.description || "\u2014"}</Td>
                      <Td style={{ fontWeight: 700, color: C.warning }}>{fmtRWF(e.amount)}</Td>
                      <Td><div style={{ display: "flex", gap: 6 }}>
                        <button onClick={() => setExpenses((p) => p.map((x) => x.id === e.id ? { ...x, status: "approved", approvedBy: u.id } : x))} style={{ ...BtnS(C.success), fontSize: 10, padding: "3px 9px" }}>✓ Approve</button>
                        <button onClick={() => setExpenses((p) => p.map((x) => x.id === e.id ? { ...x, status: "rejected" } : x))} style={{ ...BtnS(C.danger, false, true), fontSize: 10, padding: "3px 9px" }}>✕ Reject</button>
                      </div></Td>
                    </tr>)}</tbody>
                </table></div>
              </div>
            </div>}
          {
    /* By category */
  }
          <div style={{ background: C.gradCard, border: `1px solid ${C.border}`, borderRadius: 14, padding: "14px 16px", marginBottom: 14 }}>
            <div style={{ fontWeight: 700, fontSize: 12, marginBottom: 10, color: C.textMuted, textTransform: "uppercase", letterSpacing: "1px" }}>By Category</div>
            <div className="kpi-grid" style={{ display: "grid", gap: 8  }}>
              {EXPENSE_CATS.map((cat) => {
    const amt = myExp.filter((e) => e.category === cat && e.status === "approved").reduce((s, e) => s + (+e.amount || 0), 0);
    if (!amt) return null;
    return <div key={cat} style={{ background: C.surface, borderRadius: 8, padding: "8px 10px" }}>
                  <div style={{ fontSize: 10, color: C.textDim, marginBottom: 3 }}>{cat}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: C.warning }}>{fmtRWF(amt)}</div>
                </div>;
  }).filter(Boolean)}
            </div>
          </div>
          <div style={{ background: C.gradCard, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
            <div style={{ padding: "11px 16px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13 }}>Expense Ledger</div>
            <ExpTable rows={myExp} full />
          </div>
        </div>}

      {
    /* ─── DEBTS & LIABILITIES ────────────────────────── */
  }
      {tab === "debts" && <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <div style={{ fontSize: 13, color: C.textMuted }}>Debt register for {cws.name}</div>
            {canManageCash(u.role) && <button onClick={() => setShowDebtForm(true)} style={{ ...BtnS(C.danger, true), fontSize: 11, padding: "7px 13px" }}>+ Add Debt</button>}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 12, marginBottom: 14 }}>
            <SC label="Debt Given to Others" value={fmtRWF(myDebts.filter((d) => d.type === "debt_given").reduce((s, d) => s + (+d.amount || 0), 0))} color={C.danger} />
            <SC label="Debt Owed to CWS" value={fmtRWF(myDebts.filter((d) => d.type === "debt_to_others").reduce((s, d) => s + (+d.amount || 0), 0))} color={C.warning} />
            <SC label="Outstanding Balance" value={fmtRWF(myDebts.reduce((s, d) => s + (+d.balance || 0), 0))} color={C.info} />
          </div>
          <div style={{ background: C.gradCard, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
            {myDebts.length === 0 ? <ES text="No debts or liabilities recorded" /> : <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead><tr style={{ background: C.surface }}>{["Date", "Type", "Party", "Description", "Amount", "Balance", "Status"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
                <tbody>{myDebts.map((d) => <tr key={d.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                    <Td style={{ color: C.textMuted }}>{d.date}</Td>
                    <Td><span style={{ padding: "2px 7px", borderRadius: 4, fontSize: 10, fontWeight: 700, background: `${d.type === "debt_given" ? C.danger : C.warning}18`, color: d.type === "debt_given" ? C.danger : C.warning }}>{d.type.replace(/_/g, " ")}</span></Td>
                    <Td style={{ fontWeight: 600 }}>{d.party}</Td>
                    <Td style={{ color: C.textMuted }}>{d.description}</Td>
                    <Td style={{ fontWeight: 700, color: C.danger }}>{fmtRWF(d.amount)}</Td>
                    <Td style={{ fontWeight: 700, color: C.warning }}>{fmtRWF(d.balance)}</Td>
                    <Td><SB status={d.status} /></Td>
                  </tr>)}</tbody>
              </table></div>}
          </div>
        </div>}

      {
    /* ─── STOCK ───────────────────────────────────────── */
  }
      {tab === "stock" && <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <div style={{ fontSize: 13, color: C.textMuted }}>Inventory & stock movements</div>
            {canApproveExpense(u.role) && <button onClick={() => setShowStockForm(true)} style={{ ...BtnS(C.info, true), fontSize: 11, padding: "7px 13px" }}>+ Stock Movement</button>}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 12, marginBottom: 14 }}>
            <SC label="Total Tonnes In" value={`${myStock.reduce((s, sk) => s + sk.tonnesIn, 0).toFixed(2)} T`} color={C.coffee} />
            <SC label="Total Tonnes Out" value={`${myStock.reduce((s, sk) => s + sk.tonnesOut, 0).toFixed(2)} T`} color={C.warning} />
            <SC label="Total Stock Value" value={fmtRWF(myStock.reduce((s, sk) => s + (+sk.totalValue || 0), 0))} color={C.gold} />
          </div>
          <div style={{ background: C.gradCard, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
            {myStock.length === 0 ? <ES text="No stock movements recorded" /> : <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead><tr style={{ background: C.surface }}>{["Date", "Description", "Grade", "Tonnes In", "Tonnes Out", "Balance", "Unit Cost", "Total Value", "Method"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
                <tbody>{myStock.map((sk) => <tr key={sk.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                    <Td style={{ color: C.textMuted }}>{sk.date}</Td>
                    <Td style={{ fontWeight: 500 }}>{sk.description}</Td>
                    <Td><span style={{ padding: "2px 7px", borderRadius: 4, fontSize: 10, fontWeight: 700, background: `${C.coffee}18`, color: C.coffeeLight }}>{sk.grade}</span></Td>
                    <Td style={{ color: C.success, fontWeight: 700 }}>{sk.tonnesIn.toFixed(2)} T</Td>
                    <Td style={{ color: sk.tonnesOut > 0 ? C.warning : C.textDim }}>{sk.tonnesOut.toFixed(2)} T</Td>
                    <Td style={{ color: C.gold, fontWeight: 700 }}>{sk.tonnesBalance.toFixed(2)} T</Td>
                    <Td style={{ color: C.textMuted }}>{fmtRWF(sk.unitCost)}/kg</Td>
                    <Td style={{ fontWeight: 700, color: C.text }}>{fmtRWF(sk.totalValue)}</Td>
                    <Td style={{ fontSize: 10, color: C.textDim }}>{sk.valuationMethod.replace(/_/g, " ")}</Td>
                  </tr>)}</tbody>
              </table></div>}
          </div>
        </div>}

      {
    /* ─── DAILY REPORT ────────────────────────────────── */
  }
      {tab === "report" && <div>
          <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 17, letterSpacing: '-0.2px', fontWeight: 700, color: C.text, marginBottom: 14 }}>Daily Station Report — {cws.name}</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 14, marginBottom: 14 }}>
            <div style={{ background: C.gradCard, border: `1px solid ${C.coffee}28`, borderRadius: 12, padding: "16px 18px" }}>
              <div style={{ fontSize: 10, color: C.textDim, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 12 }}>Today's Snapshot</div>
              {[
    ["Farmers Served Today", new Set(myCherry.filter((c) => c.date === today()).map((c) => c.farmerId)).size],
    ["Total kg Purchased Today", fmtKg(myCherry.filter((c) => c.date === today()).reduce((s, c) => s + (+c.totalKg || 0), 0))],
    ["Standard kg Today", fmtKg(myCherry.filter((c) => c.date === today()).reduce((s, c) => s + (+c.standardKg || 0), 0))],
    ["Flotant kg Today", fmtKg(myCherry.filter((c) => c.date === today()).reduce((s, c) => s + (+c.flotantKg || 0), 0))],
    ["Total Payments Today", fmtRWF(myCherry.filter((c) => c.date === today()).reduce((s, c) => s + (+c.totalPaid || 0), 0))],
    ["Cash Available", fmtRWF(cashBalance)],
    ["Fund Requests Pending", myFR.filter((f) => f.status.includes("pending")).length]
  ].map(([l, v]) => <div key={l} style={{ display: "flex", justifyContent: "space-between", borderBottom: `1px solid ${C.border}20`, padding: "6px 0" }}>
                  <span style={{ fontSize: 12, color: C.textMuted }}>{l}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{v}</span>
                </div>)}
            </div>
            <div style={{ background: C.gradCard, border: `1px solid ${C.coffee}28`, borderRadius: 12, padding: "16px 18px" }}>
              <div style={{ fontSize: 10, color: C.textDim, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 12 }}>Season Consolidated</div>
              {[
    ["Total Cherry Purchased", fmtKg(totalKg)],
    ["Total Standard Grade", fmtKg(totalStdKg)],
    ["Total Flotant Grade", fmtKg(totalFltKg)],
    ["Total Farmer Payments", fmtRWF(totalPaid)],
    ["Total Expenses (All)", fmtRWF(totalExp)],
    ["Stock on Hand", `${myStock.reduce((s, sk) => s + sk.tonnesBalance, 0).toFixed(2)} T`],
    ["Outstanding Debts", fmtRWF(myDebts.reduce((s, d) => s + (+d.balance || 0), 0))]
  ].map(([l, v]) => <div key={l} style={{ display: "flex", justifyContent: "space-between", borderBottom: `1px solid ${C.border}20`, padding: "6px 0" }}>
                  <span style={{ fontSize: 12, color: C.textMuted }}>{l}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{v}</span>
                </div>)}
            </div>
          </div>
          <div style={{ background: C.gradCard, border: `1px solid ${C.border}`, borderRadius: 14, padding: "14px 16px 8px" }}>
            <div style={{ fontWeight: 700, fontSize: 12, marginBottom: 12, color: C.textMuted, textTransform: "uppercase", letterSpacing: "1px" }}>Expense Breakdown</div>
            <div className="kpi-grid" style={{ display: "grid", gap: 8  }}>
              {EXPENSE_CATS.map((cat) => {
    const amt = myExp.filter((e) => e.category === cat).reduce((s, e) => s + (+e.amount || 0), 0);
    if (!amt) return null;
    return <div key={cat} style={{ background: C.surface, borderRadius: 8, padding: "8px 10px" }}><div style={{ fontSize: 10, color: C.textDim, marginBottom: 3 }}>{cat}</div><div style={{ fontSize: 12, fontWeight: 700, color: C.warning }}>{fmtRWF(amt)}</div></div>;
  }).filter(Boolean)}
            </div>
          </div>
        </div>}

      {
    /* ═══ MODALS ══════════════════════════════════════════════════ */
  }
      {showFarmerForm && <Modal title={`Register Farmer \u2014 ${cws.name}`} onClose={() => setShowFarmerForm(false)}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}>
            <FI label="Full Name" value={farmerForm.name} onChange={(v) => setFarmerForm((p) => ({ ...p, name: v }))} placeholder="Farmer full name" />
            <FI label="Farmer ID (from booklet)" value={farmerForm.farmerId} onChange={(v) => setFarmerForm((p) => ({ ...p, farmerId: v }))} placeholder={`${cwsId.slice(0, 3).toUpperCase()}-XXX`} />
            <FI label="Farmer Group" value={farmerForm.group} onChange={(v) => setFarmerForm((p) => ({ ...p, group: v }))} placeholder="Group name" />
            <FI label="Phone Number" value={farmerForm.phone} onChange={(v) => setFarmerForm((p) => ({ ...p, phone: v }))} placeholder="+250788..." />
          </div>
          <MF onCancel={() => setShowFarmerForm(false)} onSave={saveFarmer} label="Register Farmer" color={C.coffee} />
        </Modal>}
      {showCherryForm && <Modal title={`Cherry Entry \u2014 ${cws.name}`} onClose={() => { setShowCherryForm(false); setInlineNewFarmer(false); setNewFarmerForm({ name: "", farmerId: "", group: "", phone: "" }); }} wide>
          {!online && <Alert text="Offline — saved locally, will sync when online." color={C.warning} />}
          <div style={{ padding: "8px 12px", background: `${C.info}10`, border: `1px solid ${C.info}25`, borderRadius: 7, fontSize: 12, color: C.info, marginBottom: 12 }}>
            ℹ️ <b>Clerk role:</b> Enter GNR data here. The cashier will verify and confirm payment.
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}>
            <FI label="Date" type="date" value={cherryForm.date} onChange={(v) => setCherryForm((p) => ({ ...p, date: v }))} />
            <div style={{ gridColumn: "1/-1" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 5 }}>
                <FL>Farmer</FL>
                <button onClick={() => { setInlineNewFarmer((v) => !v); setCherryForm((p) => ({ ...p, farmerId: "" })); setNewFarmerForm({ name: "", farmerId: "", group: "", phone: "" }); }} style={{ fontSize: 10, padding: "3px 9px", borderRadius: 6, border: `1px solid ${inlineNewFarmer ? C.coffee : C.borderLight}`, background: inlineNewFarmer ? `${C.coffee}18` : "transparent", color: inlineNewFarmer ? C.coffeeLight : C.textMuted, cursor: "pointer", fontWeight: 600 }}>{inlineNewFarmer ? "← Select existing" : "+ Register new farmer"}</button>
              </div>
              {!inlineNewFarmer ? (
                <div>
                  <select value={cherryForm.farmerId} onChange={(e) => setCherryForm((p) => ({ ...p, farmerId: e.target.value }))} style={selS()}>
                    <option value="">— Select Farmer —</option>
                    {myCwsFarmers.map((f) => <option key={f.id} value={f.id}>{f.name} ({f.farmerId})</option>)}
                  </select>
                  {cherryForm.farmerId && (() => { const sel = myCwsFarmers.find((f) => f.id === cherryForm.farmerId); return sel ? <div style={{ marginTop: 7, padding: "8px 12px", background: `${C.coffee}0D`, border: `1px solid ${C.coffee}28`, borderRadius: 8, display: "flex", alignItems: "center", gap: 10 }}><div style={{ width: 30, height: 30, borderRadius: "50%", background: `${C.coffee}28`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: C.coffeeLight, flexShrink: 0 }}>{sel.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}</div><div><div style={{ fontSize: 12, fontWeight: 700, color: C.text }}>{sel.name}</div><div style={{ fontSize: 10, color: C.textMuted }}>{sel.farmerId}{sel.group ? ` · ${sel.group}` : ""}{sel.phone ? ` · ${sel.phone}` : ""}</div></div></div> : null; })()}
                </div>
              ) : (
                <div style={{ padding: "14px 16px", background: `${C.coffee}08`, border: `1px solid ${C.coffee}30`, borderRadius: 10 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: C.coffeeLight, marginBottom: 10 }}>👨‍🌾 Register New Farmer <span style={{ fontSize: 10, fontWeight: 400, color: C.textMuted }}>— saved to station farmers list</span></div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 9 }}>
                    <FI label="Full Name *" value={newFarmerForm.name} onChange={(v) => setNewFarmerForm((p) => ({ ...p, name: v }))} placeholder="Farmer full name" />
                    <FI label="Farmer ID (booklet)" value={newFarmerForm.farmerId} onChange={(v) => setNewFarmerForm((p) => ({ ...p, farmerId: v }))} placeholder={`${cwsId.slice(0, 3).toUpperCase()}-XXX`} />
                    <FI label="Farmer Group" value={newFarmerForm.group} onChange={(v) => setNewFarmerForm((p) => ({ ...p, group: v }))} placeholder="Group name" />
                    <FI label="Phone" value={newFarmerForm.phone} onChange={(v) => setNewFarmerForm((p) => ({ ...p, phone: v }))} placeholder="+250788..." />
                  </div>
                  <button onClick={saveInlineFarmer} disabled={!newFarmerForm.name} style={{ marginTop: 10, ...BtnS(C.coffee), padding: "7px 14px", fontSize: 11, opacity: newFarmerForm.name ? 1 : 0.45 }}>✓ Register & Select This Farmer</button>
                  {cherryForm.farmerId && (() => { const sel = myCwsFarmers.find((f) => f.id === cherryForm.farmerId); return sel ? <div style={{ marginTop: 8, padding: "7px 10px", background: `${C.success}10`, border: `1px solid ${C.success}28`, borderRadius: 7, fontSize: 11, color: C.success }}>✓ Registered and selected: <b>{sel.name}</b></div> : null; })()}
                </div>
              )}
            </div>
            <FI label="GNR Number (from booklet)" value={cherryForm.gnrNumber} onChange={(v) => setCherryForm((p) => ({ ...p, gnrNumber: v }))} placeholder="GNR-XXX-0000" />
            <FI label="Standard kg" type="number" value={cherryForm.standardKg} onChange={(v) => setCherryForm((p) => ({ ...p, standardKg: v }))} placeholder="0" />
            <FI label="Flotant kg" type="number" value={cherryForm.flotantKg} onChange={(v) => setCherryForm((p) => ({ ...p, flotantKg: v }))} placeholder="0" />
            <FI label="Rate Standard (RWF/kg)" type="number" value={cherryForm.rateStandard} onChange={(v) => setCherryForm((p) => ({ ...p, rateStandard: v }))} placeholder="155" />
            <FI label="Rate Flotant (RWF/kg)" type="number" value={cherryForm.rateFlotant} onChange={(v) => setCherryForm((p) => ({ ...p, rateFlotant: v }))} placeholder="80" />
            <div style={{ gridColumn: "1/-1" }}><FI label="Notes (optional)" value={cherryForm.notes || ""} onChange={(v) => setCherryForm((p) => ({ ...p, notes: v }))} placeholder="Any remarks..." /></div>
          </div>
          {(cherryForm.standardKg || cherryForm.flotantKg) && <div style={{ marginTop: 12, padding: "12px 16px", background: `${C.coffee}0E`, border: `1px solid ${C.coffee}28`, borderRadius: 9, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(90px,1fr))", gap: 8 }}>
              {[["Total kg", fmtKg((+cherryForm.standardKg || 0) + (+cherryForm.flotantKg || 0))], ["Std Payment", fmtRWF(cherryCalc.paymentStandard)], ["Flt Payment", fmtRWF(cherryCalc.paymentFlotant)], ["Total to Pay", fmtRWF(cherryCalc.totalPaid)], ["Avg Rate", `${cherryCalc.avgRate} RWF/kg`]].map(([l, v]) => <div key={l}><div style={{ fontSize: 9, color: C.textDim, marginBottom: 2 }}>{l}</div><div style={{ fontSize: 13, fontWeight: 700, color: C.gold }}>{v}</div></div>)}
            </div>}
          <MF onCancel={() => { setShowCherryForm(false); setInlineNewFarmer(false); setNewFarmerForm({ name: "", farmerId: "", group: "", phone: "" }); }} onSave={saveCherry} label="Save GNR — Send to Cashier" color={C.coffee} />
        </Modal>}
      {showCashForm && <Modal title={`Cash Book Entry \u2014 ${cws.name}`} onClose={() => setShowCashForm(false)}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}>
            <FI label="Date" type="date" value={cashForm.date} onChange={(v) => setCashForm((p) => ({ ...p, date: v }))} />
            <div><FL>Type</FL><select value={cashForm.type} onChange={(e) => setCashForm((p) => ({ ...p, type: e.target.value }))} style={selS()}><option value="inflow">Inflow</option><option value="outflow">Outflow</option></select></div>
            <div><FL>Category</FL><select value={cashForm.category} onChange={(e) => setCashForm((p) => ({ ...p, category: e.target.value }))} style={selS()}>{["Fund Transfer", "Cherry Payment", "Expense Payment", "Wage Payment", "Other"].map((c) => <option key={c}>{c}</option>)}</select></div>
            <FI label="Reference / Voucher" value={cashForm.ref} onChange={(v) => setCashForm((p) => ({ ...p, ref: v }))} placeholder="REF-000" />
            <FI label="Amount (RWF)" type="number" value={cashForm.amount} onChange={(v) => setCashForm((p) => ({ ...p, amount: v }))} placeholder="0" />
            <div style={{ gridColumn: "1/-1" }}><FI label="Description" value={cashForm.description} onChange={(v) => setCashForm((p) => ({ ...p, description: v }))} placeholder="Brief description..." /></div>
          </div>
          <MF onCancel={() => setShowCashForm(false)} onSave={saveCash} label="Save Entry" color={C.info} />
        </Modal>}
      {showExpForm && <Modal title={`Record Expense \u2014 ${cws.name}`} onClose={() => setShowExpForm(false)}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}>
            <FI label="Date" type="date" value={expForm.date} onChange={(v) => setExpForm((p) => ({ ...p, date: v }))} />
            <div><FL>Category</FL><select value={expForm.category} onChange={(e) => setExpForm((p) => ({ ...p, category: e.target.value }))} style={selS()}>{EXPENSE_CATS.map((c) => <option key={c}>{c}</option>)}</select></div>
            <FI label="Amount (RWF)" type="number" value={expForm.amount} onChange={(v) => setExpForm((p) => ({ ...p, amount: v }))} placeholder="0" />
            <div style={{ display: "flex", alignItems: "center", gap: 10, paddingTop: 20 }}>
              <input type="checkbox" id="exploitable" checked={expForm.exploitable} onChange={(e) => setExpForm((p) => ({ ...p, exploitable: e.target.checked }))} style={{ width: 15, height: 15, accentColor: C.coffee }} />
              <label htmlFor="exploitable" style={{ fontSize: 12, color: C.textMuted, cursor: "pointer" }}>Exploitable (production-related)</label>
            </div>
            <div style={{ gridColumn: "1/-1" }}><FI label="Description" value={expForm.description} onChange={(v) => setExpForm((p) => ({ ...p, description: v }))} placeholder="What was this expense for?" /></div>
          </div>
          <MF onCancel={() => setShowExpForm(false)} onSave={saveExp} label="Record Expense" color={C.warning} />
        </Modal>}
      {showDebtForm && <Modal title={`Record Debt / Liability \u2014 ${cws.name}`} onClose={() => setShowDebtForm(false)}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}>
            <FI label="Date" type="date" value={debtForm.date} onChange={(v) => setDebtForm((p) => ({ ...p, date: v }))} />
            <div><FL>Type</FL><select value={debtForm.type} onChange={(e) => setDebtForm((p) => ({ ...p, type: e.target.value }))} style={selS()}><option value="debt_given">Debt Given by CWS</option><option value="debt_to_others">Debt Owed to Others</option><option value="other_credit">Other Credit</option></select></div>
            <FI label="Party (name / company)" value={debtForm.party} onChange={(v) => setDebtForm((p) => ({ ...p, party: v }))} placeholder="Who is the other party?" />
            <FI label="Amount (RWF)" type="number" value={debtForm.amount} onChange={(v) => setDebtForm((p) => ({ ...p, amount: v }))} placeholder="0" />
            <div style={{ gridColumn: "1/-1" }}><FI label="Description" value={debtForm.description} onChange={(v) => setDebtForm((p) => ({ ...p, description: v }))} placeholder="Nature of debt..." /></div>
          </div>
          <MF onCancel={() => setShowDebtForm(false)} onSave={saveDebt} label="Record Debt" color={C.danger} />
        </Modal>}
      {showStockForm && <Modal title={`Stock Movement \u2014 ${cws.name}`} onClose={() => setShowStockForm(false)}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}>
            <FI label="Date" type="date" value={stockForm.date} onChange={(v) => setStockForm((p) => ({ ...p, date: v }))} />
            <div><FL>Grade</FL><select value={stockForm.grade} onChange={(e) => setStockForm((p) => ({ ...p, grade: e.target.value }))} style={selS()}>{["Parchment", "Green Coffee", "Specialty", "Defects", "By-Products"].map((g) => <option key={g}>{g}</option>)}</select></div>
            <FI label="Tonnes In" type="number" value={stockForm.tonnesIn} onChange={(v) => setStockForm((p) => ({ ...p, tonnesIn: v }))} placeholder="0.00" />
            <FI label="Tonnes Out" type="number" value={stockForm.tonnesOut} onChange={(v) => setStockForm((p) => ({ ...p, tonnesOut: v }))} placeholder="0.00" />
            <FI label="Unit Cost (RWF/kg)" type="number" value={stockForm.unitCost} onChange={(v) => setStockForm((p) => ({ ...p, unitCost: v }))} placeholder="0" />
            <div><FL>Valuation Method</FL><select value={stockForm.valuationMethod} onChange={(e) => setStockForm((p) => ({ ...p, valuationMethod: e.target.value }))} style={selS()}><option value="fifo">FIFO</option><option value="weighted_avg">Weighted Average</option></select></div>
            <div style={{ gridColumn: "1/-1" }}><FI label="Description" value={stockForm.description} onChange={(v) => setStockForm((p) => ({ ...p, description: v }))} placeholder="Describe the stock movement..." /></div>
          </div>
          <MF onCancel={() => setShowStockForm(false)} onSave={saveStock} label="Save Stock Movement" color={C.info} />
        </Modal>}
      {showFundReqForm && <Modal title={`Request Funds from HQ \u2014 ${cws.name}`} onClose={() => setShowFundReqForm(false)}>
          <Alert text="This request will go to HQ Operations Manager for verification, then Managing Director for approval and transfer." color={C.gold} />
          <div style={{ marginTop: 12, display: "grid", gap: 11 }}>
            <FI label="Amount Requested (RWF)" type="number" value={fundReqForm.amount} onChange={(v) => setFundReqForm((p) => ({ ...p, amount: v }))} placeholder="0" />
            <FI label="Reason / Purpose" value={fundReqForm.reason} onChange={(v) => setFundReqForm((p) => ({ ...p, reason: v }))} placeholder="e.g. Week 2 cherry purchase payments" />
          </div>
          <MF onCancel={() => setShowFundReqForm(false)} onSave={saveFundReq} label="Submit Fund Request" color={C.gold} />
        </Modal>}
      {showPayGNR && (() => {
    const gnr = cherry.find((c) => c.id === showPayGNR);
    const farmer = myCwsFarmers.find((f) => f.id === gnr?.farmerId);
    return <Modal title="Confirm GNR Payment" onClose={() => {
      setShowPayGNR(null);
    }}>
            {gnr && <div style={{ padding: "12px 14px", background: C.surface, borderRadius: 9, border: `1px solid ${C.coffee}28`, marginBottom: 14 }}>
              <div style={{ fontWeight: 700, color: C.gold, marginBottom: 4, fontSize: 14 }}>{gnr.gnrNumber}</div>
              <div style={{ fontSize: 12, color: C.textMuted, marginBottom: 2 }}>Farmer: <b style={{ color: C.text }}>{farmer?.name || "\u2014"}</b> · {farmer?.farmerId}</div>
              <div style={{ fontSize: 12, color: C.textMuted, marginBottom: 2 }}>Cherry: <b>{(+(gnr.standardKg||0)).toLocaleString()} kg std</b> + <b>{(+(gnr.flotantKg||0)).toLocaleString()} kg flotant</b> = <b style={{ color: C.coffee }}>{(+(gnr.totalKg||0)).toLocaleString()} kg total</b></div>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.danger, marginTop: 6 }}>Total to Pay: {fmtRWF(gnr.totalPaid)}</div>
            </div>}
            <div style={{ display: "grid", gap: 12 }}>
              <div><FL>Payment Method</FL>
                <select value={payForm.paymentMethod || "cash"} onChange={(e) => setPayForm((p) => ({ ...p, paymentMethod: e.target.value }))} style={selS()}>
                  {PAYMENT_METHODS.map((m) => <option key={m} value={m}>{m.replace(/_/g, " ")}</option>)}
                </select>
              </div>
              <FI label="Notes (optional)" value={payForm.notes} onChange={(v) => setPayForm((p) => ({ ...p, notes: v }))} placeholder="e.g. Paid via Airtel Money" />
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 20, paddingTop: 14, borderTop: `1px solid ${C.border}` }}>
              <button onClick={() => setShowPayGNR(null)} style={{ padding: "7px 15px", background: "transparent", border: `1px solid ${C.border}`, borderRadius: 7, color: C.textMuted, fontSize: 12, cursor: "pointer" }}>Cancel</button>
              <button onClick={() => confirmGNRPayment("not_paid")} style={{ ...BtnS(C.warning, true), padding: "7px 13px", fontSize: 12, marginLeft: "auto" }}>⚠ Mark Not Paid</button>
              <button onClick={() => confirmGNRPayment("paid")} style={{ ...BtnS(C.success), padding: "7px 16px", fontSize: 12 }}>✓ Confirm Paid</button>
            </div>
          </Modal>;
  })()}
    </div>;
}
function FundRequestsPage({ onBack }) {
  const { currentUser: u, fundRequests, setFundRequests, cwsList, users, addNote } = useApp();
  const [processModal, setProcessModal] = useState(null);
  const [approveModal, setApproveModal] = useState(null);
  const [processForm, setProcessForm] = useState({ notes: "" });
  const [approveForm, setApproveForm] = useState({ transferMethod: "bank_transfer", transferRef: "", notes: "" });
  const verify = (id) => {
    setFundRequests((p) => p.map((f) => f.id === id ? { ...f, status: "pending_approval", verifiedBy: u.id, verifiedAt: (/* @__PURE__ */ new Date()).toLocaleString(), notes: processForm.notes } : f));
    setProcessModal(null);
    setProcessForm({ notes: "" });
    addNote("Fund request verified \u2014 sent to MD for approval", "success");
  };
  const approve = (id) => {
    setFundRequests((p) => p.map((f) => f.id === id ? { ...f, status: "approved", approvedBy: u.id, approvedAt: (/* @__PURE__ */ new Date()).toLocaleString(), transferMethod: approveForm.transferMethod, transferRef: approveForm.transferRef, notes: approveForm.notes } : f));
    setApproveModal(null);
    setApproveForm({ transferMethod: "bank_transfer", transferRef: "", notes: "" });
    addNote("Fund request approved and recorded", "success");
  };
  const reject = (id) => {
    setFundRequests((p) => p.map((f) => f.id === id ? { ...f, status: "rejected" } : f));
    addNote("Fund request rejected", "warning");
  };
  const grouped = { "pending_verification": [], "pending_approval": [], "approved": [], "rejected": [] };
  fundRequests.forEach((f) => {
    if (grouped[f.status]) grouped[f.status].push(f);
  });
  return <div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
        <button onClick={onBack} style={{ ...BtnS(C.border, false, true), padding: "6px 12px", fontSize: 12 }}>← Back</button>
        <div><div style={{ fontFamily: "'Inter',sans-serif", fontSize: 20, letterSpacing: '-0.3px', fontWeight: 700, color: C.goldLight }}>Fund Requests</div><div style={{ fontSize: 12, color: C.textMuted }}>Station → HQ Ops Verification → MD Approval → Transfer</div></div>
      </div>

      {
    /* Workflow diagram */
  }
      <div style={{ display: "flex", gap: 8, marginBottom: 20, alignItems: "center", flexWrap: "wrap" }}>
        {[["1. Station Manager", "Submits request", "station_manager", C.coffee], ["\u2192", null, null, C.textDim], ["2. HQ Ops Manager", "Verifies request", "hq_ops", C.purple], ["\u2192", null, null, C.textDim], ["3. Managing Director", "Approves & transfers", "md", C.gold], ["\u2192", null, null, C.textDim], ["4. HQ Finance", "Reconciles", "hq_finance", C.warning]].map((item, i) => {
    if (item[0] === "\u2192") return <span key={i} style={{ fontSize: 18, color: item[3] }}>→</span>;
    return <div key={i} style={{ background: C.gradCard, border: `1px solid ${item[3]}30`, borderRadius: 10, padding: "10px 14px", minWidth: 130 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: item[3] }}>{item[0]}</div>
            <div style={{ fontSize: 10, color: C.textMuted, marginTop: 2 }}>{item[1]}</div>
          </div>;
  })}
      </div>

      {
    /* Pending verification */
  }
      {grouped.pending_verification.length > 0 && <div style={{ marginBottom: 16 }}>
          <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 10, color: C.warning }}>⏳ Pending Verification ({grouped.pending_verification.length})</div>
          {grouped.pending_verification.map((fr) => <FundRequestCard key={fr.id} fr={fr} cwsList={cwsList} users={users} canVerify={canVerifyFunds(u.role)} onVerify={() => {
    setProcessModal(fr.id);
    setProcessForm({ notes: "" });
  }} onReject={() => reject(fr.id)} />)}
        </div>}
      {
    /* Pending approval */
  }
      {grouped.pending_approval.length > 0 && <div style={{ marginBottom: 16 }}>
          <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 10, color: C.gold }}>🔐 Pending MD Approval ({grouped.pending_approval.length})</div>
          {grouped.pending_approval.map((fr) => <FundRequestCard key={fr.id} fr={fr} cwsList={cwsList} users={users} canApprove={canApproveFunds(u.role)} onApprove={() => {
    setApproveModal(fr.id);
    setApproveForm({ transferMethod: "bank_transfer", transferRef: "", notes: "" });
  }} onReject={() => reject(fr.id)} />)}
        </div>}
      {
    /* Approved */
  }
      {grouped.approved.length > 0 && <div style={{ marginBottom: 16 }}>
          <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 10, color: C.success }}>✅ Approved Transfers ({grouped.approved.length})</div>
          {grouped.approved.map((fr) => <FundRequestCard key={fr.id} fr={fr} cwsList={cwsList} users={users} />)}
        </div>}
      {
    /* Rejected */
  }
      {grouped.rejected.length > 0 && <div style={{ marginBottom: 16 }}>
          <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 10, color: C.danger }}>✕ Rejected ({grouped.rejected.length})</div>
          {grouped.rejected.map((fr) => <FundRequestCard key={fr.id} fr={fr} cwsList={cwsList} users={users} />)}
        </div>}

      {processModal && <Modal title="Verify Fund Request" onClose={() => setProcessModal(null)}>
          <Alert text="Verifying this request will send it to the Managing Director for final approval and fund transfer." color={C.warning} />
          <div style={{ marginTop: 12 }}><FI label="Verification Notes (optional)" value={processForm.notes} onChange={(v) => setProcessForm((p) => ({ ...p, notes: v }))} placeholder="Any notes for MD..." /></div>
          <MF onCancel={() => setProcessModal(null)} onSave={() => verify(processModal)} label="Verify & Forward to MD" color={C.warning} />
        </Modal>}
      {approveModal && <Modal title="Approve & Record Transfer" onClose={() => setApproveModal(null)}>
          <Alert text="This will mark the funds as approved. Record the transfer method and reference for reconciliation." color={C.gold} />
          <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}>
            <div><FL>Transfer Method</FL><select value={approveForm.transferMethod} onChange={(e) => setApproveForm((p) => ({ ...p, transferMethod: e.target.value }))} style={selS()}>{PAYMENT_METHODS.map((m) => <option key={m} value={m}>{m.replace(/_/g, " ")}</option>)}</select></div>
            <FI label="Transfer Reference" value={approveForm.transferRef} onChange={(v) => setApproveForm((p) => ({ ...p, transferRef: v }))} placeholder="e.g. FT-2025-001" />
            <div style={{ gridColumn: "1/-1" }}><FI label="Notes" value={approveForm.notes} onChange={(v) => setApproveForm((p) => ({ ...p, notes: v }))} placeholder="Additional notes..." /></div>
          </div>
          <MF onCancel={() => setApproveModal(null)} onSave={() => approve(approveModal)} label="✓ Approve & Record Transfer" color={C.gold} />
        </Modal>}
    </div>;
}
function FundRequestCard({ fr, cwsList, users, canVerify, canApprove, onVerify, onApprove, onReject }) {
  const cws = cwsList.find((c) => c.id === fr.cwsId);
  const reqBy = users.find((u) => u.id === fr.requestedBy);
  const statusColors = { "pending_verification": C.warning, "pending_approval": C.gold, "approved": C.success, "rejected": C.danger };
  const col = statusColors[fr.status] || C.textMuted;
  return <div style={{ background: C.gradCard, border: `1px solid ${col}28`, borderRadius: 11, padding: "16px 18px", marginBottom: 10 }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, color: C.text }}>{cws?.name} — <span style={{ color: col }}>{fmtRWF(fr.amount)}</span></div>
          <div style={{ fontSize: 12, color: C.textMuted, marginTop: 2 }}>{fr.reason}</div>
          <div style={{ fontSize: 11, color: C.textDim, marginTop: 2 }}>Requested by {reqBy?.name || "\u2014"} · {fr.requestedAt}</div>
        </div>
        <SB status={fr.status} />
      </div>
      {fr.verifiedBy && <div style={{ fontSize: 11, color: C.textDim, marginBottom: 4 }}>Verified by: {users.find((u) => u.id === fr.verifiedBy)?.name || "\u2014"} · {fr.verifiedAt}</div>}
      {fr.approvedBy && <div style={{ fontSize: 11, color: C.success, marginBottom: 4 }}>✓ Approved by: {users.find((u) => u.id === fr.approvedBy)?.name || "\u2014"} · {fr.approvedAt} · {fr.transferMethod?.replace(/_/g, " ")} · Ref: {fr.transferRef}</div>}
      {(canVerify || canApprove || onReject) && <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          {canVerify && fr.status === "pending_verification" && <button onClick={onVerify} style={{ ...BtnS(C.warning, true), fontSize: 11, padding: "5px 12px" }}>✓ Verify</button>}
          {canApprove && fr.status === "pending_approval" && <button onClick={onApprove} style={{ ...BtnS(C.gold), fontSize: 11, padding: "5px 12px" }}>✓ Approve & Transfer</button>}
          {onReject && ["pending_verification", "pending_approval"].includes(fr.status) && <button onClick={onReject} style={{ ...BtnS(C.danger, false, true), fontSize: 11, padding: "5px 12px" }}>✕ Reject</button>}
        </div>}
    </div>;
}
function AlertsPanel() {
  const { cherry, expenses, cashbook, fundRequests, cwsList, currentUser: u } = useApp();
  const alerts = [];
  cwsList.forEach((cws) => {
    const cb = cashbook.filter((c) => c.cwsId === cws.id);
    const bal = cb.reduce((s, c) => c.type === "inflow" ? s + (+c.amount || 0) : s - c.amount, 0);
    if (bal < 3e5) alerts.push({ type: "danger", icon: "\u{1F4B8}", msg: `Low cash at ${cws.name}: ${fmtRWF(bal)}`, cws: cws.id });
  });
  const pendExp = expenses.filter((e) => e.status === "pending");
  if (pendExp.length > 0) alerts.push({ type: "warning", icon: "\u23F3", msg: `${pendExp.length} expense(s) pending manager approval` });
  const pendFR = fundRequests.filter((f) => f.status === "pending_verification" || f.status === "pending_approval");
  if (pendFR.length > 0) alerts.push({ type: "warning", icon: "\u{1F4B0}", msg: `${pendFR.length} fund request(s) awaiting action` });
  const bigPurchases = cherry.filter((c) => c.totalKg > 1e3);
  if (bigPurchases.length > 0) alerts.push({ type: "info", icon: "\u{1F4E6}", msg: `${bigPurchases.length} large cherry purchase(s) over 1,000 kg detected` });
  if (!alerts.length) return null;
  return <div style={{ marginBottom: 16 }}>
      {alerts.map((a, i) => <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", padding: "8px 12px", background: `${a.type === "danger" ? C.danger : a.type === "warning" ? C.warning : C.info}10`, border: `1px solid ${a.type === "danger" ? C.danger : a.type === "warning" ? C.warning : C.info}28`, borderRadius: 8, marginBottom: 6, fontSize: 12 }}>
          <span style={{ flexShrink: 0 }}>{a.icon}</span>
          <span style={{ color: a.type === "danger" ? C.danger : a.type === "warning" ? C.warning : C.info, fontWeight: 600 }}>{a.msg}</span>
        </div>)}
    </div>;
}
function WarehousePage() {
  const { currentUser: u, warehouseStock, setWarehouseStock, cwsList, addNote } = useApp();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ fromCwsId: "", grade: "Parchment", tonnes: "", lotNumber: "", gnrRefs: "", transportDetails: "", notes: "" });
  const totalTonnes = warehouseStock.reduce((s, w) => s + w.tonnes, 0);
  const pending = warehouseStock.filter((w) => w.status === "pending");
  const confirmed = warehouseStock.filter((w) => w.status === "confirmed");
  const confirmShipment = (id) => {
    setWarehouseStock((p) => p.map((w) => w.id === id ? { ...w, status: "confirmed", confirmedBy: u.id, confirmedAt: (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").slice(0, 16) } : w));
    addNote("Warehouse shipment confirmed", "warehouse");
  };
  const send = () => {
    if (!form.fromCwsId || !form.tonnes) return;
    setWarehouseStock((p) => [...p, { id: uid(), fromCwsId: form.fromCwsId, sentBy: u.id, date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0], grade: form.grade, tonnes: parseFloat(form.tonnes), lotNumber: form.lotNumber, gnrRefs: form.gnrRefs, transportDetails: form.transportDetails, status: "pending", confirmedBy: null, confirmedAt: null, notes: form.notes }]);
    setShowForm(false);
    setForm({ fromCwsId: "", grade: "Parchment", tonnes: "", lotNumber: "", gnrRefs: "", transportDetails: "", notes: "" });
    addNote("New shipment sent to warehouse", "warehouse");
  };
  return <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
        <div>
          <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 22, fontWeight: 700, color: C.text, letterSpacing: '-0.4px' }}>Warehouse</div>
          <div style={{ fontSize: 13, color: C.textMuted }}>Parchment Stock · Shipment Tracking</div>
        </div>
        {canSendToWarehouse(u.role) && <button onClick={() => setShowForm(true)} style={{ ...BtnS(C.gold), padding: "8px 16px", fontSize: 12 }}>+ Send to Warehouse</button>}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 12, marginBottom: 20 }}>
        <SC label="Total Tonnes" value={totalTonnes.toFixed(2) + " T"} color={C.gold} />
        <SC label="Pending Confirmation" value={pending.length} color={C.warning} />
        <SC label="Confirmed" value={confirmed.length} color={C.success} />
      </div>
      {pending.length > 0 && canConfirmWarehouse(u.role) && <div style={{ marginBottom: 18, background: C.gradCard, border: `1px solid ${C.warning}40`, borderRadius: 12, overflow: "hidden" }}>
          <div style={{ padding: "11px 16px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13, color: C.warning }}>Pending Confirmation</div>
          {pending.map((w) => {
    const cws = cwsList.find((c) => c.id === w.fromCwsId);
    return <div key={w.id} style={{ padding: "11px 16px", borderBottom: `1px solid ${C.border}15`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 13 }}>{w.lotNumber || "No Lot #"} · {cws?.name}</div>
                  <div style={{ fontSize: 11, color: C.textMuted, marginTop: 2 }}>{w.date} · {w.tonnes} T {w.grade}</div>
                </div>
                <button onClick={() => confirmShipment(w.id)} style={{ ...BtnS(C.success), padding: "6px 14px", fontSize: 11 }}>Confirm</button>
              </div>;
  })}
        </div>}
      <div style={{ background: C.gradCard, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
        <div style={{ padding: "11px 16px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13 }}>All Shipments ({warehouseStock.length})</div>
        {warehouseStock.length === 0 ? <ES text="No shipments yet" /> : <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead><tr style={{ background: C.surface }}>{["Date", "Station", "Lot #", "Grade", "Tonnes", "Status", "Confirmed At"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
          <tbody>{warehouseStock.map((w) => {
    const cws = cwsList.find((c) => c.id === w.fromCwsId);
    return <tr key={w.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                <Td style={{ color: C.textMuted }}>{w.date}</Td>
                <Td style={{ color: C.coffeeLight, fontWeight: 600 }}>{cws?.name || w.fromCwsId}</Td>
                <Td style={{ color: C.gold, fontWeight: 700 }}>{w.lotNumber || "\u2014"}</Td>
                <Td>{w.grade}</Td>
                <Td style={{ fontWeight: 700, color: C.info }}>{w.tonnes} T</Td>
                <Td><SB status={w.status} /></Td>
                <Td style={{ color: C.textDim, fontSize: 11 }}>{w.confirmedAt?.split(" ")[0] || "\u2014"}</Td>
              </tr>;
  })}</tbody>
        </table></div>}
      </div>
      {showForm && <Modal title="Send Stock to Warehouse" onClose={() => setShowForm(false)} wide>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 12 }}>
            <div><FL>From Station</FL><select value={form.fromCwsId} onChange={(e) => setForm((p) => ({ ...p, fromCwsId: e.target.value }))} style={selS()}><option value="">— Select —</option>{cwsList.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}</select></div>
            <div><FL>Grade</FL><select value={form.grade} onChange={(e) => setForm((p) => ({ ...p, grade: e.target.value }))} style={selS()}><option>Parchment</option><option>Green</option></select></div>
            <FI label="Tonnes" type="number" value={form.tonnes} onChange={(v) => setForm((p) => ({ ...p, tonnes: v }))} placeholder="e.g. 2.5" />
            <FI label="Lot Number" value={form.lotNumber} onChange={(v) => setForm((p) => ({ ...p, lotNumber: v }))} placeholder="LOT-XXX-001" />
            <FI label="GNR References" value={form.gnrRefs} onChange={(v) => setForm((p) => ({ ...p, gnrRefs: v }))} placeholder="GNR-MSZ-0001" />
            <FI label="Transport Details" value={form.transportDetails} onChange={(v) => setForm((p) => ({ ...p, transportDetails: v }))} placeholder="Truck plate RAC..." />
          </div>
          <div style={{ marginTop: 12 }}><FI label="Notes" value={form.notes} onChange={(v) => setForm((p) => ({ ...p, notes: v }))} placeholder="Optional" /></div>
          <MF onCancel={() => setShowForm(false)} onSave={send} label="Send to Warehouse" color={C.gold} />
        </Modal>}
    </div>;
}

function ReportsPage() {
  const { cherry, expenses, cashbook, bankTx, stock, debts, cwsList,
          machTx, fundRequests, farmers: farmers2, users, seasons } = useApp();

  // ── Report type & global filters ─────────────────────────────────
  const [reportType, setReportType] = useState("cherry");
  const [filterStation, setFilterStation] = useState("all");
  const [filterFrom,    setFilterFrom]    = useState("");
  const [filterTo,      setFilterTo]      = useState("");
  const [chartType,     setChartType]     = useState("bar"); // bar | line | pie

  // ── Per-field filters (per report tab) ───────────────────────────
  const [cherryFilters,  setCherryFilters]  = useState({ farmer:"all", status:"all", method:"all", gnr:"" });
  const [expFilters,     setExpFilters]     = useState({ category:"all", status:"all", description:"" });
  const [cashFilters,    setCashFilters]    = useState({ type:"all", category:"all", description:"" });
  const [bankFilters,    setBankFilters]    = useState({ type:"all", description:"" });
  const [debtFilters,    setDebtFilters]    = useState({ status:"all", farmer:"all" });
  const [frFilters,      setFrFilters]      = useState({ status:"all" });
  const [stockFilters,   setStockFilters]   = useState({ type:"all" });

  // ── Helpers ───────────────────────────────────────────────────────
  const inRange    = d => (!filterFrom || d >= filterFrom) && (!filterTo || d <= filterTo);
  const inStation  = id => filterStation === "all" || id === filterStation;

  // ── Filtered datasets ─────────────────────────────────────────────
  const fCherry = cherry.filter(c =>
    inStation(c.cwsId) && inRange(c.date) &&
    (cherryFilters.farmer  === "all" || c.farmerId       === cherryFilters.farmer) &&
    (cherryFilters.status  === "all" || c.status         === cherryFilters.status) &&
    (cherryFilters.method  === "all" || c.paymentMethod  === cherryFilters.method) &&
    (!cherryFilters.gnr    || (c.gnrNumber||"").toLowerCase().includes(cherryFilters.gnr.toLowerCase()))
  );

  const fExpenses = expenses.filter(e =>
    inStation(e.cwsId) && inRange(e.date) &&
    (expFilters.category    === "all" || e.category    === expFilters.category) &&
    (expFilters.status      === "all" || e.status      === expFilters.status) &&
    (!expFilters.description || (e.description||"").toLowerCase().includes(expFilters.description.toLowerCase()))
  );

  const fCashbook = cashbook.filter(c =>
    inStation(c.cwsId) && inRange(c.date) &&
    (cashFilters.type        === "all" || c.type     === cashFilters.type) &&
    (cashFilters.category    === "all" || c.category === cashFilters.category) &&
    (!cashFilters.description || (c.description||"").toLowerCase().includes(cashFilters.description.toLowerCase()))
  );

  const fBank = bankTx.filter(b =>
    inStation(b.cwsId) && inRange(b.date) &&
    (bankFilters.type        === "all" || b.type === bankFilters.type) &&
    (!bankFilters.description || (b.description||"").toLowerCase().includes(bankFilters.description.toLowerCase()))
  );

  const fDebts = debts.filter(d =>
    inStation(d.cwsId) &&
    (debtFilters.status === "all" || d.status    === debtFilters.status) &&
    (debtFilters.farmer === "all" || d.farmerId  === debtFilters.farmer)
  );

  const fStock = stock.filter(s =>
    inStation(s.cwsId) && inRange(s.date) &&
    (stockFilters.type === "all" || s.type === stockFilters.type)
  );

  const fFR = fundRequests.filter(f =>
    inStation(f.cwsId) &&
    (frFilters.status === "all" || f.status === frFilters.status)
  );

  // ── Summaries ─────────────────────────────────────────────────────
  const totalCherryKg   = fCherry.reduce((s,c) => s + (+c.totalKg  || 0), 0);
  const totalPaid       = fCherry.reduce((s,c) => s + (+c.totalPaid|| 0), 0);
  const totalExp        = fExpenses.filter(e => e.status === "approved").reduce((s,e) => s + (+e.amount || 0), 0);
  const totalMachIncome = machTx.filter(t => t.type === "income").reduce((s,t) => s + (+t.amount || 0), 0);
  const totalStock      = fStock.reduce((s,sk) => s + (+sk.totalValue || 0), 0);
  const totalDebts      = fDebts.reduce((s,d) => s + (+d.balance || 0), 0);

  const PIE_COLORS = ["#C4793C","#4A8EC8","#C8A84B","#4EC866","#E05050",
                      "#9A5EE0","#E0A030","#7A5AC8","#5A8A6A","#4888C8","#7AAABB","#8888AA"];

  const expByCat = EXPENSE_CATS.map(cat => ({
    name: cat,
    value: fExpenses.filter(e => e.category === cat && e.status === "approved")
                    .reduce((s,e) => s + (+e.amount || 0), 0)
  })).filter(d => d.value > 0);

  const stationRows = (filterStation === "all" ? cwsList : cwsList.filter(c => c.id === filterStation))
    .map(cws => {
      const ck = cherry.filter(c => c.cwsId === cws.id && inRange(c.date));
      const ex = expenses.filter(e => e.cwsId === cws.id && inRange(e.date) && e.status === "approved");
      const cb = cashbook.filter(c => c.cwsId === cws.id && inRange(c.date));
      const cashBal = cb.reduce((s,c) => c.type === "inflow" ? s + (+c.amount||0) : s - (+c.amount||0), 0);
      return {
        cws, farmers: new Set(ck.map(c => c.farmerId)).size,
        kg:   ck.reduce((s,c) => s + (+c.totalKg  ||0), 0),
        paid: ck.reduce((s,c) => s + (+c.totalPaid||0), 0),
        exp:  ex.reduce((s,e) => s + (+e.amount   ||0), 0),
        cashBal,
      };
    });

  // ── Chart data builders ───────────────────────────────────────────
  const cherryByDate = (() => {
    const map = {};
    fCherry.forEach(c => { map[c.date] = (map[c.date]||0) + (+c.totalKg||0); });
    return Object.entries(map).sort(([a],[b]) => a.localeCompare(b))
      .map(([date, kg]) => ({ date, "Cherry kg": +kg.toFixed(1) }));
  })();

  const cherryByStation = cwsList.map(cws => ({
    name: cws.name.replace(" CWS",""),
    "Cherry kg": fCherry.filter(c => c.cwsId === cws.id).reduce((s,c) => s + (+c.totalKg||0), 0),
    "Payments (k RWF)": +(fCherry.filter(c => c.cwsId === cws.id).reduce((s,c) => s + (+c.totalPaid||0), 0) / 1000).toFixed(1),
  }));

  const cherryByFarmer = (() => {
    const map = {};
    fCherry.forEach(c => {
      const f = farmers2.find(x => x.id === c.farmerId);
      const name = f?.name || c.farmerId;
      map[name] = (map[name]||0) + (+c.totalKg||0);
    });
    return Object.entries(map).sort(([,a],[,b]) => b - a).slice(0,10)
      .map(([name, kg]) => ({ name, "Cherry kg": +kg.toFixed(1) }));
  })();

  const expByDateData = (() => {
    const map = {};
    fExpenses.filter(e => e.status === "approved").forEach(e => {
      map[e.date] = (map[e.date]||0) + (+e.amount||0);
    });
    return Object.entries(map).sort(([a],[b]) => a.localeCompare(b))
      .map(([date, amount]) => ({ date, "Expenses (RWF)": amount }));
  })();

  const cashFlowData = (() => {
    const map = {};
    fCashbook.forEach(c => {
      if (!map[c.date]) map[c.date] = { date: c.date, Inflows: 0, Outflows: 0 };
      if (c.type === "inflow") map[c.date].Inflows += (+c.amount||0);
      else map[c.date].Outflows += (+c.amount||0);
    });
    return Object.values(map).sort((a,b) => a.date.localeCompare(b.date));
  })();

  // ── Export CSV ────────────────────────────────────────────────────
  const exportExcel = (type) => {
    let rows = [];
    if (type === "cherry") {
      rows = [
        ["Date","GNR #","Station","Farmer","Std kg","Flt kg","Total kg","Rate Std","Rate Flt","Pmt Std","Pmt Flt","Total Paid","Avg Rate","Method","Status"],
        ...fCherry.map(c => {
          const cws = cwsList.find(x => x.id === c.cwsId);
          const f   = farmers2.find(x => x.id === c.farmerId);
          return [c.date, c.gnrNumber, cws?.name||c.cwsId, f?.name||c.farmerId,
                  c.standardKg, c.flotantKg, c.totalKg, c.rateStandard, c.rateFlotant,
                  c.paymentStandard, c.paymentFlotant, c.totalPaid, (c.avgRate||0),
                  c.paymentMethod, c.status];
        })
      ];
    } else if (type === "expenses") {
      rows = [
        ["Date","Station","Category","Description","Amount","Exploitable","Status"],
        ...fExpenses.map(e => {
          const cws = cwsList.find(x => x.id === e.cwsId);
          return [e.date, cws?.name||e.cwsId, e.category, e.description,
                  e.amount, e.exploitable ? "Yes":"No", e.status];
        })
      ];
    } else if (type === "cashbook") {
      rows = [
        ["Date","Station","Type","Category","Description","Amount","Reference"],
        ...fCashbook.map(c => {
          const cws = cwsList.find(x => x.id === c.cwsId);
          return [c.date, cws?.name||c.cwsId, c.type, c.category, c.description, c.amount, c.ref];
        })
      ];
    } else if (type === "fund_requests") {
      rows = [
        ["Station","Requested By","Amount","Reason","Status","Requested At","Transfer Method","Ref"],
        ...fFR.map(f => {
          const cws = cwsList.find(x => x.id === f.cwsId);
          return [cws?.name||f.cwsId, f.requestedBy, f.amount, f.reason,
                  f.status, f.requestedAt||"", f.transferMethod||"", f.transferRef||""];
        })
      ];
    } else if (type === "station_summary") {
      rows = [
        ["Station","Region","Cherry kg","Farmers","Payments (RWF)","Expenses (RWF)","Cash Balance","Net"],
        ...stationRows.map(r => [r.cws.name, r.cws.region, r.kg, r.farmers,
                                  r.paid, r.exp, r.cashBal, r.cashBal - r.paid - r.exp])
      ];
    } else if (type === "debts") {
      rows = [
        ["Farmer","Station","Type","Amount","Balance","Status"],
        ...fDebts.map(d => {
          const cws = cwsList.find(x => x.id === d.cwsId);
          const f   = farmers2.find(x => x.id === d.farmerId);
          return [f?.name||d.farmerId, cws?.name||d.cwsId, d.type, d.amount, d.balance, d.status];
        })
      ];
    } else if (type === "stock") {
      rows = [
        ["Date","Station","Type","Quantity","Unit","Unit Price","Total Value","Notes"],
        ...fStock.map(s => {
          const cws = cwsList.find(x => x.id === s.cwsId);
          return [s.date, cws?.name||s.cwsId, s.type, s.quantity, s.unit, s.unitPrice, s.totalValue, s.notes||""];
        })
      ];
    }
    const csv = rows.map(r => r.map(v => `"${String(v||"").replace(/"/g,'""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type:"text/csv;charset=utf-8;" });
    const a = document.createElement("a");
    const sfx = filterStation !== "all" ? `_${filterStation}` : "_all";
    const dt  = filterFrom ? `_${filterFrom}${filterTo ? "_to_"+filterTo : ""}` : "";
    a.href = URL.createObjectURL(blob);
    a.download = `bender_${type}${sfx}${dt}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  // ── Print ─────────────────────────────────────────────────────────
  const printReport = () => {
    const stn   = filterStation === "all" ? "All Stations" : cwsList.find(c => c.id === filterStation)?.name || filterStation;
    const range = filterFrom ? `${filterFrom}${filterTo ? " → "+filterTo : " → present"}` : "All dates";
    const w = window.open("","_blank");
    w.document.write(`<html><head><title>Bender Exports — Report</title>
    <style>body{font-family:Arial,sans-serif;font-size:11px;padding:20px;}
    h1{font-size:18px;}h2{font-size:13px;color:#555;margin-bottom:16px;}
    table{width:100%;border-collapse:collapse;margin-bottom:20px;}
    th{background:#0F1810;color:#C8A84B;padding:7px;font-size:10px;text-align:left;}
    td{padding:6px 8px;border-bottom:1px solid #ddd;font-size:11px;}
    tr:nth-child(even){background:#f9f9f9;}
    .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:10px;margin-bottom:16px;}
    .kpi{border:1px solid #ddd;padding:10px;border-radius:6px;}
    .kl{font-size:9px;color:#888;text-transform:uppercase;}.kv{font-size:16px;font-weight:700;margin-top:4px;}
    @media print{body{padding:0;}}
    </style></head><body>
    <h1>Bender Exports Ltd. — ${reportType.replace("_"," ").toUpperCase()} Report</h1>
    <h2>${stn} · ${range}</h2>
    <div class="grid">
      <div class="kpi"><div class="kl">Cherry Purchased</div><div class="kv">${totalCherryKg.toLocaleString()} kg</div></div>
      <div class="kpi"><div class="kl">Farmer Payments</div><div class="kv">${totalPaid.toLocaleString()} RWF</div></div>
      <div class="kpi"><div class="kl">Approved Expenses</div><div class="kv">${totalExp.toLocaleString()} RWF</div></div>
      <div class="kpi"><div class="kl">Stock Value</div><div class="kv">${totalStock.toLocaleString()} RWF</div></div>
    </div>
    <table><thead><tr><th>Station</th><th>Cherry kg</th><th>Farmers</th><th>Payments</th><th>Expenses</th><th>Cash Balance</th><th>Net</th></tr></thead>
    <tbody>${stationRows.map(r=>`<tr><td>${r.cws.name}</td><td>${r.kg.toLocaleString()}</td><td>${r.farmers}</td><td>${r.paid.toLocaleString()}</td><td>${r.exp.toLocaleString()}</td><td>${r.cashBal.toLocaleString()}</td><td>${(r.cashBal-r.paid-r.exp).toLocaleString()}</td></tr>`).join("")}</tbody></table>
    <p style="color:#888;font-size:9px">Generated: ${new Date().toLocaleString()} · Bender Exports Ltd.</p>
    </body></html>`);
    w.document.close(); w.print();
  };

  // ── Reusable filter badge ─────────────────────────────────────────
  const FBadge = ({ label, value, options, onChange, showAll=true }) =>
    <div style={{ display:"flex", alignItems:"center", gap:5 }}>
      <span style={{ fontSize:10, fontWeight:600, color:C.textDim, textTransform:"uppercase", letterSpacing:"0.6px", whiteSpace:"nowrap" }}>{label}</span>
      <select value={value} onChange={e => onChange(e.target.value)}
        style={{ ...selS(), width:"auto", padding:"5px 9px", fontSize:11 }}>
        {showAll && <option value="all">All</option>}
        {options.map(o => <option key={o.value||o} value={o.value||o}>{o.label||o}</option>)}
      </select>
    </div>;

  const FSearch = ({ placeholder, value, onChange }) =>
    <div style={{ position:"relative" }}>
      <span style={{ position:"absolute", left:9, top:"50%", transform:"translateY(-50%)", color:C.textDim, fontSize:12, pointerEvents:"none" }}>🔍</span>
      <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        style={{ ...selS(), width:160, padding:"5px 9px 5px 28px", fontSize:11 }} />
    </div>;

  // ── Chart switcher ─────────────────────────────────────────────────
  const ChartToggle = () =>
    <div style={{ display:"flex", gap:3, background:C.bgDeep, padding:3, borderRadius:8, border:`1px solid ${C.border}` }}>
      {[["bar","▬ Bar"],["line","↗ Line"],["pie","◉ Pie"]].map(([t,l]) =>
        <div key={t} onClick={() => setChartType(t)}
          style={{ padding:"4px 10px", borderRadius:6, cursor:"pointer", fontSize:11,
            fontWeight: chartType===t ? 700 : 400,
            color: chartType===t ? C.gold : C.textMuted,
            background: chartType===t ? `${C.gold}18` : "transparent",
            border:`1px solid ${chartType===t ? C.gold+"28" : "transparent"}`,
            transition:"all .15s" }}>{l}</div>)}
    </div>;

  // ── Universal chart renderer ───────────────────────────────────────
  const SmartChart = ({ data, bars=[], lines=[], colors=[], height=200, labelKey="date" }) => {
    if (!data || data.length === 0)
      return <div style={{ padding:"28px 0", textAlign:"center", color:C.textDim, fontSize:12 }}>
        <div style={{ fontSize:24, marginBottom:8, opacity:.3 }}>◎</div>No data for current filters
      </div>;

    const keys = bars.length ? bars : lines.length ? lines : Object.keys(data[0]).filter(k => k !== labelKey);
    const colPalette = colors.length ? colors : [C.coffee, C.gold, C.machinery, C.success, C.danger, C.purple];

    if (chartType === "pie") {
      const pieData = data.reduce((acc, row) => {
        const key = row[labelKey] || row.name || row.date;
        const val = +row[keys[0]] || 0;
        const existing = acc.find(x => x.name === key);
        if (existing) existing.value += val;
        else acc.push({ name: key, value: val });
        return acc;
      }, []);
      return <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%"
            outerRadius={70} label={({name, percent}) => percent > 0.05 ? `${(percent*100).toFixed(0)}%` : ""} labelLine={false}>
            {pieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
          </Pie>
          <Tooltip formatter={(v) => [v.toLocaleString(), keys[0]]}
            contentStyle={{ background:C.gradCard, border:`1px solid ${C.borderLight}`, borderRadius:10, fontSize:11 }} />
          <Legend wrapperStyle={{ fontSize:10 }} />
        </PieChart>
      </ResponsiveContainer>;
    }

    if (chartType === "line") {
      return <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data} margin={{ top:4, right:8, left:0, bottom:0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={C.border} vertical={false} />
          <XAxis dataKey={labelKey} tick={{ fill:C.textMuted, fontSize:10 }} axisLine={false} tickLine={false}
            tickFormatter={v => v && v.length > 8 ? v.slice(5) : v} />
          <YAxis tick={{ fill:C.textMuted, fontSize:9 }} axisLine={false} tickLine={false} width={40}
            tickFormatter={v => v >= 1000 ? `${(v/1000).toFixed(0)}k` : v} />
          <Tooltip contentStyle={{ background:C.gradCard, border:`1px solid ${C.borderLight}`, borderRadius:10, fontSize:11 }} />
          <Legend wrapperStyle={{ fontSize:11, paddingTop:8 }} />
          {keys.map((k, i) => <Line key={k} type="monotone" dataKey={k}
            stroke={colPalette[i % colPalette.length]} strokeWidth={2} dot={false} />)}
        </LineChart>
      </ResponsiveContainer>;
    }

    return <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} barGap={4} barCategoryGap="30%" margin={{ top:4, right:8, left:0, bottom:0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={C.border} vertical={false} />
        <XAxis dataKey={labelKey} tick={{ fill:C.textMuted, fontSize:10 }} axisLine={false} tickLine={false}
          tickFormatter={v => v && v.length > 8 ? v.slice(5) : v} />
        <YAxis tick={{ fill:C.textMuted, fontSize:9 }} axisLine={false} tickLine={false} width={40}
          tickFormatter={v => v >= 1000 ? `${(v/1000).toFixed(0)}k` : v} />
        <Tooltip contentStyle={{ background:C.gradCard, border:`1px solid ${C.borderLight}`, borderRadius:10, fontSize:11 }} />
        <Legend wrapperStyle={{ fontSize:11, paddingTop:8 }} />
        {keys.map((k, i) => <Bar key={k} dataKey={k} fill={colPalette[i % colPalette.length]} radius={[4,4,0,0]} />)}
      </BarChart>
    </ResponsiveContainer>;
  };

  // ── Filter bar card ────────────────────────────────────────────────
  const FilterCard = ({ children }) =>
    <div style={{ display:"flex", gap:8, alignItems:"center", flexWrap:"wrap",
      padding:"10px 14px", background:C.gradCard, borderRadius:12,
      border:`1px solid ${C.border}`, marginBottom:14 }}>
      {children}
    </div>;

  const REPORT_TABS = [
    { id:"cherry",          label:"Cherry Purchases" },
    { id:"expenses",        label:"Expenses" },
    { id:"cashbook",        label:"Cash & Bank" },
    { id:"station_summary", label:"Station Summary" },
    { id:"fund_requests",   label:"Fund Requests" },
    { id:"stock",           label:"Stock" },
    { id:"debts",           label:"Debts" },
  ];

  const uniquePayMethods = [...new Set(cherry.map(c => c.paymentMethod).filter(Boolean))];
  const uniqueExpCats    = EXPENSE_CATS;
  const uniqueCashCats   = [...new Set(cashbook.map(c => c.category).filter(Boolean))];
  const farmerOptions    = farmers2.map(f => ({ value:f.id, label:f.name||f.farmerId }));

  return <div>
    {/* ── Header ── */}
    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16, flexWrap:"wrap", gap:10 }}>
      <div style={{ fontSize:22, fontWeight:700, letterSpacing:"-0.4px" }}>Consolidated Reports</div>
      <div style={{ display:"flex", gap:8, alignItems:"center" }}>
        <ChartToggle />
        <button onClick={() => exportExcel(reportType)} style={{ ...BtnS(C.success), fontSize:11, padding:"7px 13px" }}>⬇ Export CSV</button>
        <button onClick={printReport} style={{ ...BtnS(C.info, true), fontSize:11, padding:"7px 13px" }}>🖨 Print</button>
      </div>
    </div>

    {/* ── Global Filters ── */}
    <FilterCard>
      <span style={{ fontSize:10, fontWeight:700, color:C.textDim, textTransform:"uppercase", letterSpacing:"1px", flexShrink:0 }}>Filters</span>
      <FBadge label="Station" value={filterStation} onChange={setFilterStation}
        options={cwsList.map(c => ({ value:c.id, label:c.name }))} />
      <div style={{ display:"flex", alignItems:"center", gap:5 }}>
        <span style={{ fontSize:10, fontWeight:600, color:C.textDim, textTransform:"uppercase", letterSpacing:"0.6px" }}>From</span>
        <input type="date" value={filterFrom} onChange={e => setFilterFrom(e.target.value)}
          style={{ ...selS(), width:"auto", padding:"5px 9px", fontSize:11 }} />
      </div>
      <div style={{ display:"flex", alignItems:"center", gap:5 }}>
        <span style={{ fontSize:10, fontWeight:600, color:C.textDim, textTransform:"uppercase", letterSpacing:"0.6px" }}>To</span>
        <input type="date" value={filterTo} onChange={e => setFilterTo(e.target.value)}
          style={{ ...selS(), width:"auto", padding:"5px 9px", fontSize:11 }} />
      </div>
      {(filterStation !== "all" || filterFrom || filterTo) &&
        <button onClick={() => { setFilterStation("all"); setFilterFrom(""); setFilterTo(""); }}
          style={{ ...BtnS(C.danger, false, true), fontSize:10, padding:"4px 10px" }}>✕ Clear</button>}
      <span style={{ marginLeft:"auto", fontSize:11, color:C.textDim }}>
        {filterStation !== "all" ? cwsList.find(c => c.id === filterStation)?.name : "All Stations"}
        {filterFrom ? ` · ${filterFrom}${filterTo ? " → "+filterTo : " → present"}` : ""}
      </span>
    </FilterCard>

    {/* ── KPI Summary ── */}
    <div className="kpi-grid" style={{ marginBottom:14 }}>
      <SC label="Cherry Purchased"    value={fmtKg(totalCherryKg)}    color={C.coffee}   icon="☕" />
      <SC label="Farmer Payments"     value={fmtRWF(totalPaid)}        color={C.danger}   icon="💰" />
      <SC label="Approved Expenses"   value={fmtRWF(totalExp)}         color={C.warning}  icon="📋" />
      <SC label="Stock Value"         value={fmtRWF(totalStock)}       color={C.gold}     icon="📦" />
      <SC label="Machine Revenue"     value={fmtRWF(totalMachIncome)}  color={C.machinery}icon="🏗️" />
      <SC label="Outstanding Debts"   value={fmtRWF(totalDebts)}       color={C.info}     icon="⚠️" />
    </div>

    {/* ── Report Tabs ── */}
    <Tabs tabs={REPORT_TABS.map(t => t.id)} labels={REPORT_TABS.map(t => t.label)}
      active={reportType} onChange={setReportType} color={C.gold} />

    {/* ══ CHERRY REPORT ══════════════════════════════════════════════ */}
    {reportType === "cherry" && <div>
      {/* Per-field filters */}
      <FilterCard>
        <FBadge label="Status" value={cherryFilters.status} onChange={v => setCherryFilters(p=>({...p,status:v}))}
          options={["pending","paid","not_paid"]} />
        <FBadge label="Payment Method" value={cherryFilters.method} onChange={v => setCherryFilters(p=>({...p,method:v}))}
          options={uniquePayMethods} />
        <FBadge label="Farmer" value={cherryFilters.farmer} onChange={v => setCherryFilters(p=>({...p,farmer:v}))}
          options={farmerOptions} />
        <FSearch placeholder="Search GNR #" value={cherryFilters.gnr}
          onChange={v => setCherryFilters(p=>({...p,gnr:v}))} />
        {(cherryFilters.status !== "all" || cherryFilters.method !== "all" || cherryFilters.farmer !== "all" || cherryFilters.gnr) &&
          <button onClick={() => setCherryFilters({ farmer:"all", status:"all", method:"all", gnr:"" })}
            style={{ ...BtnS(C.danger, false, true), fontSize:10, padding:"4px 8px" }}>✕</button>}
      </FilterCard>

      {/* KPIs */}
      <div className="kpi-grid" style={{ marginBottom:14 }}>
        <SC label="GNR Records"  value={fCherry.length}  color={C.coffee} />
        <SC label="Standard kg"  value={fmtKg(fCherry.reduce((s,c) => s+(+c.standardKg||0),0))} color={C.coffeeLight} />
        <SC label="Flotant kg"   value={fmtKg(fCherry.reduce((s,c) => s+(+c.flotantKg||0),0))}  color={C.warning} />
        <SC label="Avg Rate"     value={`${fCherry.length > 0 ? (fCherry.reduce((s,c)=>s+(c.avgRate||0),0)/fCherry.length).toFixed(1) : 0} RWF/kg`} color={C.info} />
      </div>

      {/* Charts */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:14, marginBottom:14 }}>
        <div style={{ background:C.gradCard, border:`1px solid ${C.border}`, borderRadius:14, padding:"14px 16px 8px" }}>
          <div style={{ fontWeight:700, fontSize:13, marginBottom:12 }}>Cherry by Date</div>
          <SmartChart data={cherryByDate} bars={["Cherry kg"]} colors={[C.coffee]} height={180} />
        </div>
        <div style={{ background:C.gradCard, border:`1px solid ${C.border}`, borderRadius:14, padding:"14px 16px 8px" }}>
          <div style={{ fontWeight:700, fontSize:13, marginBottom:12 }}>By Station</div>
          <SmartChart data={cherryByStation} bars={["Cherry kg","Payments (k RWF)"]} colors={[C.coffee, C.gold]} height={180} labelKey="name" />
        </div>
        <div style={{ background:C.gradCard, border:`1px solid ${C.border}`, borderRadius:14, padding:"14px 16px 8px" }}>
          <div style={{ fontWeight:700, fontSize:13, marginBottom:12 }}>Top 10 Farmers</div>
          <SmartChart data={cherryByFarmer} bars={["Cherry kg"]} colors={[C.coffeeLight]} height={180} labelKey="name" />
        </div>
      </div>

      {/* Table */}
      <div style={{ background:C.gradCard, border:`1px solid ${C.border}`, borderRadius:14, overflow:"hidden" }}>
        <div style={{ padding:"11px 16px", borderBottom:`1px solid ${C.border}`, fontWeight:700, fontSize:13,
          display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <span>Cherry Purchase Records ({fCherry.length})</span>
          <button onClick={() => exportExcel("cherry")} style={{ ...BtnS(C.success, true), fontSize:10, padding:"4px 10px" }}>⬇ CSV</button>
        </div>
        <GNRTable rows={fCherry} cwsList={cwsList} farmers={farmers2} full showStation />
      </div>
    </div>}

    {/* ══ EXPENSES REPORT ════════════════════════════════════════════ */}
    {reportType === "expenses" && <div>
      <FilterCard>
        <FBadge label="Category" value={expFilters.category} onChange={v => setExpFilters(p=>({...p,category:v}))}
          options={uniqueExpCats} />
        <FBadge label="Status" value={expFilters.status} onChange={v => setExpFilters(p=>({...p,status:v}))}
          options={["pending","approved","rejected"]} />
        <FSearch placeholder="Search description" value={expFilters.description}
          onChange={v => setExpFilters(p=>({...p,description:v}))} />
        {(expFilters.category !== "all" || expFilters.status !== "all" || expFilters.description) &&
          <button onClick={() => setExpFilters({ category:"all", status:"all", description:"" })}
            style={{ ...BtnS(C.danger, false, true), fontSize:10, padding:"4px 8px" }}>✕</button>}
      </FilterCard>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:14, marginBottom:14 }}>
        <div style={{ background:C.gradCard, border:`1px solid ${C.border}`, borderRadius:14, padding:"14px 16px 8px" }}>
          <div style={{ fontWeight:700, fontSize:13, marginBottom:12 }}>By Category (Approved)</div>
          {expByCat.length === 0
            ? <ES text="No approved expenses in range" />
            : <SmartChart data={expByCat} bars={["value"]} colors={PIE_COLORS} height={180} labelKey="name" />}
        </div>
        <div style={{ background:C.gradCard, border:`1px solid ${C.border}`, borderRadius:14, padding:"14px 16px 8px" }}>
          <div style={{ fontWeight:700, fontSize:13, marginBottom:12 }}>Expenses Over Time</div>
          <SmartChart data={expByDateData} bars={["Expenses (RWF)"]} colors={[C.warning]} height={180} />
        </div>
        <div style={{ background:C.gradCard, border:`1px solid ${C.border}`, borderRadius:14, padding:"14px 16px" }}>
          <div style={{ fontWeight:700, fontSize:12, marginBottom:10 }}>Category Breakdown</div>
          {expByCat.map((ec, i) =>
            <div key={ec.name} style={{ display:"flex", justifyContent:"space-between", alignItems:"center",
              padding:"5px 0", borderBottom:`1px solid ${C.border}15` }}>
              <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                <div style={{ width:8, height:8, borderRadius:"50%", background:PIE_COLORS[i % PIE_COLORS.length], flexShrink:0 }} />
                <span style={{ fontSize:12, color:C.textMuted }}>{ec.name}</span>
              </div>
              <span style={{ fontSize:12, fontWeight:700, color:C.warning }}>{fmtRWF(ec.value)}</span>
            </div>)}
        </div>
      </div>

      <div style={{ background:C.gradCard, border:`1px solid ${C.border}`, borderRadius:14, overflow:"hidden" }}>
        <div style={{ padding:"11px 16px", borderBottom:`1px solid ${C.border}`, fontWeight:700, fontSize:13,
          display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <span>Expense Ledger ({fExpenses.length})</span>
          <button onClick={() => exportExcel("expenses")} style={{ ...BtnS(C.success, true), fontSize:10, padding:"4px 10px" }}>⬇ CSV</button>
        </div>
        <ExpTable rows={fExpenses} full showStation cwsList={cwsList} />
      </div>
    </div>}

    {/* ══ CASH & BANK REPORT ═════════════════════════════════════════ */}
    {reportType === "cashbook" && <div>
      <FilterCard>
        <FBadge label="Cash Type" value={cashFilters.type} onChange={v => setCashFilters(p=>({...p,type:v}))}
          options={["inflow","outflow"]} />
        <FBadge label="Category" value={cashFilters.category} onChange={v => setCashFilters(p=>({...p,category:v}))}
          options={uniqueCashCats} />
        <FBadge label="Bank Type" value={bankFilters.type} onChange={v => setBankFilters(p=>({...p,type:v}))}
          options={["credit","debit"]} />
        <FSearch placeholder="Search description" value={cashFilters.description}
          onChange={v => setCashFilters(p=>({...p,description:v}))} />
        {(cashFilters.type !== "all" || cashFilters.category !== "all" || bankFilters.type !== "all" || cashFilters.description) &&
          <button onClick={() => { setCashFilters({ type:"all", category:"all", description:"" }); setBankFilters({ type:"all", description:"" }); }}
            style={{ ...BtnS(C.danger, false, true), fontSize:10, padding:"4px 8px" }}>✕</button>}
      </FilterCard>

      <div className="kpi-grid" style={{ marginBottom:14 }}>
        <SC label="Cash Inflows"  value={fmtRWF(fCashbook.filter(c=>c.type==="inflow") .reduce((s,c)=>s+(+c.amount||0),0))} color={C.success} />
        <SC label="Cash Outflows" value={fmtRWF(fCashbook.filter(c=>c.type==="outflow").reduce((s,c)=>s+(+c.amount||0),0))} color={C.danger}  />
        <SC label="Bank Credits"  value={fmtRWF(fBank.filter(b=>b.type==="credit").reduce((s,b)=>s+(+b.amount||0),0))} color={C.info} />
      </div>

      <div style={{ background:C.gradCard, border:`1px solid ${C.border}`, borderRadius:14, padding:"14px 16px 8px", marginBottom:14 }}>
        <div style={{ fontWeight:700, fontSize:13, marginBottom:12 }}>Cash Flow Over Time</div>
        <SmartChart data={cashFlowData} bars={["Inflows","Outflows"]} colors={[C.success, C.danger]} height={190} />
      </div>

      <div style={{ background:C.gradCard, border:`1px solid ${C.border}`, borderRadius:14, overflow:"hidden", marginBottom:14 }}>
        <div style={{ padding:"11px 16px", borderBottom:`1px solid ${C.border}`, fontWeight:700, fontSize:13,
          display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <span>Cash Book ({fCashbook.length})</span>
          <button onClick={() => exportExcel("cashbook")} style={{ ...BtnS(C.success, true), fontSize:10, padding:"4px 10px" }}>⬇ CSV</button>
        </div>
        <CashTable rows={fCashbook} />
      </div>

      <div style={{ background:C.gradCard, border:`1px solid ${C.border}`, borderRadius:14, overflow:"hidden" }}>
        <div style={{ padding:"11px 16px", borderBottom:`1px solid ${C.border}`, fontWeight:700, fontSize:13 }}>
          Bank Transactions ({fBank.length})
        </div>
        <BankTable rows={fBank} />
      </div>
    </div>}

    {/* ══ STATION SUMMARY ════════════════════════════════════════════ */}
    {reportType === "station_summary" && <div>
      <div style={{ background:C.gradCard, border:`1px solid ${C.border}`, borderRadius:14, padding:"14px 16px 8px", marginBottom:14 }}>
        <div style={{ fontWeight:700, fontSize:13, marginBottom:12 }}>Station Comparison</div>
        <SmartChart data={cherryByStation} bars={["Cherry kg","Payments (k RWF)"]} colors={[C.coffee, C.gold]} height={200} labelKey="name" />
      </div>

      <div style={{ background:C.gradCard, border:`1px solid ${C.border}`, borderRadius:14, overflow:"hidden" }}>
        <div style={{ padding:"11px 16px", borderBottom:`1px solid ${C.border}`, fontWeight:700, fontSize:13,
          display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <span>Station Summary ({stationRows.length} stations)</span>
          <button onClick={() => exportExcel("station_summary")} style={{ ...BtnS(C.success, true), fontSize:10, padding:"4px 10px" }}>⬇ CSV</button>
        </div>
        <div className="tbl-wrap"><table>
          <thead><tr style={{ background:C.bgDeep }}>
            {["Station","Region","Cherry kg","Farmers","Payments","Expenses","Cash Balance","Net"].map(h => <Th key={h}>{h}</Th>)}
          </tr></thead>
          <tbody>{stationRows.map(row => {
            const net = row.cashBal - row.paid - row.exp;
            return <tr key={row.cws.id}>
              <Td style={{ color:C.coffeeLight, fontWeight:600 }}>☕ {row.cws.name}</Td>
              <Td style={{ color:C.textMuted }}>{row.cws.region}</Td>
              <Td style={{ fontWeight:700, color:C.coffee }}>{fmtKg(row.kg)}</Td>
              <Td style={{ color:C.info }}>{row.farmers}</Td>
              <Td style={{ color:C.success }}>{fmtRWF(row.paid)}</Td>
              <Td style={{ color:C.warning }}>{fmtRWF(row.exp)}</Td>
              <Td style={{ color:C.gold }}>{fmtRWF(row.cashBal)}</Td>
              <Td style={{ color:net >= 0 ? C.success : C.danger, fontWeight:700 }}>{fmtRWF(net)}</Td>
            </tr>;
          })}</tbody>
        </table></div>
      </div>
    </div>}

    {/* ══ FUND REQUESTS ══════════════════════════════════════════════ */}
    {reportType === "fund_requests" && <div>
      <FilterCard>
        <FBadge label="Status" value={frFilters.status} onChange={v => setFrFilters(p=>({...p,status:v}))}
          options={["pending","pending_verification","pending_approval","approved","rejected"]} />
        {frFilters.status !== "all" &&
          <button onClick={() => setFrFilters({ status:"all" })}
            style={{ ...BtnS(C.danger, false, true), fontSize:10, padding:"4px 8px" }}>✕</button>}
      </FilterCard>

      <div className="kpi-grid" style={{ marginBottom:14 }}>
        <SC label="Total Requested" value={fmtRWF(fFR.reduce((s,f)=>s+(+f.amount||0),0))} color={C.gold} />
        <SC label="Approved"        value={fmtRWF(fFR.filter(f=>f.status==="approved").reduce((s,f)=>s+(+f.amount||0),0))} color={C.success} />
        <SC label="Pending"         value={fFR.filter(f=>f.status?.includes("pending")).length + " requests"} color={C.warning} />
      </div>

      <div style={{ background:C.gradCard, border:`1px solid ${C.border}`, borderRadius:14, overflow:"hidden" }}>
        <div style={{ padding:"11px 16px", borderBottom:`1px solid ${C.border}`, fontWeight:700, fontSize:13,
          display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <span>Fund Requests ({fFR.length})</span>
          <button onClick={() => exportExcel("fund_requests")} style={{ ...BtnS(C.success, true), fontSize:10, padding:"4px 10px" }}>⬇ CSV</button>
        </div>
        <FundTable rows={fFR} users={users} cwsList={cwsList} />
      </div>
    </div>}

    {/* ══ STOCK REPORT ═══════════════════════════════════════════════ */}
    {reportType === "stock" && <div>
      <FilterCard>
        <FBadge label="Type" value={stockFilters.type} onChange={v => setStockFilters(p=>({...p,type:v}))}
          options={[...new Set(stock.map(s => s.type).filter(Boolean))]} />
        {stockFilters.type !== "all" &&
          <button onClick={() => setStockFilters({ type:"all" })}
            style={{ ...BtnS(C.danger, false, true), fontSize:10, padding:"4px 8px" }}>✕</button>}
      </FilterCard>

      <div className="kpi-grid" style={{ marginBottom:14 }}>
        <SC label="Stock Items"  value={fStock.length} color={C.gold} />
        <SC label="Total Value"  value={fmtRWF(totalStock)} color={C.success} />
      </div>

      <div style={{ background:C.gradCard, border:`1px solid ${C.border}`, borderRadius:14, overflow:"hidden" }}>
        <div style={{ padding:"11px 16px", borderBottom:`1px solid ${C.border}`, fontWeight:700, fontSize:13,
          display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <span>Stock Records ({fStock.length})</span>
          <button onClick={() => exportExcel("stock")} style={{ ...BtnS(C.success, true), fontSize:10, padding:"4px 10px" }}>⬇ CSV</button>
        </div>
        <div className="tbl-wrap"><table>
          <thead><tr style={{ background:C.bgDeep }}>
            {["Date","Station","Type","Qty","Unit","Unit Price","Total Value","Notes"].map(h => <Th key={h}>{h}</Th>)}
          </tr></thead>
          <tbody>{fStock.map(s => {
            const cws = cwsList.find(x => x.id === s.cwsId);
            return <tr key={s.id}>
              <Td>{s.date}</Td>
              <Td style={{ color:C.textMuted }}>{cws?.name||s.cwsId}</Td>
              <Td><SB status={s.type} /></Td>
              <Td style={{ fontWeight:700 }}>{s.quantity}</Td>
              <Td style={{ color:C.textMuted }}>{s.unit}</Td>
              <Td>{fmtRWF(s.unitPrice)}</Td>
              <Td style={{ color:C.gold, fontWeight:700 }}>{fmtRWF(s.totalValue)}</Td>
              <Td style={{ color:C.textMuted, fontSize:11 }}>{s.notes||"—"}</Td>
            </tr>;
          })}</tbody>
        </table></div>
      </div>
    </div>}

    {/* ══ DEBTS REPORT ═══════════════════════════════════════════════ */}
    {reportType === "debts" && <div>
      <FilterCard>
        <FBadge label="Status" value={debtFilters.status} onChange={v => setDebtFilters(p=>({...p,status:v}))}
          options={["outstanding","partial","paid"]} />
        <FBadge label="Farmer" value={debtFilters.farmer} onChange={v => setDebtFilters(p=>({...p,farmer:v}))}
          options={farmerOptions} />
        {(debtFilters.status !== "all" || debtFilters.farmer !== "all") &&
          <button onClick={() => setDebtFilters({ status:"all", farmer:"all" })}
            style={{ ...BtnS(C.danger, false, true), fontSize:10, padding:"4px 8px" }}>✕</button>}
      </FilterCard>

      <div className="kpi-grid" style={{ marginBottom:14 }}>
        <SC label="Total Debts"       value={fStock.length ? fDebts.length : fDebts.length} color={C.danger} />
        <SC label="Outstanding Balance" value={fmtRWF(totalDebts)} color={C.warning} />
        <SC label="Paid Off"          value={fDebts.filter(d=>d.status==="paid").length + " debts"} color={C.success} />
      </div>

      <div style={{ background:C.gradCard, border:`1px solid ${C.border}`, borderRadius:14, overflow:"hidden" }}>
        <div style={{ padding:"11px 16px", borderBottom:`1px solid ${C.border}`, fontWeight:700, fontSize:13,
          display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <span>Debt Records ({fDebts.length})</span>
          <button onClick={() => exportExcel("debts")} style={{ ...BtnS(C.success, true), fontSize:10, padding:"4px 10px" }}>⬇ CSV</button>
        </div>
        <div className="tbl-wrap"><table>
          <thead><tr style={{ background:C.bgDeep }}>
            {["Farmer","Station","Type","Amount","Balance","Status"].map(h => <Th key={h}>{h}</Th>)}
          </tr></thead>
          <tbody>{fDebts.map(d => {
            const cws = cwsList.find(x => x.id === d.cwsId);
            const f   = farmers2.find(x => x.id === d.farmerId);
            return <tr key={d.id}>
              <Td style={{ fontWeight:600 }}>{f?.name||d.farmerId}</Td>
              <Td style={{ color:C.textMuted }}>{cws?.name||d.cwsId}</Td>
              <Td style={{ color:C.textMuted }}>{d.type}</Td>
              <Td>{fmtRWF(d.amount)}</Td>
              <Td style={{ color:C.danger, fontWeight:700 }}>{fmtRWF(d.balance)}</Td>
              <Td><SB status={d.status} /></Td>
            </tr>;
          })}</tbody>
        </table></div>
      </div>
    </div>}
  </div>;
}


function MachineryPage() {
  const { currentUser: u, machines, setMachines, tasks, setTasks, machTx, setMachTx, driverLogs, leaves, setLeaves, users, setUsers, assistants, setAssistants, online, pending, setPending, addNote } = useApp();
  const [tab, setTab] = useState("fleet");
  const [showAddTask, setShowAddTask] = useState(null);
  const [showAddMachine, setShowAddMachine] = useState(false);
  const [showAddDriver, setShowAddDriver] = useState(false);
  const [showAddTx, setShowAddTx] = useState(false);
  const [taskForm, setTaskForm] = useState({ customer: "", province: "", district: "", sector: "", cell: "", village: "", startDate: today(), endDate: "", hourlyRate: "", notes: "", machineId: "" });
  const [machForm, setMachForm] = useState({ name: "", type: "", plate: "", driverId: "" });
  const [drvForm, setDrvForm] = useState({ name: "", email: "", password: "", machineId: "" });
  const [txForm, setTxForm] = useState({ date: today(), machineId: "", type: "income", category: "Rental Income", amount: "", desc: "" });
  const canManage = ["sudo", "md", "admin", "hq_finance", "hq_ops"].includes(u.role);
  const PROVINCES = ["Kigali", "Northern Province", "Southern Province", "Eastern Province", "Western Province"];
  const TX_CATS = { income: ["Rental Income", "Operator Fee", "Transport Fee"], expense: ["Maintenance", "Fuel", "Insurance", "Spare Parts", "Labor"] };
  return <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
        <div><div style={{ fontFamily: "'Inter',sans-serif", fontSize: 22, letterSpacing: '-0.4px', fontWeight: 700, color: C.text }}>Bender Machine</div><div style={{ fontSize: 13, color: C.textMuted }}>Fleet · Tasks · Drivers</div></div>
        {canManage && <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => setShowAddDriver(true)} style={{ ...BtnS(C.machinery, true), fontSize: 11, padding: "7px 13px" }}>+ Driver</button>
          <button onClick={() => setShowAddMachine(true)} style={{ ...BtnS(C.machinery), fontSize: 11, padding: "7px 13px" }}>+ Machine</button>
        </div>}
      </div>
      <Tabs tabs={["fleet", "tasks", "transactions", "driver_logs", "leaves"]} labels={["Fleet", "Tasks", "Transactions", "Driver Logs", "Leave Requests"]} active={tab} onChange={setTab} color={C.machinery} />
      {tab === "fleet" && <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 14 }}>
          {machines.map((m, i) => {
    const driver = users.find((x) => x.id === m.driverId);
    const asst = assistants.find((a) => a.machineId === m.id);
    const activeTask = tasks.find((t) => t.machineId === m.id && t.status === "active");
    return <div key={m.id} style={{ background: `linear-gradient(145deg,${C.machineryBg},${C.bgCard})`, border: `1px solid ${C.machinery}35`, borderRadius: 13, overflow: "hidden", animation: `fadeUp .3s ease ${i * 0.08}s both` }}>
              {m.image
                ? <div style={{ height: 80, position: "relative" }}>
                    <img src={m.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,.6))" }} />
                  </div>
                : null}
              <div style={{ padding: "14px 16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                <div><div style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 700, color: C.machineryLight }}>{m.name}</div><div style={{ fontSize: 11, color: C.textMuted }}>{m.type} · {m.plate}</div></div>
                <SPill status={m.status} />
              </div>
              <div style={{ fontSize: 12, color: C.textMuted, marginBottom: 8 }}>🧑‍💼 <span style={{ color: C.text }}>{driver?.name || "No driver"}</span><br />🔧 <span style={{ color: C.text }}>{asst?.name || "No assistant"}</span></div>
              {activeTask && <div style={{ padding: "8px 10px", background: `${C.machinery}10`, borderRadius: 7, fontSize: 11, marginBottom: 8 }}><div style={{ color: C.machineryLight, fontWeight: 700 }}>{activeTask.customer}</div><div style={{ color: C.textMuted }}>{activeTask.district}, {activeTask.province}</div><div style={{ color: C.gold }}>{fmtRWF(activeTask.hourlyRate)}/hr</div></div>}
              {canManage && m.status === "available" && <button onClick={() => setShowAddTask(m.id)} style={{ ...BtnS(C.machinery, true), width: "100%", justifyContent: "center", fontSize: 11, padding: "5px", marginTop: 8 }}>+ Assign Task</button>}
              </div>{/* end padding div */}
            </div>;
  })}
        </div>}
      {tab === "tasks" && <div style={{ background: C.gradCard, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
          {tasks.length === 0 ? <ES text="No tasks assigned" /> : <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead><tr style={{ background: C.surface }}>{["Machine", "Customer", "Location", "Start", "End", "Rate/hr", "Hours", "Status"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
              <tbody>{tasks.map((t) => {
    const m = machines.find((x) => x.id === t.machineId);
    return <tr key={t.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                <Td style={{ color: C.machineryLight, fontWeight: 600 }}>{m?.name}</Td><Td>{t.customer}</Td><Td style={{ color: C.textMuted }}>{t.district}, {t.province}</Td>
                <Td style={{ color: C.textMuted }}>{t.startDate}</Td><Td style={{ color: C.textMuted }}>{t.endDate}</Td>
                <Td style={{ color: C.gold, fontWeight: 700 }}>{fmtRWF(t.hourlyRate)}</Td>
                <Td style={{ color: C.info }}>{t.totalHours}h</Td><Td><SB status={t.status} /></Td>
              </tr>;
  })}</tbody>
            </table></div>}
        </div>}
      {tab === "transactions" && <div>
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
            {canManage && <button onClick={() => setShowAddTx(true)} style={{ ...BtnS(C.machinery), fontSize: 11, padding: "7px 13px" }}>+ Transaction</button>}
          </div>
          <div style={{ background: C.gradCard, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
            <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead><tr style={{ background: C.surface }}>{["Date", "Machine", "Category", "Type", "Amount", "Description", "Status"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
              <tbody>{machTx.map((t) => {
    const m = machines.find((x) => x.id === t.machineId);
    return <tr key={t.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                <Td style={{ color: C.textMuted }}>{t.date}</Td><Td style={{ color: C.machineryLight, fontWeight: 600 }}>{m?.name}</Td><Td>{t.category}</Td>
                <Td style={{ color: t.type === "income" ? C.success : C.danger, fontWeight: 600 }}>{t.type}</Td>
                <Td style={{ fontWeight: 700, color: t.type === "income" ? C.success : C.danger }}>{fmtRWF(t.amount)}</Td>
                <Td style={{ color: C.textMuted }}>{t.desc}</Td><Td><SB status={t.status} /></Td>
              </tr>;
  })}</tbody>
            </table></div>
          </div>
        </div>}
      {tab === "driver_logs" && <div style={{ background: C.gradCard, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
          {driverLogs.length === 0 ? <ES text="No driver logs" /> : <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead><tr style={{ background: C.surface }}>{["Date", "Driver", "Machine", "Hours", "Fuel (L)", "Location", "Condition", "Status"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
              <tbody>{driverLogs.map((l) => {
    const drv = users.find((x) => x.id === l.driverId);
    const m = machines.find((x) => x.id === l.machineId);
    return <tr key={l.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                <Td style={{ color: C.textMuted }}>{l.date}</Td><Td style={{ fontWeight: 600 }}>{drv?.name}</Td><Td style={{ color: C.machineryLight }}>{m?.name}</Td>
                <Td style={{ color: C.info, fontWeight: 700 }}>{l.hours}h</Td><Td>{l.fuelReceived}L</Td>
                <Td style={{ color: C.textMuted }}>{l.taskLocation}</Td><Td><CB cond={l.condition} /></Td><Td><SB status={l.status} /></Td>
              </tr>;
  })}</tbody>
            </table></div>}
        </div>}
      {tab === "leaves" && <div style={{ background: C.gradCard, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
          {leaves.length === 0 ? <ES text="No leave requests" /> : <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead><tr style={{ background: C.surface }}>{["Date", "Driver", "Type", "Reason", "Status", "Action"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
              <tbody>{leaves.map((lv) => {
    const drv = users.find((x) => x.id === lv.driverId);
    return <tr key={lv.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                <Td style={{ color: C.textMuted }}>{lv.date}</Td><Td style={{ fontWeight: 600 }}>{drv?.name}</Td><Td style={{ color: C.textMuted }}>{lv.type.replace(/_/g, " ")}</Td>
                <Td style={{ color: C.textMuted }}>{lv.reason}</Td><Td><SB status={lv.status} /></Td>
                <Td>{lv.status === "pending" && canManage && <div style={{ display: "flex", gap: 6 }}>
                  <button onClick={() => setLeaves((p) => p.map((x) => x.id === lv.id ? { ...x, status: "approved" } : x))} style={{ ...BtnS(C.success), fontSize: 10, padding: "3px 8px" }}>✓</button>
                  <button onClick={() => setLeaves((p) => p.map((x) => x.id === lv.id ? { ...x, status: "rejected" } : x))} style={{ ...BtnS(C.danger), fontSize: 10, padding: "3px 8px" }}>✕</button>
                </div>}</Td>
              </tr>;
  })}</tbody>
            </table></div>}
        </div>}
      {showAddTask && <Modal title="Assign Task to Machine" onClose={() => setShowAddTask(null)} wide><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}><FI label="Customer" value={taskForm.customer} onChange={(v) => setTaskForm((p) => ({ ...p, customer: v }))} placeholder="Organisation name" /><div><FL>Province</FL><select value={taskForm.province} onChange={(e) => setTaskForm((p) => ({ ...p, province: e.target.value }))} style={selS()}>{PROVINCES.map((pv) => <option key={pv}>{pv}</option>)}</select></div><FI label="District" value={taskForm.district} onChange={(v) => setTaskForm((p) => ({ ...p, district: v }))} placeholder="District" /><FI label="Sector" value={taskForm.sector} onChange={(v) => setTaskForm((p) => ({ ...p, sector: v }))} placeholder="Sector" /><FI label="Start Date" type="date" value={taskForm.startDate} onChange={(v) => setTaskForm((p) => ({ ...p, startDate: v }))} /><FI label="End Date" type="date" value={taskForm.endDate} onChange={(v) => setTaskForm((p) => ({ ...p, endDate: v }))} /><FI label="Hourly Rate (RWF)" type="number" value={taskForm.hourlyRate} onChange={(v) => setTaskForm((p) => ({ ...p, hourlyRate: v }))} placeholder="45000" /><FI label="Notes" value={taskForm.notes} onChange={(v) => setTaskForm((p) => ({ ...p, notes: v }))} placeholder="Optional" /></div><MF onCancel={() => setShowAddTask(null)} onSave={() => {
    if (!taskForm.customer) return;
    setTasks((p) => [...p, { ...taskForm, id: uid(), machineId: showAddTask, status: "active", totalHours: 0, hourlyRate: +taskForm.hourlyRate }]);
    setMachines((p) => p.map((m) => m.id === showAddTask ? { ...m, status: "on_task" } : m));
    setShowAddTask(null);
    addNote("Task assigned", "success");
  }} label="Assign Task" color={C.machinery} /></Modal>}
      {showAddMachine && <Modal title="Add Machine" onClose={() => setShowAddMachine(false)}><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}><FI label="Machine Name" value={machForm.name} onChange={(v) => setMachForm((p) => ({ ...p, name: v }))} placeholder="e.g. CAT 320" /><FI label="Type" value={machForm.type} onChange={(v) => setMachForm((p) => ({ ...p, type: v }))} placeholder="Excavator" /><FI label="Plate Number" value={machForm.plate} onChange={(v) => setMachForm((p) => ({ ...p, plate: v }))} placeholder="RAC 000X" /><div><FL>Assign Driver</FL><select value={machForm.driverId} onChange={(e) => setMachForm((p) => ({ ...p, driverId: e.target.value }))} style={selS()}><option value="">— None —</option>{users.filter((x) => x.role === "driver").map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}</select></div><div style={{ gridColumn: "1/-1" }}><ImagePicker label="Machine Photo" value={machForm.image||""} onChange={(v) => setMachForm((p) => ({ ...p, image: v }))} height={90} /></div></div><MF onCancel={() => setShowAddMachine(false)} onSave={() => {
    if (!machForm.name) return;
    setMachines((p) => [...p, { ...machForm, id: uid(), status: "available" }]);
    setShowAddMachine(false);
  }} label="Add Machine" color={C.machinery} /></Modal>}
      {showAddDriver && <Modal title="Add Driver" onClose={() => setShowAddDriver(false)}><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}><FI label="Full Name" value={drvForm.name} onChange={(v) => setDrvForm((p) => ({ ...p, name: v }))} placeholder="Driver's full name" /><FI label="Email" type="email" value={drvForm.email} onChange={(v) => setDrvForm((p) => ({ ...p, email: v }))} placeholder="driver@bender.rw" /><FI label="Password" type="password" value={drvForm.password} onChange={(v) => setDrvForm((p) => ({ ...p, password: v }))} placeholder="••••••" /><div><FL>Assign Machine</FL><select value={drvForm.machineId} onChange={(e) => setDrvForm((p) => ({ ...p, machineId: e.target.value }))} style={selS()}><option value="">— None —</option>{machines.map((m) => <option key={m.id} value={m.id}>{m.name}</option>)}</select></div></div><MF onCancel={() => setShowAddDriver(false)} onSave={() => {
    if (!drvForm.name || !drvForm.email) return;
    setUsers((p) => [...p, { ...drvForm, id: uid(), role: "driver", cwsAccess: [], machineId: drvForm.machineId || null, avatar: drvForm.name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase(), createdAt: today(), active: true }]);
    setShowAddDriver(false);
    addNote(`Driver ${drvForm.name} created`, "success");
  }} label="Create Driver" color={C.machinery} /></Modal>}
      {showAddTx && <Modal title="Add Machine Transaction" onClose={() => setShowAddTx(false)}><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}><FI label="Date" type="date" value={txForm.date} onChange={(v) => setTxForm((p) => ({ ...p, date: v }))} /><div><FL>Machine</FL><select value={txForm.machineId} onChange={(e) => setTxForm((p) => ({ ...p, machineId: e.target.value }))} style={selS()}><option value="">— Select —</option>{machines.map((m) => <option key={m.id} value={m.id}>{m.name}</option>)}</select></div><div><FL>Type</FL><select value={txForm.type} onChange={(e) => setTxForm((p) => ({ ...p, type: e.target.value, category: TX_CATS[e.target.value][0] }))} style={selS()}><option value="income">Income</option><option value="expense">Expense</option></select></div><div><FL>Category</FL><select value={txForm.category} onChange={(e) => setTxForm((p) => ({ ...p, category: e.target.value }))} style={selS()}>{(TX_CATS[txForm.type] || []).map((c) => <option key={c}>{c}</option>)}</select></div><FI label="Amount (RWF)" type="number" value={txForm.amount} onChange={(v) => setTxForm((p) => ({ ...p, amount: v }))} placeholder="0" /><FI label="Description" value={txForm.desc} onChange={(v) => setTxForm((p) => ({ ...p, desc: v }))} placeholder="Description..." /></div><MF onCancel={() => setShowAddTx(false)} onSave={() => {
    if (!txForm.amount || !txForm.machineId) return;
    setMachTx((p) => [{ ...txForm, id: uid(), amount: +txForm.amount, status: online ? "synced" : "offline" }, ...p]);
    setShowAddTx(false);
  }} label="Save Transaction" color={C.machinery} /></Modal>}
    </div>;
}
function ConstructionPage() {
  return <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 300, gap: 14 }}>
      <div style={{ fontSize: 44 }}>🏛️</div>
      <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 22, letterSpacing: '-0.4px', fontWeight: 700, color: C.constructionLight }}>Bender Construction</div>
      <div style={{ fontSize: 13, color: C.textMuted, textAlign: "center", maxWidth: 420 }}>Construction project management module is coming soon. It will include project tracking, material costs, contractor management, and site reporting.</div>
      <span style={{ padding: "5px 14px", borderRadius: 20, background: `${C.construction}18`, border: `1px solid ${C.construction}30`, color: C.constructionLight, fontSize: 12 }}>Module in Development</span>
    </div>;
}
function DriverHome() {
  const { currentUser: u, machines, tasks, driverLogs, setDriverLogs, leaves, setLeaves } = useApp();
  const machine = machines.find((m) => m.id === u.machineId);
  const myTask = tasks.find((t) => t.machineId === u.machineId && t.status === "active");
  const myLogs = driverLogs.filter((l) => l.driverId === u.id).slice(0, 5);
  const [showLog, setShowLog] = useState(false);
  const [showLeave, setShowLeave] = useState(false);
  const [log, setLog] = useState({ date: today(), hours: "", fuelReceived: "", taskLocation: myTask ? `${myTask.district}, ${myTask.sector}` : "", condition: "good", comments: "" });
  const [leave, setLeave] = useState({ type: "off_day", date: "", reason: "" });
  return <div>
      <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 22, letterSpacing: '-0.4px', fontWeight: 700, color: C.text, marginBottom: 18 }}>My Dashboard — <span style={{ color: C.machineryLight }}>{machine?.name || "No machine assigned"}</span></div>
      {machine && <div style={{ background: C.gradCard, border: `1px solid ${C.machinery}28`, borderRadius: 13, padding: 18, marginBottom: 16, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 14 }}>
        <div><div style={{ fontSize: 10, color: C.textDim, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 5 }}>My Machine</div><div style={{ fontFamily: "'Inter',sans-serif", fontSize: 17, letterSpacing: '-0.2px', fontWeight: 700, color: C.machineryLight }}>{machine.name}</div><div style={{ fontSize: 11, color: C.textMuted }}>{machine.type} · {machine.plate}</div><SPill status={machine.status} /></div>
        {myTask && <div><div style={{ fontSize: 10, color: C.textDim, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 5 }}>Active Task</div><div style={{ fontWeight: 700, fontSize: 13 }}>{myTask.customer}</div><div style={{ fontSize: 11, color: C.textMuted }}>{myTask.district}, {myTask.province}</div><div style={{ fontSize: 12, color: C.gold, marginTop: 4 }}>{fmtRWF(myTask.hourlyRate)}/hr</div></div>}
      </div>}
      <div style={{ display: "flex", gap: 10, marginBottom: 18 }}>
        <button onClick={() => setShowLog(true)} style={{ ...BtnS(C.machinery), padding: "8px 16px", fontSize: 12 }}>📋 Submit Daily Log</button>
        <button onClick={() => setShowLeave(true)} style={{ ...BtnS(C.machinery, true), padding: "8px 16px", fontSize: 12 }}>🗓️ Request Leave</button>
      </div>
      <div style={{ background: C.gradCard, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
        <div style={{ padding: "12px 18px", borderBottom: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13 }}>My Recent Logs</div>
        {myLogs.length === 0 ? <ES text="No logs submitted yet" /> : <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead><tr style={{ background: C.surface }}>{["Date", "Hours", "Fuel (L)", "Location", "Condition", "Status"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
            <tbody>{myLogs.map((l) => <tr key={l.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                <Td style={{ color: C.textMuted }}>{l.date}</Td><Td style={{ color: C.info, fontWeight: 700 }}>{l.hours}h</Td>
                <Td>{l.fuelReceived}L</Td><Td style={{ color: C.textMuted }}>{l.taskLocation}</Td>
                <Td><CB cond={l.condition} /></Td><Td><SB status={l.status} /></Td>
              </tr>)}</tbody>
          </table></div>}
      </div>
      {showLog && <Modal title="Submit Daily Log" onClose={() => setShowLog(false)}><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}><FI label="Date" type="date" value={log.date} onChange={(v) => setLog((p) => ({ ...p, date: v }))} /><FI label="Hours Worked" type="number" value={log.hours} onChange={(v) => setLog((p) => ({ ...p, hours: v }))} placeholder="8" /><FI label="Fuel Received (L)" type="number" value={log.fuelReceived} onChange={(v) => setLog((p) => ({ ...p, fuelReceived: v }))} placeholder="0" /><FI label="Task Location" value={log.taskLocation} onChange={(v) => setLog((p) => ({ ...p, taskLocation: v }))} placeholder="District, Sector" /><div><FL>Machine Condition</FL><select value={log.condition} onChange={(e) => setLog((p) => ({ ...p, condition: e.target.value }))} style={selS()}>{["good", "fair", "needs_repair", "critical"].map((c) => <option key={c} value={c}>{c.replace(/_/g, " ")}</option>)}</select></div><FI label="Comments" value={log.comments} onChange={(v) => setLog((p) => ({ ...p, comments: v }))} placeholder="Notes..." /></div><MF onCancel={() => setShowLog(false)} onSave={() => {
    if (!log.hours) return;
    setDriverLogs((p) => [{ ...log, id: uid(), driverId: u.id, machineId: u.machineId, hours: +log.hours, fuelReceived: +log.fuelReceived, status: "submitted" }, ...p]);
    setShowLog(false);
  }} label="Submit Log" color={C.machinery} /></Modal>}
      {showLeave && <Modal title="Request Leave / Off Day" onClose={() => setShowLeave(false)}><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}><div><FL>Leave Type</FL><select value={leave.type} onChange={(e) => setLeave((p) => ({ ...p, type: e.target.value }))} style={selS()}><option value="off_day">Off Day</option><option value="sick_leave">Sick Leave</option><option value="annual_leave">Annual Leave</option></select></div><FI label="Date" type="date" value={leave.date} onChange={(v) => setLeave((p) => ({ ...p, date: v }))} /><div style={{ gridColumn: "1/-1" }}><FI label="Reason" value={leave.reason} onChange={(v) => setLeave((p) => ({ ...p, reason: v }))} placeholder="Reason for leave..." /></div></div><MF onCancel={() => setShowLeave(false)} onSave={() => {
    if (!leave.date) return;
    setLeaves((p) => [...p, { ...leave, id: uid(), driverId: u.id, status: "pending" }]);
    setShowLeave(false);
  }} label="Submit Request" color={C.machinery} /></Modal>}
    </div>;
}
function UsersPage() {
  const { users, setUsers, currentUser: cu, cwsList, addNote } = useApp();
  const canAccess = ["sudo", "md"].includes(cu.role);
  if (!canAccess) return <div style={{ padding: "60px 20px", textAlign: "center" }}>
    <div style={{ fontSize: 40, marginBottom: 16 }}>🔒</div>
    <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 20, letterSpacing: '-0.3px', fontWeight: 700, color: C.danger, marginBottom: 8 }}>Access Restricted</div>
    <div style={{ fontSize: 13, color: C.textMuted }}>Only the Managing Director and Super Admin can view user accounts and credentials.</div>
  </div>;
  const [showAdd, setShowAdd] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [tab, setTab] = useState("all");
  const [revealedPw, setRevealedPw] = useState({});
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "cashier", cwsAccess: [], machineId: "" });
  const ROLE_OPTS = cu.role === "sudo" ? Object.keys(ROLES) : Object.keys(ROLES).filter((r) => r !== "sudo");
  const togglePw = (id) => setRevealedPw((p) => ({ ...p, [id]: !p[id] }));
  // Push user change to Supabase via server
  // Uses /api/users/:id (PATCH profiles) for existing users
  // Uses /api/users (POST — creates Supabase Auth + profile) for new users
  const syncUserToServer = async (method, userData) => {
    try {
      const token = localStorage.getItem("bender_token");
      if (!token) {
        // No Supabase token — queue the change for when user logs in via Supabase
        const queue = JSON.parse(localStorage.getItem("user_sync_queue") || "[]");
        queue.push({ method, userData, ts: Date.now() });
        localStorage.setItem("user_sync_queue", JSON.stringify(queue));
        return;
      }

      // For PUT: use supabaseId if available, fall back to email lookup
      if (method === "PUT") {
        // userData.supabaseId is set when user was created via Supabase
        // For seed users, server looks them up by email
        const res = await fetch(`/api/users/${encodeURIComponent(userData.supabaseId || userData.id)}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
          body: JSON.stringify({
            name:       userData.name,
            role:       userData.role,
            cwsAccess:  userData.cwsAccess || [],
            machineId:  userData.machineId || null,
            avatar:     userData.avatar,
            active:     userData.active,
            email:      userData.email,     // server uses this for seed user lookup
            password:   userData.password,  // if changed, server updates Supabase Auth so ALL machines use the new password
          })
        });
        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          console.warn("[Bender] User update failed:", err.error);
        }
      } else {
        // POST — create new user in Supabase Auth + profiles
        const res = await fetch("/api/users", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
          body: JSON.stringify({
            name:       userData.name,
            email:      userData.email,
            password:   userData.password || "changeme123",
            role:       userData.role,
            cwsAccess:  userData.cwsAccess || [],
            machineId:  userData.machineId || null,
            avatar:     userData.avatar,
          })
        });
        if (res.ok) {
          const d = await res.json();
          // Store the Supabase UUID so future PUTs use the right id
          if (d.id) setUsers(p => p.map(u => u.id === userData.id ? { ...u, supabaseId: d.id } : u));
        }
      }
    } catch (e) {
      console.warn("[Bender] syncUserToServer error:", e.message);
    }
  };

  const submitCreate = () => {
    if (!form.name || !form.email) return;
    if (editUser) {
      const updated = {
        ...editUser, ...form,
        avatar:     form.name.split(" ").map(w => w[0]).join("").slice(0,2).toUpperCase(),
        cwsAccess:  form.cwsAccess || [],
        machineId:  form.machineId || null,
      };
      setUsers(p => p.map(u => u.id === editUser.id ? updated : u));
      syncUserToServer("PUT", updated);
      addNote(`User ${form.name} updated`, "success");
    } else {
      if (!form.password) return;
      const created = {
        ...form,
        id:         uid(),
        avatar:     form.name.split(" ").map(w => w[0]).join("").slice(0,2).toUpperCase(),
        createdAt:  today(),
        active:     true,
        cwsAccess:  form.cwsAccess || [],
        machineId:  form.machineId || null,
      };
      setUsers(p => [...p, created]);
      syncUserToServer("POST", created);
      addNote(`User ${form.name} created`, "success");
    }
    setShowAdd(false);
    setEditUser(null);
    setForm({ name: "", email: "", password: "", role: "cashier", cwsAccess: [], machineId: "" });
  };

  const toggleActive = (id) => {
    const user = users.find(u => u.id === id);
    if (!user) return;
    const toggled = { ...user, active: !user.active };
    setUsers(p => p.map(u => u.id === id ? toggled : u));
    syncUserToServer("PUT", toggled);
  };
  const filtered = tab === "all" ? users : tab === "inactive" ? users.filter((x) => !x.active) : users.filter((x) => x.active);
  return <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14, flexWrap: "wrap", gap: 10 }}>
        <div>
          <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 22, letterSpacing: '-0.4px', fontWeight: 700, color: C.text }}>User Management</div>
          <div style={{ fontSize: 13, color: C.textMuted }}>Roles · Access · Credentials</div>
        </div>
        <button onClick={() => setShowAdd(true)} style={{ ...BtnS(C.gold), padding: "8px 16px", fontSize: 12 }}>+ Create User</button>
      </div>
      <div style={{ marginBottom: 14, padding: "9px 14px", background: `${C.purple}0D`, border: `1px solid ${C.purple}28`, borderRadius: 9, display: "flex", alignItems: "center", gap: 10, fontSize: 12, color: C.purpleLight }}>
        <span>🔐</span>
        <span>Credentials are only visible to <b>Super Admin</b> and <b>Managing Director</b>. Passwords are masked by default — click 👁 to reveal individually.</span>
      </div>
      <Tabs tabs={["all", "active", "inactive"]} active={tab} onChange={setTab} />
      <div style={{ background: C.gradCard, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
        <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse", minWidth: 720 }}>
          <thead><tr style={{ background: C.surface }}>{["User", "Role", "Email", "Password", "Station / Machine", "Created", "Status", ""].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
          <tbody>{filtered.map((usr) => <tr key={usr.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
              <Td><div style={{ display: "flex", alignItems: "center", gap: 8 }}><Ava user={usr} size={28} /><div><div style={{ fontWeight: 600, fontSize: 13 }}>{usr.name}</div><div style={{ fontSize: 10, color: C.textDim }}>{usr.id}</div></div></div></Td>
              <Td><RB role={usr.role} sm /></Td>
              <Td style={{ color: C.textMuted, fontSize: 11 }}>{usr.email}</Td>
              <Td>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontFamily: "monospace", fontSize: 12, color: revealedPw[usr.id] ? C.warningLight : C.textDim, background: C.surface, padding: "3px 8px", borderRadius: 5, border: `1px solid ${C.border}`, letterSpacing: revealedPw[usr.id] ? 0 : "2px", minWidth: 80, display: "inline-block" }}>{revealedPw[usr.id] ? (usr.password || "—") : "••••••••"}</span>
                  <button onClick={() => togglePw(usr.id)} title={revealedPw[usr.id] ? "Hide" : "Reveal"} style={{ background: "transparent", border: `1px solid ${C.border}`, borderRadius: 5, cursor: "pointer", color: C.textMuted, fontSize: 12, padding: "3px 7px", lineHeight: 1 }}>{revealedPw[usr.id] ? "🙈" : "👁"}</button>
                </div>
              </Td>
              <Td style={{ color: C.textMuted, fontSize: 11 }}>{(usr.cwsAccess||[]).length > 0 ? cwsList.filter((c) => (usr.cwsAccess||[]).includes(c.id)).map((c) => c.name).join(", ") : usr.machineId || "—"}</Td>
              <Td style={{ color: C.textDim, fontSize: 11 }}>{usr.createdAt}</Td>
              <Td><SB status={usr.active ? "active" : "rejected"} /></Td>
              <Td><div style={{ display: "flex", gap: 5 }}><button onClick={() => { setEditUser(usr); setForm({ name: usr.name, email: usr.email, password: usr.password || "", role: usr.role, cwsAccess: usr.cwsAccess || [], machineId: usr.machineId || "" }); setShowAdd(true); }} style={{ ...BtnS(C.info, true), fontSize: 10, padding: "3px 9px" }}>Edit</button><button onClick={() => toggleActive(usr.id)} style={{ ...BtnS(usr.active ? C.danger : C.success, true), fontSize: 10, padding: "3px 9px" }}>{usr.active ? "Deactivate" : "Activate"}</button></div></Td>
            </tr>)}</tbody>
        </table></div>
      </div>
      {showAdd && <Modal title={editUser ? "Edit User" : "Create New User"} onClose={() => { setShowAdd(false); setEditUser(null); setForm({ name: "", email: "", password: "", role: "cashier", cwsAccess: [], machineId: "" }); }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 11 }}>
            <FI label="Full Name" value={form.name} onChange={(v) => setForm((p) => ({ ...p, name: v }))} placeholder="Full name" />
            <FI label="Email" type="email" value={form.email} onChange={(v) => setForm((p) => ({ ...p, email: v }))} placeholder="user@bender.rw" />
            <FI label="Password" value={form.password} onChange={(v) => setForm((p) => ({ ...p, password: v }))} placeholder="Set a password" />
            <div><FL>Role</FL><select value={form.role} onChange={(e) => setForm((p) => ({ ...p, role: e.target.value }))} style={selS()}>{ROLE_OPTS.map((r) => <option key={r} value={r}>{ROLES[r]?.label || r}</option>)}</select></div>
            {["clerk", "cashier", "station_manager"].includes(form.role) && <div style={{ gridColumn: "1/-1" }}><FL>Assign Station</FL><select value={(form.cwsAccess || [])[0] || ""} onChange={(e) => setForm((p) => ({ ...p, cwsAccess: e.target.value ? [e.target.value] : [] }))} style={selS()}><option value="">— None —</option>{cwsList.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}</select></div>}
          </div>
          <MF onCancel={() => { setShowAdd(false); setEditUser(null); setForm({ name: "", email: "", password: "", role: "cashier", cwsAccess: [], machineId: "" }); }} onSave={submitCreate} label={editUser ? "Save Changes" : "Create User"} color={C.gold} />
        </Modal>}
    </div>;
}
function SystemPage() {
  const { system, setSystem, cwsList, setCwsList, addNote, syncToServer, deleteFromServer } = useApp();
  const [tab, setTab] = useState("branding");
  const [labels, setLabels] = useState({ ...system.labels });
  const [newCWS, setNewCWS] = useState({ name: "", region: "", image: "" });
  return <div>
      <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 22, letterSpacing: '-0.4px', fontWeight: 700, color: C.text, marginBottom: 6 }}>System Configuration</div>
      <div style={{ fontSize: 13, color: C.textMuted, marginBottom: 18 }}>Super Admin settings — rename modules, manage stations, configure branding.</div>
      <Tabs tabs={["branding", "units", "labels", "stations"]} labels={["Branding", "Business Units", "Module Labels", "Washing Stations"]} active={tab} onChange={setTab} />
      {tab === "branding" && <div style={{ maxWidth: 480 }}>
          <FI label="Company Name" value={system.companyName} onChange={(v) => setSystem((p) => ({ ...p, companyName: v }))} />
          <div style={{ marginTop: 11 }}><FI label="Tagline" value={system.tagline} onChange={(v) => setSystem((p) => ({ ...p, tagline: v }))} /></div>
          <div style={{ marginTop: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.7px", marginBottom: 8 }}>Login Page Background Image</div>
            {/* Preview */}
            {system.heroImageUrl && <div style={{ position: "relative", marginBottom: 10, borderRadius: 10, overflow: "hidden", height: 140, border: `1px solid ${C.border}` }}>
              <img src={system.heroImageUrl} alt="Preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <button onClick={() => setSystem(p => ({ ...p, heroImageUrl: "" }))} style={{ position: "absolute", top: 8, right: 8, background: "rgba(0,0,0,.7)", border: "none", borderRadius: 6, color: "#fff", fontSize: 11, padding: "4px 9px", cursor: "pointer", fontWeight: 600 }}>✕ Remove</button>
            </div>}
            {!system.heroImageUrl && <div style={{ height: 100, border: `2px dashed ${C.border}`, borderRadius: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, marginBottom: 10, color: C.textDim, fontSize: 12 }}>
              <span style={{ fontSize: 22, opacity: .4 }}>🖼</span>
              No image set — SVG illustration shown
            </div>}
            {/* File upload */}
            <label style={{ display: "block", marginBottom: 8 }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.7px", marginBottom: 6 }}>Upload from device</div>
              <div style={{ position: "relative" }}>
                <input type="file" accept="image/*" style={{ display: "none" }} id="hero-file-input" onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  if (file.size > 5 * 1024 * 1024) { alert("Image must be under 5 MB"); return; }
                  const reader = new FileReader();
                  reader.onload = (ev) => setSystem(p => ({ ...p, heroImageUrl: ev.target.result }));
                  reader.readAsDataURL(file);
                  e.target.value = "";
                }} />
                <button onClick={() => document.getElementById("hero-file-input").click()} style={{ ...BtnS(C.gold, true), padding: "8px 16px", fontSize: 12, width: "100%", justifyContent: "center" }}>📁 Choose Image File</button>
              </div>
            </label>
            {/* URL fallback */}
            <div style={{ fontSize: 10, fontWeight: 600, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.7px", marginBottom: 6 }}>Or paste an image URL</div>
            <input
              type="url"
              value={system.heroImageUrl?.startsWith("data:") ? "" : (system.heroImageUrl || "")}
              onChange={(e) => setSystem(p => ({ ...p, heroImageUrl: e.target.value }))}
              placeholder="https://example.com/photo.jpg"
              style={{ width: "100%", padding: "10px 13px", background: C.bgDeep, border: `1.5px solid ${C.border}`, borderRadius: 10, color: C.text, fontSize: 13, outline: "none" }}
              onFocus={e => { e.target.style.borderColor = C.gold; e.target.style.boxShadow = `0 0 0 3px ${C.gold}15`; }}
              onBlur={e => { e.target.style.borderColor = C.border; e.target.style.boxShadow = "none"; }}
            />
            <div style={{ fontSize: 11, color: C.textDim, marginTop: 6 }}>Recommended: landscape photo, 1920×1080 or larger.</div>
          </div>
          <button onClick={async () => { await syncToServer("system", system); addNote("Branding saved ✓", "success"); }} style={{ ...BtnS(C.gold), marginTop: 20, padding: "8px 20px", fontSize: 12 }}>💾 Save Branding</button>
        </div>}
      {tab === "units" && <div style={{ maxWidth: 560 }}>
          <div style={{ fontSize: 13, color: C.textMuted, marginBottom: 16 }}>Set a cover image for each business unit card on the dashboard. Recommended: landscape, 1200×600+.</div>
          <div style={{ display: "grid", gap: 20 }}>
            {(system.businessModels || []).map((m) => {
              const colors = {
                coffee:       { color: C.coffee,       light: C.coffeeLight,       bg: C.coffeeBg },
                machinery:    { color: C.machinery,     light: C.machineryLight,    bg: C.machineryBg },
                construction: { color: C.construction,  light: C.constructionLight, bg: C.constructionBg },
              };
              const col = colors[m.id] || { color: C.gold, light: C.goldLight, bg: C.bgDeep };
              return <div key={m.id} style={{ background: C.gradCard, border: `1px solid ${col.color}28`, borderRadius: 14, overflow: "hidden" }}>
                {/* Mini card preview */}
                <div style={{ height: 90, position: "relative", background: col.bg }}>
                  {m.image
                    ? <img src={m.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    : <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, opacity: .15 }}>{m.icon}</div>}
                  <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom, transparent 30%, ${col.bg}DD)` }} />
                  <div style={{ position: "absolute", bottom: 8, left: 14, fontSize: 14, fontWeight: 700, color: col.light }}>{m.icon} {m.label}</div>
                </div>
                {/* Image picker */}
                <div style={{ padding: "14px 16px" }}>
                  <ImagePicker
                    label="Unit Image"
                    value={m.image || ""}
                    onChange={(v) => setSystem(p => ({
                      ...p,
                      businessModels: (p.businessModels || []).map(bm => bm.id === m.id ? { ...bm, image: v } : bm)
                    }))}
                    height={80}
                  />
                </div>
              </div>;
            })}
          </div>
          <button onClick={async () => { await syncToServer("system", system); addNote("Unit images saved ✓", "success"); }} style={{ ...BtnS(C.gold), marginTop: 20, padding: "8px 20px", fontSize: 12 }}>💾 Save Unit Images</button>
        </div>}
      {tab === "labels" && <div style={{ maxWidth: 480 }}>
          <div style={{ display: "grid", gap: 11 }}>
            {Object.entries(labels).map(([k, v]) => <FI key={k} label={k.replace(/_/g, " ")} value={v} onChange={(val) => setLabels((p) => ({ ...p, [k]: val }))} />)}
          </div>
          <button onClick={() => {
    setSystem((p) => ({ ...p, labels }));
    addNote("Labels updated", "success");
  }} style={{ ...BtnS(C.gold), marginTop: 16, padding: "8px 16px", fontSize: 12 }}>Save Labels</button>
        </div>}
      {tab === "stations" && <div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 12, marginBottom: 18 }}>
            {cwsList.map((cws) => <div key={cws.id} style={{ background: C.gradCard, border: `1px solid ${C.coffee}28`, borderRadius: 11, overflow: "hidden" }}>
                {/* Thumbnail strip */}
                <div style={{ height: 70, position: "relative", background: C.bgDeep, cursor: "pointer" }} onClick={() => document.getElementById(`cws-img-${cws.id}`).click()}>
                  {cws.image
                    ? <img src={cws.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    : <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: C.textDim, fontSize: 11 }}>🖼 Add photo</div>}
                  <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.35)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: ".15s" }}
                    onMouseEnter={e => e.currentTarget.style.opacity = 1}
                    onMouseLeave={e => e.currentTarget.style.opacity = 0}>
                    <span style={{ color: "#fff", fontSize: 11, fontWeight: 600, background: "rgba(0,0,0,.5)", padding: "3px 8px", borderRadius: 5 }}>✏ Change</span>
                  </div>
                  <input type="file" id={`cws-img-${cws.id}`} accept="image/*" style={{ display: "none" }} onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    if (file.size > 5 * 1024 * 1024) { alert("Max 5 MB"); return; }
                    const reader = new FileReader();
                    reader.onload = (ev) => { setCwsList(p => p.map(c => c.id === cws.id ? { ...c, image: ev.target.result } : c)); };
                    reader.readAsDataURL(file);
                    e.target.value = "";
                  }} />
                </div>
                <div style={{ padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div><div style={{ fontWeight: 600, color: C.coffeeLight, fontSize: 13 }}>{cws.name}</div><div style={{ fontSize: 11, color: C.textMuted }}>{cws.region}</div></div>
                  <button onClick={() => { deleteFromServer("cws", cws.id); setCwsList((p) => p.filter((c) => c.id !== cws.id)); addNote(`${cws.name} removed`, "warning"); }} style={{ ...BtnS(C.danger, false, true), fontSize: 10, padding: "3px 8px" }}>Remove</button>
                </div>
              </div>)}
          </div>
          <div style={{ background: C.gradCard, border: `1px solid ${C.border}`, borderRadius: 14, padding: "16px 18px", maxWidth: 400 }}>
            <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 12 }}>Add New Station</div>
            <div style={{ display: "grid", gap: 11 }}>
              <FI label="Station Name" value={newCWS.name} onChange={(v) => setNewCWS((p) => ({ ...p, name: v }))} placeholder="e.g. Rwamagana CWS" />
              <FI label="Region" value={newCWS.region} onChange={(v) => setNewCWS((p) => ({ ...p, region: v }))} placeholder="Province / Region" />
              <ImagePicker label="Station Image" value={newCWS.image} onChange={(v) => setNewCWS((p) => ({ ...p, image: v }))} height={100} />
            </div>
            <button onClick={() => {
    if (!newCWS.name) return;
    setCwsList((p) => [...p, { ...newCWS, id: uid() }]);
    setNewCWS({ name: "", region: "", image: "" });
    addNote(`${newCWS.name} added`, "success");
  }} style={{ ...BtnS(C.coffee), marginTop: 12, fontSize: 12, padding: "7px 14px" }}>+ Add Station</button>
          </div>
        </div>}
    </div>;
}

// ════════════════════════════════════════════════════════════════════
// EXCEL IMPORT PAGE
// Uses SheetJS (loaded from CDN) to parse .xlsx/.csv files in the
// browser, fuzzy-matches columns to known fields, previews data,
// then saves matching records directly to Supabase via the app's
// existing setters (mkSet → syncToServer).
// ════════════════════════════════════════════════════════════════════

// Field schemas for every importable table.
// aliases: alternative column headers users might use in their Excel.
// required: if true, a row is skipped when this field is blank.
// type: coercion applied after matching.
const IMPORT_SCHEMAS = {
  farmers: {
    label: "Farmers",
    icon: "👨‍🌾",
    fields: [
      { key: "name",      aliases: ["name","farmer name","full name","nom"],            required: true,  type: "str" },
      { key: "farmerId",  aliases: ["farmer id","code","farmer code","id code","code"], required: false, type: "str" },
      { key: "grp",       aliases: ["grp","group","groupe","cooperative","coop"],        required: false, type: "str" },
      { key: "phone",     aliases: ["phone","tel","telephone","contact","mobile"],      required: false, type: "str" },
    ],
    build: (row, ctx) => ({
      id: uid(), cwsId: ctx.cwsId, balance: 0,
      createdAt: today(), active: true,
      ...row,
    }),
  },
  cherry: {
    label: "Cherry / GNR",
    icon: "🍒",
    fields: [
      { key: "gnrNumber",   aliases: ["gnr","gnr number","gnr no","numero","receipt no"], required: true,  type: "str" },
      { key: "farmerId",    aliases: ["farmer id","farmer code","code"],                  required: false, type: "str" },
      { key: "date",        aliases: ["date","harvest date","reception date"],            required: false, type: "date" },
      { key: "standardKg",  aliases: ["standard kg","std kg","standard","poids std"],    required: true,  type: "num" },
      { key: "flotantKg",   aliases: ["flotant kg","flt kg","flotant","poids flt"],      required: false, type: "num" },
      { key: "rateStandard",aliases: ["rate std","standard rate","taux std","rate"],     required: false, type: "num" },
      { key: "rateFlotant", aliases: ["rate flt","flotant rate","taux flt"],             required: false, type: "num" },
      { key: "notes",       aliases: ["notes","note","remarks","commentaires"],          required: false, type: "str" },
    ],
    build: (row, ctx) => {
      const stdKg  = +(row.standardKg || 0);
      const fltKg  = +(row.flotantKg  || 0);
      const rateS  = +(row.rateStandard || ctx.season?.rateStandard || 155);
      const rateF  = +(row.rateFlotant  || ctx.season?.rateFlotant  || 80);
      return {
        id: uid(), cwsId: ctx.cwsId, status: "pending",
        paymentMethod: null, paidBy: null, paidAt: null,
        byUser: ctx.userId, date: row.date || today(),
        standardKg: stdKg, flotantKg: fltKg,
        totalKg: stdKg + fltKg,
        rateStandard: rateS, rateFlotant: rateF,
        totalPaid: (stdKg * rateS) + (fltKg * rateF),
        gnrNumber: row.gnrNumber, farmerId: row.farmerId || "",
        notes: row.notes || "",
      };
    },
  },
  cashbook: {
    label: "Cash Book",
    icon: "💵",
    fields: [
      { key: "date",        aliases: ["date","transaction date"],                        required: true,  type: "date" },
      { key: "type",        aliases: ["type","flow","inflow outflow"],                  required: true,  type: "str" },
      { key: "category",    aliases: ["category","categorie","type of expense"],        required: false, type: "str" },
      { key: "description", aliases: ["description","details","memo","narration"],      required: false, type: "str" },
      { key: "amount",      aliases: ["amount","montant","rwf","value"],               required: true,  type: "num" },
      { key: "ref",         aliases: ["ref","reference","receipt","voucher"],          required: false, type: "str" },
    ],
    build: (row, ctx) => ({
      id: uid(), cwsId: ctx.cwsId, balance: 0, byUser: ctx.userId,
      type: (row.type||"").toLowerCase().includes("out") ? "outflow" : "inflow",
      ...row, amount: +(row.amount||0),
    }),
  },
  expenses: {
    label: "Expenses",
    icon: "🧾",
    fields: [
      { key: "date",        aliases: ["date"],                                          required: true,  type: "date" },
      { key: "category",    aliases: ["category","categorie","type"],                  required: false, type: "str" },
      { key: "description", aliases: ["description","details","memo"],                 required: false, type: "str" },
      { key: "amount",      aliases: ["amount","montant","rwf"],                      required: true,  type: "num" },
    ],
    build: (row, ctx) => ({
      id: uid(), cwsId: ctx.cwsId, status: "pending", byUser: ctx.userId,
      capitalizable: true, ...row, amount: +(row.amount||0),
    }),
  },
  debts: {
    label: "Debts / Liabilities",
    icon: "📋",
    fields: [
      { key: "date",        aliases: ["date"],                                          required: true,  type: "date" },
      { key: "party",       aliases: ["party","person","name","debtor","creditor"],    required: true,  type: "str" },
      { key: "type",        aliases: ["type","debt type"],                             required: false, type: "str" },
      { key: "description", aliases: ["description","details","memo"],                 required: false, type: "str" },
      { key: "amount",      aliases: ["amount","montant","rwf"],                      required: true,  type: "num" },
    ],
    build: (row, ctx) => ({
      id: uid(), cwsId: ctx.cwsId, status: "outstanding",
      balance: +(row.amount||0),
      type: row.type || "debt_given",
      ...row, amount: +(row.amount||0),
    }),
  },
  machines: {
    label: "Machines",
    icon: "🏗️",
    fields: [
      { key: "name",   aliases: ["name","machine name","machine","equipment"],       required: true,  type: "str" },
      { key: "type",   aliases: ["type","machine type","category"],                  required: false, type: "str" },
      { key: "plate",  aliases: ["plate","plate number","plate no","plaque"],        required: false, type: "str" },
      { key: "notes",  aliases: ["notes","note","remarks"],                          required: false, type: "str" },
    ],
    build: (row) => ({ id: uid(), status: "available", driverId: null, image: "", ...row }),
  },
  contractors: {
    label: "Contractors",
    icon: "👷",
    fields: [
      { key: "name",    aliases: ["name","contractor","company","firm"],               required: true,  type: "str" },
      { key: "contact", aliases: ["contact","phone","tel","email"],                   required: false, type: "str" },
      { key: "type",    aliases: ["type","specialty","category","service"],           required: false, type: "str" },
      { key: "notes",   aliases: ["notes","note","remarks"],                          required: false, type: "str" },
    ],
    build: (row) => ({ id: uid(), active: true, createdAt: today(), ...row }),
  },
  projects: {
    label: "Projects",
    icon: "🏛️",
    fields: [
      { key: "name",       aliases: ["name","project name","project","titre"],        required: true,  type: "str" },
      { key: "startDate",  aliases: ["start date","start","debut"],                  required: false, type: "date" },
      { key: "endDate",    aliases: ["end date","end","fin"],                         required: false, type: "date" },
      { key: "budget",     aliases: ["budget","cost","montant"],                     required: false, type: "num" },
      { key: "status",     aliases: ["status","statut","state"],                     required: false, type: "str" },
      { key: "notes",      aliases: ["notes","description","details"],               required: false, type: "str" },
    ],
    build: (row) => ({
      id: uid(), status: row.status || "planned",
      budget: +(row.budget||0), spent: 0,
      contractorId: null, createdAt: today(), ...row,
    }),
  },
};

// Normalise a header string for fuzzy matching
const normHeader = (s) => (s||"").toLowerCase().replace(/[^a-z0-9]/g, " ").replace(/\s+/g, " ").trim();

// Match Excel columns to schema fields.
// Returns { fieldKey: colIndex } for every field that has a match.
function matchColumns(headers, fields) {
  const norm = headers.map(normHeader);
  const result = {};
  for (const f of fields) {
    const aliases = [f.key, ...f.aliases].map(normHeader);
    const idx = norm.findIndex(h => aliases.some(a => h === a || h.includes(a) || a.includes(h)));
    if (idx >= 0) result[f.key] = idx;
  }
  return result;
}

// Coerce a cell value to the target type
function coerce(val, type) {
  if (val === null || val === undefined || val === "") return "";
  switch (type) {
    case "num":  return isNaN(+val) ? 0 : +val;
    case "date": {
      // SheetJS dates come as JS Date objects or serial numbers
      if (val instanceof Date) return val.toISOString().split("T")[0];
      if (typeof val === "number") {
        // Excel serial date: days since 1899-12-30
        const d = new Date(Math.round((val - 25569) * 86400 * 1000));
        return d.toISOString().split("T")[0];
      }
      const d = new Date(val);
      return isNaN(d) ? String(val) : d.toISOString().split("T")[0];
    }
    default: return String(val).trim();
  }
}

function ImportPage() {
  const { currentUser: u, cwsList, farmers: farmers2, setFarmers, cherry, setCherry,
          cashbook, setCashbook, expenses, setExpenses, debts, setDebts,
          machines, setMachines, contractors, setContractors,
          projects, setProjects, seasons, addNote, syncToServer } = useApp();

  const [step, setStep]         = useState("pick");   // pick | map | preview | done
  const [tableKey, setTableKey] = useState("farmers");
  const [cwsId, setCwsId]       = useState("");
  const [rows, setRows]         = useState([]);        // raw parsed rows from Excel
  const [headers, setHeaders]   = useState([]);
  const [colMap, setColMap]     = useState({});        // { fieldKey: colIndex }
  const [preview, setPreview]   = useState([]);        // built records ready to save
  const [skipped, setSkipped]   = useState([]);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading]   = useState(false);

  const schema  = IMPORT_SCHEMAS[tableKey];
  const activeSeason = seasons.find(s => s.status === "active");
  const accessibleCws = canSeeAllStations(u.role) ? cwsList : cwsList.filter(c => (u.cwsAccess||[]).includes(c.id));

  // ── Step 1: Parse uploaded file ──────────────────────────────────────
  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    setLoading(true);

    // Dynamically load SheetJS from CDN if not already present
    if (!window.XLSX) {
      await new Promise((res, rej) => {
        const s = document.createElement("script");
        s.src = "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js";
        s.onload = res; s.onerror = rej;
        document.head.appendChild(s);
      });
    }

    const buf  = await file.arrayBuffer();
    const wb   = window.XLSX.read(buf, { type: "array", cellDates: true });
    const ws   = wb.Sheets[wb.SheetNames[0]];
    const data = window.XLSX.utils.sheet_to_json(ws, { header: 1, defval: "" });

    if (!data.length) { addNote("File appears to be empty", "danger"); setLoading(false); return; }

    const hdrs = (data[0] || []).map(String);
    const body = data.slice(1).filter(r => r.some(c => c !== "" && c !== null));

    setHeaders(hdrs);
    setRows(body);
    setColMap(matchColumns(hdrs, schema.fields));
    setStep("map");
    setLoading(false);
  };

  // ── Step 2: Build preview from current column mapping ─────────────
  const buildPreview = () => {
    const ctx = { cwsId, userId: u.id, season: activeSeason };
    const good = [], bad = [];

    for (let i = 0; i < rows.length; i++) {
      const raw = {};
      for (const f of schema.fields) {
        if (colMap[f.key] !== undefined) {
          raw[f.key] = coerce(rows[i][colMap[f.key]], f.type);
        }
      }

      // Check required fields
      const missing = schema.fields.filter(f => f.required && !raw[f.key]);
      if (missing.length) {
        bad.push({ row: i + 2, reason: `Missing: ${missing.map(f => f.key).join(", ")}` });
        continue;
      }

      try { good.push(schema.build(raw, ctx)); }
      catch (err) { bad.push({ row: i + 2, reason: err.message }); }
    }

    setPreview(good);
    setSkipped(bad);
    setStep("preview");
  };

  // ── Step 3: Save to database ──────────────────────────────────────
  const SETTERS = {
    farmers: setFarmers, cherry: setCherry, cashbook: setCashbook,
    expenses: setExpenses, debts: setDebts, machines: setMachines,
    contractors: setContractors, projects: setProjects,
  };

  const doImport = async () => {
    if (!preview.length) return;
    setLoading(true);

    // All imported records have fresh uid() ids — no collision possible.
    // Use the normal mkSet setter (delta-aware since last fix) — it will
    // sync only the new records, not the entire table.
    const setter = SETTERS[tableKey];

    // Collect the new records for explicit batched sync to Supabase.
    // We sync explicitly in batches of 100 rather than relying on mkSet
    // so we can track success/failure and show the right message.
    const freshRecords = preview;

    // 1. Merge into local state + localStorage (via mkSet → DB.save)
    setter(prev => {
      const existingIds = new Set((prev||[]).map(r => r.id));
      return [...(prev||[]), ...freshRecords.filter(r => !existingIds.has(r.id))];
    });

    // 2. Push to Supabase in batches of 100
    let syncOk = true;
    const BATCH = 100;
    for (let i = 0; i < freshRecords.length; i += BATCH) {
      const batch = freshRecords.slice(i, i + BATCH);
      try {
        await syncToServer(tableKey, batch);
      } catch (e) {
        syncOk = false;
        console.warn("[Bender] Import batch sync failed:", e.message);
      }
    }

    setLoading(false);
    const status = syncOk ? "success" : "warning";
    const msg = syncOk
      ? `✓ Imported ${preview.length} ${schema.label} record${preview.length !== 1 ? "s" : ""}${skipped.length ? ` (${skipped.length} skipped)` : ""}`
      : `⚠ Imported locally but server sync failed — will retry when online`;
    addNote(msg, status);
    setStep("done");
  };

  // ── Styles ────────────────────────────────────────────────────────
  const card = { background: C.gradCard, border: `1px solid ${C.border}`, borderRadius: 14, padding: "18px 20px", marginBottom: 16 };
  const tag  = (ok) => ({ display: "inline-block", padding: "2px 8px", borderRadius: 12, fontSize: 10, fontWeight: 700,
    background: ok ? `${C.success}20` : `${C.border}40`, color: ok ? C.success : C.textDim });

  return <div style={{ maxWidth: 820 }}>
    <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 22, fontWeight: 700, color: C.text, letterSpacing: "-0.4px", marginBottom: 4 }}>📥 Import Data</div>
    <div style={{ fontSize: 13, color: C.textMuted, marginBottom: 20 }}>Upload an Excel (.xlsx) or CSV file — the system matches columns automatically and only imports fields it recognises.</div>

    {/* ── Step indicator ── */}
    <div style={{ display: "flex", gap: 0, marginBottom: 24, borderRadius: 10, overflow: "hidden", border: `1px solid ${C.border}` }}>
      {["Upload", "Map Columns", "Preview", "Done"].map((s, i) => {
        const stepKeys = ["pick", "map", "preview", "done"];
        const active = stepKeys.indexOf(step) === i;
        const done   = stepKeys.indexOf(step) > i;
        return <div key={s} style={{ flex: 1, padding: "9px 4px", textAlign: "center", fontSize: 11, fontWeight: 600,
          background: active ? C.gold : done ? `${C.success}18` : C.bgDeep,
          color: active ? "#000" : done ? C.success : C.textDim,
          borderRight: i < 3 ? `1px solid ${C.border}` : "none" }}>{done ? "✓ " : ""}{s}</div>;
      })}
    </div>

    {/* ════ STEP 1 — Upload ════ */}
    {step === "pick" && <div style={card}>
      {/* Table selector */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 8 }}>What are you importing?</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 8 }}>
          {Object.entries(IMPORT_SCHEMAS).map(([k, s]) => <div key={k} onClick={() => setTableKey(k)} style={{
            padding: "10px 12px", borderRadius: 10, cursor: "pointer", textAlign: "center",
            border: `2px solid ${tableKey === k ? C.gold : C.border}`,
            background: tableKey === k ? `${C.gold}15` : C.bgDeep,
            transition: ".15s",
          }}>
            <div style={{ fontSize: 22, marginBottom: 4 }}>{s.icon}</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: tableKey === k ? C.gold : C.text }}>{s.label}</div>
          </div>)}
        </div>
      </div>

      {/* CWS selector (only for station-linked tables) */}
      {["farmers","cherry","cashbook","expenses","debts"].includes(tableKey) && <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 8 }}>Which washing station?</div>
        <select value={cwsId} onChange={e => setCwsId(e.target.value)} style={{ width: "100%", padding: "10px 13px", background: C.bgDeep, border: `1.5px solid ${C.border}`, borderRadius: 10, color: C.text, fontSize: 13 }}>
          <option value="">— Select station —</option>
          {accessibleCws.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
      </div>}

      {/* File picker */}
      <div style={{ fontSize: 11, fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 8 }}>Upload file</div>
      <label style={{ display: "block" }}>
        <input type="file" accept=".xlsx,.xls,.csv" style={{ display: "none" }} id="import-file-input" onChange={handleFile}
          disabled={["farmers","cherry","cashbook","expenses","debts"].includes(tableKey) && !cwsId} />
        <div onClick={() => {
          if (["farmers","cherry","cashbook","expenses","debts"].includes(tableKey) && !cwsId) {
            addNote("Please select a washing station first", "warning"); return;
          }
          document.getElementById("import-file-input").click();
        }} style={{ height: 120, border: `2px dashed ${C.border}`, borderRadius: 12, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, cursor: "pointer", color: C.textDim, transition: ".15s" }}
          onMouseEnter={e => e.currentTarget.style.borderColor = C.gold}
          onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
          <span style={{ fontSize: 32 }}>📂</span>
          <span style={{ fontSize: 13, fontWeight: 600 }}>{loading ? "Reading file…" : "Click to choose Excel or CSV file"}</span>
          <span style={{ fontSize: 11 }}>.xlsx · .xls · .csv supported</span>
        </div>
      </label>

      {/* Expected columns hint */}
      <div style={{ marginTop: 16, padding: "12px 14px", background: C.bgDeep, borderRadius: 10 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.textMuted, marginBottom: 6 }}>EXPECTED COLUMNS FOR {schema.label.toUpperCase()}</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {schema.fields.map(f => <span key={f.key} style={{ padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600,
            background: f.required ? `${C.gold}20` : `${C.border}40`,
            color: f.required ? C.gold : C.textDim,
            border: `1px solid ${f.required ? C.gold+"40" : C.border}` }}>
            {f.key}{f.required ? " *" : ""}
          </span>)}
        </div>
        <div style={{ fontSize: 10, color: C.textDim, marginTop: 8 }}>* required &nbsp;|&nbsp; Column names don't need to match exactly — the system uses fuzzy matching</div>
      </div>
    </div>}

    {/* ════ STEP 2 — Map Columns ════ */}
    {step === "map" && <div>
      <div style={card}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14 }}>Column Mapping — {fileName}</div>
            <div style={{ fontSize: 12, color: C.textMuted, marginTop: 2 }}>{rows.length} data rows detected · {headers.length} columns</div>
          </div>
          <button onClick={() => setStep("pick")} style={{ ...BtnS(C.border, true), fontSize: 11, padding: "5px 12px" }}>← Back</button>
        </div>

        <div style={{ display: "grid", gap: 10 }}>
          {schema.fields.map(f => {
            const matched = colMap[f.key] !== undefined;
            return <div key={f.key} style={{ display: "grid", gridTemplateColumns: "1fr 24px 1fr", gap: 10, alignItems: "center" }}>
              {/* System field */}
              <div style={{ padding: "9px 12px", background: matched ? `${C.success}12` : `${C.border}20`, borderRadius: 8, border: `1px solid ${matched ? C.success+"40" : C.border}` }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: matched ? C.success : C.textDim }}>{f.key} {f.required ? "*" : ""}</div>
                <div style={{ fontSize: 10, color: C.textDim }}>system field</div>
              </div>
              <div style={{ textAlign: "center", color: matched ? C.success : C.textDim, fontSize: 16 }}>{matched ? "→" : "✗"}</div>
              {/* Excel column selector */}
              <select value={colMap[f.key] !== undefined ? colMap[f.key] : ""}
                onChange={e => {
                  const v = e.target.value;
                  setColMap(prev => v === "" ? (({ [f.key]: _, ...rest }) => rest)(prev) : { ...prev, [f.key]: +v });
                }}
                style={{ padding: "9px 12px", background: C.bgDeep, border: `1.5px solid ${matched ? C.success+"60" : C.border}`, borderRadius: 8, color: C.text, fontSize: 12 }}>
                <option value="">— not mapped —</option>
                {headers.map((h, i) => <option key={i} value={i}>{h} (col {i+1})</option>)}
              </select>
            </div>;
          })}
        </div>

        {/* Sample data preview */}
        {rows.length > 0 && <div style={{ marginTop: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.textMuted, textTransform: "uppercase", marginBottom: 8 }}>First row of your data</div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", fontSize: 11, borderCollapse: "collapse" }}>
              <thead><tr>{headers.map((h,i) => <th key={i} style={{ padding: "5px 10px", background: C.bgDeep, color: C.textMuted, textAlign: "left", border: `1px solid ${C.border}`, whiteSpace: "nowrap" }}>{h}</th>)}</tr></thead>
              <tbody><tr>{(rows[0]||[]).map((c,i) => <td key={i} style={{ padding: "5px 10px", color: C.text, border: `1px solid ${C.border}`, whiteSpace: "nowrap", maxWidth: 120, overflow: "hidden", textOverflow: "ellipsis" }}>{String(c)}</td>)}</tr></tbody>
            </table>
          </div>
        </div>}

        <button onClick={buildPreview} style={{ ...BtnS(C.gold), marginTop: 16, padding: "10px 24px", fontSize: 13 }}>Build Preview →</button>
      </div>
    </div>}

    {/* ════ STEP 3 — Preview ════ */}
    {step === "preview" && <div>
      <div style={card}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14 }}>Preview — Ready to Import</div>
            <div style={{ fontSize: 12, color: C.textMuted, marginTop: 2 }}>
              <span style={{ color: C.success, fontWeight: 700 }}>{preview.length} valid</span>
              {skipped.length > 0 && <span style={{ color: C.warning, fontWeight: 700 }}> · {skipped.length} skipped</span>}
            </div>
          </div>
          <button onClick={() => setStep("map")} style={{ ...BtnS(C.border, true), fontSize: 11, padding: "5px 12px" }}>← Back</button>
        </div>

        {/* Valid records table */}
        {preview.length > 0 && <div style={{ overflowX: "auto", marginBottom: 14 }}>
          <table style={{ width: "100%", fontSize: 11, borderCollapse: "collapse" }}>
            <thead><tr>
              {schema.fields.filter(f => colMap[f.key] !== undefined).map(f =>
                <th key={f.key} style={{ padding: "7px 10px", background: C.bgDeep, color: C.textMuted, textAlign: "left", border: `1px solid ${C.border}`, whiteSpace: "nowrap" }}>{f.key}</th>
              )}
            </tr></thead>
            <tbody>{preview.slice(0,20).map((r, i) => <tr key={i} className="tbl-row">
              {schema.fields.filter(f => colMap[f.key] !== undefined).map(f =>
                <td key={f.key} style={{ padding: "6px 10px", color: C.text, border: `1px solid ${C.border}`, whiteSpace: "nowrap" }}>{String(r[f.key] ?? "")}</td>
              )}
            </tr>)}</tbody>
          </table>
          {preview.length > 20 && <div style={{ textAlign: "center", color: C.textDim, fontSize: 11, padding: "8px 0" }}>…and {preview.length - 20} more rows</div>}
        </div>}

        {/* Skipped rows */}
        {skipped.length > 0 && <div style={{ padding: "10px 14px", background: `${C.warning}10`, border: `1px solid ${C.warning}30`, borderRadius: 10, marginBottom: 14 }}>
          <div style={{ fontWeight: 700, fontSize: 12, color: C.warning, marginBottom: 6 }}>⚠ Skipped Rows</div>
          {skipped.map((s, i) => <div key={i} style={{ fontSize: 11, color: C.textDim }}>Row {s.row}: {s.reason}</div>)}
        </div>}

        <button onClick={doImport} disabled={!preview.length || loading}
          style={{ ...BtnS(C.success), padding: "11px 28px", fontSize: 13, opacity: (preview.length && !loading) ? 1 : 0.5 }}>
          {loading ? "⏳ Saving to database…" : `💾 Import ${preview.length} Records`}
        </button>
      </div>
    </div>}

    {/* ════ STEP 4 — Done ════ */}
    {step === "done" && <div style={{ ...card, textAlign: "center", padding: "40px 20px" }}>
      <div style={{ fontSize: 48, marginBottom: 12 }}>✅</div>
      <div style={{ fontWeight: 700, fontSize: 18, color: C.success, marginBottom: 8 }}>Import Complete</div>
      <div style={{ fontSize: 13, color: C.textMuted, marginBottom: 24 }}>
        {preview.length} {schema.label} records imported into the system and synced to Supabase.
        {skipped.length > 0 && ` ${skipped.length} rows were skipped.`}
      </div>
      <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
        <button onClick={() => { setStep("pick"); setRows([]); setHeaders([]); setColMap({}); setPreview([]); setSkipped([]); setFileName(""); }}
          style={{ ...BtnS(C.gold), padding: "10px 20px", fontSize: 13 }}>Import Another File</button>
      </div>
    </div>}
  </div>;
}

function GNRTable({ rows, cwsList, farmers: farmers2, full, showStation }) {
  if (!rows.length) return <ES text="No records" />;
  const cols = full ? ["Date", "GNR #", showStation && "Station", "Farmer", "Std kg", "Flt kg", "Total kg", "Rate Std", "Rate Flt", "Total Paid", "Avg Rate", "Method", "Status"] : ["Date", "GNR #", showStation && "Station", "Farmer", "Total kg", "Total Paid", "Method", "Status"];
  const filteredCols = cols.filter(Boolean);
  return <div style={{ overflowX: "auto" }}><div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse", minWidth: full ? 900 : 500 }}>
    <thead><tr style={{ background: C.surface }}>{filteredCols.map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
    <tbody>{rows.map((c) => {
    const f = farmers2.find((x) => x.id === c.farmerId);
    const cws = cwsList.find((x) => x.id === c.cwsId);
    return <tr key={c.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
        <Td style={{ color: C.textMuted, whiteSpace: "nowrap" }}>{c.date}</Td>
        <Td style={{ color: C.gold, fontWeight: 700, whiteSpace: "nowrap" }}>{c.gnrNumber}</Td>
        {showStation && <Td style={{ color: C.coffeeLight, fontSize: 11 }}>{cws?.name || c.cwsId}</Td>}
        <Td style={{ fontWeight: 500, whiteSpace: "nowrap" }}>{f?.name || c.farmerId}</Td>
        {full && <><Td style={{ color: C.coffeeLight }}>{(+(c.standardKg||0)).toLocaleString()}</Td><Td style={{ color: C.warning }}>{(+(c.flotantKg||0)).toLocaleString()}</Td></>}
        <Td style={{ fontWeight: 700, color: C.coffee }}>{(+(c.totalKg||0)).toLocaleString()} kg</Td>
        {full && <><Td style={{ color: C.textMuted }}>{c.rateStandard} RWF</Td><Td style={{ color: C.textMuted }}>{c.rateFlotant} RWF</Td></>}
        <Td style={{ fontWeight: 700, color: C.danger }}>{fmtRWF(c.totalPaid)}</Td>
        {full && <Td style={{ color: C.info }}>{(c.avgRate||0)} RWF/kg</Td>}
        <Td>{c.paymentMethod ? <span style={{ padding: "2px 7px", borderRadius: 4, fontSize: 10, fontWeight: 700, background: `${C.info}18`, color: C.info }}>{c.paymentMethod.replace(/_/g, " ")}</span> : <span style={{ fontSize: 10, color: C.textDim, fontStyle: "italic" }}>Pending cashier</span>}</Td>
        <Td><SB status={c.status} /></Td>
      </tr>;
  })}</tbody>
  </table></div></div>;
}
function CashTable({ rows }) {
  if (!rows.length) return <ES text="No cash entries" />;
  return <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
    <thead><tr style={{ background: C.surface }}>{["Date", "Type", "Category", "Description", "Amount", "Ref", "By"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
    <tbody>{rows.map((c) => <tr key={c.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
        <Td style={{ color: C.textMuted }}>{c.date}</Td>
        <Td style={{ color: c.type === "inflow" ? C.success : C.danger, fontWeight: 600 }}>{c.type === "inflow" ? "\u25B2 Inflow" : "\u25BC Outflow"}</Td>
        <Td>{c.category}</Td>
        <Td style={{ color: C.textMuted, maxWidth: 160, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.description}</Td>
        <Td style={{ fontWeight: 700, color: c.type === "inflow" ? C.success : C.danger }}>{fmtRWF(c.amount)}</Td>
        <Td style={{ color: C.textDim, fontSize: 11 }}>{c.ref || "\u2014"}</Td>
        <Td style={{ color: C.textDim, fontSize: 11 }}>{c.by || "\u2014"}</Td>
      </tr>)}</tbody>
  </table></div>;
}
function BankTable({ rows }) {
  if (!rows.length) return <ES text="No bank transactions" />;
  return <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
    <thead><tr style={{ background: C.surface }}>{["Date", "Type", "Description", "Amount", "Balance", "Ref"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
    <tbody>{rows.map((b) => <tr key={b.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
        <Td style={{ color: C.textMuted }}>{b.date}</Td>
        <Td style={{ color: b.type === "credit" ? C.success : C.danger, fontWeight: 600 }}>{b.type === "credit" ? "\u25B2 Credit" : "\u25BC Debit"}</Td>
        <Td style={{ color: C.textMuted }}>{b.description}</Td>
        <Td style={{ fontWeight: 700, color: b.type === "credit" ? C.success : C.danger }}>{fmtRWF(b.amount)}</Td>
        <Td style={{ fontWeight: 700, color: C.info }}>{fmtRWF(b.balance)}</Td>
        <Td style={{ color: C.textDim, fontSize: 11 }}>{b.ref || "\u2014"}</Td>
      </tr>)}</tbody>
  </table></div>;
}
function ExpTable({ rows, full, showStation, cwsList = [] }) {
  if (!rows.length) return <ES text="No expenses recorded" />;
  return <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
    <thead><tr style={{ background: C.surface }}>{["Date", showStation && "Station", "Category", "Description", "Amount", "Type", "Status"].filter(Boolean).map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
    <tbody>{rows.map((e) => {
    const cws = cwsList.find((c) => c.id === e.cwsId);
    return <tr key={e.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e2) => e2.currentTarget.style.background = C.surface} onMouseLeave={(e2) => e2.currentTarget.style.background = "transparent"}>
        <Td style={{ color: C.textMuted }}>{e.date}</Td>
        {showStation && <Td style={{ color: C.coffeeLight, fontSize: 11 }}>{cws?.name || e.cwsId}</Td>}
        <Td style={{ fontWeight: 600, color: C.warning }}>{e.category}</Td>
        <Td style={{ color: C.textMuted, maxWidth: 160, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{e.description || "\u2014"}</Td>
        <Td style={{ fontWeight: 700, color: C.warning }}>{fmtRWF(e.amount)}</Td>
        <Td><span style={{ padding: "2px 7px", borderRadius: 4, fontSize: 10, fontWeight: 700, background: e.exploitable ? `${C.coffee}18` : `${C.danger}18`, color: e.exploitable ? C.coffeeLight : C.danger }}>{e.exploitable ? "Exploitable" : "Non-Exploitable"}</span></Td>
        <Td><SB status={e.status} /></Td>
      </tr>;
  })}</tbody>
  </table></div>;
}
function FundTable({ rows, users, short, cwsList = [] }) {
  if (!rows.length) return <ES text="No fund requests" />;
  return <div className="tbl-wrap"><table style={{ width: "100%", borderCollapse: "collapse" }}>
    <thead><tr style={{ background: C.surface }}>{(short ? ["Date", "Station", "Amount", "Reason", "Status"] : ["Date", "Station", "Amount", "Reason", "Status", "Verified By", "Approved By", "Transfer"]).map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
    <tbody>{rows.map((fr) => {
    const cws = cwsList.find((c) => c.id === fr.cwsId);
    return <tr key={fr.id} style={{ borderBottom: `1px solid ${C.border}15` }} onMouseEnter={(e) => e.currentTarget.style.background = C.surface} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
        <Td style={{ color: C.textMuted, fontSize: 11 }}>{fr.requestedAt?.split(" ")[0] || "\u2014"}</Td>
        <Td style={{ color: C.coffeeLight, fontSize: 11 }}>{cws?.name || fr.cwsId}</Td>
        <Td style={{ fontWeight: 700, color: C.gold }}>{fmtRWF(fr.amount)}</Td>
        <Td style={{ color: C.textMuted, maxWidth: 160, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{fr.reason}</Td>
        <Td><SB status={fr.status} /></Td>
        {!short && <Td style={{ color: C.textDim, fontSize: 11 }}>{fr.verifiedBy ? users.find((u) => u.id === fr.verifiedBy)?.name || fr.verifiedBy : "\u2014"}</Td>}
        {!short && <Td style={{ color: C.textDim, fontSize: 11 }}>{fr.approvedBy ? users.find((u) => u.id === fr.approvedBy)?.name || fr.approvedBy : "\u2014"}</Td>}
        {!short && <Td style={{ color: C.textDim, fontSize: 11 }}>{fr.transferMethod ? fr.transferMethod.replace(/_/g, " ") : "\u2014"}</Td>}
      </tr>;
  })}</tbody>
  </table></div>;
}
/* ── Avatar ── */
function Ava({ user, size = 32 }) {
  const color = ROLES[user?.role]?.color || C.gold;
  return <div style={{ width: size, height: size, borderRadius: "50%", background: `linear-gradient(135deg,${color}30,${color}10)`, border: `1.5px solid ${color}40`, color, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: size * 0.36, flexShrink: 0, boxShadow: `0 0 0 2px ${color}15` }}>{user?.avatar || "?"}</div>;
}
/* ── Role Badge ── */
function RB({ role, sm }) {
  const r = ROLES[role];
  if (!r) return null;
  return <span style={{ padding: sm ? "2px 8px" : "4px 12px", borderRadius: 20, fontSize: sm ? 9 : 11, fontWeight: 600, letterSpacing: "0.2px", background: `${r.color}18`, color: r.light, border: `1px solid ${r.color}28`, whiteSpace: "nowrap" }}>{r.label}</span>;
}
/* ── Status Badge ── */
function SB({ status }) {
  const cfg = {
    synced:              { c: C.success, l: "Synced",               icon: "●" },
    pending:             { c: C.warning, l: "Pending",              icon: "◐" },
    offline:             { c: C.danger,  l: "Offline",              icon: "○" },
    submitted:           { c: C.info,    l: "Submitted",            icon: "↑" },
    approved:            { c: C.success, l: "Approved",             icon: "✓" },
    rejected:            { c: C.danger,  l: "Rejected",             icon: "✕" },
    active:              { c: C.success, l: "Active",               icon: "●" },
    completed:           { c: C.info,    l: "Completed",            icon: "✓" },
    given:               { c: C.success, l: "Given",                icon: "↗" },
    requested:           { c: C.warning, l: "Requested",            icon: "◐" },
    paid:                { c: C.success, l: "Paid",                 icon: "✓" },
    not_paid:            { c: C.danger,  l: "Not Paid",             icon: "✕" },
    outstanding:         { c: C.danger,  l: "Outstanding",          icon: "!" },
    partial:             { c: C.warning, l: "Partial",              icon: "◑" },
    pending_verification:{ c: C.warning, l: "Pending Verification", icon: "◐" },
    pending_approval:    { c: C.gold,    l: "Pending Approval",     icon: "◐" },
  };
  const d = cfg[status] || { c: C.textMuted, l: status, icon: "·" };
  return <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 9px", borderRadius: 20, fontSize: 10, fontWeight: 600, background: `${d.c}15`, color: d.c, border: `1px solid ${d.c}25`, whiteSpace: "nowrap" }}><span style={{ fontSize: 7, lineHeight: 1 }}>{d.icon}</span>{d.l}</span>;
}
/* ── Condition Badge ── */
function CB({ cond }) {
  const cfg = { good: { c: C.success, l: "Good" }, fair: { c: C.warning, l: "Fair" }, needs_repair: { c: C.danger, l: "Needs Repair" }, critical: { c: C.dangerLight, l: "Critical" } };
  const d = cfg[cond] || { c: C.textMuted, l: cond };
  return <span style={{ display: "inline-flex", padding: "3px 9px", borderRadius: 20, fontSize: 10, fontWeight: 600, background: `${d.c}15`, color: d.c, border: `1px solid ${d.c}25` }}>{d.l}</span>;
}
/* ── Status Pill ── */
function SPill({ status }) {
  const cfg = { available: { c: C.success, l: "Available" }, on_task: { c: C.warning, l: "On Task" }, maintenance: { c: C.danger, l: "Maintenance" } };
  const d = cfg[status] || { c: C.textMuted, l: status };
  return <span style={{ display: "inline-flex", marginTop: 6, padding: "4px 12px", borderRadius: 20, fontSize: 10, fontWeight: 600, background: `${d.c}15`, color: d.c, border: `1px solid ${d.c}25` }}>{d.l}</span>;
}
/* ── Stat Card ── */
function SC({ label, value, color, sub, icon }) {
  return <div style={{ background: C.gradCard, border: `1px solid ${C.border}`, borderRadius: 14, padding: "16px 18px", position: "relative", overflow: "hidden", transition: "border-color .2s,transform .2s,box-shadow .2s" }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}40`; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,0,0,.35)`; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
    {icon && <div style={{ position: "absolute", top: 12, right: 14, fontSize: 22, opacity: .12 }}>{icon}</div>}
    <div style={{ fontSize: 10, fontWeight: 600, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 8 }}>{label}</div>
    <div style={{ fontSize: 22, fontWeight: 700, color, lineHeight: 1.1, wordBreak: "break-word", letterSpacing: "-0.5px" }}>{value}</div>
    {sub && <div style={{ fontSize: 11, color: C.textDim, marginTop: 5, display: "flex", alignItems: "center", gap: 4 }}>{sub}</div>}
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${color}50,transparent)`, borderRadius: "0 0 14px 14px" }} />
  </div>;
}
/* ── Tabs ── */
function Tabs({ tabs, labels, active, onChange, color = C.gold }) {
  return <div style={{ display: "flex", gap: 2, background: C.bgDeep, padding: 4, borderRadius: 12, width: "fit-content", marginBottom: 18, border: `1px solid ${C.border}`, flexWrap: "wrap" }}>
    {tabs.map((t, i) => <div key={t} onClick={() => onChange(t)} style={{ padding: "6px 14px", borderRadius: 9, cursor: "pointer", fontSize: 12, fontWeight: active === t ? 600 : 400, color: active === t ? color : C.textMuted, background: active === t ? `${color}18` : "transparent", border: `1px solid ${active === t ? color+"28" : "transparent"}`, transition: "all .15s", whiteSpace: "nowrap" }}>{labels?.[i] || t.replace(/_/g, " ")}</div>)}
  </div>;
}
/* ── Modal ── */
function Modal({ title, onClose, children, wide }) {
  return <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.75)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1e3, backdropFilter: "blur(8px)", padding: "16px" }} onClick={onClose}>
    <div style={{ background: "linear-gradient(145deg,#161E17,#111714)", border: `1px solid ${C.borderLight}`, borderRadius: 18, padding: "26px 28px", width: "100%", maxWidth: wide ? 660 : 500, maxHeight: "90vh", overflowY: "auto", animation: "scaleIn .18s ease both", boxShadow: "0 24px 80px rgba(0,0,0,.6)" }} onClick={e => e.stopPropagation()}>
      <div style={{ fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 20, letterSpacing: "-0.3px" }}>{title}</div>
      {children}
    </div>
  </div>;
}
/* ── Modal Footer ── */
function MF({ onCancel, onSave, label, color }) {
  return <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 22, paddingTop: 16, borderTop: `1px solid ${C.border}` }}>
    <button onClick={onCancel} style={{ padding: "8px 18px", background: "transparent", border: `1px solid ${C.border}`, borderRadius: 9, color: C.textMuted, fontSize: 13, cursor: "pointer", fontWeight: 500, transition: "all .15s" }} onMouseEnter={e => e.target.style.borderColor = C.borderLight} onMouseLeave={e => e.target.style.borderColor = C.border}>Cancel</button>
    <button onClick={onSave} style={{ ...BtnS(color || C.gold), padding: "8px 20px", fontSize: 13 }}>{label || "Save"}</button>
  </div>;
}
/* ── Form Label ── */
function FL({ children }) {
  return <div style={{ fontSize: 10, fontWeight: 600, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.7px", marginBottom: 6 }}>{children}</div>;
}
/* ── Form Input ── */
function FI({ label, type = "text", value, onChange, placeholder, onEnter }) {
  return <div>
    {label && <FL>{label}</FL>}
    <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
      onKeyDown={e => e.key === "Enter" && onEnter && onEnter()}
      style={{ width: "100%", padding: "10px 13px", background: C.bgDeep, border: `1.5px solid ${C.border}`, borderRadius: 10, color: C.text, fontSize: 13, outline: "none", transition: "border-color .15s, box-shadow .15s" }}
      onFocus={e => { e.target.style.borderColor = C.gold; e.target.style.boxShadow = `0 0 0 3px ${C.gold}15`; }}
      onBlur={e => { e.target.style.borderColor = C.border; e.target.style.boxShadow = "none"; }} />
  </div>;
}
/* ── Alert Banner ── */
function Alert({ text, color }) {
  return <div style={{ padding: "10px 14px", background: `${color}10`, border: `1px solid ${color}25`, borderRadius: 10, fontSize: 12, color, display: "flex", alignItems: "flex-start", gap: 8, lineHeight: 1.5 }}>{text}</div>;
}
/* ── Empty State ── */
function ES({ text }) {
  return <div style={{ padding: "40px 24px", textAlign: "center", color: C.textDim, fontSize: 13 }}>
    <div style={{ fontSize: 28, marginBottom: 10, opacity: .4 }}>◎</div>
    {text}
  </div>;
}
/* ── Table Header Cell ── */
function Th({ children }) {
  return <th style={{ padding: "10px 12px", textAlign: "left", fontSize: 10, fontWeight: 600, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.8px", borderBottom: `1px solid ${C.border}`, whiteSpace: "nowrap", background: C.bgDeep }}>{children}</th>;
}
/* ── Table Data Cell ── */
function Td({ children, style }) {
  return <td style={{ padding: "10px 12px", fontSize: 12.5, borderBottom: `1px solid ${C.border}08`, ...style }}>{children}</td>;
}

(function(){
  var root=document.getElementById("root");
  if(!root)return;
  ReactDOM.createRoot(root).render(React.createElement(App));
  var splash=document.getElementById("splash");
  if(splash&&!splash.__rm){splash.__rm=true;setTimeout(function(){splash.classList.add("hide");setTimeout(function(){if(splash.parentNode)splash.parentNode.removeChild(splash);},400);},800);}
})();
