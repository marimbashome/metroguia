import { lineasDetallePittsburgh } from '@/data/pittsburgh/lineas-detalle';
import { estacionesPittsburgh } from '@/data/pittsburgh/estaciones';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';

export async function generateStaticParams() {
  return lineasDetallePittsburgh.map((linea) => ({
    id: linea.id,
  }));
}

export async function generateMetadata({ params }) {
  const linea = lineasDetallePittsburgh.find((l) => l.id === params.id);
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
      url: `https://metroguia.mx/pittsburgh/line/${linea.id}`,
    },
  };
}

export default function LinePittsburghPage({ params }) {
  const linea = lineasDetallePittsburgh.find((l) => l.id === params.id);

  if (!linea) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--danger)' }}>Line not found</h1>
        <Link href="/pittsburgh">
          <button style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: '#DA291C', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            Back to Pittsburgh
          </button>
        </Link>
      </main>
    );
  }

  const estacionesLinea = estacionesPittsburgh.filter((e) => {
    const lineaId = Array.isArray(e.linea) ? e.linea[0] : e.linea;
    return lineaId === linea.id;
  });

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg, ${linea.color} 0%, ${linea.color}cc 100%)`, color: '#fff', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '60px', height: '60px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: '800' }}>
              {linea.id[0]}
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.2' }}>
            {linea.id} Line — {linea.colorNombre}
          </h1>
          <p style={{ fontSize: '1.25rem', margin: '0 0 16px 0', opacity: '0.95' }}>
            {linea.inicio} → {linea.fin}
          </p>
          <p style={{ fontSize: '1rem', margin: '0', opacity: '0.9' }}>
            {linea.total} stations
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '48px' }}>
          <div style={{ padding: '20px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>Terminals</p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0', color: linea.color }}>{linea.inicio} → {linea.fin}</p>
          </div>
          <div style={{ padding: '20px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>Stations</p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0' }}>{linea.total}</p>
          </div>
          <div style={{ padding: '20px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>Frequency</p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0' }}>5–10 min</p>
          </div>
          <div style={{ padding: '20px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>Cost</p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0', color: 'var(--success)' }}>$2.75</p>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div style={{ backgroundColor: 'var(--surface)', padding: '32px', borderLeft: `4px solid ${linea.color}`, borderRadius: 'var(--radius)', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
            About This Line
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0', lineHeight: '1.8' }}>
            {linea.descripcion}
          </p>
        </div>

        <AdBannerLazy slot="4434764790" />

        {/* ONE-DAY ROUTE */}
        {linea.ruta_1_dia && (
          <div style={{ marginBottom: '60px', marginTop: '40px' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '32px', color: 'var(--text)', borderBottom: `3px solid ${linea.color}`, paddingBottom: '16px' }}>
              {linea.ruta_1_dia.titulo}
            </h2>
            <div style={{ display: 'grid', gap: '24px' }}>
              {linea.ruta_1_dia.paradas.map((parada, idx) => {
                const estacion = estacionesLinea.find((e) => e.slug === parada.estacion);
                return (
                  <div key={idx} style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: '24px', alignItems: 'start' }}>
                    <div style={{ position: 'relative' }}>
                      <div style={{ width: '60px', height: '60px', backgroundColor: linea.color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.5rem', fontWeight: '700' }}>
                        {idx + 1}
                      </div>
                      {idx < linea.ruta_1_dia.paradas.length - 1 && (
                        <div style={{ position: 'absolute', left: '29px', top: '60px', width: '2px', height: '100px', backgroundColor: linea.color, opacity: '0.3' }} />
                      )}
                    </div>
                    <div>
                      <Link href={`/pittsburgh/station/${parada.estacion}`}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 8px 0', color: linea.color, cursor: 'pointer' }}>
                          {estacion?.nombre || parada.estacion}
                        </h3>
                      </Link>
                      <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0', lineHeight: '1.6' }}>
                        {parada.actividad}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ALL STATIONS */}
        <div style={{ marginBottom: '60px', marginTop: '40px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '32px', color: 'var(--text)', borderBottom: `3px solid ${linea.color}`, paddingBottom: '16px' }}>
            All Stations
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {estacionesLinea.map((estacion, idx) => (
              <Link href={`/pittsburgh/station/${estacion.slug}`} key={idx} style={{ textDecoration: 'none' }}>
                <div style={{
                  padding: '20px',
                  backgroundColor: 'var(--surface)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--border)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.8rem', backgroundColor: linea.color, color: '#fff', padding: '2px 8px', borderRadius: '4px', fontWeight: '700' }}>
                      {idx + 1}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: 'var(--text)' }}>
                    {estacion.nombre}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PAYMENT OPTIONS */}
      <section style={{ backgroundColor: 'var(--bg)', padding: '80px 24px', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '800',
            margin: '0 0 48px 0',
            color: 'var(--text)',
            textAlign: 'center',
          }}>
            Payment & Passes
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <AffiliateTransportCard
              icon="🎫"
              titulo="T Card"
              descripcion="Reloadable contactless card. Works on light rail and buses."
              precio="$5 + value"
              enlace="https://www.portauthority.org/"
            />

            <AffiliateTransportCard
              icon="📱"
              titulo="Mobile Ticket"
              descripcion="Buy tickets via Port Authority app or online."
              precio="$2.75"
              enlace="https://www.portauthority.org/"
            />

            <AffiliateTransportCard
              icon="🎟️"
              titulo="Day Pass"
              descripcion="Unlimited light rail and bus travel for 24 hours."
              precio="$9.50"
              enlace="https://www.portauthority.org/"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
