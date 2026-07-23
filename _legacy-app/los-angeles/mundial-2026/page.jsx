import Link from 'next/link';

export const metadata = {
  title: 'FIFA World Cup 2026 Los Angeles — SoFi Stadium | MetroGuia',
  description: 'Complete transit guide to SoFi Stadium in Inglewood for FIFA World Cup 2026. LA Metro K Line directions, fares, schedule, and match information.',
  openGraph: {
    title: 'FIFA World Cup 2026 Los Angeles — How to Get to SoFi Stadium',
    description: 'Semifinal, Quarterfinals, and Group Stage matches at SoFi Stadium. Metro K Line direct from Downtown LA.',
    url: 'https://metroguia.mx/los-angeles/mundial-2026',
  },
};

export default function LAMundialPage() {
  const estadioSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'SoFi Stadium',
    description: 'FIFA World Cup 2026 host stadium in Inglewood, California',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2000 East Game Drive',
      addressLocality: 'Inglewood',
      addressRegion: 'CA',
      postalCode: '90305',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.9733,
      longitude: -118.3394
    },
    capacity: 70240,
    url: 'https://www.sofistadium.com'
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Los Angeles', item: 'https://metroguia.mx/los-angeles/' },
      { '@type': 'ListItem', position: 3, name: 'World Cup 2026 Guide', item: 'https://metroguia.mx/los-angeles/mundial-2026/' }
    ]
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(estadioSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <section className="hero" style={{ backgroundColor: '#003d7a' }}>
        <div className="container">
          <h1>FIFA World Cup 2026 — How to Get to SoFi Stadium</h1>
          <p className="lead">Complete LA Metro K Line guide to SoFi Stadium in Inglewood | Semifinal, Quarterfinals, and Group Stage Matches</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ backgroundColor: '#f0f9ff', border: '1px solid #0057a8', borderRadius: 'var(--radius)', padding: '2rem', marginBottom: '3rem' }}>
            <h2 style={{ color: '#003d7a', marginTop: 0 }}>Stadium Information</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Stadium</p>
                <p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>SoFi Stadium</p>
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Capacity</p>
                <p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>70,240</p>
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Location</p>
                <p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Inglewood, CA</p>
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Matches</p>
                <p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Semifinal, Quarterfinals, Groups</p>
              </div>
            </div>
          </div>

          <h2 style={{ marginBottom: '2rem' }}>Step-by-Step Transit Directions</h2>

          {[
            { paso: 1, titulo: 'Head to Downtown LA Transit Hub', desc: 'Start at Union Station (main transit hub) or the downtown LA Metro Red/Purple Lines. Most LA attractions connect through Union Station or 7th Street/Metro Center Station.' },
            { paso: 2, titulo: 'Take Metro K Line Heading South', desc: 'Board the K Line (formerly Silver Line Express) heading southbound toward Wilshire/Crenshaw. The K Line is a dedicated transit corridor built for SoFi Stadium events.' },
            { paso: 3, titulo: 'Stay on K Line for 20 Minutes', desc: 'The K Line goes directly from Downtown LA to Inglewood in approximately 20-25 minutes. No transfers needed. Service frequency increases on match days.' },
            { paso: 4, titulo: 'Exit at Inglewood/Market Station', desc: 'Exit at the Inglewood/Market Station stop. This is the main stadium station. Exit signs clearly direct you toward SoFi Stadium.' },
            { paso: 5, titulo: 'Walk to SoFi Stadium', desc: 'From Inglewood/Market Station, it\'s a 5-10 minute walk to the stadium entrance. Follow the crowd flow and directional signs. The path is well-marked on match days.' },
          ].map(({ paso, titulo, desc }) => (
            <div key={paso} style={{ backgroundColor: '#f0f9ff', borderLeft: '4px solid #0057a8', padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '1.5rem' }}>
              <h3 style={{ color: '#003d7a', marginBottom: '0.75rem' }}>Step {paso}: {titulo}</h3>
              <p style={{ marginBottom: 0, lineHeight: '1.6' }}>{desc}</p>
            </div>
          ))}

          <h2 style={{ marginBottom: '2rem', marginTop: '2.5rem' }}>Transit Map — Downtown LA to SoFi Stadium</h2>
          <div style={{ backgroundColor: 'var(--metro-gray)', padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '3rem', fontFamily: 'monospace', fontSize: '0.95rem' }}>
            <pre style={{ overflow: 'auto', margin: 0 }}>{`Your Location (Downtown LA, Hollywood, West LA)
                     ↓
        LA Metro Red/Purple/Gold Line
        Connect to K Line terminus
                     ↓
           UNION STATION or
          7TH STREET/METRO CENTER
                     ↓
           LA Metro K Line
            20-25 minutes direct
                     ↓
          INGLEWOOD/MARKET STATION
            (SoFi Stadium Station)
                     ↓
            5-10 minute walk
                     ↓
            SOFI STADIUM 🏟️
            Inglewood, California`}</pre>
          </div>

          <h2 style={{ marginBottom: '2rem' }}>Fare Information</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { title: 'Single Trip (K Line)', price: '$3.00 USD', notes: 'Pay-per-ride from any LA Metro station to Inglewood.' },
              { title: 'Day Pass', price: '$7.50 USD', notes: 'Unlimited metro travel for 24 hours. Good for multiple stops.' },
              { title: 'Weekly Pass (TAP Card)', price: '$25 USD', notes: 'Unlimited rides for 7 days on all LA Metro lines.' },
              { title: 'TAP Card', price: '$2 (one-time)', notes: 'Reloadable card used on all LA Metro. Keep it for future rides.' }
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
              { emoji: '⏰', title: 'Arrival Time', desc: 'Arrive 2-3 hours early. K Line service is frequent, but expect crowding on match days.' },
              { emoji: '🎫', title: 'Tickets & ID', desc: 'Bring your match ticket and valid ID (driver\'s license, passport).' },
              { emoji: '🌡️', title: 'Weather in June/July', desc: 'LA summer: 75-95°F (24-35°C), sunny. Bring sunscreen, hat, and water. Evening matches can cool down.' },
              { emoji: '👜', title: 'What to Bring', desc: 'Small bag (clear bags permitted), sunscreen, empty water bottle, cash or card for food.' },
              { emoji: '🚫', title: 'What NOT to Bring', desc: 'No glass, cans, large bags, weapons, or outside alcohol. Follow venue bag policy.' },
              { emoji: '🚕', title: 'Parking & Uber', desc: 'Stadium parking available ($20-40). Rideshare surges on match days. Metro K Line is cheaper and less congested.' },
              { emoji: '💰', title: 'Food & Money', desc: 'Stadium concessions are pricey. Eat before arriving. ATMs available but expect lines.' },
              { emoji: '📱', title: 'After the Match', desc: 'K Line returns to Downtown. Expect crowded trains for 30+ minutes after final whistle. Be patient.' }
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: 'var(--surface-hover)', border: '1px solid var(--border)', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{item.emoji}</h4>
                <h5 style={{ color: '#003d7a', marginBottom: '0.5rem', fontWeight: '600' }}>{item.title}</h5>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ marginBottom: '2rem' }}>FIFA World Cup 2026 Schedule at SoFi Stadium</h2>
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
                  ['June 16, 2026', 'Group Stage', '6:00 PM'],
                  ['June 20, 2026', 'Group Stage', '6:00 PM'],
                  ['June 28, 2026', 'Group Stage', '6:00 PM'],
                  ['July 4, 2026', 'Quarterfinal', '6:00 PM'],
                  ['July 14, 2026', 'Semifinal', '6:00 PM']
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

          <h2 style={{ marginBottom: '2rem' }}>LA Metro K Line Information</h2>
          <div style={{ backgroundColor: '#fff3cd', border: '1px solid #ffc107', borderRadius: 'var(--radius)', padding: '2rem', marginBottom: '3rem' }}>
            <h3 style={{ marginTop: 0, color: '#856404' }}>Why LA Metro K Line is Best for SoFi Stadium</h3>
            <ul style={{ lineHeight: '1.8' }}>
              <li><strong>Direct Service:</strong> The K Line was specifically built to connect Downtown LA to SoFi Stadium. It's the most efficient option.</li>
              <li><strong>Stadium Station:</strong> Inglewood/Market Station is the official stadium station. It's designed for high-capacity crowds on match days.</li>
              <li><strong>Frequency:</strong> Service runs every 5-10 minutes during peak hours. On match days, additional trains are deployed.</li>
              <li><strong>Cost-Effective:</strong> $3 per trip is much cheaper than parking ($20-40) or rideshare ($40-80 on surge pricing).</li>
              <li><strong>Safe & Reliable:</strong> LA Metro provides security patrols. Trains operate late on match nights to accommodate crowds.</li>
            </ul>
          </div>

          <div className="btn-group" style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="/los-angeles/" className="cta-btn" style={{ backgroundColor: 'var(--text-muted)' }}>← Back to Los Angeles</a>
            <a href="/mundial-2026/" className="cta-btn">See All World Cup 2026 Stadiums →</a>
            <a href="/mundial-2026/sofi-stadium/" className="cta-btn">SoFi Stadium Details →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
