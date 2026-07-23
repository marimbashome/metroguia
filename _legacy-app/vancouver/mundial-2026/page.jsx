import BlogGuiasWidget from '@/app/components/BlogGuiasWidget'
import { blogLinks } from '@/data/blog-links'

export const metadata = {
  title: 'How to Get to BC Place by Transit — Step-by-Step Guide | MetroGuia',
  description: 'Detailed guide to BC Place Stadium in Vancouver, BC for FIFA World Cup 2026. SkyTrain Expo/Millennium Line with direct stadium access. Transit directions, fares, schedules, and tips for Group Stage and Round of 32 matches.',
}

export default function VancouverMundialPage() {
  const estadioSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'BC Place Stadium',
    description: 'Home of FIFA World Cup 2026 Group Stage and Round of 32 matches — Vancouver, British Columbia',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '777 Pacific Boulevard',
      addressLocality: 'Vancouver',
      addressRegion: 'British Columbia',
      postalCode: 'V6B 4Y8',
      addressCountry: 'CA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 49.2761,
      longitude: -123.1090
    },
    sameAs: 'https://en.wikipedia.org/wiki/BC_Place',
    capacity: 54500,
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Transit access', value: 'SkyTrain Expo/Millennium Line direct to Stadium-Chinatown Station (0 min walk)' },
      { '@type': 'LocationFeatureSpecification', name: 'Accessibility', value: 'Wheelchair accessible, elevator access' }
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
        name: 'BC Place Stadium',
        item: 'https://metroguia.mx/mundial-2026/bc-place/'
      }
    ]
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(estadioSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="hero" style={{ backgroundColor: '#003d7a' }}>
        <div className="container">
          <h1>How to Get to BC Place Stadium</h1>
          <p>Step-by-step guide for World Cup 2026 matches — Vancouver, British Columbia</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { label: 'Stadium', value: 'BC Place' },
              { label: 'Capacity', value: '54,500' },
              { label: 'Location', value: 'Vancouver, BC' },
              { label: 'Currency', value: 'CAD' },
              { label: 'Matches', value: 'Group Stage, Round of 32' },
              { label: 'Best Transit', value: 'SkyTrain (0 min walk)' }
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: 'var(--surface-hover)', border: '1px solid var(--border)', padding: '1.5rem', borderRadius: 'var(--radius)', textAlign: 'center' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0 0 0.5rem' }}>{item.label}</p>
                <h3 style={{ margin: 0, color: 'var(--primary)' }}>{item.value}</h3>
              </div>
            ))}
          </div>

          <h2 style={{ marginBottom: '2rem' }}>Step-by-Step Directions</h2>

          {[
            { paso: 1, color: '#0057A8', titulo: 'Get to any SkyTrain station', desc: 'Vancouver\'s SkyTrain has three lines: Expo, Millennium, and Canada. Find the nearest Expo or Millennium Line station to your location (both serve Stadium-Chinatown).', warn: false },
            { paso: 2, color: '#0057A8', titulo: 'Look for Expo or Millennium Line signs', desc: 'Both lines converge at Stadium-Chinatown Station. From downtown Vancouver, City Centre Station (Expo) or Granville Station (Millennium) are primary transfer hubs.', warn: false },
            { paso: 3, color: '#cc6600', titulo: 'KEY: Board toward Stadium-Chinatown', desc: 'On Expo Line: Direction is "Waterfront → King George". On Millennium Line: Direction is "Lafarge Lake-Douglas → Lougheed Town Centre". Stadium-Chinatown is the fourth/fifth stop from downtown.', warn: true },
            { paso: 4, color: '#0057A8', titulo: 'Purchase a Compass Card ticket', desc: 'One-way fare: $3.15 CAD (2026 rates). Compass Cards are rechargeable—buy at any station or use your phone via Transit app. Travel time: 5-10 minutes from downtown.', warn: false },
            { paso: 5, color: '#0057A8', titulo: 'Exit at Stadium-Chinatown Station', desc: 'This is the only stop you need. The station is DIRECTLY underneath BC Place. Simply follow signs toward "BC Place" or "Stadium" inside the station.', warn: false },
            { paso: 6, color: '#0057A8', titulo: 'Walk straight up to the stadium', desc: 'From the platform, it\'s a zero-minute walk—the stadium entrance is 20 meters above the station. Take the escalator or elevator directly into the stadium concourse. Total transit time from downtown: ~15 minutes.', warn: false },
          ].map(({ paso, color, titulo, desc, warn }) => (
            <div key={paso} style={{ backgroundColor: warn ? '#fff3cd' : '#f0f9ff', borderLeft: `4px solid ${warn ? '#ff9800' : '#0057A8'}`, padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '1.5rem' }}>
              <h3 style={{ color, marginBottom: '0.75rem' }}>Step {paso}: {titulo}</h3>
              <p style={{ marginBottom: 0 }}>{desc}</p>
            </div>
          ))}

          <h2 style={{ marginBottom: '2rem', marginTop: '2rem' }}>Around BC Place Stadium</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { emoji: '🍽️', titulo: 'Food & Drinks', desc: 'BC Place has full concession offerings inside the stadium. False Creek neighborhood (west of stadium) has restaurants and cafes. Chinatown (east) also nearby with street food and shops. Arrive early to explore.' },
              { emoji: '💰', titulo: 'ATMs & Money', desc: 'Compass Card accepts Visa/Mastercard for topping up. ATMs throughout Stadium-Chinatown Station. Bring a backup payment method—lineups can build on match days.' },
              { emoji: '🛡️', titulo: 'Security & Safety', desc: 'Bag checks at entry. No glass bottles, cans, or large backpacks. SkyTrain is very safe 24/7. Stadium area is secure with RCMP and venue security on match days.' },
              { emoji: '⏰', titulo: 'Arrival Time', desc: 'Arrive 2-3 hours early for optimal experience. Stadium gates open 3 hours before kickoff. SkyTrain runs frequently until late—you won\'t miss the train.' },
              { emoji: '🎒', titulo: 'What to Bring', desc: 'Valid passport or provincial ID, printed/digital ticket, weather-appropriate clothing. June in Vancouver can be cool and rainy—bring a light jacket and umbrella just in case.' },
              { emoji: '🚉', titulo: 'Post-Match Rest', desc: 'SkyTrain runs extended hours on match nights. Wait 30-45 minutes to avoid the rush. All lines from Stadium-Chinatown run back to downtown without transfers.' },
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
{`Your Location (e.g., Downtown Vancouver)
         ↓
    SkyTrain Expo or Millennium
    5-10 minutes
         ↓
STADIUM-CHINATOWN STATION
   (Direct underneath BC Place)
         ↓
   Walk straight up
   (0 minutes, escalator/elevator)
         ↓
    BC PLACE STADIUM 🏟️
   Vancouver, British Columbia`}
            </pre>
          </div>

          <h2 style={{ marginBottom: '1.5rem' }}>Transit Fares & Compass Card</h2>
          <div className="table-responsive" style={{ marginBottom: '3rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--metro-gray)' }}>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left', borderBottom: '2px solid #ddd', whiteSpace: 'nowrap' }}>Fare Type</th>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Cost (CAD)</th>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Details</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['One-Way Single Fare', '$3.15', 'Valid for one trip (any direction, any time of day)'],
                  ['Day Pass', '$10.75', 'Unlimited travel all day on SkyTrain, bus, and SeaBus'],
                  ['Compass Card (Reloadable)', '$6.00 (card)', 'Buy once, reload with any amount. Each trip deducts fare automatically.'],
                  ['Round-Trip', '$6.30', 'Two one-way fares. Cheaper than two single tickets.'],
                ].map(([fare, price, details], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '0.875rem 1rem', whiteSpace: 'nowrap' }}>{fare}</td>
                    <td style={{ padding: '0.875rem 1rem', whiteSpace: 'nowrap', fontWeight: '600' }}>{price}</td>
                    <td style={{ padding: '0.875rem 1rem' }}>{details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ marginBottom: '1.5rem' }}>World Cup 2026 Matches at BC Place</h2>
          <div className="table-responsive" style={{ marginBottom: '3rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--metro-gray)' }}>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left', borderBottom: '2px solid #ddd', whiteSpace: 'nowrap' }}>Date</th>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Round</th>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Kickoff (PDT)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['June 6, 2026', 'Group Stage', '7:00 PM'],
                  ['June 13, 2026', 'Group Stage', '10:00 AM'],
                  ['June 21, 2026', 'Group Stage', '10:00 AM'],
                  ['July 4, 2026', 'Round of 32', '7:00 PM'],
                ].map(([date, round, time], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '0.875rem 1rem', whiteSpace: 'nowrap' }}>{date}</td>
                    <td style={{ padding: '0.875rem 1rem' }}>{round}</td>
                    <td style={{ padding: '0.875rem 1rem' }}>{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <BlogGuiasWidget guides={blogLinks.mundial} context="BC Place Stadium" />

          <div className="btn-group" style={{ marginTop: '2rem' }}>
            <a href="/vancouver/" className="cta-btn">← Back to Vancouver</a>
            <a href="/mundial-2026/" className="cta-btn" style={{ backgroundColor: '#003d7a' }}>See All Stadiums →</a>
          </div>
        </div>
      </section>
    </div>
  )
}
