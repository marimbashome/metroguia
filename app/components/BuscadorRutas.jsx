'use client';

import { useState } from 'react';
import { lineasDetalle } from '@/data/lineas-detalle';
import { estaciones } from '@/data/estaciones';
import { buildGraph, buildEstacionesMap, findRoute, formatSegments, estimateTime, COSTO_METRO } from '@/lib/rutas';

// Pre-computa fuera del componente (solo una vez)
const graph = buildGraph(lineasDetalle);
const estacionesMap = buildEstacionesMap(estaciones);
const estacionesUnicas = Array.from(
  new Map([...estaciones].sort((a, b) => a.nombre.localeCompare(b.nombre, 'es')).map((e) => [e.slug, e])).values()
);

export default function BuscadorRutas() {
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleBuscar = () => {
    setError(null);
    setResultado(null);
    if (!origen || !destino) { setError('Selecciona origen y destino'); return; }
    if (origen === destino) { setError('Selecciona estaciones diferentes'); return; }
    setLoading(true);
    setTimeout(() => {
      const path = findRoute(graph, origen, destino);
      if (!path) { setError('No se encontró ruta entre estas estaciones'); setLoading(false); return; }
      const segments = formatSegments(path, estacionesMap, lineasDetalle);
      const time = estimateTime(segments);
      setResultado({ segments, time, origenNombre: estacionesMap[origen]?.nombre || origen,
        destinoNombre: estacionesMap[destino]?.nombre || destino, totalEstaciones: path.length });
      setLoading(false);
    }, 200);
  };

  const isDisabled = !origen || !destino || origen === destino || loading;

  return (
    <div style={s.container}>
      <div style={s.widget}>
        <h3 style={s.widgetTitle}>🚇 Planea tu ruta en metro</h3>
        <div style={s.formRow}>
          <div style={s.formGroup}>
            <label style={s.label} htmlFor="buscador-origen">Origen</label>
            <div style={s.selectWrapper}>
              <select id="buscador-origen" value={origen} onChange={(e) => setOrigen(e.target.value)} style={s.select}>
                <option value="">Selecciona estación…</option>
                {estacionesUnicas.map((est) => (
                  <option key={`o-${est.slug}`} value={est.slug}>{est.nombre} — L{est.linea}</option>
                ))}
              </select>
              <span style={s.arrow}>▼</span>
            </div>
          </div>
          <div style={s.swapIcon}>⇅</div>
          <div style={s.formGroup}>
            <label style={s.label} htmlFor="buscador-destino">Destino</label>
            <div style={s.selectWrapper}>
              <select id="buscador-destino" value={destino} onChange={(e) => setDestino(e.target.value)} style={s.select}>
                <option value="">Selecciona estación…</option>
                {estacionesUnicas.map((est) => (
                  <option key={`d-${est.slug}`} value={est.slug}>{est.nombre} — L{est.linea}</option>
                ))}
              </select>
              <span style={s.arrow}>▼</span>
            </div>
          </div>
        </div>
        <button onClick={handleBuscar} disabled={isDisabled} style={{ ...s.button, ...(isDisabled ? s.buttonDisabled : {}) }}>
          {loading ? 'Buscando…' : 'BUSCAR RUTA →'}
        </button>
      </div>
      {error && <div style={s.errorAlert}>{error}</div>}
      {resultado && (
        <div style={s.resultCard}>
          <div style={s.resultHeader}>
            <h4 style={s.resultTitle}>{resultado.origenNombre} → {resultado.destinoNombre}</h4>
            <div style={s.badges}>
              <span style={s.badge}>⏱ ~{resultado.time.minutos} min</span>
              <span style={s.badge}>🔄 {resultado.time.transbordos} transbordo{resultado.time.transbordos !== 1 ? 's' : ''}</span>
              <span style={s.badge}>💰 ${COSTO_METRO} MXN</span>
              <span style={s.badge}>🚉 {resultado.totalEstaciones} estaciones</span>
            </div>
          </div>
          <div style={s.segments}>
            {resultado.segments.map((seg, idx) => (
              <div key={idx}>
                <div style={{ ...s.segment, borderLeftColor: seg.lineColor }}>
                  <div style={s.segmentLineLabel}>
                    <span style={{ ...s.lineaDot, backgroundColor: seg.lineColor }}>{seg.linea}</span>
                    <span style={s.segmentLineName}>Línea {seg.linea} — {seg.lineNombre}</span>
                  </div>
                  <p style={s.segmentRoute}>
                    {seg.desde} <span style={{ color: '#999' }}>→</span> {seg.hasta}
                    <span style={s.stationCount}> ({seg.numEstaciones} estaciones)</span>
                  </p>
                  <p style={s.estacionesList}>{seg.estaciones.join(' · ')}</p>
                </div>
                {idx < resultado.segments.length - 1 && (
                  <div style={s.transbordoDivider}>
                    <span style={s.transbordoText}>↕ Transbordo en {seg.hasta}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const s = {
  container: { maxWidth: '680px', margin: '2.5rem auto 0', padding: '0 1rem', textAlign: 'left' },
  widget: { background: 'white', borderRadius: 'var(--radius)', padding: '2rem', boxShadow: '0 8px 32px rgba(0,0,0,0.18)' },
  widgetTitle: { fontSize: '1.125rem', fontFamily: "'Syne', sans-serif", fontWeight: 700, marginBottom: '1.5rem', textAlign: 'center', color: '#111' },
  formRow: { display: 'flex', gap: '0.75rem', alignItems: 'flex-end', marginBottom: '1.25rem', flexWrap: 'wrap' },
  formGroup: { flex: 1, minWidth: '180px' },
  swapIcon: { fontSize: '1.25rem', color: '#999', paddingBottom: '0.5rem', flexShrink: 0 },
  label: { display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.85rem', color: '#555', textTransform: 'uppercase', letterSpacing: '0.05em' },
  selectWrapper: { position: 'relative' },
  select: { width: '100%', padding: '0.75rem 2.5rem 0.75rem 1rem', border: '2px solid #e0e0e0', borderRadius: 'var(--radius)', fontSize: '0.95rem', fontFamily: "'DM Sans', sans-serif", appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer', backgroundColor: 'white', color: '#111' },
  arrow: { position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#999', fontSize: '0.7rem' },
  button: { width: '100%', background: 'var(--metro-orange)', color: 'white', padding: '0.875rem 2rem', fontSize: '0.95rem', fontWeight: 700, fontFamily: "'Syne', sans-serif", borderRadius: 'var(--radius)', border: 'none', cursor: 'pointer', letterSpacing: '0.05em' },
  buttonDisabled: { background: '#ccc', cursor: 'not-allowed', opacity: 0.7 },
  errorAlert: { marginTop: '1rem', padding: '0.875rem 1.25rem', background: '#fff0f0', border: '1.5px solid #ffb3b3', borderRadius: 'var(--radius)', color: '#c00', fontSize: '0.9rem', fontWeight: 600 },
  resultCard: { marginTop: '1.5rem', background: 'white', borderRadius: 'var(--radius)', padding: '1.75rem', boxShadow: '0 8px 32px rgba(0,0,0,0.14)' },
  resultHeader: { marginBottom: '1.5rem', paddingBottom: '1.25rem', borderBottom: '2px solid #f0f0f0' },
  resultTitle: { fontSize: '1.25rem', fontFamily: "'Syne', sans-serif", fontWeight: 700, color: '#111', marginBottom: '0.875rem' },
  badges: { display: 'flex', gap: '0.625rem', flexWrap: 'wrap' },
  badge: { background: '#f4f4f4', padding: '0.35rem 0.75rem', borderRadius: '999px', fontSize: '0.825rem', fontWeight: 600, color: '#333' },
  segments: { display: 'flex', flexDirection: 'column' },
  segment: { borderLeft: '4px solid #ccc', padding: '1rem 1.25rem', background: '#fafafa', borderRadius: '0 var(--radius) var(--radius) 0' },
  segmentLineLabel: { display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.5rem' },
  lineaDot: { width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.75rem', fontWeight: 700, fontFamily: "'Syne', sans-serif", flexShrink: 0 },
  segmentLineName: { fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '0.9rem', color: '#111' },
  segmentRoute: { fontSize: '0.9rem', fontWeight: 600, color: '#333', margin: '0.25rem 0' },
  stationCount: { fontWeight: 400, color: '#888', fontSize: '0.82rem' },
  estacionesList: { fontSize: '0.8rem', color: '#888', lineHeight: 1.6, marginTop: '0.25rem', marginBottom: 0 },
  transbordoDivider: { textAlign: 'center', padding: '0.875rem 0' },
  transbordoText: { display: 'inline-block', background: '#fff9f0', border: '1.5px solid var(--metro-orange)', borderRadius: '999px', padding: '0.3rem 1rem', color: 'var(--metro-orange)', fontWeight: 700, fontSize: '0.82rem', fontFamily: "'Syne', sans-serif" },
};
