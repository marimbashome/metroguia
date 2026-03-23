import { lineasGDL } from '@/data/gdl/lineas-detalle';
import { estacionesGDL } from '@/data/gdl/estaciones';
import Link from 'next/link';

export async function generateStaticParams() {
  return lineasGDL.map((linea) => ({
    id: linea.id,
  }));
}

export async function generateMetadata({ params }) {
  const linea = lineasGDL.find((l) => l.id === params.id);
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
      url: `https://metroguia.mx/gdl/linea/${linea.id}`,
    },
  };
}

export default function LineaGDLPage({ params }) {
  const linea = lineasGDL.find((l) => l.id === params.id);

  if (!linea) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '32px', color: '#ef4444' }}>Línea no encontrada</h1>
        <Link href="/gdl">
          <button
            style={{
              marginTop: '24px',
              padding: '12px 24px',
              backgroundColor: '#06B6D4',
              color: '#ffffff',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              fontFamily: 'Syne, sans-serif',
              fontWeight: '700',
              cursor: 'pointer',
            }}
          >
            Volver a Guadalajara
          </button>
        </Link>
      </main>
    );
  }

  const estacionesLinea = estacionesGDL.filter((e) => e.linea === linea.id);

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
        name: 'GDL',
        item: 'https://metroguia.mx/gdl/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `Línea ${linea.id}`,
        item: `https://metroguia.mx/gdl/linea/${linea.id}/`
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
      <section
        style={{
          background: `linear-gradient(135deg, ${linea.color} 0%, ${linea.color}cc 100%)`,
          color: '#ffffff',
          padding: '60px 24px',
        }}
      >
        <div style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span
              style={{
                width: '60px',
                height: '60px',
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '36px',
                fontFamily: 'Syne, sans-serif',
                fontWeight: '800',
              }}
            >
              {linea.id}
            </span>
          </div>
          <h1
            style={{
              fontSize: '48px',
              fontFamily: 'Syne, sans-serif',
              fontWeight: '800',
              margin: '0 0 16px 0',
              lineHeight: '1.2',
            }}
          >
            Línea {linea.id} — {linea.colorNombre}
          </h1>
          <p
            style={{
              fontSize: '20px',
              fontFamily: 'DM Sans, sans-serif',
              margin: '0 0 16px 0',
              opacity: '0.95',
            }}
          >
            {linea.inicio} → {linea.fin}
          </p>
          <p
            style={{
              fontSize: '16px',
              fontFamily: 'DM Sans, sans-serif',
              margin: '0',
              opacity: '0.9',
            }}
          >
            {linea.total} estaciones • {linea.municipios.join(', ')}
          </p>
        </div>
      </section>

      {/* DESCRIPCIÓN */}
      <section style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto', padding: '80px 24px' }}>
        <div
          style={{
            backgroundColor: '#f9fafb',
            padding: '32px',
            borderLeft: `4px solid ${linea.color}`,
            borderRadius: '8px',
            marginBottom: '80px',
          }}
        >
          <h2
            style={{
              fontSize: '28px',
              fontFamily: 'Syne, sans-serif',
              fontWeight: '700',
              margin: '0 0 16px 0',
              color: '#1f2937',
            }}
          >
            Sobre esta Línea
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: '#374151',
              margin: '0',
              fontFamily: 'DM Sans, sans-serif',
              lineHeight: '1.8',
            }}
          >
            {linea.descripcion}
          </p>
        </div>

        {/* RUTA DE 1 DÍA */}
        <div style={{ marginBottom: '80px' }}>
          <h2
            style={{
              fontSize: '40px',
              fontFamily: 'Syne, sans-serif',
              fontWeight: '700',
              marginBottom: '32px',
              color: '#1f2937',
              borderBottom: `3px solid ${linea.color}`,
              paddingBottom: '16px',
            }}
          >
            {linea.ruta_1_dia.titulo}
          </h2>
          <div style={{ display: 'grid', gap: '24px' }}>
            {linea.ruta_1_dia.paradas.map((parada, idx) => {
              const estacion = estacionesLinea.find((e) => e.slug === parada.estacion);
              return (
                <div
                  key={idx}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '60px 1fr',
                    gap: '24px',
                    alignItems: 'start',
                  }}
                >
                  <div style={{ position: 'relative' }}>
                    <div
                      style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: linea.color,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        fontSize: '24px',
                        fontFamily: 'Syne, sans-serif',
                        fontWeight: '700',
                      }}
                    >
                      {idx + 1}
                    </div>
                    {idx < linea.ruta_1_dia.paradas.length - 1 && (
                      <div
                        style={{
                          position: 'absolute',
                          left: '29px',
                          top: '60px',
                          width: '2px',
                          height: '100px',
                          backgroundColor: linea.color,
                          opacity: '0.3',
                        }}
                      />
                    )}
                  </div>
                  <div>
                    <Link href={`/gdl/estacion/${parada.estacion}`}>
                      <h3
                        style={{
                          fontSize: '20px',
                          fontFamily: 'Syne, sans-serif',
                          fontWeight: '700',
                          margin: '0 0 8px 0',
                          color: linea.color,
                          cursor: 'pointer',
                          textDecoration: 'none',
                        }}
                      >
                        {estacion?.nombre || parada.estacion}
                      </h3>
                    </Link>
                    <p
                      style={{
                        fontSize: '16px',
                        color: '#374151',
                        margin: '0',
                        fontFamily: 'DM Sans, sans-serif',
                        lineHeight: '1.6',
                      }}
                    >
                      {parada.actividad}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* TODAS LAS ESTACIONES */}
        <div style={{ marginBottom: '80px' }}>
          <h2
            style={{
              fontSize: '40px',
              fontFamily: 'Syne, sans-serif',
              fontWeight: '700',
              marginBottom: '32px',
              color: '#1f2937',
              borderBottom: `3px solid ${linea.color}`,
              paddingBottom: '16px',
            }}
          >
            Todas las Estaciones ({linea.total})
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '16px',
            }}
          >
            {estacionesLinea.map((estacion, idx) => (
              <Link href={`/gdl/estacion/${estacion.slug}`} key={estacion.slug}>
                <div
                  style={{
                    padding: '20px',
                    backgroundColor: '#f9fafb',
                    border: `1px solid #e5e7eb`,
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '12px',
                    }}
                  >
                    <span
                      style={{
                        width: '36px',
                        height: '36px',
                        backgroundColor: linea.color,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        fontSize: '16px',
                        fontFamily: 'Syne, sans-serif',
                        fontWeight: '700',
                        flexShrink: 0,
                      }}
                    >
                      {idx + 1}
                    </span>
                    <h3
                      style={{
                        fontSize: '16px',
                        fontFamily: 'Syne, sans-serif',
                        fontWeight: '700',
                        margin: '0',
                        color: '#1f2937',
                      }}
                    >
                      {estacion.nombre}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: '12px',
                      color: '#6b7280',
                      margin: '0 0 8px 0',
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                  >
                    {estacion.municipio}
                  </p>
                  <p
                    style={{
                      fontSize: '13px',
                      color: '#374151',
                      margin: '0',
                      fontFamily: 'DM Sans, sans-serif',
                      lineHeight: '1.4',
                    }}
                  >
                    {estacion.intro}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          backgroundColor: '#f3f4f6',
          padding: '64px 24px',
          marginTop: '80px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '32px',
            fontFamily: 'Syne, sans-serif',
            fontWeight: '700',
            margin: '0 0 16px 0',
            color: '#1f2937',
          }}
        >
          Explora Guadalajara
        </h2>
        <p
          style={{
            fontSize: '16px',
            color: '#6b7280',
            margin: '0 0 24px 0',
            fontFamily: 'DM Sans, sans-serif',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Descubre más líneas, estaciones y atracciones turísticas en Guadalajara.
        </p>
        <Link href="/gdl">
          <button
            style={{
              padding: '14px 32px',
              backgroundColor: linea.color,
              color: '#ffffff',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              fontFamily: 'Syne, sans-serif',
              fontWeight: '700',
              cursor: 'pointer',
            }}
          >
            Volver a Guadalajara
          </button>
        </Link>
      </section>
    </main>
  );
}