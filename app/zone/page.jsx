import { zonasUSCA } from '@/data/zonas-us-ca'
import AdBannerLazy from '@/app/components/AdBannerLazy'

const TRANSIT_COLORS = {
  'MTA Subway': '#0039A6',
  'LA Metro': '#E3551C',
  'METRO Houston': '#6C207E',
  'Metro Houston': '#6C207E',
  'MARTA': '#D4A017',
  'SEPTA': '#0072CE',
  'Sound Transit': '#00843D',
  'Sound Transit Light Rail': '#00843D',
  'BART': '#003CA6',
  'BART & Muni Light Rail': '#003CA6',
  'MBTA': '#DA291C',
  'MBTA Subway': '#DA291C',
  'MBTA Subway & Light Rail': '#DA291C',
  'MBTA Light Rail': '#DA291C',
  'MBTA Silver Line Bus Rapid Transit': '#7C878E',
  'Miami-Dade Transit': '#F78F1E',
  'Metrorail': '#F78F1E',
  'Metromover Light Rail': '#F78F1E',
  'DART Light Rail': '#CE0037',
  'DART': '#CE0037',
  'KCATA': '#0054A6',
  'KC Streetcar': '#0054A6',
  'TTC': '#DA291C',
  'TTC Subway': '#DA291C',
  'TTC Subway Line 1': '#DA291C',
  'TTC Streetcar': '#DA291C',
  'TransLink': '#0084C4',
  'TransLink SkyTrain': '#0084C4',
  'TransLink Canada Line': '#0084C4',
  'TransLink & Gondolas': '#0084C4',
  'CTA L': '#00A1DE',
  'WMATA Metro': '#004D6F',
  'RTD Light Rail': '#1D71B8',
  'UTA TRAX': '#0070C0',
  'MTS Trolley': '#E31837',
  'Metro Transit Light Rail': '#003DA5',
  'CATS LYNX': '#008C99',
  'Valley Metro Light Rail': '#BD4A18',
  'MTA Maryland Rail': '#6A2C91',
  'RTA Rapid': '#0066B3',
  'NFTA Metro': '#006341',
  'RTA Streetcar': '#2D6A4F',
  'MetroLink': '#0072CE',
  'PRT T Red Line': '#DA291C',
  'QLine (M-1 Rail)': '#00843D',
  'VTA Light Rail': '#0099D8',
  'NJ Transit Light Rail': '#F37021',
  'Honolulu Rail Transit': '#FFC72C',
  'Las Vegas Monorail': '#001489',
  'The Tide Light Rail': '#005DAA',
  'TECO Streetcar': '#008B43',
  'Capital MetroRail': '#E31837',
  'Cincinnati Bell Connector': '#0072CE',
  'El Paso Streetcar': '#B4A269',
  'Jacksonville Skyway': '#005792',
  'The Hop Lakefront': '#004F2D',
  'WeGo Star Commuter Rail': '#FF6600',
  'OKC Streetcar': '#E31837',
  'SunRail': '#0072CE',
  'Tren Urbano': '#00843D',
  'Sun Link': '#0072CE',
  'STM Métro': '#0072CE',
  'STM Métro Green Line': '#008D4F',
  'Calgary CTrain': '#EE3124',
  'Edmonton LRT': '#003DA5',
  'Edmonton LRT Capital Line': '#003DA5',
  'O-Train': '#DA291C',
  'O-Train Confederation Line': '#DA291C',
  'ION Light Rail Transit': '#00A54F',
  'Hazel McCallion Light Rail Transit': '#0072CE',
  'TriMet MAX': '#D14413',
  'SacRT Light Rail': '#0072CE',
  'Portland Streetcar': '#84BD00',
}

function getTransitColor(system) {
  return TRANSIT_COLORS[system] || '#666666'
}

export const metadata = {
  title: 'Neighborhood transit guides — US & Canada cities | MetroGuia',
  description: 'Explore neighborhood guides for major US and Canadian cities. How to get around by subway, transit, and public transportation during FIFA 2026 and beyond.',
  openGraph: {
    title: 'Neighborhood guides — US & Canada cities',
    description: 'Complete transit guides for neighborhoods in major North American cities',
    url: 'https://metroguia.mx/zone/',
    siteName: 'MetroGuia',
    locale: 'en_US',
    type: 'website',
  }
}

export default function ZonesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Neighborhood guides — US & Canada cities',
    description: 'Complete transit guides for neighborhoods in major North American cities',
    url: 'https://metroguia.mx/zone/',
  }

  const zonesByCity = {}
  zonasUSCA.filter(Boolean).forEach(zone => {
    const cityKey = zone.city || zone.state || 'Other'
    if (!zonesByCity[cityKey]) zonesByCity[cityKey] = []
    zonesByCity[cityKey].push(zone)
  })

  const cities = Object.keys(zonesByCity).sort()

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="hero" style={{ backgroundColor: 'var(--metro-dark)' }}>
        <div className="container">
          <h1>Explore neighborhoods in US &amp; Canada</h1>
          <p style={{ fontSize: '1.125rem', marginBottom: '0' }}>
            Discover the best neighborhoods and how to get around by transit in major North American cities
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', lineHeight: 1.8 }}>
            Explore vibrant neighborhoods across the United States and Canada. Each neighborhood has its own character,
            history, and attractions. This guide helps you discover the best areas and how to reach them by
            transit — perfect for planning your visit during FIFA 2026 or any time.
          </p>
        </div>
      </section>

      {/* Ad 1 */}
      <AdBannerLazy slot="4434764790" format="auto" />

      {/* ZONES BY CITY */}
      {cities.map((city, cityIdx) => (
        <section key={city} style={{ padding: '3rem 1.25rem', backgroundColor: cityIdx % 2 === 1 ? 'var(--metro-gray)' : 'transparent' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <h2 style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '2px solid var(--metro-orange)' }}>
              {city}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              {zonesByCity[city].map((zona) => {
                const transitColor = zona.transit_systems && zona.transit_systems[0] ? getTransitColor(zona.transit_systems[0]) : '#999'
                return (
                  <div key={zona.slug} className="lugar-card" style={{
                    backgroundColor: '#f8f9fa',
                    borderTop: `4px solid ${transitColor}`,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem' }}>
                      <a href={`/zone/${zona.slug}/`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {zona.name}
                      </a>
                    </h3>

                    <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '1rem', flex: 1 }}>
                      {zona.description.substring(0, 140)}...
                    </p>

                    {zona.transit_systems && zona.transit_systems.length > 0 && (
                      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                        {zona.transit_systems.map((system, idx) => (
                          <span key={idx} style={{
                            backgroundColor: getTransitColor(system),
                            color: 'white',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '3px',
                            fontSize: '0.75rem',
                            fontWeight: 600
                          }}>
                            {system}
                          </span>
                        ))}
                      </div>
                    )}

                    {zona.fifa_2026_relevance && (
                      <div style={{
                        backgroundColor: '#fff3cd',
                        padding: '0.5rem 0.75rem',
                        borderRadius: '4px',
                        marginBottom: '1rem',
                        fontSize: '0.75rem',
                        color: '#856404'
                      }}>
                        <strong>⚽ FIFA 2026</strong>
                      </div>
                    )}

                    <a href={`/zone/${zona.slug}/`} style={{
                      color: 'var(--metro-orange)',
                      fontWeight: 600,
                      textDecoration: 'none',
                      display: 'inline-block',
                      marginTop: 'auto'
                    }}>
                      Explore neighborhood →
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Ad 2 */}
      <AdBannerLazy slot="4434764790" format="auto" />

      {/* FEATURES */}
      <section style={{ padding: '3rem 1.25rem', backgroundColor: 'var(--metro-gray)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>What you will find in each guide</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📍</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Nearby stations</h3>
              <p style={{ fontSize: '0.95rem', color: '#666' }}>Transit stations and lines serving the neighborhood</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🎯</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>What to see</h3>
              <p style={{ fontSize: '0.95rem', color: '#666' }}>Museums, landmarks, parks, and attractions</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>💡</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Local tips</h3>
              <p style={{ fontSize: '0.95rem', color: '#666' }}>Insider advice for getting the most from your visit</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🏨</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Where to stay</h3>
              <p style={{ fontSize: '0.95rem', color: '#666' }}>Accommodation and booking links</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-tips">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Ready to explore?</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
            Pick a city above or check out our other guides
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/zona/" className="cta-btn">
              Zonas de CDMX →
            </a>
            <a href="/" className="cta-btn" style={{ backgroundColor: 'var(--metro-gray)', color: 'var(--text)' }}>
              Back to MetroGuia
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
