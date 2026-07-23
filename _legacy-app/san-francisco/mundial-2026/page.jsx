import Link from 'next/link';

export const metadata = {
  title: 'FIFA World Cup 2026 San Francisco — Levi\'s Stadium | MetroGuia',
  description: 'Complete transit guide to Levi\'s Stadium in Santa Clara for FIFA World Cup 2026. Caltrain + VTA Orange Line directions, fares, schedule, and match information.',
  openGraph: {
    title: 'FIFA World Cup 2026 San Francisco — How to Get to Levi\'s Stadium',
    description: 'Quarterfinals and Group Stage matches at Levi\'s Stadium in Santa Clara. Transit guide from San Francisco.',
    url: 'https://metroguia.mx/san-francisco/mundial-2026',
  },
};

export default function SanFranciscoMundialPage() {
  const estadioSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Levi\'s Stadium',
    description: 'FIFA World Cup 2026 host stadium in Santa Clara, California',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4900 Marie P. DeBartolo Way',
      addressLocality: 'Santa Clara',
      addressRegion: 'CA',
      postalCode: '95054',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.4042,
      longitude: -121.9702
    },
    capacity: 68500,
    url: 'https://www.levisstadium.com'
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'San Francisco', item: 'https://metroguia.mx/san-francisco/' },
      { '@type': 'ListItem', position: 3, name: 'World Cup 2026 Guide', item: 'https://metroguia.mx/san-francisco/mundial-2026/' }
    ]
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(estadioSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <section className="hero" style={{ backgroundColor: '#003d7a' }}>
        <div className="container">
          <h1>FIFA World Cup 2026 — How to Get to Levi's Stadium</h1>
          <p className="lead">Complete Caltrain + VTA guide to Levi's Stadium in Santa Clara | Quarterfinals and Group Stage Matches</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ backgroundColor: '#f0f9ff', border: '1px solid #0057a8', borderRadius: 'var(--radius)', padding: '2rem', marginBottom: '3rem' }}>
            <h2 style={{ color: '#003d7a', marginTop: 0 }}>Stadium Information</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Stadium</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Levi's Stadium</p></div>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Capacity</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>68,500</p></div>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Location</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Santa Clara, CA</p></div>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Matches</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Quarterfinals, Groups</p></div>
            </div>
          </div>

          <h2 style={{ marginBottom: '2rem' }}>Step-by-Step Transit Directions</h2>

          {[
            { paso: 1, titulo: 'Start from San Francisco or Bay Area', desc: 'Head to the main Caltrain station in San Francisco (4th & King). From other Bay Area locations, connect to any Caltrain line.' },
            { paso: 2, titulo: 'Take Caltrain Southbound to Santa Clara', desc: 'Board a Caltrain train heading toward San Jose. Get off at the Santa Clara Caltrain Station. Travel time from SF: approximately 45-60 minutes.' },
            { paso: 3, titulo: 'Exit and Connect to VTA Orange Line', desc: 'From Santa Clara Caltrain Station, exit and look for VTA (Valley Transportation Authority) signage. The Orange Line departs nearby.' },
            { paso: 4, titulo: 'Board VTA Orange Line to Great America Station', desc: 'Take the VTA Orange Line heading toward Great America. Stay on for approximately 10 minutes.' },
            { paso: 5, titulo: 'Exit at Great America/Levi\'s Stadium Station', desc: 'Get off at the Great America/Levi\'s Stadium Station. It\'s the main stadium stop.' },
            { paso: 6, titulo: 'Walk to Levi\'s Stadium', desc: 'From Great America Station, it\'s a short 5-minute walk to Levi\'s Stadium. Follow directional signs.' },
          ].map(({ paso, titulo, desc }) => (
            <div key={paso} style={{ backgroundColor: '#f0f9ff', borderLeft: '4px solid #0057a8', padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '1.5rem' }}>
              <h3 style={{ color: '#003d7a', marginBottom: '0.75rem' }}>Step {paso}: {titulo}</h3>
              <p style={{ marginBottom: 0, lineHeight: '1.6' }}>{desc}</p>
            </div>
          ))}

          <h2 style={{ marginBottom: '2rem', marginTop: '2.5rem' }}>Transit Map</h2>
          <div style={{ backgroundColor: 'var(--metro-gray)', padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '3rem', fontFamily: 'monospace', fontSize: '0.9rem' }}>
            <pre style={{ overflow: 'auto', margin: 0 }}>{`San Francisco Downtown
    (4th & King Caltrain)
         ↓
    CALTRAIN
    45-60 minutes south
         ↓
 SANTA CLARA Caltrain Station
         ↓
  VTA Orange Line
    10 minutes east
         ↓
GREAT AMERICA/LEVI'S STADIUM
     (VTA Station)
         ↓
   5 minute walk
         ↓
  LEVI'S STADIUM 🏟️
    Santa Clara, CA`}</pre>
          </div>

          <h2 style={{ marginBottom: '2rem' }}>Fare Information</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { title: 'Caltrain (SF to Santa Clara)', price: '$10-15 USD', notes: 'Depends on time of day and seat selection.' },
              { title: 'VTA Orange Line', price: '$2.50 USD', notes: 'Local transit single ride.' },
              { title: 'Day Pass (VTA)', price: '$7.00 USD', notes: 'Unlimited VTA travel for 24 hours.' }
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
              { emoji: '⏰', title: 'Arrival Time', desc: 'Plan to arrive 3-4 hours early due to longer transit time from SF. Caltrain can have delays.' },
              { emoji: '🌡️', title: 'Santa Clara Weather', desc: 'Pleasant and warm: 70-85°F (21-29°C). Bring sunscreen. June can be sunny.' },
              { emoji: '🎫', title: 'Tickets & ID', desc: 'Valid match ticket and ID required. Print or download your Caltrain ticket in advance.' },
              { emoji: '💰', title: 'Food & Money', desc: 'Stadium has concessions. Caltrain and VTA accept card/cash for fares.' }
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
                  ['June 10, 2026', 'Group Stage', '5:00 PM'],
                  ['June 24, 2026', 'Group Stage', '5:00 PM'],
                  ['July 1, 2026', 'Group Stage', '5:00 PM'],
                  ['July 3, 2026', 'Quarterfinal', '5:00 PM']
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
            <a href="/san-francisco/" className="cta-btn" style={{ backgroundColor: 'var(--text-muted)' }}>← Back to San Francisco</a>
            <a href="/mundial-2026/" className="cta-btn">See All World Cup 2026 Stadiums →</a>
            <a href="/mundial-2026/levis-stadium/" className="cta-btn">Levi's Stadium Details →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
