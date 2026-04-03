export const grafoChicago = {
  // RED LINE
  'chicago-howard': {
    ciudad: 'chicago',
    nombre: 'Howard',
    lineas: ['red', 'yellow'],
    adyacentes: [
      { slug: 'chicago-jarvis', tiempo: 2, linea: 'red', tipo: 'cta-l' },
      { slug: 'chicago-howard-yellow', tiempo: 3, linea: 'yellow', tipo: 'transfer' },
    ],
  },
  'chicago-jarvis': {
    ciudad: 'chicago',
    nombre: 'Jarvis',
    lineas: ['red'],
    adyacentes: [
      { slug: 'chicago-howard', tiempo: 2, linea: 'red', tipo: 'cta-l' },
      { slug: 'chicago-morse', tiempo: 2, linea: 'red', tipo: 'cta-l' },
    ],
  },
  'chicago-morse': {
    ciudad: 'chicago',
    nombre: 'Morse',
    lineas: ['red'],
    adyacentes: [
      { slug: 'chicago-jarvis', tiempo: 2, linea: 'red', tipo: 'cta-l' },
      { slug: 'chicago-loyola', tiempo: 2, linea: 'red', tipo: 'cta-l' },
    ],
  },
  'chicago-loyola': {
    ciudad: 'chicago',
    nombre: 'Loyola',
    lineas: ['red'],
    adyacentes: [
      { slug: 'chicago-morse', tiempo: 2, linea: 'red', tipo: 'cta-l' },
      { slug: 'chicago-argyle', tiempo: 2, linea: 'red', tipo: 'cta-l' },
    ],
  },
  'chicago-argyle': {
    ciudad: 'chicago',
    nombre: 'Argyle',
    lineas: ['red'],
    adyacentes: [
      { slug: 'chicago-loyola', tiempo: 2, linea: 'red', tipo: 'cta-l' },
      { slug: 'chicago-lawrence', tiempo: 2, linea: 'red', tipo: 'cta-l' },
    ],
  },
  'chicago-lawrence': {
    ciudad: 'chicago',
    nombre: 'Lawrence',
    lineas: ['red'],
    adyacentes: [
      { slug: 'chicago-argyle', tiempo: 2, linea: 'red', tipo: 'cta-l' },
      { slug: 'chicago-fullerton', tiempo: 3, linea: 'red', tipo: 'cta-l' },
    ],
  },
  'chicago-fullerton': {
    ciudad: 'chicago',
    nombre: 'Fullerton',
    lineas: ['red', 'brown', 'purple'],
    adyacentes: [
      { slug: 'chicago-lawrence', tiempo: 3, linea: 'red', tipo: 'cta-l' },
      { slug: 'chicago-clark-division', tiempo: 2, linea: 'red', tipo: 'cta-l' },
      { slug: 'chicago-fullerton-brown', tiempo: 3, linea: 'brown', tipo: 'transfer' },
      { slug: 'chicago-fullerton-purple', tiempo: 3, linea: 'purple', tipo: 'transfer' },
    ],
  },
  'chicago-clark-division': {
    ciudad: 'chicago',
    nombre: 'Clark/Division',
    lineas: ['red'],
    adyacentes: [
      { slug: 'chicago-fullerton', tiempo: 2, linea: 'red', tipo: 'cta-l' },
      { slug: 'chicago-grand', tiempo: 2, linea: 'red', tipo: 'cta-l' },
    ],
  },
  'chicago-grand': {
    ciudad: 'chicago',
    nombre: 'Grand',
    lineas: ['red'],
    adyacentes: [
      { slug: 'chicago-clark-division', tiempo: 2, linea: 'red', tipo: 'cta-l' },
      { slug: 'chicago-lake', tiempo: 2, linea: 'red', tipo: 'cta-l' },
    ],
  },
  'chicago-lake': {
    ciudad: 'chicago',
    nombre: 'Lake',
    lineas: ['red'],
    adyacentes: [
      { slug: 'chicago-grand', tiempo: 2, linea: 'red', tipo: 'cta-l' },
      { slug: 'chicago-monroe', tiempo: 2, linea: 'red', tipo: 'cta-l' },
    ],
  },
  'chicago-monroe': {
    ciudad: 'chicago',
    nombre: 'Monroe',
    lineas: ['red'],
    adyacentes: [
      { slug: 'chicago-lake', tiempo: 2, linea: 'red', tipo: 'cta-l' },
      { slug: 'chicago-jackson', tiempo: 2, linea: 'red', tipo: 'cta-l' },
    ],
  },
  'chicago-jackson': {
    ciudad: 'chicago',
    nombre: 'Jackson',
    lineas: ['red'],
    adyacentes: [
      { slug: 'chicago-monroe', tiempo: 2, linea: 'red', tipo: 'cta-l' },
      { slug: 'chicago-harrison', tiempo: 2, linea: 'red', tipo: 'cta-l' },
    ],
  },
  'chicago-harrison': {
    ciudad: 'chicago',
    nombre: 'Harrison',
    lineas: ['red'],
    adyacentes: [
      { slug: 'chicago-jackson', tiempo: 2, linea: 'red', tipo: 'cta-l' },
      { slug: 'chicago-roosevelt', tiempo: 2, linea: 'red', tipo: 'cta-l' },
    ],
  },
  'chicago-roosevelt': {
    ciudad: 'chicago',
    nombre: 'Roosevelt',
    lineas: ['red'],
    adyacentes: [
      { slug: 'chicago-harrison', tiempo: 2, linea: 'red', tipo: 'cta-l' },
      { slug: 'chicago-cermak', tiempo: 3, linea: 'red', tipo: 'cta-l' },
    ],
  },
  'chicago-cermak': {
    ciudad: 'chicago',
    nombre: 'Cermak',
    lineas: ['red'],
    adyacentes: [
      { slug: 'chicago-roosevelt', tiempo: 3, linea: 'red', tipo: 'cta-l' },
      { slug: 'chicago-35th-bronzeville', tiempo: 3, linea: 'red', tipo: 'cta-l' },
    ],
  },
  'chicago-35th-bronzeville': {
    ciudad: 'chicago',
    nombre: '35th/Bronzeville-IIT',
    lineas: ['red'],
    adyacentes: [
      { slug: 'chicago-cermak', tiempo: 3, linea: 'red', tipo: 'cta-l' },
      { slug: 'chicago-47th', tiempo: 2, linea: 'red', tipo: 'cta-l' },
    ],
  },
  'chicago-47th': {
    ciudad: 'chicago',
    nombre: '47th',
    lineas: ['red'],
    adyacentes: [
      { slug: 'chicago-35th-bronzeville', tiempo: 2, linea: 'red', tipo: 'cta-l' },
      { slug: 'chicago-51st', tiempo: 2, linea: 'red', tipo: 'cta-l' },
    ],
  },
  'chicago-51st': {
    ciudad: 'chicago',
    nombre: '51st',
    lineas: ['red'],
    adyacentes: [
      { slug: 'chicago-47th', tiempo: 2, linea: 'red', tipo: 'cta-l' },
      { slug: 'chicago-garfield', tiempo: 2, linea: 'red', tipo: 'cta-l' },
    ],
  },
  'chicago-garfield': {
    ciudad: 'chicago',
    nombre: 'Garfield',
    lineas: ['red'],
    adyacentes: [
      { slug: 'chicago-51st', tiempo: 2, linea: 'red', tipo: 'cta-l' },
      { slug: 'chicago-63rd', tiempo: 2, linea: 'red', tipo: 'cta-l' },
    ],
  },
  'chicago-63rd': {
    ciudad: 'chicago',
    nombre: '63rd',
    lineas: ['red'],
    adyacentes: [
      { slug: 'chicago-garfield', tiempo: 2, linea: 'red', tipo: 'cta-l' },
      { slug: 'chicago-69th', tiempo: 2, linea: 'red', tipo: 'cta-l' },
    ],
  },
  'chicago-69th': {
    ciudad: 'chicago',
    nombre: '69th',
    lineas: ['red'],
    adyacentes: [
      { slug: 'chicago-63rd', tiempo: 2, linea: 'red', tipo: 'cta-l' },
      { slug: 'chicago-79th', tiempo: 2, linea: 'red', tipo: 'cta-l' },
    ],
  },
  'chicago-79th': {
    ciudad: 'chicago',
    nombre: '79th',
    lineas: ['red'],
    adyacentes: [
      { slug: 'chicago-69th', tiempo: 2, linea: 'red', tipo: 'cta-l' },
      { slug: 'chicago-87th', tiempo: 2, linea: 'red', tipo: 'cta-l' },
    ],
  },
  'chicago-87th': {
    ciudad: 'chicago',
    nombre: '87th',
    lineas: ['red', 'green'],
    adyacentes: [
      { slug: 'chicago-79th', tiempo: 2, linea: 'red', tipo: 'cta-l' },
      { slug: 'chicago-95th-dan-ryan', tiempo: 2, linea: 'red', tipo: 'cta-l' },
      { slug: 'chicago-79th-green', tiempo: 2, linea: 'green', tipo: 'cta-l' },
    ],
  },
  'chicago-95th-dan-ryan': {
    ciudad: 'chicago',
    nombre: '95th/Dan Ryan',
    lineas: ['red'],
    adyacentes: [
      { slug: 'chicago-87th', tiempo: 2, linea: 'red', tipo: 'cta-l' },
    ],
  },

  // BLUE LINE
  'chicago-ohare': {
    ciudad: 'chicago',
    nombre: "O'Hare",
    lineas: ['blue'],
    adyacentes: [
      { slug: 'chicago-rosemont', tiempo: 3, linea: 'blue', tipo: 'cta-l' },
    ],
  },
  'chicago-rosemont': {
    ciudad: 'chicago',
    nombre: 'Rosemont',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'chicago-ohare', tiempo: 3, linea: 'blue', tipo: 'cta-l' },
      { slug: 'chicago-park-place', tiempo: 3, linea: 'blue', tipo: 'cta-l' },
    ],
  },
  'chicago-park-place': {
    ciudad: 'chicago',
    nombre: 'Park Place',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'chicago-rosemont', tiempo: 3, linea: 'blue', tipo: 'cta-l' },
      { slug: 'chicago-river-oaks', tiempo: 3, linea: 'blue', tipo: 'cta-l' },
    ],
  },
  'chicago-river-oaks': {
    ciudad: 'chicago',
    nombre: 'River Oaks',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'chicago-park-place', tiempo: 3, linea: 'blue', tipo: 'cta-l' },
      { slug: 'chicago-clark-lake', tiempo: 5, linea: 'blue', tipo: 'cta-l' },
    ],
  },
  'chicago-clark-lake': {
    ciudad: 'chicago',
    nombre: 'Clark/Lake',
    lineas: ['blue', 'orange', 'pink'],
    adyacentes: [
      { slug: 'chicago-river-oaks', tiempo: 5, linea: 'blue', tipo: 'cta-l' },
      { slug: 'chicago-clark-division-blue', tiempo: 2, linea: 'blue', tipo: 'cta-l' },
      { slug: 'chicago-clark-lake-orange', tiempo: 3, linea: 'orange', tipo: 'transfer' },
      { slug: 'chicago-clark-lake-pink', tiempo: 3, linea: 'pink', tipo: 'transfer' },
    ],
  },
  'chicago-clark-division-blue': {
    ciudad: 'chicago',
    nombre: 'Clark/Division',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'chicago-clark-lake', tiempo: 2, linea: 'blue', tipo: 'cta-l' },
      { slug: 'chicago-sedgwick', tiempo: 2, linea: 'blue', tipo: 'cta-l' },
    ],
  },
  'chicago-sedgwick': {
    ciudad: 'chicago',
    nombre: 'Sedgwick',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'chicago-clark-division-blue', tiempo: 2, linea: 'blue', tipo: 'cta-l' },
      { slug: 'chicago-chicago', tiempo: 2, linea: 'blue', tipo: 'cta-l' },
    ],
  },
  'chicago-chicago': {
    ciudad: 'chicago',
    nombre: 'Chicago',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'chicago-sedgwick', tiempo: 2, linea: 'blue', tipo: 'cta-l' },
      { slug: 'chicago-grand-blue', tiempo: 2, linea: 'blue', tipo: 'cta-l' },
    ],
  },
  'chicago-grand-blue': {
    ciudad: 'chicago',
    nombre: 'Grand',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'chicago-chicago', tiempo: 2, linea: 'blue', tipo: 'cta-l' },
      { slug: 'chicago-monroe-blue', tiempo: 2, linea: 'blue', tipo: 'cta-l' },
    ],
  },
  'chicago-monroe-blue': {
    ciudad: 'chicago',
    nombre: 'Monroe',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'chicago-grand-blue', tiempo: 2, linea: 'blue', tipo: 'cta-l' },
      { slug: 'chicago-jackson-blue', tiempo: 2, linea: 'blue', tipo: 'cta-l' },
    ],
  },
  'chicago-jackson-blue': {
    ciudad: 'chicago',
    nombre: 'Jackson',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'chicago-monroe-blue', tiempo: 2, linea: 'blue', tipo: 'cta-l' },
      { slug: 'chicago-harrison-blue', tiempo: 2, linea: 'blue', tipo: 'cta-l' },
    ],
  },
  'chicago-harrison-blue': {
    ciudad: 'chicago',
    nombre: 'Harrison',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'chicago-jackson-blue', tiempo: 2, linea: 'blue', tipo: 'cta-l' },
      { slug: 'chicago-roosevelt-blue', tiempo: 2, linea: 'blue', tipo: 'cta-l' },
    ],
  },
  'chicago-roosevelt-blue': {
    ciudad: 'chicago',
    nombre: 'Roosevelt',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'chicago-harrison-blue', tiempo: 2, linea: 'blue', tipo: 'cta-l' },
      { slug: 'chicago-library', tiempo: 2, linea: 'blue', tipo: 'cta-l' },
    ],
  },
  'chicago-library': {
    ciudad: 'chicago',
    nombre: 'Library',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'chicago-roosevelt-blue', tiempo: 2, linea: 'blue', tipo: 'cta-l' },
      { slug: 'chicago-quincy', tiempo: 2, linea: 'blue', tipo: 'cta-l' },
    ],
  },
  'chicago-quincy': {
    ciudad: 'chicago',
    nombre: 'Quincy',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'chicago-library', tiempo: 2, linea: 'blue', tipo: 'cta-l' },
      { slug: 'chicago-wells', tiempo: 2, linea: 'blue', tipo: 'cta-l' },
    ],
  },
  'chicago-wells': {
    ciudad: 'chicago',
    nombre: 'Wells',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'chicago-quincy', tiempo: 2, linea: 'blue', tipo: 'cta-l' },
      { slug: 'chicago-loop-blue', tiempo: 2, linea: 'blue', tipo: 'cta-l' },
    ],
  },
  'chicago-loop-blue': {
    ciudad: 'chicago',
    nombre: 'Loop',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'chicago-wells', tiempo: 2, linea: 'blue', tipo: 'cta-l' },
      { slug: 'chicago-washington', tiempo: 2, linea: 'blue', tipo: 'cta-l' },
    ],
  },
  'chicago-washington': {
    ciudad: 'chicago',
    nombre: 'Washington',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'chicago-loop-blue', tiempo: 2, linea: 'blue', tipo: 'cta-l' },
      { slug: 'chicago-state-lake', tiempo: 2, linea: 'blue', tipo: 'cta-l' },
    ],
  },
  'chicago-state-lake': {
    ciudad: 'chicago',
    nombre: 'State/Lake',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'chicago-washington', tiempo: 2, linea: 'blue', tipo: 'cta-l' },
      { slug: 'chicago-54th-cermak', tiempo: 4, linea: 'blue', tipo: 'cta-l' },
    ],
  },
  'chicago-54th-cermak': {
    ciudad: 'chicago',
    nombre: '54th/Cermak',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'chicago-state-lake', tiempo: 4, linea: 'blue', tipo: 'cta-l' },
      { slug: 'chicago-midway', tiempo: 3, linea: 'blue', tipo: 'cta-l' },
    ],
  },
  'chicago-midway': {
    ciudad: 'chicago',
    nombre: 'Midway',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'chicago-54th-cermak', tiempo: 3, linea: 'blue', tipo: 'cta-l' },
      { slug: 'chicago-forest-park', tiempo: 5, linea: 'blue', tipo: 'cta-l' },
    ],
  },
  'chicago-forest-park': {
    ciudad: 'chicago',
    nombre: 'Forest Park',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'chicago-midway', tiempo: 5, linea: 'blue', tipo: 'cta-l' },
    ],
  },

  // BROWN LINE
  'chicago-kimball': {
    ciudad: 'chicago',
    nombre: 'Kimball',
    lineas: ['brown'],
    adyacentes: [
      { slug: 'chicago-kedzie-lawrence', tiempo: 3, linea: 'brown', tipo: 'cta-l' },
    ],
  },
  'chicago-kedzie-lawrence': {
    ciudad: 'chicago',
    nombre: 'Kedzie/Lawrence',
    lineas: ['brown'],
    adyacentes: [
      { slug: 'chicago-kimball', tiempo: 3, linea: 'brown', tipo: 'cta-l' },
      { slug: 'chicago-francisco', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
    ],
  },
  'chicago-francisco': {
    ciudad: 'chicago',
    nombre: 'Francisco',
    lineas: ['brown'],
    adyacentes: [
      { slug: 'chicago-kedzie-lawrence', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
      { slug: 'chicago-rockwell', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
    ],
  },
  'chicago-rockwell': {
    ciudad: 'chicago',
    nombre: 'Rockwell',
    lineas: ['brown'],
    adyacentes: [
      { slug: 'chicago-francisco', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
      { slug: 'chicago-western-brown-north', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
    ],
  },
  'chicago-western-brown-north': {
    ciudad: 'chicago',
    nombre: 'Western (Brown)',
    lineas: ['brown'],
    adyacentes: [
      { slug: 'chicago-rockwell', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
      { slug: 'chicago-fullerton-brown', tiempo: 3, linea: 'brown', tipo: 'cta-l' },
    ],
  },
  'chicago-fullerton-brown': {
    ciudad: 'chicago',
    nombre: 'Fullerton',
    lineas: ['brown', 'red', 'purple'],
    adyacentes: [
      { slug: 'chicago-western-brown-north', tiempo: 3, linea: 'brown', tipo: 'cta-l' },
      { slug: 'chicago-armitage', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
      { slug: 'chicago-fullerton', tiempo: 3, linea: 'red', tipo: 'transfer' },
      { slug: 'chicago-fullerton-purple', tiempo: 3, linea: 'purple', tipo: 'transfer' },
    ],
  },
  'chicago-armitage': {
    ciudad: 'chicago',
    nombre: 'Armitage',
    lineas: ['brown'],
    adyacentes: [
      { slug: 'chicago-fullerton-brown', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
      { slug: 'chicago-sedgwick-brown', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
    ],
  },
  'chicago-sedgwick-brown': {
    ciudad: 'chicago',
    nombre: 'Sedgwick',
    lineas: ['brown'],
    adyacentes: [
      { slug: 'chicago-armitage', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
      { slug: 'chicago-chicago-brown', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
    ],
  },
  'chicago-chicago-brown': {
    ciudad: 'chicago',
    nombre: 'Chicago',
    lineas: ['brown'],
    adyacentes: [
      { slug: 'chicago-sedgwick-brown', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
      { slug: 'chicago-grand-brown', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
    ],
  },
  'chicago-grand-brown': {
    ciudad: 'chicago',
    nombre: 'Grand',
    lineas: ['brown'],
    adyacentes: [
      { slug: 'chicago-chicago-brown', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
      { slug: 'chicago-clark-clark-brown', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
    ],
  },
  'chicago-clark-clark-brown': {
    ciudad: 'chicago',
    nombre: 'Clark',
    lineas: ['brown'],
    adyacentes: [
      { slug: 'chicago-grand-brown', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
      { slug: 'chicago-lake-brown', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
    ],
  },
  'chicago-lake-brown': {
    ciudad: 'chicago',
    nombre: 'Lake',
    lineas: ['brown'],
    adyacentes: [
      { slug: 'chicago-clark-clark-brown', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
      { slug: 'chicago-monroe-brown', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
    ],
  },
  'chicago-monroe-brown': {
    ciudad: 'chicago',
    nombre: 'Monroe',
    lineas: ['brown'],
    adyacentes: [
      { slug: 'chicago-lake-brown', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
      { slug: 'chicago-jackson-brown', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
    ],
  },
  'chicago-jackson-brown': {
    ciudad: 'chicago',
    nombre: 'Jackson',
    lineas: ['brown'],
    adyacentes: [
      { slug: 'chicago-monroe-brown', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
      { slug: 'chicago-harrison-brown', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
    ],
  },
  'chicago-harrison-brown': {
    ciudad: 'chicago',
    nombre: 'Harrison',
    lineas: ['brown'],
    adyacentes: [
      { slug: 'chicago-jackson-brown', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
      { slug: 'chicago-roosevelt-brown', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
    ],
  },
  'chicago-roosevelt-brown': {
    ciudad: 'chicago',
    nombre: 'Roosevelt',
    lineas: ['brown'],
    adyacentes: [
      { slug: 'chicago-harrison-brown', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
      { slug: 'chicago-cermak-brown', tiempo: 3, linea: 'brown', tipo: 'cta-l' },
    ],
  },
  'chicago-cermak-brown': {
    ciudad: 'chicago',
    nombre: 'Cermak',
    lineas: ['brown'],
    adyacentes: [
      { slug: 'chicago-roosevelt-brown', tiempo: 3, linea: 'brown', tipo: 'cta-l' },
      { slug: 'chicago-35th-brown', tiempo: 3, linea: 'brown', tipo: 'cta-l' },
    ],
  },
  'chicago-35th-brown': {
    ciudad: 'chicago',
    nombre: '35th/Bronzeville-IIT',
    lineas: ['brown'],
    adyacentes: [
      { slug: 'chicago-cermak-brown', tiempo: 3, linea: 'brown', tipo: 'cta-l' },
      { slug: 'chicago-47th-brown', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
    ],
  },
  'chicago-47th-brown': {
    ciudad: 'chicago',
    nombre: '47th',
    lineas: ['brown'],
    adyacentes: [
      { slug: 'chicago-35th-brown', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
      { slug: 'chicago-51st-brown', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
    ],
  },
  'chicago-51st-brown': {
    ciudad: 'chicago',
    nombre: '51st',
    lineas: ['brown'],
    adyacentes: [
      { slug: 'chicago-47th-brown', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
      { slug: 'chicago-garfield-brown', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
    ],
  },
  'chicago-garfield-brown': {
    ciudad: 'chicago',
    nombre: 'Garfield',
    lineas: ['brown'],
    adyacentes: [
      { slug: 'chicago-51st-brown', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
      { slug: 'chicago-63rd-brown', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
    ],
  },
  'chicago-63rd-brown': {
    ciudad: 'chicago',
    nombre: '63rd',
    lineas: ['brown'],
    adyacentes: [
      { slug: 'chicago-garfield-brown', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
      { slug: 'chicago-69th-brown', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
    ],
  },
  'chicago-69th-brown': {
    ciudad: 'chicago',
    nombre: '69th',
    lineas: ['brown'],
    adyacentes: [
      { slug: 'chicago-63rd-brown', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
      { slug: 'chicago-79th-brown', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
    ],
  },
  'chicago-79th-brown': {
    ciudad: 'chicago',
    nombre: '79th',
    lineas: ['brown'],
    adyacentes: [
      { slug: 'chicago-69th-brown', tiempo: 2, linea: 'brown', tipo: 'cta-l' },
    ],
  },

  // GREEN LINE
  'chicago-harlem': {
    ciudad: 'chicago',
    nombre: 'Harlem',
    lineas: ['green'],
    adyacentes: [
      { slug: 'chicago-lake-green-west', tiempo: 3, linea: 'green', tipo: 'cta-l' },
    ],
  },
  'chicago-lake-green-west': {
    ciudad: 'chicago',
    nombre: 'Lake',
    lineas: ['green'],
    adyacentes: [
      { slug: 'chicago-harlem', tiempo: 3, linea: 'green', tipo: 'cta-l' },
      { slug: 'chicago-oak-park', tiempo: 3, linea: 'green', tipo: 'cta-l' },
    ],
  },
  'chicago-oak-park': {
    ciudad: 'chicago',
    nombre: 'Oak Park',
    lineas: ['green'],
    adyacentes: [
      { slug: 'chicago-lake-green-west', tiempo: 3, linea: 'green', tipo: 'cta-l' },
      { slug: 'chicago-midway-green', tiempo: 4, linea: 'green', tipo: 'cta-l' },
    ],
  },
  'chicago-midway-green': {
    ciudad: 'chicago',
    nombre: 'Midway',
    lineas: ['green'],
    adyacentes: [
      { slug: 'chicago-oak-park', tiempo: 4, linea: 'green', tipo: 'cta-l' },
      { slug: 'chicago-pulaski-green-west', tiempo: 3, linea: 'green', tipo: 'cta-l' },
    ],
  },
  'chicago-pulaski-green-west': {
    ciudad: 'chicago',
    nombre: 'Pulaski',
    lineas: ['green'],
    adyacentes: [
      { slug: 'chicago-midway-green', tiempo: 3, linea: 'green', tipo: 'cta-l' },
      { slug: 'chicago-conservatory', tiempo: 3, linea: 'green', tipo: 'cta-l' },
    ],
  },
  'chicago-conservatory': {
    ciudad: 'chicago',
    nombre: 'Conservatory',
    lineas: ['green'],
    adyacentes: [
      { slug: 'chicago-pulaski-green-west', tiempo: 3, linea: 'green', tipo: 'cta-l' },
      { slug: 'chicago-ashland-green-south', tiempo: 3, linea: 'green', tipo: 'cta-l' },
    ],
  },
  'chicago-ashland-green-south': {
    ciudad: 'chicago',
    nombre: 'Ashland',
    lineas: ['green'],
    adyacentes: [
      { slug: 'chicago-conservatory', tiempo: 3, linea: 'green', tipo: 'cta-l' },
      { slug: 'chicago-state-green', tiempo: 3, linea: 'green', tipo: 'cta-l' },
    ],
  },
  'chicago-state-green': {
    ciudad: 'chicago',
    nombre: 'State',
    lineas: ['green'],
    adyacentes: [
      { slug: 'chicago-ashland-green-south', tiempo: 3, linea: 'green', tipo: 'cta-l' },
      { slug: 'chicago-harrison-green', tiempo: 2, linea: 'green', tipo: 'cta-l' },
    ],
  },
  'chicago-harrison-green': {
    ciudad: 'chicago',
    nombre: 'Harrison',
    lineas: ['green'],
    adyacentes: [
      { slug: 'chicago-state-green', tiempo: 2, linea: 'green', tipo: 'cta-l' },
      { slug: 'chicago-roosevelt-green', tiempo: 2, linea: 'green', tipo: 'cta-l' },
    ],
  },
  'chicago-roosevelt-green': {
    ciudad: 'chicago',
    nombre: 'Roosevelt',
    lineas: ['green'],
    adyacentes: [
      { slug: 'chicago-harrison-green', tiempo: 2, linea: 'green', tipo: 'cta-l' },
      { slug: 'chicago-cermak-green', tiempo: 3, linea: 'green', tipo: 'cta-l' },
    ],
  },
  'chicago-cermak-green': {
    ciudad: 'chicago',
    nombre: 'Cermak',
    lineas: ['green'],
    adyacentes: [
      { slug: 'chicago-roosevelt-green', tiempo: 3, linea: 'green', tipo: 'cta-l' },
      { slug: 'chicago-35th-green', tiempo: 3, linea: 'green', tipo: 'cta-l' },
    ],
  },
  'chicago-35th-green': {
    ciudad: 'chicago',
    nombre: '35th/Bronzeville-IIT',
    lineas: ['green'],
    adyacentes: [
      { slug: 'chicago-cermak-green', tiempo: 3, linea: 'green', tipo: 'cta-l' },
      { slug: 'chicago-47th-green', tiempo: 2, linea: 'green', tipo: 'cta-l' },
    ],
  },
  'chicago-47th-green': {
    ciudad: 'chicago',
    nombre: '47th',
    lineas: ['green'],
    adyacentes: [
      { slug: 'chicago-35th-green', tiempo: 2, linea: 'green', tipo: 'cta-l' },
      { slug: 'chicago-51st-green', tiempo: 2, linea: 'green', tipo: 'cta-l' },
    ],
  },
  'chicago-51st-green': {
    ciudad: 'chicago',
    nombre: '51st',
    lineas: ['green'],
    adyacentes: [
      { slug: 'chicago-47th-green', tiempo: 2, linea: 'green', tipo: 'cta-l' },
      { slug: 'chicago-garfield-green', tiempo: 2, linea: 'green', tipo: 'cta-l' },
    ],
  },
  'chicago-garfield-green': {
    ciudad: 'chicago',
    nombre: 'Garfield',
    lineas: ['green'],
    adyacentes: [
      { slug: 'chicago-51st-green', tiempo: 2, linea: 'green', tipo: 'cta-l' },
      { slug: 'chicago-63rd-green', tiempo: 2, linea: 'green', tipo: 'cta-l' },
    ],
  },
  'chicago-63rd-green': {
    ciudad: 'chicago',
    nombre: '63rd',
    lineas: ['green'],
    adyacentes: [
      { slug: 'chicago-garfield-green', tiempo: 2, linea: 'green', tipo: 'cta-l' },
      { slug: 'chicago-69th-green', tiempo: 2, linea: 'green', tipo: 'cta-l' },
    ],
  },
  'chicago-69th-green': {
    ciudad: 'chicago',
    nombre: '69th',
    lineas: ['green'],
    adyacentes: [
      { slug: 'chicago-63rd-green', tiempo: 2, linea: 'green', tipo: 'cta-l' },
      { slug: 'chicago-79th-green', tiempo: 2, linea: 'green', tipo: 'cta-l' },
    ],
  },
  'chicago-79th-green': {
    ciudad: 'chicago',
    nombre: '79th',
    lineas: ['green'],
    adyacentes: [
      { slug: 'chicago-69th-green', tiempo: 2, linea: 'green', tipo: 'cta-l' },
      { slug: 'chicago-87th', tiempo: 2, linea: 'green', tipo: 'cta-l' },
    ],
  },
  'chicago-95th-ashland': {
    ciudad: 'chicago',
    nombre: '95th/Ashland',
    lineas: ['green'],
    adyacentes: [
      { slug: 'chicago-cottage-grove', tiempo: 2, linea: 'green', tipo: 'cta-l' },
    ],
  },
  'chicago-cottage-grove': {
    ciudad: 'chicago',
    nombre: 'Cottage Grove',
    lineas: ['green'],
    adyacentes: [
      { slug: 'chicago-95th-ashland', tiempo: 2, linea: 'green', tipo: 'cta-l' },
    ],
  },

  // ORANGE LINE
  'chicago-midway-orange': {
    ciudad: 'chicago',
    nombre: 'Midway',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'chicago-pulaski-orange', tiempo: 3, linea: 'orange', tipo: 'cta-l' },
    ],
  },
  'chicago-pulaski-orange': {
    ciudad: 'chicago',
    nombre: 'Pulaski',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'chicago-midway-orange', tiempo: 3, linea: 'orange', tipo: 'cta-l' },
      { slug: 'chicago-54th-orange', tiempo: 3, linea: 'orange', tipo: 'cta-l' },
    ],
  },
  'chicago-54th-orange': {
    ciudad: 'chicago',
    nombre: '54th/Cermak',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'chicago-pulaski-orange', tiempo: 3, linea: 'orange', tipo: 'cta-l' },
      { slug: 'chicago-35th-orange', tiempo: 3, linea: 'orange', tipo: 'cta-l' },
    ],
  },
  'chicago-35th-orange': {
    ciudad: 'chicago',
    nombre: '35th/Bronzeville-IIT',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'chicago-54th-orange', tiempo: 3, linea: 'orange', tipo: 'cta-l' },
      { slug: 'chicago-roosevelt-orange', tiempo: 3, linea: 'orange', tipo: 'cta-l' },
    ],
  },
  'chicago-roosevelt-orange': {
    ciudad: 'chicago',
    nombre: 'Roosevelt',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'chicago-35th-orange', tiempo: 3, linea: 'orange', tipo: 'cta-l' },
      { slug: 'chicago-library-orange', tiempo: 2, linea: 'orange', tipo: 'cta-l' },
    ],
  },
  'chicago-library-orange': {
    ciudad: 'chicago',
    nombre: 'Library',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'chicago-roosevelt-orange', tiempo: 2, linea: 'orange', tipo: 'cta-l' },
      { slug: 'chicago-quincy-orange', tiempo: 2, linea: 'orange', tipo: 'cta-l' },
    ],
  },
  'chicago-quincy-orange': {
    ciudad: 'chicago',
    nombre: 'Quincy',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'chicago-library-orange', tiempo: 2, linea: 'orange', tipo: 'cta-l' },
      { slug: 'chicago-wells-orange', tiempo: 2, linea: 'orange', tipo: 'cta-l' },
    ],
  },
  'chicago-wells-orange': {
    ciudad: 'chicago',
    nombre: 'Wells',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'chicago-quincy-orange', tiempo: 2, linea: 'orange', tipo: 'cta-l' },
      { slug: 'chicago-lake-orange', tiempo: 2, linea: 'orange', tipo: 'cta-l' },
    ],
  },
  'chicago-lake-orange': {
    ciudad: 'chicago',
    nombre: 'Lake',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'chicago-wells-orange', tiempo: 2, linea: 'orange', tipo: 'cta-l' },
      { slug: 'chicago-monroe-orange', tiempo: 2, linea: 'orange', tipo: 'cta-l' },
    ],
  },
  'chicago-monroe-orange': {
    ciudad: 'chicago',
    nombre: 'Monroe',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'chicago-lake-orange', tiempo: 2, linea: 'orange', tipo: 'cta-l' },
      { slug: 'chicago-clark-lake-orange', tiempo: 2, linea: 'orange', tipo: 'cta-l' },
    ],
  },
  'chicago-clark-lake-orange': {
    ciudad: 'chicago',
    nombre: 'Clark/Lake',
    lineas: ['orange', 'blue', 'pink'],
    adyacentes: [
      { slug: 'chicago-monroe-orange', tiempo: 2, linea: 'orange', tipo: 'cta-l' },
      { slug: 'chicago-clark-division-orange', tiempo: 2, linea: 'orange', tipo: 'cta-l' },
      { slug: 'chicago-clark-lake', tiempo: 3, linea: 'blue', tipo: 'transfer' },
      { slug: 'chicago-clark-lake-pink', tiempo: 3, linea: 'pink', tipo: 'transfer' },
    ],
  },
  'chicago-clark-division-orange': {
    ciudad: 'chicago',
    nombre: 'Clark/Division',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'chicago-clark-lake-orange', tiempo: 2, linea: 'orange', tipo: 'cta-l' },
      { slug: 'chicago-sedgwick-orange', tiempo: 2, linea: 'orange', tipo: 'cta-l' },
    ],
  },
  'chicago-sedgwick-orange': {
    ciudad: 'chicago',
    nombre: 'Sedgwick',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'chicago-clark-division-orange', tiempo: 2, linea: 'orange', tipo: 'cta-l' },
      { slug: 'chicago-chicago-orange', tiempo: 2, linea: 'orange', tipo: 'cta-l' },
    ],
  },
  'chicago-chicago-orange': {
    ciudad: 'chicago',
    nombre: 'Chicago',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'chicago-sedgwick-orange', tiempo: 2, linea: 'orange', tipo: 'cta-l' },
      { slug: 'chicago-grand-orange', tiempo: 2, linea: 'orange', tipo: 'cta-l' },
    ],
  },
  'chicago-grand-orange': {
    ciudad: 'chicago',
    nombre: 'Grand',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'chicago-chicago-orange', tiempo: 2, linea: 'orange', tipo: 'cta-l' },
    ],
  },

  // PINK LINE
  'chicago-54th-cermak-pink': {
    ciudad: 'chicago',
    nombre: '54th/Cermak',
    lineas: ['pink'],
    adyacentes: [
      { slug: 'chicago-35th-pink', tiempo: 3, linea: 'pink', tipo: 'cta-l' },
    ],
  },
  'chicago-35th-pink': {
    ciudad: 'chicago',
    nombre: '35th/Bronzeville-IIT',
    lineas: ['pink'],
    adyacentes: [
      { slug: 'chicago-54th-cermak-pink', tiempo: 3, linea: 'pink', tipo: 'cta-l' },
      { slug: 'chicago-roosevelt-pink', tiempo: 3, linea: 'pink', tipo: 'cta-l' },
    ],
  },
  'chicago-roosevelt-pink': {
    ciudad: 'chicago',
    nombre: 'Roosevelt',
    lineas: ['pink'],
    adyacentes: [
      { slug: 'chicago-35th-pink', tiempo: 3, linea: 'pink', tipo: 'cta-l' },
      { slug: 'chicago-library-pink', tiempo: 2, linea: 'pink', tipo: 'cta-l' },
    ],
  },
  'chicago-library-pink': {
    ciudad: 'chicago',
    nombre: 'Library',
    lineas: ['pink'],
    adyacentes: [
      { slug: 'chicago-roosevelt-pink', tiempo: 2, linea: 'pink', tipo: 'cta-l' },
      { slug: 'chicago-quincy-pink', tiempo: 2, linea: 'pink', tipo: 'cta-l' },
    ],
  },
  'chicago-quincy-pink': {
    ciudad: 'chicago',
    nombre: 'Quincy',
    lineas: ['pink'],
    adyacentes: [
      { slug: 'chicago-library-pink', tiempo: 2, linea: 'pink', tipo: 'cta-l' },
      { slug: 'chicago-wells-pink', tiempo: 2, linea: 'pink', tipo: 'cta-l' },
    ],
  },
  'chicago-wells-pink': {
    ciudad: 'chicago',
    nombre: 'Wells',
    lineas: ['pink'],
    adyacentes: [
      { slug: 'chicago-quincy-pink', tiempo: 2, linea: 'pink', tipo: 'cta-l' },
      { slug: 'chicago-lake-pink', tiempo: 2, linea: 'pink', tipo: 'cta-l' },
    ],
  },
  'chicago-lake-pink': {
    ciudad: 'chicago',
    nombre: 'Lake',
    lineas: ['pink'],
    adyacentes: [
      { slug: 'chicago-wells-pink', tiempo: 2, linea: 'pink', tipo: 'cta-l' },
      { slug: 'chicago-monroe-pink', tiempo: 2, linea: 'pink', tipo: 'cta-l' },
    ],
  },
  'chicago-monroe-pink': {
    ciudad: 'chicago',
    nombre: 'Monroe',
    lineas: ['pink'],
    adyacentes: [
      { slug: 'chicago-lake-pink', tiempo: 2, linea: 'pink', tipo: 'cta-l' },
      { slug: 'chicago-clark-lake-pink', tiempo: 2, linea: 'pink', tipo: 'cta-l' },
    ],
  },
  'chicago-clark-lake-pink': {
    ciudad: 'chicago',
    nombre: 'Clark/Lake',
    lineas: ['pink', 'blue', 'orange'],
    adyacentes: [
      { slug: 'chicago-monroe-pink', tiempo: 2, linea: 'pink', tipo: 'cta-l' },
      { slug: 'chicago-clark-division-pink', tiempo: 2, linea: 'pink', tipo: 'cta-l' },
      { slug: 'chicago-clark-lake', tiempo: 3, linea: 'blue', tipo: 'transfer' },
      { slug: 'chicago-clark-lake-orange', tiempo: 3, linea: 'orange', tipo: 'transfer' },
    ],
  },
  'chicago-clark-division-pink': {
    ciudad: 'chicago',
    nombre: 'Clark/Division',
    lineas: ['pink'],
    adyacentes: [
      { slug: 'chicago-clark-lake-pink', tiempo: 2, linea: 'pink', tipo: 'cta-l' },
      { slug: 'chicago-sedgwick-pink', tiempo: 2, linea: 'pink', tipo: 'cta-l' },
    ],
  },
  'chicago-sedgwick-pink': {
    ciudad: 'chicago',
    nombre: 'Sedgwick',
    lineas: ['pink'],
    adyacentes: [
      { slug: 'chicago-clark-division-pink', tiempo: 2, linea: 'pink', tipo: 'cta-l' },
      { slug: 'chicago-chicago-pink', tiempo: 2, linea: 'pink', tipo: 'cta-l' },
    ],
  },
  'chicago-chicago-pink': {
    ciudad: 'chicago',
    nombre: 'Chicago',
    lineas: ['pink'],
    adyacentes: [
      { slug: 'chicago-sedgwick-pink', tiempo: 2, linea: 'pink', tipo: 'cta-l' },
      { slug: 'chicago-grand-pink', tiempo: 2, linea: 'pink', tipo: 'cta-l' },
    ],
  },
  'chicago-grand-pink': {
    ciudad: 'chicago',
    nombre: 'Grand',
    lineas: ['pink'],
    adyacentes: [
      { slug: 'chicago-chicago-pink', tiempo: 2, linea: 'pink', tipo: 'cta-l' },
    ],
  },

  // PURPLE LINE
  'chicago-linden': {
    ciudad: 'chicago',
    nombre: 'Linden',
    lineas: ['purple'],
    adyacentes: [
      { slug: 'chicago-davis', tiempo: 3, linea: 'purple', tipo: 'cta-l' },
    ],
  },
  'chicago-davis': {
    ciudad: 'chicago',
    nombre: 'Davis',
    lineas: ['purple'],
    adyacentes: [
      { slug: 'chicago-linden', tiempo: 3, linea: 'purple', tipo: 'cta-l' },
      { slug: 'chicago-dempster-skokie', tiempo: 3, linea: 'purple', tipo: 'cta-l' },
    ],
  },
  'chicago-dempster-skokie': {
    ciudad: 'chicago',
    nombre: 'Dempster-Skokie',
    lineas: ['purple', 'yellow'],
    adyacentes: [
      { slug: 'chicago-davis', tiempo: 3, linea: 'purple', tipo: 'cta-l' },
      { slug: 'chicago-noyes', tiempo: 2, linea: 'purple', tipo: 'cta-l' },
      { slug: 'chicago-dempster-yellow', tiempo: 3, linea: 'yellow', tipo: 'transfer' },
    ],
  },
  'chicago-noyes': {
    ciudad: 'chicago',
    nombre: 'Noyes',
    lineas: ['purple'],
    adyacentes: [
      { slug: 'chicago-dempster-skokie', tiempo: 2, linea: 'purple', tipo: 'cta-l' },
      { slug: 'chicago-central', tiempo: 2, linea: 'purple', tipo: 'cta-l' },
    ],
  },
  'chicago-central': {
    ciudad: 'chicago',
    nombre: 'Central',
    lineas: ['purple'],
    adyacentes: [
      { slug: 'chicago-noyes', tiempo: 2, linea: 'purple', tipo: 'cta-l' },
      { slug: 'chicago-main', tiempo: 2, linea: 'purple', tipo: 'cta-l' },
    ],
  },
  'chicago-main': {
    ciudad: 'chicago',
    nombre: 'Main',
    lineas: ['purple'],
    adyacentes: [
      { slug: 'chicago-central', tiempo: 2, linea: 'purple', tipo: 'cta-l' },
      { slug: 'chicago-south-blvd', tiempo: 3, linea: 'purple', tipo: 'cta-l' },
    ],
  },
  'chicago-south-blvd': {
    ciudad: 'chicago',
    nombre: 'South Boulevard',
    lineas: ['purple'],
    adyacentes: [
      { slug: 'chicago-main', tiempo: 3, linea: 'purple', tipo: 'cta-l' },
      { slug: 'chicago-fullerton-purple', tiempo: 4, linea: 'purple', tipo: 'cta-l' },
    ],
  },
  'chicago-fullerton-purple': {
    ciudad: 'chicago',
    nombre: 'Fullerton',
    lineas: ['purple', 'red', 'brown'],
    adyacentes: [
      { slug: 'chicago-south-blvd', tiempo: 4, linea: 'purple', tipo: 'cta-l' },
      { slug: 'chicago-armitage-purple', tiempo: 2, linea: 'purple', tipo: 'cta-l' },
      { slug: 'chicago-fullerton', tiempo: 3, linea: 'red', tipo: 'transfer' },
      { slug: 'chicago-fullerton-brown', tiempo: 3, linea: 'brown', tipo: 'transfer' },
    ],
  },
  'chicago-armitage-purple': {
    ciudad: 'chicago',
    nombre: 'Armitage',
    lineas: ['purple'],
    adyacentes: [
      { slug: 'chicago-fullerton-purple', tiempo: 2, linea: 'purple', tipo: 'cta-l' },
      { slug: 'chicago-sedgwick-purple', tiempo: 2, linea: 'purple', tipo: 'cta-l' },
    ],
  },
  'chicago-sedgwick-purple': {
    ciudad: 'chicago',
    nombre: 'Sedgwick',
    lineas: ['purple'],
    adyacentes: [
      { slug: 'chicago-armitage-purple', tiempo: 2, linea: 'purple', tipo: 'cta-l' },
      { slug: 'chicago-chicago-purple', tiempo: 2, linea: 'purple', tipo: 'cta-l' },
    ],
  },
  'chicago-chicago-purple': {
    ciudad: 'chicago',
    nombre: 'Chicago',
    lineas: ['purple'],
    adyacentes: [
      { slug: 'chicago-sedgwick-purple', tiempo: 2, linea: 'purple', tipo: 'cta-l' },
      { slug: 'chicago-grand-purple', tiempo: 2, linea: 'purple', tipo: 'cta-l' },
    ],
  },
  'chicago-grand-purple': {
    ciudad: 'chicago',
    nombre: 'Grand',
    lineas: ['purple'],
    adyacentes: [
      { slug: 'chicago-chicago-purple', tiempo: 2, linea: 'purple', tipo: 'cta-l' },
      { slug: 'chicago-clark-clark-purple', tiempo: 2, linea: 'purple', tipo: 'cta-l' },
    ],
  },
  'chicago-clark-clark-purple': {
    ciudad: 'chicago',
    nombre: 'Clark',
    lineas: ['purple'],
    adyacentes: [
      { slug: 'chicago-grand-purple', tiempo: 2, linea: 'purple', tipo: 'cta-l' },
      { slug: 'chicago-lake-purple', tiempo: 2, linea: 'purple', tipo: 'cta-l' },
    ],
  },
  'chicago-lake-purple': {
    ciudad: 'chicago',
    nombre: 'Lake',
    lineas: ['purple'],
    adyacentes: [
      { slug: 'chicago-clark-clark-purple', tiempo: 2, linea: 'purple', tipo: 'cta-l' },
      { slug: 'chicago-monroe-purple', tiempo: 2, linea: 'purple', tipo: 'cta-l' },
    ],
  },
  'chicago-monroe-purple': {
    ciudad: 'chicago',
    nombre: 'Monroe',
    lineas: ['purple'],
    adyacentes: [
      { slug: 'chicago-lake-purple', tiempo: 2, linea: 'purple', tipo: 'cta-l' },
      { slug: 'chicago-jackson-purple', tiempo: 2, linea: 'purple', tipo: 'cta-l' },
    ],
  },
  'chicago-jackson-purple': {
    ciudad: 'chicago',
    nombre: 'Jackson',
    lineas: ['purple'],
    adyacentes: [
      { slug: 'chicago-monroe-purple', tiempo: 2, linea: 'purple', tipo: 'cta-l' },
      { slug: 'chicago-harrison-purple', tiempo: 2, linea: 'purple', tipo: 'cta-l' },
    ],
  },
  'chicago-harrison-purple': {
    ciudad: 'chicago',
    nombre: 'Harrison',
    lineas: ['purple'],
    adyacentes: [
      { slug: 'chicago-jackson-purple', tiempo: 2, linea: 'purple', tipo: 'cta-l' },
    ],
  },

  // YELLOW LINE
  'chicago-dempster-yellow': {
    ciudad: 'chicago',
    nombre: 'Dempster-Skokie',
    lineas: ['yellow', 'purple'],
    adyacentes: [
      { slug: 'chicago-skokie', tiempo: 3, linea: 'yellow', tipo: 'cta-l' },
      { slug: 'chicago-dempster-skokie', tiempo: 3, linea: 'purple', tipo: 'transfer' },
    ],
  },
  'chicago-skokie': {
    ciudad: 'chicago',
    nombre: 'Skokie',
    lineas: ['yellow'],
    adyacentes: [
      { slug: 'chicago-dempster-yellow', tiempo: 3, linea: 'yellow', tipo: 'cta-l' },
      { slug: 'chicago-howard-yellow', tiempo: 3, linea: 'yellow', tipo: 'cta-l' },
    ],
  },
  'chicago-howard-yellow': {
    ciudad: 'chicago',
    nombre: 'Howard',
    lineas: ['yellow', 'red'],
    adyacentes: [
      { slug: 'chicago-skokie', tiempo: 3, linea: 'yellow', tipo: 'cta-l' },
      { slug: 'chicago-howard', tiempo: 3, linea: 'red', tipo: 'transfer' },
    ],
  },
};
