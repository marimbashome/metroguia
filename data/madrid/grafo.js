export const grafoMadrid = {
  'sol': {
    ciudad: 'madrid',
    nombre: 'Sol',
    lineas: ['1', '2', '3'],
    adyacentes: [
      { slug: 'gran-via', tiempo: 2, linea: '1', tipo: 'normal' },
      { slug: 'callao', tiempo: 2, linea: '3', tipo: 'normal' },
      { slug: 'sevilla', tiempo: 2, linea: '2', tipo: 'normal' },
      { slug: 'opera', tiempo: 3, linea: '2', tipo: 'normal' }
    ]
  },
  'gran-via': {
    ciudad: 'madrid',
    nombre: 'Gran Vía',
    lineas: ['1', '5'],
    adyacentes: [
      { slug: 'sol', tiempo: 2, linea: '1', tipo: 'normal' },
      { slug: 'callao', tiempo: 2, linea: '5', tipo: 'normal' },
      { slug: 'tribunal', tiempo: 2, linea: '1', tipo: 'normal' },
      { slug: 'chueca', tiempo: 2, linea: '5', tipo: 'normal' }
    ]
  },
  'nuevos-ministerios': {
    ciudad: 'madrid',
    nombre: 'Nuevos Ministerios',
    lineas: ['6', '8', '10'],
    adyacentes: [
      { slug: 'bernabeu', tiempo: 3, linea: '10', tipo: 'normal' },
      { slug: 'cuatro-caminos', tiempo: 4, linea: '6', tipo: 'normal' },
      { slug: 'barajas', tiempo: 12, linea: '8', tipo: 'normal' }
    ]
  },
  'barajas': {
    ciudad: 'madrid',
    nombre: 'Aeropuerto T4',
    lineas: ['8'],
    adyacentes: [
      { slug: 'nuevos-ministerios', tiempo: 12, linea: '8', tipo: 'normal' }
    ]
  },
  'plaza-de-espana': {
    ciudad: 'madrid',
    nombre: 'Plaza de España',
    lineas: ['3', '10'],
    adyacentes: [
      { slug: 'callao', tiempo: 2, linea: '3', tipo: 'normal' },
      { slug: 'ciudad-universitaria', tiempo: 4, linea: '6', tipo: 'transbordo' },
      { slug: 'opera', tiempo: 2, linea: '2', tipo: 'transbordo' }
    ]
  },
  'opera': {
    ciudad: 'madrid',
    nombre: 'Ópera',
    lineas: ['2', '5', 'R'],
    adyacentes: [
      { slug: 'sol', tiempo: 3, linea: '2', tipo: 'normal' },
      { slug: 'gran-via', tiempo: 3, linea: '5', tipo: 'normal' },
      { slug: 'plaza-de-espana', tiempo: 2, linea: '2', tipo: 'normal' }
    ]
  },
  'prado-atocha': {
    ciudad: 'madrid',
    nombre: 'Banco de España',
    lineas: ['2'],
    adyacentes: [
      { slug: 'sevilla', tiempo: 2, linea: '2', tipo: 'normal' },
      { slug: 'retiro', tiempo: 2, linea: '2', tipo: 'normal' }
    ]
  },
  'atocha-renfe': {
    ciudad: 'madrid',
    nombre: 'Atocha Renfe',
    lineas: ['1'],
    adyacentes: [
      { slug: 'sol', tiempo: 4, linea: '1', tipo: 'normal' },
      { slug: 'prado-atocha', tiempo: 3, linea: '1', tipo: 'transbordo' }
    ]
  },
  'sevilla': {
    ciudad: 'madrid',
    nombre: 'Sevilla',
    lineas: ['2'],
    adyacentes: [
      { slug: 'sol', tiempo: 2, linea: '2', tipo: 'normal' },
      { slug: 'prado-atocha', tiempo: 2, linea: '2', tipo: 'normal' }
    ]
  },
  'banco-de-espana': {
    ciudad: 'madrid',
    nombre: 'Banco de España',
    lineas: ['2'],
    adyacentes: [
      { slug: 'sevilla', tiempo: 2, linea: '2', tipo: 'normal' },
      { slug: 'retiro', tiempo: 2, linea: '2', tipo: 'normal' }
    ]
  },
  'alonso-martinez': {
    ciudad: 'madrid',
    nombre: 'Alonso Martínez',
    lineas: ['4', '5', '10'],
    adyacentes: [
      { slug: 'tribunal', tiempo: 2, linea: '5', tipo: 'normal' },
      { slug: 'colon', tiempo: 2, linea: '4', tipo: 'normal' },
      { slug: 'chueca', tiempo: 2, linea: '5', tipo: 'normal' },
      { slug: 'bilbao', tiempo: 2, linea: '4', tipo: 'normal' }
    ]
  },
  'bilbao': {
    ciudad: 'madrid',
    nombre: 'Bilbao',
    lineas: ['1', '4'],
    adyacentes: [
      { slug: 'alonso-martinez', tiempo: 2, linea: '4', tipo: 'normal' },
      { slug: 'tribunal', tiempo: 2, linea: '1', tipo: 'normal' },
      { slug: 'cuatro-caminos', tiempo: 3, linea: '1', tipo: 'normal' }
    ]
  },
  'tribunal': {
    ciudad: 'madrid',
    nombre: 'Tribunal',
    lineas: ['1', '10'],
    adyacentes: [
      { slug: 'gran-via', tiempo: 2, linea: '1', tipo: 'normal' },
      { slug: 'bilbao', tiempo: 2, linea: '1', tipo: 'normal' },
      { slug: 'alonso-martinez', tiempo: 2, linea: '10', tipo: 'normal' }
    ]
  },
  'chueca': {
    ciudad: 'madrid',
    nombre: 'Chueca',
    lineas: ['5'],
    adyacentes: [
      { slug: 'gran-via', tiempo: 2, linea: '5', tipo: 'normal' },
      { slug: 'alonso-martinez', tiempo: 2, linea: '5', tipo: 'normal' }
    ]
  },
  'colon': {
    ciudad: 'madrid',
    nombre: 'Colón',
    lineas: ['4'],
    adyacentes: [
      { slug: 'alonso-martinez', tiempo: 2, linea: '4', tipo: 'normal' },
      { slug: 'serrano', tiempo: 2, linea: '4', tipo: 'normal' }
    ]
  },
  'retiro': {
    ciudad: 'madrid',
    nombre: 'Retiro',
    lineas: ['2'],
    adyacentes: [
      { slug: 'banco-de-espana', tiempo: 2, linea: '2', tipo: 'normal' },
      { slug: 'ibiza', tiempo: 3, linea: '9', tipo: 'transbordo' }
    ]
  },
  'ibiza': {
    ciudad: 'madrid',
    nombre: 'Ibiza',
    lineas: ['9'],
    adyacentes: [
      { slug: 'retiro', tiempo: 3, linea: '9', tipo: 'normal' },
      { slug: 'goya', tiempo: 3, linea: '9', tipo: 'normal' }
    ]
  },
  'goya': {
    ciudad: 'madrid',
    nombre: 'Goya',
    lineas: ['2', '4'],
    adyacentes: [
      { slug: 'retiro', tiempo: 3, linea: '2', tipo: 'normal' },
      { slug: 'ibiza', tiempo: 3, linea: '9', tipo: 'transbordo' },
      { slug: 'velazquez', tiempo: 2, linea: '4', tipo: 'normal' }
    ]
  },
  'velazquez': {
    ciudad: 'madrid',
    nombre: 'Velázquez',
    lineas: ['4'],
    adyacentes: [
      { slug: 'goya', tiempo: 2, linea: '4', tipo: 'normal' },
      { slug: 'serrano', tiempo: 2, linea: '4', tipo: 'normal' }
    ]
  },
  'cuatro-caminos': {
    ciudad: 'madrid',
    nombre: 'Cuatro Caminos',
    lineas: ['1', '2', '6'],
    adyacentes: [
      { slug: 'bilbao', tiempo: 3, linea: '1', tipo: 'normal' },
      { slug: 'nuevos-ministerios', tiempo: 4, linea: '6', tipo: 'normal' }
    ]
  },
  'ciudad-universitaria': {
    ciudad: 'madrid',
    nombre: 'Ciudad Universitaria',
    lineas: ['6'],
    adyacentes: [
      { slug: 'cuatro-caminos', tiempo: 6, linea: '6', tipo: 'normal' },
      { slug: 'lago', tiempo: 4, linea: '10', tipo: 'transbordo' }
    ]
  },
  'lago': {
    ciudad: 'madrid',
    nombre: 'Lago',
    lineas: ['10'],
    adyacentes: [
      { slug: 'ciudad-universitaria', tiempo: 4, linea: '10', tipo: 'normal' },
      { slug: 'estadio-metropolitano', tiempo: 15, linea: '7', tipo: 'transbordo' }
    ]
  },
  'estadio-metropolitano': {
    ciudad: 'madrid',
    nombre: 'Estadio Metropolitano',
    lineas: ['7'],
    adyacentes: [
      { slug: 'lago', tiempo: 15, linea: '7', tipo: 'normal' },
      { slug: 'bernabeu', tiempo: 12, linea: '10', tipo: 'transbordo' }
    ]
  },
  'bernabeu': {
    ciudad: 'madrid',
    nombre: 'Santiago Bernabéu',
    lineas: ['10'],
    adyacentes: [
      { slug: 'nuevos-ministerios', tiempo: 3, linea: '10', tipo: 'normal' },
      { slug: 'estadio-metropolitano', tiempo: 12, linea: '7', tipo: 'transbordo' }
    ]
  },
  'callao': {
    ciudad: 'madrid',
    nombre: 'Callao',
    lineas: ['3', '5'],
    adyacentes: [
      { slug: 'sol', tiempo: 2, linea: '3', tipo: 'normal' },
      { slug: 'gran-via', tiempo: 2, linea: '5', tipo: 'normal' },
      { slug: 'plaza-de-espana', tiempo: 2, linea: '3', tipo: 'normal' }
    ]
  },
  'serrano': {
    ciudad: 'madrid',
    nombre: 'Serrano',
    lineas: ['4'],
    adyacentes: [
      { slug: 'colon', tiempo: 2, linea: '4', tipo: 'normal' },
      { slug: 'velazquez', tiempo: 2, linea: '4', tipo: 'normal' }
    ]
  }
};
