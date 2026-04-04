import { lineasPhiladelphia } from '@/data/philadelphia/lineas-detalle';
import { estacionesPhiladelphia } from '@/data/philadelphia/estaciones';
import { CITIES_CONFIG } from '@/data/cities-config';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';
import TransitCardsSection from '@/app/components/TransitCardsSection';
import AffiliateMundial from '@/app/components/AffiliateMundial';

export const metadata = {
  title: 'SEPTA Philadelphia Transit Guide — Broad Street Line + Market-Frankford + Trolleys | MetroGuia',
  description: 'SEPTA Philadelphia transit guide: Broad Street Line (18 stations), Market-Frankford Line (37 stations), Trolleys & Buses. Direct access to Lincoln Financial Field for FIFA 2026. SEPTA Key Card. Complete trip planner, maps & schedules.',
  keywords: 'SEPTA Philadelphia, Broad Street Line, Market-Frankford, Trolleys, Philadelphia transit, tourism, Lincoln Financial Field, FIFA 2026',
  openGraph: {
    title: 'SEPTA Philadelphia — Broad Street + Market-Frankford',
    description: 'Discover Philadelphia\'s SEPTA system: Broad Street Line + Market-Frankford + Trolleys. Direct access to sports venues and historic districts.',
    url: 'https://metroguia.mx/philadelphia',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const estacionesDestacadas = estacionesPhiladelphia.filter(e =>
  ['philly-city-hall', 'philly-8th-street', 'philly-nrg-station', 'philly-fairmount', 'philly-market-east'].includes(e.slug)
);

export default function PhiladelphiaPage() {
  const cityConfig = CITIES_CONFIG.philadelphia;
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
        name: 'Philadelphia',
        item: 'https://metroguia.mx/philadelphia/'
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
          background: 'linear-gradient(135deg, #FF6B35 0%, #E94B1F 100%)',
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
            SEPTA Philadelphia
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
            Broad Street Line · Market-Frankford · Trolleys & Buses
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
            Philadelphia's oldest rapid transit system. Direct connection to Lincoln Financial Field for FIFA 2026.
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
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#FF6B35', margin: '0 0 8px 0' }}>
              3
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Transit Systems
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#FF6B35', margin: '0 0 8px 0' }}>
              60+
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Total Stations
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#FF6B35', margin: '0 0 8px 0' }}>
              24/7
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Operations
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
            Plan Your Route in Philadelphia
          </h2>
          <p
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              marginBottom: '24px',
              color: 'var(--text-muted)',
            }}
          >
            Calculate the best route between SEPTA stations
          </p>
          <SearchBar ciudad="philadelphia" />
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* FIFA 2026 */}
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
              fontSize: '2.5rem',
              fontWeight: '800',
              margin: '0 0 16px 0',
              color: 'var(--text)',
              textAlign: 'center',
            }}
          >
            🏟️ FIFA World Cup 2026 — Philadelphia
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              color: 'var(--text-muted)',
              textAlign: 'center',
              margin: '0 0 48px 0',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Lincoln Financial Field will host matches during the FIFA World Cup 2026. Use the Broad Street Line (BSL) for direct access.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '48px' }}>
            <div style={{ backgroundColor: 'var(--surface)', padding: '32px', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--warning)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                🎫 Getting to Lincoln Financial Field
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', lineHeight: '1.6' }}>
                Take the Broad Street Line south from downtown to the sports complex. NRG/AT&T Station provides direct access to stadiums and entertainment venues.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--surface)', padding: '32px', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--warning)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                🎟️ Match Day Tips
              </h3>
              <ul style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', paddingLeft: '20px', lineHeight: '1.8' }}>
                <li>Arrive early — trains may be crowded</li>
                <li>Use SEPTA Key Card for fast entry</li>
                <li>Night service available until 1:00 AM</li>
              </ul>
            </div>
          </div>

          <AffiliateMundial city="Philadelphia" stadium="Lincoln Financial Field" />
        </div>
      </section>

      {/* TRANSIT CARD */}
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
              margin: '0 0 48px 0',
              color: 'var(--text)',
              textAlign: 'center',
            }}
          >
            🎫 SEPTA Key Card
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <TransitCardsSection citySlug="philadelphia" />
</div>
        </div>
      </section>

      {/* FEATURED STATIONS */}
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
              margin: '0 0 48px 0',
              color: 'var(--text)',
              textAlign: 'center',
            }}
          >
            ⭐ Featured Stations
          </h2>

          <div style={{ display: 'grid', gap: '24px' }}>
            {estacionesDestacadas.map((estacion, idx) => (
              <Link href={`/philadelphia/station/${estacion.slug}`} key={idx} style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    padding: '28px',
                    backgroundColor: 'var(--surface)',
                    borderRadius: 'var(--radius)',
                    border: '1px solid var(--border)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 8px 0', color: '#FF6B35' }}>
                    {estacion.nombre}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 8px 0' }}>
                    Line {estacion.linea}
                  </p>
                  <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0', lineHeight: '1.6' }}>
                    {estacion.intro}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LINES OVERVIEW */}
      <section
        style={{
          backgroundColor: 'var(--bg)',
          padding: '80px 24px',
        }}
      >
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '800',
              margin: '0 0 48px 0',
              color: 'var(--text)',
              textAlign: 'center',
            }}
          >
            SEPTA Transit Lines
          </h2>

          <div style={{ display: 'grid', gap: '20px' }}>
            {lineasPhiladelphia.map((linea, idx) => (
              <Link href={`/philadelphia/line/${linea.id}`} key={idx} style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    padding: '24px',
                    backgroundColor: 'var(--surface)',
                    borderRadius: 'var(--radius)',
                    borderLeft: `5px solid ${linea.color}`,
                    border: `1px solid var(--border)`,
                    borderLeft: `5px solid ${linea.color}`,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div
                      style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: linea.color,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontSize: '1.5rem',
                        fontWeight: '700',
                      }}
                    >
                      {linea.id}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 4px 0', color: 'var(--text)' }}>
                        {linea.inicio} → {linea.fin}
                      </h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: '0' }}>
                        {linea.total} stations
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
