import BuscadorRutas from '@/app/components/BuscadorRutas';
import AdBannerLazy from '@/app/components/AdBannerLazy';

export const metadata = {
  title: 'Calcular ruta en metro CDMX — Planificador MetroGuia.mx',
  description:
    'Calcular ruta metro CDMX: encuentra la ruta más rápida entre estaciones, transbordos, tiempo estimado, líneas de metro y costo. Planificador gratuito en tiempo real.',
  keywords:
    'calcular ruta metro CDMX, cómo llegar en metro, rutas metro ciudad de méxico, buscador metro, planificador de rutas, como llegar en metro, estadio azteca metro',
  alternates: { canonical: '/rutas/' },
  openGraph: {
    title: 'Calcular ruta en Metro CDMX — Planificador MetroGuia.mx',
    description:
      'Calculadora de rutas del Metro de Ciudad de México. Ruta más rápida, transbordos, tiempos reales y costo del transporte.',
    url: 'https://metroguia.mx/rutas/',
  },
};

export default function RutasPage() {
  return (
    <>
      <BuscadorRutas asPage={true} />
      <AdBannerLazy slot="4434764790" format="auto" />
    </>
  );
}
