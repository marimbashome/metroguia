import { estacionesGDL } from '@/data/gdl/estaciones';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import Link from 'next/link';
import { LANGUAGES, buildMetadata, t } from '@/lib/i18n';

const macrobusEstaciones = estacionesGDL.filter(e => e.sistema === 'macrobus');

export function generateStaticParams() {
  return LANGUAGES.flatMap(lang =>
    macrobusEstaciones.map(e => ({ lang, slug: e.slug }))
  );
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const estacion = estacionesGDL.find(e => e.slug === params.slug && e.sistema === 'macrobus');
  if (!estacion) {
    return { title: 'Station not found — MetroGuia' };
  }
  return buildMetadata({
    lang: params.lang,
    title: `${estacion.nombre} — Mi Macro Guadalajara | MetroGuia`,
    description: estacion.meta_description || estacion.intro,
    path: `/gdl/macrobus/estacion/${estacion.slug}/`,
    keywords: ['Mi Macro', 'Guadalajara', estacion.nombre, `Línea ${estacion.linea}`, 'BRT'],
  });
}

export default function EstacionMacrobusPageLang({ params }) {
  const lang = params.lang;
  const translations = {}; // fallback: t() uses defaults
  const estacion = estacionesGDL.find(e => e.slug === params.slug && e.sistema === 'macrobus');

  if (!estacion) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--danger)' }}>
          {t(translations, 'station.title', 'Station not found').replace('{name}', '?')}
        </h1>
        <Link href={`/${lang}/gdl/macrobus`}>
          <button style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: 'var(--macrobus)', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            ← {t(translations, 'gdl.macrobus', 'Mi Macro')}
          </button>
        </Link>
      </main>
    );
  }

  const colorLinea = estacion.linea === 'MC' ? '#8B5CF6' : '#7C3AED';
  const nombreLinea = estacion.linea === 'MC' ? 'Mi Macro Calzada' : 'Mi Macro Periférico';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Guadalajara', item: `https://metroguia.mx/${lang}/gdl/` },
      { '@type': 'ListItem', position: 3, name: 'Mi Macro', item: `https://metroguia.mx/${lang}/gdl/macrobus/` },
      { '@type': 'ListItem', position: 4, name: nombreLinea, item: `https://metroguia.mx/${lang}/gdl/macrobus/linea/${estacion.linea}/` },
      { '@type': 'ListItem', position: 5, name: estacion.nombre, item: `https://metroguia.mx/${lang}/gdl/macrobus/estacion/${estacion.slug}` },
    ],
  };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg, ${colorLinea} 0%, ${colorLinea}cc 100%)`, color: '#fff', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '48px', height: '48px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: '700' }}>
              {estacion.linea}
            </span>
            <span style={{ fontSize: '1rem', fontWeight: '500' }}>{estacion.municipio}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.2' }}>
            {estacion.nombre}
          </h1>
          <p style={{ fontSize: '1.125rem', margin: '0 0 8px 0', opacity: '0.95', maxWidth: '700px', lineHeight: '1.6' }}>
            {estacion.intro}
          </p>
          <p style={{ fontSize: '0.875rem', margin: '0', opacity: '0.85' }}>
            {nombreLinea}
          </p>
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* MAIN CONTENT */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '48px' }}>
          {/* LEFT COLUMN */}
          <div>
            {/* POINTS OF INTEREST */}
            {(estacion.pois || []).length > 0 && (
              <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '20px', color: 'var(--text)', borderBottom: `3px solid ${colorLinea}`, paddingBottom: '12px' }}>
                  {t(translations, 'station.nearbyPlaces', 'Nearby Places')}
                </h2>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {(estacion.pois || []).map((poi, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '16px',
                        backgroundColor: 'var(--surface)',
                        borderLeft: `4px solid ${colorLinea}`,
                        borderRadius: 'var(--radius-sm)',
                      }}
                    >
                      <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: '0 0 4px 0', color: 'var(--text)' }}>
                        {poi.nombre}
                      </h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0' }}>
                        {poi.tipo} • {poi.distancia}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TIPS */}
            {(Array.isArray(estacion.tips) && estacion.tips.length > 0) && (
              <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '20px', color: 'var(--text)', borderBottom: `3px solid ${colorLinea}`, paddingBottom: '12px' }}>
                  {t(translations, 'station.tips', 'Tips for Tourists')}
                </h2>
                <ul style={{ listStyle: 'none', padding: '0', margin: '0', display: 'grid', gap: '10px' }}>
                  {estacion.tips.map((tip, idx) => (
                    <li
                      key={idx}
                      style={{
                        padding: '12px 16px',
                        backgroundColor: 'var(--surface)',
                        borderLeft: '4px solid var(--success)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.95rem',
                        color: 'var(--text)',
                      }}
                    >
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN — SIDEBAR */}
          <div>
            {/* QUICK INFO */}
            <div style={{ backgroundColor: 'var(--surface)', padding: '24px', borderRadius: 'var(--radius)', marginBottom: '24px', borderTop: `4px solid ${colorLinea}` }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
                {t(translations, 'station.metroSystem', 'Transit System')}
              </h3>
              <div style={{ display: 'grid', gap: '12px' }}>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0 0 4px 0' }}>Línea</p>
                  <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: colorLinea }}>
                    {nombreLinea}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0 0 4px 0' }}>Municipio</p>
                  <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0' }}>{estacion.municipio}</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0 0 4px 0' }}>Zona</p>
                  <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0' }}>{(estacion.tipo_zona || '').replace('-', ' / ')}</p>
                </div>
                {estacion.mejor_horario && (
                  <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0 0 4px 0' }}>
                      {t(translations, 'station.bestTime', 'Best Time')}
                    </p>
                    <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0' }}>{estacion.mejor_horario}</p>
                  </div>
                )}
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0 0 4px 0' }}>Costo</p>
                  <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: 'var(--success)' }}>$12.00 MXN</p>
                </div>
              </div>
            </div>

            {/* CONNECTIONS */}
            {(estacion.transferencias || []).length > 0 && (
              <div style={{ backgroundColor: 'var(--surface)', padding: '24px', borderRadius: 'var(--radius)', marginBottom: '24px', borderTop: '4px solid var(--info)' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
                  {t(translations, 'station.connections', 'Connections')}
                </h3>
                <div style={{ display: 'grid', gap: '8px' }}>
                  {estacion.transferencias.map((transf, idx) => (
                    <div key={idx} style={{ padding: '8px 12px', backgroundColor: 'var(--bg)', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem', color: 'var(--info)', fontWeight: '600' }}>
                      → {typeof transf === 'string' ? transf : `${transf.tipo || transf.linea} → ${transf.estacion}`}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* NAVIGATION */}
            <Link href={`/${lang}/gdl/macrobus/linea/${estacion.linea}`}>
              <button style={{ width: '100%', padding: '14px', backgroundColor: colorLinea, color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer', marginBottom: '12px' }}>
                {t(translations, 'gdl.viewLine', 'View {line} Complete').replace('{line}', nombreLinea)} →
              </button>
            </Link>

            <Link href={`/${lang}/gdl/macrobus`}>
              <button style={{ width: '100%', padding: '14px', backgroundColor: 'var(--surface)', color: 'var(--text)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
                ← {t(translations, 'gdl.macrobus', 'Mi Macro')}
              </button>
            </Link>
          </div>
        </div>
      </section>

      <AdBannerLazyInArticle slot="1082410395" />

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--surface)', padding: '60px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
          {t(translations, 'gdl.accommodations', 'Accommodations in Guadalajara')}
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0 0 24px 0', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
          {t(translations, 'gdl.accommodationsDesc', 'Find lodging options near this station and other tourist attractions')}
        </p>
        <Link href={`/${lang}/hospedaje`}>
          <button style={{ padding: '14px 32px', backgroundColor: 'var(--macrobus)', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            {t(translations, 'gdl.exploreAccommodations', 'Explore Accommodations')} →
          </button>
        </Link>
      </section>
    </main>
  );
}