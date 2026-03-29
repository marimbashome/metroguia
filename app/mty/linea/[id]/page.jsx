import Link from 'next/link';
import { lineasMTY } from '@/data/mty/lineas-detalle';
import { estacionesMTY } from '@/data/mty/estaciones';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';

export async function generateStaticParams() {
  return lineasMTY.map(linea => ({
    id: linea.id
  }));
}

export async function generateMetadata({ params }) {
  const linea = lineasMTY.find(l => l.id === params.id);
  if (!linea) return {};
  
  return {
    title: linea.seo_title,
    description: linea.meta_description,
    openGraph: {
      title: linea.seo_title,
      description: linea.meta_description,
      url: `https://metroguia.mx/mty/linea/${linea.id}`,
      locale: 'es_MX'
    },
    canonical: `https://metroguia.mx/mty/linea/${linea.id}`
  };
}

export default function LineaMTY({ params }) {
  const linea = lineasMTY.find(l => l.id === params.id);
  
  if (!linea) {
    return (
      <main style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: '32px', fontWeight: 700 }}>
          Línea no encontrada
        </h1>
        <Link href="/mty" style={{ color: '#F97316', textDecoration: 'underline' }}>
          Volver a Monterrey
        </Link>
      </main>
    );
  }

  const estacionesLinea = linea.estaciones.map(slug => 
    estacionesMTY.find(e => e.slug === slug)
  ).filter(Boolean);

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
        name: 'MTY',
        item: 'https://metroguia.mx/mty/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `Línea ${linea.id}`,
        item: `https://metroguia.mx/mty/linea/${linea.id}/`
      }
    ]
  }

  return (
    <main style={{ backgroundColor: '#fff', color: '#1a1a1a' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* HERO */}
      <section style={{
        background: `linear-gradient(135deg, ${linea.color} 0%, ${linea.id === '1' ? '#F97316' : '#EC4899'} 100%)`,
        color: '#fff',
        padding: '60px 20px',
        borderBottom: `6px solid ${linea.color}`
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            marginBottom: '20px'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: linea.color,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 700
            }}>
              L{linea.id}
            </div>
            <div>
              <span style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,0.2)',
                padding: '6px 12px',
                borderRadius: '20px',
                fontWeight: 600,
                fontSize: '14px'
              }}>
                {linea.colorNombre}
              </span>
            </div>
          </div>
          <h1 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: '48px',
            fontWeight: 800,
            margin: '0 0 15px 0',
            lineHeight: 1.2
          }}>
            {linea.h1}
          </h1>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '18px',
            fontWeight: 400,
            margin: '0',
            lineHeight: 1.6,
            opacity: 0.95,
            maxWidth: '800px'
          }}>
            {linea.descripcion}
          </p>
        </div>
      </section>

      {/* INFORMACIÓN GENERAL */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '20px'
        }}>
          <div style={{
            background: '#f3f4f6',
            padding: '20px',
            borderRadius: '8px',
            borderLeft: `4px solid ${linea.color}`
          }}>
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '13px',
              fontWeight: 700,
              color: '#666',
              margin: '0 0 8px 0',
              textTransform: 'uppercase'
            }}>
              Estaciones
            </h3>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '28px',
              fontWeight: 700,
              margin: '0',
              color: linea.color
            }}>
              {linea.total}
            </p>
          </div>
          <div style={{
            background: '#f3f4f6',
            padding: '20px',
            borderRadius: '8px',
            borderLeft: `4px solid #EC4899`
          }}>
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '13px',
              fontWeight: 700,
              color: '#666',
              margin: '0 0 8px 0',
              textTransform: 'uppercase'
            }}>
              Inicio
            </h3>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              margin: '0',
              color: '#1a1a1a'
            }}>
              {linea.inicio}
            </p>
          </div>
          <div style={{
            background: '#f3f4f6',
            padding: '20px',
            borderRadius: '8px',
            borderLeft: `4px solid #06b6d4`
          }}>
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '13px',
              fontWeight: 700,
              color: '#666',
              margin: '0 0 8px 0',
              textTransform: 'uppercase'
            }}>
              Fin
            </h3>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              margin: '0',
              color: '#1a1a1a'
            }}>
              {linea.fin}
            </p>
          </div>
        </div>

        <AdBannerLazy slot="4434764790" />
      </section>

      {/* RUTA DE 1 DÍA */}
      {linea.ruta_1_dia && (
        <section style={{
          background: '#f9fafb',
          padding: '50px 20px'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '32px',
              fontWeight: 700,
              margin: '0 0 30px 0'
            }}>
              {linea.ruta_1_dia.titulo}
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px'
            }}>
              {linea.ruta_1_dia.paradas.map((parada, idx) => {
                const estacion = estacionesMTY.find(e => e.slug === parada.estacion);
                return (
                  <div key={idx} style={{
                    background: '#fff',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{
                      background: linea.color,
                      padding: '15px',
                      color: '#fff',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      <span style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        background: 'rgba(255,255,255,0.2)',
                        borderRadius: '50%',
                        fontSize: '14px'
                      }}>
                        {idx + 1}
                      </span>
                      <span>{estacion?.nombre || parada.estacion}</span>
                    </div>
                    <div style={{
                      padding: '20px'
                    }}>
                      <p style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '15px',
                        lineHeight: 1.6,
                        margin: '0',
                        color: '#1a1a1a'
                      }}>
                        {parada.actividad}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* TODAS LAS ESTACIONES */}
      <section style={{
        maxWidth: '1200px',
        margin: '50px auto',
        padding: '0 20px'
      }}>
        <h2 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: '32px',
          fontWeight: 700,
          margin: '0 0 30px 0'
        }}>
          Todas las Estaciones ({linea.total})
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '15px'
        }}>
          {estacionesLinea.map((estacion, idx) => (
            <Link key={estacion.slug} href={`/mty/estacion/${estacion.slug}`} style={{
              textDecoration: 'none'
            }}>
              <div style={{
                background: '#fff',
                border: `2px solid ${linea.color}`,
                borderRadius: '8px',
                padding: '15px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  background: linea.color,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '14px',
                  flexShrink: 0
                }}>
                  {idx + 1}
                </div>
                <div style={{
                  flex: 1,
                  minWidth: 0
                }}>
                  <h4 style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '14px',
                    fontWeight: 700,
                    margin: '0 0 2px 0',
                    color: '#1a1a1a',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}>
                    {estacion.nombre}
                  </h4>
                  <p style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '12px',
                    color: '#999',
                    margin: '0',
                    textTransform: 'capitalize'
                  }}>
                    {estacion.tipo_zona}
                  </p>
                </div>
                <span style={{
                  color: linea.color,
                  fontWeight: 700,
                  fontSize: '16px'
                }}>
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <AdBannerLazyInArticle slot="4434764790" />
      </section>

      {/* MUNICIPIOS */}
      <section style={{
        background: '#f9fafb',
        padding: '40px 20px',
        marginTop: '50px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h3 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: '20px',
            fontWeight: 700,
            margin: '0 0 20px 0'
          }}>
            Municipios Conectados
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '15px'
          }}>
            {linea.municipios.map((municipio, idx) => (
              <div key={idx} style={{
                background: '#fff',
                padding: '15px',
                borderRadius: '6px',
                border: `2px solid ${linea.color}`,
                textAlign: 'center',
                fontWeight: 600,
                color: '#1a1a1a'
              }}>
                📍 {municipio}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA MUNDIAL */}
      <section style={{
        background: 'linear-gradient(135deg, #EC4899 0%, #f97316 100%)',
        color: '#fff',
        padding: '50px 20px',
        marginTop: '50px',
        textAlign: 'center'
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
            🏟️ Acceso al Estadio BBVA
          </h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            margin: '0 0 25px 0',
            lineHeight: 1.6
          }}>
            Esta línea te conecta con todas las opciones para llegar al Estadio BBVA para los partidos del Mundial 2026.
          </p>
          <Link href="/mty/mundial-2026" style={{
            display: 'inline-block',
            background: '#fff',
            color: '#EC4899',
            padding: '12px 30px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 700,
            transition: 'all 0.3s'
          }}>
            Ver Guía del Mundial 2026
          </Link>
        </div>
      </section>

      {/* NAVEGACIÓN */}
      <section style={{
        maxWidth: '1200px',
        margin: '50px auto',
        padding: '0 20px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px'
        }}>
          <Link href="/mty" style={{
            display: 'block',
            background: '#f3f4f6',
            border: '2px solid #e5e7eb',
            padding: '15px',
            borderRadius: '6px',
            textDecoration: 'none',
            color: '#1a1a1a',
            fontWeight: 600,
            textAlign: 'center',
            transition: 'all 0.3s'
          }}>
            ← Volver a Monterrey
          </Link>
          <Link href="/mty/mundial-2026" style={{
            display: 'block',
            background: '#F97316',
            color: '#fff',
            padding: '15px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 600,
            textAlign: 'center',
            transition: 'all 0.3s'
          }}>
            Mundial 2026 →
          </Link>
        </div>
      </section>
    </main>
  );
}