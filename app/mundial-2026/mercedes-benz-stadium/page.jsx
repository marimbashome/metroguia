import BlogGuiasWidget from '@/app/components/BlogGuiasWidget'
import { blogLinks } from '@/data/blog-links'

export const metadata = {
  title: 'Cómo llegar al Mercedes-Benz Stadium en MARTA — Guía Mundial 2026 | MetroGuia',
  description: 'Guía completa: Mercedes-Benz Stadium en Atlanta, Georgia. MARTA Falcons Station (acceso directo), horarios, consejos, Centennial Park cercano.',
}

export default function MercedesBenzStadiumPage() {
  const estadioSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Mercedes-Benz Stadium',
    description: 'Estadio de futebol ultramoderno en Atlanta, Georgia, sede de partidos del Mundial FIFA 2026',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1 AMB Drive NW',
      addressLocality: 'Atlanta',
      addressRegion: 'GA',
      postalCode: '30313',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.754722,
      longitude: -84.400833
    },
    sameAs: 'https://en.wikipedia.org/wiki/Mercedes-Benz_Stadium',
    capacity: 71000,
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Rail access', value: 'MARTA Red/Gold Line → Falcons Station (DIRECT)' },
      { '@type': 'LocationFeatureSpecification', name: 'Accessibility', value: 'Wheelchair accessible, newest US stadium' }
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
        name: 'Mercedes-Benz Stadium',
        item: 'https://metroguia.mx/mundial-2026/mercedes-benz-stadium/'
      }
    ]
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(estadioSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <section className="hero" style={{ backgroundColor: '#1a472a' }}>
        <div className="container">
          <h1>Cómo llegar al Mercedes-Benz Stadium</h1>
          <p>Guía paso a paso para los partidos del Mundial 2026 en Atlanta, Georgia</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '2rem' }}>Instrucciones paso a paso</h2>

          {[
            { paso: 1, color: '#E31937', titulo: 'Llega a cualquier estación MARTA del centro', desc: 'Desde Downtown: Five Points, Peachtree Center, Civic Center o Georgia Dome/World Congress Center.', warn: false },
            { paso: 2, color: '#E31937', titulo: 'Sube en la Línea Roja (Red Line) O Línea Dorada (Gold Line)', desc: 'Ambas líneas van directamente a Falcons Station. MARTA tiene la mejor conexión de USA para eventos deportivos.', warn: false },
            { paso: 3, color: '#E31937', titulo: 'Desciende en Falcons Station', desc: 'Esta es una estación DEDICADA al Mercedes-Benz Stadium. Tiempo desde el centro: ~10 minutos. MEJOR EN USA.', warn: false },
            { paso: 4, color: '#4CAF50', titulo: 'VENTAJA CLAVE: Estación Falcons está integrada', desc: 'Acceso directo al estadio — solo camina 3 minutos desde la plataforma a las taquillas. Sin Uber, sin tráfico.', warn: true },
            { paso: 5, color: '#E31937', titulo: 'Camina 3 minutos hacia Mercedes-Benz Stadium', desc: 'Sigue las señales "MB Stadium" o "Falcons". Ruta bien iluminada y segura. Las multitudes van todas en la misma dirección.', warn: false },
            { paso: 6, color: '#E31937', titulo: '¡Llegaste al Mercedes-Benz Stadium!', desc: 'Tiempo total desde Downtown Atlanta: ~20-25 minutos. El estadio más nuevo de USA (inaugurado 2017).', warn: false },
          ].map(({ paso, color, titulo, desc, warn }) => (
            <div key={paso} style={{ backgroundColor: warn ? '#e8f5e9' : '#f0f9ff', borderLeft: `4px solid ${warn ? '#4CAF50' : color}`, padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '1.5rem' }}>
              <h3 style={{ color, marginBottom: '0.75rem' }}>Paso {paso}: {titulo}</h3>
              <p style={{ marginBottom: 0 }}>{desc}</p>
            </div>
          ))}

          <h2 style={{ marginBottom: '2rem', marginTop: '2rem' }}>Alrededor del Mercedes-Benz Stadium</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { emoji: '🍔', titulo: 'Comida', desc: 'Centennial Park cercano: restaurantes de Georgia, Southern BBQ, Chipotle. Dentro MB Stadium: opciones gourmet de nivel premium. Tarjeta o efectivo aceptado.' },
              { emoji: '💰', titulo: 'Cajeros ATM', desc: 'Falcons Station tiene ATMs. Centennial Park y Downtown tienen muchos. Atlanta es moderna — tarjeta de crédito es lo estándar.' },
              { emoji: '🛡️', titulo: 'Seguridad', desc: 'Revisión de bolsas en entrada. No vidrio, latas, profesional gear. Atlanta es ciudad grande pero segura — MARTA es monitoreada 24/7.' },
              { emoji: '⏰', titulo: 'Horario de Llegada', desc: 'Llega 2-3 horas antes. Puertas abren 3 horas previas. Junio en Atlanta: 27-32°C, más moderado que otros estadios USA.' },
              { emoji: '🎒', titulo: 'Qué Llevar', desc: 'Pasaporte/ID, dinero, boleto. Protector solar recomendado. NO: botellas vidrio, latas, cámaras profesionales, armas.' },
              { emoji: '📱', titulo: 'Después del Partido', desc: 'Falcons Station trata 70,000+ personas — pero MARTA es eficiente. Espera 20-30 min. Centennial Park perfecto para descansar post-partido.' },
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
{`Downtown Atlanta (Five Points, Peachtree Center, etc.)
                 ↓
    MARTA Red Line O Gold Line
        10 minutos
                 ↓
          Falcons Station
    [Acceso directo al estadio]
                 ↓
           Camina 3 min
                 ↓
MERCEDES-BENZ STADIUM 🏟️
      Atlanta, Georgia`}
            </pre>
          </div>

          <h2 style={{ marginBottom: '1.5rem' }}>Horarios de partidos y servicios</h2>
          <div className="table-responsive" style={{ marginBottom: '3rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--metro-gray)' }}>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left', borderBottom: '2px solid #ddd', whiteSpace: 'nowrap' }}>Fecha</th>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Tipo</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['16 de junio', 'Fase de Grupos'],
                  ['23 de junio', 'Fase de Grupos'],
                  ['28 de junio', 'Fase de Grupos'],
                  ['MARTA 24/7', 'Servicios especiales días partido']
                ].map(([fecha, tipo], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '0.875rem 1rem', whiteSpace: 'nowrap' }}>{fecha}</td>
                    <td style={{ padding: '0.875rem 1rem' }}>{tipo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ backgroundColor: '#e8f5e9', border: '1px solid #4CAF50', padding: '1.5rem', borderRadius: 'var(--radius)', marginBottom: '2rem' }}>
            <h3 style={{ color: '#2e7d32', marginBottom: '0.75rem' }}>Por qué MB Stadium es la mejor en USA</h3>
            <ul style={{ margin: '0', paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
              <li>Falcons Station es la ÚNICA estación deportiva dedicada en USA — acceso directo sin transbordos</li>
              <li>MARTA es eficiente y moderno — maneja 70,000+ personas en eventos sin problemas</li>
              <li>MB Stadium es el estadio más nuevo (2017) — tecnología, comodidad, experiencia premium</li>
              <li>Centennial Park al lado — un parque increíble para pasear antes/después</li>
              <li>Clima más moderado en junio que Texas o Houston — mejor experiencia para turistas</li>
              <li>Atlanta es ciudad grande pero amigable — buena gastronomía, cultura, historia</li>
            </ul>
          </div>

          <BlogGuiasWidget guides={blogLinks.mundial} context="Mercedes-Benz Stadium" />

          <div className="btn-group" style={{ marginTop: '2rem' }}>
            <a href="/mundial-2026/" className="cta-btn">← Volver a Mundial 2026</a>
            <a href="https://www.itsmarta.com/" target="_blank" rel="noopener noreferrer" className="cta-btn" style={{ backgroundColor: '#E31937' }}>Ver horarios MARTA →</a>
          </div>
        </div>
      </section>
    </div>
  )
}
