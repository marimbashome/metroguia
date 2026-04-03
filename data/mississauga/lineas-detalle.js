export const lineasMississauga = [
  {
    id: "hazel-mccallion",
    nombre: "Hazel McCallion Line",
    color: "#652D90",
    colorNombre: "Hazel Purple",
    inicio: "Kipling Station",
    fin: "Terminal Station",
    total: 18,
    municipios: ["Mississauga"],
    descripcion: "La línea Hazel McCallion es un moderno sistema de tránsito rápido que atraviesa el corazón de Mississauga, conectando desde el centro cívico hasta los principales centros comerciales y destinos residenciales.",
    estaciones_turisticas: [
      "Square One",
      "City Centre",
      "Port Street",
      "Kipling Station"
    ],
    estaciones: [
      "Kipling Station",
      "Dundas West",
      "Burnhamthorpe",
      "City Centre",
      "Square One",
      "Rathburn",
      "Bloor Street",
      "Cawthra",
      "Hurontario Downtown",
      "Lakeshore Road",
      "Port Street",
      "Dundas Eastbound",
      "Eglinton East",
      "Steeles Avenue",
      "Clark Boulevard",
      "McMurchy Avenue",
      "Terminal Station"
    ],
    ruta_1_dia: {
      descripcion: "Recorrido completo Hazel McCallion Line - Kipling a Terminal Station",
      horario_salida: "10:00",
      duracion_minutos: 52,
      paradas: [
        {
          nombre: "Kipling Station",
          minutos_desde_inicio: 0,
          tipo: "Terminus"
        },
        {
          nombre: "Square One",
          minutos_desde_inicio: 18,
          tipo: "Major Hub"
        },
        {
          nombre: "Hurontario Downtown",
          minutos_desde_inicio: 36,
          tipo: "Downtown"
        },
        {
          nombre: "Terminal Station",
          minutos_desde_inicio: 52,
          tipo: "Terminus"
        }
      ]
    },
    tarifa: "$3.25 CAD",
    frecuencia: "7 min",
    sistema: "Hazel McCallion Light Rail Transit",
    ciudad: "mississauga"
  }
];
