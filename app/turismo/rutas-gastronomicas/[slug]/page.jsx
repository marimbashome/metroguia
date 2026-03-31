import { notFound } from 'next/navigation';
import { rutasGastronomicas } from '@/data/turismo/rutas-gastronomicas';

export async function generateStaticParams() {
  return rutasGastronomicas.map((ruta) => ({
    slug: ruta.slug,
  }));
}

export async function generateMetadata({ params }) {
  const ruta = rutasGastronomicas.find((r) => r.slug === params.slug);
  if (!ruta) {
    return {
      title: 'Ruta gastronómica no encontrada | MetroGuía'
    };
  }
  return {
    title: `${ruta.nombre} | MetroGuía`,
    description: ruta.descripcion
  };
}

export default function RutaDetail({ params }) {
  const ruta = rutasGastronomicas.find((r) => r.slug === params.slug);

  if (!ruta) {
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
          <a href="/turismo/rutas-gastronomicas" style={{
            color: 'var(--primary)',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: '500',
          }}>
            ← Volver a rutas gastronómicas
          </a>
        </div>
      </div>

      <div style={{
        backgroundImage: 'linear-gradient(135deg, rgba(220, 38, 38, 0.8), rgba(239, 68, 68, 0.8))',
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
            {ruta.nombre}
          </h1>
          <p style={{
            fontSize: '1.1rem',
            margin: '0',
            maxWidth: '700px',
            lineHeight: '1.6',
            opacity: '0.95',
          }}>
            {ruta.estado}, México
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
            {ruta.descripcion}
          </p>
        </section>

        <section>
          <h2 style={{
            fontSize: '1.5rem',
            color: 'var(--text)',
            marginBottom: '20px',
            fontWeight: '600',
          }}>
            Información de la Ruta
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
              <strong>Ubicación:</strong> {ruta.estado}, México
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
            name: ruta.nombre,
            description: ruta.descripcion,
            url: `https://metroguia.mx/turismo/rutas-gastronomicas/${ruta.slug}`,
            address: {
              '@type': 'PostalAddress',
              addressRegion: ruta.estado,
              addressCountry: 'MX',
            },
          }),
        }}
      />
    </main>
  );
}
