export const metadata = {
  title: 'Mundial FIFA 2026 en CDMX — Cómo llegar en Metro | MetroGuia',
  description: 'Guía completa para llegar al Estadio Azteca durante el Mundial 2026. Fechas de partidos, rutas en metro, precios y tips para turistas.',
  keywords: 'mundial 2026, estadio azteca, metro cdmx, como llegar, fifa',
}

export default function MundialPage() {
  return (
    <div>
      <section className="hero" style={{ backgroundColor: '#1a472a' }}>
        <div className="container">
          <h1>Mundial FIFA 2026 en CDMX</h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Guía completa para llegar al Estadio Azteca en metro</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Fechas de partidos en CDMX</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
            {[
              { fecha: '11 junio 2026', desc: 'Partido inaugural' },
              { fecha: '17 junio 2026', desc: 'Fase de grupos' },
              { fecha: '24 junio 2026', desc: 'Fase de grupos' },
              { fecha: '30 junio 2026', desc: 'Octavos de final' },
              { fecha: '5 julio 2026', desc: 'Cuartos de final' },
            ].map((p, i) => (
              <div key={i} className="lugar-card" style={{ textAlign: 'center' }}>
                <h3 style={{ color: '#1a472a', marginBottom: '0.5rem' }}>{p.fecha}</h3>
                <p style={{ fontSize: '0.875rem', color: '#666' }}>{p.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ marginBottom: '1.5rem' }}>Cómo llegar al Estadio Azteca</h2>
          <div style={{ backgroundColor: 'var(--metro-gray)', padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '2rem' }}>
            <ol style={{ listStyle: 'decimal', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '1.5rem' }}>
                <strong>Toma la Línea 2 (Azul) hasta Tasqueña</strong>
                <p style={{ fontSize: '0.875rem', color: '#666', marginTop: '0.5rem' }}>La Línea 2 pasa por zonas centrales de la ciudad</p>
              </li>
              <li style={{ marginBottom: '1.5rem' }}>
                <strong>Transborda al Tren Ligero en Tasqueña</strong>
                <p style={{ fontSize: '0.875rem', color: '#666', marginTop: '0.5rem' }}>El Tren Ligero va directo al Estadio Azteca</p>
              </li>
              <li style={{ marginBottom: '1.5rem' }}>
                <strong>Desciende en la estación Estadio Azteca</strong>
              </li>
            </ol>
          </div>

          <div style={{ backgroundColor: '#fff3cd', border: '2px solid #ff9800', borderRadius: 'var(--radius)', padding: '2rem', marginBottom: '2rem' }}>
            <h3 style={{ color: '#cc6600', marginBottom: '1rem' }}>⚠️ ADVERTENCIA IMPORTANTE</h3>
            <p style={{ marginBottom: '1rem', fontWeight: 600 }}>La tarjeta Metro NO funciona en el Tren Ligero</p>
            <p style={{ fontSize: '0.875rem' }}>Compra un boleto adicional en Tasqueña para el Tren Ligero. Costo total: ~$15 MXN.</p>
          </div>

          <h2 style={{ marginBottom: '1.5rem' }}>Detalles del viaje</h2>
          <div className="table-responsive" style={{ marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                {[
                  ['Tiempo total', '~45 min desde el Centro Histórico'],
                  ['Costo Metro (L2)', '$5 MXN'],
                  ['Costo Tren Ligero', '~$10 MXN'],
                  ['Costo total', '~$15 MXN'],
                  ['Horario metro', '5:00 AM - 12:00 AM'],
                ].map(([k, v], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '0.875rem 1rem', fontWeight: 600, whiteSpace: 'nowrap' }}>{k}</td>
                    <td style={{ padding: '0.875rem 1rem' }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href="/mundial-2026/estadio-azteca/" className="cta-btn">Ver guía paso a paso del Estadio Azteca →</a>
          </div>
        </div>
      </section>
    </div>
  )
}
