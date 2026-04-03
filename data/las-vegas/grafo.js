export const grafoLasVegas = {
  'las-vegas-mgm-grand': {
    ciudad: 'las-vegas',
    nombre: 'Mgm Grand',
    lineas: ["monorail"],
    adyacentes: [
      { slug: 'las-vegas-ballys-paris', tiempo: 3, linea: 'monorail', tipo: 'lv-monorail' },
    ],
  },
  'las-vegas-ballys-paris': {
    ciudad: 'las-vegas',
    nombre: 'Ballys Paris',
    lineas: ["monorail"],
    adyacentes: [
      { slug: 'las-vegas-mgm-grand', tiempo: 3, linea: 'monorail', tipo: 'lv-monorail' },
      { slug: 'las-vegas-flamingo-caesars', tiempo: 3, linea: 'monorail', tipo: 'lv-monorail' },
    ],
  },
  'las-vegas-flamingo-caesars': {
    ciudad: 'las-vegas',
    nombre: 'Flamingo Caesars',
    lineas: ["monorail"],
    adyacentes: [
      { slug: 'las-vegas-ballys-paris', tiempo: 3, linea: 'monorail', tipo: 'lv-monorail' },
      { slug: 'las-vegas-harrahs-linq', tiempo: 3, linea: 'monorail', tipo: 'lv-monorail' },
    ],
  },
  'las-vegas-harrahs-linq': {
    ciudad: 'las-vegas',
    nombre: 'Harrahs Linq',
    lineas: ["monorail"],
    adyacentes: [
      { slug: 'las-vegas-flamingo-caesars', tiempo: 3, linea: 'monorail', tipo: 'lv-monorail' },
      { slug: 'las-vegas-convention-center', tiempo: 3, linea: 'monorail', tipo: 'lv-monorail' },
    ],
  },
  'las-vegas-convention-center': {
    ciudad: 'las-vegas',
    nombre: 'Convention Center',
    lineas: ["monorail"],
    adyacentes: [
      { slug: 'las-vegas-harrahs-linq', tiempo: 3, linea: 'monorail', tipo: 'lv-monorail' },
      { slug: 'las-vegas-westgate', tiempo: 3, linea: 'monorail', tipo: 'lv-monorail' },
    ],
  },
  'las-vegas-westgate': {
    ciudad: 'las-vegas',
    nombre: 'Westgate',
    lineas: ["monorail"],
    adyacentes: [
      { slug: 'las-vegas-convention-center', tiempo: 3, linea: 'monorail', tipo: 'lv-monorail' },
      { slug: 'las-vegas-sahara', tiempo: 3, linea: 'monorail', tipo: 'lv-monorail' },
    ],
  },
  'las-vegas-sahara': {
    ciudad: 'las-vegas',
    nombre: 'Sahara',
    lineas: ["monorail"],
    adyacentes: [
      { slug: 'las-vegas-westgate', tiempo: 3, linea: 'monorail', tipo: 'lv-monorail' },
    ],
  },
};
