import { estacionesEcovia } from '@/data/mty/ecovia';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';
import AffiliateMundial from '@/app/components/AffiliateMundial';
import { LANGUAGES, buildMetadata, t } from '@/lib/i18n';

export function generateStaticParams() {
  return LANGUAGES.filter(l => l !== 'es').map(lang => ({ lang }));
}

export async function generateMetadata({ params }) {
  const translations = require(`@/translations/${params.lang}.json`);
  return buildMetadata({
    lang: params.lang,
    title: t(translations, 'mty.ecoviaTitle', 'Ecovía TransMetro') + ' — MetroGuia',
    description: t(translations, 'mty.ecoviaHeroDesc', 'High-capacity BRT system connecting Monterrey from west to east with 42 stations and 30 km of coverage.'),
    path: `/mty/ecovia/`,
    keywords: ['Ecovía', 'TransMetro', 'Monterrey', 'BRT', 'FIFA 2026', 'Estadio BBVA'],
  });
}

export default function EcoviaPageLang({ params }) {
  const lang = params.lang;
  const translations = require(`@/translations/${lang}.json`);

  const estacionesEcoviaPoniente = estacionesEcovia.filter(e => e.zona === 'poniente');
  const estacionesEcoviaOriente = estacionesEcovia.filter(e => e.zona === 'oriente');
  const estacionesTransferencia = estacionesEcovia.filter(e => e.tipo_zona === 'transferencia');

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
        name: t(translations, 'city.monterrey', 'Monterrey'),
        item: `https://metroguia.mx/${lang}/mty/`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: t(translations, 'mty.ecoviaTitle', 'Ecovía'),
        item: `https://metroguia.mx/${lang}/mty/ecovia/`
      }
    ]
  }

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
            {t(translations, 'mty.ecoviaTitle', 'Ecovía TransMetro')}
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
            {t(translations, 'mty.ecoviaSubtitle', 'Rapid Bus Transit · 42 Stations · 30 Kilometers')}
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
            {t(translations, 'mty.ecoviaHeroDesc', 'High-capacity BRT system connecting Monterrey from west to east. Travel safely, quickly, and comfortably.')}
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
              {t(translations, 'mty.stations', 'Stations')}
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#10B981', margin: '0 0 8px 0' }}>
              1
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              {t(translations, 'mty.operativeLine', 'Operating Line')}
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#10B981', margin: '0 0 8px 0' }}>
              30
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              {t(translations, 'mty.kilometers', 'Kilometers')}
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
            🚌 {t(translations, 'mty.planRoute', 'Plan Your Route on Ecovía')}
          </h2>
          <p
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              marginBottom: '24px',
              color: 'var(--text-muted)',
            }}
          >
            {t(translations, 'mty.planRouteDesc', 'Find the best route between BRT stations')}
          </p>
          <SearchBar ciudad="mty" lang={lang} />
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
            {t(translations, 'mty.ecovia42Stations', 'The 42 Stations of Ecovía')}
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
              {t(translations, 'mty.westZone', 'West Zone')} ({estacionesEcoviaPoniente.length} {t(translations, 'mty.stations', 'stations').toLowerCase()})
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px',
              }}
            >
              {estacionesEcoviaPoniente.map((estacion) => (
                <Link href={`/${lang}/mty/ecovia/estacion/${estacion.slug}`} key={estacion.slug}>
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
                        {t(translations, 'mty.transfer', 'Transfer')}
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
                      {(estacion.tipo_zona || '').replace('-', ' / ')}
                    </p>
                    {(estacion.transferencias || []).length > 0 && (
                      <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border)' }}>
                        <p style={{ fontSize: '12px', color: '#3B82F6', fontWeight: '700', margin: '0', marginBottom: '4px' }}>
                          {t(translations, 'mty.connectsWith', 'Connects with:')}
                        </p>
                        {(estacion.transferencias || []).map((transf, idx) => (
                          <p
                            key={idx}
                            style={{
                              fontSize: '12px',
                              color: 'var(--text-muted)',
                              margin: '2px 0',
                            }}
                          >
                            → {typeof transf === 'string' ? transf : `${transf.tipo || transf.linea} → ${transf.estacion}`}
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
              {t(translations, 'mty.eastZone', 'East Zone')} ({estacionesEcoviaOriente.length} {t(translations, 'mty.stations', 'stations').toLowerCase()})
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px',
              }}
            >
              {estacionesEcoviaOriente.map((estacion) => (
                <Link href={`/${lang}/mty/ecovia/estacion/${estacion.slug}`} key={estacion.slug}>
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
                        {t(translations, 'mty.transfer', 'Transfer')}
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
                      {(estacion.tipo_zona || '').replace('-', ' / ')}
                    </p>
                    {(estacion.transferencias || []).length > 0 && (
                      <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border)' }}>
                        <p style={{ fontSize: '12px', color: '#3B82F6', fontWeight: '700', margin: '0', marginBottom: '4px' }}>
                          {t(translations, 'mty.connectsWith', 'Connects with:')}
                        </p>
                        {(estacion.transferencias || []).map((transf, idx) => (
                          <p
                            key={idx}
                            style={{
                              fontSize: '12px',
                              color: 'var(--text-muted)',
                              margin: '2px 0',
                            }}
                          >
                            → {typeof transf === 'string' ? transf : `${transf.tipo || transf.linea} → ${transf.estacion}`}
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

      {/* FIFA 2026 BBVA SECTION */}
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
              {t(translations, 'mty.bbvaBBVA', 'BBVA Stadium · FIFA 2026')}
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
              {t(translations, 'mty.bbvaAccess', 'Access the BBVA Stadium (2026 World Cup venue) from Ecovía by connecting at any of our transfer stations:')}
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
                <Link href={`/${lang}/mty/ecovia/estacion/${estacion.slug}`} key={estacion.slug}>
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
                    {(estacion.transferencias || []).length > 0 && (
                      <p style={{ fontSize: '12px', color: '#65A30D', margin: '4px 0 0 0' }}>
                        {(estacion.transferencias || []).map(t => typeof t === 'string' ? t : `${t.tipo || t.linea} → ${t.estacion}`).join(' • ')}
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

      <AffiliateMundial ciudad="MTY" />
    </main>
  );
}
