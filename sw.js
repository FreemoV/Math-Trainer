const CACHE_NAME = 'math-trainer-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.min.css',
    '/script.min.js',
    '/offline.html',
    '/icon-192x192.png',
    '/icon-512x512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            if (response) {
                // Возвращаем из кэша и обновляем в фоновом режиме
                fetch(event.request).then(fetchResponse => {
                    if (fetchResponse.ok) {
                        caches.open(CACHE_NAME).then(cache => {
                            cache.put(event.request, fetchResponse.clone());
                        });
                    }
                }).catch(() => {});
                return response;
            }
            return fetch(event.request).then(fetchResponse => {
                if (!fetchResponse || fetchResponse.status !== 200) {
                    return fetchResponse;
                }
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, fetchResponse.clone());
                });
                return fetchResponse;
            }).catch(() => {
                return caches.match('/offline.html');
            });
        })
    );
});