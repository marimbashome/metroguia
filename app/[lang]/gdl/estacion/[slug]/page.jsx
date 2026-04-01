import { estacionesGDL } from '@/data/gdl/estaciones';
import { lineasGDL } from '@/data/gdl/lineas-detalle';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import { LANGUAGES, buildMetadata, t } from '@/lib/i18n';

const trenLigeroEstaciones = estacionesGDL.filter(e => e.sistema !== 'macrobus');

const LINE_COLORS = { '1': '#E63946', '2': '#06B6D4', '3': '#EC4899', '4': '#F97316' };

export function generateStaticParams() {
  const params = [];
  LANGUAGES.filter(l => l !== 'es').forEach(lang => {
    trenLigeroEstaciones.forEach(estacion => {
      params.push({ lang, slug: estacion.slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }) {
  const estacion = estacionesGDL.find(e => e.slug === params.slug);
  if (!estacion) {
    return { title: 'Station not found — MetroGuia' };
  }
  return buildMetadata({
    lang: params.lang,
    title: `${estacion.nombre} — SITEUR Guadalajara | MetroGuia`,
    description: estacion.meta_description || estacion.intro,
    path: `/gdl/estacion/${estacion.slug}/`,
    keywords: ['SITEUR', 'Guadalajara', estacion.nombre, `Línea ${estacion.linea}`, 'FIFA 2026'],
  });
}

export default function EstacionGDLPageLang({ params }) {
  const lang = params.lang;
  const translations = require(`@/translations/${lang}.json`);
  const estacion = estacionesGDL.find(e => e.slug === params.slug);

  if (!estacion) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--danger)' }}>
          {t(translations, 'station.title', 'Station not found').replace('{name}', '?')}
        </h1>
        <Link href={`/${lang}/gdl`}>
          <button style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: 'var(--gdl)', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            ← Guadalajara
          </button>
        </Link>
      </main>
    );
  }

  const colorLinea = LINE_COLORS[estacion.linea] || 'var(--gdl)';
  const lineaData = lineasGDL.find(l => l.id === estacion.linea);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Guadalajara', item: `https://metroguia.mx/${lang}/gdl/` },
      { '@type': 'ListItem', position: 3, name: `${t(translations, 'line.title', 'Line').replace('{id}', estacion.linea)}`, item: `https://metroguia.mx/${lang}/gdl/linea/${estacion.linea}/` },
      { '@type': 'ListItem', position: 4, name: estacion.nombre, item: `https://metroguia.mx/${lang}/gdl/estacion/${estacion.slug}` },
    ],
  };

  const stationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TrainStation',
    name: estacion.nombre,
    address: { '@type': 'PostalAddress', addressLocality: estacion.municipio, addressRegion: 'Jalisco', addressCountry: 'MX' },
    geo: estacion.coordenadas ? { '@type': 'GeoCoordinates', latitude: estacion.coordenadas?.lat, longitude: estacion.coordenadas?.lng } : undefined,
    openingHours: estacion.horarios ? `Mo-Sa ${estacion.horarios.apertura}-${estacion.horarios.cierre}` : 'Mo-Sa 05:00-23:00',
  };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(stationSchema) }} />

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
          <p style={{ fontSize: '1.125rem', margin: '0', opacity: '0.95', maxWidth: '700px', lineHeight: '1.6' }}>
            {estacion.intro}
          </p>
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* MAIN CONTENT */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '48px' }}>
          {/* LEFT COLUMN */}
          <div>
            {/* STATS ROW */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', marginBottom: '48px' }}>
              <div className="card" style={{ padding: '16px' }}>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 4px 0', fontWeight: 600, letterSpacing: '0.1em' }}>
                  {t(translations, 'station.line', 'Line')}
                </p>
                <p style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0', color: colorLinea }}>
                  {t(translations, 'line.title', 'Line {id}').replace('{id}', estacion.linea)} — {lineaData?.colorNombre || ''}
                </p>
              </div>
              <div className="card" style={{ padding: '16px' }}>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 4px 0', fontWeight: 600, letterSpacing: '0.1em' }}>
                  {t(translations, 'city.coverage', 'Municipality')}
                </p>
                <p style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0' }}>{estacion.municipio}</p>
              </div>
              <div className="card" style={{ padding: '16px' }}>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 4px 0', fontWeight: 600, letterSpacing: '0.1em' }}>
                  {t(translations, 'station.schedule', 'Schedule')}
                </p>
                <p style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0' }}>
                  {estacion.horarios ? `${estacion.horarios.apertura}–${estacion.horarios.cierre}` : '05:00–23:00'}
                </p>
              </div>
            </div>

            {/* TOURIST DESCRIPTION */}
            {estacion.descripcion_turistica && (
              <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text)', borderBottom: `3px solid ${colorLinea}`, paddingBottom: '12px' }}>
                  {t(translations, 'station.touristDescription', 'Tourist Information')}
                </h2>
                <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0', lineHeight: '1.8' }}>
                  {estacion.descripcion_turistica}
                </p>
              </div>
            )}

            {/* POIs */}
            {(estacion.pois || []).length > 0 && (
              <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '20px', color: 'var(--text)', borderBottom: `3px solid ${colorLinea}`, paddingBottom: '12px' }}>
                  {t(translations, 'station.nearbyPlaces', 'Nearby Places')}
                </h2>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {estacion.pois.map((poi, idx) => {
                    const poiName = typeof poi === 'string' ? poi : poi.nombre;
                    const poiDetail = typeof poi === 'string' ? null : `${poi.tipo} · ${poi.distancia}`;
                    return (
                      <div key={idx} style={{ padding: '16px', backgroundColor: 'var(--surface)', borderLeft: `4px solid ${colorLinea}`, borderRadius: 'var(--radius-sm)' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: '0 0 4px 0', color: 'var(--text)' }}>{poiName}</h3>
                        {poiDetail && <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0' }}>{poiDetail}</p>}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* NEARBY PLACES (detailed) */}
            {(estacion.lugares_cercanos || []).length > 0 && (
              <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '20px', color: 'var(--text)', borderBottom: `3px solid ${colorLinea}`, paddingBottom: '12px' }}>
                  {t(translations, 'station.nearbyPlaces', 'Nearby Places')} — {t(translations, 'city.touristGuide', 'Tourist Guide')}
                </h2>
                <div style={{ display: 'grid', gap: '16px' }}>
                  {estacion.lugares_cercanos.map((lugar, idx) => (
                    <div key={idx} style={{ padding: '20px', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: 'var(--text)' }}>{lugar.nombre}</h3>
                        <span style={{ fontSize: '0.75rem', padding: '2px 8px', backgroundColor: `${colorLinea}20`, color: colorLinea, borderRadius: 'var(--radius-full)', fontWeight: '600', whiteSpace: 'nowrap' }}>{lugar.distancia}</span>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', margin: '0 0 6px 0', fontWeight: '500' }}>{lugar.tipo}</p>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0', lineHeight: '1.5' }}>{lugar.descripcion}</p>
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
                    <li key={idx} style={{ padding: '12px 16px', backgroundColor: 'var(--surface)', borderLeft: '4px solid var(--success)', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem', color: 'var(--text)' }}>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* MUNDIAL 2026 */}
            {estacion.mundial_relevancia && !estacion.mundial_relevancia.includes('Sin relevancia') && (
              <div style={{ padding: '28px', backgroundColor: 'var(--surface)', borderLeft: '4px solid var(--warning)', borderRadius: 'var(--radius)', marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px', color: 'var(--warning)' }}>
                  FIFA World Cup 2026
                </h2>
                <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0', lineHeight: '1.6' }}>
                  {estacion.mundial_relevancia}
                </p>
              </div>
            )}

            {/* ACCESSIBILITY */}
            {estacion.accesibilidad && (
              <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '20px', color: 'var(--text)', borderBottom: `3px solid ${colorLinea}`, paddingBottom: '12px' }}>
                  {t(translations, 'station.accessibility', 'Accessibility')}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ padding: '12px', backgroundColor: estacion.accesibilidad.elevador ? 'rgba(22,163,74,0.1)' : 'var(--surface)', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>Elevator</p>
                    <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: estacion.accesibilidad.elevador ? 'var(--success)' : 'var(--text-dim)' }}>
                      {estacion.accesibilidad.elevador ? '✓' : '✗'}
                    </p>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: estacion.accesibilidad.rampa ? 'rgba(22,163,74,0.1)' : 'var(--surface)', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>Ramp</p>
                    <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: estacion.accesibilidad.rampa ? 'var(--success)' : 'var(--text-dim)' }}>
                      {estacion.accesibilidad.rampa ? '✓' : '✗'}
                    </p>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: estacion.accesibilidad.piso_tactil ? 'rgba(22,163,74,0.1)' : 'var(--surface)', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>Tactile Floor</p>
                    <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: estacion.accesibilidad.piso_tactil ? 'var(--success)' : 'var(--text-dim)' }}>
                      {estacion.accesibilidad.piso_tactil ? '✓' : '✗'}
                    </p>
                  </div>
                </div>
                {estacion.accesibilidad.notas && (
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0', lineHeight: '1.5' }}>
                    {estacion.accesibilidad.notas}
                  </p>
                )}
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
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0 0 4px 0' }}>{t(translations, 'station.line', 'Line')}</p>
                  <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: colorLinea }}>
                    {t(translations, 'line.title', 'Line {id}').replace('{id}', estacion.linea)}
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
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0 0 4px 0' }}>{t(translations, 'station.schedule', 'Schedule')}</p>
                  <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0' }}>
                    {estacion.horarios ? `${estacion.horarios.apertura}–${estacion.horarios.cierre}` : '05:00–23:00'}
                  </p>
                  {estacion.horarios?.notas && (
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>{estacion.horarios.notas}</p>
                  )}
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0 0 4px 0' }}>Costo</p>
                  <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: 'var(--success)' }}>$9.50 MXN</p>
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

            {/* AFFILIATE */}
            <div style={{ marginBottom: '24px' }}>
              <AffiliateTransportCard ciudad="GDL" estacion={estacion.nombre} fechas={null} />
            </div>

            {/* NAVIGATION */}
            <Link href={`/${lang}/gdl/linea/${estacion.linea}`}>
              <button style={{ width: '100%', padding: '14px', backgroundColor: colorLinea, color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer', marginBottom: '12px' }}>
                {t(translations, 'line.title', 'Line {id}').replace('{id}', estacion.linea)} →
              </button>
            </Link>

            <Link href={`/${lang}/gdl`}>
              <button style={{ width: '100%', padding: '14px', backgroundColor: 'var(--surface)', color: 'var(--text)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
                ← {t(translations, 'gdl.title', 'Guadalajara')}
              </button>
            </Link>
          </div>
        </div>
      </section>

      <AdBannerLazyInArticle slot="1082410395" />

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--surface)', padding: '60px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
          {t(translations, 'station.calculateRoute', 'Calculate Route from Here')}
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0 0 24px 0', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
          {t(translations, 'gdl.planRouteDesc', 'Calculate the best route between SITEUR stations')}
        </p>
        <Link href={`/${lang}/gdl`}>
          <button style={{ padding: '14px 32px', backgroundColor: 'var(--gdl)', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            {t(translations, 'gdl.planRoute', 'Plan Route')} →
          </button>
        </Link>
      </section>
    </main>
  );
}
