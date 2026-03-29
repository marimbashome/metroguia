import { LANGUAGES, buildMetadata, t } from '@/lib/i18n'

export function generateStaticParams() {
  return LANGUAGES.filter(l => l !== 'es').map(lang => ({ lang }))
}

export async function generateMetadata({ params }) {
  const translations = require(`@/translations/${params.lang}.json`)
  const lang = params.lang
  return buildMetadata({
    lang,
    title: 'Mundial FIFA 2026 — MetroGuia',
    description: 'Guía de transporte para los partidos de la Copa Mundial FIFA 2026 en México.',
    path: '/mundial-2026/',
    keywords: ['FIFA 2026', 'Mundial', 'transporte', 'CDMX', 'Guadalajara', 'Monterrey']
  })
}

export default function Mundial2026Lang({ params }) {
  const lang = params.lang
  const translations = require(`@/translations/${lang}.json`)

  const estadios = [
    {
      nombre: 'Estadio Azteca',
      ciudad: 'Ciudad de México',
      capacidad: '87,523',
      partidos: ['11 jun', '17 jun', '24 jun', '30 jun', '5 jul'],
      href: `/${lang}/cdmx/`,
      color: '#F5A623',
    },
    {
      nombre: 'Estadio Akron',
      ciudad: 'Guadalajara',
      capacidad: '46,399',
      partidos: ['11 jun', '18 jun', '23 jun', '26 jun'],
      href: `/${lang}/gdl/`,
      color: '#06B6D4',
    },
    {
      nombre: 'Estadio BBVA',
      ciudad: 'Monterrey',
      capacidad: '72,990',
      partidos: ['14 jun', '20 jun', '24 jun', '29 jun'],
      href: `/${lang}/mty/`,
      color: '#EC4899',
    },
  ]

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
        name: 'Mundial FIFA 2026',
        item: `https://metroguia.mx/${lang}/mundial-2026/`
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
        background: 'linear-gradient(135deg, var(--surface) 0%, rgba(76, 175, 80, 0.05) 100%)',
        paddingTop: '5rem',
        paddingBottom: '4rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.375rem 1rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--primary-glow)',
            border: '1px solid var(--primary-border)',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: 'var(--primary)',
            marginBottom: '1.5rem',
          }}>
            {t(translations, 'nav.worldCup')}
          </div>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: '1rem',
          }}>
            Transporte a los estadios del {t(translations, 'nav.worldCup')}
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-muted)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Planifica tu ruta a cualquiera de los 3 estadios de México usando metro, tren ligero y BRT.
          </p>
        </div>
      </section>

      {/* Estadios */}
      <section style={{ padding: '4rem 1rem' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>3 Estadios sede</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0 0 2.5rem 0' }}>
            {t(translations, 'home.fifa2026Desc')}
          </p>
          <div className="grid-3">
            {estadios.map((estadio) => (
              <a
                key={estadio.nombre}
                href={estadio.href}
                className="card"
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1rem',
                  }}>
                    <div style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: 'var(--radius)',
                      backgroundColor: `${estadio.color}15`,
                      border: `1px solid ${estadio.color}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      color: estadio.color,
                      flexShrink: 0,
                    }}>
                      ⚽
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '1rem',
                        fontWeight: 700,
                        margin: 0,
                        color: 'var(--text)',
                      }}>
                        {estadio.nombre}
                      </h3>
                      <p style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                        margin: 0,
                      }}>
                        {estadio.ciudad}
                      </p>
                    </div>
                  </div>
                  <div style={{
                    padding: '1rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: `${estadio.color}08`,
                    border: `1px solid ${estadio.color}15`,
                  }}>
                    <div style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-dim)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '0.5rem',
                    }}>
                      Partidos
                    </div>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                    }}>
                      {estadio.partidos.map((partido, idx) => (
                        <span
                          key={idx}
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            color: estadio.color,
                            padding: '0.25rem 0.5rem',
                            borderRadius: 'var(--radius-sm)',
                            backgroundColor: `${estadio.color}15`,
                          }}
                        >
                          {partido}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    marginBottom: '1rem',
                  }}>
                    <strong>Capacidad:</strong> {estadio.capacidad}
                  </div>
                </div>
                <span style={{
                  color: estadio.color,
                  fontWeight: 600,
                  fontSize: '0.85rem',
                }}>
                  {t(translations, 'home.planRoute')} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section style={{
        padding: '3rem 1rem',
        borderTop: '1px solid var(--border)',
      }}>
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>
            {t(translations, 'station.tips')}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0 0 2rem 0' }}>
            Consejos para usar transporte público durante el Mundial
          </p>
          <div className="grid-3">
            {[
              {
                titulo: 'Llega con tiempo',
                desc: 'Planifica llegar con 90 minutos de anticipación. El metro se llena los días de partido.',
              },
              {
                titulo: 'No lleves mucho equipaje',
                desc: 'Las mochilas grandes pueden no estar permitidas. Revisa la política del estadio.',
              },
              {
                titulo: 'Trae tarjeta de transporte',
                desc: 'La tarjeta Movilidad (CDMX) es más rápida que pagar en efectivo. Recargala con anticipación.',
              },
              {
                titulo: 'Evita horas pico',
                desc: 'Si puedes, viaja antes de que termine el partido anterior. Será menos congestionado.',
              },
              {
                titulo: 'Descarga el mapa offline',
                desc: 'Instala MetroGuia como app PWA para tener las rutas disponibles sin internet.',
              },
              {
                titulo: 'Mantén tu teléfono cargado',
                desc: 'La batería es vital. Lleva un power bank de respaldo para emergencias.',
              },
            ].map((tip, idx) => (
              <div key={idx} className="card" style={{ padding: '1.5rem' }}>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                }}>
                  {idx + 1}. {tip.titulo}
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
