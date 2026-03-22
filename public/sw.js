const CACHE_NAME = 'metroguia-v4-20260322';
const STATIC_ASSETS = [
  '/',
  '/cdmx/',
  '/cdmx/estacion/',
  '/gdl/',
  '/gdl/estacion/',
  '/gdl/linea/',
  '/mty/',
  '/mty/estacion/',
  '/mty/linea/',
  '/puebla/',
  '/merida/',
  '/leon/',
  '/chihuahua/',
  '/tijuana/',
  '/toluca/',
  '/queretaro/',
  '/tren-maya/',
  '/hospedaje/',
  '/mundial-2026/',
  '/lineas/',
  '/rutas/',
  '/offline/',
  '/logo.png',
  '/og-image.png',
  '/manifest.json'
];

// Install event: pre-cache essential assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate event: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event: implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Cache-First strategy for static assets (JS, CSS, images, fonts)
  if (
    request.destination === 'script' ||
    request.destination === 'style' ||
    request.destination === 'image' ||
    request.destination === 'font'
  ) {
    event.respondWith(
      caches.match(request).then((response) => {
        if (response) {
          return response;
        }
        return fetch(request).then((response) => {
          // Only cache successful responses
          if (!response || response.status !== 200) {
            return response;
          }
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
          return response;
        });
      })
    );
    return;
  }

  // Network-First strategy for HTML pages (fall back to cache if offline)
  if (request.destination === 'document' || request.destination === '') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache successful responses
          if (response && response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // Fall back to cache when offline
          return caches.match(request).then((response) => {
            if (response) {
              return response;
            }
            // Return offline fallback page if URL is not cached
            const url = new URL(request.url);
            // Serve offline page for city pages and estacion pages
            if (url.pathname.includes('/estacion/') || 
                url.pathname.includes('/ruta/') ||
                url.pathname.includes('/linea/')) {
              return caches.match('/offline/').then((offlineResponse) => {
                return offlineResponse || caches.match('/');
              });
            }
            // Return home page as final fallback
            return caches.match('/');
          });
        })
    );
    return;
  }

  // Default: Network-First for other requests
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(request).then((response) => {
          // Return cached response if available, otherwise offline page
          return response || caches.match('/offline/').then((offlineResponse) => {
            return offlineResponse || caches.match('/');
          });
        });
      })
  );
});

// Handle messages from clients
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

/*
 * Graph Data Caching
 * The grafo.js file and related graph data are automatically cached when a user
 * first accesses the trip planner feature. This enables offline route calculation
 * after the initial download. Subsequent visits will serve the cached data,
 * allowing the trip planner to work seamlessly without network connectivity.
 */
