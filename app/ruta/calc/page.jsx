import CalcClient from './CalcClient'

export const metadata = {
  title: 'Calculadora de Ruta — MetroGuia.mx',
  description: 'Calcula tu ruta en metro, tren ligero y BRT en México. Trip planner con tiempo, transbordos y costo.',
}

export default function CalcPage() {
  return <CalcClient />
}
