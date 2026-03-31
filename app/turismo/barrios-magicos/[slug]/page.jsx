import { barriosMagicos } from '@/data/turismo/barrios-magicos';

const ciudadesConfig = {
  cdmx: { nombre: 'Ciudad de México', color: '#8B5CF6', metroguia_slug: 'cdmx' },
  monterrey: { nombre: 'Monterrey', color: '#3B82F6', metroguia_slug: 'monterrey' },
  puebla: { nombre: 'Puebla', color: '#F59E0B', metroguia_slug: 'puebla' },
  oaxaca: { nombre: 'Oaxaca', color: '#EF4444', metroguia_slug: 'oaxaca' },
  'san-cristobal': { nombre: 'San Cristóbal', color: '#10B981', metroguia_slug: 'san-cristobal' },
  guadalajara: { nombre: 'Guadalajara', color: '#EC4899', metroguia_slug: 'guadalajara' },
  merida: { nombre: 'Mérida', color: '#06B6D4', metroguia_slug: 'merida' },
  queretaro: { nombre: 'Querétaro', color: '#F97316', metroguia_slug: 'queretaro' },
  guanajuato: { nombre: 'Guanajuato', color: '#A855F7', metroguia_slug: 'guanajuato' },
  aguascalientes: { nombre: 'Aguascalientes', color: '#6366F1', metroguia_slug: 'aguascalientes' },
};

export async function generateStaticParams() {
  return barriosMagicos.map((barrio) => ({
    slug: barrio.slug,
  }));
}

export async function generateMetadata({ params }) {
  const barrio = barriosMagicos.find((b) => b.slug === params.slug);

  if (!barrio) {
    return {
      title: 'Barrio no encontrado',
    };
  }

  return {
    title: barrio.seo_title,
    description: barrio.meta_description,
    openGraph: {
      title: barrio.seo_title,
      description: barrio.meta_description,
      type: 'article',
      url: `https://metroguia.mx/turismo/barrios-magicos/${barrio.slug}`,
    },
  };
}

export default function BarrioDetailPage({ params }) {
  const barrio = barriosMagicos.find((b) => b.slug === params.slug);

  if (!barrio) {
    return (
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1>Barrio no encontrado</h1>
        <p>
          <a href="/turismo/barrios-magicos" style={{ color: '#0ea5e9', textDecoration: 'none' }}>
            Volver a barrios mágicos
          </a>
        </p>
      </main>
    );
  }

  const ciudadColor = ciudadesConfig[barrio.ciudad_metroguia]?.color || '#6b7280';

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TouristAttractionPage',
            name: barrio.nombre,
            description: barrio.descripcion,
            url: `https://metroguia.mx/turismo/barrios-magicos/${barrio.slug}`,
            geo: {
              '@type': 'GeoCoordinates',
              latitude: barrio.coords.lat,
              longitude: barrio.coords.lng,
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: barrio.ciudad,
              addressRegion: barrio.estado,
              addressCountry: 'MX',
            },
          }),
        }}
      />

      <div style={{ backgroundColor: ciudadColor, color: 'white', padding: '3rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <a
            href="/turismo/barrios-magicos"
            style={{
              display: 'inline-block',
              color: 'white',
              textDecoration: 'none',
              marginBottom: '1rem',
              fontSize: '0.95rem',
              opacity: 0.9,
            }}
          >
            ← Volver a barrios mágicos
          </a>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0.5rem 0', color: 'white' }}>
            {barrio.nombre}
          </h1>
          <p style={{ fontSize: '1.125rem', margin: '0.5rem 0', opacity: 0.95 }}>
            {barrio.ciudad}, {barrio.estado}
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.3)', padding: '0.5rem 1rem', borderRadius: '0.25rem' }}>
              {ciudadesConfig[barrio.ciudad_metroguia]?.nombre}
            </span>
            {barrio.estacion_cercana && (
              <span style={{ backgroundColor: 'rgba(255,255,255,0.3)', padding: '0.5rem 1rem', borderRadius: '0.25rem' }}>
                🚇 Cerca de: {barrio.estacion_cercana}
              </span>
            )}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
            Sobre este barrio
          </h2>
          <p style={{ fontSize: '1.0625rem', lineHeight: '1.75', color: '#374151', marginBottom: '1rem' }}>
            {barrio.descripcion}
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>
            Lo que no puedes perder
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {barrio.highlights.map((highlight, index) => (
              <li
                key={index}
                style={{
                  padding: '1rem',
                  marginBottom: '0.75rem',
                  backgroundColor: '#f3f4f6',
                  borderLeft: `4px solid ${ciudadColor}`,
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
            {barrio.tips.map((tip, index) => (
              <li
                key={index}
                style={{
                  padding: '1rem',
                  marginBottom: '0.75rem',
                  backgroundColor: '#f3f4f6',
                  borderLeft: `4px solid ${ciudadColor}`,
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
            {barrio.como_llegar}
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
            Ubicación
          </h2>
          <div style={{ backgroundColor: '#f3f4f6', padding: '2rem', borderRadius: '0.5rem', textAlign: 'center' }}>
            <p style={{ color: '#6b7280', margin: 0 }}>
              Coordenadas: {barrio.coords.lat.toFixed(4)}, {barrio.coords.lng.toFixed(4)}
            </p>
          </div>
        </section>

        {barrio.estacion_cercana && (
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
              Estación de Metro Cercana
            </h2>
            <div
              style={{
                backgroundColor: '#f0f9ff',
                border: `2px solid ${ciudadColor}`,
                padding: '1.5rem',
                borderRadius: '0.5rem',
              }}
            >
              <p style={{ fontSize: '1.0625rem', color: '#1f2937', margin: 0 }}>
                🚇 {barrio.estacion_cercana}
              </p>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
