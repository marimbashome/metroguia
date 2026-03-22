import BuscadorRutas from '@/app/components/BuscadorRutas';

export const metadata = {
  title: 'Planea tu ruta en Metro CDMX — MetroGuia.mx',
  description:
    'Buscador de rutas en el Metro de Ciudad de México. Encuentra la ruta más rápida entre cualquier estación, tiempos estimados, transbordos y costo.',
  keywords:
    'ruta metro CDMX, como llegar en metro, rutas metro ciudad de mexico, buscador metro, FIFA 2026 estadio azteca metro',
  alternates: { canonical: '/rutas/' },
  openGraph: {
    title: 'Planea tu ruta en Metro CDMX — MetroGuia.mx',
    description:
      'Buscador de rutas en el Metro de Ciudad de México para turistas del Mundial FIFA 2026.',
    url: 'https://metroguia.mx/rutas/',
  },
};

export default function RutasPage() {
  return <BuscadorRutas asPage={true} />;
}
