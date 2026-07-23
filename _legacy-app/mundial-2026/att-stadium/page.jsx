import BlogGuiasWidget from '@/app/components/BlogGuiasWidget'
import { blogLinks } from '@/data/blog-links'

export const metadata = {
  title: 'Cómo llegar al AT&T Stadium en transporte público — Guía Mundial 2026 | MetroGuia',
  description: 'Guía completa: AT&T Stadium en Arlington, Texas. DART Rail Red Line, Uber desde Arlington Station, horarios de partidos, consejos para viajar en junio.',
}

export default function ATTStadiumPage() {
  const estadioSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'AT&T Stadium',
    description: 'Estadio de futebol de alta tecnología en Arlington, Texas, sede de partidos del Mundial FIFA 2026',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1 AT&T Way',
      addressLocality: 'Arlington',
      addressRegion: 'TX',
      postalCode: '76010',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.897480,
      longitude: -97.002011
    },
    sameAs: 'https://en.wikipedia.org/wiki/AT%26T_Stadium',
    capacity: 80000,
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Rail access', value: 'DART Red Line → Arlington Station' },
      { '@type': 'LocationFeatureSpecification', name: 'Rideshare', value: 'Uber/Lyft 5-8 min from station' }
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
        name: 'AT&T Stadium',
        item: 'https://metroguia.mx/mundial-2026/att-stadium/'
      }
    ]
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(estadioSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <section className="hero" style={{ backgroundColor: '#1a472a' }}>
        <div className="container">
          <h1>Cómo llegar al AT&T Stadium</h1>
          <p>Guía paso a paso para los partidos del Mundial 2026 en Arlington, Texas</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '2rem' }}>Instrucciones paso a paso</h2>

          {[
            { paso: 1, color: '#FF6B35', titulo: 'Llega a una estación DART en Downtown Dallas', desc: 'Desde el centro: Union Station, Victory Station o West End Station. El DART Red Line llega directamente a Arlington.', warn: false },
            { paso: 2, color: '#FF6B35', titulo: 'Sube en dirección a Fort Worth/Arlington', desc: 'Busca señales "Red Line → Fort Worth". Tiempo desde Downtown Dallas: 35 minutos.', warn: false },
            { paso: 3, color: '#FF6B35', titulo: 'Desciende en Arlington Station', desc: 'Esta es la última parada antes de Fort Worth. La estación está en el corazón de Arlington.', warn: false },
            { paso: 4, color: '#cc6600', titulo: 'ALERTA: DART no llega directamente al estadio', desc: 'Desde Arlington Station hasta AT&T Stadium hay 2 km. Tienes 3 opciones:', warn: true },
            { paso: 5, color: '#FF6B35', titulo: 'Opción A: Uber/Lyft (RECOMENDADO)', desc: 'Espera 5-8 minutos. Costo: $8-12 USD. Mejor opción en calor de junio (35-40°C).', warn: false },
            { paso: 6, color: '#FF6B35', titulo: 'Opción B: Caminar 25 minutos', desc: 'Si llegas temprano (antes de las 4 PM) y hace menos calor, la caminata es posible. Ruta bien marcada.', warn: false },
            { paso: 7, color: '#FF6B35', titulo: '¡Llegaste al AT&T Stadium!', desc: 'Tiempo total: ~45-50 minutos desde Downtown Dallas. Sigue las señales hacia las entradas.', warn: false },
          ].map(({ paso, color, titulo, desc, warn }) => (
            <div key={paso} style={{ backgroundColor: warn ? '#fff3cd' : '#f0f9ff', borderLeft: `4px solid ${warn ? '#ff9800' : color}`, padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '1.5rem' }}>
              <h3 style={{ color, marginBottom: '0.75rem' }}>Paso {paso}: {titulo}</h3>
              <p style={{ marginBottom: 0 }}>{desc}</p>
            </div>
          ))}

          <h2 style={{ marginBottom: '2rem', marginTop: '2rem' }}>Alrededor del AT&T Stadium</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { emoji: '🍔', titulo: 'Comida', desc: 'Centro comercial Arlington: restaurantes, Chipotle, McDonald\'s, Taco Bell. Dentro del estadio: concesiones premium. Lleva dinero o tarjeta.' },
              { emoji: '💰', titulo: 'Cajeros ATM', desc: 'ATMs en Arlington Station, Mall de Arlington y Centro. Retira dinero ANTES — puede haber problemas de servicio durante eventos grandes.' },
              { emoji: '🛡️', titulo: 'Seguridad', desc: 'Revisión de bolsas obligatoria. No se permiten botellas, latas, profesional-grade cameras. Arlington es muy seguro — viaja sin preocupaciones.' },
              { emoji: '⏰', titulo: 'Horario de Llegada', desc: 'Llega 2.5-3 horas antes del partido. Las puertas abren 3 horas previas. IMPORTANTE: el calor de junio es INTENSO (35-40°C).' },
              { emoji: '🎒', titulo: 'Qué Llevar', desc: 'Pasaporte/ID, dinero, boleto. Llevar protector solar, gafas de sol y botella de agua. NO: botellas vidrio, latas, profesional cameras.' },
              { emoji: '📱', titulo: 'Después del Partido', desc: 'Arlington Station puede estar lleno. Espera 45-60 min antes de volver. Muchos toman Uber post-partido — precios suben significativamente.' },
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
{`Downtown Dallas
      ↓
DART Red Line
35 minutos
      ↓
Arlington Station
[Uber/Lyft 5-8 min O Caminar 25 min]
      ↓
AT&T STADIUM 🏟️
Arlington, Texas`}
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
                  ['15 de junio', 'Fase de Grupos'],
                  ['22 de junio', 'Fase de Grupos'],
                  ['27 de junio', 'Fase de Grupos'],
                  ['2 de julio', 'Octavos de Final'],
                  ['11 de julio', 'Cuartos de Final']
                ].map(([fecha, tipo], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '0.875rem 1rem', whiteSpace: 'nowrap' }}>{fecha}</td>
                    <td style={{ padding: '0.875rem 1rem' }}>{tipo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ backgroundColor: '#f0f9ff', border: '1px solid #1a472a', padding: '1.5rem', borderRadius: 'var(--radius)', marginBottom: '2rem' }}>
            <h3 style={{ color: '#1a472a', marginBottom: '0.75rem' }}>Consejos especiales para AT&T Stadium</h3>
            <ul style={{ margin: '0', paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
              <li>AT&T es uno de los estadios más modernos del mundo — experiencia premium garantizada</li>
              <li>El calor de junio en Texas es extremo (35-40°C) — lleva agua, protector solar obligatorio</li>
              <li>DART Red Line es la mejor opción de transporte público — directo y confiable</li>
              <li>Estacionamiento es amplio pero se llena rápido — Uber/Lyft más recomendado que manejar</li>
              <li>Arlington es muy seguro — no hay problemas de seguridad como turista</li>
            </ul>
          </div>

          <BlogGuiasWidget guides={blogLinks.mundial} context="AT&T Stadium" />

          <div className="btn-group" style={{ marginTop: '2rem' }}>
            <a href="/mundial-2026/" className="cta-btn">← Volver a Mundial 2026</a>
            <a href="https://www.dart.org/" target="_blank" rel="noopener noreferrer" className="cta-btn" style={{ backgroundColor: '#FF6B35' }}>Ver horarios DART →</a>
          </div>
        </div>
      </section>
    </div>
  )
}
