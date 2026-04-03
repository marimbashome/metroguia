/**
 * MetroGuia.mx Service Worker v8
 * Version: v8-20260403
 *
 * Architecture:
 * - Separate cache buckets for static assets, pages, fonts, and images
 * - Precaching of core routes and assets (including GDL/MTY sub-hubs)
 * - Multi-city dynamic route detection (bare + city-prefixed paths)
 * - City-aware offline fallback (falls back to city hub when possible)
 * - Multiple caching strategies: cache-first, network-first, stale-while-revalidate
 * - LRU eviction with trimCache utility
 * - Message handlers for cache control and version management
 */

const SW_VERSION = 'v8-20260403';

// Cache bucket names
const CACHE_STATIC = 'mg-static-v8';
const CACHE_PAGES = 'mg-pages-v8';
const CACHE_FONTS = 'mg-fonts-v8';
const CACHE_IMAGES = 'mg-images-v8';

const ALL_CACHES = [CACHE_STATIC, CACHE_PAGES, CACHE_FONTS, CACHE_IMAGES];

/**
 * URLs to precache during install
 */
const PRECACHE_URLS = [
  '/',
  // Mexico city hubs
  '/cdmx/',
  '/gdl/',
  '/mty/',
  '/puebla/',
  '/merida/',
  '/leon/',
  '/chihuahua/',
  '/tijuana/',
  '/toluca/',
  '/queretaro/',
  '/tren-maya/',
  '/oaxaca/',
  '/morelia/',
  '/veracruz/',
  '/campeche/',
  '/villahermosa/',
  // US — FIFA 2026 host cities (highest priority)
  '/nyc/',
  '/los-angeles/',
  '/houston/',
  '/dallas/',
  '/san-francisco/',
  '/seattle/',
  '/philadelphia/',
  '/boston/',
  '/miami/',
  '/atlanta/',
  '/kansas-city/',
  // US — Top metro systems
  '/chicago/',
  '/washington-dc/',
  '/denver/',
  '/portland/',
  '/san-diego/',
  '/minneapolis/',
  '/phoenix/',
  '/charlotte/',
  '/pittsburgh/',
  '/baltimore/',
  '/st-louis/',
  '/detroit/',
  '/cleveland/',
  '/las-vegas/',
  '/san-jose/',
  '/new-orleans/',
  '/sacramento/',
  '/salt-lake-city/',
  '/buffalo/',
  '/honolulu/',
  '/norfolk/',
  '/newark/',
  '/austin/',
  '/orlando/',
  '/tampa/',
  '/san-juan/',
  '/jacksonville/',
  '/cincinnati/',
  '/el-paso/',
  '/tucson/',
  '/oklahoma-city/',
  '/nashville/',
  '/milwaukee/',
  // Canada
  '/toronto/',
  '/vancouver/',
  '/montreal/',
  '/calgary/',
  '/edmonton/',
  '/ottawa/',
  '/mississauga/',
  '/kitchener-waterloo/',
  // Core pages
  '/lineas/',
  '/mundial-2026/',
  '/hospedaje/',
  '/offline/',
  '/ruta/calc/',
  '/explorar/',
  // Sub-hubs
  '/gdl/mundial-2026/',
  '/gdl/macrobus/',
  '/mty/mundial-2026/',
  '/mty/ecovia/',
  // Assets
  '/manifest.json',
  '/logo.png',
  '/og-image.png'
];

/**
 * Multi-city route prefixes for dynamic route detection
 * Order matters: check city-prefixed routes before bare routes
 */
const CITY_PREFIXES = [
  // Mexico
  'cdmx', 'gdl', 'mty', 'puebla', 'merida', 'leon', 'chihuahua', 'tijuana', 'toluca', 'queretaro', 'tren-maya',
  'oaxaca', 'morelia', 'veracruz', 'campeche', 'villahermosa',
  // US — FIFA 2026 hosts
  'nyc', 'los-angeles', 'houston', 'dallas', 'san-francisco', 'seattle', 'philadelphia', 'boston', 'miami', 'atlanta', 'kansas-city',
  // US — Major metros
  'chicago', 'washington-dc', 'denver', 'portland', 'san-diego', 'minneapolis', 'phoenix', 'charlotte',
  'pittsburgh', 'baltimore', 'st-louis', 'detroit', 'cleveland', 'las-vegas', 'san-jose', 'new-orleans',
  'sacramento', 'salt-lake-city', 'buffalo', 'honolulu', 'norfolk', 'newark', 'austin', 'orlando',
  'tampa', 'san-juan', 'jacksonville', 'cincinnati', 'el-paso', 'tucson', 'oklahoma-city', 'nashville', 'milwaukee',
  // Canada
  'toronto', 'vancouver', 'montreal', 'calgary', 'edmonton', 'ottawa', 'mississauga', 'kitchener-waterloo'
];

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * LRU Cache Trimmer: Delete oldest entries when cache exceeds maxItems
 * @param {string} cacheName - Name of cache to trim
 * @param {number} maxItems - Maximum number of entries to keep
 */
async function trimCache(cacheName, maxItems) {
  try {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();
    
    if (keys.length > maxItems) {
      // Delete oldest entries (first items in the array)
      const itemsToDelete = keys.length - maxItems;
      for (let i = 0; i < itemsToDelete; i++) {
        await cache.delete(keys[i]);
      }
    }
  } catch (err) {
    console.error(`[SW] Error trimming cache ${cacheName}:`, err);
  }
}

/**
 * Check if URL matches a dynamic route pattern
 * Handles both bare routes (/estacion/) and city-prefixed routes (/gdl/estacion/)
 * @param {string} url - URL to check
 * @returns {{type: string, city: string|null}|null} - Route info or null
 */
function getDynamicRouteType(url) {
  const pathname = new URL(url).pathname;
  const dynamicSegments = ['estacion', 'ruta', 'linea', 'station', 'line'];

  // Check city-prefixed routes first: /gdl/estacion/..., /mty/ruta/..., etc.
  for (const city of CITY_PREFIXES) {
    for (const segment of dynamicSegments) {
      if (pathname.startsWith(`/${city}/${segment}/`)) {
        return { type: segment, city };
      }
    }
  }

  // Check bare routes: /estacion/..., /ruta/..., /linea/...
  for (const segment of dynamicSegments) {
    if (pathname.startsWith(`/${segment}/`)) {
      return { type: segment, city: null };
    }
  }

  return null;
}

/**
 * Get appropriate offline fallback for a route
 * Falls back to the city hub if available, then /offline/, then /
 * @param {string} url - Original URL
 * @returns {string} - Fallback URL
 */
function getOfflineFallback(url) {
  const routeInfo = getDynamicRouteType(url);
  if (routeInfo) {
    // Try city hub first (e.g. /gdl/) so user stays in city context
    if (routeInfo.city) {
      return `/${routeInfo.city}/`;
    }
    return '/offline/';
  }
  // Check if URL is under a city path even if not a dynamic route
  const pathname = new URL(url).pathname;
  for (const city of CITY_PREFIXES) {
    if (pathname.startsWith(`/${city}/`)) {
      return `/${city}/`;
    }
  }
  return '/offline/';
}

/**
 * Check if URL is a font resource
 * @param {string} url - URL to check
 * @returns {boolean}
 */
function isFontUrl(url) {
  return /googleapis|gstatic|jsdelivr/.test(url);
}

/**
 * Check if URL is an image resource
 * @param {string} url - URL to check
 * @returns {boolean}
 */
function isImageUrl(url) {
  return /\.(jpg|jpeg|png|gif|webp|svg|ico)(\?|$)/i.test(url);
}

/**
 * Check if URL is a static asset (JS, CSS)
 * @param {string} url - URL to check
 * @returns {boolean}
 */
function isStaticAsset(url) {
  return /\.(js|css)(\?|$)/i.test(url);
}

/**
 * Check if cache entry is expired (older than maxAge seconds)
 * @param {Response} response - Response object
 * @param {number} maxAge - Maximum age in seconds
 * @returns {boolean}
 */
function isCacheExpired(response, maxAge) {
  const dateHeader = response.headers.get('date');
  if (!dateHeader) return false;
  
  const cacheDate = new Date(dateHeader).getTime();
  const now = Date.now();
  return (now - cacheDate) > (maxAge * 1000);
}

// ============================================================================
// INSTALL EVENT
// ============================================================================

self.addEventListener('install', (event) => {
  console.log(`[SW] Installing ${SW_VERSION}`);
  
  event.waitUntil(
    caches.open(CACHE_PAGES).then((cache) => {
      console.log(`[SW] Precaching ${PRECACHE_URLS.length} URLs`);
      return cache.addAll(PRECACHE_URLS).catch((err) => {
        console.warn('[SW] Precache error (some URLs may not be available):', err);
      });
    }).then(() => {
      console.log(`[SW] ${SW_VERSION} install complete`);
      return self.skipWaiting();
    })
  );
});

// ============================================================================
// ACTIVATE EVENT
// ============================================================================

self.addEventListener('activate', (event) => {
  console.log(`[SW] Activating ${SW_VERSION}`);
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Delete caches that don't start with 'mg-' or aren't current version (v8)
          if (!cacheName.startsWith('mg-') || !ALL_CACHES.includes(cacheName)) {
            console.log(`[SW] Deleting old cache: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log(`[SW] ${SW_VERSION} activate complete`);
      return self.clients.claim();
    })
  );
});

// ============================================================================
// FETCH EVENT - Routing and Caching Strategies
// ============================================================================

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = request.url;
  const isNavigate = request.mode === 'navigate';
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Route based on request type
  if (isNavigate) {
    // HTML/Document - Network-first with cache fallback
    event.respondWith(networkFirstStrategy(request, CACHE_PAGES));
  } else if (isFontUrl(url)) {
    // Fonts - Stale-while-revalidate
    event.respondWith(staleWhileRevalidateStrategy(request, CACHE_FONTS, 30));
  } else if (isImageUrl(url)) {
    // Images - Cache-first with network fallback
    event.respondWith(cacheFirstStrategy(request, CACHE_IMAGES, 30 * 24 * 60 * 60)); // 30 days
  } else if (isStaticAsset(url)) {
    // Static assets (JS, CSS) - Cache-first with network fallback
    event.respondWith(cacheFirstStrategy(request, CACHE_STATIC));
  } else {
    // Default - Network-first with cache fallback
    event.respondWith(networkFirstStrategy(request, CACHE_PAGES));
  }
});

/**
 * Cache-first strategy: Try cache first, fall back to network
 * On successful network fetch, cache the response
 * @param {Request} request
 * @param {string} cacheName
 * @param {number} maxAge - Optional max age in seconds for expiration check
 */
function cacheFirstStrategy(request, cacheName, maxAge) {
  return caches.match(request).then((cachedResponse) => {
    // If in cache and not expired, return cached version
    if (cachedResponse) {
      if (maxAge === undefined || !isCacheExpired(cachedResponse, maxAge)) {
        return cachedResponse;
      }
    }
    
    // Not in cache or expired, fetch from network
    return fetch(request)
      .then((networkResponse) => {
        // Only cache successful responses
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(cacheName).then((cache) => {
            cache.put(request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Network failed, return cached version if available
        return cachedResponse || new Response('Network error', { status: 503 });
      });
  });
}

/**
 * Network-first strategy: Try network first, fall back to cache
 * On successful network fetch, cache the response
 * @param {Request} request
 * @param {string} cacheName
 */
function networkFirstStrategy(request, cacheName) {
  return fetch(request)
    .then((networkResponse) => {
      // Only cache successful responses
      if (networkResponse && networkResponse.status === 200) {
        const responseToCache = networkResponse.clone();
        caches.open(cacheName).then((cache) => {
          cache.put(request, responseToCache);
        });
      }
      return networkResponse;
    })
    .catch(() => {
      // Network failed, try cache
      return caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        
        // Nothing in cache, use offline fallback
        const fallbackUrl = getOfflineFallback(request.url);
        return caches.match(fallbackUrl) || new Response('Offline', { status: 503 });
      });
    });
}

/**
 * Stale-while-revalidate strategy: Return cached version immediately,
 * update cache in background
 * @param {Request} request
 * @param {string} cacheName
 * @param {number} maxItems - Max items to keep in cache (LRU)
 */
function staleWhileRevalidateStrategy(request, cacheName, maxItems) {
  return caches.match(request).then((cachedResponse) => {
    // Return cached response immediately
    const fetchPromise = fetch(request).then((networkResponse) => {
      if (networkResponse && networkResponse.status === 200) {
        const responseToCache = networkResponse.clone();
        caches.open(cacheName).then((cache) => {
          cache.put(request, responseToCache);
          // Trim cache if needed
          if (maxItems) {
            trimCache(cacheName, maxItems);
          }
        });
      }
      return networkResponse;
    });
    
    // Return cached response immediately, or network response if not cached
    return cachedResponse || fetchPromise;
  });
}

// ============================================================================
// MESSAGE EVENT - Communication with clients
// ============================================================================

self.addEventListener('message', (event) => {
  const { type, data } = event.data;
  
  switch (type) {
    case 'SKIP_WAITING':
      console.log('[SW] Received SKIP_WAITING message');
      self.skipWaiting();
      break;
      
    case 'GET_VERSION':
      console.log('[SW] Received GET_VERSION message');
      event.ports[0].postMessage({
        version: SW_VERSION,
        caches: ALL_CACHES
      });
      break;
      
    case 'TRIM_CACHES':
      console.log('[SW] Received TRIM_CACHES message');
      Promise.all([
        trimCache(CACHE_FONTS, 30),
        trimCache(CACHE_IMAGES, 100)
      ]).then(() => {
        event.ports[0].postMessage({ success: true });
      });
      break;
      
    case 'CACHE_URLS':
      if (Array.isArray(data.urls)) {
        console.log(`[SW] Received CACHE_URLS with ${data.urls.length} URLs`);
        caches.open(CACHE_PAGES).then((cache) => {
          Promise.all(
            data.urls.map((url) => {
              return cache.add(url).catch((err) => {
                console.warn(`[SW] Failed to cache ${url}:`, err);
              });
            })
          ).then(() => {
            event.ports[0].postMessage({ success: true, cached: data.urls.length });
          });
        });
      }
      break;
      
    default:
      console.log(`[SW] Unknown message type: ${type}`);
  }
});

// ============================================================================
// NAVIGATION PRELOAD (if supported)
// ============================================================================

// Enable navigation preload in activate event
self.addEventListener('activate', (event) => {
  if (self.registration.navigationPreload) {
    console.log('[SW] Enabling navigation preload');
    self.registration.navigationPreload.enable();
  }
});

console.log(`[SW] Service Worker ${SW_VERSION} loaded and ready`);
