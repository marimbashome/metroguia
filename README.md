# MetroGuia.mx

Plataforma de movilidad urbana para turistas en México. Trip planner con pathfinding BFS client-side, PWA offline-first, y guía completa de transporte público para el Mundial FIFA 2026.

**Live:** [metroguia.mx](https://metroguia.mx)

## Stack

- **Framework:** Next.js 14, App Router, ISR (Incremental Static Regeneration)
- **Deploy:** Vercel Hobby (gratis)
- **Pathfinding:** BFS client-side sobre grafo estático (839 nodos)
- **Search:** Fuzzy search client-side con accent-stripping
- **PWA:** Service worker v6 + manifest para uso offline
- **Analytics:** GA4 + Vercel Analytics
- **SEO:** 54,600+ URLs en sitemap, Schema.org en todas las secciones

## Cobertura

- **16 ciudades** — CDMX, GDL, MTY, Puebla, Mérida, León, Querétaro, Chihuahua, Tijuana, Toluca, Tren Maya, Oaxaca, Morelia, Veracruz, Campeche, Villahermosa
- **786+ estaciones** en 77 líneas de transporte
- **14 sistemas** — Metro, Metrobús, Tren Ligero, Cablebús, Mexicable, Trolebús, Tren Suburbano, Mi Tren, Macrobús, Metrorrey, Ecovía, RUTA BRT, Chepe Express, Tren Maya
- **24 aeropuertos**, 16 terminales de autobús, 6 rutas de ferry, 9 cruces fronterizos
- **8 programas SECTUR** — 177 Pueblos Mágicos, 188 zonas arqueológicas, playas, barrios mágicos, rutas gastronómicas, naturaleza, ciudades patrimonio, destinos prioritarios (508+ destinos turísticos)
- **Mundial FIFA 2026** — Guías de transporte a Estadio Azteca (CDMX), Akron (GDL), BBVA (MTY)

## Estructura

```
app/           → Páginas Next.js (App Router)
  components/  → SearchBar, RouteResult, NavBar, FooterBar, PWAInstall
  cdmx/        → Hub + estaciones + líneas + sistemas auxiliares
  gdl/         → Hub + estaciones + líneas + macrobús + mundial
  mty/         → Hub + estaciones + líneas + ecovía + mundial
  [ciudad]/    → 13 ciudades adicionales
  turismo/     → 8 programas SECTUR con detail pages
  aeropuertos/ → 24 aeropuertos con guías de transporte
  terminales/  → 16 terminales de autobús
  ferries/     → 6 rutas de ferry
  frontera/    → 9 cruces fronterizos
  mundial-2026/→ Hub FIFA + partidos + guías por sede
data/          → Datos estáticos (JS/JSON, zero-cost)
lib/           → Pathfinder BFS, search fuzzy, utilidades
public/        → PWA manifest, service worker, sitemap, OG image
translations/  → 7 idiomas (es, en, pt, fr, de, ja, ko)
```

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # ~13,000 páginas estáticas
```

## Deploy

Push a `main` → GitHub Actions → Vercel auto-deploy.

```bash
git push origin main
```

## Licencia

Proyecto privado — Marimbas Home.
