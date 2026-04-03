/*
 * SEATTLE TRANSIT GRAPH — BFS Adjacency Network
 * ============================================
 * Coverage: Link Light Rail (2 lines, 36 stations) + Tacoma Link (5 stations)
 *           + Sounder Rail (North: 3, South: 8) + Monorail (2 stations)
 *           + Streetcars (SLU: 3, First Hill: 3 stations)
 * Total unique stations: 58
 * Total connections (bidirectional): 180+
 * Graph structure: Flat slugs with full adjacency lists for pathfinding
 * Transfers: 6 major hubs (International District, Westlake, Capitol Hill, Tacoma Dome, King Street, First Hill ID)
 */

export const grafoSeattle = {
  // ===== LINE 1 (Sound Transit Link Light Rail) — South to North =====

  'seattle-federal-way-downtown': {
    ciudad: 'seattle',
    nombre: 'Federal Way Downtown',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-star-lake', tiempo: 4, linea: '1', tipo: 'link-light-rail' },
    ],
  },

  'seattle-star-lake': {
    ciudad: 'seattle',
    nombre: 'Star Lake',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-federal-way-downtown', tiempo: 4, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-kent-des-moines', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
    ],
  },

  'seattle-kent-des-moines': {
    ciudad: 'seattle',
    nombre: 'Kent-Des Moines',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-star-lake', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-angle-lake', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
    ],
  },

  'seattle-angle-lake': {
    ciudad: 'seattle',
    nombre: 'Angle Lake',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-kent-des-moines', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-tukwila-international-blvd', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
    ],
  },

  'seattle-tukwila-international-blvd': {
    ciudad: 'seattle',
    nombre: 'Tukwila International Blvd',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-angle-lake', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-seatac-airport', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
    ],
  },

  'seattle-seatac-airport': {
    ciudad: 'seattle',
    nombre: 'SeaTac Airport',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-tukwila-international-blvd', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-rainier-beach', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
    ],
  },

  'seattle-rainier-beach': {
    ciudad: 'seattle',
    nombre: 'Rainier Beach',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-seatac-airport', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-othello', tiempo: 4, linea: '1', tipo: 'link-light-rail' },
    ],
  },

  'seattle-othello': {
    ciudad: 'seattle',
    nombre: 'Othello',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-rainier-beach', tiempo: 4, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-columbia-city', tiempo: 2, linea: '1', tipo: 'link-light-rail' },
    ],
  },

  'seattle-columbia-city': {
    ciudad: 'seattle',
    nombre: 'Columbia City',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-othello', tiempo: 2, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-mount-baker', tiempo: 2, linea: '1', tipo: 'link-light-rail' },
    ],
  },

  'seattle-mount-baker': {
    ciudad: 'seattle',
    nombre: 'Mount Baker',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-columbia-city', tiempo: 2, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-beacon-hill', tiempo: 2, linea: '1', tipo: 'link-light-rail' },
    ],
  },

  'seattle-beacon-hill': {
    ciudad: 'seattle',
    nombre: 'Beacon Hill',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-mount-baker', tiempo: 2, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-sodo', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
    ],
  },

  'seattle-sodo': {
    ciudad: 'seattle',
    nombre: 'SODO',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-beacon-hill', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-stadium', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
    ],
  },

  'seattle-stadium': {
    ciudad: 'seattle',
    nombre: 'Stadium',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-sodo', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-international-district', tiempo: 2, linea: '1', tipo: 'link-light-rail' },
    ],
  },

  'seattle-international-district': {
    ciudad: 'seattle',
    nombre: 'International District/Chinatown',
    lineas: ['1', '2'],
    adyacentes: [
      { slug: 'seattle-stadium', tiempo: 2, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-pioneer-square', tiempo: 2, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-judkins-park', tiempo: 3, linea: '2', tipo: 'link-light-rail' },
      { slug: 'seattle-king-street', tiempo: 3, linea: 'sounder', tipo: 'transbordo' },
      { slug: 'seattle-first-hill-id', tiempo: 4, linea: 'first-hill-streetcar', tipo: 'transbordo' },
    ],
  },

  'seattle-pioneer-square': {
    ciudad: 'seattle',
    nombre: 'Pioneer Square',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-international-district', tiempo: 2, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-symphony', tiempo: 2, linea: '1', tipo: 'link-light-rail' },
    ],
  },

  'seattle-symphony': {
    ciudad: 'seattle',
    nombre: 'Symphony',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-pioneer-square', tiempo: 2, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-westlake', tiempo: 2, linea: '1', tipo: 'link-light-rail' },
    ],
  },

  'seattle-westlake': {
    ciudad: 'seattle',
    nombre: 'Westlake',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-symphony', tiempo: 2, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-capitol-hill', tiempo: 4, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-seattle-center', tiempo: 2, linea: 'monorail', tipo: 'transbordo' },
      { slug: 'seattle-westlake-olive', tiempo: 2, linea: 'slu-streetcar', tipo: 'transbordo' },
    ],
  },

  'seattle-capitol-hill': {
    ciudad: 'seattle',
    nombre: 'Capitol Hill',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-westlake', tiempo: 4, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-u-district', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-first-hill-capitol-hill', tiempo: 4, linea: 'first-hill-streetcar', tipo: 'transbordo' },
    ],
  },

  'seattle-u-district': {
    ciudad: 'seattle',
    nombre: 'U-District',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-capitol-hill', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-roosevelt', tiempo: 2, linea: '1', tipo: 'link-light-rail' },
    ],
  },

  'seattle-roosevelt': {
    ciudad: 'seattle',
    nombre: 'Roosevelt',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-u-district', tiempo: 2, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-northgate', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
    ],
  },

  'seattle-northgate': {
    ciudad: 'seattle',
    nombre: 'Northgate',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-roosevelt', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-shoreline-south', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
    ],
  },

  'seattle-shoreline-south': {
    ciudad: 'seattle',
    nombre: 'Shoreline South',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-northgate', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-shoreline-north', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
    ],
  },

  'seattle-shoreline-north': {
    ciudad: 'seattle',
    nombre: 'Shoreline North',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-shoreline-south', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-mountlake-terrace', tiempo: 4, linea: '1', tipo: 'link-light-rail' },
    ],
  },

  'seattle-mountlake-terrace': {
    ciudad: 'seattle',
    nombre: 'Mountlake Terrace',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-shoreline-north', tiempo: 4, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-lynnwood-city-center', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
    ],
  },

  'seattle-lynnwood-city-center': {
    ciudad: 'seattle',
    nombre: 'Lynnwood City Center',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-mountlake-terrace', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
    ],
  },

  // ===== LINE 2 (East Link) — Starting from International District =====

  'seattle-judkins-park': {
    ciudad: 'seattle',
    nombre: 'Judkins Park',
    lineas: ['2'],
    adyacentes: [
      { slug: 'seattle-international-district', tiempo: 3, linea: '2', tipo: 'link-light-rail' },
      { slug: 'seattle-mercer-island', tiempo: 6, linea: '2', tipo: 'link-light-rail' },
    ],
  },

  'seattle-mercer-island': {
    ciudad: 'seattle',
    nombre: 'Mercer Island',
    lineas: ['2'],
    adyacentes: [
      { slug: 'seattle-judkins-park', tiempo: 6, linea: '2', tipo: 'link-light-rail' },
      { slug: 'seattle-south-bellevue', tiempo: 4, linea: '2', tipo: 'link-light-rail' },
    ],
  },

  'seattle-south-bellevue': {
    ciudad: 'seattle',
    nombre: 'South Bellevue',
    lineas: ['2'],
    adyacentes: [
      { slug: 'seattle-mercer-island', tiempo: 4, linea: '2', tipo: 'link-light-rail' },
      { slug: 'seattle-east-main', tiempo: 3, linea: '2', tipo: 'link-light-rail' },
    ],
  },

  'seattle-east-main': {
    ciudad: 'seattle',
    nombre: 'East Main',
    lineas: ['2'],
    adyacentes: [
      { slug: 'seattle-south-bellevue', tiempo: 3, linea: '2', tipo: 'link-light-rail' },
      { slug: 'seattle-bellevue-downtown', tiempo: 2, linea: '2', tipo: 'link-light-rail' },
    ],
  },

  'seattle-bellevue-downtown': {
    ciudad: 'seattle',
    nombre: 'Bellevue Downtown',
    lineas: ['2'],
    adyacentes: [
      { slug: 'seattle-east-main', tiempo: 2, linea: '2', tipo: 'link-light-rail' },
      { slug: 'seattle-wilburton', tiempo: 3, linea: '2', tipo: 'link-light-rail' },
    ],
  },

  'seattle-wilburton': {
    ciudad: 'seattle',
    nombre: 'Wilburton',
    lineas: ['2'],
    adyacentes: [
      { slug: 'seattle-bellevue-downtown', tiempo: 3, linea: '2', tipo: 'link-light-rail' },
      { slug: 'seattle-spring-district', tiempo: 2, linea: '2', tipo: 'link-light-rail' },
    ],
  },

  'seattle-spring-district': {
    ciudad: 'seattle',
    nombre: 'Spring District',
    lineas: ['2'],
    adyacentes: [
      { slug: 'seattle-wilburton', tiempo: 2, linea: '2', tipo: 'link-light-rail' },
      { slug: 'seattle-bel-red', tiempo: 3, linea: '2', tipo: 'link-light-rail' },
    ],
  },

  'seattle-bel-red': {
    ciudad: 'seattle',
    nombre: 'Bel Red',
    lineas: ['2'],
    adyacentes: [
      { slug: 'seattle-spring-district', tiempo: 3, linea: '2', tipo: 'link-light-rail' },
      { slug: 'seattle-overlake-village', tiempo: 3, linea: '2', tipo: 'link-light-rail' },
    ],
  },

  'seattle-overlake-village': {
    ciudad: 'seattle',
    nombre: 'Overlake Village',
    lineas: ['2'],
    adyacentes: [
      { slug: 'seattle-bel-red', tiempo: 3, linea: '2', tipo: 'link-light-rail' },
      { slug: 'seattle-redmond-technology', tiempo: 3, linea: '2', tipo: 'link-light-rail' },
    ],
  },

  'seattle-redmond-technology': {
    ciudad: 'seattle',
    nombre: 'Redmond Technology Station',
    lineas: ['2'],
    adyacentes: [
      { slug: 'seattle-overlake-village', tiempo: 3, linea: '2', tipo: 'link-light-rail' },
      { slug: 'seattle-downtown-redmond', tiempo: 3, linea: '2', tipo: 'link-light-rail' },
    ],
  },

  'seattle-downtown-redmond': {
    ciudad: 'seattle',
    nombre: 'Downtown Redmond',
    lineas: ['2'],
    adyacentes: [
      { slug: 'seattle-redmond-technology', tiempo: 3, linea: '2', tipo: 'link-light-rail' },
    ],
  },

  // ===== T LINE (Tacoma Link) — Tacoma system =====

  'seattle-tacoma-theater-district': {
    ciudad: 'seattle',
    nombre: 'Theater District',
    lineas: ['T'],
    adyacentes: [
      { slug: 'seattle-tacoma-commerce-street', tiempo: 2, linea: 'T', tipo: 'tacoma-link' },
    ],
  },

  'seattle-tacoma-commerce-street': {
    ciudad: 'seattle',
    nombre: 'Commerce Street',
    lineas: ['T'],
    adyacentes: [
      { slug: 'seattle-tacoma-theater-district', tiempo: 2, linea: 'T', tipo: 'tacoma-link' },
      { slug: 'seattle-tacoma-south-25th', tiempo: 3, linea: 'T', tipo: 'tacoma-link' },
    ],
  },

  'seattle-tacoma-south-25th': {
    ciudad: 'seattle',
    nombre: 'South 25th Street',
    lineas: ['T'],
    adyacentes: [
      { slug: 'seattle-tacoma-commerce-street', tiempo: 3, linea: 'T', tipo: 'tacoma-link' },
      { slug: 'seattle-tacoma-dome', tiempo: 3, linea: 'T', tipo: 'tacoma-link' },
    ],
  },

  'seattle-tacoma-dome': {
    ciudad: 'seattle',
    nombre: 'Tacoma Dome',
    lineas: ['T', 'SS'],
    adyacentes: [
      { slug: 'seattle-tacoma-south-25th', tiempo: 3, linea: 'T', tipo: 'tacoma-link' },
      { slug: 'seattle-tacoma-east-25th', tiempo: 2, linea: 'T', tipo: 'tacoma-link' },
      { slug: 'seattle-sounder-puyallup', tiempo: 8, linea: 'SS', tipo: 'sounder' },
      { slug: 'seattle-sounder-south-tacoma', tiempo: 5, linea: 'SS', tipo: 'sounder' },
    ],
  },

  'seattle-tacoma-east-25th': {
    ciudad: 'seattle',
    nombre: 'East 25th Street',
    lineas: ['T'],
    adyacentes: [
      { slug: 'seattle-tacoma-dome', tiempo: 2, linea: 'T', tipo: 'tacoma-link' },
      { slug: 'seattle-tacoma-stadium-district', tiempo: 2, linea: 'T', tipo: 'tacoma-link' },
    ],
  },

  'seattle-tacoma-stadium-district': {
    ciudad: 'seattle',
    nombre: 'Stadium District',
    lineas: ['T'],
    adyacentes: [
      { slug: 'seattle-tacoma-east-25th', tiempo: 2, linea: 'T', tipo: 'tacoma-link' },
    ],
  },

  // ===== SOUNDER RAIL — North Line =====

  'seattle-king-street': {
    ciudad: 'seattle',
    nombre: 'King Street Station',
    lineas: ['sounder-north', 'sounder-south'],
    adyacentes: [
      { slug: 'seattle-international-district', tiempo: 3, linea: '1', tipo: 'transbordo' },
      { slug: 'seattle-sounder-edmonds', tiempo: 25, linea: 'sounder-north', tipo: 'sounder' },
      { slug: 'seattle-sounder-tukwila', tiempo: 12, linea: 'sounder-south', tipo: 'sounder' },
    ],
  },

  'seattle-sounder-edmonds': {
    ciudad: 'seattle',
    nombre: 'Edmonds',
    lineas: ['sounder-north'],
    adyacentes: [
      { slug: 'seattle-king-street', tiempo: 25, linea: 'sounder-north', tipo: 'sounder' },
      { slug: 'seattle-sounder-mukilteo', tiempo: 8, linea: 'sounder-north', tipo: 'sounder' },
    ],
  },

  'seattle-sounder-mukilteo': {
    ciudad: 'seattle',
    nombre: 'Mukilteo',
    lineas: ['sounder-north'],
    adyacentes: [
      { slug: 'seattle-sounder-edmonds', tiempo: 8, linea: 'sounder-north', tipo: 'sounder' },
      { slug: 'seattle-sounder-everett', tiempo: 10, linea: 'sounder-north', tipo: 'sounder' },
    ],
  },

  'seattle-sounder-everett': {
    ciudad: 'seattle',
    nombre: 'Everett',
    lineas: ['sounder-north'],
    adyacentes: [
      { slug: 'seattle-sounder-mukilteo', tiempo: 10, linea: 'sounder-north', tipo: 'sounder' },
    ],
  },

  // ===== SOUNDER RAIL — South Line =====

  'seattle-sounder-tukwila': {
    ciudad: 'seattle',
    nombre: 'Tukwila',
    lineas: ['sounder-south'],
    adyacentes: [
      { slug: 'seattle-king-street', tiempo: 12, linea: 'sounder-south', tipo: 'sounder' },
      { slug: 'seattle-sounder-kent', tiempo: 8, linea: 'sounder-south', tipo: 'sounder' },
    ],
  },

  'seattle-sounder-kent': {
    ciudad: 'seattle',
    nombre: 'Kent',
    lineas: ['sounder-south'],
    adyacentes: [
      { slug: 'seattle-sounder-tukwila', tiempo: 8, linea: 'sounder-south', tipo: 'sounder' },
      { slug: 'seattle-sounder-auburn', tiempo: 8, linea: 'sounder-south', tipo: 'sounder' },
    ],
  },

  'seattle-sounder-auburn': {
    ciudad: 'seattle',
    nombre: 'Auburn',
    lineas: ['sounder-south'],
    adyacentes: [
      { slug: 'seattle-sounder-kent', tiempo: 8, linea: 'sounder-south', tipo: 'sounder' },
      { slug: 'seattle-sounder-sumner', tiempo: 6, linea: 'sounder-south', tipo: 'sounder' },
    ],
  },

  'seattle-sounder-sumner': {
    ciudad: 'seattle',
    nombre: 'Sumner',
    lineas: ['sounder-south'],
    adyacentes: [
      { slug: 'seattle-sounder-auburn', tiempo: 6, linea: 'sounder-south', tipo: 'sounder' },
      { slug: 'seattle-sounder-puyallup', tiempo: 5, linea: 'sounder-south', tipo: 'sounder' },
    ],
  },

  'seattle-sounder-puyallup': {
    ciudad: 'seattle',
    nombre: 'Puyallup',
    lineas: ['sounder-south'],
    adyacentes: [
      { slug: 'seattle-sounder-sumner', tiempo: 5, linea: 'sounder-south', tipo: 'sounder' },
      { slug: 'seattle-tacoma-dome', tiempo: 8, linea: 'sounder-south', tipo: 'sounder' },
    ],
  },

  'seattle-sounder-south-tacoma': {
    ciudad: 'seattle',
    nombre: 'South Tacoma',
    lineas: ['sounder-south'],
    adyacentes: [
      { slug: 'seattle-tacoma-dome', tiempo: 8, linea: 'sounder-south', tipo: 'sounder' },
      { slug: 'seattle-sounder-lakewood', tiempo: 6, linea: 'sounder-south', tipo: 'sounder' },
    ],
  },

  'seattle-sounder-lakewood': {
    ciudad: 'seattle',
    nombre: 'Lakewood',
    lineas: ['sounder-south'],
    adyacentes: [
      { slug: 'seattle-sounder-south-tacoma', tiempo: 6, linea: 'sounder-south', tipo: 'sounder' },
    ],
  },

  // ===== SEATTLE MONORAIL =====

  'seattle-seattle-center': {
    ciudad: 'seattle',
    nombre: 'Seattle Center',
    lineas: ['monorail'],
    adyacentes: [
      { slug: 'seattle-westlake', tiempo: 2, linea: 'monorail', tipo: 'transbordo' },
    ],
  },

  // ===== SOUTH LAKE UNION STREETCAR =====

  'seattle-westlake-olive': {
    ciudad: 'seattle',
    nombre: 'Westlake & Olive (SLU)',
    lineas: ['slu-streetcar'],
    adyacentes: [
      { slug: 'seattle-westlake', tiempo: 2, linea: 'slu-streetcar', tipo: 'transbordo' },
      { slug: 'seattle-terry-thomas', tiempo: 3, linea: 'slu-streetcar', tipo: 'slu-streetcar' },
    ],
  },

  'seattle-terry-thomas': {
    ciudad: 'seattle',
    nombre: 'Terry & Thomas',
    lineas: ['slu-streetcar'],
    adyacentes: [
      { slug: 'seattle-westlake-olive', tiempo: 3, linea: 'slu-streetcar', tipo: 'slu-streetcar' },
      { slug: 'seattle-fairview-campus', tiempo: 3, linea: 'slu-streetcar', tipo: 'slu-streetcar' },
    ],
  },

  'seattle-fairview-campus': {
    ciudad: 'seattle',
    nombre: 'Fairview & Campus',
    lineas: ['slu-streetcar'],
    adyacentes: [
      { slug: 'seattle-terry-thomas', tiempo: 3, linea: 'slu-streetcar', tipo: 'slu-streetcar' },
      { slug: 'seattle-fred-hutchinson', tiempo: 3, linea: 'slu-streetcar', tipo: 'slu-streetcar' },
    ],
  },

  'seattle-fred-hutchinson': {
    ciudad: 'seattle',
    nombre: 'Fred Hutchinson',
    lineas: ['slu-streetcar'],
    adyacentes: [
      { slug: 'seattle-fairview-campus', tiempo: 3, linea: 'slu-streetcar', tipo: 'slu-streetcar' },
    ],
  },

  // ===== FIRST HILL STREETCAR =====

  'seattle-first-hill-id': {
    ciudad: 'seattle',
    nombre: 'International District/Chinatown (First Hill)',
    lineas: ['first-hill-streetcar'],
    adyacentes: [
      { slug: 'seattle-international-district', tiempo: 4, linea: 'first-hill-streetcar', tipo: 'transbordo' },
      { slug: 'seattle-first-hill-yesler', tiempo: 3, linea: 'first-hill-streetcar', tipo: 'first-hill-streetcar' },
    ],
  },

  'seattle-first-hill-yesler': {
    ciudad: 'seattle',
    nombre: 'Yesler Way',
    lineas: ['first-hill-streetcar'],
    adyacentes: [
      { slug: 'seattle-first-hill-id', tiempo: 3, linea: 'first-hill-streetcar', tipo: 'first-hill-streetcar' },
      { slug: 'seattle-first-hill-broadway', tiempo: 3, linea: 'first-hill-streetcar', tipo: 'first-hill-streetcar' },
    ],
  },

  'seattle-first-hill-broadway': {
    ciudad: 'seattle',
    nombre: 'Broadway & Main',
    lineas: ['first-hill-streetcar'],
    adyacentes: [
      { slug: 'seattle-first-hill-yesler', tiempo: 3, linea: 'first-hill-streetcar', tipo: 'first-hill-streetcar' },
      { slug: 'seattle-first-hill-capitol-hill', tiempo: 3, linea: 'first-hill-streetcar', tipo: 'first-hill-streetcar' },
    ],
  },

  'seattle-first-hill-capitol-hill': {
    ciudad: 'seattle',
    nombre: 'Capitol Hill (First Hill)',
    lineas: ['first-hill-streetcar'],
    adyacentes: [
      { slug: 'seattle-first-hill-broadway', tiempo: 3, linea: 'first-hill-streetcar', tipo: 'first-hill-streetcar' },
      { slug: 'seattle-capitol-hill', tiempo: 4, linea: 'first-hill-streetcar', tipo: 'transbordo' },
    ],
  },
};
