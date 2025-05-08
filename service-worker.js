const CACHE_NAME = 'flashcards-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/flashcards.js',
    '/flashcards.json',
    '/images/icon-192x192.png',
    '/images/icon-512x512.png'
];

// Instalando o service worker e armazenando arquivos no cache
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Service Worker: Cache inicializado');
                return cache.addAll(urlsToCache);
            })
    );
});

// Quando o usuário acessar, tente obter o recurso do cache
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request); // Retorna o cache ou faz a requisição
            })
    );
});
