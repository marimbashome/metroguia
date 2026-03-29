import { zonas } from '@/data/zonas'
import { estaciones } from '@/data/estaciones'
import { lineasDetalle } from '@/data/lineas-detalle'
import { rutasPopulares } from '@/data/rutas-populares'
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy'

export function generateStaticParams() {
  return zonas.map((z) => ({ slug: z.slug }))
}

export function generateMetadata({ params }) {
  const zona = zonas.find((z) => z.slug === params.slug)
  if (!zona) return { title: 'Zona no encontrada' }
  return {
    title: zona.seo_title,
    description: zona.meta_description,
    openGraph: {
      title: zona.seo_title,
      description: zona.meta_description,
      url: `https://metroguia.mx/zona/${zona.slug}/`,
      siteName: 'MetroGuia',
      locale: 'es_MX',
      type: 'website',
    },
  }
}

// Helper: obtener color de línea
function getLineColor(lineId) {
  const colorMap = {
    '1': '#E91E8C',
    '2': '#0057A8',
    '3': '#6B7A2A',
    '4': '#C1272D',
    '5': '#F2B21A',
    '6': '#CC0000',
    '7': '#F97316',
    '8': '#8B572A',
    '9': '#6B4EA8',
    'A': '#FF6B1A',
    'B': '#FF9900',
    '12': '#00A651',
  }
  return colorMap[lineId] || '#999999'
}

export default function ZonaPage({ params }) {
  const zona = zonas.find((z) => z.slug === params.slug)
  if (!zona) return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h1>Zona no encontrada</h1>
      <p><a href="/zona/">Volver a zonas</a></p>
    </div>
  )

  // Obtener datos de estaciones cercanas
  const estacionesCercanas = zona.estaciones
    .map(slug => estaciones.find(e => e.slug === slug))
    .filter(Boolean)

  // Obtener datos de líneas
  const lineasZona = zona.lineas
    .map(id => Object.values(lineasDetalle).find(l => l.id === id))
    .filter(Boolean)

  // Obtener rutas que van A estaciones en esta zona
  const rutasAZona = rutasPopulares.filter(ruta =>
    zona.estaciones.includes(ruta.destino)
  ).slice(0, 20) // Limitar a top 20 para no saturar la página

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'HowTo'],
    name: `${zona.nombre} - CDMX`,
    description: zona.meta_description,
    url: `https://metroguia.mx/zona/${zona.slug}/`,
    isAccessibleForFree: true,
    publicAccess: true,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ciudad de México',
      addressCountry: 'MX',
    },
    headline: `Cómo llegar a ${zona.nombre} en metro`,
    step: zona.estaciones.slice(0, 3).map((estacion_slug, idx) => {
      const estacion = estaciones.find(e => e.slug === estacion_slug)
      return {
        '@type': 'HowToStep',
        position: idx + 1,
        name: `Dirígete a la estación ${estacion?.nombre || estacion_slug}`,
        text: `La estación ${estacion?.nombre || estacion_slug} en la Línea ${estacion?.linea || '?'} te acerca a ${zona.nombre}`
      }
    })
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION */}
      <section className="hero" style={{ backgroundColor: 'var(--metro-dark)' }}>
        <div className="container">
          <h1>{zona.h1}</h1>
          <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>{zona.nombre}</p>
          <p style={{ fontSize: '0.875rem', opacity: 0.7 }}>
            {zona.lineas.length > 0 && `Líneas: ${zona.lineas.join(', ')}`}
          </p>
        </div>
      </section>

      {/* Ad 1 */}
      <AdBannerLazy slot="4434764790" format="auto" />

      {/* DESCRIPCIÓN PRINCIPAL */}
      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', lineHeight: 1.8 }}>
            {zona.descripcion}
          </p>
        </div>
      </section>

      {/* ESTACIONES DE METRO CERCANAS */}
      {estacionesCercanas.length > 0 && (
        <section style={{ padding: '3rem 1.25rem', backgroundColor: 'var(--metro-gray)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 style={{ marginBottom: '2rem' }}>Estaciones de metro cercanas</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              {estacionesCercanas.map((estacion) => {
                const lineColor = getLineColor(estacion.linea)
                return (
                  <div key={estacion.slug} className="lugar-card" style={{ border: `2px solid ${lineColor}` }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <span style={{
                        backgroundColor: lineColor,
                        color: 'white',
                        padding: '0.375rem 0.75rem',
                        borderRadius: '4px',
                        fontWeight: 700,
                        fontSize: '0.875rem'
                      }}>
                        Línea {estacion.linea}
                      </span>
                    </div>
                    <h4 style={{ marginBottom: '0.5rem' }}>
                      <a href={`/estacion/${estacion.slug}/`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {estacion.nombre}
                      </a>
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem' }}>
                      {estacion.alcaldia}
                    </p>
                    <p style={{ fontSize: '0.875rem' }}>
                      <a href={`/estacion/${estacion.slug}/`} style={{ color: 'var(--metro-orange)', fontWeight: 600 }}>
                        Ver detalles →
                      </a>
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* QUÉ VER Y HACER */}
      {zona.pois && zona.pois.length > 0 && (
        <section style={{ padding: '3rem 1.25rem' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 style={{ marginBottom: '2rem' }}>Qué ver y hacer en {zona.nombre}</h2>
            <div className="grid-2">
              {zona.pois.map((poi, idx) => (
                <div key={idx} className="lugar-card">
                  <h4 style={{ marginBottom: '0.5rem' }}>{poi.nombre}</h4>
                  <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.25rem' }}>
                    {poi.tipo.charAt(0).toUpperCase() + poi.tipo.slice(1)}
                  </p>
                  <p style={{ fontSize: '0.875rem', color: '#999' }}>
                    ⏱ {poi.distancia}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Ad 2 */}
      <AdBannerLazyInArticle slot="1082410395" />

      {/* TIPS PARA TURISTAS */}
      {zona.tips_turistas && zona.tips_turistas.length > 0 && (
        <section style={{ padding: '3rem 1.25rem', backgroundColor: 'var(--metro-gray)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Tips para turistas</h2>
            <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--metro-orange)' }}>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {zona.tips_turistas.map((tip, idx) => (
                  <li key={idx} style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--metro-orange)', fontWeight: 700 }}>✓</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* RUTAS POPULARES A ESTA ZONA */}
      {rutasAZona.length > 0 && (
        <section style={{ padding: '3rem 1.25rem', backgroundColor: 'var(--metro-gray)' }}>
          <div className="container" style={{ maxWidth: '1000px' }}>
            <h2 style={{ marginBottom: '1rem' }}>Cómo llegar a {zona.nombre}</h2>
            <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '2rem' }}>
              Rutas populares desde diferentes puntos de la ciudad hasta {zona.nombre}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
              {rutasAZona.map((ruta, idx) => {
                const origen_nombre = estaciones.find(e => e.slug === ruta.origen)?.nombre || ruta.origen.replace(/-/g, ' ')
                return (
                  <a
                    key={idx}
                    href={`/ruta/${ruta.origen}-a-${ruta.destino}/`}
                    className="lugar-card"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1.25rem',
                      textDecoration: 'none',
                      color: 'inherit',
                      backgroundColor: 'white',
                      border: '1px solid #e0e0e0',
                      borderRadius: '6px',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer'
                    }}
                    className="zona-route-card"
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.875rem', color: '#999', marginBottom: '0.25rem' }}>
                        Desde
                      </div>
                      <div style={{ fontSize: '1rem', fontWeight: 600 }}>
                        {origen_nombre}
                      </div>
                    </div>
                    <div style={{ fontSize: '1.25rem', color: 'var(--metro-orange)' }}>
                      →
                    </div>
                  </a>
                )
              })}
            </div>
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <a href={`/ruta/?a=${zona.estacion_principal}`} style={{
                color: 'var(--metro-orange)',
                fontWeight: 600,
                textDecoration: 'none'
              }}>
                Ver todas las rutas a {zona.nombre} →
              </a>
            </div>
          </div>
        </section>
      )}

      {/* RELEVANCIA MUNDIAL 2026 */}
      {zona.mundial_relevancia && (
        <section style={{ padding: '3rem 1.25rem' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <div style={{
              backgroundColor: '#fff3cd',
              border: '2px solid #ffc107',
              borderRadius: 'var(--radius)',
              padding: '2rem',
              marginBottom: '2rem'
            }}>
              <h3 style={{ marginBottom: '1rem', color: '#856404' }}>⚽ Relevancia para el Mundial FIFA 2026</h3>
              <p style={{ color: '#856404', margin: 0 }}>
                {zona.mundial_relevancia}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Ad 3 */}
      <AdBannerLazy slot="4434764790" format="auto" />

      {/* LLAMADA A ACCIÓN */}
      <section className="section-tips">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>¿Planificando tu viaje al Mundial 2026?</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
            {zona.nombre} es una zona imprescindible para explorar en tu visita a CDMX
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/estadio-azteca/" className="cta-btn">
              Estadio Azteca →
            </a>
            <a href="/hospedaje/" className="cta-btn" style={{ backgroundColor: 'var(--metro-gray)', color: 'var(--text)' }}>
              Ver hospedaje
            </a>
          </div>
        </div>
      </section>

      {/* NAVEGACIÓN A OTRAS ZONAS Y LÍNEAS */}
      <section style={{ padding: '3rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Explora otras zonas</h3>
          <div className="btn-group" style={{ marginBottom: '2rem' }}>
            <a href="/zona/" className="cta-btn">
              Ver todas las zonas →
            </a>
          </div>

          {lineasZona.length > 0 && (
            <>
              <h3 style={{ marginBottom: '1.5rem' }}>Líneas que conectan esta zona</h3>
              <div className="btn-group">
                {lineasZona.map((linea) => (
                  <a key={linea.id} href={`/linea/${linea.id}/`} className="cta-btn" style={{
                    backgroundColor: getLineColor(linea.id),
                  }}>
                    Línea {linea.id} →
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
