import { lineasDetalle } from '@/data/lineas-detalle'
import { estaciones } from '@/data/estaciones'
import { LANGUAGES, t } from '@/lib/i18n'

export function generateStaticParams() {
  const params = []
  LANGUAGES.filter(l => l !== 'es').forEach(lang => {
    Object.keys(lineasDetalle).slice(0, 12).forEach(id => {
      params.push({ lang, id })
    })
  })
  return params
}

export async function generateMetadata({ params }) {
  const translations = require(`@/translations/${params.lang}.json`)
  const linea = lineasDetalle[params.id]
  
  if (!linea) {
    return {
      title: 'Línea no encontrada — MetroGuia'
    }
  }

  const lang = params.lang
  return {
    title: `${linea.nombre} — MetroGuia.mx`,
    description: `Estaciones y detalles de la Línea ${linea.numero}`,
    alternates: {
      canonical: `https://metroguia.mx/${lang}/cdmx/linea/${params.id}/`,
    }
  }
}

export default function LineaPageLang({ params }) {
  const lang = params.lang
  const translations = require(`@/translations/${lang}.json`)
  const linea = lineasDetalle[params.id]

  if (!linea) {
    return (
      <div style={{ padding: '3rem 1rem', textAlign: 'center' }}>
        <h1>{t(translations, 'station.lines')}</h1>
        <p style={{ color: 'var(--text-muted)' }}>Línea no encontrada</p>
      </div>
    )
  }

  const estacionesLinea = estaciones.filter(e => e.lineas && e.lineas.includes(linea.id))

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
        name: linea.nombre,
        item: `https://metroguia.mx/${lang}/cdmx/linea/${params.id}/`
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
        background: `linear-gradient(135deg, var(--surface) 0%, ${linea.color}15 100%)`,
        paddingTop: '4rem',
        paddingBottom: '3rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{
              width: '3rem',
              height: '3rem',
              borderRadius: 'var(--radius)',
              backgroundColor: linea.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '1.25rem',
              color: 'white',
            }}>
              {linea.numero}
            </div>
            <div>
              <p style={{
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                fontWeight: 600,
                margin: 0,
              }}>
                {t(translations, 'station.line')}
              </p>
            </div>
          </div>
          <h1 style={{
            fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '1rem',
          }}>
            {linea.nombre}
          </h1>
          {linea.descripcion && (
            <p style={{
              fontSize: '1rem',
              color: 'var(--text-muted)',
              maxWidth: '700px',
              lineHeight: 1.6,
              margin: 0,
            }}>
              {linea.descripcion}
            </p>
          )}
        </div>
      </section>

      {/* Estadísticas */}
      <section style={{ padding: '3rem 1rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
          }}>
            <div className="card">
              <h3 style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                {t(translations, 'station.lines')}
              </h3>
              <p style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>
                {estacionesLinea.length}
              </p>
            </div>
            {linea.km && (
              <div className="card">
                <h3 style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Distancia
                </h3>
                <p style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>
                  {linea.km} km
                </p>
              </div>
            )}
            {linea.horario && (
              <div className="card">
                <h3 style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  {t(translations, 'station.schedule')}
                </h3>
                <p style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>
                  {linea.horario}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Estaciones */}
      <section style={{ padding: '3rem 1rem' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>
            {estacionesLinea.length} {t(translations, 'station.lines')}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0 0 2rem 0' }}>
            Todas las estaciones en la Línea {linea.numero}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '0.75rem',
          }}>
            {estacionesLinea.slice(0, 20).map((estacion, idx) => (
              <a
                key={estacion.slug}
                href={`/${lang}/cdmx/estacion/${estacion.slug}/`}
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
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '50%',
                  backgroundColor: linea.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  color: 'white',
                  flexShrink: 0,
                }}>
                  {idx + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: 'var(--text)',
                  }}>
                    {estacion.nombre}
                  </div>
                  {estacion.conexiones && estacion.conexiones.length > 0 && (
                    <div style={{
                      fontSize: '0.7rem',
                      color: 'var(--text-dim)',
                    }}>
                      {estacion.conexiones.length} {t(translations, 'station.connections')}
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
