import { estacionesSantiago } from '@/data/santiago/estaciones';
import { lineasSantiago } from '@/data/santiago/lineas-detalle';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';

export const metadata = {
  title: 'Metro de Santiago — Guía Completa Líneas y Estaciones | MetroGuia',
  description: 'Guía completa del Metro de Santiago de Chile: 7 líneas, 136 estaciones. Baquedano, La Moneda, Tobalaba, Providencia. Rutas, tarifas y horarios 2025.',
  openGraph: { title: 'Metro Santiago — Guía Chile', url: 'https://metroguia.mx/santiago/' },
  alternates: { canonical: 'https://metroguia.mx/santiago/' },
};

export default function SantiagoPage() {
  const destacadas = estacionesSantiago.filter(e =>
    ['stgo-baquedano-l1','stgo-la-moneda-l1','stgo-universidad-de-chile-l1','stgo-tobalaba-l1','stgo-parque-ohiggins-l2','stgo-estacion-central-l1'].includes(e.slug)
  );

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <section style={{ background: 'linear-gradient(135deg, #EF3D33 0%, #1F5BA6 100%)', color: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, opacity: 0.85, margin: '0 0 12px 0' }}>🇨🇱 Metro · Santiago de Chile</p>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, margin: '0 0 12px 0' }}>Metro de Santiago</h1>
          <p style={{ fontSize: '1.15rem', opacity: 0.95, margin: '0 0 8px 0' }}>7 líneas · 136 estaciones · La red de metro más moderna de Latinoamérica</p>
          <p style={{ fontSize: '1rem', opacity: 0.85, maxWidth: 600, margin: '0 0 32px 0' }}>Viaja por Santiago con confianza: guías de estaciones, mapas de líneas y tips para cada barrio capitalino.</p>
          <SearchBar ciudad="santiago" />
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--surface)', padding: '48px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 24 }}>
          {[{val:'7',label:'Líneas'},{val:'136',label:'Estaciones'},{val:'1975',label:'Inauguración'},{val:'CLP $870',label:'Tarifa base'}].map(s=>(
            <div key={s.label} style={{ textAlign:'center' }}>
              <p style={{ fontSize:'clamp(1.75rem,4vw,2.5rem)', fontWeight:900, color:'#EF3D33', margin:'0 0 6px 0' }}>{s.val}</p>
              <p style={{ fontSize:'0.85rem', color:'var(--text-dim)', fontWeight:600, textTransform:'uppercase', margin:0 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0 0 32px 0' }}>Líneas del Metro</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 20 }}>
          {lineasSantiago.map(l=>(
            <Link key={l.id} href={`/santiago/line/${l.id}/`} style={{ textDecoration:'none' }}>
              <div style={{ background:'var(--surface)', border:`2px solid ${l.color}`, borderRadius:'var(--radius)', padding:24 }}>
                <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:16 }}>
                  <div style={{ width:48, height:48, borderRadius:'50%', background:l.color, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:900 }}>{l.id}</div>
                  <div>
                    <p style={{ fontWeight:700, margin:'0 0 4px 0', color:'var(--text)' }}>{l.colorNombre}</p>
                    <p style={{ fontSize:'0.8rem', color:'var(--text-dim)', margin:0 }}>{l.total} estaciones</p>
                  </div>
                </div>
                <p style={{ fontSize:'0.85rem', color:'var(--text-muted)', margin:0 }}>{l.inicio} → {l.fin}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <AdBannerLazy slot="4434764790" />

      <section style={{ maxWidth:'1200px', margin:'0 auto', padding:'60px 24px', borderTop:'1px solid var(--border)' }}>
        <h2 style={{ fontSize:'1.75rem', fontWeight:800, margin:'0 0 32px 0' }}>Estaciones Principales</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:16 }}>
          {destacadas.map(e=>(
            <Link key={e.slug} href={`/santiago/station/${e.slug}/`} style={{ textDecoration:'none' }}>
              <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'var(--radius)', padding:20 }}>
                <p style={{ fontWeight:700, margin:'0 0 4px 0', color:'var(--text)' }}>{e.nombre}</p>
                <p style={{ fontSize:'0.78rem', color:'#EF3D33', fontWeight:600, margin:'0 0 8px 0' }}>Línea {Array.isArray(e.linea)?e.linea.join(', '):e.linea}</p>
                <p style={{ fontSize:'0.82rem', color:'var(--text-muted)', margin:0 }}>{e.intro}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ maxWidth:'1200px', margin:'0 auto', padding:'60px 24px' }}>
        <div style={{ background:'var(--surface)', borderRadius:'var(--radius)', padding:40 }}>
          <h2 style={{ fontWeight:800, fontSize:'1.4rem', margin:'0 0 24px 0' }}>Tarifas y Horarios</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:24 }}>
            {[{label:'Tarifa base',val:'CLP $870'},{label:'Bip! Card',val:'Recomendada'},{label:'Lunes-Viernes',val:'06:00–23:00'},{label:'Domingo',val:'08:00–22:30'}].map(i=>(
              <div key={i.label}>
                <p style={{ fontSize:'0.75rem', color:'var(--text-dim)', textTransform:'uppercase', fontWeight:600, margin:'0 0 6px 0' }}>{i.label}</p>
                <p style={{ fontSize:'1.2rem', fontWeight:800, color:'#EF3D33', margin:0 }}>{i.val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdBannerLazyInArticle slot="1082410395" />
    </main>
  );
}
