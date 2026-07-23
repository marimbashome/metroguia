import { zonas } from '@/data/zonas'
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';

export const metadata = {
  title: 'Zonas turísticas de CDMX — Guía de metro | MetroGuia',
  description: 'Explora las zonas más populares de Ciudad de México: Centro Histórico, Condesa, Roma, Polanco, Coyoacán, Xochimilco, Estadio Azteca. Cómo llegar en metro.',
  openGraph: {
    title: 'Zonas turísticas de CDMX',
    description: 'Guía completa de zonas turísticas y cómo llegar en metro a cada una',
    url: 'https://metroguia.mx/zona/',
    siteName: 'MetroGuia',
    locale: 'es_MX',
    type: 'website',
  }
}

export default function ZonasPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Zonas turísticas de CDMX',
    description: 'Guía completa de zonas turísticas en Ciudad de México',
    url: 'https://metroguia.mx/zona/',
  }

  // Agrupar zonas por tipo para mejor navegación
  const zonasHistoricas = zonas.filter(z => z.tipo === 'historico')
  const zonasBarios = zonas.filter(z => z.tipo === 'barrio')
  const zonasComercio = zonas.filter(z => z.tipo.includes('comercio'))
  const zonasNaturales = zonas.filter(z => z.tipo === 'natural')
  const zonasCulturales = zonas.filter(z => z.tipo === 'cultural')
  const zonasDportivas = zonas.filter(z => z.tipo === 'deportivo')

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="hero" style={{ backgroundColor: 'var(--metro-dark)' }}>
        <div className="container">
          <h1>Explora las zonas de CDMX</h1>
          <p style={{ fontSize: '1.125rem', marginBottom: '0' }}>
            Descubre los barrios más icónicos de la Ciudad de México y cómo llegar en metro
          </p>
        </div>
      </section>

      {/* INTRODUCCIÓN */}
      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', lineHeight: 1.8 }}>
            La Ciudad de México es enorme y diversa. Cada zona tiene su propia personalidad, historia y atractivos. 
            Esta guía te ayuda a descubrir los mejores barrios y cómo llegar a ellos en metro, perfecto para planificar 
            tu visita durante el Mundial FIFA 2026.
          </p>
        </div>
      </section>

      {/* GRID DE TODAS LAS ZONAS */}
      <section style={{ padding: '3rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <h2 style={{ marginBottom: '3rem', textAlign: 'center' }}>Todas las zonas</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {zonas.map((zona) => (
              <div key={zona.slug} className="lugar-card" style={{
                backgroundColor: '#f8f9fa',
                borderTop: '4px solid var(--metro-orange)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem' }}>
                  <a href={`/zona/${zona.slug}/`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {zona.nombre}
                  </a>
                </h3>
                
                <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '1rem', flex: 1 }}>
                  {zona.descripcion.substring(0, 150)}...
                </p>

                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                    {zona.lineas.map((linea) => {
                      const lineaData = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', '12']
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
                      return (
                        <span key={linea} style={{
                          backgroundColor: colorMap[linea] || '#999',
                          color: 'white',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '4px',
                          fontSize: '0.75rem',
                          fontWeight: 700
                        }}>
                          L{linea}
                        </span>
                      )
                    })}
                  </div>
                  <p style={{ fontSize: '0.875rem', color: '#999', marginBottom: '0' }}>
                    {zona.estaciones.length} estacion{zona.estaciones.length !== 1 ? 'es' : ''}
                  </p>
                </div>

                {zona.mundial_relevancia && (
                  <div style={{ 
                    backgroundColor: '#fff3cd',
                    padding: '0.75rem',
                    borderRadius: '4px',
                    marginBottom: '1rem',
                    fontSize: '0.75rem',
                    color: '#856404'
                  }}>
                    <strong>⚽ FIFA 2026:</strong> {zona.mundial_relevancia.split(' — ')[0]}
                  </div>
                )}

                <a href={`/zona/${zona.slug}/`} className="cta-btn" style={{
                  display: 'inline-block',
                  width: '100%',
                  textAlign: 'center',
                  marginTop: 'auto'
                }}>
                  Explorar zona →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOMENDACIONES POR TIPO */}
      {zonasHistoricas.length > 0 && (
        <section style={{ padding: '3rem 1.25rem', backgroundColor: 'var(--metro-gray)' }}>
          <div className="container" style={{ maxWidth: '1000px' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Zonas Históricas</h2>
            <p style={{ marginBottom: '2rem' }}>
              Sumérgete en la historia prehispánica y colonial de México
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {zonasHistoricas.map((zona) => (
                <div key={zona.slug} style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ marginBottom: '0.5rem' }}>{zona.nombre}</h4>
                  <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '1rem' }}>
                    {zona.descripcion.substring(0, 100)}...
                  </p>
                  <a href={`/zona/${zona.slug}/`} style={{ color: 'var(--metro-orange)', fontWeight: 600 }}>
                    Leer más →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CONSEJOS DE VIAJE */}
      <section style={{ padding: '3rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '2rem' }}>Consejos para explorar CDMX</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
            <div style={{ backgroundColor: '#f8f9fa', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>Compra una tarjeta Metro</h4>
              <p style={{ fontSize: '0.875rem', marginBottom: '0' }}>
                La tarjeta Metro es lo más económico. Un viaje cuesta $5 MXN. Cómprala en cualquier estación.
              </p>
            </div>
            <div style={{ backgroundColor: '#f8f9fa', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>Horarios de operación</h4>
              <p style={{ fontSize: '0.875rem', marginBottom: '0' }}>
                El metro opera de 5:00 AM a media noche (12:00 AM) todos los días. Evita horas pico: 8-10 AM y 5-8 PM.
              </p>
            </div>
            <div style={{ backgroundColor: '#f8f9fa', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>Seguridad y vigilancia</h4>
              <p style={{ fontSize: '0.875rem', marginBottom: '0' }}>
                El metro CDMX es seguro en horas diurnas. De noche, evita vagones vacíos. No lleves objetos de valor a la vista.
              </p>
            </div>
            <div style={{ backgroundColor: '#f8f9fa', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>Cómo navegar</h4>
              <p style={{ fontSize: '0.875rem', marginBottom: '0' }}>
                Cada estación tiene mapas. Los empleados son amables y hablan español. Si necesitas ayuda, pregunta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA MUNDIAL 2026 */}
      <section style={{ padding: '3rem 1.25rem', backgroundColor: 'var(--metro-dark)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center', color: 'white' }}>
          <h2 style={{ marginBottom: '1rem', color: 'white' }}>Vienes para el Mundial FIFA 2026?</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
            Todas estas zonas son accesibles en metro. Planifica tu viaje y explora CDMX como un local.
          </p>
          <a href="/mundial-2026/" className="cta-btn" style={{ backgroundColor: 'var(--metro-orange)' }}>
            Ver información del Estadio Azteca →
          </a>
        </div>
      </section>

      {/* NAV A LÍNEAS */}
      <section style={{ padding: '3rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>También explora las líneas del metro</h2>
          <p style={{ marginBottom: '2rem' }}>
            Entiende cómo funciona cada línea del Metro CDMX y sus conexiones
          </p>
          <a href="/lineas/" className="cta-btn">
            Ver todas las líneas →
          </a>
        </div>
      </section>
    </div>
  )
}
