import { estacionesGDL } from '@/data/gdl/estaciones';
import { lineasGDL } from '@/data/gdl/lineas-detalle';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import Link from 'next/link';

// Only tren-ligero stations at /gdl/estacion/; macrobús at /gdl/macrobus/estacion/
const trenLigeroEstaciones = estacionesGDL.filter(e => e.sistema !== 'macrobus');

const LINE_COLORS = { '1': '#E63946', '2': '#06B6D4', '3': '#EC4899', '4': '#F97316' };

export async function generateStaticParams() {
  return trenLigeroEstaciones.map((estacion) => ({
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
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--danger)' }}>Estación no encontrada</h1>
        <Link href="/gdl">
          <button style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: 'var(--gdl)', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            Volver a Guadalajara
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
      { '@type': 'ListItem', position: 2, name: 'GDL', item: 'https://metroguia.mx/gdl/' },
      { '@type': 'ListItem', position: 3, name: `Línea ${estacion.linea}`, item: `https://metroguia.mx/gdl/linea/${estacion.linea}/` },
      { '@type': 'ListItem', position: 4, name: estacion.nombre, item: `https://metroguia.mx/gdl/estacion/${estacion.slug}` },
    ],
  };

  const transitStationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TransitStation',
    name: `Estación ${estacion.nombre}`,
    description: estacion.meta_description || estacion.intro || `Estación ${estacion.nombre} del sistema SITEUR en Guadalajara`,
    url: `https://metroguia.mx/gdl/estacion/${estacion.slug}/`,
    isAccessibleForFree: true,
    address: { '@type': 'PostalAddress', addressLocality: 'Guadalajara', addressRegion: estacion.municipio || 'Jalisco', addressCountry: 'MX' },
    geo: { '@type': 'GeoCoordinates', latitude: estacion.lat || 20.6597, longitude: estacion.lng || -103.3496 },
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '05:00', closes: '23:00' },
  };

  const faqItems = [];
  faqItems.push({ '@type': 'Question', name: `¿Cómo llego a la estación ${estacion.nombre} en Guadalajara?`, acceptedAnswer: { '@type': 'Answer', text: `La estación ${estacion.nombre} pertenece a la Línea ${estacion.linea} del sistema SITEUR en Guadalajara. Usa el planificador de rutas de MetroGuia.mx para obtener direcciones.` } });
  if (estacion.pois && estacion.pois.length > 0) {
    const poiList = estacion.pois.slice(0, 5).map(p => typeof p === 'string' ? p : `${p.nombre} (${p.tipo}, a ${p.distancia})`).join(', ');
    faqItems.push({ '@type': 'Question', name: `¿Qué hay cerca de la estación ${estacion.nombre}?`, acceptedAnswer: { '@type': 'Answer', text: `Cerca encontrarás: ${poiList}.` } });
  }
  faqItems.push({ '@type': 'Question', name: `¿Cuál es el horario y costo?`, acceptedAnswer: { '@type': 'Answer', text: `El Tren Ligero de Guadalajara opera de 5:00 AM a 11:00 PM. Costo: $9.50 MXN con tarjeta Mi Movilidad.` } });
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(transitStationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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

      {/* CONTENIDO PRINCIPAL */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '48px' }}>
          {/* COLUMNA IZQUIERDA */}
          <div>
            {/* DESCRIPCIÓN TURÍSTICA */}
            {estacion.descripcion_turistica && (
              <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text)', borderBottom: `3px solid ${colorLinea}`, paddingBottom: '12px' }}>
                  Información Turística
                </h2>
                <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0', lineHeight: '1.8' }}>
                  {estacion.descripcion_turistica}
                </p>
              </div>
            )}

            {/* PUNTOS DE INTERÉS */}
            {(estacion.pois || []).length > 0 && (
              <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '24px', color: 'var(--text)', borderBottom: `3px solid ${colorLinea}`, paddingBottom: '12px' }}>
                  Puntos de Interés Cercanos
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

            {/* LUGARES CERCANOS (detailed) */}
            {(estacion.lugares_cercanos || []).length > 0 && (
              <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '20px', color: 'var(--text)', borderBottom: `3px solid ${colorLinea}`, paddingBottom: '12px' }}>
                  Lugares Cercanos
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
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '24px', color: 'var(--text)', borderBottom: `3px solid ${colorLinea}`, paddingBottom: '12px' }}>
                  Consejos Útiles
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

            {/* ACCESIBILIDAD */}
            {estacion.accesibilidad && (
              <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '20px', color: 'var(--text)', borderBottom: `3px solid ${colorLinea}`, paddingBottom: '12px' }}>
                  Accesibilidad
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ padding: '12px', backgroundColor: estacion.accesibilidad.elevador ? 'rgba(22,163,74,0.1)' : 'var(--surface)', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>Elevador</p>
                    <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: estacion.accesibilidad.elevador ? 'var(--success)' : 'var(--text-dim)' }}>
                      {estacion.accesibilidad.elevador ? '✓' : '✗'}
                    </p>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: estacion.accesibilidad.rampa ? 'rgba(22,163,74,0.1)' : 'var(--surface)', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>Rampa</p>
                    <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: estacion.accesibilidad.rampa ? 'var(--success)' : 'var(--text-dim)' }}>
                      {estacion.accesibilidad.rampa ? '✓' : '✗'}
                    </p>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: estacion.accesibilidad.piso_tactil ? 'rgba(22,163,74,0.1)' : 'var(--surface)', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>Piso Táctil</p>
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

          {/* COLUMNA DERECHA - SIDEBAR */}
          <div>
            {/* INFORMACIÓN RÁPIDA */}
            <div style={{ backgroundColor: 'var(--surface)', padding: '24px', borderRadius: 'var(--radius)', marginBottom: '24px', borderTop: `4px solid ${colorLinea}` }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
                Información Rápida
              </h3>
              <div style={{ display: 'grid', gap: '12px' }}>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0 0 4px 0' }}>Línea</p>
                  <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: colorLinea }}>
                    Línea {estacion.linea} — {lineaData?.colorNombre || ''}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0 0 4px 0' }}>Municipio</p>
                  <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0' }}>{estacion.municipio}</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0 0 4px 0' }}>Tipo de Zona</p>
                  <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0' }}>{(estacion.tipo_zona || '').replace('-', ' / ')}</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0 0 4px 0' }}>Mejor Horario</p>
                  <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0' }}>{estacion.mejor_horario}</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: '0 0 4px 0' }}>Horario</p>
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

            {/* TRANSFERENCIAS */}
            {(estacion.transferencias || []).length > 0 && (
              <div style={{ backgroundColor: 'var(--surface)', padding: '24px', borderRadius: 'var(--radius)', marginBottom: '24px', borderTop: '4px solid var(--info)' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
                  Conexiones
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

            {/* NAVEGACIÓN */}
            <Link href={`/gdl/linea/${estacion.linea}`}>
              <button style={{ width: '100%', padding: '14px', backgroundColor: colorLinea, color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer', marginBottom: '12px' }}>
                Ver Línea {estacion.linea} Completa
              </button>
            </Link>

            <Link href="/gdl">
              <button style={{ width: '100%', padding: '14px', backgroundColor: 'var(--surface)', color: 'var(--text)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
                Volver a Guadalajara
              </button>
            </Link>
          </div>
        </div>
      </section>

      <AdBannerLazyInArticle slot="1082410395" />

      {/* CTA HOSPEDAJE */}
      <section style={{ backgroundColor: 'var(--surface)', padding: '60px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
          Hospedaje en Guadalajara
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0 0 24px 0', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
          Encuentra opciones de alojamiento cerca de esta estación y otros puntos turísticos de Guadalajara.
        </p>
        <Link href="/hospedaje">
          <button style={{ padding: '14px 32px', backgroundColor: 'var(--gdl)', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            Explorar Hospedaje
          </button>
        </Link>
      </section>
    </main>
  );
}
