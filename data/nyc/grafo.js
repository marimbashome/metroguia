export const grafoNYC = {
  'nyc-1-av': {
    ciudad: 'nyc',
    nombre: '1 Av',
    lineas: ["L"],
    adyacentes: [
      { slug: 'nyc-3-av', tiempo: 2, linea: 'L', tipo: 'subway' },
      { slug: 'nyc-bedford-av', tiempo: 2, linea: 'L', tipo: 'subway' }
    ]
  },
  'nyc-103-st': {
    ciudad: 'nyc',
    nombre: '103 St',
    lineas: ["1", "C"],
    adyacentes: [
      { slug: 'nyc-cathedral-pkwy-110-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-96-st', tiempo: 2, linea: '1', tipo: 'subway' }
    ]
  },
  'nyc-103-st-corona-plaza': {
    ciudad: 'nyc',
    nombre: '103 St-Corona Plaza',
    lineas: ["7"],
    adyacentes: [
      { slug: 'nyc-111-st', tiempo: 2, linea: '7', tipo: 'subway' },
      { slug: 'nyc-junction-blvd', tiempo: 2, linea: '7', tipo: 'subway' }
    ]
  },
  'nyc-104-st': {
    ciudad: 'nyc',
    nombre: '104 St',
    lineas: ["A", "J"],
    adyacentes: [
      { slug: 'nyc-rockaway-blvd', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-111-st', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-aqueduct-racetrack', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-woodhaven-blvd', tiempo: 2, linea: 'J', tipo: 'subway' }
    ]
  },
  'nyc-110-st': {
    ciudad: 'nyc',
    nombre: '110 St',
    lineas: ["6"],
    adyacentes: [
      { slug: 'nyc-116-st', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-96-st', tiempo: 2, linea: '6', tipo: 'subway' }
    ]
  },
  'nyc-111-st': {
    ciudad: 'nyc',
    nombre: '111 St',
    lineas: ["7", "A", "J"],
    adyacentes: [
      { slug: 'nyc-mets-willets-point', tiempo: 2, linea: '7', tipo: 'subway' },
      { slug: 'nyc-103-st-corona-plaza', tiempo: 2, linea: '7', tipo: 'subway' },
      { slug: 'nyc-104-st', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-ozone-park-lefferts-blvd', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-121-st', tiempo: 2, linea: 'J', tipo: 'subway' }
    ]
  },
  'nyc-116-st': {
    ciudad: 'nyc',
    nombre: '116 St',
    lineas: ["2", "3", "6", "B", "C"],
    adyacentes: [
      { slug: 'nyc-125-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-central-park-north-110-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-110-st', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-cathedral-pkwy-110-st', tiempo: 2, linea: 'C', tipo: 'subway' }
    ]
  },
  'nyc-116-st-columbia-university': {
    ciudad: 'nyc',
    nombre: '116 St-Columbia University',
    lineas: ["1"],
    adyacentes: [
      { slug: 'nyc-125-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-cathedral-pkwy-110-st', tiempo: 2, linea: '1', tipo: 'subway' }
    ]
  },
  'nyc-121-st': {
    ciudad: 'nyc',
    nombre: '121 St',
    lineas: ["J"],
    adyacentes: [
      { slug: 'nyc-sutphin-blvd-archer-av-jfk-airport', tiempo: 2, linea: 'J', tipo: 'subway' },
      { slug: 'nyc-111-st', tiempo: 2, linea: 'J', tipo: 'subway' }
    ]
  },
  'nyc-125-st': {
    ciudad: 'nyc',
    nombre: '125 St',
    lineas: ["1", "2", "3", "4", "5", "6", "A", "B", "C", "D"],
    adyacentes: [
      { slug: 'nyc-137-st-city-college', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-116-st-columbia-university', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-135-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-116-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-138-st-grand-concourse', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-86-st', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-3-av-138-st', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-145-st', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-59-st-columbus-circle', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-135-st': {
    ciudad: 'nyc',
    nombre: '135 St',
    lineas: ["2", "3", "B", "C"],
    adyacentes: [
      { slug: 'nyc-149-st-grand-concourse', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-125-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-145-st', tiempo: 2, linea: '3', tipo: 'subway' }
    ]
  },
  'nyc-137-st-city-college': {
    ciudad: 'nyc',
    nombre: '137 St-City College',
    lineas: ["1"],
    adyacentes: [
      { slug: 'nyc-145-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-125-st', tiempo: 2, linea: '1', tipo: 'subway' }
    ]
  },
  'nyc-138-st-grand-concourse': {
    ciudad: 'nyc',
    nombre: '138 St-Grand Concourse',
    lineas: ["4", "5"],
    adyacentes: [
      { slug: 'nyc-149-st-grand-concourse', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-125-st', tiempo: 2, linea: '4', tipo: 'subway' }
    ]
  },
  'nyc-14-st': {
    ciudad: 'nyc',
    nombre: '14 St',
    lineas: ["1", "2", "3", "A", "C", "E", "F", "M"],
    adyacentes: [
      { slug: 'nyc-18-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-christopher-st-sheridan-sq', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-34-st-penn-station', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-chambers-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-w-4-st-washington-sq', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-23-st', tiempo: 2, linea: 'C', tipo: 'subway' },
      { slug: 'nyc-14-st-union-sq', tiempo: 5, linea: 'transfer', tipo: 'transbordo' }
    ]
  },
  'nyc-14-st-union-sq': {
    ciudad: 'nyc',
    nombre: '14 St-Union Sq',
    lineas: ["4", "5", "6", "N", "Q", "R", "W"],
    adyacentes: [
      { slug: 'nyc-23-st', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-brooklyn-bridge-city-hall', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-astor-pl', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-8-st-nyu', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-34-st-herald-sq', tiempo: 2, linea: 'Q', tipo: 'subway' },
      { slug: 'nyc-canal-st', tiempo: 2, linea: 'Q', tipo: 'subway' },
      { slug: 'nyc-14-st', tiempo: 5, linea: 'transfer', tipo: 'transbordo' }
    ]
  },
  'nyc-145-st': {
    ciudad: 'nyc',
    nombre: '145 St',
    lineas: ["1", "3", "A", "B", "C", "D"],
    adyacentes: [
      { slug: 'nyc-157-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-137-st-city-college', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-harlem-148-st', tiempo: 2, linea: '3', tipo: 'subway' },
      { slug: 'nyc-135-st', tiempo: 2, linea: '3', tipo: 'subway' },
      { slug: 'nyc-168-st', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-125-st', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-155-st', tiempo: 2, linea: 'C', tipo: 'subway' }
    ]
  },
  'nyc-149-st-grand-concourse': {
    ciudad: 'nyc',
    nombre: '149 St-Grand Concourse',
    lineas: ["2", "4", "5"],
    adyacentes: [
      { slug: 'nyc-3-av-149-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-135-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-161-st-yankee-stadium', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-138-st-grand-concourse', tiempo: 2, linea: '4', tipo: 'subway' }
    ]
  },
  'nyc-15-st-prospect-park': {
    ciudad: 'nyc',
    nombre: '15 St-Prospect Park',
    lineas: ["F", "G"],
    adyacentes: [
      { slug: 'nyc-7-av', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-fort-hamilton-pkwy', tiempo: 2, linea: 'F', tipo: 'subway' }
    ]
  },
  'nyc-155-st': {
    ciudad: 'nyc',
    nombre: '155 St',
    lineas: ["C", "D"],
    adyacentes: [
      { slug: 'nyc-163-st-amsterdam-av', tiempo: 2, linea: 'C', tipo: 'subway' },
      { slug: 'nyc-145-st', tiempo: 2, linea: 'C', tipo: 'subway' },
      { slug: 'nyc-161-st-yankee-stadium', tiempo: 2, linea: 'D', tipo: 'subway' }
    ]
  },
  'nyc-157-st': {
    ciudad: 'nyc',
    nombre: '157 St',
    lineas: ["1"],
    adyacentes: [
      { slug: 'nyc-168-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-145-st', tiempo: 2, linea: '1', tipo: 'subway' }
    ]
  },
  'nyc-161-st-yankee-stadium': {
    ciudad: 'nyc',
    nombre: '161 St-Yankee Stadium',
    lineas: ["4", "D"],
    adyacentes: [
      { slug: 'nyc-167-st', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-149-st-grand-concourse', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-155-st', tiempo: 2, linea: 'D', tipo: 'subway' }
    ]
  },
  'nyc-163-st-amsterdam-av': {
    ciudad: 'nyc',
    nombre: '163 St-Amsterdam Av',
    lineas: ["C"],
    adyacentes: [
      { slug: 'nyc-168-st', tiempo: 2, linea: 'C', tipo: 'subway' },
      { slug: 'nyc-155-st', tiempo: 2, linea: 'C', tipo: 'subway' }
    ]
  },
  'nyc-167-st': {
    ciudad: 'nyc',
    nombre: '167 St',
    lineas: ["4", "D"],
    adyacentes: [
      { slug: 'nyc-170-st', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-161-st-yankee-stadium', tiempo: 2, linea: '4', tipo: 'subway' }
    ]
  },
  'nyc-168-st': {
    ciudad: 'nyc',
    nombre: '168 St',
    lineas: ["1", "A", "C"],
    adyacentes: [
      { slug: 'nyc-181-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-157-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-175-st', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-145-st', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-163-st-amsterdam-av', tiempo: 2, linea: 'C', tipo: 'subway' }
    ]
  },
  'nyc-169-st': {
    ciudad: 'nyc',
    nombre: '169 St',
    lineas: ["F"],
    adyacentes: [
      { slug: 'nyc-jamaica-179-st', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-parsons-blvd', tiempo: 2, linea: 'F', tipo: 'subway' }
    ]
  },
  'nyc-170-st': {
    ciudad: 'nyc',
    nombre: '170 St',
    lineas: ["4", "D"],
    adyacentes: [
      { slug: 'nyc-mt-eden-av', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-167-st', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-174-175-sts', tiempo: 2, linea: 'D', tipo: 'subway' }
    ]
  },
  'nyc-174-175-sts': {
    ciudad: 'nyc',
    nombre: '174-175 Sts',
    lineas: ["D"],
    adyacentes: [
      { slug: 'nyc-tremont-av', tiempo: 2, linea: 'D', tipo: 'subway' },
      { slug: 'nyc-170-st', tiempo: 2, linea: 'D', tipo: 'subway' }
    ]
  },
  'nyc-174-st': {
    ciudad: 'nyc',
    nombre: '174 St',
    lineas: ["2", "5"],
    adyacentes: [
      { slug: 'nyc-west-farms-sq-e-tremont-av', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-freeman-st', tiempo: 2, linea: '2', tipo: 'subway' }
    ]
  },
  'nyc-175-st': {
    ciudad: 'nyc',
    nombre: '175 St',
    lineas: ["A"],
    adyacentes: [
      { slug: 'nyc-181-st', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-168-st', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-176-st': {
    ciudad: 'nyc',
    nombre: '176 St',
    lineas: ["4"],
    adyacentes: [
      { slug: 'nyc-burnside-av', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-mt-eden-av', tiempo: 2, linea: '4', tipo: 'subway' }
    ]
  },
  'nyc-18-av': {
    ciudad: 'nyc',
    nombre: '18 Av',
    lineas: ["D", "F", "N"],
    adyacentes: [
      { slug: 'nyc-79-st', tiempo: 2, linea: 'D', tipo: 'subway' },
      { slug: 'nyc-20-av', tiempo: 2, linea: 'D', tipo: 'subway' },
      { slug: 'nyc-ditmas-av', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-av-i', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-new-utrecht-av', tiempo: 2, linea: 'N', tipo: 'subway' }
    ]
  },
  'nyc-18-st': {
    ciudad: 'nyc',
    nombre: '18 St',
    lineas: ["1"],
    adyacentes: [
      { slug: 'nyc-23-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-14-st', tiempo: 2, linea: '1', tipo: 'subway' }
    ]
  },
  'nyc-181-st': {
    ciudad: 'nyc',
    nombre: '181 St',
    lineas: ["1", "A"],
    adyacentes: [
      { slug: 'nyc-191-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-168-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-190-st', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-175-st', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-182-183-sts': {
    ciudad: 'nyc',
    nombre: '182-183 Sts',
    lineas: ["D"],
    adyacentes: [
      { slug: 'nyc-fordham-rd', tiempo: 2, linea: 'D', tipo: 'subway' },
      { slug: 'nyc-tremont-av', tiempo: 2, linea: 'D', tipo: 'subway' }
    ]
  },
  'nyc-183-st': {
    ciudad: 'nyc',
    nombre: '183 St',
    lineas: ["4"],
    adyacentes: [
      { slug: 'nyc-fordham-rd', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-burnside-av', tiempo: 2, linea: '4', tipo: 'subway' }
    ]
  },
  'nyc-190-st': {
    ciudad: 'nyc',
    nombre: '190 St',
    lineas: ["A"],
    adyacentes: [
      { slug: 'nyc-dyckman-st', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-181-st', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-191-st': {
    ciudad: 'nyc',
    nombre: '191 St',
    lineas: ["1"],
    adyacentes: [
      { slug: 'nyc-dyckman-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-181-st', tiempo: 2, linea: '1', tipo: 'subway' }
    ]
  },
  'nyc-2-av': {
    ciudad: 'nyc',
    nombre: '2 Av',
    lineas: ["F"],
    adyacentes: [
      { slug: 'nyc-broadway-lafayette-st', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-delancey-st-essex-st', tiempo: 2, linea: 'F', tipo: 'subway' }
    ]
  },
  'nyc-20-av': {
    ciudad: 'nyc',
    nombre: '20 Av',
    lineas: ["D", "N"],
    adyacentes: [
      { slug: 'nyc-18-av', tiempo: 2, linea: 'D', tipo: 'subway' },
      { slug: 'nyc-bay-pkwy', tiempo: 2, linea: 'D', tipo: 'subway' }
    ]
  },
  'nyc-207-st': {
    ciudad: 'nyc',
    nombre: '207 St',
    lineas: ["1"],
    adyacentes: [
      { slug: 'nyc-215-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-dyckman-st', tiempo: 2, linea: '1', tipo: 'subway' }
    ]
  },
  'nyc-21-st': {
    ciudad: 'nyc',
    nombre: '21 St',
    lineas: ["G"],
    adyacentes: [
      { slug: 'nyc-court-sq', tiempo: 2, linea: 'G', tipo: 'subway' },
      { slug: 'nyc-greenpoint-av', tiempo: 2, linea: 'G', tipo: 'subway' }
    ]
  },
  'nyc-21-st-queensbridge': {
    ciudad: 'nyc',
    nombre: '21 St-Queensbridge',
    lineas: ["F"],
    adyacentes: [
      { slug: 'nyc-queens-plaza', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-roosevelt-island', tiempo: 2, linea: 'F', tipo: 'subway' }
    ]
  },
  'nyc-215-st': {
    ciudad: 'nyc',
    nombre: '215 St',
    lineas: ["1"],
    adyacentes: [
      { slug: 'nyc-marble-hill-225-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-207-st', tiempo: 2, linea: '1', tipo: 'subway' }
    ]
  },
  'nyc-219-st': {
    ciudad: 'nyc',
    nombre: '219 St',
    lineas: ["2"],
    adyacentes: [
      { slug: 'nyc-225-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-gun-hill-rd', tiempo: 2, linea: '2', tipo: 'subway' }
    ]
  },
  'nyc-225-st': {
    ciudad: 'nyc',
    nombre: '225 St',
    lineas: ["2"],
    adyacentes: [
      { slug: 'nyc-233-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-219-st', tiempo: 2, linea: '2', tipo: 'subway' }
    ]
  },
  'nyc-23-st': {
    ciudad: 'nyc',
    nombre: '23 St',
    lineas: ["1", "4", "5", "6", "C", "F", "M", "N", "R", "W"],
    adyacentes: [
      { slug: 'nyc-28-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-18-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-14-st-union-sq', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-34-st-penn-station', tiempo: 2, linea: 'C', tipo: 'subway' },
      { slug: 'nyc-14-st', tiempo: 2, linea: 'C', tipo: 'subway' },
      { slug: 'nyc-34-st-herald-sq', tiempo: 2, linea: 'F', tipo: 'subway' }
    ]
  },
  'nyc-231-st': {
    ciudad: 'nyc',
    nombre: '231 St',
    lineas: ["1"],
    adyacentes: [
      { slug: 'nyc-238-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-marble-hill-225-st', tiempo: 2, linea: '1', tipo: 'subway' }
    ]
  },
  'nyc-233-st': {
    ciudad: 'nyc',
    nombre: '233 St',
    lineas: ["2"],
    adyacentes: [
      { slug: 'nyc-nereid-av', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-225-st', tiempo: 2, linea: '2', tipo: 'subway' }
    ]
  },
  'nyc-238-st': {
    ciudad: 'nyc',
    nombre: '238 St',
    lineas: ["1"],
    adyacentes: [
      { slug: 'nyc-van-cortlandt-park-242-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-231-st', tiempo: 2, linea: '1', tipo: 'subway' }
    ]
  },
  'nyc-25-av': {
    ciudad: 'nyc',
    nombre: '25 Av',
    lineas: ["D"],
    adyacentes: [
      { slug: 'nyc-bay-pkwy', tiempo: 2, linea: 'D', tipo: 'subway' },
      { slug: 'nyc-bay-50-st', tiempo: 2, linea: 'D', tipo: 'subway' }
    ]
  },
  'nyc-25-st': {
    ciudad: 'nyc',
    nombre: '25 St',
    lineas: ["D", "R"],
    adyacentes: [
      { slug: 'nyc-prospect-av', tiempo: 2, linea: 'D', tipo: 'subway' },
      { slug: 'nyc-36-st', tiempo: 2, linea: 'D', tipo: 'subway' }
    ]
  },
  'nyc-28-st': {
    ciudad: 'nyc',
    nombre: '28 St',
    lineas: ["1", "4", "5", "6", "N", "R", "W"],
    adyacentes: [
      { slug: 'nyc-34-st-penn-station', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-23-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-33-st', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-34-st-herald-sq', tiempo: 2, linea: 'N', tipo: 'subway' }
    ]
  },
  'nyc-3-av': {
    ciudad: 'nyc',
    nombre: '3 Av',
    lineas: ["L"],
    adyacentes: [
      { slug: 'nyc-union-sq-14-st', tiempo: 2, linea: 'L', tipo: 'subway' },
      { slug: 'nyc-1-av', tiempo: 2, linea: 'L', tipo: 'subway' }
    ]
  },
  'nyc-3-av-138-st': {
    ciudad: 'nyc',
    nombre: '3 Av-138 St',
    lineas: ["6"],
    adyacentes: [
      { slug: 'nyc-brook-av', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-125-st', tiempo: 2, linea: '6', tipo: 'subway' }
    ]
  },
  'nyc-3-av-149-st': {
    ciudad: 'nyc',
    nombre: '3 Av-149 St',
    lineas: ["2", "5"],
    adyacentes: [
      { slug: 'nyc-jackson-av', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-149-st-grand-concourse', tiempo: 2, linea: '2', tipo: 'subway' }
    ]
  },
  'nyc-30-av': {
    ciudad: 'nyc',
    nombre: '30 Av',
    lineas: ["N", "W"],
    adyacentes: [
      { slug: 'nyc-astoria-blvd', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-broadway', tiempo: 2, linea: 'N', tipo: 'subway' }
    ]
  },
  'nyc-33-st': {
    ciudad: 'nyc',
    nombre: '33 St',
    lineas: ["4", "5", "6"],
    adyacentes: [
      { slug: 'nyc-grand-central-42-st', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-28-st', tiempo: 2, linea: '4', tipo: 'subway' }
    ]
  },
  'nyc-33-st-rawson-st': {
    ciudad: 'nyc',
    nombre: '33 St-Rawson St',
    lineas: ["7"],
    adyacentes: [
      { slug: 'nyc-40-st-lowery-st', tiempo: 2, linea: '7', tipo: 'subway' },
      { slug: 'nyc-queensboro-plaza', tiempo: 2, linea: '7', tipo: 'subway' }
    ]
  },
  'nyc-34-st-herald-sq': {
    ciudad: 'nyc',
    nombre: '34 St-Herald Sq',
    lineas: ["B", "D", "F", "M", "N", "Q", "R", "W"],
    adyacentes: [
      { slug: 'nyc-42-st-bryant-park', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-w-4-st-washington-sq', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-23-st', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-times-sq-42-st', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-28-st', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-14-st-union-sq', tiempo: 2, linea: 'Q', tipo: 'subway' }
    ]
  },
  'nyc-34-st-hudson-yards': {
    ciudad: 'nyc',
    nombre: '34 St-Hudson Yards',
    lineas: ["7"],
    adyacentes: [
      { slug: 'nyc-times-sq-42-st', tiempo: 2, linea: '7', tipo: 'subway' }
    ]
  },
  'nyc-34-st-penn-station': {
    ciudad: 'nyc',
    nombre: '34 St-Penn Station',
    lineas: ["1", "2", "3", "A", "C", "E"],
    adyacentes: [
      { slug: 'nyc-times-sq-42-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-28-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-14-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-42-st-port-authority-bus-terminal', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-23-st', tiempo: 2, linea: 'C', tipo: 'subway' },
      { slug: 'nyc-secaucus-junction', tiempo: 35, linea: 'NJT', tipo: 'regional' }
    ]
  },
  'nyc-36-av': {
    ciudad: 'nyc',
    nombre: '36 Av',
    lineas: ["N", "W"],
    adyacentes: [
      { slug: 'nyc-broadway', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-39-av-dutch-kills', tiempo: 2, linea: 'N', tipo: 'subway' }
    ]
  },
  'nyc-36-st': {
    ciudad: 'nyc',
    nombre: '36 St',
    lineas: ["D", "E", "F", "M", "N", "R"],
    adyacentes: [
      { slug: 'nyc-atlantic-av-barclays-ctr', tiempo: 2, linea: 'D', tipo: 'subway' },
      { slug: 'nyc-9-st', tiempo: 2, linea: 'D', tipo: 'subway' },
      { slug: 'nyc-25-st', tiempo: 2, linea: 'D', tipo: 'subway' },
      { slug: 'nyc-45-st', tiempo: 2, linea: 'D', tipo: 'subway' },
      { slug: 'nyc-steinway-st', tiempo: 2, linea: 'E', tipo: 'subway' },
      { slug: 'nyc-queens-plaza', tiempo: 2, linea: 'E', tipo: 'subway' }
    ]
  },
  'nyc-39-av-dutch-kills': {
    ciudad: 'nyc',
    nombre: '39 Av-Dutch Kills',
    lineas: ["N", "W"],
    adyacentes: [
      { slug: 'nyc-36-av', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-queensboro-plaza', tiempo: 2, linea: 'N', tipo: 'subway' }
    ]
  },
  'nyc-4-av-9-st': {
    ciudad: 'nyc',
    nombre: '4 Av-9 St',
    lineas: ["F", "G", "R"],
    adyacentes: [
      { slug: 'nyc-smith-9-sts', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-7-av', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-union-st', tiempo: 2, linea: 'R', tipo: 'subway' },
      { slug: 'nyc-prospect-av', tiempo: 2, linea: 'R', tipo: 'subway' }
    ]
  },
  'nyc-40-st-lowery-st': {
    ciudad: 'nyc',
    nombre: '40 St-Lowery St',
    lineas: ["7"],
    adyacentes: [
      { slug: 'nyc-46-st-bliss-st', tiempo: 2, linea: '7', tipo: 'subway' },
      { slug: 'nyc-33-st-rawson-st', tiempo: 2, linea: '7', tipo: 'subway' }
    ]
  },
  'nyc-42-st-bryant-park': {
    ciudad: 'nyc',
    nombre: '42 St-Bryant Park',
    lineas: ["B", "D", "F", "M"],
    adyacentes: [
      { slug: 'nyc-47-50-sts-rockefeller-ctr', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-34-st-herald-sq', tiempo: 2, linea: 'B', tipo: 'subway' }
    ]
  },
  'nyc-42-st-port-authority-bus-terminal': {
    ciudad: 'nyc',
    nombre: '42 St-Port Authority Bus Terminal',
    lineas: ["A", "C", "E"],
    adyacentes: [
      { slug: 'nyc-59-st-columbus-circle', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-34-st-penn-station', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-50-st', tiempo: 2, linea: 'C', tipo: 'subway' },
      { slug: 'nyc-5-av-53-st', tiempo: 2, linea: 'E', tipo: 'subway' },
      { slug: 'nyc-times-sq-42-st', tiempo: 5, linea: 'transfer', tipo: 'transbordo' }
    ]
  },
  'nyc-45-st': {
    ciudad: 'nyc',
    nombre: '45 St',
    lineas: ["D", "N", "R"],
    adyacentes: [
      { slug: 'nyc-36-st', tiempo: 2, linea: 'D', tipo: 'subway' },
      { slug: 'nyc-50-st', tiempo: 2, linea: 'D', tipo: 'subway' },
      { slug: 'nyc-53-st', tiempo: 2, linea: 'N', tipo: 'subway' }
    ]
  },
  'nyc-46-st': {
    ciudad: 'nyc',
    nombre: '46 St',
    lineas: ["E", "F", "M", "R"],
    adyacentes: [
      { slug: 'nyc-northern-blvd', tiempo: 2, linea: 'E', tipo: 'subway' },
      { slug: 'nyc-steinway-st', tiempo: 2, linea: 'E', tipo: 'subway' }
    ]
  },
  'nyc-46-st-bliss-st': {
    ciudad: 'nyc',
    nombre: '46 St-Bliss St',
    lineas: ["7"],
    adyacentes: [
      { slug: 'nyc-52-st', tiempo: 2, linea: '7', tipo: 'subway' },
      { slug: 'nyc-40-st-lowery-st', tiempo: 2, linea: '7', tipo: 'subway' }
    ]
  },
  'nyc-47-50-sts-rockefeller-ctr': {
    ciudad: 'nyc',
    nombre: '47-50 Sts-Rockefeller Ctr',
    lineas: ["B", "D", "F", "M"],
    adyacentes: [
      { slug: 'nyc-7-av', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-42-st-bryant-park', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-57-st', tiempo: 2, linea: 'F', tipo: 'subway' }
    ]
  },
  'nyc-49-st': {
    ciudad: 'nyc',
    nombre: '49 St',
    lineas: ["N", "Q", "R", "W"],
    adyacentes: [
      { slug: 'nyc-57-st-7-av', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-times-sq-42-st', tiempo: 2, linea: 'N', tipo: 'subway' }
    ]
  },
  'nyc-5-av-53-st': {
    ciudad: 'nyc',
    nombre: '5 Av-53 St',
    lineas: ["E", "M"],
    adyacentes: [
      { slug: 'nyc-lexington-av-53-st', tiempo: 2, linea: 'E', tipo: 'subway' },
      { slug: 'nyc-42-st-port-authority-bus-terminal', tiempo: 2, linea: 'E', tipo: 'subway' },
      { slug: 'nyc-lexington-av-63-st', tiempo: 2, linea: 'M', tipo: 'subway' }
    ]
  },
  'nyc-5-av-59-st': {
    ciudad: 'nyc',
    nombre: '5 Av-59 St',
    lineas: ["N", "R", "W"],
    adyacentes: [
      { slug: 'nyc-lexington-av-59-st', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-57-st-7-av', tiempo: 2, linea: 'N', tipo: 'subway' }
    ]
  },
  'nyc-5-av-bryant-park': {
    ciudad: 'nyc',
    nombre: '5 Av-Bryant Park',
    lineas: ["7"],
    adyacentes: [
      { slug: 'nyc-grand-central-42-st', tiempo: 2, linea: '7', tipo: 'subway' },
      { slug: 'nyc-times-sq-42-st', tiempo: 2, linea: '7', tipo: 'subway' }
    ]
  },
  'nyc-50-st': {
    ciudad: 'nyc',
    nombre: '50 St',
    lineas: ["1", "C", "D"],
    adyacentes: [
      { slug: 'nyc-59-st-columbus-circle', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-times-sq-42-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-42-st-port-authority-bus-terminal', tiempo: 2, linea: 'C', tipo: 'subway' },
      { slug: 'nyc-45-st', tiempo: 2, linea: 'D', tipo: 'subway' },
      { slug: 'nyc-55-st', tiempo: 2, linea: 'D', tipo: 'subway' }
    ]
  },
  'nyc-51-st': {
    ciudad: 'nyc',
    nombre: '51 St',
    lineas: ["6"],
    adyacentes: [
      { slug: 'nyc-59-st', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-grand-central-42-st', tiempo: 2, linea: '6', tipo: 'subway' }
    ]
  },
  'nyc-52-st': {
    ciudad: 'nyc',
    nombre: '52 St',
    lineas: ["7"],
    adyacentes: [
      { slug: 'nyc-61-st-woodside', tiempo: 2, linea: '7', tipo: 'subway' },
      { slug: 'nyc-46-st-bliss-st', tiempo: 2, linea: '7', tipo: 'subway' }
    ]
  },
  'nyc-53-st': {
    ciudad: 'nyc',
    nombre: '53 St',
    lineas: ["N", "R"],
    adyacentes: [
      { slug: 'nyc-45-st', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-59-st', tiempo: 2, linea: 'N', tipo: 'subway' }
    ]
  },
  'nyc-55-st': {
    ciudad: 'nyc',
    nombre: '55 St',
    lineas: ["D"],
    adyacentes: [
      { slug: 'nyc-50-st', tiempo: 2, linea: 'D', tipo: 'subway' },
      { slug: 'nyc-62-st', tiempo: 2, linea: 'D', tipo: 'subway' }
    ]
  },
  'nyc-57-st': {
    ciudad: 'nyc',
    nombre: '57 St',
    lineas: ["F", "M"],
    adyacentes: [
      { slug: 'nyc-lexington-av-63-st', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-47-50-sts-rockefeller-ctr', tiempo: 2, linea: 'F', tipo: 'subway' }
    ]
  },
  'nyc-57-st-7-av': {
    ciudad: 'nyc',
    nombre: '57 St-7 Av',
    lineas: ["N", "Q", "R", "W"],
    adyacentes: [
      { slug: 'nyc-5-av-59-st', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-49-st', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-lexington-av-63-st', tiempo: 2, linea: 'Q', tipo: 'subway' }
    ]
  },
  'nyc-59-st': {
    ciudad: 'nyc',
    nombre: '59 St',
    lineas: ["4", "5", "6", "N", "R"],
    adyacentes: [
      { slug: 'nyc-86-st', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-grand-central-42-st', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-68-st-hunter-college', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-51-st', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-53-st', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-8-av', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-bay-ridge-av', tiempo: 2, linea: 'R', tipo: 'subway' },
      { slug: 'nyc-lexington-av-59-st', tiempo: 5, linea: 'transfer', tipo: 'transbordo' }
    ]
  },
  'nyc-59-st-columbus-circle': {
    ciudad: 'nyc',
    nombre: '59 St-Columbus Circle',
    lineas: ["1", "A", "B", "C", "D"],
    adyacentes: [
      { slug: 'nyc-66-st-lincoln-center', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-50-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-125-st', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-42-st-port-authority-bus-terminal', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-72-st', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-7-av', tiempo: 2, linea: 'B', tipo: 'subway' }
    ]
  },
  'nyc-6-av': {
    ciudad: 'nyc',
    nombre: '6 Av',
    lineas: ["L"],
    adyacentes: [
      { slug: 'nyc-8-av', tiempo: 2, linea: 'L', tipo: 'subway' },
      { slug: 'nyc-union-sq-14-st', tiempo: 2, linea: 'L', tipo: 'subway' }
    ]
  },
  'nyc-61-st-woodside': {
    ciudad: 'nyc',
    nombre: '61 St-Woodside',
    lineas: ["7"],
    adyacentes: [
      { slug: 'nyc-69-st', tiempo: 2, linea: '7', tipo: 'subway' },
      { slug: 'nyc-52-st', tiempo: 2, linea: '7', tipo: 'subway' }
    ]
  },
  'nyc-62-st': {
    ciudad: 'nyc',
    nombre: '62 St',
    lineas: ["D"],
    adyacentes: [
      { slug: 'nyc-55-st', tiempo: 2, linea: 'D', tipo: 'subway' },
      { slug: 'nyc-71-st', tiempo: 2, linea: 'D', tipo: 'subway' }
    ]
  },
  'nyc-63-dr-rego-park': {
    ciudad: 'nyc',
    nombre: '63 Dr-Rego Park',
    lineas: ["E", "F", "M", "R"],
    adyacentes: [
      { slug: 'nyc-67-av', tiempo: 2, linea: 'E', tipo: 'subway' },
      { slug: 'nyc-woodhaven-blvd', tiempo: 2, linea: 'E', tipo: 'subway' }
    ]
  },
  'nyc-65-st': {
    ciudad: 'nyc',
    nombre: '65 St',
    lineas: ["E", "F", "M", "R"],
    adyacentes: [
      { slug: 'nyc-jackson-hts-roosevelt-av', tiempo: 2, linea: 'E', tipo: 'subway' },
      { slug: 'nyc-northern-blvd', tiempo: 2, linea: 'E', tipo: 'subway' }
    ]
  },
  'nyc-66-st-lincoln-center': {
    ciudad: 'nyc',
    nombre: '66 St-Lincoln Center',
    lineas: ["1"],
    adyacentes: [
      { slug: 'nyc-72-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-59-st-columbus-circle', tiempo: 2, linea: '1', tipo: 'subway' }
    ]
  },
  'nyc-67-av': {
    ciudad: 'nyc',
    nombre: '67 Av',
    lineas: ["E", "F", "M", "R"],
    adyacentes: [
      { slug: 'nyc-forest-hills-71-av', tiempo: 2, linea: 'E', tipo: 'subway' },
      { slug: 'nyc-63-dr-rego-park', tiempo: 2, linea: 'E', tipo: 'subway' }
    ]
  },
  'nyc-68-st-hunter-college': {
    ciudad: 'nyc',
    nombre: '68 St-Hunter College',
    lineas: ["6"],
    adyacentes: [
      { slug: 'nyc-77-st', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-59-st', tiempo: 2, linea: '6', tipo: 'subway' }
    ]
  },
  'nyc-69-st': {
    ciudad: 'nyc',
    nombre: '69 St',
    lineas: ["7"],
    adyacentes: [
      { slug: 'nyc-74-st-broadway', tiempo: 2, linea: '7', tipo: 'subway' },
      { slug: 'nyc-61-st-woodside', tiempo: 2, linea: '7', tipo: 'subway' }
    ]
  },
  'nyc-7-av': {
    ciudad: 'nyc',
    nombre: '7 Av',
    lineas: ["B", "D", "F", "G", "Q"],
    adyacentes: [
      { slug: 'nyc-59-st-columbus-circle', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-47-50-sts-rockefeller-ctr', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-atlantic-av-barclays-ctr', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-prospect-park', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-4-av-9-st', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-15-st-prospect-park', tiempo: 2, linea: 'F', tipo: 'subway' }
    ]
  },
  'nyc-71-st': {
    ciudad: 'nyc',
    nombre: '71 St',
    lineas: ["D"],
    adyacentes: [
      { slug: 'nyc-62-st', tiempo: 2, linea: 'D', tipo: 'subway' },
      { slug: 'nyc-79-st', tiempo: 2, linea: 'D', tipo: 'subway' }
    ]
  },
  'nyc-72-st': {
    ciudad: 'nyc',
    nombre: '72 St',
    lineas: ["1", "2", "3", "B", "C", "Q"],
    adyacentes: [
      { slug: 'nyc-79-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-66-st-lincoln-center', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-96-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-times-sq-42-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-81-st-museum-of-natural-history', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-59-st-columbus-circle', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-86-st', tiempo: 2, linea: 'Q', tipo: 'subway' },
      { slug: 'nyc-lexington-av-63-st', tiempo: 2, linea: 'Q', tipo: 'subway' }
    ]
  },
  'nyc-74-st-broadway': {
    ciudad: 'nyc',
    nombre: '74 St-Broadway',
    lineas: ["7"],
    adyacentes: [
      { slug: 'nyc-82-st-jackson-hts', tiempo: 2, linea: '7', tipo: 'subway' },
      { slug: 'nyc-69-st', tiempo: 2, linea: '7', tipo: 'subway' }
    ]
  },
  'nyc-75-av': {
    ciudad: 'nyc',
    nombre: '75 Av',
    lineas: ["E", "F"],
    adyacentes: [
      { slug: 'nyc-kew-gardens-union-tpke', tiempo: 2, linea: 'E', tipo: 'subway' },
      { slug: 'nyc-forest-hills-71-av', tiempo: 2, linea: 'E', tipo: 'subway' }
    ]
  },
  'nyc-75-st-elderts-ln': {
    ciudad: 'nyc',
    nombre: '75 St-Elderts Ln',
    lineas: ["J"],
    adyacentes: [
      { slug: 'nyc-85-st-forest-pkwy', tiempo: 2, linea: 'J', tipo: 'subway' },
      { slug: 'nyc-cypress-hills', tiempo: 2, linea: 'J', tipo: 'subway' }
    ]
  },
  'nyc-77-st': {
    ciudad: 'nyc',
    nombre: '77 St',
    lineas: ["6", "R"],
    adyacentes: [
      { slug: 'nyc-86-st', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-68-st-hunter-college', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-bay-ridge-av', tiempo: 2, linea: 'R', tipo: 'subway' }
    ]
  },
  'nyc-79-st': {
    ciudad: 'nyc',
    nombre: '79 St',
    lineas: ["1", "D"],
    adyacentes: [
      { slug: 'nyc-86-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-72-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-71-st', tiempo: 2, linea: 'D', tipo: 'subway' },
      { slug: 'nyc-18-av', tiempo: 2, linea: 'D', tipo: 'subway' }
    ]
  },
  'nyc-8-av': {
    ciudad: 'nyc',
    nombre: '8 Av',
    lineas: ["L", "N"],
    adyacentes: [
      { slug: 'nyc-6-av', tiempo: 2, linea: 'L', tipo: 'subway' },
      { slug: 'nyc-59-st', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-fort-hamilton-pkwy', tiempo: 2, linea: 'N', tipo: 'subway' }
    ]
  },
  'nyc-8-st-nyu': {
    ciudad: 'nyc',
    nombre: '8 St-NYU',
    lineas: ["N", "R", "W"],
    adyacentes: [
      { slug: 'nyc-14-st-union-sq', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-prince-st', tiempo: 2, linea: 'N', tipo: 'subway' }
    ]
  },
  'nyc-80-st': {
    ciudad: 'nyc',
    nombre: '80 St',
    lineas: ["A"],
    adyacentes: [
      { slug: 'nyc-grant-av', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-88-st', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-81-st-museum-of-natural-history': {
    ciudad: 'nyc',
    nombre: '81 St-Museum of Natural History',
    lineas: ["B", "C"],
    adyacentes: [
      { slug: 'nyc-central-park-north-110-st', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-72-st', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-86-st', tiempo: 2, linea: 'C', tipo: 'subway' }
    ]
  },
  'nyc-82-st-jackson-hts': {
    ciudad: 'nyc',
    nombre: '82 St-Jackson Hts',
    lineas: ["7"],
    adyacentes: [
      { slug: 'nyc-90-st-elmhurst-av', tiempo: 2, linea: '7', tipo: 'subway' },
      { slug: 'nyc-74-st-broadway', tiempo: 2, linea: '7', tipo: 'subway' }
    ]
  },
  'nyc-85-st-forest-pkwy': {
    ciudad: 'nyc',
    nombre: '85 St-Forest Pkwy',
    lineas: ["J"],
    adyacentes: [
      { slug: 'nyc-woodhaven-blvd', tiempo: 2, linea: 'J', tipo: 'subway' },
      { slug: 'nyc-75-st-elderts-ln', tiempo: 2, linea: 'J', tipo: 'subway' }
    ]
  },
  'nyc-86-st': {
    ciudad: 'nyc',
    nombre: '86 St',
    lineas: ["1", "4", "5", "6", "C", "N", "Q", "R"],
    adyacentes: [
      { slug: 'nyc-96-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-79-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-125-st', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-59-st', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-77-st', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-81-st-museum-of-natural-history', tiempo: 2, linea: 'C', tipo: 'subway' },
      { slug: 'nyc-av-u', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-coney-island-stillwell-av', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-72-st', tiempo: 2, linea: 'Q', tipo: 'subway' },
      { slug: 'nyc-bay-ridge-95-st', tiempo: 2, linea: 'R', tipo: 'subway' }
    ]
  },
  'nyc-88-st': {
    ciudad: 'nyc',
    nombre: '88 St',
    lineas: ["A"],
    adyacentes: [
      { slug: 'nyc-80-st', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-rockaway-blvd', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-9-st': {
    ciudad: 'nyc',
    nombre: '9 St',
    lineas: ["D"],
    adyacentes: [
      { slug: 'nyc-36-st', tiempo: 2, linea: 'D', tipo: 'subway' },
      { slug: 'nyc-prospect-av', tiempo: 2, linea: 'D', tipo: 'subway' }
    ]
  },
  'nyc-90-st-elmhurst-av': {
    ciudad: 'nyc',
    nombre: '90 St-Elmhurst Av',
    lineas: ["7"],
    adyacentes: [
      { slug: 'nyc-junction-blvd', tiempo: 2, linea: '7', tipo: 'subway' },
      { slug: 'nyc-82-st-jackson-hts', tiempo: 2, linea: '7', tipo: 'subway' }
    ]
  },
  'nyc-96-st': {
    ciudad: 'nyc',
    nombre: '96 St',
    lineas: ["1", "2", "3", "6", "C", "Q"],
    adyacentes: [
      { slug: 'nyc-103-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-86-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-central-park-north-110-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-72-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-110-st', tiempo: 2, linea: '6', tipo: 'subway' }
    ]
  },
  'nyc-alabama-av': {
    ciudad: 'nyc',
    nombre: 'Alabama Av',
    lineas: ["J"],
    adyacentes: [
      { slug: 'nyc-van-siclen-av', tiempo: 2, linea: 'J', tipo: 'subway' },
      { slug: 'nyc-broadway-junction', tiempo: 2, linea: 'J', tipo: 'subway' }
    ]
  },
  'nyc-allerton-av': {
    ciudad: 'nyc',
    nombre: 'Allerton Av',
    lineas: ["2"],
    adyacentes: [
      { slug: 'nyc-burke-av', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-pelham-pkwy', tiempo: 2, linea: '2', tipo: 'subway' }
    ]
  },
  'nyc-annadale': {
    ciudad: 'nyc',
    nombre: 'Annadale',
    lineas: ["SIR"],
    adyacentes: [
      { slug: 'nyc-eltingville', tiempo: 2, linea: 'SIR', tipo: 'subway' },
      { slug: 'nyc-huguenot', tiempo: 2, linea: 'SIR', tipo: 'subway' }
    ]
  },
  'nyc-aqueduct-north-conduit-av': {
    ciudad: 'nyc',
    nombre: 'Aqueduct-North Conduit Av',
    lineas: ["A"],
    adyacentes: [
      { slug: 'nyc-aqueduct-racetrack', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-howard-beach-jfk-airport', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-aqueduct-racetrack': {
    ciudad: 'nyc',
    nombre: 'Aqueduct Racetrack',
    lineas: ["A"],
    adyacentes: [
      { slug: 'nyc-104-st', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-aqueduct-north-conduit-av', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-astor-pl': {
    ciudad: 'nyc',
    nombre: 'Astor Pl',
    lineas: ["6"],
    adyacentes: [
      { slug: 'nyc-14-st-union-sq', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-bleecker-st', tiempo: 2, linea: '6', tipo: 'subway' }
    ]
  },
  'nyc-astoria-blvd': {
    ciudad: 'nyc',
    nombre: 'Astoria Blvd',
    lineas: ["N", "W"],
    adyacentes: [
      { slug: 'nyc-astoria-ditmars-blvd', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-30-av', tiempo: 2, linea: 'N', tipo: 'subway' }
    ]
  },
  'nyc-astoria-ditmars-blvd': {
    ciudad: 'nyc',
    nombre: 'Astoria-Ditmars Blvd',
    lineas: ["N", "W"],
    adyacentes: [
      { slug: 'nyc-astoria-blvd', tiempo: 2, linea: 'N', tipo: 'subway' }
    ]
  },
  'nyc-atlantic': {
    ciudad: 'nyc',
    nombre: 'Atlantic',
    lineas: ["SIR"],
    adyacentes: [
      { slug: 'nyc-nassau', tiempo: 2, linea: 'SIR', tipo: 'subway' },
      { slug: 'nyc-tottenville', tiempo: 2, linea: 'SIR', tipo: 'subway' }
    ]
  },
  'nyc-atlantic-av': {
    ciudad: 'nyc',
    nombre: 'Atlantic Av',
    lineas: ["L"],
    adyacentes: [
      { slug: 'nyc-broadway-junction', tiempo: 2, linea: 'L', tipo: 'subway' },
      { slug: 'nyc-sutter-av', tiempo: 2, linea: 'L', tipo: 'subway' }
    ]
  },
  'nyc-atlantic-av-barclays-ctr': {
    ciudad: 'nyc',
    nombre: 'Atlantic Av-Barclays Ctr',
    lineas: ["2", "3", "5", "B", "D", "N", "Q", "R"],
    adyacentes: [
      { slug: 'nyc-nevins-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-bergen-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-franklin-av-medgar-evers-college', tiempo: 2, linea: '5', tipo: 'subway' },
      { slug: 'nyc-dekalb-av', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-7-av', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-36-st', tiempo: 2, linea: 'D', tipo: 'subway' },
      { slug: 'nyc-union-st', tiempo: 2, linea: 'R', tipo: 'subway' }
    ]
  },
  'nyc-av-h': {
    ciudad: 'nyc',
    nombre: 'Av H',
    lineas: ["Q"],
    adyacentes: [
      { slug: 'nyc-newkirk-plaza', tiempo: 2, linea: 'Q', tipo: 'subway' },
      { slug: 'nyc-av-j', tiempo: 2, linea: 'Q', tipo: 'subway' }
    ]
  },
  'nyc-av-i': {
    ciudad: 'nyc',
    nombre: 'Av I',
    lineas: ["F"],
    adyacentes: [
      { slug: 'nyc-18-av', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-bay-pkwy', tiempo: 2, linea: 'F', tipo: 'subway' }
    ]
  },
  'nyc-av-j': {
    ciudad: 'nyc',
    nombre: 'Av J',
    lineas: ["Q"],
    adyacentes: [
      { slug: 'nyc-av-h', tiempo: 2, linea: 'Q', tipo: 'subway' },
      { slug: 'nyc-av-m', tiempo: 2, linea: 'Q', tipo: 'subway' }
    ]
  },
  'nyc-av-m': {
    ciudad: 'nyc',
    nombre: 'Av M',
    lineas: ["Q"],
    adyacentes: [
      { slug: 'nyc-av-j', tiempo: 2, linea: 'Q', tipo: 'subway' },
      { slug: 'nyc-kings-hwy', tiempo: 2, linea: 'Q', tipo: 'subway' }
    ]
  },
  'nyc-av-n': {
    ciudad: 'nyc',
    nombre: 'Av N',
    lineas: ["F"],
    adyacentes: [
      { slug: 'nyc-bay-pkwy', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-av-p', tiempo: 2, linea: 'F', tipo: 'subway' }
    ]
  },
  'nyc-av-p': {
    ciudad: 'nyc',
    nombre: 'Av P',
    lineas: ["F"],
    adyacentes: [
      { slug: 'nyc-av-n', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-kings-hwy', tiempo: 2, linea: 'F', tipo: 'subway' }
    ]
  },
  'nyc-av-u': {
    ciudad: 'nyc',
    nombre: 'Av U',
    lineas: ["F", "N", "Q"],
    adyacentes: [
      { slug: 'nyc-kings-hwy', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-av-x', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-86-st', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-neck-rd', tiempo: 2, linea: 'Q', tipo: 'subway' }
    ]
  },
  'nyc-av-x': {
    ciudad: 'nyc',
    nombre: 'Av X',
    lineas: ["F"],
    adyacentes: [
      { slug: 'nyc-av-u', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-neptune-av', tiempo: 2, linea: 'F', tipo: 'subway' }
    ]
  },
  'nyc-bay-50-st': {
    ciudad: 'nyc',
    nombre: 'Bay 50 St',
    lineas: ["D"],
    adyacentes: [
      { slug: 'nyc-25-av', tiempo: 2, linea: 'D', tipo: 'subway' },
      { slug: 'nyc-coney-island-stillwell-av', tiempo: 2, linea: 'D', tipo: 'subway' }
    ]
  },
  'nyc-bay-pkwy': {
    ciudad: 'nyc',
    nombre: 'Bay Pkwy',
    lineas: ["D", "F", "N"],
    adyacentes: [
      { slug: 'nyc-20-av', tiempo: 2, linea: 'D', tipo: 'subway' },
      { slug: 'nyc-25-av', tiempo: 2, linea: 'D', tipo: 'subway' },
      { slug: 'nyc-av-i', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-av-n', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-kings-hwy', tiempo: 2, linea: 'N', tipo: 'subway' }
    ]
  },
  'nyc-bay-ridge-95-st': {
    ciudad: 'nyc',
    nombre: 'Bay Ridge-95 St',
    lineas: ["R"],
    adyacentes: [
      { slug: 'nyc-86-st', tiempo: 2, linea: 'R', tipo: 'subway' }
    ]
  },
  'nyc-bay-ridge-av': {
    ciudad: 'nyc',
    nombre: 'Bay Ridge Av',
    lineas: ["R"],
    adyacentes: [
      { slug: 'nyc-59-st', tiempo: 2, linea: 'R', tipo: 'subway' },
      { slug: 'nyc-77-st', tiempo: 2, linea: 'R', tipo: 'subway' }
    ]
  },
  'nyc-bay-terrace': {
    ciudad: 'nyc',
    nombre: 'Bay Terrace',
    lineas: ["SIR"],
    adyacentes: [
      { slug: 'nyc-oakwood-heights', tiempo: 2, linea: 'SIR', tipo: 'subway' },
      { slug: 'nyc-great-kills', tiempo: 2, linea: 'SIR', tipo: 'subway' }
    ]
  },
  'nyc-baychester-av': {
    ciudad: 'nyc',
    nombre: 'Baychester Av',
    lineas: ["5"],
    adyacentes: [
      { slug: 'nyc-eastchester-dyre-av', tiempo: 2, linea: '5', tipo: 'subway' },
      { slug: 'nyc-gun-hill-rd', tiempo: 2, linea: '5', tipo: 'subway' }
    ]
  },
  'nyc-beach-105-st': {
    ciudad: 'nyc',
    nombre: 'Beach 105 St',
    lineas: ["S-Rockaway"],
    adyacentes: [
      { slug: 'nyc-beach-98-st', tiempo: 2, linea: 'S-Rockaway', tipo: 'subway' },
      { slug: 'nyc-rockaway-park-beach-116-st', tiempo: 2, linea: 'S-Rockaway', tipo: 'subway' }
    ]
  },
  'nyc-beach-25-st': {
    ciudad: 'nyc',
    nombre: 'Beach 25 St',
    lineas: ["A"],
    adyacentes: [
      { slug: 'nyc-beach-36-st', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-far-rockaway-mott-av', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-beach-36-st': {
    ciudad: 'nyc',
    nombre: 'Beach 36 St',
    lineas: ["A"],
    adyacentes: [
      { slug: 'nyc-beach-44-st', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-beach-25-st', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-beach-44-st': {
    ciudad: 'nyc',
    nombre: 'Beach 44 St',
    lineas: ["A"],
    adyacentes: [
      { slug: 'nyc-beach-60-st', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-beach-36-st', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-beach-60-st': {
    ciudad: 'nyc',
    nombre: 'Beach 60 St',
    lineas: ["A"],
    adyacentes: [
      { slug: 'nyc-beach-67-st', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-beach-44-st', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-beach-67-st': {
    ciudad: 'nyc',
    nombre: 'Beach 67 St',
    lineas: ["A"],
    adyacentes: [
      { slug: 'nyc-beach-90-st', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-beach-60-st', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-beach-90-st': {
    ciudad: 'nyc',
    nombre: 'Beach 90 St',
    lineas: ["A", "S-Rockaway"],
    adyacentes: [
      { slug: 'nyc-broad-channel', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-beach-67-st', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-beach-98-st', tiempo: 2, linea: 'S-Rockaway', tipo: 'subway' }
    ]
  },
  'nyc-beach-98-st': {
    ciudad: 'nyc',
    nombre: 'Beach 98 St',
    lineas: ["S-Rockaway"],
    adyacentes: [
      { slug: 'nyc-beach-90-st', tiempo: 2, linea: 'S-Rockaway', tipo: 'subway' },
      { slug: 'nyc-beach-105-st', tiempo: 2, linea: 'S-Rockaway', tipo: 'subway' }
    ]
  },
  'nyc-bedford-av': {
    ciudad: 'nyc',
    nombre: 'Bedford Av',
    lineas: ["L"],
    adyacentes: [
      { slug: 'nyc-1-av', tiempo: 2, linea: 'L', tipo: 'subway' },
      { slug: 'nyc-lorimer-st', tiempo: 2, linea: 'L', tipo: 'subway' }
    ]
  },
  'nyc-bedford-nostrand-avs': {
    ciudad: 'nyc',
    nombre: 'Bedford-Nostrand Avs',
    lineas: ["G"],
    adyacentes: [
      { slug: 'nyc-myrtle-willoughby-avs', tiempo: 2, linea: 'G', tipo: 'subway' },
      { slug: 'nyc-classon-av', tiempo: 2, linea: 'G', tipo: 'subway' }
    ]
  },
  'nyc-bedford-park-blvd': {
    ciudad: 'nyc',
    nombre: 'Bedford Park Blvd',
    lineas: ["4", "D"],
    adyacentes: [
      { slug: 'nyc-mosholu-pkwy', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-kingsbridge-rd', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-norwood-205-st', tiempo: 2, linea: 'D', tipo: 'subway' }
    ]
  },
  'nyc-bergen-st': {
    ciudad: 'nyc',
    nombre: 'Bergen St',
    lineas: ["2", "3", "F", "G"],
    adyacentes: [
      { slug: 'nyc-atlantic-av-barclays-ctr', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-grand-army-plaza', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-jay-st-metrotech', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-carroll-st', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-hoyt-schermerhorn-sts', tiempo: 2, linea: 'G', tipo: 'subway' }
    ]
  },
  'nyc-beverly-rd': {
    ciudad: 'nyc',
    nombre: 'Beverly Rd',
    lineas: ["2", "5", "B", "Q"],
    adyacentes: [
      { slug: 'nyc-church-av', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-newkirk-av-little-haiti', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-newkirk-plaza', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-cortelyou-rd', tiempo: 2, linea: 'Q', tipo: 'subway' }
    ]
  },
  'nyc-bleecker-st': {
    ciudad: 'nyc',
    nombre: 'Bleecker St',
    lineas: ["6"],
    adyacentes: [
      { slug: 'nyc-astor-pl', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-spring-st', tiempo: 2, linea: '6', tipo: 'subway' }
    ]
  },
  'nyc-borough-hall': {
    ciudad: 'nyc',
    nombre: 'Borough Hall',
    lineas: ["2", "3", "5"],
    adyacentes: [
      { slug: 'nyc-clark-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-hoyt-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-bowling-green', tiempo: 2, linea: '5', tipo: 'subway' },
      { slug: 'nyc-nevins-st', tiempo: 2, linea: '5', tipo: 'subway' },
      { slug: 'nyc-court-st', tiempo: 4, linea: 'transfer', tipo: 'transbordo' }
    ]
  },
  'nyc-botanic-garden': {
    ciudad: 'nyc',
    nombre: 'Botanic Garden',
    lineas: ["S-Franklin"],
    adyacentes: [
      { slug: 'nyc-park-place', tiempo: 2, linea: 'S-Franklin', tipo: 'subway' },
      { slug: 'nyc-prospect-park', tiempo: 2, linea: 'S-Franklin', tipo: 'subway' }
    ]
  },
  'nyc-bowery': {
    ciudad: 'nyc',
    nombre: 'Bowery',
    lineas: ["J", "M"],
    adyacentes: [
      { slug: 'nyc-essex-st', tiempo: 2, linea: 'J', tipo: 'subway' },
      { slug: 'nyc-canal-st', tiempo: 2, linea: 'J', tipo: 'subway' }
    ]
  },
  'nyc-bowling-green': {
    ciudad: 'nyc',
    nombre: 'Bowling Green',
    lineas: ["4", "5"],
    adyacentes: [
      { slug: 'nyc-wall-st', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-borough-hall', tiempo: 2, linea: '5', tipo: 'subway' }
    ]
  },
  'nyc-briarwood': {
    ciudad: 'nyc',
    nombre: 'Briarwood',
    lineas: ["F"],
    adyacentes: [
      { slug: 'nyc-sutphin-blvd', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-kew-gardens-union-tpke', tiempo: 2, linea: 'F', tipo: 'subway' }
    ]
  },
  'nyc-brighton-beach': {
    ciudad: 'nyc',
    nombre: 'Brighton Beach',
    lineas: ["B", "Q"],
    adyacentes: [
      { slug: 'nyc-sheepshead-bay', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-ocean-pkwy', tiempo: 2, linea: 'B', tipo: 'subway' }
    ]
  },
  'nyc-broad-channel': {
    ciudad: 'nyc',
    nombre: 'Broad Channel',
    lineas: ["A", "S-Rockaway"],
    adyacentes: [
      { slug: 'nyc-howard-beach-jfk-airport', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-beach-90-st', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-broad-st': {
    ciudad: 'nyc',
    nombre: 'Broad St',
    lineas: ["J"],
    adyacentes: [
      { slug: 'nyc-fulton-st', tiempo: 2, linea: 'J', tipo: 'subway' }
    ]
  },
  'nyc-broadway': {
    ciudad: 'nyc',
    nombre: 'Broadway',
    lineas: ["G", "N", "W"],
    adyacentes: [
      { slug: 'nyc-metropolitan-av', tiempo: 2, linea: 'G', tipo: 'subway' },
      { slug: 'nyc-flushing-av', tiempo: 2, linea: 'G', tipo: 'subway' },
      { slug: 'nyc-30-av', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-36-av', tiempo: 2, linea: 'N', tipo: 'subway' }
    ]
  },
  'nyc-broadway-junction': {
    ciudad: 'nyc',
    nombre: 'Broadway Junction',
    lineas: ["A", "C", "J", "L"],
    adyacentes: [
      { slug: 'nyc-rockaway-av', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-liberty-av', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-alabama-av', tiempo: 2, linea: 'J', tipo: 'subway' },
      { slug: 'nyc-chauncey-st', tiempo: 2, linea: 'J', tipo: 'subway' },
      { slug: 'nyc-bushwick-av-aberdeen-st', tiempo: 2, linea: 'L', tipo: 'subway' },
      { slug: 'nyc-atlantic-av', tiempo: 2, linea: 'L', tipo: 'subway' }
    ]
  },
  'nyc-broadway-lafayette-st': {
    ciudad: 'nyc',
    nombre: 'Broadway-Lafayette St',
    lineas: ["B", "D", "F", "M"],
    adyacentes: [
      { slug: 'nyc-w-4-st-washington-sq', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-grand-st', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-2-av', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-canal-st', tiempo: 2, linea: 'M', tipo: 'subway' }
    ]
  },
  'nyc-bronx-park-east': {
    ciudad: 'nyc',
    nombre: 'Bronx Park East',
    lineas: ["2"],
    adyacentes: [
      { slug: 'nyc-pelham-pkwy', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-e-180-st', tiempo: 2, linea: '2', tipo: 'subway' }
    ]
  },
  'nyc-brook-av': {
    ciudad: 'nyc',
    nombre: 'Brook Av',
    lineas: ["6"],
    adyacentes: [
      { slug: 'nyc-cypress-av', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-3-av-138-st', tiempo: 2, linea: '6', tipo: 'subway' }
    ]
  },
  'nyc-brooklyn-bridge-city-hall': {
    ciudad: 'nyc',
    nombre: 'Brooklyn Bridge-City Hall',
    lineas: ["4", "5", "6"],
    adyacentes: [
      { slug: 'nyc-14-st-union-sq', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-fulton-st', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-canal-st', tiempo: 2, linea: '6', tipo: 'subway' }
    ]
  },
  'nyc-buhre-av': {
    ciudad: 'nyc',
    nombre: 'Buhre Av',
    lineas: ["6"],
    adyacentes: [
      { slug: 'nyc-pelham-bay-park', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-middletown-rd', tiempo: 2, linea: '6', tipo: 'subway' }
    ]
  },
  'nyc-burke-av': {
    ciudad: 'nyc',
    nombre: 'Burke Av',
    lineas: ["2"],
    adyacentes: [
      { slug: 'nyc-gun-hill-rd', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-allerton-av', tiempo: 2, linea: '2', tipo: 'subway' }
    ]
  },
  'nyc-burnside-av': {
    ciudad: 'nyc',
    nombre: 'Burnside Av',
    lineas: ["4"],
    adyacentes: [
      { slug: 'nyc-183-st', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-176-st', tiempo: 2, linea: '4', tipo: 'subway' }
    ]
  },
  'nyc-bushwick-av-aberdeen-st': {
    ciudad: 'nyc',
    nombre: 'Bushwick Av-Aberdeen St',
    lineas: ["L"],
    adyacentes: [
      { slug: 'nyc-wilson-av', tiempo: 2, linea: 'L', tipo: 'subway' },
      { slug: 'nyc-broadway-junction', tiempo: 2, linea: 'L', tipo: 'subway' }
    ]
  },
  'nyc-canal-st': {
    ciudad: 'nyc',
    nombre: 'Canal St',
    lineas: ["1", "6", "A", "C", "E", "J", "M", "N", "Q", "R", "W"],
    adyacentes: [
      { slug: 'nyc-houston-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-franklin-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-spring-st', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-brooklyn-bridge-city-hall', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-chambers-st', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-world-trade-center', tiempo: 2, linea: 'E', tipo: 'subway' },
      { slug: 'nyc-bowery', tiempo: 2, linea: 'J', tipo: 'subway' },
      { slug: 'nyc-broadway-lafayette-st', tiempo: 2, linea: 'M', tipo: 'subway' },
      { slug: 'nyc-prince-st', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-city-hall', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-14-st-union-sq', tiempo: 2, linea: 'Q', tipo: 'subway' },
      { slug: 'nyc-dekalb-av', tiempo: 2, linea: 'Q', tipo: 'subway' }
    ]
  },
  'nyc-canarsie-rockaway-pkwy': {
    ciudad: 'nyc',
    nombre: 'Canarsie-Rockaway Pkwy',
    lineas: ["L"],
    adyacentes: [
      { slug: 'nyc-east-105-st', tiempo: 2, linea: 'L', tipo: 'subway' }
    ]
  },
  'nyc-carroll-st': {
    ciudad: 'nyc',
    nombre: 'Carroll St',
    lineas: ["F", "G"],
    adyacentes: [
      { slug: 'nyc-bergen-st', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-smith-9-sts', tiempo: 2, linea: 'F', tipo: 'subway' }
    ]
  },
  'nyc-castle-hill-av': {
    ciudad: 'nyc',
    nombre: 'Castle Hill Av',
    lineas: ["6"],
    adyacentes: [
      { slug: 'nyc-zerega-av', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-parkchester', tiempo: 2, linea: '6', tipo: 'subway' }
    ]
  },
  'nyc-cathedral-pkwy-110-st': {
    ciudad: 'nyc',
    nombre: 'Cathedral Pkwy-110 St',
    lineas: ["1", "C"],
    adyacentes: [
      { slug: 'nyc-116-st-columbia-university', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-103-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-116-st', tiempo: 2, linea: 'C', tipo: 'subway' }
    ]
  },
  'nyc-central-av': {
    ciudad: 'nyc',
    nombre: 'Central Av',
    lineas: ["M"],
    adyacentes: [
      { slug: 'nyc-knickerbocker-av', tiempo: 2, linea: 'M', tipo: 'subway' },
      { slug: 'nyc-myrtle-av', tiempo: 2, linea: 'M', tipo: 'subway' }
    ]
  },
  'nyc-central-park-north-110-st': {
    ciudad: 'nyc',
    nombre: 'Central Park North-110 St',
    lineas: ["2", "3", "B"],
    adyacentes: [
      { slug: 'nyc-116-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-96-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-81-st-museum-of-natural-history', tiempo: 2, linea: 'B', tipo: 'subway' }
    ]
  },
  'nyc-chambers-st': {
    ciudad: 'nyc',
    nombre: 'Chambers St',
    lineas: ["1", "2", "3", "A", "C", "J"],
    adyacentes: [
      { slug: 'nyc-franklin-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-cortlandt-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-14-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-park-place', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-canal-st', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-fulton-st', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-chauncey-st': {
    ciudad: 'nyc',
    nombre: 'Chauncey St',
    lineas: ["J"],
    adyacentes: [
      { slug: 'nyc-broadway-junction', tiempo: 2, linea: 'J', tipo: 'subway' },
      { slug: 'nyc-halsey-st', tiempo: 2, linea: 'J', tipo: 'subway' }
    ]
  },
  'nyc-christopher-st-sheridan-sq': {
    ciudad: 'nyc',
    nombre: 'Christopher St-Sheridan Sq',
    lineas: ["1"],
    adyacentes: [
      { slug: 'nyc-14-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-houston-st', tiempo: 2, linea: '1', tipo: 'subway' }
    ]
  },
  'nyc-church-av': {
    ciudad: 'nyc',
    nombre: 'Church Av',
    lineas: ["2", "5", "B", "F", "G", "Q"],
    adyacentes: [
      { slug: 'nyc-winthrop-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-beverly-rd', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-prospect-park', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-fort-hamilton-pkwy', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-ditmas-av', tiempo: 2, linea: 'F', tipo: 'subway' }
    ]
  },
  'nyc-city-hall': {
    ciudad: 'nyc',
    nombre: 'City Hall',
    lineas: ["N", "R", "W"],
    adyacentes: [
      { slug: 'nyc-canal-st', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-cortlandt-st', tiempo: 2, linea: 'N', tipo: 'subway' }
    ]
  },
  'nyc-clark-st': {
    ciudad: 'nyc',
    nombre: 'Clark St',
    lineas: ["2", "3"],
    adyacentes: [
      { slug: 'nyc-wall-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-borough-hall', tiempo: 2, linea: '2', tipo: 'subway' }
    ]
  },
  'nyc-classon-av': {
    ciudad: 'nyc',
    nombre: 'Classon Av',
    lineas: ["G"],
    adyacentes: [
      { slug: 'nyc-bedford-nostrand-avs', tiempo: 2, linea: 'G', tipo: 'subway' },
      { slug: 'nyc-clinton-washington-avs', tiempo: 2, linea: 'G', tipo: 'subway' }
    ]
  },
  'nyc-cleveland-st': {
    ciudad: 'nyc',
    nombre: 'Cleveland St',
    lineas: ["J"],
    adyacentes: [
      { slug: 'nyc-norwood-av', tiempo: 2, linea: 'J', tipo: 'subway' },
      { slug: 'nyc-van-siclen-av', tiempo: 2, linea: 'J', tipo: 'subway' }
    ]
  },
  'nyc-clifton': {
    ciudad: 'nyc',
    nombre: 'Clifton',
    lineas: ["SIR"],
    adyacentes: [
      { slug: 'nyc-stapleton', tiempo: 2, linea: 'SIR', tipo: 'subway' },
      { slug: 'nyc-grasmere', tiempo: 2, linea: 'SIR', tipo: 'subway' }
    ]
  },
  'nyc-clinton-washington-avs': {
    ciudad: 'nyc',
    nombre: 'Clinton-Washington Avs',
    lineas: ["A", "C", "G"],
    adyacentes: [
      { slug: 'nyc-lafayette-av', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-franklin-av', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-classon-av', tiempo: 2, linea: 'G', tipo: 'subway' },
      { slug: 'nyc-fulton-st', tiempo: 2, linea: 'G', tipo: 'subway' }
    ]
  },
  'nyc-coney-island-stillwell-av': {
    ciudad: 'nyc',
    nombre: 'Coney Island-Stillwell Av',
    lineas: ["B", "D", "F", "N", "Q"],
    adyacentes: [
      { slug: 'nyc-west-8-st-ny-aquarium', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-bay-50-st', tiempo: 2, linea: 'D', tipo: 'subway' },
      { slug: 'nyc-86-st', tiempo: 2, linea: 'N', tipo: 'subway' }
    ]
  },
  'nyc-cortelyou-rd': {
    ciudad: 'nyc',
    nombre: 'Cortelyou Rd',
    lineas: ["Q"],
    adyacentes: [
      { slug: 'nyc-beverly-rd', tiempo: 2, linea: 'Q', tipo: 'subway' },
      { slug: 'nyc-newkirk-plaza', tiempo: 2, linea: 'Q', tipo: 'subway' }
    ]
  },
  'nyc-cortlandt-st': {
    ciudad: 'nyc',
    nombre: 'Cortlandt St',
    lineas: ["1", "N", "R", "W"],
    adyacentes: [
      { slug: 'nyc-chambers-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-rector-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-city-hall', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-whitehall-st-south-ferry', tiempo: 2, linea: 'N', tipo: 'subway' }
    ]
  },
  'nyc-court-sq': {
    ciudad: 'nyc',
    nombre: 'Court Sq',
    lineas: ["7", "G"],
    adyacentes: [
      { slug: 'nyc-queensboro-plaza', tiempo: 2, linea: '7', tipo: 'subway' },
      { slug: 'nyc-hunters-point-av', tiempo: 2, linea: '7', tipo: 'subway' },
      { slug: 'nyc-21-st', tiempo: 2, linea: 'G', tipo: 'subway' }
    ]
  },
  'nyc-court-st': {
    ciudad: 'nyc',
    nombre: 'Court St',
    lineas: ["N", "R"],
    adyacentes: [
      { slug: 'nyc-whitehall-st-south-ferry', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-jay-st-metrotech', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-borough-hall', tiempo: 4, linea: 'transfer', tipo: 'transbordo' }
    ]
  },
  'nyc-crescent-st': {
    ciudad: 'nyc',
    nombre: 'Crescent St',
    lineas: ["J"],
    adyacentes: [
      { slug: 'nyc-cypress-hills', tiempo: 2, linea: 'J', tipo: 'subway' },
      { slug: 'nyc-norwood-av', tiempo: 2, linea: 'J', tipo: 'subway' }
    ]
  },
  'nyc-crown-heights-utica-av': {
    ciudad: 'nyc',
    nombre: 'Crown Heights-Utica Av',
    lineas: ["3"],
    adyacentes: [
      { slug: 'nyc-kingston-av', tiempo: 2, linea: '3', tipo: 'subway' },
      { slug: 'nyc-sutter-av-rutland-rd', tiempo: 2, linea: '3', tipo: 'subway' }
    ]
  },
  'nyc-cypress-av': {
    ciudad: 'nyc',
    nombre: 'Cypress Av',
    lineas: ["6"],
    adyacentes: [
      { slug: 'nyc-e-143-st-st-mary-st', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-brook-av', tiempo: 2, linea: '6', tipo: 'subway' }
    ]
  },
  'nyc-cypress-hills': {
    ciudad: 'nyc',
    nombre: 'Cypress Hills',
    lineas: ["J"],
    adyacentes: [
      { slug: 'nyc-75-st-elderts-ln', tiempo: 2, linea: 'J', tipo: 'subway' },
      { slug: 'nyc-crescent-st', tiempo: 2, linea: 'J', tipo: 'subway' }
    ]
  },
  'nyc-dekalb-av': {
    ciudad: 'nyc',
    nombre: 'DeKalb Av',
    lineas: ["B", "D", "L", "N", "Q", "R"],
    adyacentes: [
      { slug: 'nyc-grand-st', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-atlantic-av-barclays-ctr', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-jefferson-st', tiempo: 2, linea: 'L', tipo: 'subway' },
      { slug: 'nyc-myrtle-wyckoff-avs', tiempo: 2, linea: 'L', tipo: 'subway' },
      { slug: 'nyc-jay-st-metrotech', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-canal-st', tiempo: 2, linea: 'Q', tipo: 'subway' }
    ]
  },
  'nyc-delancey-st-essex-st': {
    ciudad: 'nyc',
    nombre: 'Delancey St-Essex St',
    lineas: ["F"],
    adyacentes: [
      { slug: 'nyc-2-av', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-east-broadway', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-essex-st', tiempo: 2, linea: 'transfer', tipo: 'transbordo' }
    ]
  },
  'nyc-ditmas-av': {
    ciudad: 'nyc',
    nombre: 'Ditmas Av',
    lineas: ["F"],
    adyacentes: [
      { slug: 'nyc-church-av', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-18-av', tiempo: 2, linea: 'F', tipo: 'subway' }
    ]
  },
  'nyc-dongan-hills': {
    ciudad: 'nyc',
    nombre: 'Dongan Hills',
    lineas: ["SIR"],
    adyacentes: [
      { slug: 'nyc-old-town', tiempo: 2, linea: 'SIR', tipo: 'subway' },
      { slug: 'nyc-jefferson-av', tiempo: 2, linea: 'SIR', tipo: 'subway' }
    ]
  },
  'nyc-dyckman-st': {
    ciudad: 'nyc',
    nombre: 'Dyckman St',
    lineas: ["1", "A"],
    adyacentes: [
      { slug: 'nyc-207-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-191-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-inwood-207-st', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-190-st', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-e-143-st-st-mary-st': {
    ciudad: 'nyc',
    nombre: 'E 143 St-St Mary St',
    lineas: ["6"],
    adyacentes: [
      { slug: 'nyc-e-149-st', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-cypress-av', tiempo: 2, linea: '6', tipo: 'subway' }
    ]
  },
  'nyc-e-149-st': {
    ciudad: 'nyc',
    nombre: 'E 149 St',
    lineas: ["6"],
    adyacentes: [
      { slug: 'nyc-longwood-av', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-e-143-st-st-mary-st', tiempo: 2, linea: '6', tipo: 'subway' }
    ]
  },
  'nyc-e-180-st': {
    ciudad: 'nyc',
    nombre: 'E 180 St',
    lineas: ["2", "5"],
    adyacentes: [
      { slug: 'nyc-bronx-park-east', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-west-farms-sq-e-tremont-av', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-morris-park', tiempo: 2, linea: '5', tipo: 'subway' }
    ]
  },
  'nyc-east-105-st': {
    ciudad: 'nyc',
    nombre: 'East 105 St',
    lineas: ["L"],
    adyacentes: [
      { slug: 'nyc-new-lots-av', tiempo: 2, linea: 'L', tipo: 'subway' },
      { slug: 'nyc-canarsie-rockaway-pkwy', tiempo: 2, linea: 'L', tipo: 'subway' }
    ]
  },
  'nyc-east-broadway': {
    ciudad: 'nyc',
    nombre: 'East Broadway',
    lineas: ["F"],
    adyacentes: [
      { slug: 'nyc-delancey-st-essex-st', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-york-st', tiempo: 2, linea: 'F', tipo: 'subway' }
    ]
  },
  'nyc-eastchester-dyre-av': {
    ciudad: 'nyc',
    nombre: 'Eastchester-Dyre Av',
    lineas: ["5"],
    adyacentes: [
      { slug: 'nyc-baychester-av', tiempo: 2, linea: '5', tipo: 'subway' }
    ]
  },
  'nyc-eastern-pkwy-brooklyn-museum': {
    ciudad: 'nyc',
    nombre: 'Eastern Pkwy-Brooklyn Museum',
    lineas: ["2", "3"],
    adyacentes: [
      { slug: 'nyc-grand-army-plaza', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-franklin-av-medgar-evers-college', tiempo: 2, linea: '2', tipo: 'subway' }
    ]
  },
  'nyc-elder-av': {
    ciudad: 'nyc',
    nombre: 'Elder Av',
    lineas: ["6"],
    adyacentes: [
      { slug: 'nyc-morrison-av-soundview', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-whitlock-av', tiempo: 2, linea: '6', tipo: 'subway' }
    ]
  },
  'nyc-elmhurst-av': {
    ciudad: 'nyc',
    nombre: 'Elmhurst Av',
    lineas: ["E", "F", "M", "R"],
    adyacentes: [
      { slug: 'nyc-grand-av-newtown', tiempo: 2, linea: 'E', tipo: 'subway' },
      { slug: 'nyc-jackson-hts-roosevelt-av', tiempo: 2, linea: 'E', tipo: 'subway' }
    ]
  },
  'nyc-eltingville': {
    ciudad: 'nyc',
    nombre: 'Eltingville',
    lineas: ["SIR"],
    adyacentes: [
      { slug: 'nyc-great-kills', tiempo: 2, linea: 'SIR', tipo: 'subway' },
      { slug: 'nyc-annadale', tiempo: 2, linea: 'SIR', tipo: 'subway' }
    ]
  },
  'nyc-essex-st': {
    ciudad: 'nyc',
    nombre: 'Essex St',
    lineas: ["J", "M"],
    adyacentes: [
      { slug: 'nyc-marcy-av', tiempo: 2, linea: 'J', tipo: 'subway' },
      { slug: 'nyc-bowery', tiempo: 2, linea: 'J', tipo: 'subway' },
      { slug: 'nyc-delancey-st-essex-st', tiempo: 2, linea: 'transfer', tipo: 'transbordo' }
    ]
  },
  'nyc-euclid-av': {
    ciudad: 'nyc',
    nombre: 'Euclid Av',
    lineas: ["A", "C"],
    adyacentes: [
      { slug: 'nyc-shepherd-av', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-grant-av', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-far-rockaway-mott-av': {
    ciudad: 'nyc',
    nombre: 'Far Rockaway-Mott Av',
    lineas: ["A"],
    adyacentes: [
      { slug: 'nyc-beach-25-st', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-flatbush-av-brooklyn-college': {
    ciudad: 'nyc',
    nombre: 'Flatbush Av-Brooklyn College',
    lineas: ["2", "5"],
    adyacentes: [
      { slug: 'nyc-newkirk-av-little-haiti', tiempo: 2, linea: '2', tipo: 'subway' }
    ]
  },
  'nyc-flushing-av': {
    ciudad: 'nyc',
    nombre: 'Flushing Av',
    lineas: ["G", "J", "M"],
    adyacentes: [
      { slug: 'nyc-broadway', tiempo: 2, linea: 'G', tipo: 'subway' },
      { slug: 'nyc-myrtle-willoughby-avs', tiempo: 2, linea: 'G', tipo: 'subway' },
      { slug: 'nyc-myrtle-av', tiempo: 2, linea: 'J', tipo: 'subway' },
      { slug: 'nyc-lorimer-st', tiempo: 2, linea: 'J', tipo: 'subway' }
    ]
  },
  'nyc-flushing-main-st': {
    ciudad: 'nyc',
    nombre: 'Flushing-Main St',
    lineas: ["7"],
    adyacentes: [
      { slug: 'nyc-mets-willets-point', tiempo: 2, linea: '7', tipo: 'subway' }
    ]
  },
  'nyc-fordham-rd': {
    ciudad: 'nyc',
    nombre: 'Fordham Rd',
    lineas: ["4", "D"],
    adyacentes: [
      { slug: 'nyc-kingsbridge-rd', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-183-st', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-182-183-sts', tiempo: 2, linea: 'D', tipo: 'subway' }
    ]
  },
  'nyc-forest-av': {
    ciudad: 'nyc',
    nombre: 'Forest Av',
    lineas: ["M"],
    adyacentes: [
      { slug: 'nyc-fresh-pond-rd', tiempo: 2, linea: 'M', tipo: 'subway' },
      { slug: 'nyc-seneca-av', tiempo: 2, linea: 'M', tipo: 'subway' }
    ]
  },
  'nyc-forest-hills-71-av': {
    ciudad: 'nyc',
    nombre: 'Forest Hills-71 Av',
    lineas: ["E", "F", "M", "R"],
    adyacentes: [
      { slug: 'nyc-75-av', tiempo: 2, linea: 'E', tipo: 'subway' },
      { slug: 'nyc-67-av', tiempo: 2, linea: 'E', tipo: 'subway' }
    ]
  },
  'nyc-fort-hamilton-pkwy': {
    ciudad: 'nyc',
    nombre: 'Fort Hamilton Pkwy',
    lineas: ["F", "G", "N"],
    adyacentes: [
      { slug: 'nyc-15-st-prospect-park', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-church-av', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-8-av', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-new-utrecht-av', tiempo: 2, linea: 'N', tipo: 'subway' }
    ]
  },
  'nyc-franklin-av': {
    ciudad: 'nyc',
    nombre: 'Franklin Av',
    lineas: ["A", "C"],
    adyacentes: [
      { slug: 'nyc-clinton-washington-avs', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-nostrand-av', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-franklin-av-medgar-evers-college': {
    ciudad: 'nyc',
    nombre: 'Franklin Av-Medgar Evers College',
    lineas: ["2", "3", "5", "S-Franklin"],
    adyacentes: [
      { slug: 'nyc-eastern-pkwy-brooklyn-museum', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-president-st-medgar-evers-college', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-nostrand-av', tiempo: 2, linea: '3', tipo: 'subway' },
      { slug: 'nyc-atlantic-av-barclays-ctr', tiempo: 2, linea: '5', tipo: 'subway' },
      { slug: 'nyc-park-place', tiempo: 2, linea: 'S-Franklin', tipo: 'subway' }
    ]
  },
  'nyc-franklin-st': {
    ciudad: 'nyc',
    nombre: 'Franklin St',
    lineas: ["1"],
    adyacentes: [
      { slug: 'nyc-canal-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-chambers-st', tiempo: 2, linea: '1', tipo: 'subway' }
    ]
  },
  'nyc-freeman-st': {
    ciudad: 'nyc',
    nombre: 'Freeman St',
    lineas: ["2", "5"],
    adyacentes: [
      { slug: 'nyc-174-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-simpson-st', tiempo: 2, linea: '2', tipo: 'subway' }
    ]
  },
  'nyc-fresh-pond-rd': {
    ciudad: 'nyc',
    nombre: 'Fresh Pond Rd',
    lineas: ["M"],
    adyacentes: [
      { slug: 'nyc-middle-village-metropolitan-av', tiempo: 2, linea: 'M', tipo: 'subway' },
      { slug: 'nyc-forest-av', tiempo: 2, linea: 'M', tipo: 'subway' }
    ]
  },
  'nyc-fulton-st': {
    ciudad: 'nyc',
    nombre: 'Fulton St',
    lineas: ["2", "3", "4", "5", "A", "C", "G", "J"],
    adyacentes: [
      { slug: 'nyc-park-place', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-wall-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-brooklyn-bridge-city-hall', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-chambers-st', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-high-st', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-clinton-washington-avs', tiempo: 2, linea: 'G', tipo: 'subway' },
      { slug: 'nyc-hoyt-schermerhorn-sts', tiempo: 2, linea: 'G', tipo: 'subway' },
      { slug: 'nyc-broad-st', tiempo: 2, linea: 'J', tipo: 'subway' }
    ]
  },
  'nyc-gates-av': {
    ciudad: 'nyc',
    nombre: 'Gates Av',
    lineas: ["J"],
    adyacentes: [
      { slug: 'nyc-halsey-st', tiempo: 2, linea: 'J', tipo: 'subway' },
      { slug: 'nyc-kosciuszko-st', tiempo: 2, linea: 'J', tipo: 'subway' }
    ]
  },
  'nyc-graham-av': {
    ciudad: 'nyc',
    nombre: 'Graham Av',
    lineas: ["L"],
    adyacentes: [
      { slug: 'nyc-lorimer-st', tiempo: 2, linea: 'L', tipo: 'subway' },
      { slug: 'nyc-grand-st', tiempo: 2, linea: 'L', tipo: 'subway' }
    ]
  },
  'nyc-grand-army-plaza': {
    ciudad: 'nyc',
    nombre: 'Grand Army Plaza',
    lineas: ["2", "3"],
    adyacentes: [
      { slug: 'nyc-bergen-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-eastern-pkwy-brooklyn-museum', tiempo: 2, linea: '2', tipo: 'subway' }
    ]
  },
  'nyc-grand-av-newtown': {
    ciudad: 'nyc',
    nombre: 'Grand Av-Newtown',
    lineas: ["E", "F", "M", "R"],
    adyacentes: [
      { slug: 'nyc-woodhaven-blvd', tiempo: 2, linea: 'E', tipo: 'subway' },
      { slug: 'nyc-elmhurst-av', tiempo: 2, linea: 'E', tipo: 'subway' }
    ]
  },
  'nyc-grand-central-42-st': {
    ciudad: 'nyc',
    nombre: 'Grand Central-42 St',
    lineas: ["4", "5", "6", "7", "S"],
    adyacentes: [
      { slug: 'nyc-59-st', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-33-st', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-51-st', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-vernon-blvd-jackson-av', tiempo: 2, linea: '7', tipo: 'subway' },
      { slug: 'nyc-5-av-bryant-park', tiempo: 2, linea: '7', tipo: 'subway' },
      { slug: 'nyc-times-sq-42-st', tiempo: 2, linea: 'S', tipo: 'subway' }
    ]
  },
  'nyc-grand-st': {
    ciudad: 'nyc',
    nombre: 'Grand St',
    lineas: ["B", "D", "L"],
    adyacentes: [
      { slug: 'nyc-broadway-lafayette-st', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-dekalb-av', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-graham-av', tiempo: 2, linea: 'L', tipo: 'subway' },
      { slug: 'nyc-montrose-av', tiempo: 2, linea: 'L', tipo: 'subway' }
    ]
  },
  'nyc-grant-av': {
    ciudad: 'nyc',
    nombre: 'Grant Av',
    lineas: ["A"],
    adyacentes: [
      { slug: 'nyc-euclid-av', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-80-st', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-grant-city': {
    ciudad: 'nyc',
    nombre: 'Grant City',
    lineas: ["SIR"],
    adyacentes: [
      { slug: 'nyc-jefferson-av', tiempo: 2, linea: 'SIR', tipo: 'subway' },
      { slug: 'nyc-new-dorp', tiempo: 2, linea: 'SIR', tipo: 'subway' }
    ]
  },
  'nyc-grasmere': {
    ciudad: 'nyc',
    nombre: 'Grasmere',
    lineas: ["SIR"],
    adyacentes: [
      { slug: 'nyc-clifton', tiempo: 2, linea: 'SIR', tipo: 'subway' },
      { slug: 'nyc-old-town', tiempo: 2, linea: 'SIR', tipo: 'subway' }
    ]
  },
  'nyc-great-kills': {
    ciudad: 'nyc',
    nombre: 'Great Kills',
    lineas: ["SIR"],
    adyacentes: [
      { slug: 'nyc-bay-terrace', tiempo: 2, linea: 'SIR', tipo: 'subway' },
      { slug: 'nyc-eltingville', tiempo: 2, linea: 'SIR', tipo: 'subway' }
    ]
  },
  'nyc-greenpoint-av': {
    ciudad: 'nyc',
    nombre: 'Greenpoint Av',
    lineas: ["G"],
    adyacentes: [
      { slug: 'nyc-21-st', tiempo: 2, linea: 'G', tipo: 'subway' },
      { slug: 'nyc-nassau-av', tiempo: 2, linea: 'G', tipo: 'subway' }
    ]
  },
  'nyc-gun-hill-rd': {
    ciudad: 'nyc',
    nombre: 'Gun Hill Rd',
    lineas: ["2", "5"],
    adyacentes: [
      { slug: 'nyc-219-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-burke-av', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-baychester-av', tiempo: 2, linea: '5', tipo: 'subway' },
      { slug: 'nyc-pelham-pkwy', tiempo: 2, linea: '5', tipo: 'subway' }
    ]
  },
  'nyc-halsey-st': {
    ciudad: 'nyc',
    nombre: 'Halsey St',
    lineas: ["J", "L"],
    adyacentes: [
      { slug: 'nyc-chauncey-st', tiempo: 2, linea: 'J', tipo: 'subway' },
      { slug: 'nyc-gates-av', tiempo: 2, linea: 'J', tipo: 'subway' },
      { slug: 'nyc-myrtle-wyckoff-avs', tiempo: 2, linea: 'L', tipo: 'subway' },
      { slug: 'nyc-wilson-av', tiempo: 2, linea: 'L', tipo: 'subway' }
    ]
  },
  'nyc-harlem-148-st': {
    ciudad: 'nyc',
    nombre: 'Harlem-148 St',
    lineas: ["3"],
    adyacentes: [
      { slug: 'nyc-145-st', tiempo: 2, linea: '3', tipo: 'subway' }
    ]
  },
  'nyc-hewes-st': {
    ciudad: 'nyc',
    nombre: 'Hewes St',
    lineas: ["J", "M"],
    adyacentes: [
      { slug: 'nyc-lorimer-st', tiempo: 2, linea: 'J', tipo: 'subway' },
      { slug: 'nyc-marcy-av', tiempo: 2, linea: 'J', tipo: 'subway' }
    ]
  },
  'nyc-high-st': {
    ciudad: 'nyc',
    nombre: 'High St',
    lineas: ["A", "C"],
    adyacentes: [
      { slug: 'nyc-fulton-st', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-jay-st-metrotech', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-houston-st': {
    ciudad: 'nyc',
    nombre: 'Houston St',
    lineas: ["1"],
    adyacentes: [
      { slug: 'nyc-christopher-st-sheridan-sq', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-canal-st', tiempo: 2, linea: '1', tipo: 'subway' }
    ]
  },
  'nyc-howard-beach-jfk-airport': {
    ciudad: 'nyc',
    nombre: 'Howard Beach-JFK Airport',
    lineas: ["A"],
    adyacentes: [
      { slug: 'nyc-aqueduct-north-conduit-av', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-broad-channel', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-hoyt-schermerhorn-sts': {
    ciudad: 'nyc',
    nombre: 'Hoyt-Schermerhorn Sts',
    lineas: ["A", "C", "G"],
    adyacentes: [
      { slug: 'nyc-jay-st-metrotech', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-lafayette-av', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-fulton-st', tiempo: 2, linea: 'G', tipo: 'subway' },
      { slug: 'nyc-bergen-st', tiempo: 2, linea: 'G', tipo: 'subway' }
    ]
  },
  'nyc-hoyt-st': {
    ciudad: 'nyc',
    nombre: 'Hoyt St',
    lineas: ["2", "3"],
    adyacentes: [
      { slug: 'nyc-borough-hall', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-nevins-st', tiempo: 2, linea: '2', tipo: 'subway' }
    ]
  },
  'nyc-huguenot': {
    ciudad: 'nyc',
    nombre: 'Huguenot',
    lineas: ["SIR"],
    adyacentes: [
      { slug: 'nyc-annadale', tiempo: 2, linea: 'SIR', tipo: 'subway' },
      { slug: 'nyc-princes-bay', tiempo: 2, linea: 'SIR', tipo: 'subway' }
    ]
  },
  'nyc-hunters-point-av': {
    ciudad: 'nyc',
    nombre: 'Hunters Point Av',
    lineas: ["7"],
    adyacentes: [
      { slug: 'nyc-court-sq', tiempo: 2, linea: '7', tipo: 'subway' },
      { slug: 'nyc-vernon-blvd-jackson-av', tiempo: 2, linea: '7', tipo: 'subway' }
    ]
  },
  'nyc-hunts-point-av': {
    ciudad: 'nyc',
    nombre: 'Hunts Point Av',
    lineas: ["6"],
    adyacentes: [
      { slug: 'nyc-whitlock-av', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-longwood-av', tiempo: 2, linea: '6', tipo: 'subway' }
    ]
  },
  'nyc-intervale-av': {
    ciudad: 'nyc',
    nombre: 'Intervale Av',
    lineas: ["2", "5"],
    adyacentes: [
      { slug: 'nyc-simpson-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-prospect-av', tiempo: 2, linea: '2', tipo: 'subway' }
    ]
  },
  'nyc-inwood-207-st': {
    ciudad: 'nyc',
    nombre: 'Inwood-207 St',
    lineas: ["A"],
    adyacentes: [
      { slug: 'nyc-dyckman-st', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-jackson-av': {
    ciudad: 'nyc',
    nombre: 'Jackson Av',
    lineas: ["2", "5"],
    adyacentes: [
      { slug: 'nyc-prospect-av', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-3-av-149-st', tiempo: 2, linea: '2', tipo: 'subway' }
    ]
  },
  'nyc-jackson-hts-roosevelt-av': {
    ciudad: 'nyc',
    nombre: 'Jackson Hts-Roosevelt Av',
    lineas: ["E", "F", "M", "R"],
    adyacentes: [
      { slug: 'nyc-elmhurst-av', tiempo: 2, linea: 'E', tipo: 'subway' },
      { slug: 'nyc-65-st', tiempo: 2, linea: 'E', tipo: 'subway' }
    ]
  },
  'nyc-jamaica-179-st': {
    ciudad: 'nyc',
    nombre: 'Jamaica-179 St',
    lineas: ["F"],
    adyacentes: [
      { slug: 'nyc-169-st', tiempo: 2, linea: 'F', tipo: 'subway' }
    ]
  },
  'nyc-jamaica-center-parsons-archer': {
    ciudad: 'nyc',
    nombre: 'Jamaica Center-Parsons/Archer',
    lineas: ["E", "J"],
    adyacentes: [
      { slug: 'nyc-sutphin-blvd-archer-av-jfk-airport', tiempo: 2, linea: 'E', tipo: 'subway' }
    ]
  },
  'nyc-jamaica-van-wyck': {
    ciudad: 'nyc',
    nombre: 'Jamaica-Van Wyck',
    lineas: ["E"],
    adyacentes: [
      { slug: 'nyc-sutphin-blvd-archer-av-jfk-airport', tiempo: 2, linea: 'E', tipo: 'subway' },
      { slug: 'nyc-kew-gardens-union-tpke', tiempo: 2, linea: 'E', tipo: 'subway' }
    ]
  },
  'nyc-jay-st-metrotech': {
    ciudad: 'nyc',
    nombre: 'Jay St-MetroTech',
    lineas: ["A", "C", "F", "N", "R"],
    adyacentes: [
      { slug: 'nyc-high-st', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-hoyt-schermerhorn-sts', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-york-st', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-bergen-st', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-court-st', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-dekalb-av', tiempo: 2, linea: 'N', tipo: 'subway' }
    ]
  },
  'nyc-jefferson-av': {
    ciudad: 'nyc',
    nombre: 'Jefferson Av',
    lineas: ["SIR"],
    adyacentes: [
      { slug: 'nyc-dongan-hills', tiempo: 2, linea: 'SIR', tipo: 'subway' },
      { slug: 'nyc-grant-city', tiempo: 2, linea: 'SIR', tipo: 'subway' }
    ]
  },
  'nyc-jefferson-st': {
    ciudad: 'nyc',
    nombre: 'Jefferson St',
    lineas: ["L"],
    adyacentes: [
      { slug: 'nyc-morgan-av', tiempo: 2, linea: 'L', tipo: 'subway' },
      { slug: 'nyc-dekalb-av', tiempo: 2, linea: 'L', tipo: 'subway' }
    ]
  },
  'nyc-junction-blvd': {
    ciudad: 'nyc',
    nombre: 'Junction Blvd',
    lineas: ["7"],
    adyacentes: [
      { slug: 'nyc-103-st-corona-plaza', tiempo: 2, linea: '7', tipo: 'subway' },
      { slug: 'nyc-90-st-elmhurst-av', tiempo: 2, linea: '7', tipo: 'subway' }
    ]
  },
  'nyc-junius-st': {
    ciudad: 'nyc',
    nombre: 'Junius St',
    lineas: ["3"],
    adyacentes: [
      { slug: 'nyc-rockaway-av', tiempo: 2, linea: '3', tipo: 'subway' },
      { slug: 'nyc-pennsylvania-av', tiempo: 2, linea: '3', tipo: 'subway' }
    ]
  },
  'nyc-kew-gardens-union-tpke': {
    ciudad: 'nyc',
    nombre: 'Kew Gardens-Union Tpke',
    lineas: ["E", "F"],
    adyacentes: [
      { slug: 'nyc-jamaica-van-wyck', tiempo: 2, linea: 'E', tipo: 'subway' },
      { slug: 'nyc-75-av', tiempo: 2, linea: 'E', tipo: 'subway' },
      { slug: 'nyc-briarwood', tiempo: 2, linea: 'F', tipo: 'subway' }
    ]
  },
  'nyc-kings-hwy': {
    ciudad: 'nyc',
    nombre: 'Kings Hwy',
    lineas: ["F", "N", "Q"],
    adyacentes: [
      { slug: 'nyc-av-p', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-av-u', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-bay-pkwy', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-av-m', tiempo: 2, linea: 'Q', tipo: 'subway' }
    ]
  },
  'nyc-kingsbridge-rd': {
    ciudad: 'nyc',
    nombre: 'Kingsbridge Rd',
    lineas: ["4", "D"],
    adyacentes: [
      { slug: 'nyc-bedford-park-blvd', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-fordham-rd', tiempo: 2, linea: '4', tipo: 'subway' }
    ]
  },
  'nyc-kingston-av': {
    ciudad: 'nyc',
    nombre: 'Kingston Av',
    lineas: ["3"],
    adyacentes: [
      { slug: 'nyc-nostrand-av', tiempo: 2, linea: '3', tipo: 'subway' },
      { slug: 'nyc-crown-heights-utica-av', tiempo: 2, linea: '3', tipo: 'subway' }
    ]
  },
  'nyc-kingston-throop-avs': {
    ciudad: 'nyc',
    nombre: 'Kingston-Throop Avs',
    lineas: ["A", "C"],
    adyacentes: [
      { slug: 'nyc-nostrand-av', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-utica-av', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-knickerbocker-av': {
    ciudad: 'nyc',
    nombre: 'Knickerbocker Av',
    lineas: ["M"],
    adyacentes: [
      { slug: 'nyc-myrtle-wyckoff-avs', tiempo: 2, linea: 'M', tipo: 'subway' },
      { slug: 'nyc-central-av', tiempo: 2, linea: 'M', tipo: 'subway' }
    ]
  },
  'nyc-kosciuszko-st': {
    ciudad: 'nyc',
    nombre: 'Kosciuszko St',
    lineas: ["J"],
    adyacentes: [
      { slug: 'nyc-gates-av', tiempo: 2, linea: 'J', tipo: 'subway' },
      { slug: 'nyc-myrtle-av', tiempo: 2, linea: 'J', tipo: 'subway' }
    ]
  },
  'nyc-lafayette-av': {
    ciudad: 'nyc',
    nombre: 'Lafayette Av',
    lineas: ["A", "C"],
    adyacentes: [
      { slug: 'nyc-hoyt-schermerhorn-sts', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-clinton-washington-avs', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-lexington-av-53-st': {
    ciudad: 'nyc',
    nombre: 'Lexington Av-53 St',
    lineas: ["E", "M"],
    adyacentes: [
      { slug: 'nyc-queens-plaza', tiempo: 2, linea: 'E', tipo: 'subway' },
      { slug: 'nyc-5-av-53-st', tiempo: 2, linea: 'E', tipo: 'subway' }
    ]
  },
  'nyc-lexington-av-59-st': {
    ciudad: 'nyc',
    nombre: 'Lexington Av-59 St',
    lineas: ["N", "R", "W"],
    adyacentes: [
      { slug: 'nyc-queensboro-plaza', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-5-av-59-st', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-queens-plaza', tiempo: 2, linea: 'R', tipo: 'subway' },
      { slug: 'nyc-59-st', tiempo: 5, linea: 'transfer', tipo: 'transbordo' }
    ]
  },
  'nyc-lexington-av-63-st': {
    ciudad: 'nyc',
    nombre: 'Lexington Av-63 St',
    lineas: ["F", "M", "Q"],
    adyacentes: [
      { slug: 'nyc-roosevelt-island', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-57-st', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-5-av-53-st', tiempo: 2, linea: 'M', tipo: 'subway' },
      { slug: 'nyc-72-st', tiempo: 2, linea: 'Q', tipo: 'subway' },
      { slug: 'nyc-57-st-7-av', tiempo: 2, linea: 'Q', tipo: 'subway' }
    ]
  },
  'nyc-liberty-av': {
    ciudad: 'nyc',
    nombre: 'Liberty Av',
    lineas: ["A", "C"],
    adyacentes: [
      { slug: 'nyc-broadway-junction', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-van-siclen-av', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-livonia-av': {
    ciudad: 'nyc',
    nombre: 'Livonia Av',
    lineas: ["L"],
    adyacentes: [
      { slug: 'nyc-sutter-av', tiempo: 2, linea: 'L', tipo: 'subway' },
      { slug: 'nyc-new-lots-av', tiempo: 2, linea: 'L', tipo: 'subway' }
    ]
  },
  'nyc-longwood-av': {
    ciudad: 'nyc',
    nombre: 'Longwood Av',
    lineas: ["6"],
    adyacentes: [
      { slug: 'nyc-hunts-point-av', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-e-149-st', tiempo: 2, linea: '6', tipo: 'subway' }
    ]
  },
  'nyc-lorimer-st': {
    ciudad: 'nyc',
    nombre: 'Lorimer St',
    lineas: ["J", "L", "M"],
    adyacentes: [
      { slug: 'nyc-flushing-av', tiempo: 2, linea: 'J', tipo: 'subway' },
      { slug: 'nyc-hewes-st', tiempo: 2, linea: 'J', tipo: 'subway' },
      { slug: 'nyc-bedford-av', tiempo: 2, linea: 'L', tipo: 'subway' },
      { slug: 'nyc-graham-av', tiempo: 2, linea: 'L', tipo: 'subway' }
    ]
  },
  'nyc-marble-hill-225-st': {
    ciudad: 'nyc',
    nombre: 'Marble Hill-225 St',
    lineas: ["1"],
    adyacentes: [
      { slug: 'nyc-231-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-215-st', tiempo: 2, linea: '1', tipo: 'subway' }
    ]
  },
  'nyc-marcy-av': {
    ciudad: 'nyc',
    nombre: 'Marcy Av',
    lineas: ["J", "M"],
    adyacentes: [
      { slug: 'nyc-hewes-st', tiempo: 2, linea: 'J', tipo: 'subway' },
      { slug: 'nyc-essex-st', tiempo: 2, linea: 'J', tipo: 'subway' }
    ]
  },
  'nyc-metropolitan-av': {
    ciudad: 'nyc',
    nombre: 'Metropolitan Av',
    lineas: ["G"],
    adyacentes: [
      { slug: 'nyc-nassau-av', tiempo: 2, linea: 'G', tipo: 'subway' },
      { slug: 'nyc-broadway', tiempo: 2, linea: 'G', tipo: 'subway' }
    ]
  },
  'nyc-mets-willets-point': {
    ciudad: 'nyc',
    nombre: 'Mets-Willets Point',
    lineas: ["7"],
    adyacentes: [
      { slug: 'nyc-flushing-main-st', tiempo: 2, linea: '7', tipo: 'subway' },
      { slug: 'nyc-111-st', tiempo: 2, linea: '7', tipo: 'subway' }
    ]
  },
  'nyc-middle-village-metropolitan-av': {
    ciudad: 'nyc',
    nombre: 'Middle Village-Metropolitan Av',
    lineas: ["M"],
    adyacentes: [
      { slug: 'nyc-fresh-pond-rd', tiempo: 2, linea: 'M', tipo: 'subway' }
    ]
  },
  'nyc-middletown-rd': {
    ciudad: 'nyc',
    nombre: 'Middletown Rd',
    lineas: ["6"],
    adyacentes: [
      { slug: 'nyc-buhre-av', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-westchester-sq-e-tremont-av', tiempo: 2, linea: '6', tipo: 'subway' }
    ]
  },
  'nyc-montrose-av': {
    ciudad: 'nyc',
    nombre: 'Montrose Av',
    lineas: ["L"],
    adyacentes: [
      { slug: 'nyc-grand-st', tiempo: 2, linea: 'L', tipo: 'subway' },
      { slug: 'nyc-morgan-av', tiempo: 2, linea: 'L', tipo: 'subway' }
    ]
  },
  'nyc-morgan-av': {
    ciudad: 'nyc',
    nombre: 'Morgan Av',
    lineas: ["L"],
    adyacentes: [
      { slug: 'nyc-montrose-av', tiempo: 2, linea: 'L', tipo: 'subway' },
      { slug: 'nyc-jefferson-st', tiempo: 2, linea: 'L', tipo: 'subway' }
    ]
  },
  'nyc-morris-park': {
    ciudad: 'nyc',
    nombre: 'Morris Park',
    lineas: ["5"],
    adyacentes: [
      { slug: 'nyc-pelham-pkwy', tiempo: 2, linea: '5', tipo: 'subway' },
      { slug: 'nyc-e-180-st', tiempo: 2, linea: '5', tipo: 'subway' }
    ]
  },
  'nyc-morrison-av-soundview': {
    ciudad: 'nyc',
    nombre: 'Morrison Av-Soundview',
    lineas: ["6"],
    adyacentes: [
      { slug: 'nyc-st-lawrence-av', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-elder-av', tiempo: 2, linea: '6', tipo: 'subway' }
    ]
  },
  'nyc-mosholu-pkwy': {
    ciudad: 'nyc',
    nombre: 'Mosholu Pkwy',
    lineas: ["4"],
    adyacentes: [
      { slug: 'nyc-woodlawn', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-bedford-park-blvd', tiempo: 2, linea: '4', tipo: 'subway' }
    ]
  },
  'nyc-mt-eden-av': {
    ciudad: 'nyc',
    nombre: 'Mt Eden Av',
    lineas: ["4"],
    adyacentes: [
      { slug: 'nyc-176-st', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-170-st', tiempo: 2, linea: '4', tipo: 'subway' }
    ]
  },
  'nyc-myrtle-av': {
    ciudad: 'nyc',
    nombre: 'Myrtle Av',
    lineas: ["J", "M"],
    adyacentes: [
      { slug: 'nyc-kosciuszko-st', tiempo: 2, linea: 'J', tipo: 'subway' },
      { slug: 'nyc-flushing-av', tiempo: 2, linea: 'J', tipo: 'subway' },
      { slug: 'nyc-central-av', tiempo: 2, linea: 'M', tipo: 'subway' }
    ]
  },
  'nyc-myrtle-willoughby-avs': {
    ciudad: 'nyc',
    nombre: 'Myrtle-Willoughby Avs',
    lineas: ["G"],
    adyacentes: [
      { slug: 'nyc-flushing-av', tiempo: 2, linea: 'G', tipo: 'subway' },
      { slug: 'nyc-bedford-nostrand-avs', tiempo: 2, linea: 'G', tipo: 'subway' }
    ]
  },
  'nyc-myrtle-wyckoff-avs': {
    ciudad: 'nyc',
    nombre: 'Myrtle-Wyckoff Avs',
    lineas: ["L", "M"],
    adyacentes: [
      { slug: 'nyc-dekalb-av', tiempo: 2, linea: 'L', tipo: 'subway' },
      { slug: 'nyc-halsey-st', tiempo: 2, linea: 'L', tipo: 'subway' },
      { slug: 'nyc-seneca-av', tiempo: 2, linea: 'M', tipo: 'subway' },
      { slug: 'nyc-knickerbocker-av', tiempo: 2, linea: 'M', tipo: 'subway' }
    ]
  },
  'nyc-nassau': {
    ciudad: 'nyc',
    nombre: 'Nassau',
    lineas: ["SIR"],
    adyacentes: [
      { slug: 'nyc-richmond-valley', tiempo: 2, linea: 'SIR', tipo: 'subway' },
      { slug: 'nyc-atlantic', tiempo: 2, linea: 'SIR', tipo: 'subway' }
    ]
  },
  'nyc-nassau-av': {
    ciudad: 'nyc',
    nombre: 'Nassau Av',
    lineas: ["G"],
    adyacentes: [
      { slug: 'nyc-greenpoint-av', tiempo: 2, linea: 'G', tipo: 'subway' },
      { slug: 'nyc-metropolitan-av', tiempo: 2, linea: 'G', tipo: 'subway' }
    ]
  },
  'nyc-neck-rd': {
    ciudad: 'nyc',
    nombre: 'Neck Rd',
    lineas: ["Q"],
    adyacentes: [
      { slug: 'nyc-av-u', tiempo: 2, linea: 'Q', tipo: 'subway' },
      { slug: 'nyc-sheepshead-bay', tiempo: 2, linea: 'Q', tipo: 'subway' }
    ]
  },
  'nyc-neptune-av': {
    ciudad: 'nyc',
    nombre: 'Neptune Av',
    lineas: ["F"],
    adyacentes: [
      { slug: 'nyc-av-x', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-west-8-st-ny-aquarium', tiempo: 2, linea: 'F', tipo: 'subway' }
    ]
  },
  'nyc-nereid-av': {
    ciudad: 'nyc',
    nombre: 'Nereid Av',
    lineas: ["2"],
    adyacentes: [
      { slug: 'nyc-wakefield-241-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-233-st', tiempo: 2, linea: '2', tipo: 'subway' }
    ]
  },
  'nyc-nevins-st': {
    ciudad: 'nyc',
    nombre: 'Nevins St',
    lineas: ["2", "3", "5"],
    adyacentes: [
      { slug: 'nyc-hoyt-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-atlantic-av-barclays-ctr', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-borough-hall', tiempo: 2, linea: '5', tipo: 'subway' }
    ]
  },
  'nyc-new-dorp': {
    ciudad: 'nyc',
    nombre: 'New Dorp',
    lineas: ["SIR"],
    adyacentes: [
      { slug: 'nyc-grant-city', tiempo: 2, linea: 'SIR', tipo: 'subway' },
      { slug: 'nyc-oakwood-heights', tiempo: 2, linea: 'SIR', tipo: 'subway' }
    ]
  },
  'nyc-new-lots-av': {
    ciudad: 'nyc',
    nombre: 'New Lots Av',
    lineas: ["3", "L"],
    adyacentes: [
      { slug: 'nyc-van-siclen-av', tiempo: 2, linea: '3', tipo: 'subway' },
      { slug: 'nyc-livonia-av', tiempo: 2, linea: 'L', tipo: 'subway' },
      { slug: 'nyc-east-105-st', tiempo: 2, linea: 'L', tipo: 'subway' }
    ]
  },
  'nyc-new-utrecht-av': {
    ciudad: 'nyc',
    nombre: 'New Utrecht Av',
    lineas: ["N"],
    adyacentes: [
      { slug: 'nyc-fort-hamilton-pkwy', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-18-av', tiempo: 2, linea: 'N', tipo: 'subway' }
    ]
  },
  'nyc-newkirk-av-little-haiti': {
    ciudad: 'nyc',
    nombre: 'Newkirk Av-Little Haiti',
    lineas: ["2", "5"],
    adyacentes: [
      { slug: 'nyc-beverly-rd', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-flatbush-av-brooklyn-college', tiempo: 2, linea: '2', tipo: 'subway' }
    ]
  },
  'nyc-newkirk-plaza': {
    ciudad: 'nyc',
    nombre: 'Newkirk Plaza',
    lineas: ["B", "Q"],
    adyacentes: [
      { slug: 'nyc-beverly-rd', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-sheepshead-bay', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-cortelyou-rd', tiempo: 2, linea: 'Q', tipo: 'subway' },
      { slug: 'nyc-av-h', tiempo: 2, linea: 'Q', tipo: 'subway' }
    ]
  },
  'nyc-northern-blvd': {
    ciudad: 'nyc',
    nombre: 'Northern Blvd',
    lineas: ["E", "F", "M", "R"],
    adyacentes: [
      { slug: 'nyc-65-st', tiempo: 2, linea: 'E', tipo: 'subway' },
      { slug: 'nyc-46-st', tiempo: 2, linea: 'E', tipo: 'subway' }
    ]
  },
  'nyc-norwood-205-st': {
    ciudad: 'nyc',
    nombre: 'Norwood-205 St',
    lineas: ["D"],
    adyacentes: [
      { slug: 'nyc-bedford-park-blvd', tiempo: 2, linea: 'D', tipo: 'subway' }
    ]
  },
  'nyc-norwood-av': {
    ciudad: 'nyc',
    nombre: 'Norwood Av',
    lineas: ["J"],
    adyacentes: [
      { slug: 'nyc-crescent-st', tiempo: 2, linea: 'J', tipo: 'subway' },
      { slug: 'nyc-cleveland-st', tiempo: 2, linea: 'J', tipo: 'subway' }
    ]
  },
  'nyc-nostrand-av': {
    ciudad: 'nyc',
    nombre: 'Nostrand Av',
    lineas: ["3", "A", "C"],
    adyacentes: [
      { slug: 'nyc-franklin-av-medgar-evers-college', tiempo: 2, linea: '3', tipo: 'subway' },
      { slug: 'nyc-kingston-av', tiempo: 2, linea: '3', tipo: 'subway' },
      { slug: 'nyc-franklin-av', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-kingston-throop-avs', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-oakwood-heights': {
    ciudad: 'nyc',
    nombre: 'Oakwood Heights',
    lineas: ["SIR"],
    adyacentes: [
      { slug: 'nyc-new-dorp', tiempo: 2, linea: 'SIR', tipo: 'subway' },
      { slug: 'nyc-bay-terrace', tiempo: 2, linea: 'SIR', tipo: 'subway' }
    ]
  },
  'nyc-ocean-pkwy': {
    ciudad: 'nyc',
    nombre: 'Ocean Pkwy',
    lineas: ["B", "Q"],
    adyacentes: [
      { slug: 'nyc-brighton-beach', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-west-8-st-ny-aquarium', tiempo: 2, linea: 'B', tipo: 'subway' }
    ]
  },
  'nyc-old-town': {
    ciudad: 'nyc',
    nombre: 'Old Town',
    lineas: ["SIR"],
    adyacentes: [
      { slug: 'nyc-grasmere', tiempo: 2, linea: 'SIR', tipo: 'subway' },
      { slug: 'nyc-dongan-hills', tiempo: 2, linea: 'SIR', tipo: 'subway' }
    ]
  },
  'nyc-ozone-park-lefferts-blvd': {
    ciudad: 'nyc',
    nombre: 'Ozone Park-Lefferts Blvd',
    lineas: ["A"],
    adyacentes: [
      { slug: 'nyc-111-st', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-park-place': {
    ciudad: 'nyc',
    nombre: 'Park Place',
    lineas: ["2", "3", "S-Franklin"],
    adyacentes: [
      { slug: 'nyc-chambers-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-fulton-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-franklin-av-medgar-evers-college', tiempo: 2, linea: 'S-Franklin', tipo: 'subway' },
      { slug: 'nyc-botanic-garden', tiempo: 2, linea: 'S-Franklin', tipo: 'subway' }
    ]
  },
  'nyc-parkchester': {
    ciudad: 'nyc',
    nombre: 'Parkchester',
    lineas: ["6"],
    adyacentes: [
      { slug: 'nyc-castle-hill-av', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-st-lawrence-av', tiempo: 2, linea: '6', tipo: 'subway' }
    ]
  },
  'nyc-parsons-blvd': {
    ciudad: 'nyc',
    nombre: 'Parsons Blvd',
    lineas: ["F"],
    adyacentes: [
      { slug: 'nyc-169-st', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-sutphin-blvd', tiempo: 2, linea: 'F', tipo: 'subway' }
    ]
  },
  'nyc-pelham-bay-park': {
    ciudad: 'nyc',
    nombre: 'Pelham Bay Park',
    lineas: ["6"],
    adyacentes: [
      { slug: 'nyc-buhre-av', tiempo: 2, linea: '6', tipo: 'subway' }
    ]
  },
  'nyc-pelham-pkwy': {
    ciudad: 'nyc',
    nombre: 'Pelham Pkwy',
    lineas: ["2", "5"],
    adyacentes: [
      { slug: 'nyc-allerton-av', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-bronx-park-east', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-gun-hill-rd', tiempo: 2, linea: '5', tipo: 'subway' },
      { slug: 'nyc-morris-park', tiempo: 2, linea: '5', tipo: 'subway' }
    ]
  },
  'nyc-pennsylvania-av': {
    ciudad: 'nyc',
    nombre: 'Pennsylvania Av',
    lineas: ["3"],
    adyacentes: [
      { slug: 'nyc-junius-st', tiempo: 2, linea: '3', tipo: 'subway' },
      { slug: 'nyc-van-siclen-av', tiempo: 2, linea: '3', tipo: 'subway' }
    ]
  },
  'nyc-pleasant-plains': {
    ciudad: 'nyc',
    nombre: 'Pleasant Plains',
    lineas: ["SIR"],
    adyacentes: [
      { slug: 'nyc-princes-bay', tiempo: 2, linea: 'SIR', tipo: 'subway' },
      { slug: 'nyc-richmond-valley', tiempo: 2, linea: 'SIR', tipo: 'subway' }
    ]
  },
  'nyc-president-st-medgar-evers-college': {
    ciudad: 'nyc',
    nombre: 'President St-Medgar Evers College',
    lineas: ["2", "5"],
    adyacentes: [
      { slug: 'nyc-franklin-av-medgar-evers-college', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-sterling-st', tiempo: 2, linea: '2', tipo: 'subway' }
    ]
  },
  'nyc-prince-st': {
    ciudad: 'nyc',
    nombre: 'Prince St',
    lineas: ["N", "R", "W"],
    adyacentes: [
      { slug: 'nyc-8-st-nyu', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-canal-st', tiempo: 2, linea: 'N', tipo: 'subway' }
    ]
  },
  'nyc-princes-bay': {
    ciudad: 'nyc',
    nombre: 'Princes Bay',
    lineas: ["SIR"],
    adyacentes: [
      { slug: 'nyc-huguenot', tiempo: 2, linea: 'SIR', tipo: 'subway' },
      { slug: 'nyc-pleasant-plains', tiempo: 2, linea: 'SIR', tipo: 'subway' }
    ]
  },
  'nyc-prospect-av': {
    ciudad: 'nyc',
    nombre: 'Prospect Av',
    lineas: ["2", "5", "D", "R"],
    adyacentes: [
      { slug: 'nyc-intervale-av', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-jackson-av', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-9-st', tiempo: 2, linea: 'D', tipo: 'subway' },
      { slug: 'nyc-25-st', tiempo: 2, linea: 'D', tipo: 'subway' },
      { slug: 'nyc-4-av-9-st', tiempo: 2, linea: 'R', tipo: 'subway' }
    ]
  },
  'nyc-prospect-park': {
    ciudad: 'nyc',
    nombre: 'Prospect Park',
    lineas: ["B", "Q", "S-Franklin"],
    adyacentes: [
      { slug: 'nyc-7-av', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-church-av', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-botanic-garden', tiempo: 2, linea: 'S-Franklin', tipo: 'subway' }
    ]
  },
  'nyc-queens-plaza': {
    ciudad: 'nyc',
    nombre: 'Queens Plaza',
    lineas: ["E", "F", "M", "R"],
    adyacentes: [
      { slug: 'nyc-36-st', tiempo: 2, linea: 'E', tipo: 'subway' },
      { slug: 'nyc-lexington-av-53-st', tiempo: 2, linea: 'E', tipo: 'subway' },
      { slug: 'nyc-21-st-queensbridge', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-lexington-av-59-st', tiempo: 2, linea: 'R', tipo: 'subway' }
    ]
  },
  'nyc-queensboro-plaza': {
    ciudad: 'nyc',
    nombre: 'Queensboro Plaza',
    lineas: ["7", "N", "W"],
    adyacentes: [
      { slug: 'nyc-33-st-rawson-st', tiempo: 2, linea: '7', tipo: 'subway' },
      { slug: 'nyc-court-sq', tiempo: 2, linea: '7', tipo: 'subway' },
      { slug: 'nyc-39-av-dutch-kills', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-lexington-av-59-st', tiempo: 2, linea: 'N', tipo: 'subway' }
    ]
  },
  'nyc-ralph-av': {
    ciudad: 'nyc',
    nombre: 'Ralph Av',
    lineas: ["A", "C"],
    adyacentes: [
      { slug: 'nyc-utica-av', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-rockaway-av', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-rector-st': {
    ciudad: 'nyc',
    nombre: 'Rector St',
    lineas: ["1"],
    adyacentes: [
      { slug: 'nyc-cortlandt-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-south-ferry', tiempo: 2, linea: '1', tipo: 'subway' }
    ]
  },
  'nyc-richmond-valley': {
    ciudad: 'nyc',
    nombre: 'Richmond Valley',
    lineas: ["SIR"],
    adyacentes: [
      { slug: 'nyc-pleasant-plains', tiempo: 2, linea: 'SIR', tipo: 'subway' },
      { slug: 'nyc-nassau', tiempo: 2, linea: 'SIR', tipo: 'subway' }
    ]
  },
  'nyc-rockaway-av': {
    ciudad: 'nyc',
    nombre: 'Rockaway Av',
    lineas: ["3", "A", "C"],
    adyacentes: [
      { slug: 'nyc-saratoga-av', tiempo: 2, linea: '3', tipo: 'subway' },
      { slug: 'nyc-junius-st', tiempo: 2, linea: '3', tipo: 'subway' },
      { slug: 'nyc-ralph-av', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-broadway-junction', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-rockaway-blvd': {
    ciudad: 'nyc',
    nombre: 'Rockaway Blvd',
    lineas: ["A"],
    adyacentes: [
      { slug: 'nyc-88-st', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-104-st', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-rockaway-park-beach-116-st': {
    ciudad: 'nyc',
    nombre: 'Rockaway Park-Beach 116 St',
    lineas: ["S-Rockaway"],
    adyacentes: [
      { slug: 'nyc-beach-105-st', tiempo: 2, linea: 'S-Rockaway', tipo: 'subway' }
    ]
  },
  'nyc-roosevelt-island': {
    ciudad: 'nyc',
    nombre: 'Roosevelt Island',
    lineas: ["F"],
    adyacentes: [
      { slug: 'nyc-21-st-queensbridge', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-lexington-av-63-st', tiempo: 2, linea: 'F', tipo: 'subway' }
    ]
  },
  'nyc-saratoga-av': {
    ciudad: 'nyc',
    nombre: 'Saratoga Av',
    lineas: ["3"],
    adyacentes: [
      { slug: 'nyc-sutter-av-rutland-rd', tiempo: 2, linea: '3', tipo: 'subway' },
      { slug: 'nyc-rockaway-av', tiempo: 2, linea: '3', tipo: 'subway' }
    ]
  },
  'nyc-secaucus-junction': {
    ciudad: 'nyc',
    nombre: 'Secaucus Junction',
    lineas: ["NJT"],
    adyacentes: [
      { slug: 'nyc-34-st-penn-station', tiempo: 35, linea: 'NJT', tipo: 'regional' }
    ]
  },
  'nyc-seneca-av': {
    ciudad: 'nyc',
    nombre: 'Seneca Av',
    lineas: ["M"],
    adyacentes: [
      { slug: 'nyc-forest-av', tiempo: 2, linea: 'M', tipo: 'subway' },
      { slug: 'nyc-myrtle-wyckoff-avs', tiempo: 2, linea: 'M', tipo: 'subway' }
    ]
  },
  'nyc-sheepshead-bay': {
    ciudad: 'nyc',
    nombre: 'Sheepshead Bay',
    lineas: ["B", "Q"],
    adyacentes: [
      { slug: 'nyc-newkirk-plaza', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-brighton-beach', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-neck-rd', tiempo: 2, linea: 'Q', tipo: 'subway' }
    ]
  },
  'nyc-shepherd-av': {
    ciudad: 'nyc',
    nombre: 'Shepherd Av',
    lineas: ["A", "C"],
    adyacentes: [
      { slug: 'nyc-van-siclen-av', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-euclid-av', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-simpson-st': {
    ciudad: 'nyc',
    nombre: 'Simpson St',
    lineas: ["2", "5"],
    adyacentes: [
      { slug: 'nyc-freeman-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-intervale-av', tiempo: 2, linea: '2', tipo: 'subway' }
    ]
  },
  'nyc-smith-9-sts': {
    ciudad: 'nyc',
    nombre: 'Smith-9 Sts',
    lineas: ["F", "G"],
    adyacentes: [
      { slug: 'nyc-carroll-st', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-4-av-9-st', tiempo: 2, linea: 'F', tipo: 'subway' }
    ]
  },
  'nyc-south-ferry': {
    ciudad: 'nyc',
    nombre: 'South Ferry',
    lineas: ["1"],
    adyacentes: [
      { slug: 'nyc-rector-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-st-george', tiempo: 25, linea: 'Ferry', tipo: 'transbordo' }
    ]
  },
  'nyc-spring-st': {
    ciudad: 'nyc',
    nombre: 'Spring St',
    lineas: ["6", "A", "C", "E"],
    adyacentes: [
      { slug: 'nyc-bleecker-st', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-canal-st', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-w-4-st-washington-sq', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-st-george': {
    ciudad: 'nyc',
    nombre: 'St George',
    lineas: ["SIR"],
    adyacentes: [
      { slug: 'nyc-tompkinsville', tiempo: 2, linea: 'SIR', tipo: 'subway' },
      { slug: 'nyc-south-ferry', tiempo: 25, linea: 'Ferry', tipo: 'transbordo' },
      { slug: 'nyc-whitehall-st-south-ferry', tiempo: 25, linea: 'Ferry', tipo: 'transbordo' }
    ]
  },
  'nyc-st-lawrence-av': {
    ciudad: 'nyc',
    nombre: 'St Lawrence Av',
    lineas: ["6"],
    adyacentes: [
      { slug: 'nyc-parkchester', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-morrison-av-soundview', tiempo: 2, linea: '6', tipo: 'subway' }
    ]
  },
  'nyc-stapleton': {
    ciudad: 'nyc',
    nombre: 'Stapleton',
    lineas: ["SIR"],
    adyacentes: [
      { slug: 'nyc-tompkinsville', tiempo: 2, linea: 'SIR', tipo: 'subway' },
      { slug: 'nyc-clifton', tiempo: 2, linea: 'SIR', tipo: 'subway' }
    ]
  },
  'nyc-steinway-st': {
    ciudad: 'nyc',
    nombre: 'Steinway St',
    lineas: ["E", "F", "M", "R"],
    adyacentes: [
      { slug: 'nyc-46-st', tiempo: 2, linea: 'E', tipo: 'subway' },
      { slug: 'nyc-36-st', tiempo: 2, linea: 'E', tipo: 'subway' }
    ]
  },
  'nyc-sterling-st': {
    ciudad: 'nyc',
    nombre: 'Sterling St',
    lineas: ["2", "5"],
    adyacentes: [
      { slug: 'nyc-president-st-medgar-evers-college', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-winthrop-st', tiempo: 2, linea: '2', tipo: 'subway' }
    ]
  },
  'nyc-sutphin-blvd': {
    ciudad: 'nyc',
    nombre: 'Sutphin Blvd',
    lineas: ["F"],
    adyacentes: [
      { slug: 'nyc-parsons-blvd', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-briarwood', tiempo: 2, linea: 'F', tipo: 'subway' }
    ]
  },
  'nyc-sutphin-blvd-archer-av-jfk-airport': {
    ciudad: 'nyc',
    nombre: 'Sutphin Blvd-Archer Av-JFK Airport',
    lineas: ["E", "J"],
    adyacentes: [
      { slug: 'nyc-jamaica-center-parsons-archer', tiempo: 2, linea: 'E', tipo: 'subway' },
      { slug: 'nyc-jamaica-van-wyck', tiempo: 2, linea: 'E', tipo: 'subway' },
      { slug: 'nyc-121-st', tiempo: 2, linea: 'J', tipo: 'subway' }
    ]
  },
  'nyc-sutter-av': {
    ciudad: 'nyc',
    nombre: 'Sutter Av',
    lineas: ["L"],
    adyacentes: [
      { slug: 'nyc-atlantic-av', tiempo: 2, linea: 'L', tipo: 'subway' },
      { slug: 'nyc-livonia-av', tiempo: 2, linea: 'L', tipo: 'subway' }
    ]
  },
  'nyc-sutter-av-rutland-rd': {
    ciudad: 'nyc',
    nombre: 'Sutter Av-Rutland Rd',
    lineas: ["3"],
    adyacentes: [
      { slug: 'nyc-crown-heights-utica-av', tiempo: 2, linea: '3', tipo: 'subway' },
      { slug: 'nyc-saratoga-av', tiempo: 2, linea: '3', tipo: 'subway' }
    ]
  },
  'nyc-times-sq-42-st': {
    ciudad: 'nyc',
    nombre: 'Times Sq-42 St',
    lineas: ["1", "2", "3", "7", "N", "Q", "R", "S", "W"],
    adyacentes: [
      { slug: 'nyc-50-st', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-34-st-penn-station', tiempo: 2, linea: '1', tipo: 'subway' },
      { slug: 'nyc-72-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-5-av-bryant-park', tiempo: 2, linea: '7', tipo: 'subway' },
      { slug: 'nyc-34-st-hudson-yards', tiempo: 2, linea: '7', tipo: 'subway' },
      { slug: 'nyc-49-st', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-34-st-herald-sq', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-grand-central-42-st', tiempo: 2, linea: 'S', tipo: 'subway' },
      { slug: 'nyc-42-st-port-authority-bus-terminal', tiempo: 5, linea: 'transfer', tipo: 'transbordo' }
    ]
  },
  'nyc-tompkinsville': {
    ciudad: 'nyc',
    nombre: 'Tompkinsville',
    lineas: ["SIR"],
    adyacentes: [
      { slug: 'nyc-st-george', tiempo: 2, linea: 'SIR', tipo: 'subway' },
      { slug: 'nyc-stapleton', tiempo: 2, linea: 'SIR', tipo: 'subway' }
    ]
  },
  'nyc-tottenville': {
    ciudad: 'nyc',
    nombre: 'Tottenville',
    lineas: ["SIR"],
    adyacentes: [
      { slug: 'nyc-atlantic', tiempo: 2, linea: 'SIR', tipo: 'subway' }
    ]
  },
  'nyc-tremont-av': {
    ciudad: 'nyc',
    nombre: 'Tremont Av',
    lineas: ["D"],
    adyacentes: [
      { slug: 'nyc-182-183-sts', tiempo: 2, linea: 'D', tipo: 'subway' },
      { slug: 'nyc-174-175-sts', tiempo: 2, linea: 'D', tipo: 'subway' }
    ]
  },
  'nyc-union-sq-14-st': {
    ciudad: 'nyc',
    nombre: 'Union Sq-14 St',
    lineas: ["L"],
    adyacentes: [
      { slug: 'nyc-6-av', tiempo: 2, linea: 'L', tipo: 'subway' },
      { slug: 'nyc-3-av', tiempo: 2, linea: 'L', tipo: 'subway' }
    ]
  },
  'nyc-union-st': {
    ciudad: 'nyc',
    nombre: 'Union St',
    lineas: ["R"],
    adyacentes: [
      { slug: 'nyc-atlantic-av-barclays-ctr', tiempo: 2, linea: 'R', tipo: 'subway' },
      { slug: 'nyc-4-av-9-st', tiempo: 2, linea: 'R', tipo: 'subway' }
    ]
  },
  'nyc-utica-av': {
    ciudad: 'nyc',
    nombre: 'Utica Av',
    lineas: ["A", "C"],
    adyacentes: [
      { slug: 'nyc-kingston-throop-avs', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-ralph-av', tiempo: 2, linea: 'A', tipo: 'subway' }
    ]
  },
  'nyc-van-cortlandt-park-242-st': {
    ciudad: 'nyc',
    nombre: 'Van Cortlandt Park-242 St',
    lineas: ["1"],
    adyacentes: [
      { slug: 'nyc-238-st', tiempo: 2, linea: '1', tipo: 'subway' }
    ]
  },
  'nyc-van-siclen-av': {
    ciudad: 'nyc',
    nombre: 'Van Siclen Av',
    lineas: ["3", "A", "C", "J"],
    adyacentes: [
      { slug: 'nyc-pennsylvania-av', tiempo: 2, linea: '3', tipo: 'subway' },
      { slug: 'nyc-new-lots-av', tiempo: 2, linea: '3', tipo: 'subway' },
      { slug: 'nyc-liberty-av', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-shepherd-av', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-cleveland-st', tiempo: 2, linea: 'J', tipo: 'subway' },
      { slug: 'nyc-alabama-av', tiempo: 2, linea: 'J', tipo: 'subway' }
    ]
  },
  'nyc-vernon-blvd-jackson-av': {
    ciudad: 'nyc',
    nombre: 'Vernon Blvd-Jackson Av',
    lineas: ["7"],
    adyacentes: [
      { slug: 'nyc-hunters-point-av', tiempo: 2, linea: '7', tipo: 'subway' },
      { slug: 'nyc-grand-central-42-st', tiempo: 2, linea: '7', tipo: 'subway' }
    ]
  },
  'nyc-w-4-st-washington-sq': {
    ciudad: 'nyc',
    nombre: 'W 4 St-Washington Sq',
    lineas: ["A", "B", "C", "D", "E", "F", "M"],
    adyacentes: [
      { slug: 'nyc-14-st', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-spring-st', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: 'nyc-34-st-herald-sq', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-broadway-lafayette-st', tiempo: 2, linea: 'B', tipo: 'subway' }
    ]
  },
  'nyc-wakefield-241-st': {
    ciudad: 'nyc',
    nombre: 'Wakefield-241 St',
    lineas: ["2"],
    adyacentes: [
      { slug: 'nyc-nereid-av', tiempo: 2, linea: '2', tipo: 'subway' }
    ]
  },
  'nyc-wall-st': {
    ciudad: 'nyc',
    nombre: 'Wall St',
    lineas: ["2", "3", "4", "5"],
    adyacentes: [
      { slug: 'nyc-fulton-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-clark-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-bowling-green', tiempo: 2, linea: '4', tipo: 'subway' }
    ]
  },
  'nyc-west-8-st-ny-aquarium': {
    ciudad: 'nyc',
    nombre: 'West 8 St-NY Aquarium',
    lineas: ["B", "F", "Q"],
    adyacentes: [
      { slug: 'nyc-ocean-pkwy', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-coney-island-stillwell-av', tiempo: 2, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-neptune-av', tiempo: 2, linea: 'F', tipo: 'subway' }
    ]
  },
  'nyc-west-farms-sq-e-tremont-av': {
    ciudad: 'nyc',
    nombre: 'West Farms Sq-E Tremont Av',
    lineas: ["2", "5"],
    adyacentes: [
      { slug: 'nyc-e-180-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-174-st', tiempo: 2, linea: '2', tipo: 'subway' }
    ]
  },
  'nyc-westchester-sq-e-tremont-av': {
    ciudad: 'nyc',
    nombre: 'Westchester Sq-E Tremont Av',
    lineas: ["6"],
    adyacentes: [
      { slug: 'nyc-middletown-rd', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-zerega-av', tiempo: 2, linea: '6', tipo: 'subway' }
    ]
  },
  'nyc-whitehall-st-south-ferry': {
    ciudad: 'nyc',
    nombre: 'Whitehall St-South Ferry',
    lineas: ["N", "R", "W"],
    adyacentes: [
      { slug: 'nyc-cortlandt-st', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-court-st', tiempo: 2, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-st-george', tiempo: 25, linea: 'Ferry', tipo: 'transbordo' }
    ]
  },
  'nyc-whitlock-av': {
    ciudad: 'nyc',
    nombre: 'Whitlock Av',
    lineas: ["6"],
    adyacentes: [
      { slug: 'nyc-elder-av', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-hunts-point-av', tiempo: 2, linea: '6', tipo: 'subway' }
    ]
  },
  'nyc-wilson-av': {
    ciudad: 'nyc',
    nombre: 'Wilson Av',
    lineas: ["L"],
    adyacentes: [
      { slug: 'nyc-halsey-st', tiempo: 2, linea: 'L', tipo: 'subway' },
      { slug: 'nyc-bushwick-av-aberdeen-st', tiempo: 2, linea: 'L', tipo: 'subway' }
    ]
  },
  'nyc-winthrop-st': {
    ciudad: 'nyc',
    nombre: 'Winthrop St',
    lineas: ["2", "5"],
    adyacentes: [
      { slug: 'nyc-sterling-st', tiempo: 2, linea: '2', tipo: 'subway' },
      { slug: 'nyc-church-av', tiempo: 2, linea: '2', tipo: 'subway' }
    ]
  },
  'nyc-woodhaven-blvd': {
    ciudad: 'nyc',
    nombre: 'Woodhaven Blvd',
    lineas: ["E", "F", "J", "M", "R"],
    adyacentes: [
      { slug: 'nyc-63-dr-rego-park', tiempo: 2, linea: 'E', tipo: 'subway' },
      { slug: 'nyc-grand-av-newtown', tiempo: 2, linea: 'E', tipo: 'subway' },
      { slug: 'nyc-104-st', tiempo: 2, linea: 'J', tipo: 'subway' },
      { slug: 'nyc-85-st-forest-pkwy', tiempo: 2, linea: 'J', tipo: 'subway' }
    ]
  },
  'nyc-woodlawn': {
    ciudad: 'nyc',
    nombre: 'Woodlawn',
    lineas: ["4"],
    adyacentes: [
      { slug: 'nyc-mosholu-pkwy', tiempo: 2, linea: '4', tipo: 'subway' }
    ]
  },
  'nyc-world-trade-center': {
    ciudad: 'nyc',
    nombre: 'World Trade Center',
    lineas: ["E"],
    adyacentes: [
      { slug: 'nyc-canal-st', tiempo: 2, linea: 'E', tipo: 'subway' }
    ]
  },
  'nyc-york-st': {
    ciudad: 'nyc',
    nombre: 'York St',
    lineas: ["F"],
    adyacentes: [
      { slug: 'nyc-east-broadway', tiempo: 2, linea: 'F', tipo: 'subway' },
      { slug: 'nyc-jay-st-metrotech', tiempo: 2, linea: 'F', tipo: 'subway' }
    ]
  },
  'nyc-zerega-av': {
    ciudad: 'nyc',
    nombre: 'Zerega Av',
    lineas: ["6"],
    adyacentes: [
      { slug: 'nyc-westchester-sq-e-tremont-av', tiempo: 2, linea: '6', tipo: 'subway' },
      { slug: 'nyc-castle-hill-av', tiempo: 2, linea: '6', tipo: 'subway' }
    ]
  }
};
