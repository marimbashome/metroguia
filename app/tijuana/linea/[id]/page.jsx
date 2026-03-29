import { lineasTijuana } from '@/data/tijuana/lineas-detalle';
import { estacionesTijuana } from '@/data/tijuana/estaciones';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';

export async function generateStaticParams() {
  return lineasTijuana.map((linea) => ({ id: linea.id }));
}

export async function generateMetadata({ params }) {
  const linea = lineasTijuana.find((l) => l.id === params.id);
  if (!linea) {
    return { title: 'Línea no encontrada' };
  }
  return {
    title: linea.seo_title,
    description: linea.meta_description,
    openGraph: {
      title: linea.seo_title,
      description: linea.meta_description,
      url: `https://metroguia.mx/tijuana/linea/${linea.id}`,
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function LineaTijuanaPage({ params }) {
  const linea = lineasTijuana.find((l) => l.id === params.id);
  if (!linea) {
    return (
      <main style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h1>Línea no encontrada</h1>
        <p style={{ marginTop: '20px' }}>
          <Link href="/tijuana" style={{ color: '#6B7280', textDecoration: 'underline' }}>
            Volver a Tijuana
          </Link>
        </p>
      </main>
    );
  }

  const estacionesLinea = estacionesTijuana.filter((e) => e.linea === linea.id);

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
        name: 'Tijuana',
        item: 'https://metroguia.mx/tijuana/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: linea.nombre,
        item: `https://metroguia.mx/tijuana/linea/${linea.id}/`
      }
    ]
  }

  return (
    <main style={{ backgroundColor: '#ffffff' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section style={heroStyles}>
        <div style={containerStyles}>
          <h1 style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '10px' }}>
            {linea.h1}
          </h1>
          <p style={{ fontSize: '18px', opacity: '0.95', marginBottom: '15px' }}>
            De {linea.inicio} a {linea.fin}
          </p>
          <p style={{ fontSize: '14px', opacity: '0.9' }}>
            {linea.total} paradas • {linea.municipios.join(', ')}
          </p>
        </div>
      </section>

      <section style={{ ...containerStyles, ...sectionStyles, paddingTop: '40px' }}>
        <h2 style={sectionTitleStyles}>Descripción de la Línea</h2>
        <div style={infoBoxStyles}>
          <p style={{ fontSize: '16px', color: '#374151', lineHeight: '1.7', margin: 0 }}>
            {linea.descripcion}
          </p>
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

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
                    href={`/tijuana/estacion/${parada.estacion}`}
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

      <AdBannerLazyInArticle slot="1082410395" />

      {linea.estaciones_turisticas.length > 0 && (
        <section style={{ ...containerStyles, ...sectionStyles, paddingTop: '40px' }}>
          <h2 style={sectionTitleStyles}>Estaciones Imprescindibles</h2>
          <div style={gridStyles}>
            {linea.estaciones_turisticas.map((slugTuristico) => {
              const estacion = estacionesTijuana.find((e) => e.slug === slugTuristico);
              if (!estacion) return null;
              return (
                <Link
                  key={estacion.slug}
                  href={`/tijuana/estacion/${estacion.slug}`}
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

      <section style={{ ...containerStyles, ...sectionStyles, paddingTop: '40px' }}>
        <h2 style={sectionTitleStyles}>Todas las Estaciones de la Línea {linea.id}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
          {estacionesLinea.map((estacion, idx) => (
            <Link
              key={estacion.slug}
              href={`/tijuana/estacion/${estacion.slug}`}
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

      <section style={{ ...containerStyles, paddingTop: '40px', paddingBottom: '40px', textAlign: 'center' }}>
        <h2 style={sectionTitleStyles}>Explora Más de Tijuana</h2>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/tijuana" style={buttonStyles}>
            Volver a Tijuana
          </Link>
          {linea.id !== '1' && (
            <Link href="/tijuana/linea/1" style={buttonStyles}>
              Ver Línea 1
            </Link>
          )}
          {linea.id !== '2' && (
            <Link href="/tijuana/linea/2" style={buttonStyles}>
              Ver Línea 2
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
