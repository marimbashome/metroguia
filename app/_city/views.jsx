import StationCard from '@/app/components/StationCard'
import LineaBadge from '@/app/components/LineaBadge'
import RouteSteps from '@/app/components/RouteSteps'
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema'
import { buildAllStationLdPayloads } from '@/lib/station-schema'
import {
  lineasDeEstacion,
  zonaDeEstacion,
  normalizarParaStationCard,
  estacionesDeLinea,
  limpiarTextoMundial,
  limpiarTipsMundial,
  limpiarNombreMundial,
  truncate,
} from './lib'

/* ────────────────────────────────────────────────────────────────────────
   CityHubView — /[ciudad]/
   ──────────────────────────────────────────────────────────────────────── */
export function CityHubView({ cityConfig, estaciones, lineas, grafo, basePath, systemsLabel, exampleRoutes = [], subsistemas = [] }) {
  const destacadas = estaciones.slice(0, 12)
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'MetroGuia', url: '/' }, { name: cityConfig.name, url: basePath }]} />
      <section className="ch-hero">
        <div className="container">
          <p className="ch-eyebrow">{cityConfig.state}</p>
          <h1>Transporte público en {cityConfig.name}</h1>
          <p className="ch-sub">
            {systemsLabel} — {lineas.length} línea{lineas.length === 1 ? '' : 's'}, {estaciones.length} estación{estaciones.length === 1 ? '' : 'es'}.
          </p>
          {!cityConfig.tiemposReales && (
            <p className="ch-honesty">
              Los tiempos de viaje entre estaciones aún no están verificados para {cityConfig.name} — mostramos estaciones y transbordos reales, sin inventar minutos.
            </p>
          )}
        </div>
      </section>

      {subsistemas.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <h2>Sistemas</h2>
            <div className="ch-subsystems">
              {subsistemas.map((s) => (
                <a key={s.href} href={s.href} className="card ch-subsystem-card">
                  <span className="ch-subsystem-name">{s.nombre}</span>
                  <span className="ch-subsystem-desc">{s.descripcion}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <h2>Líneas</h2>
          <div className="ch-lineas-grid">
            {lineas.map((l) => {
              const n = estacionesDeLinea(estaciones, grafo, l.id, l.estaciones).length
              return (
                <a key={l.id} href={`${basePath}linea/${encodeURIComponent(l.id)}/`} className="card ch-linea-card">
                  <LineaBadge linea={l.id} />
                  <span className="ch-linea-name">{l.colorNombre || l.h1 || `Línea ${l.id}`}</span>
                  <span className="ch-linea-meta">{l.inicio} → {l.fin}{n ? ` · ${n} estaciones` : ''}</span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>Estaciones</h2>
          <div className="ch-estaciones-grid">
            {destacadas.map((e) => (
              <StationCard
                key={e.slug}
                estacion={normalizarParaStationCard(e)}
                href={`${basePath}estacion/${e.slug}/`}
              />
            ))}
          </div>
          {estaciones.length > destacadas.length && (
            <p className="ch-more">
              +{estaciones.length - destacadas.length} estaciones más — usa el planificador para buscar por nombre.
            </p>
          )}
        </div>
      </section>

      {exampleRoutes.length > 0 && (
        <section className="section">
          <div className="container">
            <h2>Rutas de ejemplo</h2>
            <div className="ch-routes-grid">
              {exampleRoutes.map((r) => (
                <a key={r.slug} href={`${basePath}ruta/${r.slug}/`} className="card ch-route-card">
                  {r.origenNombre} <span aria-hidden="true">→</span> {r.destinoNombre}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        .ch-hero { background: var(--forest); color: var(--text-on-dark); padding: var(--space-8) 0 var(--space-6); }
        .ch-eyebrow { text-transform: uppercase; letter-spacing: 0.08em; font-size: 0.78rem; opacity: 0.75; margin: 0 0 var(--space-2); }
        .ch-hero h1 { color: var(--text-on-dark); margin-bottom: var(--space-2); }
        .ch-sub { opacity: 0.85; margin: 0 0 var(--space-3); }
        .ch-honesty {
          display: inline-block; font-size: 0.82rem; color: var(--text-on-dark);
          background: rgba(224,147,42,0.18); border: 1px solid var(--amber);
          border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); margin: 0;
        }
        .ch-subsystems { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: var(--space-4); }
        .ch-subsystem-card { padding: var(--space-5); text-decoration: none; display: flex; flex-direction: column; gap: 0.3rem; }
        .ch-subsystem-name { font-family: var(--font-display); font-weight: 700; color: var(--forest); font-size: 1.1rem; }
        .ch-subsystem-desc { font-size: 0.85rem; color: var(--text-muted); }
        .ch-lineas-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: var(--space-3); }
        .ch-linea-card { padding: var(--space-4); text-decoration: none; display: flex; flex-direction: column; gap: 0.4rem; align-items: flex-start; }
        .ch-linea-name { font-weight: 700; color: var(--forest); }
        .ch-linea-meta { font-size: 0.8rem; color: var(--text-dim); }
        .ch-estaciones-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: var(--space-3); }
        .ch-more { margin-top: var(--space-4); color: var(--text-dim); font-size: 0.85rem; }
        .ch-routes-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: var(--space-3); }
        .ch-route-card { padding: var(--space-3) var(--space-4); text-decoration: none; font-weight: 600; color: var(--forest); }
      `}</style>
    </>
  )
}

/* ────────────────────────────────────────────────────────────────────────
   SystemHubView — subsistema dentro de una ciudad (ej. /gdl/macrobus/,
   /mty/ecovia/). Igual que CityHubView pero con breadcrumb de 3 niveles
   (Home > Ciudad > Subsistema) y encabezado propio.
   ──────────────────────────────────────────────────────────────────────── */
export function SystemHubView({ cityConfig, cityBasePath, systemName, systemDescription, estaciones, lineas = [], basePath }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'MetroGuia', url: '/' },
          { name: cityConfig.name, url: cityBasePath },
          { name: systemName, url: basePath },
        ]}
      />
      <section className="ch-hero">
        <div className="container">
          <p className="ch-eyebrow"><a href={cityBasePath} style={{ color: 'inherit' }}>{cityConfig.name}</a></p>
          <h1>{systemName}</h1>
          <p className="ch-sub">{systemDescription}</p>
        </div>
      </section>

      {lineas.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <h2>Líneas</h2>
            <div className="ch-lineas-grid">
              {lineas.map((l) => (
                <a key={l.id} href={`${basePath}linea/${encodeURIComponent(l.id)}/`} className="card ch-linea-card">
                  <LineaBadge linea={l.id} />
                  <span className="ch-linea-name">{l.colorNombre || `Línea ${l.id}`}</span>
                  <span className="ch-linea-meta">{l.inicio} → {l.fin}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <h2>Estaciones ({estaciones.length})</h2>
          <div className="ch-estaciones-grid">
            {estaciones.map((e) => (
              <StationCard key={e.slug} estacion={normalizarParaStationCard(e)} href={`${basePath}estacion/${e.slug}/`} />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .ch-hero { background: var(--forest); color: var(--text-on-dark); padding: var(--space-8) 0 var(--space-6); }
        .ch-eyebrow { text-transform: uppercase; letter-spacing: 0.08em; font-size: 0.78rem; opacity: 0.75; margin: 0 0 var(--space-2); }
        .ch-hero h1 { color: var(--text-on-dark); margin-bottom: var(--space-2); }
        .ch-sub { opacity: 0.85; margin: 0; }
        .ch-lineas-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: var(--space-3); }
        .ch-linea-card { padding: var(--space-4); text-decoration: none; display: flex; flex-direction: column; gap: 0.4rem; align-items: flex-start; }
        .ch-linea-name { font-weight: 700; color: var(--forest); }
        .ch-linea-meta { font-size: 0.8rem; color: var(--text-dim); }
        .ch-estaciones-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: var(--space-3); }
      `}</style>
    </>
  )
}

/* ────────────────────────────────────────────────────────────────────────
   StationView — /[ciudad]/estacion/[slug]/
   ──────────────────────────────────────────────────────────────────────── */
export function StationView({ estacion, cityConfig, basePath, linePath, grafo, breadcrumbLabel = 'Estación', crumbs, pathOverride }) {
  const grafoNode = grafo?.[estacion.slug]
  const lineasArr = lineasDeEstacion(estacion, grafoNode)
  const zona = zonaDeEstacion(estacion)
  const intro = limpiarTextoMundial(estacion.intro)
  const descripcion = limpiarTextoMundial(estacion.descripcion_turistica)
  const tips = limpiarTipsMundial(estacion.tips)
  const mejorHorario = limpiarTextoMundial(estacion.mejor_horario)
  const horarios = estacion.horarios
  const horariosNotas = limpiarTextoMundial(horarios?.notas)
  const accesibilidad = estacion.accesibilidad
  const lugaresRaw = Array.isArray(estacion.lugares_cercanos) && estacion.lugares_cercanos.length > 0
    ? estacion.lugares_cercanos
    : Array.isArray(estacion.pois) ? estacion.pois : []
  // pois[].nombre/descripcion también traen menciones sueltas al Mundial/FIFA
  // 2026 (ej. "Estadio Akron (FIFA 2026)") — nombres no tienen puntuación de
  // oración, así que se limpian con limpiarNombreMundial (quita el paréntesis
  // "(FIFA 2026)"; si el nombre ENTERO es la mención, se omite el POI en vez
  // de mostrar un nombre a medias).
  const lugares = lugaresRaw
    .map((p) => ({ ...p, nombre: limpiarNombreMundial(p.nombre), descripcion: limpiarTextoMundial(p.descripcion) }))
    .filter((p) => p.nombre)
  const vecinas = grafoNode?.adyacentes || []
  const path = pathOverride || `${basePath}estacion/${estacion.slug}/`

  // Copia saneada para el JSON-LD compartido (lib/station-schema.js lee
  // meta_description y pois[].nombre directo del objeto que se le pasa).
  const estacionParaSchema = {
    ...estacion,
    meta_description: limpiarTextoMundial(estacion.meta_description),
    pois: lugares,
  }
  const ldPayloads = buildAllStationLdPayloads(estacionParaSchema, {
    cityPath: basePath.replace(/^\/|\/$/g, ''),
    linePath: (linePath || basePath).replace(/^\/|\/$/g, ''),
    cityName: cityConfig.name,
    region: zona || undefined,
    linea: lineasArr[0],
  })

  return (
    <>
      <BreadcrumbSchema
        items={
          crumbs || [
            { name: 'MetroGuia', url: '/' },
            { name: cityConfig.name, url: basePath },
            { name: breadcrumbLabel, url: `${basePath}estacion/` },
            { name: estacion.nombre, url: path },
          ]
        }
      />
      {ldPayloads.map((p, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: p }} />
      ))}

      <section className="section">
        <div className="container-narrow">
          <p className="sv-eyebrow">{cityConfig.name}</p>
          <h1>Estación {estacion.nombre}</h1>
          {lineasArr.length > 0 && (
            <div className="sv-lineas">
              {lineasArr.map((l) => (
                <a key={l} href={`${linePath || basePath}linea/${encodeURIComponent(l)}/`}>
                  <LineaBadge linea={l} />
                </a>
              ))}
            </div>
          )}
          <p className="sv-zona">{zona || 'Zona: Por confirmarse'}</p>

          {intro && <p className="sv-intro">{intro}</p>}
          {descripcion && descripcion !== intro && <p>{descripcion}</p>}

          {tips.length > 0 && (
            <div className="sv-block">
              <h2>Tips</h2>
              <ul className="sv-list">
                {tips.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </div>
          )}

          {mejorHorario && (
            <div className="sv-block">
              <h2>Mejor momento para visitar</h2>
              <p>{mejorHorario}</p>
            </div>
          )}

          {horarios && (horarios.apertura || horariosNotas) && (
            <div className="sv-block">
              <h2>Horario</h2>
              <p>
                {horarios.apertura && horarios.cierre
                  ? `${horarios.apertura} – ${horarios.cierre}`
                  : null}
                {horariosNotas ? ` ${horariosNotas}` : ''}
              </p>
            </div>
          )}

          {accesibilidad && (
            <div className="sv-block">
              <h2>Accesibilidad</h2>
              <ul className="sv-access">
                <AccessItem ok={accesibilidad.elevador} label="Elevador" />
                <AccessItem ok={accesibilidad.rampa} label="Rampa" />
                <AccessItem ok={accesibilidad.piso_tactil} label="Piso táctil" />
                <AccessItem ok={accesibilidad.estacionamiento} label="Estacionamiento" />
              </ul>
              {accesibilidad.notas && <p className="sv-access-notas">{accesibilidad.notas}</p>}
            </div>
          )}

          {lugares.length > 0 && (
            <div className="sv-block">
              <h2>Puntos de interés cercanos</h2>
              <ul className="sv-pois">
                {lugares.slice(0, 8).map((p, i) => (
                  <li key={i}>
                    <strong>{p.nombre}</strong>
                    {p.distancia ? <span className="sv-poi-dist"> — {p.distancia}</span> : null}
                    {p.descripcion ? <p>{truncate(p.descripcion, 160)}</p> : null}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {vecinas.length > 0 && (
            <div className="sv-block">
              <h2>Estaciones vecinas</h2>
              <ul className="sv-vecinas">
                {vecinas.map((v, i) => (
                  <li key={i}>
                    <a href={`${basePath}estacion/${v.slug}/`}>{grafo?.[v.slug]?.nombre || v.slug}</a>
                    <span className="sv-vecina-meta"> · {v.tiempo} min · <LineaBadge linea={v.linea} size="sm" /></span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <style>{`
        .sv-eyebrow { text-transform: uppercase; letter-spacing: 0.08em; font-size: 0.78rem; color: var(--text-dim); margin: 0 0 var(--space-1); }
        .sv-lineas { display: flex; flex-wrap: wrap; gap: var(--space-2); margin: var(--space-2) 0; }
        .sv-lineas a { text-decoration: none; }
        .sv-zona { color: var(--text-dim); font-size: 0.9rem; margin-bottom: var(--space-4); }
        .sv-intro { font-size: 1.05rem; color: var(--text-muted); }
        .sv-block { margin-top: var(--space-6); }
        .sv-list { display: flex; flex-direction: column; gap: var(--space-2); list-style: disc; padding-left: 1.2rem; }
        .sv-access { display: flex; flex-wrap: wrap; gap: var(--space-3); list-style: none; padding: 0; }
        .sv-access li { font-size: 0.85rem; padding: 0.3rem 0.7rem; border-radius: var(--radius-full); border: 1px solid var(--border); }
        .sv-access-notas { font-size: 0.85rem; color: var(--text-dim); margin-top: var(--space-2); }
        .sv-pois { list-style: none; padding: 0; display: flex; flex-direction: column; gap: var(--space-3); }
        .sv-pois li { border-left: 3px solid var(--border-strong); padding-left: var(--space-3); }
        .sv-pois p { margin: 0.2rem 0 0; font-size: 0.88rem; color: var(--text-muted); }
        .sv-poi-dist { color: var(--text-dim); font-size: 0.85rem; }
        .sv-vecinas { list-style: none; padding: 0; display: flex; flex-direction: column; gap: var(--space-2); }
        .sv-vecinas a { font-weight: 600; color: var(--forest); text-decoration: none; }
        .sv-vecina-meta { font-size: 0.8rem; color: var(--text-dim); display: inline-flex; align-items: center; gap: 0.3rem; }
      `}</style>
    </>
  )
}

function AccessItem({ ok, label }) {
  return <li style={{ opacity: ok ? 1 : 0.4 }}>{ok ? '✓' : '—'} {label}</li>
}

/* ────────────────────────────────────────────────────────────────────────
   LineView — /[ciudad]/linea/[id]/
   ──────────────────────────────────────────────────────────────────────── */
export function LineView({ linea, estaciones, grafo, cityConfig, basePath, crumbs }) {
  const miembros = estacionesDeLinea(estaciones, grafo, linea.id, linea.estaciones)
  const descripcion = limpiarTextoMundial(linea.descripcion)
  const path = `${basePath}linea/${encodeURIComponent(linea.id)}/`

  return (
    <>
      <BreadcrumbSchema
        items={
          crumbs || [
            { name: 'MetroGuia', url: '/' },
            { name: cityConfig.name, url: basePath },
            { name: 'Líneas', url: `${basePath}` },
            { name: linea.colorNombre || `Línea ${linea.id}`, url: path },
          ]
        }
      />
      <section className="section">
        <div className="container-narrow">
          <div className="lv-head" style={{ borderColor: linea.color || 'var(--border-strong)' }}>
            <LineaBadge linea={linea.id} />
            <h1>{linea.colorNombre ? `${linea.colorNombre}` : `Línea ${linea.id}`}</h1>
          </div>
          <p className="lv-route">{linea.inicio} → {linea.fin}</p>
          <p className="lv-stats">{miembros.length} estación{miembros.length === 1 ? '' : 'es'}{linea.municipios ? ` · ${linea.municipios.join(', ')}` : ''}</p>
          {descripcion && <p>{descripcion}</p>}

          <h2>Estaciones</h2>
          <ol className="lv-estaciones">
            {miembros.map((e) => (
              <li key={e.slug}>
                <a href={`${basePath}estacion/${e.slug}/`}>{e.nombre}</a>
              </li>
            ))}
          </ol>
          {miembros.length === 0 && (
            <p className="lv-empty">Estaciones por confirmarse para esta línea.</p>
          )}
        </div>
      </section>

      <style>{`
        .lv-head { display: flex; align-items: center; gap: var(--space-3); border-left: 6px solid; padding-left: var(--space-4); margin-bottom: var(--space-2); }
        .lv-head h1 { margin: 0; }
        .lv-route { font-weight: 600; color: var(--text-muted); }
        .lv-stats { color: var(--text-dim); font-size: 0.9rem; margin-bottom: var(--space-4); }
        .lv-estaciones { display: flex; flex-direction: column; gap: var(--space-1); counter-reset: station; }
        .lv-estaciones li {
          list-style: none; counter-increment: station; padding: var(--space-2) var(--space-3);
          border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: var(--space-3);
        }
        .lv-estaciones li::before {
          content: counter(station); font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-dim);
          width: 1.5rem; text-align: right;
        }
        .lv-estaciones a { text-decoration: none; color: var(--forest); font-weight: 600; }
        .lv-empty { color: var(--text-dim); }
      `}</style>
    </>
  )
}

/* ────────────────────────────────────────────────────────────────────────
   RouteView — /[ciudad]/ruta/[slug]/
   ──────────────────────────────────────────────────────────────────────── */
export function RouteView({ origen, destino, origenNombre, destinoNombre, resultado, cityConfig, basePath, path }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'MetroGuia', url: '/' },
          { name: cityConfig.name, url: basePath },
          { name: 'Rutas', url: `${basePath}` },
          { name: `${origenNombre} a ${destinoNombre}`, url: path },
        ]}
      />
      <section className="section">
        <div className="container-narrow">
          <p className="rv-eyebrow">{cityConfig.name}</p>
          <h1>De {origenNombre} a {destinoNombre}</h1>

          {resultado.encontrada ? (
            <RouteSteps
              pasos={resultado.pasos}
              tiempoTotal={resultado.tiempo_total}
              transbordos={resultado.transbordos}
              costo={resultado.costo}
              alertas={resultado.alertas}
              tiemposReales={cityConfig.tiemposReales}
              aproxLabel={cityConfig.slug !== 'cdmx'}
              moneda={cityConfig.currency}
            />
          ) : (
            <div className="card rv-no-route">
              <p>
                No calculamos una ruta directa entre <strong>{origenNombre}</strong> y <strong>{destinoNombre}</strong> con
                los datos que tenemos de {cityConfig.name}.
              </p>
              <p className="rv-no-route-sub">
                Puede ser que estén en líneas o sistemas sin conexión directa registrada todavía. Revisa{' '}
                <a href={`${basePath}`}>las líneas de {cityConfig.name}</a> o busca ambas estaciones desde el planificador de la portada.
              </p>
            </div>
          )}

          <p className="rv-links">
            <a href={`${basePath}estacion/${origen}/`}>Ver estación {origenNombre}</a>
            {' · '}
            <a href={`${basePath}estacion/${destino}/`}>Ver estación {destinoNombre}</a>
          </p>
        </div>
      </section>

      <style>{`
        .rv-eyebrow { text-transform: uppercase; letter-spacing: 0.08em; font-size: 0.78rem; color: var(--text-dim); margin: 0 0 var(--space-1); }
        .rv-no-route { padding: var(--space-5); border-color: var(--terracotta); }
        .rv-no-route-sub { color: var(--text-muted); font-size: 0.9rem; margin: 0; }
        .rv-links { margin-top: var(--space-5); font-size: 0.9rem; }
        .rv-links a { color: var(--forest); font-weight: 600; text-decoration: none; }
      `}</style>
    </>
  )
}
