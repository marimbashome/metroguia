import { estaciones } from '@/data/estaciones'

export function generateStaticParams() {
  return estaciones.map((e) => ({ slug: e.slug }))
}

export function generateMetadata({ params }) {
  const estacion = estaciones.find((e) => e.slug === params.slug)
  if (!estacion) return { title: 'Estación no encontrada' }
  return {
    title: estacion.seo_title,
    description: estacion.meta_description,
    openGraph: {
      title: estacion.seo_title,
      description: estacion.meta_description,
      url: `https://metroguia.mx/estacion/${estacion.slug}/`,
      siteName: 'MetroGuia',
      locale: 'es_MX',
      type: 'website',
    },
  }
}

export default function EstacionPage({ params }) {
  const estacion = estaciones.find((e) => e.slug === params.slug)
  if (!estacion) return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h1>Estación no encontrada</h1>
    </div>
  )

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: `Metro ${estacion.nombre} CDMX`,
    description: estacion.meta_description,
    url: `https://metroguia.mx/estacion/${estacion.slug}/`,
    isAccessibleForFree: true,
    publicAccess: true,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ciudad de México',
      addressRegion: estacion.alcaldia,
      addressCountry: 'MX',
    },
    containedInPlace: {
      '@type': 'CivicStructure',
      name: `Línea ${estacion.linea} del Metro CDMX`,
      url: `https://metroguia.mx/linea/${estacion.linea}/`,
    },
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero" style={{ backgroundColor: 'var(--metro-dark)' }}>
        <div className="container">
          <h1>{estacion.nombre}</h1>
          <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>Línea {estacion.linea}</p>
          <p style={{ fontSize: '0.875rem', opacity: 0.7 }}>{estacion.alcaldia}</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', lineHeight: 1.8 }}>{estacion.intro}</p>

          {estacion.pois && estacion.pois.length > 0 && (
            <>
              <h2 style={{ marginBottom: '1.5rem' }}>Lugares cercanos</h2>
              <div style={{ marginBottom: '3rem' }}>
                {estacion.pois.map((poi, idx) => (
                  <div key={idx} className="lugar-card" style={{ marginBottom: '1rem' }}>
                    <h4 style={{ marginBottom: '0.5rem' }}>{poi.nombre}</h4>
                    <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.25rem' }}>{poi.tipo}</p>
                    <p style={{ fontSize: '0.875rem', color: '#999' }}>⏱ {poi.distancia}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {estacion.transferencias && estacion.transferencias.length > 0 && (
            <>
              <h2 style={{ marginBottom: '1.5rem' }}>Transferencias</h2>
              <div style={{ marginBottom: '3rem', backgroundColor: 'var(--metro-gray)', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
                <p>Esta estación conecta con:</p>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                  {estacion.transferencias.map((trans, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem' }}>
                      <a href={`/linea/${trans}/`} style={{ color: 'var(--metro-orange)', fontWeight: 600 }}>
                        ✓ Línea {trans}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          <h2 style={{ marginBottom: '1rem' }}>Historia del ícono</h2>
          <p style={{ marginBottom: '2rem' }}>{estacion.historia_icono}</p>

          <h2 style={{ marginBottom: '1.5rem' }}>Tips para turistas</h2>
          <div style={{ backgroundColor: 'var(--metro-gray)', padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '2rem' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {estacion.tips.map((tip, idx) => (
                <li key={idx} style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>✓</span>{tip}
                </li>
              ))}
            </ul>
          </div>

          <h2 style={{ marginBottom: '1rem' }}>Mejor horario para visitar</h2>
          <div style={{ backgroundColor: '#f0f9ff', padding: '1.5rem', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--metro-orange)', marginBottom: '2rem' }}>
            <p>{estacion.mejor_horario}</p>
          </div>

          <h2 style={{ marginBottom: '1rem' }}>Relevancia para el Mundial 2026</h2>
          <p style={{ marginBottom: '2rem' }}>{estacion.mundial_relevancia}</p>
        </div>
      </section>

      <section className="section-tips">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>¿Buscas hospedaje?</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
            {estacion.nombre} es una ubicación estratégica para visitantes del Mundial 2026
          </p>
          <a href="/hospedaje/" className="cta-btn">Ver opciones de hospedaje →</a>
        </div>
      </section>

      <section style={{ padding: '3rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="btn-group">
            <a href={`/linea/${estacion.linea}/`} className="cta-btn">
              Ver Línea {estacion.linea} completa →
            </a>
            <a href="/lineas/" className="cta-btn" style={{ backgroundColor: 'var(--metro-gray)', color: 'var(--text)' }}>
              Todas las líneas
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
