// ── Bender Exports — Service Worker ─────────────────────────────────
// INCREMENT this version string on every deploy to force cache refresh
const CACHE_VERSION = 'bender-v8';
const CACHE_NAME = `bender-cache-${CACHE_VERSION}`;

// Files to cache on install
const PRECACHE = [
  '/',
  '/index.html',
  '/app.js',
  '/manifest.json',
  '/icons/icon-192.svg',
  '/icons/icon-512.svg',
];

// ── Install: cache app shell ─────────────────────────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE))
  );
  // Activate immediately — don't wait for old tabs to close
  self.skipWaiting();
});

// ── Activate: delete ALL old caches ─────────────────────────────────
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== CACHE_NAME)
          .map((k) => {
            console.log('[SW] Deleting old cache:', k);
            return caches.delete(k);
          })
      )
    ).then(() => self.clients.claim())   // take control of all open tabs
  );
});

// ── Fetch: network-first for HTML/JS, cache-first for assets ─────────
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET and cross-origin requests (Supabase, CDN, etc.)
  if (request.method !== 'GET' || url.origin !== location.origin) return;

  // Always fetch HTML and JS fresh from network (never serve stale app code)
  if (
    request.headers.get('accept')?.includes('text/html') ||
    url.pathname.endsWith('.js') ||
    url.pathname === '/' ||
    url.pathname === '/index.html' ||
    url.pathname === '/app.js'
  ) {
    event.respondWith(
      fetch(request)
        .then((res) => {
          // Update cache with fresh response
          const clone = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(request, clone));
          return res;
        })
        .catch(() => caches.match(request)) // fallback to cache if offline
    );
    return;
  }

  // Cache-first for everything else (icons, manifest)
  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request))
  );
});

// ── Offline queue (IndexedDB) ────────────────────────────────────────
let _token = null;

const openQueueDB = () =>
  new Promise((res, rej) => {
    const req = indexedDB.open('bender_queue', 1);
    req.onupgradeneeded = (e) =>
      e.target.result.createObjectStore('ops', {
        keyPath: 'id',
        autoIncrement: true,
      });
    req.onsuccess = (e) => res(e.target.result);
    req.onerror = (e) => rej(e.target.error);
  });

const flushQueue = async () => {
  if (!_token) return;
  try {
    const db = await openQueueDB();
    const tx = db.transaction('ops', 'readwrite');
    const store = tx.objectStore('ops');
    const all = await new Promise((res, rej) => {
      const req = store.getAll();
      req.onsuccess = () => res(req.result);
      req.onerror = () => rej(req.error);
    });
    if (!all.length) return;

    const resp = await fetch('/api/sync', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_token}`,
      },
      body: JSON.stringify({ operations: all }),
    });

    if (resp.ok) {
      // Clear flushed ops
      await new Promise((res, rej) => {
        const delTx = db.transaction('ops', 'readwrite');
        delTx.objectStore('ops').clear();
        delTx.oncomplete = res;
        delTx.onerror = rej;
      });
      self.clients.matchAll().then((clients) =>
        clients.forEach((c) =>
          c.postMessage({ type: 'QUEUE_FLUSHED', flushed: all.length })
        )
      );
      console.log('[SW] Flushed', all.length, 'queued operations');
    }
  } catch (e) {
    console.warn('[SW] Queue flush failed:', e);
  }
};

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SET_TOKEN') {
    _token = event.data.token;
  }
  if (event.data?.type === 'FLUSH_QUEUE') {
    flushQueue();
  }
});
