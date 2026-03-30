import { trolebusData } from '@/data/cdmx/trolebus'

export function generateMetadata() {
  return {
    title: 'Trolebús CDMX — 11 Líneas, L11 Elevada a Chalco | MetroGuia',
    description: 'Guía del Trolebús STE CDMX: 11 líneas incluyendo la Línea 11 Elevada (Constitución de 1917 a Chalco). Rutas, paradas, horarios, tarifas y conexiones con Metro.',
    keywords: 'Trolebús, STE, CDMX, Línea Elevada, Chalco, transporte eléctrico, MetroGuia',
  }
}

export default function TrolebusPage() {
  const data = trolebusData
  const lineasArray = Object.values(data.lineas)
  const linea11 = data.lineas['TB-11']
  const regularLines = lineasArray.filter(l => l.id !== 'TB-11')

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'CDMX', item: 'https://metroguia.mx/cdmx/' },
      { '@type': 'ListItem', position: 3, name: 'Trolebús', item: 'https://metroguia.mx/cdmx/trolebus/' }
    ]
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section style={{
        background: 'linear-gradient(135deg, var(--surface) 0%, rgba(0, 114, 206, 0.08) 100%)',
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
            {' '}→ Trolebús
          </p>
          <h1 style={{
            color: 'var(--text)', marginBottom: '0.5rem',
            background: 'linear-gradient(135deg, var(--text) 0%, #0072CE 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            {data.icono} Trolebús CDMX
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
            {data.descripcion}
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(0, 114, 206, 0.15)', border: '1px solid rgba(0, 114, 206, 0.3)',
              borderRadius: 'var(--radius-full)', padding: '0.625rem 1.25rem',
              color: '#0072CE', fontSize: '0.875rem', fontWeight: 600,
            }}>
              <span style={{ fontSize: '1.25rem' }}>11</span> Líneas
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'var(--surface-hover)', border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-full)', padding: '0.625rem 1.25rem',
              color: 'var(--text)', fontSize: '0.875rem', fontWeight: 600,
            }}>
              $4 - $13 MXN
            </div>
          </div>
        </div>
      </section>

      {/* Featured: L11 Elevada */}
      <section style={{ padding: '3rem 1rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <h2 style={{ marginBottom: '0.5rem', color: '#C41E3A' }}>Línea 11 Elevada — La estrella del sistema</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>
            Primera línea de trolebús elevado en Latinoamérica. Inaugurada en 2025.
          </p>

          <a href="/cdmx/trolebus/linea/TB-11/" style={{ textDecoration: 'none' }}>
            <div className="card" style={{
              background: 'linear-gradient(135deg, rgba(196, 30, 58, 0.05) 0%, var(--surface) 100%)',
              border: '1px solid rgba(196, 30, 58, 0.2)',
              padding: '2rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{
                  backgroundColor: '#C41E3A', width: '3rem', height: '3rem', borderRadius: 'var(--radius)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: '0.75rem', color: 'white',
                }}>
                  L11
                </div>
                <div>
                  <h3 style={{ color: 'var(--text)', marginBottom: '0.25rem' }}>{linea11.nombre}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                    {linea11.inicio} → {linea11.fin} · {linea11.total} estaciones · 18.5 km
                  </p>
                </div>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1rem' }}>
                {linea11.descripcion}
              </p>
              <div style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.875rem' }}>
                Ver estaciones y recorrido →
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* All lines grid */}
      <section style={{ padding: '4rem 1rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <h2 style={{ marginBottom: '0.5rem' }}>Líneas Regulares del Trolebús</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>
            10 líneas convencionales que recorren la zona centro y oriente de CDMX · $4 MXN
          </p>

          <div className="grid-3">
            {regularLines.map((linea) => (
              <a key={linea.id} href={`/cdmx/trolebus/linea/${linea.id}/`} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      backgroundColor: linea.color, width: '2.5rem', height: '2.5rem', borderRadius: 'var(--radius)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 700, fontSize: '0.6rem', color: 'white', flexShrink: 0,
                    }}>
                      {linea.id}
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '0.25rem', color: 'var(--text)', fontSize: '0.95rem' }}>{linea.nombre}</h4>
                    </div>
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border)', paddingTop: '0.75rem' }}>
                    {linea.inicio} → {linea.fin}
                  </div>
                  <div style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.875rem', marginTop: 'auto' }}>
                    Ver ruta →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section style={{ padding: '4rem 1rem' }}>
        <div className="container">
          <h2 style={{ marginBottom: '2rem' }}>Tips del Trolebús para Turistas</h2>
          <div className="grid-3">
            <div className="card">
              <h4 style={{ marginBottom: '0.75rem', color: '#0072CE' }}>💳 Pago</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                Líneas regulares: $4 MXN. L11 Elevada: $13 MXN. Acepta Tarjeta de Movilidad Integrada.
              </p>
            </div>
            <div className="card">
              <h4 style={{ marginBottom: '0.75rem', color: '#0072CE' }}>🚌 Diferencia con buses</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                El trolebús es eléctrico (cero emisiones) y circula por rutas fijas con cables aéreos. Más limpio y silencioso que los buses.
              </p>
            </div>
            <div className="card">
              <h4 style={{ marginBottom: '0.75rem', color: '#0072CE' }}>🆕 L11 Elevada</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                La joya del sistema: vía elevada exclusiva, estaciones cerradas con torniquetes, y aire acondicionado. Similar a un metro ligero.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
