import { lineasKansasCity } from '@/data/kansas-city/lineas-detalle';
import { estacionesKansasCity } from '@/data/kansas-city/estaciones';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import AffiliateMundial from '@/app/components/AffiliateMundial';

export const metadata = {
  title: 'Kansas City Streetcar & Transit Guide — Free Streetcar + 200 FIFA Buses | MetroGuia',
  description: 'Kansas City Streetcar guide: FREE modern streetcar loop in Midtown & Downtown, plus 200 leased buses for FIFA 2026. Complete transit guide for visitors. Note: No direct rail to Arrowhead Stadium. Shuttle and parking info included.',
  keywords: 'Kansas City Streetcar, KC Transit, free streetcar, transportation Kansas City, FIFA 2026, Arrowhead Stadium',
  openGraph: {
    title: 'Kansas City Streetcar — Free Transit + FIFA 2026',
    description: 'Explore Kansas City\'s FREE Streetcar in Midtown & Downtown. Note: Arrowhead Stadium requires shuttle or rideshare.',
    url: 'https://metroguia.mx/kansas-city',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const estacionesDestacadas = estacionesKansasCity.filter(e =>
  ['crown-center', 'union-station', 'crossroads', 'power-light', 'river-market'].includes(e.slug)
);

export default function KansasCityPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Kansas City', item: 'https://metroguia.mx/kansas-city/' }
    ]
  };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0066CC 0%, #003399 100%)',
          color: '#FFFFFF',
          padding: '80px 24px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
            Kansas City Streetcar & Transit
          </h1>
          <p style={{ fontSize: '1.5rem', fontWeight: '500', margin: '0 0 24px 0', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', opacity: '0.95', lineHeight: '1.4' }}>
            Free Modern Streetcar + 200 FIFA Buses
          </p>
          <p style={{ fontSize: '1.125rem', fontWeight: '400', margin: '0', opacity: '0.9', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            Kansas City's modern streetcar serves Midtown & Downtown. Extra buses deployed for FIFA 2026 matches.
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
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0066CC', margin: '0 0 8px 0' }}>
              3.2
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Mile Streetcar Loop
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0066CC', margin: '0 0 8px 0' }}>
              FREE
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Streetcar Cost
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0066CC', margin: '0 0 8px 0' }}>
              200+
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              FIFA Buses Leased
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0066CC', margin: '0 0 8px 0' }}>
              6:00–23:00
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Daily Operations
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
          <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '12px', textAlign: 'center', color: 'var(--text)' }}>
            🚊 Plan Your Kansas City Route
          </h2>
          <p style={{ fontSize: '1rem', textAlign: 'center', marginBottom: '24px', color: 'var(--text-muted)' }}>
            Calculate the best route using streetcar & transit
          </p>
          <SearchBar ciudad="kansas-city" />
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* FIFA 2026 STADIUM ACCESS */}
      <section
        style={{
          backgroundColor: 'var(--surface)',
          padding: '60px 24px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '32px', textAlign: 'center', color: 'var(--text)' }}>
            ⚽ Getting to Arrowhead Stadium
          </h2>
          <div style={{ padding: '32px', backgroundColor: 'var(--bg)', borderLeft: '4px solid #0066CC', borderRadius: 'var(--radius)', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
              Critical: No Direct Rail to Arrowhead
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0 0 16px 0', lineHeight: '1.8' }}>
              Arrowhead Stadium (Jackson County sports complex) is <strong>not directly served</strong> by streetcar or light rail. Dedicated shuttle buses and additional transit will be deployed for FIFA 2026 matches.
            </p>
            <ul style={{ fontSize: '1rem', color: 'var(--text)', margin: '0', paddingLeft: '20px', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '12px' }}>
                <strong>FIFA Shuttle Service:</strong> Official buses will operate from Union Station & Downtown KC to Arrowhead on match days (included with ticket).
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Regional Transit:</strong> Additional RideKC buses deployed for the tournament period.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Rideshare:</strong> Uber/Lyft ~20 minutes from Downtown ($12–18 USD).
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Parking:</strong> Large on-site parking available (prepare for traffic on match days).
              </li>
              <li>
                <strong>Park & Ride:</strong> Use downtown parking and take FIFA shuttle to stadium.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* STREETCAR & TRANSIT INFO */}
      <section
        style={{
          backgroundColor: 'var(--bg)',
          padding: '80px 24px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '48px', textAlign: 'center', color: 'var(--text)' }}>
            Streetcar & Transit
          </h2>

          <div style={{ display: 'grid', gap: '48px' }}>
            {lineasKansasCity.map((linea) => (
              <div key={linea.id}>
                <Link href={`/kansas-city/line/${linea.id}`} style={{ textDecoration: 'none' }}>
                  <div
                    style={{
                      padding: '32px',
                      backgroundColor: 'var(--surface)',
                      border: `2px solid ${linea.color}`,
                      borderRadius: 'var(--radius)',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                      <span
                        style={{
                          width: '48px',
                          height: '48px',
                          backgroundColor: linea.color,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          fontSize: '1.5rem',
                          fontWeight: '800',
                        }}
                      >
                        {linea.id.charAt(0)}
                      </span>
                      <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0', color: 'var(--text)' }}>
                          {linea.colorNombre}
                        </h3>
                      </div>
                    </div>
                    <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0 0 16px 0' }}>
                      {linea.inicio} → {linea.fin}
                    </p>
                    <div style={{ display: 'flex', gap: '24px', fontSize: '0.95rem', color: 'var(--text)' }}>
                      <span><strong>{linea.estaciones.length}</strong> stations</span>
                      <span><strong>FREE</strong> fare</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED STATIONS */}
      <section
        style={{
          backgroundColor: 'var(--surface)',
          padding: '80px 24px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '48px', textAlign: 'center', color: 'var(--text)' }}>
            Featured Stations
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {estacionesDestacadas.map((est) => (
              <Link key={est.slug} href={`/kansas-city/station/${est.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '24px', backgroundColor: 'var(--bg)', borderRadius: 'var(--radius)', borderLeft: '4px solid #0066CC', cursor: 'pointer' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                    {est.nombre}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0', lineHeight: '1.6' }}>
                    {est.intro || `Explore ${est.nombre} and nearby attractions.`}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICAL INFO */}
      <section style={{ backgroundColor: 'var(--bg)', padding: '80px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '32px', color: 'var(--text)' }}>
            Practical Information
          </h2>
          <div style={{ display: 'grid', gap: '24px' }}>
            <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                Streetcar Hours
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0' }}>
                6:00 AM – 11:00 PM daily (extended hours on event days)
              </p>
            </div>
            <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                Streetcar Cost
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0' }}>
                <strong>COMPLETELY FREE</strong> — No charge for streetcar rides
              </p>
            </div>
            <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                Regional Bus System
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0' }}>
                RideKC buses cover wider metro area. Single fare: $2 USD (cash) or $1.50 with card.
              </p>
            </div>
            <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                Accessibility
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0' }}>
                Streetcar & transit hubs feature ADA-compliant access, elevators, and accessible facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AffiliateMundial />
    </main>
  );
}
