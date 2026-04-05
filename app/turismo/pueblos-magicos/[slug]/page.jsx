import { notFound } from 'next/navigation';
import { pueblosMagicos } from '@/data/turismo/pueblos-magicos';

const MARIMBAS_BLOG_GUIDES = {
  'tepoztlan': 'tepoztlan',
  'valle-de-bravo': 'valle-de-bravo',
  'taxco-de-alarcon': 'taxco',
  'malinalco': 'malinalco',
  'huasca-de-ocampo': 'huasca-de-ocampo',
  'bernal': 'bernal',
  'metepec': 'metepec',
  'ixtapan-de-la-sal': 'ixtapan-de-la-sal',
  'aculco': 'aculco',
  'el-oro': 'el-oro',
  'tlayacapan': 'tlayacapan',
  'patzcuaro': 'patzcuaro',
  'cuetzalan-del-progreso': 'cuetzalan',
  'real-de-catorce': 'real-de-catorce',
  'creel': 'creel',
  'tequila': 'tequila',
  'izamal': 'izamal',
  'valladolid': 'valladolid-yucatan',
  'todos-santos': 'todos-santos',
  'copainala': 'copainala',
  'san-cristobal-de-las-casas': 'san-cristobal',
  'chiapa-de-corzo': 'chiapa-de-corzo',
  'comitan-de-dominguez': 'comitan',
  'palenque': 'palenque',
};

export async function generateStaticParams() {
  return pueblosMagicos.map((pueblo) => ({
    slug: pueblo.slug,
  }));
}

export async function generateMetadata({ params }) {
  const pueblo = pueblosMagicos.find((p) => p.slug === params.slug);

  if (!pueblo) {
    return {
      title: 'Pueblo no encontrado | MetroGuia',
      description: 'El pueblo mágico que buscas no existe.',
    };
  }

  return {
    title: pueblo.seo_title || `${pueblo.nombre}, ${pueblo.estado} — Pueblo Mágico | MetroGuia`,
    description: pueblo.meta_description || pueblo.descripcion,
    keywords: `${pueblo.nombre}, ${pueblo.estado}, pueblos mágicos, turismo`,
    openGraph: {
      title: pueblo.seo_title || `${pueblo.nombre}, ${pueblo.estado} | MetroGuia`,
      description: pueblo.meta_description || pueblo.descripcion,
      type: 'website',
      url: `https://metroguia.mx/turismo/pueblos-magicos/${pueblo.slug}/`,
    },
  };
}

export default function PuebloDetailPage({ params }) {
  const pueblo = pueblosMagicos.find((p) => p.slug === params.slug);

  if (!pueblo) {
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
          <a href="/turismo/pueblos-magicos" style={{
            color: 'var(--primary)',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: '500',
          }}>
            ← Volver a pueblos mágicos
          </a>
        </div>
      </div>

      <div style={{
        backgroundImage: 'linear-gradient(135deg, rgba(168, 85, 247, 0.8), rgba(192, 132, 250, 0.8))',
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
            {pueblo.nombre}
          </h1>
          <p style={{
            fontSize: '1.1rem',
            margin: '0',
            maxWidth: '700px',
            lineHeight: '1.6',
            opacity: '0.95',
          }}>
            {pueblo.estado}, México
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
            {pueblo.descripcion}
          </p>
        </section>

        {pueblo.contenido && pueblo.contenido.length > 0 && (
          <section style={{ marginBottom: '60px' }}>
            {pueblo.contenido.map((seccion, i) => (
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

        {MARIMBAS_BLOG_GUIDES[pueblo.slug] && (
          <section style={{ marginBottom: '60px' }}>
            <a
              href={`https://book.marimbashome.com/es/guides/${MARIMBAS_BLOG_GUIDES[pueblo.slug]}`}
              target="_blank"
              rel="noopener"
              style={{
                display: 'block',
                padding: '1.5rem',
                background: 'linear-gradient(135deg, rgba(0,210,150,0.08), rgba(92,133,255,0.08))',
                border: '1px solid var(--primary)',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 600 }}>
                📖 Guía de viaje completa
              </p>
              <p style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>
                {pueblo.nombre}: Historia, itinerarios y consejos para tu visita
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Lee nuestra guía detallada con itinerarios paso a paso, contexto histórico y recomendaciones de hospedaje →
              </p>
            </a>
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
              <strong>Ubicado en:</strong> {pueblo.estado}, México
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
            name: pueblo.nombre,
            description: pueblo.descripcion,
            url: `https://metroguia.mx/turismo/pueblos-magicos/${pueblo.slug}`,
            address: {
              '@type': 'PostalAddress',
              addressRegion: pueblo.estado,
              addressCountry: 'MX',
            },
          }),
        }}
      />
    </main>
  );
}
