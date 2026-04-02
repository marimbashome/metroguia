import { lineasDallas } from '@/data/dallas/lineas-detalle';
import { estacionesDallas } from '@/data/dallas/estaciones';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import AffiliateMundial from '@/app/components/AffiliateMundial';

export const metadata = {
  title: 'Dallas DART Light Rail — 5 Lines + 62 Stations | MetroGuia',
  description: 'Dallas DART Light Rail guide: 5 lines, 62 stations serving Downtown Dallas, DFW Airport, and Dallas neighborhoods. Complete transit guide for FIFA 2026 visitors. Important: DART does NOT reach AT&T Stadium in Arlington. Rideshare and shuttle information included.',
  keywords: 'Dallas DART, Light Rail, transit Dallas, transportation, DFW Airport, FIFA 2026, stadium access',
  openGraph: {
    title: 'Dallas DART Light Rail — Complete Transit Guide',
    description: 'Explore Dallas DART Light Rail: 5 lines connecting Downtown, DFW, and neighborhoods. Note: AT&T Stadium in Arlington not on DART system.',
    url: 'https://metroguia.mx/dallas',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const estacionesDestacadas = estacionesDallas.filter(e =>
  ['downtown-dallas', 'west-end', 'pearl-district', 'arapaho-center', 'dfw-airport'].includes(e.slug)
);

export default function DallasPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Dallas', item: 'https://metroguia.mx/dallas/' }
    ]
  };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0066CC 0%, #0052A3 100%)',
          color: '#FFFFFF',
          padding: '80px 24px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
            Dallas DART Light Rail
          </h1>
          <p style={{ fontSize: '1.5rem', fontWeight: '500', margin: '0 0 24px 0', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', opacity: '0.95', lineHeight: '1.4' }}>
            5 Lines · 62 Stations · Downtown, DFW Airport, and Beyond
          </p>
          <p style={{ fontSize: '1.125rem', fontWeight: '400', margin: '0', opacity: '0.9', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            Dallas' rapid transit system serving Downtown, DFW Airport terminals, and surrounding neighborhoods.
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
              62
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Total Stations
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0066CC', margin: '0 0 8px 0' }}>
              5
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Light Rail Lines
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0066CC', margin: '0 0 8px 0' }}>
              ~82
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Miles of Track
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0066CC', margin: '0 0 8px 0' }}>
              5:00–23:30
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Operating Hours
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
            🚆 Plan Your Dallas Route
          </h2>
          <p style={{ fontSize: '1rem', textAlign: 'center', marginBottom: '24px', color: 'var(--text-muted)' }}>
            Calculate the best DART Light Rail route between stations
          </p>
          <SearchBar ciudad="dallas" />
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
            ⚽ Getting to AT&T Stadium
          </h2>
          <div style={{ padding: '32px', backgroundColor: 'var(--bg)', borderLeft: '4px solid #0066CC', borderRadius: 'var(--radius)', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
              Critical: DART Does NOT Serve AT&T Stadium
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0 0 16px 0', lineHeight: '1.8' }}>
              AT&T Stadium (Arlington, Texas) is <strong>NOT on the DART Light Rail system</strong>. Arlington is in a separate transit jurisdiction and requires separate transportation from Dallas proper.
            </p>
            <ul style={{ fontSize: '1rem', color: 'var(--text)', margin: '0', paddingLeft: '20px', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '12px' }}>
                <strong>FIFA Shuttle Service:</strong> Official buses will operate from Downtown Dallas (Victory Station area) to AT&T Stadium on match days.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Rideshare:</strong> Uber/Lyft ~30 minutes from Downtown Dallas ($20–30 USD).
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Rental Car:</strong> I-30 West to Arlington (30–40 minutes, heavy traffic on game days).
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Tour Operators:</strong> Many Dallas hotels will offer pre-game charter buses.
              </li>
              <li>
                <strong>Transit to DFW:</strong> DART reaches DFW Airport from Downtown. Consider staying near Downtown and using FIFA shuttle.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* LÍNEAS Y ESTACIONES */}
      <section
        style={{
          backgroundColor: 'var(--bg)',
          padding: '80px 24px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '48px', textAlign: 'center', color: 'var(--text)' }}>
            Transit Lines & Stations
          </h2>

          <div style={{ display: 'grid', gap: '48px' }}>
            {lineasDallas.map((linea) => (
              <div key={linea.id}>
                <Link href={`/dallas/line/${linea.id}`} style={{ textDecoration: 'none' }}>
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
                        {linea.id}
                      </span>
                      <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0', color: 'var(--text)' }}>
                          Line {linea.id} — {linea.nombre}
                        </h3>
                      </div>
                    </div>
                    <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0 0 16px 0' }}>
                      {linea.inicio} → {linea.fin}
                    </p>
                    <div style={{ display: 'flex', gap: '24px', fontSize: '0.95rem', color: 'var(--text)' }}>
                      <span><strong>{linea.estaciones.length}</strong> stations</span>
                      <span><strong>$2.50</strong> fare</span>
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
              <Link key={est.slug} href={`/dallas/station/${est.slug}`} style={{ textDecoration: 'none' }}>
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
                Operating Hours
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0' }}>
                5:00 AM – 11:30 PM (varies by line on weekends)
              </p>
            </div>
            <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                Fares
              </h3>
              <ul style={{ fontSize: '1rem', color: 'var(--text)', margin: '0', paddingLeft: '20px' }}>
                <li>Single Ride: $2.50 USD</li>
                <li>Day Pass: $5 USD</li>
                <li>DART Card (rechargeable): Standard rates</li>
              </ul>
            </div>
            <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                Payment
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0' }}>
                DART Card (rechargeable), cash at vending machines, or contactless tap payment at select stations.
              </p>
            </div>
            <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                Accessibility
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0' }}>
                All DART stations are ADA-accessible with elevators, ramps, and accessible restrooms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AffiliateMundial />
    </main>
  );
}
