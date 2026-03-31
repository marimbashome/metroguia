import { destinosPrioritarios } from '@/data/turismo/destinos-prioritarios';

export async function generateStaticParams() {
  return destinosPrioritarios.map((destino) => ({
    slug: destino.slug
  }));
}

export async function generateMetadata({ params }) {
  const destino = destinosPrioritarios.find((d) => d.slug === params.slug);
  if (!destino) {
    return {
      title: 'Destino no encontrado | MetroGuía'
    };
  }
  return {
    title: destino.seo_title,
    description: destino.meta_description
  };
}

export default function DestinoDetailPage({ params }) {
  const destino = destinosPrioritarios.find((d) => d.slug === params.slug);

  if (!destino) {
    return <div style={{ padding: 'var(--spacing-lg)' }}>Destino no encontrado</div>;
  }

  const tipoEmojis = {
    playa: '🏖️',
    ciudad: '🏙️',
    cultural: '🎭',
    naturaleza: '🌲',
    colonial: '🏛️'
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: 'var(--spacing-lg)' }}>
      <div style={{
        backgroundColor: 'var(--color-accent)',
        color: 'white',
        padding: 'var(--spacing-lg)',
        borderRadius: 'var(--border-radius)',
        marginBottom: 'var(--spacing-lg)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
          <span style={{ fontSize: '2.5em' }}>{tipoEmojis[destino.tipo] || '📍'}</span>
          <h1 style={{ margin: 0, fontSize: 'var(--font-size-h1)' }}>{destino.h1}</h1>
        </div>
        <p style={{ margin: '0 0 var(--spacing-sm) 0', fontSize: 'var(--font-size-body)' }}>
          {destino.estado}, {destino.region}
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: 'var(--spacing-lg)',
        marginBottom: 'var(--spacing-lg)'
      }}>
        <div>
          <h2 style={{ fontSize: 'var(--font-size-h2)', marginBottom: 'var(--spacing-md)', color: 'var(--color-text-primary)' }}>
            Descripción
          </h2>
          <p style={{ fontSize: 'var(--font-size-body)', color: 'var(--color-text-secondary)', lineHeight: '1.8' }}>
            {destino.descripcion}
          </p>
        </div>
        <aside style={{
          backgroundColor: 'var(--color-bg-secondary)',
          padding: 'var(--spacing-md)',
          borderRadius: 'var(--border-radius)',
          border: '1px solid var(--color-border)'
        }}>
          <h3 style={{ fontSize: 'var(--font-size-h3)', marginBottom: 'var(--spacing-md)', color: 'var(--color-text-primary)' }}>
            Información Práctica
          </h3>
          <div style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-secondary)', lineHeight: '1.8' }}>
            <p><strong>Región:</strong> {destino.region}</p>
            <p><strong>Estado:</strong> {destino.estado}</p>
            <p><strong>Tipo:</strong> {destino.tipo}</p>
            <p><strong>Coordenadas:</strong> {destino.coords.lat}, {destino.coords.lng}</p>
          </div>
        </aside>
      </div>

      <div style={{ marginBottom: 'var(--spacing-lg)' }}>
        <h2 style={{ fontSize: 'var(--font-size-h2)', marginBottom: 'var(--spacing-md)', color: 'var(--color-text-primary)' }}>
          Atractivos Principales
        </h2>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--spacing-md)'
        }}>
          {destino.highlights.map((highlight, idx) => (
            <li key={idx} style={{
              backgroundColor: 'var(--color-bg-secondary)',
              padding: 'var(--spacing-md)',
              borderRadius: 'var(--border-radius)',
              border: `3px solid var(--color-accent)`
            }}>
              <p style={{ margin: 0, fontSize: 'var(--font-size-body)', color: 'var(--color-text-primary)', fontWeight: 'bold' }}>
                {highlight}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginBottom: 'var(--spacing-lg)' }}>
        <h2 style={{ fontSize: 'var(--font-size-h2)', marginBottom: 'var(--spacing-md)', color: 'var(--color-text-primary)' }}>
          Cómo Llegar
        </h2>
        <p style={{ fontSize: 'var(--font-size-body)', color: 'var(--color-text-secondary)', lineHeight: '1.8' }}>
          {destino.como_llegar}
        </p>
      </div>

      {destino.ciudad_metroguia && (
        <div style={{
          backgroundColor: 'var(--color-bg-secondary)',
          padding: 'var(--spacing-md)',
          borderRadius: 'var(--border-radius)',
          border: '2px solid var(--color-accent)',
          marginBottom: 'var(--spacing-lg)'
        }}>
          <p style={{ margin: 0, fontSize: 'var(--font-size-body)', color: 'var(--color-text-primary)' }}>
            Descubre más sobre <a href={`/ciudades/${destino.ciudad_metroguia}`} style={{ color: 'var(--color-accent)', textDecoration: 'none' }}>
              {destino.ciudad_metroguia}
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
