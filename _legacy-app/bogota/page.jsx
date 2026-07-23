import { estacionesBogota } from '@/data/bogota/estaciones';
import { lineasBogota } from '@/data/bogota/lineas-detalle';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';

export const metadata = {
  title: 'TransMilenio Bogotá — Guía Completa Troncales y Estaciones | MetroGuia',
  description: 'Guía completa de TransMilenio Bogotá: troncales principales, estaciones clave. Museo del Oro, La Candelaria, Zona Rosa. Sistema BRT más grande del mundo.',
  openGraph: { title: 'TransMilenio Bogotá — Guía de Transporte', url: 'https://metroguia.mx/bogota/' },
  alternates: { canonical: 'https://metroguia.mx/bogota/' },
};

export default function BogotaPage() {
  const destacadas = estacionesBogota.filter(e =>
    ['bog-museo-del-oro-caracas','bog-general-santander-caracas','bog-portal-norte-nqs','bog-ciudad-universitaria-nqs','bog-calle-72-caracas','bog-portal-americas'].includes(e.slug)
  );

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <section style={{ background: 'linear-gradient(135deg, #EF3D33 0%, #8B0000 100%)', color: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, opacity: 0.85, margin: '0 0 12px 0' }}>🇨🇴 TransMilenio · Bogotá</p>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, margin: '0 0 12px 0' }}>TransMilenio de Bogotá</h1>
          <p style={{ fontSize: '1.15rem', opacity: 0.95, margin: '0 0 8px 0' }}>Sistema BRT · 12 troncales · El sistema de buses rápidos más grande del mundo</p>
          <p style={{ fontSize: '1rem', opacity: 0.85, maxWidth: 600, margin: '0 0 32px 0' }}>Navegá Bogotá con confianza: guías de estaciones, troncales y tips para moverse por la capital colombiana.</p>
          <SearchBar ciudad="bogota" />
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--surface)', padding: '48px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 24 }}>
          {[{val:'12',label:'Troncales'},{val:'140+',label:'Estaciones'},{val:'2000',label:'Inauguración'},{val:'COP $3.000',label:'Tarifa'}].map(s=>(
            <div key={s.label} style={{ textAlign:'center' }}>
              <p style={{ fontSize:'clamp(1.75rem,4vw,2.5rem)', fontWeight:900, color:'#EF3D33', margin:'0 0 6px 0' }}>{s.val}</p>
              <p style={{ fontSize:'0.85rem', color:'var(--text-dim)', fontWeight:600, textTransform:'uppercase', margin:0 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0 0 32px 0' }}>Troncales Principales</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 20 }}>
          {lineasBogota.map(l=>(
            <Link key={l.id} href={`/bogota/line/${l.id}/`} style={{ textDecoration:'none' }}>
              <div style={{ background:'var(--surface)', border:`2px solid ${l.color}`, borderRadius:'var(--radius)', padding:24 }}>
                <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:16 }}>
                  <div style={{ padding:'6px 14px', background:l.color, borderRadius:'var(--radius-full)', color:'#fff', fontWeight:900, fontSize:'0.85rem' }}>{l.id}</div>
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
        <h2 style={{ fontSize:'1.75rem', fontWeight:800, margin:'0 0 32px 0' }}>Estaciones Clave</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:16 }}>
          {destacadas.map(e=>(
            <Link key={e.slug} href={`/bogota/station/${e.slug}/`} style={{ textDecoration:'none' }}>
              <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'var(--radius)', padding:20 }}>
                <p style={{ fontWeight:700, margin:'0 0 4px 0', color:'var(--text)' }}>{e.nombre}</p>
                <p style={{ fontSize:'0.78rem', color:'#EF3D33', fontWeight:600, margin:'0 0 8px 0' }}>{Array.isArray(e.linea)?e.linea.join(', '):e.linea}</p>
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
            {[{label:'Tarifa única',val:'COP $3.000'},{label:'Tarjeta TuLlave',val:'Recomendada'},{label:'L-V',val:'04:30–23:00'},{label:'S-D',val:'05:00–22:00'}].map(i=>(
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
