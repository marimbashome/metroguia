'use client'

import { usePathname } from 'next/navigation'
import { CITIES_CONFIG, getAllCities } from '@/data/cities-config'

const cities = getAllCities()

export default function Footer() {
  const pathname = usePathname() || '/'
  const firstSegment = pathname.split('/').filter(Boolean)[0]
  // Las páginas de ciudad viven en /[ciudad]/... salvo CDMX, que también
  // vive en la raíz (/estacion/, /linea/, /ruta/) — ver REBUILD_SPEC.md.
  const citySlug = CITIES_CONFIG[firstSegment] ? firstSegment : 'cdmx'
  const cityConfig = CITIES_CONFIG[citySlug]

  return (
    <footer className="site-footer">
      <div className="container site-footer-top">
        <div className="site-footer-brand">
          <div className="site-footer-wordmark">MetroGuia.mx</div>
          <p>Planificador de rutas de transporte público en 16 ciudades de México.</p>
        </div>

        <div className="site-footer-col">
          <h6>Ciudades</h6>
          {cities.slice(0, 6).map((c) => (
            <a key={c.slug} href={`/${c.slug}/`}>{c.name}</a>
          ))}
          <a href="/rutas/">Ver todas →</a>
        </div>

        <div className="site-footer-col">
          <h6>Recursos</h6>
          <a href="/lineas/">Líneas</a>
          <a href="/aeropuertos/">Aeropuertos</a>
          <a href="/terminales/">Terminales</a>
          <a href="/fuentes/">Fuentes de datos</a>
        </div>

        <div className="site-footer-col">
          <h6>Legal</h6>
          <a href="/about/">Acerca de</a>
          <a href="/contact/">Contacto</a>
          <a href="/privacy-policy/">Privacidad</a>
        </div>
      </div>

      <div className="container site-footer-bottom">
        <p>MetroGuia.mx © {new Date().getFullYear()}</p>
        {cityConfig?.fechaVerificacion && (
          <p className="site-footer-seal">
            Datos verificados ({cityConfig.name}): {cityConfig.fechaVerificacion}
          </p>
        )}
      </div>

      <style>{`
        .site-footer { background: var(--surface); border-top: 1px solid var(--border); margin-top: var(--space-8); }
        .site-footer-top {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-6);
          padding: var(--space-7) var(--space-4) var(--space-5);
        }
        .site-footer-brand { flex: 1 1 240px; min-width: 220px; }
        .site-footer-wordmark { font-family: var(--font-display); font-weight: 700; font-size: 1.1rem; color: var(--forest); margin-bottom: 0.4rem; }
        .site-footer-brand p { font-size: 0.85rem; color: var(--text-muted); max-width: 30ch; margin: 0; }
        .site-footer-col { display: flex; flex-direction: column; gap: 0.5rem; min-width: 140px; }
        .site-footer-col h6 { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-dim); margin: 0 0 0.25rem; }
        .site-footer-col a { font-size: 0.85rem; color: var(--text-muted); text-decoration: none; }
        .site-footer-col a:hover { color: var(--forest); }
        .site-footer-bottom {
          border-top: 1px solid var(--border);
          padding: var(--space-4);
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
          font-size: 0.78rem;
          color: var(--text-dim);
        }
        .site-footer-bottom p { margin: 0; }
        .site-footer-seal { font-weight: 600; }
      `}</style>
    </footer>
  )
}
