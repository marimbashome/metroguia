export const metadata = {
  title: 'MetroGuia — Guía de transporte urbano para el Mundial FIFA 2026',
  description: 'La guía definitiva del transporte urbano en México. 11 ciudades: CDMX, Guadalajara, Monterrey, Puebla, Mérida, León, Tren Maya, Querétaro, Chihuahua, Tijuana y Toluca. 400+ estaciones, rutas y tips para el Mundial FIFA 2026.',
}

const ciudadesActivas = [
  {
    id: 'cdmx',
    nombre: 'Ciudad de México',
    sistema: 'Metro CDMX',
    descripcion: 'El metro más grande de América Latina. 12 líneas y 195 estaciones para recorrer la capital.',
    stats: [{ num: '195', label: 'estaciones' }, { num: '12', label: 'líneas' }, { num: '226 km', label: 'red total' }],
    color: '#E91E8C',
    colorBg: '#fdf0f7',
    href: '/cdmx/',
    fifa: 'Estadio Azteca · 11, 17, 24 jun · 30 jun · 5 jul 2026',
    emoji: '🏙️',
  },
  {
    id: 'gdl',
    nombre: 'Guadalajara',
    sistema: 'SITEUR · Tren Ligero',
    descripcion: 'El sistema de tren eléctrico urbano de la Perla Tapatía. 3 líneas conectando la ZMG.',
    stats: [{ num: '48', label: 'estaciones' }, { num: '3', label: 'líneas' }, { num: '30 km', label: 'red total' }],
    color: '#06B6D4',
    colorBg: '#f0fbff',
    href: 'https://gdl.metroguia.mx',
    fifa: 'Estadio Akron · 11, 18, 23, 26 jun 2026',
    emoji: '🌵',
  },
  {
    id: 'mty',
    nombre: 'Monterrey',
    sistema: 'Metrorrey',
    descripcion: 'El metro de la ciudad industrial del norte. 2 líneas conectando el área metropolitana.',
    stats: [{ num: '32', label: 'estaciones' }, { num: '2', label: 'líneas' }, { num: '30 km', label: 'red total' }],
    color: '#EC4899',
    colorBg: '#fdf2f8',
    href: 'https://mty.metroguia.mx',
    fifa: 'Estadio BBVA · 14, 20, 24, 29 jun 2026',
    emoji: '⛰️',
  },
  {
    id: 'puebla',
    nombre: 'Puebla',
    sistema: 'RUTA BRT',
    descripcion: 'Sistema de corredores de autobús rápido en la cuarta ciudad más grande de México. Patrimonio UNESCO.',
    stats: [{ num: '3', label: 'corredores' }, { num: '60', label: 'paradas' }, { num: '40 km', label: 'red total' }],
    color: '#8B5CF6',
    colorBg: '#f5f0ff',
    href: '/puebla/',
    fifa: 'Ciudad Patrimonio UNESCO · Catedral, Cholula, Barrio Artista',
    emoji: '⛪',
  },
  {
    id: 'merida',
    nombre: 'Mérida',
    sistema: 'SIT Mérida',
    descripcion: 'Sistema integrado de transporte en la capital de Yucatán. Puerta de entrada a Chichén Itzá y cenotes.',
    stats: [{ num: '4', label: 'corredores' }, { num: '50', label: 'paradas' }, { num: '35 km', label: 'red total' }],
    color: '#F59E0B',
    colorBg: '#fffbeb',
    href: '/merida/',
    fifa: 'Puerta a Chichén Itzá · "La Ciudad Blanca" de México',
    emoji: '🏛️',
  },
  {
    id: 'leon',
    nombre: 'León / Bajío',
    sistema: 'Optibus SIT',
    descripcion: '4 corredores BRT en la capital mundial del calzado. Puerta a Guanajuato y San Miguel de Allende.',
    stats: [{ num: '4', label: 'corredores' }, { num: '20', label: 'paradas' }, { num: '30 km', label: 'red total' }],
    color: '#10B981',
    colorBg: '#ecfdf5',
    href: '/leon/',
    fifa: 'Capital del calzado artesanal · Guanajuato UNESCO a 40 min',
    emoji: '🥾',
  },
  {
    id: 'tren-maya',
    nombre: 'Tren Maya',
    sistema: 'Ferroviario',
    descripcion: 'El nuevo tren de pasajeros que conecta Cancún, Tulum, Bacalar, Palenque y Chichén Itzá.',
    stats: [{ num: '7', label: 'tramos' }, { num: '15', label: 'estaciones' }, { num: '1,554 km', label: 'red total' }],
    color: '#0EA5E9',
    colorBg: '#f0f9ff',
    href: '/tren-maya/',
    fifa: 'Cancún → Chichén Itzá → Tulum · Maravillas del Mundo',
    emoji: '🌊',
  },
  {
    id: 'queretaro',
    nombre: 'Querétaro',
    sistema: 'Q-BUS BRT',
    descripcion: 'Red de autobús rápido en la ciudad colonial más dinámica de México. Centro histórico UNESCO.',
    stats: [{ num: '3', label: 'corredores' }, { num: '16', label: 'paradas' }, { num: '25 km', label: 'red total' }],
    color: '#EF4444',
    colorBg: '#fff5f5',
    href: '/queretaro/',
    fifa: 'Centro Histórico UNESCO · Acueducto del siglo XVIII',
    emoji: '🏰',
  },
  {
    id: 'chihuahua',
    nombre: 'Chihuahua / Chepe',
    sistema: 'Chepe Express',
    descripcion: 'El icónico Ferrocarril Chihuahua al Pacífico atraviesa las Barrancas del Cobre (673 km).',
    stats: [{ num: '1', label: 'ruta Chepe' }, { num: '15', label: 'estaciones' }, { num: '673 km', label: 'Chi-Mochis' }],
    color: '#D97706',
    colorBg: '#fffbeb',
    href: '/chihuahua/',
    fifa: 'Barrancas del Cobre · Cultura Rarámuri · Pueblo Mágico Creel',
    emoji: '🏔️',
  },
  {
    id: 'tijuana',
    nombre: 'Tijuana',
    sistema: 'SITT BRT',
    descripcion: 'Corredores BRT en la ciudad frontera más transitada del mundo. A 35 min de San Diego sede FIFA.',
    stats: [{ num: '3', label: 'corredores' }, { num: '15', label: 'paradas' }, { num: '25 km', label: 'red total' }],
    color: '#6B7280',
    colorBg: '#f9fafb',
    href: '/tijuana/',
    fifa: 'San Diego sede FIFA 2026 · Cruce a pie San Ysidro en 5 min',
    emoji: '🌉',
  },
  {
    id: 'toluca',
    nombre: 'Toluca',
    sistema: 'Tren Interurbano + Mexibús',
    descripcion: 'El Tren Interurbano conecta el Estado de México con CDMX en 65 min desde Metro Observatorio.',
    stats: [{ num: '3', label: 'líneas' }, { num: '17', label: 'estaciones' }, { num: '58 km', label: 'a CDMX' }],
    color: '#7C3AED',
    colorBg: '#f5f3ff',
    href: '/toluca/',
    fifa: 'Tren directo a CDMX en 65 min · Base económica para el FIFA 2026',
    emoji: '🚄',
  },
]

const ciudadesProximamente = []

export default function LandingPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #111111 0%, #1a1a2e 100%)', color: 'white', padding: '5rem 2rem 4rem', textAlign: 'center' }}>
        <div className="container">
          <p style={{ fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.6, marginBottom: '1rem' }}>
            🌍 La guía del transporte urbano para el Mundial FIFA 2026
          </p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1.1, marginBottom: '1.5rem', fontFamily: 'Syne, sans-serif' }}>
            Muévete en México<br />
            <span style={{ color: 'var(--metro-orange)' }}>como un local</span>
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.85, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Guías completas de metro, tren ligero y BRT para turistas en las ciudades sede del Mundial FIFA 2026 y los principales destinos de México.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/cdmx/" className="cta-btn">Explorar CDMX →</a>
            <a href="#ciudades" style={{ padding: '0.75rem 1.5rem', border: '2px solid rgba(255,255,255,0.3)', borderRadius: '8px', color: 'white', textDecoration: 'none', fontWeight: 600, transition: 'border-color 0.2s' }}>
              Ver todas las ciudades ↓
            </a>
          </div>
        </div>
      </section>

      {/* FIFA 2026 Banner */}
      <section style={{ background: 'var(--metro-orange)', padding: '1.25rem 2rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'white', fontWeight: 600, margin: 0 }}>
            ⚽ Mundial FIFA 2026 · CDMX, Guadalajara y Monterrey
            {' '}— <a href="/mundial-2026/" style={{ color: 'white', textDecoration: 'underline' }}>Ver guías de estadios →</a>
          </p>
        </div>
      </section>

      {/* Ciudades activas */}
      <section id="ciudades" style={{ padding: '5rem 2rem' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '0.75rem', fontSize: '2rem', fontFamily: 'Syne, sans-serif' }}>Elige tu ciudad</h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '3.5rem', fontSize: '1.1rem' }}>
            11 sistemas de transporte · 400+ estaciones guiadas
          </p>
          <div className="grid grid-3">
            {ciudadesActivas.map((ciudad) => (
              <a key={ciudad.id} href={ciudad.href} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: ciudad.colorBg,
                  border: `2px solid ${ciudad.color}22`,
                  borderRadius: '16px',
                  padding: '2rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer',
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{ciudad.emoji}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontFamily: 'Syne, sans-serif', color: 'var(--text)', margin: 0 }}>{ciudad.nombre}</h3>
                    <span style={{ background: ciudad.color, color: 'white', fontSize: '0.7rem', padding: '2px 8px', borderRadius: '20px', fontWeight: 700, whiteSpace: 'nowrap' }}>LIVE</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: ciudad.color, fontWeight: 600, marginBottom: '0.75rem' }}>{ciudad.sistema}</p>
                  <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '1.25rem', lineHeight: 1.5, flex: 1 }}>{ciudad.descripcion}</p>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    {ciudad.stats.map((s) => (
                      <div key={s.label} style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: ciudad.color, fontFamily: 'Syne, sans-serif' }}>{s.num}</div>
                        <div style={{ fontSize: '0.7rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ background: `${ciudad.color}15`, borderRadius: '8px', padding: '0.5rem 0.75rem', marginBottom: '1rem' }}>
                    <p style={{ margin: 0, fontSize: '0.78rem', color: ciudad.color, fontWeight: 500 }}>⚽ {ciudad.fifa}</p>
                  </div>
                  <span style={{ color: ciudad.color, fontWeight: 700, fontSize: '0.9rem' }}>Explorar guía →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>


      {/* Por qué MetroGuia */}
      <section style={{ padding: '4rem 2rem', background: 'var(--metro-dark)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Tu guía de transporte para México</h2>
          <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.05rem' }}>
            Sin apps, sin datos extra. Solo guías claras de estaciones, líneas y rutas para que llegues a donde necesitas en las ciudades más visitadas de México.
          </p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--metro-orange)', fontFamily: 'Syne, sans-serif' }}>400+</div>
              <div style={{ opacity: 0.7, fontSize: '0.9rem' }}>Estaciones guiadas</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--metro-orange)', fontFamily: 'Syne, sans-serif' }}>11</div>
              <div style={{ opacity: 0.7, fontSize: '0.9rem' }}>Sistemas de transporte</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--metro-orange)', fontFamily: 'Syne, sans-serif' }}>17</div>
              <div style={{ opacity: 0.7, fontSize: '0.9rem' }}>Partidos FIFA en México</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
