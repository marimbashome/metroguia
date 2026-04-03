export const grafoCampeche = {
  'campeche-estacion-central': {
    ciudad: 'campeche',
    nombre: 'Estación Central',
    lineas: ['1', 'TM'],
    adyacentes: [
      { slug: 'campeche-fuerte-san-miguel', tiempo: 4, linea: '1', tipo: 'linea' },
      { slug: 'campeche-tren-maya', tiempo: 20, linea: 'TM', tipo: 'linea' }
    ],
  },
  'campeche-fuerte-san-miguel': {
    ciudad: 'campeche',
    nombre: 'Fuerte San Miguel',
    lineas: ['1'],
    adyacentes: [
      { slug: 'campeche-estacion-central', tiempo: 4, linea: '1', tipo: 'linea' },
      { slug: 'campeche-centro-historico', tiempo: 4, linea: '1', tipo: 'linea' }
    ],
  },
  'campeche-centro-historico': {
    ciudad: 'campeche',
    nombre: 'Centro Histórico',
    lineas: ['1'],
    adyacentes: [
      { slug: 'campeche-fuerte-san-miguel', tiempo: 4, linea: '1', tipo: 'linea' },
      { slug: 'campeche-puerta-de-tierra', tiempo: 4, linea: '1', tipo: 'linea' }
    ],
  },
  'campeche-puerta-de-tierra': {
    ciudad: 'campeche',
    nombre: 'Puerta de Tierra',
    lineas: ['1'],
    adyacentes: [
      { slug: 'campeche-centro-historico', tiempo: 4, linea: '1', tipo: 'linea' },
      { slug: 'campeche-barrio-antiguo', tiempo: 4, linea: '1', tipo: 'linea' }
    ],
  },
  'campeche-barrio-antiguo': {
    ciudad: 'campeche',
    nombre: 'Barrio Antiguo',
    lineas: ['1'],
    adyacentes: [
      { slug: 'campeche-puerta-de-tierra', tiempo: 4, linea: '1', tipo: 'linea' },
      { slug: 'campeche-barrio-san-francisco', tiempo: 4, linea: '1', tipo: 'linea' }
    ],
  },
  'campeche-barrio-san-francisco': {
    ciudad: 'campeche',
    nombre: 'Barrio San Francisco',
    lineas: ['1'],
    adyacentes: [
      { slug: 'campeche-barrio-antiguo', tiempo: 4, linea: '1', tipo: 'linea' },
      { slug: 'campeche-playita-bonita', tiempo: 4, linea: '1', tipo: 'linea' }
    ],
  },
  'campeche-playita-bonita': {
    ciudad: 'campeche',
    nombre: 'Playita Bonita',
    lineas: ['1'],
    adyacentes: [
      { slug: 'campeche-barrio-san-francisco', tiempo: 4, linea: '1', tipo: 'linea' },
      { slug: 'campeche-lerma', tiempo: 4, linea: '1', tipo: 'linea' }
    ],
  },
  'campeche-tren-maya': {
    ciudad: 'campeche',
    nombre: 'Tren Maya',
    lineas: ['TM'],
    adyacentes: [
      { slug: 'campeche-estacion-central', tiempo: 20, linea: 'TM', tipo: 'linea' },
      { slug: 'campeche-calakmul', tiempo: 20, linea: 'TM', tipo: 'linea' }
    ],
  },
  'campeche-lerma': {
    ciudad: 'campeche',
    nombre: 'Lerma',
    lineas: ['1'],
    adyacentes: [
      { slug: 'campeche-playita-bonita', tiempo: 4, linea: '1', tipo: 'linea' }
    ],
  },
  'campeche-calakmul': {
    ciudad: 'campeche',
    nombre: 'Calakmul',
    lineas: ['TM'],
    adyacentes: [
      { slug: 'campeche-tren-maya', tiempo: 20, linea: 'TM', tipo: 'linea' },
      { slug: 'campeche-becan', tiempo: 20, linea: 'TM', tipo: 'linea' }
    ],
  },
  'campeche-becan': {
    ciudad: 'campeche',
    nombre: 'Becán',
    lineas: ['TM'],
    adyacentes: [
      { slug: 'campeche-calakmul', tiempo: 20, linea: 'TM', tipo: 'linea' }
    ],
  }
};
