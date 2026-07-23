import Link from 'next/link';

export const metadata = {
  title: 'FIFA World Cup 2026 Miami — Hard Rock Stadium | MetroGuia',
  description: 'Complete transit guide to Hard Rock Stadium in Miami Gardens for FIFA World Cup 2026. Metrorail connections, FIFA shuttles, and match schedule.',
  openGraph: {
    title: 'FIFA World Cup 2026 Miami — How to Get to Hard Rock Stadium',
    description: 'Semifinal and Group Stage matches at Hard Rock Stadium. Transit guide and FIFA shuttle information.',
    url: 'https://metroguia.mx/miami/mundial-2026',
  },
};

export default function MiamiMundialPage() {
  const estadioSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Hard Rock Stadium',
    description: 'FIFA World Cup 2026 host stadium in Miami Gardens, Florida',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '347 Don Shula Drive',
      addressLocality: 'Miami Gardens',
      addressRegion: 'FL',
      postalCode: '33056',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.9581,
      longitude: -80.2389
    },
    capacity: 65326,
    url: 'https://www.hardrockstadium.com'
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Miami', item: 'https://metroguia.mx/miami/' },
      { '@type': 'ListItem', position: 3, name: 'World Cup 2026 Guide', item: 'https://metroguia.mx/miami/mundial-2026/' }
    ]
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(estadioSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <section className="hero" style={{ backgroundColor: '#003d7a' }}>
        <div className="container">
          <h1>FIFA World Cup 2026 — How to Get to Hard Rock Stadium</h1>
          <p className="lead">Complete transit guide to Hard Rock Stadium in Miami Gardens | Semifinal and Group Stage Matches</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ backgroundColor: '#f0f9ff', border: '1px solid #0057a8', borderRadius: 'var(--radius)', padding: '2rem', marginBottom: '3rem' }}>
            <h2 style={{ color: '#003d7a', marginTop: 0 }}>Stadium Information</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Stadium</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Hard Rock Stadium</p></div>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Capacity</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>65,326</p></div>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Location</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Miami Gardens, FL</p></div>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Matches</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Semifinal, Groups</p></div>
            </div>
          </div>

          <h2 style={{ marginBottom: '2rem' }}>Step-by-Step Transit Directions</h2>

          {[
            { paso: 1, titulo: 'Take Metrorail to Metrorail Station', desc: 'From downtown Miami, take any Metrorail line to a major station. Popular stations include Brickell, Civic Center, or Government Center.' },
            { paso: 2, titulo: 'Disembark at Your Station', desc: 'Hard Rock Stadium does not have direct rail access. Instead, look for FIFA World Cup shuttle signs at major Metrorail stations.' },
            { paso: 3, titulo: 'Board FIFA Official Shuttle Bus', desc: 'FIFA organizes official shuttle bus service from major Metrorail stations directly to Hard Rock Stadium on match days. This is the recommended method.' },
            { paso: 4, titulo: 'Ride to Hard Rock Stadium', desc: 'FIFA shuttle buses depart frequently from marked loading zones. Travel time varies (30-45 minutes depending on traffic and route).' },
            { paso: 5, titulo: 'Arrive at Stadium Entrance', desc: 'Exit the shuttle bus and follow signage to the main entrance of Hard Rock Stadium. Shuttles drop off near the stadium gates.' },
          ].map(({ paso, titulo, desc }) => (
            <div key={paso} style={{ backgroundColor: '#f0f9ff', borderLeft: '4px solid #0057a8', padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '1.5rem' }}>
              <h3 style={{ color: '#003d7a', marginBottom: '0.75rem' }}>Step {paso}: {titulo}</h3>
              <p style={{ marginBottom: 0, lineHeight: '1.6' }}>{desc}</p>
            </div>
          ))}

          <h2 style={{ marginBottom: '2rem', marginTop: '2.5rem' }}>Important: No Direct Rail to Stadium</h2>
          <div style={{ backgroundColor: '#fff3cd', border: '1px solid #ffc107', borderRadius: 'var(--radius)', padding: '2rem', marginBottom: '3rem' }}>
            <h3 style={{ marginTop: 0, color: '#856404' }}>Hard Rock Stadium Access</h3>
            <p><strong>Key Facts:</strong> Hard Rock Stadium is located in Miami Gardens, north of downtown Miami. There is no direct Metrorail connection. However, FIFA provides official shuttle bus service from major Metrorail stations on match days.</p>
            <ul style={{ lineHeight: '1.8' }}>
              <li><strong>Recommended: FIFA Shuttles</strong> — Official paid shuttle service. Reliable and direct. Cost: approximately $10-15 round trip.</li>
              <li><strong>Alternative: Rideshare (Uber/Lyft)</strong> — From downtown Miami: $30-60 (surge pricing on match days). Not recommended due to traffic.</li>
              <li><strong>Alternative: Rental Car</strong> — Stadium parking available. $25-40. Pre-book via Ticketmaster or stadium website.</li>
            </ul>
          </div>

          <h2 style={{ marginBottom: '2rem' }}>Practical Tips</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { emoji: '⏰', title: 'Arrival Time', desc: 'Arrive 3-4 hours early. Traffic and shuttle wait times can be significant on match days.' },
              { emoji: '🌡️', title: 'Miami Weather (June/July)', desc: 'Hot and humid: 85-95°F (29-35°C). High UV index. Bring sunscreen, sunglasses, and hydrate well.' },
              { emoji: '🎫', title: 'Tickets & Shuttles', desc: 'Book FIFA shuttles in advance if possible. Check match day schedules at the ticket office.' },
              { emoji: '💰', title: 'Costs', desc: 'Metrorail $3.50 single. FIFA shuttle ~$10-15. Stadium food: plan to spend $20+ on concessions.' }
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
                  ['June 14, 2026', 'Group Stage', '8:00 PM'],
                  ['June 22, 2026', 'Group Stage', '8:00 PM'],
                  ['June 30, 2026', 'Group Stage', '8:00 PM'],
                  ['July 13, 2026', 'Semifinal', '8:00 PM']
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
            <a href="/miami/" className="cta-btn" style={{ backgroundColor: 'var(--text-muted)' }}>← Back to Miami</a>
            <a href="/mundial-2026/" className="cta-btn">See All World Cup 2026 Stadiums →</a>
            <a href="/mundial-2026/hard-rock-stadium/" className="cta-btn">Hard Rock Stadium Details →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
