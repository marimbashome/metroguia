import { estacionesToluca } from '@/data/toluca/estaciones';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';

export async function generateStaticParams() {
  return estacionesToluca.map((estacion) => ({
    slug: estacion.slug,
  }));
}

export async function generateMetadata({ params }) {
  const estacion = estacionesToluca.find(e => e.slug === params.slug);
  
  if (!estacion) {
    return {
      title: 'Estación no encontrada',
      description: 'La estación solicitada no existe.',
    };
  }

  return {
    title: estacion.seo_title,
    description: estacion.meta_description,
    openGraph: {
      title: estacion.seo_title,
      description: estacion.meta_description,
      url: `https://metroguia.mx/toluca/estacion/${estacion.slug}`,
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function EstacionTolucaPage({ params }) {
  const estacion = estacionesToluca.find(e => e.slug === params.slug);

  if (!estacion) {
    return (
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <h1>Estación no encontrada</h1>
        <p>La estación "{params.slug}" no existe.</p>
        <Link href="/toluca" style={{ color: '#7C3AED', textDecoration: 'none', fontWeight: 'bold' }}>
          Volver a Toluca
        </Link>
      </main>
    );
  }

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
  };

  const heroStyles = {
    background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
    color: '#ffffff',
    padding: '40px 20px',
    marginBottom: '40px',
  };

  const heroContentStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const cardStyles = {
    backgroundColor: '#f9fafb',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '20px',
  };

  const tipsBoxStyles = {
    backgroundColor: '#F3E8FF',
    borderLeft: '4px solid #7C3AED',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '4px',
  };

  const poiItemStyles = {
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '6px',
    padding: '12px',
    marginBottom: '10px',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'MetroGuia',
        item: 'https://metroguia.mx'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Toluca',
        item: 'https://metroguia.mx/toluca/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: estacion.linea || 'Línea',
        item: `https://metroguia.mx/toluca/linea/${estacion.linea}/`
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: estacion.nombre,
        item: `https://metroguia.mx/toluca/estacion/${estacion.slug}/`
      }
    ]
  }

  return (
    <main style={{ backgroundColor: '#ffffff' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* HERO */}
      <section style={heroStyles}>
        <div style={heroContentStyles}>
          <h1 style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '10px' }}>
            {estacion.nombre}
          </h1>
          <p style={{ fontSize: '18px', marginBottom: '5px' }}>
            Línea {estacion.linea}
          </p>
          <p style={{ fontSize: '16px', opacity: '0.9' }}>
            {estacion.municipio} • {estacion.tipo_zona}
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section style={containerStyles}>
        {/* INTRO */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1f2937', marginBottom: '15px' }}>
            {estacion.h1}
          </h2>
          <p style={{ fontSize: '16px', color: '#374151', lineHeight: '1.7' }}>
            {estacion.intro}
          </p>
        </div>

        <AdBannerLazy slot="4434764790" format="auto" />

        {/* TIPS */}
        <div style={tipsBoxStyles}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#5B21B6', marginBottom: '12px' }}>
            💡 Tips para tu visita
          </h3>
          <ul style={{ fontSize: '14px', color: '#374151', lineHeight: '1.8', paddingLeft: '20px' }}>
            {(estacion.tips || []).map((tip, idx) => (
              <li key={idx}>{tip}</li>
            ))}
          </ul>
        </div>

        {/* MEJOR HORARIO */}
        <div style={cardStyles}>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#7C3AED', marginBottom: '8px' }}>
            ⏰ Mejor horario
          </h3>
          <p style={{ fontSize: '15px', color: '#374151' }}>
            {estacion.mejor_horario}
          </p>
        </div>

        {/* POIS */}
        <AdBannerLazyInArticle slot="1082410395" />

            {estacion.pois && estacion.pois.length > 0 && (
          <div style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '20px' }}>
              📍 Atracciones cercanas
            </h2>
            <div>
              {estacion.pois.map((poi, idx) => (
                <div key={idx} style={poiItemStyles}>
                  <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#7C3AED', marginBottom: '5px' }}>
                    {poi.nombre}
                  </h4>
                  <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '5px' }}>
                    <strong>Tipo:</strong> {poi.tipo}
                  </p>
                  <p style={{ fontSize: '14px', color: '#6b7280' }}>
                    <strong>Distancia:</strong> {poi.distancia}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WORLDWIDE RELEVANCE */}
        {estacion.mundial_relevancia && (
          <div style={{ ...cardStyles, marginTop: '40px', backgroundColor: '#FEF3C7', borderLeft: '4px solid #F59E0B' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#B45309', marginBottom: '8px' }}>
              🌍 Relevancia Mundial
            </h3>
            <p style={{ fontSize: '15px', color: '#374151' }}>
              {estacion.mundial_relevancia}
            </p>
          </div>
        )}

        {/* NAVIGATION */}
        <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid #e5e7eb' }}>
          <Link href="/toluca" style={{ color: '#7C3AED', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px' }}>
            ← Volver a Toluca
          </Link>
        </div>
      </section>
    </main>
  );
}
