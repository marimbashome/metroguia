import { playas } from '@/data/turismo/playas';

export const metadata = {
  title: 'Playas de México | MetroGuía',
  description: 'Explora las mejores playas de México. Descubre playas del Caribe, Pacífico, Golfo de México y Mar de Cortés. Información, tips y cómo llegar.',
  openGraph: {
    title: 'Playas de México',
    description: 'Las mejores playas mexicanas clasificadas por costa',
    type: 'website',
  },
};

const costaConfig = {
  caribe: { nombre: 'Caribe', color: '#06B6D4' },
  pacifico: { nombre: 'Pacífico', color: '#16A34A' },
  golfo: { nombre: 'Golfo de México', color: '#D97706' },
  'mar-de-cortes': { nombre: 'Mar de Cortés', color: '#DC2626' },
};

export default function PlayasPage() {
  const playasPorCosta = playas.reduce((acc, playa) => {
    if (!acc[playa.costa]) {
      acc[playa.costa] = [];
    }
    acc[playa.costa].push(playa);
    return acc;
  }, {});

  const costasOrdenadas = ['caribe', 'pacifico', 'golfo', 'mar-de-cortes'];

  return (
    <main style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>
        Playas de México
      </h1>
      <p style={{ fontSize: '1.125rem', color: '#6b7280', marginBottom: '3rem', maxWidth: '700px' }}>
        Descubre las playas más hermosas de México. Desde el turquesa Caribe hasta la belleza salvaje del Pacífico, 
        encuentra tu destino perfecto.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Playas de México',
            description: 'Las mejores playas mexicanas',
            url: 'https://metroguia.mx/turismo/playas',
            itemListElement: playas.map((playa, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              url: `https://metroguia.mx/turismo/playas/${playa.slug}`,
              name: playa.nombre,
              description: playa.descripcion,
            })),
          }),
        }}
      />

      {costasOrdenadas.map(
        (costa) =>
          playasPorCosta[costa] && (
            <section key={costa} style={{ marginBottom: '4rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '2rem',
                  paddingBottom: '1rem',
                  borderBottom: `3px solid ${costaConfig[costa].color}`,
                }}
              >
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: costaConfig[costa].color,
                  }}
                />
                <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
                  {costaConfig[costa].nombre}
                </h2>
                <span style={{ color: '#9ca3af', fontSize: '1rem' }}>
                  {playasPorCosta[costa].length} playas
                </span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                  gap: '1.5rem',
                }}
              >
                {playasPorCosta[costa].map((playa) => (
                  <a
                    key={playa.slug}
                    href={`/turismo/playas/${playa.slug}`}
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
                        {playa.nombre}
                      </h3>
                      <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
                        {playa.destino}, {playa.estado}
                      </p>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                      <span
                        style={{
                          display: 'inline-block',
                          backgroundColor: costaConfig[costa].color,
                          color: 'white',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '9999px',
                          fontSize: '0.75rem',
                          fontWeight: '500',
                        }}
                      >
                        {playa.tipo}
                      </span>
                      {playa.blueflag && (
                        <span
                          style={{
                            display: 'inline-block',
                            backgroundColor: '#0ea5e9',
                            color: 'white',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '9999px',
                            fontSize: '0.75rem',
                            fontWeight: '500',
                          }}
                        >
                          🚩 Blue Flag
                        </span>
                      )}
                    </div>

                    <p style={{ fontSize: '0.95rem', color: '#4b5563', margin: 0, lineHeight: '1.5' }}>
                      {playa.descripcion.length > 120
                        ? playa.descripcion.substring(0, 120) + '...'
                        : playa.descripcion}
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
