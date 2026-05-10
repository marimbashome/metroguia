import { lineasSantiago } from '@/data/santiago/lineas-detalle';
import { estacionesSantiago } from '@/data/santiago/estaciones';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';

import { IntlLineSchema } from '@/app/components/IntlSchema';
const LINEA_COLORS = { L1:'#EF3D33',L2:'#F0A115',L3:'#856937',L4:'#1F5BA6',L4a:'#1F5BA6',L5:'#2AA84A',L6:'#8C1A6A',L7:'#DB7920' };

export async function generateStaticParams() {
  return lineasSantiago.map(l => ({ id: l.id }));
}

export async function generateMetadata({ params }) {
  const l = lineasSantiago.find(l => l.id === params.id);
  if (!l) return { title: 'Línea no encontrada' };
  return {
    title: l.seo_title, description: l.meta_description,
    openGraph: { title: l.seo_title, url: `https://metroguia.mx/santiago/line/${l.id}/` },
    alternates: { canonical: `https://metroguia.mx/santiago/line/${l.id}/` },
  };
}

export default function LineSantiago({ params }) {
  const linea = lineasSantiago.find(l => l.id === params.id);
  if (!linea) return <main style={{ padding:'80px 24px', textAlign:'center', backgroundColor:'var(--bg)', color:'var(--text)' }}><h1>Línea no encontrada</h1><Link href="/santiago/"><button style={{ marginTop:24, padding:'12px 24px', background:'#EF3D33', color:'#fff', border:'none', borderRadius:'var(--radius)', fontWeight:700, cursor:'pointer' }}>Volver</button></Link></main>;

  const ests = estacionesSantiago.filter(e => (Array.isArray(e.linea)?e.linea:[e.linea]).includes(linea.id));

  return (
    <main style={{ backgroundColor:'var(--bg)', color:'var(--text)' }}>
      <IntlLineSchema line={(lineasSantiago.find(l => l.id === params.id)) || null} stations={((lineasSantiago.find(l => l.id === params.id) || {}).estaciones || []).map(s => (typeof s === 'string' ? (estacionesSantiago.find(x => x.slug === s) || { slug: s, nombre: s }) : s))} city="Santiago" citySlug="santiago" linePathPrefix="/santiago/line" stationPathPrefix="/santiago/station" country="CL" systemName="Metro de Santiago" locale="es" />
      <section style={{ background:`linear-gradient(135deg, ${linea.color} 0%, ${linea.color}cc 100%)`, color:'#fff', padding:'60px 24px' }}>
        <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
          <div style={{ width:60, height:60, borderRadius:'50%', background:'rgba(255,255,255,0.25)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.5rem', fontWeight:900, marginBottom:20 }}>{linea.id}</div>
          <h1 style={{ fontSize:'clamp(1.75rem,5vw,3rem)', fontWeight:900, margin:'0 0 12px 0' }}>{linea.h1}</h1>
          <p style={{ fontSize:'1.1rem', opacity:0.95, margin:'0 0 8px 0' }}>{linea.inicio} → {linea.fin}</p>
          <p style={{ opacity:0.85, margin:0 }}>{linea.total} estaciones · {linea.municipios.join(', ')}</p>
        </div>
      </section>

      <section style={{ maxWidth:'1200px', margin:'0 auto', padding:'60px 24px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:16, marginBottom:48 }}>
          {[{label:'Terminales',val:`${linea.inicio} → ${linea.fin}`},{label:'Estaciones',val:linea.total},{label:'Tarifa',val:'CLP $870'},{label:'Horario',val:'06:00–23:00'}].map(c=>(
            <div key={c.label} style={{ background:'var(--surface)', padding:20, borderRadius:'var(--radius)', border:'1px solid var(--border)' }}>
              <p style={{ fontSize:'0.72rem', color:'var(--text-dim)', textTransform:'uppercase', fontWeight:600, margin:'0 0 6px 0' }}>{c.label}</p>
              <p style={{ fontSize:'1.1rem', fontWeight:700, margin:0, color:linea.color }}>{c.val}</p>
            </div>
          ))}
        </div>

        <div style={{ background:'var(--surface)', padding:32, borderLeft:`4px solid ${linea.color}`, borderRadius:'var(--radius)', marginBottom:48 }}>
          <h2 style={{ fontSize:'1.4rem', fontWeight:700, margin:'0 0 16px 0' }}>Sobre la {linea.colorNombre}</h2>
          <p style={{ lineHeight:1.8, margin:0 }}>{linea.descripcion}</p>
          <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginTop:16 }}>
            {linea.municipios.map((m,i)=><span key={i} style={{ padding:'3px 10px', background:`${linea.color}15`, color:linea.color, borderRadius:'var(--radius-full)', fontSize:'0.82rem', fontWeight:600 }}>{m}</span>)}
          </div>
        </div>

        <AdBannerLazy slot="4434764790" />

        <div style={{ marginTop:48 }}>
          <h2 style={{ fontSize:'1.5rem', fontWeight:700, margin:'0 0 24px 0', borderBottom:`3px solid ${linea.color}`, paddingBottom:16 }}>Estaciones ({ests.length})</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:16 }}>
            {ests.map((e,i)=>(
              <Link key={e.slug} href={`/santiago/station/${e.slug}/`} style={{ textDecoration:'none' }}>
                <div style={{ padding:20, background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'var(--radius)' }}>
                  <div style={{ display:'flex', gap:12, alignItems:'center', marginBottom:8 }}>
                    <span style={{ width:30, height:30, borderRadius:'50%', background:linea.color, color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, fontSize:'0.8rem', flexShrink:0 }}>{i+1}</span>
                    <h3 style={{ margin:0, fontSize:'1rem', fontWeight:700, color:'var(--text)' }}>{e.nombre}</h3>
                  </div>
                  <p style={{ fontSize:'0.82rem', color:'var(--text-muted)', margin:0 }}>{e.intro}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <AdBannerLazyInArticle slot="1082410395" />
      </section>
      <section style={{ backgroundColor:'var(--surface)', padding:'60px 24px', textAlign:'center' }}>
        <Link href="/santiago/"><button style={{ padding:'14px 32px', background:linea.color, color:'#fff', border:'none', borderRadius:'var(--radius)', fontWeight:700, cursor:'pointer' }}>Ver todas las líneas</button></Link>
      </section>
    </main>
  );
}
