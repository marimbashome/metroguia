import { lineasSaltLakeCity } from '@/data/salt-lake-city/lineas-detalle';
import { estacionesSaltLakeCity } from '@/data/salt-lake-city/estaciones';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';

export const metadata = {
  title: 'UTA TRAX & FrontRunner Guide — Salt Lake City Transit | MetroGuia',
  description: 'Salt Lake City UTA TRAX & FrontRunner: 3 TRAX lines, S-Line Streetcar, FrontRunner rail. 50+ stations. Complete transit guide with fares, schedules, airport access.',
  keywords: 'TRAX, FrontRunner, Salt Lake City transit, UTA, Blue Line, Red Line, Green Line, airport, Ogden to Provo',
  openGraph: {
    title: 'Salt Lake City UTA TRAX & FrontRunner Transit Guide',
    description: 'Discover Salt Lake City TRAX and FrontRunner. Direct airport access, ski bus connections, and regional rail.',
    url: 'https://metroguia.mx/salt-lake-city',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const estacionesDestacadas = estacionesSaltLakeCity.filter(e =>
  ['slc-temple-square', 'slc-university-medical-center', 'slc-airport-terminal-1', 'slc-sandy-civic-center', 'slc-draper-town-center', 'slc-provo-central', 'slc-ogden'].includes(e.slug)
);

export default function SaltLakeCityPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Salt Lake City', item: 'https://metroguia.mx/salt-lake-city/' }
    ]
  }

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #0055A4 0%, #003366 100%)',
        color: '#FFFFFF',
        padding: '80px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            margin: '0 0 16px 0',
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
          }}>
            Salt Lake City TRAX & FrontRunner
          </h1>
          <p style={{
            fontSize: '1.5rem',
            fontWeight: '500',
            margin: '0 0 24px 0',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
            opacity: '0.95',
            lineHeight: '1.4',
          }}>
            TRAX Blue · Red · Green · S-Line · FrontRunner
          </p>
          <p style={{
            fontSize: '1.125rem',
            fontWeight: '400',
            margin: '0',
            opacity: '0.9',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            Direct airport access, downtown hub, and regional rail to Ogden and Provo. 50+ stations across 5 lines.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section style={{
        backgroundColor: 'var(--surface)',
        padding: '48px 24px',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{
          maxWidth: '1000px',
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '32px',
        }}>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 6px 0', color: '#0055A4' }}>50+</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', margin: '0', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.05em' }}>Stations</p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 6px 0', color: '#0055A4' }}>5</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', margin: '0', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.05em' }}>Lines (3 TRAX + S-Line + FrontRunner)</p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 6px 0', color: '#0055A4' }}>15 min</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', margin: '0', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.05em' }}>Peak Frequency</p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 6px 0', color: '#0055A4' }}>$2.50</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', margin: '0', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.05em' }}>Base Fare</p>
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section style={{ padding: '48px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <SearchBar ciudad="salt-lake-city" />
        </div>
      </section>

      {/* FREE FARE ZONE */}
      <section style={{ padding: '48px 24px', backgroundColor: 'var(--surface-alt)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0 0 16px 0' }}>Free Fare Zone</h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.6', margin: '0 0 12px 0', maxWidth: '600px' }}>
            Ride free on TRAX and S-Line Streetcar within downtown Salt Lake City (9 stations: Temple Square, City Center, Gallivan Plaza, Courthouse, Library, Planetarium, Arena, Old Greektown, and Central Pointe).
          </p>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', margin: '0' }}>Valid on TRAX Blue, Red, and Green lines and S-Line Streetcar only. Travel beyond free zone requires payment.</p>
        </div>
      </section>

      {/* FEATURED STATIONS */}
      <section style={{ padding: '48px 24px' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', margin: '0 0 32px 0' }}>Featured Stations</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {estacionesDestacadas.slice(0, 6).map(e => (
              <Link href={`/salt-lake-city/station/${e.slug}`} key={e.slug} style={{ textDecoration: 'none' }}>
                <div style={{
                  padding: '24px',
                  backgroundColor: 'var(--surface)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--border)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  height: '100%',
                }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0 0 8px 0', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.1em' }}>
                    {e.linea.toUpperCase()}
                  </p>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 8px 0', color: 'var(--text)' }}>
                    {e.nombre}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', margin: '0', lineHeight: '1.5' }}>
                    {e.intro}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LINES GRID */}
      <section style={{ padding: '48px 24px', backgroundColor: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', margin: '0 0 32px 0' }}>TRAX & Transit Lines</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
          }}>
            {lineasSaltLakeCity.map(linea => (
              <Link href={`/salt-lake-city/line/${linea.id}`} key={linea.id} style={{ textDecoration: 'none' }}>
                <div style={{
                  padding: '20px',
                  backgroundColor: linea.color,
                  borderRadius: 'var(--radius)',
                  color: '#fff',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '800', margin: '0 0 8px 0', textTransform: 'capitalize' }}>
                    {linea.colorNombre}
                  </h3>
                  <p style={{ fontSize: '0.875rem', margin: '0 0 8px 0', opacity: 0.9 }}>
                    {linea.inicio} → {linea.fin}
                  </p>
                  <p style={{ fontSize: '0.75rem', opacity: 0.8, margin: '0', fontWeight: '600' }}>
                    {linea.total} stations
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FARE & PAYMENT */}
      <section style={{ padding: '48px 24px', backgroundColor: 'var(--bg)' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', margin: '0 0 32px 0' }}>Fares & Payment</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 16px 0' }}>Single Ride</h3>
              <p style={{ fontSize: '2rem', fontWeight: '800', color: '#0055A4', margin: '0 0 8px 0' }}>$2.50</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', margin: '0', lineHeight: '1.5' }}>
                Valid for 2 hours. Includes free transfer between any lines within the time window.
              </p>
            </div>
            <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 16px 0' }}>Day Pass</h3>
              <p style={{ fontSize: '2rem', fontWeight: '800', color: '#0055A4', margin: '0 0 8px 0' }}>$6.00</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', margin: '0', lineHeight: '1.5' }}>
                Unlimited rides for 24 hours on all TRAX, S-Line, and local buses.
              </p>
            </div>
            <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 16px 0' }}>FAREPAY Card</h3>
              <p style={{ fontSize: '2rem', fontWeight: '800', color: '#0055A4', margin: '0 0 8px 0' }}>Reloadable</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', margin: '0', lineHeight: '1.5' }}>
                UTA's contactless payment card. Load cash or passes. No expiration on stored value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AIRPORT ACCESS */}
      <section style={{ padding: '48px 24px', backgroundColor: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', margin: '0 0 24px 0' }}>Airport Access</h2>
          <div style={{ padding: '24px', backgroundColor: 'var(--bg)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', margin: '0 0 16px 0' }}>
              TRAX Green Line connects directly to Salt Lake City International Airport Terminal 1 every 15 minutes. Train opens at 4:30am for early flights.
            </p>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: '0', paddingLeft: '20px' }}>
              <li>Journey time: ~20 minutes to downtown</li>
              <li>Fare: $2.50 single ride or $6.00 day pass</li>
              <li>Baggage allowed (standard carry-on + checked)</li>
              <li>WiFi available at airport stations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* AFFILIATE CARD */}
      <section style={{ padding: '48px 24px', backgroundColor: 'var(--bg)' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <AffiliateTransportCard system="UTA TRAX" logo="🚆" url="https://www.rideuta.com" />
        </div>
      </section>

      {/* ADS */}
      <AdBannerLazy />
    </main>
  );
}
