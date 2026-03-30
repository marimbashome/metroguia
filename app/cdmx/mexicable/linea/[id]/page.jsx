import { mexicableLineas, mexicableEstaciones } from '@/data/cdmx/mexicable'
import AdBannerLazy from '@/app/components/AdBannerLazy'

export function generateStaticParams() {
  return Object.keys(mexicableLineas).map((id) => ({ id }))
}

export function generateMetadata({ params }) {
  const linea = mexicableLineas[params.id]
  if (!linea) return { title: 'Línea no encontrada' }
  return {
    title: linea.seo_title,
    description: linea.meta_description,
    alternates: { canonical: `https://metroguia.mx/cdmx/mexicable/linea/${linea.id}/` },
  }
}

export default function MexicableLineaPage({ params }) {
  const linea = mexicableLineas[params.id]
  if (!linea) return <div style={{ padding: '4rem 2rem', textAlign: 'center' }}><h1>Línea no encontrada</h1></div>

  const estacionesLinea = mexicableEstaciones.filter(e => e.lineaId === linea.id)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'CDMX', item: 'https://metroguia.mx/cdmx/' },
      { '@type': 'ListItem', position: 3, name: 'Mexicable', item: 'https://metroguia.mx/cdmx/mexicable/' },
      { '@type': 'ListItem', position: 4, name: linea.nombre, item: `https://metroguia.mx/cdmx/mexicable/linea/${linea.id}/` },
    ]
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      {/* Hero */}
      <section style={{
        background: `linear-gradient(135deg, var(--surface) 0%, ${linea.color}15 100%)`,
        paddingTop: '5rem', paddingBottom: '4rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
            <a href="/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>MetroGuia</a>
            {' '}→{' '}
            <a href="/cdmx/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>CDMX</a>
            {' '}→{' '}
            <a href="/cdmx/mexicable/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Mexicable</a>
            {' '}→ {linea.nombre}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{
              width: '64px', height: '64px', borderRadius: '50%',
              backgroundColor: linea.color,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', fontSize: '1.25rem', fontWeight: 700,
            }}>
              {linea.nombreCorto}
            </div>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
              {linea.nombre}
            </h1>
          </div>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '600px', lineHeight: 1.6 }}>
            {linea.descripcion}
          </p>
          
          {/* Stats */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Estaciones', value: linea.total },
              { label: 'Distancia', value: `${linea.km} km` },
              { label: 'Recorrido', value: linea.tiempo_recorrido },
              { label: 'Tarifa', value: linea.tarifa },
            ].map((stat) => (
              <div key={stat.label} style={{
                padding: '0.75rem 1.25rem', borderRadius: 'var(--radius)',
                backgroundColor: 'var(--surface)', border: '1px solid var(--border)',
              }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)' }}>{stat.value}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Station List */}
      <section style={{ padding: '4rem 1rem' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem' }}>
            Estaciones — {linea.inicio} → {linea.fin}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {estacionesLinea.map((est, idx) => (
              <a key={est.slug} href={`/cdmx/mexicable/estacion/${est.slug}/`} style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                padding: '1rem 1.25rem',
                borderRadius: idx === 0 ? 'var(--radius) var(--radius) 0 0' : idx === estacionesLinea.length - 1 ? '0 0 var(--radius) var(--radius)' : '0',
                border: '1px solid var(--border)',
                borderTop: idx > 0 ? 'none' : '1px solid var(--border)',
                backgroundColor: 'var(--surface)',
                textDecoration: 'none', color: 'var(--text)',
                transition: 'background-color 0.2s',
              }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  backgroundColor: linea.color, color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.875rem', fontWeight: 700, flexShrink: 0,
                }}>
                  {idx + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, marginBottom: '0.125rem' }}>{est.nombre}</div>
                  {est.transferencias && est.transferencias.length > 0 && (
                    <div style={{ fontSize: '0.8rem', color: 'var(--primary)' }}>
                      ↔ {est.transferencias.join(' · ')}
                    </div>
                  )}
                </div>
                <span style={{ color: 'var(--text-dim)', fontSize: '1.25rem' }}>→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <AdBannerLazy slotId="4434764790" format="auto" style={{ margin: '0 auto 2rem', maxWidth: '728px' }} />

      {/* Intermodal Connections */}
      {linea.conexiones_intermodales && linea.conexiones_intermodales.length > 0 && (
        <section style={{ padding: '0 1rem 4rem' }}>
          <div className="container">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Conexiones intermodales</h2>
            <div style={{
              padding: '1.25rem', borderRadius: 'var(--radius)',
              border: '1px solid var(--border)', backgroundColor: 'var(--surface)',
            }}>
              {linea.conexiones_intermodales.map((conn, i) => (
                <p key={i} style={{ color: 'var(--text-muted)', marginBottom: i < linea.conexiones_intermodales.length - 1 ? '0.75rem' : 0, lineHeight: 1.6 }}>
                  • {conn}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Horarios */}
      <section style={{ padding: '0 1rem 4rem' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Horarios y tarifa</h2>
          <div style={{
            padding: '1.25rem', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', backgroundColor: 'var(--surface)',
          }}>
            <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}><strong style={{ color: 'var(--text)' }}>Horario:</strong> {linea.horario}</p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}><strong style={{ color: 'var(--text)' }}>Tarifa:</strong> {linea.tarifa}</p>
            <p style={{ color: 'var(--text-muted)' }}><strong style={{ color: 'var(--text)' }}>Municipio:</strong> {linea.municipio}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
