import { estacionesCampeche } from '@/data/campeche/estaciones';
import { lineasCampeche } from '@/data/campeche/lineas-detalle';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';

export async function generateStaticParams() {
  return estacionesCampeche.map((estacion) => ({ slug: estacion.slug }));
}

export async function generateMetadata({ params }) {
  const estacion = estacionesCampeche.find((e) => e.slug === params.slug);
  if (!estacion) return { title: 'Estación no encontrada' };
  return {
    title: estacion.seo_title,
    description: estacion.meta_description,
    openGraph: {
      title: estacion.seo_title,
      description: estacion.meta_description,
      url: `https://metroguia.mx/campeche/estacion/${estacion.slug}`,
      type: 'website',
    },
    robots: { index: true, follow: true },
  };
}

export default function EstacionCampechePage({ params }) {
  const estacion = estacionesCampeche.find((e) => e.slug === params.slug);
  if (!estacion) {
    return (
      <main style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h1>Estación no encontrada</h1>
        <p style={{ marginTop: '20px' }}>
          <Link href="/campeche" style={{ color: '#059669', textDecoration: 'underline' }}>Volver a Campeche</Link>
        </p>
      </main>
    );
  }

  const lineaId = Array.isArray(estacion.linea) ? estacion.linea[0] : estacion.linea;
  const linea = lineasCampeche.find((l) => l.id === lineaId);
  const colorLinea = linea?.color || '#059669';

  const containerStyles = { maxWidth: '1000px', margin: '0 auto', padding: '0 20px' };
  const heroStyles = { background: `linear-gradient(135deg, ${colorLinea} 0%, ${colorLinea}dd 100%)`, color: '#ffffff', padding: '50px 20px', textAlign: 'center' };
  const sectionStyles = { padding: '40px 0', borderBottom: '1px solid #e5e7eb' };
  const sectionTitleStyles = { fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#1f2937' };
  const cardStyles = { backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '6px', padding: '20px', marginBottom: '15px' };
  const tipStyles = { display: 'flex', alignItems: 'flex-start', marginBottom: '15px' };
  const tipNumberStyles = { display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px', height: '30px', minWidth: '30px', backgroundColor: colorLinea, color: '#ffffff', borderRadius: '50%', fontWeight: 'bold', marginRight: '15px' };
  const poiStyles = { backgroundColor: '#ffffff', border: `2px solid ${colorLinea}`, borderRadius: '6px', padding: '15px', marginBottom: '15px' };
  const sidebarStyles = { backgroundColor: '#f0fdf4', borderLeft: `4px solid ${colorLinea}`, padding: '20px', borderRadius: '4px', marginBottom: '20px' };
  const buttonStyles = { display: 'inline-block', backgroundColor: colorLinea, color: '#ffffff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', marginTop: '20px' };
  const gridStyles = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '20px' };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Campeche', item: 'https://metroguia.mx/campeche/' },
      { '@type': 'ListItem', position: 3, name: `Línea ${lineaId}`, item: `https://metroguia.mx/campeche/linea/${lineaId}/` },
      { '@type': 'ListItem', position: 4, name: estacion.h1, item: `https://metroguia.mx/campeche/estacion/${estacion.slug}/` }
    ]
  };

  return (
    <main style={{ backgroundColor: '#ffffff' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section style={heroStyles}>
        <div style={containerStyles}>
          <p style={{ fontSize: '14px', marginBottom: '10px', opacity: '0.9' }}>
            Línea {lineaId} • {estacion.municipio}
          </p>
          <h1 style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '10px' }}>{estacion.h1}</h1>
          <p style={{ fontSize: '16px', opacity: '0.95', maxWidth: '700px', margin: '0 auto' }}>{estacion.intro}</p>
        </div>
      </section>

      <section style={{ ...containerStyles, paddingTop: '40px', paddingBottom: '40px' }}>
        <AdBannerLazy adSlot="4434764790" format="auto" />
        <div style={sidebarStyles}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px', color: '#1f2937' }}>Información Rápida</h2>
          <ul style={{ fontSize: '14px', color: '#374151', lineHeight: '1.8', paddingLeft: '20px' }}>
            <li><strong>Municipio:</strong> {estacion.municipio}</li>
            <li><strong>Línea:</strong> {Array.isArray(estacion.linea) ? estacion.linea.join(', ') : estacion.linea}</li>
            <li><strong>Tipo de zona:</strong> {estacion.tipo_zona}</li>
            <li><strong>Mejor hora:</strong> {estacion.mejor_horario}</li>
          </ul>
        </div>

        {(estacion.pois || []).length > 0 && (
          <div style={sectionStyles}>
            <AdBannerLazyInArticle adSlot="1082410395" />
            <h2 style={sectionTitleStyles}>Lugares de Interés Cercanos</h2>
            <div style={gridStyles}>
              {(estacion.pois || []).map((poi, idx) => (
                <div key={idx} style={poiStyles}>
                  <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: colorLinea, marginBottom: '8px' }}>{poi.nombre}</h3>
                  <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '5px' }}>{poi.tipo}</p>
                  <p style={{ fontSize: '13px', color: '#374151', fontWeight: '500' }}>{poi.distancia}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {(Array.isArray(estacion.tips) ? estacion.tips : []).length > 0 && (
          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>Tips y Recomendaciones</h2>
            <div style={cardStyles}>
              {(Array.isArray(estacion.tips) ? estacion.tips : []).map((tip, idx) => (
                <div key={idx} style={tipStyles}>
                  <div style={tipNumberStyles}>{idx + 1}</div>
                  <p style={{ fontSize: '15px', color: '#374151', lineHeight: '1.6', margin: 0 }}>{tip}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {(estacion.transferencias || []).length > 0 && (
          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>Transferencias Disponibles</h2>
            <div style={gridStyles}>
              {(estacion.transferencias || []).map((trans, idx) => (
                <div key={idx} style={cardStyles}>
                  <p style={{ fontSize: '14px', color: '#374151' }}>{typeof trans === 'string' ? trans : trans.nombre || JSON.stringify(trans)}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={sectionStyles}>
          <h2 style={sectionTitleStyles}>Relevancia para el Mundial 2026</h2>
          <div style={cardStyles}>
            <p style={{ fontSize: '15px', color: '#374151', lineHeight: '1.6' }}>{estacion.mundial_relevancia}</p>
          </div>
        </div>
      </section>

      <section style={{ ...containerStyles, paddingTop: '40px', paddingBottom: '40px', textAlign: 'center' }}>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/campeche" style={buttonStyles}>Volver a Campeche</Link>
          {linea && <Link href={`/campeche/linea/${linea.id}`} style={buttonStyles}>Ver Línea {linea.id}</Link>}
        </div>
      </section>
    </main>
  );
}
