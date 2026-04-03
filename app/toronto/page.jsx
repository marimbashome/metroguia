import { CITIES_CONFIG } from '@/data/cities-config';
import { lineasTORONTO } from '@/data/toronto/lineas-detalle';
import { estacionesTORONTO } from '@/data/toronto/estaciones';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import AffiliateMundial from '@/app/components/AffiliateMundial';

export const metadata = {
  title: 'Toronto TTC Subway & GO Transit — 4 Lines + Express to BMO Field | MetroGuia',
  description: 'Toronto TTC Subway & GO Transit guide: 4 subway lines, streetcars, buses. Exhibition GO station reaches BMO Field. Complete transit guide for FIFA 2026 visitors. Currency: CAD. Presto card recommended.',
  keywords: 'Toronto TTC, GO Transit, Toronto subway, Presto card, BMO Field, FIFA 2026, Canada',
  openGraph: {
    title: 'Toronto TTC & GO Transit — Complete Guide',
    description: 'Explore Toronto\'s TTC Subway and GO Transit. Exhibition GO = BMO Field. Prices in CAD.',
    url: 'https://metroguia.mx/toronto',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const estacionesDestacadas = estacionesTORONTO.filter(e =>
  ['union-station', 'downtown-toronto', 'exhibition-go', 'yonge-dundas', 'bloor-yonge'].includes(e.slug)
);

export default function TorontoPage() {
  const cityConfig = CITIES_CONFIG.toronto;
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Toronto', item: 'https://metroguia.mx/toronto/' }
    ]
  };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section
        style={{
          background: 'linear-gradient(135deg, #D41E3A 0%, #9d0f27 100%)',
          color: '#FFFFFF',
          padding: '80px 24px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
            Toronto TTC & GO Transit
          </h1>
          <p style={{ fontSize: '1.5rem', fontWeight: '500', margin: '0 0 24px 0', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', opacity: '0.95', lineHeight: '1.4' }}>
            4 Subway Lines + Streetcars, Buses & Regional Rail
          </p>
          <p style={{ fontSize: '1.125rem', fontWeight: '400', margin: '0', opacity: '0.9', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            Canada's largest transit system. Exhibition GO Station connects directly to BMO Field for FIFA 2026.
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
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#D41E3A', margin: '0 0 8px 0' }}>
              80+
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Subway Stations
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#D41E3A', margin: '0 0 8px 0' }}>
              4
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Subway Lines
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#D41E3A', margin: '0 0 8px 0' }}>
              CAD $3.25
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Single Fare
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#D41E3A', margin: '0 0 8px 0' }}>
              5:30–1:30
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
            🚇 Plan Your Toronto Route
          </h2>
          <p style={{ fontSize: '1rem', textAlign: 'center', marginBottom: '24px', color: 'var(--text-muted)' }}>
            Calculate the best TTC & GO Transit route between stations
          </p>
          <SearchBar ciudad="toronto" />
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
            ⚽ Getting to BMO Field
          </h2>
          <div style={{ padding: '32px', backgroundColor: 'var(--bg)', borderLeft: '4px solid #D41E3A', borderRadius: 'var(--radius)', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
              Direct Transit to BMO Field
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0 0 16px 0', lineHeight: '1.8' }}>
              <strong>Exhibition GO Station</strong> is <strong>directly adjacent to BMO Field</strong>. This is the easiest way to reach the stadium for FIFA 2026.
            </p>
            <ul style={{ fontSize: '1rem', color: 'var(--text)', margin: '0', paddingLeft: '20px', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '12px' }}>
                <strong>GO Transit from Union Station:</strong> Direct express service to Exhibition GO (~10 min). CAD $3.65–7.30 depending on distance paid.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Streetcar (504, 509, 511):</strong> Local streetcars serve Exhibition area.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Presto Card:</strong> Highly recommended. CAD $6 card + load balance. Works on TTC, GO, and all regional transit.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Rideshare:</strong> Uber/Lyft ~15 minutes from Downtown Toronto (CAD $15–25 depending on traffic).
              </li>
              <li>
                <strong>Parking:</strong> BMO Field has on-site parking (CAD $15–20). Consider GO Transit to avoid traffic.
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
            Subway Lines & Stations
          </h2>

          <div style={{ display: 'grid', gap: '48px' }}>
            {lineasTORONTO.map((linea) => (
              <div key={linea.id}>
                <Link href={`/toronto/line/${linea.id}`} style={{ textDecoration: 'none' }}>
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
                          Line {linea.id} — {linea.colorNombre}
                        </h3>
                      </div>
                    </div>
                    <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0 0 16px 0' }}>
                      {linea.inicio} → {linea.fin}
                    </p>
                    <div style={{ display: 'flex', gap: '24px', fontSize: '0.95rem', color: 'var(--text)' }}>
                      <span><strong>{linea.estaciones.length}</strong> stations</span>
                      <span><strong>CAD $3.25</strong> fare</span>
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
              <Link key={est.slug} href={`/toronto/station/${est.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '24px', backgroundColor: 'var(--bg)', borderRadius: 'var(--radius)', borderLeft: '4px solid #D41E3A', cursor: 'pointer' }}>
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
                5:30 AM – 1:30 AM (24-hour service planned during FIFA)
              </p>
            </div>
            <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                Fares (CAD)
              </h3>
              <ul style={{ fontSize: '1rem', color: 'var(--text)', margin: '0', paddingLeft: '20px' }}>
                <li>Single Ride: CAD $3.25</li>
                <li>Day Pass: CAD $14</li>
                <li>Presto Card (rechargeable): CAD $3.25 per ride or use cash load</li>
              </ul>
            </div>
            <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                Presto Card
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0' }}>
                Smart card system for TTC, GO Transit, and regional transit. Recommended for visitors. Available at stations and retailers.
              </p>
            </div>
            <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                Accessibility
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0' }}>
                Most TTC stations feature elevators, ramps, and accessible facilities. GO stations are fully accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AffiliateMundial />
    </main>
  );
}
