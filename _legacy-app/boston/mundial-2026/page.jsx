import Link from 'next/link';

export const metadata = {
  title: 'FIFA World Cup 2026 Boston — Gillette Stadium | MetroGuia',
  description: 'Complete transit guide to Gillette Stadium in Foxborough for FIFA World Cup 2026. MBTA Commuter Rail directions, event train information, and match schedule.',
  openGraph: {
    title: 'FIFA World Cup 2026 Boston — How to Get to Gillette Stadium',
    description: 'Group Stage matches at Gillette Stadium. Special event train service from Boston South Station.',
    url: 'https://metroguia.mx/boston/mundial-2026',
  },
};

export default function BostonMundialPage() {
  const estadioSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Gillette Stadium',
    description: 'FIFA World Cup 2026 host stadium in Foxborough, Massachusetts',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1 Patriot Place',
      addressLocality: 'Foxborough',
      addressRegion: 'MA',
      postalCode: '02035',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.0909,
      longitude: -71.2643
    },
    capacity: 65878,
    url: 'https://www.gillettestadium.com'
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Boston', item: 'https://metroguia.mx/boston/' },
      { '@type': 'ListItem', position: 3, name: 'World Cup 2026 Guide', item: 'https://metroguia.mx/boston/mundial-2026/' }
    ]
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(estadioSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <section className="hero" style={{ backgroundColor: '#003d7a' }}>
        <div className="container">
          <h1>FIFA World Cup 2026 — How to Get to Gillette Stadium</h1>
          <p className="lead">Complete MBTA Commuter Rail guide to Gillette Stadium in Foxborough | Group Stage Matches</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ backgroundColor: '#f0f9ff', border: '1px solid #0057a8', borderRadius: 'var(--radius)', padding: '2rem', marginBottom: '3rem' }}>
            <h2 style={{ color: '#003d7a', marginTop: 0 }}>Stadium Information</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Stadium</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Gillette Stadium</p></div>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Capacity</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>65,878</p></div>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Location</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Foxborough, MA</p></div>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Matches</p><p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Group Stage</p></div>
            </div>
          </div>

          <h2 style={{ marginBottom: '2rem' }}>Step-by-Step Transit Directions</h2>

          {[
            { paso: 1, titulo: 'Head to Boston South Station', desc: 'Take any MBTA subway or bus line to South Station in downtown Boston. It\'s the main transit hub for the MBTA Commuter Rail system.' },
            { paso: 2, titulo: 'Look for Event Train Service', desc: 'On match days, the MBTA operates special event trains from South Station directly to Foxborough. Check the MBTA website or departure boards for "Gillette Stadium" or "Event Train" service.' },
            { paso: 3, titulo: 'Board the Special Event Train', desc: 'Event trains only run on Gillette Stadium event days. The train departs from South Station and goes directly to Foxborough Station (near the stadium). Travel time: approximately 60 minutes.' },
            { paso: 4, titulo: 'Exit at Foxborough Station', desc: 'Exit the train at Foxborough Station. It\'s the designated stop for stadium access.' },
            { paso: 5, titulo: 'Shuttle or Walk to Gillette Stadium', desc: 'From Foxborough Station, most attendees take a short shuttle bus to the stadium entrance. Walking is possible but takes 15-20 minutes.' },
          ].map(({ paso, titulo, desc }) => (
            <div key={paso} style={{ backgroundColor: '#f0f9ff', borderLeft: '4px solid #0057a8', padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '1.5rem' }}>
              <h3 style={{ color: '#003d7a', marginBottom: '0.75rem' }}>Step {paso}: {titulo}</h3>
              <p style={{ marginBottom: 0, lineHeight: '1.6' }}>{desc}</p>
            </div>
          ))}

          <h2 style={{ marginBottom: '2rem', marginTop: '2.5rem' }}>Important: Event Train Service Only</h2>
          <div style={{ backgroundColor: '#fff3cd', border: '1px solid #ffc107', borderRadius: 'var(--radius)', padding: '2rem', marginBottom: '3rem' }}>
            <h3 style={{ marginTop: 0, color: '#856404' }}>Special Trains for Gillette Stadium Events</h3>
            <p>The MBTA does NOT have regular commuter rail service to Gillette Stadium. Event trains are deployed specifically for major events like World Cup matches. This is the recommended way to reach the stadium on match days.</p>
            <ul style={{ lineHeight: '1.8' }}>
              <li><strong>Event Train Only:</strong> Service runs only on event days. Check the MBTA website in advance.</li>
              <li><strong>South Station to Foxborough:</strong> One-way fare approximately $15-20 USD.</li>
              <li><strong>Advanced Booking:</strong> MBTA often releases tickets 2-3 weeks before events. Book early online at mbta.com.</li>
              <li><strong>Return Service:</strong> Return trains depart after the match ends. Expect crowds and a 30-45 minute wait.</li>
            </ul>
          </div>

          <h2 style={{ marginBottom: '2rem' }}>Practical Tips</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { emoji: '⏰', title: 'Arrival Time', desc: 'Arrive 3-4 hours early on match day to secure event train tickets and seats.' },
              { emoji: '🌡️', title: 'Boston Weather (June)', desc: 'Warm and variable: 70-80°F (21-27°C). Can be humid. Bring layers.' },
              { emoji: '🎫', title: 'Tickets & Planning', desc: 'Event train tickets sell fast. Book online through MBTA as soon as available.' },
              { emoji: '💰', title: 'Cost', desc: 'Event train fare ~$15-20 round trip. Stadium concessions available. Bring cash or card.' }
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
                  ['June 9, 2026', 'Group Stage', '8:00 PM'],
                  ['June 16, 2026', 'Group Stage', '8:00 PM'],
                  ['June 24, 2026', 'Group Stage', '8:00 PM']
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
            <a href="/boston/" className="cta-btn" style={{ backgroundColor: 'var(--text-muted)' }}>← Back to Boston</a>
            <a href="/mundial-2026/" className="cta-btn">See All World Cup 2026 Stadiums →</a>
            <a href="/mundial-2026/gillette-stadium/" className="cta-btn">Gillette Stadium Details →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
