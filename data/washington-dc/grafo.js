export const grafoDC = {
  // RED LINE: Shady Grove → Glenmont (27 stations)
  'dc-shady-grove': {
    ciudad: 'washington-dc',
    nombre: 'Shady Grove',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dc-rockville', tiempo: 3, linea: 'Red', tipo: 'wmata-metro' }
    ]
  },
  'dc-rockville': {
    ciudad: 'washington-dc',
    nombre: 'Rockville',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dc-shady-grove', tiempo: 3, linea: 'Red', tipo: 'wmata-metro' },
      { slug: 'dc-twinbrook', tiempo: 3, linea: 'Red', tipo: 'wmata-metro' }
    ]
  },
  'dc-twinbrook': {
    ciudad: 'washington-dc',
    nombre: 'Twinbrook',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dc-rockville', tiempo: 3, linea: 'Red', tipo: 'wmata-metro' },
      { slug: 'dc-north-bethesda', tiempo: 3, linea: 'Red', tipo: 'wmata-metro' }
    ]
  },
  'dc-north-bethesda': {
    ciudad: 'washington-dc',
    nombre: 'North Bethesda',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dc-twinbrook', tiempo: 3, linea: 'Red', tipo: 'wmata-metro' },
      { slug: 'dc-grosvenor-strathmore', tiempo: 3, linea: 'Red', tipo: 'wmata-metro' }
    ]
  },
  'dc-grosvenor-strathmore': {
    ciudad: 'washington-dc',
    nombre: 'Grosvenor-Strathmore',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dc-north-bethesda', tiempo: 3, linea: 'Red', tipo: 'wmata-metro' },
      { slug: 'dc-medical-center', tiempo: 3, linea: 'Red', tipo: 'wmata-metro' }
    ]
  },
  'dc-medical-center': {
    ciudad: 'washington-dc',
    nombre: 'Medical Center',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dc-grosvenor-strathmore', tiempo: 3, linea: 'Red', tipo: 'wmata-metro' },
      { slug: 'dc-bethesda', tiempo: 3, linea: 'Red', tipo: 'wmata-metro' }
    ]
  },
  'dc-bethesda': {
    ciudad: 'washington-dc',
    nombre: 'Bethesda',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dc-medical-center', tiempo: 3, linea: 'Red', tipo: 'wmata-metro' },
      { slug: 'dc-friendship-heights', tiempo: 3, linea: 'Red', tipo: 'wmata-metro' }
    ]
  },
  'dc-friendship-heights': {
    ciudad: 'washington-dc',
    nombre: 'Friendship Heights',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dc-bethesda', tiempo: 3, linea: 'Red', tipo: 'wmata-metro' },
      { slug: 'dc-tenleytown-au', tiempo: 3, linea: 'Red', tipo: 'wmata-metro' }
    ]
  },
  'dc-tenleytown-au': {
    ciudad: 'washington-dc',
    nombre: 'Tenleytown-AU',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dc-friendship-heights', tiempo: 3, linea: 'Red', tipo: 'wmata-metro' },
      { slug: 'dc-van-ness-udc', tiempo: 3, linea: 'Red', tipo: 'wmata-metro' }
    ]
  },
  'dc-van-ness-udc': {
    ciudad: 'washington-dc',
    nombre: 'Van Ness-UDC',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dc-tenleytown-au', tiempo: 3, linea: 'Red', tipo: 'wmata-metro' },
      { slug: 'dc-cleveland-park', tiempo: 2, linea: 'Red', tipo: 'wmata-metro' }
    ]
  },
  'dc-cleveland-park': {
    ciudad: 'washington-dc',
    nombre: 'Cleveland Park',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dc-van-ness-udc', tiempo: 2, linea: 'Red', tipo: 'wmata-metro' },
      { slug: 'dc-woodley-park-zoo', tiempo: 2, linea: 'Red', tipo: 'wmata-metro' }
    ]
  },
  'dc-woodley-park-zoo': {
    ciudad: 'washington-dc',
    nombre: 'Woodley Park-Zoo/Adams Morgan',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dc-cleveland-park', tiempo: 2, linea: 'Red', tipo: 'wmata-metro' },
      { slug: 'dc-dupont-circle', tiempo: 2, linea: 'Red', tipo: 'wmata-metro' }
    ]
  },
  'dc-dupont-circle': {
    ciudad: 'washington-dc',
    nombre: 'Dupont Circle',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dc-woodley-park-zoo', tiempo: 2, linea: 'Red', tipo: 'wmata-metro' },
      { slug: 'dc-farragut-north', tiempo: 2, linea: 'Red', tipo: 'wmata-metro' }
    ]
  },
  'dc-farragut-north': {
    ciudad: 'washington-dc',
    nombre: 'Farragut North',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dc-dupont-circle', tiempo: 2, linea: 'Red', tipo: 'wmata-metro' },
      { slug: 'dc-metro-center', tiempo: 2, linea: 'Red', tipo: 'wmata-metro' }
    ]
  },
  'dc-metro-center': {
    ciudad: 'washington-dc',
    nombre: 'Metro Center',
    lineas: ['Red', 'Orange', 'Blue', 'Silver'],
    adyacentes: [
      { slug: 'dc-farragut-north', tiempo: 2, linea: 'Red', tipo: 'wmata-metro' },
      { slug: 'dc-gallery-pl-chinatown', tiempo: 2, linea: 'Red', tipo: 'wmata-metro' },
      { slug: 'dc-mcpherson-square', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-mcpherson-square', tiempo: 2, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-mcpherson-square', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' },
      { slug: 'dc-federal-triangle', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-federal-triangle', tiempo: 2, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-federal-triangle', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' }
    ]
  },
  'dc-gallery-pl-chinatown': {
    ciudad: 'washington-dc',
    nombre: 'Gallery Pl-Chinatown',
    lineas: ['Red', 'Yellow', 'Green'],
    adyacentes: [
      { slug: 'dc-metro-center', tiempo: 2, linea: 'Red', tipo: 'wmata-metro' },
      { slug: 'dc-judiciary-square', tiempo: 2, linea: 'Red', tipo: 'wmata-metro' },
      { slug: 'dc-archives', tiempo: 2, linea: 'Yellow', tipo: 'wmata-metro' },
      { slug: 'dc-archives', tiempo: 2, linea: 'Green', tipo: 'wmata-metro' },
      { slug: 'dc-mt-vernon-sq', tiempo: 2, linea: 'Yellow', tipo: 'wmata-metro' },
      { slug: 'dc-mt-vernon-sq', tiempo: 2, linea: 'Green', tipo: 'wmata-metro' }
    ]
  },
  'dc-judiciary-square': {
    ciudad: 'washington-dc',
    nombre: 'Judiciary Square',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dc-gallery-pl-chinatown', tiempo: 2, linea: 'Red', tipo: 'wmata-metro' },
      { slug: 'dc-union-station', tiempo: 2, linea: 'Red', tipo: 'wmata-metro' }
    ]
  },
  'dc-union-station': {
    ciudad: 'washington-dc',
    nombre: 'Union Station',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dc-judiciary-square', tiempo: 2, linea: 'Red', tipo: 'wmata-metro' },
      { slug: 'dc-noma-gallaudet-u', tiempo: 2, linea: 'Red', tipo: 'wmata-metro' }
    ]
  },
  'dc-noma-gallaudet-u': {
    ciudad: 'washington-dc',
    nombre: 'NoMa-Gallaudet U',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dc-union-station', tiempo: 2, linea: 'Red', tipo: 'wmata-metro' },
      { slug: 'dc-rhode-island-ave-brentwood', tiempo: 2, linea: 'Red', tipo: 'wmata-metro' }
    ]
  },
  'dc-rhode-island-ave-brentwood': {
    ciudad: 'washington-dc',
    nombre: 'Rhode Island Ave-Brentwood',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dc-noma-gallaudet-u', tiempo: 2, linea: 'Red', tipo: 'wmata-metro' },
      { slug: 'dc-brookland-cua', tiempo: 3, linea: 'Red', tipo: 'wmata-metro' }
    ]
  },
  'dc-brookland-cua': {
    ciudad: 'washington-dc',
    nombre: 'Brookland-CUA',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dc-rhode-island-ave-brentwood', tiempo: 3, linea: 'Red', tipo: 'wmata-metro' },
      { slug: 'dc-fort-totten', tiempo: 3, linea: 'Red', tipo: 'wmata-metro' }
    ]
  },
  'dc-fort-totten': {
    ciudad: 'washington-dc',
    nombre: 'Fort Totten',
    lineas: ['Red', 'Yellow', 'Green'],
    adyacentes: [
      { slug: 'dc-brookland-cua', tiempo: 3, linea: 'Red', tipo: 'wmata-metro' },
      { slug: 'dc-takoma', tiempo: 3, linea: 'Red', tipo: 'wmata-metro' },
      { slug: 'dc-georgia-ave-petworth', tiempo: 2, linea: 'Yellow', tipo: 'wmata-metro' },
      { slug: 'dc-georgia-ave-petworth', tiempo: 2, linea: 'Green', tipo: 'wmata-metro' },
      { slug: 'dc-west-hyattsville', tiempo: 3, linea: 'Green', tipo: 'wmata-metro' }
    ]
  },
  'dc-takoma': {
    ciudad: 'washington-dc',
    nombre: 'Takoma',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dc-fort-totten', tiempo: 3, linea: 'Red', tipo: 'wmata-metro' },
      { slug: 'dc-silver-spring', tiempo: 3, linea: 'Red', tipo: 'wmata-metro' }
    ]
  },
  'dc-silver-spring': {
    ciudad: 'washington-dc',
    nombre: 'Silver Spring',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dc-takoma', tiempo: 3, linea: 'Red', tipo: 'wmata-metro' },
      { slug: 'dc-forest-glen', tiempo: 4, linea: 'Red', tipo: 'wmata-metro' }
    ]
  },
  'dc-forest-glen': {
    ciudad: 'washington-dc',
    nombre: 'Forest Glen',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dc-silver-spring', tiempo: 4, linea: 'Red', tipo: 'wmata-metro' },
      { slug: 'dc-wheaton', tiempo: 4, linea: 'Red', tipo: 'wmata-metro' }
    ]
  },
  'dc-wheaton': {
    ciudad: 'washington-dc',
    nombre: 'Wheaton',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dc-forest-glen', tiempo: 4, linea: 'Red', tipo: 'wmata-metro' },
      { slug: 'dc-glenmont', tiempo: 4, linea: 'Red', tipo: 'wmata-metro' }
    ]
  },
  'dc-glenmont': {
    ciudad: 'washington-dc',
    nombre: 'Glenmont',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dc-wheaton', tiempo: 4, linea: 'Red', tipo: 'wmata-metro' }
    ]
  },

  // ORANGE LINE: Vienna/Fairfax-GMU → New Carrollton (26 stations)
  'dc-vienna-fairfax-gmu': {
    ciudad: 'washington-dc',
    nombre: 'Vienna/Fairfax-GMU',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'dc-dunn-loring-merrifield', tiempo: 4, linea: 'Orange', tipo: 'wmata-metro' }
    ]
  },
  'dc-dunn-loring-merrifield': {
    ciudad: 'washington-dc',
    nombre: 'Dunn Loring-Merrifield',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'dc-vienna-fairfax-gmu', tiempo: 4, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-west-falls-church', tiempo: 3, linea: 'Orange', tipo: 'wmata-metro' }
    ]
  },
  'dc-west-falls-church': {
    ciudad: 'washington-dc',
    nombre: 'West Falls Church',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'dc-dunn-loring-merrifield', tiempo: 3, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-east-falls-church', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' }
    ]
  },
  'dc-east-falls-church': {
    ciudad: 'washington-dc',
    nombre: 'East Falls Church',
    lineas: ['Orange', 'Silver'],
    adyacentes: [
      { slug: 'dc-west-falls-church', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-ballston-mu', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-ballston-mu', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' }
    ]
  },
  'dc-ballston-mu': {
    ciudad: 'washington-dc',
    nombre: 'Ballston-MU',
    lineas: ['Orange', 'Silver'],
    adyacentes: [
      { slug: 'dc-east-falls-church', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-east-falls-church', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' },
      { slug: 'dc-virginia-square-gmu', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-virginia-square-gmu', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' }
    ]
  },
  'dc-virginia-square-gmu': {
    ciudad: 'washington-dc',
    nombre: 'Virginia Square-GMU',
    lineas: ['Orange', 'Silver'],
    adyacentes: [
      { slug: 'dc-ballston-mu', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-ballston-mu', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' },
      { slug: 'dc-clarendon', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-clarendon', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' }
    ]
  },
  'dc-clarendon': {
    ciudad: 'washington-dc',
    nombre: 'Clarendon',
    lineas: ['Orange', 'Silver'],
    adyacentes: [
      { slug: 'dc-virginia-square-gmu', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-virginia-square-gmu', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' },
      { slug: 'dc-court-house', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-court-house', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' }
    ]
  },
  'dc-court-house': {
    ciudad: 'washington-dc',
    nombre: 'Court House',
    lineas: ['Orange', 'Silver'],
    adyacentes: [
      { slug: 'dc-clarendon', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-clarendon', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' },
      { slug: 'dc-rosslyn', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-rosslyn', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' }
    ]
  },
  'dc-rosslyn': {
    ciudad: 'washington-dc',
    nombre: 'Rosslyn',
    lineas: ['Orange', 'Blue', 'Silver'],
    adyacentes: [
      { slug: 'dc-court-house', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-court-house', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' },
      { slug: 'dc-foggy-bottom-gwu', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-foggy-bottom-gwu', tiempo: 2, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-foggy-bottom-gwu', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' },
      { slug: 'dc-arlington-cemetery', tiempo: 3, linea: 'Blue', tipo: 'wmata-metro' }
    ]
  },
  'dc-foggy-bottom-gwu': {
    ciudad: 'washington-dc',
    nombre: 'Foggy Bottom-GWU',
    lineas: ['Orange', 'Blue', 'Silver'],
    adyacentes: [
      { slug: 'dc-rosslyn', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-rosslyn', tiempo: 2, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-rosslyn', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' },
      { slug: 'dc-farragut-west', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-farragut-west', tiempo: 2, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-farragut-west', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' }
    ]
  },
  'dc-farragut-west': {
    ciudad: 'washington-dc',
    nombre: 'Farragut West',
    lineas: ['Orange', 'Blue', 'Silver'],
    adyacentes: [
      { slug: 'dc-foggy-bottom-gwu', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-foggy-bottom-gwu', tiempo: 2, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-foggy-bottom-gwu', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' },
      { slug: 'dc-mcpherson-square', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-mcpherson-square', tiempo: 2, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-mcpherson-square', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' }
    ]
  },
  'dc-mcpherson-square': {
    ciudad: 'washington-dc',
    nombre: 'McPherson Square',
    lineas: ['Orange', 'Blue', 'Silver'],
    adyacentes: [
      { slug: 'dc-farragut-west', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-farragut-west', tiempo: 2, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-farragut-west', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' },
      { slug: 'dc-metro-center', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-metro-center', tiempo: 2, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-metro-center', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' }
    ]
  },
  'dc-federal-triangle': {
    ciudad: 'washington-dc',
    nombre: 'Federal Triangle',
    lineas: ['Orange', 'Blue', 'Silver'],
    adyacentes: [
      { slug: 'dc-metro-center', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-metro-center', tiempo: 2, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-metro-center', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' },
      { slug: 'dc-smithsonian', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-smithsonian', tiempo: 2, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-smithsonian', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' }
    ]
  },
  'dc-smithsonian': {
    ciudad: 'washington-dc',
    nombre: 'Smithsonian',
    lineas: ['Orange', 'Blue', 'Silver'],
    adyacentes: [
      { slug: 'dc-federal-triangle', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-federal-triangle', tiempo: 2, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-federal-triangle', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' },
      { slug: 'dc-lenfant-plaza', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-lenfant-plaza', tiempo: 2, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-lenfant-plaza', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' }
    ]
  },
  'dc-lenfant-plaza': {
    ciudad: 'washington-dc',
    nombre: "L'Enfant Plaza",
    lineas: ['Orange', 'Blue', 'Yellow', 'Green', 'Silver'],
    adyacentes: [
      { slug: 'dc-smithsonian', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-smithsonian', tiempo: 2, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-smithsonian', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' },
      { slug: 'dc-federal-center-sw', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-federal-center-sw', tiempo: 2, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-federal-center-sw', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' },
      { slug: 'dc-archives', tiempo: 2, linea: 'Yellow', tipo: 'wmata-metro' },
      { slug: 'dc-archives', tiempo: 2, linea: 'Green', tipo: 'wmata-metro' },
      { slug: 'dc-waterfront', tiempo: 3, linea: 'Green', tipo: 'wmata-metro' }
    ]
  },
  'dc-federal-center-sw': {
    ciudad: 'washington-dc',
    nombre: 'Federal Center SW',
    lineas: ['Orange', 'Blue', 'Silver'],
    adyacentes: [
      { slug: 'dc-lenfant-plaza', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-lenfant-plaza', tiempo: 2, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-lenfant-plaza', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' },
      { slug: 'dc-capitol-south', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-capitol-south', tiempo: 2, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-capitol-south', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' }
    ]
  },
  'dc-capitol-south': {
    ciudad: 'washington-dc',
    nombre: 'Capitol South',
    lineas: ['Orange', 'Blue', 'Silver'],
    adyacentes: [
      { slug: 'dc-federal-center-sw', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-federal-center-sw', tiempo: 2, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-federal-center-sw', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' },
      { slug: 'dc-eastern-market', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-eastern-market', tiempo: 2, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-eastern-market', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' }
    ]
  },
  'dc-eastern-market': {
    ciudad: 'washington-dc',
    nombre: 'Eastern Market',
    lineas: ['Orange', 'Blue', 'Silver'],
    adyacentes: [
      { slug: 'dc-capitol-south', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-capitol-south', tiempo: 2, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-capitol-south', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' },
      { slug: 'dc-potomac-ave', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-potomac-ave', tiempo: 2, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-potomac-ave', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' }
    ]
  },
  'dc-potomac-ave': {
    ciudad: 'washington-dc',
    nombre: 'Potomac Ave',
    lineas: ['Orange', 'Blue', 'Silver'],
    adyacentes: [
      { slug: 'dc-eastern-market', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-eastern-market', tiempo: 2, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-eastern-market', tiempo: 2, linea: 'Silver', tipo: 'wmata-metro' },
      { slug: 'dc-stadium-armory', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-stadium-armory', tiempo: 2, linea: 'Blue', tipo: 'wmata-metro' }
    ]
  },
  'dc-stadium-armory': {
    ciudad: 'washington-dc',
    nombre: 'Stadium-Armory',
    lineas: ['Orange', 'Blue'],
    adyacentes: [
      { slug: 'dc-potomac-ave', tiempo: 2, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-potomac-ave', tiempo: 2, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-minnesota-ave', tiempo: 3, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-benning-road', tiempo: 3, linea: 'Blue', tipo: 'wmata-metro' }
    ]
  },
  'dc-minnesota-ave': {
    ciudad: 'washington-dc',
    nombre: 'Minnesota Ave',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'dc-stadium-armory', tiempo: 3, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-deanwood', tiempo: 3, linea: 'Orange', tipo: 'wmata-metro' }
    ]
  },
  'dc-deanwood': {
    ciudad: 'washington-dc',
    nombre: 'Deanwood',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'dc-minnesota-ave', tiempo: 3, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-cheverly', tiempo: 3, linea: 'Orange', tipo: 'wmata-metro' }
    ]
  },
  'dc-cheverly': {
    ciudad: 'washington-dc',
    nombre: 'Cheverly',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'dc-deanwood', tiempo: 3, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-landover', tiempo: 3, linea: 'Orange', tipo: 'wmata-metro' }
    ]
  },
  'dc-landover': {
    ciudad: 'washington-dc',
    nombre: 'Landover',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'dc-cheverly', tiempo: 3, linea: 'Orange', tipo: 'wmata-metro' },
      { slug: 'dc-new-carrollton', tiempo: 3, linea: 'Orange', tipo: 'wmata-metro' }
    ]
  },
  'dc-new-carrollton': {
    ciudad: 'washington-dc',
    nombre: 'New Carrollton',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'dc-landover', tiempo: 3, linea: 'Orange', tipo: 'wmata-metro' }
    ]
  },

  // BLUE LINE (additional): Franconia-Springfield → Largo Town Center
  'dc-franconia-springfield': {
    ciudad: 'washington-dc',
    nombre: 'Franconia-Springfield',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'dc-van-dorn-street', tiempo: 4, linea: 'Blue', tipo: 'wmata-metro' }
    ]
  },
  'dc-van-dorn-street': {
    ciudad: 'washington-dc',
    nombre: 'Van Dorn Street',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'dc-franconia-springfield', tiempo: 4, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-king-st-old-town', tiempo: 3, linea: 'Blue', tipo: 'wmata-metro' }
    ]
  },
  'dc-king-st-old-town': {
    ciudad: 'washington-dc',
    nombre: 'King St-Old Town',
    lineas: ['Blue', 'Yellow'],
    adyacentes: [
      { slug: 'dc-van-dorn-street', tiempo: 3, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-braddock-road', tiempo: 3, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-braddock-road', tiempo: 3, linea: 'Yellow', tipo: 'wmata-metro' },
      { slug: 'dc-huntington', tiempo: 3, linea: 'Yellow', tipo: 'wmata-metro' }
    ]
  },
  'dc-braddock-road': {
    ciudad: 'washington-dc',
    nombre: 'Braddock Road',
    lineas: ['Blue', 'Yellow'],
    adyacentes: [
      { slug: 'dc-king-st-old-town', tiempo: 3, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-king-st-old-town', tiempo: 3, linea: 'Yellow', tipo: 'wmata-metro' },
      { slug: 'dc-reagan-airport', tiempo: 3, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-reagan-airport', tiempo: 3, linea: 'Yellow', tipo: 'wmata-metro' }
    ]
  },
  'dc-reagan-airport': {
    ciudad: 'washington-dc',
    nombre: 'Reagan Airport',
    lineas: ['Blue', 'Yellow'],
    adyacentes: [
      { slug: 'dc-braddock-road', tiempo: 3, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-braddock-road', tiempo: 3, linea: 'Yellow', tipo: 'wmata-metro' },
      { slug: 'dc-crystal-city', tiempo: 3, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-crystal-city', tiempo: 3, linea: 'Yellow', tipo: 'wmata-metro' }
    ]
  },
  'dc-crystal-city': {
    ciudad: 'washington-dc',
    nombre: 'Crystal City',
    lineas: ['Blue', 'Yellow'],
    adyacentes: [
      { slug: 'dc-reagan-airport', tiempo: 3, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-reagan-airport', tiempo: 3, linea: 'Yellow', tipo: 'wmata-metro' },
      { slug: 'dc-pentagon-city', tiempo: 2, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-pentagon-city', tiempo: 2, linea: 'Yellow', tipo: 'wmata-metro' }
    ]
  },
  'dc-pentagon-city': {
    ciudad: 'washington-dc',
    nombre: 'Pentagon City',
    lineas: ['Blue', 'Yellow'],
    adyacentes: [
      { slug: 'dc-crystal-city', tiempo: 2, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-crystal-city', tiempo: 2, linea: 'Yellow', tipo: 'wmata-metro' },
      { slug: 'dc-pentagon', tiempo: 2, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-pentagon', tiempo: 2, linea: 'Yellow', tipo: 'wmata-metro' }
    ]
  },
  'dc-pentagon': {
    ciudad: 'washington-dc',
    nombre: 'Pentagon',
    lineas: ['Blue', 'Yellow'],
    adyacentes: [
      { slug: 'dc-pentagon-city', tiempo: 2, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-pentagon-city', tiempo: 2, linea: 'Yellow', tipo: 'wmata-metro' },
      { slug: 'dc-arlington-cemetery', tiempo: 2, linea: 'Blue', tipo: 'wmata-metro' }
    ]
  },
  'dc-arlington-cemetery': {
    ciudad: 'washington-dc',
    nombre: 'Arlington Cemetery',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'dc-pentagon', tiempo: 2, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-rosslyn', tiempo: 3, linea: 'Blue', tipo: 'wmata-metro' }
    ]
  },
  'dc-benning-road': {
    ciudad: 'washington-dc',
    nombre: 'Benning Road',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'dc-stadium-armory', tiempo: 3, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-capitol-heights', tiempo: 3, linea: 'Blue', tipo: 'wmata-metro' }
    ]
  },
  'dc-capitol-heights': {
    ciudad: 'washington-dc',
    nombre: 'Capitol Heights',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'dc-benning-road', tiempo: 3, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-addison-road', tiempo: 3, linea: 'Blue', tipo: 'wmata-metro' }
    ]
  },
  'dc-addison-road': {
    ciudad: 'washington-dc',
    nombre: 'Addison Road',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'dc-capitol-heights', tiempo: 3, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-morgan-boulevard', tiempo: 3, linea: 'Blue', tipo: 'wmata-metro' }
    ]
  },
  'dc-morgan-boulevard': {
    ciudad: 'washington-dc',
    nombre: 'Morgan Boulevard',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'dc-addison-road', tiempo: 3, linea: 'Blue', tipo: 'wmata-metro' },
      { slug: 'dc-largo-town-center', tiempo: 3, linea: 'Blue', tipo: 'wmata-metro' }
    ]
  },
  'dc-largo-town-center': {
    ciudad: 'washington-dc',
    nombre: 'Largo Town Center',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'dc-morgan-boulevard', tiempo: 3, linea: 'Blue', tipo: 'wmata-metro' }
    ]
  },

  // YELLOW LINE: Huntington → Fort Totten (unique stations only)
  'dc-huntington': {
    ciudad: 'washington-dc',
    nombre: 'Huntington',
    lineas: ['Yellow'],
    adyacentes: [
      { slug: 'dc-eisenhower-ave', tiempo: 3, linea: 'Yellow', tipo: 'wmata-metro' }
    ]
  },
  'dc-eisenhower-ave': {
    ciudad: 'washington-dc',
    nombre: 'Eisenhower Ave',
    lineas: ['Yellow'],
    adyacentes: [
      { slug: 'dc-huntington', tiempo: 3, linea: 'Yellow', tipo: 'wmata-metro' },
      { slug: 'dc-king-st-old-town', tiempo: 3, linea: 'Yellow', tipo: 'wmata-metro' }
    ]
  },
  'dc-archives': {
    ciudad: 'washington-dc',
    nombre: 'Archives',
    lineas: ['Yellow', 'Green'],
    adyacentes: [
      { slug: 'dc-gallery-pl-chinatown', tiempo: 2, linea: 'Yellow', tipo: 'wmata-metro' },
      { slug: 'dc-gallery-pl-chinatown', tiempo: 2, linea: 'Green', tipo: 'wmata-metro' },
      { slug: 'dc-lenfant-plaza', tiempo: 2, linea: 'Yellow', tipo: 'wmata-metro' },
      { slug: 'dc-lenfant-plaza', tiempo: 2, linea: 'Green', tipo: 'wmata-metro' }
    ]
  },
  'dc-mt-vernon-sq': {
    ciudad: 'washington-dc',
    nombre: 'Mt Vernon Sq',
    lineas: ['Yellow', 'Green'],
    adyacentes: [
      { slug: 'dc-gallery-pl-chinatown', tiempo: 2, linea: 'Yellow', tipo: 'wmata-metro' },
      { slug: 'dc-gallery-pl-chinatown', tiempo: 2, linea: 'Green', tipo: 'wmata-metro' },
      { slug: 'dc-shaw-howard-u', tiempo: 2, linea: 'Yellow', tipo: 'wmata-metro' },
      { slug: 'dc-shaw-howard-u', tiempo: 2, linea: 'Green', tipo: 'wmata-metro' }
    ]
  },
  'dc-shaw-howard-u': {
    ciudad: 'washington-dc',
    nombre: 'Shaw-Howard U',
    lineas: ['Yellow', 'Green'],
    adyacentes: [
      { slug: 'dc-mt-vernon-sq', tiempo: 2, linea: 'Yellow', tipo: 'wmata-metro' },
      { slug: 'dc-mt-vernon-sq', tiempo: 2, linea: 'Green', tipo: 'wmata-metro' },
      { slug: 'dc-u-street', tiempo: 2, linea: 'Yellow', tipo: 'wmata-metro' },
      { slug: 'dc-u-street', tiempo: 2, linea: 'Green', tipo: 'wmata-metro' }
    ]
  },
  'dc-u-street': {
    ciudad: 'washington-dc',
    nombre: 'U Street',
    lineas: ['Yellow', 'Green'],
    adyacentes: [
      { slug: 'dc-shaw-howard-u', tiempo: 2, linea: 'Yellow', tipo: 'wmata-metro' },
      { slug: 'dc-shaw-howard-u', tiempo: 2, linea: 'Green', tipo: 'wmata-metro' },
      { slug: 'dc-columbia-heights', tiempo: 2, linea: 'Yellow', tipo: 'wmata-metro' },
      { slug: 'dc-columbia-heights', tiempo: 2, linea: 'Green', tipo: 'wmata-metro' }
    ]
  },
  'dc-columbia-heights': {
    ciudad: 'washington-dc',
    nombre: 'Columbia Heights',
    lineas: ['Yellow', 'Green'],
    adyacentes: [
      { slug: 'dc-u-street', tiempo: 2, linea: 'Yellow', tipo: 'wmata-metro' },
      { slug: 'dc-u-street', tiempo: 2, linea: 'Green', tipo: 'wmata-metro' },
      { slug: 'dc-georgia-ave-petworth', tiempo: 2, linea: 'Yellow', tipo: 'wmata-metro' },
      { slug: 'dc-georgia-ave-petworth', tiempo: 2, linea: 'Green', tipo: 'wmata-metro' }
    ]
  },
  'dc-georgia-ave-petworth': {
    ciudad: 'washington-dc',
    nombre: 'Georgia Ave-Petworth',
    lineas: ['Yellow', 'Green'],
    adyacentes: [
      { slug: 'dc-columbia-heights', tiempo: 2, linea: 'Yellow', tipo: 'wmata-metro' },
      { slug: 'dc-columbia-heights', tiempo: 2, linea: 'Green', tipo: 'wmata-metro' },
      { slug: 'dc-fort-totten', tiempo: 2, linea: 'Yellow', tipo: 'wmata-metro' },
      { slug: 'dc-fort-totten', tiempo: 2, linea: 'Green', tipo: 'wmata-metro' }
    ]
  },

  // GREEN LINE: Branch Ave → Greenbelt
  'dc-branch-ave': {
    ciudad: 'washington-dc',
    nombre: 'Branch Ave',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'dc-suitland', tiempo: 4, linea: 'Green', tipo: 'wmata-metro' }
    ]
  },
  'dc-suitland': {
    ciudad: 'washington-dc',
    nombre: 'Suitland',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'dc-branch-ave', tiempo: 4, linea: 'Green', tipo: 'wmata-metro' },
      { slug: 'dc-naylor-road', tiempo: 3, linea: 'Green', tipo: 'wmata-metro' }
    ]
  },
  'dc-naylor-road': {
    ciudad: 'washington-dc',
    nombre: 'Naylor Road',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'dc-suitland', tiempo: 3, linea: 'Green', tipo: 'wmata-metro' },
      { slug: 'dc-southern-ave', tiempo: 3, linea: 'Green', tipo: 'wmata-metro' }
    ]
  },
  'dc-southern-ave': {
    ciudad: 'washington-dc',
    nombre: 'Southern Ave',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'dc-naylor-road', tiempo: 3, linea: 'Green', tipo: 'wmata-metro' },
      { slug: 'dc-congress-heights', tiempo: 3, linea: 'Green', tipo: 'wmata-metro' }
    ]
  },
  'dc-congress-heights': {
    ciudad: 'washington-dc',
    nombre: 'Congress Heights',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'dc-southern-ave', tiempo: 3, linea: 'Green', tipo: 'wmata-metro' },
      { slug: 'dc-anacostia', tiempo: 2, linea: 'Green', tipo: 'wmata-metro' }
    ]
  },
  'dc-anacostia': {
    ciudad: 'washington-dc',
    nombre: 'Anacostia',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'dc-congress-heights', tiempo: 2, linea: 'Green', tipo: 'wmata-metro' },
      { slug: 'dc-navy-yard-ballpark', tiempo: 2, linea: 'Green', tipo: 'wmata-metro' }
    ]
  },
  'dc-navy-yard-ballpark': {
    ciudad: 'washington-dc',
    nombre: 'Navy Yard-Ballpark',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'dc-anacostia', tiempo: 2, linea: 'Green', tipo: 'wmata-metro' },
      { slug: 'dc-waterfront', tiempo: 2, linea: 'Green', tipo: 'wmata-metro' }
    ]
  },
  'dc-waterfront': {
    ciudad: 'washington-dc',
    nombre: 'Waterfront',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'dc-navy-yard-ballpark', tiempo: 2, linea: 'Green', tipo: 'wmata-metro' },
      { slug: 'dc-lenfant-plaza', tiempo: 3, linea: 'Green', tipo: 'wmata-metro' }
    ]
  },
  'dc-west-hyattsville': {
    ciudad: 'washington-dc',
    nombre: 'West Hyattsville',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'dc-fort-totten', tiempo: 3, linea: 'Green', tipo: 'wmata-metro' },
      { slug: 'dc-prince-georges-plaza', tiempo: 3, linea: 'Green', tipo: 'wmata-metro' }
    ]
  },
  'dc-prince-georges-plaza': {
    ciudad: 'washington-dc',
    nombre: 'Prince Georges Plaza',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'dc-west-hyattsville', tiempo: 3, linea: 'Green', tipo: 'wmata-metro' },
      { slug: 'dc-college-park', tiempo: 3, linea: 'Green', tipo: 'wmata-metro' }
    ]
  },
  'dc-college-park': {
    ciudad: 'washington-dc',
    nombre: 'College Park',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'dc-prince-georges-plaza', tiempo: 3, linea: 'Green', tipo: 'wmata-metro' },
      { slug: 'dc-greenbelt', tiempo: 3, linea: 'Green', tipo: 'wmata-metro' }
    ]
  },
  'dc-greenbelt': {
    ciudad: 'washington-dc',
    nombre: 'Greenbelt',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'dc-college-park', tiempo: 3, linea: 'Green', tipo: 'wmata-metro' }
    ]
  },

  // SILVER LINE: Ashburn → Potomac Ave
  'dc-ashburn': {
    ciudad: 'washington-dc',
    nombre: 'Ashburn',
    lineas: ['Silver'],
    adyacentes: [
      { slug: 'dc-loudoun-gateway', tiempo: 4, linea: 'Silver', tipo: 'wmata-metro' }
    ]
  },
  'dc-loudoun-gateway': {
    ciudad: 'washington-dc',
    nombre: 'Loudoun Gateway',
    lineas: ['Silver'],
    adyacentes: [
      { slug: 'dc-ashburn', tiempo: 4, linea: 'Silver', tipo: 'wmata-metro' },
      { slug: 'dc-dulles-airport', tiempo: 4, linea: 'Silver', tipo: 'wmata-metro' }
    ]
  },
  'dc-dulles-airport': {
    ciudad: 'washington-dc',
    nombre: 'Dulles Airport',
    lineas: ['Silver'],
    adyacentes: [
      { slug: 'dc-loudoun-gateway', tiempo: 4, linea: 'Silver', tipo: 'wmata-metro' },
      { slug: 'dc-innovation-center', tiempo: 4, linea: 'Silver', tipo: 'wmata-metro' }
    ]
  },
  'dc-innovation-center': {
    ciudad: 'washington-dc',
    nombre: 'Innovation Center',
    lineas: ['Silver'],
    adyacentes: [
      { slug: 'dc-dulles-airport', tiempo: 4, linea: 'Silver', tipo: 'wmata-metro' },
      { slug: 'dc-herndon', tiempo: 3, linea: 'Silver', tipo: 'wmata-metro' }
    ]
  },
  'dc-herndon': {
    ciudad: 'washington-dc',
    nombre: 'Herndon',
    lineas: ['Silver'],
    adyacentes: [
      { slug: 'dc-innovation-center', tiempo: 3, linea: 'Silver', tipo: 'wmata-metro' },
      { slug: 'dc-reston-town-center', tiempo: 3, linea: 'Silver', tipo: 'wmata-metro' }
    ]
  },
  'dc-reston-town-center': {
    ciudad: 'washington-dc',
    nombre: 'Reston Town Center',
    lineas: ['Silver'],
    adyacentes: [
      { slug: 'dc-herndon', tiempo: 3, linea: 'Silver', tipo: 'wmata-metro' },
      { slug: 'dc-wiehle-reston-east', tiempo: 3, linea: 'Silver', tipo: 'wmata-metro' }
    ]
  },
  'dc-wiehle-reston-east': {
    ciudad: 'washington-dc',
    nombre: 'Wiehle-Reston East',
    lineas: ['Silver'],
    adyacentes: [
      { slug: 'dc-reston-town-center', tiempo: 3, linea: 'Silver', tipo: 'wmata-metro' },
      { slug: 'dc-spring-hill', tiempo: 3, linea: 'Silver', tipo: 'wmata-metro' }
    ]
  },
  'dc-spring-hill': {
    ciudad: 'washington-dc',
    nombre: 'Spring Hill',
    lineas: ['Silver'],
    adyacentes: [
      { slug: 'dc-wiehle-reston-east', tiempo: 3, linea: 'Silver', tipo: 'wmata-metro' },
      { slug: 'dc-greensboro', tiempo: 3, linea: 'Silver', tipo: 'wmata-metro' }
    ]
  },
  'dc-greensboro': {
    ciudad: 'washington-dc',
    nombre: 'Greensboro',
    lineas: ['Silver'],
    adyacentes: [
      { slug: 'dc-spring-hill', tiempo: 3, linea: 'Silver', tipo: 'wmata-metro' },
      { slug: 'dc-tysons', tiempo: 3, linea: 'Silver', tipo: 'wmata-metro' }
    ]
  },
  'dc-tysons': {
    ciudad: 'washington-dc',
    nombre: 'Tysons',
    lineas: ['Silver'],
    adyacentes: [
      { slug: 'dc-greensboro', tiempo: 3, linea: 'Silver', tipo: 'wmata-metro' },
      { slug: 'dc-mclean', tiempo: 3, linea: 'Silver', tipo: 'wmata-metro' }
    ]
  },
  'dc-mclean': {
    ciudad: 'washington-dc',
    nombre: 'McLean',
    lineas: ['Silver'],
    adyacentes: [
      { slug: 'dc-tysons', tiempo: 3, linea: 'Silver', tipo: 'wmata-metro' },
      { slug: 'dc-east-falls-church', tiempo: 3, linea: 'Silver', tipo: 'wmata-metro' }
    ]
  }
};
