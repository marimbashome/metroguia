import { zonasArqueologicas } from '@/data/turismo/zonas-arqueologicas';
import { ciudadesPatrimonio } from '@/data/turismo/ciudades-patrimonio';

export async function generateStaticParams() {
  return zonasArqueologicas.map((zona) => ({
    slug: zona.slug,
  }));
}

export async function generateMetadata({ params }) {
  const zona = zonasArqueologicas.find((z) => z.slug === params.slug);
  if (!zona) {
    return {
      title: 'Zona no encontrada',
      description: 'La zona arqueológica solicitada no existe',
    };
  }
  return {
    title: zona.seo_title,
    description: zona.meta_description,
    keywords: `${zona.nombre}, arqueología, ${zona.cultura}, ${zona.estado}, México`,
    openGraph: {
      title: zona.seo_title,
      description: zona.meta_description,
      type: 'article',
    },
  };
}

export default function ZonaDetail({ params }) {
  const zona = zonasArqueologicas.find((z) => z.slug === params.slug);
  if (!zona) {
    return (
      <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ color: 'var(--text)' }}>Zona no encontrada</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
            La zona arqueológica solicitada no existe.
          </p>
          <a href="/turismo/zonas-arqueologicas" style={{
            display: 'inline-block',
            backgroundColor: 'var(--primary)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '6px',
            textDecoration: 'none',
          }}>
            Volver a zonas arqueológicas
          </a>
        </div>
      </div>
    );
  }

  const ciudadRelacionada = zona.ciudad_metroguia
    ? ciudadesPatrimonio.find((c) => c.slug === zona.ciudad_metroguia)
    : null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: zona.nombre,
    description: zona.descripcion,
    location: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressRegion: zona.estado,
        addressCountry: 'MX',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: zona.coords.lat,
        longitude: zona.coords.lng,
      },
    },
    url: `https://metroguia.mx/turismo/zonas-arqueologicas/${zona.slug}`,
    image: `https://metroguia.mx/images/zonas/${zona.slug}.jpg`,
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
            <a href="/turismo/zonas-arqueologicas" style={{
              color: 'var(--primary)',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: '500',
            }}>
              ← Volver a zonas arqueológicas
            </a>
          </div>
        </div>

        {/* Hero Section */}
        <div style={{
          backgroundImage: 'linear-gradient(135deg, rgba(139, 69, 19, 0.8), rgba(184, 134, 11, 0.8))',
          padding: '80px 20px',
          color: 'white',
        }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ marginBottom: '20px' }}>
              {zona.patrimonio_unesco && (
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
                  Patrimonio UNESCO
                </span>
              )}
            </div>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              margin: '0 0 20px 0',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            }}>
              {zona.h1}
            </h1>
            <p style={{
              fontSize: '1.1rem',
              margin: '0',
              maxWidth: '700px',
              lineHeight: '1.6',
              opacity: '0.95',
            }}>
              {zona.estado}, México
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
              {zona.descripcion}
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
                  Cultura
                </h3>
                <p style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: 'var(--text)',
                  margin: '0',
                }}>
                  {zona.cultura}
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
                  Período
                </h3>
                <p style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: 'var(--text)',
                  margin: '0',
                }}>
                  {zona.periodo}
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
                  Entrada
                </h3>
                <p style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: 'var(--text)',
                  margin: '0',
                }}>
                  {zona.costo_entrada}
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
              {zona.highlights.map((highlight, index) => (
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
                  Horario
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: 'var(--text-muted)',
                  margin: '0',
                }}>
                  {zona.horario}
                </p>
              </div>

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
                  {zona.como_llegar}
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
              {zona.tips.map((tip, index) => (
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

          {/* Related Heritage City */}
          {ciudadRelacionada && (
            <section style={{ marginBottom: '60px' }}>
              <h2 style={{
                fontSize: '1.5rem',
                color: 'var(--text)',
                marginBottom: '20px',
                fontWeight: '600',
              }}>
                Ciudad Patrimonio cercana
              </h2>
              <a href={`/turismo/ciudades-patrimonio/${ciudadRelacionada.slug}`} style={{
                textDecoration: 'none',
                display: 'block',
              }}>
                <div style={{
                  backgroundColor: 'var(--surface)',
                  padding: '24px',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    color: 'var(--text)',
                    margin: '0 0 8px 0',
                  }}>
                    {ciudadRelacionada.nombre}
                  </h3>
                  <p style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-muted)',
                    margin: '0',
                    marginBottom: '12px',
                  }}>
                    Patrimonio UNESCO desde {ciudadRelacionada.año_declaracion}
                  </p>
                  <p style={{
                    fontSize: '0.95rem',
                    color: 'var(--primary)',
                    margin: '0',
                    fontWeight: '500',
                  }}>
                    Conocer más →
                  </p>
                </div>
              </a>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
