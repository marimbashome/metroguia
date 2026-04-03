import { CITIES_CONFIG } from '@/data/cities-config';
import { lineasVANCOUVER } from '@/data/vancouver/lineas-detalle';
import { estacionesVANCOUVER } from '@/data/vancouver/estaciones';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import AffiliateMundial from '@/app/components/AffiliateMundial';

export const metadata = {
  title: 'Vancouver SkyTrain & Transit — 3 Lines + Stadium-Chinatown to BC Place | MetroGuia',
  description: 'Vancouver SkyTrain & TransLink guide: 3 rapid transit lines, streetcars, buses. Stadium-Chinatown station serves BC Place. Complete transit guide for FIFA 2026. Currency: CAD. Compass Card recommended.',
  keywords: 'Vancouver SkyTrain, TransLink, Vancouver transit, Compass Card, BC Place, FIFA 2026, Canada',
  openGraph: {
    title: 'Vancouver SkyTrain — Complete Transit Guide',
    description: 'Explore Vancouver SkyTrain and TransLink. Stadium-Chinatown = BC Place. Prices in CAD.',
    url: 'https://metroguia.mx/vancouver',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const estacionesDestacadas = estacionesVANCOUVER.filter(e =>
  ['stadium-chinatown', 'downtown-vancouver', 'granville', 'broadway-city-hall', 'waterfront'].includes(e.slug)
);

export default function VancouverPage() {
  const cityConfig = CITIES_CONFIG.vancouver;
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Vancouver', item: 'https://metroguia.mx/vancouver/' }
    ]
  };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section
        style={{
          background: 'linear-gradient(135deg, #00A3E0 0%, #0078B0 100%)',
          color: '#FFFFFF',
          padding: '80px 24px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
            Vancouver SkyTrain & Transit
          </h1>
          <p style={{ fontSize: '1.5rem', fontWeight: '500', margin: '0 0 24px 0', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', opacity: '0.95', lineHeight: '1.4' }}>
            3 Rapid Transit Lines + 600 Extra FIFA Buses
          </p>
          <p style={{ fontSize: '1.125rem', fontWeight: '400', margin: '0', opacity: '0.9', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            Vancouver's modern SkyTrain serves Downtown, Airport, and surroundings. Extra buses deployed for FIFA 2026.
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
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#00A3E0', margin: '0 0 8px 0' }}>
              79
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              SkyTrain Stations
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#00A3E0', margin: '0 0 8px 0' }}>
              3
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Rapid Transit Lines
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#00A3E0', margin: '0 0 8px 0' }}>
              600+
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              FIFA Extra Buses
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#00A3E0', margin: '0 0 8px 0' }}>
              5:00–1:00
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
            🚆 Plan Your Vancouver Route
          </h2>
          <p style={{ fontSize: '1rem', textAlign: 'center', marginBottom: '24px', color: 'var(--text-muted)' }}>
            Calculate the best SkyTrain & TransLink route between stations
          </p>
          <SearchBar ciudad="vancouver" />
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
            ⚽ Getting to BC Place Stadium
          </h2>
          <div style={{ padding: '32px', backgroundColor: 'var(--bg)', borderLeft: '4px solid #00A3E0', borderRadius: 'var(--radius)', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
              Direct SkyTrain to BC Place
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0 0 16px 0', lineHeight: '1.8' }}>
              <strong>Stadium-Chinatown Station</strong> is <strong>directly at BC Place Stadium</strong>. This is the most convenient way to reach FIFA 2026 matches.
            </p>
            <ul style={{ fontSize: '1rem', color: 'var(--text)', margin: '0', paddingLeft: '20px', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '12px' }}>
                <strong>SkyTrain from Downtown:</strong> Fast, direct service to Stadium-Chinatown (5–15 min depending on origin). CAD $3.20–5.50.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Extra Bus Service:</strong> TransLink adding 600+ extra buses during FIFA. Many routes serve BC Place.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Compass Card:</strong> Strongly recommended. CAD $6 card + load balance. Works on all TransLink services.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Rideshare:</strong> Uber/Lyft ~10 minutes from Downtown Vancouver (CAD $10–18 depending on traffic).
              </li>
              <li>
                <strong>Parking:</strong> BC Place has limited parking. SkyTrain is strongly recommended to avoid traffic.
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
            SkyTrain Lines & Stations
          </h2>

          <div style={{ display: 'grid', gap: '48px' }}>
            {lineasVANCOUVER.map((linea) => (
              <div key={linea.id}>
                <Link href={`/vancouver/line/${linea.id}`} style={{ textDecoration: 'none' }}>
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
                      <span><strong>CAD $3.20+</strong> fare</span>
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
              <Link key={est.slug} href={`/vancouver/station/${est.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '24px', backgroundColor: 'var(--bg)', borderRadius: 'var(--radius)', borderLeft: '4px solid #00A3E0', cursor: 'pointer' }}>
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
                5:00 AM – 1:00 AM (extended hours on event days during FIFA)
              </p>
            </div>
            <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                Fares (CAD)
              </h3>
              <ul style={{ fontSize: '1rem', color: 'var(--text)', margin: '0', paddingLeft: '20px' }}>
                <li>Single Ride: CAD $3.20–5.50 (distance-based)</li>
                <li>Day Pass: CAD $11.50</li>
                <li>Compass Card (rechargeable): Same rates as cash</li>
              </ul>
            </div>
            <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                Compass Card
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0' }}>
                Smart card for SkyTrain, buses, and SeaBus. Highly recommended for visitors. Available at stations and retailers. CAD $6 card + load balance.
              </p>
            </div>
            <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                Accessibility
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0' }}>
                All SkyTrain stations feature elevators, ramps, and accessible facilities. Fully ADA/Canadian standard compliant.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AffiliateMundial />
    </main>
  );
}
