import { estacionesSaoPaulo } from '@/data/sao-paulo/estaciones';
import { lineasSaoPaulo } from '@/data/sao-paulo/lineas-detalle';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';

const LINEA_COLORS = { L1:'#0052A5', L2:'#007E5E', L3:'#EE372F', L4:'#F6C30B', L5:'#9B2990' };

export async function generateStaticParams() {
  return estacionesSaoPaulo.map(e => ({ slug: e.slug }));
}

export async function generateMetadata({ params }) {
  const e = estacionesSaoPaulo.find(e => e.slug === params.slug);
  if (!e) return { title: 'Estação não encontrada' };
  return {
    title: e.seo_title,
    description: e.meta_description,
    openGraph: { title: e.seo_title, url: `https://metroguia.mx/sao-paulo/station/${e.slug}/` },
    alternates: { canonical: `https://metroguia.mx/sao-paulo/station/${e.slug}/` },
  };
}

export default function StationSaoPaulo({ params }) {
  const estacion = estacionesSaoPaulo.find(e => e.slug === params.slug);
  if (!estacion) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ color: 'var(--danger)' }}>Estação não encontrada</h1>
        <Link href="/sao-paulo/"><button style={{ marginTop: 24, padding: '12px 24px', background: '#0052A5', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontWeight: 700, cursor: 'pointer' }}>Voltar a São Paulo</button></Link>
      </main>
    );
  }
  const lineaArr = Array.isArray(estacion.linea) ? estacion.linea : [estacion.linea];
  const lineasEst = lineaArr.map(id => lineasSaoPaulo.find(l => l.id === id)).filter(Boolean);
  const colorPrincipal = LINEA_COLORS[lineaArr[0]] || '#0052A5';

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <section style={{ background: `linear-gradient(135deg, ${colorPrincipal} 0%, ${colorPrincipal}cc 100%)`, color: '#fff', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.8rem', opacity: 0.85, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, margin: '0 0 16px 0' }}>🇧🇷 Metrô São Paulo</p>
          <h1 style={{ fontSize: 'clamp(1.75rem,5vw,3rem)', fontWeight: 900, margin: '0 0 16px 0' }}>{estacion.nombre}</h1>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {lineasEst.map(l => <span key={l.id} style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.2)', borderRadius: 'var(--radius-full)', fontWeight: 700 }}>{l.colorNombre}</span>)}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 40 }}>
          <div>
            {estacion.intro && <p style={{ fontSize: '1.1rem', lineHeight: 1.7, borderLeft: `4px solid ${colorPrincipal}`, paddingLeft: 20, marginBottom: 32 }}>{estacion.intro}</p>}
            {estacion.descripcion_turistica && (
              <div style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '0 0 16px 0' }}>Sobre a estação</h2>
                <p style={{ lineHeight: 1.8, margin: 0 }}>{estacion.descripcion_turistica}</p>
              </div>
            )}
            {estacion.pois && estacion.pois.length > 0 && (
              <div style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '0 0 16px 0' }}>O que há por perto</h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {estacion.pois.map((p, i) => <li key={i} style={{ padding: '10px 0', borderBottom: '1px solid var(--border)', fontSize: '0.95rem' }}><span style={{ color: colorPrincipal, fontWeight: 700 }}>→ </span>{typeof p === 'object' ? `${p.nombre} (${p.distancia})` : p}</li>)}
                </ul>
              </div>
            )}
            {estacion.lugares_cercanos && estacion.lugares_cercanos.length > 0 && (
              <div style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '0 0 16px 0' }}>Lugares próximos</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 16 }}>
                  {estacion.lugares_cercanos.map((l, i) => (
                    <div key={i} style={{ background: 'var(--surface)', borderRadius: 'var(--radius)', padding: 16, border: '1px solid var(--border)' }}>
                      <p style={{ fontWeight: 700, margin: '0 0 4px 0' }}>{l.nombre}</p>
                      <p style={{ fontSize: '0.75rem', color: colorPrincipal, fontWeight: 600, margin: '0 0 8px 0' }}>{l.tipo} · {l.distancia}</p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>{l.descripcion}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {estacion.tips && estacion.tips.length > 0 && (
              <div style={{ background: 'var(--surface)', padding: 24, borderRadius: 'var(--radius)' }}>
                <h3 style={{ fontWeight: 700, margin: '0 0 16px 0' }}>Dicas de viagem</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {estacion.tips.map((t, i) => <li key={i} style={{ padding: '8px 0', fontSize: '0.9rem', color: 'var(--text-muted)', borderBottom: i < estacion.tips.length - 1 ? '1px solid var(--border)' : 'none' }}><span style={{ color: colorPrincipal, fontWeight: 700 }}>✓ </span>{t}</li>)}
                </ul>
              </div>
            )}
          </div>
          <div>
            <div style={{ background: 'var(--surface)', borderRadius: 'var(--radius)', padding: 24, marginBottom: 24, border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-dim)', margin: '0 0 16px 0' }}>Info da estação</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 4px 0' }}>Linhas</p>
                  <div style={{ display: 'flex', gap: 6 }}>
                    {lineaArr.map(id => <span key={id} style={{ padding: '3px 10px', background: LINEA_COLORS[id] || colorPrincipal, color: '#fff', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 700 }}>{id}</span>)}
                  </div>
                </div>
                {estacion.horarios && (
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12 }}>
                    <p style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 4px 0' }}>Horários</p>
                    <p style={{ fontSize: '0.9rem', fontWeight: 600, margin: '0 0 4px 0' }}>{estacion.horarios.apertura} – {estacion.horarios.cierre}</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>{estacion.horarios.notas}</p>
                  </div>
                )}
              </div>
            </div>
            {lineasEst.map(l => (
              <Link key={l.id} href={`/sao-paulo/line/${l.id}/`} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '12px 16px', background: 'var(--surface)', border: `1px solid ${LINEA_COLORS[l.id]}`, borderRadius: 'var(--radius)', marginBottom: 8 }}>
                  <p style={{ fontWeight: 700, margin: 0, color: 'var(--text)' }}>{l.colorNombre}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>{l.inicio} → {l.fin}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <AdBannerLazyInArticle slot="1082410395" />
      </section>

      <section style={{ backgroundColor: 'var(--surface)', padding: '60px 24px', textAlign: 'center' }}>
        <Link href="/sao-paulo/"><button style={{ padding: '14px 32px', background: colorPrincipal, color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontWeight: 700, cursor: 'pointer' }}>Voltar ao Metrô São Paulo</button></Link>
      </section>
    </main>
  );
}
