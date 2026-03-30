import { trenLigeroData } from '@/data/cdmx/tren-ligero'

export function generateStaticParams() {
  return trenLigeroData.estaciones.map((est) => ({
    slug: est.slug,
  }))
}

export function generateMetadata({ params }) {
  const estacion = trenLigeroData.estaciones.find(e => e.slug === params.slug)
  if (!estacion) {
    return { title: 'Estación no encontrada | MetroGuia' }
  }
  return {
    title: `Estación ${estacion.nombre} — Tren Ligero Xochimilco | MetroGuia`,
    description: estacion.descripcion_turistica || `Guía de la estación ${estacion.nombre} del Tren Ligero. Ubicación, conexiones y tips.`,
  }
}

export default function TrenLigeroEstacionPage({ params }) {
  const estacion = trenLigeroData.estaciones.find(e => e.slug === params.slug)
  
  if (!estacion) {
    return (
      <div className="container" style={{ padding: '5rem 1rem', textAlign: 'center' }}>
        <h1>Estación no encontrada</h1>
        <p style={{ color: 'var(--text-muted)' }}>La estación que buscas no existe en el Tren Ligero.</p>
        <a href="/cdmx/tren-ligero/" className="btn-primary" style={{ display: 'inline-block', marginTop: '2rem' }}>
          Ver todas las estaciones →
        </a>
      </div>
    )
  }

  const allStations = trenLigeroData.estaciones
  const idx = allStations.findIndex(e => e.slug === estacion.slug)
  const prevStation = idx > 0 ? allStations[idx - 1] : null
  const nextStation = idx < allStations.length - 1 ? allStations[idx + 1] : null

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'CDMX', item: 'https://metroguia.mx/cdmx/' },
      { '@type': 'ListItem', position: 3, name: 'Tren Ligero', item: 'https://metroguia.mx/cdmx/tren-ligero/' },
      { '@type': 'ListItem', position: 4, name: estacion.nombre, item: `https://metroguia.mx/cdmx/tren-ligero/estacion/${estacion.slug}/` }
    ]
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <section style={{
        background: 'linear-gradient(135deg, var(--surface) 0%, rgba(255, 215, 0, 0.08) 100%)',
        paddingTop: '5rem', paddingBottom: '4rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <p style={{
            fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1rem',
            letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600,
          }}>
            <a href="/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>MetroGuia</a>
            {' '}→{' '}
            <a href="/cdmx/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>CDMX</a>
            {' '}→{' '}
            <a href="/cdmx/tren-ligero/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Tren Ligero</a>
            {' '}→ {estacion.nombre}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{
              backgroundColor: '#FFD700', width: '3rem', height: '3rem', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 700, fontSize: '0.875rem', color: '#000',
            }}>
              {idx + 1}
            </div>
            <h1 style={{ color: 'var(--text)', marginBottom: 0 }}>
              Estación {estacion.nombre}
            </h1>
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            {estacion.alcaldia} · Tren Ligero · Parada {idx + 1} de 18
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 1rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.7', maxWidth: '700px' }}>
            {estacion.descripcion_turistica}
          </p>
        </div>
      </section>

      {(prevStation || nextStation) && (
        <section style={{ padding: '3rem 1rem', borderBottom: '1px solid var(--border)' }}>
          <div className="container">
            <h2 style={{ marginBottom: '1.5rem' }}>Estaciones Adyacentes</h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {prevStation && (
                <a href={`/cdmx/tren-ligero/estacion/${prevStation.slug}/`} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ minWidth: '200px' }}>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>← Anterior</p>
                    <h4 style={{ color: 'var(--text)' }}>{prevStation.nombre}</h4>
                  </div>
                </a>
              )}
              {nextStation && (
                <a href={`/cdmx/tren-ligero/estacion/${nextStation.slug}/`} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ minWidth: '200px' }}>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Siguiente →</p>
                    <h4 style={{ color: 'var(--text)' }}>{nextStation.nombre}</h4>
                  </div>
                </a>
              )}
            </div>
          </div>
        </section>
      )}

      {estacion.conexiones_metro.length > 0 && (
        <section style={{ padding: '3rem 1rem', borderBottom: '1px solid var(--border)' }}>
          <div className="container">
            <h2 style={{ marginBottom: '1.5rem' }}>Conexiones con Metro</h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {estacion.conexiones_metro.map((slug) => (
                <a key={slug} href={`/estacion/${slug}/`} className="card" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 1.5rem' }}>
                  <span style={{ fontSize: '1.25rem' }}>🚇</span>
                  <span style={{ color: 'var(--text)', fontWeight: 600 }}>Metro {slug}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section style={{ padding: '3rem 1rem' }}>
        <div className="container">
          <h2 style={{ marginBottom: '1.5rem' }}>Información del Servicio</h2>
          <div className="grid-3">
            <div className="card">
              <h4 style={{ color: '#FFD700', marginBottom: '0.5rem' }}>💳 Tarifa</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>$3 MXN — Tarifa única</p>
            </div>
            <div className="card">
              <h4 style={{ color: '#FFD700', marginBottom: '0.5rem' }}>🕐 Horario</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>5:00 AM - 12:00 AM</p>
            </div>
            <div className="card">
              <h4 style={{ color: '#FFD700', marginBottom: '0.5rem' }}>⏱ Frecuencia</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Cada 5-10 min</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
