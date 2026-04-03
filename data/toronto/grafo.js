/**
 * Grafo de transporte público de Toronto (YYZ) para MetroGuia.mx
 * Sistema TTC Subway (Líneas 1, 2, 4) + UP Express + GO Transit
 * 
 * Estructura:
 * {
 *   ciudad: 'toronto',
 *   nombre: string,
 *   lineas: string[],
 *   adyacentes: [{ slug, tiempo (minutos), linea, tipo ('ttc-subway' | 'go-transit' | 'up-express' | 'transbordo') }]
 * }
 * 
 * Líneas:
 * - '1': Yonge-University (U-shaped)
 * - '2': Bloor-Danforth (west-east)
 * - '4': Sheppard (short, west-east)
 * - 'UP': UP Express (Union to Pearson)
 * - 'GO-Lakeshore', 'GO-Barrie', 'GO-Milton', 'GO-Kitchener': GO Transit
 */

export const grafoToronto = {
  // ============================================
  // LÍNEA 1 - YONGE BRANCH (North to South)
  // ============================================
  'toronto-finch': {
    ciudad: 'toronto',
    nombre: 'Finch',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-north-york-centre', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-north-york-centre': {
    ciudad: 'toronto',
    nombre: 'North York Centre',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-finch', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-sheppard-yonge', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-sheppard-yonge': {
    ciudad: 'toronto',
    nombre: 'Sheppard-Yonge',
    lineas: ['1', '4'],
    adyacentes: [
      { slug: 'toronto-north-york-centre', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-york-mills', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-bayview', tiempo: 2, linea: '4', tipo: 'ttc-subway' },
    ]
  },
  'toronto-york-mills': {
    ciudad: 'toronto',
    nombre: 'York Mills',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-sheppard-yonge', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-lawrence', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-lawrence': {
    ciudad: 'toronto',
    nombre: 'Lawrence',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-york-mills', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-eglinton', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-eglinton': {
    ciudad: 'toronto',
    nombre: 'Eglinton',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-lawrence', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-davisville', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-davisville': {
    ciudad: 'toronto',
    nombre: 'Davisville',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-eglinton', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-st-clair', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-st-clair': {
    ciudad: 'toronto',
    nombre: 'St Clair',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-davisville', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-summerhill', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-summerhill': {
    ciudad: 'toronto',
    nombre: 'Summerhill',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-st-clair', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-rosedale', tiempo: 1, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-rosedale': {
    ciudad: 'toronto',
    nombre: 'Rosedale',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-summerhill', tiempo: 1, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-bloor-yonge', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-bloor-yonge': {
    ciudad: 'toronto',
    nombre: 'Bloor-Yonge',
    lineas: ['1', '2'],
    adyacentes: [
      { slug: 'toronto-rosedale', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-wellesley', tiempo: 1, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-sherbourne', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-wellesley': {
    ciudad: 'toronto',
    nombre: 'Wellesley',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-bloor-yonge', tiempo: 1, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-college', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-college': {
    ciudad: 'toronto',
    nombre: 'College',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-wellesley', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-dundas', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-dundas': {
    ciudad: 'toronto',
    nombre: 'Dundas',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-college', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-queen', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-queen': {
    ciudad: 'toronto',
    nombre: 'Queen',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-dundas', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-king', tiempo: 1, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-king': {
    ciudad: 'toronto',
    nombre: 'King',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-queen', tiempo: 1, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-union-station', tiempo: 1, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-union-station': {
    ciudad: 'toronto',
    nombre: 'Union Station',
    lineas: ['1', 'UP', 'GO-Lakeshore', 'GO-Kitchener', 'GO-Barrie', 'GO-Milton', 'GO-Richmond Hill', 'GO-Stouffville'],
    adyacentes: [
      { slug: 'toronto-king', tiempo: 1, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-st-andrew', tiempo: 1, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-bloor-up', tiempo: 8, linea: 'UP', tipo: 'up-express' },
      { slug: 'toronto-exhibition-go', tiempo: 5, linea: 'GO-Lakeshore', tipo: 'go-transit' },
      { slug: 'toronto-pickering-go', tiempo: 30, linea: 'GO-Lakeshore', tipo: 'go-transit' },
      { slug: 'toronto-brampton-go', tiempo: 45, linea: 'GO-Kitchener', tipo: 'go-transit' },
      { slug: 'toronto-barrie-south-go', tiempo: 90, linea: 'GO-Barrie', tipo: 'go-transit' },
      { slug: 'toronto-mississauga-go', tiempo: 40, linea: 'GO-Milton', tipo: 'go-transit' },
      { slug: 'richmond-hill', tiempo: 35, linea: 'GO-Richmond Hill', tipo: 'go-transit' },
      { slug: 'stouffville', tiempo: 50, linea: 'GO-Stouffville', tipo: 'go-transit' },
    ]
  },
  'toronto-st-andrew': {
    ciudad: 'toronto',
    nombre: 'St Andrew',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-union-station', tiempo: 1, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-osgoode', tiempo: 1, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-osgoode': {
    ciudad: 'toronto',
    nombre: 'Osgoode',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-st-andrew', tiempo: 1, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-st-patrick', tiempo: 1, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-st-patrick': {
    ciudad: 'toronto',
    nombre: 'St Patrick',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-osgoode', tiempo: 1, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-queens-park', tiempo: 1, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-queens-park': {
    ciudad: 'toronto',
    nombre: 'Queens Park',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-st-patrick', tiempo: 1, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-museum', tiempo: 1, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-museum': {
    ciudad: 'toronto',
    nombre: 'Museum',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-queens-park', tiempo: 1, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-st-george', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-st-george': {
    ciudad: 'toronto',
    nombre: 'St George',
    lineas: ['1', '2'],
    adyacentes: [
      { slug: 'toronto-museum', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-dupont', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-bay', tiempo: 1, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-dupont': {
    ciudad: 'toronto',
    nombre: 'Dupont',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-st-george', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-spadina', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-spadina': {
    ciudad: 'toronto',
    nombre: 'Spadina',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-dupont', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-st-clair-west', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-st-clair-west': {
    ciudad: 'toronto',
    nombre: 'St Clair West',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-spadina', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-eglinton-west', tiempo: 3, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-eglinton-west': {
    ciudad: 'toronto',
    nombre: 'Eglinton West',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-st-clair-west', tiempo: 3, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-glencairn', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-glencairn': {
    ciudad: 'toronto',
    nombre: 'Glencairn',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-eglinton-west', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-lawrence-west', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-lawrence-west': {
    ciudad: 'toronto',
    nombre: 'Lawrence West',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-glencairn', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-yorkdale', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-yorkdale': {
    ciudad: 'toronto',
    nombre: 'Yorkdale',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-lawrence-west', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-wilson', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-wilson': {
    ciudad: 'toronto',
    nombre: 'Wilson',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-yorkdale', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-sheppard-west', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-sheppard-west': {
    ciudad: 'toronto',
    nombre: 'Sheppard West',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-wilson', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-downsview-park', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-downsview-park': {
    ciudad: 'toronto',
    nombre: 'Downsview Park',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-sheppard-west', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-finch-west', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-finch-west': {
    ciudad: 'toronto',
    nombre: 'Finch West',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-downsview-park', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-highway-407', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-highway-407': {
    ciudad: 'toronto',
    nombre: 'Highway 407',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-finch-west', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-pioneer-village', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-pioneer-village': {
    ciudad: 'toronto',
    nombre: 'Pioneer Village',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-highway-407', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-vaughan-mc', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-vaughan-mc': {
    ciudad: 'toronto',
    nombre: 'Vaughan Metropolitan Centre',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-pioneer-village', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
    ]
  },

  // ============================================
  // LÍNEA 2 - BLOOR-DANFORTH (West to East)
  // ============================================
  'toronto-kipling': {
    ciudad: 'toronto',
    nombre: 'Kipling',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-islington', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-islington': {
    ciudad: 'toronto',
    nombre: 'Islington',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-kipling', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
      { slug: 'toronto-royal-york', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-royal-york': {
    ciudad: 'toronto',
    nombre: 'Royal York',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-islington', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
      { slug: 'toronto-old-mill', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-old-mill': {
    ciudad: 'toronto',
    nombre: 'Old Mill',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-royal-york', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
      { slug: 'toronto-jane', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-jane': {
    ciudad: 'toronto',
    nombre: 'Jane',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-old-mill', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
      { slug: 'toronto-runnymede', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-runnymede': {
    ciudad: 'toronto',
    nombre: 'Runnymede',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-jane', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
      { slug: 'toronto-high-park', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-high-park': {
    ciudad: 'toronto',
    nombre: 'High Park',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-runnymede', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
      { slug: 'toronto-keele', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-keele': {
    ciudad: 'toronto',
    nombre: 'Keele',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-high-park', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
      { slug: 'toronto-dundas-west', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-dundas-west': {
    ciudad: 'toronto',
    nombre: 'Dundas West',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-keele', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
      { slug: 'toronto-lansdowne', tiempo: 1, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-lansdowne': {
    ciudad: 'toronto',
    nombre: 'Lansdowne',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-dundas-west', tiempo: 1, linea: '2', tipo: 'ttc-subway' },
      { slug: 'toronto-dufferin', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-dufferin': {
    ciudad: 'toronto',
    nombre: 'Dufferin',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-lansdowne', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
      { slug: 'toronto-ossington', tiempo: 1, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-ossington': {
    ciudad: 'toronto',
    nombre: 'Ossington',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-dufferin', tiempo: 1, linea: '2', tipo: 'ttc-subway' },
      { slug: 'toronto-christie', tiempo: 1, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-christie': {
    ciudad: 'toronto',
    nombre: 'Christie',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-ossington', tiempo: 1, linea: '2', tipo: 'ttc-subway' },
      { slug: 'toronto-bathurst-l2', tiempo: 1, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-bathurst-l2': {
    ciudad: 'toronto',
    nombre: 'Bathurst',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-christie', tiempo: 1, linea: '2', tipo: 'ttc-subway' },
      { slug: 'toronto-spadina-l2', tiempo: 1, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-spadina-l2': {
    ciudad: 'toronto',
    nombre: 'Spadina (Line 2)',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-bathurst-l2', tiempo: 1, linea: '2', tipo: 'ttc-subway' },
      { slug: 'toronto-bay', tiempo: 1, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-bay': {
    ciudad: 'toronto',
    nombre: 'Bay',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-spadina-l2', tiempo: 1, linea: '2', tipo: 'ttc-subway' },
      { slug: 'toronto-st-george', tiempo: 1, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-sherbourne': {
    ciudad: 'toronto',
    nombre: 'Sherbourne',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-bloor-yonge', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
      { slug: 'toronto-castle-frank', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-castle-frank': {
    ciudad: 'toronto',
    nombre: 'Castle Frank',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-sherbourne', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
      { slug: 'toronto-broadview', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-broadview': {
    ciudad: 'toronto',
    nombre: 'Broadview',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-castle-frank', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
      { slug: 'toronto-chester', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-chester': {
    ciudad: 'toronto',
    nombre: 'Chester',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-broadview', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
      { slug: 'toronto-pape', tiempo: 1, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-pape': {
    ciudad: 'toronto',
    nombre: 'Pape',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-chester', tiempo: 1, linea: '2', tipo: 'ttc-subway' },
      { slug: 'toronto-donlands', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-donlands': {
    ciudad: 'toronto',
    nombre: 'Donlands',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-pape', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
      { slug: 'toronto-greenwood', tiempo: 1, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-greenwood': {
    ciudad: 'toronto',
    nombre: 'Greenwood',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-donlands', tiempo: 1, linea: '2', tipo: 'ttc-subway' },
      { slug: 'toronto-coxwell', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-coxwell': {
    ciudad: 'toronto',
    nombre: 'Coxwell',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-greenwood', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
      { slug: 'toronto-woodbine', tiempo: 1, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-woodbine': {
    ciudad: 'toronto',
    nombre: 'Woodbine',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-coxwell', tiempo: 1, linea: '2', tipo: 'ttc-subway' },
      { slug: 'toronto-main-street', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-main-street': {
    ciudad: 'toronto',
    nombre: 'Main Street',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-woodbine', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
      { slug: 'toronto-victoria-park', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-victoria-park': {
    ciudad: 'toronto',
    nombre: 'Victoria Park',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-main-street', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
      { slug: 'toronto-warden', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-warden': {
    ciudad: 'toronto',
    nombre: 'Warden',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-victoria-park', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
      { slug: 'toronto-kennedy', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-kennedy': {
    ciudad: 'toronto',
    nombre: 'Kennedy',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-warden', tiempo: 2, linea: '2', tipo: 'ttc-subway' },
    ]
  },

  // ============================================
  // LÍNEA 4 - SHEPPARD (West to East)
  // ============================================
  'toronto-bayview': {
    ciudad: 'toronto',
    nombre: 'Bayview',
    lineas: ['4'],
    adyacentes: [
      { slug: 'toronto-sheppard-yonge', tiempo: 2, linea: '4', tipo: 'ttc-subway' },
      { slug: 'toronto-bessarion', tiempo: 2, linea: '4', tipo: 'ttc-subway' },
    ]
  },
  'toronto-bessarion': {
    ciudad: 'toronto',
    nombre: 'Bessarion',
    lineas: ['4'],
    adyacentes: [
      { slug: 'toronto-bayview', tiempo: 2, linea: '4', tipo: 'ttc-subway' },
      { slug: 'toronto-leslie', tiempo: 2, linea: '4', tipo: 'ttc-subway' },
    ]
  },
  'toronto-leslie': {
    ciudad: 'toronto',
    nombre: 'Leslie',
    lineas: ['4'],
    adyacentes: [
      { slug: 'toronto-bessarion', tiempo: 2, linea: '4', tipo: 'ttc-subway' },
      { slug: 'toronto-don-mills', tiempo: 2, linea: '4', tipo: 'ttc-subway' },
    ]
  },
  'toronto-don-mills': {
    ciudad: 'toronto',
    nombre: 'Don Mills',
    lineas: ['4'],
    adyacentes: [
      { slug: 'toronto-leslie', tiempo: 2, linea: '4', tipo: 'ttc-subway' },
    ]
  },

  // ============================================
  // UP EXPRESS (Union to Pearson)
  // ============================================
  'toronto-bloor-up': {
    ciudad: 'toronto',
    nombre: 'Bloor',
    lineas: ['UP'],
    adyacentes: [
      { slug: 'toronto-union-station', tiempo: 8, linea: 'UP', tipo: 'up-express' },
      { slug: 'toronto-weston-up', tiempo: 5, linea: 'UP', tipo: 'up-express' },
    ]
  },
  'toronto-weston-up': {
    ciudad: 'toronto',
    nombre: 'Weston',
    lineas: ['UP'],
    adyacentes: [
      { slug: 'toronto-bloor-up', tiempo: 5, linea: 'UP', tipo: 'up-express' },
      { slug: 'toronto-pearson-airport', tiempo: 12, linea: 'UP', tipo: 'up-express' },
    ]
  },
  'toronto-pearson-airport': {
    ciudad: 'toronto',
    nombre: 'Pearson Airport',
    lineas: ['UP'],
    adyacentes: [
      { slug: 'toronto-weston-up', tiempo: 12, linea: 'UP', tipo: 'up-express' },
    ]
  },

  // ============================================
  // GO TRANSIT - LAKESHORE LINE
  // ============================================
  'toronto-exhibition-go': {
    ciudad: 'toronto',
    nombre: 'Exhibition',
    lineas: ['GO-Lakeshore'],
    adyacentes: [
      { slug: 'toronto-union-station', tiempo: 5, linea: 'GO-Lakeshore', tipo: 'go-transit' },
      { slug: 'toronto-mimico-go', tiempo: 5, linea: 'GO-Lakeshore', tipo: 'go-transit' },
    ]
  },
  'toronto-mimico-go': {
    ciudad: 'toronto',
    nombre: 'Mimico',
    lineas: ['GO-Lakeshore'],
    adyacentes: [
      { slug: 'toronto-exhibition-go', tiempo: 5, linea: 'GO-Lakeshore', tipo: 'go-transit' },
      { slug: 'toronto-oakville-go', tiempo: 5, linea: 'GO-Lakeshore', tipo: 'go-transit' },
    ]
  },
  'toronto-oakville-go': {
    ciudad: 'toronto',
    nombre: 'Oakville',
    lineas: ['GO-Lakeshore'],
    adyacentes: [
      { slug: 'toronto-mimico-go', tiempo: 5, linea: 'GO-Lakeshore', tipo: 'go-transit' },
      { slug: 'toronto-burlington-go', tiempo: 25, linea: 'GO-Lakeshore', tipo: 'go-transit' },
    ]
  },
  'toronto-burlington-go': {
    ciudad: 'toronto',
    nombre: 'Burlington',
    lineas: ['GO-Lakeshore'],
    adyacentes: [
      { slug: 'toronto-oakville-go', tiempo: 25, linea: 'GO-Lakeshore', tipo: 'go-transit' },
    ]
  },
  'toronto-pickering-go': {
    ciudad: 'toronto',
    nombre: 'Pickering',
    lineas: ['GO-Lakeshore'],
    adyacentes: [
      { slug: 'toronto-union-station', tiempo: 30, linea: 'GO-Lakeshore', tipo: 'go-transit' },
      { slug: 'toronto-oshawa-go', tiempo: 15, linea: 'GO-Lakeshore', tipo: 'go-transit' },
    ]
  },
  'toronto-oshawa-go': {
    ciudad: 'toronto',
    nombre: 'Oshawa',
    lineas: ['GO-Lakeshore'],
    adyacentes: [
      { slug: 'toronto-pickering-go', tiempo: 15, linea: 'GO-Lakeshore', tipo: 'go-transit' },
    ]
  },

  // ============================================
  // GO TRANSIT - OTHER LINES
  // ============================================
  'toronto-brampton-go': {
    ciudad: 'toronto',
    nombre: 'Brampton',
    lineas: ['GO-Kitchener'],
    adyacentes: [
      { slug: 'toronto-union-station', tiempo: 45, linea: 'GO-Kitchener', tipo: 'go-transit' },
      { slug: 'toronto-mississauga-go', tiempo: 40, linea: 'GO-Milton', tipo: 'go-transit' },
    ]
  },
  'toronto-barrie-south-go': {
    ciudad: 'toronto',
    nombre: 'Barrie South',
    lineas: ['GO-Barrie'],
    adyacentes: [
      { slug: 'toronto-union-station', tiempo: 90, linea: 'GO-Barrie', tipo: 'go-transit' },
    ]
  },
  'toronto-mississauga-go': {
    ciudad: 'toronto',
    nombre: 'Mississauga',
    lineas: ['GO-Milton'],
    adyacentes: [
      { slug: 'toronto-union-station', tiempo: 40, linea: 'GO-Milton', tipo: 'go-transit' },
      { slug: 'toronto-brampton-go', tiempo: 40, linea: 'GO-Milton', tipo: 'go-transit' },
    ]
  },

  'agincourt': {
    ciudad: 'toronto',
    nombre: 'Agincourt',
    lineas: ['GO-Stouffville'],
    adyacentes: [
      { slug: 'stouffville', tiempo: 15, linea: 'GO-Stouffville', tipo: 'go-transit' },
    ]
  },
  'bloomington': {
    ciudad: 'toronto',
    nombre: 'Bloomington',
    lineas: ['GO-Richmond Hill'],
    adyacentes: [
      { slug: 'gormley', tiempo: 8, linea: 'GO-Richmond Hill', tipo: 'go-transit' },
      { slug: 'richmond-hill', tiempo: 5, linea: 'GO-Richmond Hill', tipo: 'go-transit' },
    ]
  },
  'gormley': {
    ciudad: 'toronto',
    nombre: 'Gormley',
    lineas: ['GO-Richmond Hill'],
    adyacentes: [
      { slug: 'bloomington', tiempo: 8, linea: 'GO-Richmond Hill', tipo: 'go-transit' },
    ]
  },
  'markham': {
    ciudad: 'toronto',
    nombre: 'Markham',
    lineas: ['GO-Stouffville'],
    adyacentes: [
      { slug: 'milliken', tiempo: 5, linea: 'GO-Stouffville', tipo: 'go-transit' },
      { slug: 'stouffville', tiempo: 5, linea: 'GO-Stouffville', tipo: 'go-transit' },
    ]
  },
  'milliken': {
    ciudad: 'toronto',
    nombre: 'Milliken',
    lineas: ['GO-Stouffville'],
    adyacentes: [
      { slug: 'old-elm', tiempo: 5, linea: 'GO-Stouffville', tipo: 'go-transit' },
      { slug: 'markham', tiempo: 5, linea: 'GO-Stouffville', tipo: 'go-transit' },
    ]
  },
  'old-elm': {
    ciudad: 'toronto',
    nombre: 'Old Elm',
    lineas: ['GO-Stouffville'],
    adyacentes: [
      { slug: 'milliken', tiempo: 5, linea: 'GO-Stouffville', tipo: 'go-transit' },
    ]
  },
  'richmond-hill': {
    ciudad: 'toronto',
    nombre: 'Richmond Hill',
    lineas: ['GO-Richmond Hill'],
    adyacentes: [
      { slug: 'bloomington', tiempo: 5, linea: 'GO-Richmond Hill', tipo: 'go-transit' },
      { slug: 'toronto-union-station', tiempo: 35, linea: 'GO-Richmond Hill', tipo: 'go-transit' },
    ]
  },
  'stouffville': {
    ciudad: 'toronto',
    nombre: 'Stouffville',
    lineas: ['GO-Stouffville'],
    adyacentes: [
      { slug: 'markham', tiempo: 5, linea: 'GO-Stouffville', tipo: 'go-transit' },
      { slug: 'unionville', tiempo: 3, linea: 'GO-Stouffville', tipo: 'go-transit' },
      { slug: 'agincourt', tiempo: 15, linea: 'GO-Stouffville', tipo: 'go-transit' },
      { slug: 'toronto-union-station', tiempo: 50, linea: 'GO-Stouffville', tipo: 'go-transit' },
    ]
  },
  'unionville': {
    ciudad: 'toronto',
    nombre: 'Unionville',
    lineas: ['GO-Stouffville'],
    adyacentes: [
      { slug: 'stouffville', tiempo: 3, linea: 'GO-Stouffville', tipo: 'go-transit' },
    ]
  }
};
