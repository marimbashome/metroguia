import BlogGuiasWidget from '@/app/components/BlogGuiasWidget'
import { blogLinks } from '@/data/blog-links'

export const metadata = {
  title: 'How to Get to Arrowhead Stadium by Transit — Step-by-Step Guide | MetroGuia',
  description: 'Detailed guide to Arrowhead Stadium in Kansas City, MO for FIFA World Cup 2026. Transit directions, Uber recommendations, and tips for Group Stage matches.',
}

export default function ArrowheadStadiumPage() {
  const estadioSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Arrowhead Stadium',
    description: 'Home of FIFA World Cup 2026 Group Stage matches — Kansas City, Missouri',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'One Arrowhead Drive',
      addressLocality: 'Kansas City',
      addressRegion: 'Missouri',
      postalCode: '64129',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 39.0494,
      longitude: -94.4867
    },
    sameAs: 'https://en.wikipedia.org/wiki/Arrowhead_Stadium',
    capacity: 76400,
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Transit access', value: 'Uber/Lyft or Taxi recommended' },
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
        name: 'Arrowhead Stadium',
        item: 'https://metroguia.mx/mundial-2026/arrowhead-stadium/'
      }
    ]
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(estadioSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="hero" style={{ backgroundColor: '#1a472a' }}>
        <div className="container">
          <h1>How to Get to Arrowhead Stadium</h1>
          <p>Step-by-step guide for World Cup 2026 Group Stage matches — Kansas City, MO</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '2rem' }}>Step-by-Step Directions</h2>

          {[
            { paso: 1, color: '#0057A8', titulo: 'Kansas City has limited public transit', desc: 'Kansas City is a car-centric city with minimal public transportation infrastructure. Public transit to Arrowhead Stadium is NOT recommended. Plan for Uber, Lyft, or taxi instead.', warn: true },
            { paso: 2, color: '#0057A8', titulo: 'Option 1: Uber or Lyft (RECOMMENDED)', desc: 'Open Uber or Lyft app from your hotel or location. Request ride to "Arrowhead Stadium, Kansas City." Estimated time: 15-20 minutes. Cost: $12-25 USD depending on demand. Most practical option on match days.', warn: false },
            { paso: 3, color: '#0057A8', titulo: 'Option 2: Traditional Taxi', desc: 'Hail a taxi from downtown Kansas City or your hotel. Taxi stands available at major hotels and attractions. Estimated time: 20-25 minutes. Cost: $20-30 USD. Less flexible but reliable on match days.', warn: false },
            { paso: 4, color: '#0057A8', titulo: 'Option 3: Rental Car', desc: 'If staying multiple days, consider renting a car from Kansas City International Airport (MCI). Parking available at Arrowhead. Drive time from downtown: 15-20 minutes. Cost: $30-50 USD for parking + rental.', warn: false },
            { paso: 5, color: '#cc6600', titulo: 'KEY: Arrive early for parking', desc: 'Match day parking fills up 2-3 hours before kickoff. If driving, arrive 3+ hours early. Free parking available in stadium lots on World Cup match days. Designated rideshare pickup areas are separate.', warn: true },
            { paso: 6, color: '#0057A8', titulo: 'Proceed to main entrance', desc: 'From parking or drop-off, follow signage to Arrowhead Stadium main gates. Security checks required at entrance. Allow 30-45 minutes for entry processing on match days. Gates open 3 hours before kickoff.', warn: false },
          ].map(({ paso, color, titulo, desc, warn }) => (
            <div key={paso} style={{ backgroundColor: warn ? '#fff3cd' : '#f0f9ff', borderLeft: `4px solid ${warn ? '#ff9800' : color}`, padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '1.5rem' }}>
              <h3 style={{ color, marginBottom: '0.75rem' }}>Step {paso}: {titulo}</h3>
              <p style={{ marginBottom: 0 }}>{desc}</p>
            </div>
          ))}

          <h2 style={{ marginBottom: '2rem', marginTop: '2rem' }}>Around Arrowhead Stadium</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { emoji: '🍔', titulo: 'Food & Drinks', desc: 'Kansas City is BBQ capital of the USA — Jack Stack and Joe\'s are legendary. Stadium has excellent concessions. Many food trucks at Arrowhead on match days. Eat before or during the match — it\'s a food experience.' },
              { emoji: '💰', titulo: 'ATMs & Money', desc: 'ATMs available at stadium and surrounding area. Get cash before entering — lines at stadium ATMs get long. Most vendors accept credit cards. KC is affordable — cash goes far.' },
              { emoji: '🛡️', titulo: 'Security & Safety', desc: 'Enhanced security on World Cup match days. Bag checks required. Kansas City is safe with police presence. Arrowhead has family-friendly atmosphere. Parking areas well-lit and monitored.' },
              { emoji: '⏰', titulo: 'Arrival Time', desc: 'Arrive 2-3 hours before kickoff. Stadium gates open 3 hours before match. Parking on match days is abundant. Avoid last 30 minutes before start for best security experience.' },
              { emoji: '🎒', titulo: 'What to Bring', desc: 'Valid ID, printed/digital ticket, cash for BBQ (credit OK at stadium). June weather in KC is mild to warm (22-28°C / 72-82°F) — sunscreen recommended. Bring water bottle — stays cool in KC weather.' },
              { emoji: '📱', titulo: 'Post-Match Rest', desc: 'After match, use Uber/Lyft or taxi to return to hotel. Stadium drop-off areas are organized. Peak departure time is 45 minutes after final whistle — plan accordingly. KC nightlife is active.' },
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
{`Your Location (Downtown KC / Hotel)
         ↓
   Uber / Lyft / Taxi
  15-20 minutes, ~15 km
         ↓
  Arrowhead Stadium Parking
   Free Lot or Garage
         ↓
  Stadium Main Entrance
  Security Check (30-45 min)
         ↓
  ARROWHEAD STADIUM 🏟️
  Kansas City, Missouri`}
            </pre>
          </div>

          <h2 style={{ marginBottom: '1.5rem' }}>World Cup 2026 Matches at Arrowhead Stadium</h2>
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
                  ['June 22, 2026', 'Group Stage'],
                  ['June 30, 2026', 'Group Stage'],
                  ['July 7, 2026', 'Group Stage'],
                ].map(([date, round], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '0.875rem 1rem', whiteSpace: 'nowrap' }}>{date}</td>
                    <td style={{ padding: '0.875rem 1rem' }}>{round}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <BlogGuiasWidget guides={blogLinks.mundial} context="Arrowhead Stadium" />

          <div className="btn-group" style={{ marginTop: '2rem' }}>
            <a href="/mundial-2026/" className="cta-btn">← Back to World Cup 2026</a>
            <a href="/mundial-2026/" className="cta-btn" style={{ backgroundColor: '#1a472a' }}>See All Stadiums →</a>
          </div>
        </div>
      </section>
    </div>
  )
}