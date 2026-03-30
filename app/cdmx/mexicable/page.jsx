import { mexicableLineas, mexicableEstaciones, mexicableSistema } from '@/data/cdmx/mexicable'
import AdBannerLazy from '@/app/components/AdBannerLazy'

export function generateMetadata() {
  return {
    title: 'Mexicable — Teleférico Ecatepec · 2 líneas, 14 estaciones | MetroGuia',
    description: 'Guía completa del Mexicable: teleférico de Ecatepec y Tlalnepantla. 2 líneas, 14 estaciones, 13.15 km. Conexión directa al Metro CDMX en Indios Verdes. $9 MXN.',
    alternates: { canonical: 'https://metroguia.mx/cdmx/mexicable/' },
  }
}

export default function MexicablePage() {
  const lineas = Object.values(mexicableLineas)
  
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'CDMX', item: 'https://metroguia.mx/cdmx/' },
      { '@type': 'ListItem', position: 3, name: 'Mexicable', item: 'https://metroguia.mx/cdmx/mexicable/' },
    ]
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, var(--surface) 0%, rgba(229, 57, 53, 0.08) 100%)',
        paddingTop: '5rem',
        paddingBottom: '4rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
            <a href="/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>MetroGuia</a>
            {' '}→{' '}
            <a href="/cdmx/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>CDMX</a>
            {' '}→ Mexicable
          </p>
          <h1 style={{ marginBottom: '0.5rem', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>
            Mexicable
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '600px' }}>
            Teleférico del Estado de México — {mexicableSistema.lineas} líneas, {mexicableSistema.estaciones} estaciones, {mexicableSistema.km_totales} km
          </p>
          
          {/* Stats badges */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Estaciones', value: mexicableSistema.estaciones },
              { label: 'Líneas', value: mexicableSistema.lineas },
              { label: 'Km totales', value: mexicableSistema.km_totales },
              { label: 'Tarifa', value: mexicableSistema.tarifa },
            ].map((stat) => (
              <div key={stat.label} style={{
                padding: '0.75rem 1.25rem',
                borderRadius: 'var(--radius)',
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
              }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)' }}>{stat.value}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Líneas Grid */}
      <section style={{ padding: '4rem 1rem' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem' }}>Líneas del Mexicable</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {lineas.map((linea) => (
              <a key={linea.id} href={`/cdmx/mexicable/linea/${linea.id}/`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{
                  padding: '1.5rem',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--border)',
                  backgroundColor: 'var(--surface)',
                  transition: 'border-color 0.2s',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{
                      width: '48px', height: '48px', borderRadius: '50%',
                      backgroundColor: linea.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'white', fontSize: '0.875rem', fontWeight: 700,
                    }}>
                      {linea.nombreCorto}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.25rem' }}>{linea.nombre}</h3>
                      <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{linea.inicio} → {linea.fin}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <span>{linea.total} estaciones</span>
                    <span>{linea.km} km</span>
                    <span>{linea.tiempo_recorrido}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <AdBannerLazy slotId="4434764790" format="auto" style={{ margin: '0 auto 2rem', maxWidth: '728px' }} />

      {/* All Stations List */}
      <section style={{ padding: '0 1rem 4rem' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem' }}>Todas las estaciones</h2>
          {lineas.map((linea) => (
            <div key={linea.id} style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem', color: linea.color }}>
                {linea.nombre} — {linea.inicio} → {linea.fin}
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem' }}>
                {linea.estaciones.map((est, idx) => (
                  <a key={est.slug} href={`/cdmx/mexicable/estacion/${est.slug}/`} style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius)',
                    border: '1px solid var(--border)',
                    backgroundColor: 'var(--surface)',
                    textDecoration: 'none', color: 'var(--text)',
                    fontSize: '0.9rem',
                  }}>
                    <span style={{
                      width: '28px', height: '28px', borderRadius: '50%',
                      backgroundColor: linea.color, color: 'white',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.75rem', fontWeight: 700, flexShrink: 0,
                    }}>
                      {idx + 1}
                    </span>
                    {est.nombre}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Multimodal Connection Info */}
      <section style={{ padding: '0 1rem 4rem' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Conexión con el Metro CDMX</h2>
          <div style={{
            padding: '1.5rem',
            borderRadius: 'var(--radius)',
            border: '1px solid var(--border)',
            backgroundColor: 'var(--surface)',
          }}>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
              La <strong style={{ color: 'var(--text)' }}>Línea Verde</strong> del Mexicable conecta directamente con la estación <strong style={{ color: 'var(--text)' }}>Indios Verdes</strong> del Metro CDMX (Línea 3). Desde ahí puedes llegar al Centro Histórico, Coyoacán, la UNAM, y cualquier punto del sistema Metro.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
              <strong style={{ color: 'var(--text)' }}>Ruta Ecatepec → Centro Histórico:</strong> Mexicable Línea Verde → Indios Verdes → Metro Línea 3 → Zócalo (~50 min, $14 MXN total).
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
              En Indios Verdes también conectas con <strong style={{ color: 'var(--text)' }}>Cablebús Línea 1</strong> (hacia Cuautepec) y <strong style={{ color: 'var(--text)' }}>Metrobús</strong> Líneas 1, 3 y 7.
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section style={{ padding: '0 1rem 4rem' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Información práctica</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {[
              { titulo: 'Horarios', contenido: 'Lun-Vie: 5:00-23:00\nSáb: 6:00-23:00\nDom: 7:00-23:00' },
              { titulo: 'Tarifa', contenido: '$9 MXN por viaje\nPago con tarjeta Mexipase\nGratis: adultos 60+ (INAPAM), niños <5, discapacidad' },
              { titulo: 'Tips', contenido: 'Cada góndola lleva hasta 10 personas\nVistas panorámicas — lleva cámara\nNo hay baño en las estaciones intermedias' },
            ].map((info) => (
              <div key={info.titulo} style={{
                padding: '1.25rem',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                backgroundColor: 'var(--surface)',
              }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text)' }}>{info.titulo}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{info.contenido}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
