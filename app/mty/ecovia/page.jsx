import { estacionesEcovia } from '@/data/mty/ecovia';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';

export const metadata = {
  title: 'Ecovía TransMetro Monterrey — BRT 42 estaciones, 30 km | MetroGuia',
  description: 'Ecovía TransMetro Monterrey: sistema BRT (transporte rápido por bus) con 1 línea operativa, 42 estaciones, 30 km. Rutas, horarios, transferencias a Metrorrey. Viaja rápido y seguro.',
  keywords: 'Ecovía Monterrey, TransMetro Monterrey, BRT, transporte Monterrey, turismo, transporte rápido',
  openGraph: {
    title: 'Ecovía TransMetro Monterrey — BRT 42 Estaciones',
    description: 'Ecovía TransMetro: 42 estaciones, 30 km de cobertura rápida en Monterrey. Conecta con Metrorrey en Mitras, Regina y Ruiz Cortines.',
    url: 'https://metroguia.mx/mty/ecovia',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EcoviaPage() {
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
      }
    ]
  }

  const estacionesEcoviaPoniente = estacionesEcovia.filter(e => e.zona === 'poniente');
  const estacionesEcoviaOriente = estacionesEcovia.filter(e => e.zona === 'oriente');
  const estacionesTransferencia = estacionesEcovia.filter(e => e.tipo_zona === 'transferencia');

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* HERO */}
      <section
        className="hero"
        style={{
          background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
          color: '#FFFFFF',
          padding: '80px 24px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h1
            style={{
              fontSize: '3.5rem',
              fontWeight: '800',
              margin: '0 0 16px 0',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
            }}
          >
            Ecovía TransMetro
          </h1>
          <p
            style={{
              fontSize: '1.5rem',
              fontWeight: '500',
              margin: '0 0 24px 0',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto',
              opacity: '0.95',
              lineHeight: '1.4',
            }}
          >
            Transporte Rápido por Bus · 42 Estaciones · 30 Kilómetros
          </p>
          <p
            style={{
              fontSize: '1.125rem',
              fontWeight: '400',
              margin: '0',
              opacity: '0.9',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Sistema BRT de alta capacidad que conecta Monterrey de poniente a oriente. Viaja seguro, rápido y con comodidad.
          </p>
        </div>
      </section>

      {/* ESTADÍSTICAS */}
      <section
        style={{
          backgroundColor: 'var(--surface)',
          padding: '48px 24px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div
          style={{
            maxWidth: '1000px',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
            textAlign: 'center',
          }}
        >
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#10B981', margin: '0 0 8px 0' }}>
              42
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Estaciones
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#10B981', margin: '0 0 8px 0' }}>
              1
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Línea Operativa
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#10B981', margin: '0 0 8px 0' }}>
              30
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Kilómetros
            </p>
          </div>
        </div>
      </section>

      {/* TRIP PLANNER */}
      <section
        style={{
          backgroundColor: 'var(--bg)',
          padding: '60px 24px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2
            style={{
              fontSize: '1.75rem',
              fontWeight: '800',
              marginBottom: '12px',
              textAlign: 'center',
              color: 'var(--text)',
            }}
          >
            🚌 Planifica tu Ruta en Ecovía
          </h2>
          <p
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              marginBottom: '24px',
              color: 'var(--text-muted)',
            }}
          >
            Calcula la mejor ruta entre estaciones del BRT
          </p>
          <SearchBar ciudad="mty" />
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* ESTACIONES POR ZONA */}
      <section
        style={{
          backgroundColor: 'var(--bg)',
          padding: '80px 24px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '800',
              marginBottom: '48px',
              textAlign: 'center',
              color: 'var(--text)',
              letterSpacing: '-0.01em',
            }}
          >
            Las 42 Estaciones de Ecovía
          </h2>

          {/* ZONA PONIENTE */}
          <div style={{ marginBottom: '80px' }}>
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '24px',
                color: '#10B981',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <span style={{
                width: '12px',
                height: '12px',
                backgroundColor: '#10B981',
                borderRadius: '50%',
              }}></span>
              Zona Poniente ({estacionesEcoviaPoniente.length} estaciones)
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px',
              }}
            >
              {estacionesEcoviaPoniente.map((estacion) => (
                <Link href={`/mty/ecovia/estacion/${estacion.slug}`} key={estacion.slug}>
                  <div
                    style={{
                      backgroundColor: 'var(--surface)',
                      border: estacion.tipo_zona === 'transferencia' ? '2px solid #3B82F6' : '1px solid var(--border)',
                      borderRadius: '10px',
                      padding: '20px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'block',
                      position: 'relative',
                    }}
                  >
                    {estacion.tipo_zona === 'transferencia' && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '12px',
                          right: '12px',
                          backgroundColor: '#DBEAFE',
                          color: '#1E40AF',
                          padding: '4px 10px',
                          borderRadius: '4px',
                          fontSize: '11px',
                          fontWeight: '700',
                        }}
                      >
                        Transferencia
                      </div>
                    )}
                    <h4
                      style={{
                        fontSize: '1.125rem',
                        fontWeight: '700',
                        margin: '0 0 8px 0',
                        color: '#10B981',
                        paddingRight: estacion.tipo_zona === 'transferencia' ? '120px' : '0',
                      }}
                    >
                      {estacion.nombre}
                    </h4>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-muted)',
                        margin: '0 0 12px 0',
                        fontWeight: '400',
                      }}
                    >
                      {estacion.tipo_zona.replace('-', ' / ')}
                    </p>
                    {estacion.transferencias && estacion.transferencias.length > 0 && (
                      <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border)' }}>
                        <p style={{ fontSize: '12px', color: '#3B82F6', fontWeight: '700', margin: '0', marginBottom: '4px' }}>
                          Conecta con:
                        </p>
                        {estacion.transferencias.map((transf, idx) => (
                          <p
                            key={idx}
                            style={{
                              fontSize: '12px',
                              color: 'var(--text-muted)',
                              margin: '2px 0',
                            }}
                          >
                            → {transf}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ZONA ORIENTE */}
          <div style={{ marginBottom: '80px' }}>
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '24px',
                color: '#10B981',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <span style={{
                width: '12px',
                height: '12px',
                backgroundColor: '#10B981',
                borderRadius: '50%',
              }}></span>
              Zona Oriente ({estacionesEcoviaOriente.length} estaciones)
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px',
              }}
            >
              {estacionesEcoviaOriente.map((estacion) => (
                <Link href={`/mty/ecovia/estacion/${estacion.slug}`} key={estacion.slug}>
                  <div
                    style={{
                      backgroundColor: 'var(--surface)',
                      border: estacion.tipo_zona === 'transferencia' ? '2px solid #3B82F6' : '1px solid var(--border)',
                      borderRadius: '10px',
                      padding: '20px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'block',
                      position: 'relative',
                    }}
                  >
                    {estacion.tipo_zona === 'transferencia' && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '12px',
                          right: '12px',
                          backgroundColor: '#DBEAFE',
                          color: '#1E40AF',
                          padding: '4px 10px',
                          borderRadius: '4px',
                          fontSize: '11px',
                          fontWeight: '700',
                        }}
                      >
                        Transferencia
                      </div>
                    )}
                    <h4
                      style={{
                        fontSize: '1.125rem',
                        fontWeight: '700',
                        margin: '0 0 8px 0',
                        color: '#10B981',
                        paddingRight: estacion.tipo_zona === 'transferencia' ? '120px' : '0',
                      }}
                    >
                      {estacion.nombre}
                    </h4>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-muted)',
                        margin: '0 0 12px 0',
                        fontWeight: '400',
                      }}
                    >
                      {estacion.tipo_zona.replace('-', ' / ')}
                    </p>
                    {estacion.transferencias && estacion.transferencias.length > 0 && (
                      <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border)' }}>
                        <p style={{ fontSize: '12px', color: '#3B82F6', fontWeight: '700', margin: '0', marginBottom: '4px' }}>
                          Conecta con:
                        </p>
                        {estacion.transferencias.map((transf, idx) => (
                          <p
                            key={idx}
                            style={{
                              fontSize: '12px',
                              color: 'var(--text-muted)',
                              margin: '2px 0',
                            }}
                          >
                            → {transf}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FIFA 2026 SECTION */}
      <section
        style={{
          backgroundColor: '#F9FAFB',
          padding: '64px 24px',
          marginTop: '40px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '2px solid #10B981',
              borderRadius: '10px',
              padding: '40px',
              textAlign: 'center',
            }}
          >
            <h2
              style={{
                fontSize: '2rem',
                fontWeight: '800',
                margin: '0 0 16px 0',
                color: '#10B981',
              }}
            >
              Estadio BBVA · FIFA 2026
            </h2>
            <p
              style={{
                fontSize: '1.125rem',
                color: '#6B7280',
                margin: '0 0 24px 0',
                maxWidth: '700px',
                marginLeft: 'auto',
                marginRight: 'auto',
                lineHeight: '1.6',
              }}
            >
              Accede al Estadio BBVA (sede de la Copa del Mundo 2026) desde Ecovía conectando en cualquiera de nuestras estaciones de transferencia:
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '16px',
                marginTop: '24px',
              }}
            >
              {estacionesTransferencia.map((estacion) => (
                <Link href={`/mty/ecovia/estacion/${estacion.slug}`} key={estacion.slug}>
                  <div
                    style={{
                      padding: '16px',
                      backgroundColor: '#F0FDF4',
                      border: '1px solid #86EFAC',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <p style={{ fontSize: '14px', fontWeight: '700', color: '#15803D', margin: '0' }}>
                      {estacion.nombre}
                    </p>
                    {estacion.transferencias && estacion.transferencias.length > 0 && (
                      <p style={{ fontSize: '12px', color: '#65A30D', margin: '4px 0 0 0' }}>
                        {estacion.transferencias.join(' • ')}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AdBannerLazyInArticle slot="1082410395" />
    </main>
  );
}