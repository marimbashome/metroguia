import { estacionesDC } from '@/data/washington-dc/estaciones';
import { lineasDC } from '@/data/washington-dc/lineas-detalle';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import StationSchema from '@/app/components/StationSchema';

const LINE_COLORS = {
  'red': '#BF0D3E',
  'orange': '#ED8B00',
  'blue': '#009CDE',
  'yellow': '#FFD100',
  'green': '#00B140',
  'silver': '#919D9D',
};

export async function generateStaticParams() {
  return estacionesDC.map((estacion) => ({
    slug: estacion.slug,
  }));
}

export async function generateMetadata({ params }) {
  const estacion = estacionesDC.find((e) => e.slug === params.slug);
  if (!estacion) {
    return {
      title: 'Station not found',
      description: 'The requested station does not exist.',
    };
  }
  return {
    title: estacion.seo_title,
    description: estacion.meta_description,
    openGraph: {
      title: estacion.seo_title,
      description: estacion.meta_description,
      url: `https://metroguia.mx/washington-dc/station/${estacion.slug}`,
    },
  };
}

export default function StationWashingtonDC({ params }) {
  const estacion = estacionesDC.find((e) => e.slug === params.slug);

  if (!estacion) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--danger)' }}>Station not found</h1>
        <Link href="/washington-dc">
          <button style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: '#BF0D3E', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            Back to Washington DC
          </button>
        </Link>
      </main>
    );
  }

  const lineaStr = Array.isArray(estacion.linea) ? estacion.linea.join(',') : estacion.linea;
  const lineIds = lineaStr.split(',').map(l => l.trim().toLowerCase());
  const lineasEstacion = lineIds.map((lineId) => lineasDC.find((l) => l.id === lineId)).filter(Boolean);
  const colorPrincipal = lineasEstacion.length > 0 ? LINE_COLORS[lineasEstacion[0].id] || '#BF0D3E' : '#BF0D3E';

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <StationSchema station={estacion.nombre} city="Washington, DC" sistema="WMATA" slug={estacion.slug} />

      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg, ${colorPrincipal} 0%, ${colorPrincipal}cc 100%)`, color: colorPrincipal === '#FFD100' ? '#000' : '#fff', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.9rem', margin: '0 0 16px 0', opacity: '0.9', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {estacion.borough}
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.1' }}>
            {estacion.nombre}
          </h1>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {lineasEstacion.map((linea) => (
              <span key={linea.id} style={{ padding: '6px 14px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 'var(--radius-full)', fontSize: '0.9rem', fontWeight: '700' }}>
                {linea.colorNombre}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT GRID */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px', marginBottom: '60px' }}>
          {/* LEFT: Main Content */}
          <div>
            {/* Description */}
            {estacion.descripcion_turistica && (
              <div style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
                  About This Station
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--text)', margin: '0' }}>
                  {estacion.descripcion_turistica}
                </p>
              </div>
            )}

            {/* POIs */}
            {estacion.pois && typeof estacion.pois === 'object' && Array.isArray(estacion.pois) && estacion.pois.length > 0 && (
              <div style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
                  Nearby Attractions
                </h2>
                <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                  {estacion.pois.map((poi, idx) => (
                    <li key={idx} style={{ padding: '12px 0', borderBottom: '1px solid var(--border)', fontSize: '0.95rem', color: 'var(--text)' }}>
                      <span style={{ fontWeight: '600', color: colorPrincipal }}>•</span> {typeof poi === 'object' ? poi.nombre : poi}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Nearby Stations */}
            {estacion.lugares_cercanos && typeof estacion.lugares_cercanos === 'object' && Object.keys(estacion.lugares_cercanos).length > 0 && (
              <div style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
                  Nearby Locations
                </h2>
                {typeof estacion.lugares_cercanos === 'object' && Object.entries(estacion.lugares_cercanos).map(([categoria, lugares]) => (
                  <div key={categoria} style={{ marginBottom: '16px' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: '0 0 8px 0', textTransform: 'capitalize', color: 'var(--text-dim)' }}>
                      {categoria}
                    </h3>
                    <ul style={{ listStyle: 'none', padding: '0 0 0 16px', margin: '0' }}>
                      {Array.isArray(lugares) && lugares.map((lugar, idx) => (
                        <li key={idx} style={{ fontSize: '0.9rem', color: 'var(--text)', paddingBottom: '4px' }}>
                          {typeof lugar === 'object' ? lugar.nombre : lugar}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Tips */}
            {estacion.tips && typeof estacion.tips === 'object' && Array.isArray(estacion.tips) && estacion.tips.length > 0 && (
              <div style={{ backgroundColor: 'var(--surface)', padding: '24px', borderRadius: 'var(--radius)', marginBottom: '40px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                  Travel Tips
                </h3>
                <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                  {estacion.tips.map((tip, idx) => (
                    <li key={idx} style={{ padding: '8px 0', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                      <span style={{ fontWeight: '600', color: colorPrincipal }}>→</span> {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Mundial */}
            {estacion.mundial_relevancia && (
              <div style={{ backgroundColor: `${colorPrincipal}15`, padding: '24px', borderRadius: 'var(--radius)', borderLeft: `4px solid ${colorPrincipal}`, marginBottom: '40px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', margin: '0 0 12px 0', color: colorPrincipal }}>
                  About This Location
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text)', margin: '0', lineHeight: '1.6' }}>
                  {estacion.mundial_relevancia}
                </p>
              </div>
            )}

            {/* Accessibility */}
            {estacion.accesibilidad && typeof estacion.accesibilidad === 'object' && (
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                  Accessibility
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0' }}>
                  {estacion.accesibilidad.notas || 'Accessible'}
                </p>
              </div>
            )}
          </div>

          {/* RIGHT: Sidebar */}
          <div>
            {/* Quick Info */}
            <div className="card" style={{ padding: '24px', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '0.8rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Station Info
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 4px 0', fontWeight: '600', letterSpacing: '0.05em' }}>Lines</p>
                  <p style={{ fontSize: '0.95rem', fontWeight: '700', margin: '0', color: colorPrincipal }}>
                    {lineasEstacion.map((l) => l.colorNombre).join(', ')}
                  </p>
                </div>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '12px' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 4px 0', fontWeight: '600', letterSpacing: '0.05em' }}>Location</p>
                  <p style={{ fontSize: '0.95rem', fontWeight: '600', margin: '0' }}>{estacion.borough}</p>
                </div>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '12px' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 4px 0', fontWeight: '600', letterSpacing: '0.05em' }}>Fare Range</p>
                  <p style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--success)', margin: '0' }}>$2.25–$6.00 USD</p>
                </div>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '12px' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 4px 0', fontWeight: '600', letterSpacing: '0.05em' }}>Hours</p>
                  <p style={{ fontSize: '0.95rem', fontWeight: '600', margin: '0' }}>Mon–Thu 5 AM–11:30 PM</p>
                </div>
              </div>
            </div>

            {/* Line Links */}
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '0.9rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Lines at This Station
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {lineasEstacion.map((linea) => (
                  <Link href={`/washington-dc/line/${linea.id}`} key={linea.id}>
                    <div style={{ padding: '12px', backgroundColor: 'var(--surface)', border: `1px solid ${LINE_COLORS[linea.id] || '#BF0D3E'}`, borderRadius: 'var(--radius)', cursor: 'pointer', transition: 'all 0.2s ease' }}>
                      <p style={{ fontSize: '0.9rem', fontWeight: '700', margin: '0', color: 'var(--text)' }}>
                        {linea.colorNombre}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Affiliate */}
            <AffiliateTransportCard ciudad="Washington DC" estacion={estacion.nombre} fechas={null} />
          </div>
        </div>

        <AdBannerLazyInArticle slot="1082410395" />
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--surface)', padding: '60px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
          Explore More Stations
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0 0 24px 0', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
          Discover other stations and lines throughout Washington DC WMATA.
        </p>
        <Link href="/washington-dc">
          <button style={{ padding: '14px 32px', backgroundColor: colorPrincipal, color: colorPrincipal === '#FFD100' ? '#000' : '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            Back to Washington DC
          </button>
        </Link>
      </section>
    </main>
  );
}
