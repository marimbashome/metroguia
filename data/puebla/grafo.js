export const grafoPuebla = {
  'capu': {
    ciudad: 'capu',
    nombre: 'CAPU',
    lineas: ['1'],
    adyacentes: [
      { slug: '20-de-noviembre', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  '20-de-noviembre': {
    ciudad: '20',
    nombre: '20 de Noviembre',
    lineas: ['1'],
    adyacentes: [
      { slug: 'capu', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'zocalo-centro', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'zocalo-centro': {
    ciudad: 'zocalo',
    nombre: 'Zócalo/Centro',
    lineas: ['1'],
    adyacentes: [
      { slug: '20-de-noviembre', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'barrio-artista', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'barrio-artista': {
    ciudad: 'barrio',
    nombre: 'Barrio Artista (Xanenetla)',
    lineas: ['1'],
    adyacentes: [
      { slug: 'zocalo-centro', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'analco', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'analco': {
    ciudad: 'analco',
    nombre: 'Analco',
    lineas: ['1'],
    adyacentes: [
      { slug: 'barrio-artista', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'cholula', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'cholula': {
    ciudad: 'cholula',
    nombre: 'Cholula',
    lineas: ['1'],
    adyacentes: [
      { slug: 'analco', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'lomas-angelopolis', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'udla': {
    ciudad: 'udla',
    nombre: 'UDLA',
    lineas: ['2'],
    adyacentes: [
      { slug: 'hospital-general', tiempo: 3, linea: '2', tipo: 'linea' }
    ],
  },
  'hospital-general': {
    ciudad: 'hospital',
    nombre: 'Hospital General',
    lineas: ['2'],
    adyacentes: [
      { slug: 'udla', tiempo: 3, linea: '2', tipo: 'linea' },
      { slug: 'san-manuel', tiempo: 3, linea: '2', tipo: 'linea' }
    ],
  },
  'san-manuel': {
    ciudad: 'san',
    nombre: 'San Manuel',
    lineas: ['2'],
    adyacentes: [
      { slug: 'hospital-general', tiempo: 3, linea: '2', tipo: 'linea' },
      { slug: 'la-paz', tiempo: 3, linea: '2', tipo: 'linea' }
    ],
  },
  'la-paz': {
    ciudad: 'la',
    nombre: 'La Paz',
    lineas: ['2'],
    adyacentes: [
      { slug: 'san-manuel', tiempo: 3, linea: '2', tipo: 'linea' },
      { slug: 'buap', tiempo: 3, linea: '2', tipo: 'linea' }
    ],
  },
  'buap': {
    ciudad: 'buap',
    nombre: 'BUAP',
    lineas: ['2'],
    adyacentes: [
      { slug: 'la-paz', tiempo: 3, linea: '2', tipo: 'linea' }
    ],
  },
  'valsequillo': {
    ciudad: 'valsequillo',
    nombre: 'Valsequillo',
    lineas: ['3'],
    adyacentes: [
      { slug: 'los-fuertes', tiempo: 3, linea: '3', tipo: 'linea' }
    ],
  },
  'los-fuertes': {
    ciudad: 'los',
    nombre: 'Los Fuertes',
    lineas: ['3'],
    adyacentes: [
      { slug: 'valsequillo', tiempo: 3, linea: '3', tipo: 'linea' },
      { slug: 'loreto', tiempo: 3, linea: '3', tipo: 'linea' }
    ],
  },
  'loreto': {
    ciudad: 'loreto',
    nombre: 'Loreto',
    lineas: ['3'],
    adyacentes: [
      { slug: 'los-fuertes', tiempo: 3, linea: '3', tipo: 'linea' },
      { slug: 'periferico-ecologico', tiempo: 3, linea: '3', tipo: 'linea' }
    ],
  },
  'periferico-ecologico': {
    ciudad: 'periferico',
    nombre: 'Periférico Ecológico',
    lineas: ['3'],
    adyacentes: [
      { slug: 'loreto', tiempo: 3, linea: '3', tipo: 'linea' }
    ],
  },
  'mercado-artesanias': {
    ciudad: 'mercado',
    nombre: 'Mercado de Artesanías',
    lineas: ['1'],
    adyacentes: [
      { slug: 'lomas-angelopolis', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'finsa-puebla': {
    ciudad: 'finsa',
    nombre: 'FINSA',
    lineas: ['4'],
    adyacentes: [
      { slug: 'periferico-norte-pue', tiempo: 3, linea: '4', tipo: 'linea' }
    ],
  },
  'periferico-norte-pue': {
    ciudad: 'periferico',
    nombre: 'Periférico Norte',
    lineas: ['4'],
    adyacentes: [
      { slug: 'finsa-puebla', tiempo: 3, linea: '4', tipo: 'linea' },
      { slug: 'san-jose-xilotzingo', tiempo: 3, linea: '4', tipo: 'linea' }
    ],
  },
  'san-jose-xilotzingo': {
    ciudad: 'san',
    nombre: 'San José Xilotzingo',
    lineas: ['4'],
    adyacentes: [
      { slug: 'periferico-norte-pue', tiempo: 3, linea: '4', tipo: 'linea' },
      { slug: 'bosques-puebla', tiempo: 3, linea: '4', tipo: 'linea' }
    ],
  },
  'bosques-puebla': {
    ciudad: 'bosques',
    nombre: 'Bosques de Santa Anita',
    lineas: ['4'],
    adyacentes: [
      { slug: 'san-jose-xilotzingo', tiempo: 3, linea: '4', tipo: 'linea' },
      { slug: 'plaza-crystal', tiempo: 3, linea: '4', tipo: 'linea' }
    ],
  },
  'plaza-crystal': {
    ciudad: 'plaza',
    nombre: 'Plaza Crystal',
    lineas: ['4'],
    adyacentes: [
      { slug: 'bosques-puebla', tiempo: 3, linea: '4', tipo: 'linea' },
      { slug: 'periferico-ecologico-line4', tiempo: 3, linea: '4', tipo: 'linea' }
    ],
  },
  'periferico-ecologico-line4': {
    ciudad: 'periferico',
    nombre: 'Periférico Ecológico',
    lineas: ['4'],
    adyacentes: [
      { slug: 'plaza-crystal', tiempo: 3, linea: '4', tipo: 'linea' },
      { slug: 'lomas-angelopolis', tiempo: 3, linea: '4', tipo: 'linea' }
    ],
  },
  'lomas-angelopolis': {
    ciudad: 'lomas',
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
    ciudad: 'via',
    nombre: 'Vía Atlixcáyotl',
    lineas: ['4'],
    adyacentes: [
      { slug: 'lomas-angelopolis', tiempo: 3, linea: '4', tipo: 'linea' },
      { slug: 'via-atlixcayotl', tiempo: 3, linea: '4', tipo: 'linea' },
      { slug: 'valsequillo-pue', tiempo: 3, linea: '4', tipo: 'linea' }
    ],
  },
  'valsequillo-pue': {
    ciudad: 'valsequillo',
    nombre: 'Valsequillo',
    lineas: ['4'],
    adyacentes: [
      { slug: 'via-atlixcayotl', tiempo: 3, linea: '4', tipo: 'linea' }
    ],
  }
};
