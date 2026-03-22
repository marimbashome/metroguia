import { estacionesGDL } from '@/data/gdl/estaciones';
import Link from 'next/link';

export async function generateStaticParams() {
  return estacionesGDL.map((estacion) => ({
    slug: estacion.slug,
  }));
}

export async function generateMetadata({ params }) {
  const estacion = estacionesGDL.find((e) => e.slug === params.slug);
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
      url: `https://metroguia.mx/gdl/estacion/${estacion.slug}`,
    },
  };
}

export default function EstacionGDLPage({ params }) {
  const estacion = estacionesGDL.find((e) => e.slug === params.slug);

  if (!estacion) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '32px', color: '#ef4444' }}>Estación no encontrada</h1>
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

  const colorLinea = estacion.linea === '1' ? '#E63946' : estacion.linea === '2' ? '#06B6D4' : '#F97316';

  return (
    <main style={{ backgroundColor: '#ffffff' }}>
      {/* HERO */}
      <section
        style={{
          background: `linear-gradient(135deg, ${colorLinea} 0%, ${colorLinea}cc 100%)`,
          color: '#ffffff',
          padding: '60px 24px',
        }}
      >
        <div style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span
              style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                fontFamily: 'Syne, sans-serif',
                fontWeight: '700',
              }}
            >
              {estacion.linea}
            </span>
            <span style={{ fontSize: '16px', fontWeight: '500' }}>{estacion.municipio}</span>
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
            {estacion.nombre}
          </h1>
          <p
            style={{
              fontSize: '18px',
              fontFamily: 'DM Sans, sans-serif',
              margin: '0',
              opacity: '0.95',
            }}
          >
            {estacion.intro}
          </p>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <section style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto', padding: '80px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '48px' }}>
          {/* COLUMNA IZQUIERDA */}
          <div>
            {/* PUNTOS DE INTERÉS */}
            <div style={{ marginBottom: '64px' }}>
              <h2
                style={{
                  fontSize: '32px',
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: '700',
                  marginBottom: '24px',
                  color: '#1f2937',
                  borderBottom: `3px solid ${colorLinea}`,
                  paddingBottom: '12px',
                }}
              >
                Puntos de Interés Cercanos
              </h2>
              <div style={{ display: 'grid', gap: '16px' }}>
                {estacion.pois.map((poi, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '16px',
                      backgroundColor: '#f9fafb',
                      borderLeft: `4px solid ${colorLinea}`,
                      borderRadius: '4px',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '16px',
                        fontFamily: 'Syne, sans-serif',
                        fontWeight: '700',
                        margin: '0 0 4px 0',
                        color: '#1f2937',
                      }}
                    >
                      {poi.nombre}
                    </h3>
                    <p
                      style={{
                        fontSize: '13px',
                        color: '#6b7280',
                        margin: '0',
                        fontFamily: 'DM Sans, sans-serif',
                      }}
                    >
                      {poi.tipo} • {poi.distancia}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* TIPS */}
            <div style={{ marginBottom: '64px' }}>
              <h2
                style={{
                  fontSize: '32px',
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: '700',
                  marginBottom: '24px',
                  color: '#1f2937',
                  borderBottom: `3px solid ${colorLinea}`,
                  paddingBottom: '12px',
                }}
              >
                Consejos Útiles
              </h2>
              <ul
                style={{
                  listStyle: 'none',
                  padding: '0',
                  margin: '0',
                  display: 'grid',
                  gap: '12px',
                }}
              >
                {estacion.tips.map((tip, idx) => (
                  <li
                    key={idx}
                    style={{
                      padding: '12px 16px',
                      backgroundColor: '#f0fdf4',
                      borderLeft: `4px solid #22c55e`,
                      borderRadius: '4px',
                      fontSize: '14px',
                      color: '#15803d',
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                  >
                    ✓ {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* MUNDIAL 2026 */}
            {estacion.mundial_relevancia && !estacion.mundial_relevancia.includes('Sin relevancia') && (
              <div
                style={{
                  padding: '32px',
                  backgroundColor: '#fef3c7',
                  borderLeft: `4px solid #f59e0b`,
                  borderRadius: '4px',
                  marginBottom: '64px',
                }}
              >
                <h2
                  style={{
                    fontSize: '24px',
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: '700',
                    marginBottom: '12px',
                    color: '#b45309',
                  }}
                >
                  ⚽ FIFA World Cup 2026
                </h2>
                <p
                  style={{
                    fontSize: '16px',
                    color: '#92400e',
                    margin: '0',
                    fontFamily: 'DM Sans, sans-serif',
                    lineHeight: '1.6',
                  }}
                >
                  {estacion.mundial_relevancia}
                </p>
              </div>
            )}
          </div>

          {/* COLUMNA DERECHA - SIDEBAR */}
          <div>
            {/* INFORMACIÓN RÁPIDA */}
            <div
              style={{
                backgroundColor: '#f3f4f6',
                padding: '24px',
                borderRadius: '8px',
                marginBottom: '32px',
                borderTop: `4px solid ${colorLinea}`,
              }}
            >
              <h3
                style={{
                  fontSize: '18px',
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: '700',
                  margin: '0 0 16px 0',
                  color: '#1f2937',
                }}
              >
                Información Rápida
              </h3>
              <div style={{ display: 'grid', gap: '12px' }}>
                <div>
                  <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 4px 0', fontFamily: 'DM Sans, sans-serif' }}>
                    Línea
                  </p>
                  <p
                    style={{
                      fontSize: '16px',
                      fontWeight: '700',
                      margin: '0',
                      color: colorLinea,
                      fontFamily: 'Syne, sans-serif',
                    }}
                  >
                    Línea {estacion.linea}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 4px 0', fontFamily: 'DM Sans, sans-serif' }}>
                    Municipio
                  </p>
                  <p style={{ fontSize: '16px', fontWeight: '700', margin: '0', fontFamily: 'Syne, sans-serif', color: '#1f2937' }}>
                    {estacion.municipio}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 4px 0', fontFamily: 'DM Sans, sans-serif' }}>
                    Tipo de Zona
                  </p>
                  <p style={{ fontSize: '16px', fontWeight: '700', margin: '0', fontFamily: 'Syne, sans-serif', color: '#1f2937' }}>
                    {estacion.tipo_zona.replace('-', ' / ')}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 4px 0', fontFamily: 'DM Sans, sans-serif' }}>
                    Mejor Horario
                  </p>
                  <p style={{ fontSize: '16px', fontWeight: '700', margin: '0', fontFamily: 'Syne, sans-serif', color: '#1f2937' }}>
                    {estacion.mejor_horario}
                  </p>
                </div>
              </div>
            </div>

            {/* TRANSFERENCIAS */}
            {estacion.transferencias.length > 0 && (
              <div
                style={{
                  backgroundColor: '#f3f4f6',
                  padding: '24px',
                  borderRadius: '8px',
                  marginBottom: '32px',
                  borderTop: `4px solid #3b82f6`,
                }}
              >
                <h3
                  style={{
                    fontSize: '18px',
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: '700',
                    margin: '0 0 16px 0',
                    color: '#1f2937',
                  }}
                >
                  Conexiones
                </h3>
                <div style={{ display: 'grid', gap: '8px' }}>
                  {estacion.transferencias.map((transf, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '8px 12px',
                        backgroundColor: '#dbeafe',
                        borderRadius: '4px',
                        fontSize: '14px',
                        color: '#1e40af',
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: '600',
                      }}
                    >
                      → {transf}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* NAVEGACIÓN A LÍNEA */}
            <Link href={`/gdl/linea/${estacion.linea}`}>
              <button
                style={{
                  width: '100%',
                  padding: '16px',
                  backgroundColor: colorLinea,
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '16px',
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: '700',
                  cursor: 'pointer',
                  marginBottom: '12px',
                }}
              >
                Ver Línea {estacion.linea} Completa
              </button>
            </Link>

            <Link href="/gdl">
              <button
                style={{
                  width: '100%',
                  padding: '16px',
                  backgroundColor: '#e5e7eb',
                  color: '#1f2937',
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
          </div>
        </div>
      </section>

      {/* CTA HOSPEDAJE */}
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
          Hospedaje en Guadalajara
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
          Encuentra opciones de alojamiento cerca de esta estación y otros puntos turísticos de Guadalajara.
        </p>
        <Link href="/hospedaje">
          <button
            style={{
              padding: '14px 32px',
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
            Explorar Hospedaje
          </button>
        </Link>
      </section>
    </main>
  );
}