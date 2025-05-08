const flashcardsData = [
  {
    pergunta: "O que é a personalidade jurídica?",
    resposta: "É a aptidão genérica para adquirir direitos e contrair obrigações na ordem civil."
  },
  {
    pergunta: "Quando se inicia a personalidade da pessoa física e da pessoa jurídica?",
    resposta: "Pessoa física: com o nascimento com vida. Pessoa jurídica: com o registro de seus atos constitutivos."
  },
  {
    pergunta: "O nascituro tem direitos? Cite um tipo de direito.",
    resposta: "Sim, direitos da personalidade, como o direito à vida e à integridade física."
  },
  {
    pergunta: "Quando é extinta a personalidade jurídica da pessoa física?",
    resposta: "Com a morte real ou presumida, conforme previsto no Código Civil."
  },
  {
    pergunta: "O que é a desconsideração da personalidade jurídica?",
    resposta: "É a medida judicial que permite atingir os bens pessoais dos sócios em caso de abuso da personalidade jurídica."
  },
  {
    pergunta: "O que é a desconsideração direta e inversa da personalidade jurídica?",
    resposta: "Direta: atinge os sócios da empresa. Inversa: atinge a empresa por dívidas dos sócios."
  },
  {
    pergunta: "O que é a teoria maior na desconsideração da personalidade jurídica?",
    resposta: "Exige prova de desvio de finalidade ou confusão patrimonial."
  },
  {
    pergunta: "Quais são os requisitos da teoria maior? Cite a previsão legal.",
    resposta: "Abuso de personalidade, desvio de finalidade ou confusão patrimonial. Art. 50 do Código Civil."
  },
  {
    pergunta: "Mudar o objeto da sociedade é considerado desvio de personalidade?",
    resposta: "Depende da intenção. Se for para fraudar terceiros, pode ser."
  },
  {
    pergunta: "Na teoria menor, qual o requisito para ocorrer desconsideração da personalidade jurídica?",
    resposta: "Basta o inadimplemento e prejuízo ao consumidor. Art. 28 do CDC."
  },
  {
    pergunta: "Na lei de crimes ambientais, aplica-se qual teoria da desconsideração?",
    resposta: "A teoria menor."
  },
  {
    pergunta: "A desconsideração ocorre judicial ou extrajudicialmente? Cite previsão legal.",
    resposta: "Judicialmente, com contraditório, conforme o CPC, art. 133 a 137."
  },
  {
    pergunta: "Quem pode requerer a desconsideração da personalidade jurídica?",
    resposta: "Qualquer parte interessada no processo. Art. 133 do CPC."
  },
  {
    pergunta: "Quem pode ser alvo da desconsideração da personalidade jurídica?",
    resposta: "Sócios, administradores ou empresa controlada."
  },
  {
    pergunta: "Cite dois exemplos de fonte do direito empresarial.",
    resposta: "Lei e jurisprudência."
  },
  {
    pergunta: "Quais são os ramos do direito?",
    resposta: "Direito público, privado e social."
  },
  {
    pergunta: "O que é o princípio de liberdade de associação?",
    resposta: "É o direito de formar e participar de associações sem interferência do Estado."
  },
  {
    pergunta: "O que é o princípio da função social da empresa?",
    resposta: "A empresa deve atender aos interesses econômicos e sociais da comunidade."
  },
  {
    pergunta: "Quem é um empresário? Cite previsão legal.",
    resposta: "Pessoa que exerce profissionalmente atividade econômica organizada. Art. 966 do Código Civil."
  },
  {
    pergunta: "Explique o conceito de sociedades empresariais.",
    resposta: "São pessoas jurídicas que exercem atividade empresarial com fins lucrativos."
  },
  {
    pergunta: "Cite um elemento que compõe a empresa.",
    resposta: "Estabelecimento empresarial."
  },
  {
    pergunta: "Quem é o preposto? Cite uma função.",
    resposta: "É o representante do empresário. Pode assinar contratos em nome da empresa."
  },
  {
    pergunta: "O que é direito?",
    resposta: "Conjunto de normas que regulam a vida em sociedade."
  },
  {
    pergunta: "Quem são os incapazes de exercer pessoalmente os atos da vida civil?",
    resposta: "Menores de 16 anos, ébrios habituais, pródigos, entre outros. Art. 3º e 4º do Código Civil."
  },
  {
    pergunta: "O que é o princípio da liberdade de iniciativa?",
    resposta: "Direito de empreender e desenvolver atividades econômicas."
  },
  {
    pergunta: "O que é o princípio da liberdade de concorrência?",
    resposta: "Direito de competir no mercado de forma leal."
  },
  {
    pergunta: "O que é o princípio da inerência do risco?",
    resposta: "Todo empresário assume os riscos da atividade econômica."
  },
  {
    pergunta: "O que é estabelecimento empresarial? Cite previsão legal.",
    resposta: "Conjunto de bens organizados para o exercício da empresa. Art. 1.142 do Código Civil."
  },
  {
    pergunta: "O que é análise SWOT?",
    resposta: "Ferramenta que avalia Forças, Fraquezas, Oportunidades e Ameaças."
  },
  {
    pergunta: "O que é análise PESTEL?",
    resposta: "Avalia fatores Políticos, Econômicos, Sociais, Tecnológicos, Ecológicos e Legais."
  },
  {
    pergunta: "Qual a importância da análise SWOT nas empresas?",
    resposta: "Ajuda no planejamento estratégico e na tomada de decisões."
  },
  {
    pergunta: "Como a análise PESTEL auxilia o ambiente de negócios?",
    resposta: "Identifica influências externas que podem afetar a empresa."
  },
  {
    pergunta: "A análise SWOT é qualitativa ou quantitativa?",
    resposta: "Geralmente é qualitativa, mas pode ter dados quantitativos."
  },
  {
    pergunta: "Dê um exemplo de oportunidade em SWOT.",
    resposta: "Abertura de um novo mercado consumidor."
  },
  {
    pergunta: "Dê um exemplo de fator ecológico em PESTEL.",
    resposta: "Políticas de sustentabilidade e impacto ambiental."
  }
];

const container = document.getElementById("flashcards-container");

flashcardsData.forEach((item) => {
  const card = document.createElement("div");
  card.className = "flashcard";

  const front = document.createElement("div");
  front.className = "flashcard-content front";
  front.innerText = item.pergunta;

  const back = document.createElement("div");
  back.className = "flashcard-content back";
  back.innerText = item.resposta;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });

  container.appendChild(card);
});
