import { lineasGDL } from '@/data/gdl/lineas-detalle';
import { estacionesGDL } from '@/data/gdl/estaciones';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';

import AffiliateTransportCard from '@/app/components/AffiliateTransportCard'
import AffiliateMundial from '@/app/components/AffiliateMundial'
export const metadata = {
  title: 'SITEUR Guadalajara — Tren Ligero 4 líneas + Mi Macro · 125 estaciones | MetroGuia',
  description: 'SITEUR Guadalajara: guía turística completa del Tren Ligero (4 líneas, 48 estaciones) + Mi Macro BRT (2 líneas, 69 estaciones). Centro Histórico, Catedral, Basílica Zapopan, Estadio Akron, Plaza Patria. Horarios, mapas, tickets y cómo llegar a partidos del Mundial 2026.',
  keywords: 'SITEUR Guadalajara, Tren Ligero, Mi Macro, transporte Guadalajara, turismo, Centro Histórico, Estadio Akron, FIFA 2026',
  openGraph: {
    title: 'SITEUR Guadalajara — Tren Ligero + Mi Macro',
    description: 'Descubre el Tren Ligero (4 líneas) + Mi Macro (2 líneas). Acceso directo a Centro Histórico, Basílica de Zapopan, Estadio Akron y más.',
    url: 'https://metroguia.mx/gdl',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const estacionesDestacadas = estacionesGDL.filter(e =>
  ['gdl-juarez', 'arcos-de-zapopan', 'estadio-chivas', 'plaza-universidad', 'san-juan-de-dios', 'estadio-chivas-mp'].includes(e.slug)
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
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
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
            Tren Ligero · 4 Líneas + Mi Macro · 125 Estaciones
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
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#06B6D4', margin: '0 0 8px 0' }}>
              125
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Estaciones
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#06B6D4', margin: '0 0 8px 0' }}>
              6
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Líneas Operativas
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#06B6D4', margin: '0 0 8px 0' }}>
              ~80
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
            🚇 Planifica tu Ruta en Guadalajara
          </h2>
          <p
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              marginBottom: '24px',
              color: 'var(--text-muted)',
            }}
          >
            Calcula la mejor ruta entre estaciones del SITEUR
          </p>
          <SearchBar ciudad="gdl" />
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
            ⚽ FIFA World Cup 2026 en Guadalajara
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
            4 partidos en el Estadio Akron. Acceso directo vía SITEUR Línea 3.
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
              <div
                style={{
                  backgroundColor: 'var(--bg)',
                  padding: '16px',
                  borderRadius: '6px',
                  borderLeft: '3px solid #06B6D4',
                  textAlign: 'center',
                }}
              >
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>Fase de Grupos</p>
                <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0', color: 'var(--text)' }}>USA vs MEX</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>11 de junio</p>
              </div>
              <div
                style={{
                  backgroundColor: 'var(--bg)',
                  padding: '16px',
                  borderRadius: '6px',
                  borderLeft: '3px solid #06B6D4',
                  textAlign: 'center',
                }}
              >
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>Fase de Grupos</p>
                <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0', color: 'var(--text)' }}>MEX vs POL</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>17 de junio</p>
              </div>
              <div
                style={{
                  backgroundColor: 'var(--bg)',
                  padding: '16px',
                  borderRadius: '6px',
                  borderLeft: '3px solid #06B6D4',
                  textAlign: 'center',
                }}
              >
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>Fase de Grupos</p>
                <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0', color: 'var(--text)' }}>MEX vs ARA</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>22 de junio</p>
              </div>
              <div
                style={{
                  backgroundColor: 'var(--bg)',
                  padding: '16px',
                  borderRadius: '6px',
                  borderLeft: '3px solid #06B6D4',
                  textAlign: 'center',
                }}
              >
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>Fase Knockout</p>
                <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0', color: 'var(--text)' }}>Octavos de Final</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>Por confirmar</p>
              </div>
            </div>
          </div>

          <AffiliateMundial ciudad="GDL" estadio="Estadio Akron" estacion="estadio-chivas" />
        </div>
      </section>

      {/* LAS 4 LÍNEAS DEL TREN LIGERO */}
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
            Las 4 Líneas del Tren Ligero
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {lineasGDL.filter(l => l.id === '1' || l.id === '2' || l.id === '3' || l.id === '4').map((linea) => (
              <Link href={`/gdl/linea/${linea.id}`} key={linea.id}>
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

      {/* MI MACRO SECTION */}
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
              marginBottom: '16px',
              textAlign: 'center',
              color: 'var(--text)',
              letterSpacing: '-0.01em',
            }}
          >
            Mi Macro — Tránsito Rápido de Guadalajara
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
            2 líneas de autobús de tránsito rápido (BRT) que complementan la red del Tren Ligero
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            <Link href="/gdl/macrobus/">
              <div
                style={{
                  backgroundColor: 'var(--bg)',
                  border: '2px solid #8B5CF6',
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
                    backgroundColor: '#8B5CF6',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    fontSize: '20px',
                    fontWeight: '800',
                    marginBottom: '16px',
                  }}
                >
                  MC
                </div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    margin: '0 0 8px 0',
                    color: '#8B5CF6',
                  }}
                >
                  Mi Macro Calzada
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-muted)',
                    margin: '0 0 12px 0',
                    fontWeight: '400',
                  }}
                >
                  Centro → Sur
                </p>
                <p
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#8B5CF6',
                    margin: '0',
                  }}
                >
                  35+ estaciones
                </p>
              </div>
            </Link>

            <Link href="/gdl/macrobus/">
              <div
                style={{
                  backgroundColor: 'var(--bg)',
                  border: '2px solid #7C3AED',
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
                    backgroundColor: '#7C3AED',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    fontSize: '20px',
                    fontWeight: '800',
                    marginBottom: '16px',
                  }}
                >
                  MP
                </div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    margin: '0 0 8px 0',
                    color: '#7C3AED',
                  }}
                >
                  Mi Macro Periférico
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-muted)',
                    margin: '0 0 12px 0',
                    fontWeight: '400',
                  }}
                >
                  Circunvalación
                </p>
                <p
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#7C3AED',
                    margin: '0',
                  }}
                >
                  30+ estaciones
                </p>
              </div>
            </Link>
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/gdl/macrobus/">
              <button
                style={{
                  padding: '12px 32px',
                  backgroundColor: '#8B5CF6',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  fontFamily: 'Syne, sans-serif',
                }}
              >
                Explorar Mi Macro
              </button>
            </Link>
          </div>
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
            <AffiliateTransportCard ciudad="GDL" estacion={null} fechas={null} />
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
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            {estacionesDestacadas.map((estacion) => (
              <Link
                href={estacion.sistema === 'macrobus' ? `/gdl/macrobus/estacion/${estacion.slug}` : `/gdl/estacion/${estacion.slug}`}
                key={estacion.slug}
              >
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
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      margin: '0 0 8px 0',
                      color: 'var(--text)',
                    }}
                  >
                    {estacion.nombre}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-muted)',
                      margin: '0 0 12px 0',
                      fontWeight: '500',
                    }}
                  >
                    {estacion.municipio}
                  </p>
                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--text)',
                      margin: '0',
                      lineHeight: '1.6',
                    }}
                  >
                    {estacion.intro}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
