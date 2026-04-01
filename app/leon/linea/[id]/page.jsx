import { lineasLeon } from '@/data/leon/lineas-detalle';
import { estacionesLeon } from '@/data/leon/estaciones';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';

export async function generateStaticParams() {
  return lineasLeon.map((linea) => ({
    id: linea.id,
  }));
}

export async function generateMetadata({ params }) {
  const linea = lineasLeon.find(l => l.id === params.id);
  
  if (!linea) {
    return {
      title: 'Línea no encontrada',
      description: 'La línea solicitada no existe.',
    };
  }

  return {
    title: linea.seo_title,
    description: linea.meta_description,
    openGraph: {
      title: linea.seo_title,
      description: linea.meta_description,
      url: `https://metroguia.mx/leon/linea/${linea.id}`,
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function LineaLeonPage({ params }) {
  const linea = lineasLeon.find(l => l.id === params.id);

  if (!linea) {
    return (
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <h1>Línea no encontrada</h1>
        <p>La línea "{params.id}" no existe en el Optibus SIT de León.</p>
        <Link href="/leon" style={{ color: '#10B981', textDecoration: 'none', fontWeight: 'bold' }}>
          Volver al inicio de León
        </Link>
      </main>
    );
  }

  const lineaNombre = linea.nombre || linea.h1 || linea.colorNombre || `Línea ${linea.id}`;

  const estacionesLinea = estacionesLeon.filter(e => 
    linea.estaciones.includes(e.slug)
  );

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
  };

  const heroStyles = {
    background: `linear-gradient(135deg, ${linea.color} 0%, ${linea.color}cc 100%)`,
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

  const estacionCardStyles = {
    backgroundColor: '#ffffff',
    border: `2px solid ${linea.color}`,
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '15px',
  };

  const ruteBoxStyles = {
    backgroundColor: '#f9fafb',
    border: `1px solid ${linea.color}`,
    borderRadius: '8px',
    padding: '20px',
    marginTop: '30px',
  };

  const stopItemStyles = {
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '6px',
    padding: '12px',
    marginBottom: '12px',
    borderLeft: `4px solid ${linea.color}`,
  };

  const colorIndicatorStyles = {
    display: 'inline-block',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: linea.color,
    marginRight: '8px',
    verticalAlign: 'middle',
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
        name: 'León',
        item: 'https://metroguia.mx/leon/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: lineaNombre,
        item: `https://metroguia.mx/leon/linea/${linea.id}/`
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
            {linea.h1}
          </h1>
          <p style={{ fontSize: '18px', marginBottom: '5px' }}>
            <span style={colorIndicatorStyles}></span>
            Corredor {linea.id} ({linea.colorNombre})
          </p>
          <p style={{ fontSize: '16px', opacity: '0.9', marginBottom: '10px' }}>
            {linea.inicio} — {linea.fin}
          </p>
          <p style={{ fontSize: '15px', opacity: '0.85' }}>
            {linea.total} paradas • {linea.municipios.join(', ')}
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section style={containerStyles}>
        {/* DESCRIPCIÓN */}
        <AdBannerLazy adSlot="4434764790" format="auto" />
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1f2937', marginBottom: '15px' }}>
            Descripción del Corredor
          </h2>
          <p style={{ fontSize: '16px', color: '#374151', lineHeight: '1.7' }}>
            {linea.descripcion}
          </p>
        </div>

        {/* ESTACIONES */}
        <AdBannerLazyInArticle adSlot="1082410395" />
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1f2937', marginBottom: '20px' }}>
            🚉 Estaciones del Corredor {linea.id}
          </h2>
          <div>
            {estacionesLinea.map((estacion, idx) => (
              <Link
                key={estacion.slug}
                href={`/leon/estacion/${estacion.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div style={estacionCardStyles}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ ...colorIndicatorStyles, width: '12px', height: '12px' }}></span>
                    <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#1f2937', margin: '0' }}>
                      {idx + 1}. {estacion.nombre}
                    </h3>
                  </div>
                  <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '8px' }}>
                    {estacion.municipio} • {estacion.tipo_zona}
                  </p>
                  <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.5' }}>
                    {estacion.intro}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* RUTA DE 1 DÍA */}
        {linea.ruta_1_dia && (
          <div style={ruteBoxStyles}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '20px' }}>
              🗺️ {linea.ruta_1_dia.titulo}
            </h2>
            <div>
              {linea.ruta_1_dia.paradas.map((parada, idx) => {
                const estacion = estacionesLinea.find(e => e.slug === parada.estacion);
                return (
                  <div key={idx} style={stopItemStyles}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <div style={{ fontWeight: 'bold', color: linea.color, minWidth: '24px', marginTop: '2px' }}>
                        {idx + 1}.
                      </div>
                      <div style={{ flex: '1' }}>
                        <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#1f2937', marginBottom: '5px' }}>
                          {estacion?.nombre || parada.estacion}
                        </h4>
                        <p style={{ fontSize: '14px', color: '#374151', margin: '0' }}>
                          {parada.actividad}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* INFORMACIÓN ADICIONAL */}
        <div style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '20px' }}>
            ℹ️ Información Útil
          </h2>
          <div style={gridStyles}>
            <div style={cardStyles}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: linea.color, marginBottom: '10px' }}>
                Recorrido
              </h3>
              <p style={{ fontSize: '14px', color: '#374151' }}>
                <strong>Inicio:</strong> {linea.inicio}
              </p>
              <p style={{ fontSize: '14px', color: '#374151' }}>
                <strong>Fin:</strong> {linea.fin}
              </p>
              <p style={{ fontSize: '14px', color: '#374151' }}>
                <strong>Total de paradas:</strong> {linea.total}
              </p>
            </div>
            <div style={cardStyles}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: linea.color, marginBottom: '10px' }}>
                Cobertura Geográfica
              </h3>
              <p style={{ fontSize: '14px', color: '#374151' }}>
                <strong>Municipios:</strong> {linea.municipios.join(', ')}
              </p>
            </div>
            <div style={cardStyles}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: linea.color, marginBottom: '10px' }}>
                Estaciones Turísticas
              </h3>
              <p style={{ fontSize: '14px', color: '#374151' }}>
                {linea.estaciones_turisticas?.length || 0} estaciones con atracciones principales
              </p>
            </div>
          </div>
        </div>

        {/* NAVIGATION */}
        <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid #e5e7eb' }}>
          <Link href="/leon" style={{ color: '#10B981', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px' }}>
            ← Volver a León
          </Link>
        </div>
      </section>
    </main>
  );
}
