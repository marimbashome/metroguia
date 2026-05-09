import { estacionesLima } from '@/data/lima/estaciones';
import { lineasLima } from '@/data/lima/lineas-detalle';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';

const LINEA_COLORS = {
  L1: '#1F8B47', L2: '#E30613',
};

export async function generateStaticParams() {
  return estacionesLima.map(e => ({ slug: e.slug }));
}

export async function generateMetadata({ params }) {
  const estacion = estacionesLima.find(e => e.slug === params.slug);
  if (!estacion) return { title: 'Estación no encontrada' };
  return {
    title: estacion.seo_title,
    description: estacion.meta_description,
    openGraph: { title: estacion.seo_title, url: `https://metroguia.mx/lima/station/${estacion.slug}/` },
    alternates: { canonical: `https://metroguia.mx/lima/station/${estacion.slug}/` },
  };
}

export default function StationLima({ params }) {
  const estacion = estacionesLima.find(e => e.slug === params.slug);

  if (!estacion) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ color: 'var(--danger)' }}>Estación no encontrada</h1>
        <Link href="/lima"><button style={{ marginTop: 24, padding: '12px 24px', background: '#1E5FA6', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontWeight: 700, cursor: 'pointer' }}>Volver a Lima</button></Link>
      </main>
    );
  }

  const lineaArr = Array.isArray(estacion.linea) ? estacion.linea : [estacion.linea];
  const lineasEst = lineaArr.map(id => lineasLima.find(l => l.id === id)).filter(Boolean);
  const colorPrincipal = LINEA_COLORS[lineaArr[0]] || '#1F8B47';

  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Lima', item: 'https://metroguia.mx/lima/' },
      { '@type': 'ListItem', position: 3, name: estacion.nombre, item: `https://metroguia.mx/lima/station/${estacion.slug}/` },
    ],
  };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg, ${colorPrincipal} 0%, ${colorPrincipal}cc 100%)`, color: '#fff', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.8rem', opacity: 0.85, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, margin: '0 0 16px 0' }}>
            🇵🇪 Metro Lima Lima
          </p>
          <h1 style={{ fontSize: 'clamp(1.75rem,5vw,3rem)', fontWeight: 900, margin: '0 0 16px 0' }}>
            {estacion.nombre}
          </h1>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {lineasEst.map(l => (
              <span key={l.id} style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.2)', borderRadius: 'var(--radius-full)', fontSize: '0.9rem', fontWeight: 700 }}>
                Línea {l.id} — {l.colorNombre}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 40 }}>
          {/* LEFT */}
          <div>
            {estacion.intro && (
              <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text)', marginBottom: 32, borderLeft: `4px solid ${colorPrincipal}`, paddingLeft: 20 }}>
                {estacion.intro}
              </p>
            )}

            {estacion.descripcion_turistica && (
              <div style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '0 0 16px 0' }}>Sobre esta estación</h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text)', margin: 0 }}>{estacion.descripcion_turistica}</p>
              </div>
            )}

            {estacion.pois && estacion.pois.length > 0 && (
              <div style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '0 0 16px 0' }}>Qué hay cerca</h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {estacion.pois.map((poi, i) => (
                    <li key={i} style={{ padding: '12px 0', borderBottom: '1px solid var(--border)', fontSize: '0.95rem', color: 'var(--text)' }}>
                      <span style={{ color: colorPrincipal, fontWeight: 700 }}>→ </span>
                      {typeof poi === 'object' ? `${poi.nombre} (${poi.distancia})` : poi}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {estacion.lugares_cercanos && estacion.lugares_cercanos.length > 0 && (
              <div style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '0 0 16px 0' }}>Lugares cercanos</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 16 }}>
                  {estacion.lugares_cercanos.map((lugar, i) => (
                    <div key={i} style={{ background: 'var(--surface)', borderRadius: 'var(--radius)', padding: 16, border: '1px solid var(--border)' }}>
                      <p style={{ fontWeight: 700, margin: '0 0 4px 0', color: 'var(--text)' }}>{lugar.nombre}</p>
                      <p style={{ fontSize: '0.75rem', color: colorPrincipal, fontWeight: 600, margin: '0 0 8px 0' }}>{lugar.tipo} · {lugar.distancia}</p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>{lugar.descripcion}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {estacion.tips && estacion.tips.length > 0 && (
              <div style={{ background: 'var(--surface)', padding: 24, borderRadius: 'var(--radius)', marginBottom: 40 }}>
                <h3 style={{ fontWeight: 700, margin: '0 0 16px 0', fontSize: '1.1rem' }}>Consejos de viaje</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {estacion.tips.map((tip, i) => (
                    <li key={i} style={{ padding: '8px 0', fontSize: '0.9rem', color: 'var(--text-muted)', borderBottom: i < estacion.tips.length - 1 ? '1px solid var(--border)' : 'none' }}>
                      <span style={{ color: colorPrincipal, fontWeight: 700 }}>✓ </span>{tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* RIGHT sidebar */}
          <div>
            <div style={{ background: 'var(--surface)', borderRadius: 'var(--radius)', padding: 24, marginBottom: 24, border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', margin: '0 0 16px 0' }}>Info de la estación</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 4px 0' }}>Líneas</p>
                  <div style={{ display: 'flex', gap: 6 }}>
                    {lineaArr.map(id => <span key={id} style={{ padding: '3px 10px', background: LINEA_COLORS[id] || colorPrincipal, color: '#fff', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', fontWeight: 700 }}>{id}</span>)}
                  </div>
                </div>
                {estacion.horarios && (
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12 }}>
                    <p style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 4px 0' }}>Horarios</p>
                    <p style={{ fontSize: '0.9rem', fontWeight: 600, margin: '0 0 4px 0' }}>{estacion.horarios.apertura} – {estacion.horarios.cierre}</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>{estacion.horarios.notas}</p>
                  </div>
                )}
                {estacion.accesibilidad && (
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12 }}>
                    <p style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 8px 0' }}>Accesibilidad</p>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {estacion.accesibilidad.elevador && <span style={{ fontSize: '0.75rem', padding: '3px 8px', background: 'rgba(21,151,72,0.15)', color: '#159748', borderRadius: 4 }}>Ascensor</span>}
                      {estacion.accesibilidad.rampa && <span style={{ fontSize: '0.75rem', padding: '3px 8px', background: 'rgba(21,151,72,0.15)', color: '#159748', borderRadius: 4 }}>Rampa</span>}
                      {estacion.accesibilidad.piso_tactil && <span style={{ fontSize: '0.75rem', padding: '3px 8px', background: 'rgba(21,151,72,0.15)', color: '#159748', borderRadius: 4 }}>Piso táctil</span>}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {lineasEst.length > 0 && (
              <div>
                <h3 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 12px 0', color: 'var(--text-dim)' }}>Líneas en esta estación</h3>
                {lineasEst.map(l => (
                  <Link key={l.id} href={`/lima/line/${l.id}/`} style={{ textDecoration: 'none' }}>
                    <div style={{ padding: '12px 16px', background: 'var(--surface)', border: `1px solid ${LINEA_COLORS[l.id]}`, borderRadius: 'var(--radius)', marginBottom: 8, cursor: 'pointer' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ width: 30, height: 30, borderRadius: '50%', background: LINEA_COLORS[l.id], display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: '0.85rem' }}>{l.id}</span>
                        <div>
                          <p style={{ fontWeight: 700, margin: 0, fontSize: '0.9rem', color: 'var(--text)' }}>{l.colorNombre}</p>
                          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>{l.inicio} → {l.fin}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <AdBannerLazyInArticle slot="1082410395" />
      </section>

      <section style={{ backgroundColor: 'var(--surface)', padding: '60px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '0 0 16px 0' }}>Explorá más estaciones</h2>
        <Link href="/lima/">
          <button style={{ padding: '14px 32px', background: colorPrincipal, color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: 700, cursor: 'pointer' }}>
            Volver al Subte Lima
          </button>
        </Link>
      </section>
    </main>
  );
}
