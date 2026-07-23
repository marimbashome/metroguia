import LineaBadge from './LineaBadge'

/**
 * RouteSteps — renderiza una ruta calculada como itinerario paso a paso.
 *
 * Espera la forma que devuelve `lib/pathfinder.js#findRoute()`:
 *   { pasos: [{ estacion, nombre, linea, accion }], tiempo_total, transbordos, costo, alertas }
 * (`costo` puede ser `null` cuando la ciudad no tiene tarifa oficial publicada —
 * ver comentario en lib/pathfinder.js. NUNCA se inventa un precio.)
 *
 * ── Regla de honestidad de tiempos (REBUILD_SPEC.md) ──
 * `tiemposReales` viene de `data/cities-config.js` (campo por ciudad):
 *   - true  (CDMX + 13 ciudades chicas): se muestra "~N min".
 *     Pasa `aproxLabel` en true para las 13 ciudades chicas (tiempos con
 *     variación real pero no verificados al nivel de CDMX) y así mostrar
 *     "~N min aprox."; en CDMX se deja `aproxLabel=false` → "~N min".
 *   - false (GDL, MTY — grafo ~80-92% placeholder): el prop `tiempoTotal`
 *     se IGNORA a propósito. Nunca se renderiza un total en minutos.
 *
 * @param {Array}   pasos           - pasos de la ruta (ver forma arriba)
 * @param {number}  tiempoTotal     - minutos totales (solo se usa si tiemposReales)
 * @param {number}  transbordos     - # de transbordos
 * @param {number|null} costo      - tarifa total, o null si no hay tarifa oficial
 * @param {string[]} alertas        - avisos del motor de rutas (tarjetas separadas, etc.)
 * @param {boolean} tiemposReales   - ver arriba (default true)
 * @param {boolean} aproxLabel      - añade "aprox." al total de minutos (13 chicas)
 * @param {string}  moneda          - default 'MXN'
 */
export default function RouteSteps({
  pasos = [],
  tiempoTotal = 0,
  transbordos = 0,
  costo = null,
  alertas = [],
  tiemposReales = true,
  aproxLabel = false,
  moneda = 'MXN',
}) {
  if (!pasos || pasos.length === 0) return null

  const segments = buildSegments(pasos)
  const origenNombre = pasos[0]?.nombre
  const destinoNombre = pasos[pasos.length - 1]?.nombre

  return (
    <div className="card route-steps">
      <div className="route-steps-stats">
        {tiemposReales ? (
          <Stat num={`~${Math.round(tiempoTotal)}`} label={aproxLabel ? 'min aprox.' : 'min'} />
        ) : (
          <Stat num="—" label="tiempo no disponible" muted />
        )}
        <Stat num={transbordos} label={transbordos === 1 ? 'transbordo' : 'transbordos'} />
        <Stat num={pasos.length} label="estaciones" />
        <Stat num={costo === null ? 'N/D' : `$${costo}`} label={costo === null ? 'costo por confirmarse' : moneda} />
      </div>

      {!tiemposReales && (
        <p className="route-steps-honesty">
          Tiempo estimado no disponible para este sistema todavía — mostramos estaciones y transbordos reales.
        </p>
      )}

      <ol className="route-steps-list">
        {segments.map((seg, i) => (
          <li key={i} className="route-steps-segment">
            <div className="route-steps-segment-head">
              <LineaBadge linea={seg.linea} />
              <span className="route-steps-segment-count">{seg.estaciones.length} estaciones</span>
            </div>
            <p className="route-steps-segment-route">
              {seg.desde} → {seg.hasta}
            </p>
            {i < segments.length - 1 && (
              <p className="route-steps-transfer">⇅ Transbordo en {seg.hasta}</p>
            )}
          </li>
        ))}
      </ol>

      {alertas.length > 0 && (
        <ul className="route-steps-alerts">
          {alertas.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      )}

      <style>{`
        .route-steps { padding: var(--space-5); }
        .route-steps-stats {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: var(--space-3);
          padding-bottom: var(--space-4);
          margin-bottom: var(--space-4);
          border-bottom: 1px solid var(--border);
        }
        .route-steps-honesty {
          font-size: 0.82rem;
          color: var(--terracotta);
          background: var(--terracotta-glow);
          border: 1px solid var(--terracotta);
          border-radius: var(--radius-sm);
          padding: var(--space-2) var(--space-3);
          margin: 0 0 var(--space-4);
        }
        .route-steps-list { display: flex; flex-direction: column; gap: var(--space-1); }
        .route-steps-segment {
          border-left: 4px solid var(--border-strong);
          background: var(--surface);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          padding: var(--space-3) var(--space-4);
        }
        .route-steps-segment-head { display: flex; align-items: center; gap: var(--space-2); margin-bottom: var(--space-1); }
        .route-steps-segment-count { font-size: 0.78rem; color: var(--text-dim); }
        .route-steps-segment-route { margin: 0; font-size: 0.9rem; color: var(--text-muted); }
        .route-steps-transfer {
          text-align: center;
          font-weight: 700;
          font-size: 0.8rem;
          color: var(--amber-hover);
          background: var(--amber-glow);
          padding: var(--space-2);
          margin: var(--space-1) 0 0;
          border-radius: var(--radius-sm);
        }
        .route-steps-alerts {
          margin-top: var(--space-4);
          padding-top: var(--space-4);
          border-top: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }
        .route-steps-alerts li { font-size: 0.82rem; color: var(--text-muted); }
      `}</style>
    </div>
  )
}

function Stat({ num, label, muted = false }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.15rem' }}>
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.5rem',
          fontWeight: 700,
          color: muted ? 'var(--text-dim)' : 'var(--forest)',
          lineHeight: 1,
        }}
      >
        {num}
      </span>
      <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-dim)' }}>
        {label}
      </span>
    </div>
  )
}

function buildSegments(pasos) {
  const segments = []
  let current = null

  for (const paso of pasos) {
    if (!current || current.linea !== paso.linea) {
      if (current) segments.push(current)
      current = { linea: paso.linea, desde: paso.nombre, hasta: paso.nombre, estaciones: [paso.nombre] }
    } else {
      current.hasta = paso.nombre
      current.estaciones.push(paso.nombre)
    }
  }
  if (current) segments.push(current)
  return segments
}
