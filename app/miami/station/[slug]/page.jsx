import { estacionesMiami } from '@/data/miami/estaciones';
import { lineasMiami } from '@/data/miami/lineas-detalle';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import Link from 'next/link';

const LINE_COLORS = { 'M1': '#E41E3F', 'M2': '#00B4D8', 'LOOP': '#00B4D8', 'OMNI': '#00B4D8' };

export async function generateStaticParams() {
  return estacionesMiami.map((estacion) => ({
    slug: estacion.slug,
  }));
}

export async function generateMetadata({ params }) {
  const estacion = estacionesMiami.find((e) => e.slug === params.slug);
  if (!estacion) {
    return {
      title: 'Station not found',
      description: 'The requested station does not exist.',
    };
  }
  return {
    title: estacion.seo_title || `${estacion.nombre} Station — Miami Metrorail & Metromover`,
    description: estacion.meta_description || `${estacion.nombre} station guide, nearby attractions, and transit connections.`,
    openGraph: {
      title: estacion.seo_title,
      description: estacion.meta_description,
      url: `https://metroguia.mx/miami/station/${estacion.slug}`,
    },
  };
}

export default function EstacionMiamiPage({ params }) {
  const estacion = estacionesMiami.find((e) => e.slug === params.slug);

  if (!estacion) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--danger)' }}>Station not found</h1>
        <Link href="/miami">
          <button style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: '#FF6B35', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            Back to Miami
          </button>
        </Link>
      </main>
    );
  }

  const colorLinea = LINE_COLORS[estacion.linea] || 'var(--miami)';
  const lineaData = lineasMiami.find(l => l.id === estacion.linea);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Miami', item: 'https://metroguia.mx/miami/' },
      { '@type': 'ListItem', position: 3, name: `Line ${estacion.linea}`, item: `https://metroguia.mx/miami/line/${estacion.linea}/` },
      { '@type': 'ListItem', position: 4, name: estacion.nombre, item: `https://metroguia.mx/miami/station/${estacion.slug}` },
    ],
  };

  const transitStationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TransitStation',
    name: `${estacion.nombre} Station`,
    description: estacion.meta_description || `${estacion.nombre} station on Miami's Metrorail and Metromover.`,
    url: `https://metroguia.mx/miami/station/${estacion.slug}/`,
    isAccessibleForFree: true,
    address: { '@type': 'PostalAddress', addressLocality: 'Miami', addressRegion: estacion.municipio || 'Florida', addressCountry: 'US' },
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '05:00', closes: '23:30' },
  };

  const faqItems = [];
  faqItems.push({ '@type': 'Question', name: `How do I get to ${estacion.nombre} station in Miami?`, acceptedAnswer: { '@type': 'Answer', text: `${estacion.nombre} station is on Line ${estacion.linea}. Use MetroGuia's trip planner to find the best route.` } });
  if (estacion.pois && estacion.pois.length > 0) {
    const poiList = estacion.pois.slice(0, 5).map(p => typeof p === 'string' ? p : `${p.nombre} (${p.tipo}, ${p.distancia})`).join(', ');
    faqItems.push({ '@type': 'Question', name: `What's near ${estacion.nombre} station?`, acceptedAnswer: { '@type': 'Answer', text: `You'll find: ${poiList}.` } });
  }
  faqItems.push({ '@type': 'Question', name: `What are the fare and hours?`, acceptedAnswer: { '@type': 'Answer', text: `Metrorail: $2.75 USD. Metromover: FREE. Hours: 5:00 AM – 11:30 PM (Metrorail) or 11:00 PM (Metromover).` } });
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
            <span style={{ width: '48px', height: '48px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: '700' }}>
              {estacion.linea}
            </span>
            <span style={{ fontSize: '1rem', fontWeight: '500' }}>{estacion.municipio || 'Miami-Dade'}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.2' }}>
            {estacion.nombre}
          </h1>
          <p style={{ fontSize: '1.125rem', margin: '0', opacity: '0.95', maxWidth: '700px', lineHeight: '1.6' }}>
            {estacion.intro || `${estacion.nombre} is a major transit hub on Miami's Metrorail and Metromover system.`}
          </p>
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* CONTENIDO PRINCIPAL */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '48px' }}>
          {/* COLUMNA IZQUIERDA */}
          <div>
            {/* DESCRIPCIÓN TURÍSTICA */}
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

            {/* PUNTOS DE INTERÉS */}
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

            {/* CONNECTIONS */}
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
                  <Link href={`/miami/line/${lineaData.id}`}>
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
              <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 12px 0', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
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
                    {estacion.linea === 'LOOP' || estacion.linea === 'OMNI' ? 'FREE (Metromover)' : '$2.75 USD'}
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
