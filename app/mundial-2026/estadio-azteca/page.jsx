export const metadata = {
  title: 'Cómo llegar al Estadio Azteca en Metro — Guía paso a paso | MetroGuia',
  description: 'Guía detallada: cómo llegar al Estadio Azteca en metro para el Mundial 2026. Instrucciones, horarios, precios y consejos.',
}

export default function EstadioAztecaPage() {
  return (
    <div>
      <section className="hero" style={{ backgroundColor: '#1a472a' }}>
        <div className="container">
          <h1>Cómo llegar al Estadio Azteca</h1>
          <p>Guía paso a paso para los partidos del Mundial 2026</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '2rem' }}>Instrucciones paso a paso</h2>

          {[
            { paso: 1, color: '#0057A8', titulo: 'Llega a cualquier estación de la Línea 2', desc: 'Desde el Centro Histórico: Zócalo, Bellas Artes, Allende o San Juan de Letrán.', warn: false },
            { paso: 2, color: '#0057A8', titulo: 'Sube en dirección sur (Tasqueña)', desc: 'Busca letreros "TASQUEÑA" o "SUR". Tiempo desde el Centro: 20-25 minutos.', warn: false },
            { paso: 3, color: '#0057A8', titulo: 'Desciende en Tasqueña', desc: 'Todos los pasajeros bajan aquí. En días de partido, la estación estará llena — mantén tu mochila cerca.', warn: false },
            { paso: 4, color: '#cc6600', titulo: 'PASO CLAVE: Compra boleto del Tren Ligero', desc: 'Tu tarjeta Metro NO funciona aquí. Busca la taquilla del Tren Ligero y paga ~$10 MXN.', warn: true },
            { paso: 5, color: '#0057A8', titulo: 'Sube al Tren Ligero con destino al Estadio', desc: 'El Tren Ligero va directo al Estadio Azteca. Tiempo desde Tasqueña: 10-15 minutos.', warn: false },
            { paso: 6, color: '#0057A8', titulo: '¡Llegaste al Estadio Azteca!', desc: 'Tiempo total desde el Centro: ~1 hora. Sigue a la multitud hacia las taquillas.', warn: false },
          ].map(({ paso, color, titulo, desc, warn }) => (
            <div key={paso} style={{ backgroundColor: warn ? '#fff3cd' : '#f0f9ff', borderLeft: `4px solid ${warn ? '#ff9800' : '#0057A8'}`, padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '1.5rem' }}>
              <h3 style={{ color, marginBottom: '0.75rem' }}>Paso {paso}: {titulo}</h3>
              <p style={{ marginBottom: 0 }}>{desc}</p>
            </div>
          ))}

          <h2 style={{ marginBottom: '1.5rem', marginTop: '2rem' }}>Mapa del viaje</h2>
          <div style={{ backgroundColor: 'var(--metro-gray)', padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '3rem', textAlign: 'center', fontFamily: 'monospace' }}>
            <pre style={{ overflow: 'auto' }}>
{`Tu ubicación (ej: Centro Histórico)
         ↓
    Línea 2 (Azul)
    20-25 minutos
         ↓
       TASQUEÑA
  [Compra boleto Tren Ligero]
         ↓
     Tren Ligero
    10-15 minutos
         ↓
  ESTADIO AZTECA 🏟️`}
            </pre>
          </div>

          <h2 style={{ marginBottom: '1.5rem' }}>Horarios</h2>
          <div className="table-responsive" style={{ marginBottom: '3rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--metro-gray)' }}>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left', borderBottom: '2px solid #ddd', whiteSpace: 'nowrap' }}>Servicio</th>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Horario</th>
                </tr>
              </thead>
              <tbody>
                {[['Metro (Línea 2)', '5:00 AM - 12:00 AM'], ['Tren Ligero', '5:30 AM - 12:30 AM'], ['Antes de partidos', 'Salir 1.5–2 horas antes']].map(([s, h], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '0.875rem 1rem', whiteSpace: 'nowrap' }}>{s}</td>
                    <td style={{ padding: '0.875rem 1rem' }}>{h}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="btn-group" style={{ marginTop: '2rem' }}>
            <a href="/mundial-2026/" className="cta-btn">← Volver a Mundial 2026</a>
            <a href="/linea/2/" className="cta-btn" style={{ backgroundColor: '#0057A8' }}>Ver Línea 2 →</a>
          </div>
        </div>
      </section>
    </div>
  )
}
