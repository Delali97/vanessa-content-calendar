const CACHE_NAME = 'content-calendar-v1';
const urlsToCache = [
  '/content-calendar/',
  '/content-calendar/index.html',
  '/content-calendar/style.css',
  '/content-calendar/data.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
