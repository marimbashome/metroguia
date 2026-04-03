# MetroGuia.mx — PWA Offline Test Checklist

> Service Worker: v8-20260403
> Last updated: 2026-04-03

---

## Prerequisites

- Deploy to Vercel (or run `npm run build && npx serve out`)
- Open in target browser
- Verify SW is registered: DevTools → Application → Service Workers → `sw.js` active

---

## Test 1: iOS Safari (Add to Home Screen)

1. Open `metroguia.mx` in Safari
2. Tap Share → "Add to Home Screen"
3. Verify: app icon shows (square cropped logo, not generic)
4. Open the installed app → verify it loads in standalone mode (no Safari UI)
5. Enable Airplane Mode
6. Navigate to:
   - [ ] `/` — landing loads, SearchBar renders
   - [ ] `/cdmx/` — CDMX hub loads
   - [ ] `/nyc/` — NYC hub loads
   - [ ] `/chicago/` — Chicago hub loads
   - [ ] `/toronto/` — Toronto hub loads
   - [ ] `/mundial-2026/` — FIFA hub loads
7. Test trip planner:
   - [ ] Type "Zócalo" in SearchBar → autocomplete shows results
   - [ ] Select origin + destination → route resolves (grafo loaded from cache)
8. Navigate to a non-cached station page:
   - [ ] Verify fallback: should show city hub or `/offline/` page (not browser error)

---

## Test 2: Android Chrome (Install PWA)

1. Open `metroguia.mx` in Chrome
2. Tap menu → "Install app" (or accept install banner)
3. Verify: app icon shows correctly on home screen
4. Open installed app → verify standalone mode
5. Enable Airplane Mode
6. Navigate to:
   - [ ] `/` — landing + SearchBar
   - [ ] `/los-angeles/` — LA hub
   - [ ] `/washington-dc/` — DC hub
   - [ ] `/vancouver/` — Vancouver hub
   - [ ] `/ruta/calc/` — trip planner page
   - [ ] `/explorar/` — explore page
7. Test trip planner offline:
   - [ ] Search "Times Square" → results appear
   - [ ] Calculate route NYC → should work from cached grafo
8. Test city-aware fallback:
   - [ ] Navigate to `/chicago/station/some-uncached-station`
   - [ ] Should fallback to `/chicago/` hub (not generic offline page)

---

## Test 3: Desktop Chrome (DevTools Offline)

1. Open `metroguia.mx` in Chrome
2. DevTools → Application → Service Workers → verify `sw.js` registered
3. Check "Offline" checkbox in Network tab (or Application → Service Workers → Offline)
4. Navigate to:
   - [ ] `/` — landing loads from cache
   - [ ] `/cdmx/` — hub loads
   - [ ] `/nyc/` — hub loads
   - [ ] `/lineas/` — lines index loads
   - [ ] `/hospedaje/` — lodging page loads
   - [ ] `/mundial-2026/` — FIFA hub loads
5. Test SearchBar:
   - [ ] Type query → autocomplete works (search.js cached)
   - [ ] Select route → pathfinder resolves (grafo.js cached)
6. Verify Application → Cache Storage:
   - [ ] `mg-pages-v8` exists with precached URLs
   - [ ] `mg-static-v8` exists with JS/CSS bundles
   - [ ] `mg-fonts-v8` exists (after first load with network)
   - [ ] `mg-images-v8` exists with logo/og-image

---

## Test 4: Cache Validation

Using DevTools → Application → Cache Storage:

1. [ ] `mg-pages-v8` contains all PRECACHE_URLS (68+ entries)
2. [ ] Grafo data is included in static cache (bundled in JS chunks)
3. [ ] No stale `mg-*-v7` caches remain after SW update
4. [ ] Font cache has ≤30 entries (LRU trimming works)
5. [ ] Image cache has ≤100 entries (LRU trimming works)

---

## Test 5: SW Update Flow

1. Clear all caches and unregister SW
2. Load site → SW v8 installs
3. Verify precaching completes (check console for `[SW] Precaching 68 URLs`)
4. [ ] No errors in console during install
5. [ ] `skipWaiting()` activates immediately
6. [ ] Old non-mg caches are cleaned up on activate

---

## What to verify at each step

| Check | Expected |
|-------|----------|
| SearchBar renders | Yes — component cached in static bundle |
| Autocomplete works | Yes — search.js + estaciones data in bundle |
| Pathfinder resolves | Yes — grafo.js in bundle, BFS runs client-side |
| City hub pages load | Yes — all precached |
| Station/line pages load | Only if previously visited (dynamic cache) |
| Offline fallback works | City hub → /offline/ → / (cascade) |
| Icons display correctly | Square 192x192 and 512x512 |
| Standalone mode | No browser chrome visible |

---

## Known limitations

- Station/line pages for individual stations are NOT precached (too many — 25K+). They cache on first visit via network-first strategy.
- The grafo and search data are bundled into Next.js JS chunks, so they cache as part of static assets.
- Navigation preload is enabled where supported (Chrome) for faster network-first responses.
- Font cache uses stale-while-revalidate, so first offline load may have fallback fonts.
