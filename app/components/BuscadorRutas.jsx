'use client';

import { useState, useRef, useEffect } from 'react';
import { lineasDetalle } from '@/data/lineas-detalle';
import { estaciones } from '@/data/estaciones';
import { rutasPopulares } from '@/data/rutas-populares';
import {
  buildGraph,
  buildEstacionesMap,
  findRoute,
  formatSegments,
  estimateTime,
  COSTO_METRO,
} from '@/lib/rutas';
import StationIcon from '@/app/components/StationIcon';

// ── Colores por línea ─────────────────────────────────────────
const LINE_COLORS = {
  '1':  '#E91E8C',
  '2':  '#0057A8',
  '3':  '#6B7A2A',
  '4':  '#00B5C8',
  '5':  '#FFCD00',
  '6':  '#DA291C',
  '7':  '#F97316',
  '8':  '#00A650',
  '9':  '#6B3A2A',
  'A':  '#7C3AED',
  'B':  '#9E9E9E',
  '12': '#C9A84C',
};

function getLineColor(linea) {
  return LINE_COLORS[String(linea)] || '#888';
}

// ── Pre-computar fuera del render ─────────────────────────────
const graph         = buildGraph(lineasDetalle);
const estacionesMap = buildEstacionesMap(estaciones);
const estacionesUnicas = Array.from(
  new Map(
    [...estaciones]
      .sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'))
      .map((e) => [e.slug, e])
  ).values()
);

// ── Normalizar texto para búsqueda ────────────────────────────
function normalize(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

// ════════════════════════════════════════════════════════════════
// Sub-componente: AutocompleteInput
// ════════════════════════════════════════════════════════════════
function AutocompleteInput({ selectedSlug, onSelect, placeholder, label, icon }) {
  const [query, setQuery]       = useState('');
  const [open, setOpen]         = useState(false);
  const [filtered, setFiltered] = useState([]);
  const containerRef            = useRef(null);

  // Sincronizar texto cuando cambia slug desde afuera (rutas populares)
  useEffect(() => {
    if (selectedSlug) {
      setQuery(estacionesMap[selectedSlug]?.nombre || '');
    } else {
      setQuery('');
    }
  }, [selectedSlug]);

  // Filtrar estaciones al escribir
  useEffect(() => {
    if (!query || query.length < 1) { setFiltered([]); return; }
    const q = normalize(query);
    const results = estacionesUnicas
      .filter((e) => normalize(e.nombre).includes(q))
      .slice(0, 8);
    setFiltered(results);
  }, [query]);

  // Cerrar al hacer clic afuera
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
    setOpen(true);
    if (!e.target.value) onSelect('');
  };

  const handleSelect = (est) => {
    onSelect(est.slug);
    setOpen(false);
  };

  const lineas   = selectedSlug ? (estacionesMap[selectedSlug]?.lineas || []) : [];
  const hasValue = !!selectedSlug;

  return (
    <div ref={containerRef} style={{ position: 'relative', flex: 1, minWidth: 0 }}>
      <label style={s.label}>{icon} {label}</label>
      <div style={{ ...s.inputWrapper, borderColor: hasValue ? 'var(--metro-orange)' : '#ddd' }}>
        <input
          value={query}
          onChange={handleChange}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          style={s.input}
          autoComplete="off"
          spellCheck={false}
        />
        {hasValue && lineas.slice(0, 2).map((l) => (
          <span key={l} style={{ ...s.linePill, background: getLineColor(l) }}>L{l}</span>
        ))}
        {query && (
          <button
            onMouseDown={(e) => { e.preventDefault(); onSelect(''); setQuery(''); }}
            style={s.clearBtn}
            aria-label="Limpiar"
          >✕</button>
        )}
      </div>

      {open && filtered.length > 0 && (
        <div style={s.dropdown}>
          {filtered.map((est) => {
            const lineasEst = estacionesMap[est.slug]?.lineas || [est.linea];
            return (
              <div
                key={est.slug}
                onMouseDown={() => handleSelect(est)}
                style={s.dropdownItem}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <StationIcon slug={est.slug} size={24} linea={lineasEst[0]} />
                  <div>
                    <div style={{ display: 'flex', gap: '0.35rem', marginBottom: '0.15rem' }}>
                      {lineasEst.map((l) => (
                        <span key={l} style={{ ...s.linePillSm, background: getLineColor(l) }}>L{l}</span>
                      ))}
                    </div>
                    <span style={s.dropdownName}>{est.nombre}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ════════════════════════════════════════════════════════════════
// Sub-componente: JourneyViz — tira visual de la ruta
// ════════════════════════════════════════════════════════════════
function JourneyViz({ resultado }) {
  const pasaPorTasquena = resultado.segments.some(
    (seg) => seg.hastaSlug === 'tasquena' || seg.desdeSlug === 'tasquena'
  );

  return (
    <div style={s.journeyCard}>
      {/* Stats */}
      <div style={s.statsRow}>
        <div style={s.statItem}>
          <span style={s.statNum}>~{resultado.time.minutos}</span>
          <span style={s.statLabel}>min</span>
        </div>
        <div style={s.statDiv} />
        <div style={s.statItem}>
          <span style={s.statNum}>{resultado.time.transbordos}</span>
          <span style={s.statLabel}>transbordo{resultado.time.transbordos !== 1 ? 's' : ''}</span>
        </div>
        <div style={s.statDiv} />
        <div style={s.statItem}>
          <span style={s.statNum}>${COSTO_METRO}</span>
          <span style={s.statLabel}>MXN</span>
        </div>
        <div style={s.statDiv} />
        <div style={s.statItem}>
          <span style={s.statNum}>{resultado.totalEstaciones}</span>
          <span style={s.statLabel}>estaciones</span>
        </div>
      </div>

      {/* Tira horizontal de la ruta */}
      <div style={s.strip}>
        <div style={s.stripStation}>
          <StationIcon slug={resultado.segments[0]?.desdeSlug} size={22} linea={resultado.segments[0]?.linea} />
          <span style={s.stripStationName}>{resultado.origenNombre}</span>
        </div>

        {resultado.segments.map((seg, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            {/* Barra de la línea */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 4px' }}>
              <div style={{ ...s.stripBar, background: seg.lineColor }} />
              <span style={{ ...s.stripChip, background: seg.lineColor }}>
                L{seg.linea} · {seg.numEstaciones} est.
              </span>
            </div>
            {/* Transbordo o destino */}
            {idx < resultado.segments.length - 1 ? (
              <div style={s.stripStation}>
                <div style={{
                  ...s.stripDot,
                  background: 'white',
                  border: `3px solid ${seg.lineColor}`,
                  boxShadow: `0 0 0 2px ${getLineColor(resultado.segments[idx + 1]?.linea)}`,
                  width: '20px',
                  height: '20px',
                }} />
                <span style={{ ...s.stripStationName, color: 'var(--metro-orange)', fontWeight: 700 }}>⇅ {seg.hasta}</span>
              </div>
            ) : (
              <div style={s.stripStation}>
                <StationIcon slug={seg.hastaSlug} size={22} linea={seg.linea} />
                <span style={s.stripStationName}>{resultado.destinoNombre}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Detalle de segmentos */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {resultado.segments.map((seg, idx) => (
          <div key={idx}>
            <div style={{ ...s.segItem, borderLeftColor: seg.lineColor }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                <span style={{ ...s.lineCircle, background: seg.lineColor }}>{seg.linea}</span>
                <span style={s.segLineName}>Línea {seg.linea} — {seg.lineNombre}</span>
                <span style={s.segCount}>{seg.numEstaciones} estaciones</span>
              </div>
              <p style={s.segRoute}>{seg.desde} → {seg.hasta}</p>
            </div>
            {idx < resultado.segments.length - 1 && (
              <div style={s.transferBadge}>⇅ Transbordo en {seg.hasta}</div>
            )}
          </div>
        ))}
      </div>

      {/* Aviso Tasqueña → Azteca */}
      {pasaPorTasquena && (
        <div style={s.aztecaTip}>
          🏟️ <strong>Recuerda en Tasqueña:</strong> toma el <strong>Tren Ligero</strong> dirección Xochimilco hasta <strong>Estadio Azteca</strong>. La tarjeta del Metro <strong>NO funciona</strong> en Tren Ligero — paga aparte en taquilla.
        </div>
      )}
    </div>
  );
}

// ════════════════════════════════════════════════════════════════
// Componente principal: BuscadorRutas
// ════════════════════════════════════════════════════════════════
export default function BuscadorRutas({ asPage = false }) {
  const [origen,    setOrigen]    = useState('');
  const [destino,   setDestino]   = useState('');
  const [resultado, setResultado] = useState(null);
  const [error,     setError]     = useState(null);
  const resultRef = useRef(null);

  // Auto-calcular cuando cambian origen o destino
  useEffect(() => {
    setError(null);
    setResultado(null);

    if (!origen || !destino || origen === destino) return;

    const path = findRoute(graph, origen, destino);
    if (!path) {
      setError('No se encontró ruta entre estas estaciones.');
      return;
    }
    const segments = formatSegments(path, estacionesMap, lineasDetalle);
    const time     = estimateTime(segments);

    setResultado({
      segments,
      time,
      origenNombre:    estacionesMap[origen]?.nombre  || origen,
      destinoNombre:   estacionesMap[destino]?.nombre || destino,
      totalEstaciones: path.length,
    });

    setTimeout(() => {
      const isMobile = window.innerWidth <= 768;
      resultRef.current?.scrollIntoView({
        behavior: isMobile ? 'auto' : 'smooth',
        block: 'start'
      });
    }, 150);
  }, [origen, destino]);

  const handleSwap = () => {
    setOrigen(destino);
    setDestino(origen);
  };

  const handlePopular = (ruta) => {
    setOrigen(ruta.origen);
    setDestino(ruta.destino);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const rutasAzteca     = rutasPopulares.filter((r) => r.destino === 'tasquena');
  const rutasTuristicas = rutasPopulares.filter((r) => r.destino !== 'tasquena' && !r.connector).slice(0, 12);
  const rutasUSCA       = rutasPopulares.filter((r) => r.connector === 'to');

  // ── Widget de búsqueda (compartido) ──────────────────────────
  const searchWidget = (
    <div style={s.widget}>
      <div style={s.searchRow}>
        <AutocompleteInput
          selectedSlug={origen}
          onSelect={setOrigen}
          placeholder="Ej: Bellas Artes, Polanco…"
          label="Origen"
          icon="📍"
        />
        <button onClick={handleSwap} style={s.swapBtn} title="Intercambiar origen y destino">
          ⇅
        </button>
        <AutocompleteInput
          selectedSlug={destino}
          onSelect={setDestino}
          placeholder="Ej: Tasqueña, Zócalo…"
          label="Destino"
          icon="🏁"
        />
      </div>
      {origen && destino && origen === destino && (
        <p style={{ margin: '0.5rem 0 0', color: '#c00', fontSize: '0.85rem' }}>
          Selecciona estaciones diferentes.
        </p>
      )}
      {!origen && !destino && (
        <p style={{ margin: '0.75rem 0 0', fontSize: '0.8rem', color: '#aaa', textAlign: 'center' }}>
          Escribe el nombre de cualquier estación del Metro CDMX
        </p>
      )}
    </div>
  );

  // ── Rutas populares (compartido) ─────────────────────────────
  const popularSection = (
    <div style={s.popularWrap}>
      {/* FIFA */}
      <div style={s.popularHeader}>
        <h3 style={s.popularTitle}>🏟️ Rutas al Estadio Azteca — FIFA 2026</h3>
        <p style={s.popularSub}>Tasqueña + Tren Ligero → Estadio Azteca · $15 MXN total</p>
      </div>
      <div style={s.routeGrid}>
        {rutasAzteca.map((ruta) => {
          const active = origen === ruta.origen && destino === ruta.destino;
          const lineas = estacionesMap[ruta.origen]?.lineas || [];
          return (
            <button
              key={`${ruta.origen}_${ruta.destino}`}
              onClick={() => handlePopular(ruta)}
              style={{ ...s.routeCard, ...(active ? s.routeCardActive : {}) }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <StationIcon slug={ruta.origen} size={26} linea={lineas[0]} />
                <div style={{ display: 'flex', gap: '0.3rem' }}>
                  {lineas.slice(0, 2).map((l) => (
                    <span key={l} style={{ ...s.linePillSm, background: getLineColor(l) }}>L{l}</span>
                  ))}
                </div>
              </div>
              <span style={s.routeCardFrom}>{estacionesMap[ruta.origen]?.nombre || ruta.origen}</span>
              <span style={s.routeCardArrow}>↓ Azteca</span>
            </button>
          );
        })}
      </div>

      {/* Turísticas */}
      <div style={{ ...s.popularHeader, marginTop: '2rem' }}>
        <h3 style={s.popularTitle}>🗺️ Rutas turísticas populares</h3>
      </div>
      <div style={s.routeGrid}>
        {rutasTuristicas.map((ruta) => {
          const active = origen === ruta.origen && destino === ruta.destino;
          return (
            <button
              key={`${ruta.origen}_${ruta.destino}`}
              onClick={() => handlePopular(ruta)}
              style={{ ...s.routeCard, ...(active ? s.routeCardActive : {}) }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <StationIcon
                  slug={ruta.origen}
                  size={26}
                  linea={estacionesMap[ruta.origen]?.lineas?.[0]}
                />
              </div>
              <span style={s.routeCardFrom}>{estacionesMap[ruta.origen]?.nombre || ruta.origen}</span>
              <span style={s.routeCardArrow}>→</span>
              <span style={s.routeCardDest}>{estacionesMap[ruta.destino]?.nombre || ruta.destino}</span>
            </button>
          );
        })}
      </div>

      {/* US & Canada Cities */}
      {rutasUSCA.length > 0 && (
        <>
          <div style={{ ...s.popularHeader, marginTop: '2.5rem' }}>
            <h3 style={s.popularTitle}>🌎 Transit Routes — US & Canada</h3>
            <p style={s.popularSub}>Plan your trip across 13 cities with metro, subway & rail</p>
          </div>
          <div style={s.routeGrid}>
            {rutasUSCA.slice(0, 24).map((ruta) => (
              <a
                key={`${ruta.origen}_${ruta.destino}`}
                href={`/ruta/${ruta.origen}-to-${ruta.destino}/`}
                style={{ ...s.routeCard, textDecoration: 'none', color: 'inherit' }}
              >
                <span style={s.routeCardFrom}>{ruta.titulo}</span>
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );

  // ── Modo página completa ──────────────────────────────────────
  if (asPage) {
    return (
      <>
        {/* Hero oscuro */}
        <section style={s.hero}>
          <div style={s.heroText}>
            <h1 style={s.heroH1}>¿A dónde vas?</h1>
            <p style={s.heroSub}>Planea tu ruta en el Metro CDMX en segundos</p>
          </div>
          <div style={s.heroWidget}>{searchWidget}</div>
        </section>

        {/* Resultados + rutas populares */}
        <section style={s.contentSection}>
          <div style={s.maxWidth}>
            {error && <div style={s.errorAlert}>❌ {error}</div>}
            <div ref={resultRef}>
              {resultado && <JourneyViz resultado={resultado} />}
            </div>
            {popularSection}
          </div>
        </section>
      </>
    );
  }

  // ── Modo widget embebido (otros páginas) ──────────────────────
  return (
    <div style={s.embeddedContainer}>
      {searchWidget}
      {error && <div style={{ ...s.errorAlert, marginTop: '1rem' }}>❌ {error}</div>}
      <div ref={resultRef}>
        {resultado && <JourneyViz resultado={resultado} />}
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════
// Estilos
// ════════════════════════════════════════════════════════════════
const s = {
  // Autocomplete
  label: {
    display: 'block',
    fontSize: '0.75rem',
    fontWeight: 700,
    color: '#777',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    marginBottom: '0.4rem',
    fontFamily: "'DM Sans', sans-serif",
  },
  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    border: '2px solid #ddd',
    borderRadius: '12px',
    padding: '0.75rem 1rem',
    background: 'white',
    transition: 'border-color 0.2s',
    minHeight: '52px',
  },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: '1rem',
    fontFamily: "'DM Sans', sans-serif",
    color: '#111',
    background: 'transparent',
    minWidth: 0,
  },
  linePill: {
    padding: '0.15rem 0.55rem',
    borderRadius: '999px',
    fontSize: '0.7rem',
    fontWeight: 700,
    color: 'white',
    whiteSpace: 'nowrap',
    fontFamily: "'Syne', sans-serif",
    flexShrink: 0,
  },
  linePillSm: {
    padding: '0.1rem 0.4rem',
    borderRadius: '999px',
    fontSize: '0.65rem',
    fontWeight: 700,
    color: 'white',
    fontFamily: "'Syne', sans-serif",
  },
  clearBtn: {
    background: 'none',
    border: 'none',
    color: '#bbb',
    cursor: 'pointer',
    fontSize: '0.85rem',
    padding: '0 0.1rem',
    flexShrink: 0,
    lineHeight: 1,
  },
  dropdown: {
    position: 'absolute',
    top: 'calc(100% + 6px)',
    left: 0,
    right: 0,
    background: 'white',
    borderRadius: '14px',
    boxShadow: '0 16px 48px rgba(0,0,0,0.18)',
    zIndex: 1000,
    overflow: 'hidden',
    border: '1px solid #eee',
    maxHeight: '200px',
    overflowY: 'auto',
  },
  dropdownItem: {
    padding: '0.75rem 1rem',
    cursor: 'pointer',
    borderBottom: '1px solid #f4f4f4',
    transition: 'background 0.1s',
    minHeight: '44px',
    display: 'flex',
    alignItems: 'center',
  },
  dropdownName: {
    fontSize: '0.95rem',
    color: '#111',
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
  },

  // Widget de búsqueda
  widget: {
    background: 'white',
    borderRadius: '20px',
    padding: '1.75rem',
    boxShadow: '0 24px 64px rgba(0,0,0,0.28)',
  },
  searchRow: {
    display: 'flex',
    gap: '0.75rem',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
  },
  swapBtn: {
    background: '#f4f4f4',
    border: 'none',
    borderRadius: '50%',
    width: '44px',
    height: '44px',
    cursor: 'pointer',
    fontSize: '1.2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginBottom: '0.1rem',
    transition: 'background 0.15s',
  },

  // Journey card
  journeyCard: {
    background: 'white',
    borderRadius: '16px',
    padding: '1.5rem',
    boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
    marginTop: '1.25rem',
  },
  statsRow: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: '1.25rem',
    borderBottom: '2px solid #f4f4f4',
    marginBottom: '1.5rem',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.15rem',
  },
  statNum: {
    fontSize: '1.8rem',
    fontWeight: 800,
    fontFamily: "'Syne', sans-serif",
    color: '#111',
    lineHeight: 1,
  },
  statLabel: {
    fontSize: '0.72rem',
    color: '#999',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    fontFamily: "'DM Sans', sans-serif",
  },
  statDiv: {
    width: '1px',
    height: '40px',
    background: '#eee',
  },

  // Strip de ruta
  strip: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.5rem',
    overflowX: 'auto',
    paddingBottom: '0.5rem',
    gap: 0,
  },
  stripStation: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    flexShrink: 0,
    minWidth: '70px',
    minHeight: '44px',
    justifyContent: 'center',
  },
  stripDot: {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    flexShrink: 0,
  },
  stripStationName: {
    fontSize: '0.7rem',
    color: '#555',
    fontFamily: "'DM Sans', sans-serif",
    textAlign: 'center',
    maxWidth: '72px',
    lineHeight: 1.3,
  },
  stripBar: {
    height: '6px',
    borderRadius: '3px',
    width: '100%',
  },
  stripChip: {
    marginTop: '0.3rem',
    padding: '0.1rem 0.55rem',
    borderRadius: '999px',
    fontSize: '0.62rem',
    fontWeight: 700,
    color: 'white',
    fontFamily: "'Syne', sans-serif",
    whiteSpace: 'nowrap',
  },

  // Detalle de segmentos
  segItem: {
    borderLeft: '4px solid',
    padding: '0.875rem 1.25rem',
    background: '#fafafa',
    borderRadius: '0 10px 10px 0',
  },
  lineCircle: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '0.72rem',
    fontWeight: 700,
    fontFamily: "'Syne', sans-serif",
    flexShrink: 0,
  },
  segLineName: {
    fontFamily: "'Syne', sans-serif",
    fontWeight: 700,
    fontSize: '0.88rem',
    color: '#111',
    flex: 1,
  },
  segCount: {
    fontSize: '0.78rem',
    color: '#aaa',
    fontFamily: "'DM Sans', sans-serif",
  },
  segRoute: {
    fontSize: '0.85rem',
    color: '#666',
    margin: 0,
    fontFamily: "'DM Sans', sans-serif",
  },
  transferBadge: {
    textAlign: 'center',
    padding: '0.5rem 1.25rem',
    fontSize: '0.8rem',
    fontWeight: 700,
    color: 'var(--metro-orange)',
    fontFamily: "'Syne', sans-serif",
    background: '#fff9f0',
    borderLeft: '4px solid var(--metro-orange)',
    borderRadius: '0 10px 10px 0',
    letterSpacing: '0.03em',
  },
  aztecaTip: {
    marginTop: '1rem',
    padding: '0.875rem 1.25rem',
    background: '#fff9f0',
    border: '1.5px solid var(--metro-orange)',
    borderRadius: '10px',
    fontSize: '0.875rem',
    color: '#333',
    lineHeight: 1.65,
    fontFamily: "'DM Sans', sans-serif",
  },
  errorAlert: {
    padding: '0.875rem 1.25rem',
    background: '#fff0f0',
    border: '1.5px solid #ffb3b3',
    borderRadius: '10px',
    color: '#c00',
    fontSize: '0.9rem',
    fontWeight: 600,
    fontFamily: "'DM Sans', sans-serif",
  },

  // Rutas populares
  popularWrap: {
    marginTop: '2.5rem',
  },
  popularHeader: {
    marginBottom: '1rem',
  },
  popularTitle: {
    fontSize: '1.05rem',
    fontFamily: "'Syne', sans-serif",
    fontWeight: 700,
    color: '#111',
    margin: '0 0 0.25rem',
  },
  popularSub: {
    fontSize: '0.82rem',
    color: '#888',
    margin: 0,
    fontFamily: "'DM Sans', sans-serif",
  },
  routeGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
    gap: '0.65rem',
  },
  routeCard: {
    background: 'white',
    border: '1.5px solid #e8e8e8',
    borderRadius: '12px',
    padding: '0.875rem 1rem',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.15rem',
    textAlign: 'left',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    fontFamily: "'DM Sans', sans-serif",
    transition: 'box-shadow 0.15s, border-color 0.15s',
    minHeight: '44px',
    justifyContent: 'center',
  },
  routeCardActive: {
    border: '2px solid var(--metro-orange)',
    background: '#fff9f0',
    boxShadow: '0 4px 16px rgba(245,166,35,0.2)',
  },
  routeCardFrom: {
    fontSize: '0.88rem',
    fontWeight: 600,
    color: '#111',
  },
  routeCardArrow: {
    fontSize: '0.75rem',
    color: '#bbb',
  },
  routeCardDest: {
    fontSize: '0.82rem',
    color: '#666',
  },

  // Página completa
  hero: {
    background: 'var(--metro-dark)',
    padding: '3.5rem 1.5rem 4rem',
    color: 'white',
  },
  heroText: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  heroH1: {
    fontFamily: "'Syne', sans-serif",
    fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
    fontWeight: 800,
    margin: '0 0 0.75rem',
    lineHeight: 1.05,
    letterSpacing: '-0.02em',
  },
  heroSub: {
    fontSize: '1.1rem',
    opacity: 0.7,
    fontFamily: "'DM Sans', sans-serif",
    margin: 0,
  },
  heroWidget: {
    maxWidth: '760px',
    margin: '0 auto',
  },
  contentSection: {
    background: 'var(--metro-gray)',
    padding: '2rem 1.5rem 4rem',
    minHeight: '300px',
  },
  maxWidth: {
    maxWidth: '760px',
    margin: '0 auto',
  },

  // Modo embebido
  embeddedContainer: {
    maxWidth: '680px',
    margin: '2rem auto 0',
    padding: '0 1rem',
  },
};
