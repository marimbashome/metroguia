import { lineasDetalle } from '@/data/lineas-detalle'
import { estaciones } from '@/data/estaciones'
import SearchBar from '@/app/components/SearchBar'
import AdBannerLazy from '@/app/components/AdBannerLazy'
import { LANGUAGES, buildMetadata, t } from '@/lib/i18n'

export function generateStaticParams() {
  return LANGUAGES.filter(l => l !== 'es').map(lang => ({ lang }))
}

export async function generateMetadata({ params }) {
  const translations = require(`@/translations/${params.lang}.json`)
  const lang = params.lang
  return buildMetadata({
    lang,
    title: t(translations, 'station.metroSystem', 'Metro CDMX') + ' — MetroGuia',
    description: 'Plataforma de movilidad para el Metro Ciudad de México. 195 estaciones, 12 líneas.',
    path: '/cdmx/',
    keywords: ['Metro CDMX', 'transporte', 'movilidad', 'turismo']
  })
}

export default function CDMXPageLang({ params }) {
  const lang = params.lang
  const translations = require(`@/translations/${lang}.json`)

  const estacionesTuristicas = estaciones
    .filter(e => e.tipo_zona === 'turistico')
    .slice(0, 6)

  const lineasArray = Object.values(lineasDetalle).slice(0, 12)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'MetroGuia',
        item: 'https://metroguia.mx'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'CDMX',
        item: `https://metroguia.mx/${lang}/cdmx/`
      }
    ]
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section */}
      <section className="hero" style={{
        background: 'linear-gradient(135deg, var(--surface) 0%, rgba(233, 30, 140, 0.05) 100%)',
        paddingTop: '5rem',
        paddingBottom: '4rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <p style={{
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            marginBottom: '1rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}>
            {t(translations, 'city.cdmxSystem')}
          </p>
          <h1 style={{
            fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '1rem',
          }}>
            {t(translations, 'city.cdmxTitle')}
          </h1>
          <p style={{
            fontSize: '1rem',
            color: 'var(--text-muted)',
            maxWidth: '600px',
            marginBottom: '2rem',
            lineHeight: 1.6,
          }}>
            195 {t(translations, 'station.lines')} en 12 líneas. {t(translations, 'home.offlineReady')}.
          </p>
          <SearchBar ciudad="cdmx" lang={lang} />
        </div>
      </section>

      {/* Estaciones turísticas */}
      <section style={{ padding: '3rem 1rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>
            {t(translations, 'station.nearbyPlaces')}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0 0 2rem 0' }}>
            {t(translations, 'city.touristicStationsSubtitle')}
          </p>
          <div className="grid-3">
            {estacionesTuristicas.map(est => (
              <a
                key={est.slug}
                href={`/${lang}/cdmx/estacion/${est.slug}/`}
                className="card"
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ marginBottom: '0.75rem' }}>
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'var(--primary)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0.25rem',
                  }}>
                    {est.linea}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>
                    {est.nombre}
                  </h3>
                </div>
                {est.descripcion && (
                  <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    flex: 1,
                    margin: '0 0 1rem 0',
                    lineHeight: 1.5,
                  }}>
                    {est.descripcion.substring(0, 100)}...
                  </p>
                )}
                <span style={{
                  color: 'var(--primary)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                }}>
                  {t(translations, 'home.viewAllRoutes')} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── AdBanner ── */}
      <div style={{ padding: '1rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <AdBannerLazy slot="4434764790" />
        </div>
      </div>

      {/* Líneas */}
      <section style={{ padding: '3rem 1rem' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>12 {t(translations, 'station.lines')}</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0 0 2rem 0' }}>
            {t(translations, 'city.allLinesSubtitle')}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
          }}>
            {lineasArray.map(linea => (
              <a
                key={linea.id}
                href={`/${lang}/cdmx/linea/${linea.id}/`}
                className="card"
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                }}
              >
                <div style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: 'var(--radius)',
                  backgroundColor: linea.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  color: 'white',
                  flexShrink: 0,
                }}>
                  {linea.numero}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-dim)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}>
                    Línea
                  </div>
                  <div style={{
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: 'var(--text)',
                  }}>
                    {linea.nombre}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
