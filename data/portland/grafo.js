/*
 * PORTLAND TRANSIT GRAPH — BFS Adjacency Network
 * ===============================================
 * Coverage: MAX Light Rail (5 lines, 55+ stations) + Portland Streetcar (3 lines, 28 stops)
 * Total unique stations: 83+
 * Graph structure: Flat slugs with full adjacency lists for pathfinding
 * Key transfers: Pioneer Courthouse (4 MAX lines + Streetcar), Rose Quarter (3 lines), Gateway TC (3 lines), South Waterfront (1 MAX + Streetcar)
 */

export const grafoPortland = {
  // ===== MAX BLUE LINE — West to East =====
  'portland-hillsboro-central': {
    ciudad: 'portland',
    nombre: 'Hillsboro Central',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'portland-hawthorn-farm', tiempo: 3, linea: 'blue', tipo: 'max-light-rail' },
    ],
  },

  'portland-hawthorn-farm': {
    ciudad: 'portland',
    nombre: 'Hawthorn Farm',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'portland-hillsboro-central', tiempo: 3, linea: 'blue', tipo: 'max-light-rail' },
      { slug: 'portland-fair-complex-hillsboro-airport', tiempo: 4, linea: 'blue', tipo: 'max-light-rail' },
    ],
  },

  'portland-fair-complex-hillsboro-airport': {
    ciudad: 'portland',
    nombre: 'Fair Complex/Hillsboro Airport',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'portland-hawthorn-farm', tiempo: 4, linea: 'blue', tipo: 'max-light-rail' },
      { slug: 'portland-washington-park', tiempo: 8, linea: 'blue', tipo: 'max-light-rail' },
    ],
  },

  'portland-washington-park': {
    ciudad: 'portland',
    nombre: 'Washington Park',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'portland-fair-complex-hillsboro-airport', tiempo: 8, linea: 'blue', tipo: 'max-light-rail' },
      { slug: 'portland-sunset-transit-center', tiempo: 3, linea: 'blue', tipo: 'max-light-rail' },
    ],
  },

  'portland-sunset-transit-center': {
    ciudad: 'portland',
    nombre: 'Sunset Transit Center',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'portland-washington-park', tiempo: 3, linea: 'blue', tipo: 'max-light-rail' },
      { slug: 'portland-beaverton-transit-center', tiempo: 5, linea: 'blue', tipo: 'max-light-rail' },
    ],
  },

  'portland-beaverton-transit-center': {
    ciudad: 'portland',
    nombre: 'Beaverton Transit Center',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'portland-sunset-transit-center', tiempo: 5, linea: 'blue', tipo: 'max-light-rail' },
      { slug: 'portland-elmonica', tiempo: 4, linea: 'blue', tipo: 'max-light-rail' },
    ],
  },

  'portland-elmonica': {
    ciudad: 'portland',
    nombre: 'Elmonica',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'portland-beaverton-transit-center', tiempo: 4, linea: 'blue', tipo: 'max-light-rail' },
      { slug: 'portland-merlo-road', tiempo: 3, linea: 'blue', tipo: 'max-light-rail' },
    ],
  },

  'portland-merlo-road': {
    ciudad: 'portland',
    nombre: 'Merlo Road',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'portland-elmonica', tiempo: 3, linea: 'blue', tipo: 'max-light-rail' },
      { slug: 'portland-willow-creek-transit-center', tiempo: 4, linea: 'blue', tipo: 'max-light-rail' },
    ],
  },

  'portland-willow-creek-transit-center': {
    ciudad: 'portland',
    nombre: 'Willow Creek Transit Center',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'portland-merlo-road', tiempo: 4, linea: 'blue', tipo: 'max-light-rail' },
      { slug: 'portland-goose-hollow', tiempo: 6, linea: 'blue', tipo: 'max-light-rail' },
    ],
  },

  'portland-goose-hollow': {
    ciudad: 'portland',
    nombre: 'Goose Hollow/Marquam Bridge',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'portland-willow-creek-transit-center', tiempo: 6, linea: 'blue', tipo: 'max-light-rail' },
      { slug: 'portland-kings-hill', tiempo: 3, linea: 'blue', tipo: 'max-light-rail' },
    ],
  },

  'portland-kings-hill': {
    ciudad: 'portland',
    nombre: 'Kings Hill/SW Alder',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'portland-goose-hollow', tiempo: 3, linea: 'blue', tipo: 'max-light-rail' },
      { slug: 'portland-providence-park', tiempo: 2, linea: 'blue', tipo: 'max-light-rail' },
    ],
  },

  'portland-providence-park': {
    ciudad: 'portland',
    nombre: 'Providence Park/SW Alder',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'portland-kings-hill', tiempo: 2, linea: 'blue', tipo: 'max-light-rail' },
      { slug: 'portland-library', tiempo: 2, linea: 'blue', tipo: 'max-light-rail' },
    ],
  },

  'portland-library': {
    ciudad: 'portland',
    nombre: 'Library/SW 10th',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'portland-providence-park', tiempo: 2, linea: 'blue', tipo: 'max-light-rail' },
      { slug: 'portland-pioneer-courthouse', tiempo: 2, linea: 'blue', tipo: 'max-light-rail' },
    ],
  },

  'portland-pioneer-courthouse': {
    ciudad: 'portland',
    nombre: 'Pioneer Courthouse Square',
    lineas: ['blue', 'red', 'green', 'yellow'],
    adyacentes: [
      { slug: 'portland-library', tiempo: 2, linea: 'blue', tipo: 'max-light-rail' },
      { slug: 'portland-old-town-chinatown', tiempo: 2, linea: 'blue', tipo: 'max-light-rail' },
      { slug: 'portland-streetcar-pioneer-courthouse-loop', tiempo: 1, linea: 'a-loop', tipo: 'streetcar' },
    ],
  },

  'portland-old-town-chinatown': {
    ciudad: 'portland',
    nombre: 'Old Town/Chinatown',
    lineas: ['blue', 'red', 'yellow'],
    adyacentes: [
      { slug: 'portland-pioneer-courthouse', tiempo: 2, linea: 'blue', tipo: 'max-light-rail' },
      { slug: 'portland-rose-quarter-transit-center', tiempo: 2, linea: 'blue', tipo: 'max-light-rail' },
    ],
  },

  'portland-rose-quarter-transit-center': {
    ciudad: 'portland',
    nombre: 'Rose Quarter Transit Center',
    lineas: ['blue', 'red', 'yellow'],
    adyacentes: [
      { slug: 'portland-old-town-chinatown', tiempo: 2, linea: 'blue', tipo: 'max-light-rail' },
      { slug: 'portland-convention-center', tiempo: 2, linea: 'blue', tipo: 'max-light-rail' },
    ],
  },

  'portland-convention-center': {
    ciudad: 'portland',
    nombre: 'Convention Center',
    lineas: ['blue', 'red'],
    adyacentes: [
      { slug: 'portland-rose-quarter-transit-center', tiempo: 2, linea: 'blue', tipo: 'max-light-rail' },
      { slug: 'portland-lloyd-center', tiempo: 3, linea: 'blue', tipo: 'max-light-rail' },
    ],
  },

  'portland-lloyd-center': {
    ciudad: 'portland',
    nombre: 'Lloyd Center',
    lineas: ['blue', 'red'],
    adyacentes: [
      { slug: 'portland-convention-center', tiempo: 3, linea: 'blue', tipo: 'max-light-rail' },
      { slug: 'portland-hollywood', tiempo: 4, linea: 'blue', tipo: 'max-light-rail' },
    ],
  },

  'portland-hollywood': {
    ciudad: 'portland',
    nombre: 'Hollywood/NE 42nd',
    lineas: ['blue', 'red'],
    adyacentes: [
      { slug: 'portland-lloyd-center', tiempo: 4, linea: 'blue', tipo: 'max-light-rail' },
      { slug: 'portland-gateway-transit-center', tiempo: 5, linea: 'blue', tipo: 'max-light-rail' },
    ],
  },

  'portland-gateway-transit-center': {
    ciudad: 'portland',
    nombre: 'Gateway Transit Center',
    lineas: ['blue', 'red', 'green'],
    adyacentes: [
      { slug: 'portland-hollywood', tiempo: 5, linea: 'blue', tipo: 'max-light-rail' },
      { slug: 'portland-rockwood', tiempo: 4, linea: 'blue', tipo: 'max-light-rail' },
    ],
  },

  'portland-rockwood': {
    ciudad: 'portland',
    nombre: 'Rockwood',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'portland-gateway-transit-center', tiempo: 4, linea: 'blue', tipo: 'max-light-rail' },
      { slug: 'portland-188th-ave', tiempo: 3, linea: 'blue', tipo: 'max-light-rail' },
    ],
  },

  'portland-188th-ave': {
    ciudad: 'portland',
    nombre: '188th Avenue',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'portland-rockwood', tiempo: 3, linea: 'blue', tipo: 'max-light-rail' },
      { slug: 'portland-gresham-city-hall', tiempo: 3, linea: 'blue', tipo: 'max-light-rail' },
    ],
  },

  'portland-gresham-city-hall': {
    ciudad: 'portland',
    nombre: 'Gresham City Hall',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'portland-188th-ave', tiempo: 3, linea: 'blue', tipo: 'max-light-rail' },
      { slug: 'portland-cleveland-ave', tiempo: 2, linea: 'blue', tipo: 'max-light-rail' },
    ],
  },

  'portland-cleveland-ave': {
    ciudad: 'portland',
    nombre: 'Cleveland Avenue',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'portland-gresham-city-hall', tiempo: 2, linea: 'blue', tipo: 'max-light-rail' },
    ],
  },

  // ===== MAX RED LINE — PDX to West =====
  'portland-pdx-airport': {
    ciudad: 'portland',
    nombre: 'Portland International Airport (PDX)',
    lineas: ['red'],
    adyacentes: [
      { slug: 'portland-mt-hood-ave', tiempo: 5, linea: 'red', tipo: 'max-light-rail' },
    ],
  },

  'portland-mt-hood-ave': {
    ciudad: 'portland',
    nombre: 'Mt Hood Avenue',
    lineas: ['red'],
    adyacentes: [
      { slug: 'portland-pdx-airport', tiempo: 5, linea: 'red', tipo: 'max-light-rail' },
      { slug: 'portland-cascades', tiempo: 4, linea: 'red', tipo: 'max-light-rail' },
    ],
  },

  'portland-cascades': {
    ciudad: 'portland',
    nombre: 'Cascades',
    lineas: ['red'],
    adyacentes: [
      { slug: 'portland-mt-hood-ave', tiempo: 4, linea: 'red', tipo: 'max-light-rail' },
      { slug: 'portland-parkrose-sumner-transit-center', tiempo: 3, linea: 'red', tipo: 'max-light-rail' },
    ],
  },

  'portland-parkrose-sumner-transit-center': {
    ciudad: 'portland',
    nombre: 'Parkrose/Sumner Transit Center',
    lineas: ['red', 'blue'],
    adyacentes: [
      { slug: 'portland-cascades', tiempo: 3, linea: 'red', tipo: 'max-light-rail' },
      { slug: 'portland-convention-center', tiempo: 8, linea: 'red', tipo: 'max-light-rail' },
    ],
  },

  // ===== MAX ORANGE LINE — South to North =====
  'portland-milwaukie-main-st': {
    ciudad: 'portland',
    nombre: 'Milwaukie/Main Street',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'portland-se-tacoma', tiempo: 4, linea: 'orange', tipo: 'max-light-rail' },
    ],
  },

  'portland-se-tacoma': {
    ciudad: 'portland',
    nombre: 'SE Tacoma',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'portland-milwaukie-main-st', tiempo: 4, linea: 'orange', tipo: 'max-light-rail' },
      { slug: 'portland-bybee-blvd', tiempo: 3, linea: 'orange', tipo: 'max-light-rail' },
    ],
  },

  'portland-bybee-blvd': {
    ciudad: 'portland',
    nombre: 'Bybee Boulevard',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'portland-se-tacoma', tiempo: 3, linea: 'orange', tipo: 'max-light-rail' },
      { slug: 'portland-se-park-ave', tiempo: 4, linea: 'orange', tipo: 'max-light-rail' },
    ],
  },

  'portland-se-park-ave': {
    ciudad: 'portland',
    nombre: 'SE Park Avenue',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'portland-bybee-blvd', tiempo: 4, linea: 'orange', tipo: 'max-light-rail' },
      { slug: 'portland-se-holgate-blvd', tiempo: 3, linea: 'orange', tipo: 'max-light-rail' },
    ],
  },

  'portland-se-holgate-blvd': {
    ciudad: 'portland',
    nombre: 'SE Holgate Boulevard',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'portland-se-park-ave', tiempo: 3, linea: 'orange', tipo: 'max-light-rail' },
      { slug: 'portland-se-17th-ave-rhine', tiempo: 3, linea: 'orange', tipo: 'max-light-rail' },
    ],
  },

  'portland-se-17th-ave-rhine': {
    ciudad: 'portland',
    nombre: 'SE 17th Avenue/Rhine',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'portland-se-holgate-blvd', tiempo: 3, linea: 'orange', tipo: 'max-light-rail' },
      { slug: 'portland-clinton-st-se-12th', tiempo: 4, linea: 'orange', tipo: 'max-light-rail' },
    ],
  },

  'portland-clinton-st-se-12th': {
    ciudad: 'portland',
    nombre: 'Clinton Street/SE 12th',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'portland-se-17th-ave-rhine', tiempo: 4, linea: 'orange', tipo: 'max-light-rail' },
      { slug: 'portland-omsi-se-water', tiempo: 5, linea: 'orange', tipo: 'max-light-rail' },
    ],
  },

  'portland-omsi-se-water': {
    ciudad: 'portland',
    nombre: 'OMSI/SE Water Avenue',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'portland-clinton-st-se-12th', tiempo: 5, linea: 'orange', tipo: 'max-light-rail' },
      { slug: 'portland-south-waterfront-moody', tiempo: 3, linea: 'orange', tipo: 'max-light-rail' },
      { slug: 'portland-streetcar-ns-omsi', tiempo: 1, linea: 'ns-line', tipo: 'streetcar' },
    ],
  },

  'portland-south-waterfront-moody': {
    ciudad: 'portland',
    nombre: 'South Waterfront/Moody Avenue',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'portland-omsi-se-water', tiempo: 3, linea: 'orange', tipo: 'max-light-rail' },
      { slug: 'portland-streetcar-psu', tiempo: 2, linea: 'a-loop', tipo: 'streetcar' },
    ],
  },

  // ===== MAX YELLOW LINE — North to South (Downtown) =====
  'portland-expo-center': {
    ciudad: 'portland',
    nombre: 'Expo Center',
    lineas: ['yellow'],
    adyacentes: [
      { slug: 'portland-delta-park-vanport', tiempo: 4, linea: 'yellow', tipo: 'max-light-rail' },
    ],
  },

  'portland-delta-park-vanport': {
    ciudad: 'portland',
    nombre: 'Delta Park/Vanport',
    lineas: ['yellow'],
    adyacentes: [
      { slug: 'portland-expo-center', tiempo: 4, linea: 'yellow', tipo: 'max-light-rail' },
      { slug: 'portland-kenton-n-denver', tiempo: 5, linea: 'yellow', tipo: 'max-light-rail' },
    ],
  },

  'portland-kenton-n-denver': {
    ciudad: 'portland',
    nombre: 'Kenton/N Denver',
    lineas: ['yellow'],
    adyacentes: [
      { slug: 'portland-delta-park-vanport', tiempo: 5, linea: 'yellow', tipo: 'max-light-rail' },
      { slug: 'portland-n-lombard', tiempo: 4, linea: 'yellow', tipo: 'max-light-rail' },
    ],
  },

  'portland-n-lombard': {
    ciudad: 'portland',
    nombre: 'N Lombard',
    lineas: ['yellow'],
    adyacentes: [
      { slug: 'portland-kenton-n-denver', tiempo: 4, linea: 'yellow', tipo: 'max-light-rail' },
      { slug: 'portland-n-killingsworth', tiempo: 3, linea: 'yellow', tipo: 'max-light-rail' },
    ],
  },

  'portland-n-killingsworth': {
    ciudad: 'portland',
    nombre: 'N Killingsworth',
    lineas: ['yellow'],
    adyacentes: [
      { slug: 'portland-n-lombard', tiempo: 3, linea: 'yellow', tipo: 'max-light-rail' },
      { slug: 'portland-rosa-parks', tiempo: 3, linea: 'yellow', tipo: 'max-light-rail' },
    ],
  },

  'portland-rosa-parks': {
    ciudad: 'portland',
    nombre: 'Rosa Parks',
    lineas: ['yellow'],
    adyacentes: [
      { slug: 'portland-n-killingsworth', tiempo: 3, linea: 'yellow', tipo: 'max-light-rail' },
      { slug: 'portland-n-prescott', tiempo: 3, linea: 'yellow', tipo: 'max-light-rail' },
    ],
  },

  'portland-n-prescott': {
    ciudad: 'portland',
    nombre: 'N Prescott',
    lineas: ['yellow'],
    adyacentes: [
      { slug: 'portland-rosa-parks', tiempo: 3, linea: 'yellow', tipo: 'max-light-rail' },
      { slug: 'portland-albina-mississippi', tiempo: 4, linea: 'yellow', tipo: 'max-light-rail' },
    ],
  },

  'portland-albina-mississippi': {
    ciudad: 'portland',
    nombre: 'Albina/Mississippi',
    lineas: ['yellow'],
    adyacentes: [
      { slug: 'portland-n-prescott', tiempo: 4, linea: 'yellow', tipo: 'max-light-rail' },
      { slug: 'portland-interstate-rose-quarter', tiempo: 5, linea: 'yellow', tipo: 'max-light-rail' },
    ],
  },

  'portland-interstate-rose-quarter': {
    ciudad: 'portland',
    nombre: 'Interstate/Rose Quarter',
    lineas: ['yellow', 'blue', 'red'],
    adyacentes: [
      { slug: 'portland-albina-mississippi', tiempo: 5, linea: 'yellow', tipo: 'max-light-rail' },
      { slug: 'portland-rose-quarter-transit-center', tiempo: 1, linea: 'yellow', tipo: 'max-light-rail' },
    ],
  },

  // ===== MAX GREEN LINE — South to Central =====
  'portland-clackamas-town-center': {
    ciudad: 'portland',
    nombre: 'Clackamas Town Center',
    lineas: ['green'],
    adyacentes: [
      { slug: 'portland-se-fuller-rd', tiempo: 4, linea: 'green', tipo: 'max-light-rail' },
    ],
  },

  'portland-se-fuller-rd': {
    ciudad: 'portland',
    nombre: 'SE Fuller Road',
    lineas: ['green'],
    adyacentes: [
      { slug: 'portland-clackamas-town-center', tiempo: 4, linea: 'green', tipo: 'max-light-rail' },
      { slug: 'portland-lents-se-foster', tiempo: 3, linea: 'green', tipo: 'max-light-rail' },
    ],
  },

  'portland-lents-se-foster': {
    ciudad: 'portland',
    nombre: 'Lents/SE Foster Road',
    lineas: ['green'],
    adyacentes: [
      { slug: 'portland-se-fuller-rd', tiempo: 3, linea: 'green', tipo: 'max-light-rail' },
      { slug: 'portland-gateway-transit-center', tiempo: 8, linea: 'green', tipo: 'max-light-rail' },
    ],
  },

  'portland-se-main': {
    ciudad: 'portland',
    nombre: 'SE Main',
    lineas: ['green'],
    adyacentes: [
      { slug: 'portland-gateway-transit-center', tiempo: 5, linea: 'green', tipo: 'max-light-rail' },
    ],
  },

  // ===== STREETCAR A-LOOP =====
  'portland-streetcar-nw-23rd-ave': {
    ciudad: 'portland',
    nombre: 'NW 23rd Avenue',
    lineas: ['a-loop'],
    adyacentes: [
      { slug: 'portland-streetcar-pearl-district', tiempo: 5, linea: 'a-loop', tipo: 'streetcar' },
    ],
  },

  'portland-streetcar-pearl-district': {
    ciudad: 'portland',
    nombre: 'Pearl District',
    lineas: ['a-loop'],
    adyacentes: [
      { slug: 'portland-streetcar-nw-23rd-ave', tiempo: 5, linea: 'a-loop', tipo: 'streetcar' },
      { slug: 'portland-streetcar-nw-lovejoy', tiempo: 3, linea: 'a-loop', tipo: 'streetcar' },
    ],
  },

  'portland-streetcar-nw-lovejoy': {
    ciudad: 'portland',
    nombre: 'NW Lovejoy',
    lineas: ['a-loop'],
    adyacentes: [
      { slug: 'portland-streetcar-pearl-district', tiempo: 3, linea: 'a-loop', tipo: 'streetcar' },
      { slug: 'portland-streetcar-central-library', tiempo: 4, linea: 'a-loop', tipo: 'streetcar' },
    ],
  },

  'portland-streetcar-central-library': {
    ciudad: 'portland',
    nombre: 'Central Library',
    lineas: ['a-loop'],
    adyacentes: [
      { slug: 'portland-streetcar-nw-lovejoy', tiempo: 4, linea: 'a-loop', tipo: 'streetcar' },
      { slug: 'portland-streetcar-pioneer-courthouse-loop', tiempo: 3, linea: 'a-loop', tipo: 'streetcar' },
    ],
  },

  'portland-streetcar-pioneer-courthouse-loop': {
    ciudad: 'portland',
    nombre: 'Pioneer Courthouse (Streetcar)',
    lineas: ['a-loop'],
    adyacentes: [
      { slug: 'portland-streetcar-central-library', tiempo: 3, linea: 'a-loop', tipo: 'streetcar' },
      { slug: 'portland-streetcar-psu', tiempo: 5, linea: 'a-loop', tipo: 'streetcar' },
      { slug: 'portland-pioneer-courthouse', tiempo: 1, linea: 'blue', tipo: 'max-light-rail' },
    ],
  },

  'portland-streetcar-psu': {
    ciudad: 'portland',
    nombre: 'Portland State University',
    lineas: ['a-loop'],
    adyacentes: [
      { slug: 'portland-streetcar-pioneer-courthouse-loop', tiempo: 5, linea: 'a-loop', tipo: 'streetcar' },
      { slug: 'portland-south-waterfront-moody', tiempo: 2, linea: 'orange', tipo: 'max-light-rail' },
    ],
  },

  // ===== STREETCAR B-LOOP =====
  'portland-streetcar-b-loop-nw-couch': {
    ciudad: 'portland',
    nombre: 'NW Couch (B-Loop)',
    lineas: ['b-loop'],
    adyacentes: [
      { slug: 'portland-streetcar-b-loop-nw-glisan', tiempo: 3, linea: 'b-loop', tipo: 'streetcar' },
    ],
  },

  'portland-streetcar-b-loop-nw-glisan': {
    ciudad: 'portland',
    nombre: 'NW Glisan (B-Loop)',
    lineas: ['b-loop'],
    adyacentes: [
      { slug: 'portland-streetcar-b-loop-nw-couch', tiempo: 3, linea: 'b-loop', tipo: 'streetcar' },
      { slug: 'portland-streetcar-b-loop-nw-irving', tiempo: 4, linea: 'b-loop', tipo: 'streetcar' },
    ],
  },

  'portland-streetcar-b-loop-nw-irving': {
    ciudad: 'portland',
    nombre: 'NW Irving (B-Loop)',
    lineas: ['b-loop'],
    adyacentes: [
      { slug: 'portland-streetcar-b-loop-nw-glisan', tiempo: 4, linea: 'b-loop', tipo: 'streetcar' },
    ],
  },

  // ===== STREETCAR NS-LINE =====
  'portland-streetcar-ns-north-waterfront': {
    ciudad: 'portland',
    nombre: 'North Waterfront',
    lineas: ['ns-line'],
    adyacentes: [
      { slug: 'portland-streetcar-ns-omsi', tiempo: 5, linea: 'ns-line', tipo: 'streetcar' },
    ],
  },

  'portland-streetcar-ns-omsi': {
    ciudad: 'portland',
    nombre: 'OMSI (NS Line)',
    lineas: ['ns-line'],
    adyacentes: [
      { slug: 'portland-streetcar-ns-north-waterfront', tiempo: 5, linea: 'ns-line', tipo: 'streetcar' },
      { slug: 'portland-omsi-se-water', tiempo: 1, linea: 'orange', tipo: 'max-light-rail' },
    ],
  },
};
