export const lineasParis = [
  {
    id: "1",
    color: "#FFCD00",
    colorNombre: "Jaune (M1)",
    inicio: "La Défense – Grande Arche",
    fin: "Château de Vincennes",
    total: 25,
    municipios: ["La Défense", "Neuilly-sur-Seine", "Paris 8e", "Paris 1er", "Paris 4e", "Paris 12e", "Vincennes"],
    descripcion: "La línea 1 (amarilla) es la más frecuentada de París. Atraviesa el gran eje histórico de este a oeste: La Défense, Étoile, Champs-Élysées, Concorde, Tuileries, Louvre, Châtelet, Bastille, Gare de Lyon, hasta Vincennes. Completamente automática desde 2012.",
    estaciones_turisticas: ["la-defense", "charles-de-gaulle-etoile", "champs-elysees-clemenceau", "musee-du-louvre", "palais-royal-musee-du-louvre", "chatelet-les-halles", "marais-saint-paul", "bastille", "gare-de-lyon", "nation"],
    estaciones: ["la-defense", "charles-de-gaulle-etoile", "champs-elysees-clemenceau", "musee-du-louvre", "palais-royal-musee-du-louvre", "chatelet-les-halles", "marais-saint-paul", "bastille", "gare-de-lyon", "nation"],
    ruta_1_dia: {
      titulo: "El Gran Eje: de La Défense al Louvre",
      paradas: [
        { estacion: "charles-de-gaulle-etoile", actividad: "Arco de Triunfo (09:00h)" },
        { estacion: "champs-elysees-clemenceau", actividad: "Grand Palais y Pont Alexandre III (11:00h)" },
        { estacion: "palais-royal-musee-du-louvre", actividad: "Musée du Louvre (13:00h)" },
        { estacion: "chatelet-les-halles", actividad: "Centre Pompidou (17:00h)" }
      ]
    },
    seo_title: "Línea 1 Métro París — Amarilla | MetroGuia",
    meta_description: "Línea 1 amarilla del Métro de París: 25 estaciones de La Défense a Vincennes. Étoile, Concorde, Louvre, Châtelet, Bastille.",
    h1: "Línea 1 — Métro de París (Amarilla)"
  },
  {
    id: "2",
    color: "#003E9C",
    colorNombre: "Bleu Foncé (M2)",
    inicio: "Porte Dauphine",
    fin: "Nation",
    total: 25,
    municipios: ["Paris 16e", "Paris 8e", "Paris 18e", "Paris 11e"],
    descripcion: "La línea 2 (azul oscuro) rodea el norte de París en un semicírculo, pasando por Étoile, Ternes, Courcelles, Monceau, Villiers, Rome, Place de Clichy, Blanche, Pigalle, Anvers, Barbès, Stalingrad, Jaurès, Colonel Fabien, Belleville y Nation.",
    estaciones_turisticas: ["charles-de-gaulle-etoile", "pigalle", "sacre-coeur-anvers", "belleville", "nation"],
    estaciones: ["charles-de-gaulle-etoile", "pigalle", "sacre-coeur-anvers", "belleville", "nation"],
    ruta_1_dia: {
      titulo: "El Norte de París: De Pigalle a Belleville",
      paradas: [
        { estacion: "pigalle", actividad: "Moulin Rouge y South Pigalle (10:00h)" },
        { estacion: "sacre-coeur-anvers", actividad: "Sacré-Cœur y Montmartre (12:00h)" },
        { estacion: "belleville", actividad: "Barrio multicultural y galerías (15:00h)" }
      ]
    },
    seo_title: "Línea 2 Métro París — Azul Oscuro | MetroGuia",
    meta_description: "Línea 2 azul del Métro de París: Pigalle, Montmartre, Belleville. El norte bohemio de París.",
    h1: "Línea 2 — Métro de París (Azul Oscuro)"
  },
  {
    id: "4",
    color: "#CF009E",
    colorNombre: "Magenta (M4)",
    inicio: "Montrouge",
    fin: "Aulnay-sous-Bois",
    total: 29,
    municipios: ["Montrouge", "Paris 14e", "Paris 6e", "Paris 4e", "Paris 1er", "Paris 10e", "Seine-Saint-Denis"],
    descripcion: "La línea 4 (magenta) atraviesa París de sur a norte, pasando por Denfert-Rochereau, Montparnasse, Saint-Germain-des-Prés, Odéon, Saint-Michel, Cité, Châtelet, Les Halles, Réaumur, Gare de l'Est, Gare du Nord y Saint-Denis.",
    estaciones_turisticas: ["montparnasse-bienvenue", "saint-michel-notre-dame", "chatelet-les-halles", "gare-du-nord"],
    estaciones: ["montparnasse-bienvenue", "saint-michel-notre-dame", "chatelet-les-halles", "gare-du-nord"],
    ruta_1_dia: {
      titulo: "Orilla Izquierda: De Montparnasse a Notre-Dame",
      paradas: [
        { estacion: "montparnasse-bienvenue", actividad: "Tour Montparnasse y cementerio (10:00h)" },
        { estacion: "saint-michel-notre-dame", actividad: "Notre-Dame y Sainte-Chapelle (12:00h)" },
        { estacion: "chatelet-les-halles", actividad: "Centre Pompidou (15:00h)" },
        { estacion: "gare-du-nord", actividad: "Canal Saint-Martin (18:00h)" }
      ]
    },
    seo_title: "Línea 4 Métro París — Magenta | MetroGuia",
    meta_description: "Línea 4 magenta del Métro de París: Notre-Dame, Saint-Germain-des-Prés, Montparnasse, Gare du Nord. 29 estaciones.",
    h1: "Línea 4 — Métro de París (Magenta)"
  },
  {
    id: "6",
    color: "#6ECA97",
    colorNombre: "Vert Clair (M6)",
    inicio: "Charles de Gaulle – Étoile",
    fin: "Nation",
    total: 28,
    municipios: ["Paris 16e", "Paris 15e", "Paris 14e", "Paris 13e", "Paris 12e"],
    descripcion: "La línea 6 (verde claro) es la más espectacular de París: circula en viaducto sobre el Sena en Bir-Hakeim (con vistas a la Torre Eiffel), luego por Montparnasse, Place d'Italie, Bercy y Nation. La mitad de sus estaciones están en exterior.",
    estaciones_turisticas: ["charles-de-gaulle-etoile", "trocadero", "bir-hakeim", "montparnasse-bienvenue", "nation"],
    estaciones: ["charles-de-gaulle-etoile", "trocadero", "bir-hakeim", "montparnasse-bienvenue", "nation"],
    ruta_1_dia: {
      titulo: "Vista sobre París: Del Étoile a la Torre Eiffel",
      paradas: [
        { estacion: "charles-de-gaulle-etoile", actividad: "Arco de Triunfo (09:00h)" },
        { estacion: "trocadero", actividad: "Mejor foto de la Torre Eiffel (10:30h)" },
        { estacion: "bir-hakeim", actividad: "Puente cinematográfico sobre el Sena (12:00h)" },
        { estacion: "montparnasse-bienvenue", actividad: "Mirador Tour Montparnasse (19:00h)" }
      ]
    },
    seo_title: "Línea 6 Métro París — Verde | MetroGuia",
    meta_description: "Línea 6 verde del Métro de París: Trocadéro, Bir-Hakeim (vista Torre Eiffel), Montparnasse. La línea panorámica aérea de París.",
    h1: "Línea 6 — Métro de París (Verde Claro)"
  },
  {
    id: "12",
    color: "#007852",
    colorNombre: "Vert Foncé (M12)",
    inicio: "Mairie d'Issy",
    fin: "Front Populaire",
    total: 29,
    municipios: ["Issy-les-Moulineaux", "Paris 15e", "Paris 14e", "Paris 6e", "Paris 8e", "Paris 18e", "Saint-Denis"],
    descripcion: "La línea 12 (verde oscuro) conecta el sur con el norte pasando por Montparnasse, Abbesses (Montmartre) y Saint-Denis. Su estación Abbesses es la más profunda de París (36m) con el canopy art nouveau más bello de Hector Guimard.",
    estaciones_turisticas: ["montparnasse-bienvenue", "invalides", "abbesses"],
    estaciones: ["montparnasse-bienvenue", "invalides", "abbesses"],
    ruta_1_dia: {
      titulo: "De Concorde a Montmartre: El Corazón de París",
      paradas: [
        { estacion: "invalides", actividad: "Hôtel des Invalides y Tombeau de Napoléon (10:00h)" },
        { estacion: "montparnasse-bienvenue", actividad: "Cimetière Montparnasse (13:00h)" },
        { estacion: "abbesses", actividad: "Montmartre y Sacré-Cœur (15:00h)" }
      ]
    },
    seo_title: "Línea 12 Métro París — Verde Oscuro | MetroGuia",
    meta_description: "Línea 12 verde oscuro del Métro de París: Abbesses (Montmartre), Montparnasse, Invalides. 29 estaciones.",
    h1: "Línea 12 — Métro de París (Verde Oscuro)"
  },
  {
    id: "14",
    color: "#622F74",
    colorNombre: "Violet (M14)",
    inicio: "Orly Aéroport",
    fin: "Saint-Denis Pleyel",
    total: 19,
    municipios: ["Orly", "Paris 13e", "Paris 12e", "Paris 4e", "Paris 1er", "Paris 8e", "Saint-Ouen", "Saint-Denis"],
    descripcion: "La línea 14 (violeta) es la más moderna y rápida de la red: completamente automática y sin conductor, con vagones amplios y alta frecuencia. Desde 2024 conecta el aeropuerto de Orly al norte con Saint-Denis Pleyel, pasando por Châtelet, Gare de Lyon, Bercy y Bibliothèque François Mitterrand.",
    estaciones_turisticas: ["orly-aeroport", "chatelet-les-halles", "gare-de-lyon", "nation"],
    estaciones: ["orly-aeroport", "chatelet-les-halles", "gare-de-lyon", "nation"],
    ruta_1_dia: {
      titulo: "Orly a Châtelet: La Línea Rápida",
      paradas: [
        { estacion: "chatelet-les-halles", actividad: "Centre Pompidou y Les Halles (10:00h)" },
        { estacion: "gare-de-lyon", actividad: "Le Train Bleu y Bercy Village (13:00h)" }
      ]
    },
    seo_title: "Línea 14 Métro París — Violeta | MetroGuia",
    meta_description: "Línea 14 violeta del Métro de París: línea automática del aeropuerto Orly a Saint-Denis. Châtelet, Gare de Lyon. 19 estaciones.",
    h1: "Línea 14 — Métro de París (Violeta)"
  },
  {
    id: "RER B",
    color: "#8DA0CB",
    colorNombre: "RER B (Azul Grisáceo)",
    inicio: "CDG Aéroport / Mitry-Claye",
    fin: "Saint-Rémy-lès-Chevreuse / Robinson",
    total: 47,
    municipios: ["Roissy", "Paris", "Essonne", "Yvelines"],
    descripcion: "El RER B conecta los dos aeropuertos principales de París: Charles de Gaulle al norte y Orly (vía Antony) al sur, cruzando el centro de París por las estaciones de Gare du Nord, Châtelet-Les Halles, Saint-Michel y Denfert-Rochereau. Es la conexión más rápida y económica entre CDG y el centro.",
    estaciones_turisticas: ["cdg-aeroport", "gare-du-nord", "chatelet-les-halles", "saint-michel-notre-dame"],
    estaciones: ["cdg-aeroport", "gare-du-nord", "chatelet-les-halles", "saint-michel-notre-dame"],
    ruta_1_dia: {
      titulo: "Del Aeropuerto al Centro: La Llegada Perfecta",
      paradas: [
        { estacion: "cdg-aeroport", actividad: "Llegada a París (mañana)" },
        { estacion: "gare-du-nord", actividad: "Llegada al centro — inicio de la aventura parisina" },
        { estacion: "saint-michel-notre-dame", actividad: "Notre-Dame de París (primera visita)" }
      ]
    },
    seo_title: "RER B — Aeropuerto CDG a París | MetroGuia",
    meta_description: "RER B: conexión directa del aeropuerto Charles de Gaulle al centro de París en 35 minutos. Gare du Nord, Châtelet, Saint-Michel.",
    h1: "RER B — Aeropuerto CDG a París"
  },
  {
    id: "RER C",
    color: "#FFBE00",
    colorNombre: "RER C (Amarillo Ocre)",
    inicio: "Pontoise / Versailles",
    fin: "Juvisy / Massy",
    total: 84,
    municipios: ["Yvelines", "Hauts-de-Seine", "Paris", "Val-de-Marne", "Essonne"],
    descripcion: "El RER C conecta Versailles y la orilla del Sena con el sur de París, pasando por Invalides, Musée d'Orsay y Saint-Michel. Es la línea para visitar el Palacio de Versailles desde París.",
    estaciones_turisticas: ["versailles-rive-gauche", "invalides", "saint-michel-notre-dame"],
    estaciones: ["versailles-rive-gauche", "invalides", "saint-michel-notre-dame"],
    ruta_1_dia: {
      titulo: "Versailles en Un Día: La Excursión Esencial",
      paradas: [
        { estacion: "invalides", actividad: "Partida hacia Versailles (09:00h)" },
        { estacion: "versailles-rive-gauche", actividad: "Palacio de Versailles (día completo)" }
      ]
    },
    seo_title: "RER C — Versailles desde París | MetroGuia",
    meta_description: "RER C: la línea para visitar el Palacio de Versailles desde París en 35 minutos. También conecta Invalides y Musée d'Orsay.",
    h1: "RER C — Versailles desde París"
  }
];
