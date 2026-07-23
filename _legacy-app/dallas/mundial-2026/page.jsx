import Link from 'next/link';

export const metadata = {
  title: 'FIFA World Cup 2026 Dallas — AT&T Stadium | MetroGuia',
  description: 'Complete transit guide to AT&T Stadium in Arlington for FIFA World Cup 2026. DART Rail + TRE directions, FIFA shuttles, and match schedule.',
  openGraph: {
    title: 'FIFA World Cup 2026 Dallas — How to Get to AT&T Stadium',
    description: 'Group Stage matches at AT&T Stadium in Arlington. Transit guide from Dallas.',
    url: 'https://metroguia.mx/dallas/mundial-2026',
  },
};

export default function DallasMundialPage() {
  const estadioSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'AT&T Stadium',
    description: 'FIFA World Cup 2026 host stadium in Arlington, Texas',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1 AT&T Way',
      addressLocality: 'Arlington',
      addressRegion: 'TX',
      postalCode: '76010',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.8975,
      longitude: -97.0082
    },
    capacity: 80000,
    url: 'https://www.attstadium.com'
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Dallas', item: 'https://metroguia.mx/dallas/' },
      { '@type': 'ListItem', position: 3, name: 'World Cup 2026 Guide', item: 'https://metroguia.mx/dallas/mundial-2026/' }
    ]
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(estadioSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <section className="hero" style={{ backgroundColor: '#003d7a' }}>
        <div className="container">
          <h1>FIFA World Cup 2026 — How to Get to AT&T Stadium</h1>
          <p className="lead">Complete transit guide to AT&T Stadium in Arlington | Group Stage Matches</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ backgroundColor: '#f0f9ff', border: '1px solid #0057a8', borderRadius: 'var(--radius)', padding: '2rem', marginBottom: '3rem' }}>
            <h2 style={{ color: '#003d7a', marginTop: 0 }}>Stadium Information</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Stadium</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>AT&T Stadium</p></div>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Capacity</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>80,000</p></div>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Location</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Arlington, TX</p></div>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Matches</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Group Stage</p></div>
            </div>
          </div>

          <h2 style={{ marginBottom: '2rem' }}>Step-by-Step Transit Directions</h2>

          {[
            { paso: 1, titulo: 'Start from Dallas Downtown', desc: 'Head to the Dallas Union Station or any DART Rail station in downtown Dallas. The DART system connects throughout the metro area.' },
            { paso: 2, titulo: 'Take DART or TRE (Trinity Railway Express)', desc: 'Board either DART Rail or the TRE (Trinity Railway Express) heading toward Arlington/DFW Airport. The TRE goes directly to Arlington but has limited stops.' },
            { paso: 3, titulo: 'Alight at Arlington Station', desc: 'Exit at Arlington Station (the main TRE stop in Arlington) or a nearby DART station. AT&T Stadium has special shuttle service from these hubs on match days.' },
            { paso: 4, titulo: 'Take FIFA Park-and-Ride Shuttle', desc: 'FIFA organizes special park-and-ride shuttles from downtown Dallas and Arlington station areas. These are the primary way to reach the stadium.' },
            { paso: 5, titulo: 'Arrive at AT&T Stadium', desc: 'The FIFA shuttle deposits you near the main stadium entrance. Stadium gates open 3 hours before kickoff.' },
          ].map(({ paso, titulo, desc }) => (
            <div key={paso} style={{ backgroundColor: '#f0f9ff', borderLeft: '4px solid #0057a8', padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '1.5rem' }}>
              <h3 style={{ color: '#003d7a', marginBottom: '0.75rem' }}>Step {paso}: {titulo}</h3>
              <p style={{ marginBottom: 0, lineHeight: '1.6' }}>{desc}</p>
            </div>
          ))}

          <h2 style={{ marginBottom: '2rem', marginTop: '2.5rem' }}>Important: Limited Direct Transit</h2>
          <div style={{ backgroundColor: '#fff3cd', border: '1px solid #ffc107', borderRadius: 'var(--radius)', padding: '2rem', marginBottom: '3rem' }}>
            <h3 style={{ marginTop: 0, color: '#856404' }}>AT&T Stadium Access in Arlington</h3>
            <p><strong>Key Fact:</strong> AT&T Stadium is in Arlington, a suburban area with limited public transit. DART does not have direct rail service. FIFA provides official park-and-ride shuttle service on match days.</p>
            <ul style={{ lineHeight: '1.8' }}>
              <li><strong>Best Option: FIFA Shuttles</strong> — Park-and-ride from downtown Dallas or CentrePort area. Cost: ~$10-20 round trip.</li>
              <li><strong>Alternative: Personal Parking</strong> — Stadium has extensive parking ($20-30). Drive or rideshare from Dallas.</li>
              <li><strong>Alternative: Rideshare</strong> — Uber/Lyft from downtown: $35-70. Surge pricing expected on match days.</li>
            </ul>
          </div>

          <h2 style={{ marginBottom: '2rem' }}>Practical Tips</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { emoji: '⏰', title: 'Arrival Time', desc: 'Plan 3-4 hours early due to shuttle wait times and stadium access.' },
              { emoji: '🌡️', title: 'Dallas Weather (June)', desc: 'Very hot: 90-100°F (32-38°C). Extremely dry. Bring sunscreen and plenty of water.' },
              { emoji: '🎫', title: 'Tickets & Shuttles', desc: 'Book FIFA shuttle service in advance when you purchase match tickets.' },
              { emoji: '💰', title: 'Costs', desc: 'DART/TRE: $2.50. FIFA shuttle: ~$10-20. Stadium concessions: plan to spend $15+ per item.' }
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
                  ['June 10, 2026', 'Group Stage', '7:00 PM'],
                  ['June 20, 2026', 'Group Stage', '7:00 PM'],
                  ['June 29, 2026', 'Group Stage', '7:00 PM']
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
            <a href="/dallas/" className="cta-btn" style={{ backgroundColor: 'var(--text-muted)' }}>← Back to Dallas</a>
            <a href="/mundial-2026/" className="cta-btn">See All World Cup 2026 Stadiums →</a>
            <a href="/mundial-2026/att-stadium/" className="cta-btn">AT&T Stadium Details →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
