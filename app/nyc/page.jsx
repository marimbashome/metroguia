import { lineasNYC } from '@/data/nyc/lineas-detalle';
import { estacionesNYC } from '@/data/nyc/estaciones';
import { CITIES_CONFIG } from '@/data/cities-config';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard'
import AffiliateMundial from '@/app/components/AffiliateMundial'

export const metadata = {
  title: 'New York City Subway & Transit Guide — MTA 24 Lines + 472 Stations | MetroGuia',
  description: 'NYC Subway guide: MTA 24 lines, 472 stations across Manhattan, Brooklyn, Queens, Bronx. Times Square, Grand Central, Wall Street. FIFA World Cup 2026 final host. Routes, fares, schedules, accessibility.',
  keywords: 'NYC Subway, New York Metro, MTA, Times Square, Grand Central, Wall Street, transit guide, FIFA 2026',
  openGraph: {
    title: 'NYC Subway & Transit Guide — 24 Lines & 472 Stations',
    description: 'Navigate New York City with MetroGuia. MTA Subway, Times Square, Grand Central, Wall Street, and FIFA 2026 final venues.',
    url: 'https://metroguia.mx/nyc',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const estacionesDestacadas = estacionesNYC.filter(e =>
  ['nyc-times-square-42nd-street', 'nyc-grand-central', 'nyc-wall-street', 'nyc-penn-station', 'nyc-atlantico-parque'].includes(e.slug)
);

export default function NYCPage() {
  const cityConfig = CITIES_CONFIG.nyc;
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
          background: 'linear-gradient(135deg, #EE352E 0%, #d62d20 100%)',
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
            New York City Subway
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
            MTA · 24 Lines + 472 Stations · Open 24 Hours
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
            Complete guide to the world's largest rapid transit system. FIFA World Cup 2026 final host nation.
          </p>
        </div>
      </section>

      {/* ESTADÍSTICAS */}
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
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#EE352E', margin: '0 0 8px 0' }}>
              472
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Stations
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#EE352E', margin: '0 0 8px 0' }}>
              24
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Lines & Routes
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#EE352E', margin: '0 0 8px 0' }}>
              ~665
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
            🚇 Plan Your NYC Route
          </h2>
          <p
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              marginBottom: '24px',
              color: 'var(--text-muted)',
            }}
          >
            Find the best route between stations in the MTA Subway system
          </p>
          <SearchBar ciudad="nyc" />
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* FIFA 2026 - FINAL HOST */}
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
            ⚽ FIFA 2026: {cityConfig.stadium}
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              textAlign: 'center',
              marginBottom: '24px',
              color: 'var(--text-muted)',
              fontWeight: '400',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            USA is the final host nation. NYC hosting multiple matches at MetLife Stadium.
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
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '24px',
              }}
            >
              <div
                style={{
                  backgroundColor: 'var(--bg)',
                  padding: '20px',
                  borderRadius: '8px',
                  borderLeft: '4px solid #EE352E',
                }}
              >
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', margin: '0 0 8px 0', fontWeight: '600', letterSpacing: '0.05em' }}>Stadium</p>
                <p style={{ fontSize: '1.1rem', fontWeight: '700', margin: '0', color: 'var(--text)' }}>{cityConfig.stadium}</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>Capacity: {cityConfig.stadiumCapacity?.toLocaleString()}</p>
              </div>
              <div
                style={{
                  backgroundColor: 'var(--bg)',
                  padding: '20px',
                  borderRadius: '8px',
                  borderLeft: '4px solid #EE352E',
                }}
              >
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', margin: '0 0 8px 0', fontWeight: '600', letterSpacing: '0.05em' }}>Round</p>
                <p style={{ fontSize: '1.1rem', fontWeight: '700', margin: '0', color: 'var(--text)' }}>{cityConfig.fifaRound}</p>
              </div>
              <div
                style={{
                  backgroundColor: 'var(--bg)',
                  padding: '20px',
                  borderRadius: '8px',
                  borderLeft: '4px solid #EE352E',
                }}
              >
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', margin: '0 0 8px 0', fontWeight: '600', letterSpacing: '0.05em' }}>Transit</p>
                <p style={{ fontSize: '0.9rem', margin: '0', color: 'var(--text)' }}>{cityConfig.transitToStadium}</p>
              </div>
            </div>
            <div style={{ marginTop: '24px' }}>
              <Link href={`/nyc/mundial-2026/`} style={{ textDecoration: 'none' }}>
                <span style={{ display: 'inline-block', backgroundColor: '#EE352E', color: '#fff', padding: '12px 24px', borderRadius: '6px', fontWeight: '700', fontSize: '0.9rem', cursor: 'pointer' }}>
                  View NYC FIFA 2026 Guide →
                </span>
              </Link>
            </div>
          </div>

          <AffiliateMundial ciudad="NYC" estadio="MetLife Stadium" estacion="nyc-times-square-42nd-street" />
        </div>
      </section>

      {/* MTA LINES */}
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
            Explore MTA Lines
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {lineasNYC.slice(0, 8).map((linea) => (
              <Link href={`/nyc/line/${linea.id}`} key={linea.id}>
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
                    Line {linea.id} — {linea.colorNombre}
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
          {/* Affiliate Transport Card */}
          <div style={{ maxWidth: '1000px', margin: 'auto', padding: '0 1rem', marginBottom: '2rem' }}>
            <AffiliateTransportCard ciudad="NYC" estacion={null} fechas={null} />
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
                href={`/nyc/station/${estacion.slug}`}
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
                    {estacion.borough}
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
          {/* Where to Stay */}
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
            🏨 Where to Stay in NYC
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
            From Midtown to Brooklyn: options for every budget connected by MTA Subway
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
                zone: 'Midtown Manhattan',
                price: '$150–400 USD/night',
                transit: 'MTA: Red, Blue, Yellow lines. Times Square hub.',
                attractions: 'Times Square, Grand Central, Broadway Theatre District',
                lodging: 'Hotels, hostels, premium',
              },
              {
                zone: 'Lower Manhattan / Financial District',
                price: '$140–350 USD/night',
                transit: 'MTA: Multiple lines to Wall Street',
                attractions: 'Wall Street, 9/11 Memorial, Statue of Liberty ferry',
                lodging: 'Corporate hotels, luxury',
              },
              {
                zone: 'Upper West Side / Central Park',
                price: '$130–320 USD/night',
                transit: 'MTA: Red Line (A, C, 1, 2, 3)',
                attractions: 'Central Park, American Museum of Natural History, Lincoln Center',
                lodging: 'Apartments, boutique hotels',
              },
              {
                zone: 'Brooklyn / Williamsburg',
                price: '$100–280 USD/night',
                transit: 'MTA: L Line, G Line direct access',
                attractions: 'Brooklyn Bridge, DUMBO, hipster culture',
                lodging: 'Airbnbs, boutique hotels',
              },
              {
                zone: 'Queens / Long Island City',
                price: '$90–200 USD/night',
                transit: 'MTA: E, M, 7 lines. Easy Manhattan access.',
                attractions: 'MoMA PS1, Astoria Park, Queens Museum',
                lodging: 'Budget-friendly apartments',
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
                    color: '#EE352E',
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
                    <p
                      style={{
                        fontSize: '0.95rem',
                        color: 'var(--text)',
                        margin: '0',
                      }}
                    >
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
                    <p
                      style={{
                        fontSize: '0.95rem',
                        color: 'var(--text)',
                        margin: '0',
                      }}
                    >
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
                    <p
                      style={{
                        fontSize: '0.95rem',
                        color: 'var(--text)',
                        margin: '0',
                      }}
                    >
                      {item.lodging}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Transport Tip */}
          <div
            style={{
              backgroundColor: 'var(--bg)',
              border: '2px solid #EE352E',
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
              <strong style={{ color: '#EE352E' }}>Tip:</strong> Get an OMNY card ($2.90 USD per ride) or MetroCard. MTA Subway runs 24 hours. Most locals use OMNY tap-to-pay for speed. Plan for 30–45 min between boroughs.
            </p>
          </div>

          {/* FIFA 2026 Lodging Section */}
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
            ⚽ Lodging for FIFA World Cup 2026
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
            MetLife Stadium (East Rutherford, NJ) is a primary FIFA 2026 venue. Stay in NYC and take NJ Transit.
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
                zone: 'Midtown Manhattan',
                time: '45 min via MTA → NJ Transit bus/rail',
                details: 'Best nightlife and dining post-match. Broadway shows.',
              },
              {
                zone: 'Lower Manhattan / Financial District',
                time: '45 min via PATH train or NJ Transit',
                details: 'Corporate comfort. Close to FiDi restaurants.',
              },
              {
                zone: 'Jersey City / Hoboken',
                time: '20 min walk or PATH to MetLife',
                details: 'Closest option. Growing food scene. Good value.',
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
                    color: '#EE352E',
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

          {/* Warning Section */}
          <div
            style={{
              backgroundColor: 'var(--bg)',
              border: '2px solid #EE352E',
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
              <strong style={{ color: '#EE352E' }}>⚠️ Book early.</strong> World Cup matches fill hotels fast. MetLife Stadium seats 82,500. Recommend staying in Midtown and using MTA → NJ Transit combo for reliable transport post-match.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
