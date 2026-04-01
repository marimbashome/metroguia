import { estacionesEcovia } from '@/data/mty/ecovia';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
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
    alternates: { canonical: `https://metroguia.mx/mty/ecovia/estacion/${estacion.slug}/` },
    openGraph: {
      title: estacion.seo_title,
      description: estacion.meta_description,
      url: `https://metroguia.mx/mty/ecovia/estacion/${estacion.slug}/`,
      siteName: 'MetroGuia',
      locale: 'es_MX',
      type: 'website',
    },
  };
}

export default function EstacionEcoviaPage({ params }) {
  const estacion = estacionesEcovia.find((e) => e.slug === params.slug);

  if (!estacion) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '32px', color: '#ef4444' }}>Estación no encontrada</h1>
        <Link href="/mty/ecovia" style={{ textDecoration: 'none' }}>
          <span
            style={{
              display: 'inline-block',
              marginTop: '24px',
              padding: '12px 24px',
              backgroundColor: '#10B981',
              color: '#ffffff',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: '700',
              cursor: 'pointer',
            }}
          >
            Volver a Ecovía
          </span>
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
    <main style={{ backgroundColor: 'var(--bg)' }}>
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
              margin: '0 0 8px 0',
              opacity: '0.95',
            }}
          >
            {estacion.intro}
          </p>
          <p
            style={{
              fontSize: '14px',
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
                    fontWeight: '700',
                    marginBottom: '24px',
                    color: 'var(--text)',
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
                    color: 'var(--text-muted)',
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
                    fontWeight: '700',
                    marginBottom: '24px',
                    color: 'var(--text)',
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
                        backgroundColor: 'var(--surface)',
                        borderLeft: `4px solid ${colorLinea}`,
                        borderRadius: '4px',
                      }}
                    >
                      <h3
                        style={{
                          fontSize: '16px',
                          fontWeight: '700',
                          margin: '0 0 4px 0',
                          color: 'var(--text)',
                        }}
                      >
                        {poi.nombre}
                      </h3>
                      <p
                        style={{
                          fontSize: '13px',
                          color: 'var(--text-muted)',
                          margin: '0',
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
            {(Array.isArray(estacion.tips) ? estacion.tips : []).length > 0 && (
              <div style={{ marginBottom: '64px' }}>
                <h2
                  style={{
                    fontSize: '32px',
                    fontWeight: '700',
                    marginBottom: '24px',
                    color: 'var(--text)',
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
                  {(Array.isArray(estacion.tips) ? estacion.tips : []).map((tip, idx) => (
                    <li
                      key={idx}
                      style={{
                        padding: '12px 16px',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        borderLeft: `4px solid #22c55e`,
                        borderRadius: '4px',
                        fontSize: '14px',
                        color: '#10B981',
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
                    fontWeight: '700',
                    marginBottom: '24px',
                    color: 'var(--text)',
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
                        backgroundColor: 'var(--surface)',
                        borderLeft: `4px solid ${colorLinea}`,
                        borderRadius: '4px',
                        fontSize: '14px',
                        color: 'var(--text)',
                      }}
                    >
                      📍 {typeof lugar === 'string' ? lugar : lugar.nombre}{typeof lugar === 'object' && lugar.descripcion && <span style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>{lugar.descripcion}</span>}
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
                backgroundColor: 'var(--surface)',
                padding: '24px',
                borderRadius: '8px',
                marginBottom: '32px',
                borderTop: `4px solid ${colorLinea}`,
              }}
            >
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  margin: '0 0 16px 0',
                  color: 'var(--text)',
                }}
              >
                Información Rápida
              </h3>
              <div style={{ display: 'grid', gap: '12px' }}>
                <div>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>
                    Línea
                  </p>
                  <p
                    style={{
                      fontSize: '16px',
                      fontWeight: '700',
                      margin: '0',
                      color: colorLinea,
                    }}
                  >
                    {nombreLinea}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>
                    Municipio
                  </p>
                  <p style={{ fontSize: '16px', fontWeight: '700', margin: '0', color: 'var(--text)' }}>
                    {estacion.municipio}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>
                    Tipo de Zona
                  </p>
                  <p style={{ fontSize: '16px', fontWeight: '700', margin: '0', color: 'var(--text)' }}>
                    {(estacion.tipo_zona || '').replace('-', ' / ')}
                  </p>
                </div>
                {estacion.mejor_horario && (
                  <div>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>
                      Mejor Horario
                    </p>
                    <p style={{ fontSize: '16px', fontWeight: '700', margin: '0', color: 'var(--text)' }}>
                      {estacion.mejor_horario}
                    </p>
                  </div>
                )}
                <div style={{ marginTop: '8px', paddingTop: '12px', borderTop: '1px solid var(--border)' }}>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>
                    Tarifa
                  </p>
                  <p style={{ fontSize: '16px', fontWeight: '700', margin: '0', color: 'var(--text)' }}>
                    $12 MXN tarjeta FERIA
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>
                    Horarios
                  </p>
                  <p style={{ fontSize: '14px', margin: '0', color: 'var(--text)' }}>
                    L-V 4:00-00:00<br />
                    Sáb 5:00-23:30<br />
                    Dom 5:30-23:00
                  </p>
                </div>
              </div>
            </div>

            {/* HORARIOS */}
            {estacion.horarios && (
              <div
                style={{
                  backgroundColor: 'var(--surface)',
                  padding: '24px',
                  borderRadius: '8px',
                  marginBottom: '32px',
                  borderTop: `4px solid #10B981`,
                }}
              >
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    margin: '0 0 16px 0',
                    color: 'var(--text)',
                  }}
                >
                  Horarios
                </h3>
                <div style={{ display: 'grid', gap: '12px' }}>
                  <div>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>
                      Apertura
                    </p>
                    <p style={{ fontSize: '16px', fontWeight: '700', margin: '0', color: 'var(--text)' }}>
                      {estacion.horarios.apertura}
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>
                      Cierre
                    </p>
                    <p style={{ fontSize: '16px', fontWeight: '700', margin: '0', color: 'var(--text)' }}>
                      {estacion.horarios.cierre}
                    </p>
                  </div>
                  {estacion.horarios.notas && (
                    <div>
                      <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>
                        Notas
                      </p>
                      <p style={{ fontSize: '14px', margin: '0', color: 'var(--text-muted)' }}>
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
                  backgroundColor: 'var(--surface)',
                  padding: '24px',
                  borderRadius: '8px',
                  marginBottom: '32px',
                  borderTop: `4px solid #10B981`,
                }}
              >
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    margin: '0 0 16px 0',
                    color: 'var(--text)',
                  }}
                >
                  Accesibilidad
                </h3>
                <div style={{ display: 'grid', gap: '8px' }}>
                  {estacion.accesibilidad.elevador && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#10B981', fontWeight: '700' }}>✓</span>
                      <span style={{ fontSize: '14px', color: 'var(--text)' }}>Elevador</span>
                    </div>
                  )}
                  {estacion.accesibilidad.rampa && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#10B981', fontWeight: '700' }}>✓</span>
                      <span style={{ fontSize: '14px', color: 'var(--text)' }}>Rampa</span>
                    </div>
                  )}
                  {estacion.accesibilidad.piso_tactil && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#10B981', fontWeight: '700' }}>✓</span>
                      <span style={{ fontSize: '14px', color: 'var(--text)' }}>Piso Táctil</span>
                    </div>
                  )}
                  {estacion.accesibilidad.notas && (
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '8px 0 0 0' }}>
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
                  backgroundColor: 'var(--surface)',
                  padding: '24px',
                  borderRadius: '8px',
                  marginBottom: '32px',
                  borderTop: `4px solid #3b82f6`,
                }}
              >
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    margin: '0 0 16px 0',
                    color: 'var(--text)',
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
                        backgroundColor: 'rgba(59, 130, 246, 0.15)',
                        borderRadius: '4px',
                        fontSize: '14px',
                        color: '#60A5FA',
                        fontWeight: '600',
                      }}
                    >
                      → {typeof transf === 'string' ? transf : `${transf.tipo || transf.linea} → ${transf.estacion}`}
                      {typeof transf === 'object' && transf.tiempo_medio && (
                        <span style={{ display: 'block', fontSize: '12px', color: '#60A5FA', fontWeight: 400, marginTop: '2px' }}>
                          ⏱ {transf.tiempo_medio}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* NAVEGACIÓN A HUB */}
            <Link href="/mty/ecovia" style={{ textDecoration: 'none' }}>
              <span
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '16px',
                  backgroundColor: colorLinea,
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '16px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  textAlign: 'center',
                  boxSizing: 'border-box',
                }}
              >
                Volver a Ecovía
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Ad 2 — Banner antes del CTA */}
      <AdBannerLazy slot="4434764790" format="auto" />

      {/* AFFILIATE TRANSPORT CARD */}
      <AffiliateTransportCard />

      {/* CTA HOSPEDAJE */}
      <section
        style={{
          backgroundColor: 'var(--surface)',
          padding: '64px 24px',
          marginTop: '80px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '32px',
            fontWeight: '700',
            margin: '0 0 16px 0',
            color: 'var(--text)',
          }}
        >
          Hospedaje en Monterrey
        </h2>
        <p
          style={{
            fontSize: '16px',
            color: 'var(--text-muted)',
            margin: '0 0 24px 0',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Encuentra opciones de alojamiento cerca de esta estación y otros puntos turísticos de Monterrey.
        </p>
        <Link href="/hospedaje" style={{ textDecoration: 'none' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              backgroundColor: '#10B981',
              color: '#ffffff',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: '700',
              cursor: 'pointer',
            }}
          >
            Explorar Hospedaje
          </span>
        </Link>
      </section>
    </main>
  );
}
