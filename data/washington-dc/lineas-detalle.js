export const lineasDetalleDC = [
  {
    id: 'red',
    slug: 'red',
    nombre: 'Red Line',
    color: '#BF0D3E',
    colorNombre: 'Red',
    colorOscuro: '#8B0A2B',
    ciudad: 'washington-dc',
    total: 27,
    numeroEstaciones: 27,
    inicio: 'Shady Grove',
    fin: 'Glenmont',
    descripcion: 'Red Line runs north-south through Washington DC from Shady Grove, Maryland to Glenmont, Maryland, serving Montgomery County and passing through major downtown hubs like Metro Center, Union Station, and Dupont Circle.',
    estacionesTerminales: ['Shady Grove', 'Glenmont'],
    distancia: '38 km',
    tiempoTotal: '48 minutos',
    horarios: {
      apertura: '05:00',
      cierre: '23:30',
      notas: 'Mon-Thu 5AM-11:30PM, Fri 5AM-1AM, Sat 7AM-1AM, Sun 7AM-11:30PM'
    },
    transferencias: [
      { estacion: 'Metro Center', lineas: ['blue', 'orange', 'silver'] },
      { estacion: 'Gallery Pl-Chinatown', lineas: ['yellow', 'green'] },
      { estacion: 'Fort Totten', lineas: ['yellow', 'green'] }
    ],
    lugares_cercanos: [
      'White House',
      'Capitol Building',
      'National Zoo',
      'NIH Campus',
      'Bethesda Row',
      'Adams Morgan',
      'Union Station',
      'Smithsonian Museums'
    ]
  },
  {
    id: 'blue',
    slug: 'blue',
    nombre: 'Blue Line',
    color: '#009CDE',
    colorNombre: 'Blue',
    colorOscuro: '#0073A6',
    ciudad: 'washington-dc',
    total: 27,
    numeroEstaciones: 27,
    inicio: 'Franconia-Springfield',
    fin: 'Largo Town Center',
    descripcion: 'Blue Line runs from Franconia-Springfield in Virginia through Arlington and Washington DC to Largo, Maryland. Serves Reagan National Airport, Pentagon, and Arlington Cemetery. Major downtown connection at Metro Center.',
    estacionesTerminales: ['Franconia-Springfield', 'Largo Town Center'],
    distancia: '46 km',
    tiempoTotal: '56 minutos',
    horarios: {
      apertura: '05:00',
      cierre: '23:30',
      notas: 'Mon-Thu 5AM-11:30PM, Fri 5AM-1AM, Sat 7AM-1AM, Sun 7AM-11:30PM'
    },
    transferencias: [
      { estacion: 'Metro Center', lineas: ['red', 'orange', 'silver'] },
      { estacion: 'Capitol South', lineas: ['orange', 'silver'] },
      { estacion: 'Smithsonian', lineas: ['orange', 'silver'] },
      { estacion: 'L\'Enfant Plaza', lineas: ['orange', 'silver', 'yellow', 'green'] },
      { estacion: 'Gallery Pl-Chinatown', lineas: ['red', 'yellow', 'green'] }
    ],
    lugares_cercanos: [
      'Reagan National Airport',
      'Pentagon',
      'Arlington National Cemetery',
      'Old Town Alexandria',
      'Pentagon City Mall',
      'Nationals Park',
      'Smithsonian Museums',
      'National Mall'
    ]
  },
  {
    id: 'orange',
    slug: 'orange',
    nombre: 'Orange Line',
    color: '#ED8B00',
    colorNombre: 'Orange',
    colorOscuro: '#BA6A00',
    ciudad: 'washington-dc',
    total: 26,
    numeroEstaciones: 26,
    inicio: 'Vienna',
    fin: 'New Carrollton',
    descripcion: 'Orange Line runs from Vienna, Virginia through Arlington to New Carrollton, Maryland. Serves major stops including Rosslyn, Ballston, and Foggy Bottom near George Washington University and Kennedy Center.',
    estacionesTerminales: ['Vienna', 'New Carrollton'],
    distancia: '45 km',
    tiempoTotal: '54 minutos',
    horarios: {
      apertura: '05:00',
      cierre: '23:30',
      notas: 'Mon-Thu 5AM-11:30PM, Fri 5AM-1AM, Sat 7AM-1AM, Sun 7AM-11:30PM'
    },
    transferencias: [
      { estacion: 'Metro Center', lineas: ['red', 'blue', 'silver'] },
      { estacion: 'Capitol South', lineas: ['blue', 'silver'] },
      { estacion: 'Smithsonian', lineas: ['blue', 'silver'] },
      { estacion: 'L\'Enfant Plaza', lineas: ['blue', 'silver', 'yellow', 'green'] },
      { estacion: 'Gallery Pl-Chinatown', lineas: ['red', 'blue', 'yellow', 'green'] },
      { estacion: 'McPherson Square', lineas: ['blue', 'silver'] },
      { estacion: 'Farragut West', lineas: ['blue', 'silver'] }
    ],
    lugares_cercanos: [
      'Kennedy Center',
      'Rosslyn Office Towers',
      'Ballston',
      'Arlington',
      'George Washington University',
      'Foggy Bottom',
      'National Archives',
      'Capitol Hill'
    ]
  },
  {
    id: 'silver',
    slug: 'silver',
    nombre: 'Silver Line',
    color: '#A2A4A1',
    colorNombre: 'Silver',
    colorOscuro: '#7B7D7A',
    ciudad: 'washington-dc',
    total: 28,
    numeroEstaciones: 28,
    inicio: 'Ashburn',
    fin: 'Largo Town Center',
    descripcion: 'Silver Line extends from Ashburn/Dulles in Loudoun County to Largo Town Center, Maryland. New line opened in phases, providing direct access to Dulles International Airport and serving major tech parks and Reston Town Center.',
    estacionesTerminales: ['Ashburn', 'Largo Town Center'],
    distancia: '48 km',
    tiempoTotal: '60 minutos',
    horarios: {
      apertura: '05:00',
      cierre: '23:30',
      notas: 'Mon-Thu 5AM-11:30PM, Fri 5AM-1AM, Sat 7AM-1AM, Sun 7AM-11:30PM'
    },
    transferencias: [
      { estacion: 'Metro Center', lineas: ['red', 'blue', 'orange'] },
      { estacion: 'Capitol South', lineas: ['blue', 'orange'] },
      { estacion: 'Smithsonian', lineas: ['blue', 'orange'] },
      { estacion: 'L\'Enfant Plaza', lineas: ['blue', 'orange', 'yellow', 'green'] },
      { estacion: 'Archives-Navy Memorial', lineas: ['blue', 'orange'] },
      { estacion: 'McPherson Square', lineas: ['blue', 'orange'] },
      { estacion: 'Farragut West', lineas: ['blue', 'orange'] }
    ],
    lugares_cercanos: [
      'Dulles International Airport',
      'Reston Town Center',
      'Innovation Center',
      'Herndon',
      'National Mall',
      'Federal Triangle',
      'Downtown DC',
      'Largo'
    ]
  },
  {
    id: 'green',
    slug: 'green',
    nombre: 'Green Line',
    color: '#00B140',
    colorNombre: 'Green',
    colorOscuro: '#008A30',
    ciudad: 'washington-dc',
    total: 21,
    numeroEstaciones: 21,
    inicio: 'Branch Avenue',
    fin: 'Greenbelt',
    descripcion: 'Green Line runs from Branch Avenue in Maryland through Washington DC serving Southeast neighborhoods and major institutions. Provides access to U Street Corridor, Howard University, and Fort Totten transfer hub.',
    estacionesTerminales: ['Branch Avenue', 'Greenbelt'],
    distancia: '35 km',
    tiempoTotal: '42 minutos',
    horarios: {
      apertura: '05:00',
      cierre: '23:30',
      notas: 'Mon-Thu 5AM-11:30PM, Fri 5AM-1AM, Sat 7AM-1AM, Sun 7AM-11:30PM'
    },
    transferencias: [
      { estacion: 'Fort Totten', lineas: ['red', 'yellow'] },
      { estacion: 'Gallery Pl-Chinatown', lineas: ['red', 'blue', 'yellow'] },
      { estacion: 'L\'Enfant Plaza', lineas: ['blue', 'orange', 'silver', 'yellow'] },
      { estacion: 'Archives-Navy Memorial', lineas: ['blue', 'orange', 'yellow'] },
      { estacion: 'Mount Vernon Square', lineas: ['yellow'] },
      { estacion: 'U Street', lineas: ['yellow'] },
      { estacion: 'Shaw-Howard U', lineas: ['yellow'] }
    ],
    lugares_cercanos: [
      'Howard University',
      'U Street Jazz District',
      'Meridian Hill Park',
      'Convention Center',
      'National Archives',
      'Nationals Park',
      'Anacostia Waterfront',
      'University of Maryland'
    ]
  },
  {
    id: 'yellow',
    slug: 'yellow',
    nombre: 'Yellow Line',
    color: '#FFD100',
    colorNombre: 'Yellow',
    colorOscuro: '#CCAA00',
    ciudad: 'washington-dc',
    total: 17,
    numeroEstaciones: 17,
    inicio: 'Huntington',
    fin: 'Mount Vernon Square',
    descripcion: 'Yellow Line connects from Huntington in Alexandria through Reagan National Airport to Gallery Place-Chinatown and beyond. Serves tourism, airport access, and historic Old Town Alexandria.',
    estacionesTerminales: ['Huntington', 'Mount Vernon Square/Gallery Pl'],
    distancia: '28 km',
    tiempoTotal: '34 minutos',
    horarios: {
      apertura: '05:00',
      cierre: '23:30',
      notas: 'Mon-Thu 5AM-11:30PM, Fri 5AM-1AM, Sat 7AM-1AM, Sun 7AM-11:30PM'
    },
    transferencias: [
      { estacion: 'Fort Totten', lineas: ['red', 'green'] },
      { estacion: 'Gallery Pl-Chinatown', lineas: ['red', 'blue', 'green'] },
      { estacion: 'L\'Enfant Plaza', lineas: ['blue', 'orange', 'silver', 'green'] },
      { estacion: 'Archives-Navy Memorial', lineas: ['blue', 'orange', 'green'] },
      { estacion: 'Mount Vernon Square', lineas: ['green'] },
      { estacion: 'U Street', lineas: ['green'] },
      { estacion: 'Shaw-Howard U', lineas: ['green'] }
    ],
    lugares_cercanos: [
      'Reagan National Airport',
      'Old Town Alexandria',
      'Potomac River Waterfront',
      'Mount Vernon George Washington Estate',
      'Convention Center',
      'U Street District',
      'Howard University',
      'National Archives'
    ]
  }
];
