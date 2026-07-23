export const grafoTrenMaya = {
  'palenque': {
    ciudad: 'tren-maya',
    nombre: 'Palenque',
    lineas: ['T1'],
    adyacentes: [
      { slug: 'agua-azul', tiempo: 3, linea: 'T1', tipo: 'linea' }
    ],
  },
  'boca-del-cerro': {
    ciudad: 'tren-maya',
    nombre: 'Boca del Cerro',
    lineas: ['T1'],
    adyacentes: [
      { slug: 'agua-azul', tiempo: 3, linea: 'T1', tipo: 'linea' },
      { slug: 'tenosique', tiempo: 3, linea: 'T1', tipo: 'linea' }
    ],
  },
  'tenosique': {
    ciudad: 'tren-maya',
    nombre: 'Tenosique',
    lineas: ['T1'],
    adyacentes: [
      { slug: 'boca-del-cerro', tiempo: 3, linea: 'T1', tipo: 'linea' },
      { slug: 'escarcega', tiempo: 3, linea: 'T1', tipo: 'linea' }
    ],
  },
  'escarcega': {
    ciudad: 'tren-maya',
    nombre: 'Escárcega',
    lineas: ['T1', 'T2', 'T7'],
    adyacentes: [
      { slug: 'tenosique', tiempo: 3, linea: 'T1', tipo: 'linea' },
      { slug: 'calakmul-balamku', tiempo: 3, linea: 'T2', tipo: 'linea' },
      { slug: 'nicolas-bravo', tiempo: 20, linea: 'T7', tipo: 'linea' }
    ],
  },
  'calkini': {
    ciudad: 'tren-maya',
    nombre: 'Calkiní',
    lineas: ['T2', 'T3'],
    adyacentes: [
      { slug: 'edzna', tiempo: 3, linea: 'T2', tipo: 'linea' },
      { slug: 'maxcanu', tiempo: 3, linea: 'T3', tipo: 'linea' }
    ],
  },
  'campeche-central': {
    ciudad: 'tren-maya',
    nombre: 'San Francisco de Campeche',
    lineas: ['T2'],
    adyacentes: [
      { slug: 'calakmul-balamku', tiempo: 3, linea: 'T2', tipo: 'linea' },
      { slug: 'edzna', tiempo: 3, linea: 'T2', tipo: 'linea' }
    ],
  },
  'edzna': {
    ciudad: 'tren-maya',
    nombre: 'Edzná',
    lineas: ['T2'],
    adyacentes: [
      { slug: 'campeche-central', tiempo: 3, linea: 'T2', tipo: 'linea' },
      { slug: 'calkini', tiempo: 3, linea: 'T2', tipo: 'linea' }
    ],
  },
  'maxcanu': {
    ciudad: 'tren-maya',
    nombre: 'Maxcanú',
    lineas: ['T3'],
    adyacentes: [
      { slug: 'calkini', tiempo: 3, linea: 'T3', tipo: 'linea' },
      { slug: 'merida-teya', tiempo: 3, linea: 'T3', tipo: 'linea' }
    ],
  },
  'merida-teya': {
    ciudad: 'tren-maya',
    nombre: 'Mérida (Teya)',
    lineas: ['T3'],
    adyacentes: [
      { slug: 'maxcanu', tiempo: 3, linea: 'T3', tipo: 'linea' },
      { slug: 'tixkokob', tiempo: 3, linea: 'T3', tipo: 'linea' }
    ],
  },
  'tixkokob': {
    ciudad: 'tren-maya',
    nombre: 'Tixkokob',
    lineas: ['T3'],
    adyacentes: [
      { slug: 'merida-teya', tiempo: 3, linea: 'T3', tipo: 'linea' },
      { slug: 'izamal', tiempo: 3, linea: 'T3', tipo: 'linea' }
    ],
  },
  'izamal': {
    ciudad: 'tren-maya',
    nombre: 'Izamal',
    lineas: ['T3', 'T4'],
    adyacentes: [
      { slug: 'tixkokob', tiempo: 3, linea: 'T3', tipo: 'linea' },
      { slug: 'chichen-itza', tiempo: 3, linea: 'T4', tipo: 'linea' }
    ],
  },
  'chichen-itza': {
    ciudad: 'tren-maya',
    nombre: 'Chichén Itzá',
    lineas: ['T4'],
    adyacentes: [
      { slug: 'izamal', tiempo: 3, linea: 'T4', tipo: 'linea' },
      { slug: 'valladolid', tiempo: 3, linea: 'T4', tipo: 'linea' }
    ],
  },
  'valladolid': {
    ciudad: 'tren-maya',
    nombre: 'Valladolid',
    lineas: ['T4'],
    adyacentes: [
      { slug: 'chichen-itza', tiempo: 3, linea: 'T4', tipo: 'linea' },
      { slug: 'nuevo-xcan', tiempo: 3, linea: 'T4', tipo: 'linea' }
    ],
  },
  'nuevo-xcan': {
    ciudad: 'tren-maya',
    nombre: 'Nuevo Xcán',
    lineas: ['T4'],
    adyacentes: [
      { slug: 'valladolid', tiempo: 3, linea: 'T4', tipo: 'linea' },
      { slug: 'cancun', tiempo: 3, linea: 'T4', tipo: 'linea' }
    ],
  },
  'cancun-aeropuerto': {
    ciudad: 'tren-maya',
    nombre: 'Cancún (Aeropuerto)',
    lineas: ['T5N'],
    adyacentes: [
      { slug: 'cancun', tiempo: 20, linea: 'T5N', tipo: 'linea' },
      { slug: 'puerto-morelos', tiempo: 20, linea: 'T5N', tipo: 'linea' }
    ],
  },
  'cancun': {
    ciudad: 'tren-maya',
    nombre: 'Cancún',
    lineas: ['T4', 'T5N'],
    adyacentes: [
      { slug: 'nuevo-xcan', tiempo: 3, linea: 'T4', tipo: 'linea' },
      { slug: 'cancun-aeropuerto', tiempo: 20, linea: 'T5N', tipo: 'linea' }
    ],
  },
  'puerto-morelos': {
    ciudad: 'tren-maya',
    nombre: 'Puerto Morelos',
    lineas: ['T5N'],
    adyacentes: [
      { slug: 'cancun-aeropuerto', tiempo: 20, linea: 'T5N', tipo: 'linea' },
      { slug: 'playa-del-carmen', tiempo: 20, linea: 'T5N', tipo: 'linea' }
    ],
  },
  'playa-del-carmen': {
    ciudad: 'tren-maya',
    nombre: 'Playa del Carmen',
    lineas: ['T5N', 'T5S'],
    adyacentes: [
      { slug: 'puerto-morelos', tiempo: 20, linea: 'T5N', tipo: 'linea' },
      { slug: 'xcaret', tiempo: 3, linea: 'T5S', tipo: 'linea' }
    ],
  },
  'xcaret': {
    ciudad: 'tren-maya',
    nombre: 'Xcaret',
    lineas: ['T5S'],
    adyacentes: [
      { slug: 'playa-del-carmen', tiempo: 3, linea: 'T5S', tipo: 'linea' },
      { slug: 'tulum', tiempo: 3, linea: 'T5S', tipo: 'linea' }
    ],
  },
  'tulum-aeropuerto': {
    ciudad: 'tren-maya',
    nombre: 'Tulum (Aeropuerto)',
    lineas: ['T6'],
    adyacentes: [
      { slug: 'tulum', tiempo: 3, linea: 'T6', tipo: 'linea' },
      { slug: 'felipe-carrillo-puerto', tiempo: 3, linea: 'T6', tipo: 'linea' }
    ],
  },
  'tulum': {
    ciudad: 'tren-maya',
    nombre: 'Tulum',
    lineas: ['T5S', 'T6'],
    adyacentes: [
      { slug: 'xcaret', tiempo: 3, linea: 'T5S', tipo: 'linea' },
      { slug: 'tulum-aeropuerto', tiempo: 3, linea: 'T6', tipo: 'linea' }
    ],
  },
  'felipe-carrillo-puerto': {
    ciudad: 'tren-maya',
    nombre: 'Felipe Carrillo Puerto',
    lineas: ['T6'],
    adyacentes: [
      { slug: 'tulum-aeropuerto', tiempo: 3, linea: 'T6', tipo: 'linea' },
      { slug: 'limones', tiempo: 3, linea: 'T6', tipo: 'linea' }
    ],
  },
  'limones': {
    ciudad: 'tren-maya',
    nombre: 'Limones',
    lineas: ['T6'],
    adyacentes: [
      { slug: 'felipe-carrillo-puerto', tiempo: 3, linea: 'T6', tipo: 'linea' },
      { slug: 'bacalar', tiempo: 3, linea: 'T6', tipo: 'linea' }
    ],
  },
  'nicolas-bravo': {
    ciudad: 'tren-maya',
    nombre: 'Nicolás Bravo',
    lineas: ['T7'],
    adyacentes: [
      { slug: 'chetumal', tiempo: 20, linea: 'T7', tipo: 'linea' },
      { slug: 'escarcega', tiempo: 20, linea: 'T7', tipo: 'linea' }
    ],
  },
  'bacalar': {
    ciudad: 'tren-maya',
    nombre: 'Bacalar',
    lineas: ['T6'],
    adyacentes: [
      { slug: 'limones', tiempo: 3, linea: 'T6', tipo: 'linea' },
      { slug: 'chetumal', tiempo: 3, linea: 'T6', tipo: 'linea' }
    ],
  },
  'chetumal': {
    ciudad: 'tren-maya',
    nombre: 'Chetumal',
    lineas: ['T6', 'T7'],
    adyacentes: [
      { slug: 'bacalar', tiempo: 3, linea: 'T6', tipo: 'linea' },
      { slug: 'nicolas-bravo', tiempo: 20, linea: 'T7', tipo: 'linea' }
    ],
  },
  'agua-azul': {
    ciudad: 'tren-maya',
    nombre: 'Agua Azul',
    lineas: ['T1'],
    adyacentes: [
      { slug: 'palenque', tiempo: 3, linea: 'T1', tipo: 'linea' },
      { slug: 'boca-del-cerro', tiempo: 3, linea: 'T1', tipo: 'linea' }
    ],
  },
  'calakmul-balamku': {
    ciudad: 'tren-maya',
    nombre: 'Calakmul - Balamkú',
    lineas: ['T2'],
    adyacentes: [
      { slug: 'escarcega', tiempo: 3, linea: 'T2', tipo: 'linea' },
      { slug: 'campeche-central', tiempo: 3, linea: 'T2', tipo: 'linea' }
    ],
  }
};
