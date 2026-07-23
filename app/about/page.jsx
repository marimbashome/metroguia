import { getAllCities } from '@/data/cities-config'
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema'

const cities = getAllCities()

export const metadata = {
  title: 'Acerca de MetroGuia.mx',
  description:
    'MetroGuia.mx es una guía independiente de transporte público en 16 ciudades de México: rutas, estaciones, líneas y planificador de viajes.',
  alternates: { canonical: '/about/' },
}

export default function AboutPage() {
  return (
    <div>
      <BreadcrumbSchema items={[{ name: 'Inicio', url: '/' }, { name: 'Acerca de', url: '/about/' }]} />

      <section className="section page-hero">
        <div className="container-narrow">
          <h1>Acerca de MetroGuia.mx</h1>
          <p className="page-hero-lede">Transporte público en México, explicado sin relleno.</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-narrow legal-body">
          <h2>Qué es MetroGuia</h2>
          <p>
            MetroGuia.mx es una guía independiente de transporte público para {cities.length} ciudades de
            México. Cubrimos Metro, Metrobús, Tren Ligero, Tren Suburbano, Mexicable, Trolebús y sistemas de
            BRT equivalentes en el resto del país, con información de estaciones, líneas, transbordos y
            costos aproximados.
          </p>

          <h2>Qué hacemos</h2>
          <p>Ofrecemos tres cosas concretas:</p>
          <ul>
            <li>
              <strong>Un planificador de rutas</strong> para el Metro de la Ciudad de México: escribes
              origen y destino, calculamos transbordos, estaciones y costo.
            </li>
            <li>
              <strong>Páginas por estación y por línea</strong> con la información que un viajero necesita
              antes de moverse: correspondencias, accesos, estaciones vecinas.
            </li>
            <li>
              <strong>Guías de aeropuertos y terminales de autobuses</strong> — cómo llegar al centro de
              cada ciudad en transporte público, taxi autorizado o app de viajes.
            </li>
          </ul>

          <h2>Honestidad sobre los datos</h2>
          <p>
            No todos los sistemas de transporte de México tienen la misma calidad de datos abiertos. En
            Ciudad de México y en las ciudades donde tenemos tiempos de viaje verificados, mostramos totales
            en minutos. Donde el dato de tiempos es un estimado genérico (no medido tramo por tramo),
            mostramos el número de estaciones y transbordos en vez de inventar un tiempo total — preferimos
            decir menos que decir algo impreciso. El detalle de qué ciudades tienen qué nivel de dato está en{' '}
            <a href="/fuentes/">Fuentes de datos</a>.
          </p>

          <h2>Quiénes somos</h2>
          <p>
            MetroGuia.mx es un proyecto de{' '}
            <a href="https://marimbashome.com" target="_blank" rel="noopener noreferrer">Marimbas Home</a>,
            una empresa mexicana de hospitalidad. Usamos transporte público todos los días para operar
            propiedades en Ciudad de México y Chiapas — este sitio nació de esa necesidad práctica.
          </p>

          <h2>Independencia</h2>
          <p>
            MetroGuia.mx es un recurso informativo independiente. No estamos afiliados con el Sistema de
            Transporte Colectivo (Metro CDMX), SITEUR, Metrorrey ni ningún organismo de transporte estatal
            o municipal. Para información oficial y en tiempo real (interrupciones, horarios especiales),
            consulta siempre la fuente oficial de cada sistema — ver <a href="/fuentes/">Fuentes de datos</a>.
          </p>

          <p>
            ¿Preguntas o correcciones? Visita <a href="/contact/">Contacto</a>.
          </p>
        </div>
      </section>

      <style>{pageStyles}</style>
    </div>
  )
}

const pageStyles = `
  .page-hero { text-align: center; }
  .page-hero-lede { color: var(--text-muted); font-size: 1.02rem; }
  .legal-body h2 { margin-top: var(--space-6); }
  .legal-body h2:first-child { margin-top: 0; }
  .legal-body p, .legal-body li { color: var(--text-muted); }
  .legal-body ul { margin: 0 0 var(--space-4); padding-left: 1.25rem; list-style: disc; }
  .legal-body li { margin-bottom: var(--space-2); }
  .legal-body a { color: var(--forest); font-weight: 600; }
`
