import { estacionesLasVegas } from '@/data/las-vegas/estaciones';
import { lineasLasVegas } from '@/data/las-vegas/lineas-detalle';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import Link from 'next/link';

const LINE_COLORS = {"monorail":"#FFD700"};

export async function generateStaticParams() {
  return estacionesLasVegas.map((estacion) => ({
    slug: estacion.slug,
  }));
}

export async function generateMetadata({ params }) {
  const estacion = estacionesLasVegas.find((e) => e.slug === params.slug);
  if (!estacion) {
    return { title: 'Station not found', description: 'The requested station does not exist.' };
  }
  return {
    title: estacion.seo_title,
    description: estacion.meta_description,
    openGraph: {
      title: estacion.seo_title,
      description: estacion.meta_description,
      url: `https://metroguia.mx/las-vegas/station/${estacion.slug}`,
    },
  };
}

export default function StationLasVegasPage({ params }) {
  const estacion = estacionesLasVegas.find((e) => e.slug === params.slug);

  if (!estacion) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--danger)' }}>Station not found</h1>
        <Link href="/las-vegas">
          <button style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: '#FFD700', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            Back to Las Vegas
          </button>
        </Link>
      </main>
    );
  }

  const lineaArray = Array.isArray(estacion.linea) ? estacion.linea : [estacion.linea];
  const colorLinea = LINE_COLORS[lineaArray[0]] || '#FFD700';
  const lineaId = lineaArray[0];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Las Vegas', item: 'https://metroguia.mx/las-vegas/' },
      { '@type': 'ListItem', position: 3, name: `Line ${lineaId}`, item: `https://metroguia.mx/las-vegas/line/${lineaId}/` },
      { '@type': 'ListItem', position: 4, name: estacion.nombre, item: `https://metroguia.mx/las-vegas/station/${estacion.slug}/` },
    ]
  };

  const stationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TrainStation',
    name: estacion.nombre,
    description: estacion.descripcion_turistica,
    address: { '@type': 'PostalAddress', addressLocality: 'Las Vegas', addressRegion: 'Nevada', addressCountry: 'US' },
  };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(stationSchema) }} />

      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg, ${colorLinea} 0%, ${colorLinea}cc 100%)`, color: '#fff', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ marginBottom: '8px' }}>
            <Link href="/las-vegas" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.9rem' }}>
              ← Las Vegas
            </Link>
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 8px 0' }}>{estacion.nombre}</h1>
          <p style={{ fontSize: '1.125rem', opacity: 0.9, margin: 0 }}>
            {lineaArray.map(l => `${l.charAt(0).toUpperCase() + l.slice(1)} Line`).join(' · ')} — Las Vegas Monorail
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px' }}>About this station</h2>
          <p style={{ lineHeight: 1.8, color: 'var(--text-muted)' }}>{estacion.descripcion_turistica}</p>

          <AdBannerLazy slot="4434764790" format="auto" />

          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '48px', marginBottom: '16px' }}>Accessibility</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px' }}>
            <div style={{ padding: '16px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', textAlign: 'center', border: '1px solid var(--border)' }}>
              <p style={{ fontSize: '1.5rem', margin: '0 0 4px 0' }}>{estacion.accesibilidad?.elevador ? '✅' : '❌'}</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Elevator</p>
            </div>
            <div style={{ padding: '16px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', textAlign: 'center', border: '1px solid var(--border)' }}>
              <p style={{ fontSize: '1.5rem', margin: '0 0 4px 0' }}>{estacion.accesibilidad?.rampa ? '✅' : '❌'}</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Ramp</p>
            </div>
          </div>

          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '48px', marginBottom: '16px' }}>Hours</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            {estacion.horarios?.inicio} — {estacion.horarios?.fin}
          </p>

          <div style={{ marginTop: '48px', textAlign: 'center' }}>
            <Link href={`/las-vegas/line/${lineaId}`}>
              <button style={{ padding: '12px 32px', backgroundColor: colorLinea, color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
                View {lineaId.charAt(0).toUpperCase() + lineaId.slice(1)} Line →
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
