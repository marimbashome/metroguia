export const grafoHonolulu = {
  'honolulu-east-kapolei': {
    ciudad: 'honolulu',
    nombre: 'East Kapolei',
    lineas: ["skyline"],
    adyacentes: [
      { slug: 'honolulu-uh-west-oahu', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
    ],
  },
  'honolulu-uh-west-oahu': {
    ciudad: 'honolulu',
    nombre: 'Uh West Oahu',
    lineas: ["skyline"],
    adyacentes: [
      { slug: 'honolulu-east-kapolei', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
      { slug: 'honolulu-ho-opili', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
    ],
  },
  'honolulu-ho-opili': {
    ciudad: 'honolulu',
    nombre: 'Ho Opili',
    lineas: ["skyline"],
    adyacentes: [
      { slug: 'honolulu-uh-west-oahu', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
      { slug: 'honolulu-west-loch', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
    ],
  },
  'honolulu-west-loch': {
    ciudad: 'honolulu',
    nombre: 'West Loch',
    lineas: ["skyline"],
    adyacentes: [
      { slug: 'honolulu-ho-opili', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
      { slug: 'honolulu-waipahu', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
    ],
  },
  'honolulu-waipahu': {
    ciudad: 'honolulu',
    nombre: 'Waipahu',
    lineas: ["skyline"],
    adyacentes: [
      { slug: 'honolulu-west-loch', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
      { slug: 'honolulu-leeward-cc', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
    ],
  },
  'honolulu-leeward-cc': {
    ciudad: 'honolulu',
    nombre: 'Leeward Cc',
    lineas: ["skyline"],
    adyacentes: [
      { slug: 'honolulu-waipahu', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
      { slug: 'honolulu-pearl-highlands', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
    ],
  },
  'honolulu-pearl-highlands': {
    ciudad: 'honolulu',
    nombre: 'Pearl Highlands',
    lineas: ["skyline"],
    adyacentes: [
      { slug: 'honolulu-leeward-cc', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
      { slug: 'honolulu-pearlridge', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
    ],
  },
  'honolulu-pearlridge': {
    ciudad: 'honolulu',
    nombre: 'Pearlridge',
    lineas: ["skyline"],
    adyacentes: [
      { slug: 'honolulu-pearl-highlands', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
      { slug: 'honolulu-aloha-stadium', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
    ],
  },
  'honolulu-aloha-stadium': {
    ciudad: 'honolulu',
    nombre: 'Aloha Stadium',
    lineas: ["skyline"],
    adyacentes: [
      { slug: 'honolulu-pearlridge', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
      { slug: 'honolulu-pearl-harbor', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
    ],
  },
  'honolulu-pearl-harbor': {
    ciudad: 'honolulu',
    nombre: 'Pearl Harbor',
    lineas: ["skyline"],
    adyacentes: [
      { slug: 'honolulu-aloha-stadium', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
      { slug: 'honolulu-daniel-inouye-airport', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
    ],
  },
  'honolulu-daniel-inouye-airport': {
    ciudad: 'honolulu',
    nombre: 'Daniel Inouye Airport',
    lineas: ["skyline"],
    adyacentes: [
      { slug: 'honolulu-pearl-harbor', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
      { slug: 'honolulu-lagoon-drive', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
    ],
  },
  'honolulu-lagoon-drive': {
    ciudad: 'honolulu',
    nombre: 'Lagoon Drive',
    lineas: ["skyline"],
    adyacentes: [
      { slug: 'honolulu-daniel-inouye-airport', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
      { slug: 'honolulu-middle-street', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
    ],
  },
  'honolulu-middle-street': {
    ciudad: 'honolulu',
    nombre: 'Middle Street',
    lineas: ["skyline"],
    adyacentes: [
      { slug: 'honolulu-lagoon-drive', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
      { slug: 'honolulu-kalihi', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
    ],
  },
  'honolulu-kalihi': {
    ciudad: 'honolulu',
    nombre: 'Kalihi',
    lineas: ["skyline"],
    adyacentes: [
      { slug: 'honolulu-middle-street', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
      { slug: 'honolulu-kapalama', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
    ],
  },
  'honolulu-kapalama': {
    ciudad: 'honolulu',
    nombre: 'Kapalama',
    lineas: ["skyline"],
    adyacentes: [
      { slug: 'honolulu-kalihi', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
      { slug: 'honolulu-iwilei', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
    ],
  },
  'honolulu-iwilei': {
    ciudad: 'honolulu',
    nombre: 'Iwilei',
    lineas: ["skyline"],
    adyacentes: [
      { slug: 'honolulu-kapalama', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
      { slug: 'honolulu-chinatown', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
    ],
  },
  'honolulu-chinatown': {
    ciudad: 'honolulu',
    nombre: 'Chinatown',
    lineas: ["skyline"],
    adyacentes: [
      { slug: 'honolulu-iwilei', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
      { slug: 'honolulu-downtown', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
    ],
  },
  'honolulu-downtown': {
    ciudad: 'honolulu',
    nombre: 'Downtown',
    lineas: ["skyline"],
    adyacentes: [
      { slug: 'honolulu-chinatown', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
      { slug: 'honolulu-civic-center', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
    ],
  },
  'honolulu-civic-center': {
    ciudad: 'honolulu',
    nombre: 'Civic Center',
    lineas: ["skyline"],
    adyacentes: [
      { slug: 'honolulu-downtown', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
      { slug: 'honolulu-kakaako', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
    ],
  },
  'honolulu-kakaako': {
    ciudad: 'honolulu',
    nombre: 'Kakaako',
    lineas: ["skyline"],
    adyacentes: [
      { slug: 'honolulu-civic-center', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
      { slug: 'honolulu-ala-moana', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
    ],
  },
  'honolulu-ala-moana': {
    ciudad: 'honolulu',
    nombre: 'Ala Moana',
    lineas: ["skyline"],
    adyacentes: [
      { slug: 'honolulu-kakaako', tiempo: 3, linea: 'skyline', tipo: 'skyline' },
    ],
  },
};
