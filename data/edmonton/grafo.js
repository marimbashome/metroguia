export const grafoEdmonton = {
  'clareview': {
    ciudad: 'edmonton',
    nombre: 'Clareview',
    lineas: ["capital"],
    adyacentes: [
      { slug: 'belvedere', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
    ],
  },
  'belvedere': {
    ciudad: 'edmonton',
    nombre: 'Belvedere',
    lineas: ["capital"],
    adyacentes: [
      { slug: 'clareview', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
      { slug: 'coliseum', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
    ],
  },
  'coliseum': {
    ciudad: 'edmonton',
    nombre: 'Coliseum',
    lineas: ["capital"],
    adyacentes: [
      { slug: 'belvedere', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
      { slug: 'stadium', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
    ],
  },
  'stadium': {
    ciudad: 'edmonton',
    nombre: 'Stadium',
    lineas: ["capital"],
    adyacentes: [
      { slug: 'coliseum', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
      { slug: 'churchill', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
    ],
  },
  'churchill': {
    ciudad: 'edmonton',
    nombre: 'Churchill',
    lineas: ["capital"],
    adyacentes: [
      { slug: 'stadium', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
      { slug: 'central', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
    ],
  },
  'central': {
    ciudad: 'edmonton',
    nombre: 'Central',
    lineas: ["capital"],
    adyacentes: [
      { slug: 'churchill', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
      { slug: 'bay-enterprise-square', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
    ],
  },
  'bay-enterprise-square': {
    ciudad: 'edmonton',
    nombre: 'Bay Enterprise Square',
    lineas: ["capital"],
    adyacentes: [
      { slug: 'central', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
      { slug: 'corona', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
    ],
  },
  'corona': {
    ciudad: 'edmonton',
    nombre: 'Corona',
    lineas: ["capital"],
    adyacentes: [
      { slug: 'bay-enterprise-square', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
      { slug: 'health-sciences-jubilee', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
    ],
  },
  'health-sciences-jubilee': {
    ciudad: 'edmonton',
    nombre: 'Health Sciences Jubilee',
    lineas: ["capital"],
    adyacentes: [
      { slug: 'corona', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
      { slug: 'university', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
    ],
  },
  'university': {
    ciudad: 'edmonton',
    nombre: 'University',
    lineas: ["capital"],
    adyacentes: [
      { slug: 'health-sciences-jubilee', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
      { slug: 'south-campus', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
    ],
  },
  'south-campus': {
    ciudad: 'edmonton',
    nombre: 'South Campus',
    lineas: ["capital"],
    adyacentes: [
      { slug: 'university', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
      { slug: 'southgate', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
    ],
  },
  'southgate': {
    ciudad: 'edmonton',
    nombre: 'Southgate',
    lineas: ["capital"],
    adyacentes: [
      { slug: 'south-campus', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
      { slug: 'century-park', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
    ],
  },
  'century-park': {
    ciudad: 'edmonton',
    nombre: 'Century Park',
    lineas: ["capital"],
    adyacentes: [
      { slug: 'southgate', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
      { slug: 'nait', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
    ],
  },
  'nait': {
    ciudad: 'edmonton',
    nombre: 'Nait',
    lineas: ["capital"],
    adyacentes: [
      { slug: 'century-park', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
      { slug: 'kingsway-royal-alex', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
    ],
  },
  'kingsway-royal-alex': {
    ciudad: 'edmonton',
    nombre: 'Kingsway Royal Alex',
    lineas: ["capital"],
    adyacentes: [
      { slug: 'nait', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
      { slug: 'macewan', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
    ],
  },
  'macewan': {
    ciudad: 'edmonton',
    nombre: 'Macewan',
    lineas: ["capital"],
    adyacentes: [
      { slug: 'kingsway-royal-alex', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
      { slug: 'government-centre', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
    ],
  },
  'government-centre': {
    ciudad: 'edmonton',
    nombre: 'Government Centre',
    lineas: ["capital"],
    adyacentes: [
      { slug: 'macewan', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
      { slug: 'grandin', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
    ],
  },
  'grandin': {
    ciudad: 'edmonton',
    nombre: 'Grandin',
    lineas: ["capital"],
    adyacentes: [
      { slug: 'government-centre', tiempo: 3, linea: 'capital', tipo: 'edmonton-lrt' },
    ],
  },
  'mill-woods': {
    ciudad: 'edmonton',
    nombre: 'Mill Woods',
    lineas: ["valley"],
    adyacentes: [
      { slug: 'grey-nuns', tiempo: 3, linea: 'valley', tipo: 'edmonton-lrt' },
    ],
  },
  'grey-nuns': {
    ciudad: 'edmonton',
    nombre: 'Grey Nuns',
    lineas: ["valley"],
    adyacentes: [
      { slug: 'mill-woods', tiempo: 3, linea: 'valley', tipo: 'edmonton-lrt' },
      { slug: 'meadows', tiempo: 3, linea: 'valley', tipo: 'edmonton-lrt' },
    ],
  },
  'meadows': {
    ciudad: 'edmonton',
    nombre: 'Meadows',
    lineas: ["valley"],
    adyacentes: [
      { slug: 'grey-nuns', tiempo: 3, linea: 'valley', tipo: 'edmonton-lrt' },
      { slug: 'bonnie-doon', tiempo: 3, linea: 'valley', tipo: 'edmonton-lrt' },
    ],
  },
  'bonnie-doon': {
    ciudad: 'edmonton',
    nombre: 'Bonnie Doon',
    lineas: ["valley"],
    adyacentes: [
      { slug: 'meadows', tiempo: 3, linea: 'valley', tipo: 'edmonton-lrt' },
      { slug: 'holyrood', tiempo: 3, linea: 'valley', tipo: 'edmonton-lrt' },
    ],
  },
  'holyrood': {
    ciudad: 'edmonton',
    nombre: 'Holyrood',
    lineas: ["valley"],
    adyacentes: [
      { slug: 'bonnie-doon', tiempo: 3, linea: 'valley', tipo: 'edmonton-lrt' },
      { slug: 'muttart', tiempo: 3, linea: 'valley', tipo: 'edmonton-lrt' },
    ],
  },
  'muttart': {
    ciudad: 'edmonton',
    nombre: 'Muttart',
    lineas: ["valley"],
    adyacentes: [
      { slug: 'holyrood', tiempo: 3, linea: 'valley', tipo: 'edmonton-lrt' },
      { slug: 'quarters', tiempo: 3, linea: 'valley', tipo: 'edmonton-lrt' },
    ],
  },
  'quarters': {
    ciudad: 'edmonton',
    nombre: 'Quarters',
    lineas: ["valley"],
    adyacentes: [
      { slug: 'muttart', tiempo: 3, linea: 'valley', tipo: 'edmonton-lrt' },
      { slug: 'downtown-valley', tiempo: 3, linea: 'valley', tipo: 'edmonton-lrt' },
    ],
  },
  'downtown-valley': {
    ciudad: 'edmonton',
    nombre: 'Downtown Valley',
    lineas: ["valley"],
    adyacentes: [
      { slug: 'quarters', tiempo: 3, linea: 'valley', tipo: 'edmonton-lrt' },
      { slug: 'davies', tiempo: 3, linea: 'valley', tipo: 'edmonton-lrt' },
    ],
  },
  'davies': {
    ciudad: 'edmonton',
    nombre: 'Davies',
    lineas: ["valley"],
    adyacentes: [
      { slug: 'downtown-valley', tiempo: 3, linea: 'valley', tipo: 'edmonton-lrt' },
      { slug: 'strathearn', tiempo: 3, linea: 'valley', tipo: 'edmonton-lrt' },
    ],
  },
  'strathearn': {
    ciudad: 'edmonton',
    nombre: 'Strathearn',
    lineas: ["valley"],
    adyacentes: [
      { slug: 'davies', tiempo: 3, linea: 'valley', tipo: 'edmonton-lrt' },
      { slug: 'wagner', tiempo: 3, linea: 'valley', tipo: 'edmonton-lrt' },
    ],
  },
  'wagner': {
    ciudad: 'edmonton',
    nombre: 'Wagner',
    lineas: ["valley"],
    adyacentes: [
      { slug: 'strathearn', tiempo: 3, linea: 'valley', tipo: 'edmonton-lrt' },
      { slug: 'ritchie', tiempo: 3, linea: 'valley', tipo: 'edmonton-lrt' },
    ],
  },
  'ritchie': {
    ciudad: 'edmonton',
    nombre: 'Ritchie',
    lineas: ["valley"],
    adyacentes: [
      { slug: 'wagner', tiempo: 3, linea: 'valley', tipo: 'edmonton-lrt' },
    ],
  },
};
