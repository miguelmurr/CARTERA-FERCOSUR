// Motor de fondo para la instalación de Cartera Fercosur PWA
const CACHE_NAME = 'fercosur-v1';

// Activación e instalación inicial en el dispositivo móvil
self.addEventListener('install', function(event) {
    self.skipWaiting();
    console.log('PWA Fercosur: Motor instalado en el dispositivo.');
});

self.addEventListener('activate', function(event) {
    event.waitUntil(clients.claim());
    console.log('PWA Fercosur: Motor listo y operando en segundo plano.');
});

// Oyente de peticiones (Requisito obligatorio de Google y Apple para permitir la instalación)
self.addEventListener('fetch', function(event) {
    // Permite el flujo libre de internet para que Firebase y los archivos de Excel operen sin restricciones
    event.respondWith(
        fetch(event.request).catch(function() {
            return caches.match(event.request);
        })
    );
});