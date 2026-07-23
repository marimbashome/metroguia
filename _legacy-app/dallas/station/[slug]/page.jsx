import { estacionesDallas } from '@/data/dallas/estaciones';
import { lineasDallas } from '@/data/dallas/lineas-detalle';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import Link from 'next/link';

const LINE_COLORS = { 'Red': '#E41E3F', 'Blue': '#0066CC', 'Green': '#00AA44', 'Orange': '#FF8C00', 'Silver': '#999999' };

export async function generateStaticParams() {
  return estacionesDallas.map((estacion) => ({ slug: estacion.slug }));
}

export async function generateMetadata({ params }) {
  const estacion = estacionesDallas.find((e) => e.slug === params.slug);
  if (!estacion) {
    return { title: 'Station not found', description: 'The requested station does not exist.' };
  }
  return {
    title: estacion.seo_title || `${estacion.nombre} Station — Dallas DART Light Rail`,
    description: estacion.meta_description || `${estacion.nombre} station guide and nearby attractions.`,
    openGraph: {
      title: estacion.seo_title,
      description: estacion.meta_description,
      url: `https://metroguia.mx/dallas/station/${estacion.slug}`,
    },
  };
}

export default function EstacionDallasPage({ params }) {
  const estacion = estacionesDallas.find((e) => e.slug === params.slug);

  if (!estacion) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--danger)' }}>Station not found</h1>
        <Link href="/dallas">
          <button style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: '#0066CC', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            Back to Dallas
          </button>
        </Link>
      </main>
    );
  }

  const colorLinea = LINE_COLORS[estacion.linea] || '#0066CC';
  const lineaData = lineasDallas.find(l => l.id === estacion.linea);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Dallas', item: 'https://metroguia.mx/dallas/' },
      { '@type': 'ListItem', position: 3, name: `Line ${estacion.linea}`, item: `https://metroguia.mx/dallas/line/${estacion.linea}/` },
      { '@type': 'ListItem', position: 4, name: estacion.nombre, item: `https://metroguia.mx/dallas/station/${estacion.slug}` },
    ],
  };

  const transitStationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TransitStation',
    name: `${estacion.nombre} Station`,
    description: estacion.meta_description || `${estacion.nombre} station on Dallas DART Light Rail.`,
    url: `https://metroguia.mx/dallas/station/${estacion.slug}/`,
    isAccessibleForFree: true,
    address: { '@type': 'PostalAddress', addressLocality: 'Dallas', addressRegion: 'Texas', addressCountry: 'US' },
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '05:00', closes: '23:30' },
  };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(transitStationSchema) }} />

      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg, ${colorLinea} 0%, ${colorLinea}cc 100%)`, color: '#fff', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '48px', height: '48px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: '700' }}>
              {(Array.isArray(estacion.linea) ? estacion.linea[0] : estacion.linea || '').charAt(0)}
            </span>
            <span style={{ fontSize: '1rem', fontWeight: '500' }}>Dallas, Texas</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.2' }}>
            {estacion.nombre}
          </h1>
          <p style={{ fontSize: '1.125rem', margin: '0', opacity: '0.95', maxWidth: '700px', lineHeight: '1.6' }}>
            {estacion.intro || `${estacion.nombre} is a major station on Dallas DART Light Rail.`}
          </p>
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* CONTENIDO PRINCIPAL */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '48px' }}>
          {/* COLUMNA IZQUIERDA */}
          <div>
            {estacion.descripcion_turistica && (
              <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text)', borderBottom: `3px solid ${colorLinea}`, paddingBottom: '12px' }}>
                  Tourist Information
                </h2>
                <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0', lineHeight: '1.8' }}>
                  {estacion.descripcion_turistica}
                </p>
              </div>
            )}

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

            {lineaData && (
              <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '24px', color: 'var(--text)', borderBottom: `3px solid ${colorLinea}`, paddingBottom: '12px' }}>
                  Line Information
                </h2>
                <div style={{ padding: '20px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)' }}>
                  <p style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text)', margin: '0 0 12px 0' }}>
                    {lineaData.inicio} → {lineaData.fin}
                  </p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 12px 0' }}>
                    {lineaData.estaciones.length} stations
                  </p>
                  <Link href={`/dallas/line/${lineaData.id}`}>
                    <button style={{ width: '100%', padding: '12px', backgroundColor: colorLinea, color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '0.95rem', fontWeight: '700', cursor: 'pointer' }}>
                      View Full Line
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* COLUMNA DERECHA */}
          <div>
            <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 12px 0', fontWeight: '600', letterSpacing: '0.1em' }}>
                Practical Info
              </h3>
              <div style={{ display: 'grid', gap: '16px' }}>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0 0 4px 0', fontWeight: '600', textTransform: 'uppercase' }}>
                    Hours
                  </p>
                  <p style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text)', margin: '0' }}>
                    5:00 AM – 11:30 PM
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0 0 4px 0', fontWeight: '600', textTransform: 'uppercase' }}>
                    Fare
                  </p>
                  <p style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text)', margin: '0' }}>
                    $2.50 USD
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0 0 4px 0', fontWeight: '600', textTransform: 'uppercase' }}>
                    Accessibility
                  </p>
                  <p style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--success)', margin: '0' }}>
                    ADA Compliant
                  </p>
                </div>
              </div>
            </div>
            <AffiliateTransportCard />
          </div>
        </div>
      </section>
    </main>
  );
}
