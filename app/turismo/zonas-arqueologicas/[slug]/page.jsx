import { notFound } from 'next/navigation';
import { zonasArqueologicas } from '@/data/turismo/zonas-arqueologicas';

export async function generateStaticParams() {
  return zonasArqueologicas.map((zona) => ({
    slug: zona.slug,
  }));
}

export async function generateMetadata({ params }) {
  const zona = zonasArqueologicas.find((z) => z.slug === params.slug);
  if (!zona) {
    return {
      title: 'Zona arqueológica no encontrada | MetroGuía'
    };
  }
  return {
    title: `${zona.nombre} | MetroGuía`,
    description: zona.descripcion
  };
}

export default function ZonaDetail({ params }) {
  const zona = zonasArqueologicas.find((z) => z.slug === params.slug);

  if (!zona) {
    notFound();
  }

  return (
    <main style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <div style={{
        backgroundColor: 'var(--surface)',
        padding: '20px',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <a href="/turismo/zonas-arqueologicas" style={{
            color: 'var(--primary)',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: '500',
          }}>
            ← Volver a zonas arqueológicas
          </a>
        </div>
      </div>

      <div style={{
        backgroundImage: 'linear-gradient(135deg, rgba(139, 90, 43, 0.8), rgba(165, 120, 80, 0.8))',
        padding: '80px 20px',
        color: 'white',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            margin: '0 0 20px 0',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          }}>
            {zona.nombre}
          </h1>
          <p style={{
            fontSize: '1.1rem',
            margin: '0',
            maxWidth: '700px',
            lineHeight: '1.6',
            opacity: '0.95',
          }}>
            {zona.estado}, México
          </p>
        </div>
      </div>

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '60px 20px',
      }}>
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{
            fontSize: '2rem',
            color: 'var(--text)',
            marginBottom: '20px',
            fontWeight: '600',
          }}>
            Descripción
          </h2>
          <p style={{
            fontSize: '1.05rem',
            lineHeight: '1.8',
            color: 'var(--text-muted)',
            margin: '0',
          }}>
            {zona.descripcion}
          </p>
        </section>

        <section>
          <h2 style={{
            fontSize: '1.5rem',
            color: 'var(--text)',
            marginBottom: '20px',
            fontWeight: '600',
          }}>
            Información Básica
          </h2>
          <div style={{
            backgroundColor: 'var(--surface)',
            padding: '24px',
            borderRadius: '8px',
            border: '1px solid var(--border)',
          }}>
            <p style={{
              fontSize: '1rem',
              color: 'var(--text)',
              margin: '0 0 12px 0',
              lineHeight: '1.6',
            }}>
              <strong>Nombre:</strong> {zona.nombre}
            </p>
            <p style={{
              fontSize: '1rem',
              color: 'var(--text)',
              margin: '0',
              lineHeight: '1.6',
            }}>
              <strong>Estado:</strong> {zona.estado}
            </p>
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TouristAttractionPage',
            name: zona.nombre,
            description: zona.descripcion,
            url: `https://metroguia.mx/turismo/zonas-arqueologicas/${zona.slug}`,
            address: {
              '@type': 'PostalAddress',
              addressRegion: zona.estado,
              addressCountry: 'MX',
            },
          }),
        }}
      />
    </main>
  );
}
