import { lineasDetalle } from '@/data/lineas-detalle'
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy'

export function generateStaticParams() {
  return Object.keys(lineasDetalle).map((id) => ({ id }))
}

export function generateMetadata({ params }) {
  const linea = lineasDetalle[params.id]
  if (!linea) return { title: 'Línea no encontrada' }

  // Enhanced metadata for Línea B with station count, terminals, and key destinations
  let title = linea.seo_title
  let description = linea.meta_description

  if (params.id === 'B') {
    title = `Línea B Metro CDMX - ${linea.total} estaciones de ${linea.inicio} a ${linea.fin} | Guía turística`

    // Build description with key destinations and tourist highlights
    const keyDestinations = linea.estaciones_turisticas && linea.estaciones_turisticas.length > 0
      ? `Estaciones destacadas: ${linea.estaciones_turisticas.map(slug => {
          const station = linea.estaciones.find(e => e.slug === slug)
          return station ? station.nombre : slug
        }).join(', ')}. `
      : ''

    const routeInfo = `Ruta completa de ${linea.inicio} (terminal) hasta ${linea.fin} (terminal). Conecta barrios culturales con zonas residenciales. `

    description = `${linea.descripcion} ${keyDestinations}${routeInfo}Guía completa con ${linea.total} estaciones, transbordos, horarios y tips de viaje.`
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://metroguia.mx/linea/${linea.id}/`,
      siteName: 'MetroGuia',
      locale: 'es_MX',
      type: 'website',
    },
  }
}

export default function LineaPage({ params }) {
  const linea = lineasDetalle[params.id]
  if (!linea) return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h1>Línea no encontrada</h1>
    </div>
  )

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: linea.h1,
    description: linea.meta_description,
    url: `https://metroguia.mx/linea/${linea.id}/`,
    isAccessibleForFree: true,
    publicAccess: true,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ciudad de México',
      addressCountry: 'MX',
    },
    amenityFeature: linea.estaciones.map((est) => ({
      '@type': 'LocationFeatureSpecification',
      name: est.nombre,
      value: true,
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'MetroGuia',
        item: 'https://metroguia.mx'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'CDMX',
        item: 'https://metroguia.mx/cdmx/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `Línea ${linea.id}`,
        item: `https://metroguia.mx/linea/${linea.id}/`
      }
    ]
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="hero" style={{ backgroundColor: linea.color }}>
        <div className="container">
          <h1>{linea.h1}</h1>
          <p style={{ fontSize: '1.125rem' }}>
            Desde {linea.inicio} hasta {linea.fin} — {linea.total} estaciones
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginBottom: '1rem' }}>Sobre esta línea</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>{linea.descripcion}</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            <div>
              <h4 style={{ color: linea.color }}>Total de estaciones</h4>
              <p style={{ fontSize: '2rem', fontWeight: 700 }}>{linea.total}</p>
            </div>
            <div>
              <h4 style={{ color: linea.color }}>Inicio</h4>
              <p style={{ fontWeight: 600 }}>{linea.inicio}</p>
            </div>
            <div>
              <h4 style={{ color: linea.color }}>Final</h4>
              <p style={{ fontWeight: 600 }}>{linea.fin}</p>
            </div>
            <div>
              <h4 style={{ color: linea.color }}>Zonas</h4>
              <p style={{ fontSize: '0.875rem' }}>{linea.zonas.join(', ')}</p>
            </div>
          </div>

          <AdBannerLazy slot="4434764790" format="auto" />

          <h2 style={{ marginBottom: '1.5rem' }}>Estaciones</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', marginBottom: '3rem' }}>
            {linea.estaciones.map((est) => (
              <a
                key={est.slug}
                href={`/estacion/${est.slug}/`}
                style={{
                  padding: '0.75rem 1rem',
                  border: `2px solid ${linea.color}`,
                  borderRadius: 'var(--radius)',
                  textDecoration: 'none',
                  color: 'var(--text)',
                  textAlign: 'center',
                  fontSize: '0.9rem',
                  transition: 'all 0.2s ease',
                }}
              >
                {est.nombre}
              </a>
            ))}
          </div>

          <AdBannerLazyInArticle slot="1082410395" />

          {linea.ruta_1_dia && linea.ruta_1_dia.paradas.length > 0 && (
            <>
              <h2 style={{ marginBottom: '1.5rem' }}>{linea.ruta_1_dia.titulo}</h2>
              <div style={{ backgroundColor: 'var(--metro-gray)', padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '2rem' }}>
                {linea.ruta_1_dia.paradas.map((parada, idx) => (
                  <div key={idx} style={{ marginBottom: idx < linea.ruta_1_dia.paradas.length - 1 ? '2rem' : 0 }}>
                    <h4 style={{ color: linea.color, marginBottom: '0.5rem' }}>
                      {idx + 1}. {parada.estacion}
                    </h4>
                    <p>{parada.actividad}</p>
                    <p style={{ fontSize: '0.875rem', color: '#666' }}>⏱ {parada.duracion}</p>
                    {idx < linea.ruta_1_dia.paradas.length - 1 && (
                      <div style={{ margin: '1rem 0', textAlign: 'center', color: linea.color, fontSize: '1.5rem' }}>↓</div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--metro-dark)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <p style={{ marginBottom: '1.5rem', fontSize: '1.125rem' }}>
            ¿Necesitas llegar al Estadio Azteca para el Mundial 2026?
          </p>
          <a href="/mundial-2026/" className="cta-btn">Ver guía del Mundial →</a>
        </div>
      </section>
    </div>
  )
}
