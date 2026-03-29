# MetroGuia i18n Routing Implementation

## Overview

This document describes the i18n (internationalization) routing strategy implemented for MetroGuia.mx as a static export Next.js site.

## Architecture

### Language Strategy

- **Spanish (es)**: Root path `/` - no prefix needed (default language)
- **Other languages**: Language-prefixed paths `/[lang]/`
  - English: `/en/`
  - Portuguese: `/pt/`
  - French: `/fr/`
  - German: `/de/`
  - Japanese: `/ja/`
  - Korean: `/ko/`

### Why This Approach?

For a **static export site** with `output: 'export'`:
1. Spanish URLs remain unmodified (zero breaking changes)
2. Other languages get `/[lang]/` prefix (SEO-friendly, easy to identify)
3. `generateStaticParams()` generates all combinations at build time
4. No runtime logic needed—pure static HTML files
5. Perfect for tourist-focused content (Spanish is primary, others are secondary markets)

## Directory Structure

```
app/
├── layout.jsx                          (Root layout - shared by all languages)
├── page.jsx                            (Spanish home: /)
├── cdmx/
│   ├── page.jsx                        (Spanish CDMX hub: /cdmx/)
│   ├── estacion/[slug]/page.jsx        (Spanish stations: /cdmx/estacion/:slug/)
│   └── linea/[id]/page.jsx             (Spanish lines: /cdmx/linea/:id/)
├── mundial-2026/
│   └── page.jsx                        (Spanish FIFA hub: /mundial-2026/)
├── ruta/[slug]/
│   └── page.jsx                        (Spanish routes: /ruta/:slug/)
│
└── [lang]/                             NEW: Language-prefixed routes
    ├── layout.jsx                      (Minimal layout - inherits from root)
    ├── page.jsx                        (Home page in other languages: /en/, /pt/, etc.)
    ├── cdmx/
    │   ├── page.jsx                    (CDMX hub: /en/cdmx/, /pt/cdmx/, etc.)
    │   ├── estacion/[slug]/
    │   │   └── page.jsx                (Stations: /en/cdmx/estacion/:slug/, etc.)
    │   └── linea/[id]/
    │       └── page.jsx                (Lines: /en/cdmx/linea/:id/, etc.)
    ├── mundial-2026/
    │   └── page.jsx                    (FIFA hub: /en/mundial-2026/, etc.)
    └── ruta/[slug]/
        └── page.jsx                    (Routes: /en/ruta/:slug/, etc.)
```

## Pages Implemented

### Core Pages (All Languages)
1. **Home page** - Main landing page with city showcase
   - Spanish: `/`
   - Other languages: `/[lang]/`

2. **CDMX Hub** - City transportation overview
   - Spanish: `/cdmx/`
   - Other languages: `/[lang]/cdmx/`

3. **FIFA 2026 Hub** - World Cup information and stadium routes
   - Spanish: `/mundial-2026/`
   - Other languages: `/[lang]/mundial-2026/`

### Dynamic Pages (Limited Scope)
4. **Station Pages** - Individual station details (top 20 tourist stations)
   - Spanish: `/cdmx/estacion/[slug]/`
   - Other languages: `/[lang]/cdmx/estacion/[slug]/`
   - Limit: 20 stations × 6 languages = ~120 pages

5. **Line Pages** - Metro/transit line details (all 12 CDMX lines)
   - Spanish: `/cdmx/linea/[id]/`
   - Other languages: `/[lang]/cdmx/linea/[id]/`
   - Total: 12 lines × 6 languages = 72 pages

6. **Route Pages** - Popular pre-computed routes (top 10)
   - Spanish: `/ruta/[slug]/`
   - Other languages: `/[lang]/ruta/[slug]/`
   - Total: 10 routes × 6 languages = 60 pages

### Total Pages Generated
- Root level Spanish pages: ~50
- Language-prefixed pages: ~250 (9 core + 120 stations + 72 lines + 60 routes)
- **Grand total: ~300 pages** (manageable for static export)

## Key Implementation Details

### 1. generateStaticParams()

Every `[lang]` page includes:

```jsx
export function generateStaticParams() {
  return LANGUAGES.filter(l => l !== 'es').map(lang => ({ lang }))
}
```

This tells Next.js: "Generate static pages ONLY for non-Spanish languages" (Spanish is at root).

### 2. Dynamic Pages with Multiple Params

For pages like `/[lang]/cdmx/estacion/[slug]/`, the pattern is:

```jsx
export function generateStaticParams() {
  const params = []
  LANGUAGES.filter(l => l !== 'es').forEach(lang => {
    estaciones.slice(0, 20).forEach(estacion => {
      params.push({ lang, slug: estacion.slug })
    })
  })
  return params
}
```

This generates: `[lang] × [slug]` combinations at build time.

### 3. Translations

Each page dynamically loads translations:

```jsx
const lang = params.lang
const translations = require(`@/translations/${lang}.json`)
```

Files at `/translations/`:
- `es.json` (Spanish - used by root pages)
- `en.json` (English)
- `pt.json` (Portuguese)
- `fr.json` (French)
- `de.json` (German)
- `ja.json` (Japanese)
- `ko.json` (Korean)

### 4. Station Names Stay in Spanish

All pages (even translated ones) preserve **station names in Spanish** because they are:
- Official names (proper nouns)
- Not directly translatable
- Easier for tourists to find on physical signs
- Used in route calculators (language-independent)

**Example:** A user viewing the `/en/cdmx/estacion/zocalo/` page sees:
- UI labels in English ("Station", "Lines", etc.)
- Station name in Spanish ("Zócalo")
- Description and tips in English

### 5. URL Structure for SEO

The hreflang tags in metadata link all versions:

```jsx
alternates: {
  canonical: url,
  languages: {
    'es': 'https://metroguia.mx/path/',
    'en': 'https://metroguia.mx/en/path/',
    'pt': 'https://metroguia.mx/pt/path/',
    'fr': 'https://metroguia.mx/fr/path/',
    'de': 'https://metroguia.mx/de/path/',
    'ja': 'https://metroguia.mx/ja/path/',
    'ko': 'https://metroguia.mx/ko/path/',
    'x-default': 'https://metroguia.mx/path/',
  }
}
```

Search engines understand that `/en/cdmx/` is the English version of `/cdmx/`.

## Sitemap Updates

The `app/sitemap.js` now includes:

1. **All language home pages** with priority 0.95
2. **CDMX hubs** for each language with priority 0.9
3. **FIFA hubs** for each language with priority 0.85
4. **Top 20 station pages** for each language with priority 0.75
5. **All 12 CDMX line pages** for each language with priority 0.75
6. **Top 10 route pages** for each language with priority 0.7

Total new sitemap entries: ~250

## Layout Hierarchy

```
Root Layout (app/layout.jsx)
├── Provides: GA4, PWA, Global styles, Metadata base
├── Spanish pages inherit directly
│
└── [lang] Layout (app/[lang]/layout.jsx)
    ├── Minimal—just passes children through
    ├── Non-Spanish pages inherit from [lang], which inherits from Root
    └── No duplication of global assets
```

## Language Switcher Component

New component: `app/components/LanguageSwitcher.jsx`

```jsx
<LanguageSwitcher />
```

Features:
- Detects current language from pathname
- Generates correct links for each language
- Shows active language highlighted
- Works with both Spanish and other language paths

Usage:
```jsx
// Add to header/nav in future
import LanguageSwitcher from '@/app/components/LanguageSwitcher'

export default function Header() {
  return (
    <header>
      {/* ... */}
      <LanguageSwitcher />
    </header>
  )
}
```

## Build Size Considerations

Static export generates:
- **Spanish pages**: ~50 HTML files
- **English pages**: ~50 HTML files
- **Portuguese, French, German, Japanese, Korean**: ~50 each

Total: ~300 HTML files + assets (images, CSS, JS)

This is manageable for most hosting platforms. For comparison:
- Small site: < 100 pages
- Medium site: 100-500 pages ← MetroGuia (after i18n)
- Large site: 500+ pages

## Future Enhancements

1. **Add more cities**: Create `[lang]/gdl/`, `[lang]/mty/`, etc.
2. **Expand station coverage**: Increase from 20 to more tourist stations
3. **Dynamic routes**: Pre-compute more popular routes based on analytics
4. **GDL and MTY hubs**: Translate city-specific pages
5. **Admin dashboard**: UI for managing translations per page type

## Testing Checklist

Before deployment:
- [ ] Build completes without errors: `npm run build`
- [ ] Static export works: Verify `out/` directory
- [ ] Hreflang tags are correct: Inspect page `<head>`
- [ ] Station names stay in Spanish: Check `/en/cdmx/estacion/zocalo/`
- [ ] Translations load correctly: Verify all 7 languages
- [ ] Sitemap includes all language pages: Check `out/sitemap.xml`
- [ ] Links between languages work: Test LanguageSwitcher
- [ ] OpenGraph og:locale is correct per language
- [ ] ga4() tracking works on all languages

## Git Status

New files created:
- `app/[lang]/layout.jsx` (13 lines)
- `app/[lang]/page.jsx` (483 lines)
- `app/[lang]/cdmx/page.jsx` (221 lines)
- `app/[lang]/cdmx/estacion/[slug]/page.jsx` (191 lines)
- `app/[lang]/cdmx/linea/[id]/page.jsx` (247 lines)
- `app/[lang]/mundial-2026/page.jsx` (302 lines)
- `app/[lang]/ruta/[slug]/page.jsx` (338 lines)
- `app/components/LanguageSwitcher.jsx` (68 lines)

Modified files:
- `app/layout.jsx` — Updated alternates to include all 6 languages
- `app/sitemap.js` — Added ~250 language-prefixed URLs

## Summary

This implementation provides:
- **Zero breaking changes** to Spanish URLs (SEO safe)
- **Full i18n support** for 6 additional languages
- **Static export compatible** (no server-side logic)
- **SEO-optimized** with proper hreflang links
- **Manageable scale** (~300 pages)
- **Easy to extend** to more cities and languages

The strategy prioritizes:
1. Tourist-facing content (home, city hubs, FIFA)
2. High-traffic pages (stations, lines, routes)
3. Proper semantic relationships (hreflang)
4. Preservation of official names (Spanish station names)
