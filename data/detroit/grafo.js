export const grafoDetroit = {
  'detroit-grand-blvd': {
    ciudad: 'detroit',
    nombre: 'Grand Blvd',
    lineas: ["qline"],
    adyacentes: [
      { slug: 'detroit-amsterdam', tiempo: 3, linea: 'qline', tipo: 'qline' },
    ],
  },
  'detroit-amsterdam': {
    ciudad: 'detroit',
    nombre: 'Amsterdam',
    lineas: ["qline"],
    adyacentes: [
      { slug: 'detroit-grand-blvd', tiempo: 3, linea: 'qline', tipo: 'qline' },
      { slug: 'detroit-baltimore', tiempo: 3, linea: 'qline', tipo: 'qline' },
    ],
  },
  'detroit-baltimore': {
    ciudad: 'detroit',
    nombre: 'Baltimore',
    lineas: ["qline"],
    adyacentes: [
      { slug: 'detroit-amsterdam', tiempo: 3, linea: 'qline', tipo: 'qline' },
      { slug: 'detroit-ferry', tiempo: 3, linea: 'qline', tipo: 'qline' },
    ],
  },
  'detroit-ferry': {
    ciudad: 'detroit',
    nombre: 'Ferry',
    lineas: ["qline"],
    adyacentes: [
      { slug: 'detroit-baltimore', tiempo: 3, linea: 'qline', tipo: 'qline' },
      { slug: 'detroit-foxtown', tiempo: 3, linea: 'qline', tipo: 'qline' },
    ],
  },
  'detroit-foxtown': {
    ciudad: 'detroit',
    nombre: 'Foxtown',
    lineas: ["qline"],
    adyacentes: [
      { slug: 'detroit-ferry', tiempo: 3, linea: 'qline', tipo: 'qline' },
      { slug: 'detroit-broadway', tiempo: 3, linea: 'qline', tipo: 'qline' },
    ],
  },
  'detroit-broadway': {
    ciudad: 'detroit',
    nombre: 'Broadway',
    lineas: ["qline"],
    adyacentes: [
      { slug: 'detroit-foxtown', tiempo: 3, linea: 'qline', tipo: 'qline' },
      { slug: 'detroit-grand-circus-park', tiempo: 3, linea: 'qline', tipo: 'qline' },
    ],
  },
  'detroit-grand-circus-park': {
    ciudad: 'detroit',
    nombre: 'Grand Circus Park',
    lineas: ["qline"],
    adyacentes: [
      { slug: 'detroit-broadway', tiempo: 3, linea: 'qline', tipo: 'qline' },
      { slug: 'detroit-times-square', tiempo: 3, linea: 'qline', tipo: 'qline' },
    ],
  },
  'detroit-times-square': {
    ciudad: 'detroit',
    nombre: 'Times Square',
    lineas: ["qline"],
    adyacentes: [
      { slug: 'detroit-grand-circus-park', tiempo: 3, linea: 'qline', tipo: 'qline' },
      { slug: 'detroit-campus-martius', tiempo: 3, linea: 'qline', tipo: 'qline' },
    ],
  },
  'detroit-campus-martius': {
    ciudad: 'detroit',
    nombre: 'Campus Martius',
    lineas: ["qline"],
    adyacentes: [
      { slug: 'detroit-times-square', tiempo: 3, linea: 'qline', tipo: 'qline' },
      { slug: 'detroit-congress', tiempo: 3, linea: 'qline', tipo: 'qline' },
    ],
  },
  'detroit-congress': {
    ciudad: 'detroit',
    nombre: 'Congress',
    lineas: ["qline"],
    adyacentes: [
      { slug: 'detroit-campus-martius', tiempo: 3, linea: 'qline', tipo: 'qline' },
      { slug: 'detroit-woodward', tiempo: 3, linea: 'qline', tipo: 'qline' },
    ],
  },
  'detroit-woodward': {
    ciudad: 'detroit',
    nombre: 'Woodward',
    lineas: ["qline"],
    adyacentes: [
      { slug: 'detroit-congress', tiempo: 3, linea: 'qline', tipo: 'qline' },
      { slug: 'detroit-mlk', tiempo: 3, linea: 'qline', tipo: 'qline' },
    ],
  },
  'detroit-mlk': {
    ciudad: 'detroit',
    nombre: 'Mlk',
    lineas: ["qline"],
    adyacentes: [
      { slug: 'detroit-woodward', tiempo: 3, linea: 'qline', tipo: 'qline' },
    ],
  },
  'detroit-pm-times-square': {
    ciudad: 'detroit',
    nombre: 'Pm Times Square',
    lineas: ["people-mover"],
    adyacentes: [
      { slug: 'detroit-pm-michigan', tiempo: 3, linea: 'people-mover', tipo: 'qline' },
    ],
  },
  'detroit-pm-michigan': {
    ciudad: 'detroit',
    nombre: 'Pm Michigan',
    lineas: ["people-mover"],
    adyacentes: [
      { slug: 'detroit-pm-times-square', tiempo: 3, linea: 'people-mover', tipo: 'qline' },
      { slug: 'detroit-pm-cass', tiempo: 3, linea: 'people-mover', tipo: 'qline' },
    ],
  },
  'detroit-pm-cass': {
    ciudad: 'detroit',
    nombre: 'Pm Cass',
    lineas: ["people-mover"],
    adyacentes: [
      { slug: 'detroit-pm-michigan', tiempo: 3, linea: 'people-mover', tipo: 'qline' },
      { slug: 'detroit-pm-grand-circus', tiempo: 3, linea: 'people-mover', tipo: 'qline' },
    ],
  },
  'detroit-pm-grand-circus': {
    ciudad: 'detroit',
    nombre: 'Pm Grand Circus',
    lineas: ["people-mover"],
    adyacentes: [
      { slug: 'detroit-pm-cass', tiempo: 3, linea: 'people-mover', tipo: 'qline' },
      { slug: 'detroit-pm-broadway', tiempo: 3, linea: 'people-mover', tipo: 'qline' },
    ],
  },
  'detroit-pm-broadway': {
    ciudad: 'detroit',
    nombre: 'Pm Broadway',
    lineas: ["people-mover"],
    adyacentes: [
      { slug: 'detroit-pm-grand-circus', tiempo: 3, linea: 'people-mover', tipo: 'qline' },
      { slug: 'detroit-pm-cadillac', tiempo: 3, linea: 'people-mover', tipo: 'qline' },
    ],
  },
  'detroit-pm-cadillac': {
    ciudad: 'detroit',
    nombre: 'Pm Cadillac',
    lineas: ["people-mover"],
    adyacentes: [
      { slug: 'detroit-pm-broadway', tiempo: 3, linea: 'people-mover', tipo: 'qline' },
      { slug: 'detroit-pm-greektown', tiempo: 3, linea: 'people-mover', tipo: 'qline' },
    ],
  },
  'detroit-pm-greektown': {
    ciudad: 'detroit',
    nombre: 'Pm Greektown',
    lineas: ["people-mover"],
    adyacentes: [
      { slug: 'detroit-pm-cadillac', tiempo: 3, linea: 'people-mover', tipo: 'qline' },
      { slug: 'detroit-pm-bricktown', tiempo: 3, linea: 'people-mover', tipo: 'qline' },
    ],
  },
  'detroit-pm-bricktown': {
    ciudad: 'detroit',
    nombre: 'Pm Bricktown',
    lineas: ["people-mover"],
    adyacentes: [
      { slug: 'detroit-pm-greektown', tiempo: 3, linea: 'people-mover', tipo: 'qline' },
      { slug: 'detroit-pm-renaissance', tiempo: 3, linea: 'people-mover', tipo: 'qline' },
    ],
  },
  'detroit-pm-renaissance': {
    ciudad: 'detroit',
    nombre: 'Pm Renaissance',
    lineas: ["people-mover"],
    adyacentes: [
      { slug: 'detroit-pm-bricktown', tiempo: 3, linea: 'people-mover', tipo: 'qline' },
      { slug: 'detroit-pm-financial-district', tiempo: 3, linea: 'people-mover', tipo: 'qline' },
    ],
  },
  'detroit-pm-financial-district': {
    ciudad: 'detroit',
    nombre: 'Pm Financial District',
    lineas: ["people-mover"],
    adyacentes: [
      { slug: 'detroit-pm-renaissance', tiempo: 3, linea: 'people-mover', tipo: 'qline' },
      { slug: 'detroit-pm-cobo', tiempo: 3, linea: 'people-mover', tipo: 'qline' },
    ],
  },
  'detroit-pm-cobo': {
    ciudad: 'detroit',
    nombre: 'Pm Cobo',
    lineas: ["people-mover"],
    adyacentes: [
      { slug: 'detroit-pm-financial-district', tiempo: 3, linea: 'people-mover', tipo: 'qline' },
      { slug: 'detroit-pm-joe-louis', tiempo: 3, linea: 'people-mover', tipo: 'qline' },
    ],
  },
  'detroit-pm-joe-louis': {
    ciudad: 'detroit',
    nombre: 'Pm Joe Louis',
    lineas: ["people-mover"],
    adyacentes: [
      { slug: 'detroit-pm-cobo', tiempo: 3, linea: 'people-mover', tipo: 'qline' },
      { slug: 'detroit-pm-fort-cass', tiempo: 3, linea: 'people-mover', tipo: 'qline' },
    ],
  },
  'detroit-pm-fort-cass': {
    ciudad: 'detroit',
    nombre: 'Pm Fort Cass',
    lineas: ["people-mover"],
    adyacentes: [
      { slug: 'detroit-pm-joe-louis', tiempo: 3, linea: 'people-mover', tipo: 'qline' },
    ],
  },
};
