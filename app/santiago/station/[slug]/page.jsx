import { estacionesSantiago } from '@/data/santiago/estaciones';
import { lineasSantiago } from '@/data/santiago/lineas-detalle';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';

const LINEA_COLORS = { L1:'#EF3D33',L2:'#F0A115',L3:'#856937',L4:'#1F5BA6',L4a:'#1F5BA6',L5:'#2AA84A',L6:'#8C1A6A',L7:'#DB7920' };

export async function generateStaticParams() {
  return estacionesSantiago.map(e => ({ slug: e.slug }));
}

export async function generateMetadata({ params }) {
  const e = estacionesSantiago.find(e => e.slug === params.slug);
  if (!e) return { title: 'Estación no encontrada' };
  return {
    title: e.seo_title, description: e.meta_description,
    openGraph: { title: e.seo_title, url: `https://metroguia.mx/santiago/station/${e.slug}/` },
    alternates: { canonical: `https://metroguia.mx/santiago/station/${e.slug}/` },
  };
}

export default function StationSantiago({ params }) {
  const estacion = estacionesSantiago.find(e => e.slug === params.slug);
  if (!estacion) return (
    <main style={{ padding:'80px 24px', textAlign:'center', backgroundColor:'var(--bg)', color:'var(--text)' }}>
      <h1>Estación no encontrada</h1>
      <Link href="/santiago/"><button style={{ marginTop:24, padding:'12px 24px', background:'#EF3D33', color:'#fff', border:'none', borderRadius:'var(--radius)', fontWeight:700, cursor:'pointer' }}>Volver</button></Link>
    </main>
  );

  const lineaArr = Array.isArray(estacion.linea) ? estacion.linea : [estacion.linea];
  const lineasEst = lineaArr.map(id => lineasSantiago.find(l => l.id === id)).filter(Boolean);
  const colorPrincipal = LINEA_COLORS[lineaArr[0]] || '#EF3D33';

  return (
    <main style={{ backgroundColor:'var(--bg)', color:'var(--text)' }}>
      <section style={{ background:`linear-gradient(135deg, ${colorPrincipal} 0%, ${colorPrincipal}cc 100%)`, color:'#fff', padding:'60px 24px' }}>
        <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
          <p style={{ fontSize:'0.8rem', opacity:0.85, textTransform:'uppercase', letterSpacing:'0.12em', fontWeight:600, margin:'0 0 16px 0' }}>🇨🇱 Metro Santiago</p>
          <h1 style={{ fontSize:'clamp(1.75rem,5vw,3rem)', fontWeight:900, margin:'0 0 16px 0' }}>{estacion.nombre}</h1>
          <div style={{ display:'flex', gap:8 }}>
            {lineasEst.map(l=><span key={l.id} style={{ padding:'6px 14px', background:'rgba(255,255,255,0.2)', borderRadius:'var(--radius-full)', fontWeight:700 }}>{l.colorNombre}</span>)}
          </div>
        </div>
      </section>

      <section style={{ maxWidth:'1200px', margin:'0 auto', padding:'60px 24px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr', gap:40 }}>
          <div>
            {estacion.intro&&<p style={{ fontSize:'1.1rem', lineHeight:1.7, borderLeft:`4px solid ${colorPrincipal}`, paddingLeft:20, marginBottom:32 }}>{estacion.intro}</p>}
            {estacion.descripcion_turistica&&<div style={{ marginBottom:40 }}><h2 style={{ fontSize:'1.4rem', fontWeight:700, margin:'0 0 16px 0' }}>Sobre esta estación</h2><p style={{ lineHeight:1.8, margin:0 }}>{estacion.descripcion_turistica}</p></div>}
            {estacion.pois&&estacion.pois.length>0&&(
              <div style={{ marginBottom:40 }}>
                <h2 style={{ fontSize:'1.4rem', fontWeight:700, margin:'0 0 16px 0' }}>Qué hay cerca</h2>
                <ul style={{ listStyle:'none', padding:0, margin:0 }}>{estacion.pois.map((p,i)=><li key={i} style={{ padding:'10px 0', borderBottom:'1px solid var(--border)', fontSize:'0.95rem' }}><span style={{ color:colorPrincipal, fontWeight:700 }}>→ </span>{typeof p==='object'?`${p.nombre} (${p.distancia})`:p}</li>)}</ul>
              </div>
            )}
            {estacion.lugares_cercanos&&estacion.lugares_cercanos.length>0&&(
              <div style={{ marginBottom:40 }}>
                <h2 style={{ fontSize:'1.4rem', fontWeight:700, margin:'0 0 16px 0' }}>Lugares cercanos</h2>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:16 }}>
                  {estacion.lugares_cercanos.map((l,i)=>(
                    <div key={i} style={{ background:'var(--surface)', borderRadius:'var(--radius)', padding:16, border:'1px solid var(--border)' }}>
                      <p style={{ fontWeight:700, margin:'0 0 4px 0' }}>{l.nombre}</p>
                      <p style={{ fontSize:'0.75rem', color:colorPrincipal, fontWeight:600, margin:'0 0 8px 0' }}>{l.tipo} · {l.distancia}</p>
                      <p style={{ fontSize:'0.85rem', color:'var(--text-muted)', margin:0 }}>{l.descripcion}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {estacion.tips&&estacion.tips.length>0&&(
              <div style={{ background:'var(--surface)', padding:24, borderRadius:'var(--radius)' }}>
                <h3 style={{ fontWeight:700, margin:'0 0 12px 0' }}>Consejos</h3>
                <ul style={{ listStyle:'none', padding:0, margin:0 }}>{estacion.tips.map((t,i)=><li key={i} style={{ padding:'8px 0', fontSize:'0.9rem', color:'var(--text-muted)' }}><span style={{ color:colorPrincipal, fontWeight:700 }}>✓ </span>{t}</li>)}</ul>
              </div>
            )}
          </div>
          <div>
            <div style={{ background:'var(--surface)', borderRadius:'var(--radius)', padding:24, marginBottom:24, border:'1px solid var(--border)' }}>
              <h3 style={{ fontSize:'0.8rem', fontWeight:700, textTransform:'uppercase', color:'var(--text-dim)', margin:'0 0 16px 0' }}>Info estación</h3>
              <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
                <div>
                  <p style={{ fontSize:'0.72rem', color:'var(--text-dim)', textTransform:'uppercase', fontWeight:600, margin:'0 0 4px 0' }}>Líneas</p>
                  <div style={{ display:'flex', gap:6 }}>{lineaArr.map(id=><span key={id} style={{ padding:'3px 10px', background:LINEA_COLORS[id]||colorPrincipal, color:'#fff', borderRadius:'var(--radius-full)', fontSize:'0.8rem', fontWeight:700 }}>{id}</span>)}</div>
                </div>
                {estacion.horarios&&<div style={{ borderTop:'1px solid var(--border)', paddingTop:12 }}>
                  <p style={{ fontSize:'0.72rem', color:'var(--text-dim)', textTransform:'uppercase', fontWeight:600, margin:'0 0 4px 0' }}>Horarios</p>
                  <p style={{ fontSize:'0.9rem', fontWeight:600, margin:'0 0 4px 0' }}>{estacion.horarios.apertura} – {estacion.horarios.cierre}</p>
                  <p style={{ fontSize:'0.8rem', color:'var(--text-muted)', margin:0 }}>{estacion.horarios.notas}</p>
                </div>}
              </div>
            </div>
            {lineasEst.map(l=>(
              <Link key={l.id} href={`/santiago/line/${l.id}/`} style={{ textDecoration:'none' }}>
                <div style={{ padding:'12px 16px', background:'var(--surface)', border:`1px solid ${LINEA_COLORS[l.id]}`, borderRadius:'var(--radius)', marginBottom:8 }}>
                  <p style={{ fontWeight:700, margin:0 }}>{l.colorNombre}</p>
                  <p style={{ fontSize:'0.75rem', color:'var(--text-muted)', margin:0 }}>{l.inicio} → {l.fin}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <AdBannerLazyInArticle slot="1082410395" />
      </section>
      <section style={{ backgroundColor:'var(--surface)', padding:'60px 24px', textAlign:'center' }}>
        <Link href="/santiago/"><button style={{ padding:'14px 32px', background:colorPrincipal, color:'#fff', border:'none', borderRadius:'var(--radius)', fontWeight:700, cursor:'pointer' }}>Volver al Metro Santiago</button></Link>
      </section>
    </main>
  );
}
