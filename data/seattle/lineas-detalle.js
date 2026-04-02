export const lineasSeattle = [
  {
    id: "1",
    color: "#0066B2",
    colorNombre: "Azul",
    inicio: "Angle Lake",
    fin: "Lynnwood City Center",
    total: 25,
    municipios: ["Des Moines", "Seattle", "Shoreline", "Mountlake Terrace", "Lynnwood"],
    descripcion: "Línea 1 Sound Transit Light Rail. Línea principal norte-sur que conecta Angle Lake (terminal sur) con Lynnwood City Center (terminal norte). Pasa por toda el área metropolitana de Seattle con acceso a SeaTac/Airport, Rainier Valley, downtown Seattle, Capitol Hill, University District, y zona norte. Estaciones clave: Angle Lake (terminal sur), SeaTac/Airport (acceso aeropuerto), Stadium (estadios deportivos Lumen Field y T-Mobile Park), Pioneer Square (histórico), Westlake (downtown shopping), University of Washington (educación), Northgate (hub norte), y Lynnwood City Center (terminal norte).",
    estaciones_turisticas: ["seattle-seatac-airport", "seattle-stadion", "seattle-international-district", "seattle-pioneer-square", "seattle-westlake", "seattle-capitol-hill", "seattle-university-of-washington"],
    estaciones: [
      "seattle-angle-lake",
      "seattle-federal-way",
      "seattle-kent",
      "seattle-seatac-airport",
      "seattle-columbia-city",
      "seattle-beacon-hill",
      "seattle-rainier-square",
      "seattle-stadion",
      "seattle-international-district",
      "seattle-pioneer-square",
      "seattle-westlake",
      "seattle-capitol-hill",
      "seattle-university-of-washington",
      "seattle-roosevelt",
      "seattle-northgate",
      "seattle-mountlake-terrace",
      "seattle-shoreline",
      "seattle-lynnwood-city-center"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día Línea 1: Aeropuerto, deportes y downtown",
      paradas: [
        {
          estacion: "seattle-seatac-airport",
          actividad: "Salida del aeropuerto. Inicio del tour. (10:00 AM)"
        },
        {
          estacion: "seattle-stadion",
          actividad: "Lumen Field (Seahawks) y T-Mobile Park (Mariners). (11:30 AM)"
        },
        {
          estacion: "seattle-pioneer-square",
          actividad: "Pioneer Square histórico. Pike Place Market y restaurantes. (1:00 PM)"
        },
        {
          estacion: "seattle-westlake",
          actividad: "Westlake Shopping Center. (3:00 PM)"
        },
        {
          estacion: "seattle-capitol-hill",
          actividad: "Capitol Hill. Cena y vida nocturna. (6:00 PM)"
        }
      ]
    }
  },
  {
    id: "T",
    color: "#FF6B35",
    colorNombre: "Naranja",
    inicio: "Tacoma",
    fin: "Tacoma",
    total: 1,
    municipios: ["Tacoma"],
    descripcion: "T Line Sound Transit Light Rail. Sistema de transporte ligero exclusivo de Tacoma. Conecta el centro de Tacoma con puntos clave de la ciudad.",
    estaciones_turisticas: [],
    estaciones: [
      "tacoma-line-stations"
    ]
  }
];
