import BlogGuiasWidget from '@/app/components/BlogGuiasWidget'
import { blogLinks } from '@/data/blog-links'

export const metadata = {
  title: 'Cómo llegar a Lincoln Financial Field en SEPTA — Guía Mundial 2026 | MetroGuia',
  description: 'Guía completa: Lincoln Financial Field en Filadelfia, Pennsylvania. SEPTA Broad Street Line, Sports Complex, historia de Filadelfia, Cheesesteak.',
}

export default function LincolnFinancialFieldPage() {
  const estadioSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Lincoln Financial Field',
    description: 'Estadio de futebol en el Sports Complex de Filadelfia, Pennsylvania, sede de partidos del Mundial FIFA 2026',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1020 Pattison Avenue',
      addressLocality: 'Philadelphia',
      addressRegion: 'PA',
      postalCode: '19148',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 39.901111,
      longitude: -75.167222
    },
    sameAs: 'https://en.wikipedia.org/wiki/Lincoln_Financial_Field',
    capacity: 69596,
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Rail access', value: 'SEPTA Broad Street Line → Pattison Station' },
      { '@type': 'LocationFeatureSpecification', name: 'Sports Complex', value: 'Eagles, Phillies, 76ers, Flyers en misma área' }
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
        name: 'Lincoln Financial Field',
        item: 'https://metroguia.mx/mundial-2026/lincoln-financial-field/'
      }
    ]
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(estadioSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <section className="hero" style={{ backgroundColor: '#1a472a' }}>
        <div className="container">
          <h1>Cómo llegar a Lincoln Financial Field</h1>
          <p>Guía paso a paso para los partidos del Mundial 2026 en Filadelfia, Pennsylvania</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '2rem' }}>Instrucciones paso a paso</h2>

          {[
            { paso: 1, color: '#003DA5', titulo: 'Llega a una estación SEPTA en Center City', desc: 'Desde el centro de Filadelfia: Market Street Station, City Hall (15th & Market) o Suburban Station.', warn: false },
            { paso: 2, color: '#003DA5', titulo: 'Sube en la Línea Broad Street (Broad Street Line)', desc: 'Dirección SUR (hacia Tasker-Morris). Busca letreros "South Broad" o "Pattison Station". Tiempo desde el centro: 15 minutos.', warn: false },
            { paso: 3, color: '#003DA5', titulo: 'Desciende en Pattison Station', desc: 'Esta es la estación final de la Línea Broad Street. El Sports Complex está a mano desde aquí.', warn: false },
            { paso: 4, color: '#4CAF50', titulo: 'VENTAJA CLAVE: Sports Complex integrado', desc: 'Pattison Station sirve a 4 estadios: Eagles (NFL), Phillies (MLB), 76ers (NBA), Flyers (NHL). Infraestructura excelente.', warn: true },
            { paso: 5, color: '#003DA5', titulo: 'Camina 8 minutos hacia Lincoln Financial Field', desc: 'Desde Pattison Station, sigue las señales "Lincoln Field" o "Eagles". Ruta plana, bien iluminada, muy segura.', warn: false },
            { paso: 6, color: '#003DA5', titulo: '¡Llegaste a Lincoln Financial Field!', desc: 'Tiempo total desde Center City: ~25-30 minutos. SEPTA es muy asequible — boleto ~$3 USD.', warn: false },
          ].map(({ paso, color, titulo, desc, warn }) => (
            <div key={paso} style={{ backgroundColor: warn ? '#e8f5e9' : '#f0f9ff', borderLeft: `4px solid ${warn ? '#4CAF50' : color}`, padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '1.5rem' }}>
              <h3 style={{ color, marginBottom: '0.75rem' }}>Paso {paso}: {titulo}</h3>
              <p style={{ marginBottom: 0 }}>{desc}</p>
            </div>
          ))}

          <h2 style={{ marginBottom: '2rem', marginTop: '2rem' }}>Alrededor de Lincoln Financial Field</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { emoji: '🍔', titulo: 'Comida', desc: 'PRUEBAen un AUTÉNTICO Philly Cheesesteak (Pat\'s o Geno\'s), probablemente los mejores USA. Dentro estadio: opciones estándar. Dinero en efectivo recomendado para cheesesteaks.' },
              { emoji: '💰', titulo: 'Cajeros ATM', desc: 'ATMs en Pattison Station y Sports Complex. Filadelfia es ciudad grande — tarjeta aceptada casi en todos lados, pero efectivo es buena idea.' },
              { emoji: '🛡️', titulo: 'Seguridad', desc: 'Revisión de bolsas en entrada. No vidrio, latas, profesional cameras. Sports Complex está muy monitoreado — seguridad excelente para eventos.' },
              { emoji: '⏰', titulo: 'Horario de Llegada', desc: 'Llega 2-3 horas antes. Puertas abren 3 horas previas. Junio en Filadelfia: 23-28°C, clima variable — lleva chaqueta ligera.' },
              { emoji: '🎒', titulo: 'Qué Llevar', desc: 'Pasaporte/ID, dinero, boleto. Chaqueta ligera recomendada (clima variable en junio). NO: botellas vidrio, latas, cámaras profesionales, armas.' },
              { emoji: '📱', titulo: 'Después del Partido', desc: 'Pattison Station maneja 70,000+ personas sin problemas. SEPTA es excelente — espera 15-20 min. Independence Hall/Liberty Bell a 15 minutos del centro.' },
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
{`Center City Philadelphia
    (Market St, City Hall, Suburban)
            ↓
   SEPTA Broad Street Line
      (hacia South Broad)
     15 minutos
            ↓
       Pattison Station
   [Sports Complex hub]
            ↓
      Camina 8 minutos
            ↓
LINCOLN FINANCIAL FIELD 🏟️
     Philadelphia, PA`}
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
                  ['17 de junio', 'Fase de Grupos'],
                  ['24 de junio', 'Fase de Grupos'],
                  ['29 de junio', 'Fase de Grupos'],
                  ['SEPTA 5:00 AM - 12:30 AM', 'Servicios normales']
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
            <h3 style={{ color: '#2e7d32', marginBottom: '0.75rem' }}>Por qué Filadelfia es especial para el Mundial</h3>
            <ul style={{ margin: '0', paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
              <li>SEPTA es EXCELENTE y MÁS BARATO que otras ciudades USA — boleto ~$3 USD</li>
              <li>Sports Complex reúne a 4 equipos profesionales — infraestructura probada</li>
              <li>Filadelfia es la cuna de USA — Independence Hall, Liberty Bell, historia increíble</li>
              <li>Un AUTÉNTICO Philly Cheesesteak de Pat\'s o Geno\'s es una experiencia única</li>
              <li>Clima más moderado en junio que Texas — 23-28°C típicamente</li>
              <li>Centro de Filadelfia es muy caminable — explora la ciudad después del partido</li>
            </ul>
          </div>

          <BlogGuiasWidget guides={blogLinks.mundial} context="Lincoln Financial Field" />

          <div className="btn-group" style={{ marginTop: '2rem' }}>
            <a href="/mundial-2026/" className="cta-btn">← Volver a Mundial 2026</a>
            <a href="https://www.septa.org/" target="_blank" rel="noopener noreferrer" className="cta-btn" style={{ backgroundColor: '#003DA5' }}>Ver horarios SEPTA →</a>
          </div>
        </div>
      </section>
    </div>
  )
}
