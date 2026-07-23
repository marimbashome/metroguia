import Link from 'next/link';

export const metadata = {
  title: 'FIFA World Cup 2026 Seattle — Lumen Field | MetroGuia',
  description: 'Complete Link Light Rail guide to Lumen Field for FIFA World Cup 2026. Direct Stadium Station access, fares, schedule, and match information.',
  openGraph: {
    title: 'FIFA World Cup 2026 Seattle — How to Get to Lumen Field',
    description: 'Group Stage and Round of 32 matches at Lumen Field. Direct Link Light Rail 1 Line access.',
    url: 'https://metroguia.mx/seattle/mundial-2026',
  },
};

export default function SeattleMundialPage() {
  const estadioSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Lumen Field',
    description: 'FIFA World Cup 2026 host stadium in Seattle, Washington',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '800 Occidental Avenue South',
      addressLocality: 'Seattle',
      addressRegion: 'WA',
      postalCode: '98134',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.5952,
      longitude: -122.3316
    },
    capacity: 69000,
    url: 'https://www.lumenfield.com'
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Seattle', item: 'https://metroguia.mx/seattle/' },
      { '@type': 'ListItem', position: 3, name: 'World Cup 2026 Guide', item: 'https://metroguia.mx/seattle/mundial-2026/' }
    ]
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(estadioSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <section className="hero" style={{ backgroundColor: '#003d7a' }}>
        <div className="container">
          <h1>FIFA World Cup 2026 — How to Get to Lumen Field</h1>
          <p className="lead">Direct Link Light Rail to Stadium Station | Group Stage and Round of 32 Matches</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ backgroundColor: '#f0f9ff', border: '1px solid #0057a8', borderRadius: 'var(--radius)', padding: '2rem', marginBottom: '3rem' }}>
            <h2 style={{ color: '#003d7a', marginTop: 0 }}>Stadium Information</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Stadium</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Lumen Field</p></div>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Capacity</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>69,000</p></div>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Location</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Seattle, WA</p></div>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Matches</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Groups, Round of 32</p></div>
            </div>
          </div>

          <h2 style={{ marginBottom: '2rem' }}>Step-by-Step Transit Directions</h2>

          {[
            { paso: 1, titulo: 'Access the Link 1 Light Rail Line', desc: 'Board the Link 1 Line from anywhere in the Link system. Major stations include Downtown Seattle, Capitol Hill, and University of Washington.' },
            { paso: 2, titulo: 'Head to Stadium Station', desc: 'The Link 1 Line goes directly to Stadium Station. This is purpose-built for Lumen Field access.' },
            { paso: 3, titulo: 'Exit at Stadium Station', desc: 'Stadium Station is the dedicated stop for Lumen Field. It\'s the most direct transit access in the US. Zero-minute walk to the stadium.' },
            { paso: 4, titulo: 'Enter Lumen Field', desc: 'Stadium Station opens directly into Lumen Field. Just follow the crowds to the turnstiles and main entrances.' },
          ].map(({ paso, titulo, desc }) => (
            <div key={paso} style={{ backgroundColor: '#f0f9ff', borderLeft: '4px solid #0057a8', padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '1.5rem' }}>
              <h3 style={{ color: '#003d7a', marginBottom: '0.75rem' }}>Step {paso}: {titulo}</h3>
              <p style={{ marginBottom: 0, lineHeight: '1.6' }}>{desc}</p>
            </div>
          ))}

          <h2 style={{ marginBottom: '2rem', marginTop: '2.5rem' }}>Fare Information</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { title: 'Single Trip', price: '$3.25 USD', notes: 'Link Light Rail single ride in King County.' },
              { title: 'Day Pass', price: '$10.00 USD', notes: 'Unlimited Link Light Rail travel for 24 hours.' },
              { title: 'Weekly Pass', price: '$58 USD', notes: 'Unlimited rides for 7 days.' }
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: 'var(--surface-hover)', border: '1px solid var(--border)', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
                <h4 style={{ color: '#003d7a', marginBottom: '0.5rem' }}>{item.title}</h4>
                <p style={{ fontWeight: '600', fontSize: '1.2rem', color: '#0057a8', marginBottom: '0.75rem' }}>{item.price}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>{item.notes}</p>
              </div>
            ))}
          </div>

          <h2 style={{ marginBottom: '2rem' }}>Why Link Light Rail is Perfect for Lumen Field</h2>
          <div style={{ backgroundColor: '#fff3cd', border: '1px solid #ffc107', borderRadius: 'var(--radius)', padding: '2rem', marginBottom: '3rem' }}>
            <h3 style={{ marginTop: 0, color: '#856404' }}>Best Stadium Access in the United States</h3>
            <ul style={{ lineHeight: '1.8' }}>
              <li><strong>Zero-Walk Access:</strong> Stadium Station is inside Lumen Field. No walking required from the train to the stadium.</li>
              <li><strong>Frequency:</strong> Trains every 10 minutes (more on match days). Service runs late for evening matches.</li>
              <li><strong>Reliability:</strong> Link Light Rail is newer and has excellent on-time performance.</li>
              <li><strong>Affordability:</strong> $3.25 is one of the cheapest transit options in major US cities.</li>
            </ul>
          </div>

          <h2 style={{ marginBottom: '2rem' }}>Practical Tips</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { emoji: '⏰', title: 'Arrival Time', desc: 'Arrive 1-2 hours early. With direct Stadium Station access, you don\'t need extra travel time.' },
              { emoji: '🌡️', title: 'Seattle Weather (June)', desc: 'Cool and pleasant: 65-75°F (18-24°C). Bring a light layer. Seattle is famous for unpredictable weather.' },
              { emoji: '🎫', title: 'Tickets & ID', desc: 'Have your match ticket and valid ID ready.' },
              { emoji: '💰', title: 'Food', desc: 'Stadium food is available. Seattle also has great nearby restaurants in Pioneer Square.' }
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
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left', borderBottom: '2px solid #ddd', fontWeight: '600' }}>Kickoff (PDT)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['June 14, 2026', 'Group Stage', '6:00 PM'],
                  ['June 22, 2026', 'Group Stage', '6:00 PM'],
                  ['June 30, 2026', 'Group Stage', '6:00 PM'],
                  ['July 2, 2026', 'Round of 32', '6:00 PM']
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
            <a href="/seattle/" className="cta-btn" style={{ backgroundColor: 'var(--text-muted)' }}>← Back to Seattle</a>
            <a href="/mundial-2026/" className="cta-btn">See All World Cup 2026 Stadiums →</a>
            <a href="/mundial-2026/lumen-field/" className="cta-btn">Lumen Field Details →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
