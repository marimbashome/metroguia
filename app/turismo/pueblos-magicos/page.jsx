import PueblosMagicosClient from './PueblosMagicosClient';
import { pueblosMagicos } from '@/data/turismo/pueblos-magicos';

export const metadata = {
  title: '177 Pueblos Mágicos de México | MetroGuia',
  description:
    'Explora los 177 Pueblos Mágicos de México. Descubre destinos auténticos llenos de cultura, tradición y belleza natural. Filtrados por región y estado.',
  keywords: 'pueblos mágicos, turismo México, destinos auténticos, viajes culturales',
  openGraph: {
    title: '177 Pueblos Mágicos de México | MetroGuia',
    description: 'Explora los 177 Pueblos Mágicos de México con filtros por región y estado.',
    type: 'website',
    url: 'https://metroguia.mx/turismo/pueblos-magicos/',
  },
};

export default function PueblosMagicosPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: '177 Pueblos Mágicos de México',
    description: 'Guía completa de los Pueblos Mágicos mexicanos con información de atractivos y transporte.',
    url: 'https://metroguia.mx/turismo/pueblos-magicos/',
    image: 'https://metroguia.mx/og-pueblos-magicos.jpg',
    mainEntity: {
      '@type': 'ItemList',
      name: 'Pueblos Mágicos',
      numberOfItems: pueblosMagicos.length,
      itemListElement: pueblosMagicos.map((pueblo, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://metroguia.mx/turismo/pueblos-magicos/${pueblo.slug}/`,
        name: pueblo.nombre,
        description: pueblo.descripcion,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PueblosMagicosClient />
    </>
  );
}
