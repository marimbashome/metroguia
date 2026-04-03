export const grafoCleveland = {
  'cleveland-airport': {
    ciudad: 'cleveland',
    nombre: 'Airport',
    lineas: ["red"],
    adyacentes: [
      { slug: 'cleveland-brookpark', tiempo: 3, linea: 'red', tipo: 'rta' },
    ],
  },
  'cleveland-brookpark': {
    ciudad: 'cleveland',
    nombre: 'Brookpark',
    lineas: ["red"],
    adyacentes: [
      { slug: 'cleveland-airport', tiempo: 3, linea: 'red', tipo: 'rta' },
      { slug: 'cleveland-puritas', tiempo: 3, linea: 'red', tipo: 'rta' },
    ],
  },
  'cleveland-puritas': {
    ciudad: 'cleveland',
    nombre: 'Puritas',
    lineas: ["red"],
    adyacentes: [
      { slug: 'cleveland-brookpark', tiempo: 3, linea: 'red', tipo: 'rta' },
      { slug: 'cleveland-w-117th', tiempo: 3, linea: 'red', tipo: 'rta' },
    ],
  },
  'cleveland-w-117th': {
    ciudad: 'cleveland',
    nombre: 'W 117th',
    lineas: ["red"],
    adyacentes: [
      { slug: 'cleveland-puritas', tiempo: 3, linea: 'red', tipo: 'rta' },
      { slug: 'cleveland-w-98th', tiempo: 3, linea: 'red', tipo: 'rta' },
    ],
  },
  'cleveland-w-98th': {
    ciudad: 'cleveland',
    nombre: 'W 98th',
    lineas: ["red"],
    adyacentes: [
      { slug: 'cleveland-w-117th', tiempo: 3, linea: 'red', tipo: 'rta' },
      { slug: 'cleveland-w-65th', tiempo: 3, linea: 'red', tipo: 'rta' },
    ],
  },
  'cleveland-w-65th': {
    ciudad: 'cleveland',
    nombre: 'W 65th',
    lineas: ["red"],
    adyacentes: [
      { slug: 'cleveland-w-98th', tiempo: 3, linea: 'red', tipo: 'rta' },
      { slug: 'cleveland-w-25th', tiempo: 3, linea: 'red', tipo: 'rta' },
    ],
  },
  'cleveland-w-25th': {
    ciudad: 'cleveland',
    nombre: 'W 25th',
    lineas: ["red"],
    adyacentes: [
      { slug: 'cleveland-w-65th', tiempo: 3, linea: 'red', tipo: 'rta' },
      { slug: 'cleveland-tower-city', tiempo: 3, linea: 'red', tipo: 'rta' },
    ],
  },
  'cleveland-tower-city': {
    ciudad: 'cleveland',
    nombre: 'Tower City',
    lineas: ["red"],
    adyacentes: [
      { slug: 'cleveland-w-25th', tiempo: 3, linea: 'red', tipo: 'rta' },
      { slug: 'cleveland-e-34th', tiempo: 3, linea: 'red', tipo: 'rta' },
    ],
  },
  'cleveland-e-34th': {
    ciudad: 'cleveland',
    nombre: 'E 34th',
    lineas: ["red"],
    adyacentes: [
      { slug: 'cleveland-tower-city', tiempo: 3, linea: 'red', tipo: 'rta' },
      { slug: 'cleveland-e-55th', tiempo: 3, linea: 'red', tipo: 'rta' },
    ],
  },
  'cleveland-e-55th': {
    ciudad: 'cleveland',
    nombre: 'E 55th',
    lineas: ["red"],
    adyacentes: [
      { slug: 'cleveland-e-34th', tiempo: 3, linea: 'red', tipo: 'rta' },
      { slug: 'cleveland-e-79th', tiempo: 3, linea: 'red', tipo: 'rta' },
    ],
  },
  'cleveland-e-79th': {
    ciudad: 'cleveland',
    nombre: 'E 79th',
    lineas: ["red"],
    adyacentes: [
      { slug: 'cleveland-e-55th', tiempo: 3, linea: 'red', tipo: 'rta' },
      { slug: 'cleveland-e-105th', tiempo: 3, linea: 'red', tipo: 'rta' },
    ],
  },
  'cleveland-e-105th': {
    ciudad: 'cleveland',
    nombre: 'E 105th',
    lineas: ["red"],
    adyacentes: [
      { slug: 'cleveland-e-79th', tiempo: 3, linea: 'red', tipo: 'rta' },
      { slug: 'cleveland-university-circle', tiempo: 3, linea: 'red', tipo: 'rta' },
    ],
  },
  'cleveland-university-circle': {
    ciudad: 'cleveland',
    nombre: 'University Circle',
    lineas: ["red"],
    adyacentes: [
      { slug: 'cleveland-e-105th', tiempo: 3, linea: 'red', tipo: 'rta' },
      { slug: 'cleveland-little-italy', tiempo: 3, linea: 'red', tipo: 'rta' },
    ],
  },
  'cleveland-little-italy': {
    ciudad: 'cleveland',
    nombre: 'Little Italy',
    lineas: ["red"],
    adyacentes: [
      { slug: 'cleveland-university-circle', tiempo: 3, linea: 'red', tipo: 'rta' },
      { slug: 'cleveland-coventry', tiempo: 3, linea: 'red', tipo: 'rta' },
    ],
  },
  'cleveland-coventry': {
    ciudad: 'cleveland',
    nombre: 'Coventry',
    lineas: ["red"],
    adyacentes: [
      { slug: 'cleveland-little-italy', tiempo: 3, linea: 'red', tipo: 'rta' },
      { slug: 'cleveland-lee', tiempo: 3, linea: 'red', tipo: 'rta' },
    ],
  },
  'cleveland-lee': {
    ciudad: 'cleveland',
    nombre: 'Lee',
    lineas: ["red"],
    adyacentes: [
      { slug: 'cleveland-coventry', tiempo: 3, linea: 'red', tipo: 'rta' },
      { slug: 'cleveland-green', tiempo: 3, linea: 'red', tipo: 'rta' },
    ],
  },
  'cleveland-green': {
    ciudad: 'cleveland',
    nombre: 'Green',
    lineas: ["red"],
    adyacentes: [
      { slug: 'cleveland-lee', tiempo: 3, linea: 'red', tipo: 'rta' },
      { slug: 'cleveland-windermere', tiempo: 3, linea: 'red', tipo: 'rta' },
    ],
  },
  'cleveland-windermere': {
    ciudad: 'cleveland',
    nombre: 'Windermere',
    lineas: ["red"],
    adyacentes: [
      { slug: 'cleveland-green', tiempo: 3, linea: 'red', tipo: 'rta' },
    ],
  },
  'cleveland-tower-city-blue': {
    ciudad: 'cleveland',
    nombre: 'Tower City Blue',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'cleveland-e-34th-blue', tiempo: 3, linea: 'blue', tipo: 'rta' },
    ],
  },
  'cleveland-e-34th-blue': {
    ciudad: 'cleveland',
    nombre: 'E 34th Blue',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'cleveland-tower-city-blue', tiempo: 3, linea: 'blue', tipo: 'rta' },
      { slug: 'cleveland-e-55th-blue', tiempo: 3, linea: 'blue', tipo: 'rta' },
    ],
  },
  'cleveland-e-55th-blue': {
    ciudad: 'cleveland',
    nombre: 'E 55th Blue',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'cleveland-e-34th-blue', tiempo: 3, linea: 'blue', tipo: 'rta' },
      { slug: 'cleveland-e-79th-blue', tiempo: 3, linea: 'blue', tipo: 'rta' },
    ],
  },
  'cleveland-e-79th-blue': {
    ciudad: 'cleveland',
    nombre: 'E 79th Blue',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'cleveland-e-55th-blue', tiempo: 3, linea: 'blue', tipo: 'rta' },
      { slug: 'cleveland-lee-blue', tiempo: 3, linea: 'blue', tipo: 'rta' },
    ],
  },
  'cleveland-lee-blue': {
    ciudad: 'cleveland',
    nombre: 'Lee Blue',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'cleveland-e-79th-blue', tiempo: 3, linea: 'blue', tipo: 'rta' },
      { slug: 'cleveland-warrensville', tiempo: 3, linea: 'blue', tipo: 'rta' },
    ],
  },
  'cleveland-warrensville': {
    ciudad: 'cleveland',
    nombre: 'Warrensville',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'cleveland-lee-blue', tiempo: 3, linea: 'blue', tipo: 'rta' },
      { slug: 'cleveland-south-green', tiempo: 3, linea: 'blue', tipo: 'rta' },
    ],
  },
  'cleveland-south-green': {
    ciudad: 'cleveland',
    nombre: 'South Green',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'cleveland-warrensville', tiempo: 3, linea: 'blue', tipo: 'rta' },
      { slug: 'cleveland-shaker-square', tiempo: 3, linea: 'blue', tipo: 'rta' },
    ],
  },
  'cleveland-shaker-square': {
    ciudad: 'cleveland',
    nombre: 'Shaker Square',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'cleveland-south-green', tiempo: 3, linea: 'blue', tipo: 'rta' },
      { slug: 'cleveland-van-aken', tiempo: 3, linea: 'blue', tipo: 'rta' },
    ],
  },
  'cleveland-van-aken': {
    ciudad: 'cleveland',
    nombre: 'Van Aken',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'cleveland-shaker-square', tiempo: 3, linea: 'blue', tipo: 'rta' },
      { slug: 'cleveland-green-blue', tiempo: 3, linea: 'blue', tipo: 'rta' },
    ],
  },
  'cleveland-green-blue': {
    ciudad: 'cleveland',
    nombre: 'Green Blue',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'cleveland-van-aken', tiempo: 3, linea: 'blue', tipo: 'rta' },
    ],
  },
  'cleveland-tower-city-green': {
    ciudad: 'cleveland',
    nombre: 'Tower City Green',
    lineas: ["green"],
    adyacentes: [
      { slug: 'cleveland-e-34th-green', tiempo: 3, linea: 'green', tipo: 'rta' },
    ],
  },
  'cleveland-e-34th-green': {
    ciudad: 'cleveland',
    nombre: 'E 34th Green',
    lineas: ["green"],
    adyacentes: [
      { slug: 'cleveland-tower-city-green', tiempo: 3, linea: 'green', tipo: 'rta' },
      { slug: 'cleveland-e-55th-green', tiempo: 3, linea: 'green', tipo: 'rta' },
    ],
  },
  'cleveland-e-55th-green': {
    ciudad: 'cleveland',
    nombre: 'E 55th Green',
    lineas: ["green"],
    adyacentes: [
      { slug: 'cleveland-e-34th-green', tiempo: 3, linea: 'green', tipo: 'rta' },
      { slug: 'cleveland-e-79th-green', tiempo: 3, linea: 'green', tipo: 'rta' },
    ],
  },
  'cleveland-e-79th-green': {
    ciudad: 'cleveland',
    nombre: 'E 79th Green',
    lineas: ["green"],
    adyacentes: [
      { slug: 'cleveland-e-55th-green', tiempo: 3, linea: 'green', tipo: 'rta' },
      { slug: 'cleveland-lee-green', tiempo: 3, linea: 'green', tipo: 'rta' },
    ],
  },
  'cleveland-lee-green': {
    ciudad: 'cleveland',
    nombre: 'Lee Green',
    lineas: ["green"],
    adyacentes: [
      { slug: 'cleveland-e-79th-green', tiempo: 3, linea: 'green', tipo: 'rta' },
      { slug: 'cleveland-south-green-g', tiempo: 3, linea: 'green', tipo: 'rta' },
    ],
  },
  'cleveland-south-green-g': {
    ciudad: 'cleveland',
    nombre: 'South Green G',
    lineas: ["green"],
    adyacentes: [
      { slug: 'cleveland-lee-green', tiempo: 3, linea: 'green', tipo: 'rta' },
      { slug: 'cleveland-shaker-square-g', tiempo: 3, linea: 'green', tipo: 'rta' },
    ],
  },
  'cleveland-shaker-square-g': {
    ciudad: 'cleveland',
    nombre: 'Shaker Square G',
    lineas: ["green"],
    adyacentes: [
      { slug: 'cleveland-south-green-g', tiempo: 3, linea: 'green', tipo: 'rta' },
      { slug: 'cleveland-farnsleigh', tiempo: 3, linea: 'green', tipo: 'rta' },
    ],
  },
  'cleveland-farnsleigh': {
    ciudad: 'cleveland',
    nombre: 'Farnsleigh',
    lineas: ["green"],
    adyacentes: [
      { slug: 'cleveland-shaker-square-g', tiempo: 3, linea: 'green', tipo: 'rta' },
      { slug: 'cleveland-drexmore', tiempo: 3, linea: 'green', tipo: 'rta' },
    ],
  },
  'cleveland-drexmore': {
    ciudad: 'cleveland',
    nombre: 'Drexmore',
    lineas: ["green"],
    adyacentes: [
      { slug: 'cleveland-farnsleigh', tiempo: 3, linea: 'green', tipo: 'rta' },
      { slug: 'cleveland-green-road', tiempo: 3, linea: 'green', tipo: 'rta' },
    ],
  },
  'cleveland-green-road': {
    ciudad: 'cleveland',
    nombre: 'Green Road',
    lineas: ["green"],
    adyacentes: [
      { slug: 'cleveland-drexmore', tiempo: 3, linea: 'green', tipo: 'rta' },
    ],
  },
};
