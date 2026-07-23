
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';

export const metadata = {
  title: 'FIFA World Cup 2026 Guadalajara — Estadio Akron | MetroGuia',
  description: 'Guía completa para llegar al Estadio Akron en Guadalajara para el FIFA World Cup 2026. 4 partidos de grupo, transporte público, horarios y tips para turistas.',
  openGraph: {
    title: 'FIFA World Cup 2026 Guadalajara — Guía de Transporte',
    description: '4 partidos en el Estadio Akron. Cómo llegar en Tren Ligero, autobús y otros medios.',
    url: 'https://metroguia.mx/gdl/mundial-2026',
  },
};

// JSON-LD structured data for World Cup events in Guadalajara
const eventosGDL = [
  {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: 'FIFA World Cup 2026 — Estadio Akron Guadalajara (11 junio)',
    description: 'Partido de la Fase de Grupos del Mundial FIFA 2026 en Guadalajara',
    image: 'https://www.metroguia.mx/og-mundial-2026.png',
    startDate: '2026-06-11',
    endDate: '2026-06-11',
    location: {
      '@type': 'Place',
      name: 'Estadio Akron',
      address: { '@type': 'PostalAddress', addressLocality: 'Guadalajara', addressRegion: 'Jalisco', addressCountry: 'MX' },
      geo: { '@type': 'GeoCoordinates', latitude: 20.488056, longitude: -103.268889 }
    },
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    performer: [
      {
        '@type': 'Organization',
        name: 'FIFA'
      }
    ],
    organizer: { '@type': 'Organization', name: 'FIFA', url: 'https://www.fifa.com' },
    offers: {
      '@type': 'Offer',
      url: 'https://www.fifa.com/tickets',
      priceCurrency: 'MXN',
      availability: 'https://schema.org/PreOrder',
      validFrom: '2026-06-11'
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: 'FIFA World Cup 2026 — Estadio Akron Guadalajara (18 junio)',
    description: 'Partido de la Fase de Grupos del Mundial FIFA 2026',
    startDate: '2026-06-18',
    location: {
      '@type': 'Place',
      name: 'Estadio Akron',
      address: { '@type': 'PostalAddress', addressLocality: 'Guadalajara', addressRegion: 'Jalisco', addressCountry: 'MX' }
    },
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    organizer: { '@type': 'Organization', name: 'FIFA' }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: 'FIFA World Cup 2026 — Estadio Akron Guadalajara (23 junio)',
    description: 'Partido de la Fase de Grupos del Mundial FIFA 2026',
    image: 'https://www.metroguia.mx/og-mundial-2026.png',
    startDate: '2026-06-23',
    endDate: '2026-06-23',
    location: {
      '@type': 'Place',
      name: 'Estadio Akron',
      address: { '@type': 'PostalAddress', addressLocality: 'Guadalajara', addressRegion: 'Jalisco', addressCountry: 'MX' }
    },
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    performer: [{ '@type': 'Organization', name: 'FIFA' }],
    organizer: { '@type': 'Organization', name: 'FIFA', url: 'https://www.fifa.com' },
    offers: { '@type': 'Offer', url: 'https://www.fifa.com/tickets', priceCurrency: 'MXN', availability: 'https://schema.org/PreOrder', validFrom: '2026-06-23' }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: 'FIFA World Cup 2026 — Estadio Akron Guadalajara (26 junio)',
    description: 'Partido de la Fase de Grupos del Mundial FIFA 2026',
    image: 'https://www.metroguia.mx/og-mundial-2026.png',
    startDate: '2026-06-26',
    endDate: '2026-06-26',
    location: {
      '@type': 'Place',
      name: 'Estadio Akron',
      address: { '@type': 'PostalAddress', addressLocality: 'Guadalajara', addressRegion: 'Jalisco', addressCountry: 'MX' }
    },
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    performer: [{ '@type': 'Organization', name: 'FIFA' }],
    organizer: { '@type': 'Organization', name: 'FIFA', url: 'https://www.fifa.com' },
    offers: { '@type': 'Offer', url: 'https://www.fifa.com/tickets', priceCurrency: 'MXN', availability: 'https://schema.org/PreOrder', validFrom: '2026-06-26' }
  }
];

const partidos = [
  {
    fecha: 'Jueves, 11 de Junio',
    hora: 'Por confirmar',
    partido: 'Corea del Sur vs. Playoff UEFA',
    grupo: 'Grupo A',
    estadio: 'Estadio Akron',
  },
  {
    fecha: 'Jueves, 18 de Junio',
    hora: 'Por confirmar',
    partido: 'México vs. Corea del Sur',
    grupo: 'Grupo A',
    destacado: true,
    estadio: 'Estadio Akron',
  },
  {
    fecha: 'Martes, 23 de Junio',
    hora: 'Por confirmar',
    partido: 'Colombia vs. Playoff Intercontinental',
    grupo: 'Grupo K',
    estadio: 'Estadio Akron',
  },
  {
    fecha: 'Viernes, 26 de Junio',
    hora: 'Por confirmar',
    partido: 'Uruguay vs. España',
    grupo: 'Grupo H',
    estadio: 'Estadio Akron',
  },
];

export default function Mundial2026Page() {
  return (
    <main style={{ backgroundColor: '#ffffff' }}>
      {eventosGDL.map((evento, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(evento) }}
        />
      ))}
      {/* HERO */}
      <section
        style={{
          background: `linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)`,
          color: '#ffffff',
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h1
            style={{
              fontSize: '56px',
              fontFamily: 'Syne, sans-serif',
              fontWeight: '800',
              margin: '0 0 16px 0',
              lineHeight: '1.2',
            }}
          >
            ⚽ FIFA World Cup 2026
          </h1>
          <p
            style={{
              fontSize: '28px',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: '600',
              margin: '0 0 24px 0',
              opacity: '0.95',
            }}
          >
            Guadalajara — Estadio Akron
          </p>
          <p
            style={{
              fontSize: '18px',
              fontFamily: 'DM Sans, sans-serif',
              margin: '0',
              opacity: '0.9',
            }}
          >
            4 partidos de grupo • Junio 2026 • Guía de transporte completa
          </p>
        </div>
      </section>

      {/* PARTIDOS */}
      <section style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto', padding: '80px 24px' }}>
        <h2
          style={{
            fontSize: '40px',
            fontFamily: 'Syne, sans-serif',
            fontWeight: '700',
            marginBottom: '48px',
            textAlign: 'center',
            color: '#1f2937',
          }}
        >
          Partidos Confirmados en Guadalajara
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
          }}
        >
          {partidos.map((partido, idx) => (
            <div
              key={idx}
              style={{
                padding: '32px',
                backgroundColor: partido.destacado ? '#fef3c7' : '#f9fafb',
                border: partido.destacado ? '2px solid #f59e0b' : '1px solid #e5e7eb',
                borderRadius: '8px',
                position: 'relative',
              }}
            >
              {partido.destacado && (
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    backgroundColor: '#f59e0b',
                    color: '#ffffff',
                    padding: '4px 12px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: '700',
                  }}
                >
                  DESTACADO
                </div>
              )}
              <p
                style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  margin: '0 0 8px 0',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: '600',
                }}
              >
                {partido.fecha}
              </p>
              <h3
                style={{
                  fontSize: '22px',
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: '700',
                  margin: '0 0 12px 0',
                  color: '#1f2937',
                  lineHeight: '1.4',
                }}
              >
                {partido.partido}
              </h3>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '12px 0',
                  borderTop: '1px solid #e5e7eb',
                  borderBottom: '1px solid #e5e7eb',
                  marginBottom: '12px',
                }}
              >
                <span
                  style={{
                    fontSize: '12px',
                    color: '#6b7280',
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: '600',
                  }}
                >
                  {partido.grupo}
                </span>
                <span
                  style={{
                    fontSize: '12px',
                    color: '#6b7280',
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: '600',
                  }}
                >
                  {partido.hora}
                </span>
              </div>
              <p
                style={{
                  fontSize: '13px',
                  color: '#374151',
                  margin: '0',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                📍 {partido.estadio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CÓMO LLEGAR */}
      <section
        style={{
          backgroundColor: '#f3f4f6',
          padding: '80px 24px',
        }}
      >
        <div style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2
            style={{
              fontSize: '40px',
              fontFamily: 'Syne, sans-serif',
              fontWeight: '700',
              marginBottom: '48px',
              color: '#1f2937',
            }}
          >
            Cómo Llegar al Estadio Akron
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px',
            }}
          >
            {/* OPCIÓN 1: TREN LIGERO */}
            <div
              style={{
                padding: '32px',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                borderLeft: '4px solid #06B6D4',
              }}
            >
              <h3
                style={{
                  fontSize: '22px',
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: '700',
                  margin: '0 0 16px 0',
                  color: '#1f2937',
                }}
              >
                Opción 1: Tren Ligero + Caminar
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  margin: '0 0 16px 0',
                  fontFamily: 'DM Sans, sans-serif',
                  lineHeight: '1.6',
                }}
              >
                <strong>La más económica y segura</strong>
              </p>
              <ol
                style={{
                  paddingLeft: '20px',
                  margin: '0 0 16px 0',
                }}
              >
                <li style={{ marginBottom: '8px', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', color: '#374151' }}>
                  Toma la <strong>Línea 3</strong> (Naranja) hacia Estadio Chivas
                </li>
                <li style={{ marginBottom: '8px', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', color: '#374151' }}>
                  Baja en la estación <strong>Estadio Chivas</strong>
                </li>
                <li style={{ marginBottom: '8px', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', color: '#374151' }}>
                  Camina <strong>20 minutos</strong> siguiendo las señales hacia el Estadio Akron
                </li>
              </ol>
              <div
                style={{
                  backgroundColor: '#f0f9ff',
                  padding: '12px 16px',
                  borderRadius: '4px',
                  fontSize: '13px',
                  fontFamily: 'DM Sans, sans-serif',
                  color: '#0c4a6e',
                }}
              >
                ⏱ Tiempo total: ~45 minutos desde el Centro<br/>
                💵 Costo: $15 MXN
              </div>
            </div>

            {/* OPCIÓN 2: TREN + AUTOBÚS */}
            <div
              style={{
                padding: '32px',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                borderLeft: '4px solid #F97316',
              }}
            >
              <h3
                style={{
                  fontSize: '22px',
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: '700',
                  margin: '0 0 16px 0',
                  color: '#1f2937',
                }}
              >
                Opción 2: Tren Ligero + Autobús
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  margin: '0 0 16px 0',
                  fontFamily: 'DM Sans, sans-serif',
                  lineHeight: '1.6',
                }}
              >
                <strong>Más rápida sin caminar tanto</strong>
              </p>
              <ol
                style={{
                  paddingLeft: '20px',
                  margin: '0 0 16px 0',
                }}
              >
                <li style={{ marginBottom: '8px', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', color: '#374151' }}>
                  Toma la <strong>Línea 3</strong> hasta <strong>Periférico Belenes</strong>
                </li>
                <li style={{ marginBottom: '8px', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', color: '#374151' }}>
                  Transborda a autobús <strong>T02</strong> hacia Estadio Chivas
                </li>
                <li style={{ marginBottom: '8px', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', color: '#374151' }}>
                  Baja en parada Estadio Chivas — camina 5 minutos
                </li>
              </ol>
              <div
                style={{
                  backgroundColor: '#fff7ed',
                  padding: '12px 16px',
                  borderRadius: '4px',
                  fontSize: '13px',
                  fontFamily: 'DM Sans, sans-serif',
                  color: '#7c2d12',
                }}
              >
                ⏱ Tiempo total: ~1 hora desde el Centro<br/>
                💵 Costo: $14.25 MXN
              </div>
            </div>

            {/* OPCIÓN 3: MI MACRO PERIFÉRICO */}
            <div
              style={{
                padding: '32px',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                borderLeft: '4px solid #ec4899',
              }}
            >
              <h3
                style={{
                  fontSize: '22px',
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: '700',
                  margin: '0 0 16px 0',
                  color: '#1f2937',
                }}
              >
                Opción 3: Mi Macro Periférico
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  margin: '0 0 16px 0',
                  fontFamily: 'DM Sans, sans-serif',
                  lineHeight: '1.6',
                }}
              >
                <strong>Directo desde zonas periféricas</strong>
              </p>
              <ol
                style={{
                  paddingLeft: '20px',
                  margin: '0 0 16px 0',
                }}
              >
                <li style={{ marginBottom: '8px', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', color: '#374151' }}>
                  Toma el autobús <strong>Mi Macro Periférico</strong>
                </li>
                <li style={{ marginBottom: '8px', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', color: '#374151' }}>
                  Baja en parada <strong>Estadio Chivas</strong>
                </li>
                <li style={{ marginBottom: '8px', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', color: '#374151' }}>
                  Camina 20 minutos por sendero hacia Estadio Akron
                </li>
              </ol>
              <div
                style={{
                  backgroundColor: '#fce7f3',
                  padding: '12px 16px',
                  borderRadius: '4px',
                  fontSize: '13px',
                  fontFamily: 'DM Sans, sans-serif',
                  color: '#831843',
                }}
              >
                ⏱ Variable según origen<br/>
                💵 Costo: $9.50 MXN
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUADALAJARA COMO DESTINO */}
      <section style={{
        backgroundColor: '#fef3c7',
        padding: '80px 24px',
      }}>
        <div style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{
            fontSize: '40px',
            fontFamily: 'Syne, sans-serif',
            fontWeight: '700',
            marginBottom: '48px',
            color: '#1f2937',
          }}>
            🍹 Guadalajara: Más Allá del Fútbol
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '48px',
          }}>
            {[
              {
                icono: '🥃',
                titulo: 'Tequila & Distilería',
                desc: 'Visita destilerías en los alrededores de Guadalajara. Tours de 2-3 horas desde el centro. Prueba tequila autêntico en bodegas locales.',
              },
              {
                icono: '🍽️',
                titulo: 'Comida Tapatía',
                desc: 'Birria, tortas ahogadas, gorditas. Come en mercados locales (Mercado San Juan de Dios) o restaurantes tradicionales cerca de la Catedral.',
              },
              {
                icono: '🎵',
                titulo: 'Música y Cultura',
                desc: 'Cuna del Mariachi. En las noches, escucha música en vivo en Plaza Guadalajara o en restaurantes del Centro Histórico.',
              },
              {
                icono: '🎭',
                titulo: 'Vida Nocturna',
                desc: 'Bares y cantinas en Chapultepec. Después de los partidos, la zona de la Avenida México es popular con turistas y locales.',
              },
              {
                icono: '🏛️',
                titulo: 'Centro Histórico',
                desc: 'Catedral Metropolitana, Teatro Degollado, Museos. Todo accesible a pie desde la estación Morelos (Línea 3).',
              },
              {
                icono: '🛍️',
                titulo: 'Compras',
                desc: 'Artesanía mexicana: cerámica, vidrio soplado, textiles. Tianguis en El Baratillo — ve de día, es la zona con más delincuencia en noches.',
              },
            ].map((item, idx) => (
              <div key={idx} style={{
                padding: '24px',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                border: '2px solid #f59e0b',
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

      {/* TIPS PARA TURISTAS */}
      <section style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto', padding: '80px 24px' }}>
        <h2
          style={{
            fontSize: '40px',
            fontFamily: 'Syne, sans-serif',
            fontWeight: '700',
            marginBottom: '48px',
            color: '#1f2937',
          }}
        >
          Tips Importantes para Turistas
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {[
            {
              icono: '🎟️',
              titulo: 'Compra entradas con anticipación',
              desc: 'Los partidos se agotan rápidamente, especialmente México vs Corea del Sur el 18 de Junio.',
            },
            {
              icono: '🕐',
              titulo: 'Llega temprano',
              desc: 'Aunque el transporte es eficiente, el día del partido habrá mucha aglomeración. Llega 2-3 horas antes.',
            },
            {
              icono: '💳',
              titulo: 'Tarjeta Mi Movilidad',
              desc: 'Carga saldo en una tarjeta de transporte para moverte fácilmente por toda la ciudad.',
            },
            {
              icono: '👟',
              titulo: 'Calzado cómodo',
              desc: 'Si caminas desde la estación, usa zapatos deportivos y ropa cómoda.',
            },
            {
              icono: '🌞',
              titulo: 'Protección solar',
              desc: 'Junio es muy caluroso en Guadalajara. Lleva bloqueador solar y una gorra.',
            },
            {
              icono: '📱',
              titulo: 'Descarga mapas offline',
              desc: 'Descarga maps.me o Google Maps offline para no depender del internet.',
            },
          ].map((tip, idx) => (
            <div
              key={idx}
              style={{
                padding: '24px',
                backgroundColor: '#f9fafb',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
              }}
            >
              <h3
                style={{
                  fontSize: '28px',
                  margin: '0 0 12px 0',
                }}
              >
                {tip.icono}
              </h3>
              <h4
                style={{
                  fontSize: '18px',
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: '700',
                  margin: '0 0 8px 0',
                  color: '#1f2937',
                }}
              >
                {tip.titulo}
              </h4>
              <p
                style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  margin: '0',
                  fontFamily: 'DM Sans, sans-serif',
                  lineHeight: '1.6',
                }}
              >
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ESTACIONES CERCANAS */}
      <section
        style={{
          backgroundColor: '#f3f4f6',
          padding: '80px 24px',
        }}
      >
        <div style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: '40px',
              fontFamily: 'Syne, sans-serif',
              fontWeight: '700',
              marginBottom: '16px',
              color: '#1f2937',
            }}
          >
            Estación Clave: Estadio Chivas (Línea 3)
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: '#6b7280',
              margin: '0 0 32px 0',
              fontFamily: 'DM Sans, sans-serif',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Es la parada más cercana al Estadio Akron. Conecta directamente con la Línea 3 desde el Centro Histórico de Guadalajara.
          </p>
          <Link href="/gdl/estacion/estadio-chivas">
            <button
              style={{
                padding: '14px 32px',
                backgroundColor: '#06B6D4',
                color: '#ffffff',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                fontFamily: 'Syne, sans-serif',
                fontWeight: '700',
                cursor: 'pointer',
                marginBottom: '32px',
              }}
            >
              Ver Estación Estadio Chivas
            </button>
          </Link>
          <Link href="/gdl/linea/3">
            <button
              style={{
                padding: '14px 32px',
                backgroundColor: '#F97316',
                color: '#ffffff',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                fontFamily: 'Syne, sans-serif',
                fontWeight: '700',
                cursor: 'pointer',
              }}
            >
              Explorar Línea 3 Completa
            </button>
          </Link>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        style={{
          backgroundColor: '#ffffff',
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '36px',
            fontFamily: 'Syne, sans-serif',
            fontWeight: '700',
            margin: '0 0 16px 0',
            color: '#1f2937',
          }}
        >
          Disfruta el Mundial en Guadalajara
        </h2>
        <p
          style={{
            fontSize: '16px',
            color: '#6b7280',
            margin: '0 0 32px 0',
            fontFamily: 'DM Sans, sans-serif',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Con el Tren Ligero, el transporte es fácil y económico. Concentra tu energía en disfrutar los partidos.
        </p>
        <Link href="/gdl">
          <button
            style={{
              padding: '14px 32px',
              backgroundColor: '#1f2937',
              color: '#ffffff',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              fontFamily: 'Syne, sans-serif',
              fontWeight: '700',
              cursor: 'pointer',
            }}
          >
            Volver a Metro Guadalajara
          </button>
        </Link>
      </section>
    </main>
  );
}