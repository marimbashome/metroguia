import { estaciones } from '@/data/estaciones'
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy'
import { LANGUAGES, buildMetadata, t } from '@/lib/i18n'

export function generateStaticParams() {
  const params = []
  LANGUAGES.filter(l => l !== 'es').forEach(lang => {
    estaciones.forEach(estacion => {
      params.push({ lang, slug: estacion.slug })
    })
  })
  return params
}

export async function generateMetadata({ params }) {
  const translations = require(`@/translations/${params.lang}.json`)
  const estacion = estaciones.find(e => e.slug === params.slug)

  if (!estacion) {
    return {
      title: 'Estación no encontrada — MetroGuia'
    }
  }

  const lang = params.lang
  return buildMetadata({
    lang,
    title: `${estacion.nombre} — MetroGuia.mx`,
    description: estacion.descripcion || `Estación de transporte en CDMX`,
    path: `/cdmx/estacion/${params.slug}/`,
  })
}

export default function EstacionPageLang({ params }) {
  const lang = params.lang
  const translations = require(`@/translations/${lang}.json`)
  const estacion = estaciones.find(e => e.slug === params.slug)

  if (!estacion) {
    return (
      <div style={{ padding: '3rem 1rem', textAlign: 'center' }}>
        <h1>{t(translations, 'nav.search')}</h1>
        <p style={{ color: 'var(--text-muted)' }}>Estación no encontrada</p>
      </div>
    )
  }

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
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: estacion.nombre,
        item: `https://metroguia.mx/${lang}/cdmx/estacion/${params.slug}/`
      }
    ]
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, var(--surface) 0%, rgba(100, 150, 200, 0.05) 100%)',
        paddingTop: '4rem',
        paddingBottom: '3rem',
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
            {estacion.linea}
          </p>
          <h1 style={{
            fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '1rem',
          }}>
            {estacion.nombre}
          </h1>
          {estacion.descripcion && (
            <p style={{
              fontSize: '1rem',
              color: 'var(--text-muted)',
              maxWidth: '700px',
              lineHeight: 1.6,
              margin: 0,
            }}>
              {estacion.descripcion}
            </p>
          )}
        </div>
      </section>

      {/* Información */}
      <section style={{ padding: '3rem 1rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
          }}>
            {estacion.linea && (
              <div className="card">
                <h3 style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  {t(translations, 'station.line')}
                </h3>
                <p style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>
                  {estacion.linea}
                </p>
              </div>
            )}
            {estacion.zona && (
              <div className="card">
                <h3 style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Zona
                </h3>
                <p style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>
                  Zona {estacion.zona}
                </p>
              </div>
            )}
            {estacion.conexiones && estacion.conexiones.length > 0 && (
              <div className="card">
                <h3 style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  {t(translations, 'station.connections')}
                </h3>
                <p style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>
                  {estacion.conexiones.length} {t(translations, 'station.lines')}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── AdBanner after Information ── */}
      <div style={{ padding: '1rem' }}>
        <div className="container">
          <AdBannerLazy slot="4434764790" />
        </div>
      </div>

      {/* Cita a la acción */}
      <section style={{ padding: '3rem 1rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
            {t(translations, 'station.calculateRoute')}
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Usa el planificador de rutas para encontrar la mejor manera de llegar a {estacion.nombre}
          </p>
          <a
            href={`/${lang}/ruta/calc/?origin=${encodeURIComponent(estacion.nombre)}`}
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: 'var(--primary)',
              color: 'white',
              borderRadius: 'var(--radius)',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.95rem',
              transition: 'all 0.2s',
            }}
          >
            {t(translations, 'home.planRoute')} →
          </a>
        </div>
      </section>

      {/* ── AdBanner bottom ── */}
      <div style={{ padding: '1rem', borderTop: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <AdBannerLazyInArticle slot="1082410395" />
        </div>
      </div>
    </div>
  )
}
