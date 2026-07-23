import CalcClient from './CalcClient'

export const metadata = {
  title: 'Calcular ruta metro CDMX — Calculadora de rutas | MetroGuia.mx',
  description: 'Calcular ruta en metro: encuentra la ruta más rápida con transbordos, tiempo estimado, líneas y costo. Calculadora en tiempo real para Metro CDMX, tren ligero y BRT.',
}

export default function CalcPage() {
  return <CalcClient />
}
