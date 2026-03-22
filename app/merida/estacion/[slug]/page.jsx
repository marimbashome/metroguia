import { estacionesMerida } from '@/data/merida/estaciones';
import { lineasMerida } from '@/data/merida/lineas-detalle';
import Link from 'next/link';

export async function generateStaticParams() {
  return estacionesMerida.map((estacion) => ({ slug: estacion.slug }));
}

export async function generateMetadata({ params }) {
  const estacion = estacionesMerida.find((e) => e.slug === params.slug);
  if (!estacion) {
    return { title: 'Estación no encontrada' };
  }
  return {
    title: estacion.seo_title,
    description: estacion.meta_description,
    openGraph: {
      title: estacion.seo_title,
      description: estacion.meta_description,
      url: `https://metroguia.mx/merida/estacion/${estacion.slug}`,
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function EstacionMeridaPage({ params }) {
  const estacion = estacionesMerida.find((e) => e.slug === params.slug);
  if (!estacion) {
    return (
      <main style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h1>Estación no encontrada</h1>
        <p style={{ marginTop: '20px' }}>
          <Link href="/merida" style={{ color: '#F59E0B', textDecoration: 'underline' }}>
            Volver a Mérida
          </Link>
        </p>
      </main>
    );
  }

  const colorLinea = estacion.linea === 'D1' ? '#F59E0B' : estacion.linea === 'R2' ? '#DC2626' : estacion.linea === 'V3' ? '#10B981' : '#0EA5E9';
  const linea = lineasMerida.find((l) => l.id === estacion.linea);

  const containerStyles = {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 20px',
  };

  const heroStyles = {
    background: `linear-gradient(135deg, ${colorLinea} 0%, ${colorLinea}dd 100%)`,
    color: '#ffffff',
    padding: '50px 20px',
    textAlign: 'center',
  };

  const sectionStyles = {
    padding: '40px 0',
    borderBottom: '1px solid #e5e7eb',
  };

  const sectionTitleStyles = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#1f2937',
  };

  const cardStyles = {
    backgroundColor: '#f9fafb',
    border: '1px solid #e5e7eb',
    borderRadius: '6px',
    padding: '20px',
    marginBottom: '15px',
  };

  const tipStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '15px',
  };

  const tipNumberStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30px',
    height: '30px',
    minWidth: '30px',
    backgroundColor: colorLinea,
    color: '#ffffff',
    borderRadius: '50%',
    fontWeight: 'bold',
    marginRight: '15px',
  };

  const poiStyles = {
    backgroundColor: '#ffffff',
    border: `2px solid ${colorLinea}`,
    borderRadius: '6px',
    padding: '15px',
    marginBottom: '15px',
  };

  const sidebarStyles = {
    backgroundColor: estacion.linea === 'D1' ? '#fffbeb' : estacion.linea === 'R2' ? '#fee2e2' : estacion.linea === 'V3' ? '#ecfdf5' : '#f0f9ff',
    borderLeft: `4px solid ${colorLinea}`,
    padding: '20px',
    borderRadius: '4px',
    marginBottom: '20px',
  };

  const buttonStyles = {
    display: 'inline-block',
    backgroundColor: colorLinea,
    color: '#ffffff',
    padding: '12px 24px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginTop: '20px',
    transition: 'opacity 0.3s ease',
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    marginBottom: '20px',
  };

  return (
    <main style={{ backgroundColor: '#ffffff' }}>
      {/* HERO */}
      <section style={heroStyles}>
        <div style={containerStyles}>
          <p style={{ fontSize: '14px', marginBottom: '10px', opacity: '0.9' }}>
            Corredor {estacion.linea} • {estacion.municipio}
          </p>
          <h1 style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '10px' }}>
            {estacion.h1}
          </h1>
          <p style={{ fontSize: '16px', opacity: '0.95', maxWidth: '700px', margin: '0 auto' }}>
            {estacion.intro}
          </p>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <section style={{ ...containerStyles, paddingTop: '40px', paddingBottom: '40px' }}>
        {/* INFORMACIÓN RÁPIDA */}
        <div style={sidebarStyles}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px', color: '#1f2937' }}>
            Información Rápida
          </h2>
          <ul style={{ fontSize: '14px', color: '#374151', lineHeight: '1.8', paddingLeft: '20px' }}>
            <li><strong>Municipio:</strong> {estacion.municipio}</li>
            <li><strong>Corredor:</strong> {linea?.colorNombre}</li>
            <li><strong>Tipo de zona:</strong> {estacion.tipo_zona}</li>
            <li><strong>Mejor hora para visitar:</strong> {estacion.mejor_horario}</li>
          </ul>
        </div>

        {/* PUNTOS DE INTERES */}
        {estacion.pois.length > 0 && (
          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>Lugares de Interés Cercanos</h2>
            <div style={gridStyles}>
              {estacion.pois.map((poi, idx) => (
                <div key={idx} style={poiStyles}>
                  <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: colorLinea, marginBottom: '8px' }}>
                    {poi.nombre}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '5px' }}>
                    {poi.tipo}
                  </p>
                  <p style={{ fontSize: '13px', color: '#374151', fontWeight: '500' }}>
                    {poi.distancia}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TIPS Y RECOMENDACIONES */}
        {estacion.tips.length > 0 && (
          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>Tips y Recomendaciones</h2>
            <div style={cardStyles}>
              {estacion.tips.map((tip, idx) => (
                <div key={idx} style={tipStyles}>
                  <div style={tipNumberStyles}>{idx + 1}</div>
                  <p style={{ fontSize: '15px', color: '#374151', lineHeight: '1.6', margin: 0 }}>
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TRANSFERENCIAS */}
        {estacion.transferencias.length > 0 && (
          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>Transferencias Disponibles</h2>
            <div style={gridStyles}>
              {estacion.transferencias.map((trans, idx) => (
                <div key={idx} style={cardStyles}>
                  <p style={{ fontSize: '14px', color: '#374151' }}>
                    {trans}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CONTEXTO MUNDIAL */}
        <div style={sectionStyles}>
          <h2 style={sectionTitleStyles}>Para Visitantes Internacionales</h2>
          <div style={cardStyles}>
            <p style={{ fontSize: '15px', color: '#374151', lineHeight: '1.6' }}>
              {estacion.mundial_relevancia}
            </p>
          </div>
        </div>
      </section>

      {/* NAVEGACIÓN */}
      <section style={{ ...containerStyles, paddingTop: '40px', paddingBottom: '40px', textAlign: 'center' }}>
        <h2 style={sectionTitleStyles}>Continúa Explorando</h2>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/merida" style={buttonStyles}>
            Volver a Mérida
          </Link>
          {linea && (
            <Link href={`/merida/linea/${linea.id}`} style={buttonStyles}>
              Ver Corredor {linea.colorNombre}
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
