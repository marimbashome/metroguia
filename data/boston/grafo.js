export const grafoBoston = {
  // RED LINE
  'boston-alewife': {
    ciudad: 'boston',
    nombre: 'Alewife',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'boston-davis', tiempo: 2, linea: 'Red', tipo: 'mbta' },
    ]
  },
  'boston-davis': {
    ciudad: 'boston',
    nombre: 'Davis',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'boston-alewife', tiempo: 2, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-porter', tiempo: 2, linea: 'Red', tipo: 'mbta' },
    ]
  },
  'boston-porter': {
    ciudad: 'boston',
    nombre: 'Porter',
    lineas: ['Red', 'Commuter-Rail'],
    adyacentes: [
      { slug: 'boston-davis', tiempo: 2, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-harvard', tiempo: 2, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-cr-porter', tiempo: 3, linea: 'Commuter-Rail', tipo: 'transbordo' },
    ]
  },
  'boston-harvard': {
    ciudad: 'boston',
    nombre: 'Harvard',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'boston-porter', tiempo: 2, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-central', tiempo: 2, linea: 'Red', tipo: 'mbta' },
    ]
  },
  'boston-central': {
    ciudad: 'boston',
    nombre: 'Central',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'boston-harvard', tiempo: 2, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-kendall-mit', tiempo: 2, linea: 'Red', tipo: 'mbta' },
    ]
  },
  'boston-kendall-mit': {
    ciudad: 'boston',
    nombre: 'Kendall/MIT',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'boston-central', tiempo: 2, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-charles-mgh', tiempo: 2, linea: 'Red', tipo: 'mbta' },
    ]
  },
  'boston-charles-mgh': {
    ciudad: 'boston',
    nombre: 'Charles/MGH',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'boston-kendall-mit', tiempo: 2, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-park-street', tiempo: 2, linea: 'Red', tipo: 'mbta' },
    ]
  },
  'boston-park-street': {
    ciudad: 'boston',
    nombre: 'Park Street',
    lineas: ['Red', 'Green'],
    adyacentes: [
      { slug: 'boston-charles-mgh', tiempo: 2, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-downtown-crossing', tiempo: 2, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-boylston', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-government-center', tiempo: 3, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-downtown-crossing': {
    ciudad: 'boston',
    nombre: 'Downtown Crossing',
    lineas: ['Red', 'Orange'],
    adyacentes: [
      { slug: 'boston-park-street', tiempo: 2, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-south-station', tiempo: 2, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-haymarket', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
      { slug: 'boston-chinatown', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
    ]
  },
  'boston-south-station': {
    ciudad: 'boston',
    nombre: 'South Station',
    lineas: ['Red', 'Silver', 'Commuter-Rail'],
    adyacentes: [
      { slug: 'boston-downtown-crossing', tiempo: 2, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-broadway', tiempo: 2, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-courthouse', tiempo: 3, linea: 'Silver', tipo: 'mbta' },
      { slug: 'boston-cr-back-bay', tiempo: 5, linea: 'Commuter-Rail', tipo: 'transbordo' },
      { slug: 'boston-nubian', tiempo: 10, linea: 'Silver', tipo: 'mbta' },
      { slug: 'boston-brockton', tiempo: 35, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
      { slug: 'boston-cr-back-bay', tiempo: 5, linea: 'Commuter-Rail', tipo: 'transbordo' },
    ]
  },
  'boston-broadway': {
    ciudad: 'boston',
    nombre: 'Broadway',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'boston-south-station', tiempo: 2, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-andrew', tiempo: 2, linea: 'Red', tipo: 'mbta' },
    ]
  },
  'boston-andrew': {
    ciudad: 'boston',
    nombre: 'Andrew',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'boston-broadway', tiempo: 2, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-jfk-umass', tiempo: 2, linea: 'Red', tipo: 'mbta' },
    ]
  },
  'boston-jfk-umass': {
    ciudad: 'boston',
    nombre: 'JFK/UMass',
    lineas: ['Red', 'Commuter-Rail'],
    adyacentes: [
      { slug: 'boston-andrew', tiempo: 2, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-savin-hill', tiempo: 2, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-north-quincy', tiempo: 2, linea: 'Red', tipo: 'mbta' },
    ]
  },
  // RED LINE - Ashmont Branch
  'boston-savin-hill': {
    ciudad: 'boston',
    nombre: 'Savin Hill',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'boston-jfk-umass', tiempo: 2, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-fields-corner', tiempo: 2, linea: 'Red', tipo: 'mbta' },
    ]
  },
  'boston-fields-corner': {
    ciudad: 'boston',
    nombre: 'Fields Corner',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'boston-savin-hill', tiempo: 2, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-shawmut', tiempo: 2, linea: 'Red', tipo: 'mbta' },
    ]
  },
  'boston-shawmut': {
    ciudad: 'boston',
    nombre: 'Shawmut',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'boston-fields-corner', tiempo: 2, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-ashmont', tiempo: 2, linea: 'Red', tipo: 'mbta' },
    ]
  },
  'boston-ashmont': {
    ciudad: 'boston',
    nombre: 'Ashmont',
    lineas: ['Red', 'Mattapan'],
    adyacentes: [
      { slug: 'boston-shawmut', tiempo: 2, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-cedar-grove', tiempo: 2, linea: 'Mattapan', tipo: 'mattapan' },
    ]
  },
  // RED LINE - Braintree Branch
  'boston-north-quincy': {
    ciudad: 'boston',
    nombre: 'North Quincy',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'boston-jfk-umass', tiempo: 2, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-wollaston', tiempo: 2, linea: 'Red', tipo: 'mbta' },
    ]
  },
  'boston-wollaston': {
    ciudad: 'boston',
    nombre: 'Wollaston',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'boston-north-quincy', tiempo: 2, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-quincy-center', tiempo: 2, linea: 'Red', tipo: 'mbta' },
    ]
  },
  'boston-quincy-center': {
    ciudad: 'boston',
    nombre: 'Quincy Center',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'boston-wollaston', tiempo: 2, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-quincy-adams', tiempo: 2, linea: 'Red', tipo: 'mbta' },
    ]
  },
  'boston-quincy-adams': {
    ciudad: 'boston',
    nombre: 'Quincy Adams',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'boston-quincy-center', tiempo: 2, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-braintree', tiempo: 2, linea: 'Red', tipo: 'mbta' },
    ]
  },
  'boston-braintree': {
    ciudad: 'boston',
    nombre: 'Braintree',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'boston-quincy-adams', tiempo: 2, linea: 'Red', tipo: 'mbta' },
    ]
  },

  // ORANGE LINE
  'boston-oak-grove': {
    ciudad: 'boston',
    nombre: 'Oak Grove',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'boston-malden-center', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
    ]
  },
  'boston-malden-center': {
    ciudad: 'boston',
    nombre: 'Malden Center',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'boston-oak-grove', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
      { slug: 'boston-wellington', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
    ]
  },
  'boston-wellington': {
    ciudad: 'boston',
    nombre: 'Wellington',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'boston-malden-center', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
      { slug: 'boston-assembly', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
    ]
  },
  'boston-assembly': {
    ciudad: 'boston',
    nombre: 'Assembly',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'boston-wellington', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
      { slug: 'boston-sullivan-square', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
    ]
  },
  'boston-sullivan-square': {
    ciudad: 'boston',
    nombre: 'Sullivan Square',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'boston-assembly', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
      { slug: 'boston-community-college', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
    ]
  },
  'boston-community-college': {
    ciudad: 'boston',
    nombre: 'Community College',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'boston-sullivan-square', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
      { slug: 'boston-north-station', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
    ]
  },
  'boston-north-station': {
    ciudad: 'boston',
    nombre: 'North Station',
    lineas: ['Orange', 'Green', 'Commuter-Rail'],
    adyacentes: [
      { slug: 'boston-community-college', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
      { slug: 'boston-haymarket', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
      { slug: 'boston-science-park', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-salem', tiempo: 30, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
      { slug: 'boston-lowell', tiempo: 45, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
    ]
  },
  'boston-haymarket': {
    ciudad: 'boston',
    nombre: 'Haymarket',
    lineas: ['Orange', 'Green'],
    adyacentes: [
      { slug: 'boston-north-station', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
      { slug: 'boston-state', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
      { slug: 'boston-government-center', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-state': {
    ciudad: 'boston',
    nombre: 'State',
    lineas: ['Orange', 'Blue'],
    adyacentes: [
      { slug: 'boston-haymarket', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
      { slug: 'boston-downtown-crossing', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
      { slug: 'boston-government-center', tiempo: 2, linea: 'Blue', tipo: 'mbta' },
    ]
  },
  'boston-chinatown': {
    ciudad: 'boston',
    nombre: 'Chinatown',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'boston-downtown-crossing', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
      { slug: 'boston-tufts-medical-center', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
    ]
  },
  'boston-tufts-medical-center': {
    ciudad: 'boston',
    nombre: 'Tufts Medical Center',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'boston-chinatown', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
      { slug: 'boston-back-bay', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
    ]
  },
  'boston-back-bay': {
    ciudad: 'boston',
    nombre: 'Back Bay',
    lineas: ['Orange', 'Commuter-Rail'],
    adyacentes: [
      { slug: 'boston-tufts-medical-center', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
      { slug: 'boston-massachusetts-avenue', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
      { slug: 'boston-cr-back-bay', tiempo: 3, linea: 'Commuter-Rail', tipo: 'transbordo' },
    ]
  },
  'boston-massachusetts-avenue': {
    ciudad: 'boston',
    nombre: 'Massachusetts Avenue',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'boston-back-bay', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
      { slug: 'boston-ruggles', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
    ]
  },
  'boston-ruggles': {
    ciudad: 'boston',
    nombre: 'Ruggles',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'boston-massachusetts-avenue', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
      { slug: 'boston-roxbury-crossing', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
    ]
  },
  'boston-roxbury-crossing': {
    ciudad: 'boston',
    nombre: 'Roxbury Crossing',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'boston-ruggles', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
      { slug: 'boston-jackson-square', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
    ]
  },
  'boston-jackson-square': {
    ciudad: 'boston',
    nombre: 'Jackson Square',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'boston-roxbury-crossing', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
      { slug: 'boston-stony-brook', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
    ]
  },
  'boston-stony-brook': {
    ciudad: 'boston',
    nombre: 'Stony Brook',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'boston-jackson-square', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
      { slug: 'boston-green-street', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
    ]
  },
  'boston-green-street': {
    ciudad: 'boston',
    nombre: 'Green Street',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'boston-stony-brook', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
      { slug: 'boston-forest-hills', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
    ]
  },
  'boston-forest-hills': {
    ciudad: 'boston',
    nombre: 'Forest Hills',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'boston-green-street', tiempo: 2, linea: 'Orange', tipo: 'mbta' },
    ]
  },

  // BLUE LINE
  'boston-wonderland': {
    ciudad: 'boston',
    nombre: 'Wonderland',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'boston-revere-beach', tiempo: 2, linea: 'Blue', tipo: 'mbta' },
    ]
  },
  'boston-revere-beach': {
    ciudad: 'boston',
    nombre: 'Revere Beach',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'boston-wonderland', tiempo: 2, linea: 'Blue', tipo: 'mbta' },
      { slug: 'boston-beachmont', tiempo: 2, linea: 'Blue', tipo: 'mbta' },
    ]
  },
  'boston-beachmont': {
    ciudad: 'boston',
    nombre: 'Beachmont',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'boston-revere-beach', tiempo: 2, linea: 'Blue', tipo: 'mbta' },
      { slug: 'boston-suffolk-downs', tiempo: 2, linea: 'Blue', tipo: 'mbta' },
    ]
  },
  'boston-suffolk-downs': {
    ciudad: 'boston',
    nombre: 'Suffolk Downs',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'boston-beachmont', tiempo: 2, linea: 'Blue', tipo: 'mbta' },
      { slug: 'boston-orient-heights', tiempo: 2, linea: 'Blue', tipo: 'mbta' },
    ]
  },
  'boston-orient-heights': {
    ciudad: 'boston',
    nombre: 'Orient Heights',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'boston-suffolk-downs', tiempo: 2, linea: 'Blue', tipo: 'mbta' },
      { slug: 'boston-wood-island', tiempo: 2, linea: 'Blue', tipo: 'mbta' },
    ]
  },
  'boston-wood-island': {
    ciudad: 'boston',
    nombre: 'Wood Island',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'boston-orient-heights', tiempo: 2, linea: 'Blue', tipo: 'mbta' },
      { slug: 'boston-airport', tiempo: 2, linea: 'Blue', tipo: 'mbta' },
    ]
  },
  'boston-airport': {
    ciudad: 'boston',
    nombre: 'Airport',
    lineas: ['Blue', 'Silver'],
    adyacentes: [
      { slug: 'boston-wood-island', tiempo: 2, linea: 'Blue', tipo: 'mbta' },
      { slug: 'boston-maverick', tiempo: 2, linea: 'Blue', tipo: 'mbta' },
      { slug: 'boston-silver-airport', tiempo: 4, linea: 'Silver', tipo: 'mbta' },
    ]
  },
  'boston-maverick': {
    ciudad: 'boston',
    nombre: 'Maverick',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'boston-airport', tiempo: 2, linea: 'Blue', tipo: 'mbta' },
      { slug: 'boston-aquarium', tiempo: 2, linea: 'Blue', tipo: 'mbta' },
    ]
  },
  'boston-aquarium': {
    ciudad: 'boston',
    nombre: 'Aquarium',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'boston-maverick', tiempo: 2, linea: 'Blue', tipo: 'mbta' },
      { slug: 'boston-state', tiempo: 2, linea: 'Blue', tipo: 'mbta' },
    ]
  },
  'boston-government-center': {
    ciudad: 'boston',
    nombre: 'Government Center',
    lineas: ['Blue', 'Green'],
    adyacentes: [
      { slug: 'boston-state', tiempo: 2, linea: 'Blue', tipo: 'mbta' },
      { slug: 'boston-bowdoin', tiempo: 2, linea: 'Blue', tipo: 'mbta' },
      { slug: 'boston-haymarket', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-park-street', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-bowdoin': {
    ciudad: 'boston',
    nombre: 'Bowdoin',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'boston-government-center', tiempo: 2, linea: 'Blue', tipo: 'mbta' },
    ]
  },

  // GREEN LINE TRUNK
  'boston-medford-tufts': {
    ciudad: 'boston',
    nombre: 'Medford/Tufts',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-ball-square', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-ball-square': {
    ciudad: 'boston',
    nombre: 'Ball Square',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-medford-tufts', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-magoun-square', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-magoun-square': {
    ciudad: 'boston',
    nombre: 'Magoun Square',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-ball-square', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-gilman-square', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-gilman-square': {
    ciudad: 'boston',
    nombre: 'Gilman Square',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-magoun-square', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-east-somerville', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-east-somerville': {
    ciudad: 'boston',
    nombre: 'East Somerville',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-gilman-square', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-union-square', tiempo: 3, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-lechmere', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-union-square': {
    ciudad: 'boston',
    nombre: 'Union Square',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-east-somerville', tiempo: 3, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-lechmere', tiempo: 3, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-lechmere': {
    ciudad: 'boston',
    nombre: 'Lechmere',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-east-somerville', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-union-square', tiempo: 3, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-science-park', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-science-park': {
    ciudad: 'boston',
    nombre: 'Science Park',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-lechmere', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-north-station', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-government-center': {
    ciudad: 'boston',
    nombre: 'Government Center',
    lineas: ['Blue', 'Green'],
    adyacentes: [
      { slug: 'boston-state', tiempo: 2, linea: 'Blue', tipo: 'mbta' },
      { slug: 'boston-bowdoin', tiempo: 2, linea: 'Blue', tipo: 'mbta' },
      { slug: 'boston-haymarket', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-park-street', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-boylston': {
    ciudad: 'boston',
    nombre: 'Boylston',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-park-street', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-arlington', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-arlington': {
    ciudad: 'boston',
    nombre: 'Arlington',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-boylston', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-copley', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-copley': {
    ciudad: 'boston',
    nombre: 'Copley',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-arlington', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-hynes-convention-center', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-prudential', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-hynes-convention-center': {
    ciudad: 'boston',
    nombre: 'Hynes Convention Center',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-copley', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-kenmore', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-kenmore': {
    ciudad: 'boston',
    nombre: 'Kenmore',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-hynes-convention-center', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-blandford-street', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-st-marys-street', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-fenway', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },

  // GREEN LINE - B BRANCH
  'boston-blandford-street': {
    ciudad: 'boston',
    nombre: 'Blandford Street',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-kenmore', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-bu-east', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-bu-east': {
    ciudad: 'boston',
    nombre: 'BU East',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-blandford-street', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-bu-central', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-bu-central': {
    ciudad: 'boston',
    nombre: 'BU Central',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-bu-east', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-bu-west', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-bu-west': {
    ciudad: 'boston',
    nombre: 'BU West',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-bu-central', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-st-paul-street-b', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-st-paul-street-b': {
    ciudad: 'boston',
    nombre: 'St Paul Street',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-bu-west', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-pleasant-street', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-pleasant-street': {
    ciudad: 'boston',
    nombre: 'Pleasant Street',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-st-paul-street-b', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-babcock-street', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-babcock-street': {
    ciudad: 'boston',
    nombre: 'Babcock Street',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-pleasant-street', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-packards-corner', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-packards-corner': {
    ciudad: 'boston',
    nombre: 'Packards Corner',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-babcock-street', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-harvard-avenue', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-harvard-avenue': {
    ciudad: 'boston',
    nombre: 'Harvard Avenue',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-packards-corner', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-griggs-street', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-griggs-street': {
    ciudad: 'boston',
    nombre: 'Griggs Street',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-harvard-avenue', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-allston-street', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-allston-street': {
    ciudad: 'boston',
    nombre: 'Allston Street',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-griggs-street', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-warren-street', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-warren-street': {
    ciudad: 'boston',
    nombre: 'Warren Street',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-allston-street', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-washington-street-b', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-washington-street-b': {
    ciudad: 'boston',
    nombre: 'Washington Street',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-warren-street', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-sutherland-road', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-sutherland-road': {
    ciudad: 'boston',
    nombre: 'Sutherland Road',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-washington-street-b', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-chiswick-road', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-chiswick-road': {
    ciudad: 'boston',
    nombre: 'Chiswick Road',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-sutherland-road', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-chestnut-hill-avenue', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-chestnut-hill-avenue': {
    ciudad: 'boston',
    nombre: 'Chestnut Hill Avenue',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-chiswick-road', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-south-street', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-south-street': {
    ciudad: 'boston',
    nombre: 'South Street',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-chestnut-hill-avenue', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-boston-college', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-boston-college': {
    ciudad: 'boston',
    nombre: 'Boston College',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-south-street', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },

  // GREEN LINE - C BRANCH
  'boston-st-marys-street': {
    ciudad: 'boston',
    nombre: 'St Mary\'s Street',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-kenmore', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-hawes-street', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-hawes-street': {
    ciudad: 'boston',
    nombre: 'Hawes Street',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-st-marys-street', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-kent-street', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-kent-street': {
    ciudad: 'boston',
    nombre: 'Kent Street',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-hawes-street', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-st-paul-street-c', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-st-paul-street-c': {
    ciudad: 'boston',
    nombre: 'St Paul Street',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-kent-street', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-coolidge-corner', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-coolidge-corner': {
    ciudad: 'boston',
    nombre: 'Coolidge Corner',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-st-paul-street-c', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-summit-avenue', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-summit-avenue': {
    ciudad: 'boston',
    nombre: 'Summit Avenue',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-coolidge-corner', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-brandon-hall', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-brandon-hall': {
    ciudad: 'boston',
    nombre: 'Brandon Hall',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-summit-avenue', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-fairbanks-street', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-fairbanks-street': {
    ciudad: 'boston',
    nombre: 'Fairbanks Street',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-brandon-hall', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-washington-square', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-washington-square': {
    ciudad: 'boston',
    nombre: 'Washington Square',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-fairbanks-street', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-tappan-street', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-tappan-street': {
    ciudad: 'boston',
    nombre: 'Tappan Street',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-washington-square', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-dean-road', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-dean-road': {
    ciudad: 'boston',
    nombre: 'Dean Road',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-tappan-street', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-englewood-avenue', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-englewood-avenue': {
    ciudad: 'boston',
    nombre: 'Englewood Avenue',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-dean-road', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-cleveland-circle', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-cleveland-circle': {
    ciudad: 'boston',
    nombre: 'Cleveland Circle',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-englewood-avenue', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },

  // GREEN LINE - D BRANCH
  'boston-fenway': {
    ciudad: 'boston',
    nombre: 'Fenway',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-kenmore', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-longwood', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-longwood': {
    ciudad: 'boston',
    nombre: 'Longwood',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-fenway', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-brookline-village', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-brookline-village': {
    ciudad: 'boston',
    nombre: 'Brookline Village',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-longwood', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-brookline-hills', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-brookline-hills': {
    ciudad: 'boston',
    nombre: 'Brookline Hills',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-brookline-village', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-beaconsfield', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-beaconsfield': {
    ciudad: 'boston',
    nombre: 'Beaconsfield',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-brookline-hills', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-reservoir', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-reservoir': {
    ciudad: 'boston',
    nombre: 'Reservoir',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-beaconsfield', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-chestnut-hill', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-chestnut-hill': {
    ciudad: 'boston',
    nombre: 'Chestnut Hill',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-reservoir', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-newton-centre', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-newton-centre': {
    ciudad: 'boston',
    nombre: 'Newton Centre',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-chestnut-hill', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-newton-highlands', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-newton-highlands': {
    ciudad: 'boston',
    nombre: 'Newton Highlands',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-newton-centre', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-eliot', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-eliot': {
    ciudad: 'boston',
    nombre: 'Eliot',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-newton-highlands', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-waban', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-waban': {
    ciudad: 'boston',
    nombre: 'Waban',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-eliot', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-woodland', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-woodland': {
    ciudad: 'boston',
    nombre: 'Woodland',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-waban', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-riverside', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-riverside': {
    ciudad: 'boston',
    nombre: 'Riverside',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-woodland', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },

  // GREEN LINE - E BRANCH
  'boston-prudential': {
    ciudad: 'boston',
    nombre: 'Prudential',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-copley', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-symphony', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-symphony': {
    ciudad: 'boston',
    nombre: 'Symphony',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-prudential', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-northeastern', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-northeastern': {
    ciudad: 'boston',
    nombre: 'Northeastern',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-symphony', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-museum-of-fine-arts', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-museum-of-fine-arts': {
    ciudad: 'boston',
    nombre: 'Museum of Fine Arts',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-northeastern', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-longwood-medical-area', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-longwood-medical-area': {
    ciudad: 'boston',
    nombre: 'Longwood Medical Area',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-museum-of-fine-arts', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-brigham-circle', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-brigham-circle': {
    ciudad: 'boston',
    nombre: 'Brigham Circle',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-longwood-medical-area', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-fenwood-road', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-fenwood-road': {
    ciudad: 'boston',
    nombre: 'Fenwood Road',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-brigham-circle', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-mission-park', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-mission-park': {
    ciudad: 'boston',
    nombre: 'Mission Park',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-fenwood-road', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-riverway', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-riverway': {
    ciudad: 'boston',
    nombre: 'Riverway',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-mission-park', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-back-of-the-hill', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-back-of-the-hill': {
    ciudad: 'boston',
    nombre: 'Back of the Hill',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-riverway', tiempo: 2, linea: 'Green', tipo: 'mbta' },
      { slug: 'boston-heath-street', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },
  'boston-heath-street': {
    ciudad: 'boston',
    nombre: 'Heath Street',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-back-of-the-hill', tiempo: 2, linea: 'Green', tipo: 'mbta' },
    ]
  },

  // SILVER LINE
  'boston-courthouse': {
    ciudad: 'boston',
    nombre: 'Courthouse',
    lineas: ['Silver'],
    adyacentes: [
      { slug: 'boston-south-station', tiempo: 3, linea: 'Silver', tipo: 'mbta' },
      { slug: 'boston-world-trade-center', tiempo: 3, linea: 'Silver', tipo: 'mbta' },
    ]
  },
  'boston-world-trade-center': {
    ciudad: 'boston',
    nombre: 'World Trade Center',
    lineas: ['Silver'],
    adyacentes: [
      { slug: 'boston-courthouse', tiempo: 3, linea: 'Silver', tipo: 'mbta' },
      { slug: 'boston-silver-line-way', tiempo: 3, linea: 'Silver', tipo: 'mbta' },
    ]
  },
  'boston-silver-line-way': {
    ciudad: 'boston',
    nombre: 'Silver Line Way',
    lineas: ['Silver'],
    adyacentes: [
      { slug: 'boston-world-trade-center', tiempo: 3, linea: 'Silver', tipo: 'mbta' },
      { slug: 'boston-silver-airport', tiempo: 3, linea: 'Silver', tipo: 'mbta' },
    ]
  },
  'boston-silver-airport': {
    ciudad: 'boston',
    nombre: 'Airport (Silver Line)',
    lineas: ['Silver'],
    adyacentes: [
      { slug: 'boston-silver-line-way', tiempo: 3, linea: 'Silver', tipo: 'mbta' },
      { slug: 'boston-airport', tiempo: 4, linea: 'Silver', tipo: 'mbta' },
    ]
  },
  'boston-nubian': {
    ciudad: 'boston',
    nombre: 'Nubian',
    lineas: ['Silver'],
    adyacentes: [
      { slug: 'boston-south-station', tiempo: 10, linea: 'Silver', tipo: 'mbta' },
      { slug: 'boston-eastern-avenue', tiempo: 5, linea: 'Silver', tipo: 'mbta' },
    ]
  },
  'boston-eastern-avenue': {
    ciudad: 'boston',
    nombre: 'Eastern Avenue',
    lineas: ['Silver'],
    adyacentes: [
      { slug: 'boston-nubian', tiempo: 5, linea: 'Silver', tipo: 'mbta' },
      { slug: 'boston-box-district', tiempo: 3, linea: 'Silver', tipo: 'mbta' },
    ]
  },
  'boston-box-district': {
    ciudad: 'boston',
    nombre: 'Box District',
    lineas: ['Silver'],
    adyacentes: [
      { slug: 'boston-eastern-avenue', tiempo: 3, linea: 'Silver', tipo: 'mbta' },
      { slug: 'boston-bellingham-square', tiempo: 3, linea: 'Silver', tipo: 'mbta' },
    ]
  },
  'boston-bellingham-square': {
    ciudad: 'boston',
    nombre: 'Bellingham Square',
    lineas: ['Silver'],
    adyacentes: [
      { slug: 'boston-box-district', tiempo: 3, linea: 'Silver', tipo: 'mbta' },
      { slug: 'boston-chelsea', tiempo: 3, linea: 'Silver', tipo: 'mbta' },
    ]
  },
  'boston-chelsea': {
    ciudad: 'boston',
    nombre: 'Chelsea',
    lineas: ['Silver'],
    adyacentes: [
      { slug: 'boston-bellingham-square', tiempo: 3, linea: 'Silver', tipo: 'mbta' },
    ]
  },

  // MATTAPAN TROLLEY
  'boston-cedar-grove': {
    ciudad: 'boston',
    nombre: 'Cedar Grove',
    lineas: ['Mattapan'],
    adyacentes: [
      { slug: 'boston-ashmont', tiempo: 2, linea: 'Mattapan', tipo: 'mattapan' },
      { slug: 'boston-butler', tiempo: 2, linea: 'Mattapan', tipo: 'mattapan' },
    ]
  },
  'boston-butler': {
    ciudad: 'boston',
    nombre: 'Butler',
    lineas: ['Mattapan'],
    adyacentes: [
      { slug: 'boston-cedar-grove', tiempo: 2, linea: 'Mattapan', tipo: 'mattapan' },
      { slug: 'boston-milton', tiempo: 2, linea: 'Mattapan', tipo: 'mattapan' },
    ]
  },
  'boston-milton': {
    ciudad: 'boston',
    nombre: 'Milton',
    lineas: ['Mattapan'],
    adyacentes: [
      { slug: 'boston-butler', tiempo: 2, linea: 'Mattapan', tipo: 'mattapan' },
      { slug: 'boston-central-avenue', tiempo: 2, linea: 'Mattapan', tipo: 'mattapan' },
    ]
  },
  'boston-central-avenue': {
    ciudad: 'boston',
    nombre: 'Central Avenue',
    lineas: ['Mattapan'],
    adyacentes: [
      { slug: 'boston-milton', tiempo: 2, linea: 'Mattapan', tipo: 'mattapan' },
      { slug: 'boston-valley-road', tiempo: 2, linea: 'Mattapan', tipo: 'mattapan' },
    ]
  },
  'boston-valley-road': {
    ciudad: 'boston',
    nombre: 'Valley Road',
    lineas: ['Mattapan'],
    adyacentes: [
      { slug: 'boston-central-avenue', tiempo: 2, linea: 'Mattapan', tipo: 'mattapan' },
      { slug: 'boston-capen-street', tiempo: 2, linea: 'Mattapan', tipo: 'mattapan' },
    ]
  },
  'boston-capen-street': {
    ciudad: 'boston',
    nombre: 'Capen Street',
    lineas: ['Mattapan'],
    adyacentes: [
      { slug: 'boston-valley-road', tiempo: 2, linea: 'Mattapan', tipo: 'mattapan' },
      { slug: 'boston-mattapan', tiempo: 2, linea: 'Mattapan', tipo: 'mattapan' },
    ]
  },
  'boston-mattapan': {
    ciudad: 'boston',
    nombre: 'Mattapan',
    lineas: ['Mattapan'],
    adyacentes: [
      { slug: 'boston-capen-street', tiempo: 2, linea: 'Mattapan', tipo: 'mattapan' },
    ]
  },

  // COMMUTER RAIL - From North Station
  'boston-salem': {
    ciudad: 'boston',
    nombre: 'Salem',
    lineas: ['Commuter-Rail'],
    adyacentes: [
      { slug: 'boston-north-station', tiempo: 30, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
      { slug: 'boston-gloucester', tiempo: 35, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
    ]
  },
  'boston-gloucester': {
    ciudad: 'boston',
    nombre: 'Gloucester',
    lineas: ['Commuter-Rail'],
    adyacentes: [
      { slug: 'boston-salem', tiempo: 35, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
      { slug: 'boston-rockport', tiempo: 10, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
    ]
  },
  'boston-rockport': {
    ciudad: 'boston',
    nombre: 'Rockport',
    lineas: ['Commuter-Rail'],
    adyacentes: [
      { slug: 'boston-gloucester', tiempo: 10, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
    ]
  },
  'boston-lowell': {
    ciudad: 'boston',
    nombre: 'Lowell',
    lineas: ['Commuter-Rail'],
    adyacentes: [
      { slug: 'boston-north-station', tiempo: 45, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
    ]
  },
  'boston-haverhill': {
    ciudad: 'boston',
    nombre: 'Haverhill',
    lineas: ['Commuter-Rail'],
    adyacentes: [
      { slug: 'boston-north-station', tiempo: 55, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
    ]
  },
  'boston-newburyport': {
    ciudad: 'boston',
    nombre: 'Newburyport',
    lineas: ['Commuter-Rail'],
    adyacentes: [
      { slug: 'boston-north-station', tiempo: 60, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
    ]
  },
  'boston-wachusett': {
    ciudad: 'boston',
    nombre: 'Wachusett',
    lineas: ['Commuter-Rail'],
    adyacentes: [
      { slug: 'boston-north-station', tiempo: 90, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
    ]
  },

  // COMMUTER RAIL - From South Station via Back Bay
  'boston-cr-back-bay': {
    ciudad: 'boston',
    nombre: 'Back Bay (Commuter Rail)',
    lineas: ['Commuter-Rail'],
    adyacentes: [
      { slug: 'boston-south-station', tiempo: 5, linea: 'Commuter-Rail', tipo: 'transbordo' },
      { slug: 'boston-back-bay', tiempo: 3, linea: 'Commuter-Rail', tipo: 'transbordo' },
      { slug: 'boston-framingham', tiempo: 35, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
      { slug: 'boston-natick', tiempo: 25, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
      { slug: 'boston-providence', tiempo: 50, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
    ]
  },
  'boston-framingham': {
    ciudad: 'boston',
    nombre: 'Framingham',
    lineas: ['Commuter-Rail'],
    adyacentes: [
      { slug: 'boston-cr-back-bay', tiempo: 35, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
      { slug: 'boston-worcester', tiempo: 30, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
      { slug: 'boston-wellesley', tiempo: 10, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
    ]
  },
  'boston-worcester': {
    ciudad: 'boston',
    nombre: 'Worcester',
    lineas: ['Commuter-Rail'],
    adyacentes: [
      { slug: 'boston-framingham', tiempo: 30, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
    ]
  },
  'boston-natick': {
    ciudad: 'boston',
    nombre: 'Natick',
    lineas: ['Commuter-Rail'],
    adyacentes: [
      { slug: 'boston-cr-back-bay', tiempo: 25, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
      { slug: 'boston-wellesley', tiempo: 8, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
    ]
  },
  'boston-wellesley': {
    ciudad: 'boston',
    nombre: 'Wellesley',
    lineas: ['Commuter-Rail'],
    adyacentes: [
      { slug: 'boston-natick', tiempo: 8, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
      { slug: 'boston-framingham', tiempo: 10, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
    ]
  },
  'boston-providence': {
    ciudad: 'boston',
    nombre: 'Providence',
    lineas: ['Commuter-Rail'],
    adyacentes: [
      { slug: 'boston-cr-back-bay', tiempo: 50, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
      { slug: 'boston-tf-green-airport', tiempo: 10, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
    ]
  },
  'boston-tf-green-airport': {
    ciudad: 'boston',
    nombre: 'T.F. Green Airport',
    lineas: ['Commuter-Rail'],
    adyacentes: [
      { slug: 'boston-providence', tiempo: 10, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
    ]
  },
  'boston-foxboro': {
    ciudad: 'boston',
    nombre: 'Foxboro',
    lineas: ['Commuter-Rail'],
    adyacentes: [
      { slug: 'boston-south-station', tiempo: 45, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
    ]
  },
  'boston-brockton': {
    ciudad: 'boston',
    nombre: 'Brockton',
    lineas: ['Commuter-Rail'],
    adyacentes: [
      { slug: 'boston-south-station', tiempo: 35, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
      { slug: 'boston-middleborough', tiempo: 25, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
    ]
  },
  'boston-middleborough': {
    ciudad: 'boston',
    nombre: 'Middleborough',
    lineas: ['Commuter-Rail'],
    adyacentes: [
      { slug: 'boston-brockton', tiempo: 25, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
    ]
  },
  'boston-kingston': {
    ciudad: 'boston',
    nombre: 'Kingston',
    lineas: ['Commuter-Rail'],
    adyacentes: [
      { slug: 'boston-south-station', tiempo: 55, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
      { slug: 'boston-plymouth', tiempo: 15, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
    ]
  },
  'boston-plymouth': {
    ciudad: 'boston',
    nombre: 'Plymouth',
    lineas: ['Commuter-Rail'],
    adyacentes: [
      { slug: 'boston-kingston', tiempo: 15, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
    ]
  },
  'boston-greenbush': {
    ciudad: 'boston',
    nombre: 'Greenbush',
    lineas: ['Commuter-Rail'],
    adyacentes: [
      { slug: 'boston-south-station', tiempo: 55, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
    ]
  },
  'boston-needham-heights': {
    ciudad: 'boston',
    nombre: 'Needham Heights',
    lineas: ['Commuter-Rail'],
    adyacentes: [
      { slug: 'boston-south-station', tiempo: 35, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
    ]
  },
  'boston-forge-park': {
    ciudad: 'boston',
    nombre: 'Forge Park',
    lineas: ['Commuter-Rail'],
    adyacentes: [
      { slug: 'boston-south-station', tiempo: 55, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
    ]
  },
  'boston-cr-porter': {
    ciudad: 'boston',
    nombre: 'Porter (Commuter Rail)',
    lineas: ['Commuter-Rail'],
    adyacentes: [
      { slug: 'boston-porter', tiempo: 3, linea: 'Commuter-Rail', tipo: 'transbordo' },
    ]
  },
};
