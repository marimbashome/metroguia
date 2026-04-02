import { zonasArqueologicas } from '@/data/turismo/zonas-arqueologicas';
import Link from 'next/link';

export function generateStaticParams() {
  return zonasArqueologicas.map((zona) => ({
    slug: zona.slug,
  }));
}

export function generateMetadata({ params }) {
  const zona = zonasArqueologicas.find((z) => z.slug === params.slug);
  if (!zona) {
    return { title: 'Zona arqueológica no encontrada', description: 'La zona arqueológica que buscas no existe.' };
  }
  return {
    title: zona.seo_title || `${zona.nombre} - Zonas Arqueológicas México`,
    description: zona.meta_description || `Explora ${zona.nombre}, una zona arqueológica en ${zona.estado}. Horarios, costos, cómo llegar y más información.`,
    openGraph: {
      title: zona.seo_title || `${zona.nombre} - Zonas Arqueológicas México`,
      description: zona.meta_description || `Explora ${zona.nombre}, una zona arqueológica en ${zona.estado}.`,
      type: 'website',
      url: `https://metroguia.mx/turismo/zonas-arqueologicas/${zona.slug}`,
    },
    alternates: { canonical: `https://metroguia.mx/turismo/zonas-arqueologicas/${zona.slug}` },
  };
}

export default function ZonaArqueologicaDetail({ params }) {
  const zona = zonasArqueologicas.find((z) => z.slug === params.slug);
  if (!zona) {
    return (
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2.5rem 1rem' }}>
        <h1 style={{ color: 'var(--text)' }}>Zona arqueológica no encontrada</h1>
      </div>
    );
  }

  const otrasZonasEstado = zonasArqueologicas.filter((z) => z.estado === zona.estado && z.slug !== zona.slug);
  const zonasImperdibles = zonasArqueologicas.filter((z) => z.imperdible && z.slug !== zona.slug).sort(() => 0.5 - Math.random()).slice(0, 8);

  const touristSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: zona.nombre,
    description: zona.descripcion,
    url: `https://metroguia.mx/turismo/zonas-arqueologicas/${zona.slug}`,
    address: { '@type': 'PostalAddress', addressRegion: zona.estado, addressCountry: 'MX' },
    geo: { '@type': 'GeoCoordinates', latitude: zona.coordenadas.lat, longitude: zona.coordenadas.lng },
    isAccessibleForFree: zona.costo.nacional === 0,
    publicAccess: true,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Zonas Arqueológicas', item: 'https://metroguia.mx/turismo/zonas-arqueologicas' },
      { '@type': 'ListItem', position: 3, name: zona.nombre, item: `https://metroguia.mx/turismo/zonas-arqueologicas/${zona.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(touristSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        {/* Breadcrumb */}
        <nav style={{ maxWidth: '1000px', margin: '0 auto', padding: '1.5rem 1rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Inicio</Link>
          <span style={{ margin: '0 0.5rem' }}>→</span>
          <Link href="/turismo/zonas-arqueologicas" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Zonas Arqueológicas</Link>
          <span style={{ margin: '0 0.5rem' }}>→</span>
          <span style={{ color: 'var(--text)' }}>{zona.nombre}</span>
        </nav>

        {/* Hero */}
        <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '2.5rem 1rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
            {zona.civilizacion && (
              <span style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-full)', padding: '0.5rem 1rem', fontSize: '0.875rem', color: 'var(--text)', border: '1px solid var(--border)' }}>{zona.civilizacion}</span>
            )}
            {zona.periodo && (
              <span style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-full)', padding: '0.5rem 1rem', fontSize: '0.875rem', color: 'var(--text)', border: '1px solid var(--border)' }}>{zona.periodo}</span>
            )}
            {zona.estado && (
              <span style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-full)', padding: '0.5rem 1rem', fontSize: '0.875rem', color: 'var(--text)', border: '1px solid var(--border)' }}>{zona.estado}</span>
            )}
            {zona.unesco && (
              <span style={{ backgroundColor: '#F5A623', borderRadius: 'var(--radius-full)', padding: '0.5rem 1rem', fontSize: '0.875rem', color: '#0A0A0F', fontWeight: 600 }}>Patrimonio UNESCO</span>
            )}
            {zona.imperdible && (
              <span style={{ backgroundColor: 'var(--primary)', borderRadius: 'var(--radius-full)', padding: '0.5rem 1rem', fontSize: '0.875rem', color: '#0A0A0F', fontWeight: 600 }}>Imperdible</span>
            )}
          </div>

          <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '1rem', color: 'var(--text)' }}>{zona.nombre}</h1>
          <p style={{ fontSize: '1rem', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '2rem' }}>{zona.descripcion}</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {zona.municipio && (
              <div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)' }}>Municipio</p>
                <p style={{ fontSize: '1rem', color: 'var(--text)' }}>{zona.municipio}</p>
              </div>
            )}
            {zona.region && (
              <div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)' }}>Región</p>
                <p style={{ fontSize: '1rem', color: 'var(--text)' }}>{zona.region}</p>
              </div>
            )}
            {zona.coordenadas && typeof zona.coordenadas.lat === 'number' && typeof zona.coordenadas.lng === 'number' && (
              <div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)' }}>Coordenadas</p>
                <p style={{ fontSize: '1rem', color: 'var(--text)' }}>{Number(zona.coordenadas.lat).toFixed(4)}, {Number(zona.coordenadas.lng).toFixed(4)}</p>
              </div>
            )}
          </div>
        </section>

        {/* Top Atracciones */}
        {zona.atractivos && zona.atractivos.length > 0 && (
          <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '2.5rem 1rem', borderBottom: '1px solid var(--border)' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '2rem', color: 'var(--text)' }}>Top atracciones</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {zona.atractivos.map((atractivo, idx) => (
                <div key={idx} className="card" style={{ padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)' }}>{atractivo}</h3>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Horario y Costos */}
        <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '2.5rem 1rem', borderBottom: '1px solid var(--border)' }}>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '2rem', color: 'var(--text)' }}>Horario y costos</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {zona.horario && (
              <div className="card" style={{ padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text)' }}>Horario</h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{zona.horario}</p>
              </div>
            )}
            {zona.costo && (
              <div className="card" style={{ padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text)' }}>Costos</h3>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  {zona.costo.nacional !== undefined && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Nacionales</span>
                      <span style={{ color: 'var(--text)', fontWeight: 600 }}>{zona.costo.nacional === 0 ? 'Gratis' : `$${zona.costo.nacional}`}</span>
                    </div>
                  )}
                  {zona.costo.extranjero !== undefined && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Extranjeros</span>
                      <span style={{ color: 'var(--text)', fontWeight: 600 }}>${zona.costo.extranjero}</span>
                    </div>
                  )}
                  {zona.costo.nota && (
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border)' }}>
                      <strong>Nota:</strong> {zona.costo.nota}
                    </p>
                  )}
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--primary)', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border)' }}>
                  Domingos gratis para mexicanos y residentes
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Cómo Llegar */}
        <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '2.5rem 1rem', borderBottom: '1px solid var(--border)' }}>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '2rem', color: 'var(--text)' }}>Cómo llegar</h2>
          {zona.comoLlegar && (
            <p style={{ fontSize: '1rem', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '2rem' }}>{zona.comoLlegar}</p>
          )}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {zona.aeropuertoCercano && (
              <div className="card" style={{ padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text)' }}>Aeropuerto cercano</h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>{zona.aeropuertoCercano}</p>
              </div>
            )}
            {zona.terminalBus && (
              <div className="card" style={{ padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text)' }}>Terminal de autobús</h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>{zona.terminalBus}</p>
              </div>
            )}
            {zona.conexionTransporte && (
              <div className="card" style={{ padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--primary-border)' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--primary)' }}>Conexión de transporte</h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>{zona.conexionTransporte}</p>
              </div>
            )}
          </div>
        </section>

        {/* Otras Zonas en Estado */}
        {otrasZonasEstado.length > 0 && (
          <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '2.5rem 1rem', borderBottom: '1px solid var(--border)' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '2rem', color: 'var(--text)' }}>Otras zonas en {zona.estado}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {otrasZonasEstado.slice(0, 6).map((z) => (
                <Link key={z.slug} href={`/turismo/zonas-arqueologicas/${z.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-full)', padding: '0.75rem 1.25rem', fontSize: '0.875rem', color: 'var(--text)', border: '1px solid var(--border)', transition: 'all 0.2s ease' }}>
                    {z.nombre}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Zonas Imperdibles */}
        {zonasImperdibles.length > 0 && (
          <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '2.5rem 1rem' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '2rem', color: 'var(--text)' }}>Explora más zonas</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {zonasImperdibles.map((z) => (
                <Link key={z.slug} href={`/turismo/zonas-arqueologicas/${z.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ backgroundColor: 'var(--primary)', borderRadius: 'var(--radius-full)', padding: '0.75rem 1.25rem', fontSize: '0.875rem', color: '#0A0A0F', fontWeight: 500, transition: 'all 0.2s ease' }}>
                    {z.nombre}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
