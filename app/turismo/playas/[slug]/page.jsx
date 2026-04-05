import { notFound } from 'next/navigation';
import { playas } from '@/data/turismo/playas';

const MARIMBAS_BLOG_GUIDES = {
  'cancun': 'cancun',
  'playa-del-carmen': 'playa-del-carmen',
  'tulum': 'tulum',
  'isla-mujeres': 'isla-mujeres',
  'holbox': 'holbox',
  'cozumel': 'cozumel',
  'bacalar': 'bacalar-mahahual',
  'puerto-vallarta': 'puerto-vallarta',
  'sayulita': 'sayulita-nayarit',
  'mazatlan': 'mazatlan',
  'los-cabos': 'los-cabos-baja',
  'puerto-escondido': 'puerto-escondido',
  'huatulco': 'huatulco',
  'ixtapa-zihuatanejo': 'zihuatanejo-ixtapa',
  'barra-de-navidad': 'costa-alegre',
};

export async function generateStaticParams() {
  return playas.map((playa) => ({
    slug: playa.slug,
  }));
}

export async function generateMetadata({ params }) {
  const playa = playas.find((p) => p.slug === params.slug);
  if (!playa) {
    return {
      title: 'Playa no encontrada | MetroGuía'
    };
  }
  return {
    title: playa.seo_title || `${playa.nombre} | MetroGuía`,
    description: playa.meta_description || playa.descripcion
  };
}

export default function PlayaDetail({ params }) {
  const playa = playas.find((p) => p.slug === params.slug);

  if (!playa) {
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
          <a href="/turismo/playas" style={{
            color: 'var(--primary)',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: '500',
          }}>
            ← Volver a playas
          </a>
        </div>
      </div>

      <div style={{
        backgroundImage: 'linear-gradient(135deg, rgba(6, 182, 212, 0.8), rgba(34, 197, 233, 0.8))',
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
            {playa.nombre}
          </h1>
          <p style={{
            fontSize: '1.1rem',
            margin: '0',
            maxWidth: '700px',
            lineHeight: '1.6',
            opacity: '0.95',
          }}>
            {playa.estado}, México
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
            {playa.descripcion}
          </p>
        </section>

        <section>
          <h2 style={{
            fontSize: '1.5rem',
            color: 'var(--text)',
            marginBottom: '20px',
            fontWeight: '600',
          }}>
            Información de la Playa
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
              <strong>Ubicación:</strong> {playa.estado}, México
            </p>
          </div>
        </section>

        {/* Contenido editorial */}
        {playa.contenido && playa.contenido.length > 0 && (
          <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 1rem' }}>
            {playa.contenido.map((seccion, i) => (
              <article key={i} style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1rem' }}>
                  {seccion.titulo}
                </h2>
                <div
                  style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}
                  dangerouslySetInnerHTML={{ __html: seccion.texto }}
                />
              </article>
            ))}
          </section>
        )}

        {/* Cross-link a Marimbas Blog */}
        {MARIMBAS_BLOG_GUIDES[playa.slug] && (
          <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 1rem', borderBottom: '1px solid var(--border)' }}>
            <a
              href={`https://book.marimbashome.com/es/guides/${MARIMBAS_BLOG_GUIDES[playa.slug]}`}
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
                📖 Guía de viaje completa
              </p>
              <p style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>
                {playa.nombre}: Historia, itinerarios y consejos para tu visita
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
            '@type': 'TouristAttractionPage',
            name: playa.nombre,
            description: playa.descripcion,
            url: `https://metroguia.mx/turismo/playas/${playa.slug}`,
            address: {
              '@type': 'PostalAddress',
              addressRegion: playa.estado,
              addressCountry: 'MX',
            },
          }),
        }}
      />
    </main>
  );
}
