'use client'

import { usePathname } from 'next/navigation'
import LanguageSwitcher from '@/app/components/LanguageSwitcher'

// Import translations
import es from '@/translations/es.json'
import en from '@/translations/en.json'
import pt from '@/translations/pt.json'
import fr from '@/translations/fr.json'
import de from '@/translations/de.json'
import ja from '@/translations/ja.json'
import ko from '@/translations/ko.json'

const allTranslations = { es, en, pt, fr, de, ja, ko }

export default function NavBar() {
  const pathname = usePathname()
  
  // Detect language from URL
  const segments = pathname.split('/').filter(Boolean)
  const lang = segments[0] && ['en', 'pt', 'fr', 'de', 'ja', 'ko'].includes(segments[0])
    ? segments[0]
    : 'es'
  
  const t = allTranslations[lang] || allTranslations.es
  const prefix = lang === 'es' ? '' : `/${lang}`

  return (
    <header style={{
      backgroundColor: 'var(--surface)',
      borderBottom: '1px solid var(--border)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0.75rem 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href={`${prefix}/`} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.625rem',
          textDecoration: 'none',
        }}>
          <img
            src="/logo.png"
            alt="MetroGuia"
            width={32}
            height={32}
            style={{ height: '32px', width: '32px', borderRadius: '6px' }}
          />
          <span style={{
            fontSize: '1.125rem',
            fontWeight: 800,
            color: 'var(--primary)',
            letterSpacing: '-0.02em',
          }}>
            MetroGuia
          </span>
        </a>

        {/* Nav Links */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
        }}>
          <a href={`${prefix}/lineas/`} style={{
            color: 'var(--text-muted)',
            fontSize: '0.9rem',
            fontWeight: 500,
            textDecoration: 'none',
          }}>{t.layout?.lines || t.nav?.routes || 'Líneas'}</a>
          <a href={`${prefix}/mundial-2026/`} style={{
            color: 'var(--text-muted)',
            fontSize: '0.9rem',
            fontWeight: 500,
            textDecoration: 'none',
          }}>{t.nav?.worldCup || 'Mundial 2026'}</a>
          <a href={`${prefix}/hospedaje/`} style={{
            color: 'var(--text-muted)',
            fontSize: '0.9rem',
            fontWeight: 500,
            textDecoration: 'none',
          }}>{t.nav?.accommodation || 'Hospedaje'}</a>

          {/* City pills */}
          <div style={{
            display: 'flex',
            gap: '0.375rem',
            borderLeft: '1px solid var(--border)',
            paddingLeft: '1rem',
            marginLeft: '0.25rem',
          }}>
            <a href={`${prefix}/cdmx/`} style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '0.25rem 0.625rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--primary-glow)',
              border: '1px solid var(--primary-border)',
              color: 'var(--primary)',
              textDecoration: 'none',
            }}>CDMX</a>
            <a href={`${prefix}/gdl/`} style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '0.25rem 0.625rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(6,182,212,0.1)',
              border: '1px solid rgba(6,182,212,0.3)',
              color: '#06B6D4',
              textDecoration: 'none',
            }}>GDL</a>
            <a href={`${prefix}/mty/`} style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '0.25rem 0.625rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(236,72,153,0.1)',
              border: '1px solid rgba(236,72,153,0.3)',
              color: '#EC4899',
              textDecoration: 'none',
            }}>MTY</a>
          </div>

          {/* Language Switcher */}
          <div style={{
            borderLeft: '1px solid var(--border)',
            paddingLeft: '1rem',
            marginLeft: '0.25rem',
          }}>
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  )
}