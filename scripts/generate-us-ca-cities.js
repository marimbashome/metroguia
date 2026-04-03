const fs = require('fs');
const path = require('path');

const BASE = path.resolve(__dirname, '..');

// ============================================================================
// CITY DEFINITIONS — All missing US & Canada cities with rail transit
// ============================================================================
const NEW_CITIES = [
  // CANADA
  {
    slug: 'montreal',
    name: 'Montreal',
    nameES: 'Montreal',
    country: 'CA',
    state: 'Quebec',
    currency: 'CAD',
    defaultLang: 'en',
    timezone: 'America/Toronto',
    coordinates: { lat: 45.5017, lng: -73.5673 },
    fifa2026: false,
    systemName: 'STM Metro',
    systemTag: 'stm-metro',
    brandColor: '#0079C2',
    fare: 3.75,
    fareDisplay: '$3.75 CAD',
    frequency: '3–5 min',
    lines: [
      { id: 'green', color: '#00A651', colorNombre: 'Green', inicio: 'Angrignon', fin: 'Honoré-Beaugrand', total: 27, sistema: 'STM', stations: [
        'angrignon','monk','jolicoeur','verdun','de-l-eglise','lasalle','charlevoix','lionel-groulx-green','atwater','guy-concordia','peel','mcgill','place-des-arts','saint-laurent','berri-uqam-green','beaudry','papineau','frontenac','prefontaine','joliette','pie-ix','viau','assomption','cadillac','langelier','radisson','honore-beaugrand'
      ]},
      { id: 'orange', color: '#ED8B00', colorNombre: 'Orange', inicio: 'Côte-Vertu', fin: 'Montmorency', total: 30, sistema: 'STM', stations: [
        'cote-vertu','du-college','de-la-savane','namur','plamondon','cote-sainte-catherine','snowdon','outremont','edouard-montpetit','universite-de-montreal','cote-des-neiges','jean-talon-orange','beaubien','rosemont','laurier','mont-royal','sherbrooke','berri-uqam-orange','champ-de-mars','place-d-armes','square-victoria','bonaventure','lucien-l-allier','georges-vanier','lionel-groulx-orange','place-saint-henri','vendome','villa-maria','snowdon-orange','cote-vertu-orange'
      ].slice(0,30)},
      { id: 'blue', color: '#0055A4', colorNombre: 'Blue', inicio: 'Snowdon', fin: 'Saint-Michel', total: 12, sistema: 'STM', stations: [
        'snowdon-blue','cote-des-neiges-blue','universite-de-montreal-blue','edouard-montpetit-blue','outremont-blue','acadie','parc','de-castelnau','jean-talon-blue','fabre','d-iberville','saint-michel'
      ]},
      { id: 'yellow', color: '#FFD200', colorNombre: 'Yellow', inicio: 'Berri-UQAM', fin: 'Longueuil', total: 3, sistema: 'STM', stations: [
        'berri-uqam-yellow','jean-drapeau','longueuil-universite-de-sherbrooke'
      ]},
    ]
  },
  {
    slug: 'calgary',
    name: 'Calgary',
    nameES: 'Calgary',
    country: 'CA',
    state: 'Alberta',
    currency: 'CAD',
    defaultLang: 'en',
    timezone: 'America/Edmonton',
    coordinates: { lat: 51.0447, lng: -114.0719 },
    fifa2026: false,
    systemName: 'CTrain',
    systemTag: 'ctrain',
    brandColor: '#E31937',
    fare: 3.60,
    fareDisplay: '$3.60 CAD',
    frequency: '5–10 min',
    lines: [
      { id: 'red', color: '#E31937', colorNombre: 'Red', inicio: 'Tuscany', fin: 'Somerset-Bridlewood', total: 24, sistema: 'CTrain', stations: [
        'tuscany','crowfoot','dalhousie','brentwood','university','banff-trail','lions-park','sait-acad-jubilee','sunnyside','calgary-city-hall','erlton-stampede','39-avenue','chinook','heritage','southland','anderson','canyon-meadows','fish-creek-lacombe','shawnessy','somerset-bridlewood','ctrain-downtown-west','ctrain-1st-street-sw','ctrain-centre-street','ctrain-city-hall'
      ]},
      { id: 'blue', color: '#0067AC', colorNombre: 'Blue', inicio: '69 Street', fin: 'Saddletowne', total: 20, sistema: 'CTrain', stations: [
        '69-street','sirocco','westbrook','shaganappi-point','sunalta','downtown-west-kerby','ctrain-3rd-street-sw','ctrain-olympic-plaza','bridgeland-memorial','zoo','barlow-max-bell','franklin','marlborough','marlborough-park','rundle','whitehorn','mcknight-westwinds','martindale','saddletowne','blue-victoria-park'
      ]}
    ]
  },
  {
    slug: 'edmonton',
    name: 'Edmonton',
    nameES: 'Edmonton',
    country: 'CA',
    state: 'Alberta',
    currency: 'CAD',
    defaultLang: 'en',
    timezone: 'America/Edmonton',
    coordinates: { lat: 53.5461, lng: -113.4938 },
    fifa2026: false,
    systemName: 'Edmonton LRT',
    systemTag: 'edmonton-lrt',
    brandColor: '#003DA5',
    fare: 3.50,
    fareDisplay: '$3.50 CAD',
    frequency: '5–15 min',
    lines: [
      { id: 'capital', color: '#003DA5', colorNombre: 'Capital', inicio: 'Clareview', fin: 'Century Park', total: 18, sistema: 'ETS LRT', stations: [
        'clareview','belvedere','coliseum','stadium','churchill','central','bay-enterprise-square','corona','health-sciences-jubilee','university','south-campus','southgate','century-park','nait','kingsway-royal-alex','macewan','government-centre','grandin'
      ]},
      { id: 'valley', color: '#7AB648', colorNombre: 'Valley', inicio: 'Mill Woods', fin: 'Downtown', total: 12, sistema: 'ETS LRT', stations: [
        'mill-woods','grey-nuns','meadows','bonnie-doon','holyrood','muttart','quarters','downtown-valley','davies','strathearn','wagner','ritchie'
      ]}
    ]
  },
  {
    slug: 'ottawa',
    name: 'Ottawa',
    nameES: 'Ottawa',
    country: 'CA',
    state: 'Ontario',
    currency: 'CAD',
    defaultLang: 'en',
    timezone: 'America/Toronto',
    coordinates: { lat: 45.4215, lng: -75.6972 },
    fifa2026: false,
    systemName: 'O-Train',
    systemTag: 'o-train',
    brandColor: '#CF142B',
    fare: 3.75,
    fareDisplay: '$3.75 CAD',
    frequency: '4–8 min',
    lines: [
      { id: 'confederation', color: '#CF142B', colorNombre: 'Confederation', inicio: 'Blair', fin: 'Tunney\'s Pasture', total: 13, sistema: 'O-Train', stations: [
        'blair','cyrville','st-laurent','tremblay','hurdman','lees','uottawa','rideau','parliament','lyon','pimisi','bayview','tunneys-pasture'
      ]},
      { id: 'trillium', color: '#6EC72D', colorNombre: 'Trillium', inicio: 'Bayview', fin: 'Limebank', total: 11, sistema: 'O-Train', stations: [
        'bayview-trillium','mooney-s-bay','greenboro','south-keys','confederation-heights','walkley','pleasant-park','carleton','carling','limebank','bowesville'
      ]}
    ]
  },
  // USA
  {
    slug: 'detroit',
    name: 'Detroit',
    nameES: 'Detroit',
    country: 'US',
    state: 'Michigan',
    currency: 'USD',
    defaultLang: 'en',
    timezone: 'America/Detroit',
    coordinates: { lat: 42.3314, lng: -83.0458 },
    fifa2026: false,
    systemName: 'QLine & People Mover',
    systemTag: 'qline',
    brandColor: '#00274C',
    fare: 1.50,
    fareDisplay: '$1.50 USD',
    frequency: '10–15 min',
    lines: [
      { id: 'qline', color: '#00A1DF', colorNombre: 'QLine', inicio: 'Grand Blvd', fin: 'Congress St', total: 12, sistema: 'QLine', stations: [
        'detroit-grand-blvd','detroit-amsterdam','detroit-baltimore','detroit-ferry','detroit-foxtown','detroit-broadway','detroit-grand-circus-park','detroit-times-square','detroit-campus-martius','detroit-congress','detroit-woodward','detroit-mlk'
      ]},
      { id: 'people-mover', color: '#003DA5', colorNombre: 'People Mover', inicio: 'Times Square', fin: 'Renaissance Center', total: 13, sistema: 'People Mover', stations: [
        'detroit-pm-times-square','detroit-pm-michigan','detroit-pm-cass','detroit-pm-grand-circus','detroit-pm-broadway','detroit-pm-cadillac','detroit-pm-greektown','detroit-pm-bricktown','detroit-pm-renaissance','detroit-pm-financial-district','detroit-pm-cobo','detroit-pm-joe-louis','detroit-pm-fort-cass'
      ]}
    ]
  },
  {
    slug: 'cleveland',
    name: 'Cleveland',
    nameES: 'Cleveland',
    country: 'US',
    state: 'Ohio',
    currency: 'USD',
    defaultLang: 'en',
    timezone: 'America/New_York',
    coordinates: { lat: 41.4993, lng: -81.6944 },
    fifa2026: false,
    systemName: 'RTA Rapid Transit',
    systemTag: 'rta',
    brandColor: '#003B71',
    fare: 2.50,
    fareDisplay: '$2.50 USD',
    frequency: '15 min',
    lines: [
      { id: 'red', color: '#E31937', colorNombre: 'Red', inicio: 'Airport', fin: 'Windermere', total: 18, sistema: 'RTA', stations: [
        'cleveland-airport','cleveland-brookpark','cleveland-puritas','cleveland-w-117th','cleveland-w-98th','cleveland-w-65th','cleveland-w-25th','cleveland-tower-city','cleveland-e-34th','cleveland-e-55th','cleveland-e-79th','cleveland-e-105th','cleveland-university-circle','cleveland-little-italy','cleveland-coventry','cleveland-lee','cleveland-green','cleveland-windermere'
      ]},
      { id: 'blue', color: '#0055A4', colorNombre: 'Blue', inicio: 'Tower City', fin: 'Van Aken', total: 10, sistema: 'RTA', stations: [
        'cleveland-tower-city-blue','cleveland-e-34th-blue','cleveland-e-55th-blue','cleveland-e-79th-blue','cleveland-lee-blue','cleveland-warrensville','cleveland-south-green','cleveland-shaker-square','cleveland-van-aken','cleveland-green-blue'
      ]},
      { id: 'green', color: '#00A651', colorNombre: 'Green', inicio: 'Tower City', fin: 'Green Road', total: 10, sistema: 'RTA', stations: [
        'cleveland-tower-city-green','cleveland-e-34th-green','cleveland-e-55th-green','cleveland-e-79th-green','cleveland-lee-green','cleveland-south-green-g','cleveland-shaker-square-g','cleveland-farnsleigh','cleveland-drexmore','cleveland-green-road'
      ]}
    ]
  },
  {
    slug: 'las-vegas',
    name: 'Las Vegas',
    nameES: 'Las Vegas',
    country: 'US',
    state: 'Nevada',
    currency: 'USD',
    defaultLang: 'en',
    timezone: 'America/Los_Angeles',
    coordinates: { lat: 36.1699, lng: -115.1398 },
    fifa2026: false,
    systemName: 'Las Vegas Monorail',
    systemTag: 'lv-monorail',
    brandColor: '#FFD700',
    fare: 5.00,
    fareDisplay: '$5.00 USD',
    frequency: '4–8 min',
    lines: [
      { id: 'monorail', color: '#FFD700', colorNombre: 'Monorail', inicio: 'MGM Grand', fin: 'SAHARA', total: 7, sistema: 'Monorail', stations: [
        'las-vegas-mgm-grand','las-vegas-ballys-paris','las-vegas-flamingo-caesars','las-vegas-harrahs-linq','las-vegas-convention-center','las-vegas-westgate','las-vegas-sahara'
      ]}
    ]
  },
  {
    slug: 'san-jose',
    name: 'San Jose',
    nameES: 'San José',
    country: 'US',
    state: 'California',
    currency: 'USD',
    defaultLang: 'en',
    timezone: 'America/Los_Angeles',
    coordinates: { lat: 37.3382, lng: -121.8863 },
    fifa2026: false,
    systemName: 'VTA Light Rail',
    systemTag: 'vta',
    brandColor: '#008752',
    fare: 2.50,
    fareDisplay: '$2.50 USD',
    frequency: '15 min',
    lines: [
      { id: 'blue', color: '#0055A4', colorNombre: 'Blue', inicio: 'Baypointe', fin: 'Santa Teresa', total: 20, sistema: 'VTA', stations: [
        'san-jose-baypointe','san-jose-cisco-way','san-jose-milpitas','san-jose-great-mall','san-jose-montague','san-jose-component','san-jose-karina','san-jose-metro-airport','san-jose-gish','san-jose-civic-center','san-jose-japantown','san-jose-st-james','san-jose-santa-clara','san-jose-san-fernando','san-jose-convention-center','san-jose-paseo-de-san-antonio','san-jose-virginia','san-jose-tamien','san-jose-curtner','san-jose-santa-teresa'
      ]},
      { id: 'green', color: '#00A651', colorNombre: 'Green', inicio: 'Old Ironsides', fin: 'Winchester', total: 15, sistema: 'VTA', stations: [
        'san-jose-old-ironsides','san-jose-great-america','san-jose-lick-mill','san-jose-champion','san-jose-bonaventura','san-jose-orchard','san-jose-river-oaks','san-jose-tasman','san-jose-bayshore-nasa','san-jose-moffett-park','san-jose-lockheed-martin','san-jose-borregas','san-jose-crossman','san-jose-fair-oaks','san-jose-winchester'
      ]},
      { id: 'orange', color: '#ED8B00', colorNombre: 'Orange', inicio: 'Mountain View', fin: 'Alum Rock', total: 12, sistema: 'VTA', stations: [
        'san-jose-mountain-view','san-jose-whisman','san-jose-middlefield','san-jose-bayshore','san-jose-reamwood','san-jose-old-ironsides-o','san-jose-river-oaks-o','san-jose-i880','san-jose-milpitas-o','san-jose-cropley','san-jose-hostetter','san-jose-alum-rock'
      ]}
    ]
  },
  {
    slug: 'new-orleans',
    name: 'New Orleans',
    nameES: 'Nueva Orleans',
    country: 'US',
    state: 'Louisiana',
    currency: 'USD',
    defaultLang: 'en',
    timezone: 'America/Chicago',
    coordinates: { lat: 29.9511, lng: -90.0715 },
    fifa2026: false,
    systemName: 'RTA Streetcar',
    systemTag: 'rta-streetcar',
    brandColor: '#00843D',
    fare: 1.25,
    fareDisplay: '$1.25 USD',
    frequency: '10–20 min',
    lines: [
      { id: 'st-charles', color: '#00843D', colorNombre: 'St. Charles', inicio: 'Canal & Carondelet', fin: 'S. Claiborne', total: 15, sistema: 'RTA', stations: [
        'new-orleans-canal-carondelet','new-orleans-poydras','new-orleans-lee-circle','new-orleans-st-charles-jackson','new-orleans-louisiana-ave','new-orleans-napoleon-ave','new-orleans-st-charles-jefferson','new-orleans-st-charles-broadway','new-orleans-audubon-park','new-orleans-tulane','new-orleans-st-charles-carrollton','new-orleans-riverbend','new-orleans-claiborne-st-charles','new-orleans-jeanette','new-orleans-s-claiborne'
      ]},
      { id: 'canal', color: '#E31937', colorNombre: 'Canal', inicio: 'Harrah\'s Casino', fin: 'City Park', total: 10, sistema: 'RTA', stations: [
        'new-orleans-harrahs','new-orleans-canal-bourbon','new-orleans-canal-royal','new-orleans-canal-basin','new-orleans-canal-rampart','new-orleans-basin-st-louis','new-orleans-canal-carrollton','new-orleans-canal-jeff-davis','new-orleans-bayou-st-john','new-orleans-city-park'
      ]},
      { id: 'riverfront', color: '#0055A4', colorNombre: 'Riverfront', inicio: 'French Market', fin: 'Convention Center', total: 5, sistema: 'RTA', stations: [
        'new-orleans-french-market','new-orleans-jackson-brewery','new-orleans-canal-ferry','new-orleans-julia','new-orleans-convention-center'
      ]},
      { id: 'rampart', color: '#9B59B6', colorNombre: 'Rampart', inicio: 'Union Passenger Terminal', fin: 'Elysian Fields', total: 6, sistema: 'RTA', stations: [
        'new-orleans-union-terminal','new-orleans-loyola','new-orleans-rampart-canal','new-orleans-st-claude','new-orleans-press','new-orleans-elysian-fields'
      ]}
    ]
  },
  {
    slug: 'buffalo',
    name: 'Buffalo',
    nameES: 'Buffalo',
    country: 'US',
    state: 'New York',
    currency: 'USD',
    defaultLang: 'en',
    timezone: 'America/New_York',
    coordinates: { lat: 42.8864, lng: -78.8784 },
    fifa2026: false,
    systemName: 'NFTA Metro Rail',
    systemTag: 'nfta',
    brandColor: '#004B87',
    fare: 2.00,
    fareDisplay: '$2.00 USD',
    frequency: '10–15 min',
    lines: [
      { id: 'metro', color: '#004B87', colorNombre: 'Metro', inicio: 'University', fin: 'Erie Canal Harbor', total: 14, sistema: 'NFTA', stations: [
        'buffalo-university','buffalo-lasalle','buffalo-amherst','buffalo-allen-medical','buffalo-humboldt-hospital','buffalo-delavan-canisius','buffalo-utica','buffalo-summer-best','buffalo-theater','buffalo-fountain-plaza','buffalo-church','buffalo-seneca','buffalo-erie-canal-harbor','buffalo-south-campus'
      ]}
    ]
  },
  {
    slug: 'honolulu',
    name: 'Honolulu',
    nameES: 'Honolulú',
    country: 'US',
    state: 'Hawaii',
    currency: 'USD',
    defaultLang: 'en',
    timezone: 'Pacific/Honolulu',
    coordinates: { lat: 21.3069, lng: -157.8583 },
    fifa2026: false,
    systemName: 'Skyline',
    systemTag: 'skyline',
    brandColor: '#0077C0',
    fare: 3.00,
    fareDisplay: '$3.00 USD',
    frequency: '6 min',
    lines: [
      { id: 'skyline', color: '#0077C0', colorNombre: 'Skyline', inicio: 'East Kapolei', fin: 'Ala Moana Center', total: 21, sistema: 'Skyline', stations: [
        'honolulu-east-kapolei','honolulu-uh-west-oahu','honolulu-ho-opili','honolulu-west-loch','honolulu-waipahu','honolulu-leeward-cc','honolulu-pearl-highlands','honolulu-pearlridge','honolulu-aloha-stadium','honolulu-pearl-harbor','honolulu-daniel-inouye-airport','honolulu-lagoon-drive','honolulu-middle-street','honolulu-kalihi','honolulu-kapalama','honolulu-iwilei','honolulu-chinatown','honolulu-downtown','honolulu-civic-center','honolulu-kakaako','honolulu-ala-moana'
      ]}
    ]
  },
  {
    slug: 'norfolk',
    name: 'Norfolk',
    nameES: 'Norfolk',
    country: 'US',
    state: 'Virginia',
    currency: 'USD',
    defaultLang: 'en',
    timezone: 'America/New_York',
    coordinates: { lat: 36.8508, lng: -76.2859 },
    fifa2026: false,
    systemName: 'The Tide Light Rail',
    systemTag: 'tide',
    brandColor: '#003DA5',
    fare: 2.00,
    fareDisplay: '$2.00 USD',
    frequency: '10–15 min',
    lines: [
      { id: 'tide', color: '#003DA5', colorNombre: 'Tide', inicio: 'Eastern Virginia Medical', fin: 'Newtown Road', total: 11, sistema: 'HRT', stations: [
        'norfolk-eastern-virginia-medical','norfolk-ft-norfolk','norfolk-harbor-park','norfolk-civic-plaza','norfolk-macarthur-square','norfolk-monticello','norfolk-nsu','norfolk-ballentine-blvd','norfolk-military-hwy','norfolk-odu','norfolk-newtown-road'
      ]}
    ]
  }
];

// ============================================================================
// FILE GENERATORS
// ============================================================================

function generateEstaciones(city) {
  const allStations = [];
  for (const line of city.lines) {
    for (const stSlug of line.stations) {
      const stName = stSlug.replace(`${city.slug}-`, '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      allStations.push({
        slug: stSlug,
        nombre: stName,
        linea: [line.id],
        sistema: `${city.systemTag}-${line.id}`,
        municipio: city.name,
        tipo_zona: 'transit',
        pois: [],
        transferencias: [],
        seo_title: `${stName} Station — ${city.name} ${city.systemName} | MetroGuia`,
        meta_description: `${stName} station on ${city.systemName} ${line.colorNombre} Line in ${city.name}.`,
        h1: `${stName} Station — ${city.systemName} ${line.colorNombre} Line | ${city.name}`,
        intro: `Station on the ${line.colorNombre} Line of ${city.name}'s ${city.systemName}.`,
        tips: [`${line.colorNombre} Line`],
        mejor_horario: 'Any time',
        mundial_relevancia: city.fifa2026 ? 'FIFA 2026 host city' : 'No direct FIFA relevance',
        descripcion_turistica: `${stName} is a station on the ${line.colorNombre} Line of ${city.name}'s ${city.systemName} system.`,
        accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: 'Full ADA/AODA access' },
        horarios: { inicio: '05:00', fin: '00:00' }
      });
    }
  }
  // Deduplicate by slug (some transfer stations might appear on multiple lines)
  const seen = new Set();
  const unique = [];
  for (const st of allStations) {
    if (!seen.has(st.slug)) {
      seen.add(st.slug);
      unique.push(st);
    }
  }
  
  const varName = `estaciones${toPascal(city.slug)}`;
  return `export const ${varName} = ${JSON.stringify(unique, null, 2)};\n`;
}

function generateLineasDetalle(city) {
  const lineas = city.lines.map(l => ({
    id: l.id,
    color: l.color,
    colorNombre: l.colorNombre,
    inicio: l.inicio,
    fin: l.fin,
    total: l.total,
    municipios: [city.name],
    descripcion: `${l.colorNombre} Line of ${city.name}'s ${city.systemName} connecting ${l.inicio} to ${l.fin}. ${l.total} stations serving the ${city.name} metro area.`,
    estaciones_turisticas: l.stations.slice(0, 3),
    estaciones: l.stations,
    ruta_1_dia: {
      titulo: `${l.colorNombre} Line: ${city.name} ${city.systemName} Tour`,
      paradas: [
        { estacion: l.stations[0], duracion: '1 hora', actividades: `Start at ${l.inicio}` },
        { estacion: l.stations[Math.floor(l.stations.length / 2)], duracion: '1 hora', actividades: 'Mid-route exploration' },
        { estacion: l.stations[l.stations.length - 1], duracion: '1 hora', actividades: `End at ${l.fin}` },
      ]
    },
    tarifa: city.fareDisplay,
    frecuencia: city.frequency,
    sistema: city.systemName,
    ciudad: city.slug
  }));
  
  const varName = `lineas${toPascal(city.slug)}`;
  return `export const ${varName} = ${JSON.stringify(lineas, null, 2)};\n`;
}

function generateGrafo(city) {
  const nodes = {};
  for (const line of city.lines) {
    for (let i = 0; i < line.stations.length; i++) {
      const slug = line.stations[i];
      if (!nodes[slug]) {
        const stName = slug.replace(`${city.slug}-`, '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        nodes[slug] = {
          ciudad: city.slug,
          nombre: stName,
          lineas: [line.id],
          adyacentes: []
        };
      } else {
        if (!nodes[slug].lineas.includes(line.id)) {
          nodes[slug].lineas.push(line.id);
        }
      }
      // Previous station
      if (i > 0) {
        const prev = line.stations[i - 1];
        if (!nodes[slug].adyacentes.find(a => a.slug === prev && a.linea === line.id)) {
          nodes[slug].adyacentes.push({ slug: prev, tiempo: 3, linea: line.id, tipo: city.systemTag });
        }
      }
      // Next station
      if (i < line.stations.length - 1) {
        const next = line.stations[i + 1];
        if (!nodes[slug].adyacentes.find(a => a.slug === next && a.linea === line.id)) {
          nodes[slug].adyacentes.push({ slug: next, tiempo: 3, linea: line.id, tipo: city.systemTag });
        }
      }
    }
  }
  
  const varName = `grafo${toPascal(city.slug)}`;
  let code = `export const ${varName} = {\n`;
  for (const [slug, node] of Object.entries(nodes)) {
    code += `  '${slug}': {\n`;
    code += `    ciudad: '${node.ciudad}',\n`;
    code += `    nombre: '${node.nombre}',\n`;
    code += `    lineas: ${JSON.stringify(node.lineas)},\n`;
    code += `    adyacentes: [\n`;
    for (const adj of node.adyacentes) {
      code += `      { slug: '${adj.slug}', tiempo: ${adj.tiempo}, linea: '${adj.linea}', tipo: '${adj.tipo}' },\n`;
    }
    code += `    ],\n`;
    code += `  },\n`;
  }
  code += `};\n`;
  return code;
}

function generateHubPage(city) {
  const varEstaciones = `estaciones${toPascal(city.slug)}`;
  const varLineas = `lineas${toPascal(city.slug)}`;
  const featured = city.lines[0].stations.slice(0, 4).map(s => `'${s}'`).join(', ');
  const totalStations = city.lines.reduce((sum, l) => sum + l.total, 0);
  const numLines = city.lines.length;

  return `import { ${varLineas} } from '@/data/${city.slug}/lineas-detalle';
import { ${varEstaciones} } from '@/data/${city.slug}/estaciones';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';

export const metadata = {
  title: '${city.systemName} — ${city.name} Transit | MetroGuia',
  description: '${city.systemName} guide: ${numLines} line${numLines > 1 ? 's' : ''}, ${totalStations}+ stations in ${city.name}. Complete trip planner, schedule & fares.',
  keywords: '${city.systemName}, ${city.name} transit, ${city.lines.map(l => l.colorNombre + ' Line').join(', ')}',
  openGraph: {
    title: '${city.systemName} — ${city.name} Transit Guide',
    description: 'Navigate ${city.name} with ${city.systemName}. Trip planner, fares, and station guide.',
    url: 'https://metroguia.mx/${city.slug}',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const estacionesDestacadas = ${varEstaciones}.filter(e =>
  [${featured}].includes(e.slug)
);

export default function ${toPascal(city.slug)}Page() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: '${city.name}', item: 'https://metroguia.mx/${city.slug}/' }
    ]
  };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, ${city.brandColor} 0%, ${city.brandColor}cc 100%)',
        color: '#FFFFFF',
        padding: '80px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
            ${city.systemName}
          </h1>
          <p style={{ fontSize: '1.5rem', fontWeight: '500', margin: '0 0 24px 0', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', opacity: '0.95', lineHeight: '1.4' }}>
            ${numLines} Line${numLines > 1 ? 's' : ''} · ${totalStations}+ Stations
          </p>
          <p style={{ fontSize: '1.125rem', fontWeight: '400', margin: '0', opacity: '0.9', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            ${city.name}'s ${city.systemName} — your guide to navigating the city by rail.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: 'var(--surface)', padding: '48px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', textAlign: 'center' }}>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '${city.brandColor}', margin: '0 0 8px 0' }}>${totalStations}+</p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>Stations</p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '${city.brandColor}', margin: '0 0 8px 0' }}>${numLines}</p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>Active Lines</p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '${city.brandColor}', margin: '0 0 8px 0' }}>${city.frequency}</p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>Frequency</p>
          </div>
        </div>
      </section>

      {/* TRIP PLANNER */}
      <section style={{ backgroundColor: 'var(--bg)', padding: '60px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '12px', textAlign: 'center', color: 'var(--text)' }}>
            Plan Your Route in ${city.name}
          </h2>
          <p style={{ fontSize: '1rem', textAlign: 'center', marginBottom: '24px', color: 'var(--text-muted)' }}>
            Calculate the best route between ${city.systemName} stations
          </p>
          <SearchBar ciudad="${city.slug}" />
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* FEATURED STATIONS */}
      <section style={{ backgroundColor: 'var(--bg)', padding: '80px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', margin: '0 0 48px 0', color: 'var(--text)', textAlign: 'center' }}>
            Featured Stations
          </h2>
          <div style={{ display: 'grid', gap: '24px' }}>
            {estacionesDestacadas.map((estacion, idx) => (
              <Link href={\`/${city.slug}/station/\${estacion.slug}\`} key={idx} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '28px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 8px 0', color: '${city.brandColor}' }}>
                    {estacion.nombre}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 8px 0' }}>
                    {Array.isArray(estacion.linea) ? \`Lines \${estacion.linea.join(', ')}\` : \`Line \${estacion.linea}\`}
                  </p>
                  <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0', lineHeight: '1.6' }}>
                    {estacion.intro}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PAYMENT */}
      <section style={{ backgroundColor: 'var(--bg)', padding: '80px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', margin: '0 0 48px 0', color: 'var(--text)', textAlign: 'center' }}>
            Payment & Passes
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <AffiliateTransportCard icon="🎫" titulo="Single Ride" descripcion="One-way trip on ${city.systemName}." precio="${city.fareDisplay}" enlace="#" />
            <AffiliateTransportCard icon="📱" titulo="Mobile Pass" descripcion="Digital ticket via mobile app." precio="${city.fareDisplay}" enlace="#" />
          </div>
        </div>
      </section>

      {/* LINES */}
      <section style={{ backgroundColor: 'var(--bg)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', margin: '0 0 48px 0', color: 'var(--text)', textAlign: 'center' }}>
            ${city.systemName} Lines
          </h2>
          <div style={{ display: 'grid', gap: '20px' }}>
            {${varLineas}.map((linea, idx) => (
              <Link href={\`/${city.slug}/line/\${linea.id}\`} key={idx} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', borderLeft: \`5px solid \${linea.color}\`, border: '1px solid var(--border)', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '60px', height: '60px', backgroundColor: linea.color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.5rem', fontWeight: '700', textTransform: 'uppercase' }}>
                      {linea.id[0]}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 4px 0', color: 'var(--text)' }}>
                        {linea.inicio} → {linea.fin}
                      </h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: '0' }}>
                        {linea.total} stations
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
`;
}

function generateStationPage(city) {
  const varEstaciones = `estaciones${toPascal(city.slug)}`;
  const varLineas = `lineas${toPascal(city.slug)}`;
  const lineColorsObj = {};
  city.lines.forEach(l => { lineColorsObj[l.id] = l.color; });

  return `import { ${varEstaciones} } from '@/data/${city.slug}/estaciones';
import { ${varLineas} } from '@/data/${city.slug}/lineas-detalle';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import Link from 'next/link';

const LINE_COLORS = ${JSON.stringify(lineColorsObj)};

export async function generateStaticParams() {
  return ${varEstaciones}.map((estacion) => ({
    slug: estacion.slug,
  }));
}

export async function generateMetadata({ params }) {
  const estacion = ${varEstaciones}.find((e) => e.slug === params.slug);
  if (!estacion) {
    return { title: 'Station not found', description: 'The requested station does not exist.' };
  }
  return {
    title: estacion.seo_title,
    description: estacion.meta_description,
    openGraph: {
      title: estacion.seo_title,
      description: estacion.meta_description,
      url: \`https://metroguia.mx/${city.slug}/station/\${estacion.slug}\`,
    },
  };
}

export default function Station${toPascal(city.slug)}Page({ params }) {
  const estacion = ${varEstaciones}.find((e) => e.slug === params.slug);

  if (!estacion) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--danger)' }}>Station not found</h1>
        <Link href="/${city.slug}">
          <button style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: '${city.brandColor}', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            Back to ${city.name}
          </button>
        </Link>
      </main>
    );
  }

  const lineaArray = Array.isArray(estacion.linea) ? estacion.linea : [estacion.linea];
  const colorLinea = LINE_COLORS[lineaArray[0]] || '${city.brandColor}';
  const lineaId = lineaArray[0];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: '${city.name}', item: 'https://metroguia.mx/${city.slug}/' },
      { '@type': 'ListItem', position: 3, name: \`Line \${lineaId}\`, item: \`https://metroguia.mx/${city.slug}/line/\${lineaId}/\` },
      { '@type': 'ListItem', position: 4, name: estacion.nombre, item: \`https://metroguia.mx/${city.slug}/station/\${estacion.slug}/\` },
    ]
  };

  const stationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TrainStation',
    name: estacion.nombre,
    description: estacion.descripcion_turistica,
    address: { '@type': 'PostalAddress', addressLocality: '${city.name}', addressRegion: '${city.state}', addressCountry: '${city.country}' },
  };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(stationSchema) }} />

      {/* HERO */}
      <section style={{ background: \`linear-gradient(135deg, \${colorLinea} 0%, \${colorLinea}cc 100%)\`, color: '#fff', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ marginBottom: '8px' }}>
            <Link href="/${city.slug}" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.9rem' }}>
              ← ${city.name}
            </Link>
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 8px 0' }}>{estacion.nombre}</h1>
          <p style={{ fontSize: '1.125rem', opacity: 0.9, margin: 0 }}>
            {lineaArray.map(l => \`\${l.charAt(0).toUpperCase() + l.slice(1)} Line\`).join(' · ')} — ${city.systemName}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px' }}>About this station</h2>
          <p style={{ lineHeight: 1.8, color: 'var(--text-muted)' }}>{estacion.descripcion_turistica}</p>

          <AdBannerLazy slot="4434764790" format="auto" />

          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '48px', marginBottom: '16px' }}>Accessibility</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px' }}>
            <div style={{ padding: '16px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', textAlign: 'center', border: '1px solid var(--border)' }}>
              <p style={{ fontSize: '1.5rem', margin: '0 0 4px 0' }}>{estacion.accesibilidad?.elevador ? '✅' : '❌'}</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Elevator</p>
            </div>
            <div style={{ padding: '16px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', textAlign: 'center', border: '1px solid var(--border)' }}>
              <p style={{ fontSize: '1.5rem', margin: '0 0 4px 0' }}>{estacion.accesibilidad?.rampa ? '✅' : '❌'}</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Ramp</p>
            </div>
          </div>

          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '48px', marginBottom: '16px' }}>Hours</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            {estacion.horarios?.inicio} — {estacion.horarios?.fin}
          </p>

          <div style={{ marginTop: '48px', textAlign: 'center' }}>
            <Link href={\`/${city.slug}/line/\${lineaId}\`}>
              <button style={{ padding: '12px 32px', backgroundColor: colorLinea, color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
                View {lineaId.charAt(0).toUpperCase() + lineaId.slice(1)} Line →
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
`;
}

function generateLinePage(city) {
  const varEstaciones = `estaciones${toPascal(city.slug)}`;
  const varLineas = `lineas${toPascal(city.slug)}`;

  return `import { ${varLineas} } from '@/data/${city.slug}/lineas-detalle';
import { ${varEstaciones} } from '@/data/${city.slug}/estaciones';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';

export async function generateStaticParams() {
  return ${varLineas}.map((linea) => ({
    id: linea.id,
  }));
}

export async function generateMetadata({ params }) {
  const linea = ${varLineas}.find((l) => l.id === params.id);
  if (!linea) {
    return { title: 'Line not found', description: 'The requested line does not exist.' };
  }
  return {
    title: \`${city.systemName} \${linea.colorNombre} Line — ${city.name} | MetroGuia\`,
    description: linea.descripcion.substring(0, 160),
    openGraph: {
      title: \`${city.systemName} \${linea.colorNombre} Line\`,
      description: linea.descripcion.substring(0, 160),
      url: \`https://metroguia.mx/${city.slug}/line/\${linea.id}\`,
    },
  };
}

export default function Line${toPascal(city.slug)}Page({ params }) {
  const linea = ${varLineas}.find((l) => l.id === params.id);

  if (!linea) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--danger)' }}>Line not found</h1>
        <Link href="/${city.slug}">
          <button style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: '${city.brandColor}', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            Back to ${city.name}
          </button>
        </Link>
      </main>
    );
  }

  const estacionesLinea = ${varEstaciones}.filter((e) => {
    const eLinea = Array.isArray(e.linea) ? e.linea : [e.linea];
    return eLinea.includes(linea.id);
  });

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      {/* HERO */}
      <section style={{ background: \`linear-gradient(135deg, \${linea.color} 0%, \${linea.color}cc 100%)\`, color: '#fff', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '8px' }}>
            <Link href="/${city.slug}" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.9rem' }}>
              ← ${city.name}
            </Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <span style={{ width: '60px', height: '60px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: '800', textTransform: 'uppercase' }}>
              {linea.id[0]}
            </span>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 4px 0' }}>
                {linea.colorNombre} Line
              </h1>
              <p style={{ fontSize: '1.125rem', opacity: 0.9, margin: 0 }}>
                {linea.inicio} → {linea.fin} · {linea.total} stations
              </p>
            </div>
          </div>
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* STATIONS LIST */}
      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '32px' }}>All Stations</h2>
          <div style={{ display: 'grid', gap: '12px' }}>
            {estacionesLinea.map((estacion, idx) => (
              <Link href={\`/${city.slug}/station/\${estacion.slug}\`} key={idx} style={{ textDecoration: 'none' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  padding: '16px 20px', backgroundColor: 'var(--surface)',
                  borderRadius: 'var(--radius)', border: '1px solid var(--border)',
                  cursor: 'pointer', transition: 'all 0.2s ease',
                }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    backgroundColor: linea.color, color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.85rem', fontWeight: '700', flexShrink: 0,
                  }}>
                    {idx + 1}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '600', margin: '0 0 2px 0', color: 'var(--text)' }}>
                      {estacion.nombre}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                      {estacion.intro}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FARE INFO */}
      <section style={{ padding: '60px 24px', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '24px' }}>Fares & Frequency</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div style={{ padding: '20px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', textAlign: 'center' }}>
              <p style={{ fontSize: '1.5rem', fontWeight: '800', color: linea.color, margin: '0 0 4px 0' }}>{linea.tarifa}</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Single Ride</p>
            </div>
            <div style={{ padding: '20px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', textAlign: 'center' }}>
              <p style={{ fontSize: '1.5rem', fontWeight: '800', color: linea.color, margin: '0 0 4px 0' }}>{linea.frecuencia}</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Peak Frequency</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
`;
}

// ============================================================================
// HELPERS
// ============================================================================
function toPascal(slug) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
}

function mkdirSafe(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// ============================================================================
// MAIN
// ============================================================================
let totalFiles = 0;
let totalStations = 0;

for (const city of NEW_CITIES) {
  console.log(`\n🏙️  Generating ${city.name} (${city.systemName})...`);
  
  // Data files
  const dataDir = path.join(BASE, 'data', city.slug);
  mkdirSafe(dataDir);
  
  fs.writeFileSync(path.join(dataDir, 'estaciones.js'), generateEstaciones(city));
  fs.writeFileSync(path.join(dataDir, 'lineas-detalle.js'), generateLineasDetalle(city));
  fs.writeFileSync(path.join(dataDir, 'grafo.js'), generateGrafo(city));
  totalFiles += 3;
  
  // App pages
  const appDir = path.join(BASE, 'app', city.slug);
  mkdirSafe(appDir);
  mkdirSafe(path.join(appDir, 'station', '[slug]'));
  mkdirSafe(path.join(appDir, 'line', '[id]'));
  
  fs.writeFileSync(path.join(appDir, 'page.jsx'), generateHubPage(city));
  fs.writeFileSync(path.join(appDir, 'station', '[slug]', 'page.jsx'), generateStationPage(city));
  fs.writeFileSync(path.join(appDir, 'line', '[id]', 'page.jsx'), generateLinePage(city));
  totalFiles += 3;
  
  const cityStations = city.lines.reduce((sum, l) => sum + l.stations.length, 0);
  totalStations += cityStations;
  console.log(`   ✅ ${cityStations} stations, ${city.lines.length} lines, 6 files`);
}

console.log(`\n========================================`);
console.log(`✅ DONE: ${totalFiles} files generated for ${NEW_CITIES.length} cities`);
console.log(`📊 Total stations: ${totalStations}`);
console.log(`========================================`);

// Print what needs to be added to cities-config.js, pathfinder.js, sitemap.js
console.log(`\n📝 MANUAL UPDATES NEEDED:`);
console.log(`\n--- cities-config.js entries ---`);
for (const city of NEW_CITIES) {
  console.log(`  '${city.slug}': { slug: '${city.slug}', name: '${city.name}', country: '${city.country}', systems: ['${city.systemTag}'], ... }`);
}

console.log(`\n--- pathfinder.js imports ---`);
for (const city of NEW_CITIES) {
  const pascal = toPascal(city.slug);
  console.log(`import { grafo${pascal} } from "@/data/${city.slug}/grafo";`);
}

console.log(`\n--- pathfinder.js grafoCombinado spread ---`);
console.log(NEW_CITIES.map(c => `...grafo${toPascal(c.slug)}`).join(', '));

console.log(`\n--- pathfinder.js BASE_FARES ---`);
for (const city of NEW_CITIES) {
  console.log(`  '${city.slug}': ${city.fare},`);
}

console.log(`\n--- sitemap.js estaciones imports ---`);
for (const city of NEW_CITIES) {
  console.log(`import { estaciones${toPascal(city.slug)} } from '@/data/${city.slug}/estaciones';`);
}

console.log(`\n--- sitemap.js lineas imports ---`);
for (const city of NEW_CITIES) {
  const pascal = toPascal(city.slug);
  // Some existing ones use lineasDetalle prefix, some use lineas prefix
  console.log(`import { lineas${pascal} } from '@/data/${city.slug}/lineas-detalle';`);
}
