import { lineasChihuahua } from '@/data/chihuahua/lineas-detalle';
import { estacionesChihuahua } from '@/data/chihuahua/estaciones';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';

export async function generateStaticParams() {
  return lineasChihuahua.map((linea) => ({ id: linea.id }));
}

export async function generateMetadata({ params }) {
  const linea = lineasChihuahua.find((l) => l.id === params.id);
  if (!linea) return { title: 'Line not found' };
  const seoTitle = linea.seo_title || `${linea.nombre || linea.h1} — Chihuahua Transit | MetroGuia`;
  const metaDesc = linea.meta_description || linea.descripcion;
  return {
    title: seoTitle,
    description: metaDesc,
    openGraph: {
      title: seoTitle,
      description: metaDesc,
      url: `https://metroguia.mx/chihuahua/line/${linea.id}`,
      type: 'website',
    },
    robots: { index: true, follow: true },
  };
}

export default function LineChihuahuaPage({ params }) {
  const linea = lineasChihuahua.find((l) => l.id === params.id);
  if (!linea) {
    return (
      <main style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h1>Line not found</h1>
        <p style={{ marginTop: '20px' }}>
          <Link href="/chihuahua" style={{ color: '#059669', textDecoration: 'underline' }}>Back to Chihuahua</Link>
        </p>
      </main>
    );
  }

  const estacionesLinea = estacionesChihuahua.filter((e) =>
    Array.isArray(e.linea) ? e.linea.includes(linea.id) : e.linea === linea.id
  );

  const containerStyles = { maxWidth: '1200px', margin: '0 auto', padding: '0 20px' };
  const heroStyles = { background: `linear-gradient(135deg, ${linea.color} 0%, ${linea.color}dd 100%)`, color: '#ffffff', padding: '50px 20px', textAlign: 'center' };
  const sectionStyles = { padding: '40px 0', borderBottom: '1px solid #e5e7eb' };
  const sectionTitleStyles = { fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#1f2937' };
  const infoBoxStyles = { backgroundColor: `${linea.color}15`, borderLeft: `4px solid ${linea.color}`, padding: '20px', borderRadius: '4px', marginBottom: '30px' };
  const estacionCardStyles = { backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '6px', padding: '15px', marginBottom: '15px', paddingLeft: '50px', position: 'relative' };
  const estacionNumberStyles = { position: 'absolute', left: '15px', top: '15px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: linea.color, color: '#ffffff', borderRadius: '50%', fontWeight: 'bold', fontSize: '12px' };
  const rutaParadaStyles = { display: 'flex', alignItems: 'flex-start', marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #e5e7eb' };
  const buttonStyles = { display: 'inline-block', backgroundColor: linea.color, color: '#ffffff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', marginRight: '10px', marginBottom: '10px' };
  const gridStyles = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '20px' };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Chihuahua', item: 'https://metroguia.mx/chihuahua/' },
      { '@type': 'ListItem', position: 3, name: linea.h1 || linea.nombre, item: `https://metroguia.mx/chihuahua/line/${linea.id}/` }
    ]
  };

  return (
    <main style={{ backgroundColor: '#ffffff' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section style={heroStyles}>
        <div style={containerStyles}>
          <h1 style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '10px' }}>{linea.h1 || linea.nombre}</h1>
          <p style={{ fontSize: '18px', opacity: '0.95', marginBottom: '15px' }}>From {linea.inicio} to {linea.fin}</p>
          <p style={{ fontSize: '14px', opacity: '0.9' }}>{linea.total || estacionesLinea.length} stations{linea.municipios ? ` • ${linea.municipios.join(', ')}` : ''}</p>
        </div>
      </section>

      <section style={{ ...containerStyles, ...sectionStyles, paddingTop: '40px' }}>
        <AdBannerLazy adSlot="4434764790" format="auto" />
        <h2 style={sectionTitleStyles}>Description</h2>
        <div style={infoBoxStyles}>
          <p style={{ fontSize: '16px', color: '#374151', lineHeight: '1.7', margin: 0 }}>{linea.descripcion}</p>
        </div>
      </section>

      {linea.ruta_1_dia && (
        <section style={{ ...containerStyles, ...sectionStyles, paddingTop: '40px' }}>
          <h2 style={sectionTitleStyles}>{linea.ruta_1_dia.titulo}</h2>
          <div style={{ backgroundColor: '#f9fafb', padding: '30px', borderRadius: '8px' }}>
            {linea.ruta_1_dia.paradas.map((parada, idx) => {
              const estacionInfo = estacionesChihuahua.find((e) => e.slug === parada.estacion);
              return (
                <div key={idx} style={rutaParadaStyles}>
                  <div style={{ minWidth: '120px', fontWeight: 'bold', color: linea.color, fontSize: '14px' }}>{parada.actividad.split(' - ')[1] || 'Stop'}</div>
                  <div style={{ flex: 1, color: '#374151', fontSize: '15px', lineHeight: '1.5' }}>
                    <Link href={`/chihuahua/station/${parada.estacion}`} style={{ color: linea.color, fontWeight: 'bold', textDecoration: 'underline' }}>
                      {estacionInfo?.nombre || parada.estacion}
                    </Link>
                    <p style={{ margin: '5px 0 0 0', color: '#6b7280', fontSize: '14px' }}>{parada.actividad.split(' - ')[0]}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {linea.estaciones_turisticas && linea.estaciones_turisticas.length > 0 && (
        <section style={{ ...containerStyles, ...sectionStyles, paddingTop: '40px' }}>
          <h2 style={sectionTitleStyles}>Tourist Stations</h2>
          <div style={gridStyles}>
            {linea.estaciones_turisticas.map((slugT) => {
              const est = estacionesChihuahua.find((e) => e.slug === slugT);
              if (!est) return null;
              return (
                <Link key={est.slug} href={`/chihuahua/station/${est.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ backgroundColor: '#ffffff', border: `2px solid ${linea.color}`, borderRadius: '8px', padding: '20px', height: '100%', cursor: 'pointer' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: linea.color, marginBottom: '10px' }}>{est.nombre}</h3>
                    <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '10px' }}>{est.municipio || ''}</p>
                    <p style={{ fontSize: '15px', color: '#374151', lineHeight: '1.5' }}>{est.intro || est.descripcion_turistica || ''}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      <section style={{ ...containerStyles, ...sectionStyles, paddingTop: '40px' }}>
        <AdBannerLazyInArticle adSlot="1082410395" />
        <h2 style={sectionTitleStyles}>All Stations</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
          {estacionesLinea.map((est, idx) => (
            <Link key={est.slug} href={`/chihuahua/station/${est.slug}`} style={{ textDecoration: 'none' }}>
              <div style={estacionCardStyles}>
                <div style={estacionNumberStyles}>{idx + 1}</div>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: linea.color, marginBottom: '5px' }}>{est.nombre}</h3>
                <p style={{ fontSize: '13px', color: '#6b7280', margin: 0 }}>{est.municipio ? `${est.municipio} • ` : ''}{est.tipo_zona || ''}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ ...containerStyles, ...sectionStyles, paddingTop: '40px' }}>
        <h2 style={sectionTitleStyles}>Useful Information</h2>
        <div style={gridStyles}>
          {[
            { title: 'Schedule', desc: linea.horario || 'Daily service. Check local schedules for specific hours.' },
            { title: 'Fare', desc: linea.tarifa || 'Standard local fare applies.' },
            { title: 'Accessibility', desc: 'Universal design at most stations. Ramps and inclusive signage.' },
          ].map((info, idx) => (
            <div key={idx} style={{ backgroundColor: '#f9fafb', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: linea.color, marginBottom: '10px' }}>{info.title}</h3>
              <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6', margin: 0 }}>{info.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ ...containerStyles, paddingTop: '40px', paddingBottom: '40px', textAlign: 'center' }}>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/chihuahua" style={buttonStyles}>Back to Chihuahua</Link>
          {lineasChihuahua.filter(l => l.id !== linea.id).map(otherLine => (
            <Link key={otherLine.id} href={`/chihuahua/line/${otherLine.id}`} style={{ ...buttonStyles, backgroundColor: otherLine.color }}>
              {otherLine.h1 || otherLine.nombre}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
