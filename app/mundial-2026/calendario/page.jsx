'use client'

import { useState } from 'react'
import Link from 'next/link'
import { mundial2026 } from '@/data/mundial'

export const metadata = {
  title: 'Calendario FIFA 2026 México | Partidos en CDMX, Guadalajara y Monterrey',
  description: 'Calendario completo de los 13 partidos de la Copa Mundial 2026 en México. Fechas, horarios, estadios y cómo llegar a cada partido.',
  keywords: 'calendario mundial 2026 méxico, fechas partidos mundial 2026 cdmx guadalajara monterrey, copa mundial 2026 méxico sedes, partidos fútbol 2026',
  openGraph: {
    title: 'Calendario FIFA 2026 en México',
    description: '13 partidos en 3 ciudades: Ciudad de México, Guadalajara y Monterrey',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.metroguia.mx/mundial-2026/calendario/',
  },
}

export default function CalendarioMundial2026() {
  const [selectedPhase, setSelectedPhase] = useState('Todos')

  // Build chronological calendar
  const allMatches = []
  Object.entries(mundial2026.sedes).forEach(([ciudadKey, sedeData]) => {
    sedeData.partidos.forEach((partido) => {
      allMatches.push({
        ...partido,
        ciudad: sedeData.ciudad,
        ciudadKey,
        estadio: sedeData.estadio,
        slug_ruta: sedeData.slug_ruta,
      })
    })
  })

  // Sort by date
  allMatches.sort((a, b) => new Date(a.fecha) - new Date(b.fecha))

  // Group by date
  const matchesByDate = {}
  allMatches.forEach((match) => {
    if (!matchesByDate[match.fecha]) {
      matchesByDate[match.fecha] = []
    }
    matchesByDate[match.fecha].push(match)
  })

  const dates = Object.keys(matchesByDate).sort()

  // Filter by phase
  const filteredDates = selectedPhase === 'Todos'
    ? dates
    : dates.filter(fecha => {
        const matchesForDate = matchesByDate[fecha]
        return matchesForDate.some(m => m.fase === selectedPhase)
      })

  // City colors
  const cityColors = {
    'Ciudad de México': '#E91E8C',
    'Guadalajara': '#06B6D4',
    'Monterrey': '#EC4899',
  }

  const cityEmojis = {
    'Ciudad de México': '🏛️',
    'Guadalajara': '🌺',
    'Monterrey': '🏔️',
  }

  // Phase stats
  const phaseStats = {
    'Fase de Grupos': { dates: '11-26 jun', count: 11 },
    'Octavos de Final': { dates: '30 jun', count: 1 },
    'Cuartos de Final': { dates: '5 jul', count: 1 },
  }

  // Stadium comparison
  const stadiums = [
    { ciudad: 'Ciudad de México', estadio: 'Estadio Azteca', capacidad: '87,523', transitTime: '45 min', transitCost: '$15 MXN' },
    { ciudad: 'Guadalajara', estadio: 'Estadio Akron', capacidad: '49,850', transitTime: '40 min', transitCost: '$10 MXN' },
    { ciudad: 'Monterrey', estadio: 'Estadio BBVA', capacidad: '53,500', transitTime: '35 min', transitCost: '$8 MXN' },
  ]

  return (
    <div style={{ '--cdmx': '#E91E8C', '--gdl': '#06B6D4', '--mty': '#EC4899', '--gray-50': '#f9fafb', '--gray-100': '#f3f4f6', '--gray-200': '#e5e7eb', '--gray-300': '#d1d5db', '--gray-400': '#9ca3af', '--gray-600': '#4b5563', '--gray-800': '#1f2937', '--gray-900': '#111827' }}>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Inicio',
                item: 'https://www.metroguia.mx/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Mundial 2026',
                item: 'https://www.metroguia.mx/mundial-2026/',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Calendario',
                item: 'https://www.metroguia.mx/mundial-2026/calendario/',
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EventSeries',
            name: 'FIFA World Cup 2026 México',
            description: 'Todos los 13 partidos de la Copa Mundial 2026 en México',
            event: allMatches.map((match) => ({
              '@type': 'SportsEvent',
              name: match.equipos,
              description: match.descripcion,
              startDate: match.fecha + 'T00:00:00',
              endDate: match.fecha + 'T23:59:59',
              location: {
                '@type': 'Place',
                name: match.estadio,
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: match.ciudad,
                  addressCountry: 'MX',
                },
              },
              sport: 'Soccer',
            })),
            organizer: {
              '@type': 'Organization',
              name: 'FIFA',
              url: 'https://www.fifa.com',
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section style={{
        backgroundColor: 'var(--gray-900)',
        color: 'white',
        padding: '60px 20px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '700',
            marginBottom: '12px',
            lineHeight: '1.2',
          }}>
            Calendario FIFA 2026 en México
          </h1>
          <p style={{
            fontSize: '24px',
            color: 'var(--gray-300)',
            marginBottom: '8px',
          }}>
            13 partidos en 3 ciudades
          </p>
          <p style={{
            fontSize: '14px',
            color: 'var(--gray-400)',
          }}>
            11 de junio - 5 de julio 2026
          </p>
        </div>
      </section>

      {/* Phase Stats */}
      <section style={{
        padding: '40px 20px',
        backgroundColor: 'var(--gray-50)',
        borderBottom: '1px solid var(--gray-200)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '22px',
            fontWeight: '600',
            marginBottom: '30px',
            color: 'var(--gray-900)',
          }}>
            Desglose por Fase
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
          }}>
            {Object.entries(phaseStats).map(([phase, stats]) => (
              <div
                key={phase}
                onClick={() => setSelectedPhase(phase)}
                style={{
                  backgroundColor: 'white',
                  border: selectedPhase === phase ? '2px solid var(--cdmx)' : '1px solid var(--gray-200)',
                  borderRadius: '8px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: selectedPhase === phase ? '0 4px 12px rgba(233, 30, 140, 0.2)' : 'none',
                }}
              >
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'var(--gray-900)',
                  marginBottom: '8px',
                }}>
                  {phase}
                </h3>
                <p style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  color: 'var(--cdmx)',
                  marginBottom: '8px',
                }}>
                  {stats.count} partidos
                </p>
                <p style={{
                  fontSize: '13px',
                  color: 'var(--gray-600)',
                }}>
                  {stats.dates}
                </p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <button
              onClick={() => setSelectedPhase('Todos')}
              style={{
                backgroundColor: selectedPhase === 'Todos' ? 'var(--cdmx)' : 'transparent',
                color: selectedPhase === 'Todos' ? 'white' : 'var(--cdmx)',
                border: '2px solid var(--cdmx)',
                padding: '10px 20px',
                borderRadius: '4px',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'all 0.3s ease',
              }}
            >
              Ver todos los partidos
            </button>
          </div>
        </div>
      </section>

      {/* Timeline - Partidos por Fecha */}
      <section style={{
        padding: '60px 20px',
        backgroundColor: 'white',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '700',
            marginBottom: '40px',
            color: 'var(--gray-900)',
          }}>
            Cronograma de Partidos
          </h2>

          <div style={{ position: 'relative' }}>
            {filteredDates.map((fecha, dateIndex) => {
              const matchesForDate = matchesByDate[fecha]
              const dateObj = new Date(fecha + 'T00:00:00')
              const formattedDate = dateObj.toLocaleDateString('es-MX', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })

              return (
                <div key={fecha} style={{ marginBottom: '60px' }}>
                  {/* Date Header with Timeline Line */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '30px' }}>
                    {/* Timeline Dot */}
                    <div style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: 'var(--cdmx)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: '700',
                      fontSize: '14px',
                      flexShrink: 0,
                      marginRight: '20px',
                    }}>
                      {dateIndex + 1}
                    </div>

                    {/* Date Content */}
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontSize: '22px',
                        fontWeight: '700',
                        color: 'var(--gray-900)',
                        textTransform: 'capitalize',
                        marginBottom: '20px',
                      }}>
                        {formattedDate}
                      </h3>

                      {/* Match Cards for this Date */}
                      <div style={{
                        display: 'grid',
                        gap: '16px',
                      }}>
                        {matchesForDate.map((match, idx) => {
                          const cityColor = cityColors[match.ciudad]
                          const cityEmoji = cityEmojis[match.ciudad]

                          return (
                            <div
                              key={idx}
                              style={{
                                backgroundColor: 'white',
                                border: `2px solid ${cityColor}`,
                                borderRadius: '8px',
                                padding: '20px',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                                ':hover': {
                                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                                },
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)'
                                e.currentTarget.style.transform = 'translateY(-2px)'
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)'
                                e.currentTarget.style.transform = 'translateY(0)'
                              }}
                            >
                              {/* Match Header - City & Stadium */}
                              <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                marginBottom: '16px',
                                paddingBottom: '12px',
                                borderBottom: `1px solid ${cityColor}33`,
                              }}>
                                <div>
                                  <p style={{
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    color: cityColor,
                                    marginBottom: '4px',
                                  }}>
                                    {cityEmoji} {match.ciudad}
                                  </p>
                                  <h4 style={{
                                    fontSize: '16px',
                                    fontWeight: '700',
                                    color: 'var(--gray-900)',
                                  }}>
                                    {match.estadio}
                                  </h4>
                                </div>
                                <span style={{
                                  backgroundColor: cityColor + '15',
                                  color: cityColor,
                                  padding: '6px 12px',
                                  borderRadius: '4px',
                                  fontSize: '12px',
                                  fontWeight: '600',
                                  whiteSpace: 'nowrap',
                                }}>
                                  {match.fase.replace('Fase de Grupos', 'Grupos')}
                                </span>
                              </div>

                              {/* Teams */}
                              <div style={{
                                backgroundColor: 'var(--gray-50)',
                                padding: '16px',
                                borderRadius: '6px',
                                marginBottom: '16px',
                                textAlign: 'center',
                              }}>
                                <p style={{
                                  fontSize: '16px',
                                  fontWeight: '700',
                                  color: 'var(--gray-900)',
                                }}>
                                  {match.equipos}
                                </p>
                                <p style={{
                                  fontSize: '13px',
                                  color: 'var(--gray-600)',
                                  marginTop: '6px',
                                }}>
                                  Hora: {match.hora}
                                </p>
                              </div>

                              {/* Description */}
                              <p style={{
                                fontSize: '13px',
                                color: 'var(--gray-600)',
                                lineHeight: '1.6',
                                marginBottom: '16px',
                                fontStyle: 'italic',
                              }}>
                                {match.descripcion}
                              </p>

                              {/* Action Links */}
                              <div style={{
                                display: 'flex',
                                gap: '12px',
                                flexWrap: 'wrap',
                              }}>
                                <Link
                                  href={`/mundial-2026/partidos/#partido-${match.jornada}`}
                                  style={{
                                    flex: 1,
                                    minWidth: '200px',
                                    display: 'inline-block',
                                    backgroundColor: cityColor,
                                    color: 'white',
                                    padding: '10px 16px',
                                    borderRadius: '4px',
                                    fontSize: '13px',
                                    fontWeight: '600',
                                    textDecoration: 'none',
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease',
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.opacity = '0.9'
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.opacity = '1'
                                  }}
                                >
                                  Ver detalles del partido
                                </Link>
                                <Link
                                  href={`/${match.ciudadKey}/mundial-2026/${match.slug_ruta}/`}
                                  style={{
                                    flex: 1,
                                    minWidth: '200px',
                                    display: 'inline-block',
                                    backgroundColor: 'transparent',
                                    color: cityColor,
                                    border: `2px solid ${cityColor}`,
                                    padding: '8px 16px',
                                    borderRadius: '4px',
                                    fontSize: '13px',
                                    fontWeight: '600',
                                    textDecoration: 'none',
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease',
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = cityColor + '10'
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'transparent'
                                  }}
                                >
                                  Cómo llegar
                                </Link>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stadium Comparison Table */}
      <section style={{
        padding: '60px 20px',
        backgroundColor: 'var(--gray-50)',
        borderTop: '1px solid var(--gray-200)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '700',
            marginBottom: '30px',
            color: 'var(--gray-900)',
          }}>
            Comparativa de Estadios
          </h2>

          <div style={{
            overflowX: 'auto',
            borderRadius: '8px',
            border: '1px solid var(--gray-200)',
          }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              backgroundColor: 'white',
            }}>
              <thead>
                <tr style={{
                  backgroundColor: 'var(--gray-900)',
                  color: 'white',
                }}>
                  <th style={{
                    padding: '16px',
                    textAlign: 'left',
                    fontWeight: '600',
                    fontSize: '14px',
                    borderBottom: '2px solid var(--gray-200)',
                  }}>
                    Ciudad
                  </th>
                  <th style={{
                    padding: '16px',
                    textAlign: 'left',
                    fontWeight: '600',
                    fontSize: '14px',
                    borderBottom: '2px solid var(--gray-200)',
                  }}>
                    Estadio
                  </th>
                  <th style={{
                    padding: '16px',
                    textAlign: 'left',
                    fontWeight: '600',
                    fontSize: '14px',
                    borderBottom: '2px solid var(--gray-200)',
                  }}>
                    Capacidad
                  </th>
                  <th style={{
                    padding: '16px',
                    textAlign: 'left',
                    fontWeight: '600',
                    fontSize: '14px',
                    borderBottom: '2px solid var(--gray-200)',
                  }}>
                    Tiempo Transporte
                  </th>
                  <th style={{
                    padding: '16px',
                    textAlign: 'left',
                    fontWeight: '600',
                    fontSize: '14px',
                    borderBottom: '2px solid var(--gray-200)',
                  }}>
                    Costo Transporte
                  </th>
                </tr>
              </thead>
              <tbody>
                {stadiums.map((stadium, idx) => (
                  <tr
                    key={idx}
                    style={{
                      backgroundColor: idx % 2 === 0 ? 'white' : 'var(--gray-50)',
                      borderBottom: '1px solid var(--gray-200)',
                    }}
                  >
                    <td style={{
                      padding: '16px',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: 'var(--gray-900)',
                    }}>
                      {stadium.ciudad}
                    </td>
                    <td style={{
                      padding: '16px',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'var(--gray-900)',
                    }}>
                      {stadium.estadio}
                    </td>
                    <td style={{
                      padding: '16px',
                      fontSize: '14px',
                      color: 'var(--gray-700)',
                    }}>
                      {stadium.capacidad}
                    </td>
                    <td style={{
                      padding: '16px',
                      fontSize: '14px',
                      color: 'var(--gray-700)',
                    }}>
                      {stadium.transitTime}
                    </td>
                    <td style={{
                      padding: '16px',
                      fontSize: '14px',
                      color: 'var(--gray-700)',
                      fontWeight: '600',
                    }}>
                      {stadium.transitCost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quick Links to Each City */}
      <section style={{
        padding: '60px 20px',
        backgroundColor: 'white',
        borderTop: '1px solid var(--gray-200)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '700',
            marginBottom: '30px',
            color: 'var(--gray-900)',
          }}>
            Acceso Rápido por Ciudad
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}>
            {/* CDMX */}
            <div style={{
              backgroundColor: 'var(--gray-50)',
              border: '2px solid var(--cdmx)',
              borderRadius: '8px',
              padding: '24px',
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: 'var(--gray-900)',
                marginBottom: '12px',
              }}>
                🏛️ Ciudad de México
              </h3>
              <p style={{
                fontSize: '13px',
                color: 'var(--gray-600)',
                marginBottom: '16px',
                lineHeight: '1.6',
              }}>
                Estadio Azteca | 5 partidos | 87,523 personas
              </p>
              <Link
                href="/mundial-2026/como-llegar-estadio-azteca/"
                style={{
                  display: 'inline-block',
                  backgroundColor: 'var(--cdmx)',
                  color: 'white',
                  padding: '10px 16px',
                  borderRadius: '4px',
                  fontSize: '13px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.opacity = '0.9'
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = '1'
                }}
              >
                Ruta al Azteca
              </Link>
            </div>

            {/* GDL */}
            <div style={{
              backgroundColor: 'var(--gray-50)',
              border: '2px solid var(--gdl)',
              borderRadius: '8px',
              padding: '24px',
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: 'var(--gray-900)',
                marginBottom: '12px',
              }}>
                🌺 Guadalajara
              </h3>
              <p style={{
                fontSize: '13px',
                color: 'var(--gray-600)',
                marginBottom: '16px',
                lineHeight: '1.6',
              }}>
                Estadio Akron | 4 partidos | 49,850 personas
              </p>
              <Link
                href="/gdl/mundial-2026/como-llegar-estadio-akron/"
                style={{
                  display: 'inline-block',
                  backgroundColor: 'var(--gdl)',
                  color: 'white',
                  padding: '10px 16px',
                  borderRadius: '4px',
                  fontSize: '13px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.opacity = '0.9'
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = '1'
                }}
              >
                Ruta al Akron
              </Link>
            </div>

            {/* MTY */}
            <div style={{
              backgroundColor: 'var(--gray-50)',
              border: '2px solid var(--mty)',
              borderRadius: '8px',
              padding: '24px',
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: 'var(--gray-900)',
                marginBottom: '12px',
              }}>
                🏔️ Monterrey
              </h3>
              <p style={{
                fontSize: '13px',
                color: 'var(--gray-600)',
                marginBottom: '16px',
                lineHeight: '1.6',
              }}>
                Estadio BBVA | 4 partidos | 53,500 personas
              </p>
              <Link
                href="/mty/mundial-2026/como-llegar-estadio-bbva/"
                style={{
                  display: 'inline-block',
                  backgroundColor: 'var(--mty)',
                  color: 'white',
                  padding: '10px 16px',
                  borderRadius: '4px',
                  fontSize: '13px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.opacity = '0.9'
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = '1'
                }}
              >
                Ruta al BBVA
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - PWA Download */}
      <section style={{
        padding: '60px 20px',
        backgroundColor: 'var(--gray-900)',
        color: 'white',
        textAlign: 'center',
        borderTop: '1px solid var(--gray-800)',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '700',
            marginBottom: '16px',
          }}>
            Descarga MetroGuia
          </h2>
          <p style={{
            fontSize: '16px',
            color: 'var(--gray-300)',
            marginBottom: '24px',
            lineHeight: '1.6',
          }}>
            Instala MetroGuia como app en tu teléfono para acceder a todas las rutas sin conexión a internet. Perfecto para los días de partido.
          </p>
          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <button
              onClick={() => {
                if (window.deferredPrompt) {
                  window.deferredPrompt.prompt()
                }
              }}
              style={{
                backgroundColor: 'var(--cdmx)',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = '0.9'
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = '1'
              }}
            >
              📱 Descargar App
            </button>
            <Link
              href="/mundial-2026/"
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                border: '2px solid white',
                padding: '10px 24px',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent'
              }}
            >
              Volver a Mundial
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
