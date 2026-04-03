import { lineasTampa } from '@/data/tampa/lineas-detalle';
import { estacionesTampa } from '@/data/tampa/estaciones';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';

export async function generateStaticParams() {
  return lineasTampa.map((linea) => ({
    id: linea.id,
  }));
}

export async function generateMetadata({ params }) {
  const linea = lineasTampa.find((l) => l.id === params.id);
  if (!linea) {
    return { title: 'Line not found', description: 'The requested line does not exist.' };
  }
  return {
    title: `${linea.colorNombre} Line — Tampa Transit | MetroGuia`,
    description: linea.descripcion.substring(0, 160),
    openGraph: {
      title: `${linea.colorNombre} Line`,
      description: linea.descripcion.substring(0, 160),
      url: `https://metroguia.mx/tampa/line/${linea.id}`,
    },
  };
}

export default function LineTampaPage({ params }) {
  const linea = lineasTampa.find((l) => l.id === params.id);

  if (!linea) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--danger)' }}>Line not found</h1>
        <Link href="/tampa">
          <button style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: '#E6272D', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            Back to Tampa
          </button>
        </Link>
      </main>
    );
  }

  const estacionesLinea = estacionesTampa.filter((e) => {
    const eLinea = Array.isArray(e.linea) ? e.linea : [e.linea];
    return eLinea.includes(linea.id);
  });

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg, ${linea.color} 0%, ${linea.color}cc 100%)`, color: '#fff', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '8px' }}>
            <Link href="/tampa" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.9rem' }}>
              ← Tampa
            </Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <span style={{ width: '60px', height: '60px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: '800', textTransform: 'uppercase' }}>
              {linea.id[0]}
            </span>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 4px 0' }}>
                {linea.colorNombre} Line
              </h1>
              <p style={{ fontSize: '1.125rem', opacity: 0.9, margin: 0 }}>
                {linea.inicio} → {linea.fin} · {linea.total} stations
              </p>
            </div>
          </div>
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* STATIONS LIST */}
      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '32px' }}>All Stations</h2>
          <div style={{ display: 'grid', gap: '12px' }}>
            {estacionesLinea.map((estacion, idx) => (
              <Link href={`/tampa/station/${estacion.slug}`} key={idx} style={{ textDecoration: 'none' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  padding: '16px 20px', backgroundColor: 'var(--surface)',
                  borderRadius: 'var(--radius)', border: '1px solid var(--border)',
                  cursor: 'pointer', transition: 'all 0.2s ease',
                }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    backgroundColor: linea.color, color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.85rem', fontWeight: '700', flexShrink: 0,
                  }}>
                    {idx + 1}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '600', margin: '0 0 2px 0', color: 'var(--text)' }}>
                      {estacion.nombre}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                      {estacion.intro}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FARE INFO */}
      <section style={{ padding: '60px 24px', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '24px' }}>Fares & Frequency</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div style={{ padding: '20px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', textAlign: 'center' }}>
              <p style={{ fontSize: '1.5rem', fontWeight: '800', color: linea.color, margin: '0 0 4px 0' }}>{linea.tarifa}</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Single Ride</p>
            </div>
            <div style={{ padding: '20px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', textAlign: 'center' }}>
              <p style={{ fontSize: '1.5rem', fontWeight: '800', color: linea.color, margin: '0 0 4px 0' }}>{linea.frecuencia}</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Peak Frequency</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
