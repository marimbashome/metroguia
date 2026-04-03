export const grafoSaltLakeCity = {
  // BLUE LINE
  'slc-salt-lake-central': {
    ciudad: 'salt-lake-city',
    nombre: 'Salt Lake Central',
    lineas: ['blue', 'red', 'green', 'frontrunner'],
    adyacentes: [
      { slug: 'slc-old-greektown', tiempo: 2, linea: 'blue', tipo: 'trax' },
      { slug: 'slc-north-temple', tiempo: 3, linea: 'green', tipo: 'trax' },
      { slug: 'slc-murray-central-fr', tiempo: 15, linea: 'frontrunner', tipo: 'frontrunner' },
    ]
  },
  'slc-old-greektown': {
    ciudad: 'salt-lake-city',
    nombre: 'Old Greektown',
    lineas: ['blue', 'red', 'green'],
    adyacentes: [
      { slug: 'slc-salt-lake-central', tiempo: 2, linea: 'blue', tipo: 'trax' },
      { slug: 'slc-planetarium', tiempo: 2, linea: 'blue', tipo: 'trax' },
    ]
  },
  'slc-planetarium': {
    ciudad: 'salt-lake-city',
    nombre: 'Planetarium',
    lineas: ['blue', 'red'],
    adyacentes: [
      { slug: 'slc-old-greektown', tiempo: 2, linea: 'blue', tipo: 'trax' },
      { slug: 'slc-arena', tiempo: 2, linea: 'blue', tipo: 'trax' },
    ]
  },
  'slc-arena': {
    ciudad: 'salt-lake-city',
    nombre: 'Arena',
    lineas: ['blue', 'red', 'green'],
    adyacentes: [
      { slug: 'slc-planetarium', tiempo: 2, linea: 'blue', tipo: 'trax' },
      { slug: 'slc-temple-square', tiempo: 2, linea: 'blue', tipo: 'trax' },
    ]
  },
  'slc-temple-square': {
    ciudad: 'salt-lake-city',
    nombre: 'Temple Square',
    lineas: ['blue', 'red', 'green'],
    adyacentes: [
      { slug: 'slc-arena', tiempo: 2, linea: 'blue', tipo: 'trax' },
      { slug: 'slc-city-center', tiempo: 2, linea: 'blue', tipo: 'trax' },
    ]
  },
  'slc-city-center': {
    ciudad: 'salt-lake-city',
    nombre: 'City Center',
    lineas: ['blue', 'red', 'green'],
    adyacentes: [
      { slug: 'slc-temple-square', tiempo: 2, linea: 'blue', tipo: 'trax' },
      { slug: 'slc-gallivan-plaza', tiempo: 1, linea: 'blue', tipo: 'trax' },
    ]
  },
  'slc-gallivan-plaza': {
    ciudad: 'salt-lake-city',
    nombre: 'Gallivan Plaza',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'slc-city-center', tiempo: 1, linea: 'blue', tipo: 'trax' },
      { slug: 'slc-courthouse', tiempo: 2, linea: 'blue', tipo: 'trax' },
    ]
  },
  'slc-courthouse': {
    ciudad: 'salt-lake-city',
    nombre: 'Courthouse',
    lineas: ['blue', 'red'],
    adyacentes: [
      { slug: 'slc-gallivan-plaza', tiempo: 2, linea: 'blue', tipo: 'trax' },
      { slug: 'slc-library', tiempo: 2, linea: 'blue', tipo: 'trax' },
    ]
  },
  'slc-library': {
    ciudad: 'salt-lake-city',
    nombre: 'Library',
    lineas: ['blue', 'red'],
    adyacentes: [
      { slug: 'slc-courthouse', tiempo: 2, linea: 'blue', tipo: 'trax' },
      { slug: 'slc-trolley-square', tiempo: 3, linea: 'blue', tipo: 'trax' },
    ]
  },
  'slc-trolley-square': {
    ciudad: 'salt-lake-city',
    nombre: 'Trolley Square',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'slc-library', tiempo: 3, linea: 'blue', tipo: 'trax' },
      { slug: 'slc-900-south', tiempo: 3, linea: 'blue', tipo: 'trax' },
    ]
  },
  'slc-900-south': {
    ciudad: 'salt-lake-city',
    nombre: '900 South',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'slc-trolley-square', tiempo: 3, linea: 'blue', tipo: 'trax' },
      { slug: 'slc-central-pointe', tiempo: 3, linea: 'blue', tipo: 'trax' },
      { slug: 'slc-900-east', tiempo: 5, linea: 'red', tipo: 'transbordo' }]
  },
  'slc-central-pointe': {
    ciudad: 'salt-lake-city',
    nombre: 'Central Pointe',
    lineas: ['blue', 's-line'],
    adyacentes: [
      { slug: 'slc-900-south', tiempo: 3, linea: 'blue', tipo: 'trax' },
      { slug: 'slc-millcreek', tiempo: 3, linea: 'blue', tipo: 'trax' },
      { slug: 'slc-central-pointe-s', tiempo: 1, linea: 's-line', tipo: 'streetcar' },
    ]
  },
  'slc-millcreek': {
    ciudad: 'salt-lake-city',
    nombre: 'Millcreek',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'slc-central-pointe', tiempo: 3, linea: 'blue', tipo: 'trax' },
      { slug: 'slc-meadowbrook', tiempo: 3, linea: 'blue', tipo: 'trax' },
    ]
  },
  'slc-meadowbrook': {
    ciudad: 'salt-lake-city',
    nombre: 'Meadowbrook',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'slc-millcreek', tiempo: 3, linea: 'blue', tipo: 'trax' },
      { slug: 'slc-murray-central', tiempo: 4, linea: 'blue', tipo: 'trax' },
    ]
  },
  'slc-murray-central': {
    ciudad: 'salt-lake-city',
    nombre: 'Murray Central',
    lineas: ['blue', 'red', 'frontrunner'],
    adyacentes: [
      { slug: 'slc-meadowbrook', tiempo: 4, linea: 'blue', tipo: 'trax' },
      { slug: 'slc-fashion-place-west', tiempo: 3, linea: 'blue', tipo: 'trax' },
      { slug: 'slc-south-jordan-fr', tiempo: 10, linea: 'frontrunner', tipo: 'frontrunner' },
      { slug: 'slc-murray-central-fr', tiempo: 5, linea: 'red', tipo: 'transbordo' },
      { slug: 'slc-murray-north', tiempo: 5, linea: 'blue', tipo: 'transbordo' }]
  },
  'slc-fashion-place-west': {
    ciudad: 'salt-lake-city',
    nombre: 'Fashion Place West',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'slc-murray-central', tiempo: 3, linea: 'blue', tipo: 'trax' },
      { slug: 'slc-murray-north', tiempo: 2, linea: 'blue', tipo: 'trax' },
    ]
  },
  'slc-murray-north': {
    ciudad: 'salt-lake-city',
    nombre: 'Murray North',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'slc-fashion-place-west', tiempo: 2, linea: 'blue', tipo: 'trax' },
      { slug: 'slc-bingham-junction', tiempo: 3, linea: 'blue', tipo: 'trax' },
      { slug: 'slc-murray-central', tiempo: 5, linea: 'frontrunner', tipo: 'transbordo' }]
  },
  'slc-bingham-junction': {
    ciudad: 'salt-lake-city',
    nombre: 'Bingham Junction',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'slc-murray-north', tiempo: 3, linea: 'blue', tipo: 'trax' },
      { slug: 'slc-midvale-fort-union', tiempo: 3, linea: 'blue', tipo: 'trax' },
    ]
  },
  'slc-midvale-fort-union': {
    ciudad: 'salt-lake-city',
    nombre: 'Midvale Fort Union',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'slc-bingham-junction', tiempo: 3, linea: 'blue', tipo: 'trax' },
      { slug: 'slc-midvale-center', tiempo: 3, linea: 'blue', tipo: 'trax' },
    ]
  },
  'slc-midvale-center': {
    ciudad: 'salt-lake-city',
    nombre: 'Midvale Center',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'slc-midvale-fort-union', tiempo: 3, linea: 'blue', tipo: 'trax' },
      { slug: 'slc-historic-sandy', tiempo: 5, linea: 'blue', tipo: 'trax' },
    ]
  },
  'slc-historic-sandy': {
    ciudad: 'salt-lake-city',
    nombre: 'Historic Sandy',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'slc-midvale-center', tiempo: 5, linea: 'blue', tipo: 'trax' },
      { slug: 'slc-sandy-expo', tiempo: 3, linea: 'blue', tipo: 'trax' },
    ]
  },
  'slc-sandy-expo': {
    ciudad: 'salt-lake-city',
    nombre: 'Sandy Expo',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'slc-historic-sandy', tiempo: 3, linea: 'blue', tipo: 'trax' },
      { slug: 'slc-sandy-civic-center', tiempo: 3, linea: 'blue', tipo: 'trax' },
    ]
  },
  'slc-sandy-civic-center': {
    ciudad: 'salt-lake-city',
    nombre: 'Sandy Civic Center',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'slc-sandy-expo', tiempo: 3, linea: 'blue', tipo: 'trax' },
      { slug: 'slc-crescent-view', tiempo: 3, linea: 'blue', tipo: 'trax' },
    ]
  },
  'slc-crescent-view': {
    ciudad: 'salt-lake-city',
    nombre: 'Crescent View',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'slc-sandy-civic-center', tiempo: 3, linea: 'blue', tipo: 'trax' },
      { slug: 'slc-kimballs-lane', tiempo: 3, linea: 'blue', tipo: 'trax' },
    ]
  },
  'slc-kimballs-lane': {
    ciudad: 'salt-lake-city',
    nombre: "Kimball's Lane",
    lineas: ['blue'],
    adyacentes: [
      { slug: 'slc-crescent-view', tiempo: 3, linea: 'blue', tipo: 'trax' },
      { slug: 'slc-draper-town-center', tiempo: 3, linea: 'blue', tipo: 'trax' },
    ]
  },
  'slc-draper-town-center': {
    ciudad: 'salt-lake-city',
    nombre: 'Draper Town Center',
    lineas: ['blue', 'red'],
    adyacentes: [
      { slug: 'slc-kimballs-lane', tiempo: 3, linea: 'blue', tipo: 'trax' },
    ]
  },

  // RED LINE
  'slc-university-medical-center': {
    ciudad: 'salt-lake-city',
    nombre: 'University Medical Center',
    lineas: ['red'],
    adyacentes: [
      { slug: 'slc-fort-douglas', tiempo: 3, linea: 'red', tipo: 'trax' },
    ]
  },
  'slc-fort-douglas': {
    ciudad: 'salt-lake-city',
    nombre: 'Fort Douglas',
    lineas: ['red'],
    adyacentes: [
      { slug: 'slc-university-medical-center', tiempo: 3, linea: 'red', tipo: 'trax' },
      { slug: 'slc-stadium', tiempo: 3, linea: 'red', tipo: 'trax' },
    ]
  },
  'slc-stadium': {
    ciudad: 'salt-lake-city',
    nombre: 'Stadium',
    lineas: ['red'],
    adyacentes: [
      { slug: 'slc-fort-douglas', tiempo: 3, linea: 'red', tipo: 'trax' },
      { slug: 'slc-900-east', tiempo: 3, linea: 'red', tipo: 'trax' },
    ]
  },
  'slc-900-east': {
    ciudad: 'salt-lake-city',
    nombre: '900 East',
    lineas: ['red'],
    adyacentes: [
      { slug: 'slc-stadium', tiempo: 3, linea: 'red', tipo: 'trax' },
      { slug: 'slc-500-east', tiempo: 2, linea: 'red', tipo: 'trax' },
      { slug: 'slc-900-south', tiempo: 5, linea: 'blue', tipo: 'transbordo' }]
  },
  'slc-500-east': {
    ciudad: 'salt-lake-city',
    nombre: '500 East',
    lineas: ['red'],
    adyacentes: [
      { slug: 'slc-900-east', tiempo: 2, linea: 'red', tipo: 'trax' },
      { slug: 'slc-temple-square', tiempo: 4, linea: 'red', tipo: 'trax' },
    ]
  },
  'slc-west-jordan': {
    ciudad: 'salt-lake-city',
    nombre: 'West Jordan',
    lineas: ['red'],
    adyacentes: [
      { slug: 'slc-south-jordan', tiempo: 5, linea: 'red', tipo: 'trax' },
    ]
  },
  'slc-south-jordan': {
    ciudad: 'salt-lake-city',
    nombre: 'South Jordan',
    lineas: ['red', 'frontrunner'],
    adyacentes: [
      { slug: 'slc-west-jordan', tiempo: 5, linea: 'red', tipo: 'trax' },
      { slug: 'slc-daybreak-parkway', tiempo: 5, linea: 'red', tipo: 'trax' },
      { slug: 'slc-draper-fr', tiempo: 8, linea: 'frontrunner', tipo: 'frontrunner' },
      { slug: 'slc-south-jordan-fr', tiempo: 5, linea: 'red', tipo: 'transbordo' }]
  },
  'slc-daybreak-parkway': {
    ciudad: 'salt-lake-city',
    nombre: 'Daybreak Parkway',
    lineas: ['red'],
    adyacentes: [
      { slug: 'slc-south-jordan', tiempo: 5, linea: 'red', tipo: 'trax' },
    ]
  },

  // GREEN LINE
  'slc-airport-terminal-1': {
    ciudad: 'salt-lake-city',
    nombre: 'Airport Terminal 1',
    lineas: ['green'],
    adyacentes: [
      { slug: 'slc-north-temple-bridge', tiempo: 8, linea: 'green', tipo: 'trax' },
    ]
  },
  'slc-north-temple-bridge': {
    ciudad: 'salt-lake-city',
    nombre: 'North Temple Bridge',
    lineas: ['green', 'blue', 'red'],
    adyacentes: [
      { slug: 'slc-airport-terminal-1', tiempo: 8, linea: 'green', tipo: 'trax' },
      { slug: 'slc-jackson-euclid', tiempo: 4, linea: 'green', tipo: 'trax' },
      { slug: 'slc-salt-lake-central', tiempo: 3, linea: 'green', tipo: 'trax' },
      { slug: 'slc-north-temple', tiempo: 5, linea: 'green', tipo: 'transbordo' }]
  },
  'slc-jackson-euclid': {
    ciudad: 'salt-lake-city',
    nombre: 'Jackson/Euclid',
    lineas: ['green'],
    adyacentes: [
      { slug: 'slc-north-temple-bridge', tiempo: 4, linea: 'green', tipo: 'trax' },
      { slug: 'slc-fairpark', tiempo: 3, linea: 'green', tipo: 'trax' },
    ]
  },
  'slc-fairpark': {
    ciudad: 'salt-lake-city',
    nombre: 'Fairpark',
    lineas: ['green'],
    adyacentes: [
      { slug: 'slc-jackson-euclid', tiempo: 3, linea: 'green', tipo: 'trax' },
      { slug: 'slc-power', tiempo: 3, linea: 'green', tipo: 'trax' },
    ]
  },
  'slc-power': {
    ciudad: 'salt-lake-city',
    nombre: 'Power',
    lineas: ['green'],
    adyacentes: [
      { slug: 'slc-fairpark', tiempo: 3, linea: 'green', tipo: 'trax' },
      { slug: 'slc-1940-west', tiempo: 4, linea: 'green', tipo: 'trax' },
    ]
  },
  'slc-1940-west': {
    ciudad: 'salt-lake-city',
    nombre: '1940 West',
    lineas: ['green'],
    adyacentes: [
      { slug: 'slc-power', tiempo: 4, linea: 'green', tipo: 'trax' },
      { slug: 'slc-decker-lake', tiempo: 3, linea: 'green', tipo: 'trax' },
    ]
  },
  'slc-decker-lake': {
    ciudad: 'salt-lake-city',
    nombre: 'Decker Lake',
    lineas: ['green'],
    adyacentes: [
      { slug: 'slc-1940-west', tiempo: 3, linea: 'green', tipo: 'trax' },
      { slug: 'slc-west-valley-central', tiempo: 4, linea: 'green', tipo: 'trax' },
    ]
  },
  'slc-west-valley-central': {
    ciudad: 'salt-lake-city',
    nombre: 'West Valley Central',
    lineas: ['green'],
    adyacentes: [
      { slug: 'slc-decker-lake', tiempo: 4, linea: 'green', tipo: 'trax' },
    ]
  },

  // S-LINE
  'slc-central-pointe-s': {
    ciudad: 'salt-lake-city',
    nombre: 'Central Pointe (S-Line)',
    lineas: ['s-line', 'blue'],
    adyacentes: [
      { slug: 'slc-south-temple-s', tiempo: 5, linea: 's-line', tipo: 'streetcar' },
      { slug: 'slc-central-pointe', tiempo: 5, linea: 's-line', tipo: 'transbordo' }]
  },
  'slc-south-temple-s': {
    ciudad: 'salt-lake-city',
    nombre: 'South Temple (S-Line)',
    lineas: ['s-line'],
    adyacentes: [
      { slug: 'slc-central-pointe-s', tiempo: 5, linea: 's-line', tipo: 'streetcar' },
    ]
  },

  // FRONTRUNNER
  'slc-ogden': {
    ciudad: 'salt-lake-city',
    nombre: 'Ogden',
    lineas: ['frontrunner'],
    adyacentes: [
      { slug: 'slc-roy', tiempo: 8, linea: 'frontrunner', tipo: 'frontrunner' },
    ]
  },
  'slc-roy': {
    ciudad: 'salt-lake-city',
    nombre: 'Roy',
    lineas: ['frontrunner'],
    adyacentes: [
      { slug: 'slc-ogden', tiempo: 8, linea: 'frontrunner', tipo: 'frontrunner' },
      { slug: 'slc-clearfield', tiempo: 5, linea: 'frontrunner', tipo: 'frontrunner' },
    ]
  },
  'slc-clearfield': {
    ciudad: 'salt-lake-city',
    nombre: 'Clearfield',
    lineas: ['frontrunner'],
    adyacentes: [
      { slug: 'slc-roy', tiempo: 5, linea: 'frontrunner', tipo: 'frontrunner' },
      { slug: 'slc-layton', tiempo: 5, linea: 'frontrunner', tipo: 'frontrunner' },
    ]
  },
  'slc-layton': {
    ciudad: 'salt-lake-city',
    nombre: 'Layton',
    lineas: ['frontrunner'],
    adyacentes: [
      { slug: 'slc-clearfield', tiempo: 5, linea: 'frontrunner', tipo: 'frontrunner' },
      { slug: 'slc-farmington', tiempo: 5, linea: 'frontrunner', tipo: 'frontrunner' },
    ]
  },
  'slc-farmington': {
    ciudad: 'salt-lake-city',
    nombre: 'Farmington',
    lineas: ['frontrunner'],
    adyacentes: [
      { slug: 'slc-layton', tiempo: 5, linea: 'frontrunner', tipo: 'frontrunner' },
      { slug: 'slc-woods-cross', tiempo: 5, linea: 'frontrunner', tipo: 'frontrunner' },
    ]
  },
  'slc-woods-cross': {
    ciudad: 'salt-lake-city',
    nombre: 'Woods Cross',
    lineas: ['frontrunner'],
    adyacentes: [
      { slug: 'slc-farmington', tiempo: 5, linea: 'frontrunner', tipo: 'frontrunner' },
      { slug: 'slc-north-temple', tiempo: 8, linea: 'frontrunner', tipo: 'frontrunner' },
    ]
  },
  'slc-north-temple': {
    ciudad: 'salt-lake-city',
    nombre: 'North Temple',
    lineas: ['frontrunner', 'green'],
    adyacentes: [
      { slug: 'slc-woods-cross', tiempo: 8, linea: 'frontrunner', tipo: 'frontrunner' },
      { slug: 'slc-murray-central-fr', tiempo: 10, linea: 'frontrunner', tipo: 'frontrunner' },
      { slug: 'slc-north-temple-bridge', tiempo: 5, linea: 'red', tipo: 'transbordo' }]
  },
  'slc-murray-central-fr': {
    ciudad: 'salt-lake-city',
    nombre: 'Murray Central (FrontRunner)',
    lineas: ['frontrunner', 'blue', 'red'],
    adyacentes: [
      { slug: 'slc-north-temple', tiempo: 10, linea: 'frontrunner', tipo: 'frontrunner' },
      { slug: 'slc-south-jordan-fr', tiempo: 10, linea: 'frontrunner', tipo: 'frontrunner' },
      { slug: 'slc-murray-central', tiempo: 5, linea: 'frontrunner', tipo: 'transbordo' }]
  },
  'slc-south-jordan-fr': {
    ciudad: 'salt-lake-city',
    nombre: 'South Jordan (FrontRunner)',
    lineas: ['frontrunner', 'red'],
    adyacentes: [
      { slug: 'slc-murray-central-fr', tiempo: 10, linea: 'frontrunner', tipo: 'frontrunner' },
      { slug: 'slc-draper-fr', tiempo: 8, linea: 'frontrunner', tipo: 'frontrunner' },
      { slug: 'slc-south-jordan', tiempo: 5, linea: 'frontrunner', tipo: 'transbordo' }]
  },
  'slc-draper-fr': {
    ciudad: 'salt-lake-city',
    nombre: 'Draper (FrontRunner)',
    lineas: ['frontrunner'],
    adyacentes: [
      { slug: 'slc-south-jordan-fr', tiempo: 8, linea: 'frontrunner', tipo: 'frontrunner' },
      { slug: 'slc-lehi', tiempo: 12, linea: 'frontrunner', tipo: 'frontrunner' },
    ]
  },
  'slc-lehi': {
    ciudad: 'salt-lake-city',
    nombre: 'Lehi',
    lineas: ['frontrunner'],
    adyacentes: [
      { slug: 'slc-draper-fr', tiempo: 12, linea: 'frontrunner', tipo: 'frontrunner' },
      { slug: 'slc-american-fork', tiempo: 8, linea: 'frontrunner', tipo: 'frontrunner' },
    ]
  },
  'slc-american-fork': {
    ciudad: 'salt-lake-city',
    nombre: 'American Fork',
    lineas: ['frontrunner'],
    adyacentes: [
      { slug: 'slc-lehi', tiempo: 8, linea: 'frontrunner', tipo: 'frontrunner' },
      { slug: 'slc-vineyard', tiempo: 5, linea: 'frontrunner', tipo: 'frontrunner' },
    ]
  },
  'slc-vineyard': {
    ciudad: 'salt-lake-city',
    nombre: 'Vineyard',
    lineas: ['frontrunner'],
    adyacentes: [
      { slug: 'slc-american-fork', tiempo: 5, linea: 'frontrunner', tipo: 'frontrunner' },
      { slug: 'slc-orem', tiempo: 8, linea: 'frontrunner', tipo: 'frontrunner' },
    ]
  },
  'slc-orem': {
    ciudad: 'salt-lake-city',
    nombre: 'Orem',
    lineas: ['frontrunner'],
    adyacentes: [
      { slug: 'slc-vineyard', tiempo: 8, linea: 'frontrunner', tipo: 'frontrunner' },
      { slug: 'slc-provo-central', tiempo: 8, linea: 'frontrunner', tipo: 'frontrunner' },
    ]
  },
  'slc-provo-central': {
    ciudad: 'salt-lake-city',
    nombre: 'Provo Central',
    lineas: ['frontrunner'],
    adyacentes: [
      { slug: 'slc-orem', tiempo: 8, linea: 'frontrunner', tipo: 'frontrunner' },
    ]
  }
};
