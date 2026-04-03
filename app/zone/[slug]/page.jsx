import { zonasUSCA } from '@/data/zonas-us-ca'
import AdBannerLazy from '@/app/components/AdBannerLazy'
import ViatorToursWidget from '@/app/components/ViatorToursWidget'
import BookingWidget from '@/app/components/BookingWidget'

// Transit system colors for US/CA cities
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
  'OKC Streetcar': '#E31837',
  'SunRail': '#0072CE',
  'Tren Urbano': '#00843D',
  'Sun Link': '#0072CE',
  'STM Métro': '#0072CE',
  'STM Métro Green Line': '#008D4F',
  'Calgary CTrain': '#EE3124',
  'Edmonton LRT': '#003DA5',
  'O-Train': '#DA291C',
  'O-Train Confederation Line': '#DA291C',
  'ION Light Rail Transit': '#00A54F',
  'Hazel McCallion Light Rail Transit': '#0072CE',
  'TriMet MAX': '#D14413',
  'SacRT Light Rail': '#0072CE',
}

function getTransitColor(system) {
  return TRANSIT_COLORS[system] || '#666666'
}

export function generateStaticParams() {
  return zonasUSCA.filter((z) => z && z.slug).map((z) => ({ slug: z.slug }))
}

export function generateMetadata({ params }) {
  const zona = zonasUSCA.find((z) => z && z.slug === params.slug)
  if (!zona) return { title: 'Zone not found' }
  return {
    title: zona.seo_title,
    description: zona.meta_description,
    openGraph: {
      title: zona.seo_title,
      description: zona.meta_description,
      url: `https://metroguia.mx/zone/${zona.slug}/`,
      siteName: 'MetroGuia',
      locale: 'en_US',
      type: 'website',
    },
  }
}

export default function ZonePage({ params }) {
  const zona = zonasUSCA.find((z) => z && z.slug === params.slug)
  if (!zona) return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h1>Zone not found</h1>
      <p><a href="/zone/">Back to zones</a></p>
    </div>
  )

  // Normalize fields — some zones use city/country, others use state
  const cityName = zona.city || zona.state || 'Unknown'
  const countryName = zona.country === 'US' ? 'USA' : (zona.country || 'USA')
  const stations = zona.stations || []
  const transitSystems = zona.transit_systems || []
  const transitLines = zona.transit_lines || []
  const pois = zona.pois || []
  const tipsForVisitors = zona.tips_for_visitors || []

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'LocalBusiness'],
    name: `${zona.name} - ${cityName}, ${countryName}`,
    description: zona.meta_description,
    url: `https://metroguia.mx/zone/${zona.slug}/`,
    isAccessibleForFree: true,
    publicAccess: true,
    address: {
      '@type': 'PostalAddress',
      addressLocality: cityName,
      addressRegion: cityName,
      addressCountry: countryName,
    },
    headline: `How to reach ${zona.name} by transit`,
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION */}
      <section className="hero" style={{ backgroundColor: 'var(--metro-dark)' }}>
        <div className="container">
          <h1>{zona.h1}</h1>
          <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>{zona.name}</p>
          <p style={{ fontSize: '0.875rem', opacity: 0.7 }}>
            {cityName}, {countryName}
          </p>
          {transitSystems.length > 0 && (
            <p style={{ fontSize: '0.875rem', opacity: 0.8, marginTop: '0.75rem' }}>
              Transit: {transitSystems.join(', ')}
            </p>
          )}
        </div>
      </section>

      {/* Ad 1 */}
      <AdBannerLazy slot="4434764790" format="auto" />

      {/* MAIN DESCRIPTION */}
      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', lineHeight: 1.8 }}>
            {zona.description}
          </p>
        </div>
      </section>

      {/* NEARBY STATIONS */}
      {stations.length > 0 && (
        <section style={{ padding: '3rem 1.25rem', backgroundColor: 'var(--metro-gray)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 style={{ marginBottom: '2rem' }}>Nearby stations</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              {stations.map((station, idx) => {
                const systemColor = transitSystems[0] ? getTransitColor(transitSystems[0]) : '#666'
                return (
                  <div key={idx} className="lugar-card" style={{ border: `2px solid ${systemColor}` }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <span style={{
                        backgroundColor: systemColor,
                        color: 'white',
                        padding: '0.375rem 0.75rem',
                        borderRadius: '4px',
                        fontWeight: 700,
                        fontSize: '0.875rem'
                      }}>
                        {transitSystems[0] || 'Transit'}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>
                      {station.replace(/-/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: 0 }}>
                      Access to {zona.name}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* WHAT TO SEE & DO - POIs */}
      {pois.length > 0 && (
        <section style={{ padding: '3rem 1.25rem' }}>
          <div className="container" style={{ maxWidth: '1000px' }}>
            <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>What to see & do</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {pois.map((poi, idx) => (
                <div key={idx} className="lugar-card" style={{
                  backgroundColor: '#f8f9fa',
                  borderTop: '4px solid var(--metro-orange)',
                  height: '100%'
                }}>
                  <h3 style={{ marginBottom: '0.75rem', fontSize: '1.125rem' }}>
                    {poi.name}
                  </h3>
                  <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: '#666' }}>
                    {poi.type}
                  </p>
                  <p style={{ marginBottom: 0, fontSize: '0.95rem', fontWeight: 600, color: 'var(--metro-orange)' }}>
                    {poi.distance}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* VIATOR + BOOKING WIDGETS */}
      <section style={{ padding: '3rem 1.25rem', backgroundColor: 'var(--metro-gray)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ marginBottom: '1.5rem' }}>Book tours in {cityName}</h3>
              <ViatorToursWidget ciudad={cityName} zona={zona.name} />
            </div>
            <div>
              <h3 style={{ marginBottom: '1.5rem' }}>Find accommodation</h3>
              <BookingWidget ciudad={cityName} />
            </div>
          </div>
        </div>
      </section>

      {/* TIPS FOR VISITORS */}
      {tipsForVisitors.length > 0 && (
        <section style={{ padding: '3rem 1.25rem' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Tips for visitors</h2>
            <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--metro-orange)' }}>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {tipsForVisitors.map((tip, idx) => (
                  <li key={idx} style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--metro-orange)', fontWeight: 700 }}>✓</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* FIFA 2026 RELEVANCE */}
      {zona.fifa_2026_relevance && (
        <section style={{ padding: '3rem 1.25rem' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <div style={{
              backgroundColor: '#fff3cd',
              border: '2px solid #ffc107',
              borderRadius: 'var(--radius)',
              padding: '2rem',
              marginBottom: '2rem'
            }}>
              <h3 style={{ marginBottom: '1rem', color: '#856404' }}>⚽ Why visit during FIFA 2026</h3>
              <p style={{ color: '#856404', margin: 0 }}>
                {zona.fifa_2026_relevance}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Ad 3 */}
      <AdBannerLazy slot="4434764790" format="auto" />

      {/* CTA SECTION */}
      <section className="section-tips">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Planning your visit to {cityName}?</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
            {zona.name} is a must-see destination during FIFA 2026
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/zone/" className="cta-btn">
              Explore other neighborhoods →
            </a>
            <a href="/estacion/" className="cta-btn" style={{ backgroundColor: 'var(--metro-gray)', color: 'var(--text)' }}>
              View all stations
            </a>
          </div>
        </div>
      </section>

      {/* NAVIGATION TO OTHER ZONES */}
      <section style={{ padding: '3rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Explore more neighborhoods</h3>
          <div className="btn-group" style={{ marginBottom: '2rem' }}>
            <a href="/zone/" className="cta-btn">
              View all zones in {cityName} →
            </a>
          </div>

          {transitSystems.length > 0 && transitLines.length > 0 && (
            <>
              <h3 style={{ marginBottom: '1.5rem' }}>Transit lines in this zone</h3>
              <div className="btn-group">
                {transitLines.slice(0, 4).map((line, idx) => {
                  const systemColor = getTransitColor(transitSystems[0])
                  return (
                    <button key={idx} style={{
                      backgroundColor: systemColor,
                      color: 'white',
                      padding: '0.75rem 1.5rem',
                      border: 'none',
                      borderRadius: '6px',
                      fontWeight: 600,
                      cursor: 'default'
                    }}>
                      {transitSystems[0]} — {line}
                    </button>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
