import { lineasGDL } from '@/data/gdl/lineas-detalle';
import { estacionesGDL } from '@/data/gdl/estaciones';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';

export const metadata = {
  title: 'SITEUR Guadalajara — Tren Ligero 3 líneas, 48 estaciones + FIFA 2026 | MetroGuia',
  description: 'SITEUR Guadalajara: guía turística completa del Tren Ligero. 3 líneas, 48 estaciones. Centro Histórico, Catedral, Basílica Zapopan, Estadio Akron, Plaza Patria. Horarios, mapas, tickets y cómo llegar a partidos del Mundial 2026.',
  keywords: 'SITEUR Guadalajara, Tren Ligero, transporte Guadalajara, turismo, Centro Histórico, Estadio Akron, FIFA 2026',
  openGraph: {
    title: 'SITEUR Guadalajara — Tren Ligero + Guía FIFA 2026',
    description: 'Descubre las 3 líneas del Tren Ligero de Guadalajara. Acceso directo a Centro Histórico, Basílica de Zapopan, Estadio Akron y más.',
    url: 'https://metroguia.mx/gdl',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const estacionesDestacadas = estacionesGDL.filter(e =>
  ['juarez', 'arcos-de-zapopan', 'estadio-chivas', 'plaza-universidad', 'san-juan-de-dios'].includes(e.slug)
);

export default function GDLPage() {
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
        name: 'Guadalajara',
        item: 'https://metroguia.mx/gdl/'
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
          background: 'linear-gradient(135deg, #06B6D4 0%, #0891b2 100%)',
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
            SITEUR Guadalajara
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
            Tren Ligero · 3 Líneas · 48 Estaciones
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
            Sistema rápido y eficiente de Guadalajara. Conexión directa al Estadio Akron para el Mundial 2026.
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
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#06B6D4', margin: '0 0 8px 0' }}>
              48
            </p>
            <p style={{ fontSize: '1rem', color: '#8888A0', margin: '0', fontWeight: '500' }}>
              Estaciones
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#06B6D4', margin: '0 0 8px 0' }}>
              3
            </p>
            <p style={{ fontSize: '1rem', color: '#8888A0', margin: '0', fontWeight: '500' }}>
              Líneas Operativas
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#06B6D4', margin: '0 0 8px 0' }}>
              30
            </p>
            <p style={{ fontSize: '1rem', color: '#8888A0', margin: '0', fontWeight: '500' }}>
              Kilómetros
            </p>
          </div>

      <AdBannerLazy slot="4434764790" format="auto" />

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
            ⚽ FIFA World Cup 2026 en Guadalajara
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
            4 partidos en el Estadio Akron. Acceso directo vía SITEUR Línea 3.
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
                { fecha: '11 junio', partido: 'Corea del Sur vs. Playoff UEFA' },
                { fecha: '18 junio', partido: 'México vs. Corea del Sur' },
                { fecha: '23 junio', partido: 'Colombia vs. Playoff Intercontinental' },
                { fecha: '26 junio', partido: 'Uruguay vs. España' },
              ].map((match, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#1C1C2E',
                    padding: '16px',
                    borderRadius: '8px',
                    borderLeft: '3px solid #06B6D4',
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      margin: '0 0 8px 0',
                      color: '#06B6D4',
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
              🚇 Línea 3 → Estación Chivas → Caminata 20 minutos al Estadio Akron
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
            Las 3 Líneas del SITEUR
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {lineasGDL.map((linea) => (
              <Link href={`/gdl/linea/${linea.id}`} key={linea.id}>
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
                      color: '#FFFFFF',
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

      <AdBannerLazyInArticle slot="1082410395" />

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
              <Link href={`/gdl/estacion/${estacion.slug}`} key={estacion.slug}>
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
                        backgroundColor: '#06B6D4',
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
                          color: '#06B6D4',
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

      <AdBannerLazy slot="4434764790" format="auto" />
    </section>
    </main>
  );
}
