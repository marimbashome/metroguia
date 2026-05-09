import { lineasBogota } from '@/data/bogota/lineas-detalle';
import { estacionesBogota } from '@/data/bogota/estaciones';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';

export async function generateStaticParams() {
  return lineasBogota.map(l => ({ id: l.id }));
}

export async function generateMetadata({ params }) {
  const linea = lineasBogota.find(l => l.id === params.id);
  if (!linea) return { title: 'Línea no encontrada' };
  return {
    title: linea.seo_title,
    description: linea.meta_description,
    openGraph: { title: linea.seo_title, url: `https://metroguia.mx/bogota/line/${linea.id}/` },
    alternates: { canonical: `https://metroguia.mx/bogota/line/${linea.id}/` },
  };
}

export default function LineBogota({ params }) {
  const linea = lineasBogota.find(l => l.id === params.id);

  if (!linea) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ color: 'var(--danger)' }}>Línea no encontrada</h1>
        <Link href="/bogota/"><button style={{ marginTop: 24, padding: '12px 24px', background: '#EF3D33', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontWeight: 700, cursor: 'pointer' }}>Volver a Bogotá</button></Link>
      </main>
    );
  }

  const estacionesLinea = estacionesBogota.filter(e => {
    const lineas = Array.isArray(e.linea) ? e.linea : [e.linea];
    return lineas.includes(linea.id);
  });

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg, ${linea.color} 0%, ${linea.color}cc 100%)`, color: '#fff', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 20 }}>
            <span style={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 900 }}>
              {linea.id}
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.75rem,5vw,3rem)', fontWeight: 900, margin: '0 0 12px 0' }}>
            {linea.h1}
          </h1>
          <p style={{ fontSize: '1.15rem', opacity: 0.95, margin: '0 0 8px 0' }}>
            {linea.inicio} → {linea.fin}
          </p>
          <p style={{ opacity: 0.85, margin: 0 }}>{linea.total} estaciones · {linea.municipios.join(', ')}</p>
        </div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        {/* Info cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 16, marginBottom: 48 }}>
          {[
            { label: 'Terminales', val: `${linea.inicio} → ${linea.fin}` },
            { label: 'Estaciones', val: linea.total },
            { label: 'Tarifa', val: 'COP $3,200' },
            { label: 'Horario', val: '04:30 – 23:00' },
          ].map(c => (
            <div key={c.label} style={{ background: 'var(--surface)', padding: 20, borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.1em', margin: '0 0 6px 0' }}>{c.label}</p>
              <p style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: linea.color }}>{c.val}</p>
            </div>
          ))}
        </div>

        {/* Descripción */}
        <div style={{ background: 'var(--surface)', padding: 32, borderLeft: `4px solid ${linea.color}`, borderRadius: 'var(--radius)', marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '0 0 16px 0' }}>Sobre {linea.colorNombre}</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, margin: 0, color: 'var(--text)' }}>{linea.descripcion}</p>
        </div>

        <AdBannerLazy slot="4434764790" />

        {/* Ruta 1 día */}
        {linea.ruta_1_dia && (
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '0 0 20px 0' }}>Recorrido recomendado: {linea.ruta_1_dia.titulo}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {linea.ruta_1_dia.paradas.map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{ width: 28, height: 28, borderRadius: '50%', background: linea.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>{i + 1}</span>
                  <div>
                    <Link href={`/bogota/station/${p.estacion}/`} style={{ color: linea.color, fontWeight: 700, textDecoration: 'none' }}>{p.estacion.replace('baires-','').replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase())}</Link>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '2px 0 0 0' }}>{p.actividad}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Estaciones */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0 0 24px 0', borderBottom: `3px solid ${linea.color}`, paddingBottom: 16 }}>
            Estaciones ({estacionesLinea.length})
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 16 }}>
            {estacionesLinea.map((e, i) => (
              <Link key={e.slug} href={`/bogota/station/${e.slug}/`} style={{ textDecoration: 'none' }}>
                <div style={{ padding: 20, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 8 }}>
                    <span style={{ width: 30, height: 30, borderRadius: '50%', background: linea.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>{i + 1}</span>
                    <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: 'var(--text)' }}>{e.nombre}</h3>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.4 }}>{e.intro}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <AdBannerLazyInArticle slot="1082410395" />
      </section>

      <section style={{ backgroundColor: 'var(--surface)', padding: '60px 24px', textAlign: 'center' }}>
        <Link href="/bogota/">
          <button style={{ padding: '14px 32px', background: linea.color, color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>
            Ver todas las líneas del Subte
          </button>
        </Link>
      </section>
    </main>
  );
}
