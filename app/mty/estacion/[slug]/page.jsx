import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import AffiliateMundial from '@/app/components/AffiliateMundial';
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
        <h1 style={{ fontSize: '32px', fontWeight: 700 }}>
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
        name: `Línea ${estacion.linea}`,
        item: `https://metroguia.mx/mty/linea/${estacion.linea}/`
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: estacion.nombre,
        item: `https://metroguia.mx/mty/estacion/${estacion.slug}`
      }
    ]
  };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
              fontSize: '14px',
              fontWeight: 500
            }}>
              {estacion.municipio}
            </span>
          </div>
          <h1 style={{
            fontSize: '48px',
            fontWeight: 800,
            margin: '0 0 20px 0',
            lineHeight: 1.2
          }}>
            {estacion.h1}
          </h1>
          <p style={{
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

      {/* Ad 1 — Banner despues del hero */}
      <AdBannerLazy slot="4434764790" format="auto" />

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
            backgroundColor: 'var(--surface)',
            padding: '20px',
            borderRadius: '8px',
            borderLeft: `4px solid ${colorLinea}`
          }}>
            <h3 style={{
              fontSize: '14px',
              fontWeight: 700,
              color: 'var(--text-muted)',
              margin: '0 0 8px 0',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Línea
            </h3>
            <p style={{
              fontSize: '24px',
              fontWeight: 700,
              margin: '0',
              color: colorLinea
            }}>
              L{estacion.linea}
            </p>
          </div>
          <div style={{
            backgroundColor: 'var(--surface)',
            padding: '20px',
            borderRadius: '8px',
            borderLeft: `4px solid #EC4899`
          }}>
            <h3 style={{
              fontSize: '14px',
              fontWeight: 700,
              color: 'var(--text-muted)',
              margin: '0 0 8px 0',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Tipo de Zona
            </h3>
            <p style={{
              fontSize: '16px',
              fontWeight: 500,
              margin: '0',
              color: 'var(--text)',
              textTransform: 'capitalize'
            }}>
              {(estacion.tipo_zona || '').replace('-', ' ')}
            </p>
          </div>
          <div style={{
            backgroundColor: 'var(--surface)',
            padding: '20px',
            borderRadius: '8px',
            borderLeft: `4px solid #06b6d4`
          }}>
            <h3 style={{
              fontSize: '14px',
              fontWeight: 700,
              color: 'var(--text-muted)',
              margin: '0 0 8px 0',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Horario
            </h3>
            <p style={{
              fontSize: '14px',
              fontWeight: 400,
              margin: '0',
              color: 'var(--text)'
            }}>
              {estacion.mejor_horario}
            </p>
          </div>
        </div>

        {(estacion.transferencias || []).length > 0 && (
          <div style={{
            backgroundColor: 'var(--surface)',
            border: '2px solid #F97316',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '50px'
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 700,
              color: 'var(--accent)',
              margin: '0 0 10px 0'
            }}>
              ⚡ Transferencias Disponibles
            </h3>
            <p style={{
              fontSize: '14px',
              color: 'var(--text-muted)',
              margin: '0'
            }}>
              Conecta con Línea {(estacion.transferencias || []).join(', ')} en esta estación
            </p>
          </div>
        )}
      </section>

      {/* PUNTOS DE INTERÉS */}
      {(estacion.pois || []).length > 0 && (
        <section style={{
          backgroundColor: 'var(--surface)',
          padding: '50px 20px'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <h2 style={{
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
              {(estacion.pois || []).map((poi, idx) => {
                const poiName = typeof poi === 'string' ? poi : poi.nombre;
                const poiTipo = typeof poi === 'string' ? null : poi.tipo;
                const poiDist = typeof poi === 'string' ? null : poi.distancia;
                return (
                  <div key={idx} style={{
                    backgroundColor: 'var(--surface-hover)',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                    borderTop: `4px solid ${colorLinea}`
                  }}>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      margin: '0 0 8px 0',
                      color: 'var(--text)'
                    }}>
                      {poiName}
                    </h3>
                    {poiTipo && (
                      <p style={{
                        fontSize: '14px',
                        color: 'var(--text-muted)',
                        margin: '0 0 8px 0',
                        textTransform: 'capitalize'
                      }}>
                        📍 {poiTipo}
                      </p>
                    )}
                    {poiDist && (
                      <p style={{
                        fontSize: '13px',
                        color: 'var(--text-dim)',
                        margin: '0'
                      }}>
                        ⏱️ {poiDist}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* TIPS */}
      {(Array.isArray(estacion.tips) ? estacion.tips : []).length > 0 && (
        <section style={{
          maxWidth: '1200px',
          margin: '50px auto',
          padding: '0 20px'
        }}>
          <h2 style={{
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
            {(Array.isArray(estacion.tips) ? estacion.tips : []).map((tip, idx) => (
              <li key={idx} style={{
                backgroundColor: 'var(--surface)',
                border: `2px solid ${colorLinea}`,
                borderRadius: '8px',
                padding: '20px',
                marginBottom: '15px',
                fontSize: '16px',
                fontWeight: 400,
                color: 'var(--text)',
                lineHeight: 1.6
              }}>
                ✓ {tip}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* HORARIOS Y COSTO */}
      {estacion.horarios && (
        <section style={{
          maxWidth: '1200px',
          margin: '50px auto',
          padding: '0 20px'
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            margin: '0 0 30px 0'
          }}>
            🕐 Horarios y Costo
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            <div style={{
              backgroundColor: 'var(--surface)',
              padding: '20px',
              borderRadius: '8px',
              borderLeft: `4px solid ${colorLinea}`
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: 700,
                color: 'var(--text-muted)',
                margin: '0 0 12px 0',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Horario de Operación
              </h3>
              <p style={{
                fontSize: '16px',
                fontWeight: 600,
                color: 'var(--text)',
                margin: '0 0 8px 0'
              }}>
                {estacion.horarios.apertura} - {estacion.horarios.cierre}
              </p>
              {estacion.horarios.notas && (
                <p style={{
                  fontSize: '13px',
                  color: 'var(--text-dim)',
                  margin: '0',
                  fontStyle: 'italic'
                }}>
                  {estacion.horarios.notas}
                </p>
              )}
            </div>
            <div style={{
              backgroundColor: 'var(--surface)',
              padding: '20px',
              borderRadius: '8px',
              borderLeft: `4px solid #EC4899`
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: 700,
                color: 'var(--text-muted)',
                margin: '0 0 12px 0',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Tarifa de Acceso
              </h3>
              <p style={{
                fontSize: '14px',
                color: 'var(--text)',
                margin: '0 0 6px 0'
              }}>
                💳 $6.40 MXN (FERIA/Metro)
              </p>
              <p style={{
                fontSize: '14px',
                color: 'var(--text)',
                margin: '0'
              }}>
                🚌 $12 MXN (Ecovía)
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ACCESIBILIDAD */}
      {estacion.accesibilidad && (
        <section style={{
          maxWidth: '1200px',
          margin: '50px auto',
          padding: '0 20px'
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            margin: '0 0 30px 0'
          }}>
            ♿ Accesibilidad
          </h2>
          <div style={{
            backgroundColor: 'var(--surface)',
            padding: '30px',
            borderRadius: '8px',
            borderLeft: `4px solid #06b6d4`
          }}>
            <p style={{
              fontSize: '16px',
              fontWeight: 400,
              color: 'var(--text)',
              margin: '0',
              lineHeight: 1.8
            }}>
              {estacion.accesibilidad}
            </p>
          </div>
        </section>
      )}

      {/* LUGARES CERCANOS */}
      {estacion.lugares_cercanos && estacion.lugares_cercanos.length > 0 && (
        <section style={{
          backgroundColor: 'var(--surface)',
          padding: '50px 20px'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: 700,
              margin: '0 0 30px 0'
            }}>
              🌍 Lugares Cercanos
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px'
            }}>
              {estacion.lugares_cercanos.map((lugar, idx) => (
                <div key={idx} style={{
                  backgroundColor: 'var(--surface-hover)',
                  padding: '20px',
                  borderRadius: '8px',
                  borderTop: `4px solid ${colorLinea}`
                }}>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    margin: '0 0 8px 0',
                    color: 'var(--text)'
                  }}>
                    {typeof lugar === 'string' ? lugar : lugar.nombre}
                  </h3>
                  {typeof lugar !== 'string' && lugar.categoria && (
                    <p style={{
                      fontSize: '14px',
                      color: 'var(--text-muted)',
                      margin: '0 0 8px 0',
                      textTransform: 'capitalize'
                    }}>
                      📍 {lugar.categoria}
                    </p>
                  )}
                  {typeof lugar !== 'string' && lugar.descripcion && (
                    <p style={{
                      fontSize: '13px',
                      color: 'var(--text-dim)',
                      margin: '0'
                    }}>
                      {lugar.descripcion}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* AFFILIATE TRANSPORT CARD */}
      <section style={{
        maxWidth: '1200px',
        margin: '50px auto',
        padding: '0 20px'
      }}>
        <AffiliateTransportCard estacion={estacion} linea={linea} />
      </section>

      {/* MUNDIAL RELEVANCIA */}
      {estacion.mundial_relevancia && (
        <section style={{
          backgroundColor: estacion.mundial_relevancia.includes('Sin relevancia') ? 'var(--surface)' : 'var(--surface)',
          padding: '40px 20px',
          marginTop: '50px'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: 700,
              margin: '0 0 20px 0',
              color: 'var(--text)'
            }}>
              🏟️ Información para el Mundial 2026
            </h2>
            <p style={{
              fontSize: '16px',
              color: 'var(--text)',
              margin: '0',
              lineHeight: 1.8
            }}>
              {estacion.mundial_relevancia}
            </p>
          </div>
        </section>
      )}

      {/* AFFILIATE MUNDIAL */}
      {estacion.mundial_relevancia && !estacion.mundial_relevancia.includes('Sin relevancia') && (
        <section style={{
          maxWidth: '1200px',
          margin: '50px auto',
          padding: '0 20px'
        }}>
          <AffiliateMundial estacion={estacion} />
        </section>
      )}

      {/* Ad 2 — Banner antes de navegacion */}
      <AdBannerLazy slot="4434764790" format="auto" />

      {/* NAVEGACIÓN */}
      <section style={{
        backgroundColor: 'var(--surface)',
        padding: '40px 20px',
        marginTop: '50px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h3 style={{
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
              backgroundColor: 'var(--surface)',
              border: '2px solid var(--border)',
              padding: '15px',
              borderRadius: '6px',
              textDecoration: 'none',
              color: 'var(--text)',
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
