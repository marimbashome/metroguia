import { cablebusEstaciones, cablebusLineas } from '@/data/cdmx/cablebus'
import AdBannerLazy from '@/app/components/AdBannerLazy'

export function generateStaticParams() {
  return cablebusEstaciones.map((e) => ({ slug: e.slug }))
}

export function generateMetadata({ params }) {
  const estacion = cablebusEstaciones.find((e) => e.slug === params.slug)
  if (!estacion) return { title: 'Estación no encontrada' }
  return {
    title: estacion.seo_title,
    description: estacion.meta_description,
    alternates: { canonical: `https://metroguia.mx/cdmx/cablebus/estacion/${estacion.slug}/` },
  }
}

export default function CablebusEstacionPage({ params }) {
  const estacion = cablebusEstaciones.find((e) => e.slug === params.slug)
  if (!estacion) return <div style={{ padding: '4rem 2rem', textAlign: 'center' }}><h1>Estación no encontrada</h1></div>

  const linea = cablebusLineas[estacion.lineaId]
  const lineaColor = linea?.color || '#7B1FA2'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'CDMX', item: 'https://metroguia.mx/cdmx/' },
      { '@type': 'ListItem', position: 3, name: 'Cablebús', item: 'https://metroguia.mx/cdmx/cablebus/' },
      { '@type': 'ListItem', position: 4, name: linea?.nombre || 'Línea', item: `https://metroguia.mx/cdmx/cablebus/linea/${estacion.lineaId}/` },
      { '@type': 'ListItem', position: 5, name: estacion.nombre, item: `https://metroguia.mx/cdmx/cablebus/estacion/${estacion.slug}/` },
    ]
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      {/* Hero */}
      <section style={{
        background: `linear-gradient(135deg, var(--surface) 0%, ${lineaColor}12 100%)`,
        paddingTop: '5rem', paddingBottom: '3rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
            <a href="/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>MetroGuia</a>
            {' '}→{' '}
            <a href="/cdmx/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>CDMX</a>
            {' '}→{' '}
            <a href="/cdmx/cablebus/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Cablebús</a>
            {' '}→{' '}
            <a href={`/cdmx/cablebus/linea/${estacion.lineaId}/`} style={{ color: 'var(--primary)', textDecoration: 'none' }}>{linea?.nombre}</a>
            {' '}→ {estacion.nombre}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{
              width: '56px', height: '56px', borderRadius: '50%',
              backgroundColor: lineaColor,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', fontSize: '0.75rem', fontWeight: 700,
            }}>
              {linea?.nombreCorto || 'CB'}
            </div>
            <div>
              <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
                {estacion.nombre}
              </h1>
              <p style={{ fontSize: '0.875rem', color: lineaColor, fontWeight: 600 }}>
                {estacion.linea}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + Info */}
      <section style={{ padding: '3rem 1rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
            {estacion.intro}
          </p>

          {/* Info grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Línea</div>
              <div style={{ fontWeight: 600, color: lineaColor }}>{estacion.linea}</div>
            </div>
            <div style={{ padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Municipio</div>
              <div style={{ fontWeight: 600, color: 'var(--text)' }}>{estacion.municipio}</div>
            </div>
            {estacion.transferencias && estacion.transferencias.length > 0 && (
              <div style={{ padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Conexiones</div>
                <div style={{ fontWeight: 600, color: 'var(--primary)' }}>{estacion.transferencias.join(', ')}</div>
              </div>
            )}
          </div>

          {/* Tips */}
          {estacion.tips && estacion.tips.length > 0 && (
            <div style={{
              padding: '1.25rem', borderRadius: 'var(--radius)',
              border: '1px solid var(--border)', backgroundColor: 'var(--surface)',
              marginBottom: '2rem',
            }}>
              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '1rem' }}>Tips para viajeros</h2>
              {estacion.tips.map((tip, i) => (
                <p key={i} style={{ color: 'var(--text-muted)', marginBottom: i < estacion.tips.length - 1 ? '0.5rem' : 0, lineHeight: 1.6, fontSize: '0.9rem' }}>
                  → {tip}
                </p>
              ))}
            </div>
          )}

          {/* POIs */}
          {estacion.pois && estacion.pois.length > 0 && (
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '1rem' }}>Lugares cercanos</h2>
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                {estacion.pois.map((poi, i) => (
                  <div key={i} style={{
                    padding: '1rem', borderRadius: 'var(--radius)',
                    border: '1px solid var(--border)', backgroundColor: 'var(--surface)',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  }}>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--text)', marginBottom: '0.125rem' }}>{poi.nombre}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>{poi.tipo}</div>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{poi.distancia}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <AdBannerLazy slotId="4434764790" format="auto" style={{ margin: '2rem 0' }} />
        </div>
      </section>
    </div>
  )
}
