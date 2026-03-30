import { trolebusData } from '@/data/cdmx/trolebus'

export function generateStaticParams() {
  return trolebusData.estaciones.map((est) => ({
    slug: est.slug,
  }))
}

export function generateMetadata({ params }) {
  const estacion = trolebusData.estaciones.find(e => e.slug === params.slug)
  if (!estacion) return { title: 'Estación no encontrada | MetroGuia' }
  return {
    title: `${estacion.nombre} — Trolebús CDMX | MetroGuia`,
    description: estacion.descripcion_turistica,
  }
}

export default function TrolebusEstacionPage({ params }) {
  const estacion = trolebusData.estaciones.find(e => e.slug === params.slug)

  if (!estacion) {
    return (
      <div className="container" style={{ padding: '5rem 1rem', textAlign: 'center' }}>
        <h1>Estación no encontrada</h1>
        <a href="/cdmx/trolebus/" className="btn-primary" style={{ display: 'inline-block', marginTop: '2rem' }}>
          Ver trolebús →
        </a>
      </div>
    )
  }

  const linea = trolebusData.lineas[estacion.linea]
  const lineaEstaciones = linea?.estaciones || []
  const idx = lineaEstaciones.findIndex(e => e.slug === estacion.slug)
  const prevStation = idx > 0 ? lineaEstaciones[idx - 1] : null
  const nextStation = idx < lineaEstaciones.length - 1 ? lineaEstaciones[idx + 1] : null

  return (
    <div>
      <section style={{
        background: `linear-gradient(135deg, var(--surface) 0%, ${linea?.color || '#0072CE'}11 100%)`,
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
            <a href="/cdmx/trolebus/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Trolebús</a>
            {linea && (
              <>
                {' '}→{' '}
                <a href={`/cdmx/trolebus/linea/${linea.id}/`} style={{ color: 'var(--primary)', textDecoration: 'none' }}>{linea.nombre}</a>
              </>
            )}
            {' '}→ {estacion.nombre}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{
              backgroundColor: linea?.color || '#0072CE', width: '3rem', height: '3rem', borderRadius: 'var(--radius)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 700, fontSize: '0.65rem', color: 'white',
            }}>
              {estacion.linea}
            </div>
            <h1 style={{ color: 'var(--text)', marginBottom: 0 }}>{estacion.nombre}</h1>
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            {estacion.alcaldia} · Trolebús {linea?.nombre || estacion.linea}
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 1rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.7', maxWidth: '700px' }}>
            {estacion.descripcion_turistica}
          </p>
        </div>
      </section>

      {(prevStation || nextStation) && (
        <section style={{ padding: '3rem 1rem', borderBottom: '1px solid var(--border)' }}>
          <div className="container">
            <h2 style={{ marginBottom: '1.5rem' }}>Estaciones Adyacentes</h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {prevStation && (
                <a href={`/cdmx/trolebus/estacion/${prevStation.slug}/`} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ minWidth: '200px' }}>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>← Anterior</p>
                    <h4 style={{ color: 'var(--text)' }}>{prevStation.nombre}</h4>
                  </div>
                </a>
              )}
              {nextStation && (
                <a href={`/cdmx/trolebus/estacion/${nextStation.slug}/`} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ minWidth: '200px' }}>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Siguiente →</p>
                    <h4 style={{ color: 'var(--text)' }}>{nextStation.nombre}</h4>
                  </div>
                </a>
              )}
            </div>
          </div>
        </section>
      )}

      {estacion.conexiones_metro.length > 0 && (
        <section style={{ padding: '3rem 1rem' }}>
          <div className="container">
            <h2 style={{ marginBottom: '1.5rem' }}>Conexiones con Metro</h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {estacion.conexiones_metro.map((slug) => (
                <a key={slug} href={`/estacion/${slug}/`} className="card" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 1.5rem' }}>
                  <span style={{ fontSize: '1.25rem' }}>🚇</span>
                  <span style={{ color: 'var(--text)', fontWeight: 600 }}>Metro {slug}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
