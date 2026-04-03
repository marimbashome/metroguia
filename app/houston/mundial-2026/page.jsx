import Link from 'next/link';

export const metadata = {
  title: 'FIFA World Cup 2026 Houston — NRG Stadium | MetroGuia',
  description: 'Complete transit guide to NRG Stadium for FIFA World Cup 2026. Houston Metro Red Line direct from Downtown. Schedule, fares, and match information.',
  openGraph: {
    title: 'FIFA World Cup 2026 Houston — How to Get to NRG Stadium',
    description: 'Group Stage matches at NRG Stadium. Direct metro access via Houston Metro Red Line.',
    url: 'https://metroguia.mx/houston/mundial-2026',
  },
};

export default function HoustonMundialPage() {
  const estadioSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'NRG Stadium',
    description: 'FIFA World Cup 2026 host stadium in Houston, Texas',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1 NRG Parkway',
      addressLocality: 'Houston',
      addressRegion: 'TX',
      postalCode: '77054',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 29.6841,
      longitude: -95.4095
    },
    capacity: 72220,
    url: 'https://www.nrg.org'
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Houston', item: 'https://metroguia.mx/houston/' },
      { '@type': 'ListItem', position: 3, name: 'World Cup 2026 Guide', item: 'https://metroguia.mx/houston/mundial-2026/' }
    ]
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(estadioSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <section className="hero" style={{ backgroundColor: '#003d7a' }}>
        <div className="container">
          <h1>FIFA World Cup 2026 — How to Get to NRG Stadium</h1>
          <p className="lead">Complete Houston Metro guide to NRG Stadium | Group Stage Matches</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ backgroundColor: '#f0f9ff', border: '1px solid #0057a8', borderRadius: 'var(--radius)', padding: '2rem', marginBottom: '3rem' }}>
            <h2 style={{ color: '#003d7a', marginTop: 0 }}>Stadium Information</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Stadium</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>NRG Stadium</p></div>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Capacity</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>72,220</p></div>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Location</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Houston, TX</p></div>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Matches</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Group Stage</p></div>
            </div>
          </div>

          <h2 style={{ marginBottom: '2rem' }}>Step-by-Step Transit Directions</h2>

          {[
            { paso: 1, titulo: 'Head to Downtown Houston', desc: 'Start from any major downtown location. The Houston Metro system connects through Downtown Station and Main Street stations.' },
            { paso: 2, titulo: 'Board the Red Line Heading South', desc: 'Take the Houston Metro Red Line southbound toward the NRG Park Station. The Red Line is the primary transit corridor to NRG Stadium.' },
            { paso: 3, titulo: 'Stay on Red Line for 20 Minutes', desc: 'The Red Line goes directly to NRG Park Station in approximately 20 minutes from Downtown Houston. No transfers needed.' },
            { paso: 4, titulo: 'Exit at NRG Park Station', desc: 'Exit at NRG Park Station (the main stadium station). Follow signage toward NRG Stadium.' },
            { paso: 5, titulo: 'Walk to NRG Stadium Entrance', desc: 'From NRG Park Station, it\'s approximately a 5-minute walk to the stadium. The path is well-marked on match days.' },
          ].map(({ paso, titulo, desc }) => (
            <div key={paso} style={{ backgroundColor: '#f0f9ff', borderLeft: '4px solid #0057a8', padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '1.5rem' }}>
              <h3 style={{ color: '#003d7a', marginBottom: '0.75rem' }}>Step {paso}: {titulo}</h3>
              <p style={{ marginBottom: 0, lineHeight: '1.6' }}>{desc}</p>
            </div>
          ))}

          <h2 style={{ marginBottom: '2rem', marginTop: '2.5rem' }}>Fare Information</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { title: 'Single Trip', price: '$2.50 USD', notes: 'Pay-per-ride on Houston Metro Red Line.' },
              { title: 'Day Pass', price: '$7.00 USD', notes: 'Unlimited metro travel for 24 hours.' },
              { title: 'Weekly Pass', price: '$32 USD', notes: 'Unlimited rides for 7 days.' }
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: 'var(--surface-hover)', border: '1px solid var(--border)', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
                <h4 style={{ color: '#003d7a', marginBottom: '0.5rem' }}>{item.title}</h4>
                <p style={{ fontWeight: '600', fontSize: '1.2rem', color: '#0057a8', marginBottom: '0.75rem' }}>{item.price}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>{item.notes}</p>
              </div>
            ))}
          </div>

          <h2 style={{ marginBottom: '2rem' }}>Practical Tips for Match Day</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { emoji: '⏰', title: 'Arrival Time', desc: 'Arrive 2-3 hours early. Summer heat in Houston is intense.' },
              { emoji: '🌡️', title: 'Weather (June)', desc: 'Hot and humid: 85-95°F (29-35°C). Bring sunscreen and hydration.' },
              { emoji: '🎫', title: 'Tickets & ID', desc: 'Valid ID and match ticket required.' },
              { emoji: '💰', title: 'Food', desc: 'Stadium concessions available. Eat light before arriving due to heat.' }
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: 'var(--surface-hover)', border: '1px solid var(--border)', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{item.emoji}</h4>
                <h5 style={{ color: '#003d7a', marginBottom: '0.5rem', fontWeight: '600' }}>{item.title}</h5>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ marginBottom: '2rem' }}>FIFA World Cup 2026 Schedule at NRG Stadium</h2>
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
                  ['June 13, 2026', 'Group Stage', '7:00 PM'],
                  ['June 17, 2026', 'Group Stage', '7:00 PM'],
                  ['June 25, 2026', 'Group Stage', '7:00 PM']
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
            <a href="/houston/" className="cta-btn" style={{ backgroundColor: 'var(--text-muted)' }}>← Back to Houston</a>
            <a href="/mundial-2026/" className="cta-btn">See All World Cup 2026 Stadiums →</a>
            <a href="/mundial-2026/nrg-stadium/" className="cta-btn">NRG Stadium Details →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
