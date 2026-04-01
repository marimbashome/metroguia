# MetroGuia.mx SEO & Performance Audit Report
**Date:** April 1, 2026
**Scope:** Full SEO, metadata, performance, PWA, and internal linking audit
**Target:** Lighthouse 95+, complete sitemap, all metadata present before FIFA Jun 11

---

## Fixes Applied This Session

### 1. Sitemap LASTMOD dates updated
- All 9 sitemap segments had dates from **Feb 2025** — over 14 months stale
- Updated to **April 2026** across all segments (core, cities, turismo, transport, mundial, i18n, routes)

### 2. Layout.jsx SEO hardening
- **Removed duplicate meta description** (was in both `metadata` export AND manual `<head>` tag)
- **Added Organization JSON-LD schema** — Google now gets publisher entity info
- **Enhanced WebSite JSON-LD** — added `inLanguage` array for 7 languages and `publisher` reference
- **Fixed theme-color mismatch** — added dark/light mode variants matching manifest.json (#F5A623 dark, #FFFFFF light)

### 3. Homepage metadata enhanced
- Added **OpenGraph** tags (title, description, image, siteName, locale)
- Added **Twitter card** (summary_large_image)
- Updated title to reflect **16 cities** (was "11 ciudades")
- Updated stats: **800+ estaciones, 80+ líneas**

### 4. CDMX hub page metadata enhanced
- Added **canonical URL**, **OpenGraph**, and **Twitter card**
- Fixed title to emphasize Metrobús (higher search volume than Mexicable)

### 5. Mundial 2026 page metadata enhanced
- Added **canonical URL**, **OpenGraph**, **Twitter card**
- Title now covers all 3 cities, not just CDMX
- **Fixed hardcoded countdown date** (`new Date('2026-03-23')` → `new Date()` for real-time countdown)

### 6. Favicon.ico generated
- Created multi-size ICO (16×16, 32×32, 48×48) from existing logo.png
- Previously missing from public/ directory

---

## Audit Results Summary

### Sitemap (sitemap.js) — PASS ✅
- **9 child sitemaps** properly splitting 54K+ URLs under 50K each
- Covers: core pages, 16 city stations+lines, turismo (8 programs), transport (CDMX aux systems), FIFA 2026 matches, i18n (6 extra languages), and route pages for CDMX/GDL/other cities
- Uses `generateSitemaps()` pattern for Next.js ISR
- Hreflang alternates correctly configured in i18n sitemap

### Robots.js — PASS ✅
- Allows all crawling (`/`)
- Correctly blocks `/api/` and `/_next/`
- Points to `https://metroguia.mx/sitemap.xml`
- Includes `host` directive

### ads.txt — PASS ✅
- `google.com, pub-5779958677522085, DIRECT, f08c47fec0942fa0`
- Matches AdSense account ID

### PWA — PASS ✅
- **manifest.json:** Valid, 4 icon sizes (192/512 any+maskable), 5 shortcuts, categories, screenshots
- **sw.js v7:** Comprehensive multi-strategy caching (network-first for pages, cache-first for assets, SWR for fonts), LRU eviction, multi-city offline fallback, navigation preload
- **Offline page:** `/offline/` exists with city-aware fallback routing

### Performance — PASS ✅ (with notes)
- **Preconnect:** fonts.googleapis.com, fonts.gstatic.com, cdn.jsdelivr.net, GTM, AdSense ✅
- **Font loading:** Inter via preload + stylesheet ✅
- **Images:** unoptimized (static export compatible) — acceptable for zero-cost constraint
- **ISR mode:** Enables 24K+ routes without build timeout
- **Lazy ad loading:** AdBannerLazy component used throughout

---

## Remaining Backlog (Priority Order)

### P0 — Critical (before FIFA Jun 11)

| # | Issue | Impact | Est. Effort |
|---|-------|--------|-------------|
| 1 | **Add OG+Twitter to 120+ pages missing them** | Social sharing shows blank previews for most pages | 3-4 hrs |
| 2 | **Add canonical URLs to 103 pages** | Potential duplicate content penalties | 2-3 hrs |
| 3 | **Add BreadcrumbList JSON-LD to all city/station pages** | Rich results in Google | 2 hrs |
| 4 | **Integrate NearbyStations component into GDL/Tren Maya stations** | Internal link equity for ~200 pages | 1 hr |
| 5 | **Add "Popular routes from here" to station pages** | Internal linking + user engagement | 2 hrs |

### P1 — Important

| # | Issue | Impact | Est. Effort |
|---|-------|--------|-------------|
| 6 | Add FAQPage JSON-LD to city hub pages | Rich FAQ snippets in search | 2 hrs |
| 7 | Add zone links to station pages | Cross-linking for CDMX stations → 8 zones | 1 hr |
| 8 | Add cross-line transfer links on line pages | Help users discover connecting lines | 2 hrs |
| 9 | Add city zone navigation to city hub pages | Zone discovery for CDMX hub | 1 hr |
| 10 | Update [lang] page metadata with proper OG+canonical | i18n pages lack social sharing metadata | 2 hrs |

### P2 — Nice to Have

| # | Issue | Impact | Est. Effort |
|---|-------|--------|-------------|
| 11 | "Related routes" suggestions on route pages | Reduces bounce rate | 2 hrs |
| 12 | Add unique OG images per city (CDMX, GDL, MTY) | Better visual social sharing | 3 hrs |
| 13 | Add SportsEvent JSON-LD for each individual match page | Rich event snippets | 1 hr |
| 14 | Move GA4 to next/script component | Next.js best practice | 30 min |
| 15 | Move fonts to next/font/google | Eliminate FOUT, self-host fonts | 1 hr |

---

## Metadata Coverage Matrix

| Page Type | Count | Title | Description | OG | Twitter | Canonical | JSON-LD |
|-----------|-------|-------|-------------|-----|---------|-----------|---------|
| Homepage | 1 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| City hubs | 16 | ✅ | ✅ | 2/16 | 0/16 | 2/16 | 3/16 |
| Station pages | ~166 | ✅ | ✅ | 5/166 | 0/166 | 5/166 | Some |
| Line pages | ~80 | ✅ | ✅ | 2/80 | 0/80 | 2/80 | Some |
| Route pages | ~24K | ✅ | ✅ | 1/24K | 0/24K | 1/24K | 0 |
| Mundial | 8 | ✅ | ✅ | 1/8 | 1/8 | 1/8 | 1/8 |
| Turismo | ~541 | ✅ | ✅ | 2/541 | 0/541 | 2/541 | 0 |
| [lang] i18n | ~4K | ✅ | ✅ | 0 | 0 | Some | 0 |
| Guides | 3 | ✅ | ✅ | 0 | 0 | 0 | 0 |

**After this session's fixes, the 3 highest-traffic pages (home, CDMX, mundial) now have complete metadata.**

---

## Files Modified

```
app/sitemap.js          — LASTMOD dates updated to Apr 2026
app/layout.jsx          — Duplicate desc removed, Organization JSON-LD, theme-color fix
app/page.jsx            — OG, Twitter, updated title/desc
app/cdmx/page.jsx       — OG, Twitter, canonical added
app/mundial-2026/page.jsx — OG, Twitter, canonical, dynamic countdown
public/favicon.ico      — NEW: multi-size from logo.png
```
