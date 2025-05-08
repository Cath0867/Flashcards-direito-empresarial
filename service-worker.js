self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('flashcards-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/flashcards.json',
                '/style.css',
                '/flashcards.js',
                '/manifest.json'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});

