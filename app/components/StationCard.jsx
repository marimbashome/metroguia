import LineaBadge from './LineaBadge'
import { getLineColor } from '@/lib/lineLabels'

/**
 * StationCard — tarjeta resumen de una estación, para grids/listas
 * (home, hubs de ciudad, "estaciones cercanas").
 *
 * Los datos por ciudad NO tienen el mismo shape exacto (CDMX usa
 * `alcaldia`/`lineas[]`, las ciudades chicas usan `municipio` u
 * `ubicacion`/`linea` singular) — este componente lee con fallbacks y
 * omite silenciosamente lo que no aplica en vez de inventar contenido.
 * Si falta el dato de zona (el único que tratamos como "esperado"),
 * se muestra "Por confirmarse" en vez de ocultarlo.
 *
 * @param {Object}  estacion  - objeto crudo de data/**\/estaciones.js
 * @param {string}  [href]    - si se pasa, la tarjeta es un <a>
 * @param {boolean} [compact] - versión mínima (nombre + líneas), para autocomplete/tiras
 */
export default function StationCard({ estacion, href, compact = false }) {
  if (!estacion) return null

  const nombre = estacion.nombre || estacion.slug || 'Estación'
  const zona = estacion.alcaldia || estacion.municipio || estacion.ubicacion || null
  const lineas = Array.isArray(estacion.lineas)
    ? estacion.lineas
    : estacion.linea
      ? [estacion.linea]
      : []
  const descripcion = estacion.descripcion_turistica || estacion.intro || null

  const Wrapper = href ? 'a' : 'div'
  const wrapperProps = href ? { href } : {}

  if (compact) {
    return (
      <Wrapper {...wrapperProps} className="station-card station-card-compact">
        <StationDot lineas={lineas} />
        <span className="station-card-name">{nombre}</span>
        <style>{compactStyles}</style>
      </Wrapper>
    )
  }

  return (
    <Wrapper {...wrapperProps} className="station-card">
      <div className="station-card-head">
        <StationDot lineas={lineas} />
        <div>
          <h3 className="station-card-title">{nombre}</h3>
          <p className="station-card-zone">{zona || 'Zona: Por confirmarse'}</p>
        </div>
      </div>
      {lineas.length > 0 && (
        <div className="station-card-lines">
          {lineas.map((l) => (
            <LineaBadge key={l} linea={l} size="sm" />
          ))}
        </div>
      )}
      {descripcion && <p className="station-card-desc">{truncate(descripcion, 140)}</p>}
      <style>{cardStyles}</style>
    </Wrapper>
  )
}

function StationDot({ lineas }) {
  const primary = lineas?.[0]
  return (
    <span
      aria-hidden="true"
      className="station-dot"
      style={{ background: primary ? lineColorVar(primary) : 'var(--forest)' }}
    />
  )
}

// Resuelve el color vía la misma función que LineaBadge, evitando duplicar el mapa.
function lineColorVar(linea) {
  return getLineColor(linea)
}

function truncate(str, max) {
  if (!str || str.length <= max) return str
  return str.slice(0, max).trim() + '…'
}

const cardStyles = `
  .station-card {
    display: block;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: var(--space-4);
    text-decoration: none;
    color: inherit;
    transition: box-shadow 0.15s ease, border-color 0.15s ease;
  }
  a.station-card:hover { box-shadow: var(--shadow-md); border-color: var(--border-strong); }
  .station-card-head { display: flex; align-items: flex-start; gap: var(--space-3); margin-bottom: var(--space-2); }
  .station-dot { width: 14px; height: 14px; border-radius: 50%; flex-shrink: 0; margin-top: 0.3rem; }
  .station-card-title { margin: 0; font-size: 1rem; color: var(--forest); }
  .station-card-zone { margin: 0.15rem 0 0; font-size: 0.78rem; color: var(--text-dim); }
  .station-card-lines { display: flex; flex-wrap: wrap; gap: var(--space-1); margin-bottom: var(--space-2); }
  .station-card-desc { margin: 0; font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; }
`

const compactStyles = `
  .station-card-compact {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: inherit;
    padding: 0.3rem 0.6rem;
    border-radius: var(--radius-full);
    border: 1px solid var(--border);
    background: var(--bg);
    font-size: 0.85rem;
    white-space: nowrap;
  }
  .station-card-compact .station-dot { width: 9px; height: 9px; margin-top: 0; }
  .station-card-name { font-weight: 500; }
`
