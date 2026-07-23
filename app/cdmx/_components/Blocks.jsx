/**
 * Blocks.jsx — piezas de contenido compartidas por mi lote (estación, línea,
 * lineas, cdmx/**). Locales a este lote (ver nota en PageHero.jsx).
 */

/** Encabezado de sección con ícono opcional, consistente en todas las páginas. */
export function SectionHeading({ icon, children }) {
  return (
    <h2 className="mg-h2">
      {icon && <span aria-hidden="true">{icon}</span>}
      <span>{children}</span>
      <style>{`
        .mg-h2 { display: flex; align-items: center; gap: 0.55rem; font-size: clamp(1.15rem, 2.4vw, 1.4rem); }
      `}</style>
    </h2>
  )
}

/** Párrafo intro dentro de una tarjeta blanca — para el cuerpo principal de una ficha. */
export function IntroCard({ children }) {
  if (!children) return null
  return (
    <div className="mg-intro-card">
      <p>{children}</p>
      <style>{`
        .mg-intro-card { background: var(--bg); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: var(--space-5); margin-bottom: var(--space-6); box-shadow: var(--shadow-sm); }
        .mg-intro-card p { margin: 0; font-size: 1.02rem; line-height: 1.7; color: var(--text); }
      `}</style>
    </div>
  )
}

/** Grid de datos clave (alcaldía, tarifa, horario, etc.) — pares label/valor. */
export function FactGrid({ items }) {
  const visible = (items || []).filter((i) => i.value)
  if (visible.length === 0) return null
  return (
    <div className="mg-fact-grid">
      {visible.map((i) => (
        <div key={i.label} className="mg-fact">
          <span className="mg-fact-label">{i.label}</span>
          <span className="mg-fact-value">{i.value}</span>
        </div>
      ))}
      <style>{`
        .mg-fact-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: var(--space-3); margin-bottom: var(--space-6); }
        .mg-fact { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: var(--space-3) var(--space-4); }
        .mg-fact-label { display: block; font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-dim); margin-bottom: 0.2rem; }
        .mg-fact-value { display: block; font-weight: 700; color: var(--forest); font-size: 0.95rem; }
      `}</style>
    </div>
  )
}

/** Lista de tips con check-mark, sobre fondo linen. */
export function TipsCard({ title = 'Tips', tips }) {
  if (!tips || tips.length === 0) return null
  return (
    <div className="mg-block">
      <SectionHeading icon="💡">{title}</SectionHeading>
      <div className="mg-tips">
        <ul>
          {tips.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>
      <style>{`
        .mg-block { margin-bottom: var(--space-6); }
        .mg-tips { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: var(--space-4) var(--space-5); }
        .mg-tips ul { display: flex; flex-direction: column; gap: var(--space-2); }
        .mg-tips li { position: relative; padding-left: 1.5rem; font-size: 0.92rem; line-height: 1.55; color: var(--text); }
        .mg-tips li::before { content: '✓'; position: absolute; left: 0; color: var(--chiapas); font-weight: 800; }
      `}</style>
    </div>
  )
}

/** Tarjeta de texto libre con borde de acento — para historia, horario ideal, etc. */
export function NoteCard({ icon, title, accentColor, children }) {
  if (!children) return null
  return (
    <div className="mg-block">
      <SectionHeading icon={icon}>{title}</SectionHeading>
      <div className="mg-note" style={accentColor ? { borderLeftColor: accentColor } : undefined}>
        <p>{children}</p>
      </div>
      <style>{`
        .mg-note { background: var(--bg); border: 1px solid var(--border); border-left: 4px solid var(--chiapas); border-radius: var(--radius); padding: var(--space-4) var(--space-5); }
        .mg-note p { margin: 0; font-size: 0.94rem; line-height: 1.7; color: var(--text); }
      `}</style>
    </div>
  )
}

/**
 * Lista ORDENADA de paradas de una línea. Cada parada linkea a su página
 * propia si existe (`pagina:true`); si no, se muestra como texto plano —
 * nunca se inventa un link a una página que no existe.
 */
export function StopsList({ stops, color, hrefFor, currentSlug }) {
  if (!stops || stops.length === 0) return null
  return (
    <ol className="mg-stops">
      {stops.map((s, i) => {
        const isCurrent = s.slug === currentSlug
        const content = (
          <>
            <span className="mg-stops-dot" style={{ background: color || 'var(--forest)' }} />
            <span className="mg-stops-name">{s.nombre}</span>
            {isCurrent && <span className="mg-stops-here">estás aquí</span>}
          </>
        )
        return (
          <li key={s.slug + i} className={isCurrent ? 'mg-stops-current' : ''}>
            {s.pagina && !isCurrent ? (
              <a href={hrefFor(s.slug)} className="mg-stops-link">
                {content}
              </a>
            ) : (
              <span className="mg-stops-plain">{content}</span>
            )}
          </li>
        )
      })}
      <style>{`
        .mg-stops { display: flex; flex-direction: column; border-left: 3px solid var(--border); margin-left: 0.5rem; }
        .mg-stops li { position: relative; }
        .mg-stops-link, .mg-stops-plain {
          display: flex; align-items: center; gap: var(--space-3);
          padding: 0.55rem 0 0.55rem var(--space-4);
          margin-left: -1px;
          text-decoration: none;
          color: var(--text);
        }
        .mg-stops-link:hover { background: var(--surface); }
        .mg-stops-link:hover .mg-stops-name { color: var(--chiapas); }
        .mg-stops-plain { color: var(--text-dim); }
        .mg-stops-dot { width: 12px; height: 12px; border-radius: 50%; flex-shrink: 0; margin-left: -1.65rem; border: 2px solid var(--bg); }
        .mg-stops-name { font-weight: 600; font-size: 0.92rem; }
        .mg-stops-current .mg-stops-name { color: var(--amber-hover); }
        .mg-stops-here { font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--amber-hover); font-weight: 700; }
      `}</style>
    </ol>
  )
}

/** Grid de tarjetas de link simples (POIs, transferencias, links de cierre). */
export function LinkGrid({ items }) {
  if (!items || items.length === 0) return null
  return (
    <div className="mg-linkgrid">
      {items.map((it, i) =>
        it.href ? (
          <a key={i} href={it.href} className="mg-linkgrid-item mg-linkgrid-item-link">
            {it.color && <span className="mg-linkgrid-dot" style={{ background: it.color }} />}
            <span>{it.label}</span>
          </a>
        ) : (
          <span key={i} className="mg-linkgrid-item">
            {it.color && <span className="mg-linkgrid-dot" style={{ background: it.color }} />}
            <span>{it.label}</span>
          </span>
        )
      )}
      <style>{`
        .mg-linkgrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: var(--space-2); }
        .mg-linkgrid-item {
          display: flex; align-items: center; gap: 0.5rem;
          padding: 0.65rem 0.9rem;
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          background: var(--bg);
          font-size: 0.86rem; font-weight: 600; color: var(--text);
        }
        .mg-linkgrid-item-link { text-decoration: none; }
        .mg-linkgrid-item-link:hover { border-color: var(--border-strong); box-shadow: var(--shadow-sm); }
        .mg-linkgrid-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
      `}</style>
    </div>
  )
}

/** POIs / lugares cercanos — grid con tipo + distancia. */
export function PoiGrid({ pois }) {
  if (!pois || pois.length === 0) return null
  return (
    <div className="mg-poigrid">
      {pois.map((poi, i) => {
        const nombre = typeof poi === 'string' ? poi : poi.nombre
        const tipo = typeof poi === 'string' ? '' : poi.tipo
        const distancia = typeof poi === 'string' ? '' : poi.distancia
        return (
          <div key={i} className="mg-poi">
            <span className="mg-poi-name">{nombre}</span>
            {(tipo || distancia) && (
              <span className="mg-poi-meta">
                {tipo}
                {tipo && distancia ? ' · ' : ''}
                {distancia}
              </span>
            )}
          </div>
        )
      })}
      <style>{`
        .mg-poigrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: var(--space-2); }
        .mg-poi { background: var(--bg); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: var(--space-3) var(--space-4); }
        .mg-poi-name { display: block; font-weight: 700; font-size: 0.9rem; color: var(--text); }
        .mg-poi-meta { display: block; font-size: 0.76rem; color: var(--chiapas); text-transform: capitalize; margin-top: 0.15rem; }
      `}</style>
    </div>
  )
}

/** Fila de botones de cierre (volver a línea / hub / lineas). */
export function BottomNav({ links }) {
  if (!links || links.length === 0) return null
  return (
    <div className="mg-bottomnav">
      {links.map((l) => (
        <a key={l.href} href={l.href} className={`btn ${l.primary ? 'btn-primary' : 'btn-ghost'}`}>
          {l.label}
        </a>
      ))}
      <style>{`
        .mg-bottomnav { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: var(--space-3); margin-top: var(--space-6); }
        .mg-bottomnav .btn { width: 100%; }
      `}</style>
    </div>
  )
}
