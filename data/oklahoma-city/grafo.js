export const grafoOklahomaCity = {
  'oklahoma-city-convention-center': {
    ciudad: 'oklahoma-city',
    nombre: 'Convention Center',
    lineas: ['okc-streetcar-blue'],
    adyacentes: [
      { slug: 'oklahoma-city-sheridan-walker', tiempo: 2, linea: 'okc-streetcar-blue', tipo: 'streetcar' },
    ],
  },
  'oklahoma-city-sheridan-walker': {
    ciudad: 'oklahoma-city',
    nombre: 'Sheridan/Walker',
    lineas: ['okc-streetcar-blue'],
    adyacentes: [
      { slug: 'oklahoma-city-convention-center', tiempo: 2, linea: 'okc-streetcar-blue', tipo: 'streetcar' },
      { slug: 'oklahoma-city-bricktown-east', tiempo: 2, linea: 'okc-streetcar-blue', tipo: 'streetcar' },
    ],
  },
  'oklahoma-city-bricktown-east': {
    ciudad: 'oklahoma-city',
    nombre: 'Bricktown East',
    lineas: ['okc-streetcar-blue'],
    adyacentes: [
      { slug: 'oklahoma-city-sheridan-walker', tiempo: 2, linea: 'okc-streetcar-blue', tipo: 'streetcar' },
      { slug: 'oklahoma-city-bricktown-west', tiempo: 2, linea: 'okc-streetcar-blue', tipo: 'streetcar' },
    ],
  },
  'oklahoma-city-bricktown-west': {
    ciudad: 'oklahoma-city',
    nombre: 'Bricktown West',
    lineas: ['okc-streetcar-blue'],
    adyacentes: [
      { slug: 'oklahoma-city-bricktown-east', tiempo: 2, linea: 'okc-streetcar-blue', tipo: 'streetcar' },
      { slug: 'oklahoma-city-automobile-alley', tiempo: 2, linea: 'okc-streetcar-blue', tipo: 'streetcar' },
    ],
  },
  'oklahoma-city-automobile-alley': {
    ciudad: 'oklahoma-city',
    nombre: 'Automobile Alley',
    lineas: ['okc-streetcar-blue'],
    adyacentes: [
      { slug: 'oklahoma-city-bricktown-west', tiempo: 2, linea: 'okc-streetcar-blue', tipo: 'streetcar' },
      { slug: 'oklahoma-city-midtown', tiempo: 2, linea: 'okc-streetcar-blue', tipo: 'streetcar' },
    ],
  },
  'oklahoma-city-midtown': {
    ciudad: 'oklahoma-city',
    nombre: 'Midtown',
    lineas: ['okc-streetcar-blue'],
    adyacentes: [
      { slug: 'oklahoma-city-automobile-alley', tiempo: 2, linea: 'okc-streetcar-blue', tipo: 'streetcar' },
      { slug: 'oklahoma-city-st-anthony', tiempo: 2, linea: 'okc-streetcar-blue', tipo: 'streetcar' },
    ],
  },
  'oklahoma-city-st-anthony': {
    ciudad: 'oklahoma-city',
    nombre: 'St. Anthony',
    lineas: ['okc-streetcar-blue'],
    adyacentes: [
      { slug: 'oklahoma-city-midtown', tiempo: 2, linea: 'okc-streetcar-blue', tipo: 'streetcar' },
      { slug: 'oklahoma-city-santa-fe-station', tiempo: 2, linea: 'okc-streetcar-blue', tipo: 'streetcar' },
    ],
  },
  'oklahoma-city-santa-fe-station': {
    ciudad: 'oklahoma-city',
    nombre: 'Santa Fe Station',
    lineas: ['okc-streetcar-blue'],
    adyacentes: [
      { slug: 'oklahoma-city-st-anthony', tiempo: 2, linea: 'okc-streetcar-blue', tipo: 'streetcar' },
    ],
  },
};
