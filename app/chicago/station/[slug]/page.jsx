import { estacionesChicago } from '@/data/chicago/estaciones';
import { lineasDetalleChicago } from '@/data/chicago/lineas-detalle';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import Link from 'next/link';

const LINE_COLORS = {
  'red': '#C60C30',
  'blue': '#00A1DE',
  'brown': '#62361B',
  'green': '#009B3A',
  'orange': '#F9461C',
  'pink': '#E27EA6',
  'purple': '#522398',
  'yellow': '#F9E300',
};

export async function generateStaticParams() {
  return estacionesChicago.map((estacion) => ({
    slug: estacion.slug,
  }));
}

export async function generateMetadata({ params }) {
  const estacion = estacionesChicago.find((e) => e.slug === params.slug);
  if (!estacion) {
    return {
      title: 'Station not found',
      description: 'The requested station does not exist.',
    };
  }
  const seoTitle = estacion.seo_title || `${estacion.nombre} CTA L Station — Chicago Transit`;
  const metaDesc = estacion.meta_description || estacion.descripcion;
  return {
    title: seoTitle,
    description: metaDesc,
    openGraph: {
      title: seoTitle,
      description: metaDesc,
      url: `https://metroguia.mx/chicago/station/${estacion.slug}`,
    },
  };
}

export default function StationChicagoPage({ params }) {
  const estacion = estacionesChicago.find((e) => e.slug === params.slug);

  if (!estacion) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--danger)' }}>Station not found</h1>
        <Link href="/chicago">
          <button style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: '#00A1DE', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            Back to Chicago
          </button>
        </Link>
      </main>
    );
  }

  const lineas = Array.isArray(estacion.linea) ? estacion.linea : [estacion.linea];
  const colorPrimaria = LINE_COLORS[lineas[0]] || '#00A1DE';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Chicago', item: 'https://metroguia.mx/chicago/' },
      { '@type': 'ListItem', position: 3, name: estacion.nombre, item: `https://metroguia.mx/chicago/station/${estacion.slug}` },
    ],
  };

  const transitStationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TransitStation',
    name: estacion.nombre,
    description: estacion.descripcion,
    url: `https://metroguia.mx/chicago/station/${estacion.slug}/`,
    isAccessibleForFree: true,
    address: { '@type': 'PostalAddress', addressLocality: 'Chicago', addressRegion: 'Illinois', addressCountry: 'US' },
    geo: { '@type': 'GeoCoordinates', latitude: estacion.lat, longitude: estacion.lng },
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '04:00', closes: '01:30' },
  };

  const faqItems = [];
  faqItems.push({ '@type': 'Question', name: `How do I get to ${estacion.nombre} station?`, acceptedAnswer: { '@type': 'Answer', text: `${estacion.nombre} is served by the CTA L lines: ${lineas.join(', ').toUpperCase()}. Use the MetroGuia trip planner for directions.` } });
  if (estacion.lugares_cercanos && estacion.lugares_cercanos.length > 0) {
    const lugarList = estacion.lugares_cercanos.slice(0, 5).join(', ');
    faqItems.push({ '@type': 'Question', name: `What's near ${estacion.nombre}?`, acceptedAnswer: { '@type': 'Answer', text: `Nearby locations: ${lugarList}.` } });
  }
  if (estacion.conexiones && estacion.conexiones.length > 0) {
    faqItems.push({ '@type': 'Question', name: `What transfers are available?`, acceptedAnswer: { '@type': 'Answer', text: `Connections: ${estacion.conexiones.join(', ')}.` } });
  }
  faqItems.push({ '@type': 'Question', name: `What are the hours and fares?`, acceptedAnswer: { '@type': 'Answer', text: `CTA L operates 4 AM to 1:30 AM (Red and Blue lines 24 hours). Fare: $2.50 with Ventra Card.` } });
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems };

  const isAccessible = typeof estacion.accesibilidad === 'boolean' ? estacion.accesibilidad : (estacion.accesibilidad && typeof estacion.accesibilidad === 'object' ? estacion.accesibilidad.accessible : false);

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(transitStationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg, ${colorPrimaria} 0%, ${colorPrimaria}cc 100%)`, color: '#fff', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '48px', height: '48px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: '700' }}>
              {lineas[0][0].toUpperCase()}
            </span>
            <span style={{ fontSize: '1rem', fontWeight: '500' }}>Chicago, Illinois</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.2' }}>
            {estacion.nombre}
          </h1>
          <p style={{ fontSize: '1.125rem', margin: '0', opacity: '0.95', maxWidth: '700px', lineHeight: '1.6' }}>
            {estacion.descripcion}
          </p>
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* MAIN CONTENT */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '48px' }}>
          {/* LEFT */}
          <div>
            {/* Lines served */}
            <div style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text)', borderBottom: `3px solid ${colorPrimaria}`, paddingBottom: '12px' }}>
                Lines Serving This Station
              </h2>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {lineas.map((lineId, idx) => {
                  const lineColor = LINE_COLORS[lineId] || '#999';
                  return (
                    <Link href={`/chicago/line/${lineId}`} key={idx} style={{ textDecoration: 'none' }}>
                      <button style={{
                        padding: '8px 16px',
                        backgroundColor: lineColor,
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        fontWeight: '700',
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        transition: 'opacity 0.3s',
                      }}>
                        {lineId.toUpperCase()} Line
                      </button>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* About */}
            <div style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text)', borderBottom: `3px solid ${colorPrimaria}`, paddingBottom: '12px' }}>
                About This Station
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0', lineHeight: '1.8' }}>
                {estacion.descripcion}
              </p>
            </div>

            {/* Nearby locations */}
            {estacion.lugares_cercanos && estacion.lugares_cercanos.length > 0 && (
              <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '24px', color: 'var(--text)', borderBottom: `3px solid ${colorPrimaria}`, paddingBottom: '12px' }}>
                  Nearby Locations
                </h2>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {estacion.lugares_cercanos.map((lugar, idx) => {
                    const lugarName = typeof lugar === 'string' ? lugar : lugar.nombre;
                    const lugarDetail = typeof lugar === 'string' ? null : `${lugar.tipo || ''} · ${lugar.distancia || ''}`;
                    return (
                      <div key={idx} style={{ padding: '16px', backgroundColor: 'var(--surface)', borderLeft: `4px solid ${colorPrimaria}`, borderRadius: 'var(--radius-sm)' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: '0 0 4px 0', color: 'var(--text)' }}>{lugarName}</h3>
                        {lugarDetail && <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0' }}>{lugarDetail}</p>}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Connections */}
            {estacion.conexiones && estacion.conexiones.length > 0 && (
              <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text)', borderBottom: `3px solid ${colorPrimaria}`, paddingBottom: '12px' }}>
                  Transit Connections
                </h2>
                <ul style={{ fontSize: '1rem', color: 'var(--text)', margin: '0', paddingLeft: '20px', lineHeight: '1.8' }}>
                  {estacion.conexiones.map((conn, idx) => (
                    <li key={idx}>{conn}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <div>
            {/* Info card */}
            <div style={{ backgroundColor: 'var(--surface)', padding: '24px', borderRadius: 'var(--radius)', marginBottom: '32px', borderLeft: `4px solid ${colorPrimaria}` }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
                Quick Info
              </h3>
              <div style={{ display: 'grid', gap: '12px', fontSize: '0.9rem' }}>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', margin: '0 0 4px 0', fontWeight: '600' }}>Fare</p>
                  <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: colorPrimaria }}>$2.50 (Ventra Card)</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', margin: '0 0 4px 0', fontWeight: '600' }}>Hours</p>
                  <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: 'var(--text)' }}>4 AM – 1:30 AM</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', margin: '0 0 4px 0', fontWeight: '600' }}>Accessible</p>
                  <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: isAccessible ? 'var(--success)' : 'var(--danger)' }}>
                    {isAccessible ? 'Yes' : 'Contact CTA'}
                  </p>
                </div>
              </div>
            </div>

            {/* Ventra card */}
            <AffiliateTransportCard
              icon="🎫"
              titulo="Ventra Card"
              descripcion="Pay-as-you-go or pass options."
              precio="$2.50/ride"
              enlace="https://www.ventrachicago.com/"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
