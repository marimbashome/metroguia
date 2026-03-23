import { lineasDetalle } from '@/data/lineas-detalle'
import { estaciones } from '@/data/estaciones'
import { mundial } from '@/data/mundial'
import SearchBar from '@/app/components/SearchBar'

export function generateMetadata() {
  return {
    title: 'Metro CDMX — Guía de movilidad turística | MetroGuia',
    description: 'Plataforma de movilidad para el Metro Ciudad de México. 195 estaciones, 12 líneas, rutas al Estadio Azteca. Planea tu viaje al Mundial FIFA 2026.',
    keywords: 'Metro CDMX, transporte, movilidad, turismo, Mundial 2026',
  }
}

export default function CDMXPage() {
  // Filter featured tourist stations
  const estacionesTuristicas = estaciones
    .filter(e => e.tipo_zona === 'turistico')
    .slice(0, 6)

  // Get all 12 metro lines
  const lineasArray = Object.values(lineasDetalle).slice(0, 12)

  // Popular routes to Estadio Azteca (from mundial data or defaults)
  const rutasPopulares = [
    { origin: 'Zócalo', destination: 'Estadio Azteca', distance: '18 km', time: '45 min' },
    { origin: 'Benito Juárez (Aeropuerto)', destination: 'Estadio Azteca', distance: '25 km', time: '55 min' },
    { origin: 'Chapultepec', destination: 'Estadio Azteca', distance: '20 km', time: '50 min' },
    { origin: 'Bellas Artes', destination: 'Estadio Azteca', distance: '22 km', time: '52 min' },
  ]

  // Mundial 2026 matches at Azteca
  const mundialesAzteca = [
    { fecha: '11 de junio', hora: '18:00' },
    { fecha: '17 de junio', hora: '15:00' },
    { fecha: '24 de junio', hora: '21:00' },
    { fecha: '30 de junio', hora: '15:00' },
    { fecha: '5 de julio', hora: '21:00' },
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
        name: 'CDMX',
        item: 'https://metroguia.mx/cdmx/'
      }
    ]
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section — Dark gradient with CDMX pink */}
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
            <a href="/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>MetroGuia</a>
            {' '}→ Ciudad de México
          </p>
          <h1 style={{
            color: 'var(--text)',
            marginBottom: '0.5rem',
            background: 'linear-gradient(135deg, var(--text) 0%, var(--cdmx) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Metro CDMX
          </h1>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--text-muted)',
            marginBottom: '2rem',
            lineHeight: '1.6',
          }}>
            Plataforma de movilidad para turistas · 195 estaciones · 12 líneas · 226 km
          </p>

          {/* Stats badges */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--primary-glow)',
              border: '1px solid var(--primary-border)',
              borderRadius: 'var(--radius-full)',
              padding: '0.625rem 1.25rem',
              color: 'var(--primary)',
              fontSize: '0.875rem',
              fontWeight: 600,
            }}>
              <span style={{ fontSize: '1.25rem' }}>195</span> Estaciones
            </div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(233, 30, 140, 0.15)',
              border: '1px solid rgba(233, 30, 140, 0.3)',
              borderRadius: 'var(--radius-full)',
              padding: '0.625rem 1.25rem',
              color: 'var(--cdmx)',
              fontSize: '0.875rem',
              fontWeight: 600,
            }}>
              <span style={{ fontSize: '1.25rem' }}>12</span> Líneas
            </div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--surface-hover)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-full)',
              padding: '0.625rem 1.25rem',
              color: 'var(--text)',
              fontSize: '0.875rem',
              fontWeight: 600,
            }}>
              <span style={{ fontSize: '1.25rem' }}>226</span> km Red
            </div>
          </div>

          {/* SearchBar Component */}
          <SearchBar />
        </div>
      </section>

      {/* Rutas Populares al Mundial — Horizontal scroll cards */}
      <section style={{
        padding: '4rem 1rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <h2 style={{ marginBottom: '0.5rem' }}>Rutas Populares al Estadio Azteca</h2>
          <p style={{
            color: 'var(--text-muted)',
            marginBottom: '2rem',
            fontSize: '0.95rem',
          }}>
            Cómo llegar desde los principales puntos de interés turístico
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}>
            {rutasPopulares.map((ruta, idx) => (
              <div key={idx} className="card" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                }}>
                  <span>📍</span>
                  {ruta.origin}
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingY: '1rem',
                  borderTop: '1px solid var(--border)',
                  borderBottom: '1px solid var(--border)',
                }}>
                  <span style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-muted)',
                  }}>
                    ↓
                  </span>
                  <span style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                  }}>
                    {ruta.distance} · {ruta.time}
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  color: 'var(--cdmx)',
                  fontWeight: 600,
                }}>
                  <span>🏟️</span>
                  {ruta.destination}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Líneas del Metro — grid-3 with linea-badge */}
      <section style={{
        padding: '4rem 1rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <h2 style={{ marginBottom: '0.5rem' }}>12 Líneas del Metro</h2>
          <p style={{
            color: 'var(--text-muted)',
            marginBottom: '2rem',
            fontSize: '0.95rem',
          }}>
            Explora cada línea, sus estaciones y puntos de interés
          </p>

          <div className="grid-3">
            {lineasArray.map((linea) => (
              <a key={linea.id} href={`/linea/${linea.id}/`} style={{ textDecoration: 'none' }}>
                <div className="card" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '1rem',
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    width: '100%',
                  }}>
                    <div
                      className={`linea-badge linea-${linea.id}`}
                      style={{
                        backgroundColor: linea.color || 'var(--text-muted)',
                        width: '2.5rem',
                        height: '2.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '1rem',
                        color: linea.id === '5' ? '#000' : 'white',
                        flexShrink: 0,
                      }}
                    >
                      {linea.id}
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '0.25rem', color: 'var(--text)' }}>
                        Línea {linea.id}
                      </h4>
                      <p style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}>
                        {linea.nombre || 'Metro Line'}
                      </p>
                    </div>
                  </div>

                  <div style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-muted)',
                    lineHeight: '1.5',
                    width: '100%',
                    paddingTop: '0.5rem',
                    borderTop: '1px solid var(--border)',
                  }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <span style={{ fontWeight: 600 }}>Terminales:</span> {linea.inicio} → {linea.fin}
                    </div>
                    <div style={{ color: 'var(--primary)', fontWeight: 600 }}>
                      {linea.total} estaciones
                    </div>
                  </div>

                  <div style={{
                    color: 'var(--primary)',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    marginTop: 'auto',
                  }}>
                    Ver recorrido →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Estaciones Destacadas — grid-3 */}
      {estacionesTuristicas.length > 0 && (
        <section style={{
          padding: '4rem 1rem',
          borderBottom: '1px solid var(--border)',
        }}>
          <div className="container">
            <h2 style={{ marginBottom: '0.5rem' }}>Estaciones Turísticas Destacadas</h2>
            <p style={{
              color: 'var(--text-muted)',
              marginBottom: '2rem',
              fontSize: '0.95rem',
            }}>
              Puntos de interés y atracciones cercanas
            </p>

            <div className="grid-3">
              {estacionesTuristicas.map((estacion) => (
                <a key={estacion.slug} href={`/estacion/${estacion.slug}/`} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                    }}>
                      <div
                        className={`linea-badge linea-${estacion.linea}`}
                        style={{
                          backgroundColor: lineasArray.find(l => l.id === estacion.linea)?.color || '#999',
                          width: '2rem',
                          height: '2rem',
                          fontSize: '0.75rem',
                          color: estacion.linea === '5' ? '#000' : 'white',
                        }}
                      >
                        {estacion.linea}
                      </div>
                      <div>
                        <h4 style={{
                          marginBottom: '0.125rem',
                          color: 'var(--text)',
                          fontSize: '1.125rem',
                        }}>
                          {estacion.nombre}
                        </h4>
                        <p style={{
                          fontSize: '0.75rem',
                          color: 'var(--text-muted)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}>
                          {estacion.alcaldia}
                        </p>
                      </div>
                    </div>

                    <p style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-muted)',
                      lineHeight: '1.5',
                      marginTop: '0.5rem',
                    }}>
                      {estacion.intro || 'Explora esta estación turística'}
                    </p>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginTop: '0.75rem',
                      paddingTop: '0.75rem',
                      borderTop: '1px solid var(--border)',
                      color: 'var(--primary)',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                    }}>
                      Ver detalles →
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mundial 2026 Section — Alert card */}
      <section style={{
        padding: '4rem 1rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <h2 style={{ marginBottom: '2rem' }}>Mundial FIFA 2026 — Estadio Azteca</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}>
            {/* Alert: No direct metro */}
            <div className="alert alert-warning" style={{
              gridColumn: 'span 100%',
              marginBottom: '0rem',
            }}>
              <div style={{
                width: '1.25rem',
                height: '1.25rem',
                flexShrink: 0,
                marginTop: '0.125rem',
              }}>
                ⚠️
              </div>
              <div className="alert-content">
                <div className="alert-title">No hay metro directo al Estadio Azteca</div>
                <div className="alert-message">
                  Ruta: Metro L2 (Tasqueña) → Tren Ligero Xochimilco (15 min, $15 MXN). Tiempo total desde Centro: ~50 minutos.
                </div>
              </div>
            </div>

            {/* Match dates */}
            {mundialesAzteca.map((match, idx) => (
              <div key={idx} className="card">
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '0.75rem',
                }}>
                  <span style={{ fontSize: '1.5rem' }}>🏟️</span>
                  <div>
                    <div style={{
                      fontSize: '1.125rem',
                      fontWeight: 700,
                      color: 'var(--cdmx)',
                    }}>
                      {match.fecha}
                    </div>
                    <div style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-muted)',
                    }}>
                      Kickoff: {match.hora}
                    </div>
                  </div>
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                  borderTop: '1px solid var(--border)',
                  paddingTop: '0.75rem',
                  marginTop: '0.75rem',
                }}>
                  Necesitarás tarjeta de transporte válida (Tarjeta del Metro, SUUTOM)
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '2rem',
            textAlign: 'center',
          }}>
            <a
              href="/mundial-2026/"
              className="btn-primary"
              style={{
                display: 'inline-block',
                padding: '0.875rem 2rem',
              }}
            >
              Ver guía completa del Mundial →
            </a>
          </div>
        </div>
      </section>

      {/* Cómo Funciona — 3 cards matching landing page pattern */}
      <section style={{
        padding: '4rem 1rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <h2 style={{ marginBottom: '0.5rem', textAlign: 'center' }}>Cómo Funciona MetroGuia</h2>
          <p style={{
            color: 'var(--text-muted)',
            marginBottom: '2rem',
            fontSize: '0.95rem',
            textAlign: 'center',
          }}>
            Planifica tu viaje en el Metro CDMX en tres pasos
          </p>

          <div className="grid-3">
            <div className="card">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '3rem',
                height: '3rem',
                backgroundColor: 'var(--primary-glow)',
                borderRadius: 'var(--radius)',
                marginBottom: '1rem',
                fontSize: '1.5rem',
              }}>
                🔍
              </div>
              <h4 style={{ marginBottom: '0.75rem' }}>1. Busca tu destino</h4>
              <p style={{
                fontSize: '0.875rem',
                color: 'var(--text-muted)',
                lineHeight: '1.5',
              }}>
                Ingresa tu estación de origen y destino. Nuestro algoritmo encuentra la ruta más rápida.
              </p>
            </div>

            <div className="card">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '3rem',
                height: '3rem',
                backgroundColor: 'rgba(233, 30, 140, 0.15)',
                borderRadius: 'var(--radius)',
                marginBottom: '1rem',
                fontSize: '1.5rem',
              }}>
                🚇
              </div>
              <h4 style={{ marginBottom: '0.75rem' }}>2. Revisa la ruta</h4>
              <p style={{
                fontSize: '0.875rem',
                color: 'var(--text-muted)',
                lineHeight: '1.5',
              }}>
                Cada línea viene con paradas, tiempos y qué visitar en el camino. Info para turistas.
              </p>
            </div>

            <div className="card">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '3rem',
                height: '3rem',
                backgroundColor: 'var(--surface-hover)',
                borderRadius: 'var(--radius)',
                marginBottom: '1rem',
                fontSize: '1.5rem',
              }}>
                🗺️
              </div>
              <h4 style={{ marginBottom: '0.75rem' }}>3. Viaja sin preocupaciones</h4>
              <p style={{
                fontSize: '0.875rem',
                color: 'var(--text-muted)',
                lineHeight: '1.5',
              }}>
                Descarga la app o úsala en el navegador. Funciona sin internet gracias a nuestra PWA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Hospedaje — accommodation section */}
      <section style={{
        padding: '4rem 1rem',
        background: 'linear-gradient(135deg, rgba(233, 30, 140, 0.05) 0%, var(--surface) 100%)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}>
            <div>
              <h3 style={{
                marginBottom: '1rem',
                color: 'var(--text)',
              }}>
                Planifica tu hospedaje en CDMX
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: 'var(--text-muted)',
                marginBottom: '1.5rem',
                lineHeight: '1.6',
              }}>
                Busca hoteles cerca de las principales estaciones del Metro. Acceso fácil a museos, mercados y entretenimiento.
              </p>
              <a
                href="https://www.booking.com/searchresults.es.html?ss=Ciudad+de+M%C3%A9xico"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ display: 'inline-block' }}
              >
                Explorar hospedajes →
              </a>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
            }}>
              <div className="card">
                <div style={{
                  fontSize: '0.75rem',
                  color: 'var(--primary)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.5rem',
                }}>
                  Popular
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                }}>
                  <strong style={{ color: 'var(--text)' }}>Centro Histórico</strong> — Zócalo, Bellas Artes, Templo Mayor
                </div>
              </div>
              <div className="card">
                <div style={{
                  fontSize: '0.75rem',
                  color: 'var(--primary)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.5rem',
                }}>
                  Bohemio
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                }}>
                  <strong style={{ color: 'var(--text)' }}>Coyoacán</strong> — Frida Kahlo, casas coloniales
                </div>
              </div>
              <div className="card">
                <div style={{
                  fontSize: '0.75rem',
                  color: 'var(--primary)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.5rem',
                }}>
                  Cultural
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                }}>
                  <strong style={{ color: 'var(--text)' }}>Chapultepec</strong> — Museos, Castillo, parque
                </div>
              </div>
              <div className="card">
                <div style={{
                  fontSize: '0.75rem',
                  color: 'var(--primary)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.5rem',
                }}>
                  Moderno
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                }}>
                  <strong style={{ color: 'var(--text)' }}>Polanco</strong> — Tiendas, restaurantes, lujo
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
