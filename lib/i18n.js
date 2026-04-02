// Import cities config for language mapping
import { getCityConfig } from '@/data/cities-config';

// Supported languages - top tourist source countries for Mexico
export const LANGUAGES = ['es', 'en', 'pt', 'fr', 'de', 'ja', 'ko'];
export const DEFAULT_LANG = 'es';

/**
 * Get default language for a city based on its country
 * MX cities default to Spanish, US/CA cities default to English
 * @param {string} citySlug - City slug (e.g., 'cdmx', 'nyc', 'toronto')
 * @returns {string} Language code: 'es' | 'en'
 */
export function getDefaultLangForCity(citySlug) {
  const config = getCityConfig(citySlug);
  if (!config) return DEFAULT_LANG;
  return config.defaultLang;
}

// Language display names (in their own language)
export const LANGUAGE_NAMES = {
  es: 'Español',
  en: 'English',
  pt: 'Português',
  fr: 'Français',
  de: 'Deutsch',
  ja: '日本語',
  ko: '한국어'
};

// OG locale codes
export const OG_LOCALES = {
  es: 'es_MX',
  en: 'en_US',
  pt: 'pt_BR',
  fr: 'fr_FR',
  de: 'de_DE',
  ja: 'ja_JP',
  ko: 'ko_KR'
};

// Import all translations - used by next.js static generation
// In page components, use: const translations = require(`@/translations/${lang}.json`)
// Or in server components: import es from '@/translations/es.json'

// Helper to get translated text with fallback
export function t(translations, key, fallback = '') {
  const keys = key.split('.');
  let val = translations;
  for (const k of keys) {
    val = val?.[k];
  }
  return val || fallback;
}

// Build metadata helper
export function buildMetadata({ lang, title, description, path = '', keywords = [] }) {
  const baseUrl = 'https://metroguia.mx';
  const url = lang === 'es' ? `${baseUrl}${path}` : `${baseUrl}/${lang}${path}`;

  const languages = {};
  LANGUAGES.forEach(l => {
    languages[l] = l === 'es' ? `${baseUrl}${path}` : `${baseUrl}/${l}${path}`;
  });
  languages['x-default'] = `${baseUrl}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'MetroGuia.mx',
      locale: OG_LOCALES[lang] || 'es_MX',
      type: 'website',
    },
  };
}

// Build hreflang array for metadata
export function buildHrefLangArray(path = '') {
  const baseUrl = 'https://metroguia.mx';
  const result = [];

  LANGUAGES.forEach(lang => {
    result.push({
      rel: 'alternate',
      hrefLang: lang,
      href: lang === 'es' ? `${baseUrl}${path}` : `${baseUrl}/${lang}${path}`
    });
  });

  // Add x-default for homepage
  result.push({
    rel: 'alternate',
    hrefLang: 'x-default',
    href: `${baseUrl}${path}`
  });

  return result;
}
