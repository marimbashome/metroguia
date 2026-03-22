import Link from 'next/link';
import { estacionesMTY } from '@/data/mty/estaciones';
import { lineasMTY } from '@/data/mty/lineas-detalle';

export async function generateStaticParams() {
  return estacionesMTY.map(estacion => ({
    slug: estacion.slug
  }));
}

export async function generateMetadata({ params }) {
  const estacion = estacionesMTY.find(e => e.slug === params.slug);
  if (!estacion) return {};
  
  return {
    title: estacion.seo_title,
    description: estacion.meta_description,
    openGraph: {
      title: estacion.seo_title,
      description: estacion.meta_description,
      url: `https://metroguia.mx/mty/estacion/${estacion.slug}`,
      locale: 'es_MX'
    },
    canonical: `https://metroguia.mx/mty/estacion/${estacion.slug}`
  };
}

export default function EstacionMTY({ params }) {
  const estacion = estacionesMTY.find(e => e.slug === params.slug);
  
  if (!estacion) {
    return (
      <main style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: '32px', fontWeight: 700 }}>
          Estación no encontrada
        </h1>
        <Link href="/mty" style={{ color: '#F97316', textDecoration: 'underline' }}>
          Volver a Monterrey
        </Link>
      </main>
    );
  }

  const linea = lineasMTY.find(l => l.id === estacion.linea);
  const colorLinea = linea?.color || '#999';
  const colorNombreLinea = linea?.colorNombre || 'Desconocido';

  return (
    <main style={{ backgroundColor: '#fff', color: '#1a1a1a' }}>
      {/* HERO */}
      <section style={{
        background: `linear-gradient(135deg, ${colorLinea} 0%, ${estacion.linea === '1' ? '#F97316' : '#EC4899'} 100%)`,
        color: '#fff',
        padding: '60px 20px',
        borderBottom: `6px solid ${colorLinea}`
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            marginBottom: '15px'
          }}>
            <span style={{
              display: 'inline-block',
              background: colorLinea,
              color: '#fff',
              padding: '6px 12px',
              borderRadius: '20px',
              fontWeight: 700,
              fontSize: '14px'
            }}>
              Línea {estacion.linea} {colorNombreLinea}
            </span>
            <span style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              fontWeight: 500
            }}>
              {estacion.municipio}
            </span>
          </div>
          <h1 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: '48px',
            fontWeight: 800,
            margin: '0 0 20px 0',
            lineHeight: 1.2
          }}>
            {estacion.h1}
          </h1>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '18px',
            fontWeight: 400,
            margin: '0',
            lineHeight: 1.6,
            opacity: 0.95
          }}>
            {estacion.intro}
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '25px',
          marginBottom: '50px'
        }}>
          <div style={{
            background: '#f3f4f6',
            padding: '20px',
            borderRadius: '8px',
            borderLeft: `4px solid ${colorLinea}`
          }}>
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '14px',
              fontWeight: 700,
              color: '#666',
              margin: '0 0 8px 0',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Línea
            </h3>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '24px',
              fontWeight: 700,
              margin: '0',
              color: colorLinea
            }}>
              L{estacion.linea}
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
              fontSize: '14px',
              fontWeight: 700,
              color: '#666',
              margin: '0 0 8px 0',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Tipo de Zona
            </h3>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '16px',
              fontWeight: 500,
              margin: '0',
              color: '#1a1a1a',
              textTransform: 'capitalize'
            }}>
              {estacion.tipo_zona.replace('-', ' ')}
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
              fontSize: '14px',
              fontWeight: 700,
              color: '#666',
              margin: '0 0 8px 0',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Horario
            </h3>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              fontWeight: 400,
              margin: '0',
              color: '#1a1a1a'
            }}>
              {estacion.mejor_horario}
            </p>
          </div>
        </div>

        {estacion.transferencias.length > 0 && (
          <div style={{
            background: '#FEF3C7',
            border: '2px solid #F97316',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '50px'
          }}>
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '16px',
              fontWeight: 700,
              color: '#92400e',
              margin: '0 0 10px 0'
            }}>
              ⚡ Transferencias Disponibles
            </h3>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              color: '#78350f',
              margin: '0'
            }}>
              Conecta con Línea {estacion.transferencias.join(', ')} en esta estación
            </p>
          </div>
        )}
      </section>

      {/* PUNTOS DE INTERÉS */}
      {estacion.pois.length > 0 && (
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
              Puntos de Interés Cercanos
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px'
            }}>
              {estacion.pois.map((poi, idx) => (
                <div key={idx} style={{
                  background: '#fff',
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                  borderTop: `4px solid ${colorLinea}`
                }}>
                  <h3 style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '18px',
                    fontWeight: 700,
                    margin: '0 0 8px 0',
                    color: '#1a1a1a'
                  }}>
                    {poi.nombre}
                  </h3>
                  <p style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '14px',
                    color: '#666',
                    margin: '0 0 8px 0',
                    textTransform: 'capitalize'
                  }}>
                    📍 {poi.tipo}
                  </p>
                  <p style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    color: '#999',
                    margin: '0'
                  }}>
                    ⏱️ {poi.distancia}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TIPS */}
      {estacion.tips.length > 0 && (
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
            💡 Tips para Visitantes
          </h2>
          <ul style={{
            listStyle: 'none',
            padding: '0',
            margin: '0'
          }}>
            {estacion.tips.map((tip, idx) => (
              <li key={idx} style={{
                background: '#fff',
                border: `2px solid ${colorLinea}`,
                borderRadius: '8px',
                padding: '20px',
                marginBottom: '15px',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '16px',
                fontWeight: 400,
                color: '#1a1a1a',
                lineHeight: 1.6
              }}>
                ✓ {tip}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* MUNDIAL RELEVANCIA */}
      {estacion.mundial_relevancia && (
        <section style={{
          background: estacion.mundial_relevancia.includes('Sin relevancia') ? '#f3f4f6' : '#FEF3C7',
          padding: '40px 20px',
          marginTop: '50px'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '28px',
              fontWeight: 700,
              margin: '0 0 20px 0',
              color: estacion.mundial_relevancia.includes('Sin relevancia') ? '#666' : '#92400e'
            }}>
              🏟️ Información para el Mundial 2026
            </h2>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '16px',
              color: estacion.mundial_relevancia.includes('Sin relevancia') ? '#666' : '#78350f',
              margin: '0',
              lineHeight: 1.8
            }}>
              {estacion.mundial_relevancia}
            </p>
          </div>
        </section>
      )}

      {/* NAVEGACIÓN */}
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
            Explora más
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '15px'
          }}>
            <Link href="/mty" style={{
              display: 'block',
              background: '#fff',
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
            <Link href={`/mty/linea/${estacion.linea}`} style={{
              display: 'block',
              background: colorLinea,
              color: '#fff',
              padding: '15px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 600,
              textAlign: 'center',
              transition: 'all 0.3s'
            }}>
              Ver Línea {estacion.linea}
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
              Guía Mundial 2026
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}