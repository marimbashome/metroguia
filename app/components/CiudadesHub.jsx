// ============================================================================
// CiudadesHub — Selector de ciudades para homepage
// Muestra las 3 ciudades sede del Mundial FIFA 2026 en México
// ============================================================================

export default function CiudadesHub() {
  const ciudades = [
    {
      id: 'cdmx',
      nombre: 'Ciudad de México',
      abbr: 'CDMX',
      color: '#F5A623',
      descripcion: 'Metro con 195 estaciones en 12 líneas. La red más grande de México.',
      estadio: 'Estadio Azteca',
      lineas: 12,
      estaciones: 195,
      partidos: 5,
      url: 'https://metroguia.mx',
      transportLabel: 'Metro CDMX',
      emoji: '🏛️',
    },
    {
      id: 'gdl',
      nombre: 'Guadalajara',
      abbr: 'GDL',
      color: '#06B6D4',
      descripcion: 'SITEUR con 3 líneas y 48 estaciones. Tren Ligero hasta el Estadio Akron.',
      estadio: 'Estadio Akron',
      lineas: 3,
      estaciones: 48,
      partidos: 4,
      url: 'https://gdl.metroguia.mx',
      transportLabel: 'SITEUR GDL',
      emoji: '🏟️',
    },
    {
      id: 'mty',
      nombre: 'Monterrey',
      abbr: 'MTY',
      color: '#EC4899',
      descripcion: 'Metrorrey con 2 líneas y 32 estaciones. Acceso al Estadio BBVA.',
      estadio: 'Estadio BBVA',
      lineas: 2,
      estaciones: 32,
      partidos: 4,
      url: 'https://mty.metroguia.mx',
      transportLabel: 'Metrorrey',
      emoji: '⛰️',
    },
  ];

  return (
    <section style={{ padding: '4rem 1.5rem', background: '#F4F4F4' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{
            display: 'inline-block',
            background: '#111111',
            color: '#F5A623',
            fontSize: '0.75rem',
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '0.35rem 1rem',
            borderRadius: '999px',
            marginBottom: '1rem',
          }}>
            🏆 FIFA World Cup 2026
          </span>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            fontWeight: 800,
            color: '#1A1A1A',
            margin: '0 0 0.75rem 0',
          }}>
            3 ciudades sede en México
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '1.05rem',
            color: '#555',
            maxWidth: '580px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Guías completas de transporte público para moverse durante el Mundial FIFA 2026
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {ciudades.map((ciudad) => (
            <a
              key={ciudad.id}
              href={ciudad.url}
              style={{
                display: 'block',
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'transform 0.2s, box-shadow 0.2s',
                border: '2px solid transparent',
              }}
            >
              {/* Card header */}
              <div style={{ background: ciudad.color, padding: '1.5rem', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <span style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: '2rem',
                      fontWeight: 800,
                      color: 'white',
                      display: 'block',
                    }}>
                      {ciudad.abbr}
                    </span>
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.9rem',
                      color: 'rgba(255,255,255,0.85)',
                      fontWeight: 500,
                    }}>
                      {ciudad.nombre}
                    </span>
                  </div>
                  <span style={{ fontSize: '2.5rem' }}>{ciudad.emoji}</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.25)' }}>
                  {[
                    { value: ciudad.lineas, label: 'líneas' },
                    { value: ciudad.estaciones, label: 'estaciones' },
                    { value: ciudad.partidos, label: 'partidos' },
                  ].map(stat => (
                    <div key={stat.label} style={{ textAlign: 'center' }}>
                      <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.3rem', fontWeight: 800, color: 'white' }}>
                        {stat.value}
                      </div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: '1.25rem 1.5rem' }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', color: '#444', lineHeight: 1.6, margin: '0 0 1rem 0' }}>
                  {ciudad.descripcion}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    background: `${ciudad.color}18`,
                    color: ciudad.color,
                    fontFamily: "'Syne', sans-serif",
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    padding: '0.3rem 0.75rem',
                    borderRadius: '999px',
                    border: `1px solid ${ciudad.color}40`,
                  }}>
                    ⚽ {ciudad.estadio}
                  </span>
                  <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '0.82rem', fontWeight: 700, color: ciudad.color }}>
                    Ver guía →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
