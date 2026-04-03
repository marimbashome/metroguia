import { estacionesDenver } from '@/data/denver/estaciones';
import { lineasDenver } from '@/data/denver/lineas-detalle';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import Link from 'next/link';

const LINE_COLORS = {
  'A': '#FFD100',
  'B': '#8B6914',
  'D': '#00843D',
  'E': '#552586',
  'G': '#BFD730',
  'W': '#0078C8',
};

export async function generateStaticParams() {
  return lineasDenver.map((linea) => ({
    id: linea.id,
  }));
}

export async function generateMetadata({ params }) {
  const linea = lineasDenver.find((l) => l.id === params.id);
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
      url: `https://metroguia.mx/denver/line/${linea.id}`,
    },
  };
}

export default function LineDenverPage({ params }) {
  const linea = lineasDenver.find((l) => l.id === params.id);

  if (!linea) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--danger)' }}>Line not found</h1>
        <Link href="/denver">
          <button style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: '#003DA5', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            Back to Denver
          </button>
        </Link>
      </main>
    );
  }

  const colorLinea = LINE_COLORS[linea.id] || '#003DA5';
  const estacionesLinea = estacionesDenver.filter(e => linea.estaciones.includes(e.slug));

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Denver', item: 'https://metroguia.mx/denver/' },
      { '@type': 'ListItem', position: 3, name: linea.colorNombre, item: `https://metroguia.mx/denver/line/${linea.id}/` },
    ],
  };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg, ${colorLinea} 0%, ${colorLinea}cc 100%)`, color: '#fff', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '64px',
              height: '64px',
              backgroundColor: 'rgba(255,255,255,0.3)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '36px',
              fontWeight: '700',
            }}>
              {linea.id}
            </div>
            <div>
              <p style={{ fontSize: '1rem', fontWeight: '500', margin: '0 0 4px 0', opacity: '0.9' }}>RTD Denver</p>
              <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', margin: '0', lineHeight: '1.2' }}>
                {linea.colorNombre} Line
              </h1>
            </div>
          </div>
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* MAIN */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '48px', marginBottom: '60px' }}>
          {/* LEFT */}
          <div>
            <div style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text)', borderBottom: `3px solid ${colorLinea}`, paddingBottom: '12px' }}>
                About This Line
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0', lineHeight: '1.8' }}>
                {linea.descripcion}
              </p>
            </div>

            {linea.ruta_1_dia && (
              <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '24px', color: 'var(--text)', borderBottom: `3px solid ${colorLinea}`, paddingBottom: '12px' }}>
                  {linea.ruta_1_dia.titulo}
                </h2>
                <div style={{ display: 'grid', gap: '16px' }}>
                  {linea.ruta_1_dia.paradas.map((parada, idx) => {
                    const estacion = estacionesDenver.find(e => e.slug === parada.estacion);
                    return (
                      <Link key={idx} href={`/denver/station/${parada.estacion}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div style={{ padding: '20px', backgroundColor: 'var(--surface)', borderLeft: `4px solid ${colorLinea}`, borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}>
                          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', margin: '0 0 8px 0', color: 'var(--text)' }}>
                            {estacion?.nombre || parada.estacion}
                          </h3>
                          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: '0', lineHeight: '1.5' }}>
                            {parada.actividad}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                {linea.ruta_1_dia.notas && (
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '16px 0 0 0', fontStyle: 'italic' }}>
                    {linea.ruta_1_dia.notas}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div>
            {/* LINE STATS */}
            <div style={{ backgroundColor: 'var(--surface)', padding: '32px', borderRadius: 'var(--radius)', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: '0 0 24px 0', color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Line Information
              </h3>
              <div style={{ display: 'grid', gap: '20px' }}>
                <div>
                  <p style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)', margin: '0 0 8px 0', textTransform: 'uppercase' }}>
                    Stations
                  </p>
                  <p style={{ fontSize: '1.5rem', fontWeight: '800', color: colorLinea, margin: '0' }}>
                    {linea.total}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)', margin: '0 0 8px 0', textTransform: 'uppercase' }}>
                    Route
                  </p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text)', margin: '0', fontWeight: '700' }}>
                    {linea.inicio}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '2px 0 0 0' }}>
                    to
                  </p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text)', margin: '0', fontWeight: '700' }}>
                    {linea.fin}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)', margin: '0 0 8px 0', textTransform: 'uppercase' }}>
                    Municipalities
                  </p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text)', margin: '0' }}>
                    {linea.municipios.join(', ')}
                  </p>
                </div>
              </div>
            </div>

            {/* FARES */}
            <div style={{ backgroundColor: 'var(--surface)', padding: '32px', borderRadius: 'var(--radius)', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Fares & Payment
              </h3>
              <div style={{ display: 'grid', gap: '16px' }}>
                <div>
                  <p style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)', margin: '0 0 8px 0', textTransform: 'uppercase' }}>
                    Local Fare
                  </p>
                  <p style={{ fontSize: '1.5rem', fontWeight: '800', color: '#003DA5', margin: '0' }}>
                    $3.00
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)', margin: '0 0 8px 0', textTransform: 'uppercase' }}>
                    Airport Fare
                  </p>
                  <p style={{ fontSize: '1.5rem', fontWeight: '800', color: '#003DA5', margin: '0' }}>
                    $10.50
                  </p>
                </div>
                <div style={{ paddingTop: '8px', borderTop: '1px solid var(--border)' }}>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0' }}>
                    Payment with MyRide Card
                  </p>
                </div>
              </div>
            </div>

            {/* HOURS */}
            <div style={{ backgroundColor: 'var(--surface)', padding: '32px', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Operating Hours
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text)', margin: '0' }}>
                <span style={{ fontWeight: '700' }}>4:30 AM</span> — <span style={{ fontWeight: '700' }}>1:15 AM</span>
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '8px 0 0 0' }}>
                Peak frequency: 15 minutes
              </p>
            </div>
          </div>
        </div>

        {/* ALL STATIONS */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '800',
            marginBottom: '32px',
            color: 'var(--text)',
          }}>
            All Stations on {linea.colorNombre} Line
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
            {estacionesLinea.map((estacion) => (
              <Link key={estacion.slug} href={`/denver/station/${estacion.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{
                  padding: '20px',
                  backgroundColor: 'var(--surface)',
                  borderLeft: `4px solid ${colorLinea}`,
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                }}>
                  <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: 'var(--text)' }}>
                    {estacion.nombre}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>
                    {estacion.municipio}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* AFFILIATE */}
      <section style={{
        backgroundColor: 'var(--surface)',
        padding: '60px 24px',
        borderTop: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '800',
            marginBottom: '32px',
            textAlign: 'center',
            color: 'var(--text)',
          }}>
            Getting Around Denver
          </h2>
          <AffiliateTransportCard />
        </div>
      </section>
    </main>
  );
}
