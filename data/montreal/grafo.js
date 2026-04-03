export const grafoMontreal = {
  'angrignon': {
    ciudad: 'montreal',
    nombre: 'Angrignon',
    lineas: ["green"],
    adyacentes: [
      { slug: 'monk', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
    ],
  },
  'monk': {
    ciudad: 'montreal',
    nombre: 'Monk',
    lineas: ["green"],
    adyacentes: [
      { slug: 'angrignon', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
      { slug: 'jolicoeur', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
    ],
  },
  'jolicoeur': {
    ciudad: 'montreal',
    nombre: 'Jolicoeur',
    lineas: ["green"],
    adyacentes: [
      { slug: 'monk', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
      { slug: 'verdun', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
    ],
  },
  'verdun': {
    ciudad: 'montreal',
    nombre: 'Verdun',
    lineas: ["green"],
    adyacentes: [
      { slug: 'jolicoeur', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
      { slug: 'de-l-eglise', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
    ],
  },
  'de-l-eglise': {
    ciudad: 'montreal',
    nombre: 'De L Eglise',
    lineas: ["green"],
    adyacentes: [
      { slug: 'verdun', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
      { slug: 'lasalle', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
    ],
  },
  'lasalle': {
    ciudad: 'montreal',
    nombre: 'Lasalle',
    lineas: ["green"],
    adyacentes: [
      { slug: 'de-l-eglise', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
      { slug: 'charlevoix', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
    ],
  },
  'charlevoix': {
    ciudad: 'montreal',
    nombre: 'Charlevoix',
    lineas: ["green"],
    adyacentes: [
      { slug: 'lasalle', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
      { slug: 'lionel-groulx-green', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
    ],
  },
  'lionel-groulx-green': {
    ciudad: 'montreal',
    nombre: 'Lionel Groulx Green',
    lineas: ["green"],
    adyacentes: [
      { slug: 'charlevoix', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
      { slug: 'atwater', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
      { slug: 'lionel-groulx-orange', tiempo: 5, linea: 'orange', tipo: 'stm-metro' }],
  },
  'atwater': {
    ciudad: 'montreal',
    nombre: 'Atwater',
    lineas: ["green"],
    adyacentes: [
      { slug: 'lionel-groulx-green', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
      { slug: 'guy-concordia', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
    ],
  },
  'guy-concordia': {
    ciudad: 'montreal',
    nombre: 'Guy Concordia',
    lineas: ["green"],
    adyacentes: [
      { slug: 'atwater', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
      { slug: 'peel', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
    ],
  },
  'peel': {
    ciudad: 'montreal',
    nombre: 'Peel',
    lineas: ["green"],
    adyacentes: [
      { slug: 'guy-concordia', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
      { slug: 'mcgill', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
    ],
  },
  'mcgill': {
    ciudad: 'montreal',
    nombre: 'Mcgill',
    lineas: ["green"],
    adyacentes: [
      { slug: 'peel', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
      { slug: 'place-des-arts', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
    ],
  },
  'place-des-arts': {
    ciudad: 'montreal',
    nombre: 'Place Des Arts',
    lineas: ["green"],
    adyacentes: [
      { slug: 'mcgill', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
      { slug: 'saint-laurent', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
    ],
  },
  'saint-laurent': {
    ciudad: 'montreal',
    nombre: 'Saint Laurent',
    lineas: ["green"],
    adyacentes: [
      { slug: 'place-des-arts', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
      { slug: 'berri-uqam-green', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
    ],
  },
  'berri-uqam-green': {
    ciudad: 'montreal',
    nombre: 'Berri Uqam Green',
    lineas: ["green"],
    adyacentes: [
      { slug: 'saint-laurent', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
      { slug: 'beaudry', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
      { slug: 'berri-uqam-orange', tiempo: 5, linea: 'orange', tipo: 'stm-metro' },
      { slug: 'berri-uqam-yellow', tiempo: 5, linea: 'yellow', tipo: 'stm-metro' }],
  },
  'beaudry': {
    ciudad: 'montreal',
    nombre: 'Beaudry',
    lineas: ["green"],
    adyacentes: [
      { slug: 'berri-uqam-green', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
      { slug: 'papineau', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
    ],
  },
  'papineau': {
    ciudad: 'montreal',
    nombre: 'Papineau',
    lineas: ["green"],
    adyacentes: [
      { slug: 'beaudry', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
      { slug: 'frontenac', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
    ],
  },
  'frontenac': {
    ciudad: 'montreal',
    nombre: 'Frontenac',
    lineas: ["green"],
    adyacentes: [
      { slug: 'papineau', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
      { slug: 'prefontaine', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
    ],
  },
  'prefontaine': {
    ciudad: 'montreal',
    nombre: 'Prefontaine',
    lineas: ["green"],
    adyacentes: [
      { slug: 'frontenac', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
      { slug: 'joliette', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
    ],
  },
  'joliette': {
    ciudad: 'montreal',
    nombre: 'Joliette',
    lineas: ["green"],
    adyacentes: [
      { slug: 'prefontaine', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
      { slug: 'pie-ix', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
    ],
  },
  'pie-ix': {
    ciudad: 'montreal',
    nombre: 'Pie Ix',
    lineas: ["green"],
    adyacentes: [
      { slug: 'joliette', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
      { slug: 'viau', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
    ],
  },
  'viau': {
    ciudad: 'montreal',
    nombre: 'Viau',
    lineas: ["green"],
    adyacentes: [
      { slug: 'pie-ix', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
      { slug: 'assomption', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
    ],
  },
  'assomption': {
    ciudad: 'montreal',
    nombre: 'Assomption',
    lineas: ["green"],
    adyacentes: [
      { slug: 'viau', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
      { slug: 'cadillac', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
    ],
  },
  'cadillac': {
    ciudad: 'montreal',
    nombre: 'Cadillac',
    lineas: ["green"],
    adyacentes: [
      { slug: 'assomption', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
      { slug: 'langelier', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
    ],
  },
  'langelier': {
    ciudad: 'montreal',
    nombre: 'Langelier',
    lineas: ["green"],
    adyacentes: [
      { slug: 'cadillac', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
      { slug: 'radisson', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
    ],
  },
  'radisson': {
    ciudad: 'montreal',
    nombre: 'Radisson',
    lineas: ["green"],
    adyacentes: [
      { slug: 'langelier', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
      { slug: 'honore-beaugrand', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
    ],
  },
  'honore-beaugrand': {
    ciudad: 'montreal',
    nombre: 'Honore Beaugrand',
    lineas: ["green"],
    adyacentes: [
      { slug: 'radisson', tiempo: 3, linea: 'green', tipo: 'stm-metro' },
    ],
  },
  'cote-vertu': {
    ciudad: 'montreal',
    nombre: 'Cote Vertu',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'du-college', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
    ],
  },
  'du-college': {
    ciudad: 'montreal',
    nombre: 'Du College',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'cote-vertu', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
      { slug: 'de-la-savane', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
    ],
  },
  'de-la-savane': {
    ciudad: 'montreal',
    nombre: 'De La Savane',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'du-college', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
      { slug: 'namur', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
    ],
  },
  'namur': {
    ciudad: 'montreal',
    nombre: 'Namur',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'de-la-savane', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
      { slug: 'plamondon', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
    ],
  },
  'plamondon': {
    ciudad: 'montreal',
    nombre: 'Plamondon',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'namur', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
      { slug: 'cote-sainte-catherine', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
    ],
  },
  'cote-sainte-catherine': {
    ciudad: 'montreal',
    nombre: 'Cote Sainte Catherine',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'plamondon', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
      { slug: 'snowdon', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
    ],
  },
  'snowdon': {
    ciudad: 'montreal',
    nombre: 'Snowdon',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'cote-sainte-catherine', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
      { slug: 'outremont', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
    ],
  },
  'outremont': {
    ciudad: 'montreal',
    nombre: 'Outremont',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'snowdon', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
      { slug: 'edouard-montpetit', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
    ],
  },
  'edouard-montpetit': {
    ciudad: 'montreal',
    nombre: 'Edouard Montpetit',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'outremont', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
      { slug: 'universite-de-montreal', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
    ],
  },
  'universite-de-montreal': {
    ciudad: 'montreal',
    nombre: 'Universite De Montreal',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'edouard-montpetit', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
      { slug: 'cote-des-neiges', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
    ],
  },
  'cote-des-neiges': {
    ciudad: 'montreal',
    nombre: 'Cote Des Neiges',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'universite-de-montreal', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
      { slug: 'jean-talon-orange', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
    ],
  },
  'jean-talon-orange': {
    ciudad: 'montreal',
    nombre: 'Jean Talon Orange',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'cote-des-neiges', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
      { slug: 'beaubien', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
    ],
  },
  'beaubien': {
    ciudad: 'montreal',
    nombre: 'Beaubien',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'jean-talon-orange', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
      { slug: 'rosemont', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
    ],
  },
  'rosemont': {
    ciudad: 'montreal',
    nombre: 'Rosemont',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'beaubien', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
      { slug: 'laurier', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
    ],
  },
  'laurier': {
    ciudad: 'montreal',
    nombre: 'Laurier',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'rosemont', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
      { slug: 'mont-royal', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
    ],
  },
  'mont-royal': {
    ciudad: 'montreal',
    nombre: 'Mont Royal',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'laurier', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
      { slug: 'sherbrooke', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
    ],
  },
  'sherbrooke': {
    ciudad: 'montreal',
    nombre: 'Sherbrooke',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'mont-royal', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
      { slug: 'berri-uqam-orange', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
    ],
  },
  'berri-uqam-orange': {
    ciudad: 'montreal',
    nombre: 'Berri Uqam Orange',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'sherbrooke', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
      { slug: 'champ-de-mars', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
      { slug: 'berri-uqam-green', tiempo: 5, linea: 'green', tipo: 'stm-metro' },
      { slug: 'berri-uqam-yellow', tiempo: 5, linea: 'yellow', tipo: 'stm-metro' }],
  },
  'champ-de-mars': {
    ciudad: 'montreal',
    nombre: 'Champ De Mars',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'berri-uqam-orange', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
      { slug: 'place-d-armes', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
    ],
  },
  'place-d-armes': {
    ciudad: 'montreal',
    nombre: 'Place D Armes',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'champ-de-mars', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
      { slug: 'square-victoria', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
    ],
  },
  'square-victoria': {
    ciudad: 'montreal',
    nombre: 'Square Victoria',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'place-d-armes', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
      { slug: 'bonaventure', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
    ],
  },
  'bonaventure': {
    ciudad: 'montreal',
    nombre: 'Bonaventure',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'square-victoria', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
      { slug: 'lucien-l-allier', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
    ],
  },
  'lucien-l-allier': {
    ciudad: 'montreal',
    nombre: 'Lucien L Allier',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'bonaventure', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
      { slug: 'georges-vanier', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
    ],
  },
  'georges-vanier': {
    ciudad: 'montreal',
    nombre: 'Georges Vanier',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'lucien-l-allier', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
      { slug: 'lionel-groulx-orange', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
    ],
  },
  'lionel-groulx-orange': {
    ciudad: 'montreal',
    nombre: 'Lionel Groulx Orange',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'georges-vanier', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
      { slug: 'place-saint-henri', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
      { slug: 'lionel-groulx-green', tiempo: 5, linea: 'green', tipo: 'stm-metro' }],
  },
  'place-saint-henri': {
    ciudad: 'montreal',
    nombre: 'Place Saint Henri',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'lionel-groulx-orange', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
      { slug: 'vendome', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
    ],
  },
  'vendome': {
    ciudad: 'montreal',
    nombre: 'Vendome',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'place-saint-henri', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
      { slug: 'villa-maria', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
    ],
  },
  'villa-maria': {
    ciudad: 'montreal',
    nombre: 'Villa Maria',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'vendome', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
      { slug: 'snowdon-orange', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
    ],
  },
  'snowdon-orange': {
    ciudad: 'montreal',
    nombre: 'Snowdon Orange',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'villa-maria', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
      { slug: 'cote-vertu-orange', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
    ],
  },
  'cote-vertu-orange': {
    ciudad: 'montreal',
    nombre: 'Cote Vertu Orange',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'snowdon-orange', tiempo: 3, linea: 'orange', tipo: 'stm-metro' },
    ],
  },
  'snowdon-blue': {
    ciudad: 'montreal',
    nombre: 'Snowdon Blue',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'cote-des-neiges-blue', tiempo: 3, linea: 'blue', tipo: 'stm-metro' },
    ],
  },
  'cote-des-neiges-blue': {
    ciudad: 'montreal',
    nombre: 'Cote Des Neiges Blue',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'snowdon-blue', tiempo: 3, linea: 'blue', tipo: 'stm-metro' },
      { slug: 'universite-de-montreal-blue', tiempo: 3, linea: 'blue', tipo: 'stm-metro' },
    ],
  },
  'universite-de-montreal-blue': {
    ciudad: 'montreal',
    nombre: 'Universite De Blue',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'cote-des-neiges-blue', tiempo: 3, linea: 'blue', tipo: 'stm-metro' },
      { slug: 'edouard-montpetit-blue', tiempo: 3, linea: 'blue', tipo: 'stm-metro' },
    ],
  },
  'edouard-montpetit-blue': {
    ciudad: 'montreal',
    nombre: 'Edouard Montpetit Blue',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'universite-de-montreal-blue', tiempo: 3, linea: 'blue', tipo: 'stm-metro' },
      { slug: 'outremont-blue', tiempo: 3, linea: 'blue', tipo: 'stm-metro' },
    ],
  },
  'outremont-blue': {
    ciudad: 'montreal',
    nombre: 'Outremont Blue',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'edouard-montpetit-blue', tiempo: 3, linea: 'blue', tipo: 'stm-metro' },
      { slug: 'acadie', tiempo: 3, linea: 'blue', tipo: 'stm-metro' },
    ],
  },
  'acadie': {
    ciudad: 'montreal',
    nombre: 'Acadie',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'outremont-blue', tiempo: 3, linea: 'blue', tipo: 'stm-metro' },
      { slug: 'parc', tiempo: 3, linea: 'blue', tipo: 'stm-metro' },
    ],
  },
  'parc': {
    ciudad: 'montreal',
    nombre: 'Parc',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'acadie', tiempo: 3, linea: 'blue', tipo: 'stm-metro' },
      { slug: 'de-castelnau', tiempo: 3, linea: 'blue', tipo: 'stm-metro' },
    ],
  },
  'de-castelnau': {
    ciudad: 'montreal',
    nombre: 'De Castelnau',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'parc', tiempo: 3, linea: 'blue', tipo: 'stm-metro' },
      { slug: 'jean-talon-blue', tiempo: 3, linea: 'blue', tipo: 'stm-metro' },
    ],
  },
  'jean-talon-blue': {
    ciudad: 'montreal',
    nombre: 'Jean Talon Blue',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'de-castelnau', tiempo: 3, linea: 'blue', tipo: 'stm-metro' },
      { slug: 'fabre', tiempo: 3, linea: 'blue', tipo: 'stm-metro' },
    ],
  },
  'fabre': {
    ciudad: 'montreal',
    nombre: 'Fabre',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'jean-talon-blue', tiempo: 3, linea: 'blue', tipo: 'stm-metro' },
      { slug: 'd-iberville', tiempo: 3, linea: 'blue', tipo: 'stm-metro' },
    ],
  },
  'd-iberville': {
    ciudad: 'montreal',
    nombre: 'D Iberville',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'fabre', tiempo: 3, linea: 'blue', tipo: 'stm-metro' },
      { slug: 'saint-michel', tiempo: 3, linea: 'blue', tipo: 'stm-metro' },
    ],
  },
  'saint-michel': {
    ciudad: 'montreal',
    nombre: 'Saint Michel',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'd-iberville', tiempo: 3, linea: 'blue', tipo: 'stm-metro' },
    ],
  },
  'berri-uqam-yellow': {
    ciudad: 'montreal',
    nombre: 'Berri Uqam Yellow',
    lineas: ["yellow"],
    adyacentes: [
      { slug: 'jean-drapeau', tiempo: 3, linea: 'yellow', tipo: 'stm-metro' },
      { slug: 'berri-uqam-green', tiempo: 5, linea: 'green', tipo: 'stm-metro' },
      { slug: 'berri-uqam-orange', tiempo: 5, linea: 'orange', tipo: 'stm-metro' }],
  },
  'jean-drapeau': {
    ciudad: 'montreal',
    nombre: 'Jean Drapeau',
    lineas: ["yellow"],
    adyacentes: [
      { slug: 'berri-uqam-yellow', tiempo: 3, linea: 'yellow', tipo: 'stm-metro' },
      { slug: 'longueuil-universite-de-sherbrooke', tiempo: 3, linea: 'yellow', tipo: 'stm-metro' },
    ],
  },
  'longueuil-universite-de-sherbrooke': {
    ciudad: 'montreal',
    nombre: 'Longueuil Universite De Sherbrooke',
    lineas: ["yellow"],
    adyacentes: [
      { slug: 'jean-drapeau', tiempo: 3, linea: 'yellow', tipo: 'stm-metro' },
    ],
  },
};
