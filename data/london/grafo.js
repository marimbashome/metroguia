export const grafoLondon = {
  'king-s-cross-st-pancras': {
    ciudad: 'london',
    nombre: "King's Cross St. Pancras",
    lineas: ['Piccadilly', 'Victoria', 'Jubilee', 'Northern', 'Circle', 'Metropolitan'],
    adyacentes: [
      { slug: 'victoria', tiempo: 3, linea: 'Victoria', tipo: 'normal' },
      { slug: 'camden-town', tiempo: 3, linea: 'Northern', tipo: 'normal' },
      { slug: 'baker-street', tiempo: 6, linea: 'Jubilee', tipo: 'normal' }
    ]
  },
  'victoria': {
    ciudad: 'london',
    nombre: 'Victoria',
    lineas: ['Victoria', 'Circle', 'District'],
    adyacentes: [
      { slug: 'king-s-cross-st-pancras', tiempo: 3, linea: 'Victoria', tipo: 'normal' },
      { slug: 'oxford-circus', tiempo: 3, linea: 'Victoria', tipo: 'normal' },
      { slug: 'green-park', tiempo: 2, linea: 'Victoria', tipo: 'normal' },
      { slug: 'westminster', tiempo: 4, linea: 'Circle', tipo: 'normal' }
    ]
  },
  'oxford-circus': {
    ciudad: 'london',
    nombre: 'Oxford Circus',
    lineas: ['Victoria', 'Central', 'Bakerloo'],
    adyacentes: [
      { slug: 'victoria', tiempo: 3, linea: 'Victoria', tipo: 'normal' },
      { slug: 'green-park', tiempo: 2, linea: 'Victoria', tipo: 'normal' },
      { slug: 'bond-street', tiempo: 2, linea: 'Central', tipo: 'normal' },
      { slug: 'piccadilly-circus', tiempo: 2, linea: 'Bakerloo', tipo: 'normal' }
    ]
  },
  'covent-garden': {
    ciudad: 'london',
    nombre: 'Covent Garden',
    lineas: ['Piccadilly'],
    adyacentes: [
      { slug: 'piccadilly-circus', tiempo: 2, linea: 'Piccadilly', tipo: 'normal' },
      { slug: 'leicester-square', tiempo: 1, linea: 'Piccadilly', tipo: 'normal' }
    ]
  },
  'westminster': {
    ciudad: 'london',
    nombre: 'Westminster',
    lineas: ['Jubilee', 'Circle', 'District'],
    adyacentes: [
      { slug: 'green-park', tiempo: 3, linea: 'Jubilee', tipo: 'normal' },
      { slug: 'waterloo', tiempo: 3, linea: 'Jubilee', tipo: 'normal' },
      { slug: 'victoria', tiempo: 4, linea: 'Circle', tipo: 'normal' }
    ]
  },
  'london-bridge': {
    ciudad: 'london',
    nombre: 'London Bridge',
    lineas: ['Jubilee', 'Northern'],
    adyacentes: [
      { slug: 'waterloo', tiempo: 3, linea: 'Jubilee', tipo: 'normal' },
      { slug: 'canary-wharf', tiempo: 4, linea: 'Jubilee', tipo: 'normal' },
      { slug: 'bank-monument', tiempo: 2, linea: 'Northern', tipo: 'normal' },
      { slug: 'waterloo', tiempo: 2, linea: 'Northern', tipo: 'normal' }
    ]
  },
  'tower-hill': {
    ciudad: 'london',
    nombre: 'Tower Hill',
    lineas: ['District', 'Circle'],
    adyacentes: [
      { slug: 'bank-monument', tiempo: 4, linea: 'District', tipo: 'normal' },
      { slug: 'canary-wharf', tiempo: 8, linea: 'DLR', tipo: 'transbordo' }
    ]
  },
  'canary-wharf': {
    ciudad: 'london',
    nombre: 'Canary Wharf',
    lineas: ['Jubilee', 'DLR'],
    adyacentes: [
      { slug: 'london-bridge', tiempo: 4, linea: 'Jubilee', tipo: 'normal' },
      { slug: 'stratford', tiempo: 7, linea: 'Jubilee', tipo: 'normal' },
      { slug: 'greenwich', tiempo: 7, linea: 'DLR', tipo: 'normal' }
    ]
  },
  'heathrow-terminal-2-3': {
    ciudad: 'london',
    nombre: 'Heathrow Terminals 2 & 3',
    lineas: ['Piccadilly'],
    adyacentes: [
      { slug: 'earls-court', tiempo: 25, linea: 'Piccadilly', tipo: 'normal' }
    ]
  },
  'paddington': {
    ciudad: 'london',
    nombre: 'Paddington',
    lineas: ['Circle', 'District', 'Bakerloo', 'Hammersmith & City'],
    adyacentes: [
      { slug: 'notting-hill-gate', tiempo: 4, linea: 'Circle', tipo: 'normal' },
      { slug: 'bond-street', tiempo: 4, linea: 'Circle', tipo: 'normal' },
      { slug: 'baker-street', tiempo: 5, linea: 'Circle', tipo: 'normal' }
    ]
  },
  'bond-street': {
    ciudad: 'london',
    nombre: 'Bond Street',
    lineas: ['Central', 'Jubilee'],
    adyacentes: [
      { slug: 'oxford-circus', tiempo: 2, linea: 'Central', tipo: 'normal' },
      { slug: 'baker-street', tiempo: 3, linea: 'Jubilee', tipo: 'normal' },
      { slug: 'green-park', tiempo: 2, linea: 'Jubilee', tipo: 'normal' },
      { slug: 'paddington', tiempo: 4, linea: 'Circle', tipo: 'transbordo' }
    ]
  },
  'baker-street': {
    ciudad: 'london',
    nombre: 'Baker Street',
    lineas: ['Jubilee', 'Circle', 'Metropolitan', 'Bakerloo', 'Hammersmith & City'],
    adyacentes: [
      { slug: 'bond-street', tiempo: 3, linea: 'Jubilee', tipo: 'normal' },
      { slug: 'green-park', tiempo: 5, linea: 'Jubilee', tipo: 'normal' },
      { slug: 'paddington', tiempo: 5, linea: 'Circle', tipo: 'normal' },
      { slug: 'king-s-cross-st-pancras', tiempo: 6, linea: 'Jubilee', tipo: 'normal' }
    ]
  },
  'bank-monument': {
    ciudad: 'london',
    nombre: 'Bank / Monument',
    lineas: ['Central', 'Northern', 'DLR'],
    adyacentes: [
      { slug: 'london-bridge', tiempo: 2, linea: 'Northern', tipo: 'normal' },
      { slug: 'leicester-square', tiempo: 4, linea: 'Northern', tipo: 'normal' },
      { slug: 'tower-hill', tiempo: 4, linea: 'District', tipo: 'transbordo' }
    ]
  },
  'piccadilly-circus': {
    ciudad: 'london',
    nombre: 'Piccadilly Circus',
    lineas: ['Piccadilly', 'Bakerloo'],
    adyacentes: [
      { slug: 'green-park', tiempo: 2, linea: 'Piccadilly', tipo: 'normal' },
      { slug: 'leicester-square', tiempo: 1, linea: 'Piccadilly', tipo: 'normal' },
      { slug: 'covent-garden', tiempo: 2, linea: 'Piccadilly', tipo: 'normal' },
      { slug: 'oxford-circus', tiempo: 2, linea: 'Bakerloo', tipo: 'normal' }
    ]
  },
  'leicester-square': {
    ciudad: 'london',
    nombre: 'Leicester Square',
    lineas: ['Piccadilly', 'Northern'],
    adyacentes: [
      { slug: 'piccadilly-circus', tiempo: 1, linea: 'Piccadilly', tipo: 'normal' },
      { slug: 'covent-garden', tiempo: 1, linea: 'Piccadilly', tipo: 'normal' },
      { slug: 'bank-monument', tiempo: 4, linea: 'Northern', tipo: 'normal' },
      { slug: 'waterloo', tiempo: 3, linea: 'Northern', tipo: 'normal' }
    ]
  },
  'green-park': {
    ciudad: 'london',
    nombre: 'Green Park',
    lineas: ['Victoria', 'Jubilee', 'Piccadilly'],
    adyacentes: [
      { slug: 'victoria', tiempo: 2, linea: 'Victoria', tipo: 'normal' },
      { slug: 'oxford-circus', tiempo: 2, linea: 'Victoria', tipo: 'normal' },
      { slug: 'westminster', tiempo: 3, linea: 'Jubilee', tipo: 'normal' },
      { slug: 'bond-street', tiempo: 2, linea: 'Jubilee', tipo: 'normal' },
      { slug: 'piccadilly-circus', tiempo: 2, linea: 'Piccadilly', tipo: 'normal' }
    ]
  },
  'earls-court': {
    ciudad: 'london',
    nombre: "Earl's Court",
    lineas: ['District', 'Piccadilly'],
    adyacentes: [
      { slug: 'heathrow-terminal-2-3', tiempo: 25, linea: 'Piccadilly', tipo: 'normal' },
      { slug: 'notting-hill-gate', tiempo: 5, linea: 'District', tipo: 'normal' }
    ]
  },
  'notting-hill-gate': {
    ciudad: 'london',
    nombre: 'Notting Hill Gate',
    lineas: ['Central', 'Circle', 'District'],
    adyacentes: [
      { slug: 'oxford-circus', tiempo: 5, linea: 'Central', tipo: 'normal' },
      { slug: 'bond-street', tiempo: 4, linea: 'Central', tipo: 'normal' },
      { slug: 'earls-court', tiempo: 5, linea: 'District', tipo: 'normal' },
      { slug: 'paddington', tiempo: 4, linea: 'Circle', tipo: 'normal' }
    ]
  },
  'camden-town': {
    ciudad: 'london',
    nombre: 'Camden Town',
    lineas: ['Northern'],
    adyacentes: [
      { slug: 'king-s-cross-st-pancras', tiempo: 3, linea: 'Northern', tipo: 'normal' },
      { slug: 'waterloo', tiempo: 8, linea: 'Northern', tipo: 'normal' }
    ]
  },
  'waterloo': {
    ciudad: 'london',
    nombre: 'Waterloo',
    lineas: ['Jubilee', 'Northern', 'Bakerloo'],
    adyacentes: [
      { slug: 'westminster', tiempo: 3, linea: 'Jubilee', tipo: 'normal' },
      { slug: 'london-bridge', tiempo: 3, linea: 'Jubilee', tipo: 'normal' },
      { slug: 'leicester-square', tiempo: 3, linea: 'Northern', tipo: 'normal' },
      { slug: 'london-bridge', tiempo: 2, linea: 'Northern', tipo: 'normal' },
      { slug: 'camden-town', tiempo: 8, linea: 'Northern', tipo: 'normal' }
    ]
  },
  'london-fields': {
    ciudad: 'london',
    nombre: 'London Fields',
    lineas: ['Overground'],
    adyacentes: [
      { slug: 'shoreditch-high-street', tiempo: 4, linea: 'Overground', tipo: 'normal' },
      { slug: 'stratford', tiempo: 12, linea: 'Overground', tipo: 'normal' }
    ]
  },
  'shoreditch-high-street': {
    ciudad: 'london',
    nombre: 'Shoreditch High Street',
    lineas: ['Overground'],
    adyacentes: [
      { slug: 'london-fields', tiempo: 4, linea: 'Overground', tipo: 'normal' },
      { slug: 'bank-monument', tiempo: 6, linea: 'Central', tipo: 'transbordo' }
    ]
  },
  'stratford': {
    ciudad: 'london',
    nombre: 'Stratford',
    lineas: ['Central', 'Jubilee', 'DLR', 'Overground'],
    adyacentes: [
      { slug: 'canary-wharf', tiempo: 7, linea: 'Jubilee', tipo: 'normal' },
      { slug: 'bank-monument', tiempo: 10, linea: 'Central', tipo: 'normal' },
      { slug: 'london-fields', tiempo: 12, linea: 'Overground', tipo: 'normal' }
    ]
  },
  'greenwich': {
    ciudad: 'london',
    nombre: 'Greenwich',
    lineas: ['DLR'],
    adyacentes: [
      { slug: 'canary-wharf', tiempo: 7, linea: 'DLR', tipo: 'normal' },
      { slug: 'stratford', tiempo: 18, linea: 'DLR', tipo: 'normal' }
    ]
  },
  'stansted-airport': {
    ciudad: 'london',
    nombre: 'Stansted Airport',
    lineas: ['Stansted Express'],
    adyacentes: [
      { slug: 'king-s-cross-st-pancras', tiempo: 47, linea: 'Stansted Express', tipo: 'normal' }
    ]
  }
};
