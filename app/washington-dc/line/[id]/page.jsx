import { lineasDC } from '@/data/washington-dc/lineas-detalle';
import { estacionesDC } from '@/data/washington-dc/estaciones';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import LineSchema from '@/app/components/LineSchema';

export async function generateStaticParams() {
  return lineasDC.map((linea) => ({
    id: linea.id,
  }));
}

export async function generateMetadata({ params }) {
  const linea = lineasDC.find((l) => l.id === params.id);
  if (!linea) {
    return {
      title: 'Line not found',
      description: 'The requested line does not exist.',
    };
  }
  return {
    title: linea.seo_title,
    description: linea.meta_description,
    openGraph: {
      title: linea.seo_title,
      description: linea.meta_description,
      url: `https://metroguia.mx/washington-dc/line/${linea.id}`,
    },
  };
}

export default function LineWashingtonDC({ params }) {
  const linea = lineasDC.find((l) => l.id === params.id);

  if (!linea) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--danger)' }}>Line not found</h1>
        <Link href="/washington-dc">
          <button style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: '#BF0D3E', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            Back to Washington DC
          </button>
        </Link>
      </main>
    );
  }

  // Filter stations: handle comma-separated linea field AND array linea field
  const estacionesLinea = estacionesDC.filter((e) => {
    const lines = Array.isArray(e.linea) ? e.linea : e.linea.split(',').map(l => l.trim().toLowerCase());
    return lines.includes(linea.id.toLowerCase());
  });

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <LineSchema linea={linea} ciudad="washington-dc" sistema="WMATA Metro" />

      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg, ${linea.color} 0%, ${linea.color}cc 100%)`, color: linea.id === 'yellow' ? '#000' : '#fff', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '60px', height: '60px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: '800', color: linea.id === 'yellow' ? '#000' : '#fff' }}>
              {linea.id.charAt(0).toUpperCase()}
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.2', color: linea.id === 'yellow' ? '#000' : '#fff' }}>
            {linea.colorNombre}
          </h1>
          <p style={{ fontSize: '1.25rem', margin: '0 0 16px 0', opacity: '0.95', color: linea.id === 'yellow' ? '#000' : '#fff' }}>
            {linea.inicio} → {linea.fin}
          </p>
          <p style={{ fontSize: '1rem', margin: '0', opacity: '0.9', color: linea.id === 'yellow' ? '#000' : '#fff' }}>
            {linea.total} stations · {linea.boroughs.join(', ')}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        {/* Info cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '48px' }}>
          <div className="card" style={{ padding: '20px' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>Terminals</p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0', color: linea.color }}>{linea.inicio} → {linea.fin}</p>
          </div>
          <div className="card" style={{ padding: '20px' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>Stations</p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0' }}>{linea.total}</p>
          </div>
          <div className="card" style={{ padding: '20px' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>Hours</p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0' }}>Mon–Thu 5 AM–11:30 PM</p>
          </div>
          <div className="card" style={{ padding: '20px' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>Fare Range</p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0', color: 'var(--success)' }}>$2.25–$6.00 USD</p>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div style={{ backgroundColor: 'var(--surface)', padding: '32px', borderLeft: `4px solid ${linea.color}`, borderRadius: 'var(--radius)', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
            About This Line
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0 0 16px 0', lineHeight: '1.8' }}>
            {linea.descripcion}
          </p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {linea.boroughs.map((region, idx) => (
              <span key={idx} style={{ padding: '4px 12px', backgroundColor: `${linea.color}15`, color: linea.color, borderRadius: 'var(--radius-full)', fontSize: '0.85rem', fontWeight: '600' }}>
                {region}
              </span>
            ))}
          </div>
        </div>

        <AdBannerLazy slot="4434764790" />

        {/* ALL STATIONS */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '32px', color: 'var(--text)', borderBottom: `3px solid ${linea.color}`, paddingBottom: '16px' }}>
            All Stations ({linea.total})
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {estacionesLinea.map((estacion, idx) => (
              <Link href={`/washington-dc/station/${estacion.slug}`} key={estacion.slug}>
                <div style={{ padding: '20px', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', cursor: 'pointer', transition: 'all 0.2s ease' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <span style={{ width: '36px', height: '36px', backgroundColor: linea.color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: linea.id === 'yellow' ? '#000' : '#fff', fontSize: '0.9rem', fontWeight: '700', flexShrink: 0 }}>
                      {idx + 1}
                    </span>
                    <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: 'var(--text)' }}>
                      {estacion.nombre}
                    </h3>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', margin: '0 0 8px 0', fontWeight: '500' }}>
                    {estacion.borough}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0', lineHeight: '1.4' }}>
                    {estacion.intro}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <AdBannerLazyInArticle slot="1082410395" />

        {/* AFFILIATE */}
        <div style={{ maxWidth: '800px', margin: '40px auto' }}>
          <AffiliateTransportCard ciudad="Washington DC" estacion={null} fechas={null} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--surface)', padding: '60px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
          Explore Washington DC WMATA
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0 0 24px 0', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
          Discover more lines, stations, and attractions throughout Washington, DC.
        </p>
        <Link href="/washington-dc">
          <button style={{ padding: '14px 32px', backgroundColor: linea.color, color: linea.id === 'yellow' ? '#000' : '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            Back to Washington DC
          </button>
        </Link>
      </section>
    </main>
  );
}
