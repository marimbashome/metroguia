import Link from 'next/link';

export const metadata = {
  title: 'FIFA World Cup 2026 Atlanta — Mercedes-Benz Stadium | MetroGuia',
  description: 'Complete MARTA transit guide to Mercedes-Benz Stadium for FIFA World Cup 2026. How to get there via public transit, fares, schedule, and match info.',
  openGraph: {
    title: 'FIFA World Cup 2026 Atlanta — How to Get to Mercedes-Benz Stadium',
    description: 'Group Stage matches at Mercedes-Benz Stadium. MARTA transit guide from Atlanta.',
    url: 'https://metroguia.mx/atlanta/mundial-2026',
  },
};

export default function AtlantaMundialPage() {
  const estadioSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Mercedes-Benz Stadium',
    description: 'FIFA World Cup 2026 host stadium in Atlanta, Georgia',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1 AMB Drive NW',
      addressLocality: 'Atlanta',
      addressRegion: 'GA',
      postalCode: '30313',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.7548,
      longitude: -84.4005
    },
    capacity: 71000,
    url: 'https://www.mercedesbenzstadium.com'
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Atlanta', item: 'https://metroguia.mx/atlanta/' },
      { '@type': 'ListItem', position: 3, name: 'World Cup 2026 Guide', item: 'https://metroguia.mx/atlanta/mundial-2026/' }
    ]
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(estadioSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <section className="hero" style={{ backgroundColor: '#003d7a' }}>
        <div className="container">
          <h1>FIFA World Cup 2026 — How to Get to Mercedes-Benz Stadium</h1>
          <p className="lead">Complete MARTA transit guide to Mercedes-Benz Stadium | Group Stage Matches</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ backgroundColor: '#f0f9ff', border: '1px solid #0057a8', borderRadius: 'var(--radius)', padding: '2rem', marginBottom: '3rem' }}>
            <h2 style={{ color: '#003d7a', marginTop: 0 }}>Stadium Information</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Stadium</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Mercedes-Benz Stadium</p></div>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Capacity</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>71,000</p></div>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Location</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Atlanta, GA</p></div>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Matches</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Group Stage</p></div>
            </div>
          </div>

          <h2 style={{ marginBottom: '2rem' }}>Step-by-Step Transit Directions</h2>

          {[
            { paso: 1, titulo: 'Head to Five Points Station', desc: 'Take any MARTA line (Red, Blue, Green) to Five Points Station in downtown Atlanta. It\'s the central transit hub.' },
            { paso: 2, titulo: 'Transfer to Georgia State University Line', desc: 'Connect to the line heading toward Georgia State University. The Vine City Station serves Mercedes-Benz Stadium.' },
            { paso: 3, titulo: 'Exit at Vine City Station', desc: 'Vine City Station is the stadium stop. It\'s approximately 5-10 minutes from Five Points.' },
            { paso: 4, titulo: 'Walk to Mercedes-Benz Stadium', desc: 'From Vine City Station, it\'s a short 5-minute walk to the stadium. Follow the signage to the main entrance.' },
          ].map(({ paso, titulo, desc }) => (
            <div key={paso} style={{ backgroundColor: '#f0f9ff', borderLeft: '4px solid #0057a8', padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '1.5rem' }}>
              <h3 style={{ color: '#003d7a', marginBottom: '0.75rem' }}>Step {paso}: {titulo}</h3>
              <p style={{ marginBottom: 0, lineHeight: '1.6' }}>{desc}</p>
            </div>
          ))}

          <h2 style={{ marginBottom: '2rem', marginTop: '2.5rem' }}>Fare Information</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { title: 'Single Trip', price: '$3.50 USD', notes: 'MARTA single ride ticket.' },
              { title: 'Day Pass', price: '$11.00 USD', notes: 'Unlimited metro travel for 24 hours.' },
              { title: 'Weekly Pass', price: '$31 USD', notes: 'Unlimited rides for 7 days.' }
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
              { emoji: '⏰', title: 'Arrival Time', desc: 'Arrive 2-3 hours early for major events.' },
              { emoji: '🌡️', title: 'Atlanta Weather (June)', desc: 'Hot and humid: 80-90°F (27-32°C). Bring sunscreen.' },
              { emoji: '🎫', title: 'Tickets & ID', desc: 'Have your match ticket and valid ID ready.' },
              { emoji: '💰', title: 'Concessions', desc: 'Stadium food available. Bring cash or card.' }
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
                  ['June 12, 2026', 'Group Stage', '8:00 PM'],
                  ['June 19, 2026', 'Group Stage', '8:00 PM'],
                  ['June 28, 2026', 'Group Stage', '8:00 PM']
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
            <a href="/atlanta/" className="cta-btn" style={{ backgroundColor: 'var(--text-muted)' }}>← Back to Atlanta</a>
            <a href="/mundial-2026/" className="cta-btn">See All World Cup 2026 Stadiums →</a>
            <a href="/mundial-2026/mercedes-benz-stadium/" className="cta-btn">Mercedes-Benz Stadium Details →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
