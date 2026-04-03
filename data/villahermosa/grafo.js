export const grafoVillahermosa = {
  'villahermosa-terminal-primera-clase': {
    ciudad: 'villahermosa',
    nombre: 'Terminal Primera Clase',
    lineas: ['1', 'TM'],
    adyacentes: [
      { slug: 'villahermosa-centro-historico', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'villahermosa-museo-de-antropologia', tiempo: 20, linea: 'TM', tipo: 'linea' }
    ],
  },
  'villahermosa-centro-historico': {
    ciudad: 'villahermosa',
    nombre: 'Centro Histórico',
    lineas: ['1'],
    adyacentes: [
      { slug: 'villahermosa-terminal-primera-clase', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'villahermosa-agua-blanca', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'villahermosa-agua-blanca': {
    ciudad: 'villahermosa',
    nombre: 'Agua Blanca',
    lineas: ['1'],
    adyacentes: [
      { slug: 'villahermosa-centro-historico', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'villahermosa-villahermosa-2000', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'villahermosa-villahermosa-2000': {
    ciudad: 'villahermosa',
    nombre: 'Villahermosa 2000',
    lineas: ['1'],
    adyacentes: [
      { slug: 'villahermosa-agua-blanca', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'villahermosa-yumka', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'villahermosa-yumka': {
    ciudad: 'villahermosa',
    nombre: 'Yumká',
    lineas: ['1'],
    adyacentes: [
      { slug: 'villahermosa-villahermosa-2000', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'villahermosa-puxcatan', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'villahermosa-puxcatan': {
    ciudad: 'villahermosa',
    nombre: 'Puxcatán',
    lineas: ['1'],
    adyacentes: [
      { slug: 'villahermosa-yumka', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'villahermosa-paseo-tabasco', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'villahermosa-paseo-tabasco': {
    ciudad: 'villahermosa',
    nombre: 'Paseo Tabasco',
    lineas: ['1'],
    adyacentes: [
      { slug: 'villahermosa-puxcatan', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'villahermosa-museo-de-antropologia': {
    ciudad: 'villahermosa',
    nombre: 'Museo de Antropología',
    lineas: ['TM'],
    adyacentes: [
      { slug: 'villahermosa-terminal-primera-clase', tiempo: 20, linea: 'TM', tipo: 'linea' },
      { slug: 'villahermosa-tren-maya-palenque', tiempo: 20, linea: 'TM', tipo: 'linea' }
    ],
  },
  'villahermosa-tren-maya-palenque': {
    ciudad: 'villahermosa',
    nombre: 'Tren Maya Palenque',
    lineas: ['TM'],
    adyacentes: [
      { slug: 'villahermosa-museo-de-antropologia', tiempo: 20, linea: 'TM', tipo: 'linea' }
    ],
  }
};
