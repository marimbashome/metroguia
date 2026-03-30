import { lineasMTY } from '@/data/mty/lineas-detalle';
import { estacionesMTY } from '@/data/mty/estaciones';
import { estacionesEcovia } from '@/data/mty/ecovia';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';

import AffiliateTransportCard from '@/app/components/AffiliateTransportCard'
import AffiliateMundial from '@/app/components/AffiliateMundial'
export const metadata = {
  title: 'Metrorrey Monterrey — Metro 3 líneas, 83 estaciones + FIFA 2026 | MetroGuia',
  description: 'Metrorrey Monterrey: guía turística completa del Metro. 3 líneas Metro + Ecovía BRT, 83 estaciones totales. Parque Fundidora, Barrio Antiguo, MARCO, Macroplaza, Estadio BBVA. Horarios, mapas, tickets y cómo llegar a partidos del Mundial 2026.',
  keywords: 'Metrorrey Monterrey, Metro, transporte Monterrey, Parque Fundidora, Estadio BBVA, FIFA 2026, turismo',
  openGraph: {
    title: 'Metrorrey Monterrey — Metro 3 Líneas + Ecovía BRT',
    description: 'Descubre las 3 líneas del Metrorrey + Ecovía BRT de Monterrey. Acceso directo a Parque Fundidora, MARCO, Macroplaza y Estadio BBVA.',
    url: 'https://metroguia.mx/mty',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const estacionesDestacadas = estacionesMTY.filter(e =>
  ['parque-fundidora', 'exposicion', 'central', 'mty-cuauhtemoc'].includes(e.slug)
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
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
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
            Metro 3 Líneas + Ecovía BRT · 83 Estaciones
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
          backgroundColor: 'var(--surface)',
          padding: '48px 24px',
          borderBottom: '1px solid var(--border)',
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
              83
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Estaciones
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#EC4899', margin: '0 0 8px 0' }}>
              3
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Líneas + BRT
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#EC4899', margin: '0 0 8px 0' }}>
              56
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Kilómetros
            </p>
          </div>
        </div>
      </section>

      {/* TRIP PLANNER */}
      <section
        style={{
          backgroundColor: 'var(--bg)',
          padding: '60px 24px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2
            style={{
              fontSize: '1.75rem',
              fontWeight: '800',
              marginBottom: '12px',
              textAlign: 'center',
              color: 'var(--text)',
            }}
          >
            🚇 Planifica tu Ruta en Monterrey
          </h2>
          <p
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              marginBottom: '24px',
              color: 'var(--text-muted)',
            }}
          >
            Calcula la mejor ruta entre estaciones del Metrorrey
          </p>
          <SearchBar ciudad="mty" />
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* MUNDIAL 2026 */}
      <section
        style={{
          backgroundColor: 'var(--bg)',
          padding: '80px 24px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '800',
              marginBottom: '16px',
              textAlign: 'center',
              color: 'var(--text)',
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
              color: 'var(--text-muted)',
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
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
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
                color: 'var(--text)',
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
                    backgroundColor: 'var(--surface-hover)',
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
                      color: 'var(--text)',
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
              backgroundColor: 'var(--surface-hover)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              padding: '24px',
              textAlign: 'center',
            }}
          >
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0 0 12px 0' }}>
              🚇 Línea 1 → Estación Exposición → Caminata 22 minutos al Estadio BBVA
            </p>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', margin: '0', fontWeight: '400' }}>
              Consulta horarios especiales los días de partido. Llegada recomendada: 2 horas antes del evento.
            </p>
          </div>
        </div>
      </section>

      {/* LÍNEAS */}
      <section
        style={{
          backgroundColor: 'var(--bg)',
          padding: '80px 24px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '800',
              marginBottom: '48px',
              textAlign: 'center',
              color: 'var(--text)',
              letterSpacing: '-0.01em',
            }}
          >
            Las 3 Líneas del Metrorrey
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
                    backgroundColor: 'var(--surface)',
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
                      color: 'var(--bg)',
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
                      color: 'var(--text-muted)',
                      margin: '0 0 12px 0',
                      fontWeight: '400',
                    }}
                  >
                    {linea.inicio} → {linea.fin}
                  </p>
                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--text)',
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
        </div>
      </section>


      {/* ECOVÍA BRT */}
      <section
        style={{
          backgroundColor: 'var(--surface)',
          padding: '80px 24px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '800',
              marginBottom: '48px',
              textAlign: 'center',
              color: 'var(--text)',
              letterSpacing: '-0.01em',
            }}
          >
            Ecovía TransMetro — BRT
          </h2>
          <Link href="/mty/ecovia">
            <div
              style={{
                backgroundColor: 'var(--bg)',
                border: '2px solid #10B981',
                borderRadius: '10px',
                padding: '32px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  backgroundColor: '#10B981',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontSize: '24px',
                  fontWeight: '800',
                  marginBottom: '16px',
                }}
              >
                BRT
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  margin: '0 0 8px 0',
                  color: '#10B981',
                }}
              >
                Ecovía TransMetro
              </h3>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                  margin: '0 0 12px 0',
                }}
              >
                Lincoln → Valle Soleado
              </p>
              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--text)',
                  margin: '0 0 16px 0',
                  lineHeight: '1.5',
                }}
              >
                Sistema BRT de 42 estaciones climatizadas, 30 km de recorrido. Conexiones con Metrorrey en Mitras (L1), Regina (L2) y Ruiz Cortines (L3).
              </p>
              <p
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#10B981',
                  margin: '0',
                }}
              >
                42 estaciones · 30 km · Ver todas →
              </p>
            </div>
          </Link>
        </div>
      </section>

      <AdBannerLazyInArticle slot="1082410395" />

      {/* ESTACIONES DESTACADAS */}
      <section
        style={{
          backgroundColor: 'var(--bg)',
          padding: '80px 24px',
        }}
      >
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          {/* Affiliate Transport Card */}
          <div style={{ maxWidth: '1000px', margin: 'auto', padding: '0 1rem', marginBottom: '2rem' }}>
            <AffiliateTransportCard ciudad="MTY" estacion={null} fechas={null} />
          </div>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '800',
              marginBottom: '48px',
              textAlign: 'center',
              color: 'var(--text)',
              letterSpacing: '-0.01em',
            }}
          >
            Estaciones Destacadas
          </h2>
          <p
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              marginBottom: '32px',
              color: 'var(--text-muted)',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Principales estaciones con conexiones al Metro Línea 1, 2 y 3, más acceso a Ecovía BRT en Mitras, Regina y Ruiz Cortines.
          </p>
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
                    backgroundColor: 'var(--surface)',
                    border: '1px solid var(--border)',
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
                        color: 'var(--text)',
                      }}
                    >
                      {estacion.nombre}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-muted)',
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
                            color: 'var(--text)',
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
      </section>

      {/* Affiliate Mundial */}
      <div style={{ maxWidth: '1000px', margin: 'auto', padding: '0 1rem', marginBottom: '2rem' }}>
        <AffiliateMundial ciudad="MTY" />
      </div>

      <AdBannerLazy slot="4434764790" format="auto" />
    </main>
  );
}
