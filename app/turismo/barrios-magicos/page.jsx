import { barriosMagicos } from '@/data/turismo/barrios-magicos';

export const metadata = {
  title: 'Barrios Mágicos de México | MetroGuía',
  description: 'Explora los Barrios Mágicos de México. Descubre barrios históricos, bohemios y culturales con tradición, artesanías y autenticidad mexicana.',
  openGraph: {
    title: 'Barrios Mágicos de México',
    description: 'Los barrios más mágicos y auténticos de México',
    type: 'website',
  },
};

const ciudadesConfig = {
  cdmx: { nombre: 'Ciudad de México', color: '#8B5CF6' },
  monterrey: { nombre: 'Monterrey', color: '#3B82F6' },
  puebla: { nombre: 'Puebla', color: '#F59E0B' },
  oaxaca: { nombre: 'Oaxaca', color: '#EF4444' },
  'san-cristobal': { nombre: 'San Cristóbal', color: '#10B981' },
  guadalajara: { nombre: 'Guadalajara', color: '#EC4899' },
  merida: { nombre: 'Mérida', color: '#06B6D4' },
  queretaro: { nombre: 'Querétaro', color: '#F97316' },
  guanajuato: { nombre: 'Guanajuato', color: '#A855F7' },
  aguascalientes: { nombre: 'Aguascalientes', color: '#6366F1' },
};

export default function BarriosMagicosPage() {
  const barriosPorCiudad = barriosMagicos.reduce((acc, barrio) => {
    const ciudad = barrio.ciudad_metroguia;
    if (!acc[ciudad]) {
      acc[ciudad] = [];
    }
    acc[ciudad].push(barrio);
    return acc;
  }, {});

  const ciudadesOrdenadas = Object.keys(ciudadesConfig).filter((ciudad) => barriosPorCiudad[ciudad]);

  return (
    <main style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>
        Barrios Mágicos de México
      </h1>
      <p style={{ fontSize: '1.125rem', color: '#6b7280', marginBottom: '3rem', maxWidth: '700px' }}>
        Descubre los barrios más auténticos, históricos y culturales de México. Desde bohemios centros artísticos 
        hasta mercados coloridos, explora el corazón mágico de las ciudades mexicanas.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Barrios Mágicos de México',
            description: 'Los barrios más mágicos de México',
            url: 'https://metroguia.mx/turismo/barrios-magicos',
            itemListElement: barriosMagicos.map((barrio, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              url: `https://metroguia.mx/turismo/barrios-magicos/${barrio.slug}`,
              name: barrio.nombre,
              description: barrio.descripcion,
            })),
          }),
        }}
      />

      {ciudadesOrdenadas.map(
        (ciudad) =>
          barriosPorCiudad[ciudad] && (
            <section key={ciudad} style={{ marginBottom: '4rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '2rem',
                  paddingBottom: '1rem',
                  borderBottom: `3px solid ${ciudadesConfig[ciudad].color}`,
                }}
              >
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: ciudadesConfig[ciudad].color,
                  }}
                />
                <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
                  {ciudadesConfig[ciudad].nombre}
                </h2>
                <span style={{ color: '#9ca3af', fontSize: '1rem' }}>
                  {barriosPorCiudad[ciudad].length} barrios
                </span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                  gap: '1.5rem',
                }}
              >
                {barriosPorCiudad[ciudad].map((barrio) => (
                  <a
                    key={barrio.slug}
                    href={`/turismo/barrios-magicos/${barrio.slug}`}
                    style={{
                      display: 'block',
                      textDecoration: 'none',
                      color: 'inherit',
                      borderRadius: '0.5rem',
                      border: '1px solid #e5e7eb',
                      padding: '1.5rem',
                      transition: 'all 0.3s ease',
                      backgroundColor: '#ffffff',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    }}
                  >
                    <div style={{ marginBottom: '0.75rem' }}>
                      <h3
                        style={{
                          fontSize: '1.25rem',
                          fontWeight: 'bold',
                          color: '#1f2937',
                          margin: '0 0 0.25rem 0',
                        }}
                      >
                        {barrio.nombre}
                      </h3>
                      <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
                        {barrio.ciudad}, {barrio.estado}
                      </p>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                      <span
                        style={{
                          display: 'inline-block',
                          backgroundColor: ciudadesConfig[ciudad].color,
                          color: 'white',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '9999px',
                          fontSize: '0.75rem',
                          fontWeight: '500',
                        }}
                      >
                        {ciudadesConfig[ciudad].nombre}
                      </span>
                      {barrio.estacion_cercana && (
                        <span
                          style={{
                            display: 'inline-block',
                            backgroundColor: '#06B6D4',
                            color: 'white',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '9999px',
                            fontSize: '0.75rem',
                            fontWeight: '500',
                          }}
                        >
                          🚇 {barrio.estacion_cercana}
                        </span>
                      )}
                    </div>

                    <p style={{ fontSize: '0.95rem', color: '#4b5563', margin: 0, lineHeight: '1.5' }}>
                      {barrio.descripcion.length > 120
                        ? barrio.descripcion.substring(0, 120) + '...'
                        : barrio.descripcion}
                    </p>
                  </a>
                ))}
              </div>
            </section>
          )
      )}
    </main>
  );
}
