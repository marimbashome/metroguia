import { trenLigeroData } from '@/data/cdmx/tren-ligero'

export function generateMetadata() {
  return {
    title: 'Tren Ligero Xochimilco — Ruta al Estadio Azteca y Trajineras | MetroGuia',
    description: 'Guía del Tren Ligero CDMX: 18 estaciones de Tasqueña a Xochimilco. Cómo llegar al Estadio Azteca (Mundial 2026) y a las trajineras. Horarios, tarifas y conexión con Metro.',
    keywords: 'Tren Ligero, Xochimilco, Estadio Azteca, Mundial 2026, trajineras, CDMX, MetroGuia',
  }
}

export default function TrenLigeroPage() {
  const data = trenLigeroData
  const linea = data.lineas['TL']

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'CDMX', item: 'https://metroguia.mx/cdmx/' },
      { '@type': 'ListItem', position: 3, name: 'Tren Ligero', item: 'https://metroguia.mx/cdmx/tren-ligero/' }
    ]
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, var(--surface) 0%, rgba(255, 215, 0, 0.08) 100%)',
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
            {' '}→ Tren Ligero
          </p>
          <h1 style={{
            color: 'var(--text)', marginBottom: '0.5rem',
            background: 'linear-gradient(135deg, var(--text) 0%, #FFD700 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            {data.icono} Tren Ligero Xochimilco
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
            {data.descripcion}
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(255, 215, 0, 0.15)', border: '1px solid rgba(255, 215, 0, 0.3)',
              borderRadius: 'var(--radius-full)', padding: '0.625rem 1.25rem',
              color: '#FFD700', fontSize: '0.875rem', fontWeight: 600,
            }}>
              <span style={{ fontSize: '1.25rem' }}>18</span> Estaciones
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'var(--surface-hover)', border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-full)', padding: '0.625rem 1.25rem',
              color: 'var(--text)', fontSize: '0.875rem', fontWeight: 600,
            }}>
              $3 MXN
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'var(--surface-hover)', border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-full)', padding: '0.625rem 1.25rem',
              color: 'var(--text)', fontSize: '0.875rem', fontWeight: 600,
            }}>
              13 km
            </div>
          </div>
        </div>
      </section>

      {/* Mundial Alert */}
      <section style={{ padding: '2rem 1rem' }}>
        <div className="container">
          <div className="alert alert-warning" style={{ marginBottom: '0' }}>
            <div style={{ width: '1.25rem', height: '1.25rem', flexShrink: 0, marginTop: '0.125rem' }}>🏟️</div>
            <div className="alert-content">
              <div className="alert-title">Ruta al Estadio Azteca — Mundial FIFA 2026</div>
              <div className="alert-message">
                Metro L2 → Tasqueña → Tren Ligero → Estadio Azteca (10 paradas, ~15 min). La estación más cercana al estadio. Camina ~10 min al estadio.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Station list */}
      <section style={{ padding: '2rem 1rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <h2 style={{ marginBottom: '0.5rem' }}>18 Estaciones — Tasqueña a Xochimilco</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>
            Recorrido completo del Tren Ligero de norte a sur
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {data.estaciones.map((est, idx) => (
              <a key={est.slug} href={`/cdmx/tren-ligero/estacion/${est.slug}/`} style={{ textDecoration: 'none' }}>
                <div className="card" style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '1rem 1.5rem',
                }}>
                  <div style={{
                    width: '2rem', height: '2rem', borderRadius: '50%',
                    backgroundColor: '#FFD700', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.75rem', fontWeight: 700, color: '#000', flexShrink: 0,
                  }}>
                    {idx + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ color: 'var(--text)', fontSize: '1rem', marginBottom: '0.125rem' }}>{est.nombre}</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{est.alcaldia}</p>
                  </div>
                  {est.conexiones_metro.length > 0 && (
                    <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600 }}>🚇 Metro</span>
                  )}
                  {est.slug === 'estadio-azteca-tl' && (
                    <span style={{ fontSize: '0.75rem', color: '#FFD700', fontWeight: 600 }}>🏟️ Estadio Azteca</span>
                  )}
                  {est.slug === 'xochimilco-tl' && (
                    <span style={{ fontSize: '0.75rem', color: '#FFD700', fontWeight: 600 }}>🛶 Trajineras</span>
                  )}
                  <span style={{ color: 'var(--primary)', fontSize: '0.875rem' }}>→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tourist highlights */}
      <section style={{ padding: '4rem 1rem' }}>
        <div className="container">
          <h2 style={{ marginBottom: '2rem' }}>Puntos de Interés en la Ruta</h2>
          <div className="grid-3">
            <div className="card">
              <h4 style={{ marginBottom: '0.75rem', color: '#FFD700' }}>🏟️ Estadio Azteca</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                Sede del Mundial FIFA 2026. Bájate en la estación Estadio Azteca (parada 10) y camina 10 minutos.
              </p>
            </div>
            <div className="card">
              <h4 style={{ marginBottom: '0.75rem', color: '#FFD700' }}>🛶 Xochimilco</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                Patrimonio UNESCO. Paseo en trajineras por los canales prehispánicos. Terminal del Tren Ligero, a 10 min de los embarcaderos.
              </p>
            </div>
            <div className="card">
              <h4 style={{ marginBottom: '0.75rem', color: '#FFD700' }}>🎨 Museo Dolores Olmedo</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                Colección de Diego Rivera y Frida Kahlo. Cerca de la estación Tepepan. Hermosos jardines con pavos reales.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
