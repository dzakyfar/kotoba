const CACHE_NAME = "kotoba-fsrs6-v4-20261111";
const CORE = [
  "./","./index.html","./manifest.webmanifest","./sw.js",
  "./icon-192.svg","./icon-512.svg",
  "./payload/part-01.b64",
  "./payload/part-02.b64",
  "./payload/part-03.b64",
  "./payload/part-04.b64",
  "./payload/part-05.b64",
  "./payload/part-06.b64",
  "./payload/part-07.b64",
  "./payload/part-08.b64",
  "./payload/part-09.b64"
];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith("kotoba-fsrs6-") && key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
    if (response && response.ok) {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
    }
    return response;
  }).catch(() => caches.match("./index.html"))));
});