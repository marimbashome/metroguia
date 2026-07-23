import { homeFAQs } from '@/data/faqs'
import { getAllCities } from '@/data/cities-config'
import { lineasDetalle } from '@/data/lineas-detalle'
import { estaciones } from '@/data/estaciones'
import { rutasPopulares } from '@/data/rutas-populares'
import Planner from './components/Planner'
import FAQSchema from './components/FAQSchema'

export const metadata = {
  title: 'MetroGuia.mx — Planifica tu ruta en Metro, Metrobús y BRT en México',
  description:
    'Calcula transbordos, estaciones y costo de tu viaje en transporte público en 16 ciudades de México: Metro CDMX, Mi Tren GDL, Metrorrey MTY y más.',
  alternates: { canonical: '/' },
}

const cities = getAllCities()

// FAQs del home: solo las 4 preguntas de uso general del Metro CDMX de
// data/faqs.js (se excluyen a propósito las 2 entradas orientadas al Mundial
// FIFA / Estadio Azteca — fuera de alcance de este rebuild). La 5ª pregunta
// se genera aquí mismo a partir de CITIES_CONFIG (derivar, no hardcodear).
const cdmxFaqs = (homeFAQs.es || []).filter(
  (f) => !/mundial|fifa|azteca/i.test(f.question) && !/mundial|fifa|azteca/i.test(f.answer)
)
const coverageFaq = {
  question: '¿MetroGuia cubre otras ciudades además de la Ciudad de México?',
  answer: `Sí. Además del Metro CDMX, MetroGuia tiene datos de transporte público de ${cities.length} ciudades mexicanas: ${cities.map((c) => c.name).join(', ')}.`,
}
const faqs = [...cdmxFaqs, coverageFaq]

// ── Datos del Planner, recortados aquí (Server Component) ──────────────────
// `data/estaciones.js` y `data/lineas-detalle.js` traen mucho contenido de
// página (seo_title, ruta_1_dia, mundial_relevancia, tips, etc.) que Planner
// no usa para calcular rutas. Si Planner (client component) importara esos
// módulos completos, Next los empaquetaría enteros en el JS del navegador
// (~150KB+ de copy que ni se muestra). Se recorta aquí, en el servidor, y
// solo el JSON mínimo cruza al cliente como props.
const plannerLineas = Object.fromEntries(
  Object.entries(lineasDetalle).map(([id, l]) => [
    id,
    { id: l.id, color: l.color, colorNombre: l.colorNombre, estaciones: l.estaciones },
  ])
)
const plannerEstaciones = estaciones.map((e) => ({ slug: e.slug, nombre: e.nombre, lineas: e.lineas || [] }))
const plannerChips = rutasPopulares
  .filter((r) => !r.connector && !r.ciudad && r.destino !== 'tasquena' && r.origen !== 'tasquena')
  .slice(0, 12)
  .map((r) => ({ origen: r.origen, destino: r.destino, titulo: r.titulo }))

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <h1 className="hero-title">¿A dónde vas?</h1>
          <p className="hero-sub">Planea tu ruta en el Metro de la Ciudad de México en segundos.</p>
          <Planner lineasSlim={plannerLineas} estacionesSlim={plannerEstaciones} chips={plannerChips} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Ciudades</h2>
          <p className="section-lede">Transporte público en 16 ciudades de México.</p>
          <div className="cities-grid">
            {cities.map((c) => (
              <a key={c.slug} href={`/${c.slug}/`} className="city-card">
                <span className="city-card-name">{c.name}</span>
                <span className="city-card-state">{c.state}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>Cómo funciona</h2>
          <div className="how-grid">
            <HowStep n="1" title="Elige origen y destino">
              Escribe el nombre de cualquier estación del Metro CDMX en el planificador de arriba.
            </HowStep>
            <HowStep n="2" title="Revisa tu ruta">
              MetroGuia calcula el camino más corto: líneas, transbordos y estaciones.
            </HowStep>
            <HowStep n="3" title="Consulta el costo">
              Verás el número de transbordos, estaciones y el costo del viaje.
            </HowStep>
            <HowStep n="4" title="Explora otras ciudades">
              También cubrimos Guadalajara, Monterrey y 13 ciudades más.
            </HowStep>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <h2>Preguntas frecuentes</h2>
          <div className="faq-list">
            {faqs.map((f) => (
              <details key={f.question} className="faq-item">
                <summary>{f.question}</summary>
                <p>{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FAQSchema faqs={faqs} />

      <style>{`
        .hero {
          background: var(--forest);
          padding: var(--space-8) 0 var(--space-8);
          color: var(--text-on-dark);
        }
        .hero-inner { text-align: center; }
        .hero-title {
          color: var(--text-on-dark);
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          margin-bottom: var(--space-2);
        }
        .hero-sub { opacity: 0.8; margin-bottom: var(--space-6); font-size: 1.05rem; }
        .section-lede { color: var(--text-muted); margin-bottom: var(--space-5); }
        .section-alt { background: var(--surface); }
        .cities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: var(--space-3);
        }
        .city-card {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          padding: var(--space-4);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          text-decoration: none;
          background: var(--bg);
        }
        .city-card:hover { border-color: var(--border-strong); box-shadow: var(--shadow-sm); }
        .city-card-name { font-weight: 700; color: var(--forest); }
        .city-card-state { font-size: 0.78rem; color: var(--text-dim); }
        .how-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: var(--space-5);
        }
        .how-step-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--amber);
          color: #1A1206;
          font-weight: 800;
          font-family: var(--font-display);
          margin-bottom: var(--space-2);
        }
        .how-step h3 { margin-bottom: 0.3rem; }
        .how-step p { color: var(--text-muted); font-size: 0.92rem; margin: 0; }
        .faq-list { display: flex; flex-direction: column; gap: var(--space-2); }
        .faq-item {
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: var(--space-3) var(--space-4);
        }
        .faq-item summary { cursor: pointer; font-weight: 600; color: var(--forest); }
        .faq-item p { margin: var(--space-2) 0 0; color: var(--text-muted); font-size: 0.9rem; }
      `}</style>
    </>
  )
}

function HowStep({ n, title, children }) {
  return (
    <div className="how-step">
      <span className="how-step-num">{n}</span>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  )
}
