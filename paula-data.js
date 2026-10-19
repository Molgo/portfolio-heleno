/* Conteúdo de exemplo (placeholders com contexto real). Substitua textos, fotos e datas pelos dados reais. */
function ph(seed, w, h) { return "https://picsum.photos/seed/" + seed + "/" + w + "/" + h; }

window.PROFILE = {
  name: "Ana Paula",
  shortName: "Ana Paula",
  overline: "Atriz · Diretora · Preparadora de elenco",
  photo: ph("paula-retrato", 900, 1125),
  roles: ["Atriz", "Diretora teatral", "Preparadora de elenco", "Produtora cultural"],
  bio: [
    "Ana Paula é atriz e diretora com uma carreira construída no encontro entre a tradição teatral e a experimentação contemporânea. Sua presença em cena é marcada pela precisão vocal, pela escuta e por uma entrega sensível aos personagens.",
    "Ao longo dos anos, participou de montagens clássicas e de criações autorais, circulando por teatros, festivais e espaços não convencionais. Também atua na preparação de elenco, ajudando atores a construir seus papéis com consciência corporal e verdade cênica.",
    "Integra a equipe artística da Jumping Artistas, onde une criação, produção e formação de público."
  ],
  shows: [
    {
      title: "Vozes de Cena",
      meta: "Direção e atuação · 2024",
      description: "Espetáculo solo que reúne monólogos de grandes personagens femininas do teatro, do clássico ao contemporâneo.",
      slides: [
        { src: ph("paula-vozes-1", 600, 840), alt: "Cena de Vozes de Cena", tag: "Foto de cena" },
        { src: ph("paula-vozes-2", 600, 840), alt: "Cartaz de Vozes de Cena", tag: "Cartaz" },
        { src: ph("paula-vozes-3", 600, 840), alt: "Bastidores de Vozes de Cena", tag: "Bastidores" },
        { src: ph("paula-vozes-4", 600, 840), alt: "Detalhe de Vozes de Cena", tag: "Detalhe" }
      ],
      ficha: [["Direção", "Ana Paula"], ["Atuação", "Ana Paula"], ["Iluminação", "A definir"], ["Duração", "70 minutos"], ["Classificação", "12 anos"]]
    },
    {
      title: "A Casa Vazia",
      meta: "Atuação · 2020",
      description: "Drama familiar sobre memória, herança e os silêncios que atravessam gerações.",
      slides: [
        { src: ph("paula-casa-1", 600, 840), alt: "Cena de A Casa Vazia", tag: "Foto de cena" },
        { src: ph("paula-casa-2", 600, 840), alt: "Cartaz de A Casa Vazia", tag: "Cartaz" },
        { src: ph("paula-casa-3", 600, 840), alt: "Elenco de A Casa Vazia", tag: "Elenco" }
      ],
      ficha: [["Direção", "A definir"], ["Atuação", "Ana Paula"], ["Cenário", "A definir"], ["Duração", "95 minutos"], ["Classificação", "14 anos"]]
    }
  ],
  awards: [
    { year: "2024", title: "Prêmio de Melhor Atriz", detail: "Festival nacional de teatro (exemplo — substituir)." },
    { year: "2022", title: "Destaque em Preparação de Elenco", detail: "Prêmio regional das artes cênicas (exemplo — substituir)." },
    { year: "2020", title: "Menção Honrosa", detail: "Mostra de Teatro Contemporâneo (exemplo — substituir)." },
    { year: "2017", title: "Troféu Revelação", detail: "Festival de teatro independente (exemplo — substituir)." }
  ],
  gallery: [
    { title: "Vozes de Cena", cover: ph("paula-g1-cover", 800, 600), photos: [ph("paula-g1-a", 800, 600), ph("paula-g1-b", 800, 600), ph("paula-g1-c", 800, 600), ph("paula-g1-d", 800, 600), ph("paula-g1-e", 800, 600)] },
    { title: "A Casa Vazia", cover: ph("paula-g2-cover", 800, 600), photos: [ph("paula-g2-a", 800, 600), ph("paula-g2-b", 800, 600), ph("paula-g2-c", 800, 600), ph("paula-g2-d", 800, 600)] },
    { title: "Laboratório de Atores", cover: ph("paula-g3-cover", 800, 600), photos: [ph("paula-g3-a", 800, 600), ph("paula-g3-b", 800, 600), ph("paula-g3-c", 800, 600), ph("paula-g3-d", 800, 600), ph("paula-g3-e", 800, 600), ph("paula-g3-f", 800, 600)] }
  ]
};
