import Link from 'next/link';
import { lineasMTY } from '@/data/mty/lineas-detalle';
import { estacionesMTY } from '@/data/mty/estaciones';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import AffiliateMundial from '@/app/components/AffiliateMundial';
import { LANGUAGES, buildMetadata, t } from '@/lib/i18n';

export function generateStaticParams() {
  const params = [];
  LANGUAGES.filter(l => l !== 'es').forEach(lang => {
    lineasMTY.forEach(linea => {
      params.push({ lang, id: linea.id });
    });
  });
  return params;
}

export async function generateMetadata({ params }) {
  const linea = lineasMTY.find(l => l.id === params.id);
  if (!linea) return { title: 'Línea no encontrada — MetroGuia' };

  const translations = require(`@/translations/${params.lang}.json`);
  const lineTitle = t(translations, 'line.title', 'Línea').replace('{id}', linea.id);

  return buildMetadata({
    lang: params.lang,
    title: `${lineTitle} ${linea.colorNombre} — ${linea.inicio} → ${linea.fin} | MetroGuia`,
    description: linea.meta_description,
    path: `/mty/linea/${linea.id}/`,
    keywords: [
      `Línea ${linea.id}`,
      `${linea.colorNombre}`,
      'Metrorrey',
      'Monterrey',
      linea.inicio,
      linea.fin,
      'FIFA 2026',
      'Estadio BBVA',
      ...linea.municipios
    ],
  });
}

export default function LineaDetailPage({ params }) {
  const lang = params.lang;
  const linea = lineasMTY.find(l => l.id === params.id);
  const translations = require(`@/translations/${lang}.json`);

  if (!linea) {
    return (
      <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)', padding: '60px 24px', textAlign: 'center' }}>
        <h1>Línea no encontrada</h1>
        <p style={{ color: 'var(--text-muted)' }}>La línea que buscas no existe en el sistema.</p>
        <Link href={`/${lang}/mty/`}>
          <a style={{ color: linea?.color || '#EC4899', textDecoration: 'none', fontWeight: '600' }}>
            Volver a Monterrey
          </a>
        </Link>
      </main>
    );
  }

  const estacionesLinea = estacionesMTY.filter(e => linea.estaciones?.includes(e.slug));

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Monterrey', item: `https://metroguia.mx/${lang}/mty/` },
      { '@type': 'ListItem', position: 3, name: `Línea ${linea.id}`, item: `https://metroguia.mx/${lang}/mty/linea/${linea.id}/` }
    ],
  };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO SECTION */}
      <section style={{
        background: `linear-gradient(135deg, ${linea.color} 0%, ${linea.color}CC 100%)`,
        color: '#FFFFFF',
        padding: '80px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{
            width: '80px',
            height: '80px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '48px',
            fontWeight: '800',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '24px'
          }}>
            {linea.id}
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', margin: '0 0 12px 0', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
            {t(translations, 'line.title', 'Línea').replace('{id}', linea.id)} — {linea.colorNombre}
          </h1>
          <p style={{ fontSize: '1.5rem', fontWeight: '600', margin: '0 0 24px 0', opacity: '0.95', lineHeight: '1.4' }}>
            {linea.inicio} → {linea.fin}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'center', marginTop: '32px' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '2rem', fontWeight: '800', margin: '0 0 4px 0' }}>{linea.total}</p>
              <p style={{ fontSize: '0.95rem', margin: '0', opacity: '0.9' }}>{t(translations, 'city.stations', 'Estaciones')}</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '2rem', fontWeight: '800', margin: '0 0 4px 0' }}>{linea.municipios.length}</p>
              <p style={{ fontSize: '0.95rem', margin: '0', opacity: '0.9' }}>Municipios</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '2rem', fontWeight: '800', margin: '0 0 4px 0' }}>Metrorrey</p>
              <p style={{ fontSize: '0.95rem', margin: '0', opacity: '0.9' }}>{t(translations, 'mty.system', 'Sistema Metro')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* DESCRIPTION SECTION */}
      <section style={{ backgroundColor: 'var(--surface)', padding: '60px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text)' }}>
            Acerca de la {t(translations, 'line.title', 'Línea').replace('{id}', linea.id)}
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text)', margin: '0' }}>
            {linea.descripcion}
          </p>
          {linea.municipios.length > 0 && (
            <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '12px', color: 'var(--text)' }}>
                Municipios cubiertos
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {linea.municipios.map((mun, idx) => (
                  <span
                    key={idx}
                    style={{
                      backgroundColor: `${linea.color}20`,
                      color: linea.color,
                      padding: '8px 16px',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      border: `1px solid ${linea.color}40`
                    }}
                  >
                    {mun}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* RUTA DE 1 DÍA SECTION */}
      {linea.ruta_1_dia && (
        <section style={{ backgroundColor: 'var(--bg)', padding: '80px 24px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '48px', textAlign: 'center', color: 'var(--text)', letterSpacing: '-0.01em' }}>
              {linea.ruta_1_dia.titulo}
            </h2>

            <div style={{ position: 'relative', paddingLeft: '40px' }}>
              {linea.ruta_1_dia.paradas.map((parada, idx) => {
                const estacion = estacionesMTY.find(e => e.slug === parada.estacion);
                return (
                  <div key={idx} style={{ marginBottom: '48px', position: 'relative' }}>
                    {/* Timeline dot */}
                    <div style={{
                      position: 'absolute',
                      left: '-40px',
                      top: '0',
                      width: '20px',
                      height: '20px',
                      backgroundColor: linea.color,
                      borderRadius: '50%',
                      border: '4px solid var(--bg)',
                      boxShadow: `0 0 0 2px ${linea.color}`
                    }} />

                    {/* Timeline line (except last) */}
                    {idx < linea.ruta_1_dia.paradas.length - 1 && (
                      <div style={{
                        position: 'absolute',
                        left: '-30px',
                        top: '20px',
                        width: '2px',
                        height: '40px',
                        backgroundColor: linea.color,
                        opacity: '0.3'
                      }} />
                    )}

                    {/* Step number and content */}
                    <div style={{ paddingTop: '4px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                        <span style={{
                          backgroundColor: linea.color,
                          color: '#FFFFFF',
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.9rem',
                          fontWeight: '700',
                          flexShrink: 0
                        }}>
                          {idx + 1}
                        </span>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: '0', color: 'var(--text)' }}>
                          {estacion?.nombre || parada.estacion}
                        </h3>
                      </div>
                      <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0 0 8px 0' }}>
                        {parada.actividad}
                      </p>
                      {estacion && (
                        <Link href={`/${lang}/mty/estacion/${estacion.slug}`}>
                          <a style={{
                            color: linea.color,
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: '0.95rem',
                            display: 'inline-block',
                            marginTop: '8px'
                          }}>
                            Ver estación →
                          </a>
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ALL STATIONS SECTION */}
      <section style={{ backgroundColor: 'var(--surface)', padding: '80px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '48px', textAlign: 'center', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            {t(translations, 'city.stations', 'Estaciones')} ({estacionesLinea.length})
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
            {estacionesLinea.map((estacion) => (
              <Link
                href={`/${lang}/mty/estacion/${estacion.slug}`}
                key={estacion.slug}
              >
                <div style={{
                  backgroundColor: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  padding: '24px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  borderTop: `3px solid ${linea.color}`,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{ marginBottom: '12px' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: '700', margin: '0 0 6px 0', color: 'var(--text)' }}>
                      {estacion.nombre}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
                      {estacion.municipio}
                    </p>
                  </div>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text)', margin: '0', lineHeight: '1.6', flex: '1' }}>
                    {estacion.intro}
                  </p>
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
                    <span style={{
                      backgroundColor: `${linea.color}15`,
                      color: linea.color,
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}>
                      Línea {linea.id}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AdBannerLazyInArticle slot="1082410395" />

      {/* INFO CARD SECTION */}
      <section style={{ backgroundColor: 'var(--bg)', padding: '80px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{
            backgroundColor: 'var(--surface)',
            border: `2px solid ${linea.color}`,
            borderRadius: '6px',
            padding: '48px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px'
          }}>
            <div>
              <h3 style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)', margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {t(translations, 'line.schedule', 'Horarios')}
              </h3>
              <p style={{ fontSize: '1.5rem', fontWeight: '800', color: linea.color, margin: '0' }}>
                L-S 5:00 — 00:00
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '8px 0 0 0' }}>
                Lunes a Sábado
              </p>
              <p style={{ fontSize: '1rem', fontWeight: '800', color: linea.color, margin: '16px 0 0 0' }}>
                Dom 6:30 — 00:00
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '8px 0 0 0' }}>
                Domingo
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)', margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {t(translations, 'route.cost', 'Costo')}
              </h3>
              <p style={{ fontSize: '1.5rem', fontWeight: '800', color: linea.color, margin: '0' }}>
                $6.40 MXN
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '8px 0 0 0' }}>
                Tarjeta FERIA
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)', margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Sistema
              </h3>
              <p style={{ fontSize: '1.5rem', fontWeight: '800', color: linea.color, margin: '0' }}>
                Metrorrey
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '8px 0 0 0' }}>
                Metro Monterrey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FIFA 2026 SECTION */}
      <section style={{ backgroundColor: 'var(--surface)', padding: '80px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '48px', textAlign: 'center', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            {t(translations, 'mty.worldCupTitle', 'FIFA 2026 en Monterrey')}
          </h2>
          <div style={{
            backgroundColor: 'var(--bg)',
            border: `2px solid ${linea.color}`,
            borderRadius: '6px',
            padding: '40px',
            marginBottom: '32px'
          }}>
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text)', margin: '0 0 16px 0' }}>
                Partidos en Estadio BBVA
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', lineHeight: '1.6' }}>
                {t(translations, 'mty.worldCupMatches', 'Partidos FIFA 2026 en Estadio BBVA (14, 20, 24, 29 de junio)')}
              </p>
            </div>
            <div style={{
              backgroundColor: 'var(--surface)',
              border: `1px solid ${linea.color}40`,
              borderRadius: '6px',
              padding: '20px',
              marginTop: '16px'
            }}>
              <p style={{ fontSize: '0.95rem', color: 'var(--text)', margin: '0' }}>
                <strong>Acceso fácil desde Línea {linea.id}:</strong> Toma hasta Exposición → Camina 22 minutos al Estadio BBVA Bancomer
              </p>
            </div>
          </div>
          <AffiliateMundial ciudad="MTY" />
        </div>
      </section>

      {/* MUNICIPIOS SECTION */}
      {linea.municipios.length > 0 && (
        <section style={{ backgroundColor: 'var(--bg)', padding: '80px 24px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '32px', textAlign: 'center', color: 'var(--text)', letterSpacing: '-0.01em' }}>
              Municipios conectados
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '24px'
            }}>
              {linea.municipios.map((municipio, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--surface)',
                    border: `2px solid ${linea.color}`,
                    borderRadius: '6px',
                    padding: '32px 24px',
                    textAlign: 'center'
                  }}
                >
                  <p style={{ fontSize: '1.25rem', fontWeight: '700', color: linea.color, margin: '0' }}>
                    {municipio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* AFFILIATES SECTION */}
      <section style={{ backgroundColor: 'var(--surface)', padding: '60px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <AffiliateTransportCard ciudad="MTY" estacion={null} fechas={null} />
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ backgroundColor: 'var(--bg)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '16px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            Explora más líneas en Monterrey
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '32px', lineHeight: '1.6' }}>
            Descubre el sistema Metrorrey completo, incluyendo todas las líneas y estaciones de la ciudad.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={`/${lang}/mty/`}>
              <a style={{
                display: 'inline-block',
                backgroundColor: linea.color,
                color: '#FFFFFF',
                padding: '16px 48px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                border: `2px solid ${linea.color}`
              }}>
                Volver a Monterrey
              </a>
            </Link>
            <Link href={`/${lang}/mundial-2026/`}>
              <a style={{
                display: 'inline-block',
                backgroundColor: 'transparent',
                color: linea.color,
                padding: '16px 48px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                border: `2px solid ${linea.color}`
              }}>
                FIFA 2026 en México
              </a>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}