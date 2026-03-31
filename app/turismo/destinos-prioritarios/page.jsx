import { destinosPrioritarios } from '@/data/turismo/destinos-prioritarios';

export const metadata = {
  title: 'Destinos Prioritarios de México | MetroGuía',
  description: 'Descubre los 44 destinos turísticos más importantes de México, desde playas caribeñas hasta ciudades coloniales y parques naturales.'
};

export default function DestinosPrioritariosPage() {
  const tipoEmojis = {
    playa: '🏖️',
    ciudad: '🏙️',
    cultural: '🎭',
    naturaleza: '🌲',
    colonial: '🏛️'
  };

  return (
    <div style={{ padding: 'var(--spacing-lg)', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: 'var(--font-size-h1)', marginBottom: 'var(--spacing-md)', color: 'var(--color-text-primary)' }}>
        Destinos Prioritarios de México
      </h1>
      <p style={{ fontSize: 'var(--font-size-body)', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-lg)' }}>
        Los 44 destinos más importantes para descubrir la riqueza turística de México.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: 'var(--spacing-md)',
        marginTop: 'var(--spacing-lg)'
      }}>
        {destinosPrioritarios.map((destino) => (
          <a
            key={destino.slug}
            href={`/turismo/destinos-prioritarios/${destino.slug}`}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--border-radius)',
              padding: 'var(--spacing-md)',
              backgroundColor: 'var(--color-bg-secondary)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-sm)' }}>
              <span style={{ fontSize: '1.5em' }}>{tipoEmojis[destino.tipo] || '📍'}</span>
              <h2 style={{ fontSize: 'var(--font-size-h3)', margin: 0, color: 'var(--color-text-primary)' }}>
                {destino.nombre}
              </h2>
            </div>
            <p style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-sm)' }}>
              {destino.estado} • {destino.region}
            </p>
            <p style={{ fontSize: 'var(--font-size-body)', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-sm)', lineHeight: '1.6' }}>
              {destino.descripcion.split('.')[0]}.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-xs)', marginTop: 'auto' }}>
              {destino.highlights.slice(0, 2).map((highlight, idx) => (
                <span
                  key={idx}
                  style={{
                    backgroundColor: 'var(--color-accent)',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: 'var(--border-radius)',
                    fontSize: 'var(--font-size-small)'
                  }}
                >
                  {highlight}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
