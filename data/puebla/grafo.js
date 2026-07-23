export const grafoPuebla = {
  'capu': {
    ciudad: 'puebla',
    nombre: 'CAPU',
    lineas: ['1'],
    adyacentes: [
      { slug: '20-de-noviembre', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  '20-de-noviembre': {
    ciudad: 'puebla',
    nombre: '20 de Noviembre',
    lineas: ['1'],
    adyacentes: [
      { slug: 'capu', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'zocalo-centro', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'zocalo-centro': {
    ciudad: 'puebla',
    nombre: 'Zócalo/Centro',
    lineas: ['1'],
    adyacentes: [
      { slug: '20-de-noviembre', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'barrio-artista', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'barrio-artista': {
    ciudad: 'puebla',
    nombre: 'Barrio Artista (Xanenetla)',
    lineas: ['1'],
    adyacentes: [
      { slug: 'zocalo-centro', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'analco', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'analco': {
    ciudad: 'puebla',
    nombre: 'Analco',
    lineas: ['1'],
    adyacentes: [
      { slug: 'barrio-artista', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'cholula', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'cholula': {
    ciudad: 'puebla',
    nombre: 'Cholula',
    lineas: ['1'],
    adyacentes: [
      { slug: 'analco', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'lomas-angelopolis', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'udla': {
    ciudad: 'puebla',
    nombre: 'UDLA',
    lineas: ['2'],
    adyacentes: [
      { slug: 'hospital-general', tiempo: 3, linea: '2', tipo: 'linea' }
    ],
  },
  'hospital-general': {
    ciudad: 'puebla',
    nombre: 'Hospital General',
    lineas: ['2'],
    adyacentes: [
      { slug: 'udla', tiempo: 3, linea: '2', tipo: 'linea' },
      { slug: 'san-manuel', tiempo: 3, linea: '2', tipo: 'linea' }
    ],
  },
  'san-manuel': {
    ciudad: 'puebla',
    nombre: 'San Manuel',
    lineas: ['2'],
    adyacentes: [
      { slug: 'hospital-general', tiempo: 3, linea: '2', tipo: 'linea' },
      { slug: 'la-paz', tiempo: 3, linea: '2', tipo: 'linea' }
    ],
  },
  'la-paz': {
    ciudad: 'puebla',
    nombre: 'La Paz',
    lineas: ['2'],
    adyacentes: [
      { slug: 'san-manuel', tiempo: 3, linea: '2', tipo: 'linea' },
      { slug: 'buap', tiempo: 3, linea: '2', tipo: 'linea' }
    ],
  },
  'buap': {
    ciudad: 'puebla',
    nombre: 'BUAP',
    lineas: ['2'],
    adyacentes: [
      { slug: 'la-paz', tiempo: 3, linea: '2', tipo: 'linea' }
    ],
  },
  'valsequillo': {
    ciudad: 'puebla',
    nombre: 'Valsequillo',
    lineas: ['3'],
    adyacentes: [
      { slug: 'los-fuertes', tiempo: 3, linea: '3', tipo: 'linea' }
    ],
  },
  'los-fuertes': {
    ciudad: 'puebla',
    nombre: 'Los Fuertes',
    lineas: ['3'],
    adyacentes: [
      { slug: 'valsequillo', tiempo: 3, linea: '3', tipo: 'linea' },
      { slug: 'loreto', tiempo: 3, linea: '3', tipo: 'linea' }
    ],
  },
  'loreto': {
    ciudad: 'puebla',
    nombre: 'Loreto',
    lineas: ['3'],
    adyacentes: [
      { slug: 'los-fuertes', tiempo: 3, linea: '3', tipo: 'linea' },
      { slug: 'periferico-ecologico', tiempo: 3, linea: '3', tipo: 'linea' }
    ],
  },
  'periferico-ecologico': {
    ciudad: 'puebla',
    nombre: 'Periférico Ecológico',
    lineas: ['3'],
    adyacentes: [
      { slug: 'loreto', tiempo: 3, linea: '3', tipo: 'linea' }
    ],
  },
  'mercado-artesanias': {
    ciudad: 'puebla',
    nombre: 'Mercado de Artesanías',
    lineas: ['1'],
    adyacentes: [
      { slug: 'lomas-angelopolis', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'finsa-puebla': {
    ciudad: 'puebla',
    nombre: 'FINSA',
    lineas: ['4'],
    adyacentes: [
      { slug: 'periferico-norte-pue', tiempo: 3, linea: '4', tipo: 'linea' }
    ],
  },
  'periferico-norte-pue': {
    ciudad: 'puebla',
    nombre: 'Periférico Norte',
    lineas: ['4'],
    adyacentes: [
      { slug: 'finsa-puebla', tiempo: 3, linea: '4', tipo: 'linea' },
      { slug: 'san-jose-xilotzingo', tiempo: 3, linea: '4', tipo: 'linea' }
    ],
  },
  'san-jose-xilotzingo': {
    ciudad: 'puebla',
    nombre: 'San José Xilotzingo',
    lineas: ['4'],
    adyacentes: [
      { slug: 'periferico-norte-pue', tiempo: 3, linea: '4', tipo: 'linea' },
      { slug: 'bosques-puebla', tiempo: 3, linea: '4', tipo: 'linea' }
    ],
  },
  'bosques-puebla': {
    ciudad: 'puebla',
    nombre: 'Bosques de Santa Anita',
    lineas: ['4'],
    adyacentes: [
      { slug: 'san-jose-xilotzingo', tiempo: 3, linea: '4', tipo: 'linea' },
      { slug: 'plaza-crystal', tiempo: 3, linea: '4', tipo: 'linea' }
    ],
  },
  'plaza-crystal': {
    ciudad: 'puebla',
    nombre: 'Plaza Crystal',
    lineas: ['4'],
    adyacentes: [
      { slug: 'bosques-puebla', tiempo: 3, linea: '4', tipo: 'linea' },
      { slug: 'periferico-ecologico-line4', tiempo: 3, linea: '4', tipo: 'linea' }
    ],
  },
  'periferico-ecologico-line4': {
    ciudad: 'puebla',
    nombre: 'Periférico Ecológico',
    lineas: ['4'],
    adyacentes: [
      { slug: 'plaza-crystal', tiempo: 3, linea: '4', tipo: 'linea' },
      { slug: 'lomas-angelopolis', tiempo: 3, linea: '4', tipo: 'linea' }
    ],
  },
  'lomas-angelopolis': {
    ciudad: 'puebla',
    nombre: 'Lomas de Angelópolis',
    lineas: ['1', '4'],
    adyacentes: [
      { slug: 'cholula', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'mercado-artesanias', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'periferico-ecologico-line4', tiempo: 3, linea: '4', tipo: 'linea' },
      { slug: 'via-atlixcayotl', tiempo: 3, linea: '4', tipo: 'linea' }
    ],
  },
  'via-atlixcayotl': {
    ciudad: 'puebla',
    nombre: 'Vía Atlixcáyotl',
    lineas: ['4'],
    adyacentes: [
      { slug: 'lomas-angelopolis', tiempo: 3, linea: '4', tipo: 'linea' },
      { slug: 'via-atlixcayotl', tiempo: 3, linea: '4', tipo: 'linea' },
      { slug: 'valsequillo-pue', tiempo: 3, linea: '4', tipo: 'linea' }
    ],
  },
  'valsequillo-pue': {
    ciudad: 'puebla',
    nombre: 'Valsequillo',
    lineas: ['4'],
    adyacentes: [
      { slug: 'via-atlixcayotl', tiempo: 3, linea: '4', tipo: 'linea' }
    ],
  }
};
