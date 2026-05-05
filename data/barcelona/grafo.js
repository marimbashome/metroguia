export const grafoBarcelona = {
  'passeig-de-gracia': {
    ciudad: 'barcelona',
    nombre: 'Passeig de Gràcia',
    lineas: ['L2', 'L3', 'L4'],
    adyacentes: [
      { slug: 'sagrada-familia', tiempo: 3, linea: 'L2', tipo: 'normal' },
      { slug: 'diagonal', tiempo: 2, linea: 'L3', tipo: 'normal' },
      { slug: 'placa-de-catalunya', tiempo: 2, linea: 'L3', tipo: 'normal' },
      { slug: 'urquinaona', tiempo: 2, linea: 'L4', tipo: 'normal' },
      { slug: 'verdaguer', tiempo: 2, linea: 'L4', tipo: 'normal' }
    ]
  },
  'sagrada-familia': {
    ciudad: 'barcelona',
    nombre: 'Sagrada Família',
    lineas: ['L2', 'L5'],
    adyacentes: [
      { slug: 'passeig-de-gracia', tiempo: 3, linea: 'L2', tipo: 'normal' },
      { slug: 'diagonal', tiempo: 3, linea: 'L5', tipo: 'normal' },
      { slug: 'verdaguer', tiempo: 2, linea: 'L5', tipo: 'normal' }
    ]
  },
  'la-sagrera': {
    ciudad: 'barcelona',
    nombre: 'La Sagrera',
    lineas: ['L1', 'L5', 'L9', 'L10'],
    adyacentes: [
      { slug: 'sant-andreu-arenal', tiempo: 2, linea: 'L1', tipo: 'normal' },
      { slug: 'placa-de-catalunya', tiempo: 8, linea: 'L1', tipo: 'normal' }
    ]
  },
  'placa-espanya': {
    ciudad: 'barcelona',
    nombre: 'Plaça Espanya',
    lineas: ['L1', 'L3'],
    adyacentes: [
      { slug: 'placa-de-catalunya', tiempo: 5, linea: 'L1', tipo: 'normal' },
      { slug: 'barceloneta', tiempo: 8, linea: 'L3', tipo: 'normal' }
    ]
  },
  'barceloneta': {
    ciudad: 'barcelona',
    nombre: 'Barceloneta',
    lineas: ['L4'],
    adyacentes: [
      { slug: 'ciutadella-vila-olimpica', tiempo: 3, linea: 'L4', tipo: 'normal' },
      { slug: 'urquinaona', tiempo: 4, linea: 'L4', tipo: 'normal' },
      { slug: 'placa-espanya', tiempo: 8, linea: 'L3', tipo: 'transbordo' }
    ]
  },
  'ciutadella-vila-olimpica': {
    ciudad: 'barcelona',
    nombre: 'Ciutadella / Vila Olímpica',
    lineas: ['L4'],
    adyacentes: [
      { slug: 'barceloneta', tiempo: 3, linea: 'L4', tipo: 'normal' },
      { slug: 'arc-de-triomf', tiempo: 4, linea: 'L1', tipo: 'transbordo' }
    ]
  },
  'arc-de-triomf': {
    ciudad: 'barcelona',
    nombre: 'Arc de Triomf',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'urquinaona', tiempo: 2, linea: 'L1', tipo: 'normal' },
      { slug: 'placa-de-catalunya', tiempo: 3, linea: 'L1', tipo: 'normal' },
      { slug: 'ciutadella-vila-olimpica', tiempo: 4, linea: 'L4', tipo: 'transbordo' }
    ]
  },
  'urquinaona': {
    ciudad: 'barcelona',
    nombre: 'Urquinaona',
    lineas: ['L1', 'L4'],
    adyacentes: [
      { slug: 'placa-de-catalunya', tiempo: 2, linea: 'L1', tipo: 'normal' },
      { slug: 'arc-de-triomf', tiempo: 2, linea: 'L1', tipo: 'normal' },
      { slug: 'passeig-de-gracia', tiempo: 2, linea: 'L4', tipo: 'normal' },
      { slug: 'barceloneta', tiempo: 4, linea: 'L4', tipo: 'normal' }
    ]
  },
  'placa-de-catalunya': {
    ciudad: 'barcelona',
    nombre: 'Plaça de Catalunya',
    lineas: ['L1', 'L3'],
    adyacentes: [
      { slug: 'urquinaona', tiempo: 2, linea: 'L1', tipo: 'normal' },
      { slug: 'placa-espanya', tiempo: 5, linea: 'L1', tipo: 'normal' },
      { slug: 'la-sagrera', tiempo: 8, linea: 'L1', tipo: 'normal' },
      { slug: 'passeig-de-gracia', tiempo: 2, linea: 'L3', tipo: 'normal' },
      { slug: 'barceloneta', tiempo: 8, linea: 'L3', tipo: 'normal' }
    ]
  },
  'universitat': {
    ciudad: 'barcelona',
    nombre: 'Universitat',
    lineas: ['L1', 'L2'],
    adyacentes: [
      { slug: 'placa-de-catalunya', tiempo: 2, linea: 'L1', tipo: 'normal' },
      { slug: 'placa-espanya', tiempo: 3, linea: 'L1', tipo: 'normal' },
      { slug: 'sagrada-familia', tiempo: 4, linea: 'L2', tipo: 'normal' },
      { slug: 'passeig-de-gracia', tiempo: 3, linea: 'L2', tipo: 'normal' }
    ]
  },
  'diagonal': {
    ciudad: 'barcelona',
    nombre: 'Diagonal',
    lineas: ['L3', 'L5'],
    adyacentes: [
      { slug: 'passeig-de-gracia', tiempo: 2, linea: 'L3', tipo: 'normal' },
      { slug: 'lesseps', tiempo: 5, linea: 'L3', tipo: 'normal' },
      { slug: 'sagrada-familia', tiempo: 3, linea: 'L5', tipo: 'normal' },
      { slug: 'hospital-clinic', tiempo: 2, linea: 'L5', tipo: 'normal' }
    ]
  },
  'verdaguer': {
    ciudad: 'barcelona',
    nombre: 'Verdaguer',
    lineas: ['L4', 'L5'],
    adyacentes: [
      { slug: 'passeig-de-gracia', tiempo: 2, linea: 'L4', tipo: 'normal' },
      { slug: 'sagrada-familia', tiempo: 2, linea: 'L5', tipo: 'normal' },
      { slug: 'diagonal', tiempo: 2, linea: 'L5', tipo: 'normal' }
    ]
  },
  'hospital-clinic': {
    ciudad: 'barcelona',
    nombre: 'Hospital Clínic',
    lineas: ['L5'],
    adyacentes: [
      { slug: 'diagonal', tiempo: 2, linea: 'L5', tipo: 'normal' },
      { slug: 'collblanc', tiempo: 5, linea: 'L5', tipo: 'normal' }
    ]
  },
  'lesseps': {
    ciudad: 'barcelona',
    nombre: 'Lesseps',
    lineas: ['L3'],
    adyacentes: [
      { slug: 'diagonal', tiempo: 5, linea: 'L3', tipo: 'normal' },
      { slug: 'vallcarca', tiempo: 2, linea: 'L3', tipo: 'normal' }
    ]
  },
  'vallcarca': {
    ciudad: 'barcelona',
    nombre: 'Vallcarca',
    lineas: ['L3'],
    adyacentes: [
      { slug: 'lesseps', tiempo: 2, linea: 'L3', tipo: 'normal' }
    ]
  },
  'camp-nou-badal': {
    ciudad: 'barcelona',
    nombre: 'Badal (Camp Nou)',
    lineas: ['L5'],
    adyacentes: [
      { slug: 'collblanc', tiempo: 2, linea: 'L5', tipo: 'normal' },
      { slug: 'hospital-clinic', tiempo: 5, linea: 'L5', tipo: 'normal' }
    ]
  },
  'aeroportl1': {
    ciudad: 'barcelona',
    nombre: 'Aeroport T1',
    lineas: ['L9 Sud'],
    adyacentes: [
      { slug: 'aeroportl2', tiempo: 4, linea: 'L9 Sud', tipo: 'normal' }
    ]
  },
  'aeroportl2': {
    ciudad: 'barcelona',
    nombre: 'Aeroport T2',
    lineas: ['L9 Sud'],
    adyacentes: [
      { slug: 'aeroportl1', tiempo: 4, linea: 'L9 Sud', tipo: 'normal' },
      { slug: 'collblanc', tiempo: 20, linea: 'L9 Sud', tipo: 'normal' }
    ]
  },
  'collblanc': {
    ciudad: 'barcelona',
    nombre: 'Collblanc',
    lineas: ['L5', 'L9 Sud'],
    adyacentes: [
      { slug: 'camp-nou-badal', tiempo: 2, linea: 'L5', tipo: 'normal' },
      { slug: 'hospital-clinic', tiempo: 5, linea: 'L5', tipo: 'normal' },
      { slug: 'aeroportl2', tiempo: 20, linea: 'L9 Sud', tipo: 'normal' }
    ]
  },
  'sant-andreu-arenal': {
    ciudad: 'barcelona',
    nombre: 'Sant Andreu',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'la-sagrera', tiempo: 2, linea: 'L1', tipo: 'normal' },
      { slug: 'placa-de-catalunya', tiempo: 10, linea: 'L1', tipo: 'normal' }
    ]
  }
};
