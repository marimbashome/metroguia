import { estacionesPhiladelphia } from '@/data/philadelphia/estaciones';
import { lineasPhiladelphia } from '@/data/philadelphia/lineas-detalle';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import Link from 'next/link';

const LINE_COLORS = { 'BSL': '#FF6B35', 'MF': '#0066FF', 'BS': '#FF6B35' };

export async function generateStaticParams() {
  return estacionesPhiladelphia.map((estacion) => ({
    slug: estacion.slug,
  }));
}

export async function generateMetadata({ params }) {
  const estacion = estacionesPhiladelphia.find((e) => e.slug === params.slug);
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
      url: `https://metroguia.mx/philadelphia/station/${estacion.slug}`,
    },
  };
}

export default function StationPhiladelphiaPage({ params }) {
  const estacion = estacionesPhiladelphia.find((e) => e.slug === params.slug);

  if (!estacion) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--danger)' }}>Station not found</h1>
        <Link href="/philadelphia">
          <button style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: '#FF6B35', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            Back to Philadelphia
          </button>
        </Link>
      </main>
    );
  }

  const colorLinea = LINE_COLORS[estacion.linea] || '#FF6B35';
  const lineaData = lineasPhiladelphia.find(l => l.id === estacion.linea);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Philadelphia', item: 'https://metroguia.mx/philadelphia/' },
      { '@type': 'ListItem', position: 3, name: `Line ${estacion.linea}`, item: `https://metroguia.mx/philadelphia/line/${estacion.linea}/` },
      { '@type': 'ListItem', position: 4, name: estacion.nombre, item: `https://metroguia.mx/philadelphia/station/${estacion.slug}` },
    ],
  };

  const transitStationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TransitStation',
    name: estacion.nombre,
    description: estacion.meta_description || estacion.intro,
    url: `https://metroguia.mx/philadelphia/station/${estacion.slug}/`,
    isAccessibleForFree: true,
    address: { '@type': 'PostalAddress', addressLocality: 'Philadelphia', addressRegion: estacion.municipio || 'Pennsylvania', addressCountry: 'US' },
    geo: { '@type': 'GeoCoordinates', latitude: estacion.lat || 39.9526, longitude: estacion.lng || -75.1652 },
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '04:00', closes: '01:00' },
  };

  const faqItems = [];
  faqItems.push({ '@type': 'Question', name: `How do I get to ${estacion.nombre} station in Philadelphia?`, acceptedAnswer: { '@type': 'Answer', text: `${estacion.nombre} is served by Line ${estacion.linea} of SEPTA. Use the MetroGuia trip planner for directions.` } });
  if (estacion.pois && estacion.pois.length > 0) {
    const poiList = estacion.pois.slice(0, 5).map(p => typeof p === 'string' ? p : `${p.nombre}`).join(', ');
    faqItems.push({ '@type': 'Question', name: `What's near ${estacion.nombre} station?`, acceptedAnswer: { '@type': 'Answer', text: `Nearby attractions include: ${poiList}.` } });
  }
  faqItems.push({ '@type': 'Question', name: `What are the hours and fares?`, acceptedAnswer: { '@type': 'Answer', text: `SEPTA operates from 4:00 AM to 1:00 AM. Base fare is $2.50 (single ride) or use the SEPTA Key Card.` } });
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(transitStationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg, ${colorLinea} 0%, ${colorLinea}cc 100%)`, color: '#fff', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '48px', height: '48px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: '700' }}>
              {estacion.linea}
            </span>
            <span style={{ fontSize: '1rem', fontWeight: '500' }}>{estacion.municipio}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.2' }}>
            {estacion.nombre}
          </h1>
          <p style={{ fontSize: '1.125rem', margin: '0', opacity: '0.95', maxWidth: '700px', lineHeight: '1.6' }}>
            {estacion.intro}
          </p>
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* MAIN CONTENT */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '48px' }}>
          {/* LEFT COLUMN */}
          <div>
            {/* DESCRIPTION */}
            {estacion.descripcion_turistica && (
              <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text)', borderBottom: `3px solid ${colorLinea}`, paddingBottom: '12px' }}>
                  About This Station
                </h2>
                <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0', lineHeight: '1.8' }}>
                  {estacion.descripcion_turistica}
                </p>
              </div>
            )}

            {/* POINTS OF INTEREST */}
            {(estacion.pois || []).length > 0 && (
              <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '24px', color: 'var(--text)', borderBottom: `3px solid ${colorLinea}`, paddingBottom: '12px' }}>
                  Nearby Points of Interest
                </h2>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {estacion.pois.map((poi, idx) => {
                    const poiName = typeof poi === 'string' ? poi : poi.nombre;
                    const poiDetail = typeof poi === 'string' ? null : `${poi.tipo} · ${poi.distancia}`;
                    return (
                      <div key={idx} style={{ padding: '16px', backgroundColor: 'var(--surface)', borderLeft: `4px solid ${colorLinea}`, borderRadius: 'var(--radius-sm)' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: '0 0 4px 0', color: 'var(--text)' }}>{poiName}</h3>
                        {poiDetail && <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0' }}>{poiDetail}</p>}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TIPS */}
            {(Array.isArray(estacion.tips) && estacion.tips.length > 0) && (
              <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '24px', color: 'var(--text)', borderBottom: `3px solid ${colorLinea}`, paddingBottom: '12px' }}>
                  Helpful Tips
                </h2>
                <ul style={{ listStyle: 'none', padding: '0', margin: '0', display: 'grid', gap: '10px' }}>
                  {estacion.tips.map((tip, idx) => (
                    <li key={idx} style={{ padding: '12px 16px', backgroundColor: 'var(--surface)', borderLeft: '4px solid var(--success)', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem', color: 'var(--text)' }}>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* FIFA 2026 */}
            {estacion.mundial_relevancia && !String(estacion.mundial_relevancia || '').includes('Sin relevancia') && (
              <div style={{ padding: '28px', backgroundColor: 'var(--surface)', borderLeft: '4px solid var(--warning)', borderRadius: 'var(--radius)', marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px', color: 'var(--warning)' }}>
                  FIFA World Cup 2026
                </h2>
                <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0', lineHeight: '1.6' }}>
                  {estacion.mundial_relevancia}
                </p>
              </div>
            )}

            {/* ACCESSIBILITY */}
            {estacion.accesibilidad && (
              <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '20px', color: 'var(--text)', borderBottom: `3px solid ${colorLinea}`, paddingBottom: '12px' }}>
                  Accessibility
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ padding: '12px', backgroundColor: estacion.accesibilidad.elevador ? 'rgba(22,163,74,0.1)' : 'var(--surface)', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>Elevator</p>
                    <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: estacion.accesibilidad.elevador ? 'var(--success)' : 'var(--text-dim)' }}>
                      {estacion.accesibilidad.elevador ? '✓' : '✗'}
                    </p>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: estacion.accesibilidad.rampa ? 'rgba(22,163,74,0.1)' : 'var(--surface)', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>Ramp</p>
                    <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: estacion.accesibilidad.rampa ? 'var(--success)' : 'var(--text-dim)' }}>
                      {estacion.accesibilidad.rampa ? '✓' : '✗'}
                    </p>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: estacion.accesibilidad.piso_tactil ? 'rgba(22,163,74,0.1)' : 'var(--surface)', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>Tactile Path</p>
                    <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: estacion.accesibilidad.piso_tactil ? 'var(--success)' : 'var(--text-dim)' }}>
                      {estacion.accesibilidad.piso_tactil ? '✓' : '✗'}
                    </p>
                  </div>
                </div>
                {estacion.accesibilidad.notas && (
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0', lineHeight: '1.5' }}>
                    {estacion.accesibilidad.notas}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <div>
            {/* QUICK INFO */}
            <div style={{ backgroundColor: 'var(--surface)', padding: '24px', borderRadius: 'var(--radius)', marginBottom: '24px', borderTop: `4px solid ${colorLinea}` }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
                Quick Info
              </h3>
              <div style={{ display: 'grid', gap: '12px' }}>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0 0 4px 0' }}>Line</p>
                  <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: colorLinea }}>
                    Line {estacion.linea}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0 0 4px 0' }}>System</p>
                  <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0' }}>
                    SEPTA
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0 0 4px 0' }}>Hours</p>
                  <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0' }}>
                    4:00 AM – 1:00 AM
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0 0 4px 0' }}>Base Fare</p>
                  <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: 'var(--success)' }}>
                    $2.50
                  </p>
                </div>
              </div>
            </div>

            {/* CARD INFO */}
            <div style={{ backgroundColor: 'var(--surface)', padding: '24px', borderRadius: 'var(--radius)', borderTop: `4px solid var(--warning)` }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
                How to Pay
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 12px 0', lineHeight: '1.5' }}>
                Use the SEPTA Key Card for the fastest, most convenient payment method. Single rides start at $2.50.
              </p>
              <Link href="https://www.septa.org/key/" target="_blank" style={{ textDecoration: 'none' }}>
                <button style={{ width: '100%', padding: '12px', backgroundColor: colorLinea, color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '0.95rem', fontWeight: '700', cursor: 'pointer' }}>
                  Get SEPTA Key Card
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
