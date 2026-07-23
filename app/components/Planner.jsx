'use client'

// ============================================================================
// Planner — planificador de rutas en vivo para el Metro CDMX (home).
// Puerto de la lógica de _legacy-app/components/BuscadorRutas.jsx (autocomplete
// + "carga de grafo" síncrona vía lib/rutas.js) con UI nueva, sin Mundial/Azteca
// y sin las secciones US/Canadá del componente legacy.
//
// Nota de alcance: usa lib/rutas.js + data/lineas-detalle.js (12 líneas del
// Metro CDMX), igual que el widget original — NO lib/pathfinder.js (ese es el
// motor multi-ciudad que arma las ~590 páginas estáticas /ruta/[slug]/).
// RouteSteps sí espera la forma de lib/pathfinder.js, así que este componente
// traduce el resultado de lib/rutas.js a esa forma (ver segmentsToPasos).
//
// `lineasSlim`/`estacionesSlim`/`chips` llegan como props ya recortadas desde
// app/page.jsx (Server Component) — Planner NUNCA importa data/estaciones.js
// ni data/lineas-detalle.js directamente: son archivos enormes con copy de
// página (seo_title, ruta_1_dia, mundial_relevancia…) que no hace falta para
// calcular rutas, y como Planner es 'use client' cualquier import suyo se
// empaqueta entero en el JS del navegador.
// ============================================================================

import { useState, useRef, useEffect, useMemo } from 'react'
import { buildGraph, buildEstacionesMap, findRoute, formatSegments, estimateTime, COSTO_METRO } from '@/lib/rutas'
import { getLineColor } from '@/lib/lineLabels'
import LineaBadge from './LineaBadge'
import RouteSteps from './RouteSteps'

function normalize(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

export default function Planner({ lineasSlim, estacionesSlim, chips = [] }) {
  const [origen, setOrigen] = useState('')
  const [destino, setDestino] = useState('')
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState(null)
  const resultRef = useRef(null)

  // Se calculan una sola vez por montaje (las props no cambian en runtime).
  const graph = useMemo(() => buildGraph(lineasSlim), [lineasSlim])
  const estacionesMap = useMemo(() => buildEstacionesMap(estacionesSlim), [estacionesSlim])
  const estacionesUnicas = useMemo(
    () =>
      Array.from(
        new Map(
          [...estacionesSlim].sort((a, b) => a.nombre.localeCompare(b.nombre, 'es')).map((e) => [e.slug, e])
        ).values()
      ),
    [estacionesSlim]
  )

  useEffect(() => {
    setError(null)
    setResultado(null)

    if (!origen || !destino || origen === destino) return

    const path = findRoute(graph, origen, destino)
    if (!path) {
      setError('No se encontró ruta entre estas estaciones.')
      return
    }

    const segments = formatSegments(path, estacionesMap, lineasSlim)
    const time = estimateTime(segments)

    setResultado({
      pasos: segmentsToPasos(segments),
      tiempoTotal: time.minutos,
      transbordos: time.transbordos,
      costo: COSTO_METRO,
      alertas: [],
    })

    setTimeout(() => {
      const isMobile = window.innerWidth <= 768
      resultRef.current?.scrollIntoView({ behavior: isMobile ? 'auto' : 'smooth', block: 'start' })
    }, 150)
  }, [origen, destino, graph, estacionesMap, lineasSlim])

  const handleSwap = () => {
    setOrigen(destino)
    setDestino(origen)
  }

  const handlePopular = (ruta) => {
    setOrigen(ruta.origen)
    setDestino(ruta.destino)
  }

  return (
    <div className="planner">
      <div className="planner-widget">
        <div className="planner-row">
          <AutocompleteInput
            selectedSlug={origen}
            onSelect={setOrigen}
            placeholder="Ej: Bellas Artes, Polanco…"
            label="Origen"
            estacionesMap={estacionesMap}
            estacionesUnicas={estacionesUnicas}
          />
          <button onClick={handleSwap} className="planner-swap" title="Intercambiar origen y destino" aria-label="Intercambiar">
            ⇅
          </button>
          <AutocompleteInput
            selectedSlug={destino}
            onSelect={setDestino}
            placeholder="Ej: Tasqueña, Zócalo…"
            label="Destino"
            estacionesMap={estacionesMap}
            estacionesUnicas={estacionesUnicas}
          />
        </div>
        {origen && destino && origen === destino && (
          <p className="planner-note planner-note-error">Selecciona estaciones diferentes.</p>
        )}
        {!origen && !destino && (
          <p className="planner-note">Escribe el nombre de cualquier estación del Metro CDMX.</p>
        )}
      </div>

      {error && <div className="planner-error">{error}</div>}

      <div ref={resultRef}>
        {resultado && (
          <div className="planner-result">
            <RouteSteps
              pasos={resultado.pasos}
              tiempoTotal={resultado.tiempoTotal}
              transbordos={resultado.transbordos}
              costo={resultado.costo}
              alertas={resultado.alertas}
              tiemposReales
            />
          </div>
        )}
      </div>

      {chips.length > 0 && (
        <div className="planner-chips">
          <h3>Rutas populares</h3>
          <div className="planner-chips-grid">
            {chips.map((ruta) => {
              const active = origen === ruta.origen && destino === ruta.destino
              return (
                <button
                  key={`${ruta.origen}-${ruta.destino}`}
                  onClick={() => handlePopular(ruta)}
                  className={`planner-chip${active ? ' planner-chip-active' : ''}`}
                >
                  {ruta.titulo || `${estacionesMap[ruta.origen]?.nombre || ruta.origen} → ${estacionesMap[ruta.destino]?.nombre || ruta.destino}`}
                </button>
              )
            })}
          </div>
        </div>
      )}

      <style>{`
        .planner { max-width: var(--max-width-narrow); margin: 0 auto; }
        .planner-widget {
          background: var(--bg);
          border-radius: var(--radius-lg);
          padding: var(--space-5);
          box-shadow: var(--shadow-lg);
        }
        .planner-row { display: flex; gap: var(--space-3); align-items: flex-end; flex-wrap: wrap; }
        .planner-swap {
          background: var(--surface);
          border: none;
          border-radius: 50%;
          width: 42px;
          height: 42px;
          cursor: pointer;
          font-size: 1.15rem;
          flex-shrink: 0;
          margin-bottom: 0.1rem;
          color: var(--forest);
        }
        .planner-swap:hover { background: var(--surface-hover); }
        .planner-note { margin: var(--space-3) 0 0; font-size: 0.82rem; color: var(--text-dim); text-align: center; }
        .planner-note-error { color: var(--danger); }
        .planner-error {
          margin-top: var(--space-3);
          padding: var(--space-3) var(--space-4);
          background: var(--terracotta-glow);
          border: 1.5px solid var(--terracotta);
          border-radius: var(--radius-sm);
          color: var(--terracotta);
          font-weight: 600;
          font-size: 0.9rem;
        }
        .planner-result { margin-top: var(--space-4); }
        .planner-chips { margin-top: var(--space-6); }
        .planner-chips h3 { font-size: 1rem; margin-bottom: var(--space-3); }
        .planner-chips-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: var(--space-2); }
        .planner-chip {
          background: var(--bg);
          border: 1.5px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 0.7rem 0.9rem;
          font-size: 0.85rem;
          font-weight: 600;
          text-align: left;
          cursor: pointer;
          color: var(--text);
        }
        .planner-chip:hover { border-color: var(--border-strong); }
        .planner-chip-active { border-color: var(--amber); background: var(--amber-glow); }
      `}</style>
    </div>
  )
}

// ── AutocompleteInput ────────────────────────────────────────────
function AutocompleteInput({ selectedSlug, onSelect, placeholder, label, estacionesMap, estacionesUnicas }) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [filtered, setFiltered] = useState([])
  const containerRef = useRef(null)

  useEffect(() => {
    setQuery(selectedSlug ? estacionesMap[selectedSlug]?.nombre || '' : '')
  }, [selectedSlug, estacionesMap])

  useEffect(() => {
    if (!query) {
      setFiltered([])
      return
    }
    const q = normalize(query)
    setFiltered(estacionesUnicas.filter((e) => normalize(e.nombre).includes(q)).slice(0, 8))
  }, [query, estacionesUnicas])

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleChange = (e) => {
    setQuery(e.target.value)
    setOpen(true)
    if (!e.target.value) onSelect('')
  }

  const handleSelect = (est) => {
    onSelect(est.slug)
    setOpen(false)
  }

  const lineas = selectedSlug ? estacionesMap[selectedSlug]?.lineas || [] : []

  return (
    <div ref={containerRef} className="ac">
      <label className="ac-label">{label}</label>
      <div className={`ac-input-wrap${selectedSlug ? ' ac-input-wrap-active' : ''}`}>
        <input
          value={query}
          onChange={handleChange}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          className="ac-input"
          autoComplete="off"
          spellCheck={false}
        />
        {lineas.slice(0, 2).map((l) => (
          <LineaBadge key={l} linea={l} size="sm" />
        ))}
        {query && (
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault()
              onSelect('')
              setQuery('')
            }}
            className="ac-clear"
            aria-label="Limpiar"
          >
            ✕
          </button>
        )}
      </div>

      {open && filtered.length > 0 && (
        <div className="ac-dropdown">
          {filtered.map((est) => {
            const lineasEst = estacionesMap[est.slug]?.lineas || [est.linea]
            return (
              <div key={est.slug} onMouseDown={() => handleSelect(est)} className="ac-item">
                <span className="ac-item-dot" style={{ background: getLineColor(lineasEst[0]) }} />
                <div>
                  <div className="ac-item-lines">
                    {lineasEst.map((l) => (
                      <LineaBadge key={l} linea={l} size="sm" />
                    ))}
                  </div>
                  <span className="ac-item-name">{est.nombre}</span>
                </div>
              </div>
            )
          })}
        </div>
      )}

      <style>{`
        .ac { position: relative; flex: 1; min-width: 200px; }
        .ac-label { display: block; font-size: 0.72rem; font-weight: 700; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.07em; margin-bottom: 0.35rem; }
        .ac-input-wrap { display: flex; align-items: center; gap: 0.4rem; border: 2px solid var(--border); border-radius: var(--radius-sm); padding: 0.65rem 0.85rem; min-height: 50px; }
        .ac-input-wrap-active { border-color: var(--amber); }
        .ac-input { flex: 1; border: none; outline: none; font-size: 0.95rem; background: transparent; min-width: 0; color: var(--text); }
        .ac-clear { background: none; border: none; color: var(--text-dim); cursor: pointer; font-size: 0.8rem; flex-shrink: 0; }
        .ac-dropdown {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          right: 0;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          box-shadow: var(--shadow-lg);
          z-index: 50;
          max-height: 220px;
          overflow-y: auto;
        }
        .ac-item { display: flex; align-items: center; gap: 0.6rem; padding: 0.65rem 0.9rem; cursor: pointer; border-bottom: 1px solid var(--surface); }
        .ac-item:hover { background: var(--surface); }
        .ac-item-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
        .ac-item-lines { display: flex; gap: 0.25rem; margin-bottom: 0.15rem; }
        .ac-item-name { font-size: 0.9rem; color: var(--text); }
      `}</style>
    </div>
  )
}

// Traduce segments (lib/rutas.js#formatSegments) a `pasos` (forma de
// lib/pathfinder.js#findRoute), que es lo que RouteSteps consume.
function segmentsToPasos(segments) {
  const pasos = []
  segments.forEach((seg, i) => {
    seg.estaciones.forEach((nombre, j) => {
      if (i > 0 && j === 0) return // ya se agregó como última estación del segmento anterior
      pasos.push({ nombre, linea: seg.linea })
    })
  })
  return pasos
}
