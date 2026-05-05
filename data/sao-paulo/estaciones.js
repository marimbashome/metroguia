export const estacionesSaoPaulo = [
  {
    slug: 'sp-se-l1',
    nombre: 'Sé',
    linea: ['L1', 'L3'],
    sistema: 'metro',
    municipio: 'São Paulo',
    pois: [
      { nombre: 'Catedral da Sé', tipo: 'turismo', distancia: '100 metros' },
      { nombre: 'Praça da Sé', tipo: 'turismo', distancia: '50 metros' },
      { nombre: 'Pateo do Colégio', tipo: 'turismo', distancia: '300 metros' }
    ],
    transferencias: ['L1', 'L3'],
    seo_title: 'Sé — Metrô São Paulo Linhas 1 e 3 | MetroGuia',
    meta_description: 'Estação Sé do Metrô de São Paulo. Transbordo Linhas 1 Azul e 3 Vermelha. Acesso à Catedral da Sé, Praça da Sé e o coração histórico de São Paulo.',
    h1: 'Estação Sé — Metrô de São Paulo',
    intro: 'O coração histórico de São Paulo: a Catedral da Sé, o Pateo do Colégio e o cruzamento das duas linhas mais movimentadas do metrô.',
    tips: ['A Catedral tem acesso gratuito e torre com vista panorâmica', 'A Praça da Sé é ponto de encontro e eventos culturais', 'O Pateo do Colégio marca o local de fundação de São Paulo em 1554'],
    descripcion_turistica: 'A estação Sé é o centro geográfico e simbólico de São Paulo. A Catedral Metropolitana, inaugurada em 1954 após décadas de construção, é um dos maiores templos neogóticos do mundo com capacidade para 8.000 fiéis. A Praça da Sé, com seu obelisco e chafariz, é o km 0 do Brasil — o ponto a partir do qual se medem as distâncias no país. O Pateo do Colégio, onde jesuítas fundaram São Paulo em 25 de janeiro de 1554, guarda a história das origens da maior metrópole da América do Sul.',
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true },
    horarios: { apertura: '04:40', cierre: '00:00', notas: 'Todos os dias 04:40–00:00. Tarifa: R$ 5,00 (Bilhete Único)' },
    lugares_cercanos: [
      { nombre: 'Catedral da Sé', tipo: 'Religioso', distancia: '100 metros', descripcion: 'A maior catedral neogótica da América Latina. Visita gratuita.' },
      { nombre: 'Pateo do Colégio', tipo: 'Histórico', distancia: '300 metros', descripcion: 'Local de fundação de São Paulo em 1554 pelos jesuítas.' },
      { nombre: 'Mercado Municipal', tipo: 'Gastronomía', distancia: '700 metros', descripcion: 'O famoso Mercadão, com o inigualável sanduíche de mortadela.' }
    ]
  },
  {
    slug: 'sp-liberdade-l1',
    nombre: 'Liberdade',
    linea: ['L1', 'L3'],
    sistema: 'metro',
    municipio: 'São Paulo',
    pois: [
      { nombre: 'Bairro da Liberdade', tipo: 'turismo', distancia: 'na estação' },
      { nombre: 'Feira da Liberdade', tipo: 'turismo', distancia: '200 metros' },
      { nombre: 'Museu da Imigração Japonesa', tipo: 'cultura', distancia: '300 metros' }
    ],
    transferencias: ['L3'],
    seo_title: 'Liberdade — Metrô São Paulo | Bairro Japonês | MetroGuia',
    meta_description: 'Estação Liberdade do Metrô de São Paulo. Porta de entrada do maior bairro japonês fora do Japão. Feira da Liberdade aos domingos e gastronomia asiática.',
    h1: 'Estação Liberdade — Metrô de São Paulo',
    intro: 'Bem-vindo ao maior bairro japonês fora do Japão: a Liberdade, com sua arquitetura oriental, restaurantes e a famosa Feira da Liberdade.',
    tips: ['A Feira da Liberdade funciona aos sábados e domingos na Praça da Liberdade', 'Experimentar tempurá, ramen e takoyaki autênticos a preços acessíveis', 'O Museu da Imigração Japonesa conta a história da chegada dos imigrantes ao Brasil'],
    descripcion_turistica: 'A Liberdade é o coração da comunidade japonesa em São Paulo e o maior bairro japonês fora do Japão, com mais de 1,5 milhão de nipo-brasileiros no estado. Os ornamentos vermelhos das lanternas, a arquitetura inspirada no Oriente e os letreiros em kanji criam uma atmosfera única. A Feira da Liberdade, realizada aos fins de semana, é uma explosão de sabores asiáticos: yakisoba, sushi, ramen e doces tradicionais japoneses. O Museu da Imigração Japonesa documenta a chegada dos primeiros imigrantes em 1908.',
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true },
    horarios: { apertura: '04:40', cierre: '00:00', notas: 'Todos os dias 04:40–00:00. Tarifa: R$ 5,00' },
    lugares_cercanos: [
      { nombre: 'Feira da Liberdade', tipo: 'Mercado/Gastronomia', distancia: '200 metros', descripcion: 'Feira de culinária e artesanato japonês aos fins de semana.' },
      { nombre: 'Museu da Imigração Japonesa', tipo: 'Museo', distancia: '300 metros', descripcion: 'História da imigração japonesa no Brasil desde 1908.' },
      { nombre: 'Restaurantes de ramen', tipo: 'Gastronomia', distancia: '100 metros', descripcion: 'Dezenas de restaurantes com culinária japonesa autêntica.' }
    ]
  },
  {
    slug: 'sp-trianon-masp-l1',
    nombre: 'Trianon-MASP',
    linea: ['L1', 'L2'],
    sistema: 'metro',
    municipio: 'São Paulo',
    pois: [
      { nombre: 'MASP', tipo: 'cultura', distancia: '100 metros' },
      { nombre: 'Avenida Paulista', tipo: 'turismo', distancia: 'na estação' },
      { nombre: 'Parque Trianon', tipo: 'turismo', distancia: '100 metros' }
    ],
    transferencias: ['L2'],
    seo_title: 'Trianon-MASP — Metrô São Paulo Linha 1 | MetroGuia',
    meta_description: 'Estação Trianon-MASP na Av. Paulista, São Paulo. Acesso ao MASP, o mais importante museu de arte da América Latina, e ao Parque Trianon.',
    h1: 'Estação Trianon-MASP — Metrô de São Paulo',
    intro: 'Sob a Avenida Paulista, frente ao MASP, o ícone arquitetônico e cultural que define São Paulo para o mundo.',
    tips: ['O MASP tem entrada gratuita às terças-feiras', 'Aos domingos a Av. Paulista fecha para carros e vira área de lazer e feiras', 'O Parque Trianon tem uma mata nativa preservada no centro da avenida mais famosa do Brasil'],
    descripcion_turistica: 'A estação Trianon-MASP coloca o visitante no coração cultural da maior cidade do Brasil. O MASP (Museu de Arte de São Paulo) é uma obra-prima do modernismo brasileiro da arquiteta Lina Bo Bardi: seus cavaletes de vidro suspensos sobre a Paulista são instantaneamente reconhecíveis. Sua coleção inclui obras de Raphael, Rembrandt, Monet e Portinari, tornando-o o museu de arte mais importante do hemisfério sul. Aos domingos, a Avenida Paulista fecha para veículos e se transforma em área de lazer com ciclistas, skatistas e feiras de arte.',
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true },
    horarios: { apertura: '04:40', cierre: '00:00', notas: 'Todos os dias 04:40–00:00. Tarifa: R$ 5,00' },
    lugares_cercanos: [
      { nombre: 'MASP', tipo: 'Museo', distancia: '100 metros', descripcion: 'O museu de arte mais importante da América Latina. Grátis às terças.' },
      { nombre: 'Parque Trianon', tipo: 'Parque', distancia: '100 metros', descripcion: 'Reserva de mata nativa no coração da Avenida Paulista.' },
      { nombre: 'Casa das Rosas', tipo: 'Cultura', distancia: '200 metros', descripcion: 'Espaço cultural em palacete histórico da Paulista.' }
    ]
  },
  {
    slug: 'sp-vila-madalena-l2',
    nombre: 'Vila Madalena',
    linea: ['L2'],
    sistema: 'metro',
    municipio: 'São Paulo',
    pois: [
      { nombre: 'Beco do Batman', tipo: 'turismo', distancia: '300 metros' },
      { nombre: 'Bares e baladas da Vila', tipo: 'entretenimiento', distancia: '200 metros' },
      { nombre: 'Feiras de arte e gastronomia', tipo: 'turismo', distancia: '400 metros' }
    ],
    transferencias: [],
    seo_title: 'Vila Madalena — Metrô São Paulo Linha 2 | MetroGuia',
    meta_description: 'Estação Vila Madalena, terminal da Linha 2 Verde. Beco do Batman, bares, restaurantes e a vida boêmia do bairro mais criativo de São Paulo.',
    h1: 'Estação Vila Madalena — Metrô de São Paulo',
    intro: 'O bairro mais boêmio de São Paulo: grafites, bares, galerías de arte e o Beco do Batman, o corredor de arte urbana mais fotografado do Brasil.',
    tips: ['O Beco do Batman muda constantemente com novos grafites de artistas de todo o mundo', 'Vila Madalena é famosa pela vida noturna com bares temáticos e cervejarias artesanais', 'Aos fins de semana há feiras de gastronomia e arte nos arredores'],
    descripcion_turistica: 'Vila Madalena é o bairro mais criativo e boêmio de São Paulo, reconhecido internacionalmente pela sua cena cultural e gastronômica. O Beco do Batman, uma pequena viela totalmente coberta por grafites e arte urbana de artistas renomados como Kobra, é um dos pontos mais fotografados da cidade. A Rua Wisard e a Rua Aspicuelta concentram dezenas de bares, restaurantes e cafés com personalidade única. É o destino preferido da classe criativa paulistana, misturando músicos, artistas, publicitários e turistas do mundo inteiro.',
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true },
    horarios: { apertura: '04:40', cierre: '00:00', notas: 'Todos os dias 04:40–00:00. Tarifa: R$ 5,00' },
    lugares_cercanos: [
      { nombre: 'Beco do Batman', tipo: 'Arte Urbana', distancia: '300 metros', descripcion: 'Corredor de arte urbana e grafite, atualizado constantemente.' },
      { nombre: 'Bares da Vila Madalena', tipo: 'Entretenimento', distancia: '200 metros', descripcion: 'Dezenas de bares temáticos, brewpubs e botequins.' },
      { nombre: 'Pinacoteca de SP', tipo: 'Museo', distancia: '3 km', descripcion: 'Um dos museus de arte mais importantes do Brasil, perto da Luz.' }
    ]
  },
  {
    slug: 'sp-luz-l4',
    nombre: 'Luz',
    linea: ['L1', 'L3', 'L4'],
    sistema: 'metro',
    municipio: 'São Paulo',
    pois: [
      { nombre: 'Pinacoteca do Estado', tipo: 'cultura', distancia: '200 metros' },
      { nombre: 'Estação da Luz', tipo: 'turismo', distancia: '100 metros' },
      { nombre: 'Sala São Paulo', tipo: 'cultura', distancia: '300 metros' }
    ],
    transferencias: ['L1', 'L3', 'L4'],
    seo_title: 'Luz — Metrô São Paulo Linhas 1, 3 e 4 | MetroGuia',
    meta_description: 'Estação Luz do Metrô de São Paulo. Hub de 3 linhas. Pinacoteca, Estação da Luz histórica e Sala São Paulo, a melhor sala de concertos do Brasil.',
    h1: 'Estação Luz — Metrô de São Paulo',
    intro: 'O polo cultural mais importante de São Paulo: a Pinacoteca, a Estação da Luz histórica e a Sala São Paulo, em um hub de 3 linhas de metrô.',
    tips: ['A Pinacoteca tem acesso gratuito aos sábados', 'A Estação da Luz foi restaurada e é um monumento histórico com museu', 'A Sala São Paulo tem temporada de concertos da OSESP com ingressos acessíveis'],
    descripcion_turistica: 'A estação Luz é o grande hub cultural de São Paulo, onde convergem as linhas 1, 3 e 4 do metrô. A Pinacoteca do Estado, fundada em 1905, é o museu de arte mais antigo de São Paulo com uma coleção de arte brasileira do século XIX ao contemporâneo. A histórica Estação da Luz, construída em Manchester com estrutura de ferro importada da Inglaterra, é um Patrimônio Histórico e abriga o Museu da Língua Portuguesa. A Sala São Paulo, instalada na antiga Estação Júlio Prestes, é reconhecida como uma das melhores salas de concertos da América Latina.',
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true },
    horarios: { apertura: '04:40', cierre: '00:00', notas: 'Todos os dias 04:40–00:00. Tarifa: R$ 5,00' },
    lugares_cercanos: [
      { nombre: 'Pinacoteca do Estado', tipo: 'Museo', distancia: '200 metros', descripcion: 'Arte brasileira do século XIX ao contemporâneo. Grátis aos sábados.' },
      { nombre: 'Sala São Paulo', tipo: 'Cultura', distancia: '300 metros', descripcion: 'A melhor sala de concertos da América Latina, na antiga Estação Júlio Prestes.' },
      { nombre: 'Museu da Língua Portuguesa', tipo: 'Museo', distancia: '100 metros', descripcion: 'Museu interativo sobre a língua portuguesa na Estação da Luz restaurada.' }
    ]
  },
  {
    slug: 'sp-paulista-l4',
    nombre: 'Paulista',
    linea: ['L2', 'L4'],
    sistema: 'metro',
    municipio: 'São Paulo',
    pois: [
      { nombre: 'Avenida Paulista', tipo: 'turismo', distancia: 'na estação' },
      { nombre: 'MASP', tipo: 'cultura', distancia: '500 metros' },
      { nombre: 'Shopping Paulista', tipo: 'comercio', distancia: '100 metros' }
    ],
    transferencias: ['L2'],
    seo_title: 'Paulista — Metrô São Paulo Linhas 2 e 4 | MetroGuia',
    meta_description: 'Estação Paulista do Metrô de São Paulo. Na famosa Avenida Paulista, a mais importante do Brasil. Transbordo Linhas 2 Verde e 4 Amarela.',
    h1: 'Estação Paulista — Metrô de São Paulo',
    intro: 'Na Avenida Paulista, o símbolo econômico e cultural do Brasil: bancos, museus, hotéis e a maior concentração de arte urbana da cidade.',
    tips: ['Aos domingos a Paulista vira rua de lazer com bicicletas e patins liberados', 'A estação conecta as linhas 2 e 4, tornando-a estratégica para se locomover', 'O CineMaterna, Sesc Paulista e institutos culturais estão todos aqui'],
    descripcion_turistica: 'A Avenida Paulista é a mais famosa do Brasil e a segunda mais cara do mundo em termos de metro quadrado comercial. A estação Paulista, com transbordo entre as linhas 2 Verde e 4 Amarela, coloca o visitante no centro desta avenida vibrante. Ao longo de seus 2,8 km, a Paulista concentra os maiores bancos e seguradoras do país, museus icônicos como o MASP e o Instituto Itaú Cultural, hotéis internacionais e uma das cenas gastronômicas mais diversas da cidade. É o endereço das manifestações políticas e dos shows ao ar livre.',
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true },
    horarios: { apertura: '04:40', cierre: '00:00', notas: 'Todos os dias 04:40–00:00. Tarifa: R$ 5,00' },
    lugares_cercanos: [
      { nombre: 'Instituto Itaú Cultural', tipo: 'Cultura', distancia: '200 metros', descripcion: 'Centro cultural com exposições, cinema e biblioteca especializados.' },
      { nombre: 'Sesc Paulista', tipo: 'Cultura/Lazer', distancia: '300 metros', descripcion: 'Programação cultural intensa a preços populares.' },
      { nombre: 'Shopping Frei Caneca', tipo: 'Comercio', distancia: '400 metros', descripcion: 'Shopping com cinema, restaurantes e lojas de grife.' }
    ]
  },
  {
    slug: 'sp-faria-lima-l4',
    nombre: 'Faria Lima',
    linea: ['L4'],
    sistema: 'metro',
    municipio: 'São Paulo',
    pois: [
      { nombre: 'Avenida Faria Lima', tipo: 'negocio', distancia: 'na estação' },
      { nombre: 'Shopping Iguatemi', tipo: 'comercio', distancia: '300 metros' },
      { nombre: 'Polo financeiro de SP', tipo: 'negocio', distancia: 'na zona' }
    ],
    transferencias: [],
    seo_title: 'Faria Lima — Metrô São Paulo Linha 4 | MetroGuia',
    meta_description: 'Estação Faria Lima do Metrô de São Paulo, Linha 4 Amarela. Centro financeiro de São Paulo com o Shopping Iguatemi e startups de tecnologia.',
    h1: 'Estação Faria Lima — Metrô de São Paulo',
    intro: 'O Wall Street paulistano: a concentração de bancos, fintechs e o Shopping Iguatemi na avenida financeira mais importante do Brasil.',
    tips: ['A Faria Lima concentra os principais bancos de investimento e fintechs do Brasil', 'O Shopping Iguatemi é um dos mais sofisticados da América Latina', 'Vila Olímpia, com sua vida noturna animada, está a 10 minutos a pé'],
    descripcion_turistica: 'A Avenida Brigadeiro Faria Lima é o endereço das finanças, tecnologia e negócios em São Paulo. A estação Faria Lima da Linha 4 Amarela posiciona o visitante neste moderno polo empresarial, repleto de arranha-céus espelhados de escritórios de multinacionais, bancos de investimento, fundos de private equity e startups. O Shopping Iguatemi, pioneiro no Brasil, mantém um dos perfis mais sofisticados do país. À noite e nos fins de semana, a área se transforma com restaurantes de alto nível e a animada vida noturna da Vila Olímpia.',
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true },
    horarios: { apertura: '04:40', cierre: '00:00', notas: 'Todos os dias 04:40–00:00. Tarifa: R$ 5,00' },
    lugares_cercanos: [
      { nombre: 'Shopping Iguatemi', tipo: 'Comercio', distancia: '300 metros', descripcion: 'Um dos shoppings mais luxuosos e tradicionais de São Paulo.' },
      { nombre: 'Vila Olímpia', tipo: 'Entretenimento', distancia: '700 metros', descripcion: 'Bairro com intensa vida noturna, bares e restaurantes.' },
      { nombre: 'Museu da Casa Brasileira', tipo: 'Museo', distancia: '1 km', descripcion: 'Museu de design e arquitetura brasileira em palacete histórico.' }
    ]
  }
];
