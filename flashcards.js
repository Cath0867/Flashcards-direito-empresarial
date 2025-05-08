const cards = [
  {
    question: "O que é a personalidade jurídica?",
    answer: "É a aptidão para adquirir direitos e contrair obrigações na ordem civil."
  },
  {
    question: "Quando inicia a personalidade da pessoa física e da pessoa jurídica?",
    answer: "Pessoa física: com o nascimento com vida. Pessoa jurídica: com o registro de seus atos constitutivos."
  },
  {
    question: "O nascido tem direitos? Se sim, cite um tipo de direito que ele possui.",
    answer: "Sim, como o direito à herança e à vida."
  },
  {
    question: "Quando é extinta a personalidade jurídica da pessoa física?",
    answer: "Com a morte ou declaração de ausência presumida."
  },
  {
    question: "O que é a desconsideração da personalidade jurídica?",
    answer: "É o afastamento da personalidade jurídica para atingir os bens dos sócios ou administradores, em casos de abuso."
  },
  {
    question: "O que é a desconsideração da personalidade jurídica direta e inversa?",
    answer: "Direta: atinge o patrimônio dos sócios. Inversa: atinge o patrimônio da empresa para satisfazer dívida pessoal dos sócios."
  },
  {
    question: "O que é a teoria maior na desconsideração da personalidade jurídica?",
    answer: "Exige prova de desvio de finalidade ou confusão patrimonial. É adotada pelo Código Civil."
  },
  {
    question: "Quais são os requisitos da teoria maior?",
    answer: "Abuso da personalidade, desvio de finalidade ou confusão patrimonial (art. 50 do CC)."
  },
  {
    question: "Cite a previsão legal da teoria maior.",
    answer: "Artigo 50 do Código Civil."
  },
  {
    question: "Mudar o objeto da sociedade é considerado desvio de personalidade?",
    answer: "Depende do caso. Se a mudança for para fraudar credores, pode caracterizar desvio de finalidade."
  },
  {
    question: "A desconsideração da personalidade jurídica também está dentro da teoria do consumidor?",
    answer: "Sim, e adota-se a teoria menor."
  },
  {
    question: "Na teoria menor, qual o requisito para ocorrer desconsideração?",
    answer: "Basta o prejuízo ao consumidor, independentemente de fraude (art. 28 do CDC)."
  },
  {
    question: "Cite previsão legal da teoria menor.",
    answer: "Artigo 28 do Código de Defesa do Consumidor."
  },
  {
    question: "Na lei de crimes ambientais, a teoria é menor ou maior da desconsideração?",
    answer: "Teoria menor, conforme art. 4º da Lei 9.605/98."
  },
  {
    question: "A desconsideração da personalidade jurídica ocorre judicialmente ou extrajudicialmente?",
    answer: "Somente judicialmente, com contraditório e ampla defesa (CPC, art. 133)."
  },
  {
    question: "Quem pode requerer a desconsideração da personalidade jurídica?",
    answer: "Qualquer parte interessada ou o Ministério Público, se couber."
  },
  {
    question: "Quem pode ser o alvo da desconsideração da personalidade jurídica?",
    answer: "Sócios, administradores ou terceiros que se beneficiem do abuso de personalidade."
  },
  {
    question: "Cite dois exemplos de fonte do direito empresarial.",
    answer: "A lei e os usos e costumes."
  },
  {
    question: "Quais são os ramos do direito?",
    answer: "Direito público, privado e social."
  },
  {
    question: "O que é o princípio de liberdade de associação?",
    answer: "É o direito de se associar ou não a uma entidade, garantido constitucionalmente."
  },
  {
    question: "O que é o princípio da função social da empresa?",
    answer: "A empresa deve atender não só ao lucro, mas também ao bem-estar da sociedade."
  },
  {
    question: "Quem é um empresário? Cite previsão legal.",
    answer: "Quem exerce profissionalmente atividade econômica organizada para produção ou circulação de bens ou serviços (art. 966, CC)."
  },
  {
    question: "Explique o conceito de sociedades empresariais.",
    answer: "São sociedades que exercem atividade empresarial com fins lucrativos."
  },
  {
    question: "Cite um elemento que compõe a empresa.",
    answer: "Clientela, ponto comercial, marca, entre outros."
  },
  {
    question: "Quem é o preposto? Cite uma função dele.",
    answer: "Pessoa autorizada a agir em nome do empresário, como um gerente."
  },
  {
    question: "O que é direito?",
    answer: "Conjunto de normas que regulam a vida em sociedade."
  },
  {
    question: "Quem são os incapazes de exercer pessoalmente os atos da vida civil?",
    answer: "Menores de 16 anos, ébrios habituais, pródigos, entre outros (art. 4º CC)."
  },
  {
    question: "O que é o princípio de liberdade de iniciativa?",
    answer: "Liberdade de empreender, garantida constitucionalmente."
  },
  {
    question: "O que é o princípio de liberdade de concorrência?",
    answer: "Direito de competir no mercado, desde que respeitadas as normas legais."
  },
  {
    question: "O que é o princípio da inerência do risco?",
    answer: "O empresário assume os riscos da atividade econômica."
  },
  {
    question: "O que é o estabelecimento empresarial? Cite previsão legal.",
    answer: "Conjunto de bens organizados para o exercício da empresa (art. 1.142, CC)."
  },
  {
    question: "O que é SWOT?",
    answer: "Análise de Forças, Fraquezas, Oportunidades e Ameaças de uma organização."
  },
  {
    question: "Quais são os elementos internos da SWOT?",
    answer: "Forças e fraquezas."
  },
  {
    question: "Quais são os elementos externos da SWOT?",
    answer: "Oportunidades e ameaças."
  },
  {
    question: "O que é análise PESTEL?",
    answer: "Avaliação de fatores Políticos, Econômicos, Sociais, Tecnológicos, Ecológicos e Legais."
  },
  {
    question: "Qual a utilidade da análise PESTEL?",
    answer: "Identificar tendências e riscos no ambiente macroeconômico que impactam a empresa."
  }
];

const container = document.getElementById("flashcards-container");

cards.forEach(card => {
  const flashcard = document.createElement("div");
  flashcard.className = "flashcard";

  const inner = document.createElement("div");
  inner.className = "inner-card";

  const front = document.createElement("div");
  front.className = "front";
  front.textContent = card.question;

  const back = document.createElement("div");
  back.className = "back";
  back.textContent = card.answer;

  inner.appendChild(front);
  inner.appendChild(back);
  flashcard.appendChild(inner);
  container.appendChild(flashcard);
});

