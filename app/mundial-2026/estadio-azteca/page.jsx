export const metadata = {
  title: 'Cómo llegar al Estadio Azteca en Metro — Guía paso a paso | MetroGuia',
  description: 'Guía detallada: cómo llegar al Estadio Azteca en metro para el Mundial 2026. Instrucciones, horarios, precios y consejos.',
}

export default function EstadioAztecaPage() {
  const estadioSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Estadio Azteca',
    description: 'Estadio de fútbol icónico en Ciudad de México, sede de partidos del Mundial FIFA 2026',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calzada de Tlalpan 3665',
      addressLocality: 'Ciudad de México',
      addressRegion: 'Ciudad de México',
      postalCode: '14020',
      addressCountry: 'MX'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.302500,
      longitude: -99.145833
    },
    sameAs: 'https://es.wikipedia.org/wiki/Estadio_Azteca',
    capacity: 87523,
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Metro access', value: 'Tren Ligero — Estación Estadio Azteca' },
      { '@type': 'LocationFeatureSpecification', name: 'Accessibility', value: 'Wheelchair accessible' }
    ]
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'MetroGuia',
        item: 'https://metroguia.mx'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Mundial 2026',
        item: 'https://metroguia.mx/mundial-2026/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Estadio Azteca',
        item: 'https://metroguia.mx/mundial-2026/estadio-azteca/'
      }
    ]
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(estadioSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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

          <h2 style={{ marginBottom: '2rem', marginTop: '2rem' }}>Alrededor del Estadio Azteca</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { emoji: '🍔', titulo: 'Comida', desc: 'Vendedores de tacos, elotes y refrescos fuera del estadio. Dentro: hamburguesas y comida rápida. Lleva dinero en efectivo.' },
              { emoji: '💰', titulo: 'Cajeros ATM', desc: '7-Eleven y tiendas cercanas tienen ATMs. Retira efectivo ANTES de llegar — habrá largas colas.' },
              { emoji: '🛡️', titulo: 'Seguridad', desc: 'Revisión de bolsas en la entrada. No se permiten botellas de vidrio, latas o sustancias. Viaja en grupos después del partido.' },
              { emoji: '⏰', titulo: 'Horario de Llegada', desc: 'Llega 2-3 horas antes. La entrada se abre 3 horas previas. Evita últimos 30 min antes del inicio.' },
              { emoji: '🎒', titulo: 'Qué Llevar', desc: 'Documento de identidad, dinero, boleto impreso. NO llevar: botellas, latas, cámaras profesionales, armas.' },
              { emoji: '📱', titulo: 'Descanso Post-Partido', desc: 'Después del partido: espera 30-45 min antes de irte. La estación Tasqueña estará muy congestionada.' },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: 'var(--surface-hover)', border: '1px solid var(--border)', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{item.emoji}</h3>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: '600' }}>{item.titulo}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ marginBottom: '1.5rem' }}>Mapa del viaje</h2>
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
