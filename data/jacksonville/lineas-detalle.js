export const lineasJacksonville = [
  {
    id: "skyway",
    color: "#0072CE",
    colorNombre: "Skyway",
    inicio: "Convention Center",
    fin: "Riverplace",
    total: 8,
    municipios: ["Jacksonville"],
    descripcion: "The Jacksonville Skyway is a free automated people mover on an elevated guideway through downtown Jacksonville, crossing the St. Johns River. 8 stations with zero-fare transit.",
    estaciones_turisticas: ["jax-convention-center", "jax-central", "jax-san-marco", "jax-riverplace"],
    estaciones: [
      "jax-convention-center",
      "jax-jefferson",
      "jax-central",
      "jax-hemming-plaza",
      "jax-bay-street",
      "jax-san-marco",
      "jax-kings-avenue",
      "jax-riverplace"
    ],
    ruta_1_dia: {
      titulo: "Skyway: Downtown Jacksonville Free Tour",
      paradas: [
        { estacion: "jax-convention-center", duracion: "30 min", actividades: "Start at the Convention Center" },
        { estacion: "jax-hemming-plaza", duracion: "1 hora", actividades: "Explore Johnson Park and Main Library" },
        { estacion: "jax-san-marco", duracion: "1 hora", actividades: "Cross the river to San Marco" },
        { estacion: "jax-riverplace", duracion: "1 hora", actividades: "Visit Friendship Fountain" }
      ]
    },
    tarifa: "FREE",
    frecuencia: "5-8 min",
    sistema: "JTA Skyway",
    ciudad: "jacksonville"
  }
];
