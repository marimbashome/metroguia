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
    title: zona.seo_title || `${zona.nombre} — Guía Completa | Zonas Arqueológicas México`,
    description: zona.meta_description || `Guía completa de ${zona.nombre} en ${zona.estado}: historia, qué ver, horarios, costos, cómo llegar y consejos prácticos.`,
    openGraph: {
      title: zona.seo_title || `${zona.nombre} — Guía Completa | Zonas Arqueológicas México`,
      description: zona.meta_description || `Guía completa de ${zona.nombre} en ${zona.estado}: historia, qué ver, horarios, costos y cómo llegar.`,
      type: 'article',
      url: `https://metroguia.mx/turismo/zonas-arqueologicas/${zona.slug}`,
    },
    alternates: { canonical: `https://metroguia.mx/turismo/zonas-arqueologicas/${zona.slug}` },
  };
}

// Map of slugs that have deep guides on marimbashome.com/blog
const MARIMBAS_BLOG_GUIDES = {
  'teotihuacan': 'teotihuacan',
  'chichen-itza': 'chichen-itza',
  'palenque': 'palenque',
  'tulum': 'tulum',
  'tonina': 'tonina',
  'monte-alban': 'monte-alban',
  'uxmal': 'uxmal',
  'calakmul': 'calakmul',
  'yaxchilan': 'yaxchilan',
  'el-tajin': 'el-tajin',
  'mitla': 'mitla',
  'cholula': 'cholula',
  'templo-mayor': 'templo-mayor',
  'coba': 'coba',
  'xochicalco': 'xochicalco',
  'bonampak': 'selva-lacandona-bonampak',
};

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
  const marimbasBlogSlug = MARIMBAS_BLOG_GUIDES[zona.slug];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${zona.nombre} — Guía Completa`,
    description: zona.descripcion,
    url: `https://metroguia.mx/turismo/zonas-arqueologicas/${zona.slug}`,
    publisher: { '@type': 'Organization', name: 'MetroGuia.mx', url: 'https://metroguia.mx' },
    about: {
      '@type': 'TouristAttraction',
      name: zona.nombre,
      address: { '@type': 'PostalAddress', addressRegion: zona.estado, addressCountry: 'MX' },
      geo: { '@type': 'GeoCoordinates', latitude: zona.coordenadas.lat, longitude: zona.coordenadas.lng },
      isAccessibleForFree: zona.costo.nacional === 0,
      publicAccess: true,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Turismo', item: 'https://metroguia.mx/turismo' },
      { '@type': 'ListItem', position: 3, name: 'Zonas Arqueológicas', item: 'https://metroguia.mx/turismo/zonas-arqueologicas' },
      { '@type': 'ListItem', position: 4, name: zona.nombre, item: `https://metroguia.mx/turismo/zonas-arqueologicas/${zona.slug}` },
    ],
  };

  const sectionStyle = { maxWidth: '1000px', margin: '0 auto', padding: '2.5rem 1rem', borderBottom: '1px solid var(--border)' };
  const h2Style = { fontSize: '1.35rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text)' };
  const cardStyle = { padding: '1.25rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' };
  const proseStyle = { fontSize: '1rem', lineHeight: 1.75, color: 'var(--text-muted)' };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        {/* Breadcrumb */}
        <nav style={{ maxWidth: '1000px', margin: '0 auto', padding: '1.5rem 1rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Inicio</Link>
          <span style={{ margin: '0 0.5rem' }}>→</span>
          <Link href="/turismo" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Turismo</Link>
          <span style={{ margin: '0 0.5rem' }}>→</span>
          <Link href="/turismo/zonas-arqueologicas" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Zonas Arqueológicas</Link>
          <span style={{ margin: '0 0.5rem' }}>→</span>
          <span style={{ color: 'var(--text)' }}>{zona.nombre}</span>
        </nav>

        {/* Hero */}
        <section style={sectionStyle}>
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
              <span style={{ backgroundColor: '#F5A623', borderRadius: 'var(--radius-full)', padding: '0.5rem 1rem', fontSize: '0.875rem', color: '#0A0A0F', fontWeight: 600 }}>🏛️ Patrimonio UNESCO</span>
            )}
            {zona.imperdible && (
              <span style={{ backgroundColor: 'var(--primary)', borderRadius: 'var(--radius-full)', padding: '0.5rem 1rem', fontSize: '0.875rem', color: '#0A0A0F', fontWeight: 600 }}>⭐ Imperdible</span>
            )}
          </div>

          <h1 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1.25rem', color: 'var(--text)' }}>{zona.nombre}</h1>
          <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '2rem' }}>{zona.descripcion}</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {zona.municipio && (
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Municipio</p>
                <p style={{ fontSize: '1rem', color: 'var(--text)', fontWeight: 500 }}>{zona.municipio}</p>
              </div>
            )}
            {zona.region && (
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Región</p>
                <p style={{ fontSize: '1rem', color: 'var(--text)', fontWeight: 500 }}>{zona.region}</p>
              </div>
            )}
            {zona.coordenadas && typeof zona.coordenadas.lat === 'number' && typeof zona.coordenadas.lng === 'number' && (
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Coordenadas</p>
                <p style={{ fontSize: '1rem', color: 'var(--text)', fontWeight: 500 }}>{Number(zona.coordenadas.lat).toFixed(4)}, {Number(zona.coordenadas.lng).toFixed(4)}</p>
              </div>
            )}
          </div>
        </section>

        {/* Contenido profundo — secciones editoriales */}
        {zona.contenido && zona.contenido.length > 0 && zona.contenido.map((seccion, idx) => (
          <section key={idx} style={sectionStyle}>
            <h2 style={h2Style}>{seccion.titulo}</h2>
            <div style={proseStyle} dangerouslySetInnerHTML={{ __html: seccion.texto }} />
          </section>
        ))}

        {/* Top Atracciones */}
        {zona.atractivos && zona.atractivos.length > 0 && (
          <section style={sectionStyle}>
            <h2 style={h2Style}>Principales atracciones</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {zona.atractivos.map((atractivo, idx) => (
                <div key={idx} style={{ ...cardStyle, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1.25rem' }}>🏛️</span>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)', margin: 0 }}>{atractivo}</h3>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Horario y Costos */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>Horario y costos</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {zona.horario && (
              <div style={cardStyle}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text)' }}>🕐 Horario</h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{zona.horario}</p>
              </div>
            )}
            {zona.costo && (
              <div style={cardStyle}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text)' }}>💰 Costos</h3>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  {zona.costo.nacional !== undefined && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Nacionales</span>
                      <span style={{ color: 'var(--text)', fontWeight: 600 }}>{zona.costo.nacional === 0 ? 'Gratis' : `$${zona.costo.nacional} MXN`}</span>
                    </div>
                  )}
                  {zona.costo.extranjero !== undefined && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Extranjeros</span>
                      <span style={{ color: 'var(--text)', fontWeight: 600 }}>${zona.costo.extranjero} MXN</span>
                    </div>
                  )}
                  {zona.costo.nota && (
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border)' }}>
                      {zona.costo.nota}
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
        <section style={sectionStyle}>
          <h2 style={h2Style}>Cómo llegar</h2>
          {zona.comoLlegar && (
            <p style={{ ...proseStyle, marginBottom: '1.5rem' }}>{zona.comoLlegar}</p>
          )}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {zona.aeropuertoCercano && (
              <div style={cardStyle}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text)' }}>✈️ Aeropuerto cercano</h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>{zona.aeropuertoCercano}</p>
              </div>
            )}
            {zona.terminalBus && (
              <div style={cardStyle}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text)' }}>🚌 Terminal de autobús</h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>{zona.terminalBus}</p>
              </div>
            )}
            {zona.conexionTransporte && (
              <div style={{ ...cardStyle, border: '1px solid var(--primary)', background: 'linear-gradient(135deg, var(--surface), rgba(0,210,150,0.05))' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--primary)' }}>🚇 Conexión MetroGuia</h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>{zona.conexionTransporte}</p>
              </div>
            )}
          </div>
        </section>

        {/* Cross-link a Marimbas Blog */}
        {marimbasBlogSlug && (
          <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 1rem', borderBottom: '1px solid var(--border)' }}>
            <a
              href={`https://book.marimbashome.com/es/guides/${marimbasBlogSlug}`}
              target="_blank"
              rel="noopener"
              style={{
                display: 'block',
                padding: '1.5rem',
                background: 'linear-gradient(135deg, rgba(0,210,150,0.08), rgba(92,133,255,0.08))',
                border: '1px solid var(--primary)',
                borderRadius: 'var(--radius)',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 600 }}>
                📖 Guía de viaje completa
              </p>
              <p style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>
                {zona.nombre}: Historia, itinerarios y consejos para tu visita
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Lee nuestra guía detallada con itinerarios paso a paso, contexto histórico y recomendaciones de hospedaje →
              </p>
            </a>
          </section>
        )}

        {/* Mapa */}
        {zona.coordenadas && typeof zona.coordenadas.lat === 'number' && (
          <section style={sectionStyle}>
            <h2 style={h2Style}>Ubicación</h2>
            <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${zona.coordenadas.lat},${zona.coordenadas.lng}&zoom=14&maptype=satellite`}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mapa de ${zona.nombre}`}
              />
            </div>
          </section>
        )}

        {/* Otras Zonas en Estado */}
        {otrasZonasEstado.length > 0 && (
          <section style={sectionStyle}>
            <h2 style={h2Style}>Otras zonas arqueológicas en {zona.estado}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {otrasZonasEstado.slice(0, 8).map((z) => (
                <Link key={z.slug} href={`/turismo/zonas-arqueologicas/${z.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-full)', padding: '0.6rem 1.1rem', fontSize: '0.875rem', color: 'var(--text)', border: '1px solid var(--border)', transition: 'all 0.2s ease' }}>
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
            <h2 style={h2Style}>Explora más zonas arqueológicas</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {zonasImperdibles.map((z) => (
                <Link key={z.slug} href={`/turismo/zonas-arqueologicas/${z.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ backgroundColor: 'var(--primary)', borderRadius: 'var(--radius-full)', padding: '0.6rem 1.1rem', fontSize: '0.875rem', color: '#0A0A0F', fontWeight: 500, transition: 'all 0.2s ease' }}>
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
