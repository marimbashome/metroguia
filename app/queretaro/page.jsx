export const metadata = {
  title: 'Q-Ride BRT Querétaro — Próximamente | MetroGuia',
  description: 'MetroGuia está mapeando el sistema Q-Ride BRT de Querétaro. Guía turística de transporte en la ciudad colonial UNESCO. Consulta ya nuestras guías de CDMX, Guadalajara y Monterrey.',
}

export default function QueretaroPage() {
  return (
    <div>
      <section style={{ background: 'linear-gradient(135deg, #7f1d1d 0%, #111 100%)', color: 'white', padding: '5rem 2rem 4rem', textAlign: 'center' }}>
        <div className="container">
          <p style={{ fontSize: '0.875rem', opacity: 0.7, marginBottom: '0.5rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            <a href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>MetroGuia</a> → Querétaro
          </p>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '0.3rem 1rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            🔜 Próximamente
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: 'Syne, sans-serif', marginBottom: '1rem' }}>
            🏰 Q-Ride BRT Querétaro
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.85, maxWidth: '580px', margin: '0 auto 1rem' }}>
            Mapea el sistema de autobús rápido que conecta el corazón colonial de Querétaro con sus principales colonias y zonas de expansión.
          </p>
          <p style={{ opacity: 0.7, fontSize: '0.95rem' }}>Ciudad colonial UNESCO · A 3h de CDMX</p>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem' }}>
        <div className="container" style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', marginBottom: '2rem' }}>Qué estamos mapeando</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { num: '5', label: 'Líneas / Corredores' },
              { num: '~80', label: 'Estaciones / Paradas' },
              { num: '~55 km', label: 'Kilómetros de red' },
            ].map((s) => (
              <div key={s.label} style={{ background: '#f8f9fa', borderRadius: '12px', padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#EF4444', fontFamily: 'Syne, sans-serif' }}>{s.num}</div>
                <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ background: '#EF444415', border: '1px solid #EF444430', borderRadius: '12px', padding: '1.5rem', marginBottom: '2.5rem' }}>
            <p style={{ margin: 0, color: '#444', lineHeight: 1.7 }}>
              El sistema Q-Ride de autobús rápido conecta el centro histórico de Querétaro con sus principales colonias y la zona industrial. Una de las ciudades de más rápido crecimiento en México.
            </p>
          </div>
          <p style={{ color: '#888', fontSize: '0.9rem' }}>Estamos trabajando en esta guía. Mientras tanto, explora nuestras guías disponibles:</p>
        </div>
      </section>

      <section style={{ padding: '2rem 2rem 4rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
            {[
              { nombre: 'Metro CDMX', href: '/cdmx/', color: '#E91E8C', desc: '195 estaciones · 12 líneas' },
              { nombre: 'SITEUR Guadalajara', href: 'https://gdl.metroguia.mx', color: '#06B6D4', desc: '48 estaciones · 3 líneas' },
              { nombre: 'Metrorrey', href: 'https://mty.metroguia.mx', color: '#EC4899', desc: '32 estaciones · 2 líneas' },
            ].map((c) => (
              <a key={c.nombre} href={c.href} style={{ textDecoration: 'none' }}>
                <div style={{ background: 'white', border: `2px solid ${c.color}33`, borderRadius: '12px', padding: '1.25rem', textAlign: 'center' }}>
                  <div style={{ color: c.color, fontWeight: 700, fontFamily: 'Syne, sans-serif', marginBottom: '0.25rem' }}>{c.nombre}</div>
                  <div style={{ fontSize: '0.8rem', color: '#666' }}>{c.desc}</div>
                  <div style={{ color: c.color, fontSize: '0.85rem', fontWeight: 600, marginTop: '0.5rem' }}>Ver guía →</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}