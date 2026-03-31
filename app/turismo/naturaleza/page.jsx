import { naturaleza } from '@/data/turismo/naturaleza';

export const metadata = {
  title: 'Naturaleza y Aventura en México | MetroGuía',
  description: 'Descubre 40 destinos naturales para aventura: montañismo, senderismo, buceo, cascadas y reservas de biosfera en México.'
};

export default function NaturalezaPage() {
  const tipoEmojis = {
    senderismo: '🥾',
    agua: '🏊',
    montañismo: '⛰️',
    desierto: '🏜️',
    naturaleza: '🌿',
    ciclismo: '🚴',
    playa: '🏖️'
  };

  const nivelColores = {
    bajo: '#4CAF50',
    intermedio: '#FF9800',
    avanzado: '#F44336'
  };

  return (
    <div style={{ padding: 'var(--spacing-lg)', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: 'var(--font-size-h1)', marginBottom: 'var(--spacing-md)', color: 'var(--color-text-primary)' }}>
        Naturaleza y Aventura en México
      </h1>
      <p style={{ fontSize: 'var(--font-size-body)', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-lg)' }}>
        Explora 40 destinos naturales para senderismo, buceo, montañismo y aventura en paisajes diversos de México.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: 'var(--spacing-md)',
        marginTop: 'var(--spacing-lg)'
      }}>
        {naturaleza.map((destino) => (
          <a
            key={destino.slug}
            href={`/turismo/naturaleza/${destino.slug}`}
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--spacing-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                <span style={{ fontSize: '1.8em' }}>{tipoEmojis[destino.tipo] || '🌍'}</span>
                <h2 style={{ fontSize: 'var(--font-size-h3)', margin: 0, color: 'var(--color-text-primary)' }}>
                  {destino.nombre}
                </h2>
              </div>
              <span
                style={{
                  backgroundColor: nivelColores[destino.nivel_dificultad] || '#999',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: 'var(--font-size-small)',
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap'
                }}
              >
                {destino.nivel_dificultad}
              </span>
            </div>
            <p style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-sm)' }}>
              {destino.estado} • {destino.region}
            </p>
            <p style={{ fontSize: 'var(--font-size-body)', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-sm)', lineHeight: '1.6' }}>
              {destino.descripcion.split('.')[0]}.
            </p>
            <div style={{
              display: 'flex',
              gap: 'var(--spacing-sm)',
              marginTop: 'auto',
              fontSize: 'var(--font-size-small)',
              color: 'var(--color-text-secondary)'
            }}>
              <span>⏱️ {destino.duracion_sugerida}</span>
              <span>📍 {destino.tipo}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
