import { notFound } from 'next/navigation';
import { ciudadesPatrimonio } from '@/data/turismo/ciudades-patrimonio';

export async function generateStaticParams() {
  return ciudadesPatrimonio.map((ciudad) => ({
    slug: ciudad.slug,
  }));
}

export async function generateMetadata({ params }) {
  const ciudad = ciudadesPatrimonio.find((c) => c.slug === params.slug);
  if (!ciudad) {
    return {
      title: 'Ciudad no encontrada | MetroGuía'
    };
  }
  return {
    title: `${ciudad.nombre} | MetroGuía`,
    description: ciudad.descripcion
  };
}

export default function CiudadDetail({ params }) {
  const ciudad = ciudadesPatrimonio.find((c) => c.slug === params.slug);

  if (!ciudad) {
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
          <a href="/turismo/ciudades-patrimonio" style={{
            color: 'var(--primary)',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: '500',
          }}>
            ← Volver a ciudades patrimonio
          </a>
        </div>
      </div>

      <div style={{
        backgroundImage: 'linear-gradient(135deg, rgba(184, 134, 11, 0.8), rgba(218, 165, 32, 0.8))',
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
            {ciudad.nombre}
          </h1>
          <p style={{
            fontSize: '1.1rem',
            margin: '0',
            maxWidth: '700px',
            lineHeight: '1.6',
            opacity: '0.95',
          }}>
            {ciudad.estado}, México
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
            Información General
          </h2>
          <p style={{
            fontSize: '1.05rem',
            lineHeight: '1.8',
            color: 'var(--text-muted)',
            margin: '0',
          }}>
            {ciudad.descripcion}
          </p>
        </section>

        <section>
          <h2 style={{
            fontSize: '1.5rem',
            color: 'var(--text)',
            marginBottom: '20px',
            fontWeight: '600',
          }}>
            Ubicación
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
              margin: '0',
              lineHeight: '1.6',
            }}>
              <strong>Estado:</strong> {ciudad.estado}
            </p>
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TouristDestination',
            name: ciudad.nombre,
            description: ciudad.descripcion,
            url: `https://metroguia.mx/turismo/ciudades-patrimonio/${ciudad.slug}`,
            address: {
              '@type': 'PostalAddress',
              addressRegion: ciudad.estado,
              addressCountry: 'MX',
            },
          }),
        }}
      />
    </main>
  );
}
