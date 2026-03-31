import { rutasGastronomicas } from '@/data/turismo/rutas-gastronomicas';

export async function generateStaticParams() {
  return rutasGastronomicas.map((ruta) => ({
    slug: ruta.slug,
  }));
}

export async function generateMetadata({ params }) {
  const ruta = rutasGastronomicas.find((r) => r.slug === params.slug);
  if (!ruta) return { title: 'Ruta no encontrada' };

  return {
    title: ruta.seo_title,
    description: ruta.meta_description,
    keywords: ruta.nombre,
    openGraph: {
      title: ruta.seo_title,
      description: ruta.meta_description,
    },
  };
}

export default function RutaGastronomicaDetailPage({ params }) {
  const ruta = rutasGastronomicas.find((r) => r.slug === params.slug);

  if (!ruta) {
    return (
      <main style={{ minHeight: '100vh', backgroundColor: 'var(--color-bg-primary)' }}>
        <div style={{ padding: 'var(--spacing-lg)', textAlign: 'center' }}>
          <h1 style={{ color: 'var(--color-text-primary)' }}>Ruta no encontrada</h1>
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--color-bg-primary)' }}>
      <section style={{ backgroundColor: 'var(--color-accent)', color: 'white', padding: 'var(--spacing-xl)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: 'var(--spacing-sm)' }}>
            {ruta.h1}
          </h1>
          <p style={{ fontSize: '1rem', opacity: 0.9 }}>
            {ruta.estados.join(', ')} • {ruta.mejor_epoca}
          </p>
        </div>
      </section>

      <section style={{ padding: 'var(--spacing-lg)', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>
          <div>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-md)' }}>
              Descripción
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: 'var(--spacing-md)' }}>
              {ruta.descripcion}
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: 'var(--spacing-md)', borderRadius: 'var(--border-radius-lg)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: 'var(--spacing-sm)' }}>Información Práctica</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)', fontSize: '0.95rem' }}>
              <div>
                <strong style={{ color: 'var(--color-accent)' }}>Duración:</strong> {ruta.duracion_sugerida}
              </div>
              <div>
                <strong style={{ color: 'var(--color-accent)' }}>Mejor época:</strong> {ruta.mejor_epoca}
              </div>
              <div>
                <strong style={{ color: 'var(--color-accent)' }}>Cómo llegar:</strong> {ruta.como_llegar}
              </div>
              <div>
                <strong style={{ color: 'var(--color-accent)' }}>Región:</strong> {ruta.region}
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>
          <div>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-md)' }}>
              Platillos Emblemáticos
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {ruta.platillos_emblematicos.map((platillo, idx) => (
                <li
                  key={idx}
                  style={{
                    padding: 'var(--spacing-sm)',
                    borderBottom: '1px solid var(--color-border)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  {platillo}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-md)' }}>
              Paradas Clave
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {ruta.paradas_clave.map((parada, idx) => (
                <li
                  key={idx}
                  style={{
                    padding: 'var(--spacing-sm)',
                    borderBottom: '1px solid var(--color-border)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  {parada}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: 'var(--spacing-lg)', borderRadius: 'var(--border-radius-lg)', marginBottom: 'var(--spacing-xl)' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-md)' }}>
            Consejos Locales
          </h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {ruta.tips.map((tip, idx) => (
              <li key={idx} style={{ padding: 'var(--spacing-sm)', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                • {tip}
              </li>
            ))}
          </ul>
        </div>

        {ruta.ciudad_metroguia && (
          <div style={{ padding: 'var(--spacing-md)', backgroundColor: 'var(--color-accent-light)', borderRadius: 'var(--border-radius-lg)', marginBottom: 'var(--spacing-xl)' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--color-accent)', marginBottom: 'var(--spacing-sm)' }}>
              Accesible desde MetroGuía
            </h3>
            <a href={`/metro/${ruta.ciudad_metroguia}`} style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>
              Ver guía de movilidad →
            </a>
          </div>
        )}
      </section>
    </main>
  );
}
