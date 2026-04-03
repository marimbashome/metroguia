export const lineasDetalleMinneapolis = [
  {
    id: "Blue",
    color: "#0053A0",
    colorNombre: "Azul",
    inicio: "Target Field",
    fin: "Mall of America",
    total: 19,
    municipios: ["Minneapolis", "Bloomington"],
    descripcion: "The Blue Line connects downtown Minneapolis with MSP International Airport and Mall of America in Bloomington. Passing through diverse neighborhoods like Cedar-Riverside, Lake Street, and Minnehaha Park, it serves 19 stations and is the region's busiest light rail line — essential for tourists, commuters, and shoppers alike.",
    estaciones_turisticas: ["mpls-target-field", "mpls-downtown-east", "mpls-lake-street-midtown", "mpls-50th-st-minnehaha", "mpls-fort-snelling", "mpls-terminal-1-lindbergh", "mpls-mall-of-america"],
    estaciones: [
      "mpls-target-field", "mpls-warehouse-district", "mpls-nicollet-mall", "mpls-government-plaza", "mpls-downtown-east",
      "mpls-cedar-riverside", "mpls-franklin-ave", "mpls-lake-street-midtown", "mpls-38th-st", "mpls-46th-st",
      "mpls-50th-st-minnehaha", "mpls-va-medical-center", "mpls-fort-snelling", "mpls-terminal-1-lindbergh", "mpls-terminal-2-humphrey",
      "mpls-american-blvd", "mpls-bloomington-central", "mpls-28th-ave", "mpls-mall-of-america"
    ],
    seo_title: "Blue Line Metro Transit Minneapolis — Target Field to Mall of America | MetroGuia",
    meta_description: "Minneapolis Blue Line light rail: 19 stations from Target Field to Mall of America via MSP Airport. Schedule, fare, and tourist guide.",
    ruta_1_dia: {
      titulo: "Blue Line Day Trip: Downtown to Mall of America",
      paradas: [
        { estacion: "mpls-target-field", actividad: "Start at Target Field, explore downtown Minneapolis and North Loop dining" },
        { estacion: "mpls-lake-street-midtown", actividad: "Visit Midtown Global Market for diverse international cuisine" },
        { estacion: "mpls-50th-st-minnehaha", actividad: "Walk to Minnehaha Falls, a stunning 53-foot waterfall in the city" },
        { estacion: "mpls-fort-snelling", actividad: "Tour Historic Fort Snelling at the river confluence" },
        { estacion: "mpls-mall-of-america", actividad: "Spend the afternoon at the 500+ store Mall of America" }
      ],
      notas: "Best for shopping and sightseeing. Allow 3+ hours at Mall of America. Minnehaha Falls is most impressive in spring."
    },
    tarifa: "$2.00 USD",
    frecuencia: "7-10 min peak, 10-15 min off-peak",
    sistema: "Metro Transit",
    ciudad: "minneapolis",
    horario: "5:30 AM - 12:30 AM"
  },
  {
    id: "Green",
    color: "#00A94F",
    colorNombre: "Verde",
    inicio: "Target Field",
    fin: "Union Depot",
    total: 23,
    municipios: ["Minneapolis", "St. Paul"],
    descripcion: "The Green Line spans the Twin Cities corridor from downtown Minneapolis through the University of Minnesota to downtown St. Paul. With 23 stations, it connects two state capitals, major universities, cultural institutions, and the historic Union Depot — a vital east-west transit backbone.",
    estaciones_turisticas: ["mpls-target-field", "mpls-downtown-east", "mpls-stadium-village", "mpls-prospect-park", "mpls-capitol-rice", "mpls-central-station", "mpls-union-depot"],
    estaciones: [
      "mpls-target-field", "mpls-warehouse-district", "mpls-nicollet-mall", "mpls-government-plaza", "mpls-downtown-east",
      "mpls-west-bank", "mpls-east-bank", "mpls-stadium-village", "mpls-prospect-park", "mpls-westgate",
      "mpls-raymond-ave", "mpls-fairview-ave", "mpls-snelling-ave", "mpls-hamline-ave", "mpls-lexington-pkwy",
      "mpls-victoria-st", "mpls-dale-st", "mpls-western-ave", "mpls-capitol-rice", "mpls-robert-st",
      "mpls-10th-st", "mpls-central-station", "mpls-union-depot"
    ],
    seo_title: "Green Line Metro Transit — Minneapolis to St. Paul via University | MetroGuia",
    meta_description: "Minneapolis-St. Paul Green Line: 23 stations connecting Target Field to Union Depot via UMN campus. Schedule, fare, and guide.",
    ruta_1_dia: {
      titulo: "Green Line: Twin Cities Culture Crawl",
      paradas: [
        { estacion: "mpls-target-field", actividad: "Start downtown, explore Mill District and Stone Arch Bridge" },
        { estacion: "mpls-stadium-village", actividad: "Walk the UMN campus, visit Huntington Bank Stadium area" },
        { estacion: "mpls-prospect-park", actividad: "Stop at Surly Brewing Company for craft beer" },
        { estacion: "mpls-capitol-rice", actividad: "Tour the Minnesota State Capitol and History Center" },
        { estacion: "mpls-union-depot", actividad: "Explore historic Union Depot and Lowertown arts district" }
      ],
      notas: "Perfect for culture and education. The Capitol is most impressive during weekday hours. Surly Brewing opens at 11 AM."
    },
    tarifa: "$2.00 USD",
    frecuencia: "5-7 min peak, 8-10 min off-peak",
    sistema: "Metro Transit",
    ciudad: "minneapolis",
    horario: "5:30 AM - 12:30 AM"
  },
  {
    id: "Northstar",
    color: "#FFD100",
    colorNombre: "Dorado",
    inicio: "Target Field",
    fin: "Big Lake",
    total: 6,
    municipios: ["Minneapolis", "Fridley", "Coon Rapids", "Anoka", "Elk River", "Big Lake"],
    descripcion: "The Northstar Commuter Rail connects downtown Minneapolis with northern suburbs up to Big Lake, about 40 miles northwest. With 6 stations, it provides a relaxing alternative to highway traffic and offers access to historic Anoka, the Halloween Capital of the World.",
    estaciones_turisticas: ["mpls-target-field", "mpls-anoka"],
    estaciones: [
      "mpls-target-field", "mpls-fridley", "mpls-coon-rapids", "mpls-anoka", "mpls-elk-river", "mpls-big-lake"
    ],
    seo_title: "Northstar Commuter Rail — Minneapolis to Big Lake | MetroGuia",
    meta_description: "Northstar Commuter Rail: 6 stations from Target Field to Big Lake. Schedule, fare, and access to northern Minneapolis metro.",
    ruta_1_dia: {
      titulo: "Northstar Day Trip: Downtown to the Countryside",
      paradas: [
        { estacion: "mpls-target-field", actividad: "Start at Target Field in downtown Minneapolis" },
        { estacion: "mpls-anoka", actividad: "Visit the Halloween Capital of the World and explore historic downtown" },
        { estacion: "mpls-big-lake", actividad: "Enjoy Big Lake outdoor recreation and return to the city" }
      ],
      notas: "Northstar runs limited service — check schedule before traveling. Best for weekend day trips to Anoka."
    },
    tarifa: "$3.25-$5.25 USD (zone-based)",
    frecuencia: "Limited service, primarily peak hours",
    sistema: "Northstar Commuter Rail",
    ciudad: "minneapolis",
    horario: "Peak hours only — check schedule"
  }
];
