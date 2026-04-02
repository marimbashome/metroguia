import { lineasLA } from '@/data/los-angeles/lineas-detalle';
import { estacionesLA } from '@/data/los-angeles/estaciones';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard'
import AffiliateMundial from '@/app/components/AffiliateMundial'

export const metadata = {
  title: 'Los Angeles Metro Rail Guide — Red/Purple/Gold/Blue/Green Lines | MetroGuia',
  description: 'LA Metro complete guide: Red Line (Hollywood), Purple Line (Downtown-Wilshire), Gold Line (Pasadena), Blue Line (Airport), Green Line (SoFi Stadium). K Line opening. 105+ stations. FIFA World Cup 2026.',
  keywords: 'Los Angeles Metro, LA Rail, Red Line, Purple Line, SoFi Stadium, K Line, transit guide, FIFA 2026',
  openGraph: {
    title: 'LA Metro Rail & Transit Guide — 6 Lines & 105 Stations',
    description: 'Navigate Los Angeles with MetroGuia. Metro Rail lines, SoFi Stadium access, K Line opening 2026.',
    url: 'https://metroguia.mx/los-angeles',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const estacionesDestacadas = estacionesLA.filter(e =>
  ['la-union-station', 'la-hollywood-highland', 'la-7th-metro-center', 'la-civic-center', 'la-downtown-long-beach'].includes(e.slug)
);

export default function LAPage() {
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
        name: 'Los Angeles',
        item: 'https://metroguia.mx/los-angeles/'
      }
    ]
  }

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* HERO */}
      <section
        className="hero"
        style={{
          background: 'linear-gradient(135deg, #C60C30 0%, #a00a28 100%)',
          color: '#FFFFFF',
          padding: '80px 24px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h1
            style={{
              fontSize: '3.5rem',
              fontWeight: '800',
              margin: '0 0 16px 0',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
            }}
          >
            Los Angeles Metro Rail
          </h1>
          <p
            style={{
              fontSize: '1.5rem',
              fontWeight: '500',
              margin: '0 0 24px 0',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto',
              opacity: '0.95',
              lineHeight: '1.4',
            }}
          >
            6 Lines · 105+ Stations · Expanding System
          </p>
          <p
            style={{
              fontSize: '1.125rem',
              fontWeight: '400',
              margin: '0',
              opacity: '0.9',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Complete LA Metro guide including the new K Line to SoFi Stadium (2026). Hollywood, Downtown, Pasadena, and Long Beach.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section
        style={{
          backgroundColor: 'var(--surface)',
          padding: '48px 24px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div
          style={{
            maxWidth: '1000px',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
            textAlign: 'center',
          }}
        >
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#C60C30', margin: '0 0 8px 0' }}>
              105+
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Stations
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#C60C30', margin: '0 0 8px 0' }}>
              6
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Lines Active
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#C60C30', margin: '0 0 8px 0' }}>
              ~120
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Miles of Track
            </p>
          </div>
        </div>
      </section>

      {/* TRIP PLANNER */}
      <section
        style={{
          backgroundColor: 'var(--bg)',
          padding: '60px 24px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2
            style={{
              fontSize: '1.75rem',
              fontWeight: '800',
              marginBottom: '12px',
              textAlign: 'center',
              color: 'var(--text)',
            }}
          >
            🚆 Plan Your LA Route
          </h2>
          <p
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              marginBottom: '24px',
              color: 'var(--text-muted)',
            }}
          >
            Find the best Metro Rail route across Los Angeles
          </p>
          <SearchBar ciudad="los-angeles" />
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* K LINE & SOFISTADIUM */}
      <section
        style={{
          backgroundColor: 'var(--bg)',
          padding: '80px 24px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '800',
              marginBottom: '16px',
              textAlign: 'center',
              color: 'var(--text)',
              letterSpacing: '-0.01em',
            }}
          >
            ⚽ K Line to SoFi Stadium (Opening 2026)
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              textAlign: 'center',
              marginBottom: '48px',
              color: 'var(--text-muted)',
              fontWeight: '400',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Direct connection to SoFi Stadium in Inglewood. Home of FIFA 2026 in LA.
          </p>

          <div
            style={{
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              padding: '32px',
              marginBottom: '32px',
            }}
          >
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                margin: '0 0 24px 0',
                textAlign: 'center',
                color: 'var(--text)',
              }}
            >
              K Line Highlights
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '16px',
              }}
            >
              <div
                style={{
                  backgroundColor: 'var(--bg)',
                  padding: '16px',
                  borderRadius: '6px',
                  borderLeft: '3px solid #C60C30',
                  textAlign: 'center',
                }}
              >
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>Opening</p>
                <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0', color: 'var(--text)' }}>2026</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>World Cup Year</p>
              </div>
              <div
                style={{
                  backgroundColor: 'var(--bg)',
                  padding: '16px',
                  borderRadius: '6px',
                  borderLeft: '3px solid #C60C30',
                  textAlign: 'center',
                }}
              >
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>Destination</p>
                <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0', color: 'var(--text)' }}>SoFi Stadium</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>Inglewood</p>
              </div>
              <div
                style={{
                  backgroundColor: 'var(--bg)',
                  padding: '16px',
                  borderRadius: '6px',
                  borderLeft: '3px solid #C60C30',
                  textAlign: 'center',
                }}
              >
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>Line Color</p>
                <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0', color: 'var(--text)' }}>Gold</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>K Line</p>
              </div>
            </div>
          </div>

          <AffiliateMundial ciudad="LA" estadio="SoFi Stadium" estacion="la-union-station" />
        </div>
      </section>

      {/* METRO LINES */}
      <section
        style={{
          backgroundColor: 'var(--bg)',
          padding: '80px 24px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '800',
              marginBottom: '48px',
              textAlign: 'center',
              color: 'var(--text)',
              letterSpacing: '-0.01em',
            }}
          >
            All LA Metro Lines
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {lineasLA.map((linea) => (
              <Link href={`/los-angeles/line/${linea.id}`} key={linea.id}>
                <div
                  style={{
                    backgroundColor: 'var(--surface)',
                    border: `2px solid ${linea.color}`,
                    borderRadius: '10px',
                    padding: '24px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: linea.color,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontSize: '24px',
                      fontWeight: '800',
                      marginBottom: '16px',
                    }}
                  >
                    {linea.id}
                  </div>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      margin: '0 0 8px 0',
                      color: linea.color,
                    }}
                  >
                    {linea.colorNombre} Line
                  </h3>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-muted)',
                      margin: '0 0 12px 0',
                      fontWeight: '400',
                    }}
                  >
                    {linea.inicio} → {linea.fin}
                  </p>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: linea.color,
                      margin: '0',
                    }}
                  >
                    {linea.total} stations
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AdBannerLazyInArticle slot="1082410395" />

      {/* FEATURED STATIONS */}
      <section
        style={{
          backgroundColor: 'var(--bg)',
          padding: '80px 24px',
        }}
      >
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ maxWidth: '1000px', margin: 'auto', padding: '0 1rem', marginBottom: '2rem' }}>
            <AffiliateTransportCard ciudad="LA" estacion={null} fechas={null} />
          </div>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '800',
              marginBottom: '48px',
              textAlign: 'center',
              color: 'var(--text)',
              letterSpacing: '-0.01em',
            }}
          >
            Featured Stations
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            {estacionesDestacadas.map((estacion) => (
              <Link
                href={`/los-angeles/station/${estacion.slug}`}
                key={estacion.slug}
              >
                <div
                  style={{
                    backgroundColor: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '10px',
                    padding: '24px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      margin: '0 0 8px 0',
                      color: 'var(--text)',
                    }}
                  >
                    {estacion.nombre}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-muted)',
                      margin: '0 0 12px 0',
                      fontWeight: '500',
                    }}
                  >
                    {estacion.county}
                  </p>
                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--text)',
                      margin: '0',
                      lineHeight: '1.6',
                    }}
                  >
                    {estacion.intro}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LODGING SECTION */}
      <section
        style={{
          backgroundColor: 'var(--surface)',
          padding: '80px 24px',
        }}
      >
        <div className="container">
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '800',
              marginBottom: '12px',
              textAlign: 'center',
              color: 'var(--text)',
              letterSpacing: '-0.01em',
            }}
          >
            🏨 Where to Stay in LA
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: 'var(--text-muted)',
              fontSize: '1rem',
              marginBottom: '48px',
              maxWidth: '800px',
              margin: '0 auto 48px',
            }}
          >
            From Downtown to Hollywood: Metro-connected neighborhoods and budget options
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              marginBottom: '60px',
            }}
          >
            {[
              {
                zone: 'Downtown LA',
                price: '$80–200 USD/night',
                transit: 'Red/Purple Lines. Union Station hub.',
                attractions: 'Pershing Square, Disney Hall, Arts District',
                lodging: 'Budget hotels, lofts',
              },
              {
                zone: 'Hollywood',
                price: '$100–250 USD/night',
                transit: 'Red Line. Walk to Walk of Fame.',
                attractions: 'Hollywood Sign, TCL Chinese Theatre, Walk of Fame',
                lodging: 'Hostels, mid-range hotels',
              },
              {
                zone: 'Pasadena',
                price: '$100–220 USD/night',
                transit: 'Gold Line direct from Downtown.',
                attractions: 'Old Town Pasadena, Huntington Library',
                lodging: 'Boutique hotels',
              },
              {
                zone: 'Long Beach',
                price: '$90–200 USD/night',
                transit: 'Blue Line direct from Downtown.',
                attractions: 'Queen Mary, Aquarium, Shoreline',
                lodging: 'Beach hostels, casual hotels',
              },
              {
                zone: 'Santa Monica',
                price: '$120–280 USD/night',
                transit: 'Limited Metro. Expo Line under construction.',
                attractions: 'Pier, Beach, Boardwalk',
                lodging: 'Higher-end, vacation rentals',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  padding: '24px',
                  transition: 'all 0.3s ease',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    margin: '0 0 8px 0',
                    color: '#C60C30',
                  }}
                >
                  {item.zone}
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'var(--text)',
                    margin: '0 0 16px 0',
                  }}
                >
                  {item.price}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div>
                    <p
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-muted)',
                        fontWeight: '500',
                        margin: '0 0 4px 0',
                      }}
                    >
                      Transit
                    </p>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text)', margin: '0' }}>
                      {item.transit}
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-muted)',
                        fontWeight: '500',
                        margin: '0 0 4px 0',
                      }}
                    >
                      Attractions
                    </p>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text)', margin: '0' }}>
                      {item.attractions}
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-muted)',
                        fontWeight: '500',
                        margin: '0 0 4px 0',
                      }}
                    >
                      Lodging
                    </p>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text)', margin: '0' }}>
                      {item.lodging}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              backgroundColor: 'var(--bg)',
              border: '2px solid #C60C30',
              borderRadius: '10px',
              padding: '24px',
              marginBottom: '60px',
            }}
          >
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text)',
                margin: '0',
                lineHeight: '1.8',
              }}
            >
              <strong style={{ color: '#C60C30' }}>Tip:</strong> TAP card is LA's transit payment system ($2.50 per ride). Consider a day pass ($7) if using Metro multiple times. K Line opening in 2026 will transform access to Inglewood and SoFi Stadium.
            </p>
          </div>

          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '800',
              marginBottom: '12px',
              textAlign: 'center',
              color: 'var(--text)',
              letterSpacing: '-0.01em',
            }}
          >
            ⚽ Lodging for FIFA 2026
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: 'var(--text-muted)',
              fontSize: '1rem',
              marginBottom: '24px',
              maxWidth: '800px',
              margin: '0 auto 24px',
            }}
          >
            SoFi Stadium in Inglewood is the primary LA FIFA 2026 venue. K Line connection recommended.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              marginBottom: '40px',
            }}
          >
            {[
              {
                zone: 'Inglewood / Near SoFi',
                time: '15 min walk via K Line',
                details: 'Closest option. K Line direct (opens 2026).',
              },
              {
                zone: 'Downtown LA',
                time: '35 min via K Line + Gold Line',
                details: 'More options. Center of LA nightlife.',
              },
              {
                zone: 'Hollywood',
                time: '40 min via Red Line + shuttle',
                details: 'Entertainment hub. Good for pre/post-match.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  padding: '24px',
                  transition: 'all 0.3s ease',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    margin: '0 0 8px 0',
                    color: '#C60C30',
                  }}
                >
                  {item.zone}
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'var(--text)',
                    margin: '0 0 12px 0',
                  }}
                >
                  {item.time}
                </p>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-muted)',
                    margin: '0',
                    lineHeight: '1.6',
                  }}
                >
                  {item.details}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              backgroundColor: 'var(--bg)',
              border: '2px solid #C60C30',
              borderRadius: '10px',
              padding: '24px',
            }}
          >
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text)',
                margin: '0',
                lineHeight: '1.8',
              }}
            >
              <strong style={{ color: '#C60C30' }}>⚠️ K Line opening in 2026</strong> will be game-changing for SoFi Stadium access. Book early near Metro stops. SoFi capacity: 70,240. Plan for 30–45 min Metro travel time from central LA.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
