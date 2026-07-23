import BlogGuiasWidget from '@/app/components/BlogGuiasWidget'
import { blogLinks } from '@/data/blog-links'

export const metadata = {
  title: 'How to Get to NRG Stadium by METRO Rail Red Line — Step-by-Step Guide | MetroGuia',
  description: 'Detailed guide to NRG Stadium in Houston, TX for FIFA World Cup 2026. METRO Red Line transit, schedules, and tips for Group Stage matches.',
}

export default function NRGStadiumPage() {
  const estadioSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'NRG Stadium',
    description: 'Major venue in Houston — Host of FIFA World Cup 2026 Group Stage matches',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1 NRG Park',
      addressLocality: 'Houston',
      addressRegion: 'Texas',
      postalCode: '77054',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 29.6847,
      longitude: -95.4107
    },
    sameAs: 'https://en.wikipedia.org/wiki/NRG_Stadium',
    capacity: 72220,
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Transit access', value: 'METRO Rail Red Line — NRG Park Station' },
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
        name: 'NRG Stadium',
        item: 'https://metroguia.mx/mundial-2026/nrg-stadium/'
      }
    ]
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(estadioSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="hero" style={{ backgroundColor: '#eb6e1f' }}>
        <div className="container">
          <h1>How to Get to NRG Stadium</h1>
          <p>Step-by-step guide via METRO Rail Red Line — Houston, Texas</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '2rem' }}>Step-by-Step Directions</h2>

          {[
            { paso: 1, color: '#c60c30', titulo: 'Get to any METRO Red Line station', desc: 'From downtown Houston or any major station, access the METRO Rail Red Line. The line runs through the Medical Center, South Houston, and connects to NRG Park.', warn: false },
            { paso: 2, color: '#c60c30', titulo: 'Board METRO Red Line toward NRG Park', desc: 'Look for signage for the Red Line heading south. All Red Line trains go to NRG Park Station on match days. Frequency: every 15-20 minutes.', warn: false },
            { paso: 3, color: '#c60c30', titulo: 'Ride the Red Line to NRG Park Station', desc: 'From downtown Houston: approximately 25 minutes. Sit back and enjoy the air conditioning — you\'ll avoid Houston traffic entirely.', warn: false },
            { paso: 4, color: '#cc6600', titulo: 'KEY: Exit at NRG Park Station', desc: 'Get off at the NRG Park Station. This is a dedicated rail station for the NRG complex. The station is served entirely for stadium events on match days.', warn: true },
            { paso: 5, color: '#c60c30', titulo: 'Begin the 15-minute walk to NRG Stadium', desc: 'Exit the station and follow signs toward "NRG Stadium." The walk is long but well-signed and mostly level. NRG Park is HUGE (includes the Astrodome) — don\'t get lost, stick to main paths.', warn: false },
            { paso: 6, color: '#c60c30', titulo: 'Arrive at NRG Stadium', desc: 'Follow the crowds and directional signage. You\'ll see the stadium ahead. Total time from downtown: ~1 hour including walk. Welcome to NRG!', warn: false },
          ].map(({ paso, color, titulo, desc, warn }) => (
            <div key={paso} style={{ backgroundColor: warn ? '#fff3cd' : '#f0f9ff', borderLeft: `4px solid ${warn ? '#ff9800' : '#c60c30'}`, padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '1.5rem' }}>
              <h3 style={{ color, marginBottom: '0.75rem' }}>Step {paso}: {titulo}</h3>
              <p style={{ marginBottom: 0 }}>{desc}</p>
            </div>
          ))}

          <h2 style={{ marginBottom: '2rem', marginTop: '2rem' }}>Around NRG Stadium</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { emoji: '🍔', titulo: 'Food & Drinks', desc: 'NRG Stadium has food concessions inside. The NRG Park area has some restaurants. Bring cash for food vendors outside the stadium — options are limited compared to other venues.' },
              { emoji: '💰', titulo: 'ATMs & Money', desc: 'ATMs are available at NRG Stadium and throughout the complex. Get cash BEFORE or during the match — running out can leave you stranded far from downtown.' },
              { emoji: '🛡️', titulo: 'Security & Safety', desc: 'Security screening at the stadium entrance. No glass bottles, cans, or large bags allowed. NRG Park is a massive complex — stay in well-lit areas and with groups.' },
              { emoji: '⏰', titulo: 'Arrival Time', desc: 'Arrive 2-3 hours early. Gates open 3 hours before kickoff. The METRO Red Line will be packed — get there early to avoid platform congestion.' },
              { emoji: '🎒', titulo: 'What to Bring', desc: 'Valid ID (driver\'s license or passport), printed or digital ticket. JUNE IN HOUSTON IS BRUTALLY HOT — bring maximum sunscreen, a wide hat, sunglasses, and water. Hydration is critical.' },
              { emoji: '📱', titulo: 'Heat Advisory & Hydration', desc: 'Houston in June reaches 90-95°F with high humidity. The 15-minute walk to the stadium can be exhausting in this heat. Drink water constantly. Wear comfortable shoes for the long walk.' },
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
{`Your Location (e.g., Downtown Houston)
         ↓
  METRO Rail Red Line
  25 minutes
         ↓
  NRG Park Station
   [Dedicated Rail Stop]
         ↓
   15-minute Walk
   (Well-signed, hot)
         ↓
   NRG STADIUM 🏟️
   Houston, Texas`}
            </pre>
          </div>

          <h2 style={{ marginBottom: '1.5rem' }}>World Cup 2026 Matches at NRG</h2>
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
                  ['June 25, 2026', 'Group Stage'],
                ].map(([date, round], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '0.875rem 1rem', whiteSpace: 'nowrap' }}>{date}</td>
                    <td style={{ padding: '0.875rem 1rem' }}>{round}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <BlogGuiasWidget guides={blogLinks.mundial} context="NRG Stadium" />

          <div className="btn-group" style={{ marginTop: '2rem' }}>
            <a href="/mundial-2026/" className="cta-btn">← Back to World Cup 2026</a>
            <a href="/mundial-2026/" className="cta-btn" style={{ backgroundColor: '#eb6e1f' }}>See All Stadiums →</a>
          </div>
        </div>
      </section>
    </div>
  )
}
