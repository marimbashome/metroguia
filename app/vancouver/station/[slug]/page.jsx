import { estacionesVANCOUVER } from '@/data/vancouver/estaciones';
import { lineasVANCOUVER } from '@/data/vancouver/lineas-detalle';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import Link from 'next/link';

const LINE_COLORS = { 'Expo': '#007399', 'Millennium': '#9F7602', 'Canada': '#00B5AD' };

export async function generateStaticParams() {
  return estacionesVANCOUVER.map((estacion) => ({ slug: estacion.slug }));
}

export async function generateMetadata({ params }) {
  const estacion = estacionesVANCOUVER.find((e) => e.slug === params.slug);
  if (!estacion) {
    return { title: 'Station not found', description: 'The requested station does not exist.' };
  }
  return {
    title: estacion.seo_title || `${estacion.nombre} Station — Vancouver SkyTrain`,
    description: estacion.meta_description || `${estacion.nombre} station guide and nearby attractions.`,
    openGraph: {
      title: estacion.seo_title,
      description: estacion.meta_description,
      url: `https://metroguia.mx/vancouver/station/${estacion.slug}`,
    },
  };
}

export default function EstacionVancouverPage({ params }) {
  const estacion = estacionesVANCOUVER.find((e) => e.slug === params.slug);

  if (!estacion) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--danger)' }}>Station not found</h1>
        <Link href="/vancouver">
          <button style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: '#00A3E0', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            Back to Vancouver
          </button>
        </Link>
      </main>
    );
  }

  const colorLinea = LINE_COLORS[estacion.linea] || '#00A3E0';
  const lineaData = lineasVANCOUVER.find(l => l.id === estacion.linea);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Vancouver', item: 'https://metroguia.mx/vancouver/' },
      { '@type': 'ListItem', position: 3, name: `${estacion.linea}`, item: `https://metroguia.mx/vancouver/line/${estacion.linea}/` },
      { '@type': 'ListItem', position: 4, name: estacion.nombre, item: `https://metroguia.mx/vancouver/station/${estacion.slug}` },
    ],
  };

  const transitStationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TransitStation',
    name: `${estacion.nombre} Station`,
    description: estacion.meta_description || `${estacion.nombre} station on Vancouver SkyTrain.`,
    url: `https://metroguia.mx/vancouver/station/${estacion.slug}/`,
    isAccessibleForFree: true,
    address: { '@type': 'PostalAddress', addressLocality: 'Vancouver', addressRegion: 'British Columbia', addressCountry: 'CA' },
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '05:00', closes: '01:00' },
  };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(transitStationSchema) }} />

      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg, ${colorLinea} 0%, ${colorLinea}cc 100%)`, color: '#fff', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '48px', height: '48px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.125rem', fontWeight: '700' }}>
              🚆
            </span>
            <span style={{ fontSize: '1rem', fontWeight: '500' }}>Vancouver, BC, Canada</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.2' }}>
            {estacion.nombre}
          </h1>
          <p style={{ fontSize: '1.125rem', margin: '0', opacity: '0.95', maxWidth: '700px', lineHeight: '1.6' }}>
            {estacion.intro || `${estacion.nombre} is a station on Vancouver SkyTrain.`}
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
                    {lineaData.nombre}
                  </p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 12px 0' }}>
                    {lineaData.estaciones.length} stations
                  </p>
                  <Link href={`/vancouver/line/${lineaData.id}`}>
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
                    5:00 AM – 1:00 AM
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0 0 4px 0', fontWeight: '600', textTransform: 'uppercase' }}>
                    Fare
                  </p>
                  <p style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text)', margin: '0' }}>
                    CAD $3.20–5.50
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0 0 4px 0', fontWeight: '600', textTransform: 'uppercase' }}>
                    Currency
                  </p>
                  <p style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text)', margin: '0' }}>
                    Canadian Dollar
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
