const cacheName = `hello-word-v3-1-08`
const staticAssets = [
  `./`,
  `./index.html`,
  `./assets/css/a11y-dark.css`,
  `./assets/css/normalize.css`,
  `./assets/css/style.css`,
  `./assets/js/app.js`,
  `./assets/data/all.json`,
  `./assets/icons/favicon.ico`,
  `./assets/icons/logo192.png`,
  `./assets/icons/logo512.png`,
  `./assets/img/chrome.svg`,
  `./assets/img/edge.svg`,
  `./assets/img/firefox.svg`,
  `./assets/img/safari.svg`,
  `./manifest.webmanifest`
]

self.addEventListener(`install`, async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skipWaiting();
});

self.addEventListener(`activate`, e => {
  self.clients.claim();
});

self.addEventListener(`fetch`, async e => {
  const req = e.request;
  const url = new URL(req.url);

  if (url.origin === location.origin) {
    e.respondWith(cacheFirst(req));
  } else {
    e.respondWith(networkAndCache(req));
  }
});

const cacheFirst = async (req) => {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  return cached || fetch(req);
}

const networkAndCache = async (req) => {
  const cache = await caches.open(cacheName);
  try {
    const fresh = await fetch(req);
    await cache.put(req, fresh.clone());
    return fresh;
  } catch (e) {
    const cached = await cache.match(req);
    return cached;
  }
}