import Link from 'next/link';

export const metadata = {
  title: 'FIFA World Cup 2026 Philadelphia — Lincoln Financial Field | MetroGuia',
  description: 'Complete SEPTA transit guide to Lincoln Financial Field for FIFA World Cup 2026. Step-by-step directions, fares, schedule, and match information.',
  openGraph: {
    title: 'FIFA World Cup 2026 Philadelphia — How to Get to Lincoln Financial Field',
    description: 'Group Stage matches at Lincoln Financial Field. SEPTA transit guide from Philadelphia.',
    url: 'https://metroguia.mx/philadelphia/mundial-2026',
  },
};

export default function PhiladelphiaMundialPage() {
  const estadioSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Lincoln Financial Field',
    description: 'FIFA World Cup 2026 host stadium in Philadelphia, Pennsylvania',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'One Lincoln Financial Field Way',
      addressLocality: 'Philadelphia',
      addressRegion: 'PA',
      postalCode: '19148',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 39.9012,
      longitude: -75.1738
    },
    capacity: 69596,
    url: 'https://www.lincolnfinancialfield.com'
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Philadelphia', item: 'https://metroguia.mx/philadelphia/' },
      { '@type': 'ListItem', position: 3, name: 'World Cup 2026 Guide', item: 'https://metroguia.mx/philadelphia/mundial-2026/' }
    ]
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(estadioSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <section className="hero" style={{ backgroundColor: '#003d7a' }}>
        <div className="container">
          <h1>FIFA World Cup 2026 — How to Get to Lincoln Financial Field</h1>
          <p className="lead">Complete SEPTA transit guide to Lincoln Financial Field | Group Stage Matches</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ backgroundColor: '#f0f9ff', border: '1px solid #0057a8', borderRadius: 'var(--radius)', padding: '2rem', marginBottom: '3rem' }}>
            <h2 style={{ color: '#003d7a', marginTop: 0 }}>Stadium Information</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Stadium</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Lincoln Financial Field</p></div>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Capacity</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>69,596</p></div>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Location</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Philadelphia, PA</p></div>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Matches</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Group Stage</p></div>
            </div>
          </div>

          <h2 style={{ marginBottom: '2rem' }}>Step-by-Step Transit Directions</h2>

          {[
            { paso: 1, titulo: 'Head to City Hall or 30th Street Station', desc: 'Take any SEPTA regional rail or subway line to City Hall or 30th Street Station. Both are major transit hubs in downtown Philadelphia.' },
            { paso: 2, titulo: 'Board the Broad Street Line (Orange Line)', desc: 'At City Hall, take the Broad Street Line (Orange Line) heading south (toward Fern Rock or Ashton).' },
            { paso: 3, titulo: 'Ride to NRG Station Area', desc: 'The stadium has dedicated SEPTA service from the Broad Street Line. Approximately 14 minutes from City Hall to the stadium area.' },
            { paso: 4, titulo: 'Exit and Walk to Lincoln Financial Field', desc: 'Follow signage from the platform to Lincoln Financial Field. The walk is short (5-10 minutes).' },
          ].map(({ paso, titulo, desc }) => (
            <div key={paso} style={{ backgroundColor: '#f0f9ff', borderLeft: '4px solid #0057a8', padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '1.5rem' }}>
              <h3 style={{ color: '#003d7a', marginBottom: '0.75rem' }}>Step {paso}: {titulo}</h3>
              <p style={{ marginBottom: 0, lineHeight: '1.6' }}>{desc}</p>
            </div>
          ))}

          <h2 style={{ marginBottom: '2rem', marginTop: '2.5rem' }}>Fare Information</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { title: 'Single Trip', price: '$3.00 USD', notes: 'SEPTA single ride ticket.' },
              { title: 'Day Pass', price: '$13.50 USD', notes: 'Unlimited metro travel for 24 hours.' },
              { title: 'Weekly Pass', price: '$40 USD', notes: 'Unlimited rides for 7 days.' }
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
              { emoji: '⏰', title: 'Arrival Time', desc: 'Arrive 2-3 hours early. SEPTA handles heavy crowds well on major events.' },
              { emoji: '🌡️', title: 'Philadelphia Weather (June)', desc: 'Warm and humid: 75-85°F (24-29°C). Comfortable but bring sunscreen.' },
              { emoji: '🎫', title: 'Tickets & ID', desc: 'Valid ID and match ticket required for entry.' },
              { emoji: '💰', title: 'Food', desc: 'Stadium concessions available. Philadelphia is also known for great street food.' }
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
                  ['June 15, 2026', 'Group Stage', '8:00 PM'],
                  ['June 21, 2026', 'Group Stage', '8:00 PM'],
                  ['June 29, 2026', 'Group Stage', '8:00 PM']
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
            <a href="/philadelphia/" className="cta-btn" style={{ backgroundColor: 'var(--text-muted)' }}>← Back to Philadelphia</a>
            <a href="/mundial-2026/" className="cta-btn">See All World Cup 2026 Stadiums →</a>
            <a href="/mundial-2026/lincoln-financial-field/" className="cta-btn">Lincoln Financial Field Details →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
