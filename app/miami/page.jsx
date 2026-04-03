import { CITIES_CONFIG } from '@/data/cities-config';
import { lineasMiami } from '@/data/miami/lineas-detalle';
import { estacionesMiami } from '@/data/miami/estaciones';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import AffiliateMundial from '@/app/components/AffiliateMundial';

export const metadata = {
  title: 'Miami Metrorail & Metromover — Free Transit + 2 Lines · 22 Stations | MetroGuia',
  description: 'Miami Metrorail & Metromover guide: Metrorail (2 lines, 23 stations) + Metromover (free, 2 lines, 22 stations). Downtown Miami, PortMiami cruise ships, American Airlines Arena. Complete transit guide for FIFA 2026 visitors. Note: No direct rail to Hard Rock Stadium (Broward).',
  keywords: 'Miami Metrorail, Metromover, free transit Miami, transportation Miami, PortMiami, Downtown Miami, FIFA 2026',
  openGraph: {
    title: 'Miami Metrorail & Metromover — Free Transit Guide',
    description: 'Explore Miami\'s Metrorail and Metromover. Metromover is FREE. No direct route to Hard Rock Stadium.',
    url: 'https://metroguia.mx/miami',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const estacionesDestacadas = estacionesMiami.filter(e =>
  ['miami-central', 'downtown-miami', 'brickell', 'omni', 'portmiami'].includes(e.slug)
);

export default function MiamiPage() {
  const cityConfig = CITIES_CONFIG.miami;
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
        name: 'Miami',
        item: 'https://metroguia.mx/miami/'
      }
    ]
  };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section
        style={{
          background: 'linear-gradient(135deg, #FF6B35 0%, #d94a1f 100%)',
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
            Miami Metrorail & Metromover
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
            Metromover is FREE · 2 Lines + 45 Stations Total
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
            Downtown Miami, PortMiami, Brickell, and Overtown transit hub. Fast connections to cruise ships and attractions.
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
              45
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Total Stations
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#FF6B35', margin: '0 0 8px 0' }}>
              4
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Transit Lines
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#FF6B35', margin: '0 0 8px 0' }}>
              FREE
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Metromover Cost
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#FF6B35', margin: '0 0 8px 0' }}>
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
          <h2
            style={{
              fontSize: '1.75rem',
              fontWeight: '800',
              marginBottom: '12px',
              textAlign: 'center',
              color: 'var(--text)',
            }}
          >
            🚇 Plan Your Miami Route
          </h2>
          <p
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              marginBottom: '24px',
              color: 'var(--text-muted)',
            }}
          >
            Calculate the best route between Miami transit stations
          </p>
          <SearchBar ciudad="miami" />
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
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '800',
              marginBottom: '32px',
              textAlign: 'center',
              color: 'var(--text)',
            }}
          >
            ⚽ Getting to Hard Rock Stadium
          </h2>
          <div
            style={{
              padding: '32px',
              backgroundColor: 'var(--bg)',
              borderLeft: '4px solid #FF6B35',
              borderRadius: 'var(--radius)',
              marginBottom: '32px',
            }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
              Important: No Direct Rail Access
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0 0 16px 0', lineHeight: '1.8' }}>
              Hard Rock Stadium (Miami Gardens, Broward County) is <strong>not directly accessible</strong> by Metrorail or Metromover. The transit system serves Miami-Dade County only.
            </p>
            <ul style={{ fontSize: '1rem', color: 'var(--text)', margin: '0', paddingLeft: '20px', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '12px' }}>
                <strong>FIFA Shuttle Service:</strong> Official buses will run from transit hubs (Miami Central, Downtown) to Hard Rock Stadium on match days.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Rideshare:</strong> Uber/Lyft ~25 minutes from Downtown Miami ($15–25 USD).
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Rental Car:</strong> I-95 North to Broward (30–40 minutes during heavy traffic).
              </li>
              <li>
                <strong>Tour Operators:</strong> Many hotels offer pre-match charter buses from Miami Beach.
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
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '800',
              marginBottom: '48px',
              textAlign: 'center',
              color: 'var(--text)',
            }}
          >
            Transit Lines & Stations
          </h2>

          <div style={{ display: 'grid', gap: '48px' }}>
            {lineasMiami.map((linea) => (
              <div key={linea.id}>
                <Link href={`/miami/line/${linea.id}`} style={{ textDecoration: 'none' }}>
                  <div
                    style={{
                      padding: '32px',
                      backgroundColor: 'var(--surface)',
                      border: `2px solid ${linea.color}`,
                      borderRadius: 'var(--radius)',
                      cursor: 'pointer',
                      transition: 'transform 0.2s, box-shadow 0.2s',
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
                          Line {linea.id} — {linea.colorNombre}
                        </h3>
                      </div>
                    </div>
                    <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0 0 16px 0' }}>
                      {linea.inicio} → {linea.fin}
                    </p>
                    <div style={{ display: 'flex', gap: '24px', fontSize: '0.95rem', color: 'var(--text)' }}>
                      <span><strong>{linea.estaciones.length}</strong> stations</span>
                      <span><strong>{linea.color === '#00B4D8' ? 'FREE' : '$2.75'}</strong> fare</span>
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
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '800',
              marginBottom: '48px',
              textAlign: 'center',
              color: 'var(--text)',
            }}
          >
            Featured Stations
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
            }}
          >
            {estacionesDestacadas.map((est) => (
              <Link key={est.slug} href={`/miami/station/${est.slug}`} style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    padding: '24px',
                    backgroundColor: 'var(--bg)',
                    borderRadius: 'var(--radius)',
                    borderLeft: '4px solid #FF6B35',
                    cursor: 'pointer',
                  }}
                >
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
      <section
        style={{
          backgroundColor: 'var(--bg)',
          padding: '80px 24px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2
            style={{
              fontSize: '1.75rem',
              fontWeight: '800',
              marginBottom: '32px',
              color: 'var(--text)',
            }}
          >
            Practical Information
          </h2>

          <div style={{ display: 'grid', gap: '24px' }}>
            <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                Operating Hours
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0' }}>
                Metrorail: 5:00 AM – 11:30 PM | Metromover: 5:00 AM – 11:00 PM (varies by weekend)
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                Fares
              </h3>
              <ul style={{ fontSize: '1rem', color: 'var(--text)', margin: '0', paddingLeft: '20px' }}>
                <li>Metrorail: $2.75 USD single ride (day pass: $6.25 USD)</li>
                <li>Metromover: FREE (Downtown loop)</li>
              </ul>
            </div>

            <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                Payment
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0' }}>
                EASY Card (rechargeable contactless card) or mobile ticketing via Easy Pay app. No cash accepted on trains.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                Accessibility
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0' }}>
                All Metrorail and Metromover stations are ADA-compliant with elevators, ramps, and accessible restrooms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AffiliateMundial />
    </main>
  );
}
