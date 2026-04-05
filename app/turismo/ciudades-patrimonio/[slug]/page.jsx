import { notFound } from 'next/navigation';
import { ciudadesPatrimonio } from '@/data/turismo/ciudades-patrimonio';

const MARIMBAS_BLOG_GUIDES = {
  'ciudad-de-mexico': 'cdmx',
  'oaxaca-de-juarez': 'oaxaca',
  'puebla-de-zaragoza': 'puebla',
  'guanajuato': 'guanajuato-san-miguel',
  'morelia': 'morelia',
  'zacatecas': 'zacatecas',
  'san-miguel-de-allende': 'guanajuato-san-miguel',
  'queretaro': 'queretaro',
  'tlacotalpan': 'tlacotalpan',
  'campeche': 'campeche',
  'xochimilco': 'xochimilco',
  'san-cristobal-de-las-casas': 'san-cristobal',
  'taxco': 'taxco',
  'merida': 'merida-yucatan',
  'guadalajara': 'guadalajara-jalisco',
};

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
    title: ciudad.seo_title || `${ciudad.nombre} | MetroGuía`,
    description: ciudad.meta_description || ciudad.descripcion
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

        {/* Contenido editorial */}
        {ciudad.contenido && ciudad.contenido.length > 0 && (
          <section style={{ marginBottom: '60px' }}>
            {ciudad.contenido.map((seccion, i) => (
              <article key={i} style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1rem' }}>
                  {seccion.titulo}
                </h2>
                <div
                  style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-muted)' }}
                  dangerouslySetInnerHTML={{ __html: seccion.texto }}
                />
              </article>
            ))}
          </section>
        )}

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

        {/* Cross-link a Marimbas Blog */}
        {MARIMBAS_BLOG_GUIDES[ciudad.slug] && (
          <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 1rem', borderBottom: '1px solid var(--border)' }}>
            <a
              href={`https://book.marimbashome.com/es/guides/${MARIMBAS_BLOG_GUIDES[ciudad.slug]}`}
              target="_blank"
              rel="noopener"
              style={{
                display: 'block',
                padding: '1.5rem',
                background: 'linear-gradient(135deg, rgba(0,210,150,0.08), rgba(92,133,255,0.08))',
                border: '1px solid var(--primary)',
                borderRadius: 'var(--radius)',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 600 }}>
                Guía de viaje completa
              </p>
              <p style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>
                {ciudad.nombre}: Historia, itinerarios y consejos para tu visita
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Lee nuestra guía detallada con itinerarios paso a paso, contexto histórico y recomendaciones de hospedaje →
              </p>
            </a>
          </section>
        )}
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
