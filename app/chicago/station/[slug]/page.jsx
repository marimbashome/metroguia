import { estacionesChicago } from '@/data/chicago/estaciones';
import { lineasDetalleChicago } from '@/data/chicago/lineas-detalle';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import Link from 'next/link';

const LINE_COLORS = {
  'RED': '#C60C30',
  'BLUE': '#00A1DE',
  'BROWN': '#62361B',
  'GREEN': '#009B3A',
  'ORANGE': '#F9461C',
  'PINK': '#E27EA6',
  'PURPLE': '#522398',
  'YELLOW': '#F9E300'
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
  return {
    title: estacion.seo_title,
    description: estacion.meta_description,
    openGraph: {
      title: estacion.seo_title,
      description: estacion.meta_description,
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

  const lineaId = Array.isArray(estacion.linea) ? estacion.linea[0] : estacion.linea;
  const colorLinea = LINE_COLORS[lineaId] || '#00A1DE';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Chicago', item: 'https://metroguia.mx/chicago/' },
      { '@type': 'ListItem', position: 3, name: `${Array.isArray(estacion.linea) ? estacion.linea.join(', ') : estacion.linea} Line`, item: `https://metroguia.mx/chicago/line/${lineaId}/` },
      { '@type': 'ListItem', position: 4, name: estacion.nombre, item: `https://metroguia.mx/chicago/station/${estacion.slug}` },
    ],
  };

  const transitStationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TransitStation',
    name: estacion.nombre,
    description: estacion.meta_description || estacion.intro,
    url: `https://metroguia.mx/chicago/station/${estacion.slug}/`,
    isAccessibleForFree: true,
    address: { '@type': 'PostalAddress', addressLocality: 'Chicago', addressRegion: estacion.municipio || 'Illinois', addressCountry: 'US' },
    geo: { '@type': 'GeoCoordinates', latitude: estacion.lat || 41.8781, longitude: estacion.lng || -87.6298 },
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '04:00', closes: '23:30' },
  };

  const faqItems = [];
  faqItems.push({ '@type': 'Question', name: `How do I get to ${estacion.nombre} station?`, acceptedAnswer: { '@type': 'Answer', text: `${estacion.nombre} is served by the ${Array.isArray(estacion.linea) ? estacion.linea.join(', ') : estacion.linea} Line(s). Use the MetroGuia trip planner for directions.` } });
  if (estacion.pois && estacion.pois.length > 0) {
    const poiList = estacion.pois.slice(0, 5).map(p => typeof p === 'string' ? p : p.nombre).join(', ');
    faqItems.push({ '@type': 'Question', name: `What's near ${estacion.nombre}?`, acceptedAnswer: { '@type': 'Answer', text: `Nearby attractions: ${poiList}.` } });
  }
  faqItems.push({ '@type': 'Question', name: `What are the hours and fares?`, acceptedAnswer: { '@type': 'Answer', text: `CTA L operates 4:00 AM to 11:30 PM on most lines (24h on Red and Blue). Fare: $2.50 with Ventra Card.` } });
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems };

  const accesibilidadObject = estacion.accesibilidad && typeof estacion.accesibilidad === 'object' && !Array.isArray(estacion.accesibilidad);

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
              {lineaId[0]}
            </span>
            <span style={{ fontSize: '1rem', fontWeight: '500' }}>{estacion.municipio || 'Chicago'}</span>
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
                <ul style={{ listStyle: 'none', padding: '0', margin: '0', display: 'grid', gap: '10px' }}>
                  {estacion.tips.map((tip, idx) => (
                    <li key={idx} style={{ padding: '12px 16px', backgroundColor: 'var(--surface)', borderLeft: '4px solid var(--success)', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem', color: 'var(--text)' }}>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {accesibilidadObject && (
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
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <div>
            <div style={{ backgroundColor: 'var(--surface)', padding: '24px', borderRadius: 'var(--radius)', marginBottom: '24px', borderTop: `4px solid ${colorLinea}` }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
                Quick Info
              </h3>
              <div style={{ display: 'grid', gap: '12px' }}>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0 0 4px 0' }}>Lines</p>
                  <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: colorLinea }}>
                    {Array.isArray(estacion.linea) ? estacion.linea.join(', ') : estacion.linea}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0 0 4px 0' }}>Hours</p>
                  <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0' }}>
                    4:00 AM – 11:30 PM
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0 0 4px 0' }}>Frequency</p>
                  <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0' }}>
                    2–10 minutes
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0 0 4px 0' }}>Fare</p>
                  <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: 'var(--success)' }}>
                    $2.50
                  </p>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--surface)', padding: '24px', borderRadius: 'var(--radius)', borderTop: `4px solid var(--warning)` }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
                Payment
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 12px 0', lineHeight: '1.5' }}>
                Use Ventra Card for fastest boarding or buy a single ticket online.
              </p>
              <Link href="https://www.ventrachicago.com/" target="_blank" style={{ textDecoration: 'none' }}>
                <button style={{ width: '100%', padding: '12px', backgroundColor: colorLinea, color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '0.95rem', fontWeight: '700', cursor: 'pointer' }}>
                  Get Ventra Card
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
