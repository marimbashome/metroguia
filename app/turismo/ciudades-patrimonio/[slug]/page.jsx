import { ciudadesPatrimonio } from '@/data/turismo/ciudades-patrimonio';
import { zonasArqueologicas } from '@/data/turismo/zonas-arqueologicas';

export async function generateStaticParams() {
  return ciudadesPatrimonio.map((ciudad) => ({
    slug: ciudad.slug,
  }));
}

export async function generateMetadata({ params }) {
  const ciudad = ciudadesPatrimonio.find((c) => c.slug === params.slug);
  if (!ciudad) {
    return {
      title: 'Ciudad no encontrada',
      description: 'La ciudad solicitada no existe',
    };
  }
  return {
    title: ciudad.seo_title,
    description: ciudad.meta_description,
    keywords: `${ciudad.nombre}, patrimonio UNESCO, ${ciudad.estado}, México`,
    openGraph: {
      title: ciudad.seo_title,
      description: ciudad.meta_description,
      type: 'article',
    },
  };
}

export default function CiudadDetail({ params }) {
  const ciudad = ciudadesPatrimonio.find((c) => c.slug === params.slug);
  if (!ciudad) {
    return (
      <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ color: 'var(--text)' }}>Ciudad no encontrada</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
            La ciudad solicitada no existe.
          </p>
          <a href="/turismo/ciudades-patrimonio" style={{
            display: 'inline-block',
            backgroundColor: 'var(--primary)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '6px',
            textDecoration: 'none',
          }}>
            Volver a ciudades patrimonio
          </a>
        </div>
      </div>
    );
  }

  const zonasRelacionadas = zona => zona.ciudad_metroguia === ciudad.slug
    ? zonasArqueologicas.filter((z) => z.ciudad_metroguia === ciudad.slug)
    : [];

  const zonasAsociadas = zonasArqueologicas.filter((z) => z.ciudad_metroguia === ciudad.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'City',
    name: ciudad.nombre,
    description: ciudad.descripcion,
    location: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressRegion: ciudad.estado,
        addressCountry: 'MX',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: ciudad.coords.lat,
        longitude: ciudad.coords.lng,
      },
    },
    url: `https://metroguia.mx/turismo/ciudades-patrimonio/${ciudad.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
        {/* Back Navigation */}
        <div style={{
          backgroundColor: 'var(--surface)',
          padding: '20px',
          borderBottom: '1px solid var(--border)',
        }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <a href="/turismo/ciudades-patrimonio" style={{
              color: 'var(--primary)',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: '500',
            }}>
              ← Volver a ciudades patrimonio
            </a>
          </div>
        </div>

        {/* Hero Section */}
        <div style={{
          backgroundImage: 'linear-gradient(135deg, rgba(184, 134, 11, 0.8), rgba(218, 165, 32, 0.8))',
          padding: '80px 20px',
          color: 'white',
        }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ marginBottom: '20px' }}>
              <span style={{
                display: 'inline-block',
                backgroundColor: 'rgba(255, 215, 0, 0.2)',
                color: '#FFD700',
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}>
                Patrimonio UNESCO {ciudad.año_declaracion}
              </span>
            </div>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              margin: '0 0 20px 0',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            }}>
              {ciudad.h1}
            </h1>
            <p style={{
              fontSize: '1.1rem',
              margin: '0',
              maxWidth: '700px',
              lineHeight: '1.6',
              opacity: '0.95',
            }}>
              {ciudad.estado}, México
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '60px 20px',
        }}>
          {/* Description */}
          <section style={{ marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '2rem',
              color: 'var(--text)',
              marginBottom: '20px',
              fontWeight: '600',
            }}>
              Descripción
            </h2>
            <p style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'var(--text-muted)',
              margin: '0',
            }}>
              {ciudad.descripcion}
            </p>
          </section>

          {/* Key Info Grid */}
          <section style={{ marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '1.5rem',
              color: 'var(--text)',
              marginBottom: '30px',
              fontWeight: '600',
            }}>
              Información Clave
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '30px',
            }}>
              <div style={{
                backgroundColor: 'var(--surface)',
                padding: '24px',
                borderRadius: '8px',
                border: '1px solid var(--border)',
              }}>
                <h3 style={{
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  margin: '0 0 12px 0',
                  letterSpacing: '0.5px',
                }}>
                  Año de Declaración
                </h3>
                <p style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: 'var(--text)',
                  margin: '0',
                }}>
                  {ciudad.año_declaracion}
                </p>
              </div>

              <div style={{
                backgroundColor: 'var(--surface)',
                padding: '24px',
                borderRadius: '8px',
                border: '1px solid var(--border)',
              }}>
                <h3 style={{
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  margin: '0 0 12px 0',
                  letterSpacing: '0.5px',
                }}>
                  Estado
                </h3>
                <p style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: 'var(--text)',
                  margin: '0',
                }}>
                  {ciudad.estado}
                </p>
              </div>

              <div style={{
                backgroundColor: 'var(--surface)',
                padding: '24px',
                borderRadius: '8px',
                border: '1px solid var(--border)',
              }}>
                <h3 style={{
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  margin: '0 0 12px 0',
                  letterSpacing: '0.5px',
                }}>
                  Declaratoria
                </h3>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: 'var(--text)',
                  margin: '0',
                }}>
                  {ciudad.declaratoria}
                </p>
              </div>
            </div>
          </section>

          {/* Highlights */}
          <section style={{ marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '1.5rem',
              color: 'var(--text)',
              marginBottom: '20px',
              fontWeight: '600',
            }}>
              Qué ver
            </h2>
            <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '0',
            }}>
              {ciudad.highlights.map((highlight, index) => (
                <li key={index} style={{
                  backgroundColor: 'var(--surface)',
                  padding: '16px 20px',
                  marginBottom: '12px',
                  borderRadius: '6px',
                  border: '1px solid var(--border)',
                  borderLeft: '4px solid var(--primary)',
                  fontSize: '1rem',
                  color: 'var(--text)',
                  lineHeight: '1.6',
                }}>
                  {highlight}
                </li>
              ))}
            </ul>
          </section>

          {/* Practical Info */}
          <section style={{ marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '1.5rem',
              color: 'var(--text)',
              marginBottom: '30px',
              fontWeight: '600',
            }}>
              Información Práctica
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '24px',
            }}>
              <div style={{
                backgroundColor: 'var(--surface)',
                padding: '24px',
                borderRadius: '8px',
                border: '1px solid var(--border)',
              }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: 'var(--text)',
                  margin: '0 0 12px 0',
                }}>
                  Cómo llegar
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: 'var(--text-muted)',
                  margin: '0',
                  lineHeight: '1.6',
                }}>
                  {ciudad.como_llegar}
                </p>
              </div>
            </div>
          </section>

          {/* Tips */}
          <section style={{ marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '1.5rem',
              color: 'var(--text)',
              marginBottom: '20px',
              fontWeight: '600',
            }}>
              Consejos del viajero
            </h2>
            <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '0',
            }}>
              {ciudad.tips.map((tip, index) => (
                <li key={index} style={{
                  backgroundColor: 'rgba(184, 134, 11, 0.05)',
                  padding: '16px 20px',
                  marginBottom: '12px',
                  borderRadius: '6px',
                  border: '1px solid rgba(184, 134, 11, 0.2)',
                  fontSize: '1rem',
                  color: 'var(--text)',
                  lineHeight: '1.6',
                }}>
                  💡 {tip}
                </li>
              ))}
            </ul>
          </section>

          {/* Related Archaeological Zones */}
          {zonasAsociadas.length > 0 && (
            <section style={{ marginBottom: '60px' }}>
              <h2 style={{
                fontSize: '1.5rem',
                color: 'var(--text)',
                marginBottom: '20px',
                fontWeight: '600',
              }}>
                Zonas arqueológicas cercanas
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '20px',
              }}>
                {zonasAsociadas.map((zona) => (
                  <a
                    key={zona.slug}
                    href={`/turismo/zonas-arqueologicas/${zona.slug}`}
                    style={{
                      textDecoration: 'none',
                      display: 'block',
                    }}
                  >
                    <div style={{
                      backgroundColor: 'var(--surface)',
                      padding: '20px',
                      borderRadius: '8px',
                      border: '1px solid var(--border)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}>
                      <h3 style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: 'var(--text)',
                        margin: '0 0 8px 0',
                      }}>
                        {zona.nombre}
                      </h3>
                      <p style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-muted)',
                        margin: '0 0 12px 0',
                      }}>
                        {zona.cultura} - {zona.periodo}
                      </p>
                      <p style={{
                        fontSize: '0.9rem',
                        color: 'var(--primary)',
                        margin: '0',
                        fontWeight: '500',
                      }}>
                        Conocer más →
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
