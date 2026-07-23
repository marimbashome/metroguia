import { getAllCities } from '@/data/cities-config'
import { transitAgencies } from '@/data/faqs'
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema'

const cities = getAllCities()

// Fuentes oficiales verificadas (data/faqs.js#transitAgencies) — solo CDMX,
// GDL y MTY tienen organismo oficial con URL confirmada en este repo. El
// resto se muestra como "Por confirmarse" en vez de inventar un enlace
// (REBUILD_SPEC.md: "si un dato falta → Por confirmarse, nunca fabricar").
const OFFICIAL_BY_CITY = {
  cdmx: transitAgencies.find((a) => a.name.includes('Metro')),
  gdl: transitAgencies.find((a) => a.name.includes('SITEUR')),
  mty: transitAgencies.find((a) => a.name.includes('Metrorrey')),
}

const SYSTEM_LABELS = {
  metro: 'Metro',
  metrobus: 'Metrobús',
  'tren-ligero': 'Tren Ligero',
  'tren-suburbano': 'Tren Suburbano',
  mexicable: 'Mexicable',
  trolebus: 'Trolebús',
  'mi-macro': 'Mi Macro (Macrobús)',
  metrorrey: 'Metrorrey',
  ecovia: 'Ecovía',
  'tren-maya': 'Tren Maya',
  'chepe-express': 'Chepe Express',
  optibus: 'Optibús',
  'sit-merida': 'Sistema Integrado de Transporte',
  teleferico: 'Teleférico',
  'circuito-turistico': 'Circuito turístico',
  ruta: 'Rutas de transporte urbano',
  qbus: 'Qbus',
  sitt: 'Sistema Integrado de Transporte de Tijuana',
  'tren-interurbano': 'Tren Interurbano',
  'autobus-turistico': 'Autobús turístico',
  'autobus-urbano': 'Autobús urbano',
}

function systemLabel(key) {
  return SYSTEM_LABELS[key] || key
}

export const metadata = {
  title: 'Fuentes de datos',
  description:
    'Fuentes oficiales de transporte público por ciudad y fecha de verificación de los datos de MetroGuia.mx.',
  alternates: { canonical: '/fuentes/' },
}

export default function FuentesPage() {
  return (
    <div>
      <BreadcrumbSchema items={[{ name: 'Inicio', url: '/' }, { name: 'Fuentes de datos', url: '/fuentes/' }]} />

      <section className="section page-hero">
        <div className="container-narrow">
          <h1>Fuentes de datos</h1>
          <p className="page-hero-lede">
            De dónde sale la información de cada ciudad y cuándo se verificó por última vez.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-narrow legal-body">
          <p>
            Los datos de estaciones, líneas y rutas de cada ciudad vienen de fuentes públicas y del
            organismo oficial de transporte cuando existe. La columna <strong>Datos verificados</strong> es
            la fecha del último cambio real a los datos de esa ciudad — no una fecha de auditoría manual.
            Para horarios en tiempo real, interrupciones de servicio o tarifas vigentes, consulta siempre la
            fuente oficial.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container table-scroll">
          <table className="sources-table">
            <thead>
              <tr>
                <th>Ciudad</th>
                <th>Sistemas cubiertos</th>
                <th>Fuente oficial</th>
                <th>Datos verificados</th>
              </tr>
            </thead>
            <tbody>
              {cities.map((c) => {
                const official = OFFICIAL_BY_CITY[c.slug]
                return (
                  <tr key={c.slug}>
                    <td>
                      <a href={`/${c.slug}/`} className="sources-city-link">{c.name}</a>
                      <div className="sources-city-state">{c.state}</div>
                    </td>
                    <td>{c.systems.map(systemLabel).join(', ')}</td>
                    <td>
                      {official ? (
                        <a href={official.url} target="_blank" rel="noopener noreferrer">{official.name}</a>
                      ) : (
                        <span className="sources-pending">Por confirmarse</span>
                      )}
                    </td>
                    <td>{c.fechaVerificacion}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-narrow legal-body">
          <h2>Sobre la regla de tiempos de viaje</h2>
          <p>
            En Ciudad de México y en las 13 ciudades marcadas con tiempos verificados, los tiempos de viaje
            mostrados en rutas vienen de datos con variación real por tramo. En Guadalajara y Monterrey, una
            parte importante del tiempo por tramo todavía es un estimado uniforme — por eso las páginas de
            ruta de esas dos ciudades muestran número de estaciones y transbordos en vez de un total en
            minutos. Más contexto en <a href="/about/">Acerca de</a>.
          </p>
        </div>
      </section>

      <style>{pageStyles}</style>
    </div>
  )
}

const pageStyles = `
  .page-hero { text-align: center; }
  .page-hero-lede { color: var(--text-muted); font-size: 1.02rem; }
  .legal-body h2 { margin-top: 0; }
  .legal-body p { color: var(--text-muted); }
  .legal-body a { color: var(--forest); font-weight: 600; }
  .table-scroll { overflow-x: auto; }
  .sources-table { width: 100%; border-collapse: collapse; min-width: 620px; }
  .sources-table th {
    text-align: left; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em;
    color: var(--text-dim); padding: var(--space-2) var(--space-3); border-bottom: 2px solid var(--border);
  }
  .sources-table td {
    padding: var(--space-3); border-bottom: 1px solid var(--border); font-size: 0.88rem;
    color: var(--text-muted); vertical-align: top;
  }
  .sources-table tr:last-child td { border-bottom: none; }
  .sources-city-link { color: var(--forest); font-weight: 700; text-decoration: none; }
  .sources-city-link:hover { text-decoration: underline; }
  .sources-city-state { font-size: 0.75rem; color: var(--text-dim); }
  .sources-table a { color: var(--forest); }
  .sources-pending { color: var(--text-dim); font-style: italic; }
`
