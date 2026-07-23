import { naturaleza } from '@/data/turismo/naturaleza';

export const metadata = {
  title: 'Naturaleza y Aventura en México | MetroGuía',
  description: 'Descubre 40 destinos naturales para aventura: montañismo, senderismo, buceo, cascadas y reservas de biosfera en México.',
  openGraph: {
    title: 'Naturaleza y Aventura en México',
    description: 'Descubre 40 destinos naturales para aventura: montañismo, senderismo, buceo, cascadas y reservas de biosfera en México.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Naturaleza y Aventura en México',
    description: 'Descubre 40 destinos naturales para aventura: montañismo, senderismo, buceo, cascadas y reservas de biosfera en México.',
  },
  alternates: {
    canonical: 'https://metroguia.mx/turismo/naturaleza/',
  },
};

export default function NaturalezaPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Turismo', item: 'https://metroguia.mx/turismo' },
      { '@type': 'ListItem', position: 3, name: 'Naturaleza', item: 'https://metroguia.mx/turismo/naturaleza' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
            <h2 style={{ fontSize: 'var(--font-size-h3)', margin: '0 0 var(--spacing-sm) 0', color: 'var(--color-text-primary)' }}>
              {destino.nombre}
            </h2>
            <p style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-sm)' }}>
              {destino.estado}
            </p>
            <p style={{ fontSize: 'var(--font-size-body)', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-sm)', lineHeight: '1.6' }}>
              {destino.descripcion.split('.')[0]}.
            </p>
          </a>
        ))}
      </div>
    </div>
    </>
  );
}
