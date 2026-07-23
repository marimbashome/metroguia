'use client';
import AffiliateTransportCard from './AffiliateTransportCard';
import { transitCards } from '@/data/transit-cards';

/**
 * Data-driven transit cards section.
 * Renders all cards for a city from transit-cards.js
 * Falls back to legacy ciudad-based rendering if no data found.
 */
export default function TransitCardsSection({ citySlug, ciudad }) {
  const cityData = transitCards[citySlug];
  
  if (!cityData || !cityData.cards || cityData.cards.length === 0) {
    // Fallback to legacy mode for cities not in transit-cards.js
    if (ciudad) {
      return <AffiliateTransportCard ciudad={ciudad} />;
    }
    return null;
  }
  
  return (
    <>
      {cityData.cards.map((card, idx) => (
        <AffiliateTransportCard
          key={idx}
          icon={card.icon}
          titulo={card.titulo}
          descripcion={card.descripcion}
          precio={card.precio}
          enlace={card.enlace}
          donde={card.donde}
          tip={card.tip}
        />
      ))}
    </>
  );
}
