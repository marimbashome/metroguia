import { lineasTrenMaya } from '@/data/tren-maya/lineas-detalle';
import { estacionesTrenMaya } from '@/data/tren-maya/estaciones';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';

export async function generateStaticParams() {
  return lineasTrenMaya.map((linea) => ({ id: linea.id }));
}

export async function generateMetadata({ params }) {
  const linea = lineasTrenMaya.find((l) => l.id === params.id);
  if (!linea) {
    return { title: 'Tramo no encontrado' };
  }
  return {
    title: linea.seo_title,
    description: linea.meta_description,
    openGraph: {
      title: linea.seo_title,
      description: linea.meta_description,
      url: `https://metroguia.mx/tren-maya/linea/${linea.id}`,
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function LineaTrenMayaPage({ params }) {
  const linea = lineasTrenMaya.find((l) => l.id === params.id);
  if (!linea) {
    return (
      <main style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h1>Tramo no encontrado</h1>
        <p style={{ marginTop: '20px' }}>
          <Link href="/tren-maya" style={{ color: '#0EA5E9', textDecoration: 'underline' }}>
            Volver a Tren Maya
          </Link>
        </p>
      </main>
    );
  }

  const lineaNombre = linea.nombre || linea.h1 || linea.colorNombre || `Línea ${linea.id}`;

  const estacionesLinea = estacionesTrenMaya.filter((e) => e.linea === linea.id);

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  };

  const heroStyles = {
    background: `linear-gradient(135deg, ${linea.color} 0%, ${linea.color}dd 100%)`,
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

  const infoBoxStyles = {
    backgroundColor: `${linea.color}15`,
    borderLeft: `4px solid ${linea.color}`,
    padding: '20px',
    borderRadius: '4px',
    marginBottom: '30px',
  };

  const estacionCardStyles = {
    backgroundColor: '#ffffff',
    border: `1px solid #e5e7eb`,
    borderRadius: '6px',
    padding: '15px',
    marginBottom: '15px',
    paddingLeft: '50px',
    position: 'relative',
  };

  const estacionNumberStyles = {
    position: 'absolute',
    left: '15px',
    top: '15px',
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: linea.color,
    color: '#ffffff',
    borderRadius: '50%',
    fontWeight: 'bold',
    fontSize: '12px',
  };

  const rutaParadaStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '20px',
    paddingBottom: '20px',
    borderBottom: '1px solid #e5e7eb',
  };

  const rutaTimeStyles = {
    minWidth: '120px',
    fontWeight: 'bold',
    color: linea.color,
    fontSize: '14px',
  };

  const rutaActivityStyles = {
    flex: 1,
    color: '#374151',
    fontSize: '15px',
    lineHeight: '1.5',
  };

  const buttonStyles = {
    display: 'inline-block',
    backgroundColor: linea.color,
    color: '#ffffff',
    padding: '12px 24px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginRight: '10px',
    marginBottom: '10px',
    transition: 'opacity 0.3s ease',
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    marginBottom: '20px',
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
        name: 'Tren Maya',
        item: 'https://metroguia.mx/tren-maya/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: lineaNombre,
        item: `https://metroguia.mx/tren-maya/linea/${linea.id}/`
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
        <div style={containerStyles}>
          <h1 style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '10px' }}>
            {linea.h1}
          </h1>
          <p style={{ fontSize: '18px', opacity: '0.95', marginBottom: '15px' }}>
            De {linea.inicio} a {linea.fin}
          </p>
          <p style={{ fontSize: '14px', opacity: '0.9' }}>
            {linea.total} estaciones • {linea.municipios.join(', ')}
          </p>
        </div>
      </section>

      {/* DESCRIPCIÓN */}
      <section style={{ ...containerStyles, ...sectionStyles, paddingTop: '40px' }}>
        <h2 style={sectionTitleStyles}>Descripción del Tramo</h2>
        <div style={infoBoxStyles}>
          <p style={{ fontSize: '16px', color: '#374151', lineHeight: '1.7', margin: 0 }}>
            {linea.descripcion}
          </p>
        </div>
      </section>

      {/* ITINERARIO DE 1 DÍA */}
      <section style={{ ...containerStyles, ...sectionStyles, paddingTop: '40px' }}>
        <h2 style={sectionTitleStyles}>{linea.ruta_1_dia.titulo}</h2>
        <div style={{ backgroundColor: '#f9fafb', padding: '30px', borderRadius: '8px' }}>
          {linea.ruta_1_dia.paradas.map((parada, idx) => {
            const estacionInfo = estacionesLinea.find((e) => e.slug === parada.estacion);
            return (
              <div key={idx} style={rutaParadaStyles}>
                <div style={rutaTimeStyles}>{parada.actividad.split(' - ')[1] || 'Parada'}</div>
                <div style={rutaActivityStyles}>
                  <Link
                    href={`/tren-maya/estacion/${parada.estacion}`}
                    style={{ color: linea.color, fontWeight: 'bold', textDecoration: 'underline' }}
                  >
                    {estacionInfo?.nombre || parada.estacion}
                  </Link>
                  <p style={{ margin: '5px 0 0 0', color: '#6b7280', fontSize: '14px' }}>
                    {parada.actividad.split(' - ')[0]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ESTACIONES TURÍSTICAS */}
      {linea.estaciones_turisticas.length > 0 && (
        <section style={{ ...containerStyles, ...sectionStyles, paddingTop: '40px' }}>
          <h2 style={sectionTitleStyles}>Estaciones Turísticas Imprescindibles</h2>
          <div style={gridStyles}>
            {linea.estaciones_turisticas.map((slugTuristico) => {
              const estacion = estacionesTrenMaya.find((e) => e.slug === slugTuristico);
              if (!estacion) return null;
              return (
                <Link
                  key={estacion.slug}
                  href={`/tren-maya/estacion/${estacion.slug}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    style={{
                      backgroundColor: '#ffffff',
                      border: `2px solid ${linea.color}`,
                      borderRadius: '8px',
                      padding: '20px',
                      height: '100%',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: linea.color, marginBottom: '10px' }}>
                      {estacion.nombre}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '10px' }}>
                      {estacion.municipio}
                    </p>
                    <p style={{ fontSize: '15px', color: '#374151', lineHeight: '1.5' }}>
                      {estacion.intro}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* TODAS LAS ESTACIONES */}
      <section style={{ ...containerStyles, ...sectionStyles, paddingTop: '40px' }}>
        <h2 style={sectionTitleStyles}>Todas las Estaciones del Tramo {linea.id}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
          {estacionesLinea.map((estacion, idx) => (
            <Link
              key={estacion.slug}
              href={`/tren-maya/estacion/${estacion.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={estacionCardStyles}>
                <div style={estacionNumberStyles}>{idx + 1}</div>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: linea.color, marginBottom: '5px' }}>
                  {estacion.nombre}
                </h3>
                <p style={{ fontSize: '13px', color: '#6b7280', margin: 0 }}>
                  {estacion.municipio} • {estacion.tipo_zona}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* INFORMACIÓN ÚTIL */}
      <section style={{ ...containerStyles, ...sectionStyles, paddingTop: '40px' }}>
        <h2 style={sectionTitleStyles}>Información Útil</h2>
        <div style={gridStyles}>
          <div style={{ backgroundColor: '#f9fafb', padding: '20px', borderRadius: '8px', border: `1px solid #e5e7eb` }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: linea.color, marginBottom: '10px' }}>
              Horarios
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6', margin: 0 }}>
              Operación diaria. Horarios varían según el tramo. Revisar disponibilidad.
            </p>
          </div>
          <div style={{ backgroundColor: '#f9fafb', padding: '20px', borderRadius: '8px', border: `1px solid #e5e7eb` }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: linea.color, marginBottom: '10px' }}>
              Duración
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6', margin: 0 }}>
              Varía según tramo. Desde 1 hora hasta 5+ horas en tramos largos.
            </p>
          </div>
          <div style={{ backgroundColor: '#f9fafb', padding: '20px', borderRadius: '8px', border: `1px solid #e5e7eb` }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: linea.color, marginBottom: '10px' }}>
              Servicios
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6', margin: 0 }}>
              Restaurante, WiFi, sanitarios limpios. Vistas panorámicas del Caribe.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ ...containerStyles, paddingTop: '40px', paddingBottom: '40px', textAlign: 'center' }}>
        <h2 style={sectionTitleStyles}>Explora Más del Tren Maya</h2>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/tren-maya" style={buttonStyles}>
            Volver a Tren Maya
          </Link>
          {linea.id !== 'T1' && (
            <Link href="/tren-maya/linea/T1" style={buttonStyles}>
              Tramo 1: Riviera Maya
            </Link>
          )}
          {linea.id !== 'T7' && (
            <Link href="/tren-maya/linea/T7" style={buttonStyles}>
              Tramo 7: Maravilla Mundo
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
