import { trenSuburbanoData } from '@/data/cdmx/tren-suburbano'

export function generateStaticParams() {
  return Object.keys(trenSuburbanoData.lineas).map((id) => ({ id }))
}

export function generateMetadata({ params }) {
  const linea = trenSuburbanoData.lineas[params.id]
  if (!linea) return { title: 'Línea no encontrada | MetroGuia' }
  return {
    title: `${linea.nombre} — Tren Suburbano CDMX | MetroGuia`,
    description: `Guía completa de ${linea.nombre} del Tren Suburbano: estaciones, horarios, conexiones y cómo llegar. Ruta ${linea.inicio} → ${linea.fin}.`,
  }
}

export default function TrenSuburbanoLineaPage({ params }) {
  const linea = trenSuburbanoData.lineas[params.id]

  if (!linea) {
    return (
      <div className="container" style={{ padding: '5rem 1rem', textAlign: 'center' }}>
        <h1>Línea no encontrada</h1>
        <a href="/cdmx/tren-suburbano/" className="btn-primary" style={{ display: 'inline-block', marginTop: '2rem' }}>
          Ver Tren Suburbano →
        </a>
      </div>
    )
  }

  return (
    <div>
      <section style={{
        background: `linear-gradient(135deg, var(--surface) 0%, ${linea.color || '#00A651'}11 100%)`,
        paddingTop: '5rem', paddingBottom: '4rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <p style={{
            fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1rem',
            letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600,
          }}>
            <a href="/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>MetroGuia</a>
            {' '}→{' '}
            <a href="/cdmx/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>CDMX</a>
            {' '}→{' '}
            <a href="/cdmx/tren-suburbano/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Tren Suburbano</a>
            {' '}→ {linea.nombre}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{
              backgroundColor: linea.color || '#00A651', width: '3rem', height: '3rem', borderRadius: 'var(--radius)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 700, fontSize: '0.75rem', color: 'white',
            }}>
              {linea.id}
            </div>
            <h1 style={{ color: 'var(--text)', marginBottom: 0 }}>{linea.nombre}</h1>
          </div>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            {linea.descripcion || `Ruta de ${linea.inicio} a ${linea.fin}. ${linea.total || linea.estaciones?.length || ''} estaciones.`}
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 1rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <h2 style={{ marginBottom: '1.5rem' }}>Estaciones — {linea.inicio} a {linea.fin}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {(linea.estaciones || []).map((est, idx) => (
              <a key={est.slug} href={`/cdmx/tren-suburbano/estacion/${est.slug}/`} style={{ textDecoration: 'none' }}>
                <div className="card" style={{
                  display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.5rem',
                }}>
                  <div style={{
                    width: '2rem', height: '2rem', borderRadius: '50%',
                    backgroundColor: linea.color || '#00A651', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.75rem', fontWeight: 700, color: 'white', flexShrink: 0,
                  }}>
                    {idx + 1}
                  </div>
                  <h4 style={{ color: 'var(--text)', fontSize: '1rem', flex: 1 }}>{est.nombre}</h4>
                  <span style={{ color: 'var(--primary)', fontSize: '0.875rem' }}>→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '3rem 1rem' }}>
        <div className="container">
          <div className="grid-3">
            <div className="card">
              <h4 style={{ color: linea.color || '#00A651', marginBottom: '0.5rem' }}>💳 Tarifa</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                $16 MXN (tarjeta recargable)
              </p>
            </div>
            <div className="card">
              <h4 style={{ color: linea.color || '#00A651', marginBottom: '0.5rem' }}>🕐 Frecuencia</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                Cada 10-15 min (hora pico: 5-8 min)
              </p>
            </div>
            <div className="card">
              <h4 style={{ color: linea.color || '#00A651', marginBottom: '0.5rem' }}>🚏 Estaciones</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                {linea.estaciones?.length || linea.total} estaciones
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
