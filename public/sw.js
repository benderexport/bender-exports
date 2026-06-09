// Bender Exports — Service Worker v2.1.0
// Cache version bumped — forces all clients to discard old cached app.js
const CACHE = "bender-v3";
const PRECACHE = ["/", "/index.html", "/manifest.json", "/icons/icon-192.svg"];

let authToken = null;

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);

  // Never cache API calls
  if (url.pathname.startsWith("/api/")) {
    e.respondWith(
      fetch(e.request).catch(() =>
        new Response(JSON.stringify({ error: "Offline" }), {
          status: 503, headers: { "Content-Type": "application/json" }
        })
      )
    );
    return;
  }

  // Never cache app.js — always fetch fresh from network
  if (url.pathname === "/app.js") {
    e.respondWith(
      fetch(e.request, { cache: "no-store" }).catch(() =>
        caches.match("/app.js")
      )
    );
    return;
  }

  // Cache-first for everything else, fallback to index.html for SPA routes
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res.ok && e.request.method === "GET") {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => caches.match("/index.html"));
    })
  );
});

self.addEventListener("message", e => {
  if (e.data?.type === "SET_TOKEN") authToken = e.data.token;
  if (e.data?.type === "FLUSH_QUEUE") flushQueue();
});

async function flushQueue() {
  if (!authToken) return;
  try {
    const db = await openDB();
    const ops = await getAll(db);
    if (!ops.length) return;
    const res = await fetch("/api/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${authToken}` },
      body: JSON.stringify({ operations: ops })
    });
    if (res.ok) {
      await clearAll(db);
      const clients = await self.clients.matchAll();
      clients.forEach(c => c.postMessage({ type: "QUEUE_FLUSHED", flushed: ops.length }));
    }
  } catch(err) { console.warn("[SW] Queue flush failed:", err); }
}

function openDB() {
  return new Promise((res, rej) => {
    const req = indexedDB.open("bender-queue", 1);
    req.onupgradeneeded = e => e.target.result.createObjectStore("ops", { keyPath: "id" });
    req.onsuccess = e => res(e.target.result);
    req.onerror   = e => rej(e.target.error);
  });
}
function getAll(db) {
  return new Promise((res, rej) => {
    const req = db.transaction("ops","readonly").objectStore("ops").getAll();
    req.onsuccess = e => res(e.target.result||[]);
    req.onerror   = e => rej(e.target.error);
  });
}
function clearAll(db) {
  return new Promise((res, rej) => {
    const req = db.transaction("ops","readwrite").objectStore("ops").clear();
    req.onsuccess = () => res();
    req.onerror   = e => rej(e.target.error);
  });
}
