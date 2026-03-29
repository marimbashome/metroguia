import { LANGUAGES, t } from '@/lib/i18n'

// Placeholder route data - in production, fetch from database
const rutasPrecomputadas = {
  'zocalo-a-tasquena': {
    origen: 'Zócalo',
    destino: 'Tasqueña',
    distancia: '15 km',
    tiempo: '42 min',
    pasos: [
      { tipo: 'salida', nombre: 'Zócalo', linea: 'Línea 2' },
      { tipo: 'caminar', nombre: 'Camina 2 cuadras hacia el sur' },
      { tipo: 'viaje', nombre: 'Línea 2 (Tasqueña)', lineas: 9 },
      { tipo: 'transbordo', nombre: 'Estación Allende' },
      { tipo: 'llegada', nombre: 'Tasqueña' },
    ]
  },
  'aeropuerto-a-bellas-artes': {
    origen: 'Benito Juárez (Aeropuerto)',
    destino: 'Bellas Artes',
    distancia: '8 km',
    tiempo: '35 min',
    pasos: [
      { tipo: 'salida', nombre: 'Benito Juárez (Aeropuerto)', linea: 'Línea 5' },
      { tipo: 'viaje', nombre: 'Línea 5 hacia Centro', lineas: 5 },
      { tipo: 'transbordo', nombre: 'Estación La Raza' },
      { tipo: 'viaje', nombre: 'Línea 3 hacia Indios Verdes', lineas: 3 },
      { tipo: 'llegada', nombre: 'Bellas Artes' },
    ]
  },
}

export function generateStaticParams() {
  const params = []
  LANGUAGES.filter(l => l !== 'es').forEach(lang => {
    Object.keys(rutasPrecomputadas).forEach(slug => {
      params.push({ lang, slug })
    })
  })
  return params
}

export async function generateMetadata({ params }) {
  const translations = require(`@/translations/${params.lang}.json`)
  const ruta = rutasPrecomputadas[params.slug]
  
  if (!ruta) {
    return {
      title: 'Ruta no encontrada — MetroGuia'
    }
  }

  const lang = params.lang
  return {
    title: `${ruta.origen} a ${ruta.destino} — MetroGuia.mx`,
    description: `Ruta de transporte público desde ${ruta.origen} a ${ruta.destino}. ${ruta.tiempo} de viaje.`,
    alternates: {
      canonical: `https://metroguia.mx/${lang}/ruta/${params.slug}/`,
    }
  }
}

export default function RutaPageLang({ params }) {
  const lang = params.lang
  const translations = require(`@/translations/${lang}.json`)
  const ruta = rutasPrecomputadas[params.slug]

  if (!ruta) {
    return (
      <div style={{ padding: '3rem 1rem', textAlign: 'center' }}>
        <h1>{t(translations, 'home.planRoute')}</h1>
        <p style={{ color: 'var(--text-muted)' }}>Ruta no encontrada</p>
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
        name: 'Rutas',
        item: `https://metroguia.mx/${lang}/ruta/`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${ruta.origen} a ${ruta.destino}`,
        item: `https://metroguia.mx/${lang}/ruta/${params.slug}/`
      }
    ]
  }

  const colorPrimary = '#F5A623'

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section style={{
        background: `linear-gradient(135deg, var(--surface) 0%, ${colorPrimary}15 100%)`,
        paddingTop: '4rem',
        paddingBottom: '3rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <h1 style={{
            fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '1rem',
          }}>
            {ruta.origen} → {ruta.destino}
          </h1>
          <div style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
          }}>
            <div>
              <div style={{
                fontSize: '0.75rem',
                color: 'var(--text-dim)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.25rem',
                fontWeight: 600,
              }}>
                Tiempo estimado
              </div>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: colorPrimary,
              }}>
                {ruta.tiempo}
              </div>
            </div>
            <div>
              <div style={{
                fontSize: '0.75rem',
                color: 'var(--text-dim)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.25rem',
                fontWeight: 600,
              }}>
                Distancia
              </div>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: colorPrimary,
              }}>
                {ruta.distancia}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pasos */}
      <section style={{ padding: '3rem 1rem' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
            {t(translations, 'home.heroTitle')}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0 0 2rem 0' }}>
            {ruta.pasos.length} pasos para completar tu viaje
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            position: 'relative',
          }}>
            {/* Línea conectora vertical */}
            <div style={{
              position: 'absolute',
              left: '1.375rem',
              top: '2rem',
              bottom: 0,
              width: '2px',
              backgroundColor: colorPrimary,
              opacity: 0.2,
              pointerEvents: 'none',
            }} />

            {ruta.pasos.map((paso, idx) => {
              const esUltimo = idx === ruta.pasos.length - 1
              let iconoColor = '#999'
              let iconoTexto = '•'

              if (paso.tipo === 'salida') {
                iconoColor = colorPrimary
                iconoTexto = '●'
              } else if (paso.tipo === 'llegada') {
                iconoColor = colorPrimary
                iconoTexto = '★'
              } else if (paso.tipo === 'transbordo') {
                iconoColor = '#EC4899'
                iconoTexto = '↺'
              } else if (paso.tipo === 'viaje') {
                iconoColor = colorPrimary
                iconoTexto = '→'
              } else if (paso.tipo === 'caminar') {
                iconoColor = '#999'
                iconoTexto = '🚶'
              }

              return (
                <div
                  key={idx}
                  className="card"
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '1rem',
                    position: 'relative',
                  }}
                >
                  <div style={{
                    width: '2.75rem',
                    height: '2.75rem',
                    borderRadius: '50%',
                    backgroundColor: `${iconoColor}15`,
                    border: `2px solid ${iconoColor}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    color: iconoColor,
                    flexShrink: 0,
                    zIndex: 1,
                  }}>
                    {iconoTexto}
                  </div>
                  <div style={{ flex: 1, paddingTop: '0.25rem' }}>
                    <div style={{
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--text)',
                      marginBottom: '0.25rem',
                    }}>
                      {paso.nombre}
                    </div>
                    {paso.linea && (
                      <div style={{
                        fontSize: '0.8rem',
                        color: colorPrimary,
                        fontWeight: 500,
                      }}>
                        {paso.linea}
                      </div>
                    )}
                    {paso.lineas && (
                      <div style={{
                        fontSize: '0.8rem',
                        color: 'var(--text-muted)',
                      }}>
                        {paso.lineas} {t(translations, 'station.lines')}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section style={{
        padding: '3rem 1rem',
        borderTop: '1px solid var(--border)',
        backgroundColor: 'var(--surface)',
      }}>
        <div className="container">
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
            {t(translations, 'station.tips')}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
          }}>
            {[
              {
                titulo: 'Costo aprox.',
                desc: 'CDMX: $5-7 MXN. Mayoreo en tiendas 7-Eleven o estaciones de metro.',
              },
              {
                titulo: 'Horario de operación',
                desc: 'Líneas operan de 05:00 a 00:30. Línea 1 de 05:00 a 01:00.',
              },
              {
                titulo: 'Accesibilidad',
                desc: 'Muchas estaciones tienen elevadores. Consulta el sitio oficial del Metro.',
              },
            ].map((tip, idx) => (
              <div key={idx} className="card" style={{ padding: '1rem' }}>
                <h4 style={{
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                }}>
                  {tip.titulo}
                </h4>
                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
