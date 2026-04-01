# MetroGuia.mx — PWA Offline Test Checklist (v7)

Fecha: 2026-04-01
Service Worker: v7-20260401

---

## Pre-requisitos

- [ ] Deploy a Vercel exitoso (o `npm run build && npx serve out`)
- [ ] Service Worker v7 registrado (verificar en DevTools > Application > Service Workers)
- [ ] Cache buckets creados: `mg-static-v7`, `mg-pages-v7`, `mg-fonts-v7`, `mg-images-v7`
- [ ] Navegar TODAS las rutas al menos una vez con conexión para poblar cache

---

## Test 1: iOS Safari (Add to Home Screen)

### Setup
- [ ] Abrir metroguia.mx en Safari
- [ ] Navegar: `/`, `/cdmx/`, `/gdl/`, `/mty/`, `/ruta/calc/`
- [ ] Navegar: `/gdl/mundial-2026/`, `/mty/mundial-2026/`
- [ ] Navegar al menos 1 estación de cada ciudad: `/estacion/[slug]`, `/gdl/estacion/[slug]`, `/mty/estacion/[slug]`
- [ ] Tap "Share" > "Add to Home Screen"
- [ ] Verificar que aparece con nombre "MetroGuia" e icono correcto

### Offline
- [ ] Activar Modo Avión
- [ ] Abrir app desde Home Screen
- [ ] Landing `/` carga correctamente
- [ ] Hub CDMX `/cdmx/` carga
- [ ] Hub GDL `/gdl/` carga
- [ ] Hub MTY `/mty/` carga
- [ ] Trip Planner `/ruta/calc/` carga
- [ ] SearchBar muestra sugerencias (fuzzy search funciona offline)
- [ ] Buscar ruta CDMX (ej: Zócalo → Tacubaya) — BFS resuelve
- [ ] Buscar ruta GDL (ej: si hay datos en grafo) — BFS resuelve
- [ ] Estaciones visitadas previamente cargan desde cache
- [ ] Estaciones NO visitadas muestran fallback (hub de ciudad o /offline/)
- [ ] `/gdl/mundial-2026/` carga offline
- [ ] `/mty/mundial-2026/` carga offline

### Resultado: PASS / FAIL
Notas: ___

---

## Test 2: Android Chrome (Install PWA)

### Setup
- [ ] Abrir metroguia.mx en Chrome
- [ ] Navegar las mismas rutas del Test 1 para poblar cache
- [ ] Cuando aparezca el banner "Install", aceptar (o Menu > "Install app")
- [ ] Verificar splash screen con colores correctos (bg: #0A0A0F, theme: #F5A623)
- [ ] Verificar shortcuts en long-press del icono: Buscar ruta, CDMX, GDL, MTY, FIFA

### Offline
- [ ] Activar Modo Avión
- [ ] Abrir app desde launcher
- [ ] Repetir TODAS las verificaciones de la sección "Offline" del Test 1
- [ ] Verificar que imágenes cacheadas (logo, og-image) aparecen offline
- [ ] Verificar que fonts cargan offline (Inter variable)

### Resultado: PASS / FAIL
Notas: ___

---

## Test 3: Desktop Chrome (DevTools Offline)

### Setup
- [ ] Abrir metroguia.mx
- [ ] DevTools > Application > Service Workers → verificar v7-20260401 activo
- [ ] DevTools > Application > Cache Storage → verificar 4 buckets v7
- [ ] Navegar todas las rutas core para poblar cache

### Offline (vía DevTools)
- [ ] DevTools > Network > check "Offline"
- [ ] Navegar cada ruta y verificar:

| Ruta | Esperado | OK? |
|------|----------|-----|
| `/` | Landing completa | [ ] |
| `/cdmx/` | Hub CDMX | [ ] |
| `/gdl/` | Hub GDL | [ ] |
| `/mty/` | Hub MTY | [ ] |
| `/lineas/` | Índice líneas | [ ] |
| `/mundial-2026/` | Hub Mundial | [ ] |
| `/ruta/calc/` | Trip planner | [ ] |
| `/gdl/mundial-2026/` | Mundial GDL | [ ] |
| `/mty/mundial-2026/` | Mundial MTY | [ ] |
| `/gdl/macrobus/` | Macrobús hub | [ ] |
| `/mty/ecovia/` | Ecovía hub | [ ] |
| `/estacion/[visitada]` | Desde cache | [ ] |
| `/gdl/estacion/[visitada]` | Desde cache | [ ] |
| `/mty/estacion/[visitada]` | Desde cache | [ ] |
| `/estacion/[no-visitada]` | Fallback /offline/ | [ ] |
| `/gdl/estacion/[no-visitada]` | Fallback /gdl/ | [ ] |
| `/mty/estacion/[no-visitada]` | Fallback /mty/ | [ ] |

### Trip Planner Offline
- [ ] Abrir `/ruta/calc/` offline
- [ ] SearchBar renderiza
- [ ] Escribir nombre de estación → autocomplete funciona
- [ ] Seleccionar origen y destino CDMX → BFS calcula ruta
- [ ] Verificar que RouteResult muestra pasos, tiempo, transbordos, costo
- [ ] Intentar ruta GDL (si grafo GDL tiene datos)
- [ ] Intentar ruta MTY (si grafo MTY tiene datos)

### Cache Validation
- [ ] DevTools > Application > Cache Storage > mg-pages-v7
  - Verificar que contiene las ~26 URLs precacheadas
- [ ] mg-static-v7 contiene chunks JS/CSS de `_next/static/`
- [ ] mg-fonts-v7 contiene Inter font files
- [ ] mg-images-v7 contiene logo.png, og-image.png

### Resultado: PASS / FAIL
Notas: ___

---

## Test 4: Service Worker Update Flow

- [ ] Hacer un cambio menor en sw.js (ej: bump version string)
- [ ] Deploy
- [ ] Abrir sitio en pestaña existente
- [ ] Verificar en DevTools que SW muestra "waiting to activate"
- [ ] Cerrar y reabrir pestaña → nuevo SW activo
- [ ] Cache Storage muestra buckets v7 (v6 eliminados)
- [ ] Todas las rutas siguen funcionando

---

## Criterios de PASS global

- Todos los hubs de ciudad (CDMX, GDL, MTY) cargan offline
- Trip planner BFS funciona offline (al menos CDMX)
- SearchBar fuzzy search funciona offline
- Fallback routing es city-aware (GDL rutas caen a /gdl/, no a /offline/)
- PWA se instala correctamente en iOS y Android
- Shortcuts de manifest aparecen (incluyendo GDL y MTY)
