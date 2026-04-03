import { lineasNewOrleans } from '@/data/new-orleans/lineas-detalle';
import { estacionesNewOrleans } from '@/data/new-orleans/estaciones';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';

export const metadata = {
  title: 'RTA Streetcar — New Orleans Transit | MetroGuia',
  description: 'RTA Streetcar guide: 4 lines, 36+ stations in New Orleans. Complete trip planner, schedule & fares.',
  keywords: 'RTA Streetcar, New Orleans transit, St. Charles Line, Canal Line, Riverfront Line, Rampart Line',
  openGraph: {
    title: 'RTA Streetcar — New Orleans Transit Guide',
    description: 'Navigate New Orleans with RTA Streetcar. Trip planner, fares, and station guide.',
    url: 'https://metroguia.mx/new-orleans',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const estacionesDestacadas = estacionesNewOrleans.filter(e =>
  ['new-orleans-canal-carondelet', 'new-orleans-poydras', 'new-orleans-lee-circle', 'new-orleans-st-charles-jackson'].includes(e.slug)
);

export default function NewOrleansPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'New Orleans', item: 'https://metroguia.mx/new-orleans/' }
    ]
  };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #00843D 0%, #00843Dcc 100%)',
        color: '#FFFFFF',
        padding: '80px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
            RTA Streetcar
          </h1>
          <p style={{ fontSize: '1.5rem', fontWeight: '500', margin: '0 0 24px 0', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', opacity: '0.95', lineHeight: '1.4' }}>
            4 Lines · 36+ Stations
          </p>
          <p style={{ fontSize: '1.125rem', fontWeight: '400', margin: '0', opacity: '0.9', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            New Orleans's RTA Streetcar — your guide to navigating the city by rail.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: 'var(--surface)', padding: '48px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', textAlign: 'center' }}>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#00843D', margin: '0 0 8px 0' }}>36+</p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>Stations</p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#00843D', margin: '0 0 8px 0' }}>4</p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>Active Lines</p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#00843D', margin: '0 0 8px 0' }}>10–20 min</p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>Frequency</p>
          </div>
        </div>
      </section>

      {/* TRIP PLANNER */}
      <section style={{ backgroundColor: 'var(--bg)', padding: '60px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '12px', textAlign: 'center', color: 'var(--text)' }}>
            Plan Your Route in New Orleans
          </h2>
          <p style={{ fontSize: '1rem', textAlign: 'center', marginBottom: '24px', color: 'var(--text-muted)' }}>
            Calculate the best route between RTA Streetcar stations
          </p>
          <SearchBar ciudad="new-orleans" />
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* FEATURED STATIONS */}
      <section style={{ backgroundColor: 'var(--bg)', padding: '80px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', margin: '0 0 48px 0', color: 'var(--text)', textAlign: 'center' }}>
            Featured Stations
          </h2>
          <div style={{ display: 'grid', gap: '24px' }}>
            {estacionesDestacadas.map((estacion, idx) => (
              <Link href={`/new-orleans/station/${estacion.slug}`} key={idx} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '28px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 8px 0', color: '#00843D' }}>
                    {estacion.nombre}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 8px 0' }}>
                    {Array.isArray(estacion.linea) ? `Lines ${estacion.linea.join(', ')}` : `Line ${estacion.linea}`}
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

      {/* PAYMENT */}
      <section style={{ backgroundColor: 'var(--bg)', padding: '80px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', margin: '0 0 48px 0', color: 'var(--text)', textAlign: 'center' }}>
            Payment & Passes
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <AffiliateTransportCard icon="🎫" titulo="Single Ride" descripcion="One-way trip on RTA Streetcar." precio="$1.25 USD" enlace="#" />
            <AffiliateTransportCard icon="📱" titulo="Mobile Pass" descripcion="Digital ticket via mobile app." precio="$1.25 USD" enlace="#" />
          </div>
        </div>
      </section>

      {/* LINES */}
      <section style={{ backgroundColor: 'var(--bg)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', margin: '0 0 48px 0', color: 'var(--text)', textAlign: 'center' }}>
            RTA Streetcar Lines
          </h2>
          <div style={{ display: 'grid', gap: '20px' }}>
            {lineasNewOrleans.map((linea, idx) => (
              <Link href={`/new-orleans/line/${linea.id}`} key={idx} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', borderLeft: `5px solid ${linea.color}`, border: '1px solid var(--border)', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '60px', height: '60px', backgroundColor: linea.color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.5rem', fontWeight: '700', textTransform: 'uppercase' }}>
                      {linea.id[0]}
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
