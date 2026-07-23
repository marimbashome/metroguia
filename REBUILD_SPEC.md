# REBUILD_SPEC — MetroGuia v2 "Solo Transporte" (rama rebuild-v2)

> Contrato para todos los agentes constructores. Plan padre: `Planes/MetroGuia_Rebuild_Transporte_2026-07-22.md` (workspace MarimbasHome). NO commitear — los commits los hace el orquestador.

## Objetivo
Sitio estático (Next 14, `output: 'export'`) de rutas/planificador de transporte público mexicano. SOLO español. SIN: AdSense, Mundial, hospedaje, turismo, ciudades internacionales, i18n multi-idioma.

## Lo intocable (así se preservan ranking + activo)
1. **`keep-urls-gsc-2026-07-22.txt` (raíz del repo): las 909 URLs deben existir EXACTAS en el build final.** Es el guardrail `check:keep-urls`. Datos GSC: /estacion = 59% de impresiones; /ruta = 56% de los clics (CTR 3.3%) — las páginas de ruta son el motor de clics.
2. `lib/pathfinder.js` + `lib/pathfinder-core.js`: portar SIN cambios de lógica (solo recortar GRAFO_PATHS a las 16 ciudades MX si referencia otras).
3. `data/` MX: fuente de verdad. NO inventar datos. Si un dato falta → "Por confirmarse", nunca fabricar.
4. Dominio/GSC/GA4 (`G-7YQMP6V81D`) + Vercel Analytics + Sentry: se conservan (medición = razón de ser del experimento).
5. `public/calendar/*.ics` (Diablos): NO tocar — hay calendarios suscritos externos. La página que los promociona NO se reconstruye (solo el archivo ICS sobrevive).

## Rutas a implementar (derivadas de keep-urls; el guardrail es el juez)
- `/` home: planner al centro (origen/destino + chips de rutas populares), sección ciudades MX, cómo funciona, FAQ (usa `data/faqs.js` + FAQSchema).
- `/estacion/[slug]/` (92 en keep-list, CDMX): datos densos — líneas/correspondencias, accesos, servicios, estaciones vecinas, rutas populares desde ahí. Estación con pocos datos: página corta honesta, sin relleno.
- `/linea/[id]/` + `/lineas/`: por línea CDMX (usa `data/lineas-detalle.js`), lista de estaciones, correspondencias.
- `/ruta/[slug]/` (~590+, patrón `origen-a-destino`): pasos REALES del pathfinder (líneas, transbordos, # estaciones, costo). CDMX: tiempos reales. Fuente de slugs: `data/built-routes.js` + los de keep-urls.
- `/rutas/` hub + `/rutas/[o]_[d]/` (patrón legacy con guión bajo, 13 en keep-list): mantener esas URLs exactas (pueden renderizar igual que /ruta con canonical a sí mismas).
- `/cdmx/` hub + `/cdmx/[sistema]/` (cablebus, trolebus, metrobus…) + `/cdmx/trolebus/linea/[id]/` etc. — según keep-urls.
- `/[ciudad]/` hubs (15 ciudades MX restantes) + `/[ciudad]/estacion/[slug]/`, `/[ciudad]/linea/[id]/`, `/[ciudad]/ruta/[slug]/`, `/gdl/macrobus/estacion/[slug]/` etc. — según keep-urls y los data/ de cada ciudad.
- `/aeropuertos/` (+6 subpáginas keep) y `/terminales/` (+3): desde `data/aeropuertos.js` / `data/terminales.js`.
- `/about/`, `/contact/`, `/privacy-policy/`, `/fuentes/` (nueva: fuentes oficiales + fecha de verificación de datos por ciudad).
- 404 propia. `robots.js` + `app/sitemap.js` (solo URLs MX del build).

## Regla de honestidad de tiempos (CRÍTICA)
- CDMX: tiempos reales del grafo → se muestran totales ("~14 min").
- **GDL (80% placeholder) y MTY (92%)**: NUNCA mostrar total en minutos derivado del grafo. Mostrar: # estaciones, # transbordos, y "tiempo estimado no disponible" o rango genérico honesto. Las 13 ciudades chicas tienen tiempos con variación real → pueden mostrar totales con la etiqueta "aprox.".
- Flag por ciudad en config: `tiemposReales: true|false`.

## Diseño (nuevo, desde cero)
- Identidad: heredar el carácter editorial (verde profundo + ámbar + crema, display serif) pero limpio y ligero. SIN fuentes de CDN externo (system stack o fuente self-hosted en `public/fonts` si ya existe). SIN frameworks CSS.
- `app/globals.css` con custom properties (tokens: colores, espaciado, radius, tipografía). Componentes con clases, no inline styles masivos.
- Mobile-first, rápido: LCP como prioridad, imágenes mínimas, cero JS innecesario en páginas estáticas (el planner es la única isla client pesada).
- Accesible: landmarks, focus visible, contraste AA.

## Componentes compartidos (los crea SOLO el agente Foundation; los demás los consumen)
`app/components/`: NavBar (ES, links: Ciudades ▾, Líneas, Rutas, Aeropuertos), Footer (fuentes, legal, sello "Datos verificados: [fecha por ciudad]"), Planner (port de la lógica de `_legacy-app/components/BuscadorRutas*` — reusar lógica de autocomplete/grafo, UI nueva), RouteSteps (render de pasos de ruta, respeta regla de tiempos), StationCard, LineaBadge (usa `lib/lineLabels.js`), Schema helpers (FAQSchema, BreadcrumbSchema — portar de `_legacy-app/components/`, son correctos).

## Referencia
`_legacy-app/` = app anterior COMPLETA, solo para consultar lógica funcionando (planner, generateStaticParams, schema). PROHIBIDO importar desde `_legacy-app` en código nuevo. Se borra antes del merge a main.

## Guardrails (package.json prebuild)
- `check:keep-urls` — cada URL de keep-urls-gsc-2026-07-22.txt existe en `out/` (post-build script; correr como `postbuild` o validar generateStaticParams).
- `check:no-placeholder-pages` — ninguna página renderiza sin datos (grep del out/ por marcadores de vacío).
- `check:sitemap-mx-only` — sitemap sin URLs fuera de los patrones MX.
- Los 3 scripts en `scripts/checks/`, corren en CI local (`npm run build` los dispara).

## SEO
- Metadata por página: title únicos (sin "FIFA 2026"), description con datos concretos (no plantilla idéntica), canonical, og básico.
- Schema.org SOLO veraz: TransitStation/Place en estaciones (portar de `lib/station-schema.js`), BreadcrumbList, FAQPage en home.
- `metadataBase: https://metroguia.mx`.

## No romper
- `next.config.js`: conservar `output: 'export'` + config Sentry. `vercel.json`: conservar security headers.
- `package.json`: mismas deps (no agregar librerías nuevas sin necesidad real).
- PWA: `public/manifest.json` actualizado (nombre/colores nuevos) + SW mínimo de precache estático o SIN SW si complica — offline es nice-to-have del planner, no bloqueante del preview.
