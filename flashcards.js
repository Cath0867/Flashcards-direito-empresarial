 document.addEventListener("DOMContentLoaded", () => {
  const flashcards = [
    { pergunta: "O que é a personalidade jurídica?", resposta: "É a aptidão genérica para adquirir direitos e contrair obrigações." },
    { pergunta: "Quando se inicia a personalidade da pessoa física?", resposta: "Com o nascimento com vida." },
    { pergunta: "O nascido tem direitos? Cite um.", resposta: "Sim, como o direito à vida e à dignidade." },
    { pergunta: "Quando se extingue a personalidade da pessoa física?", resposta: "Com a morte, incluindo a morte presumida." },
    { pergunta: "O que é desconsideração da personalidade jurídica?", resposta: "É a medida judicial que afasta a separação entre a pessoa jurídica e seus sócios." },
    { pergunta: "O que é desconsideração direta e inversa da personalidade jurídica?", resposta: "Direta atinge o sócio; inversa atinge a empresa por dívida do sócio." },
    { pergunta: "O que é a teoria maior da desconsideração da personalidade jurídica?", resposta: "É a exigência de abuso da personalidade, desvio de finalidade ou confusão patrimonial." },
    { pergunta: "Quais os requisitos da teoria maior? Cite previsão legal.", resposta: "Art. 50 do Código Civil: desvio de finalidade e confusão patrimonial." },
    { pergunta: "Mudar o objeto da sociedade é considerado desvio de personalidade?", resposta: "Sim, pode caracterizar desvio de finalidade." },
    { pergunta: "No CDC aplica-se a teoria maior ou menor da desconsideração?", resposta: "A teoria menor." },
    { pergunta: "Na teoria menor, qual o requisito para desconsideração?", resposta: "Basta o prejuízo ao consumidor, mesmo sem fraude." },
    { pergunta: "Cite a previsão legal da teoria menor no CDC.", resposta: "Art. 28 do Código de Defesa do Consumidor." },
    { pergunta: "Na lei de crimes ambientais, qual teoria se aplica?", resposta: "A teoria menor da desconsideração da personalidade jurídica." },
    { pergunta: "A desconsideração ocorre judicialmente ou extrajudicialmente?", resposta: "Judicialmente. Requer decisão fundamentada." },
    { pergunta: "Quem pode requerer a desconsideração da personalidade jurídica?", resposta: "O interessado na satisfação do crédito. Art. 50 do CC." },
    { pergunta: "Quem pode ser alvo da desconsideração?", resposta: "Sócios, administradores ou a própria empresa (na inversa)." },
    { pergunta: "Cite dois exemplos de fonte do direito empresarial.", resposta: "A lei e os usos e costumes." },
    { pergunta: "Quais são os ramos do direito?", resposta: "Público, privado e social." },
    { pergunta: "O que é o princípio da liberdade de associação?", resposta: "É o direito de constituir livremente sociedades ou associações." },
    { pergunta: "O que é o princípio da função social da empresa?", resposta: "É o dever da empresa de contribuir para o bem-estar coletivo." },
    { pergunta: "Quem é um empresário? Cite previsão legal.", resposta: "Quem exerce profissionalmente atividade econômica organizada. Art. 966 do CC." },
    { pergunta: "Explique o conceito de sociedades empresariais.", resposta: "São organizações com fins lucrativos que exercem atividade empresarial." },
    { pergunta: "Cite um elemento que compõe a empresa.", resposta: "Clientela, estabelecimento, marca, entre outros." },
    { pergunta: "Quem é o preposto? Cite uma função.", resposta: "Pessoa que representa o empresário em atos negociais." },
    { pergunta: "O que é direito?", resposta: "Conjunto de normas que regulam a convivência em sociedade." },
    { pergunta: "Quem são os incapazes de exercer atos da vida civil?", resposta: "Menores, ébrios habituais, deficientes mentais, entre outros." },
    { pergunta: "O que é o princípio da liberdade de iniciativa?", resposta: "É o direito de iniciar uma atividade econômica sem intervenção estatal." },
    { pergunta: "O que é o princípio da liberdade de concorrência?", resposta: "É a garantia de competir livremente no mercado." },
    { pergunta: "O que é o princípio da inerência do risco?", resposta: "Quem exerce atividade econômica assume os riscos do negócio." },
    { pergunta: "O que é estabelecimento empresarial? Cite previsão legal.", resposta: "Conjunto de bens organizado para o exercício da empresa. Art. 1.142 do CC." },
    
    // SWOT
    { pergunta: "O que é a análise SWOT?", resposta: "É uma ferramenta para identificar forças, fraquezas, oportunidades e ameaças." },
    { pergunta: "O que significam os elementos da análise SWOT?", resposta: "Forças e fraquezas são internas; oportunidades e ameaças são externas." },
    
    // PESTEL
    { pergunta: "O que é a análise PESTEL?", resposta: "É uma ferramenta para entender fatores macroambientais: Político, Econômico, Social, Tecnológico, Ecológico e Legal." },
    { pergunta: "Cite um exemplo de fator político na análise PESTEL.", resposta: "Estabilidade governamental ou políticas públicas." },
    { pergunta: "Cite um exemplo de fator ecológico na análise PESTEL.", resposta: "Leis ambientais ou mudanças climáticas." }
  ];

  const container = document.getElementById("flashcards-container");

  flashcards.forEach(card => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "flashcard";

    const front = document.createElement("div");
    front.className = "front";
    front.textContent = card.pergunta;

    const back = document.createElement("div");
    back.className = "back";
    back.textContent = card.resposta;

    cardDiv.appendChild(front);
    cardDiv.appendChild(back);

    cardDiv.addEventListener("click", () => {
      cardDiv.classList.toggle("flipped");
    });

    container.appendChild(cardDiv);
  });
});
