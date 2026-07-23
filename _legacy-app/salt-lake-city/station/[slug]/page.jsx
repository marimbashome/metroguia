import { estacionesSaltLakeCity } from '@/data/salt-lake-city/estaciones';
import { lineasSaltLakeCity } from '@/data/salt-lake-city/lineas-detalle';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import Link from 'next/link';
import { normalizeLinea, getPrimaryLineColor, joinLinea } from '@/app/utils/linea-helpers';

const LINE_COLORS = {
  'blue': '#0055A4',
  'red': '#CC0000',
  'green': '#009639',
  's-line': '#008B8B',
  'frontrunner': '#662D91'
};

export async function generateStaticParams() {
  return estacionesSaltLakeCity.map((estacion) => ({
    slug: estacion.slug,
  }));
}

export async function generateMetadata({ params }) {
  const estacion = estacionesSaltLakeCity.find((e) => e.slug === params.slug);
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
      url: `https://metroguia.mx/salt-lake-city/station/${estacion.slug}`,
    },
  };
}

export default function StationSaltLakeCityPage({ params }) {
  const estacion = estacionesSaltLakeCity.find((e) => e.slug === params.slug);

  if (!estacion) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--danger)' }}>Station not found</h1>
        <Link href="/salt-lake-city">
          <button style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: '#0055A4', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            Back to Salt Lake City
          </button>
        </Link>
      </main>
    );
  }

  const colorLinea = LINE_COLORS[estacion.linea] || '#0055A4';
  const isFreeZone = ['slc-temple-square', 'slc-city-center', 'slc-gallivan-plaza', 'slc-courthouse', 'slc-library', 'slc-planetarium', 'slc-arena', 'slc-old-greektown', 'slc-central-pointe'].includes(estacion.slug);
  const isAirport = estacion.slug === 'slc-airport-terminal-1';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Salt Lake City', item: 'https://metroguia.mx/salt-lake-city/' },
      { '@type': 'ListItem', position: 3, name: (Array.isArray(estacion.linea) ? estacion.linea[0] : estacion.linea || '').toUpperCase(), item: `https://metroguia.mx/salt-lake-city/line/${Array.isArray(estacion.linea) ? estacion.linea[0] : estacion.linea}/` },
      { '@type': 'ListItem', position: 4, name: estacion.nombre, item: `https://metroguia.mx/salt-lake-city/station/${estacion.slug}` },
    ],
  };

  const transitStationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TransitStation',
    name: estacion.nombre,
    description: estacion.meta_description || estacion.intro,
    url: `https://metroguia.mx/salt-lake-city/station/${estacion.slug}/`,
    isAccessibleForFree: isFreeZone,
    address: { '@type': 'PostalAddress', addressLocality: 'Salt Lake City', addressRegion: estacion.municipio || 'Utah', addressCountry: 'US' },
    geo: { '@type': 'GeoCoordinates', latitude: estacion.lat || 40.7608, longitude: estacion.lng || -111.8910 },
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: estacion.horarios.inicio, closes: estacion.horarios.fin },
  };

  const faqItems = [];
  { const lineaStr = Array.isArray(estacion.linea) ? estacion.linea[0] : estacion.linea || ''; faqItems.push({ '@type': 'Question', name: `How do I get to ${estacion.nombre}?`, acceptedAnswer: { '@type': 'Answer', text: `${estacion.nombre} is served by the ${lineaStr.charAt(0).toUpperCase() + lineaStr.slice(1)} Line. Use the MetroGuia trip planner for directions.` } }); }
  if (estacion.pois && estacion.pois.length > 0) {
    const poiList = estacion.pois.slice(0, 5).map(p => typeof p === 'string' ? p : p.nombre).join(', ');
    faqItems.push({ '@type': 'Question', name: `What's near ${estacion.nombre}?`, acceptedAnswer: { '@type': 'Answer', text: `Nearby attractions: ${poiList}.` } });
  }
  if (isFreeZone) {
    faqItems.push({ '@type': 'Question', name: `Is this station in the Free Fare Zone?`, acceptedAnswer: { '@type': 'Answer', text: `Yes, ${estacion.nombre} is in the downtown Free Fare Zone. Ride free on TRAX and S-Line within the zone.` } });
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems,
  };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(transitStationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section style={{
        background: `linear-gradient(135deg, ${colorLinea} 0%, ${colorLinea}cc 100%)`,
        color: '#FFFFFF',
        padding: '60px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ margin: '0 0 12px 0', fontSize: '0.875rem', opacity: '0.9', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.1em' }}>
            {estacion.municipio}
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.2' }}>
            {estacion.nombre} Station
          </h1>
          <p style={{ fontSize: '1.125rem', margin: '0', opacity: '0.95', maxWidth: '600px' }}>
            {estacion.intro}
          </p>
        </div>
      </section>

      {/* KEY INFO */}
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '48px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '48px' }}>
          <div style={{ padding: '20px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>Line</p>
            <p style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0', color: colorLinea, textTransform: 'capitalize' }}>{estacion.linea}</p>
          </div>
          <div style={{ padding: '20px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>System</p>
            <p style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0', textTransform: 'capitalize' }}>{estacion.sistema}</p>
          </div>
          <div style={{ padding: '20px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>Fare</p>
            <p style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0' }}>$2.50</p>
          </div>
          {isFreeZone && (
            <div style={{ padding: '20px', backgroundColor: '#e8f4f8', borderRadius: 'var(--radius)', border: '1px solid #0055A4' }}>
              <p style={{ fontSize: '0.75rem', color: '#003366', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>Free Zone</p>
              <p style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0', color: '#0055A4' }}>FREE</p>
            </div>
          )}
        </div>

        {/* DESCRIPTION */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0 0 16px 0' }}>About This Station</h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.6', margin: '0', color: 'var(--text)', maxWidth: '700px' }}>
            {estacion.descripcion_turistica}
          </p>
        </div>

        {/* TIPS */}
        {estacion.tips && estacion.tips.length > 0 && (
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0 0 16px 0' }}>Tips & Information</h2>
            <ul style={{ margin: '0', paddingLeft: '20px', listStyle: 'disc' }}>
              {estacion.tips.map((tip, i) => (
                <li key={i} style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '8px', color: 'var(--text)' }}>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* POIs */}
        {estacion.pois && estacion.pois.length > 0 && (
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0 0 16px 0' }}>Nearby Attractions</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              {estacion.pois.map((poi, i) => (
                <div key={i} style={{ padding: '12px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                  <p style={{ fontSize: '0.875rem', fontWeight: '600', margin: '0 0 4px 0', color: 'var(--text)' }}>
                    {typeof poi === 'string' ? poi : poi.nombre}
                  </p>
                  {typeof poi !== 'string' && poi.distancia && (
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0' }}>
                      {poi.distancia}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TRANSFERS */}
        {estacion.transferencias && estacion.transferencias.length > 0 && (
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0 0 16px 0' }}>Transfer Lines</h2>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {estacion.transferencias.map(linea => (
                <Link key={linea} href={`/salt-lake-city/line/${linea}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    padding: '12px 20px',
                    backgroundColor: LINE_COLORS[linea] || '#0055A4',
                    color: '#fff',
                    borderRadius: 'var(--radius)',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    textTransform: 'capitalize',
                    cursor: 'pointer',
                  }}>
                    {linea}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ACCESSIBILITY */}
        {estacion.accesibilidad && (
          <div style={{ marginBottom: '48px', padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 16px 0' }}>Accessibility</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px', marginBottom: '12px' }}>
              <div style={{ padding: '8px' }}>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0 0 4px 0', fontWeight: '600', textTransform: 'uppercase' }}>Elevator</p>
                <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: estacion.accesibilidad.elevador ? '#009639' : '#cc0000' }}>
                  {estacion.accesibilidad.elevador ? '✓ Yes' : '✗ No'}
                </p>
              </div>
              <div style={{ padding: '8px' }}>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0 0 4px 0', fontWeight: '600', textTransform: 'uppercase' }}>Ramp</p>
                <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: estacion.accesibilidad.rampa ? '#009639' : '#cc0000' }}>
                  {estacion.accesibilidad.rampa ? '✓ Yes' : '✗ No'}
                </p>
              </div>
              <div style={{ padding: '8px' }}>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0 0 4px 0', fontWeight: '600', textTransform: 'uppercase' }}>Tactile Paving</p>
                <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: estacion.accesibilidad.piso_tactil ? '#009639' : '#cc0000' }}>
                  {estacion.accesibilidad.piso_tactil ? '✓ Yes' : '✗ No'}
                </p>
              </div>
            </div>
            {estacion.accesibilidad.notas && (
              <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', margin: '0', lineHeight: '1.5' }}>
                {estacion.accesibilidad.notas}
              </p>
            )}
          </div>
        )}

        {/* HOURS */}
        {estacion.horarios && (
          <div style={{ marginBottom: '48px', padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 16px 0' }}>Hours of Operation</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px' }}>
              <div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0 0 4px 0', fontWeight: '600', textTransform: 'uppercase' }}>Opens</p>
                <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0' }}>{estacion.horarios.inicio}</p>
              </div>
              <div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0 0 4px 0', fontWeight: '600', textTransform: 'uppercase' }}>Closes</p>
                <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0' }}>{estacion.horarios.fin}</p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* AFFILIATE */}
      <section style={{ padding: '48px 24px', backgroundColor: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <AffiliateTransportCard system="UTA TRAX" logo="🚆" url="https://www.rideuta.com" />
        </div>
      </section>

      {/* ADS */}
      <AdBannerLazy />
    </main>
  );
}
