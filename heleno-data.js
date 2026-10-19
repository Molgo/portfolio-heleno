/* Conteúdo de exemplo (placeholders com contexto real). Substitua textos, fotos e datas pelos dados reais. */
function ph(seed, w, h) { return "https://picsum.photos/seed/" + seed + "/" + w + "/" + h; }

window.PROFILE = {
  name: "Luiz Heleno da Silva Gil",
  shortName: "Luiz Heleno",
  overline: "Ator · Diretor · Dramaturgo",
  photo: ph("heleno-retrato", 900, 1125),
  roles: ["Ator", "Diretor teatral", "Dramaturgo", "Arte-educador"],
  bio: [
    "Luiz Heleno da Silva Gil dedica sua trajetória ao teatro, transitando entre o repertório clássico e a dramaturgia contemporânea. Começou nos palcos ainda jovem, em grupos de teatro comunitário, onde descobriu a força do encontro entre atores e plateia.",
    "Ao longo de mais de duas décadas de carreira, atuou e dirigiu espetáculos que percorreram teatros, festivais e circuitos independentes, sempre com atenção ao texto, ao corpo do ator e à memória cultural que o palco é capaz de despertar.",
    "Hoje reúne a experiência de cena com a formação de novos artistas, conduzindo oficinas e processos de criação coletiva. Seus trabalhos mais recentes são desenvolvidos em parceria com a Jumping Artistas."
  ],
  shows: [
    {
      title: "O Último Ato",
      meta: "Direção e atuação · 2023",
      description: "Drama sobre um velho ator que, na noite de despedida, confronta os personagens que marcaram sua vida.",
      slides: [
        { src: ph("heleno-ultimo-1", 600, 840), alt: "Cena de O Último Ato", tag: "Foto de cena" },
        { src: ph("heleno-ultimo-2", 600, 840), alt: "Cartaz de O Último Ato", tag: "Cartaz" },
        { src: ph("heleno-ultimo-3", 600, 840), alt: "Bastidores de O Último Ato", tag: "Bastidores" },
        { src: ph("heleno-ultimo-4", 600, 840), alt: "Elenco de O Último Ato", tag: "Elenco" }
      ],
      ficha: [["Direção", "Luiz Heleno da Silva Gil"], ["Texto", "Original"], ["Elenco", "A definir"], ["Duração", "80 minutos"], ["Classificação", "14 anos"]]
    },
    {
      title: "Entre Cortinas",
      meta: "Atuação · 2019",
      description: "Comédia de costumes ambientada nos bastidores de um teatro prestes a fechar as portas.",
      slides: [
        { src: ph("heleno-cortinas-1", 600, 840), alt: "Cena de Entre Cortinas", tag: "Foto de cena" },
        { src: ph("heleno-cortinas-2", 600, 840), alt: "Cartaz de Entre Cortinas", tag: "Cartaz" },
        { src: ph("heleno-cortinas-3", 600, 840), alt: "Figurino de Entre Cortinas", tag: "Figurino" }
      ],
      ficha: [["Direção", "A definir"], ["Atuação", "Luiz Heleno da Silva Gil"], ["Cenário", "A definir"], ["Duração", "90 minutos"], ["Classificação", "Livre"]]
    }
  ],
  awards: [
    { year: "2023", title: "Prêmio de Melhor Direção", detail: "Festival regional de teatro (exemplo — substituir)." },
    { year: "2021", title: "Menção Honrosa", detail: "Mostra Nacional de Artes Cênicas (exemplo — substituir)." },
    { year: "2019", title: "Melhor Ator", detail: "Festival de teatro universitário e independente (exemplo — substituir)." },
    { year: "2016", title: "Troféu Contribuição Cultural", detail: "Homenagem da Câmara Municipal (exemplo — substituir)." }
  ],
  gallery: [
    { title: "O Último Ato", cover: ph("heleno-g1-cover", 800, 600), photos: [ph("heleno-g1-a", 800, 600), ph("heleno-g1-b", 800, 600), ph("heleno-g1-c", 800, 600), ph("heleno-g1-d", 800, 600), ph("heleno-g1-e", 800, 600), ph("heleno-g1-f", 800, 600)] },
    { title: "Entre Cortinas", cover: ph("heleno-g2-cover", 800, 600), photos: [ph("heleno-g2-a", 800, 600), ph("heleno-g2-b", 800, 600), ph("heleno-g2-c", 800, 600), ph("heleno-g2-d", 800, 600)] },
    { title: "Oficinas e Ensaios", cover: ph("heleno-g3-cover", 800, 600), photos: [ph("heleno-g3-a", 800, 600), ph("heleno-g3-b", 800, 600), ph("heleno-g3-c", 800, 600), ph("heleno-g3-d", 800, 600), ph("heleno-g3-e", 800, 600)] }
  ]
};
