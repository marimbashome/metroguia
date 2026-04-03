import { lineasDallas } from '@/data/dallas/lineas-detalle';
import { estacionesDallas } from '@/data/dallas/estaciones';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';

export async function generateStaticParams() {
  return lineasDallas.map((linea) => ({ id: linea.id }));
}

export async function generateMetadata({ params }) {
  const linea = lineasDallas.find((l) => l.id === params.id);
  if (!linea) {
    return { title: 'Line not found', description: 'The requested line does not exist.' };
  }
  return {
    title: linea.seo_title || `Line ${linea.id} — ${linea.colorNombre}`,
    description: linea.meta_description || `Line ${linea.id} guide for Dallas DART Light Rail.`,
    openGraph: {
      title: linea.seo_title,
      description: linea.meta_description,
      url: `https://metroguia.mx/dallas/line/${linea.id}`,
    },
  };
}

export default function LineaDallasPage({ params }) {
  const linea = lineasDallas.find((l) => l.id === params.id);

  if (!linea) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--danger)' }}>Line not found</h1>
        <Link href="/dallas">
          <button style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: '#0066CC', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            Back to Dallas
          </button>
        </Link>
      </main>
    );
  }

  const estacionesLinea = estacionesDallas.filter(e => linea.estaciones.includes(e.slug));

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg, ${linea.color} 0%, ${linea.color}cc 100%)`, color: '#fff', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '60px', height: '60px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: '800' }}>
              {linea.id.charAt(0)}
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.2' }}>
            Line {linea.id} — {linea.colorNombre}
          </h1>
          <p style={{ fontSize: '1.25rem', margin: '0 0 16px 0', opacity: '0.95' }}>
            {linea.inicio} → {linea.fin}
          </p>
          <p style={{ fontSize: '1rem', margin: '0', opacity: '0.9' }}>
            {linea.estaciones.length} stations
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        {/* Info cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '48px' }}>
          <div className="card" style={{ padding: '20px' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>Terminals</p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0', color: linea.color }}>{linea.inicio} → {linea.fin}</p>
          </div>
          <div className="card" style={{ padding: '20px' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>Stations</p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0' }}>{linea.estaciones.length}</p>
          </div>
          <div className="card" style={{ padding: '20px' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>Hours</p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0' }}>5:00–11:30</p>
          </div>
          <div className="card" style={{ padding: '20px' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>Fare</p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0', color: 'var(--success)' }}>$2.50 USD</p>
          </div>
        </div>

        {/* DESCRIPCIÓN */}
        <div style={{ backgroundColor: 'var(--surface)', padding: '32px', borderLeft: `4px solid ${linea.color}`, borderRadius: 'var(--radius)', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
            About This Line
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0 0 16px 0', lineHeight: '1.8' }}>
            {linea.descripcion || `Line ${linea.id} is a key part of Dallas DART Light Rail, connecting major areas and attractions.`}
          </p>
        </div>

        <AdBannerLazy slot="4434764790" format="auto" />

        {/* ESTACIONES */}
        <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '32px', color: 'var(--text)' }}>
          All Stations
        </h2>
        <div style={{ display: 'grid', gap: '12px' }}>
          {estacionesLinea.map((est, idx) => (
            <Link key={est.slug} href={`/dallas/station/${est.slug}`} style={{ textDecoration: 'none' }}>
              <div
                style={{
                  padding: '16px 20px',
                  backgroundColor: 'var(--surface)',
                  borderLeft: `4px solid ${linea.color}`,
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>
                    Stop {idx + 1}
                  </span>
                  <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: '4px 0 0 0', color: 'var(--text)' }}>
                    {est.nombre}
                  </h3>
                </div>
                <span style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
