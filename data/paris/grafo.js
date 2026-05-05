export const grafoParis = {
  'chatelet-les-halles': {
    ciudad: 'paris',
    nombre: 'Châtelet – Les Halles',
    lineas: ['1', '4', '7', '11', '14', 'RER A', 'RER B', 'RER D'],
    adyacentes: [
      { slug: 'musee-du-louvre', tiempo: 2, linea: '1', tipo: 'normal' },
      { slug: 'marais-saint-paul', tiempo: 2, linea: '1', tipo: 'normal' },
      { slug: 'bastille', tiempo: 4, linea: '1', tipo: 'normal' },
      { slug: 'saint-michel-notre-dame', tiempo: 2, linea: '4', tipo: 'normal' },
      { slug: 'gare-du-nord', tiempo: 5, linea: 'RER B', tipo: 'normal' },
      { slug: 'la-defense', tiempo: 15, linea: '1', tipo: 'normal' }
    ]
  },
  'gare-du-nord': {
    ciudad: 'paris',
    nombre: 'Gare du Nord',
    lineas: ['4', '5', 'RER B', 'RER D', 'RER E'],
    adyacentes: [
      { slug: 'chatelet-les-halles', tiempo: 5, linea: 'RER B', tipo: 'normal' },
      { slug: 'saint-michel-notre-dame', tiempo: 7, linea: 'RER B', tipo: 'normal' },
      { slug: 'republique', tiempo: 5, linea: '5', tipo: 'normal' },
      { slug: 'cdg-aeroport', tiempo: 35, linea: 'RER B', tipo: 'normal' }
    ]
  },
  'gare-de-lyon': {
    ciudad: 'paris',
    nombre: 'Gare de Lyon',
    lineas: ['1', '14', 'RER A', 'RER D'],
    adyacentes: [
      { slug: 'chatelet-les-halles', tiempo: 4, linea: '1', tipo: 'normal' },
      { slug: 'bastille', tiempo: 2, linea: '1', tipo: 'normal' },
      { slug: 'nation', tiempo: 5, linea: '1', tipo: 'normal' },
      { slug: 'orly-aeroport', tiempo: 25, linea: '14', tipo: 'normal' }
    ]
  },
  'opera-garnier': {
    ciudad: 'paris',
    nombre: 'Opéra',
    lineas: ['3', '7', '8'],
    adyacentes: [
      { slug: 'republique', tiempo: 5, linea: '3', tipo: 'normal' },
      { slug: 'chatelet-les-halles', tiempo: 5, linea: '7', tipo: 'normal' }
    ]
  },
  'saint-michel-notre-dame': {
    ciudad: 'paris',
    nombre: 'Saint-Michel – Notre-Dame',
    lineas: ['4', 'RER B', 'RER C'],
    adyacentes: [
      { slug: 'chatelet-les-halles', tiempo: 2, linea: '4', tipo: 'normal' },
      { slug: 'montparnasse-bienvenue', tiempo: 6, linea: '4', tipo: 'normal' },
      { slug: 'gare-du-nord', tiempo: 7, linea: 'RER B', tipo: 'normal' },
      { slug: 'invalides', tiempo: 4, linea: 'RER C', tipo: 'normal' }
    ]
  },
  'musee-du-louvre': {
    ciudad: 'paris',
    nombre: 'Palais Royal – Musée du Louvre',
    lineas: ['1', '7'],
    adyacentes: [
      { slug: 'chatelet-les-halles', tiempo: 2, linea: '1', tipo: 'normal' },
      { slug: 'champs-elysees-clemenceau', tiempo: 5, linea: '1', tipo: 'normal' },
      { slug: 'palais-royal-musee-du-louvre', tiempo: 0, linea: '1', tipo: 'normal' }
    ]
  },
  'champs-elysees-clemenceau': {
    ciudad: 'paris',
    nombre: 'Champs-Élysées – Clemenceau',
    lineas: ['1', '13'],
    adyacentes: [
      { slug: 'charles-de-gaulle-etoile', tiempo: 3, linea: '1', tipo: 'normal' },
      { slug: 'musee-du-louvre', tiempo: 5, linea: '1', tipo: 'normal' },
      { slug: 'invalides', tiempo: 3, linea: '13', tipo: 'normal' }
    ]
  },
  'charles-de-gaulle-etoile': {
    ciudad: 'paris',
    nombre: 'Charles de Gaulle – Étoile',
    lineas: ['1', '2', '6', 'RER A'],
    adyacentes: [
      { slug: 'champs-elysees-clemenceau', tiempo: 3, linea: '1', tipo: 'normal' },
      { slug: 'la-defense', tiempo: 8, linea: '1', tipo: 'normal' },
      { slug: 'trocadero', tiempo: 3, linea: '6', tipo: 'normal' },
      { slug: 'pigalle', tiempo: 7, linea: '2', tipo: 'normal' }
    ]
  },
  'trocadero': {
    ciudad: 'paris',
    nombre: 'Trocadéro',
    lineas: ['6', '9'],
    adyacentes: [
      { slug: 'charles-de-gaulle-etoile', tiempo: 3, linea: '6', tipo: 'normal' },
      { slug: 'bir-hakeim', tiempo: 3, linea: '6', tipo: 'normal' }
    ]
  },
  'bir-hakeim': {
    ciudad: 'paris',
    nombre: 'Bir-Hakeim',
    lineas: ['6'],
    adyacentes: [
      { slug: 'trocadero', tiempo: 3, linea: '6', tipo: 'normal' },
      { slug: 'montparnasse-bienvenue', tiempo: 7, linea: '6', tipo: 'normal' }
    ]
  },
  'montparnasse-bienvenue': {
    ciudad: 'paris',
    nombre: 'Montparnasse – Bienvenüe',
    lineas: ['4', '6', '12', '13'],
    adyacentes: [
      { slug: 'saint-michel-notre-dame', tiempo: 6, linea: '4', tipo: 'normal' },
      { slug: 'bir-hakeim', tiempo: 7, linea: '6', tipo: 'normal' },
      { slug: 'invalides', tiempo: 4, linea: '13', tipo: 'normal' },
      { slug: 'abbesses', tiempo: 8, linea: '12', tipo: 'normal' }
    ]
  },
  'bastille': {
    ciudad: 'paris',
    nombre: 'Bastille',
    lineas: ['1', '5', '8'],
    adyacentes: [
      { slug: 'marais-saint-paul', tiempo: 2, linea: '1', tipo: 'normal' },
      { slug: 'gare-de-lyon', tiempo: 2, linea: '1', tipo: 'normal' },
      { slug: 'republique', tiempo: 3, linea: '5', tipo: 'normal' }
    ]
  },
  'republique': {
    ciudad: 'paris',
    nombre: 'République',
    lineas: ['3', '5', '8', '9', '11'],
    adyacentes: [
      { slug: 'opera-garnier', tiempo: 5, linea: '3', tipo: 'normal' },
      { slug: 'bastille', tiempo: 3, linea: '5', tipo: 'normal' },
      { slug: 'belleville', tiempo: 3, linea: '11', tipo: 'normal' },
      { slug: 'gare-du-nord', tiempo: 5, linea: '5', tipo: 'normal' }
    ]
  },
  'pigalle': {
    ciudad: 'paris',
    nombre: 'Pigalle',
    lineas: ['2', '12'],
    adyacentes: [
      { slug: 'sacre-coeur-anvers', tiempo: 1, linea: '2', tipo: 'normal' },
      { slug: 'abbesses', tiempo: 3, linea: '12', tipo: 'normal' },
      { slug: 'charles-de-gaulle-etoile', tiempo: 7, linea: '2', tipo: 'normal' }
    ]
  },
  'abbesses': {
    ciudad: 'paris',
    nombre: 'Abbesses',
    lineas: ['12'],
    adyacentes: [
      { slug: 'pigalle', tiempo: 3, linea: '12', tipo: 'normal' },
      { slug: 'montparnasse-bienvenue', tiempo: 8, linea: '12', tipo: 'normal' }
    ]
  },
  'sacre-coeur-anvers': {
    ciudad: 'paris',
    nombre: 'Anvers',
    lineas: ['2'],
    adyacentes: [
      { slug: 'pigalle', tiempo: 1, linea: '2', tipo: 'normal' },
      { slug: 'belleville', tiempo: 8, linea: '2', tipo: 'normal' },
      { slug: 'abbesses', tiempo: 4, linea: '12', tipo: 'transbordo' }
    ]
  },
  'palais-royal-musee-du-louvre': {
    ciudad: 'paris',
    nombre: 'Palais Royal – Musée du Louvre',
    lineas: ['1', '7'],
    adyacentes: [
      { slug: 'musee-du-louvre', tiempo: 0, linea: '1', tipo: 'normal' },
      { slug: 'chatelet-les-halles', tiempo: 2, linea: '1', tipo: 'normal' },
      { slug: 'champs-elysees-clemenceau', tiempo: 5, linea: '1', tipo: 'normal' }
    ]
  },
  'invalides': {
    ciudad: 'paris',
    nombre: 'Invalides',
    lineas: ['8', '13', 'RER C'],
    adyacentes: [
      { slug: 'champs-elysees-clemenceau', tiempo: 3, linea: '13', tipo: 'normal' },
      { slug: 'montparnasse-bienvenue', tiempo: 4, linea: '13', tipo: 'normal' },
      { slug: 'saint-michel-notre-dame', tiempo: 4, linea: 'RER C', tipo: 'normal' },
      { slug: 'versailles-rive-gauche', tiempo: 35, linea: 'RER C', tipo: 'normal' }
    ]
  },
  'versailles-rive-gauche': {
    ciudad: 'paris',
    nombre: 'Versailles – Château',
    lineas: ['RER C'],
    adyacentes: [
      { slug: 'invalides', tiempo: 35, linea: 'RER C', tipo: 'normal' },
      { slug: 'saint-michel-notre-dame', tiempo: 40, linea: 'RER C', tipo: 'normal' }
    ]
  },
  'orly-aeroport': {
    ciudad: 'paris',
    nombre: 'Orly Aéroport',
    lineas: ['14'],
    adyacentes: [
      { slug: 'chatelet-les-halles', tiempo: 25, linea: '14', tipo: 'normal' },
      { slug: 'gare-de-lyon', tiempo: 20, linea: '14', tipo: 'normal' }
    ]
  },
  'cdg-aeroport': {
    ciudad: 'paris',
    nombre: 'CDG Aéroport – Terminal 2',
    lineas: ['RER B'],
    adyacentes: [
      { slug: 'gare-du-nord', tiempo: 35, linea: 'RER B', tipo: 'normal' },
      { slug: 'chatelet-les-halles', tiempo: 45, linea: 'RER B', tipo: 'normal' }
    ]
  },
  'marais-saint-paul': {
    ciudad: 'paris',
    nombre: 'Saint-Paul – Le Marais',
    lineas: ['1'],
    adyacentes: [
      { slug: 'chatelet-les-halles', tiempo: 2, linea: '1', tipo: 'normal' },
      { slug: 'bastille', tiempo: 2, linea: '1', tipo: 'normal' }
    ]
  },
  'belleville': {
    ciudad: 'paris',
    nombre: 'Belleville',
    lineas: ['2', '11'],
    adyacentes: [
      { slug: 'sacre-coeur-anvers', tiempo: 8, linea: '2', tipo: 'normal' },
      { slug: 'nation', tiempo: 8, linea: '2', tipo: 'normal' },
      { slug: 'republique', tiempo: 3, linea: '11', tipo: 'normal' }
    ]
  },
  'nation': {
    ciudad: 'paris',
    nombre: 'Nation',
    lineas: ['1', '2', '6', '9', 'RER A'],
    adyacentes: [
      { slug: 'bastille', tiempo: 4, linea: '1', tipo: 'normal' },
      { slug: 'gare-de-lyon', tiempo: 5, linea: '1', tipo: 'normal' },
      { slug: 'belleville', tiempo: 8, linea: '2', tipo: 'normal' },
      { slug: 'la-defense', tiempo: 25, linea: 'RER A', tipo: 'normal' }
    ]
  },
  'la-defense': {
    ciudad: 'paris',
    nombre: 'La Défense – Grande Arche',
    lineas: ['1', 'RER A'],
    adyacentes: [
      { slug: 'charles-de-gaulle-etoile', tiempo: 8, linea: '1', tipo: 'normal' },
      { slug: 'chatelet-les-halles', tiempo: 15, linea: '1', tipo: 'normal' },
      { slug: 'nation', tiempo: 25, linea: 'RER A', tipo: 'normal' }
    ]
  }
};
