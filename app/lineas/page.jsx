import { lineasDetalle } from '@/data/lineas-detalle'
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy'

export const metadata = {
  title: 'Líneas del Metro CDMX — MetroGuia.mx',
  description: 'Guía completa de las 12 líneas del Metro CDMX. Estaciones, colores, recorridos y puntos turísticos.',
}

export default function LineasPage() {
  const lineas = Object.values(lineasDetalle)
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>Las 12 Líneas del Metro CDMX</h1>
          <p>Explora cada línea y sus estaciones turísticas</p>
        </div>
      </section>
      <section style={{ padding: '4rem 2rem' }}>
        <div className="container">
          <div className="grid grid-3">
            {lineas.slice(0, 6).map((linea) => (
              <a key={linea.id} href={`/linea/${linea.id}/`} style={{ textDecoration: 'none' }}>
                <div className="lugar-card">
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: linea.color, margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem', fontWeight: 700, fontFamily: 'Syne, sans-serif' }}>
                    {linea.id}
                  </div>
                  <h3 style={{ marginBottom: '0.5rem' }}>Línea {linea.id}</h3>
                  <p style={{ color: linea.color, fontWeight: 600, marginBottom: '0.5rem' }}>{linea.colorNombre}</p>
                  <p style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>{linea.inicio} → {linea.fin}</p>
                  <p style={{ fontSize: '0.875rem', color: '#666' }}>{linea.total} estaciones</p>
                </div>
              </a>
            ))}
          </div>
          <AdBannerLazy slotId="4434764790" format="auto" style={{ margin: '2rem 0' }} />
          <div className="grid grid-3">
            {lineas.slice(6).map((linea) => (
              <a key={linea.id} href={`/linea/${linea.id}/`} style={{ textDecoration: 'none' }}>
                <div className="lugar-card">
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: linea.color, margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem', fontWeight: 700, fontFamily: 'Syne, sans-serif' }}>
                    {linea.id}
                  </div>
                  <h3 style={{ marginBottom: '0.5rem' }}>Línea {linea.id}</h3>
                  <p style={{ color: linea.color, fontWeight: 600, marginBottom: '0.5rem' }}>{linea.colorNombre}</p>
                  <p style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>{linea.inicio} → {linea.fin}</p>
                  <p style={{ fontSize: '0.875rem', color: '#666' }}>{linea.total} estaciones</p>
                </div>
              </a>
            ))}
          </div>
          <AdBannerLazyInArticle slotId="1082410395" style={{ margin: '2rem 0' }} />
        </div>
      </section>
    </div>
  )
}
