import SearchBar from '@/app/components/SearchBar'

export const metadata = {
  title: 'MetroGuia.mx — Planifica tu ruta en metro, tren ligero y BRT en México',
  description: 'Trip planner de transporte urbano. Calcula rutas en metro, tren ligero y BRT para CDMX, Guadalajara y Monterrey. 400+ estaciones. Guía Mundial FIFA 2026.',
}

const ciudades = [
  {
    id: 'cdmx',
    nombre: 'Ciudad de México',
    sistema: 'Metro · Tren Ligero',
    stats: { estaciones: 195, lineas: 12, km: 226 },
    color: '#F5A623',
    href: '/cdmx/',
    fifa: { estadio: 'Estadio Azteca', fechas: '11, 17, 24 jun · 30 jun · 5 jul' },
    activa: true,
  },
  {
    id: 'gdl',
    nombre: 'Guadalajara',
    sistema: 'SITEUR · Tren Ligero',
    stats: { estaciones: 48, lineas: 3, km: 30 },
    color: '#06B6D4',
    href: '/gdl/',
    fifa: { estadio: 'Estadio Akron', fechas: '11, 18, 23, 26 jun' },
    activa: true,
  },
  {
    id: 'mty',
    nombre: 'Monterrey',
    sistema: 'Metrorrey',
    stats: { estaciones: 32, lineas: 2, km: 30 },
    color: '#EC4899',
    href: '/mty/',
    fifa: { estadio: 'Estadio BBVA', fechas: '14, 20, 24, 29 jun' },
    activa: true,
  },
]

const proximamente = [
  { id: 'puebla', nombre: 'Puebla', sistema: 'RUTA BRT', color: '#8B5CF6', href: '/puebla/' },
  { id: 'merida', nombre: 'Mérida', sistema: 'SIT Mérida', color: '#F59E0B', href: '/merida/' },
  { id: 'leon', nombre: 'León', sistema: 'Optibus SIT', color: '#10B981', href: '/leon/' },
  { id: 'tren-maya', nombre: 'Tren Maya', sistema: 'Ferroviario', color: '#0EA5E9', href: '/tren-maya/' },
  { id: 'queretaro', nombre: 'Querétaro', sistema: 'Q-BUS BRT', color: '#EF4444', href: '/queretaro/' },
  { id: 'chihuahua', nombre: 'Chihuahua', sistema: 'Chepe Express', color: '#D97706', href: '/chihuahua/' },
  { id: 'tijuana', nombre: 'Tijuana', sistema: 'SITT BRT', color: '#6B7280', href: '/tijuana/' },
  { id: 'toluca', nombre: 'Toluca', sistema: 'Tren Interurbano', color: '#7C3AED', href: '/toluca/' },
]

const rutasPopulares = [
  { origen: 'Zócalo', destino: 'Estadio Azteca', etiqueta: 'FIFA 2026', color: '#F5A623' },
  { origen: 'Aeropuerto', destino: 'Centro Histórico', etiqueta: 'Turismo', color: '#3B82F6' },
  { origen: 'Pantitlán', destino: 'Tacubaya', etiqueta: 'Conexión', color: '#22C55E' },
  { origen: 'Buenavista', destino: 'Bellas Artes', etiqueta: 'Cultura', color: '#8B5CF6' },
]

export default function LandingPage() {
  return (
    <div>
      {/* ── Hero + Search ── */}
      <section style={{
        background: 'linear-gradient(180deg, var(--bg) 0%, var(--surface) 100%)',
        padding: '4rem 1rem 3rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.375rem 1rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--primary-glow)',
            border: '1px solid var(--primary-border)',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: 'var(--primary)',
            marginBottom: '1.5rem',
          }}>
            Mundial FIFA 2026 — CDMX · GDL · MTY
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: '1rem',
          }}>
            Planifica tu ruta en<br />
            <span style={{ color: 'var(--primary)' }}>transporte público</span>
          </h1>

          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-muted)',
            maxWidth: '500px',
            margin: '0 auto 2rem',
            lineHeight: 1.6,
          }}>
            Calcula rutas en metro, tren ligero y BRT en las principales ciudades de México. Funciona offline.
          </p>

          {/* Trip Planner */}
          <SearchBar ciudad="cdmx" />
        </div>
      </section>

      {/* ── Rutas Populares ── */}
      <section style={{
        padding: '2.5rem 1rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h6 style={{
            color: 'var(--text-dim)',
            fontSize: '0.7rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '1rem',
          }}>
            Rutas populares
          </h6>
          <div style={{
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap',
          }}>
            {rutasPopulares.map((ruta) => {
              const slug = `${ruta.origen.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')}-a-${ruta.destino.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')}`
              return (
                <a
                  key={slug}
                  href={`/ruta/${slug}`}
                  className="card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    textDecoration: 'none',
                    flex: '1 1 220px',
                    minWidth: '220px',
                  }}
                >
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: ruta.color,
                    flexShrink: 0,
                  }} />
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--text)',
                    }}>
                      {ruta.origen} → {ruta.destino}
                    </div>
                    <div style={{
                      fontSize: '0.7rem',
                      color: 'var(--text-dim)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}>
                      {ruta.etiqueta}
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Ciudades Activas ── */}
      <section id="ciudades" style={{ padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '1.5rem',
          }}>
            <div>
              <h2 style={{ marginBottom: '0.25rem', fontSize: '1.5rem' }}>Ciudades sede FIFA 2026</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                Transporte urbano guiado para las 3 sedes mexicanas del Mundial
              </p>
            </div>
          </div>

          <div className="grid-3">
            {ciudades.map((ciudad) => (
              <a
                key={ciudad.id}
                href={ciudad.href}
                className="card"
                style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}
              >
                {/* City header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: 'var(--radius)',
                    backgroundColor: `${ciudad.color}15`,
                    border: `1px solid ${ciudad.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: ciudad.color,
                    flexShrink: 0,
                  }}>
                    {ciudad.id.toUpperCase().slice(0, 2)}
                  </div>
                  <div>
                    <div style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: 'var(--text)',
                    }}>{ciudad.nombre}</div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: ciudad.color,
                      fontWeight: 600,
                    }}>{ciudad.sistema}</div>
                  </div>
                </div>

                {/* Stats row */}
                <div style={{
                  display: 'flex',
                  gap: '1.25rem',
                  marginBottom: '1rem',
                }}>
                  {[
                    { val: ciudad.stats.estaciones, label: 'estaciones' },
                    { val: ciudad.stats.lineas, label: 'líneas' },
                    { val: `${ciudad.stats.km} km`, label: 'red' },
                  ].map((s) => (
                    <div key={s.label}>
                      <div style={{
                        fontSize: '1.125rem',
                        fontWeight: 700,
                        color: 'var(--text)',
                      }}>{s.val}</div>
                      <div style={{
                        fontSize: '0.65rem',
                        color: 'var(--text-dim)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* FIFA badge */}
                <div style={{
                  padding: '0.5rem 0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: `${ciudad.color}10`,
                  border: `1px solid ${ciudad.color}25`,
                  marginBottom: '1rem',
                  flex: 1,
                }}>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: ciudad.color,
                    marginBottom: '0.125rem',
                  }}>{ciudad.fifa.estadio}</div>
                  <div style={{
                    fontSize: '0.7rem',
                    color: 'var(--text-dim)',
                  }}>{ciudad.fifa.fechas} 2026</div>
                </div>

                {/* CTA */}
                <span style={{
                  color: ciudad.color,
                  fontWeight: 600,
                  fontSize: '0.85rem',
                }}>
                  Explorar →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Próximamente ── */}
      <section style={{
        padding: '2.5rem 1rem',
        borderTop: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h6 style={{
            color: 'var(--text-dim)',
            fontSize: '0.7rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '1rem',
          }}>
            Próximamente — 8 ciudades más
          </h6>
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
          }}>
            {proximamente.map((c) => (
              <a
                key={c.id}
                href={c.href}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 0.875rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--border)',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  color: 'var(--text-muted)',
                  transition: 'all 0.2s',
                }}
              >
                <span style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: c.color,
                  opacity: 0.6,
                }} />
                {c.nombre}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Banner ── */}
      <section style={{
        padding: '3rem 1rem',
        borderTop: '1px solid var(--border)',
        backgroundColor: 'var(--surface)',
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
          textAlign: 'center',
        }}>
          {[
            { val: '275+', label: 'Estaciones guiadas' },
            { val: '17', label: 'Líneas de transporte' },
            { val: '3', label: 'Ciudades activas' },
            { val: '13', label: 'Partidos FIFA en México' },
          ].map((s) => (
            <div key={s.label}>
              <div style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                color: 'var(--primary)',
                letterSpacing: '-0.02em',
              }}>{s.val}</div>
              <div style={{
                fontSize: '0.75rem',
                color: 'var(--text-dim)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginTop: '0.25rem',
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section style={{
        padding: '3rem 1rem',
        borderTop: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Cómo funciona</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>
            Planifica tu viaje en 3 pasos, sin apps ni datos móviles
          </p>

          <div className="grid-3">
            {[
              {
                num: '01',
                title: 'Busca tu ruta',
                desc: 'Escribe tu origen y destino. El buscador encuentra la estación más cercana con autocompletado.',
              },
              {
                num: '02',
                title: 'Revisa los pasos',
                desc: 'Ve las líneas, transbordos, tiempo estimado y costo. Incluye alertas de seguridad y tips.',
              },
              {
                num: '03',
                title: 'Viaja como local',
                desc: 'Instala la app (PWA) para acceso offline. Consulta tu ruta sin internet dentro del metro.',
              },
            ].map((step) => (
              <div key={step.num} className="card" style={{ padding: '1.5rem' }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: 'var(--primary)',
                  opacity: 0.3,
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.02em',
                }}>{step.num}</div>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                }}>{step.title}</h4>
                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  margin: 0,
                }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
