import { lineasPhiladelphia } from '@/data/philadelphia/lineas-detalle';
import { estacionesPhiladelphia } from '@/data/philadelphia/estaciones';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';

export async function generateStaticParams() {
  return lineasPhiladelphia.map((linea) => ({
    id: linea.id,
  }));
}

export async function generateMetadata({ params }) {
  const linea = lineasPhiladelphia.find((l) => l.id === params.id);
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
      url: `https://metroguia.mx/philadelphia/line/${linea.id}`,
    },
  };
}

export default function LinePhiladelphiaPage({ params }) {
  const linea = lineasPhiladelphia.find((l) => l.id === params.id);

  if (!linea) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--danger)' }}>Line not found</h1>
        <Link href="/philadelphia">
          <button style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: '#FF6B35', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            Back to Philadelphia
          </button>
        </Link>
      </main>
    );
  }

  const estacionesLinea = estacionesPhiladelphia.filter((e) => e.linea === linea.id);

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg, ${linea.color} 0%, ${linea.color}cc 100%)`, color: '#fff', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '60px', height: '60px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: '800' }}>
              {linea.id}
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.2' }}>
            Line {linea.id} — {linea.colorNombre}
          </h1>
          <p style={{ fontSize: '1.25rem', margin: '0 0 16px 0', opacity: '0.95' }}>
            {linea.inicio} → {linea.fin}
          </p>
          <p style={{ fontSize: '1rem', margin: '0', opacity: '0.9' }}>
            {linea.total} stations · {linea.municipios.join(', ')}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        {/* Info cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '48px' }}>
          <div className="card" style={{ padding: '20px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>Terminals</p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0', color: linea.color }}>{linea.inicio} → {linea.fin}</p>
          </div>
          <div className="card" style={{ padding: '20px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>Stations</p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0' }}>{linea.total}</p>
          </div>
          <div className="card" style={{ padding: '20px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>Hours</p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0' }}>4:00 AM–1:00 AM</p>
          </div>
          <div className="card" style={{ padding: '20px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>Cost</p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0', color: 'var(--success)' }}>$2.50 USD</p>
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
            {linea.municipios.map((mun, idx) => (
              <span key={idx} style={{ padding: '4px 12px', backgroundColor: `${linea.color}15`, color: linea.color, borderRadius: 'var(--radius-full)', fontSize: '0.85rem', fontWeight: '600' }}>
                {mun}
              </span>
            ))}
          </div>
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
                      <Link href={`/philadelphia/station/${parada.estacion}`}>
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
            All Stations on Line {linea.id}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {estacionesLinea.map((estacion, idx) => (
              <Link href={`/philadelphia/station/${estacion.slug}`} key={idx} style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    padding: '20px',
                    backgroundColor: 'var(--surface)',
                    borderRadius: 'var(--radius)',
                    border: '1px solid var(--border)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                    e.currentTarget.style.borderColor = linea.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }}
                >
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

      {/* SEPTA KEY CARD */}
      <section style={{ backgroundColor: 'var(--bg)', padding: '80px 24px', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '800',
              margin: '0 0 48px 0',
              color: 'var(--text)',
              textAlign: 'center',
            }}
          >
            Payment Options
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <AffiliateTransportCard
              icon="🎫"
              titulo="SEPTA Key Card"
              descripcion="Reloadable contactless card. Fastest way to enter all SEPTA services."
              precio="$2.50 (card) + value"
              enlace="https://www.septa.org/key/"
            />

            <AffiliateTransportCard
              icon="📱"
              titulo="Mobile Payment"
              descripcion="Pay directly via SEPTA mobile app. No card needed."
              precio="$2.50 per ride"
              enlace="https://www.septa.org/"
            />

            <AffiliateTransportCard
              icon="🚌"
              titulo="Pass Options"
              descripcion="Weekly and monthly passes available for frequent riders."
              precio="$25.50 – $98"
              enlace="https://www.septa.org/passes/"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
