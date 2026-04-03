import { estacionesPortland } from '@/data/portland/estaciones';
import { lineasPortland } from '@/data/portland/lineas-detalle';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import Link from 'next/link';
import { normalizeLinea, getPrimaryLineColor, joinLinea } from '@/app/utils/linea-helpers';

const LINE_COLORS = {
  'blue': '#0054A4',
  'red': '#D81526',
  'orange': '#D37520',
  'yellow': '#FFC72C',
  'green': '#00843D',
  'a-loop': '#84BD00',
  'b-loop': '#84BD00',
  'ns-line': '#84BD00'
};

export async function generateStaticParams() {
  return estacionesPortland.map((estacion) => ({
    slug: estacion.slug,
  }));
}

export async function generateMetadata({ params }) {
  const estacion = estacionesPortland.find((e) => e.slug === params.slug);
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
      url: `https://metroguia.mx/portland/station/${estacion.slug}`,
    },
  };
}

export default function StationPortlandPage({ params }) {
  const estacion = estacionesPortland.find((e) => e.slug === params.slug);

  if (!estacion) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--danger)' }}>Station not found</h1>
        <Link href="/portland">
          <button style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: '#0054A4', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            Back to Portland
          </button>
        </Link>
      </main>
    );
  }

  const primaryLineColor = getPrimaryLineColor(estacion.linea, LINE_COLORS);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Portland', item: 'https://metroguia.mx/portland/' },
      { '@type': 'ListItem', position: 3, name: estacion.nombre, item: `https://metroguia.mx/portland/station/${estacion.slug}` },
    ],
  };

  const transitStationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TransitStation',
    name: estacion.nombre,
    description: estacion.meta_description || estacion.intro,
    url: `https://metroguia.mx/portland/station/${estacion.slug}/`,
    isAccessibleForFree: true,
    address: { '@type': 'PostalAddress', addressLocality: 'Portland', addressRegion: estacion.municipio || 'Oregon', addressCountry: 'US' },
    geo: { '@type': 'GeoCoordinates', latitude: estacion.lat || 45.5152, longitude: estacion.lng || -122.6784 },
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: estacion.horarios?.inicio || '04:30', closes: estacion.horarios?.fin || '01:00' },
  };

  const faqItems = [];
  faqItems.push({ '@type': 'Question', name: `How do I get to ${estacion.nombre} station?`, acceptedAnswer: { '@type': 'Answer', text: `${estacion.nombre} is served by the ${joinLinea(estacion.linea, ', ')} line(s). Use the MetroGuia trip planner for directions.` } });
  if (estacion.pois && estacion.pois.length > 0) {
    const poiList = estacion.pois.slice(0, 5).map(p => typeof p === 'string' ? p : p.nombre).join(', ');
    faqItems.push({ '@type': 'Question', name: `What's near ${estacion.nombre}?`, acceptedAnswer: { '@type': 'Answer', text: `Nearby attractions: ${poiList}.` } });
  }
  faqItems.push({ '@type': 'Question', name: `What are the hours and fares?`, acceptedAnswer: { '@type': 'Answer', text: `TriMet MAX operates ${estacion.horarios?.inicio || '04:30'} to ${estacion.horarios?.fin || '01:00'}. Fares: $2.50–$3.00 with Hop Card.` } });
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(transitStationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg, ${primaryLineColor} 0%, ${primaryLineColor}cc 100%)`, color: '#fff', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            {normalizeLinea(estacion.linea).map((linea) => (
              <span key={linea} style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'rgba(255,255,255,0.3)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: '700',
              }}>
                {linea === 'a-loop' ? 'A' : linea === 'b-loop' ? 'B' : linea === 'ns-line' ? 'NS' : linea[0].toUpperCase()}
              </span>
            ))}
            <span style={{ fontSize: '1rem', fontWeight: '500' }}>{estacion.municipio}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.2' }}>
            {estacion.nombre}
          </h1>
          <p style={{ fontSize: '1.125rem', fontWeight: '500', margin: '0 0 8px 0', opacity: 0.9 }}>
            {estacion.intro}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        {/* Lines served */}
        <div style={{ marginBottom: '48px', padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', borderLeft: `4px solid ${primaryLineColor}` }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
            Lines Served
          </h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {normalizeLinea(estacion.linea).map((linea) => {
              const lineData = lineasPortland.find(l => l.id === linea);
              return (
                <Link key={linea} href={`/portland/line/${linea}`}>
                  <button style={{
                    padding: '12px 16px',
                    backgroundColor: LINE_COLORS[linea],
                    color: linea === 'yellow' ? '#000' : '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  >
                    {linea === 'a-loop' ? 'A-Loop' : linea === 'b-loop' ? 'B-Loop' : linea === 'ns-line' ? 'NS-Line' : lineData?.colorNombre || linea.toUpperCase()}
                  </button>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Information grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginBottom: '48px',
        }}>
          <div style={{ padding: '20px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>Municipality</p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0' }}>{estacion.municipio}</p>
          </div>
          <div style={{ padding: '20px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>Operating Hours</p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0' }}>{estacion.horarios?.inicio} – {estacion.horarios?.fin}</p>
          </div>
          <div style={{ padding: '20px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>Zone</p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0', textTransform: 'capitalize' }}>{estacion.tipo_zona?.replace(/-/g, ' ')}</p>
          </div>
          <div style={{ padding: '20px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>Fare</p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0', color: 'var(--success)' }}>$2.50–$3.00</p>
          </div>
        </div>

        {/* Accessibility */}
        <div style={{ marginBottom: '48px', padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
            Accessibility
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
            <div style={{ paddingBottom: '12px' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: '600', margin: '0 0 4px 0', color: 'var(--text)' }}>
                {estacion.accesibilidad?.elevador ? '✓ Elevator' : '✗ No Elevator'}
              </p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0' }}>Full access</p>
            </div>
            <div style={{ paddingBottom: '12px' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: '600', margin: '0 0 4px 0', color: 'var(--text)' }}>
                {estacion.accesibilidad?.rampa ? '✓ Ramp' : '✗ No Ramp'}
              </p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0' }}>Wheelchair access</p>
            </div>
            <div style={{ paddingBottom: '12px' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: '600', margin: '0 0 4px 0', color: 'var(--text)' }}>
                {estacion.accesibilidad?.piso_tactil ? '✓ Tactile' : '✗ Limited'}
              </p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0' }}>Visual assistance</p>
            </div>
          </div>
          {estacion.accesibilidad?.notas && (
            <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', margin: '12px 0 0 0', fontStyle: 'italic' }}>
              {estacion.accesibilidad.notas}
            </p>
          )}
        </div>

        {/* POIs */}
        {estacion.pois && estacion.pois.length > 0 && (
          <div style={{ marginBottom: '48px', padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
              Nearby Attractions
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              {estacion.pois.map((poi, idx) => (
                <div key={idx}>
                  <p style={{ fontSize: '0.875rem', fontWeight: '600', margin: '0 0 4px 0', color: 'var(--text)' }}>
                    {typeof poi === 'string' ? poi : poi.nombre}
                  </p>
                  {typeof poi !== 'string' && (
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0', textTransform: 'capitalize' }}>
                      {poi.tipo} • {poi.distancia}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Transfers */}
        {estacion.transferencias && estacion.transferencias.length > 0 && (
          <div style={{ marginBottom: '48px', padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
              Transfers
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              {estacion.transferencias.map((transfer, idx) => (
                <div key={idx} style={{ padding: '12px', backgroundColor: 'var(--bg)', borderRadius: '6px', border: '1px solid var(--border)' }}>
                  <p style={{ fontSize: '0.875rem', fontWeight: '600', margin: '0 0 4px 0', color: 'var(--text)', textTransform: 'capitalize' }}>
                    {transfer.sistema}
                  </p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0' }}>
                    {transfer.linea}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tourist Info */}
        <div style={{ marginBottom: '48px', padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', borderLeft: `4px solid ${primaryLineColor}` }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
            Tourist Information
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0 0 12px 0', lineHeight: '1.6' }}>
            {estacion.descripcion_turistica}
          </p>
          <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: '0 0 8px 0', color: 'var(--text)' }}>
            Best Time to Visit
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', margin: '0 0 12px 0' }}>
            {estacion.mejor_horario}
          </p>
          {estacion.mundial_relevancia && (
            <>
              <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: '0 0 8px 0', color: 'var(--text)' }}>
                World Relevance
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', margin: '0' }}>
                {estacion.mundial_relevancia}
              </p>
            </>
          )}
        </div>

        {/* Tips */}
        {estacion.tips && estacion.tips.length > 0 && (
          <div style={{ marginBottom: '48px', padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
              Tips
            </h2>
            <ul style={{ margin: '0', paddingLeft: '20px', color: 'var(--text-dim)' }}>
              {estacion.tips.map((tip, idx) => (
                <li key={idx} style={{ marginBottom: '8px', fontSize: '0.875rem' }}>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Ad */}
        <div style={{ marginBottom: '48px' }}>
          <AdBannerLazy />
        </div>
      </section>
    </main>
  );
}
