import { estacionesQueretaro } from '@/data/queretaro/estaciones';
import Link from 'next/link';

export async function generateStaticParams() {
  return estacionesQueretaro.map((estacion) => ({
    slug: estacion.slug,
  }));
}

export async function generateMetadata({ params }) {
  const estacion = estacionesQueretaro.find(e => e.slug === params.slug);
  
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
      url: `https://metroguia.mx/queretaro/estacion/${estacion.slug}`,
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function EstacionQueretaroPage({ params }) {
  const estacion = estacionesQueretaro.find(e => e.slug === params.slug);

  if (!estacion) {
    return (
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <h1>Estación no encontrada</h1>
        <p>La estación "{params.slug}" no existe en el sistema Q-BUS de Querétaro.</p>
        <Link href="/queretaro" style={{ color: '#EF4444', textDecoration: 'none', fontWeight: 'bold' }}>
          Volver al inicio de Querétaro
        </Link>
      </main>
    );
  }

  const colorLinea = 
    estacion.linea === 'Rojo' ? '#EF4444' :
    estacion.linea === 'Azul' ? '#3B82F6' :
    estacion.linea === 'Verde' ? '#10B981' :
    '#6B7280';

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
  };

  const heroStyles = {
    background: `linear-gradient(135deg, ${colorLinea} 0%, ${colorLinea}cc 100%)`,
    color: '#ffffff',
    padding: '40px 20px',
    marginBottom: '40px',
  };

  const heroContentStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginBottom: '40px',
  };

  const cardStyles = {
    backgroundColor: '#f9fafb',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '20px',
  };

  const tipsBoxStyles = {
    backgroundColor: '#FEF3C7',
    borderLeft: '4px solid #F59E0B',
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
        name: 'Querétaro',
        item: 'https://metroguia.mx/queretaro/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: estacion.linea || 'Línea',
        item: `https://metroguia.mx/queretaro/linea/${estacion.linea}/`
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: estacion.nombre,
        item: `https://metroguia.mx/queretaro/estacion/${estacion.slug}/`
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
            Corredor {estacion.linea} — Q-BUS Querétaro
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
          <p style={{ fontSize: '16px', color: '#374151', lineHeight: '1.7', marginBottom: '15px' }}>
            {estacion.intro}
          </p>
        </div>

        {/* TIPS */}
        <div style={tipsBoxStyles}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#B45309', marginBottom: '12px' }}>
            💡 Tips para tu visita
          </h3>
          <ul style={{ fontSize: '14px', color: '#374151', lineHeight: '1.8', paddingLeft: '20px' }}>
            {estacion.tips.map((tip, idx) => (
              <li key={idx}>{tip}</li>
            ))}
          </ul>
        </div>

        {/* MEJOR HORARIO */}
        <div style={cardStyles}>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: colorLinea, marginBottom: '8px' }}>
            ⏰ Mejor horario para visitar
          </h3>
          <p style={{ fontSize: '15px', color: '#374151' }}>
            {estacion.mejor_horario}
          </p>
        </div>

        {/* POIS */}
        {estacion.pois && estacion.pois.length > 0 && (
          <div style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '20px' }}>
              📍 Atracciones cercanas
            </h2>
            <div>
              {estacion.pois.map((poi, idx) => (
                <div key={idx} style={poiItemStyles}>
                  <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: colorLinea, marginBottom: '5px' }}>
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

        {/* MUNDIAL RELEVANCIA */}
        {estacion.mundial_relevancia && (
          <div style={{ ...cardStyles, marginTop: '40px', backgroundColor: '#ECFDF5', borderLeft: '4px solid #10B981' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#059669', marginBottom: '8px' }}>
              🌍 Relevancia Mundial
            </h3>
            <p style={{ fontSize: '15px', color: '#374151' }}>
              {estacion.mundial_relevancia}
            </p>
          </div>
        )}

        {/* TRANSFERENCIAS */}
        {estacion.transferencias && estacion.transferencias.length > 0 && (
          <div style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '20px' }}>
              🔄 Transferencias disponibles
            </h2>
            <div style={gridStyles}>
              {estacion.transferencias.map((trans, idx) => (
                <div key={idx} style={cardStyles}>
                  <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#1f2937', marginBottom: '5px' }}>
                    {trans.nombre}
                  </h4>
                  <p style={{ fontSize: '13px', color: '#6b7280' }}>
                    {trans.tipo}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* NAVIGATION */}
        <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid #e5e7eb' }}>
          <Link href="/queretaro" style={{ color: '#EF4444', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px' }}>
            ← Volver a Querétaro
          </Link>
        </div>
      </section>
    </main>
  );
}
