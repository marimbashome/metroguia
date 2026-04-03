import { lineasDetalleChicago } from '@/data/chicago/lineas-detalle';
import { estacionesChicago } from '@/data/chicago/estaciones';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';

export async function generateStaticParams() {
  return lineasDetalleChicago.map((linea) => ({
    id: linea.id,
  }));
}

export async function generateMetadata({ params }) {
  const linea = lineasDetalleChicago.find((l) => l.id === params.id);
  if (!linea) {
    return {
      title: 'Line not found',
      description: 'The requested line does not exist.',
    };
  }
  const seoTitle = linea.seo_title || `${linea.nombre} — CTA L Chicago`;
  const metaDesc = linea.meta_description || linea.descripcion;
  return {
    title: seoTitle,
    description: metaDesc,
    openGraph: {
      title: seoTitle,
      description: metaDesc,
      url: `https://metroguia.mx/chicago/line/${linea.id}`,
    },
  };
}

export default function LineChicagoPage({ params }) {
  const linea = lineasDetalleChicago.find((l) => l.id === params.id);

  if (!linea) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--danger)' }}>Line not found</h1>
        <Link href="/chicago">
          <button style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: '#00A1DE', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            Back to Chicago
          </button>
        </Link>
      </main>
    );
  }

  // Filter stations that serve this line
  const estacionesLinea = estacionesChicago.filter((e) => {
    const lineasEst = Array.isArray(e.linea) ? e.linea : [e.linea];
    return lineasEst.includes(linea.id);
  });

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Chicago', item: 'https://metroguia.mx/chicago/' },
      { '@type': 'ListItem', position: 3, name: linea.nombre, item: `https://metroguia.mx/chicago/line/${linea.id}` },
    ],
  };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg, ${linea.color} 0%, ${linea.color}cc 100%)`, color: '#fff', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '60px', height: '60px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: '800' }}>
              {linea.id[0].toUpperCase()}
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.2' }}>
            {linea.nombre}
          </h1>
          <p style={{ fontSize: '1.25rem', margin: '0 0 16px 0', opacity: '0.95' }}>
            {linea.inicio} → {linea.fin}
          </p>
          <p style={{ fontSize: '1rem', margin: '0', opacity: '0.9' }}>
            {estacionesLinea.length} stations
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        {/* Info Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '48px' }}>
          <div style={{ padding: '20px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>Terminals</p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0', color: linea.color }}>{linea.inicio} → {linea.fin}</p>
          </div>
          <div style={{ padding: '20px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>Stations</p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0' }}>{estacionesLinea.length}</p>
          </div>
          <div style={{ padding: '20px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>Frequency</p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0' }}>{linea.frecuencia}</p>
          </div>
          <div style={{ padding: '20px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>Cost</p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0', color: 'var(--success)' }}>{linea.tarifa}</p>
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

        <AdBannerLazy slot="4434764790" format="auto" />

        {/* STATIONS LIST */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '700', margin: '0 0 32px 0', color: 'var(--text)' }}>
            Stations on {linea.nombre}
          </h2>
          <div style={{ display: 'grid', gap: '16px' }}>
            {estacionesLinea.map((estacion, idx) => (
              <Link href={`/chicago/station/${estacion.slug}`} key={idx} style={{ textDecoration: 'none' }}>
                <div style={{
                  padding: '20px',
                  backgroundColor: 'var(--surface)',
                  borderLeft: `4px solid ${linea.color}`,
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', margin: '0 0 4px 0', color: 'var(--text)' }}>
                    {idx + 1}. {estacion.nombre}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0' }}>
                    {estacion.descripcion}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* PAYMENT */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '700', margin: '0 0 32px 0', color: 'var(--text)', textAlign: 'center' }}>
            Payment Options
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <AffiliateTransportCard
              icon="🎫"
              titulo="Ventra Card"
              descripcion="Reloadable transit card for CTA and Pace buses."
              precio="$5 + value"
              enlace="https://www.ventrachicago.com/"
            />
            <AffiliateTransportCard
              icon="🎟️"
              titulo="CTA Day Pass"
              descripcion="Unlimited rides on all CTA lines for 24 hours."
              precio="$5"
              enlace="https://www.ventrachicago.com/"
            />
            <AffiliateTransportCard
              icon="📱"
              titulo="Mobile Ticket"
              descripcion="Purchase single rides via Ventra app."
              precio="$2.50"
              enlace="https://www.ventrachicago.com/"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
