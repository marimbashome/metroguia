'use client'

export default function ExplorarContent({ zonasDestacadas, estacionesTuristicas, rutasDestacadas, lineasArray, breadcrumbSchema }) {
  return (
    <div>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* HERO SECTION */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(135deg, var(--surface) 0%, rgba(0, 212, 255, 0.05) 100%)',
        paddingTop: '5rem',
        paddingBottom: '4rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <p style={{
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            marginBottom: '1rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}>
            <a href="/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>MetroGuia</a>
            {' '}→ Explorar
          </p>
          <h1 style={{
            color: 'var(--text)',
            marginBottom: '0.5rem',
            background: 'linear-gradient(135deg, var(--text) 0%, #00D4FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Descubre CDMX en Metro
          </h1>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--text-muted)',
            marginBottom: '2rem',
            lineHeight: '1.6',
            maxWidth: '700px',
          }}>
            Hub interactivo para turistas. Explora zonas turísticas, estaciones destacadas, rutas populares y qué hacer en cada línea del metro.
          </p>

          {/* Stats badges */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '0',
            flexWrap: 'wrap',
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(0, 212, 255, 0.15)',
              border: '1px solid rgba(0, 212, 255, 0.3)',
              borderRadius: 'var(--radius-full)',
              padding: '0.625rem 1.25rem',
              color: '#00D4FF',
              fontSize: '0.875rem',
              fontWeight: 600,
            }}>
              <span style={{ fontSize: '1.25rem' }}>{zonasDestacadas.length}</span> Zonas Destacadas
            </div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--primary-glow)',
              border: '1px solid var(--primary-border)',
              borderRadius: 'var(--radius-full)',
              padding: '0.625rem 1.25rem',
              color: 'var(--primary)',
              fontSize: '0.875rem',
              fontWeight: 600,
            }}>
              <span style={{ fontSize: '1.25rem' }}>{rutasDestacadas.length}+</span> Rutas Populares
            </div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--surface-hover)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-full)',
              padding: '0.625rem 1.25rem',
              color: 'var(--text)',
              fontSize: '0.875rem',
              fontWeight: 600,
            }}>
              <span style={{ fontSize: '1.25rem' }}>12</span> Líneas de Metro
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* ZONAS TURÍSTICAS */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section style={{
        padding: '4rem 1rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ marginBottom: '0.5rem' }}>Zonas Turísticas Destacadas</h2>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '0.95rem',
            }}>
              Explora los barrios y lugares más visitados de CDMX
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            marginBottom: '0',
          }}>
            {zonasDestacadas.map((zona) => (
              <a
                key={zona.slug}
                href={`/zona/${zona.slug}`}
                style={{
                  display: 'block',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--surface-hover)'
                  e.currentTarget.style.borderColor = '#00D4FF'
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--surface)'
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <h3 style={{
                  color: 'var(--text)',
                  marginBottom: '0.5rem',
                  fontSize: '1.25rem',
                }}>
                  {zona.nombre}
                </h3>
                <p style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem',
                  marginBottom: '1rem',
                  lineHeight: '1.5',
                }}>
                  {zona.descripcion.substring(0, 120)}...
                </p>
                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  flexWrap: 'wrap',
                  marginBottom: '1rem',
                }}>
                  {zona.estaciones.slice(0, 3).map((est) => (
                    <span
                      key={est}
                      style={{
                        display: 'inline-block',
                        background: 'var(--surface-active)',
                        border: '1px solid var(--border-light)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '0.375rem 0.75rem',
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                        textTransform: 'capitalize',
                      }}
                    >
                      {est.replace(/-/g, ' ')}
                    </span>
                  ))}
                  {zona.estaciones.length > 3 && (
                    <span style={{
                      display: 'inline-block',
                      color: 'var(--text-muted)',
                      fontSize: '0.75rem',
                    }}>
                      +{zona.estaciones.length - 3}
                    </span>
                  )}
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#00D4FF',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                }}>
                  Ver zona →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* RUTAS POPULARES */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section style={{
        padding: '4rem 1rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ marginBottom: '0.5rem' }}>Rutas Populares para Turistas</h2>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '0.95rem',
            }}>
              Combinaciones de estaciones más visitadas por turistas
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1rem',
          }}>
            {rutasDestacadas.map((ruta, idx) => (
              <a
                key={idx}
                href={`/ruta/${ruta.origen}_${ruta.destino}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  padding: '1.25rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--surface-hover)'
                  e.currentTarget.style.borderColor = 'var(--primary)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--surface)'
                  e.currentTarget.style.borderColor = 'var(--border)'
                }}
              >
                <div style={{
                  flex: 1,
                }}>
                  <h3 style={{
                    color: 'var(--text)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    marginBottom: '0.25rem',
                  }}>
                    {ruta.titulo}
                  </h3>
                  <p style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.85rem',
                  }}>
                    {ruta.origen} → {ruta.destino}
                  </p>
                </div>
                <div style={{
                  color: 'var(--primary)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                }}>
                  →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* DISCOVER BY LINE */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section style={{
        padding: '4rem 1rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ marginBottom: '0.5rem' }}>Descubre por Línea de Metro</h2>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '0.95rem',
            }}>
              Qué conecta cada línea del metro
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
          }}>
            {lineasArray.slice(0, 12).map((linea) => (
              <a
                key={linea.numero}
                href={`/linea/${linea.numero}`}
                style={{
                  display: 'block',
                  background: 'var(--surface)',
                  border: `2px solid ${linea.color || 'var(--border)'}`,
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--surface-hover)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = `0 12px 24px rgba(0, 212, 255, 0.1)`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--surface)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: linea.color || 'var(--surface-active)',
                    borderRadius: 'var(--radius)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'white',
                  }}>
                    {linea.numero}
                  </div>
                  <div>
                    <h3 style={{
                      color: 'var(--text)',
                      fontSize: '1rem',
                      fontWeight: 600,
                      margin: 0,
                    }}>
                      Línea {linea.numero}
                    </h3>
                    <p style={{
                      color: 'var(--text-muted)',
                      fontSize: '0.75rem',
                      margin: 0,
                    }}>
                      {linea.nombre}
                    </p>
                  </div>
                </div>
                <p style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.85rem',
                  margin: 0,
                  lineHeight: '1.4',
                }}>
                  {linea.estaciones?.length || 15} estaciones
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* TOP POIs */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section style={{
        padding: '4rem 1rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ marginBottom: '0.5rem' }}>Puntos de Interés Principales</h2>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '0.95rem',
            }}>
              Qué ver cerca de estaciones turísticas
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
          }}>
            {estacionesTuristicas.map((estacion) => (
              <div
                key={estacion.slug}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem',
                  overflow: 'hidden',
                }}
              >
                <a
                  href={`/estacion/${estacion.slug}`}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <h3 style={{
                    color: 'var(--text)',
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    marginBottom: '0.5rem',
                  }}>
                    {estacion.nombre}
                  </h3>
                  <p style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.85rem',
                    marginBottom: '1rem',
                  }}>
                    Línea {estacion.linea}
                  </p>
                </a>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}>
                  {estacion.pois?.slice(0, 3).map((poi, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '0.75rem',
                        background: 'var(--surface-active)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.85rem',
                      }}
                    >
                      <div style={{
                        color: 'var(--text)',
                        fontWeight: 500,
                        marginBottom: '0.25rem',
                      }}>
                        {poi.nombre}
                      </div>
                      <div style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.8rem',
                      }}>
                        {poi.distancia}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* MUNDIAL 2026 CALLOUT */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section style={{
        padding: '4rem 1rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, rgba(245, 166, 35, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            textAlign: 'center',
          }}>
            <h2 style={{
              color: 'var(--primary)',
              marginBottom: '1rem',
              fontSize: '1.75rem',
            }}>
              🌍 Mundial FIFA 2026
            </h2>
            <p style={{
              color: 'var(--text)',
              fontSize: '1.125rem',
              marginBottom: '1.5rem',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto 1.5rem',
            }}>
              Acceso rápido al Estadio Azteca desde cualquier punto turístico.
              {' '}
              <strong>Viaja en metro y evita tráfico.</strong>
            </p>
            <a
              href="/mundial-2026"
              style={{
                display: 'inline-block',
                background: 'var(--primary)',
                color: '#000',
                padding: '0.75rem 1.75rem',
                borderRadius: 'var(--radius)',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.95rem',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--primary-hover)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--primary)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Guía de Movilidad para el Mundial →
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* QUICK LINKS TO CITY HUBS */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section style={{
        padding: '4rem 1rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ marginBottom: '0.5rem' }}>Centros Principales</h2>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '0.95rem',
            }}>
              Acceso directo a los hubs turísticos más importantes
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1rem',
          }}>
            {[
              { nombre: 'Centro Histórico', slug: 'centro-historico', emoji: '🏛️' },
              { nombre: 'Condesa', slug: 'condesa', emoji: '🎨' },
              { nombre: 'Roma Norte', slug: 'roma-norte', emoji: '🍽️' },
              { nombre: 'Polanco', slug: 'polanco', emoji: '✨' },
              { nombre: 'Coyoacán', slug: 'coyoacan', emoji: '🎭' },
              { nombre: 'Xochimilco', slug: 'xochimilco', emoji: '🚤' },
            ].map((hub) => (
              <a
                key={hub.slug}
                href={`/zona/${hub.slug}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem 1rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--surface-hover)'
                  e.currentTarget.style.borderColor = '#00D4FF'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--surface)'
                  e.currentTarget.style.borderColor = 'var(--border)'
                }}
              >
                <div style={{ fontSize: '2.5rem' }}>
                  {hub.emoji}
                </div>
                <h3 style={{
                  color: 'var(--text)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  margin: 0,
                }}>
                  {hub.nombre}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CTA SECTION */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section style={{
        padding: '4rem 1rem',
      }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, var(--surface) 0%, var(--surface-hover) 100%)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem',
            textAlign: 'center',
          }}>
            <h2 style={{
              color: 'var(--text)',
              marginBottom: '1rem',
              fontSize: '1.75rem',
            }}>
              ¿Necesitas una ruta específica?
            </h2>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '1rem',
              marginBottom: '2rem',
              maxWidth: '500px',
              margin: '0 auto 2rem',
            }}>
              Usa nuestro planificador de rutas para obtener instrucciones paso a paso con transferencias.
            </p>
            <a
              href="/"
              style={{
                display: 'inline-block',
                background: '#00D4FF',
                color: '#0A0A0F',
                padding: '0.875rem 2rem',
                borderRadius: 'var(--radius)',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 212, 255, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Planificar Ruta Ahora
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
