import BlogGuiasWidget from '@/app/components/BlogGuiasWidget'
import { blogLinks } from '@/data/blog-links'

export const metadata = {
  title: 'How to Get to BMO Field by Transit — Step-by-Step Guide | MetroGuia',
  description: 'Detailed guide to BMO Field in Toronto, ON for FIFA World Cup 2026. TTC Streetcar directions, scenic route, and tips for Group Stage matches.',
}

export default function BMOFieldPage() {
  const estadioSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'BMO Field',
    description: 'Home of FIFA World Cup 2026 Group Stage matches — Toronto, Ontario',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '170 Princes\u0027 Boulevard',
      addressLocality: 'Toronto',
      addressRegion: 'Ontario',
      postalCode: 'M6K 3C3',
      addressCountry: 'CA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.6332,
      longitude: -79.4186
    },
    sameAs: 'https://en.wikipedia.org/wiki/BMO_Field',
    capacity: 45000,
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Transit access', value: 'TTC Streetcar 9-Bathurst direct to Exhibition Place' },
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
        name: 'World Cup 2026',
        item: 'https://metroguia.mx/mundial-2026/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'BMO Field',
        item: 'https://metroguia.mx/mundial-2026/bmo-field/'
      }
    ]
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(estadioSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="hero" style={{ backgroundColor: '#1a472a' }}>
        <div className="container">
          <h1>How to Get to BMO Field</h1>
          <p>Step-by-step guide for World Cup 2026 Group Stage matches — Toronto, Ontario</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '2rem' }}>Step-by-Step Directions</h2>

          {[
            { paso: 1, color: '#0057A8', titulo: 'Take TTC Streetcar 9-Bathurst from downtown', desc: 'Board the iconic Toronto Streetcar Line 9-Bathurst from anywhere along Bathurst Street in downtown Toronto. Route is direct and scenic. This is the BEST way to reach BMO Field — practical, affordable, and quintessentially Toronto.', warn: false },
            { paso: 2, color: '#0057A8', titulo: 'Stay on Streetcar toward Exhibition Place', desc: 'Keep riding the Red Line toward Exhibition Place direction. Do NOT exit early. Journey takes approximately 15 minutes from downtown core. Streetcar is reliable and frequent on match days.', warn: false },
            { paso: 3, color: '#cc6600', titulo: 'KEY: Exit at Exhibition Place / Bathurst stop', desc: 'Exit at the dedicated Exhibition Place stop on Bathurst Street. This is the main stop for BMO Field. Signs will direct you to the stadium. The stop is wheelchair accessible with elevators.', warn: true },
            { paso: 4, color: '#0057A8', titulo: 'Walk 10 minutes to BMO Field', desc: 'From the Streetcar stop, walk 10 minutes through Exhibition Place toward the stadium. Path is pedestrian-friendly and well-marked on match days. Volunteers will direct you if needed. Enjoy the historic fairgrounds as you walk.', warn: false },
            { paso: 5, color: '#0057A8', titulo: 'Arrive at BMO Field entrance', desc: 'Follow signage to main entrance. BMO Field is modern (opened 2007) with welcoming exterior. Security checks at entry. Stadium is climate-controlled inside — relief from outdoor weather.', warn: false },
            { paso: 6, color: '#0057A8', titulo: 'Total transit time: 30-40 minutes', desc: 'Total from downtown Toronto to stadium: 30-40 minutes including walking. TTC is one of North America\'s most efficient transit systems. Cost: CAD $3.25 for streetcar, very affordable.', warn: false },
          ].map(({ paso, color, titulo, desc, warn }) => (
            <div key={paso} style={{ backgroundColor: warn ? '#fff3cd' : '#f0f9ff', borderLeft: `4px solid ${warn ? '#ff9800' : color}`, padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '1.5rem' }}>
              <h3 style={{ color, marginBottom: '0.75rem' }}>Step {paso}: {titulo}</h3>
              <p style={{ marginBottom: 0 }}>{desc}</p>
            </div>
          ))}

          <h2 style={{ marginBottom: '2rem', marginTop: '2rem' }}>Around BMO Field</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { emoji: '🍔', titulo: 'Food & Drinks', desc: 'Exhibition Place has food vendors. Toronto is very international — diverse food options everywhere. Distillery District (nearby) has excellent restaurants and historic charm. Pre-match dining highly recommended in Toronto.' },
              { emoji: '💰', titulo: 'ATMs & Money', desc: 'ATMs throughout Exhibition Place and BMO Field. Canadian currency — get CAD, not USD. Toronto accepts all payment methods. Budget CAD $15-25 per meal. No tipping requirement in Canada (unlike USA).' },
              { emoji: '🛡️', titulo: 'Security & Safety', desc: 'Toronto is one of North America\'s safest major cities. Enhanced security on match days. Bag checks at stadium entrance. Friendly crowds — very family-oriented atmosphere at BMO Field.' },
              { emoji: '⏰', titulo: 'Arrival Time', desc: 'Arrive 1.5-2 hours before kickoff. TTC is reliable — no need to arrive as early as US stadiums. Stadium gates open 2 hours before match. Plenty of walking space at Exhibition Place.' },
              { emoji: '🎒', titulo: 'What to Bring', desc: 'Valid ID or passport (you\'re entering Canada). Printed/digital ticket. June in Toronto is pleasant (20-25°C / 68-77°F) — light jacket recommended for evenings. Sunscreen optional. Comfortable walking shoes (will walk 10 min).' },
              { emoji: '📱', titulo: 'Post-Match Rest', desc: 'After match, TTC operates extended service to downtown and beyond. Streetcars run late on match nights. Exhibition Place is beautiful for post-game stroll. Toronto nightlife is vibrant — many venues within walking distance.' },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: 'var(--surface-hover)', border: '1px solid var(--border)', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{item.emoji}</h3>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: '600' }}>{item.titulo}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ marginBottom: '1.5rem' }}>Route Map</h2>
          <div style={{ backgroundColor: 'var(--metro-gray)', padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '3rem', textAlign: 'center', fontFamily: 'monospace' }}>
            <pre style={{ overflow: 'auto' }}>
{`Downtown Toronto
    (Bathurst St)
         ↓
  TTC Streetcar 9
 Scenic Red Line
   15 minutes
         ↓
 Exhibition Place
  Bathurst Stop
         ↓
   Walk 10 mins
  Through Fair
  Grounds
         ↓
   BMO FIELD 🏟️
  Toronto, Ontario`}
            </pre>
          </div>

          <h2 style={{ marginBottom: '1.5rem' }}>World Cup 2026 Matches at BMO Field</h2>
          <div className="table-responsive" style={{ marginBottom: '3rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--metro-gray)' }}>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left', borderBottom: '2px solid #ddd', whiteSpace: 'nowrap' }}>Date</th>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Round</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['June 12, 2026', 'Group Stage'],
                  ['June 19, 2026', 'Group Stage'],
                  ['June 26, 2026', 'Group Stage'],
                ].map(([date, round], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '0.875rem 1rem', whiteSpace: 'nowrap' }}>{date}</td>
                    <td style={{ padding: '0.875rem 1rem' }}>{round}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <BlogGuiasWidget guides={blogLinks.mundial} context="BMO Field" />

          <div className="btn-group" style={{ marginTop: '2rem' }}>
            <a href="/mundial-2026/" className="cta-btn">← Back to World Cup 2026</a>
            <a href="/mundial-2026/" className="cta-btn" style={{ backgroundColor: '#1a472a' }}>See All Stadiums →</a>
          </div>
        </div>
      </section>
    </div>
  )
}