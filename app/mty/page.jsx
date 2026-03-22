
import Link from 'next/link';
import { lineasMTY } from '@/data/mty/lineas-detalle';
import { estacionesMTY } from '@/data/mty/estaciones';

export const metadata = {
  title: 'Metrorrey — Guía turística para FIFA 2026 | MetroGuia',
  description: 'Descubre cómo usar el metro de Monterrey para acceder al Estadio BBVA durante el Mundial 2026. Guía completa de líneas, estaciones y puntos turísticos.',
  openGraph: {
    title: 'Metrorrey — Guía turística para FIFA 2026',
    description: 'Líneas, estaciones y ruta al Estadio BBVA',
    url: 'https://metroguia.mx/mty',
    locale: 'es_MX',
  }
};

export default function MonterreyHub() {
  // Estaciones turísticas destacadas
  const estacionesTuristicas = estacionesMTY.filter(e => 
    ['cuauhtemoc', 'parque-fundidora', 'regina', 'fundadores', 'exposicion'].includes(e.slug)
  );

  return (
    <main style={{ backgroundColor: '#fff', color: '#1a1a1a' }}>
      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #EC4899 0%, #f97316 100%)',
        color: '#fff',
        padding: '60px 20px',
        textAlign: 'center',
        borderBottom: '6px solid #EC4899'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: '48px',
            fontWeight: 800,
            margin: '0 0 20px 0',
            lineHeight: 1.2
          }}>
            🚇 Metrorrey
          </h1>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '24px',
            fontWeight: 500,
            margin: '0 0 30px 0',
            lineHeight: 1.4
          }}>
            Tu guía completa del Metro de Monterrey<br />
            Acceso al Estadio BBVA para FIFA 2026
          </p>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            fontWeight: 400,
            margin: '0',
            opacity: 0.95
          }}>
            Descubre cómo navegar el transporte público de Monterrey y llega fácilmente a los partidos del Mundial
          </p>
        </div>
      </section>

      {/* MUNDIAL 2026 BANNER */}
      <section style={{
        background: '#FEF3C7',
        borderLeft: '6px solid #F97316',
        padding: '30px 20px',
        margin: '40px 0',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: '28px',
            fontWeight: 700,
            margin: '0 0 15px 0',
            color: '#92400e'
          }}>
            🏟️ Partidos FIFA World Cup 2026 en Monterrey
          </h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            margin: '15px 0 20px 0',
            color: '#78350f'
          }}>
            El Estadio BBVA (Estadio Monterrey para el Mundial) albergará 4 partidos históricos
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            margin: '20px 0'
          }}>
            <div style={{
              background: '#fff',
              padding: '15px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <p style={{ margin: '0 0 5px 0', fontWeight: 700 }}>14 de Junio</p>
              <p style={{ margin: '0', fontSize: '14px' }}>UEFA playoff winner B vs. Tunisia<br />10:00 PM ET</p>
            </div>
            <div style={{
              background: '#fff',
              padding: '15px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <p style={{ margin: '0 0 5px 0', fontWeight: 700 }}>20 de Junio</p>
              <p style={{ margin: '0', fontSize: '14px' }}>Tunisia vs. Japan<br />12:00 AM ET</p>
            </div>
            <div style={{
              background: '#fff',
              padding: '15px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <p style={{ margin: '0 0 5px 0', fontWeight: 700 }}>24 de Junio</p>
              <p style={{ margin: '0', fontSize: '14px' }}>South Korea vs. South Africa<br />9:00 PM ET</p>
            </div>
            <div style={{
              background: '#fff',
              padding: '15px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <p style={{ margin: '0 0 5px 0', fontWeight: 700 }}>29 de Junio</p>
              <p style={{ margin: '0', fontSize: '14px' }}>Group F Winner vs. Group C 2nd<br />9:00 PM ET (Round of 32)</p>
            </div>
          </div>
          <Link href="/mty/mundial-2026" style={{
            display: 'inline-block',
            background: '#F97316',
            color: '#fff',
            padding: '12px 30px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 600,
            marginTop: '15px',
            transition: 'background 0.3s'
          }}>
            Guía completa del Mundial 2026 →
          </Link>
        </div>
      </section>

      {/* LÍNEAS */}
      <section style={{
        maxWidth: '1200px',
        margin: '60px auto',
        padding: '0 20px'
      }}>
        <h2 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: '36px',
          fontWeight: 700,
          margin: '0 0 40px 0',
          color: '#1a1a1a'
        }}>
          Las 2 Líneas del Metrorrey
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px'
        }}>
          {lineasMTY.map(linea => (
            <Link key={linea.id} href={`/mty/linea/${linea.id}`} style={{ textDecoration: 'none' }}>
              <div style={{
                background: '#fff',
                border: `4px solid ${linea.color}`,
                borderRadius: '12px',
                padding: '25px',
                cursor: 'pointer',
                transition: 'transform 0.3s, box-shadow 0.3s',
                ':hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                }
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: linea.color,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '15px',
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#fff'
                }}>
                  L{linea.id}
                </div>
                <h3 style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '22px',
                  fontWeight: 700,
                  margin: '0 0 10px 0',
                  color: '#1a1a1a'
                }}>
                  {linea.colorNombre}
                </h3>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px',
                  color: '#666',
                  margin: '0 0 15px 0'
                }}>
                  {linea.inicio} → {linea.fin}
                </p>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  color: '#999',
                  margin: '0'
                }}>
                  {linea.total} estaciones • {linea.municipios.join(', ')}
                </p>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  color: linea.color,
                  margin: '15px 0 0 0',
                  fontWeight: 600
                }}>
                  Explorar línea →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CÓMO LLEGAR AL ESTADIO */}
      <section style={{
        background: '#f3f4f6',
        padding: '60px 20px',
        margin: '60px 0 0 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: '36px',
            fontWeight: 700,
            margin: '0 0 30px 0',
            color: '#1a1a1a',
            textAlign: 'center'
          }}>
            🏟️ Cómo Llegar al Estadio BBVA para el Mundial
          </h2>
          <div style={{
            background: '#fff',
            border: '3px solid #EC4899',
            borderRadius: '12px',
            padding: '30px',
            marginBottom: '30px'
          }}>
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '20px',
              fontWeight: 700,
              margin: '0 0 20px 0',
              color: '#EC4899'
            }}>
              Ruta Recomendada: Metro + Caminata
            </h3>
            <ol style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '16px',
              lineHeight: 1.8,
              margin: '0',
              paddingLeft: '20px',
              color: '#1a1a1a'
            }}>
              <li><strong>Punto de salida:</strong> Cualquier estación del centro (Cuauhtémoc, Fundadores, Alameda)</li>
              <li><strong>Toma Línea 1 (Amarilla):</strong> Dirección Exposición (hacia el oriente)</li>
              <li><strong>Bájate en:</strong> Estación Exposición (terminal de la línea)</li>
              <li><strong>Camina:</strong> 22 minutos aproximadamente hacia el Estadio BBVA</li>
              <li><strong>Ruta a pie:</strong> Cruza Expo Ganadera → Domo Care → Puente sobre Río La Silla</li>
            </ol>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            <div style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '8px',
              border: '2px solid #06b6d4'
            }}>
              <h4 style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '16px',
                fontWeight: 700,
                margin: '0 0 10px 0',
                color: '#06b6d4'
              }}>
                ⏱️ Tiempo Total
              </h4>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '14px',
                margin: '0',
                color: '#666'
              }}>
                30-40 minutos desde el centro
              </p>
            </div>
            <div style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '8px',
              border: '2px solid #06b6d4'
            }}>
              <h4 style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '16px',
                fontWeight: 700,
                margin: '0 0 10px 0',
                color: '#06b6d4'
              }}>
                💰 Costo
              </h4>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '14px',
                margin: '0',
                color: '#666'
              }}>
                ~$8 MXN por viaje
              </p>
            </div>
            <div style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '8px',
              border: '2px solid #06b6d4'
            }}>
              <h4 style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '16px',
                fontWeight: 700,
                margin: '0 0 10px 0',
                color: '#06b6d4'
              }}>
                🚌 Alternativa
              </h4>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '14px',
                margin: '0',
                color: '#666'
              }}>
                Autobús directo: rutas 223, 214, TME, 093
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ESTACIONES TURÍSTICAS DESTACADAS */}
      <section style={{
        maxWidth: '1200px',
        margin: '60px auto',
        padding: '0 20px'
      }}>
        <h2 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: '36px',
          fontWeight: 700,
          margin: '0 0 40px 0',
          color: '#1a1a1a'
        }}>
          Estaciones Turísticas Destacadas
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '25px'
        }}>
          {estacionesTuristicas.map(estacion => (
            <Link key={estacion.slug} href={`/mty/estacion/${estacion.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{
                background: '#fff',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer'
              }}>
                <div style={{
                  background: estacion.linea === '1' ? '#FFD700' : '#00AA00',
                  padding: '15px',
                  color: '#fff',
                  fontWeight: 700
                }}>
                  Línea {estacion.linea}
                </div>
                <div style={{
                  padding: '20px'
                }}>
                  <h3 style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '20px',
                    fontWeight: 700,
                    margin: '0 0 8px 0',
                    color: '#1a1a1a'
                  }}>
                    {estacion.nombre}
                  </h3>
                  <p style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '14px',
                    color: '#666',
                    margin: '0 0 12px 0',
                    lineHeight: 1.5
                  }}>
                    {estacion.intro}
                  </p>
                  {estacion.pois.length > 0 && (
                    <div style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '13px',
                      color: '#999',
                      borderTop: '1px solid #e5e7eb',
                      paddingTop: '12px'
                    }}>
                      <strong>Cerca:</strong> {estacion.pois.slice(0, 2).map(p => p.nombre).join(', ')}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: 'linear-gradient(135deg, #EC4899 0%, #f97316 100%)',
        color: '#fff',
        padding: '60px 20px',
        textAlign: 'center',
        marginTop: '80px'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: '32px',
            fontWeight: 700,
            margin: '0 0 20px 0'
          }}>
            ¿Buscas Hospedaje en Monterrey?
          </h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            fontWeight: 400,
            margin: '0 0 30px 0',
            lineHeight: 1.6
          }}>
            Descubre las mejores opciones de alojamiento cercanas a las estaciones del metro para tu experiencia en el Mundial 2026.
          </p>
          <Link href="/hospedaje?ciudad=monterrey" style={{
            display: 'inline-block',
            background: '#fff',
            color: '#EC4899',
            padding: '14px 40px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '16px',
            transition: 'background 0.3s'
          }}>
            Explorar Hospedaje en Monterrey
          </Link>
        </div>
      </section>
    </main>
  );
}