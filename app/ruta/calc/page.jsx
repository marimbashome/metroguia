import { getPlannerProps } from '@/lib/planner-data'
import Planner from '@/app/components/Planner'

// Página estática independiente de /ruta/[slug]/ — está en keep-urls-gsc
// (URL ya indexada/con enlaces entrantes) por lo que debe seguir existiendo
// exacta, aunque no siga el patrón origen-a-destino. Ofrece el mismo
// planificador que /rutas/ para no ser un callejón sin salida.
export const metadata = {
  title: 'Calculadora de ruta — Metro CDMX',
  description: 'Calcula tu ruta en el Metro de la Ciudad de México: transbordos, estaciones y costo. Escribe tu origen y destino en el planificador.',
  alternates: { canonical: '/ruta/calc/' },
}

export default function RutaCalcPage() {
  const { lineasSlim, estacionesSlim, chips } = getPlannerProps()

  return (
    <div className="container-narrow route-calc">
      <h1>Calculadora de ruta</h1>
      <p className="route-calc-sub">Escribe tu origen y destino para calcular transbordos, estaciones y costo en el Metro CDMX.</p>
      <Planner lineasSlim={lineasSlim} estacionesSlim={estacionesSlim} chips={chips} />
      <style>{`
        .route-calc { padding: var(--space-6) 0 var(--space-8); text-align: center; }
        .route-calc-sub { color: var(--text-muted); max-width: 56ch; margin: 0 auto var(--space-6); }
      `}</style>
    </div>
  )
}
