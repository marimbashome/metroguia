import { notFound } from 'next/navigation';
import { naturaleza } from '@/data/turismo/naturaleza';

export async function generateStaticParams() {
  return naturaleza.map((destino) => ({
    slug: destino.slug
  }));
}

export async function generateMetadata({ params }) {
  const destino = naturaleza.find((d) => d.slug === params.slug);
  if (!destino) {
    return {
      title: 'Destino no encontrado | MetroGuía'
    };
  }
  return {
    title: `${destino.nombre} | MetroGuía`,
    description: destino.descripcion
  };
}

export default function NaturalezaDetailPage({ params }) {
  const destino = naturaleza.find((d) => d.slug === params.slug);

  if (!destino) {
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
          <a href="/turismo/naturaleza" style={{
            color: 'var(--primary)',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: '500',
          }}>
            ← Volver a naturaleza y aventura
          </a>
        </div>
      </div>

      <div style={{
        backgroundImage: 'linear-gradient(135deg, rgba(34, 197, 94, 0.8), rgba(74, 222, 128, 0.8))',
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
            {destino.nombre}
          </h1>
          <p style={{
            fontSize: '1.1rem',
            margin: '0',
            maxWidth: '700px',
            lineHeight: '1.6',
            opacity: '0.95',
          }}>
            {destino.estado}, México
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
            {destino.descripcion}
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
              <strong>Ubicado en:</strong> {destino.estado}, México
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
            name: destino.nombre,
            description: destino.descripcion,
            url: `https://metroguia.mx/turismo/naturaleza/${destino.slug}`,
            address: {
              '@type': 'PostalAddress',
              addressRegion: destino.estado,
              addressCountry: 'MX',
            },
          }),
        }}
      />
    </main>
  );
}
