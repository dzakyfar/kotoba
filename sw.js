const CACHE_NAME = "kotoba-fsrs6-v6-20261111d";
const CORE = [
  "./","./index.html","./manifest.webmanifest","./sw.js",
  "./icon-192.svg","./icon-512.svg",
  "./payload/part-01.b64","./payload/tail-01.b64",
  "./payload/chunk-02.b64","./payload/chunk-03.b64","./payload/chunk-04.b64",
  "./payload/chunk-05.b64","./payload/tail-05.b64",
  "./payload/chunk-06.b64","./payload/chunk-07.b64",
  "./payload/part-08.b64","./payload/part-09.b64","./payload/part-10.b64","./payload/part-11.b64",
  "./payload/part-12.b64","./payload/tail-12.b64",
  "./payload/part-13.b64","./payload/part-14.b64",
  "./payload/part-15.b64","./payload/tail-15.b64",
  "./payload/part-16.b64","./payload/tail-16.b64",
  "./payload/part-17.b64"
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
  }).catch(() => request.mode === "navigate" ? caches.match("./index.html") : new Response("Berkas Kotoba tidak dapat dimuat. Periksa koneksi lalu muat ulang.", {status: 503, headers: {"Content-Type":"text/plain; charset=utf-8"}}))));
});