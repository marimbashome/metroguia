export const grafoMinneapolis = {
  // ═══ BLUE LINE (shared downtown + south to Mall of America) ═══
  'mpls-target-field': {
    ciudad: 'minneapolis', nombre: 'Target Field', lineas: ['Blue', 'Green', 'Northstar'],
    adyacentes: [
      { slug: 'mpls-warehouse-district', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
      { slug: 'mpls-warehouse-district', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
      { slug: 'mpls-fridley', tiempo: 15, linea: 'Northstar', tipo: 'northstar-commuter-rail' },
    ]
  },
  'mpls-warehouse-district': {
    ciudad: 'minneapolis', nombre: 'Warehouse District/Hennepin Ave', lineas: ['Blue', 'Green'],
    adyacentes: [
      { slug: 'mpls-target-field', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
      { slug: 'mpls-nicollet-mall', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
      { slug: 'mpls-target-field', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
      { slug: 'mpls-nicollet-mall', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
    ]
  },
  'mpls-nicollet-mall': {
    ciudad: 'minneapolis', nombre: 'Nicollet Mall', lineas: ['Blue', 'Green'],
    adyacentes: [
      { slug: 'mpls-warehouse-district', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
      { slug: 'mpls-government-plaza', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
      { slug: 'mpls-warehouse-district', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
      { slug: 'mpls-government-plaza', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
    ]
  },
  'mpls-government-plaza': {
    ciudad: 'minneapolis', nombre: 'Government Plaza', lineas: ['Blue', 'Green'],
    adyacentes: [
      { slug: 'mpls-nicollet-mall', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
      { slug: 'mpls-downtown-east', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
      { slug: 'mpls-nicollet-mall', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
      { slug: 'mpls-downtown-east', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
    ]
  },
  'mpls-downtown-east': {
    ciudad: 'minneapolis', nombre: 'Downtown East/Metrodome', lineas: ['Blue', 'Green'],
    adyacentes: [
      { slug: 'mpls-government-plaza', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
      { slug: 'mpls-cedar-riverside', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
      { slug: 'mpls-government-plaza', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
      { slug: 'mpls-west-bank', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
    ]
  },
  // Blue Line south
  'mpls-cedar-riverside': {
    ciudad: 'minneapolis', nombre: 'Cedar-Riverside', lineas: ['Blue'],
    adyacentes: [
      { slug: 'mpls-downtown-east', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
      { slug: 'mpls-franklin-ave', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
    ]
  },
  'mpls-franklin-ave': {
    ciudad: 'minneapolis', nombre: 'Franklin Avenue', lineas: ['Blue'],
    adyacentes: [
      { slug: 'mpls-cedar-riverside', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
      { slug: 'mpls-lake-street-midtown', tiempo: 3, linea: 'Blue', tipo: 'metro-transit' },
    ]
  },
  'mpls-lake-street-midtown': {
    ciudad: 'minneapolis', nombre: 'Lake Street/Midtown', lineas: ['Blue'],
    adyacentes: [
      { slug: 'mpls-franklin-ave', tiempo: 3, linea: 'Blue', tipo: 'metro-transit' },
      { slug: 'mpls-38th-st', tiempo: 3, linea: 'Blue', tipo: 'metro-transit' },
    ]
  },
  'mpls-38th-st': {
    ciudad: 'minneapolis', nombre: '38th Street', lineas: ['Blue'],
    adyacentes: [
      { slug: 'mpls-lake-street-midtown', tiempo: 3, linea: 'Blue', tipo: 'metro-transit' },
      { slug: 'mpls-46th-st', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
    ]
  },
  'mpls-46th-st': {
    ciudad: 'minneapolis', nombre: '46th Street', lineas: ['Blue'],
    adyacentes: [
      { slug: 'mpls-38th-st', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
      { slug: 'mpls-50th-st-minnehaha', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
    ]
  },
  'mpls-50th-st-minnehaha': {
    ciudad: 'minneapolis', nombre: '50th Street/Minnehaha Park', lineas: ['Blue'],
    adyacentes: [
      { slug: 'mpls-46th-st', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
      { slug: 'mpls-va-medical-center', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
    ]
  },
  'mpls-va-medical-center': {
    ciudad: 'minneapolis', nombre: 'VA Medical Center', lineas: ['Blue'],
    adyacentes: [
      { slug: 'mpls-50th-st-minnehaha', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
      { slug: 'mpls-fort-snelling', tiempo: 3, linea: 'Blue', tipo: 'metro-transit' },
    ]
  },
  'mpls-fort-snelling': {
    ciudad: 'minneapolis', nombre: 'Fort Snelling', lineas: ['Blue'],
    adyacentes: [
      { slug: 'mpls-va-medical-center', tiempo: 3, linea: 'Blue', tipo: 'metro-transit' },
      { slug: 'mpls-terminal-1-lindbergh', tiempo: 3, linea: 'Blue', tipo: 'metro-transit' },
    ]
  },
  'mpls-terminal-1-lindbergh': {
    ciudad: 'minneapolis', nombre: 'Terminal 1–Lindbergh', lineas: ['Blue'],
    adyacentes: [
      { slug: 'mpls-fort-snelling', tiempo: 3, linea: 'Blue', tipo: 'metro-transit' },
      { slug: 'mpls-terminal-2-humphrey', tiempo: 4, linea: 'Blue', tipo: 'metro-transit' },
    ]
  },
  'mpls-terminal-2-humphrey': {
    ciudad: 'minneapolis', nombre: 'Terminal 2–Humphrey', lineas: ['Blue'],
    adyacentes: [
      { slug: 'mpls-terminal-1-lindbergh', tiempo: 4, linea: 'Blue', tipo: 'metro-transit' },
      { slug: 'mpls-american-blvd', tiempo: 3, linea: 'Blue', tipo: 'metro-transit' },
    ]
  },
  'mpls-american-blvd': {
    ciudad: 'minneapolis', nombre: 'American Boulevard', lineas: ['Blue'],
    adyacentes: [
      { slug: 'mpls-terminal-2-humphrey', tiempo: 3, linea: 'Blue', tipo: 'metro-transit' },
      { slug: 'mpls-bloomington-central', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
    ]
  },
  'mpls-bloomington-central': {
    ciudad: 'minneapolis', nombre: 'Bloomington Central', lineas: ['Blue'],
    adyacentes: [
      { slug: 'mpls-american-blvd', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
      { slug: 'mpls-28th-ave', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
    ]
  },
  'mpls-28th-ave': {
    ciudad: 'minneapolis', nombre: '28th Avenue', lineas: ['Blue'],
    adyacentes: [
      { slug: 'mpls-bloomington-central', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
      { slug: 'mpls-mall-of-america', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
    ]
  },
  'mpls-mall-of-america': {
    ciudad: 'minneapolis', nombre: 'Mall of America', lineas: ['Blue'],
    adyacentes: [
      { slug: 'mpls-28th-ave', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
    ]
  },
  // ═══ GREEN LINE (east from Downtown East → Union Depot) ═══
  'mpls-west-bank': {
    ciudad: 'minneapolis', nombre: 'West Bank', lineas: ['Green'],
    adyacentes: [
      { slug: 'mpls-downtown-east', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
      { slug: 'mpls-east-bank', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
    ]
  },
  'mpls-east-bank': {
    ciudad: 'minneapolis', nombre: 'East Bank', lineas: ['Green'],
    adyacentes: [
      { slug: 'mpls-west-bank', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
      { slug: 'mpls-stadium-village', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
    ]
  },
  'mpls-stadium-village': {
    ciudad: 'minneapolis', nombre: 'Stadium Village', lineas: ['Green'],
    adyacentes: [
      { slug: 'mpls-east-bank', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
      { slug: 'mpls-prospect-park', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
    ]
  },
  'mpls-prospect-park': {
    ciudad: 'minneapolis', nombre: 'Prospect Park', lineas: ['Green'],
    adyacentes: [
      { slug: 'mpls-stadium-village', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
      { slug: 'mpls-westgate', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
    ]
  },
  'mpls-westgate': {
    ciudad: 'minneapolis', nombre: 'Westgate', lineas: ['Green'],
    adyacentes: [
      { slug: 'mpls-prospect-park', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
      { slug: 'mpls-raymond-ave', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
    ]
  },
  'mpls-raymond-ave': {
    ciudad: 'minneapolis', nombre: 'Raymond Avenue', lineas: ['Green'],
    adyacentes: [
      { slug: 'mpls-westgate', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
      { slug: 'mpls-fairview-ave', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
    ]
  },
  'mpls-fairview-ave': {
    ciudad: 'minneapolis', nombre: 'Fairview Avenue', lineas: ['Green'],
    adyacentes: [
      { slug: 'mpls-raymond-ave', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
      { slug: 'mpls-snelling-ave', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
    ]
  },
  'mpls-snelling-ave': {
    ciudad: 'minneapolis', nombre: 'Snelling Avenue', lineas: ['Green'],
    adyacentes: [
      { slug: 'mpls-fairview-ave', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
      { slug: 'mpls-hamline-ave', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
    ]
  },
  'mpls-hamline-ave': {
    ciudad: 'minneapolis', nombre: 'Hamline Avenue', lineas: ['Green'],
    adyacentes: [
      { slug: 'mpls-snelling-ave', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
      { slug: 'mpls-lexington-pkwy', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
    ]
  },
  'mpls-lexington-pkwy': {
    ciudad: 'minneapolis', nombre: 'Lexington Parkway', lineas: ['Green'],
    adyacentes: [
      { slug: 'mpls-hamline-ave', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
      { slug: 'mpls-victoria-st', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
    ]
  },
  'mpls-victoria-st': {
    ciudad: 'minneapolis', nombre: 'Victoria Street', lineas: ['Green'],
    adyacentes: [
      { slug: 'mpls-lexington-pkwy', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
      { slug: 'mpls-dale-st', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
    ]
  },
  'mpls-dale-st': {
    ciudad: 'minneapolis', nombre: 'Dale Street', lineas: ['Green'],
    adyacentes: [
      { slug: 'mpls-victoria-st', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
      { slug: 'mpls-western-ave', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
    ]
  },
  'mpls-western-ave': {
    ciudad: 'minneapolis', nombre: 'Western Avenue', lineas: ['Green'],
    adyacentes: [
      { slug: 'mpls-dale-st', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
      { slug: 'mpls-capitol-rice', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
    ]
  },
  'mpls-capitol-rice': {
    ciudad: 'minneapolis', nombre: 'Capitol/Rice Street', lineas: ['Green'],
    adyacentes: [
      { slug: 'mpls-western-ave', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
      { slug: 'mpls-robert-st', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
    ]
  },
  'mpls-robert-st': {
    ciudad: 'minneapolis', nombre: 'Robert Street', lineas: ['Green'],
    adyacentes: [
      { slug: 'mpls-capitol-rice', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
      { slug: 'mpls-10th-st', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
    ]
  },
  'mpls-10th-st': {
    ciudad: 'minneapolis', nombre: '10th Street', lineas: ['Green'],
    adyacentes: [
      { slug: 'mpls-robert-st', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
      { slug: 'mpls-central-station', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
    ]
  },
  'mpls-central-station': {
    ciudad: 'minneapolis', nombre: 'Central Station', lineas: ['Green'],
    adyacentes: [
      { slug: 'mpls-10th-st', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
      { slug: 'mpls-union-depot', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
    ]
  },
  'mpls-union-depot': {
    ciudad: 'minneapolis', nombre: 'Union Depot', lineas: ['Green'],
    adyacentes: [
      { slug: 'mpls-central-station', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
    ]
  },
  // ═══ NORTHSTAR COMMUTER RAIL ═══
  'mpls-fridley': {
    ciudad: 'minneapolis', nombre: 'Fridley', lineas: ['Northstar'],
    adyacentes: [
      { slug: 'mpls-target-field', tiempo: 15, linea: 'Northstar', tipo: 'northstar-commuter-rail' },
      { slug: 'mpls-coon-rapids', tiempo: 8, linea: 'Northstar', tipo: 'northstar-commuter-rail' },
    ]
  },
  'mpls-coon-rapids': {
    ciudad: 'minneapolis', nombre: 'Coon Rapids–Riverdale', lineas: ['Northstar'],
    adyacentes: [
      { slug: 'mpls-fridley', tiempo: 8, linea: 'Northstar', tipo: 'northstar-commuter-rail' },
      { slug: 'mpls-anoka', tiempo: 10, linea: 'Northstar', tipo: 'northstar-commuter-rail' },
    ]
  },
  'mpls-anoka': {
    ciudad: 'minneapolis', nombre: 'Anoka', lineas: ['Northstar'],
    adyacentes: [
      { slug: 'mpls-coon-rapids', tiempo: 10, linea: 'Northstar', tipo: 'northstar-commuter-rail' },
      { slug: 'mpls-elk-river', tiempo: 12, linea: 'Northstar', tipo: 'northstar-commuter-rail' },
    ]
  },
  'mpls-elk-river': {
    ciudad: 'minneapolis', nombre: 'Elk River', lineas: ['Northstar'],
    adyacentes: [
      { slug: 'mpls-anoka', tiempo: 12, linea: 'Northstar', tipo: 'northstar-commuter-rail' },
      { slug: 'mpls-big-lake', tiempo: 10, linea: 'Northstar', tipo: 'northstar-commuter-rail' },
    ]
  },
  'mpls-big-lake': {
    ciudad: 'minneapolis', nombre: 'Big Lake', lineas: ['Northstar'],
    adyacentes: [
      { slug: 'mpls-elk-river', tiempo: 10, linea: 'Northstar', tipo: 'northstar-commuter-rail' },
    ]
  },
};
