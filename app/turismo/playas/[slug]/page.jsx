import { playas } from '@/data/turismo/playas';

const costaConfig = {
  caribe: { nombre: 'Caribe', color: '#06B6D4' },
  pacifico: { nombre: 'Pacífico', color: '#16A34A' },
  golfo: { nombre: 'Golfo de México', color: '#D97706' },
  'mar-de-cortes': { nombre: 'Mar de Cortés', color: '#DC2626' },
};

export async function generateStaticParams() {
  return playas.map((playa) => ({
    slug: playa.slug,
  }));
}

export async function generateMetadata({ params }) {
  const playa = playas.find((p) => p.slug === params.slug);

  if (!playa) {
    return {
      title: 'Playa no encontrada',
    };
  }

  return {
    title: playa.seo_title,
    description: playa.meta_description,
    openGraph: {
      title: playa.seo_title,
      description: playa.meta_description,
      type: 'article',
      url: `https://metroguia.mx/turismo/playas/${playa.slug}`,
    },
  };
}

export default function PlayaDetailPage({ params }) {
  const playa = playas.find((p) => p.slug === params.slug);

  if (!playa) {
    return (
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1>Playa no encontrada</h1>
        <p>
          <a href="/turismo/playas" style={{ color: '#0ea5e9', textDecoration: 'none' }}>
            Volver a playas
          </a>
        </p>
      </main>
    );
  }

  const costaColor = costaConfig[playa.costa].color;

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TouristAttractionPage',
            name: playa.nombre,
            description: playa.descripcion,
            url: `https://metroguia.mx/turismo/playas/${playa.slug}`,
            geo: {
              '@type': 'GeoCoordinates',
              latitude: playa.coords.lat,
              longitude: playa.coords.lng,
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: playa.destino,
              addressRegion: playa.estado,
              addressCountry: 'MX',
            },
          }),
        }}
      />

      <div style={{ backgroundColor: costaColor, color: 'white', padding: '3rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <a
            href="/turismo/playas"
            style={{
              display: 'inline-block',
              color: 'white',
              textDecoration: 'none',
              marginBottom: '1rem',
              fontSize: '0.95rem',
              opacity: 0.9,
            }}
          >
            ← Volver a playas
          </a>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0.5rem 0', color: 'white' }}>
            {playa.nombre}
          </h1>
          <p style={{ fontSize: '1.125rem', margin: '0.5rem 0', opacity: 0.95 }}>
            {playa.destino}, {playa.estado}
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.3)', padding: '0.5rem 1rem', borderRadius: '0.25rem' }}>
              {playa.tipo}
            </span>
            {playa.blueflag && (
              <span style={{ backgroundColor: 'rgba(255,255,255,0.3)', padding: '0.5rem 1rem', borderRadius: '0.25rem' }}>
                🚩 Blue Flag
              </span>
            )}
            <span style={{ backgroundColor: 'rgba(255,255,255,0.3)', padding: '0.5rem 1rem', borderRadius: '0.25rem' }}>
              {costaConfig[playa.costa].nombre}
            </span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
            Sobre esta playa
          </h2>
          <p style={{ fontSize: '1.0625rem', lineHeight: '1.75', color: '#374151', marginBottom: '1rem' }}>
            {playa.descripcion}
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>
            Lo que no puedes perder
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {playa.highlights.map((highlight, index) => (
              <li
                key={index}
                style={{
                  padding: '1rem',
                  marginBottom: '0.75rem',
                  backgroundColor: '#f3f4f6',
                  borderLeft: `4px solid ${costaColor}`,
                  borderRadius: '0.25rem',
                }}
              >
                <p style={{ margin: 0, color: '#1f2937', fontSize: '1rem' }}>{highlight}</p>
              </li>
            ))}
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>
            Tips locales
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {playa.tips.map((tip, index) => (
              <li
                key={index}
                style={{
                  padding: '1rem',
                  marginBottom: '0.75rem',
                  backgroundColor: '#f3f4f6',
                  borderLeft: `4px solid ${costaColor}`,
                  borderRadius: '0.25rem',
                }}
              >
                <p style={{ margin: 0, color: '#1f2937', fontSize: '1rem' }}>{tip}</p>
              </li>
            ))}
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
            Cómo llegar
          </h2>
          <p style={{ fontSize: '1.0625rem', lineHeight: '1.75', color: '#374151', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem' }}>
            {playa.como_llegar}
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
            Ubicación
          </h2>
          <div style={{ backgroundColor: '#f3f4f6', padding: '2rem', borderRadius: '0.5rem', textAlign: 'center' }}>
            <p style={{ color: '#6b7280', margin: 0 }}>
              Coordenadas: {playa.coords.lat.toFixed(4)}, {playa.coords.lng.toFixed(4)}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
