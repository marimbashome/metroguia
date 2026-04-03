export const grafoMississauga = {
  'mississauga-kipling-station': {
    ciudad: 'mississauga',
    nombre: 'Kipling Station',
    lineas: ['hazel-mcallion-purple'],
    adyacentes: [
      { slug: 'mississauga-dundas-west', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' }
    ]
  },
  'mississauga-dundas-west': {
    ciudad: 'mississauga',
    nombre: 'Dundas West',
    lineas: ['hazel-mcallion-purple'],
    adyacentes: [
      { slug: 'mississauga-kipling-station', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' },
      { slug: 'mississauga-burnhamthorpe', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' }
    ]
  },
  'mississauga-burnhamthorpe': {
    ciudad: 'mississauga',
    nombre: 'Burnhamthorpe',
    lineas: ['hazel-mcallion-purple'],
    adyacentes: [
      { slug: 'mississauga-dundas-west', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' },
      { slug: 'mississauga-city-centre', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' }
    ]
  },
  'mississauga-city-centre': {
    ciudad: 'mississauga',
    nombre: 'City Centre',
    lineas: ['hazel-mcallion-purple'],
    adyacentes: [
      { slug: 'mississauga-burnhamthorpe', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' },
      { slug: 'mississauga-square-one', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' }
    ]
  },
  'mississauga-square-one': {
    ciudad: 'mississauga',
    nombre: 'Square One',
    lineas: ['hazel-mcallion-purple'],
    adyacentes: [
      { slug: 'mississauga-city-centre', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' },
      { slug: 'mississauga-rathburn', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' }
    ]
  },
  'mississauga-rathburn': {
    ciudad: 'mississauga',
    nombre: 'Rathburn',
    lineas: ['hazel-mcallion-purple'],
    adyacentes: [
      { slug: 'mississauga-square-one', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' },
      { slug: 'mississauga-bloor-street', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' }
    ]
  },
  'mississauga-bloor-street': {
    ciudad: 'mississauga',
    nombre: 'Bloor Street',
    lineas: ['hazel-mcallion-purple'],
    adyacentes: [
      { slug: 'mississauga-rathburn', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' },
      { slug: 'mississauga-cawthra', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' }
    ]
  },
  'mississauga-cawthra': {
    ciudad: 'mississauga',
    nombre: 'Cawthra',
    lineas: ['hazel-mcallion-purple'],
    adyacentes: [
      { slug: 'mississauga-bloor-street', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' },
      { slug: 'mississauga-hurontario-downtown', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' }
    ]
  },
  'mississauga-hurontario-downtown': {
    ciudad: 'mississauga',
    nombre: 'Hurontario Downtown',
    lineas: ['hazel-mcallion-purple'],
    adyacentes: [
      { slug: 'mississauga-cawthra', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' },
      { slug: 'mississauga-lakeshore-road', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' }
    ]
  },
  'mississauga-lakeshore-road': {
    ciudad: 'mississauga',
    nombre: 'Lakeshore Road',
    lineas: ['hazel-mcallion-purple'],
    adyacentes: [
      { slug: 'mississauga-hurontario-downtown', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' },
      { slug: 'mississauga-port-street', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' }
    ]
  },
  'mississauga-port-street': {
    ciudad: 'mississauga',
    nombre: 'Port Street',
    lineas: ['hazel-mcallion-purple'],
    adyacentes: [
      { slug: 'mississauga-lakeshore-road', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' },
      { slug: 'mississauga-dundas-eastbound', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' }
    ]
  },
  'mississauga-dundas-eastbound': {
    ciudad: 'mississauga',
    nombre: 'Dundas Eastbound',
    lineas: ['hazel-mcallion-purple'],
    adyacentes: [
      { slug: 'mississauga-port-street', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' },
      { slug: 'mississauga-eglinton-east', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' }
    ]
  },
  'mississauga-eglinton-east': {
    ciudad: 'mississauga',
    nombre: 'Eglinton East',
    lineas: ['hazel-mcallion-purple'],
    adyacentes: [
      { slug: 'mississauga-dundas-eastbound', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' },
      { slug: 'mississauga-steeles-avenue', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' }
    ]
  },
  'mississauga-steeles-avenue': {
    ciudad: 'mississauga',
    nombre: 'Steeles Avenue',
    lineas: ['hazel-mcallion-purple'],
    adyacentes: [
      { slug: 'mississauga-eglinton-east', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' },
      { slug: 'mississauga-clark-boulevard', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' }
    ]
  },
  'mississauga-clark-boulevard': {
    ciudad: 'mississauga',
    nombre: 'Clark Boulevard',
    lineas: ['hazel-mcallion-purple'],
    adyacentes: [
      { slug: 'mississauga-steeles-avenue', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' },
      { slug: 'mississauga-mcmurchy-avenue', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' }
    ]
  },
  'mississauga-mcmurchy-avenue': {
    ciudad: 'mississauga',
    nombre: 'McMurchy Avenue',
    lineas: ['hazel-mcallion-purple'],
    adyacentes: [
      { slug: 'mississauga-clark-boulevard', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' },
      { slug: 'mississauga-terminal-station', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' }
    ]
  },
  'mississauga-terminal-station': {
    ciudad: 'mississauga',
    nombre: 'Terminal Station',
    lineas: ['hazel-mcallion-purple'],
    adyacentes: [
      { slug: 'mississauga-mcmurchy-avenue', tiempo: 3, linea: 'hazel-mcallion-purple', tipo: 'lrt' }
    ]
  }
};
