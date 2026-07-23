import { lineasGDL } from '@/data/gdl/lineas-detalle';
import { estacionesGDL } from '@/data/gdl/estaciones';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import { LANGUAGES, buildMetadata, t } from '@/lib/i18n';

export function generateStaticParams() {
  const ids = ['MC', 'MP'];
  return LANGUAGES.flatMap(lang => ids.map(id => ({ lang, id })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const linea = lineasGDL.find(l => (l.id === 'MC' || l.id === 'MP') && l.id === params.id);
  if (!linea) {
    return { title: 'Line not found — MetroGuia' };
  }
  const nombreLinea = linea.id === 'MC' ? 'Mi Macro Calzada' : 'Mi Macro Periférico';
  return buildMetadata({
    lang: params.lang,
    title: `${nombreLinea} — Mi Macro Guadalajara | MetroGuia`,
    description: linea.meta_description || linea.descripcion,
    path: `/gdl/macrobus/linea/${linea.id}/`,
    keywords: ['Mi Macro', 'Guadalajara', `Línea ${linea.id}`, nombreLinea, 'BRT'],
  });
}

export default function LineaMacrobusPageLang({ params }) {
  const lang = params.lang;
  const translations = {}; // fallback: t() uses defaults
  const linea = lineasGDL.find(l => (l.id === 'MC' || l.id === 'MP') && l.id === params.id);

  if (!linea) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--danger)' }}>
          {t(translations, 'line.title', 'Line not found')}
        </h1>
        <Link href={`/${lang}/gdl/macrobus`}>
          <button style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: 'var(--macrobus)', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            ← {t(translations, 'gdl.macrobus', 'Mi Macro')}
          </button>
        </Link>
      </main>
    );
  }

  const colorLinea = linea.id === 'MC' ? '#8B5CF6' : '#7C3AED';
  const nombreLinea = linea.id === 'MC' ? 'Mi Macro Calzada' : 'Mi Macro Periférico';
  const estacionesLinea = estacionesGDL.filter(e => e.linea === linea.id && e.sistema === 'macrobus');

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Guadalajara', item: `https://metroguia.mx/${lang}/gdl/` },
      { '@type': 'ListItem', position: 3, name: 'Mi Macro', item: `https://metroguia.mx/${lang}/gdl/macrobus/` },
      { '@type': 'ListItem', position: 4, name: nombreLinea, item: `https://metroguia.mx/${lang}/gdl/macrobus/linea/${linea.id}/` },
    ],
  };

  const transitRouteSchema = {
    '@context': 'https://schema.org',
    '@type': 'TransitRoute',
    name: `${nombreLinea}`,
    description: linea.descripcion,
    provider: { '@type': 'Organization', name: 'Mi Macro Guadalajara' },
  };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(transitRouteSchema) }} />

      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg, ${colorLinea} 0%, ${colorLinea}cc 100%)`, color: '#fff', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '60px', height: '60px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: '800' }}>
              {linea.id}
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.2' }}>
            {nombreLinea}
          </h1>
          <p style={{ fontSize: '1.25rem', margin: '0 0 16px 0', opacity: '0.95' }}>
            {linea.inicio} → {linea.fin}
          </p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', opacity: '0.9' }}>
            <span style={{ fontSize: '1rem' }}>{estacionesLinea.length} {t(translations, 'city.stations', 'stations').toLowerCase()}</span>
            <span style={{ fontSize: '1rem' }}>{linea.municipios.length} municipios</span>
            <span style={{ fontSize: '1rem' }}>Mi Macro BRT</span>
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ backgroundColor: 'var(--surface)', padding: '32px', borderLeft: `4px solid ${colorLinea}`, borderRadius: 'var(--radius)', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
            {t(translations, 'city.touristGuide', 'About this Line')}
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0', lineHeight: '1.8' }}>
            {linea.descripcion}
          </p>
        </div>

        <AdBannerLazy slot="4434764790" />

        {/* 1-DAY ROUTE */}
        {linea.ruta_1_dia && (
          <div style={{ marginBottom: '60px', marginTop: '40px' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '32px', color: 'var(--text)', borderBottom: `3px solid ${colorLinea}`, paddingBottom: '16px' }}>
              {linea.ruta_1_dia.titulo}
            </h2>
            <div style={{ display: 'grid', gap: '24px' }}>
              {linea.ruta_1_dia.paradas.map((parada, idx) => {
                const estacion = estacionesLinea.find(e => e.slug === parada.estacion);
                return (
                  <div key={idx} style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: '24px', alignItems: 'start' }}>
                    <div style={{ position: 'relative' }}>
                      <div style={{ width: '60px', height: '60px', backgroundColor: colorLinea, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.5rem', fontWeight: '700' }}>
                        {idx + 1}
                      </div>
                      {idx < linea.ruta_1_dia.paradas.length - 1 && (
                        <div style={{ position: 'absolute', left: '29px', top: '60px', width: '2px', height: '100px', backgroundColor: colorLinea, opacity: '0.3' }} />
                      )}
                    </div>
                    <div>
                      <Link href={`/${lang}/gdl/macrobus/estacion/${parada.estacion}`}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 8px 0', color: colorLinea, cursor: 'pointer' }}>
                          {estacion?.nombre || parada.estacion}
                        </h3>
                      </Link>
                      <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0', lineHeight: '1.6' }}>
                        {parada.actividad}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ALL STATIONS */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '32px', color: 'var(--text)', borderBottom: `3px solid ${colorLinea}`, paddingBottom: '16px' }}>
            {t(translations, 'line.stationCount', '{count} Stations').replace('{count}', estacionesLinea.length)}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {estacionesLinea.map((estacion, idx) => (
              <Link href={`/${lang}/gdl/macrobus/estacion/${estacion.slug}`} key={estacion.slug}>
                <div style={{ padding: '20px', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', cursor: 'pointer', transition: 'all 0.2s ease' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <span style={{ width: '36px', height: '36px', backgroundColor: colorLinea, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.9rem', fontWeight: '700', flexShrink: 0 }}>
                      {idx + 1}
                    </span>
                    <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: 'var(--text)' }}>
                      {estacion.nombre}
                    </h3>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', margin: '0 0 8px 0', fontWeight: '500' }}>
                    {estacion.municipio}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0', lineHeight: '1.4' }}>
                    {estacion.intro}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <AdBannerLazyInArticle slot="1082410395" />
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--surface)', padding: '60px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
          {t(translations, 'gdl.macrobus', 'Mi Macro')}
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0 0 24px 0', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
          {t(translations, 'gdl.macrobusDesc', 'Fast and efficient BRT system in Guadalajara.')}
        </p>
        <Link href={`/${lang}/gdl/macrobus`}>
          <button style={{ padding: '14px 32px', backgroundColor: colorLinea, color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            ← {t(translations, 'gdl.macrobus', 'Mi Macro')}
          </button>
        </Link>
      </section>
    </main>
  );
}
