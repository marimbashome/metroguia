import { rutasGastronomicas } from '@/data/turismo/rutas-gastronomicas';

export const metadata = {
  title: 'Rutas Gastronómicas de México | MetroGuía',
  description: 'Explora las mejores rutas gastronómicas de México. Descubre rutas del tequila, mezcal, vino, café, cacao y más. Viajes culinarios únicos.',
  openGraph: {
    title: 'Rutas Gastronómicas de México',
    description: 'Explora las mejores rutas gastronómicas de México. Descubre rutas del tequila, mezcal, vino, café, cacao y más. Viajes culinarios únicos.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rutas Gastronómicas de México',
    description: 'Explora las mejores rutas gastronómicas de México. Descubre rutas del tequila, mezcal, vino, café, cacao y más. Viajes culinarios únicos.',
  },
  alternates: {
    canonical: 'https://metroguia.mx/turismo/rutas-gastronomicas/',
  },
};

export default function RutasGastronomicasPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Turismo', item: 'https://metroguia.mx/turismo' },
      { '@type': 'ListItem', position: 3, name: 'Rutas Gastronómicas', item: 'https://metroguia.mx/turismo/rutas-gastronomicas' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--color-bg-primary)' }}>
      <section style={{ padding: 'var(--spacing-lg)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-md)' }}>
            Rutas Gastronómicas de México
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-lg)', maxWidth: '800px' }}>
            Recorre las rutas culinarias más emblemáticas de México. Desde tequila y mezcal hasta gastronomía tradicional, descubre los sabores que definen nuestra identidad.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--spacing-md)' }}>
            {rutasGastronomicas.map((ruta) => (
              <a
                key={ruta.slug}
                href={`/turismo/rutas-gastronomicas/${ruta.slug}`}
                style={{
                  backgroundColor: 'var(--color-bg-secondary)',
                  borderRadius: 'var(--border-radius-lg)',
                  padding: 'var(--spacing-md)',
                  textDecoration: 'none',
                  color: 'inherit',
                  border: '1px solid var(--color-border)',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
              >
                <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-sm)' }}>
                  {ruta.nombre}
                </h2>
                
                <div style={{ marginBottom: 'var(--spacing-sm)' }}>
                  <span style={{ fontSize: '0.85rem', backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent)', padding: '0.25rem 0.75rem', borderRadius: '1rem', display: 'inline-block' }}>
                    {ruta.estado}
                  </span>
                </div>

                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-md)', lineHeight: '1.5' }}>
                  {ruta.descripcion.substring(0, 100)}...
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
