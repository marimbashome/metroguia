export const grafoToluca = {
  'observatorio-cdmx': {
    ciudad: 'toluca',
    nombre: 'Observatorio CDMX',
    lineas: ['TI'],
    adyacentes: [
      { slug: 'parque-lerma', tiempo: 3, linea: 'TI', tipo: 'linea' }
    ],
  },
  'san-mateo-atenco': {
    ciudad: 'toluca',
    nombre: 'San Mateo Atenco',
    lineas: ['TI'],
    adyacentes: [
      { slug: 'parque-lerma', tiempo: 3, linea: 'TI', tipo: 'linea' },
      { slug: 'san-salvador-metepec', tiempo: 3, linea: 'TI', tipo: 'linea' }
    ],
  },
  'zinacantepec-terminal': {
    ciudad: 'toluca',
    nombre: 'Zinacantepec Terminal',
    lineas: ['TI', 'M1'],
    adyacentes: [
      { slug: 'san-salvador-metepec', tiempo: 3, linea: 'TI', tipo: 'linea' },
      { slug: 'toluca-centro-bus', tiempo: 4, linea: 'M1', tipo: 'linea' }
    ],
  },
  'toluca-centro-bus': {
    ciudad: 'toluca',
    nombre: 'Toluca Centro',
    lineas: ['M1'],
    adyacentes: [
      { slug: 'zinacantepec-terminal', tiempo: 4, linea: 'M1', tipo: 'linea' },
      { slug: 'portales-toluca', tiempo: 4, linea: 'M1', tipo: 'linea' }
    ],
  },
  'portales-toluca': {
    ciudad: 'toluca',
    nombre: 'Portales',
    lineas: ['M1'],
    adyacentes: [
      { slug: 'toluca-centro-bus', tiempo: 4, linea: 'M1', tipo: 'linea' },
      { slug: 'cosmovitral', tiempo: 4, linea: 'M1', tipo: 'linea' }
    ],
  },
  'cosmovitral': {
    ciudad: 'toluca',
    nombre: 'Cosmovitral',
    lineas: ['M1'],
    adyacentes: [
      { slug: 'portales-toluca', tiempo: 4, linea: 'M1', tipo: 'linea' },
      { slug: 'metepec-artesanal', tiempo: 4, linea: 'M1', tipo: 'linea' }
    ],
  },
  'metepec-artesanal': {
    ciudad: 'toluca',
    nombre: 'Metepec Artesanal',
    lineas: ['M1'],
    adyacentes: [
      { slug: 'cosmovitral', tiempo: 4, linea: 'M1', tipo: 'linea' },
      { slug: 'san-salvador-metepec', tiempo: 4, linea: 'M1', tipo: 'linea' }
    ],
  },
  'san-salvador-metepec': {
    ciudad: 'toluca',
    nombre: 'San Salvador Metepec',
    lineas: ['TI', 'M1'],
    adyacentes: [
      { slug: 'san-mateo-atenco', tiempo: 3, linea: 'TI', tipo: 'linea' },
      { slug: 'zinacantepec-terminal', tiempo: 3, linea: 'TI', tipo: 'linea' },
      { slug: 'metepec-artesanal', tiempo: 4, linea: 'M1', tipo: 'linea' }
    ],
  },
  'lerma-centro': {
    ciudad: 'toluca',
    nombre: 'Lerma Centro',
    lineas: ['M2'],
    adyacentes: [
      { slug: 'parque-lerma', tiempo: 3, linea: 'M2', tipo: 'linea' }
    ],
  },
  'parque-lerma': {
    ciudad: 'toluca',
    nombre: 'Parque Lerma',
    lineas: ['TI', 'M2'],
    adyacentes: [
      { slug: 'observatorio-cdmx', tiempo: 3, linea: 'TI', tipo: 'linea' },
      { slug: 'san-mateo-atenco', tiempo: 3, linea: 'TI', tipo: 'linea' },
      { slug: 'lerma-centro', tiempo: 3, linea: 'M2', tipo: 'linea' },
      { slug: 'universidad-toluca', tiempo: 3, linea: 'M2', tipo: 'linea' }
    ],
  },
  'universidad-toluca': {
    ciudad: 'toluca',
    nombre: 'Universidad Toluca',
    lineas: ['M2'],
    adyacentes: [
      { slug: 'parque-lerma', tiempo: 3, linea: 'M2', tipo: 'linea' },
      { slug: 'aeropuerto-toluca', tiempo: 3, linea: 'M2', tipo: 'linea' }
    ],
  },
  'aeropuerto-toluca': {
    ciudad: 'toluca',
    nombre: 'Acceso Aeropuerto',
    lineas: ['M2'],
    adyacentes: [
      { slug: 'universidad-toluca', tiempo: 3, linea: 'M2', tipo: 'linea' }
    ],
  }
};
