export const grafoNewOrleans = {
  'new-orleans-canal-carondelet': {
    ciudad: 'new-orleans',
    nombre: 'Canal Carondelet',
    lineas: ["st-charles"],
    adyacentes: [
      { slug: 'new-orleans-poydras', tiempo: 3, linea: 'st-charles', tipo: 'rta-streetcar' },
    ],
  },
  'new-orleans-poydras': {
    ciudad: 'new-orleans',
    nombre: 'Poydras',
    lineas: ["st-charles"],
    adyacentes: [
      { slug: 'new-orleans-canal-carondelet', tiempo: 3, linea: 'st-charles', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-lee-circle', tiempo: 3, linea: 'st-charles', tipo: 'rta-streetcar' },
    ],
  },
  'new-orleans-lee-circle': {
    ciudad: 'new-orleans',
    nombre: 'Lee Circle',
    lineas: ["st-charles"],
    adyacentes: [
      { slug: 'new-orleans-poydras', tiempo: 3, linea: 'st-charles', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-st-charles-jackson', tiempo: 3, linea: 'st-charles', tipo: 'rta-streetcar' },
    ],
  },
  'new-orleans-st-charles-jackson': {
    ciudad: 'new-orleans',
    nombre: 'St Charles Jackson',
    lineas: ["st-charles"],
    adyacentes: [
      { slug: 'new-orleans-lee-circle', tiempo: 3, linea: 'st-charles', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-louisiana-ave', tiempo: 3, linea: 'st-charles', tipo: 'rta-streetcar' },
    ],
  },
  'new-orleans-louisiana-ave': {
    ciudad: 'new-orleans',
    nombre: 'Louisiana Ave',
    lineas: ["st-charles"],
    adyacentes: [
      { slug: 'new-orleans-st-charles-jackson', tiempo: 3, linea: 'st-charles', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-napoleon-ave', tiempo: 3, linea: 'st-charles', tipo: 'rta-streetcar' },
    ],
  },
  'new-orleans-napoleon-ave': {
    ciudad: 'new-orleans',
    nombre: 'Napoleon Ave',
    lineas: ["st-charles"],
    adyacentes: [
      { slug: 'new-orleans-louisiana-ave', tiempo: 3, linea: 'st-charles', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-st-charles-jefferson', tiempo: 3, linea: 'st-charles', tipo: 'rta-streetcar' },
    ],
  },
  'new-orleans-st-charles-jefferson': {
    ciudad: 'new-orleans',
    nombre: 'St Charles Jefferson',
    lineas: ["st-charles"],
    adyacentes: [
      { slug: 'new-orleans-napoleon-ave', tiempo: 3, linea: 'st-charles', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-st-charles-broadway', tiempo: 3, linea: 'st-charles', tipo: 'rta-streetcar' },
    ],
  },
  'new-orleans-st-charles-broadway': {
    ciudad: 'new-orleans',
    nombre: 'St Charles Broadway',
    lineas: ["st-charles"],
    adyacentes: [
      { slug: 'new-orleans-st-charles-jefferson', tiempo: 3, linea: 'st-charles', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-audubon-park', tiempo: 3, linea: 'st-charles', tipo: 'rta-streetcar' },
    ],
  },
  'new-orleans-audubon-park': {
    ciudad: 'new-orleans',
    nombre: 'Audubon Park',
    lineas: ["st-charles"],
    adyacentes: [
      { slug: 'new-orleans-st-charles-broadway', tiempo: 3, linea: 'st-charles', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-tulane', tiempo: 3, linea: 'st-charles', tipo: 'rta-streetcar' },
    ],
  },
  'new-orleans-tulane': {
    ciudad: 'new-orleans',
    nombre: 'Tulane',
    lineas: ["st-charles"],
    adyacentes: [
      { slug: 'new-orleans-audubon-park', tiempo: 3, linea: 'st-charles', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-st-charles-carrollton', tiempo: 3, linea: 'st-charles', tipo: 'rta-streetcar' },
    ],
  },
  'new-orleans-st-charles-carrollton': {
    ciudad: 'new-orleans',
    nombre: 'St Charles Carrollton',
    lineas: ["st-charles"],
    adyacentes: [
      { slug: 'new-orleans-tulane', tiempo: 3, linea: 'st-charles', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-riverbend', tiempo: 3, linea: 'st-charles', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-canal-carrollton', tiempo: 5, linea: 'orleans', tipo: 'transbordo' }],
  },
  'new-orleans-riverbend': {
    ciudad: 'new-orleans',
    nombre: 'Riverbend',
    lineas: ["st-charles"],
    adyacentes: [
      { slug: 'new-orleans-st-charles-carrollton', tiempo: 3, linea: 'st-charles', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-claiborne-st-charles', tiempo: 3, linea: 'st-charles', tipo: 'rta-streetcar' },
    ],
  },
  'new-orleans-claiborne-st-charles': {
    ciudad: 'new-orleans',
    nombre: 'Claiborne St Charles',
    lineas: ["st-charles"],
    adyacentes: [
      { slug: 'new-orleans-riverbend', tiempo: 3, linea: 'st-charles', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-jeanette', tiempo: 3, linea: 'st-charles', tipo: 'rta-streetcar' },
    ],
  },
  'new-orleans-jeanette': {
    ciudad: 'new-orleans',
    nombre: 'Jeanette',
    lineas: ["st-charles"],
    adyacentes: [
      { slug: 'new-orleans-claiborne-st-charles', tiempo: 3, linea: 'st-charles', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-s-claiborne', tiempo: 3, linea: 'st-charles', tipo: 'rta-streetcar' },
    ],
  },
  'new-orleans-s-claiborne': {
    ciudad: 'new-orleans',
    nombre: 'S Claiborne',
    lineas: ["st-charles"],
    adyacentes: [
      { slug: 'new-orleans-jeanette', tiempo: 3, linea: 'st-charles', tipo: 'rta-streetcar' },
    ],
  },
  'new-orleans-harrahs': {
    ciudad: 'new-orleans',
    nombre: 'Harrahs',
    lineas: ["canal"],
    adyacentes: [
      { slug: 'new-orleans-canal-bourbon', tiempo: 3, linea: 'canal', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-canal-ferry', tiempo: 5, linea: 'orleans', tipo: 'transbordo' }],
  },
  'new-orleans-canal-bourbon': {
    ciudad: 'new-orleans',
    nombre: 'Canal Bourbon',
    lineas: ["canal"],
    adyacentes: [
      { slug: 'new-orleans-harrahs', tiempo: 3, linea: 'canal', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-canal-royal', tiempo: 3, linea: 'canal', tipo: 'rta-streetcar' },
    ],
  },
  'new-orleans-canal-royal': {
    ciudad: 'new-orleans',
    nombre: 'Canal Royal',
    lineas: ["canal"],
    adyacentes: [
      { slug: 'new-orleans-canal-bourbon', tiempo: 3, linea: 'canal', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-canal-basin', tiempo: 3, linea: 'canal', tipo: 'rta-streetcar' },
    ],
  },
  'new-orleans-canal-basin': {
    ciudad: 'new-orleans',
    nombre: 'Canal Basin',
    lineas: ["canal"],
    adyacentes: [
      { slug: 'new-orleans-canal-royal', tiempo: 3, linea: 'canal', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-canal-rampart', tiempo: 3, linea: 'canal', tipo: 'rta-streetcar' },
    ],
  },
  'new-orleans-canal-rampart': {
    ciudad: 'new-orleans',
    nombre: 'Canal Rampart',
    lineas: ["canal"],
    adyacentes: [
      { slug: 'new-orleans-canal-basin', tiempo: 3, linea: 'canal', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-basin-st-louis', tiempo: 3, linea: 'canal', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-press', tiempo: 5, linea: 'press', tipo: 'transbordo' }],
  },
  'new-orleans-basin-st-louis': {
    ciudad: 'new-orleans',
    nombre: 'Basin St Louis',
    lineas: ["canal"],
    adyacentes: [
      { slug: 'new-orleans-canal-rampart', tiempo: 3, linea: 'canal', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-canal-carrollton', tiempo: 3, linea: 'canal', tipo: 'rta-streetcar' },
    ],
  },
  'new-orleans-canal-carrollton': {
    ciudad: 'new-orleans',
    nombre: 'Canal Carrollton',
    lineas: ["canal"],
    adyacentes: [
      { slug: 'new-orleans-basin-st-louis', tiempo: 3, linea: 'canal', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-canal-jeff-davis', tiempo: 3, linea: 'canal', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-st-charles-carrollton', tiempo: 5, linea: 'orleans', tipo: 'transbordo' }],
  },
  'new-orleans-canal-jeff-davis': {
    ciudad: 'new-orleans',
    nombre: 'Canal Jeff Davis',
    lineas: ["canal"],
    adyacentes: [
      { slug: 'new-orleans-canal-carrollton', tiempo: 3, linea: 'canal', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-bayou-st-john', tiempo: 3, linea: 'canal', tipo: 'rta-streetcar' },
    ],
  },
  'new-orleans-bayou-st-john': {
    ciudad: 'new-orleans',
    nombre: 'Bayou St John',
    lineas: ["canal"],
    adyacentes: [
      { slug: 'new-orleans-canal-jeff-davis', tiempo: 3, linea: 'canal', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-city-park', tiempo: 3, linea: 'canal', tipo: 'rta-streetcar' },
    ],
  },
  'new-orleans-city-park': {
    ciudad: 'new-orleans',
    nombre: 'City Park',
    lineas: ["canal"],
    adyacentes: [
      { slug: 'new-orleans-bayou-st-john', tiempo: 3, linea: 'canal', tipo: 'rta-streetcar' },
    ],
  },
  'new-orleans-french-market': {
    ciudad: 'new-orleans',
    nombre: 'French Market',
    lineas: ["riverfront"],
    adyacentes: [
      { slug: 'new-orleans-jackson-brewery', tiempo: 3, linea: 'riverfront', tipo: 'rta-streetcar' },
    ],
  },
  'new-orleans-jackson-brewery': {
    ciudad: 'new-orleans',
    nombre: 'Jackson Brewery',
    lineas: ["riverfront"],
    adyacentes: [
      { slug: 'new-orleans-french-market', tiempo: 3, linea: 'riverfront', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-canal-ferry', tiempo: 3, linea: 'riverfront', tipo: 'rta-streetcar' },
    ],
  },
  'new-orleans-canal-ferry': {
    ciudad: 'new-orleans',
    nombre: 'Canal Ferry',
    lineas: ["riverfront"],
    adyacentes: [
      { slug: 'new-orleans-jackson-brewery', tiempo: 3, linea: 'riverfront', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-julia', tiempo: 3, linea: 'riverfront', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-harrahs', tiempo: 5, linea: 'harrahs', tipo: 'transbordo' }],
  },
  'new-orleans-julia': {
    ciudad: 'new-orleans',
    nombre: 'Julia',
    lineas: ["riverfront"],
    adyacentes: [
      { slug: 'new-orleans-canal-ferry', tiempo: 3, linea: 'riverfront', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-convention-center', tiempo: 3, linea: 'riverfront', tipo: 'rta-streetcar' },
    ],
  },
  'new-orleans-convention-center': {
    ciudad: 'new-orleans',
    nombre: 'Convention Center',
    lineas: ["riverfront"],
    adyacentes: [
      { slug: 'new-orleans-julia', tiempo: 3, linea: 'riverfront', tipo: 'rta-streetcar' },
    ],
  },
  'new-orleans-union-terminal': {
    ciudad: 'new-orleans',
    nombre: 'Union Terminal',
    lineas: ["rampart"],
    adyacentes: [
      { slug: 'new-orleans-loyola', tiempo: 3, linea: 'rampart', tipo: 'rta-streetcar' },
    ],
  },
  'new-orleans-loyola': {
    ciudad: 'new-orleans',
    nombre: 'Loyola',
    lineas: ["rampart"],
    adyacentes: [
      { slug: 'new-orleans-union-terminal', tiempo: 3, linea: 'rampart', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-rampart-canal', tiempo: 3, linea: 'rampart', tipo: 'rta-streetcar' },
    ],
  },
  'new-orleans-rampart-canal': {
    ciudad: 'new-orleans',
    nombre: 'Rampart Canal',
    lineas: ["rampart"],
    adyacentes: [
      { slug: 'new-orleans-loyola', tiempo: 3, linea: 'rampart', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-st-claude', tiempo: 3, linea: 'rampart', tipo: 'rta-streetcar' },
    ],
  },
  'new-orleans-st-claude': {
    ciudad: 'new-orleans',
    nombre: 'St Claude',
    lineas: ["rampart"],
    adyacentes: [
      { slug: 'new-orleans-rampart-canal', tiempo: 3, linea: 'rampart', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-press', tiempo: 3, linea: 'rampart', tipo: 'rta-streetcar' },
    ],
  },
  'new-orleans-press': {
    ciudad: 'new-orleans',
    nombre: 'Press',
    lineas: ["rampart"],
    adyacentes: [
      { slug: 'new-orleans-st-claude', tiempo: 3, linea: 'rampart', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-elysian-fields', tiempo: 3, linea: 'rampart', tipo: 'rta-streetcar' },
      { slug: 'new-orleans-canal-rampart', tiempo: 5, linea: 'orleans', tipo: 'transbordo' }],
  },
  'new-orleans-elysian-fields': {
    ciudad: 'new-orleans',
    nombre: 'Elysian Fields',
    lineas: ["rampart"],
    adyacentes: [
      { slug: 'new-orleans-press', tiempo: 3, linea: 'rampart', tipo: 'rta-streetcar' },
    ],
  },
};
