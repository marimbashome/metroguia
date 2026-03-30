import { estacionesEcovia } from '@/data/mty/ecovia';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import Link from 'next/link';

export async function generateStaticParams() {
  return estacionesEcovia.map((estacion) => ({
    slug: estacion.slug,
  }));
}

export async function generateMetadata({ params }) {
  const estacion = estacionesEcovia.find((e) => e.slug === params.slug);
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
      url: `https://metroguia.mx/mty/ecovia/estacion/${estacion.slug}`,
    },
  };
}

export default function EstacionEcoviaPage({ params }) {
  const estacion = estacionesEcovia.find((e) => e.slug === params.slug);

  if (!estacion) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '32px', color: '#ef4444' }}>Estación no encontrada</h1>
        <Link href="/mty/ecovia">
          <button
            style={{
              marginTop: '24px',
              padding: '12px 24px',
              backgroundColor: '#10B981',
              color: '#ffffff',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              fontFamily: 'Syne, sans-serif',
              fontWeight: '700',
              cursor: 'pointer',
            }}
          >
            Volver a Ecovía
          </button>
        </Link>
      </main>
    );
  }

  const colorLinea = '#10B981';
  const nombreLinea = 'Ecovía TransMetro';

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
        name: 'Monterrey',
        item: 'https://metroguia.mx/mty/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Ecovía',
        item: 'https://metroguia.mx/mty/ecovia/'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: estacion.nombre,
        item: `https://metroguia.mx/mty/ecovia/estacion/${estacion.slug}`
      }
    ]
  };

  return (
    <main style={{ backgroundColor: '#ffffff' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
              E
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
              margin: '0 0 8px 0',
              opacity: '0.95',
            }}
          >
            {estacion.intro}
          </p>
          <p
            style={{
              fontSize: '14px',
              fontFamily: 'DM Sans, sans-serif',
              margin: '0',
              opacity: '0.85',
            }}
          >
            {nombreLinea}
          </p>
        </div>
      </section>

      {/* Ad 1 — Banner despues del hero */}
      <AdBannerLazy slot="4434764790" format="auto" />

      {/* CONTENIDO PRINCIPAL */}
      <section style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto', padding: '80px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '48px' }}>
          {/* COLUMNA IZQUIERDA */}
          <div>
            {/* DESCRIPCIÓN TURÍSTICA */}
            {estacion.descripcion_turistica && (
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
                  Sobre Esta Estación
                </h2>
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#4b5563',
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                >
                  {estacion.descripcion_turistica}
                </p>
              </div>
            )}

            {/* PUNTOS DE INTERÉS */}
            {estacion.pois && estacion.pois.length > 0 && (
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
            )}

            {/* TIPS */}
            {(estacion.tips || []).length > 0 && (
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
                  {(estacion.tips || []).map((tip, idx) => (
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
            )}

            {/* LUGARES CERCANOS */}
            {estacion.lugares_cercanos && estacion.lugares_cercanos.length > 0 && (
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
                  Lugares Cercanos
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
                  {estacion.lugares_cercanos.map((lugar, idx) => (
                    <li
                      key={idx}
                      style={{
                        padding: '12px 16px',
                        backgroundColor: '#f3f4f6',
                        borderLeft: `4px solid ${colorLinea}`,
                        borderRadius: '4px',
                        fontSize: '14px',
                        color: '#1f2937',
                        fontFamily: 'DM Sans, sans-serif',
                      }}
                    >
                      📍 {lugar}
                    </li>
                  ))}
                </ul>
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
                    {nombreLinea}
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
                    {(estacion.tipo_zona || '').replace('-', ' / ')}
                  </p>
                </div>
                {estacion.mejor_horario && (
                  <div>
                    <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 4px 0', fontFamily: 'DM Sans, sans-serif' }}>
                      Mejor Horario
                    </p>
                    <p style={{ fontSize: '16px', fontWeight: '700', margin: '0', fontFamily: 'Syne, sans-serif', color: '#1f2937' }}>
                      {estacion.mejor_horario}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* HORARIOS */}
            {estacion.horarios && (
              <div
                style={{
                  backgroundColor: '#f3f4f6',
                  padding: '24px',
                  borderRadius: '8px',
                  marginBottom: '32px',
                  borderTop: `4px solid #10B981`,
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
                  Horarios
                </h3>
                <div style={{ display: 'grid', gap: '12px' }}>
                  <div>
                    <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 4px 0', fontFamily: 'DM Sans, sans-serif' }}>
                      Apertura
                    </p>
                    <p style={{ fontSize: '16px', fontWeight: '700', margin: '0', fontFamily: 'Syne, sans-serif', color: '#1f2937' }}>
                      {estacion.horarios.apertura}
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 4px 0', fontFamily: 'DM Sans, sans-serif' }}>
                      Cierre
                    </p>
                    <p style={{ fontSize: '16px', fontWeight: '700', margin: '0', fontFamily: 'Syne, sans-serif', color: '#1f2937' }}>
                      {estacion.horarios.cierre}
                    </p>
                  </div>
                  {estacion.horarios.notas && (
                    <div>
                      <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 4px 0', fontFamily: 'DM Sans, sans-serif' }}>
                        Notas
                      </p>
                      <p style={{ fontSize: '14px', margin: '0', fontFamily: 'DM Sans, sans-serif', color: '#4b5563' }}>
                        {estacion.horarios.notas}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ACCESIBILIDAD */}
            {estacion.accesibilidad && (
              <div
                style={{
                  backgroundColor: '#f3f4f6',
                  padding: '24px',
                  borderRadius: '8px',
                  marginBottom: '32px',
                  borderTop: `4px solid #10B981`,
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
                  Accesibilidad
                </h3>
                <div style={{ display: 'grid', gap: '8px' }}>
                  {estacion.accesibilidad.elevador && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#10B981', fontWeight: '700' }}>✓</span>
                      <span style={{ fontSize: '14px', color: '#1f2937', fontFamily: 'DM Sans, sans-serif' }}>Elevador</span>
                    </div>
                  )}
                  {estacion.accesibilidad.rampa && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#10B981', fontWeight: '700' }}>✓</span>
                      <span style={{ fontSize: '14px', color: '#1f2937', fontFamily: 'DM Sans, sans-serif' }}>Rampa</span>
                    </div>
                  )}
                  {estacion.accesibilidad.piso_tactil && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#10B981', fontWeight: '700' }}>✓</span>
                      <span style={{ fontSize: '14px', color: '#1f2937', fontFamily: 'DM Sans, sans-serif' }}>Piso Táctil</span>
                    </div>
                  )}
                  {estacion.accesibilidad.notas && (
                    <p style={{ fontSize: '12px', color: '#6b7280', margin: '8px 0 0 0', fontFamily: 'DM Sans, sans-serif' }}>
                      {estacion.accesibilidad.notas}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* TRANSFERENCIAS */}
            {estacion.transferencias && estacion.transferencias.length > 0 && (
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

            {/* NAVEGACIÓN A HUB */}
            <Link href="/mty/ecovia">
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
                }}
              >
                Volver a Ecovía
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Ad 2 — Banner antes del CTA */}
      <AdBannerLazy slot="4434764790" format="auto" />

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
          Hospedaje en Monterrey
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
          Encuentra opciones de alojamiento cerca de esta estación y otros puntos turísticos de Monterrey.
        </p>
        <Link href="/hospedaje">
          <button
            style={{
              padding: '14px 32px',
              backgroundColor: '#10B981',
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