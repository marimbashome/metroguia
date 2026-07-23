/**
 * PageHero — cabecera editorial compartida por TODAS las páginas de mi lote
 * (app/estacion, app/linea, app/lineas, app/cdmx/**). Local a este lote
 * (no vive en app/components/, que es exclusivo del agente Foundation) pero
 * se reutiliza en ~300 páginas — de ahí que el <style> vaya una sola vez
 * aquí en vez de repetirse inline en cada page.jsx.
 *
 * @param {{label:string, href:string}[]} breadcrumb
 * @param {string} eyebrow    - kicker sobre el título ("Metro CDMX · Línea 2")
 * @param {string} title
 * @param {string} [subtitle]
 * @param {string} [accentColor] - color de la línea/sistema (borde superior + crest)
 * @param {string} [crest]    - texto corto dentro del círculo de color (ej. "2", "MB", "🚡")
 * @param {{label:string, value:string}[]} [stats]
 */
export default function PageHero({ breadcrumb, eyebrow, title, subtitle, accentColor, crest, stats }) {
  return (
    <section className="mg-hero" style={accentColor ? { borderTopColor: accentColor } : undefined}>
      <div className="container">
        {breadcrumb?.length > 0 && (
          <nav aria-label="Breadcrumb" className="mg-hero-breadcrumb">
            {breadcrumb.map((item, i) => (
              <span key={item.href}>
                {i > 0 && <span className="mg-hero-sep">/</span>}
                {i === breadcrumb.length - 1 ? (
                  <span className="mg-hero-current">{item.label}</span>
                ) : (
                  <a href={item.href}>{item.label}</a>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="mg-hero-head">
          {crest && (
            <div className="mg-hero-crest" style={accentColor ? { background: accentColor } : undefined}>
              {crest}
            </div>
          )}
          <div className="mg-hero-titles">
            {eyebrow && <p className="mg-hero-eyebrow">{eyebrow}</p>}
            <h1 className="mg-hero-title">{title}</h1>
            {subtitle && <p className="mg-hero-subtitle">{subtitle}</p>}
          </div>
        </div>

        {stats?.length > 0 && (
          <div className="mg-hero-stats">
            {stats.map((s) => (
              <div key={s.label} className="mg-hero-stat">
                <span className="mg-hero-stat-value">{s.value}</span>
                <span className="mg-hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .mg-hero {
          background: linear-gradient(135deg, var(--forest) 0%, var(--forest-soft) 100%);
          color: var(--text-on-dark);
          padding: var(--space-6) 0 var(--space-6);
          border-top: 6px solid var(--amber);
        }
        .mg-hero-breadcrumb { font-size: 0.78rem; color: rgba(248,244,236,0.72); margin-bottom: var(--space-4); }
        .mg-hero-breadcrumb a { color: var(--amber); text-decoration: none; font-weight: 600; }
        .mg-hero-breadcrumb a:hover { text-decoration: underline; }
        .mg-hero-sep { margin: 0 0.5rem; opacity: 0.5; }
        .mg-hero-current { color: rgba(248,244,236,0.85); }
        .mg-hero-head { display: flex; align-items: center; gap: var(--space-4); flex-wrap: wrap; }
        .mg-hero-crest {
          width: 4.25rem; height: 4.25rem; border-radius: 50%;
          background: var(--amber);
          color: #fff;
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-display);
          font-size: 1.5rem; font-weight: 700;
          flex-shrink: 0;
          box-shadow: var(--shadow-lg);
          border: 3px solid rgba(255,255,255,0.14);
        }
        .mg-hero-titles { flex: 1; min-width: 240px; }
        .mg-hero-eyebrow {
          margin: 0 0 0.35rem;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--amber);
        }
        .mg-hero-title { color: #fff; margin: 0; font-size: clamp(1.7rem, 4.5vw, 2.6rem); line-height: 1.08; }
        .mg-hero-subtitle { margin: 0.6rem 0 0; color: rgba(248,244,236,0.82); font-size: 0.95rem; max-width: 60ch; }
        .mg-hero-stats {
          margin-top: var(--space-5);
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: var(--space-2);
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: var(--radius-lg);
          padding: var(--space-4);
        }
        .mg-hero-stat { display: flex; flex-direction: column; gap: 0.1rem; }
        .mg-hero-stat-value { font-family: var(--font-display); font-weight: 700; font-size: 1.25rem; color: #fff; line-height: 1.1; }
        .mg-hero-stat-label { font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.06em; color: rgba(248,244,236,0.7); }
      `}</style>
    </section>
  )
}
