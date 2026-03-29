# MetroGuia i18n System

Comprehensive internationalization system for 7 languages: Spanish, English, Portuguese, French, German, Japanese, and Korean.

## Quick Start

### In Server Components (app directory)
```jsx
import { t, buildMetadata } from '@/lib/i18n';
import es from '@/translations/es.json';
import en from '@/translations/en.json';

export const metadata = buildMetadata({
  lang: 'es',
  title: 'CDMX Metro Guide',
  description: 'Find your way around Mexico City',
  path: '/cities/cdmx',
  keywords: ['metro', 'transit']
});

export default function Page() {
  const text = t(es, 'home.heroTitle');
  return <h1>{text}</h1>;
}
```

### Dynamic Language Switching
```jsx
'use client';

import { LANGUAGES, t } from '@/lib/i18n';
import { useState } from 'react';

const translations = {
  es: require('@/translations/es.json'),
  en: require('@/translations/en.json'),
  pt: require('@/translations/pt.json'),
  fr: require('@/translations/fr.json'),
  de: require('@/translations/de.json'),
  ja: require('@/translations/ja.json'),
  ko: require('@/translations/ko.json'),
};

export default function Page() {
  const [lang, setLang] = useState('es');
  const trans = translations[lang];

  return (
    <div>
      <select value={lang} onChange={(e) => setLang(e.target.value)}>
        {LANGUAGES.map(l => (
          <option key={l} value={l}>{LANGUAGE_NAMES[l]}</option>
        ))}
      </select>
      <h1>{t(trans, 'home.heroTitle')}</h1>
    </div>
  );
}
```

## Available Functions

### `t(translations, key, fallback?)`
Get a translated string using dot notation.

```js
t(es, 'home.heroTitle')                    // Returns: "Tu guía del transporte público en México"
t(es, 'nav.home')                          // Returns: "Inicio"
t(es, 'nonexistent.key', 'Default text')  // Returns: "Default text"
```

### `buildMetadata({ lang, title, description, path?, keywords? })`
Generate Next.js metadata with hreflang and OpenGraph tags.

```js
const metadata = buildMetadata({
  lang: 'es',
  title: 'CDMX Metro',
  description: 'Mexico City transit guide',
  path: '/cities/cdmx',
  keywords: ['metro', 'transit', 'mexico']
});

// Returns:
// {
//   title, description, keywords,
//   alternates: {
//     canonical: 'https://metroguia.mx/cities/cdmx',
//     languages: {
//       es: 'https://metroguia.mx/cities/cdmx',
//       en: 'https://metroguia.mx/en/cities/cdmx',
//       ... (all 7 languages)
//     }
//   },
//   openGraph: { ... }
// }
```

### `buildHrefLangArray(path?)`
Generate hreflang entries for HTML head.

```js
const hreflangs = buildHrefLangArray('/cities/cdmx');

// Use in page:
// {hreflangs.map(h => (
//   <link key={h.hrefLang} rel={h.rel} hrefLang={h.hrefLang} href={h.href} />
// ))}
```

## Constants

### `LANGUAGES`
```js
['es', 'en', 'pt', 'fr', 'de', 'ja', 'ko']
```

### `DEFAULT_LANG`
```js
'es'
```

### `LANGUAGE_NAMES`
```js
{
  es: 'Español',
  en: 'English',
  pt: 'Português',
  fr: 'Français',
  de: 'Deutsch',
  ja: '日本語',
  ko: '한국어'
}
```

### `OG_LOCALES`
```js
{
  es: 'es_MX',
  en: 'en_US',
  pt: 'pt_BR',
  fr: 'fr_FR',
  de: 'de_DE',
  ja: 'ja_JP',
  ko: 'ko_KR'
}
```

## Translation Keys

130 keys organized in 11 sections:

- `meta.*` - Site metadata
- `nav.*` - Navigation
- `home.*` - Homepage hero and sections
- `station.*` - Station detail pages
- `line.*` - Line detail pages
- `route.*` - Route calculator
- `city.*` - City pages
- `worldCup.*` - World Cup 2026 content
- `accommodation.*` - Lodging section
- `common.*` - Generic UI strings
- `footer.*` - Footer content
- `pwa.*` - App installation prompts

## Supported Languages

1. **Spanish (es)** - es_MX (Mexico)
2. **English (en)** - en_US
3. **Portuguese (pt)** - pt_BR (Brazil)
4. **French (fr)** - fr_FR (France)
5. **German (de)** - de_DE (Germany)
6. **Japanese (ja)** - ja_JP (Japan)
7. **Korean (ko)** - ko_KR (South Korea)

## File Structure

```
/lib
  └─ i18n.js (1.7K)

/translations
  ├─ es.json (5.1K) - Spanish base
  ├─ en.json (4.8K)
  ├─ pt.json (5.1K)
  ├─ fr.json (5.2K)
  ├─ de.json (5.3K)
  ├─ ja.json (5.5K)
  └─ ko.json (5.0K)
```

## Zero-Cost Design

- No external dependencies
- All translations pre-compiled as static JSON
- Helper functions are tree-shakeable
- Suitable for static export and ISR
- Hreflang support for SEO

## SEO Features

- Automatic hreflang generation for all 7 languages
- Canonical URL handling
- OpenGraph locale support
- x-default fallback for each page
- Structured language alternate links

## Tourism-Focused Translations

All translations are natural and localized for tourist audiences:
- Explains transport systems from traveler perspective
- Uses colloquial language (not literal)
- Includes practical tips and context
- Culturally appropriate phrasing per language

Example: English "Your guide to Mexico's public transport" vs Spanish "Tu guía del transporte público en México" - natural translations for each audience.
