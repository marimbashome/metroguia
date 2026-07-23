import BlogGuiasWidget from '@/app/components/BlogGuiasWidget'
import { blogLinks } from '@/data/blog-links'

export const metadata = {
  title: 'How to Get to MetLife Stadium by Transit — Step-by-Step Guide | MetroGuia',
  description: 'Detailed guide to MetLife Stadium in East Rutherford, NJ for FIFA World Cup 2026. Transit directions, schedules, prices, and tips for the Final.',
}

export default function MetLifeStadiumPage() {
  const estadioSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'MetLife Stadium',
    description: 'Home of the FIFA World Cup 2026 Final — East Rutherford, New Jersey',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'One MetLife Stadium Drive',
      addressLocality: 'East Rutherford',
      addressRegion: 'New Jersey',
      postalCode: '07073',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.8135,
      longitude: -74.0745
    },
    sameAs: 'https://en.wikipedia.org/wiki/MetLife_Stadium',
    capacity: 82500,
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Transit access', value: 'NJ Transit Bus 380 Direct from Penn Station' },
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
        name: 'MetLife Stadium',
        item: 'https://metroguia.mx/mundial-2026/metlife-stadium/'
      }
    ]
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(estadioSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="hero" style={{ backgroundColor: '#003d3d' }}>
        <div className="container">
          <h1>How to Get to MetLife Stadium</h1>
          <p>Step-by-step guide for World Cup 2026 matches — East Rutherford, NJ</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '2rem' }}>Step-by-Step Directions</h2>

          {[
            { paso: 1, color: '#0057A8', titulo: 'Get to Penn Station (Manhattan)', desc: 'From anywhere in Manhattan, take the MTA subway to Penn Station (34th Street). Connections from all lines available.', warn: false },
            { paso: 2, color: '#0057A8', titulo: 'Head to the NJ Transit Bus Concourse', desc: 'Exit Penn Station and find the NJ Transit bus terminal below. Look for signage to Gate 43 or the bus concourse level.', warn: false },
            { paso: 3, color: '#cc6600', titulo: 'KEY: Find NJ Transit Bus 380', desc: 'Look for the direct Bus 380 to MetLife Stadium. This is the most direct option — verify the schedule on game days (service increases significantly).', warn: true },
            { paso: 4, color: '#0057A8', titulo: 'Purchase a one-way ticket', desc: 'One-way fare is approximately $15 USD. Bus 380 runs frequently on match days. Travel time: 45 minutes direct.', warn: false },
            { paso: 5, color: '#0057A8', titulo: 'Exit at MetLife Stadium Direct Drop', desc: 'The bus stops directly at the MetLife Stadium entrance. No additional transfers needed. Follow the crowds toward the main gates.', warn: false },
            { paso: 6, color: '#0057A8', titulo: 'Walk 5 minutes to Main Entrance', desc: 'From the bus stop, it\'s a 5-minute walk to the stadium. Follow directional signs. Total transit time from central Manhattan: ~1 hour.', warn: false },
          ].map(({ paso, color, titulo, desc, warn }) => (
            <div key={paso} style={{ backgroundColor: warn ? '#fff3cd' : '#f0f9ff', borderLeft: `4px solid ${warn ? '#ff9800' : '#0057A8'}`, padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '1.5rem' }}>
              <h3 style={{ color, marginBottom: '0.75rem' }}>Step {paso}: {titulo}</h3>
              <p style={{ marginBottom: 0 }}>{desc}</p>
            </div>
          ))}

          <h2 style={{ marginBottom: '2rem', marginTop: '2rem' }}>Around MetLife Stadium</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { emoji: '🍔', titulo: 'Food & Drinks', desc: 'The Meadowlands complex has concession stands at the stadium. Bring cash for outside vendors near the bus drop. Limited street food in the area — eat before arriving or at the stadium.' },
              { emoji: '💰', titulo: 'ATMs & Money', desc: 'ATMs are available at the stadium and in Penn Station. Get cash BEFORE boarding Bus 380 — ATM lines at the stadium get very long on match days.' },
              { emoji: '🛡️', titulo: 'Security & Safety', desc: 'Bag checks required at entrance. No glass bottles, cans, or large bags. Travel with your group after the match. The Meadowlands is safe with heavy security on match days.' },
              { emoji: '⏰', titulo: 'Arrival Time', desc: 'Arrive 2-3 hours early. Stadium gates open 3 hours before kickoff. Avoid the final 30 minutes before start for better experience.' },
              { emoji: '🎒', titulo: 'What to Bring', desc: 'Valid ID (driver\'s license or passport), printed or digital ticket, weather-appropriate clothing. June in New Jersey can be hot and humid — bring sunscreen and a hat.' },
              { emoji: '📱', titulo: 'Post-Match Rest', desc: 'After the match, wait 30-45 minutes before heading to the bus station. Crowds will be massive. Bus 380 returns to Penn Station — expect it to be full.' },
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
{`Your Location (e.g., Times Square)
         ↓
    MTA Subway
    10-15 minutes
         ↓
       PENN STATION
    (Manhattan, 34th St)
         ↓
   NJ Transit Bus 380
   45 minutes direct
         ↓
   METLIFE STADIUM 🏟️
   East Rutherford, NJ`}
            </pre>
          </div>

          <h2 style={{ marginBottom: '1.5rem' }}>World Cup 2026 Matches at MetLife</h2>
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
                  ['June 11, 2026', 'Group Stage'],
                  ['June 18, 2026', 'Group Stage'],
                  ['June 27, 2026', 'Group Stage'],
                  ['July 5, 2026', 'Semifinals'],
                  ['July 19, 2026', 'FINAL'],
                ].map(([date, round], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '0.875rem 1rem', whiteSpace: 'nowrap' }}>{date}</td>
                    <td style={{ padding: '0.875rem 1rem' }}>{round}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <BlogGuiasWidget guides={blogLinks.mundial} context="MetLife Stadium" />

          <div className="btn-group" style={{ marginTop: '2rem' }}>
            <a href="/mundial-2026/" className="cta-btn">← Back to World Cup 2026</a>
            <a href="/mundial-2026/" className="cta-btn" style={{ backgroundColor: '#003d3d' }}>See All Stadiums →</a>
          </div>
        </div>
      </section>
    </div>
  )
}
