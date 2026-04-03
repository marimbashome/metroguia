export const grafoBuffalo = {
  'buffalo-university': {
    ciudad: 'buffalo',
    nombre: 'University',
    lineas: ["metro"],
    adyacentes: [
      { slug: 'buffalo-lasalle', tiempo: 3, linea: 'metro', tipo: 'nfta' },
    ],
  },
  'buffalo-lasalle': {
    ciudad: 'buffalo',
    nombre: 'Lasalle',
    lineas: ["metro"],
    adyacentes: [
      { slug: 'buffalo-university', tiempo: 3, linea: 'metro', tipo: 'nfta' },
      { slug: 'buffalo-amherst', tiempo: 3, linea: 'metro', tipo: 'nfta' },
    ],
  },
  'buffalo-amherst': {
    ciudad: 'buffalo',
    nombre: 'Amherst',
    lineas: ["metro"],
    adyacentes: [
      { slug: 'buffalo-lasalle', tiempo: 3, linea: 'metro', tipo: 'nfta' },
      { slug: 'buffalo-allen-medical', tiempo: 3, linea: 'metro', tipo: 'nfta' },
    ],
  },
  'buffalo-allen-medical': {
    ciudad: 'buffalo',
    nombre: 'Allen Medical',
    lineas: ["metro"],
    adyacentes: [
      { slug: 'buffalo-amherst', tiempo: 3, linea: 'metro', tipo: 'nfta' },
      { slug: 'buffalo-humboldt-hospital', tiempo: 3, linea: 'metro', tipo: 'nfta' },
    ],
  },
  'buffalo-humboldt-hospital': {
    ciudad: 'buffalo',
    nombre: 'Humboldt Hospital',
    lineas: ["metro"],
    adyacentes: [
      { slug: 'buffalo-allen-medical', tiempo: 3, linea: 'metro', tipo: 'nfta' },
      { slug: 'buffalo-delavan-canisius', tiempo: 3, linea: 'metro', tipo: 'nfta' },
    ],
  },
  'buffalo-delavan-canisius': {
    ciudad: 'buffalo',
    nombre: 'Delavan Canisius',
    lineas: ["metro"],
    adyacentes: [
      { slug: 'buffalo-humboldt-hospital', tiempo: 3, linea: 'metro', tipo: 'nfta' },
      { slug: 'buffalo-utica', tiempo: 3, linea: 'metro', tipo: 'nfta' },
    ],
  },
  'buffalo-utica': {
    ciudad: 'buffalo',
    nombre: 'Utica',
    lineas: ["metro"],
    adyacentes: [
      { slug: 'buffalo-delavan-canisius', tiempo: 3, linea: 'metro', tipo: 'nfta' },
      { slug: 'buffalo-summer-best', tiempo: 3, linea: 'metro', tipo: 'nfta' },
    ],
  },
  'buffalo-summer-best': {
    ciudad: 'buffalo',
    nombre: 'Summer Best',
    lineas: ["metro"],
    adyacentes: [
      { slug: 'buffalo-utica', tiempo: 3, linea: 'metro', tipo: 'nfta' },
      { slug: 'buffalo-theater', tiempo: 3, linea: 'metro', tipo: 'nfta' },
    ],
  },
  'buffalo-theater': {
    ciudad: 'buffalo',
    nombre: 'Theater',
    lineas: ["metro"],
    adyacentes: [
      { slug: 'buffalo-summer-best', tiempo: 3, linea: 'metro', tipo: 'nfta' },
      { slug: 'buffalo-fountain-plaza', tiempo: 3, linea: 'metro', tipo: 'nfta' },
    ],
  },
  'buffalo-fountain-plaza': {
    ciudad: 'buffalo',
    nombre: 'Fountain Plaza',
    lineas: ["metro"],
    adyacentes: [
      { slug: 'buffalo-theater', tiempo: 3, linea: 'metro', tipo: 'nfta' },
      { slug: 'buffalo-church', tiempo: 3, linea: 'metro', tipo: 'nfta' },
    ],
  },
  'buffalo-church': {
    ciudad: 'buffalo',
    nombre: 'Church',
    lineas: ["metro"],
    adyacentes: [
      { slug: 'buffalo-fountain-plaza', tiempo: 3, linea: 'metro', tipo: 'nfta' },
      { slug: 'buffalo-seneca', tiempo: 3, linea: 'metro', tipo: 'nfta' },
    ],
  },
  'buffalo-seneca': {
    ciudad: 'buffalo',
    nombre: 'Seneca',
    lineas: ["metro"],
    adyacentes: [
      { slug: 'buffalo-church', tiempo: 3, linea: 'metro', tipo: 'nfta' },
      { slug: 'buffalo-erie-canal-harbor', tiempo: 3, linea: 'metro', tipo: 'nfta' },
    ],
  },
  'buffalo-erie-canal-harbor': {
    ciudad: 'buffalo',
    nombre: 'Erie Canal Harbor',
    lineas: ["metro"],
    adyacentes: [
      { slug: 'buffalo-seneca', tiempo: 3, linea: 'metro', tipo: 'nfta' },
      { slug: 'buffalo-south-campus', tiempo: 3, linea: 'metro', tipo: 'nfta' },
    ],
  },
  'buffalo-south-campus': {
    ciudad: 'buffalo',
    nombre: 'South Campus',
    lineas: ["metro"],
    adyacentes: [
      { slug: 'buffalo-erie-canal-harbor', tiempo: 3, linea: 'metro', tipo: 'nfta' },
    ],
  },
};
