const CACHE_NAME = 'flashcards-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/flashcards.js',
    '/manifest.json'
];

// Instala o service worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

// Ativa o novo service worker e limpa caches antigos
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames =>
            Promise.all(
                cacheNames.map(name => {
                    if (name !== CACHE_NAME) return caches.delete(name);
                })
            )
        )
    );
});

// Intercepta requisições e responde com cache se disponível
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
