cacheName = 'hello-word-v1'
staticAssets = [
    './',
    './index.html',
    './assets/css/a11y-dark.css',
    './assets/css/normalize.css',
    './assets/css/style.css',
    './assets/js/app.js',
    './assets/data/all.json',
]

self.addEventListener('install', async e => {
    cache = await caches.open(cacheName)
    await cache.addAll(staticAssets)
    return self.skipWaiting()
})

self.addEventListener('activate', e => {
    self.clients.claim()
})

self.addEventListener('fetch', async e => {
    req = e.request
    url = new URL(req.url)

    if (url.origin === location.origin) {
        e.respondWith(cacheFirst(req))
    } else {
        e.respondWith(networkAndCache(req))
    }
})

cacheFirst = async (req) => {
    cache = await caches.open(cacheName)
    cached = await cache.match(req)
    return cached || fetch(req)
}

networkAndCache = async (req) => {
    cache = await caches.open(cacheName)
    try {
        fresh = await fetch(req)
        await cache.put(req, fresh.clone())
        return fresh
    } catch (e) {
        cached = await cache.match(req)
        return cached
    }
}