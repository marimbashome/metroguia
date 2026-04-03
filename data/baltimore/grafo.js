export const grafoBaltimore = {
  // SUBWAY STATIONS
  'baltimore-owings-mills': {
    ciudad: 'baltimore',
    nombre: 'Owings Mills',
    lineas: ['subway'],
    adyacentes: [
      { slug: 'baltimore-old-court', tiempo: 3, linea: 'subway', tipo: 'mta-subway' },
    ],
  },
  'baltimore-old-court': {
    ciudad: 'baltimore',
    nombre: 'Old Court',
    lineas: ['subway'],
    adyacentes: [
      { slug: 'baltimore-owings-mills', tiempo: 3, linea: 'subway', tipo: 'mta-subway' },
      { slug: 'baltimore-milford-mill', tiempo: 2, linea: 'subway', tipo: 'mta-subway' },
    ],
  },
  'baltimore-milford-mill': {
    ciudad: 'baltimore',
    nombre: 'Milford Mill',
    lineas: ['subway'],
    adyacentes: [
      { slug: 'baltimore-old-court', tiempo: 2, linea: 'subway', tipo: 'mta-subway' },
      { slug: 'baltimore-reisterstown-plaza', tiempo: 2, linea: 'subway', tipo: 'mta-subway' },
    ],
  },
  'baltimore-reisterstown-plaza': {
    ciudad: 'baltimore',
    nombre: 'Reisterstown Plaza',
    lineas: ['subway'],
    adyacentes: [
      { slug: 'baltimore-milford-mill', tiempo: 2, linea: 'subway', tipo: 'mta-subway' },
      { slug: 'baltimore-rogers-avenue', tiempo: 2, linea: 'subway', tipo: 'mta-subway' },
    ],
  },
  'baltimore-rogers-avenue': {
    ciudad: 'baltimore',
    nombre: 'Rogers Avenue',
    lineas: ['subway'],
    adyacentes: [
      { slug: 'baltimore-reisterstown-plaza', tiempo: 2, linea: 'subway', tipo: 'mta-subway' },
      { slug: 'baltimore-west-cold-spring', tiempo: 2, linea: 'subway', tipo: 'mta-subway' },
    ],
  },
  'baltimore-west-cold-spring': {
    ciudad: 'baltimore',
    nombre: 'West Cold Spring',
    lineas: ['subway'],
    adyacentes: [
      { slug: 'baltimore-rogers-avenue', tiempo: 2, linea: 'subway', tipo: 'mta-subway' },
      { slug: 'baltimore-mondawmin', tiempo: 2, linea: 'subway', tipo: 'mta-subway' },
    ],
  },
  'baltimore-mondawmin': {
    ciudad: 'baltimore',
    nombre: 'Mondawmin',
    lineas: ['subway', 'lightrail'],
    adyacentes: [
      { slug: 'baltimore-west-cold-spring', tiempo: 2, linea: 'subway', tipo: 'mta-subway' },
      { slug: 'baltimore-penn-north', tiempo: 2, linea: 'subway', tipo: 'mta-subway' },
      { slug: 'baltimore-north-avenue', tiempo: 3, linea: 'lightrail', tipo: 'transfer' },
    ],
  },
  'baltimore-penn-north': {
    ciudad: 'baltimore',
    nombre: 'Penn North',
    lineas: ['subway'],
    adyacentes: [
      { slug: 'baltimore-mondawmin', tiempo: 2, linea: 'subway', tipo: 'mta-subway' },
      { slug: 'baltimore-upton', tiempo: 2, linea: 'subway', tipo: 'mta-subway' },
    ],
  },
  'baltimore-upton': {
    ciudad: 'baltimore',
    nombre: 'Upton',
    lineas: ['subway'],
    adyacentes: [
      { slug: 'baltimore-penn-north', tiempo: 2, linea: 'subway', tipo: 'mta-subway' },
      { slug: 'baltimore-state-center', tiempo: 2, linea: 'subway', tipo: 'mta-subway' },
    ],
  },
  'baltimore-state-center': {
    ciudad: 'baltimore',
    nombre: 'State Center',
    lineas: ['subway'],
    adyacentes: [
      { slug: 'baltimore-upton', tiempo: 2, linea: 'subway', tipo: 'mta-subway' },
      { slug: 'baltimore-lexington-market', tiempo: 2, linea: 'subway', tipo: 'mta-subway' },
    ],
  },
  'baltimore-lexington-market': {
    ciudad: 'baltimore',
    nombre: 'Lexington Market',
    lineas: ['subway', 'lightrail'],
    adyacentes: [
      { slug: 'baltimore-state-center', tiempo: 2, linea: 'subway', tipo: 'mta-subway' },
      { slug: 'baltimore-charles-center', tiempo: 2, linea: 'subway', tipo: 'mta-subway' },
      { slug: 'baltimore-lexington-market-lr', tiempo: 4, linea: 'lightrail', tipo: 'transfer' },
    ],
  },
  'baltimore-charles-center': {
    ciudad: 'baltimore',
    nombre: 'Charles Center',
    lineas: ['subway'],
    adyacentes: [
      { slug: 'baltimore-lexington-market', tiempo: 2, linea: 'subway', tipo: 'mta-subway' },
      { slug: 'baltimore-shot-tower', tiempo: 2, linea: 'subway', tipo: 'mta-subway' },
    ],
  },
  'baltimore-shot-tower': {
    ciudad: 'baltimore',
    nombre: 'Shot Tower',
    lineas: ['subway'],
    adyacentes: [
      { slug: 'baltimore-charles-center', tiempo: 2, linea: 'subway', tipo: 'mta-subway' },
      { slug: 'baltimore-johns-hopkins-hospital', tiempo: 3, linea: 'subway', tipo: 'mta-subway' },
    ],
  },
  'baltimore-johns-hopkins-hospital': {
    ciudad: 'baltimore',
    nombre: 'Johns Hopkins Hospital',
    lineas: ['subway'],
    adyacentes: [
      { slug: 'baltimore-shot-tower', tiempo: 3, linea: 'subway', tipo: 'mta-subway' },
    ],
  },

  // LIGHT RAIL STATIONS
  'baltimore-hunt-valley': {
    ciudad: 'baltimore',
    nombre: 'Hunt Valley',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-mccormick-road', tiempo: 3, linea: 'lightrail', tipo: 'mta-lightrail' },
    ],
  },
  'baltimore-mccormick-road': {
    ciudad: 'baltimore',
    nombre: 'McCormick Road',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-hunt-valley', tiempo: 3, linea: 'lightrail', tipo: 'mta-lightrail' },
      { slug: 'baltimore-pepper-road', tiempo: 3, linea: 'lightrail', tipo: 'mta-lightrail' },
    ],
  },
  'baltimore-pepper-road': {
    ciudad: 'baltimore',
    nombre: 'Pepper Road',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-mccormick-road', tiempo: 3, linea: 'lightrail', tipo: 'mta-lightrail' },
      { slug: 'baltimore-lutherville', tiempo: 2, linea: 'lightrail', tipo: 'mta-lightrail' },
    ],
  },
  'baltimore-lutherville': {
    ciudad: 'baltimore',
    nombre: 'Lutherville',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-pepper-road', tiempo: 2, linea: 'lightrail', tipo: 'mta-lightrail' },
      { slug: 'baltimore-falls-road', tiempo: 2, linea: 'lightrail', tipo: 'mta-lightrail' },
    ],
  },
  'baltimore-falls-road': {
    ciudad: 'baltimore',
    nombre: 'Falls Road',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-lutherville', tiempo: 2, linea: 'lightrail', tipo: 'mta-lightrail' },
      { slug: 'baltimore-mt-washington', tiempo: 3, linea: 'lightrail', tipo: 'mta-lightrail' },
    ],
  },
  'baltimore-mt-washington': {
    ciudad: 'baltimore',
    nombre: 'Mt Washington',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-falls-road', tiempo: 3, linea: 'lightrail', tipo: 'mta-lightrail' },
      { slug: 'baltimore-cold-spring-lane', tiempo: 2, linea: 'lightrail', tipo: 'mta-lightrail' },
    ],
  },
  'baltimore-cold-spring-lane': {
    ciudad: 'baltimore',
    nombre: 'Cold Spring Lane',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-mt-washington', tiempo: 2, linea: 'lightrail', tipo: 'mta-lightrail' },
      { slug: 'baltimore-woodberry', tiempo: 2, linea: 'lightrail', tipo: 'mta-lightrail' },
    ],
  },
  'baltimore-woodberry': {
    ciudad: 'baltimore',
    nombre: 'Woodberry',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-cold-spring-lane', tiempo: 2, linea: 'lightrail', tipo: 'mta-lightrail' },
      { slug: 'baltimore-north-avenue', tiempo: 2, linea: 'lightrail', tipo: 'mta-lightrail' },
    ],
  },
  'baltimore-north-avenue': {
    ciudad: 'baltimore',
    nombre: 'North Avenue',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-woodberry', tiempo: 2, linea: 'lightrail', tipo: 'mta-lightrail' },
      { slug: 'baltimore-penn-station', tiempo: 3, linea: 'lightrail', tipo: 'mta-lightrail' },
    ],
  },
  'baltimore-penn-station': {
    ciudad: 'baltimore',
    nombre: 'Penn Station',
    lineas: ['lightrail', 'marc-penn'],
    adyacentes: [
      { slug: 'baltimore-north-avenue', tiempo: 3, linea: 'lightrail', tipo: 'mta-lightrail' },
      { slug: 'baltimore-mount-royal', tiempo: 2, linea: 'lightrail', tipo: 'mta-lightrail' },
      { slug: 'baltimore-penn-station-marc', tiempo: 4, linea: 'marc-penn', tipo: 'transfer' },
    ],
  },
  'baltimore-mount-royal': {
    ciudad: 'baltimore',
    nombre: 'Mount Royal',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-penn-station', tiempo: 2, linea: 'lightrail', tipo: 'mta-lightrail' },
      { slug: 'baltimore-cultural-center', tiempo: 2, linea: 'lightrail', tipo: 'mta-lightrail' },
    ],
  },
  'baltimore-cultural-center': {
    ciudad: 'baltimore',
    nombre: 'Cultural Center',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-mount-royal', tiempo: 2, linea: 'lightrail', tipo: 'mta-lightrail' },
      { slug: 'baltimore-centre-street', tiempo: 2, linea: 'lightrail', tipo: 'mta-lightrail' },
    ],
  },
  'baltimore-centre-street': {
    ciudad: 'baltimore',
    nombre: 'Centre Street',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-cultural-center', tiempo: 2, linea: 'lightrail', tipo: 'mta-lightrail' },
      { slug: 'baltimore-lexington-market-lr', tiempo: 2, linea: 'lightrail', tipo: 'mta-lightrail' },
    ],
  },
  'baltimore-lexington-market-lr': {
    ciudad: 'baltimore',
    nombre: 'Lexington Market (LR)',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-centre-street', tiempo: 2, linea: 'lightrail', tipo: 'mta-lightrail' },
      { slug: 'baltimore-convention-center', tiempo: 2, linea: 'lightrail', tipo: 'mta-lightrail' },
      { slug: 'baltimore-lexington-market', tiempo: 4, linea: 'subway', tipo: 'transfer' },
    ],
  },
  'baltimore-convention-center': {
    ciudad: 'baltimore',
    nombre: 'Convention Center',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-lexington-market-lr', tiempo: 2, linea: 'lightrail', tipo: 'mta-lightrail' },
      { slug: 'baltimore-camden-yards', tiempo: 3, linea: 'lightrail', tipo: 'mta-lightrail' },
    ],
  },
  'baltimore-camden-yards': {
    ciudad: 'baltimore',
    nombre: 'Camden Yards',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-convention-center', tiempo: 3, linea: 'lightrail', tipo: 'mta-lightrail' },
      { slug: 'baltimore-hamburg-street', tiempo: 2, linea: 'lightrail', tipo: 'mta-lightrail' },
    ],
  },
  'baltimore-hamburg-street': {
    ciudad: 'baltimore',
    nombre: 'Hamburg Street',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-camden-yards', tiempo: 2, linea: 'lightrail', tipo: 'mta-lightrail' },
      { slug: 'baltimore-westport', tiempo: 2, linea: 'lightrail', tipo: 'mta-lightrail' },
    ],
  },
  'baltimore-westport': {
    ciudad: 'baltimore',
    nombre: 'Westport',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-hamburg-street', tiempo: 2, linea: 'lightrail', tipo: 'mta-lightrail' },
      { slug: 'baltimore-cherry-hill', tiempo: 2, linea: 'lightrail', tipo: 'mta-lightrail' },
    ],
  },
  'baltimore-cherry-hill': {
    ciudad: 'baltimore',
    nombre: 'Cherry Hill',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-westport', tiempo: 2, linea: 'lightrail', tipo: 'mta-lightrail' },
      { slug: 'baltimore-patapsco', tiempo: 3, linea: 'lightrail', tipo: 'mta-lightrail' },
    ],
  },
  'baltimore-patapsco': {
    ciudad: 'baltimore',
    nombre: 'Patapsco',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-cherry-hill', tiempo: 3, linea: 'lightrail', tipo: 'mta-lightrail' },
      { slug: 'baltimore-nursery-road', tiempo: 4, linea: 'lightrail', tipo: 'mta-lightrail' },
    ],
  },
  'baltimore-nursery-road': {
    ciudad: 'baltimore',
    nombre: 'Nursery Road',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-patapsco', tiempo: 4, linea: 'lightrail', tipo: 'mta-lightrail' },
      { slug: 'baltimore-north-linthicum', tiempo: 3, linea: 'lightrail', tipo: 'mta-lightrail' },
    ],
  },
  'baltimore-north-linthicum': {
    ciudad: 'baltimore',
    nombre: 'North Linthicum',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-nursery-road', tiempo: 3, linea: 'lightrail', tipo: 'mta-lightrail' },
      { slug: 'baltimore-linthicum', tiempo: 2, linea: 'lightrail', tipo: 'mta-lightrail' },
    ],
  },
  'baltimore-linthicum': {
    ciudad: 'baltimore',
    nombre: 'Linthicum',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-north-linthicum', tiempo: 2, linea: 'lightrail', tipo: 'mta-lightrail' },
      { slug: 'baltimore-ferndale', tiempo: 3, linea: 'lightrail', tipo: 'mta-lightrail' },
    ],
  },
  'baltimore-ferndale': {
    ciudad: 'baltimore',
    nombre: 'Ferndale',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-linthicum', tiempo: 3, linea: 'lightrail', tipo: 'mta-lightrail' },
      { slug: 'baltimore-cromwell-glen-burnie', tiempo: 2, linea: 'lightrail', tipo: 'mta-lightrail' },
    ],
  },
  'baltimore-cromwell-glen-burnie': {
    ciudad: 'baltimore',
    nombre: 'Cromwell/Glen Burnie',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-ferndale', tiempo: 2, linea: 'lightrail', tipo: 'mta-lightrail' },
      { slug: 'baltimore-bwi-business-district', tiempo: 3, linea: 'lightrail', tipo: 'mta-lightrail' },
    ],
  },
  'baltimore-bwi-business-district': {
    ciudad: 'baltimore',
    nombre: 'BWI Business District',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-cromwell-glen-burnie', tiempo: 3, linea: 'lightrail', tipo: 'mta-lightrail' },
      { slug: 'baltimore-bwi-airport', tiempo: 4, linea: 'lightrail', tipo: 'mta-lightrail' },
    ],
  },
  'baltimore-bwi-airport': {
    ciudad: 'baltimore',
    nombre: 'BWI Airport',
    lineas: ['lightrail', 'marc-penn'],
    adyacentes: [
      { slug: 'baltimore-bwi-business-district', tiempo: 4, linea: 'lightrail', tipo: 'mta-lightrail' },
      { slug: 'baltimore-bwi-airport-marc', tiempo: 5, linea: 'marc-penn', tipo: 'transfer' },
    ],
  },

  // MARC PENN LINE STATIONS
  'baltimore-perryville': {
    ciudad: 'baltimore',
    nombre: 'Perryville',
    lineas: ['marc-penn'],
    adyacentes: [
      { slug: 'baltimore-aberdeen', tiempo: 12, linea: 'marc-penn', tipo: 'marc' },
    ],
  },
  'baltimore-aberdeen': {
    ciudad: 'baltimore',
    nombre: 'Aberdeen',
    lineas: ['marc-penn'],
    adyacentes: [
      { slug: 'baltimore-perryville', tiempo: 12, linea: 'marc-penn', tipo: 'marc' },
      { slug: 'baltimore-edgewood', tiempo: 8, linea: 'marc-penn', tipo: 'marc' },
    ],
  },
  'baltimore-edgewood': {
    ciudad: 'baltimore',
    nombre: 'Edgewood',
    lineas: ['marc-penn'],
    adyacentes: [
      { slug: 'baltimore-aberdeen', tiempo: 8, linea: 'marc-penn', tipo: 'marc' },
      { slug: 'baltimore-martin-airport', tiempo: 5, linea: 'marc-penn', tipo: 'marc' },
    ],
  },
  'baltimore-martin-airport': {
    ciudad: 'baltimore',
    nombre: 'Martin Airport',
    lineas: ['marc-penn'],
    adyacentes: [
      { slug: 'baltimore-edgewood', tiempo: 5, linea: 'marc-penn', tipo: 'marc' },
      { slug: 'baltimore-penn-station-marc', tiempo: 10, linea: 'marc-penn', tipo: 'marc' },
    ],
  },
  'baltimore-penn-station-marc': {
    ciudad: 'baltimore',
    nombre: 'Baltimore Penn Station (MARC)',
    lineas: ['marc-penn', 'lightrail'],
    adyacentes: [
      { slug: 'baltimore-martin-airport', tiempo: 10, linea: 'marc-penn', tipo: 'marc' },
      { slug: 'baltimore-west-baltimore-marc', tiempo: 8, linea: 'marc-penn', tipo: 'marc' },
      { slug: 'baltimore-penn-station', tiempo: 4, linea: 'lightrail', tipo: 'transfer' },
    ],
  },
  'baltimore-west-baltimore-marc': {
    ciudad: 'baltimore',
    nombre: 'West Baltimore (MARC)',
    lineas: ['marc-penn'],
    adyacentes: [
      { slug: 'baltimore-penn-station-marc', tiempo: 8, linea: 'marc-penn', tipo: 'marc' },
      { slug: 'baltimore-halethorpe', tiempo: 7, linea: 'marc-penn', tipo: 'marc' },
    ],
  },
  'baltimore-halethorpe': {
    ciudad: 'baltimore',
    nombre: 'Halethorpe',
    lineas: ['marc-penn'],
    adyacentes: [
      { slug: 'baltimore-west-baltimore-marc', tiempo: 7, linea: 'marc-penn', tipo: 'marc' },
      { slug: 'baltimore-bwi-airport-marc', tiempo: 6, linea: 'marc-penn', tipo: 'marc' },
    ],
  },
  'baltimore-bwi-airport-marc': {
    ciudad: 'baltimore',
    nombre: 'BWI Airport (MARC)',
    lineas: ['marc-penn'],
    adyacentes: [
      { slug: 'baltimore-halethorpe', tiempo: 6, linea: 'marc-penn', tipo: 'marc' },
      { slug: 'baltimore-odenton', tiempo: 8, linea: 'marc-penn', tipo: 'marc' },
      { slug: 'baltimore-bwi-airport', tiempo: 5, linea: 'lightrail', tipo: 'transfer' },
    ],
  },
  'baltimore-odenton': {
    ciudad: 'baltimore',
    nombre: 'Odenton',
    lineas: ['marc-penn'],
    adyacentes: [
      { slug: 'baltimore-bwi-airport-marc', tiempo: 8, linea: 'marc-penn', tipo: 'marc' },
      { slug: 'baltimore-bowie-state', tiempo: 10, linea: 'marc-penn', tipo: 'marc' },
    ],
  },
  'baltimore-bowie-state': {
    ciudad: 'baltimore',
    nombre: 'Bowie State',
    lineas: ['marc-penn'],
    adyacentes: [
      { slug: 'baltimore-odenton', tiempo: 10, linea: 'marc-penn', tipo: 'marc' },
      { slug: 'baltimore-new-carrollton', tiempo: 8, linea: 'marc-penn', tipo: 'marc' },
    ],
  },
  'baltimore-new-carrollton': {
    ciudad: 'baltimore',
    nombre: 'New Carrollton',
    lineas: ['marc-penn'],
    adyacentes: [
      { slug: 'baltimore-bowie-state', tiempo: 8, linea: 'marc-penn', tipo: 'marc' },
      { slug: 'baltimore-washington-union-station-penn', tiempo: 10, linea: 'marc-penn', tipo: 'marc' },
    ],
  },
  'baltimore-washington-union-station-penn': {
    ciudad: 'baltimore',
    nombre: 'Washington Union Station (Penn)',
    lineas: ['marc-penn'],
    adyacentes: [
      { slug: 'baltimore-new-carrollton', tiempo: 10, linea: 'marc-penn', tipo: 'marc' },
    ],
  },

  // MARC CAMDEN LINE STATIONS
  'baltimore-camden': {
    ciudad: 'baltimore',
    nombre: 'Baltimore Camden',
    lineas: ['marc-camden'],
    adyacentes: [
      { slug: 'baltimore-st-denis', tiempo: 5, linea: 'marc-camden', tipo: 'marc' },
    ],
  },
  'baltimore-st-denis': {
    ciudad: 'baltimore',
    nombre: 'St. Denis',
    lineas: ['marc-camden'],
    adyacentes: [
      { slug: 'baltimore-camden', tiempo: 5, linea: 'marc-camden', tipo: 'marc' },
      { slug: 'baltimore-dorsey', tiempo: 6, linea: 'marc-camden', tipo: 'marc' },
    ],
  },
  'baltimore-dorsey': {
    ciudad: 'baltimore',
    nombre: 'Dorsey',
    lineas: ['marc-camden'],
    adyacentes: [
      { slug: 'baltimore-st-denis', tiempo: 6, linea: 'marc-camden', tipo: 'marc' },
      { slug: 'baltimore-jessup', tiempo: 5, linea: 'marc-camden', tipo: 'marc' },
    ],
  },
  'baltimore-jessup': {
    ciudad: 'baltimore',
    nombre: 'Jessup',
    lineas: ['marc-camden'],
    adyacentes: [
      { slug: 'baltimore-dorsey', tiempo: 5, linea: 'marc-camden', tipo: 'marc' },
      { slug: 'baltimore-savage', tiempo: 6, linea: 'marc-camden', tipo: 'marc' },
    ],
  },
  'baltimore-savage': {
    ciudad: 'baltimore',
    nombre: 'Savage',
    lineas: ['marc-camden'],
    adyacentes: [
      { slug: 'baltimore-jessup', tiempo: 6, linea: 'marc-camden', tipo: 'marc' },
      { slug: 'baltimore-laurel', tiempo: 8, linea: 'marc-camden', tipo: 'marc' },
    ],
  },
  'baltimore-laurel': {
    ciudad: 'baltimore',
    nombre: 'Laurel',
    lineas: ['marc-camden'],
    adyacentes: [
      { slug: 'baltimore-savage', tiempo: 8, linea: 'marc-camden', tipo: 'marc' },
      { slug: 'baltimore-muirkirk', tiempo: 7, linea: 'marc-camden', tipo: 'marc' },
    ],
  },
  'baltimore-muirkirk': {
    ciudad: 'baltimore',
    nombre: 'Muirkirk',
    lineas: ['marc-camden'],
    adyacentes: [
      { slug: 'baltimore-laurel', tiempo: 7, linea: 'marc-camden', tipo: 'marc' },
      { slug: 'baltimore-greenbelt', tiempo: 6, linea: 'marc-camden', tipo: 'marc' },
    ],
  },
  'baltimore-greenbelt': {
    ciudad: 'baltimore',
    nombre: 'Greenbelt',
    lineas: ['marc-camden'],
    adyacentes: [
      { slug: 'baltimore-muirkirk', tiempo: 6, linea: 'marc-camden', tipo: 'marc' },
      { slug: 'baltimore-college-park', tiempo: 5, linea: 'marc-camden', tipo: 'marc' },
    ],
  },
  'baltimore-college-park': {
    ciudad: 'baltimore',
    nombre: 'College Park',
    lineas: ['marc-camden'],
    adyacentes: [
      { slug: 'baltimore-greenbelt', tiempo: 5, linea: 'marc-camden', tipo: 'marc' },
    ],
  },

  // MARC BRUNSWICK LINE STATIONS
  'baltimore-camden-brunswick': {
    ciudad: 'baltimore',
    nombre: 'Baltimore Camden (Brunswick)',
    lineas: ['marc-brunswick'],
    adyacentes: [
      { slug: 'baltimore-dickerson', tiempo: 15, linea: 'marc-brunswick', tipo: 'marc' },
    ],
  },
  'baltimore-dickerson': {
    ciudad: 'baltimore',
    nombre: 'Dickerson',
    lineas: ['marc-brunswick'],
    adyacentes: [
      { slug: 'baltimore-camden-brunswick', tiempo: 15, linea: 'marc-brunswick', tipo: 'marc' },
      { slug: 'baltimore-barnesville', tiempo: 12, linea: 'marc-brunswick', tipo: 'marc' },
    ],
  },
  'baltimore-barnesville': {
    ciudad: 'baltimore',
    nombre: 'Barnesville',
    lineas: ['marc-brunswick'],
    adyacentes: [
      { slug: 'baltimore-dickerson', tiempo: 12, linea: 'marc-brunswick', tipo: 'marc' },
      { slug: 'baltimore-boyds', tiempo: 10, linea: 'marc-brunswick', tipo: 'marc' },
    ],
  },
  'baltimore-boyds': {
    ciudad: 'baltimore',
    nombre: 'Boyds',
    lineas: ['marc-brunswick'],
    adyacentes: [
      { slug: 'baltimore-barnesville', tiempo: 10, linea: 'marc-brunswick', tipo: 'marc' },
      { slug: 'baltimore-germantown', tiempo: 8, linea: 'marc-brunswick', tipo: 'marc' },
    ],
  },
  'baltimore-germantown': {
    ciudad: 'baltimore',
    nombre: 'Germantown',
    lineas: ['marc-brunswick'],
    adyacentes: [
      { slug: 'baltimore-boyds', tiempo: 8, linea: 'marc-brunswick', tipo: 'marc' },
      { slug: 'baltimore-gaithersburg', tiempo: 6, linea: 'marc-brunswick', tipo: 'marc' },
    ],
  },
  'baltimore-gaithersburg': {
    ciudad: 'baltimore',
    nombre: 'Gaithersburg',
    lineas: ['marc-brunswick'],
    adyacentes: [
      { slug: 'baltimore-germantown', tiempo: 6, linea: 'marc-brunswick', tipo: 'marc' },
      { slug: 'baltimore-washington-grove', tiempo: 5, linea: 'marc-brunswick', tipo: 'marc' },
    ],
  },
  'baltimore-washington-grove': {
    ciudad: 'baltimore',
    nombre: 'Washington Grove',
    lineas: ['marc-brunswick'],
    adyacentes: [
      { slug: 'baltimore-gaithersburg', tiempo: 5, linea: 'marc-brunswick', tipo: 'marc' },
      { slug: 'baltimore-rockville', tiempo: 7, linea: 'marc-brunswick', tipo: 'marc' },
    ],
  },
  'baltimore-rockville': {
    ciudad: 'baltimore',
    nombre: 'Rockville',
    lineas: ['marc-brunswick'],
    adyacentes: [
      { slug: 'baltimore-washington-grove', tiempo: 7, linea: 'marc-brunswick', tipo: 'marc' },
      { slug: 'baltimore-garrett-park', tiempo: 6, linea: 'marc-brunswick', tipo: 'marc' },
    ],
  },
  'baltimore-garrett-park': {
    ciudad: 'baltimore',
    nombre: 'Garrett Park',
    lineas: ['marc-brunswick'],
    adyacentes: [
      { slug: 'baltimore-rockville', tiempo: 6, linea: 'marc-brunswick', tipo: 'marc' },
      { slug: 'baltimore-kensington', tiempo: 5, linea: 'marc-brunswick', tipo: 'marc' },
    ],
  },
  'baltimore-kensington': {
    ciudad: 'baltimore',
    nombre: 'Kensington',
    lineas: ['marc-brunswick'],
    adyacentes: [
      { slug: 'baltimore-garrett-park', tiempo: 5, linea: 'marc-brunswick', tipo: 'marc' },
      { slug: 'baltimore-silver-spring', tiempo: 6, linea: 'marc-brunswick', tipo: 'marc' },
    ],
  },
  'baltimore-silver-spring': {
    ciudad: 'baltimore',
    nombre: 'Silver Spring',
    lineas: ['marc-brunswick'],
    adyacentes: [
      { slug: 'baltimore-kensington', tiempo: 6, linea: 'marc-brunswick', tipo: 'marc' },
      { slug: 'baltimore-washington-union-station-brunswick', tiempo: 8, linea: 'marc-brunswick', tipo: 'marc' },
    ],
  },
  'baltimore-washington-union-station-brunswick': {
    ciudad: 'baltimore',
    nombre: 'Washington Union Station (Brunswick)',
    lineas: ['marc-brunswick'],
    adyacentes: [
      { slug: 'baltimore-silver-spring', tiempo: 8, linea: 'marc-brunswick', tipo: 'marc' },
    ],
  },

  // LIGHT RAIL — Penn Station branch & spur stations
  'baltimore-penn-station-lr': {
    ciudad: 'baltimore',
    nombre: 'Penn Station (Light Rail)',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-north-avenue', tiempo: 3, linea: 'lightrail', tipo: 'lightrail' },
      { slug: 'baltimore-mount-royal', tiempo: 2, linea: 'lightrail', tipo: 'lightrail' },
      { slug: 'baltimore-penn-station-marc', tiempo: 5, linea: 'transfer', tipo: 'transfer' },
    ],
  },
  'baltimore-timonium': {
    ciudad: 'baltimore',
    nombre: 'Timonium',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-lutherville', tiempo: 3, linea: 'lightrail', tipo: 'lightrail' },
      { slug: 'baltimore-timonium-fairgrounds', tiempo: 2, linea: 'lightrail', tipo: 'lightrail' },
    ],
  },
  'baltimore-timonium-fairgrounds': {
    ciudad: 'baltimore',
    nombre: 'Timonium Fairgrounds',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-timonium', tiempo: 2, linea: 'lightrail', tipo: 'lightrail' },
      { slug: 'baltimore-lutherville-north', tiempo: 3, linea: 'lightrail', tipo: 'lightrail' },
    ],
  },
  'baltimore-lutherville-north': {
    ciudad: 'baltimore',
    nombre: 'Lutherville North',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-timonium-fairgrounds', tiempo: 3, linea: 'lightrail', tipo: 'lightrail' },
      { slug: 'baltimore-warren-road', tiempo: 3, linea: 'lightrail', tipo: 'lightrail' },
    ],
  },
  'baltimore-warren-road': {
    ciudad: 'baltimore',
    nombre: 'Warren Road',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-lutherville-north', tiempo: 3, linea: 'lightrail', tipo: 'lightrail' },
      { slug: 'baltimore-mta-ride-quality', tiempo: 3, linea: 'lightrail', tipo: 'lightrail' },
    ],
  },
  'baltimore-mta-ride-quality': {
    ciudad: 'baltimore',
    nombre: 'MTA Ride Quality',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-warren-road', tiempo: 3, linea: 'lightrail', tipo: 'lightrail' },
      { slug: 'baltimore-north-avenue-west', tiempo: 4, linea: 'lightrail', tipo: 'lightrail' },
    ],
  },
  'baltimore-north-avenue-west': {
    ciudad: 'baltimore',
    nombre: 'North Avenue West',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-mta-ride-quality', tiempo: 4, linea: 'lightrail', tipo: 'lightrail' },
      { slug: 'baltimore-north-avenue', tiempo: 3, linea: 'lightrail', tipo: 'lightrail' },
    ],
  },

  // MARC Camden — Camden Station node
  'baltimore-camden-marc': {
    ciudad: 'baltimore',
    nombre: 'Baltimore Camden Station',
    lineas: ['marc-camden'],
    adyacentes: [
      { slug: 'baltimore-st-denis', tiempo: 8, linea: 'marc-camden', tipo: 'marc' },
      { slug: 'baltimore-camden-yards', tiempo: 5, linea: 'transfer', tipo: 'transfer' },
    ],
  },
};
