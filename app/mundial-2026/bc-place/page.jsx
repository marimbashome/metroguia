import BlogGuiasWidget from '@/app/components/BlogGuiasWidget'
import { blogLinks } from '@/data/blog-links'

export const metadata = {
  title: 'How to Get to BC Place by Transit — Step-by-Step Guide | MetroGuia',
  description: 'Detailed guide to BC Place in Vancouver, BC for FIFA World Cup 2026. SkyTrain Canada Line directions, best transit in the world, and tips for Group Stage matches.',
}

export default function BCPlacePage() {
  const estadioSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'BC Place',
    description: 'Home of FIFA World Cup 2026 Group Stage matches — Vancouver, British Columbia',
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
      latitude: 49.2762,
      longitude: -123.1089
    },
    sameAs: 'https://en.wikipedia.org/wiki/BC_Place',
    capacity: 54500,
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Transit access', value: 'SkyTrain Canada Line — practically at the stadium' },
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
        name: 'BC Place',
        item: 'https://metroguia.mx/mundial-2026/bc-place/'
      }
    ]
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(estadioSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="hero" style={{ backgroundColor: '#1a472a' }}>
        <div className="container">
          <h1>How to Get to BC Place</h1>
          <p>Step-by-step guide for World Cup 2026 Group Stage matches — Vancouver, British Columbia</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '2rem' }}>Step-by-Step Directions</h2>

          {[
            { paso: 1, color: '#0057A8', titulo: 'Take SkyTrain Canada Line from downtown', desc: 'Board the SkyTrain Canada Line from any downtown Vancouver station (Waterfront, Burrard, Granville, etc.). The Canada Line is ONE OF THE BEST transit systems in the world — ultramodern, clean, frequent, and reliable.', warn: false },
            { paso: 2, color: '#cc6600', titulo: 'KEY: Only 3 minutes to Stadium Station!', desc: 'The SkyTrain Canada Line has a DEDICATED station: Stadium Station, located literally at BC Place. Travel time from downtown: only 3-5 minutes. This is UNMATCHED globally — practically AT the stadium entrance.', warn: true },
            { paso: 3, color: '#0057A8', titulo: 'Exit at Stadium Station', desc: 'Exit SkyTrain at Stadium Station (official BC Place stop). Station is modern, accessible, and packed with wayfinding. You\'ll see stadium signage the moment you exit. No additional transfers needed.', warn: false },
            { paso: 4, color: '#0057A8', titulo: 'Walk 1 minute to BC Place entrance', desc: 'Walk 1 minute from Stadium Station directly to BC Place main entrance. You\'ll be walking through the stadium plaza with thousands of other fans on match days. Family-friendly environment with clear directional signs.', warn: false },
            { paso: 5, color: '#0057A8', titulo: 'Enter BC Place', desc: 'BC Place has a retractable roof (opened 2011) — climate-controlled comfort. Security checks at entrance. Stadium is modern and tourist-friendly. Interior is air-conditioned — relief from any weather conditions.', warn: false },
            { paso: 6, color: '#0057A8', titulo: 'Total transit time: 10-15 minutes', desc: 'Total from downtown to stadium: 10-15 minutes including walking. SkyTrain Canada Line is the FASTEST direct route to any World Cup stadium globally. Cost: CAD $3.45, very affordable. This is peak urban planning.', warn: false },
          ].map(({ paso, color, titulo, desc, warn }) => (
            <div key={paso} style={{ backgroundColor: warn ? '#fff3cd' : '#f0f9ff', borderLeft: `4px solid ${warn ? '#ff9800' : color}`, padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '1.5rem' }}>
              <h3 style={{ color, marginBottom: '0.75rem' }}>Step {paso}: {titulo}</h3>
              <p style={{ marginBottom: 0 }}>{desc}</p>
            </div>
          ))}

          <h2 style={{ marginBottom: '2rem', marginTop: '2rem' }}>Around BC Place</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { emoji: '🍔', titulo: 'Food & Drinks', desc: 'Vancouver has world-class food scene. Gastown district (nearby) has incredible restaurants and historic architecture. Stadium has food vendors. Pre-match dining in Vancouver is an EXPERIENCE — Pacific cuisine is legendary.' },
              { emoji: '💰', titulo: 'ATMs & Money', desc: 'ATMs at BC Place and throughout downtown. Canadian currency — get CAD. Vancouver accepts all payment methods everywhere. Budget CAD $15-30 per meal. Very cosmopolitan — all major credit cards accepted.' },
              { emoji: '🛡️', titulo: 'Security & Safety', desc: 'Vancouver is the CLEANEST city in North America — safest major Canadian city. Enhanced security on match days. Friendly, diverse crowds. Family-friendly stadium. Downtown areas are well-lit and monitored.' },
              { emoji: '⏰', titulo: 'Arrival Time', desc: 'Arrive 1-1.5 hours before kickoff. SkyTrain is so reliable, no need for early arrival. Stadium gates open 2 hours before match. Plenty of outdoor space in BC Place plaza for pre-match socializing.' },
              { emoji: '🎒', titulo: 'What to Bring', desc: 'Valid ID or passport (entering Canada). Printed/digital ticket. June in Vancouver is PERFECT weather (20-25°C / 68-77°F) — ideal match conditions. Light jacket for evenings. Comfortable shoes (you\'ll walk through beautiful plazas).' },
              { emoji: '📱', titulo: 'Post-Match Rest', desc: 'SkyTrain returns to downtown frequently. Waterfront stations have evening activity. Vancouver is beautiful at night with mountains and ocean views. Explore Gastown district or enjoy waterfront promenade after match.' },
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
{`Downtown Vancouver
  (Any SkyTrain Station)
         ↓
 SkyTrain Canada Line
   (BEST IN WORLD)
    Only 3 minutes!
         ↓
   Stadium Station
  (Dedicated BC Place)
         ↓
  Walk 1 minute
  (Through plaza)
         ↓
    BC PLACE 🏟️
 Vancouver, BC
 (Retractable Roof!)`}
            </pre>
          </div>

          <h2 style={{ marginBottom: '1.5rem' }}>World Cup 2026 Matches at BC Place</h2>
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
                  ['June 20, 2026', 'Group Stage'],
                  ['June 27, 2026', 'Group Stage'],
                ].map(([date, round], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '0.875rem 1rem', whiteSpace: 'nowrap' }}>{date}</td>
                    <td style={{ padding: '0.875rem 1rem' }}>{round}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <BlogGuiasWidget guides={blogLinks.mundial} context="BC Place" />

          <div className="btn-group" style={{ marginTop: '2rem' }}>
            <a href="/mundial-2026/" className="cta-btn">← Back to World Cup 2026</a>
            <a href="/mundial-2026/" className="cta-btn" style={{ backgroundColor: '#1a472a' }}>See All Stadiums →</a>
          </div>
        </div>
      </section>
    </div>
  )
}