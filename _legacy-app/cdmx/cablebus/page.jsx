import { cablebusLineas, cablebusEstaciones, cablebusSistema } from '@/data/cdmx/cablebus'
import AdBannerLazy from '@/app/components/AdBannerLazy'

export function generateMetadata() {
  return {
    title: 'Cablebús CDMX — Teleférico urbano · 3 líneas, 19 estaciones | MetroGuia',
    description: 'Guía completa del Cablebús: teleférico urbano de la CDMX. 3 líneas, 19 estaciones, 24.77 km. Conexión directa al Metro en Indios Verdes. $9 MXN. Incluye Línea 2, récord mundial de cable car más largo.',
    alternates: { canonical: 'https://metroguia.mx/cdmx/cablebus/' },
  }
}

export default function CablebusPPage() {
  const lineas = Object.values(cablebusLineas)
  
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'CDMX', item: 'https://metroguia.mx/cdmx/' },
      { '@type': 'ListItem', position: 3, name: 'Cablebús', item: 'https://metroguia.mx/cdmx/cablebus/' },
    ]
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, var(--surface) 0%, rgba(123, 31, 162, 0.08) 100%)',
        paddingTop: '5rem',
        paddingBottom: '4rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
            <a href="/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>MetroGuia</a>
            {' '}→{' '}
            <a href="/cdmx/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>CDMX</a>
            {' '}→ Cablebús
          </p>
          <h1 style={{ marginBottom: '0.5rem', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>
            Cablebús
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '600px' }}>
            Teleférico urbano de la CDMX — {cablebusSistema.lineas} líneas, {cablebusSistema.estaciones} estaciones, {cablebusSistema.km_totales} km
          </p>
          
          {/* Stats badges */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Estaciones', value: cablebusSistema.estaciones },
              { label: 'Líneas', value: cablebusSistema.lineas },
              { label: 'Km totales', value: cablebusSistema.km_totales },
              { label: 'Tarifa', value: cablebusSistema.tarifa },
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
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem' }}>Líneas del Cablebús</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {lineas.map((linea) => (
              <a key={linea.id} href={`/cdmx/cablebus/linea/${linea.id}/`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
                  <a key={est.slug} href={`/cdmx/cablebus/estacion/${est.slug}/`} style={{
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
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Conexiones con Metro CDMX y otros sistemas</h2>
          <div style={{
            padding: '1.5rem',
            borderRadius: 'var(--radius)',
            border: '1px solid var(--border)',
            backgroundColor: 'var(--surface)',
          }}>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
              La <strong style={{ color: 'var(--text)' }}>Línea 1</strong> del Cablebús conecta directamente con la estación <strong style={{ color: 'var(--text)' }}>Indios Verdes</strong> del Metro CDMX (Línea 3). Desde ahí puedes llegar al Centro Histórico, Coyoacán, la UNAM, y cualquier punto del sistema Metro.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
              <strong style={{ color: 'var(--text)' }}>Ruta Cuautepec → Centro Histórico:</strong> Cablebús Línea 1 → Indios Verdes → Metro Línea 3 → Zócalo (~45 min, $14 MXN total).
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
              En <strong style={{ color: 'var(--text)' }}>Constitución</strong> conectas con <strong style={{ color: 'var(--text)' }}>Metro Línea 8</strong> (hacia Garibaldi y Xochimilco). En <strong style={{ color: 'var(--text)' }}>Constituyentes</strong> puedes acceder a <strong style={{ color: 'var(--text)' }}>Metro Línea 7</strong> (hacia San Antonio Abad y Tláhuac).
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
              En Indios Verdes también conectas con <strong style={{ color: 'var(--text)' }}>Mexicable</strong> (hacia Ecatepec y Tlalnepantla) y <strong style={{ color: 'var(--text)' }}>Metrobús</strong> Líneas 1, 3 y 7.
            </p>
          </div>
        </div>
      </section>

      {/* Guinness Record */}
      <section style={{ padding: '0 1rem 4rem' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Récord Guinness — Línea 2</h2>
          <div style={{
            padding: '1.5rem',
            borderRadius: 'var(--radius)',
            border: '2px solid var(--primary)',
            backgroundColor: 'rgba(63, 81, 181, 0.04)',
          }}>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
              La <strong style={{ color: 'var(--text)' }}>Línea 2 del Cablebús</strong> ostenta el récord Guinness como el <strong style={{ color: 'var(--text)' }}>teleférico urbano más largo del mundo</strong> con una sola cabina. Con 10.5 km de distancia y atravesando tres delegaciones (Gustavo A. Madero, Miguel Hidalgo y Cuauhtémoc), es una obra maestra de la ingeniería urbana y una alternativa revolucionaria para la movilidad en la CDMX.
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
              { titulo: 'Horarios', contenido: 'Lun-Vie: 5:30-23:00\nSáb: 6:00-23:00\nDom: 7:00-23:00' },
              { titulo: 'Tarifa', contenido: '$9 MXN por viaje\nPago con tarjeta Mexipase\nGratis: adultos 60+ (INAPAM), niños <5, discapacidad' },
              { titulo: 'Tips', contenido: 'Vistas panorámicas del valle de México\nDuración del viaje: 15-45 min según línea\nNo hay baños en todas las estaciones' },
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
