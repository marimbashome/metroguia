import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';

export const metadata = {
  title: 'FIFA World Cup 2026 Monterrey — Guía Completa | MetroGuia',
  description: 'Guía completa para acceder al Estadio BBVA durante el Mundial 2026. Horarios de partidos, cómo llegar en metro, recomendaciones para turistas.',
  openGraph: {
    title: 'FIFA World Cup 2026 Monterrey — Estadio BBVA',
    description: 'Partidos, transporte público y guía turística para el Mundial',
    url: 'https://metroguia.mx/mty/mundial-2026',
    locale: 'es_MX'
  },
  canonical: 'https://metroguia.mx/mty/mundial-2026'
};

// JSON-LD structured data for World Cup events in Monterrey
const eventosMTY = [
  {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: 'FIFA World Cup 2026 — Estadio BBVA Monterrey (14 junio)',
    description: 'Partido de la Fase de Grupos del Mundial FIFA 2026 en Monterrey',
    startDate: '2026-06-14',
    location: {
      '@type': 'Place',
      name: 'Estadio BBVA Bancomer',
      address: { '@type': 'PostalAddress', addressLocality: 'Monterrey', addressRegion: 'Nuevo León', addressCountry: 'MX' },
      geo: { '@type': 'GeoCoordinates', latitude: 25.643333, longitude: -100.305556 }
    },
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    organizer: { '@type': 'Organization', name: 'FIFA' }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: 'FIFA World Cup 2026 — Estadio BBVA Monterrey (20 junio)',
    description: 'Partido de la Fase de Grupos del Mundial FIFA 2026',
    startDate: '2026-06-20',
    location: { '@type': 'Place', name: 'Estadio BBVA Bancomer', address: { '@type': 'PostalAddress', addressLocality: 'Monterrey', addressRegion: 'Nuevo León', addressCountry: 'MX' } },
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    organizer: { '@type': 'Organization', name: 'FIFA' }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: 'FIFA World Cup 2026 — Estadio BBVA Monterrey (24 junio)',
    description: 'Partido de la Fase de Grupos del Mundial FIFA 2026',
    startDate: '2026-06-24',
    location: { '@type': 'Place', name: 'Estadio BBVA Bancomer', address: { '@type': 'PostalAddress', addressLocality: 'Monterrey', addressRegion: 'Nuevo León', addressCountry: 'MX' } },
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    organizer: { '@type': 'Organization', name: 'FIFA' }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: 'FIFA World Cup 2026 — Estadio BBVA Monterrey (29 junio)',
    description: 'Partido de la Fase de Grupos del Mundial FIFA 2026',
    startDate: '2026-06-29',
    location: { '@type': 'Place', name: 'Estadio BBVA Bancomer', address: { '@type': 'PostalAddress', addressLocality: 'Monterrey', addressRegion: 'Nuevo León', addressCountry: 'MX' } },
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    organizer: { '@type': 'Organization', name: 'FIFA' }
  }
];

export default function Mundial2026() {
  return (
    <main style={{ backgroundColor: '#fff', color: '#1a1a1a' }}>
      {eventosMTY.map((evento, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(evento) }}
        />
      ))}
      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #F97316 0%, #EC4899 100%)',
        color: '#fff',
        padding: '60px 20px',
        textAlign: 'center',
        borderBottom: '6px solid #F97316'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: '48px',
            fontWeight: 800,
            margin: '0 0 15px 0',
            lineHeight: 1.2
          }}>
            🏟️ FIFA World Cup 2026
          </h1>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '24px',
            fontWeight: 500,
            margin: '0 0 10px 0'
          }}>
            Monterrey - Estadio BBVA Bancomer
          </p>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            fontWeight: 400,
            margin: '0',
            opacity: 0.95
          }}>
            Tu guía completa para acceder al estadio usando el transporte público
          </p>
        </div>
      </section>

      {/* PARTIDOS */}
      <section style={{
        maxWidth: '1200px',
        margin: '60px auto',
        padding: '0 20px'
      }}>
        <h2 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: '36px',
          fontWeight: 700,
          margin: '0 0 40px 0',
          color: '#1a1a1a'
        }}>
          Partidos en Estadio BBVA (4 Encuentros)
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '25px'
        }}>
          <div style={{
            background: '#FFF5EB',
            border: '3px solid #F97316',
            borderRadius: '12px',
            padding: '30px'
          }}>
            <div style={{
              background: '#F97316',
              color: '#fff',
              padding: '12px 20px',
              borderRadius: '6px',
              marginBottom: '20px',
              fontWeight: 700,
              display: 'inline-block'
            }}>
              Partido 1
            </div>
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '20px',
              fontWeight: 700,
              margin: '15px 0 10px 0',
              color: '#1a1a1a'
            }}>
              Grupo C - Fase de Grupos
            </h3>
            <div style={{
              background: '#fff',
              padding: '15px',
              borderRadius: '6px',
              marginBottom: '15px',
              border: '2px solid #F97316'
            }}>
              <p style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '18px',
                fontWeight: 700,
                margin: '0',
                color: '#1a1a1a'
              }}>
                UEFA Playoff Winner B
              </p>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '14px',
                color: '#666',
                margin: '5px 0 0 0'
              }}>
                (Ukraine, Sweden, Poland o Albania)
              </p>
            </div>
            <div style={{
              textAlign: 'center',
              fontSize: '24px',
              fontWeight: 700,
              color: '#F97316',
              margin: '15px 0'
            }}>
              vs
            </div>
            <div style={{
              background: '#fff',
              padding: '15px',
              borderRadius: '6px',
              marginBottom: '20px',
              border: '2px solid #F97316'
            }}>
              <p style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '18px',
                fontWeight: 700,
                margin: '0',
                color: '#1a1a1a'
              }}>
                🇹🇳 Tunisia
              </p>
            </div>
            <p style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '28px',
              fontWeight: 700,
              margin: '0 0 8px 0',
              color: '#F97316'
            }}>
              14 de Junio
            </p>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '16px',
              color: '#666',
              margin: '0'
            }}>
              10:00 PM ET (8:00 PM Hora Monterrey)
            </p>
          </div>

          <div style={{
            background: '#FFF5EB',
            border: '3px solid #F97316',
            borderRadius: '12px',
            padding: '30px'
          }}>
            <div style={{
              background: '#F97316',
              color: '#fff',
              padding: '12px 20px',
              borderRadius: '6px',
              marginBottom: '20px',
              fontWeight: 700,
              display: 'inline-block'
            }}>
              Partido 2
            </div>
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '20px',
              fontWeight: 700,
              margin: '15px 0 10px 0',
              color: '#1a1a1a'
            }}>
              Grupo C - Fase de Grupos
            </h3>
            <div style={{
              background: '#fff',
              padding: '15px',
              borderRadius: '6px',
              marginBottom: '15px',
              border: '2px solid #F97316'
            }}>
              <p style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '18px',
                fontWeight: 700,
                margin: '0',
                color: '#1a1a1a'
              }}>
                🇹🇳 Tunisia
              </p>
            </div>
            <div style={{
              textAlign: 'center',
              fontSize: '24px',
              fontWeight: 700,
              color: '#F97316',
              margin: '15px 0'
            }}>
              vs
            </div>
            <div style={{
              background: '#fff',
              padding: '15px',
              borderRadius: '6px',
              marginBottom: '20px',
              border: '2px solid #F97316'
            }}>
              <p style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '18px',
                fontWeight: 700,
                margin: '0',
                color: '#1a1a1a'
              }}>
                🇯🇵 Japan
              </p>
            </div>
            <p style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '28px',
              fontWeight: 700,
              margin: '0 0 8px 0',
              color: '#F97316'
            }}>
              20 de Junio
            </p>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '16px',
              color: '#666',
              margin: '0'
            }}>
              12:00 AM ET (10:00 PM Hora Monterrey - 19 Jun)
            </p>
          </div>

          <div style={{
            background: '#FFF5EB',
            border: '3px solid #F97316',
            borderRadius: '12px',
            padding: '30px'
          }}>
            <div style={{
              background: '#F97316',
              color: '#fff',
              padding: '12px 20px',
              borderRadius: '6px',
              marginBottom: '20px',
              fontWeight: 700,
              display: 'inline-block'
            }}>
              Partido 3
            </div>
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '20px',
              fontWeight: 700,
              margin: '15px 0 10px 0',
              color: '#1a1a1a'
            }}>
              Grupo D - Fase de Grupos
            </h3>
            <div style={{
              background: '#fff',
              padding: '15px',
              borderRadius: '6px',
              marginBottom: '15px',
              border: '2px solid #F97316'
            }}>
              <p style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '18px',
                fontWeight: 700,
                margin: '0',
                color: '#1a1a1a'
              }}>
                🇰🇷 South Korea
              </p>
            </div>
            <div style={{
              textAlign: 'center',
              fontSize: '24px',
              fontWeight: 700,
              color: '#F97316',
              margin: '15px 0'
            }}>
              vs
            </div>
            <div style={{
              background: '#fff',
              padding: '15px',
              borderRadius: '6px',
              marginBottom: '20px',
              border: '2px solid #F97316'
            }}>
              <p style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '18px',
                fontWeight: 700,
                margin: '0',
                color: '#1a1a1a'
              }}>
                🇿🇦 South Africa
              </p>
            </div>
            <p style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '28px',
              fontWeight: 700,
              margin: '0 0 8px 0',
              color: '#F97316'
            }}>
              24 de Junio
            </p>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '16px',
              color: '#666',
              margin: '0'
            }}>
              9:00 PM ET (7:00 PM Hora Monterrey)
            </p>
          </div>

          <div style={{
            background: '#FEF3C7',
            border: '3px solid #EC4899',
            borderRadius: '12px',
            padding: '30px'
          }}>
            <div style={{
              background: '#EC4899',
              color: '#fff',
              padding: '12px 20px',
              borderRadius: '6px',
              marginBottom: '20px',
              fontWeight: 700,
              display: 'inline-block'
            }}>
              Partido 4
            </div>
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '20px',
              fontWeight: 700,
              margin: '15px 0 10px 0',
              color: '#1a1a1a'
            }}>
              Octavos de Final
            </h3>
            <div style={{
              background: '#fff',
              padding: '15px',
              borderRadius: '6px',
              marginBottom: '15px',
              border: '2px solid #EC4899'
            }}>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '16px',
                color: '#666',
                margin: '0'
              }}>
                Ganador del Grupo F
              </p>
            </div>
            <div style={{
              textAlign: 'center',
              fontSize: '24px',
              fontWeight: 700,
              color: '#EC4899',
              margin: '15px 0'
            }}>
              vs
            </div>
            <div style={{
              background: '#fff',
              padding: '15px',
              borderRadius: '6px',
              marginBottom: '20px',
              border: '2px solid #EC4899'
            }}>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '16px',
                color: '#666',
                margin: '0'
              }}>
                Segundo lugar del Grupo C
              </p>
            </div>
            <p style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '28px',
              fontWeight: 700,
              margin: '0 0 8px 0',
              color: '#EC4899'
            }}>
              29 de Junio
            </p>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '16px',
              color: '#666',
              margin: '0'
            }}>
              9:00 PM ET (7:00 PM Hora Monterrey)
            </p>
          </div>
        </div>
      </section>

      {/* CÓMO LLEGAR */}
      <section style={{
        background: '#f9fafb',
        padding: '60px 20px',
        marginTop: '60px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: '36px',
            fontWeight: 700,
            margin: '0 0 40px 0',
            color: '#1a1a1a',
            textAlign: 'center'
          }}>
            🚇 Cómo Llegar al Estadio BBVA
          </h2>
          <div style={{
            background: '#fff',
            border: '3px solid #F97316',
            borderRadius: '12px',
            padding: '30px',
            marginBottom: '30px'
          }}>
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '24px',
              fontWeight: 700,
              margin: '0 0 20px 0',
              color: '#F97316'
            }}>
              Opción 1: Metro Línea 1 + Caminata (Recomendado para Turistas)
            </h3>
            <ol style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '16px',
              lineHeight: 2,
              margin: '0',
              paddingLeft: '20px',
              color: '#1a1a1a'
            }}>
              <li><strong>Sube a Línea 1 (Amarilla)</strong> desde cualquier estación del centro: Fundadores, Cuauhtémoc, Alameda, etc.</li>
              <li><strong>Dirección:</strong> Hacia Exposición (oriente)</li>
              <li><strong>Bájate en:</strong> Estación Exposición (terminal)</li>
              <li><strong>Camina:</strong> Aproximadamente 22 minutos</li>
              <li><strong>Ruta a pie:</strong> Sal de la estación → Cruza Expo Ganadera → Pasa por Domo Care → Cruza puente sobre Río La Silla → Llegas al Estadio BBVA</li>
              <li><strong>Tiempo total desde centro:</strong> 40-50 minutos</li>
              <li><strong>Costo:</strong> ~$8 MXN por viaje</li>
            </ol>
          </div>

          <div style={{
            background: '#fff',
            border: '3px solid #EC4899',
            borderRadius: '12px',
            padding: '30px',
            marginBottom: '30px'
          }}>
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '24px',
              fontWeight: 700,
              margin: '0 0 20px 0',
              color: '#EC4899'
            }}>
              Opción 2: Autobús Directo (Más Rápido)
            </h3>
            <div style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '16px',
              lineHeight: 1.8,
              margin: '0',
              color: '#1a1a1a'
            }}>
              <p><strong>Rutas disponibles:</strong> 223, 214, TME, 093</p>
              <p><strong>Parada más cercana al Estadio:</strong> Las Torres (Estadio B.B.V.A.)</p>
              <p><strong>Tiempo:</strong> Más rápido que metro + caminata</p>
              <p><strong>Costo:</strong> Variable según ruta (~$8-12 MXN)</p>
            </div>
          </div>

          <div style={{
            background: '#E0F2FE',
            border: '3px solid #06b6d4',
            borderRadius: '12px',
            padding: '30px'
          }}>
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '24px',
              fontWeight: 700,
              margin: '0 0 20px 0',
              color: '#06b6d4'
            }}>
              💡 Tips Importantes para el Viaje
            </h3>
            <ul style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '16px',
              lineHeight: 1.8,
              margin: '0',
              paddingLeft: '20px',
              color: '#1a1a1a'
            }}>
              <li><strong>Llega temprano:</strong> Los partidos atraen a miles de aficionados. Llega con 1-2 horas de anticipación</li>
              <li><strong>Tarjeta del metro:</strong> Compra una tarjeta recargable en cualquier estación (válida para ambas líneas)</li>
              <li><strong>Horarios extendidos:</strong> Durante el Mundial, el metro tendrá horarios extendidos los días de partidos</li>
              <li><strong>Evita última hora:</strong> Después del partido, la estación Exposición estará muy concurrida. Considera esperar 30-45 minutos</li>
              <li><strong>Seguridad:</strong> Viaja con tus documentos y dinero en lugar seguro</li>
              <li><strong>Accesibilidad:</strong> Línea 1 tiene acceso para personas con movilidad reducida en varias estaciones</li>
              <li><strong>Información en vivo:</strong> Descarga la app del Metrorrey para horarios actualizados</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MONTERREY COMO DESTINO */}
      <section style={{
        background: 'linear-gradient(135deg, #FCA5A5 0%, #FBBF24 100%)',
        color: '#1f2937',
        padding: '80px 20px',
        marginTop: '60px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: '40px',
            fontWeight: 700,
            margin: '0 0 48px 0',
            color: '#1f2937',
            textAlign: 'center'
          }}>
            🏔️ Monterrey: La Ciudad de la Montaña
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '48px'
          }}>
            {[
              {
                icono: '🥩',
                titulo: 'Carne Asada Regia',
                desc: 'Especialidad de Monterrey. Come en restaurantes de la Macroplaza o barrios locales. Acompañado con tortillas de harina calientitas y salsa.',
              },
              {
                icono: '🌳',
                titulo: 'Parque Fundidora',
                desc: 'Pulmón verde de Monterrey con 65 hectáreas. Acceso fácil por Línea 1 (estación Parque Fundidora). Camina, come en restaurantes, relájate.',
              },
              {
                icono: '🏛️',
                titulo: 'Barrio Antiguo (Fundadores)',
                desc: 'Centro histórico con arquitectura colonial. Cafeterías, galerías, tiendas. Perfectamente ubicado para acceder a Línea 1 y 2.',
              },
              {
                icono: '🎨',
                titulo: 'Museos y Galerías',
                desc: 'MARCO (Museo de Arte Contemporáneo), Barrio Antiguo Museum. Muchos son gratuitos o de bajo costo. Abiertos días de partido.',
              },
              {
                icono: '🍴',
                titulo: 'Comida Norteña',
                desc: 'Cabrito, pan de machacado, dulces típicos. Come en restaurantes locales del Barrio Antiguo o Fundidora, no solo en cadenas.',
              },
              {
                icono: '📸',
                titulo: 'Paseo Santa Lucia',
                desc: 'Canal artificial pasando por el centro. Camina de noche, come en restaurantes con vista. Romántico y seguro, lleno de turistas.',
              },
            ].map((item, idx) => (
              <div key={idx} style={{
                padding: '24px',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                border: '2px solid #EC4899',
              }}>
                <h3 style={{
                  fontSize: '28px',
                  margin: '0 0 12px 0',
                }}>
                  {item.icono}
                </h3>
                <h4 style={{
                  fontSize: '18px',
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: '700',
                  margin: '0 0 8px 0',
                  color: '#1f2937',
                }}>
                  {item.titulo}
                </h4>
                <p style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  margin: '0',
                  fontFamily: 'DM Sans, sans-serif',
                  lineHeight: '1.6',
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DONDE HOSPEDARSE */}
      <section style={{
        maxWidth: '1200px',
        margin: '60px auto',
        padding: '0 20px'
      }}>
        <h2 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: '36px',
          fontWeight: 700,
          margin: '0 0 40px 0',
          color: '#1a1a1a'
        }}>
          🏨 Dónde Hospedarse
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '25px'
        }}>
          <div style={{
            background: '#fff',
            border: '2px solid #06b6d4',
            borderRadius: '12px',
            padding: '25px'
          }}>
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '20px',
              fontWeight: 700,
              margin: '0 0 15px 0',
              color: '#06b6d4'
            }}>
              Centro (Recomendado)
            </h3>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              color: '#666',
              margin: '0 0 15px 0',
              lineHeight: 1.6
            }}>
              Macroplaza, Barrio Antiguo, Cuauhtémoc. Fácil acceso a Línea 1 y 2. Muchas opciones de hospedaje.
            </p>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              color: '#999',
              margin: '0 0 10px 0'
            }}>
              <strong>Estaciones cercanas:</strong> Fundadores, Cuauhtémoc, Alameda
            </p>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              color: '#999',
              margin: '0'
            }}>
              <strong>Tiempo al Estadio:</strong> 35-45 min
            </p>
          </div>

          <div style={{
            background: '#fff',
            border: '2px solid #06b6d4',
            borderRadius: '12px',
            padding: '25px'
          }}>
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '20px',
              fontWeight: 700,
              margin: '0 0 15px 0',
              color: '#06b6d4'
            }}>
              Parque Fundidora
            </h3>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              color: '#666',
              margin: '0 0 15px 0',
              lineHeight: 1.6
            }}>
              Zona turística con parques, museos y restaurantes. Buena conexión a línea 1.
            </p>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              color: '#999',
              margin: '0 0 10px 0'
            }}>
              <strong>Estaciones cercanas:</strong> Parque Fundidora, Y Griega
            </p>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              color: '#999',
              margin: '0'
            }}>
              <strong>Tiempo al Estadio:</strong> 25-30 min
            </p>
          </div>

          <div style={{
            background: '#fff',
            border: '2px solid #06b6d4',
            borderRadius: '12px',
            padding: '25px'
          }}>
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '20px',
              fontWeight: 700,
              margin: '0 0 15px 0',
              color: '#06b6d4'
            }}>
              San Nicolás
            </h3>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              color: '#666',
              margin: '0 0 15px 0',
              lineHeight: 1.6
            }}>
              Municipio contiguo con opciones más económicas. Acceso directo a Línea 2.
            </p>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              color: '#999',
              margin: '0 0 10px 0'
            }}>
              <strong>Estaciones cercanas:</strong> San Nicolás, Universidad
            </p>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              color: '#999',
              margin: '0'
            }}>
              <strong>Tiempo al Estadio:</strong> 40-50 min
            </p>
          </div>
        </div>
      </section>

      {/* EXPLORAR MONTERREY */}
      <section style={{
        background: 'linear-gradient(135deg, #EC4899 0%, #f97316 100%)',
        color: '#fff',
        padding: '60px 20px',
        marginTop: '60px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: '32px',
            fontWeight: 700,
            margin: '0 0 15px 0'
          }}>
            Explora Monterrey Más Allá del Estadio
          </h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            margin: '0 0 30px 0',
            lineHeight: 1.6,
            opacity: 0.95
          }}>
            Descubre la Macroplaza, el Barrio Antiguo, Parque Fundidora y mucho más usando el metro
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '15px'
          }}>
            <Link href="/mty" style={{
              display: 'block',
              background: '#fff',
              color: '#EC4899',
              padding: '14px 30px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 700,
              transition: 'all 0.3s'
            }}>
              Ver Hub de Monterrey
            </Link>
            <Link href="/mty/linea/1" style={{
              display: 'block',
              background: 'rgba(255,255,255,0.2)',
              color: '#fff',
              padding: '14px 30px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 700,
              transition: 'all 0.3s'
            }}>
              Explorar Línea 1
            </Link>
            <Link href="/mty/linea/2" style={{
              display: 'block',
              background: 'rgba(255,255,255,0.2)',
              color: '#fff',
              padding: '14px 30px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 700,
              transition: 'all 0.3s'
            }}>
              Explorar Línea 2
            </Link>
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section style={{
        maxWidth: '1200px',
        margin: '60px auto',
        padding: '0 20px'
      }}>
        <h2 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: '36px',
          fontWeight: 700,
          margin: '0 0 40px 0',
          color: '#1a1a1a'
        }}>
          Preguntas Frecuentes
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '25px'
        }}>
          <div style={{
            background: '#f9fafb',
            padding: '25px',
            borderRadius: '8px',
            border: '2px solid #e5e7eb'
          }}>
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '16px',
              fontWeight: 700,
              margin: '0 0 12px 0',
              color: '#1a1a1a'
            }}>
              ¿Qué tan lejos está el Estadio de la estación Exposición?
            </h3>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              color: '#666',
              margin: '0',
              lineHeight: 1.6
            }}>
              Aproximadamente 22 minutos caminando. La ruta pasa por Expo Ganadera, Domo Care y cruza el río La Silla.
            </p>
          </div>

          <div style={{
            background: '#f9fafb',
            padding: '25px',
            borderRadius: '8px',
            border: '2px solid #e5e7eb'
          }}>
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '16px',
              fontWeight: 700,
              margin: '0 0 12px 0',
              color: '#1a1a1a'
            }}>
              ¿Cuál es la mejor estación para bajar si vengo del norte (San Nicolás)?
            </h3>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              color: '#666',
              margin: '0',
              lineHeight: 1.6
            }}>
              Cambia en Cuauhtémoc (conexión entre L2 y L1), luego sigue L1 hacia Exposición.
            </p>
          </div>

          <div style={{
            background: '#f9fafb',
            padding: '25px',
            borderRadius: '8px',
            border: '2px solid #e5e7eb'
          }}>
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '16px',
              fontWeight: 700,
              margin: '0 0 12px 0',
              color: '#1a1a1a'
            }}>
              ¿A qué hora debería salir del hotel?
            </h3>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              color: '#666',
              margin: '0',
              lineHeight: 1.6
            }}>
              Con 1.5-2 horas de anticipación. Permite tiempo para: viaje en metro, caminata, fila de entrada y seguridad.
            </p>
          </div>

          <div style={{
            background: '#f9fafb',
            padding: '25px',
            borderRadius: '8px',
            border: '2px solid #e5e7eb'
          }}>
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '16px',
              fontWeight: 700,
              margin: '0 0 12px 0',
              color: '#1a1a1a'
            }}>
              ¿El metro funcionará hasta tarde después del partido?
            </h3>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              color: '#666',
              margin: '0',
              lineHeight: 1.6
            }}>
              Sí. Durante el Mundial, el Metrorrey extenderá sus horarios en días de partidos. Verifica antes de ir.
            </p>
          </div>

          <div style={{
            background: '#f9fafb',
            padding: '25px',
            borderRadius: '8px',
            border: '2px solid #e5e7eb'
          }}>
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '16px',
              fontWeight: 700,
              margin: '0 0 12px 0',
              color: '#1a1a1a'
            }}>
              ¿Necesito cambio para el metro o hay tarjetas?
            </h3>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              color: '#666',
              margin: '0',
              lineHeight: 1.6
            }}>
              Compra una tarjeta recargable en cualquier estación. Es más fácil y funciona en ambas líneas.
            </p>
          </div>

          <div style={{
            background: '#f9fafb',
            padding: '25px',
            borderRadius: '8px',
            border: '2px solid #e5e7eb'
          }}>
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '16px',
              fontWeight: 700,
              margin: '0 0 12px 0',
              color: '#1a1a1a'
            }}>
              ¿Hay estacionamiento en el Estadio para autos?
            </h3>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              color: '#666',
              margin: '0',
              lineHeight: 1.6
            }}>
              Sí, pero limitado. El metro es más recomendable durante el Mundial para evitar tráfico.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section style={{
        background: '#f9fafb',
        padding: '40px 20px',
        textAlign: 'center',
        marginTop: '60px'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: '28px',
            fontWeight: 700,
            margin: '0 0 15px 0'
          }}>
            ¿Listo para el Partido?
          </h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            color: '#666',
            margin: '0 0 25px 0',
            lineHeight: 1.6
          }}>
            Descarga la app del Metrorrey, reserva tu hotel y prepárate para una experiencia inolvidable del Mundial 2026 en Monterrey.
          </p>
          <Link href="/mty" style={{
            display: 'inline-block',
            background: '#F97316',
            color: '#fff',
            padding: '14px 40px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '16px',
            transition: 'all 0.3s'
          }}>
            Ver Guía Completa de Monterrey
          </Link>
        </div>
      </section>
    </main>
  );
}