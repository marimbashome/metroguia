'use client'

import { usePathname } from 'next/navigation'

import es from '@/translations/es.json'
import en from '@/translations/en.json'
import pt from '@/translations/pt.json'
import fr from '@/translations/fr.json'
import de from '@/translations/de.json'
import ja from '@/translations/ja.json'
import ko from '@/translations/ko.json'

const allTranslations = { es, en, pt, fr, de, ja, ko }

export default function FooterBar() {
  const pathname = usePathname()

  const segments = pathname.split('/').filter(Boolean)
  const lang = segments[0] && ['en', 'pt', 'fr', 'de', 'ja', 'ko'].includes(segments[0])
    ? segments[0]
    : 'es'

  const t = allTranslations[lang] || allTranslations.es
  const prefix = lang === 'es' ? '' : `/${lang}`

  return (
    <footer style={{
      backgroundColor: 'var(--surface)',
      borderTop: '1px solid var(--border)',
      padding: '3rem 1rem',
      marginTop: '4rem',
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Top row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '2rem',
          marginBottom: '2rem',
        }}>
          <div>
            <div style={{
              fontSize: '1.125rem',
              fontWeight: 800,
              color: 'var(--primary)',
              marginBottom: '0.5rem',
            }}>MetroGuia.mx</div>
            <p style={{
              fontSize: '0.875rem',
              color: 'var(--text-muted)',
              maxWidth: '300px',
              lineHeight: 1.6,
              margin: 0,
            }}>
              {t.layout?.footerDesc || 'Trip planner de transporte urbano en México. Calcula rutas, explora estaciones y viaja como local.'}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            <div>
              <h6 style={{ color: 'var(--text-dim)', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                {t.layout?.cities || t.nav?.cities || 'Ciudades'}
              </h6>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a href={`${prefix}/cdmx/`} style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>CDMX</a>
                <a href={`${prefix}/gdl/`} style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>Guadalajara</a>
                <a href={`${prefix}/mty/`} style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>Monterrey</a>
              </div>
            </div>
            <div>
              <h6 style={{ color: 'var(--text-dim)', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                {t.layout?.resources || 'Recursos'}
              </h6>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a href={`${prefix}/lineas/`} style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>{t.layout?.lines || 'Líneas'}</a>
                <a href={`${prefix}/mundial-2026/`} style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>{t.nav?.worldCup || 'Mundial 2026'}</a>
                <a href={`${prefix}/privacy-policy/`} style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>{t.layout?.privacy || t.footer?.privacy || 'Privacidad'}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}>
          <p style={{
            margin: 0,
            fontSize: '0.8rem',
            color: 'var(--text-dim)',
          }}>
            MetroGuia.mx © 2026
          </p>
          <p style={{
            margin: 0,
            fontSize: '0.8rem',
            color: 'var(--text-dim)',
          }}>
            {t.layout?.footerTagline || 'CDMX · Guadalajara · Monterrey — Información para turistas del Mundial FIFA 2026'}
          </p>
        </div>
      </div>
    </footer>
  )
}