import BlogGuiasWidget from '@/app/components/BlogGuiasWidget'
import { blogLinks } from '@/data/blog-links'

export const metadata = {
  title: 'How to Get to SoFi Stadium by Metro K Line — Step-by-Step Guide | MetroGuia',
  description: 'Detailed guide to SoFi Stadium in Inglewood, CA for FIFA World Cup 2026. Metro K Line transit, schedules, and tips for Semifinals and Group matches.',
}

export default function SoFiStadiumPage() {
  const estadioSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'SoFi Stadium',
    description: 'State-of-the-art stadium in Inglewood — Host of FIFA World Cup 2026 Semifinals and Group matches',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1 SoFi Stadium Drive',
      addressLocality: 'Inglewood',
      addressRegion: 'California',
      postalCode: '90301',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.9537,
      longitude: -118.3383
    },
    sameAs: 'https://en.wikipedia.org/wiki/SoFi_Stadium',
    capacity: 70240,
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Transit access', value: 'Metro K Line (Crenshaw/LAX) — Dedicated SoFi Station' },
      { '@type': 'LocationFeatureSpecification', name: 'Accessibility', value: 'Wheelchair accessible, retractable roof' }
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
        name: 'SoFi Stadium',
        item: 'https://metroguia.mx/mundial-2026/sofi-stadium/'
      }
    ]
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(estadioSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="hero" style={{ backgroundColor: '#00205b' }}>
        <div className="container">
          <h1>How to Get to SoFi Stadium</h1>
          <p>Step-by-step guide via Metro K Line — Inglewood, Los Angeles</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '2rem' }}>Step-by-Step Directions</h2>

          {[
            { paso: 1, color: '#b81c13', titulo: 'Get to Downtown LA or any Metro K Line stop', desc: 'The new Metro K Line (Crenshaw/LAX) connects downtown LA, South Central, and LAX. Board from any K Line station heading toward the airport.', warn: false },
            { paso: 2, color: '#b81c13', titulo: 'Board Metro K Line toward SoFi Stadium', desc: 'Look for "SoFi Stadium Station" signs. The K Line is brand new and designed specifically for this stadium. Frequency: every 10-15 minutes.', warn: false },
            { paso: 3, color: '#b81c13', titulo: 'Ride the K Line direct to SoFi Station', desc: 'From downtown LA: approximately 25 minutes. From LAX: approximately 15 minutes. No transfers needed — this is a direct line to the stadium.', warn: false },
            { paso: 4, color: '#cc6600', titulo: 'KEY: Exit at SoFi Stadium Station', desc: 'Get off at the dedicated SoFi Stadium Station. This is a brand-new station built specifically for match days. Follow the pedestrian walkway signs — do NOT try to navigate independently.', warn: true },
            { paso: 5, color: '#b81c13', titulo: 'Follow the Pedestrian Walkway', desc: 'From the K Line station, there is a dedicated 10-minute walk via a pedestrian bridge and covered walkway to the stadium. Well-lit and clearly marked.', warn: false },
            { paso: 6, color: '#b81c13', titulo: 'Arrive at SoFi Stadium', desc: 'You\'ve made it! The walkway leads directly to the main entrance. Total travel time from downtown LA: ~1 hour (including walk).', warn: false },
          ].map(({ paso, color, titulo, desc, warn }) => (
            <div key={paso} style={{ backgroundColor: warn ? '#fff3cd' : '#f0f9ff', borderLeft: `4px solid ${warn ? '#ff9800' : '#b81c13'}`, padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '1.5rem' }}>
              <h3 style={{ color, marginBottom: '0.75rem' }}>Step {paso}: {titulo}</h3>
              <p style={{ marginBottom: 0 }}>{desc}</p>
            </div>
          ))}

          <h2 style={{ marginBottom: '2rem', marginTop: '2rem' }}>Around SoFi Stadium</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { emoji: '🍔', titulo: 'Food & Restaurants', desc: 'SoFi has extensive food options inside the stadium. The Forum (Lakers/Kings venue) is next door with restaurants. Lots of food trucks near the K Line station on game days.' },
              { emoji: '💰', titulo: 'ATMs & Money', desc: 'Multiple ATMs at SoFi Stadium and the Forum. The K Line station also has ATMs. Get cash BEFORE the match — lines get very long.' },
              { emoji: '🛡️', titulo: 'Security & Safety', desc: 'Full security screening at SoFi. No glass bottles, cans, or large bags. Inglewood has heavy law enforcement on match days. Travel with groups after the game.' },
              { emoji: '⏰', titulo: 'Arrival Time', desc: 'Arrive 2-3 hours early. Gates open 3 hours before kickoff. The K Line gets very crowded — leave early to ensure your spot.' },
              { emoji: '🎒', titulo: 'What to Bring', desc: 'Valid ID (driver\'s license or passport), ticket. June in LA is HOT and sunny — bring sunscreen, hat, and sunglasses. Comfortable shoes for the walk.' },
              { emoji: '📱', titulo: 'Post-Match & LA Traffic', desc: 'Los Angeles traffic is unpredictable. If driving anywhere after, leave 1+ hour extra. The K Line is the best option to avoid gridlock — stay on it, avoid ride-shares.' },
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
{`Your Location (e.g., Downtown LA)
         ↓
  Metro K Line
  (Crenshaw/LAX)
  25 minutes
         ↓
  SoFi Stadium Station
    [Dedicated K Line Stop]
         ↓
  Pedestrian Walkway
  10 minutes
         ↓
   SOFI STADIUM 🏟️
   Inglewood, CA`}
            </pre>
          </div>

          <h2 style={{ marginBottom: '1.5rem' }}>World Cup 2026 Matches at SoFi</h2>
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
                  ['June 13, 2026', 'Group Stage'],
                  ['June 21, 2026', 'Group Stage'],
                  ['June 28, 2026', 'Group Stage'],
                  ['July 4, 2026', 'Quarterfinals'],
                  ['July 14, 2026', 'Semifinals'],
                ].map(([date, round], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '0.875rem 1rem', whiteSpace: 'nowrap' }}>{date}</td>
                    <td style={{ padding: '0.875rem 1rem' }}>{round}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <BlogGuiasWidget guides={blogLinks.mundial} context="SoFi Stadium" />

          <div className="btn-group" style={{ marginTop: '2rem' }}>
            <a href="/mundial-2026/" className="cta-btn">← Back to World Cup 2026</a>
            <a href="/mundial-2026/" className="cta-btn" style={{ backgroundColor: '#00205b' }}>See All Stadiums →</a>
          </div>
        </div>
      </section>
    </div>
  )
}
