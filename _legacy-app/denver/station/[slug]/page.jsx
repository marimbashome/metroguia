import { estacionesDenver } from '@/data/denver/estaciones';
import { lineasDenver } from '@/data/denver/lineas-detalle';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import Link from 'next/link';

const LINE_COLORS = {
  'A': '#FFD100',
  'B': '#8B6914',
  'D': '#00843D',
  'E': '#552586',
  'G': '#BFD730',
  'W': '#0078C8',
};

export async function generateStaticParams() {
  return estacionesDenver.map((estacion) => ({
    slug: estacion.slug,
  }));
}

export async function generateMetadata({ params }) {
  const estacion = estacionesDenver.find((e) => e.slug === params.slug);
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
      url: `https://metroguia.mx/denver/station/${estacion.slug}`,
    },
  };
}

export default function StationDenverPage({ params }) {
  const estacion = estacionesDenver.find((e) => e.slug === params.slug);

  if (!estacion) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--danger)' }}>Station not found</h1>
        <Link href="/denver">
          <button style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: '#003DA5', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            Back to Denver
          </button>
        </Link>
      </main>
    );
  }

  const colorLinea = LINE_COLORS[estacion.linea] || '#003DA5';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Denver', item: 'https://metroguia.mx/denver/' },
      { '@type': 'ListItem', position: 3, name: estacion.linea, item: `https://metroguia.mx/denver/line/${estacion.linea}/` },
      { '@type': 'ListItem', position: 4, name: estacion.nombre, item: `https://metroguia.mx/denver/station/${estacion.slug}` },
    ],
  };

  const transitStationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TransitStation',
    name: estacion.nombre,
    description: estacion.meta_description || estacion.intro,
    url: `https://metroguia.mx/denver/station/${estacion.slug}/`,
    isAccessibleForFree: true,
    address: { '@type': 'PostalAddress', addressLocality: 'Denver', addressRegion: estacion.municipio || 'Colorado', addressCountry: 'US' },
    geo: { '@type': 'GeoCoordinates', latitude: estacion.lat || 39.7392, longitude: estacion.lng || -104.9903 },
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '04:30', closes: '01:15' },
  };

  const faqItems = [];
  faqItems.push({ '@type': 'Question', name: `How do I get to ${estacion.nombre}?`, acceptedAnswer: { '@type': 'Answer', text: `${estacion.nombre} is served by the RTD ${estacion.linea} Line. Use the MetroGuia trip planner for directions.` } });
  if (estacion.pois && estacion.pois.length > 0) {
    const poiList = estacion.pois.slice(0, 5).map(p => typeof p === 'string' ? p : p.nombre).join(', ');
    faqItems.push({ '@type': 'Question', name: `What's near ${estacion.nombre}?`, acceptedAnswer: { '@type': 'Answer', text: `Nearby attractions: ${poiList}.` } });
  }
  faqItems.push({ '@type': 'Question', name: `What are the hours and fares?`, acceptedAnswer: { '@type': 'Answer', text: `RTD: 4:30 AM to 1:15 AM. Fares: $3.00 local / $10.50 airport with MyRide card.` } });
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
              {estacion.linea[0]}
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

      {/* MAIN */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '48px' }}>
          {/* LEFT */}
          <div>
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

            {(estacion.pois || []).length > 0 && (
              <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '24px', color: 'var(--text)', borderBottom: `3px solid ${colorLinea}`, paddingBottom: '12px' }}>
                  Nearby Attractions
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

            {(Array.isArray(estacion.tips) && estacion.tips.length > 0) && (
              <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '24px', color: 'var(--text)', borderBottom: `3px solid ${colorLinea}`, paddingBottom: '12px' }}>
                  Tips
                </h2>
                <ul style={{ margin: '0', paddingLeft: '20px' }}>
                  {estacion.tips.map((tip, idx) => (
                    <li key={idx} style={{ fontSize: '1rem', color: 'var(--text)', marginBottom: '12px', lineHeight: '1.6' }}>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div>
            {/* LINE INFO */}
            <div style={{ backgroundColor: 'var(--surface)', padding: '32px', borderRadius: 'var(--radius)', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Line Information
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: colorLinea, borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '24px', fontWeight: '700' }}>
                  {estacion.linea}
                </div>
                <Link href={`/denver/line/${estacion.linea}`} style={{ textDecoration: 'none' }}>
                  <button style={{ backgroundColor: '#003DA5', color: '#fff', padding: '8px 16px', borderRadius: 'var(--radius-sm)', border: 'none', cursor: 'pointer', fontSize: '0.9rem', fontWeight: '700' }}>
                    View Full Line
                  </button>
                </Link>
              </div>
              {estacion.transferencias && estacion.transferencias.length > 0 && (
                <div>
                  <p style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)', margin: '0 0 8px 0', textTransform: 'uppercase' }}>
                    Transfers Available
                  </p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {estacion.transferencias.map((t) => (
                      <span key={t} style={{ display: 'inline-block', backgroundColor: LINE_COLORS[t] || '#ccc', color: '#fff', padding: '6px 12px', borderRadius: '4px', fontSize: '0.9rem', fontWeight: '700' }}>
                        Line {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* HOURS & FARES */}
            <div style={{ backgroundColor: 'var(--surface)', padding: '32px', borderRadius: 'var(--radius)', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Hours & Fares
              </h3>
              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)', margin: '0 0 8px 0', textTransform: 'uppercase' }}>
                  Operating Hours
                </p>
                <p style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text)', margin: '0' }}>
                  {estacion.horarios?.inicio || '4:30 AM'} - {estacion.horarios?.fin || '1:15 AM'}
                </p>
              </div>
              <div>
                <p style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)', margin: '0 0 8px 0', textTransform: 'uppercase' }}>
                  Fares
                </p>
                <p style={{ fontSize: '1rem', fontWeight: '700', color: '#003DA5', margin: '0 0 4px 0' }}>
                  Local: $3.00
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 8px 0' }}>
                  Single trip within Denver metro
                </p>
                <p style={{ fontSize: '1rem', fontWeight: '700', color: '#003DA5', margin: '0' }}>
                  Airport: $10.50
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0' }}>
                  To Denver International Airport
                </p>
              </div>
            </div>

            {/* ACCESSIBILITY */}
            {estacion.accesibilidad && (
              <div style={{ backgroundColor: 'var(--surface)', padding: '32px', borderRadius: 'var(--radius)', marginBottom: '32px' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Accessibility
                </h3>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {estacion.accesibilidad.elevador && (
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <span style={{ color: '#003DA5', fontWeight: '700' }}>✓</span>
                      <span style={{ fontSize: '0.95rem', color: 'var(--text)' }}>Elevator access</span>
                    </div>
                  )}
                  {estacion.accesibilidad.rampa && (
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <span style={{ color: '#003DA5', fontWeight: '700' }}>✓</span>
                      <span style={{ fontSize: '0.95rem', color: 'var(--text)' }}>Wheelchair ramps</span>
                    </div>
                  )}
                  {estacion.accesibilidad.piso_tactil && (
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <span style={{ color: '#003DA5', fontWeight: '700' }}>✓</span>
                      <span style={{ fontSize: '0.95rem', color: 'var(--text)' }}>Tactile paving</span>
                    </div>
                  )}
                </div>
                {estacion.accesibilidad.notas && (
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '16px 0 0 0' }}>
                    {estacion.accesibilidad.notas}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* AFFILIATE */}
      <section style={{
        backgroundColor: 'var(--surface)',
        padding: '60px 24px',
        borderTop: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '800',
            marginBottom: '32px',
            textAlign: 'center',
            color: 'var(--text)',
          }}>
            Getting Around Denver
          </h2>
          <AffiliateTransportCard />
        </div>
      </section>
    </main>
  );
}
