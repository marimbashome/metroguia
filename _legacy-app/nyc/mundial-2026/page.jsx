import Link from 'next/link';

export const metadata = {
  title: 'FIFA World Cup 2026 New York — MetLife Stadium | MetroGuia',
  description: 'Complete transit guide to MetLife Stadium for FIFA World Cup 2026 matches in the New York area. MTA subway directions, NJ Transit connections, fares, and match schedule.',
  openGraph: {
    title: 'FIFA World Cup 2026 New York — How to Get to MetLife Stadium',
    description: 'Final, Semifinal, and Group Stage matches at MetLife Stadium. Step-by-step transit directions from NYC via MTA and NJ Transit Bus 380.',
    url: 'https://metroguia.mx/nyc/mundial-2026',
  },
};

export default function NYCMundialPage() {
  const estadioSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'MetLife Stadium',
    description: 'FIFA World Cup 2026 host stadium in East Rutherford, New Jersey',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'One MetLife Stadium Drive',
      addressLocality: 'East Rutherford',
      addressRegion: 'NJ',
      postalCode: '07073',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.8135,
      longitude: -74.0745
    },
    capacity: 82500,
    url: 'https://www.metlifestadium.com'
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'MetroGuia',
        item: 'https://metroguia.mx'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'New York City',
        item: 'https://metroguia.mx/nyc/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'World Cup 2026 Guide',
        item: 'https://metroguia.mx/nyc/mundial-2026/'
      }
    ]
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(estadioSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <section className="hero" style={{ backgroundColor: '#003d7a' }}>
        <div className="container">
          <h1>FIFA World Cup 2026 — How to Get to MetLife Stadium</h1>
          <p className="lead">Complete transit guide from NYC to MetLife Stadium in East Rutherford, NJ | Final, Semifinal, and Group Stage Matches</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ backgroundColor: '#f0f9ff', border: '1px solid #0057a8', borderRadius: 'var(--radius)', padding: '2rem', marginBottom: '3rem' }}>
            <h2 style={{ color: '#003d7a', marginTop: 0 }}>Stadium Information</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Stadium</p>
                <p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>MetLife Stadium</p>
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Capacity</p>
                <p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>82,500</p>
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Location</p>
                <p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>East Rutherford, NJ</p>
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Matches</p>
                <p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Final, Semifinal, Groups</p>
              </div>
            </div>
          </div>

          <h2 style={{ marginBottom: '2rem' }}>Step-by-Step Transit Directions</h2>

          {[
            { paso: 1, titulo: 'Start from Your Location in NYC', desc: 'Head to the nearest MTA subway station. If you\'re in Manhattan, you can get to Penn Station from almost any subway line. The MTA has good coverage across all five boroughs.' },
            { paso: 2, titulo: 'Take MTA Subway to Penn Station (34th Street)', desc: 'Head to Penn Station (serves A, C, E lines from the west side). From other boroughs, connect through major hubs like Union Square (N, Q, R, W, 4, 5, 6) or Jamaica Station (E, J, Z). Time to Penn Station: 10-30 minutes depending on origin.' },
            { paso: 3, titulo: 'Navigate to NJ Transit Bus Terminal', desc: 'Exit the MTA subway and look for signage to the NJ Transit bus concourse. It\'s located below Penn Station on the lower level. Ask an MTA employee if you need directions—it\'s clearly marked.' },
            { paso: 4, titulo: 'Find Bus 380 to MetLife Stadium', desc: 'Look for the gate labeled for Bus 380 (Direct to MetLife Stadium). On match days, NJ Transit significantly increases service. The bus runs from roughly 5 AM until after stadium events end. Check the departure board for your specific match time.' },
            { paso: 5, titulo: 'Purchase Your Bus Ticket', desc: 'One-way fare is approximately $15 USD (cash or card accepted). NJ Transit also offers 10-trip passes ($140) if you\'re attending multiple matches. Tickets are sold at window counters in the bus terminal.' },
            { paso: 6, titulo: 'Board Bus 380 — Direct to MetLife Stadium', desc: 'Bus 380 is the most direct route from Penn Station to MetLife Stadium. Travel time is approximately 45 minutes direct. The bus drops you right at the stadium entrance parking area. Avoid rush hour (4-6 PM) for smoother travel.' },
            { paso: 7, titulo: 'Arrive at MetLife Stadium', desc: 'Exit the bus and follow signage to the main stadium gates. The walk from the bus drop-off to the main entrance is roughly 5-10 minutes. Stadium gates typically open 3 hours before kickoff. Have your ticket and ID ready.' },
          ].map(({ paso, titulo, desc }) => (
            <div key={paso} style={{ backgroundColor: '#f0f9ff', borderLeft: '4px solid #0057a8', padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '1.5rem' }}>
              <h3 style={{ color: '#003d7a', marginBottom: '0.75rem' }}>Step {paso}: {titulo}</h3>
              <p style={{ marginBottom: 0, lineHeight: '1.6' }}>{desc}</p>
            </div>
          ))}

          <h2 style={{ marginBottom: '2rem', marginTop: '2.5rem' }}>Transit Map — NYC to MetLife Stadium</h2>
          <div style={{ backgroundColor: 'var(--metro-gray)', padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '3rem', fontFamily: 'monospace', fontSize: '0.95rem' }}>
            <pre style={{ overflow: 'auto', margin: 0 }}>{`Your Location (e.g., Times Square, Grand Central, Brooklyn, Queens)
                     ↓
              MTA Subway Line
          10-30 minutes (varies by origin)
                     ↓
              PENN STATION
        (Manhattan, 34th Street)
               Manhattan & A, C, E Lines
                     ↓
          NJ Transit Bus Concourse
            (Below Penn Station)
                     ↓
            NJ Transit Bus 380
               Direct to Stadium
            45 minutes (no transfers)
                     ↓
           METLIFE STADIUM 🏟️
         East Rutherford, NJ`}</pre>
          </div>

          <h2 style={{ marginBottom: '2rem' }}>Fare Information & Payment Options</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { title: 'Single Trip (Bus 380)', price: '$15 USD', notes: 'One-way from Penn Station to MetLife Stadium. Valid for same day travel.' },
              { title: '10-Trip Pass', price: '$140 USD', notes: 'Great for multiple matches. Savings: ~$10 per trip vs. single fares.' },
              { title: 'Round Trip Estimate', price: '$30 USD', notes: 'Plan for return journey. Most people take return Bus 380 after matches.' },
              { title: 'Payment Methods', price: 'Cash/Card', notes: 'NJ Transit accepts both at ticket windows. Cards also work on buses themselves.' }
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
              { emoji: '⏰', title: 'Arrival Time', desc: 'Plan to arrive 2-3 hours before kickoff. This gives time for security checks, parking, and getting to your seat.' },
              { emoji: '🎫', title: 'Tickets & ID', desc: 'Bring your match ticket (printed or digital) and a valid government ID (passport, driver\'s license, etc.).' },
              { emoji: '👜', title: 'What to Bring', desc: 'Small clear bag approved by venue, sunscreen (even in June), water bottle (empty), and cash for concessions.' },
              { emoji: '🚫', title: 'What NOT to Bring', desc: 'No glass bottles, cans, large bags, weapons, or outside alcohol. Check MetLife Stadium\'s official bag policy before arriving.' },
              { emoji: '🌡️', title: 'Weather in June', desc: 'June temperatures in NJ average 75-85°F (24-29°C). It can be humid. Dress in layers; bring a light jacket in case of evening temperature drops.' },
              { emoji: '📱', title: 'Connectivity', desc: 'MetLife Stadium has cellular service, but networks get congested during matches. Download tickets and directions before arrival.' },
              { emoji: '🚌', title: 'Return Bus After Match', desc: 'After the match, expect a 30-45 minute wait at the bus stop. Bus 380 operates late into the evening on match days. Buses fill up quickly, so be patient.' },
              { emoji: '💰', title: 'Concessions & Food', desc: 'Stadium food is expensive. Eat before arriving or pack snacks. ATMs are available but expect long lines. Bring cash to avoid delays.' }
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: 'var(--surface-hover)', border: '1px solid var(--border)', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{item.emoji}</h4>
                <h5 style={{ color: '#003d7a', marginBottom: '0.5rem', fontWeight: '600' }}>{item.title}</h5>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ marginBottom: '2rem' }}>FIFA World Cup 2026 Schedule at MetLife Stadium</h2>
          <div className="table-responsive" style={{ marginBottom: '3rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--metro-gray)' }}>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left', borderBottom: '2px solid #ddd', fontWeight: '600' }}>Date</th>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left', borderBottom: '2px solid #ddd', fontWeight: '600' }}>Round</th>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left', borderBottom: '2px solid #ddd', fontWeight: '600' }}>Kickoff (EST)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['June 11, 2026', 'Group Stage', '8:00 PM'],
                  ['June 18, 2026', 'Group Stage', '8:00 PM'],
                  ['June 27, 2026', 'Group Stage', '8:00 PM'],
                  ['July 5, 2026', 'Semifinal', '8:00 PM'],
                  ['July 19, 2026', 'FINAL', '8:00 PM']
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

          <h2 style={{ marginBottom: '2rem' }}>Nearby Alternatives & Transportation Options</h2>
          <div style={{ backgroundColor: '#fff3cd', border: '1px solid #ffc107', borderRadius: 'var(--radius)', padding: '2rem', marginBottom: '3rem' }}>
            <h3 style={{ marginTop: 0, color: '#856404' }}>Alternative Transit Methods</h3>
            <ul style={{ lineHeight: '1.8' }}>
              <li><strong>Taxi/Rideshare (Uber, Lyft):</strong> Direct from NYC to MetLife costs $60-120 depending on surge pricing and distance. Not recommended on match day due to congestion.</li>
              <li><strong>Rental Car:</strong> The Meadowlands has parking, but stadium parking fills up quickly. Reserved parking can be purchased via Ticketmaster ($25-40). Avoid driving if unfamiliar with the area.</li>
              <li><strong>NJ Transit Rail + Bus:</strong> From Penn Station, you can also take NJ Transit Rail (Northeast Corridor Line) to Secaucus Junction, then connect to Bus 380. Slightly longer but an option if buses are full.</li>
            </ul>
          </div>

          <div className="btn-group" style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="/nyc/" className="cta-btn" style={{ backgroundColor: 'var(--text-muted)' }}>← Back to New York City</a>
            <a href="/mundial-2026/" className="cta-btn">See All World Cup 2026 Stadiums →</a>
            <a href="/mundial-2026/metlife-stadium/" className="cta-btn">MetLife Stadium Details →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
