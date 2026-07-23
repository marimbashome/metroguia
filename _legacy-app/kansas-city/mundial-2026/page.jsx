import Link from 'next/link';

export const metadata = {
  title: 'FIFA World Cup 2026 Kansas City — Arrowhead Stadium | MetroGuia',
  description: 'Complete transit guide to Arrowhead Stadium for FIFA World Cup 2026. Metro KC information, FIFA park-and-ride shuttles, and match schedule.',
  openGraph: {
    title: 'FIFA World Cup 2026 Kansas City — How to Get to Arrowhead Stadium',
    description: 'Group Stage matches at Arrowhead Stadium. Transit guide from Kansas City.',
    url: 'https://metroguia.mx/kansas-city/mundial-2026',
  },
};

export default function KansasCityMundialPage() {
  const estadioSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Arrowhead Stadium',
    description: 'FIFA World Cup 2026 host stadium in Kansas City, Missouri',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1 Arrowhead Drive',
      addressLocality: 'Kansas City',
      addressRegion: 'MO',
      postalCode: '64129',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 39.0490,
      longitude: -94.4839
    },
    capacity: 76400,
    url: 'https://www.arrowheadstadium.com'
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Kansas City', item: 'https://metroguia.mx/kansas-city/' },
      { '@type': 'ListItem', position: 3, name: 'World Cup 2026 Guide', item: 'https://metroguia.mx/kansas-city/mundial-2026/' }
    ]
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(estadioSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <section className="hero" style={{ backgroundColor: '#003d7a' }}>
        <div className="container">
          <h1>FIFA World Cup 2026 — How to Get to Arrowhead Stadium</h1>
          <p className="lead">Complete transit guide to Arrowhead Stadium | Group Stage Matches</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ backgroundColor: '#f0f9ff', border: '1px solid #0057a8', borderRadius: 'var(--radius)', padding: '2rem', marginBottom: '3rem' }}>
            <h2 style={{ color: '#003d7a', marginTop: 0 }}>Stadium Information</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Stadium</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Arrowhead Stadium</p></div>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Capacity</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>76,400</p></div>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Location</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Kansas City, MO</p></div>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Matches</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Group Stage</p></div>
            </div>
          </div>

          <h2 style={{ marginBottom: '2rem' }}>Step-by-Step Transit Directions</h2>

          {[
            { paso: 1, titulo: 'Start from Downtown Kansas City', desc: 'Head to downtown Kansas City or the Metro KC transit hub. The stadium is located southeast of downtown.' },
            { paso: 2, titulo: 'Check for FIFA Shuttle Service', desc: 'On match days, FIFA organizes official park-and-ride shuttle bus service. This is the primary recommended method to reach Arrowhead Stadium.' },
            { paso: 3, titulo: 'Board the FIFA Shuttle', desc: 'Look for FIFA shuttle signs and pick-up locations in downtown Kansas City. Shuttles depart on a regular schedule on match days.' },
            { paso: 4, titulo: 'Ride to Arrowhead Stadium', desc: 'The shuttle service provides direct transportation to the stadium. Travel time: approximately 20-30 minutes depending on traffic.' },
            { paso: 5, titulo: 'Arrive at Stadium Parking', desc: 'Shuttles drop off at the Arrowhead Stadium parking area. Walk to the main entrance (approximately 5-10 minutes).' },
          ].map(({ paso, titulo, desc }) => (
            <div key={paso} style={{ backgroundColor: '#f0f9ff', borderLeft: '4px solid #0057a8', padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '1.5rem' }}>
              <h3 style={{ color: '#003d7a', marginBottom: '0.75rem' }}>Step {paso}: {titulo}</h3>
              <p style={{ marginBottom: 0, lineHeight: '1.6' }}>{desc}</p>
            </div>
          ))}

          <h2 style={{ marginBottom: '2rem', marginTop: '2.5rem' }}>Important: Park-and-Ride Service Recommended</h2>
          <div style={{ backgroundColor: '#fff3cd', border: '1px solid #ffc107', borderRadius: 'var(--radius)', padding: '2rem', marginBottom: '3rem' }}>
            <h3 style={{ marginTop: 0, color: '#856404' }}>Arrowhead Stadium Access</h3>
            <p><strong>Key Fact:</strong> Arrowhead Stadium does not have direct public rail service. FIFA provides official park-and-ride shuttle service on match days from downtown Kansas City.</p>
            <ul style={{ lineHeight: '1.8' }}>
              <li><strong>FIFA Park-and-Ride Shuttles:</strong> Official service from downtown. Cost: ~$10-15 round trip. Most convenient option.</li>
              <li><strong>Metro KC Bus:</strong> Limited bus service to nearby areas. Check Metro KC website for match day updates.</li>
              <li><strong>Personal Parking:</strong> Stadium parking available ($15-25). Drive or rideshare to the stadium.</li>
              <li><strong>Rideshare (Uber/Lyft):</strong> From downtown: $20-40. Expect surge pricing on match days.</li>
            </ul>
          </div>

          <h2 style={{ marginBottom: '2rem' }}>Practical Tips</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { emoji: '⏰', title: 'Arrival Time', desc: 'Arrive 3-4 hours early to secure shuttle seats. Service can fill up on match days.' },
              { emoji: '🌡️', title: 'Kansas City Weather (June)', desc: 'Warm and variable: 80-90°F (27-32°C). Possible thunderstorms. Dress in layers.' },
              { emoji: '🎫', title: 'Tickets & Shuttles', desc: 'Book FIFA shuttle service when you purchase match tickets.' },
              { emoji: '💰', title: 'Costs', desc: 'FIFA shuttle: ~$10-15. Stadium food: $15-20+ per item. Stadium parking: $15-25.' }
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: 'var(--surface-hover)', border: '1px solid var(--border)', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{item.emoji}</h4>
                <h5 style={{ color: '#003d7a', marginBottom: '0.5rem', fontWeight: '600' }}>{item.title}</h5>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ marginBottom: '2rem' }}>FIFA World Cup 2026 Schedule</h2>
          <div className="table-responsive" style={{ marginBottom: '3rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--metro-gray)' }}>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left', borderBottom: '2px solid #ddd', fontWeight: '600' }}>Date</th>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left', borderBottom: '2px solid #ddd', fontWeight: '600' }}>Round</th>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left', borderBottom: '2px solid #ddd', fontWeight: '600' }}>Kickoff (CDT)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['June 12, 2026', 'Group Stage', '7:00 PM'],
                  ['June 21, 2026', 'Group Stage', '7:00 PM'],
                  ['June 27, 2026', 'Group Stage', '7:00 PM']
                ].map(([date, round, time], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '0.875rem 1rem' }}><strong>{date}</strong></td>
                    <td style={{ padding: '0.875rem 1rem' }}>{round}</td>
                    <td style={{ padding: '0.875rem 1rem' }}>{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="btn-group" style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="/kansas-city/" className="cta-btn" style={{ backgroundColor: 'var(--text-muted)' }}>← Back to Kansas City</a>
            <a href="/mundial-2026/" className="cta-btn">See All World Cup 2026 Stadiums →</a>
            <a href="/mundial-2026/arrowhead-stadium/" className="cta-btn">Arrowhead Stadium Details →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
