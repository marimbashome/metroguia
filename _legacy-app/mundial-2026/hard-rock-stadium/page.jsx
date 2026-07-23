import BlogGuiasWidget from '@/app/components/BlogGuiasWidget'
import { blogLinks } from '@/data/blog-links'

export const metadata = {
  title: 'How to Get to Hard Rock Stadium by Transit — Step-by-Step Guide | MetroGuia',
  description: 'Detailed guide to Hard Rock Stadium in Miami Gardens, FL for FIFA World Cup 2026. Transit directions, schedules, and tips for Group Stage and knockout matches.',
}

export default function HardRockStadiumPage() {
  const estadioSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Hard Rock Stadium',
    description: 'Home of FIFA World Cup 2026 matches — Miami Gardens, Florida',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '347 Don Shula Drive',
      addressLocality: 'Miami Gardens',
      addressRegion: 'Florida',
      postalCode: '33056',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.9581,
      longitude: -80.2389
    },
    sameAs: 'https://en.wikipedia.org/wiki/Hard_Rock_Stadium',
    capacity: 65326,
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Transit access', value: 'Metrorail + Tri-Rail + Uber' },
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
        name: 'Hard Rock Stadium',
        item: 'https://metroguia.mx/mundial-2026/hard-rock-stadium/'
      }
    ]
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(estadioSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="hero" style={{ backgroundColor: '#1a472a' }}>
        <div className="container">
          <h1>How to Get to Hard Rock Stadium</h1>
          <p>Step-by-step guide for World Cup 2026 matches — Miami Gardens, FL</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '2rem' }}>Step-by-Step Directions</h2>

          {[
            { paso: 1, color: '#0057A8', titulo: 'Take Metrorail toward Tri-Rail', desc: 'From downtown Miami, board the Metrorail heading toward the Tri-Rail transfer point. Journey takes approximately 20 minutes depending on your starting location.', warn: false },
            { paso: 2, color: '#0057A8', titulo: 'Transfer to Tri-Rail (Florida East Coast Railway)', desc: 'Exit Metrorail and follow signs to the Tri-Rail connection. The transfer takes about 10 minutes. Tri-Rail is Florida\'s commuter rail system serving Miami-Dade County.', warn: false },
            { paso: 3, color: '#cc6600', titulo: 'KEY: Exit at Dolphins Station', desc: 'Stay on Tri-Rail until the dedicated Dolphins Station stop. This is the official World Cup 2026 transit hub for Hard Rock Stadium. Do NOT exit at other stops.', warn: true },
            { paso: 4, color: '#0057A8', titulo: 'Exit Dolphins Station', desc: 'Dolphins Station is designed specifically for stadium access. Exit and follow stadium directional signage. The station is modern and air-conditioned.', warn: false },
            { paso: 5, color: '#0057A8', titulo: 'Request Uber or Taxi', desc: 'From Dolphins Station, call an Uber or taxi for the final 2 km to Hard Rock Stadium. This journey takes approximately 8 minutes. Estimated Uber cost: $8-15 USD.', warn: false },
            { paso: 6, color: '#0057A8', titulo: 'Arrive at Hard Rock Stadium', desc: 'Uber will drop you at the main entrance. Total transit time from downtown Miami: approximately 1 hour. Follow crowd flow to gates. Stadium has air-conditioned lobbies.', warn: false },
          ].map(({ paso, color, titulo, desc, warn }) => (
            <div key={paso} style={{ backgroundColor: warn ? '#fff3cd' : '#f0f9ff', borderLeft: `4px solid ${warn ? '#ff9800' : color}`, padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '1.5rem' }}>
              <h3 style={{ color, marginBottom: '0.75rem' }}>Step {paso}: {titulo}</h3>
              <p style={{ marginBottom: 0 }}>{desc}</p>
            </div>
          ))}

          <h2 style={{ marginBottom: '2rem', marginTop: '2rem' }}>Around Hard Rock Stadium</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { emoji: '🍔', titulo: 'Food & Drinks', desc: 'Hard Rock Stadium has extensive food vendors. Many international options available. Bring cash for outside vendors. South Beach nearby has excellent restaurants — plan pre-game meals there.' },
              { emoji: '💰', titulo: 'ATMs & Money', desc: 'ATMs throughout the stadium complex. Get cash before the match — ATM lines get extremely long. Stadium accepts major credit cards at most vendors.' },
              { emoji: '🛡️', titulo: 'Security & Safety', desc: 'Enhanced security on match days. Arrive 3 hours early for thorough bag checks. No glass bottles, cans, or weapons. Miami police provide extra coverage — stadium is very safe.' },
              { emoji: '⏰', titulo: 'Arrival Time', desc: 'Arrive 2-3 hours before kickoff. Stadium gates open 3 hours before match starts. Bring patience — June crowds are large and lines can be long.' },
              { emoji: '🎒', titulo: 'What to Bring', desc: 'Valid ID, printed/digital ticket, and SUNSCREEN. June in Miami is hot and humid (32-35°C / 90-95°F). Bring water, hat, and light clothing. Stadium has AC but exterior is intense.' },
              { emoji: '📱', titulo: 'Post-Game Rest', desc: 'Wait 30-45 minutes after match ends before heading to Uber pickup area. Crowds are massive. Dolphins Station will have increased Tri-Rail service back to downtown.' },
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
{`Downtown Miami
         ↓
    Metrorail
    20 minutes
         ↓
   Tri-Rail Transfer
    10 minutes
         ↓
   DOLPHINS STATION
   (Official Stadium Hub)
         ↓
    Uber / Taxi
    8 minutes, 2 km
         ↓
  HARD ROCK STADIUM 🏟️
  Miami Gardens, FL`}
            </pre>
          </div>

          <h2 style={{ marginBottom: '1.5rem' }}>World Cup 2026 Matches at Hard Rock Stadium</h2>
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
                  ['June 19, 2026', 'Group Stage'],
                  ['June 26, 2026', 'Group Stage'],
                  ['July 1, 2026', 'Group Stage'],
                  ['July 3, 2026', 'Round of 16'],
                  ['July 8, 2026', 'Quarterfinals'],
                ].map(([date, round], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '0.875rem 1rem', whiteSpace: 'nowrap' }}>{date}</td>
                    <td style={{ padding: '0.875rem 1rem' }}>{round}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <BlogGuiasWidget guides={blogLinks.mundial} context="Hard Rock Stadium" />

          <div className="btn-group" style={{ marginTop: '2rem' }}>
            <a href="/mundial-2026/" className="cta-btn">← Back to World Cup 2026</a>
            <a href="/mundial-2026/" className="cta-btn" style={{ backgroundColor: '#1a472a' }}>See All Stadiums →</a>
          </div>
        </div>
      </section>
    </div>
  )
}