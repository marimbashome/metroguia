export const lineasDetalleCharlotte = [
  {
    id: 'blue',
    color: '#0055A4',
    colorNombre: 'Blue',
    inicio: 'UNC Charlotte Main',
    fin: 'I-485/South Blvd',
    total: 25,
    municipios: ['Charlotte'],
    descripcion: 'Blue Line of Charlotte LYNX connecting UNC Charlotte to I-485/South Blvd. 25 stations serving the Charlotte metro area.',
    estaciones_turisticas: [
      'charlotte-unc-charlotte-main',
      'charlotte-7th-street',
      'charlotte-cvg-arena',
      'charlotte-9th-street',
      'charlotte-tyvola'
    ],
    estaciones: [
      'charlotte-unc-charlotte-main',
      'charlotte-north-tryon',
      'charlotte-36th-street',
      'charlotte-subway',
      'charlotte-25th-street',
      'charlotte-16th-street',
      'charlotte-7th-street',
      'charlotte-trade-street',
      'charlotte-stonewall',
      'charlotte-cvg-arena',
      'charlotte-3rd-street',
      'charlotte-5th-street',
      'charlotte-9th-street',
      'charlotte-10th-street',
      'charlotte-12th-street',
      'charlotte-15th-street',
      'charlotte-18th-street',
      'charlotte-21st-street',
      'charlotte-25th-street-south',
      'charlotte-28th-street',
      'charlotte-tyvola',
      'charlotte-bronx-avenue',
      'charlotte-i485-south-blvd'
    ],
    ruta_1_dia: {
      titulo: 'Blue Line: Charlotte LYNX Tour',
      paradas: [
        {
          estacion: 'charlotte-unc-charlotte-main',
          duracion: '1 hora',
          actividades: 'Start at UNC Charlotte Main campus'
        },
        {
          estacion: 'charlotte-cvg-arena',
          duracion: '2 horas',
          actividades: 'Explore downtown, visit Spectrum Center and entertainment district'
        },
        {
          estacion: 'charlotte-tyvola',
          duracion: '1 hora',
          actividades: 'Shopping and commercial district'
        }
      ]
    },
    tarifa: '$2.50 USD',
    frecuencia: '10–15 min',
    sistema: 'LYNX',
    ciudad: 'charlotte'
  },
  {
    id: 'gold',
    color: '#FFB81C',
    colorNombre: 'Gold',
    inicio: 'Rosa Parks Place',
    fin: 'Sunnyside Avenue',
    total: 11,
    municipios: ['Charlotte'],
    descripcion: 'Gold Line of Charlotte CityLYNX connecting Rosa Parks Place to Sunnyside Avenue. 11 stations serving the Charlotte streetcar network.',
    estaciones_turisticas: [
      'charlotte-rosa-parks-place',
      'charlotte-mint-tryon',
      'charlotte-7th-tryon',
      'charlotte-cvg-arena'
    ],
    estaciones: [
      'charlotte-rosa-parks-place',
      'charlotte-mint-tryon',
      'charlotte-7th-tryon',
      'charlotte-11th-tryon',
      'charlotte-15th-tryon',
      'charlotte-20th-tryon',
      'charlotte-25th-tryon',
      'charlotte-30th-tryon',
      'charlotte-sunnyside-avenue',
      'charlotte-cvg-arena'
    ],
    ruta_1_dia: {
      titulo: 'Gold Line: Charlotte CityLYNX Streetcar Tour',
      paradas: [
        {
          estacion: 'charlotte-rosa-parks-place',
          duracion: '1 hora',
          actividades: 'Start at Rosa Parks Place downtown'
        },
        {
          estacion: 'charlotte-7th-tryon',
          duracion: '1.5 horas',
          actividades: 'Explore arts district and cultural venues'
        },
        {
          estacion: 'charlotte-sunnyside-avenue',
          duracion: '1 hora',
          actividades: 'End at Sunnyside Avenue terminus'
        }
      ]
    },
    tarifa: '$1.00 USD',
    frecuencia: '15–20 min',
    sistema: 'CityLYNX',
    ciudad: 'charlotte'
  }
];
