import { lineasMTY } from '@/data/mty/lineas-detalle';
import { estacionesMTY } from '@/data/mty/estaciones';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';

export const metadata = {
  title: 'Metrorrey Monterrey — Metro 2 líneas, 32 estaciones + FIFA 2026 | MetroGuia',
  description: 'Metrorrey Monterrey: guía turística completa del Metro. 2 líneas, 32 estaciones. Parque Fundidora, Barrio Antiguo, MARCO, Macroplaza, Estadio BBVA. Horarios, mapas, tickets y cómo llegar a partidos del Mundial 2026.',
  keywords: 'Metrorrey Monterrey, Metro, transporte Monterrey, Parque Fundidora, Estadio BBVA, FIFA 2026, turismo',
  openGraph: {
    title: 'Metrorrey Monterrey — Metro + Guía FIFA 2026',
    description: 'Descubre las 2 líneas del Metrorrey de Monterrey. Acceso directo a Parque Fundidora, MARCO, Macroplaza y Estadio BBVA.',
    url: 'https://metroguia.mx/mty',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const estacionesDestacadas = estacionesMTY.filter(e =>
  ['parque-fundidora', 'exposicion', 'central', 'cuauhtemoc'].includes(e.slug)
);

export default function MTYPage() {
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
        name: 'Monterrey',
        item: 'https://metroguia.mx/mty/'
      }
    ]
  }

  return (
    <main style={{ backgroundColor: '#0A0A0F', color: '#F0F0F5' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* HERO */}
      <section
        className="hero"
        style={{
          background: 'linear-gradient(135deg, #EC4899 0%, #BE185D 100%)',
          color: '#FFFFFF',
          padding: '80px 24px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h1
            style={{
              fontSize: '3.5rem',
              fontWeight: '800',
              margin: '0 0 16px 0',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
            }}
          >
            Metrorrey Monterrey
          </h1>
          <p
            style={{
              fontSize: '1.5rem',
              fontWeight: '500',
              margin: '0 0 24px 0',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto',
              opacity: '0.95',
              lineHeight: '1.4',
            }}
          >
            Metro Rápido · 2 Líneas · 32 Estaciones
          </p>
          <p
            style={{
              fontSize: '1.125rem',
              fontWeight: '400',
              margin: '0',
              opacity: '0.9',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Sistema de transporte moderno de Monterrey. Conexión directa al Estadio BBVA para el Mundial 2026.
          </p>
        </div>
      </section>

      {/* ESTADÍSTICAS */}
      <section
        style={{
          backgroundColor: '#14141F',
          padding: '48px 24px',
          borderBottom: '1px solid #2A2A3E',
        }}
      >
        <div
          style={{
            maxWidth: '1000px',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
            textAlign: 'center',
          }}
        >
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#EC4899', margin: '0 0 8px 0' }}>
              32
            </p>
            <p style={{ fontSize: '1rem', color: '#8888A0', margin: '0', fontWeight: '500' }}>
              Estaciones
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#EC4899', margin: '0 0 8px 0' }}>
              2
            </p>
            <p style={{ fontSize: '1rem', color: '#8888A0', margin: '0', fontWeight: '500' }}>
              Líneas Operativas
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#EC4899', margin: '0 0 8px 0' }}>
              30
            </p>
            <p style={{ fontSize: '1rem', color: '#8888A0', margin: '0', fontWeight: '500' }}>
              Kilómetros
            </p>
          </div>

      <AdBannerLazy adSlot=\"4434764790\" format=\"auto\" />

      {/* MUNDIAL 2026 */}
      <section
        style={{
          backgroundColor: '#0A0A0F',
          padding: '80px 24px',
          borderBottom: '1px solid #2A2A3E',
        }}
      >
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '800',
              marginBottom: '16px',
              textAlign: 'center',
              color: '#F0F0F5',
              letterSpacing: '-0.01em',
            }}
          >
            ⚽ FIFA World Cup 2026 en Monterrey
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              textAlign: 'center',
              marginBottom: '48px',
              color: '#8888A0',
              fontWeight: '400',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            4 partidos en el Estadio BBVA. Acceso directo vía Metrorrey Línea 1.
          </p>

          <div
            style={{
              backgroundColor: '#14141F',
              border: '1px solid #2A2A3E',
              borderRadius: '10px',
              padding: '32px',
              marginBottom: '32px',
            }}
          >
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                margin: '0 0 24px 0',
                textAlign: 'center',
                color: '#F0F0F5',
              }}
            >
              Partidos Confirmados
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '16px',
              }}
            >
              {[
                { fecha: '14 junio', partido: 'Fase de Grupos' },
                { fecha: '20 junio', partido: 'Fase de Grupos' },
                { fecha: '24 junio', partido: 'Fase de Grupos' },
                { fecha: '29 junio', partido: 'Fase Final' },
              ].map((match, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#1C1C2E',
                    padding: '16px',
                    borderRadius: '8px',
                    borderLeft: '3px solid #EC4899',
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      margin: '0 0 8px 0',
                      color: '#EC4899',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {match.fecha}
                  </p>
                  <p
                    style={{
                      fontSize: '1rem',
                      fontWeight: '500',
                      margin: '0',
                      color: '#F0F0F5',
                      lineHeight: '1.4',
                    }}
                  >
                    {match.partido}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#1C1C2E',
              border: '1px solid #2A2A3E',
              borderRadius: '10px',
              padding: '24px',
              textAlign: 'center',
            }}
          >
            <p style={{ fontSize: '1rem', color: '#8888A0', margin: '0 0 12px 0' }}>
              🚇 Línea 1 → Estación Exposición → Caminata 22 minutos al Estadio BBVA
            </p>
            <p style={{ fontSize: '0.875rem', color: '#555566', margin: '0', fontWeight: '400' }}>
              Consulta horarios especiales los días de partido. Llegada recomendada: 2 horas antes del evento.
            </p>
          </div>
        </div>
      </section>

      {/* LÍNEAS */}
      <section
        style={{
          backgroundColor: '#0A0A0F',
          padding: '80px 24px',
          borderBottom: '1px solid #2A2A3E',
        }}
      >
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '800',
              marginBottom: '48px',
              textAlign: 'center',
              color: '#F0F0F5',
              letterSpacing: '-0.01em',
            }}
          >
            Las 2 Líneas del Metrorrey
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {lineasMTY.map((linea) => (
              <Link href={`/mty/linea/${linea.id}`} key={linea.id}>
                <div
                  style={{
                    backgroundColor: '#14141F',
                    border: `2px solid ${linea.color}`,
                    borderRadius: '10px',
                    padding: '24px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: linea.color,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0A0A0F',
                      fontSize: '24px',
                      fontWeight: '800',
                      marginBottom: '16px',
                    }}
                  >
                    {linea.id}
                  </div>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      margin: '0 0 8px 0',
                      color: linea.color,
                    }}
                  >
                    Línea {linea.id} — {linea.colorNombre}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: '#8888A0',
                      margin: '0 0 12px 0',
                      fontWeight: '400',
                    }}
                  >
                    {linea.inicio} → {linea.fin}
                  </p>
                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: '#F0F0F5',
                      margin: '0 0 16px 0',
                      lineHeight: '1.5',
                      fontWeight: '400',
                    }}
                  >
                    {linea.descripcion}
                  </p>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: linea.color,
                      margin: '0',
                    }}
                  >
                    {linea.total} estaciones
                  </p>
                </div>
              </Link>
            ))}
          </div>

      <AdBannerLazyInArticle adSlot=\"1082410395\" />

      {/* ESTACIONES DESTACADAS */}
      <section
        style={{
          backgroundColor: '#0A0A0F',
          padding: '80px 24px',
        }}
      >
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '800',
              marginBottom: '48px',
              textAlign: 'center',
              color: '#F0F0F5',
              letterSpacing: '-0.01em',
            }}
          >
            Estaciones Destacadas
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            {estacionesDestacadas.map((estacion) => (
              <Link href={`/mty/estacion/${estacion.slug}`} key={estacion.slug}>
                <div
                  style={{
                    backgroundColor: '#14141F',
                    border: '1px solid #2A2A3E',
                    borderRadius: '10px',
                    padding: '24px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '12px',
                    }}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        backgroundColor: '#EC4899',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        fontSize: '14px',
                        fontWeight: '700',
                        marginRight: '12px',
                      }}
                    >
                      L{estacion.linea}
                    </div>
                    <h3
                      style={{
                        fontSize: '1.125rem',
                        fontWeight: '700',
                        margin: '0',
                        color: '#F0F0F5',
                      }}
                    >
                      {estacion.nombre}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: '#8888A0',
                      margin: '0 0 12px 0',
                      fontWeight: '400',
                    }}
                  >
                    {estacion.municipio} · {estacion.tipo_zona}
                  </p>
                  {estacion.pois && estacion.pois.length > 0 && (
                    <div>
                      <p
                        style={{
                          fontSize: '0.75rem',
                          textTransform: 'uppercase',
                          color: '#EC4899',
                          fontWeight: '600',
                          letterSpacing: '0.05em',
                          margin: '0 0 8px 0',
                        }}
                      >
                        Puntos de Interés
                      </p>
                      {estacion.pois.slice(0, 2).map((poi, idx) => (
                        <p
                          key={idx}
                          style={{
                            fontSize: '0.875rem',
                            color: '#F0F0F5',
                            margin: '0 0 4px 0',
                            lineHeight: '1.3',
                          }}
                        >
                          • {poi.nombre}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>

      <AdBannerLazy adSlot="4434764790" format="auto" />
    </section>
    </main>
  );
}
