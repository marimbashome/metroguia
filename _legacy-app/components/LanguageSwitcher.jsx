'use client'

import { LANGUAGE_NAMES } from '@/lib/i18n'
import { usePathname } from 'next/navigation'

export default function LanguageSwitcher() {
  const pathname = usePathname()
  
  // Extract current language from pathname
  // /en/... -> en, / -> es
  const segments = pathname.split('/').filter(Boolean)
  const currentLang = segments[0] && ['en', 'pt', 'fr', 'de', 'ja', 'ko'].includes(segments[0])
    ? segments[0]
    : 'es'

  // Build new path for each language
  const getPathForLang = (lang) => {
    if (lang === 'es') {
      // Remove language prefix if switching to Spanish
      if (currentLang !== 'es') {
        return '/' + segments.slice(1).join('/')
      }
      return pathname
    } else {
      // Add language prefix if not Spanish
      if (currentLang === 'es') {
        return `/${lang}${pathname}`
      } else {
        // Replace language segment
        return `/${lang}/` + segments.slice(1).join('/')
      }
    }
  }

  const languages = ['es', 'en', 'pt', 'fr', 'de', 'ja', 'ko']

  return (
    <div style={{
      display: 'flex',
      gap: '0.25rem',
      borderRadius: 'var(--radius-sm)',
      backgroundColor: 'var(--surface)',
      padding: '0.25rem',
    }}>
      {languages.map(lang => (
        <a
          key={lang}
          href={getPathForLang(lang)}
          style={{
            padding: '0.5rem 0.75rem',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: currentLang === lang ? 'var(--primary)' : 'transparent',
            color: currentLang === lang ? 'white' : 'var(--text-muted)',
            fontSize: '0.75rem',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'all 0.2s',
            cursor: 'pointer',
          }}
          title={LANGUAGE_NAMES[lang]}
        >
          {lang.toUpperCase()}
        </a>
      ))}
    </div>
  )
}
