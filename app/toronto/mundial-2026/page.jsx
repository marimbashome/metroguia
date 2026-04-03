import Link from 'next/link';

export const metadata = {
  title: 'FIFA World Cup 2026 Toronto — BMO Field | MetroGuia',
  description: 'Complete TTC and GO Transit guide to BMO Field for FIFA World Cup 2026. Step-by-step directions, fares, schedule, and match information.',
  openGraph: {
    title: 'FIFA World Cup 2026 Toronto — How to Get to BMO Field',
    description: 'Group Stage and Round of 32 matches at BMO Field. TTC + GO Transit guide.',
    url: 'https://metroguia.mx/toronto/mundial-2026',
  },
};

export default function TorontoMundialPage() {
  const estadioSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'BMO Field',
    description: 'FIFA World Cup 2026 host stadium in Toronto, Ontario',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '170 Princes Boulevard',
      addressLocality: 'Toronto',
      addressRegion: 'ON',
      postalCode: 'M6K 3C3',
      addressCountry: 'CA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.6325,
      longitude: -79.4159
    },
    capacity: 45000,
    url: 'https://www.bmofield.com'
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Toronto', item: 'https://metroguia.mx/toronto/' },
      { '@type': 'ListItem', position: 3, name: 'World Cup 2026 Guide', item: 'https://metroguia.mx/toronto/mundial-2026/' }
    ]
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(estadioSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <section className="hero" style={{ backgroundColor: '#003d7a' }}>
        <div className="container">
          <h1>FIFA World Cup 2026 — How to Get to BMO Field</h1>
          <p className="lead">Complete TTC and GO Transit guide to BMO Field | Group Stage and Round of 32 Matches</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ backgroundColor: '#f0f9ff', border: '1px solid #0057a8', borderRadius: 'var(--radius)', padding: '2rem', marginBottom: '3rem' }}>
            <h2 style={{ color: '#003d7a', marginTop: 0 }}>Stadium Information</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Stadium</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>BMO Field</p></div>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Capacity</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>45,000</p></div>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Location</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Toronto, ON</p></div>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Matches</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Groups, Round of 32</p></div>
            </div>
          </div>

          <h2 style={{ marginBottom: '2rem' }}>Step-by-Step Transit Directions</h2>

          {[
            { paso: 1, titulo: 'Head to Union Station', desc: 'Take any TTC line (subway, streetcar, or bus) to Union Station in downtown Toronto. It\'s the main transit hub.' },
            { paso: 2, titulo: 'Take TTC Line 2 (Exhibition Subway)', desc: 'Board the TTC Line 2 (Bloor-Danforth Line) heading west. Stay on until you reach Exhibition/Dundas West Station.' },
            { paso: 3, titulo: 'Exit at Exhibition/Exhibition GO Station', desc: 'Exit at Exhibition/Exhibition GO Station. This is the main stadium stop. BMO Field is located at the Exhibition complex.' },
            { paso: 4, titulo: 'Walk to BMO Field', desc: 'From Exhibition Station, it\'s approximately a 10-15 minute walk to BMO Field. Follow signage to the stadium.' },
          ].map(({ paso, titulo, desc }) => (
            <div key={paso} style={{ backgroundColor: '#f0f9ff', borderLeft: '4px solid #0057a8', padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '1.5rem' }}>
              <h3 style={{ color: '#003d7a', marginBottom: '0.75rem' }}>Step {paso}: {titulo}</h3>
              <p style={{ marginBottom: 0, lineHeight: '1.6' }}>{desc}</p>
            </div>
          ))}

          <h2 style={{ marginBottom: '2rem', marginTop: '2.5rem' }}>Transit Map</h2>
          <div style={{ backgroundColor: 'var(--metro-gray)', padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '3rem', fontFamily: 'monospace', fontSize: '0.95rem' }}>
            <pre style={{ overflow: 'auto', margin: 0 }}>{`Your Location (Downtown Toronto, TTC coverage)
                     ↓
          TTC Any Line
            15-30 minutes
                     ↓
           UNION STATION
       (Downtown Toronto)
                     ↓
        TTC Line 2 Subway
           (West bound)
            15 minutes
                     ↓
     EXHIBITION/EXHIBITION GO
                     ↓
          10-15 min walk
                     ↓
          BMO FIELD 🏟️
         Toronto, Ontario`}</pre>
          </div>

          <h2 style={{ marginBottom: '2rem' }}>Fare Information</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { title: 'Single Trip (TTC)', price: 'CAD $3.25', notes: 'Single TTC fare valid on all subway, streetcar, and bus.' },
              { title: 'PRESTO Day Pass', price: 'CAD $13.00', notes: 'Unlimited TTC travel for 24 hours.' },
              { title: 'GO Transit (if from suburbs)', price: 'CAD $4-8', notes: 'GO Transit fares vary by distance.' }
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: 'var(--surface-hover)', border: '1px solid var(--border)', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
                <h4 style={{ color: '#003d7a', marginBottom: '0.5rem' }}>{item.title}</h4>
                <p style={{ fontWeight: '600', fontSize: '1.2rem', color: '#0057a8', marginBottom: '0.75rem' }}>{item.price}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>{item.notes}</p>
              </div>
            ))}
          </div>

          <h2 style={{ marginBottom: '2rem' }}>Practical Tips</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { emoji: '⏰', title: 'Arrival Time', desc: 'Arrive 2-3 hours early. TTC is reliable on match days.' },
              { emoji: '🌡️', title: 'Toronto Weather (June)', desc: 'Pleasant: 20-25°C (68-77°F). Comfortable for outdoor areas. Bring light jacket.' },
              { emoji: '🎫', title: 'Tickets & PRESTO Card', desc: 'Consider getting a PRESTO card for easy TTC payment.' },
              { emoji: '💰', title: 'Concessions', desc: 'BMO Field has food vendors. Toronto has great nearby restaurants.' }
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
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left', borderBottom: '2px solid #ddd', fontWeight: '600' }}>Kickoff (EDT)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['June 13, 2026', 'Group Stage', '8:00 PM'],
                  ['June 23, 2026', 'Group Stage', '8:00 PM'],
                  ['July 1, 2026', 'Group Stage', '8:00 PM'],
                  ['July 2, 2026', 'Round of 32', '8:00 PM']
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
            <a href="/toronto/" className="cta-btn" style={{ backgroundColor: 'var(--text-muted)' }}>← Back to Toronto</a>
            <a href="/mundial-2026/" className="cta-btn">See All World Cup 2026 Stadiums →</a>
            <a href="/mundial-2026/bmo-field/" className="cta-btn">BMO Field Details →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
