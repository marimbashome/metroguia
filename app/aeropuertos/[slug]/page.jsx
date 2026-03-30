import { aeropuertos } from '@/data/aeropuertos'

export function generateStaticParams() {
  return aeropuertos.map(a => ({ slug: a.slug }))
}

export function generateMetadata({ params }) {
  const airport = aeropuertos.find(a => a.slug === params.slug)
  if (!airport) return { title: 'Aeropuerto no encontrado' }
  return {
    title: airport.seo_title,
    description: airport.meta_description,
    openGraph: {
      title: airport.seo_title,
      description: airport.meta_description,
      url: `https://metroguia.mx/aeropuertos/${airport.slug}/`,
      siteName: 'MetroGuia',
      locale: 'es_MX',
      type: 'website',
    },
    alternates: { canonical: `https://metroguia.mx/aeropuertos/${airport.slug}/` },
  }
}

export default function AeropuertoPage({ params }) {
  const airport = aeropuertos.find(a => a.slug === params.slug)
  if (!airport) return <div style={{ padding: '4rem 2rem', textAlign: 'center' }}><h1>Aeropuerto no encontrado</h1></div>

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Airport',
    name: airport.nombre,
    iataCode: airport.iata,
    url: `https://metroguia.mx/aeropuertos/${airport.slug}/`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: airport.ciudad,
      addressRegion: airport.estado,
      addressCountry: 'MX',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: airport.lat,
      longitude: airport.lng,
    },
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '1rem 1rem 0' }}>
        <nav style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
          <a href="/" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Inicio</a>
          {' → '}
          <a href="/aeropuertos/" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Aeropuertos</a>
          {' → '}
          <span style={{ color: 'var(--text)' }}>{airport.iata}</span>
        </nav>
      </div>

      {/* Hero */}
      <section style={{ padding: '2rem 1rem 2.5rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{
              fontSize: '0.85rem', fontWeight: 700, padding: '0.3rem 0.75rem',
              borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--primary-glow)',
              border: '1px solid var(--primary-border)', color: 'var(--primary)',
            }}>✈️ {airport.iata}</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{airport.ciudad}, {airport.estado}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
            {airport.nombre}
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '650px' }}>
            {airport.descripcion}
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Distancia al centro</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>{airport.distanciaCentro}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Código IATA</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>{airport.iata}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo llegar al centro */}
      <section style={{ padding: '2.5rem 1rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Cómo llegar al centro de {airport.ciudad}</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>
            Opciones de transporte desde el aeropuerto {airport.iata}
          </p>

          {/* Transport options */}
          {airport.comoLlegar.transporte.length > 0 && (
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary)' }}>🚇 Transporte público</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {airport.comoLlegar.transporte.map((t, i) => (
                  <div key={i} className="card" style={{ padding: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>{t.tipo}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>{t.tiempo}</span>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>{t.detalle}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Taxi & Uber */}
          <div className="grid-3" style={{ marginBottom: '1.5rem' }}>
            <div className="card" style={{ padding: '1rem' }}>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>🚕 Taxi</div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.25rem' }}>{airport.comoLlegar.taxi.estimado}</div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>{airport.comoLlegar.taxi.nota}</p>
            </div>
            <div className="card" style={{ padding: '1rem' }}>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>📱 Uber / DiDi</div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.25rem' }}>{airport.comoLlegar.uber.estimado}</div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>{airport.comoLlegar.uber.nota}</p>
            </div>
          </div>

          {/* Tips */}
          {(airport.comoLlegar?.tips || []).length > 0 && (
            <div style={{
              padding: '1rem 1.25rem', borderRadius: 'var(--radius)',
              backgroundColor: 'var(--primary-glow)', border: '1px solid var(--primary-border)',
            }}>
              <div style={{ fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>💡 Tips</div>
              {(airport.comoLlegar?.tips || []).map((tip, i) => (
                <p key={i} style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: i < airport.comoLlegar.tips.length - 1 ? '0 0 0.5rem' : 0, lineHeight: 1.5 }}>
                  • {tip}
                </p>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Conexiones de transporte */}
      {airport.conexiones.length > 0 && (
        <section style={{ padding: '2.5rem 1rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Conexiones de transporte</h2>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {airport.conexiones.map((c, i) => (
                <a key={i} href={c.slug ? `/estacion/${c.slug}/` : '#'} className="card" style={{
                  textDecoration: 'none', padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', flex: '1 1 280px',
                }}>
                  <div style={{
                    width: '2.5rem', height: '2.5rem', borderRadius: 'var(--radius)',
                    backgroundColor: 'var(--primary-glow)', border: '1px solid var(--primary-border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)',
                  }}>
                    L{c.linea}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)' }}>{c.nombre}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'capitalize' }}>{c.tipo} — Línea {c.linea}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other airports in the same region */}
      <section style={{ padding: '2.5rem 1rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Otros aeropuertos</h2>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {aeropuertos.filter(a => a.slug !== airport.slug).slice(0, 8).map(a => (
              <a key={a.slug} href={`/aeropuertos/${a.slug}/`} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.5rem 0.875rem', borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--surface)', border: '1px solid var(--border)',
                textDecoration: 'none', fontSize: '0.8rem', fontWeight: 500, color: 'var(--text-muted)',
              }}>
                <span style={{ fontWeight: 700 }}>{a.iata}</span> {a.ciudad}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
