const flashcards = [
    { question: "O que é a personalidade jurídica?", answer: "É a capacidade de uma pessoa ser sujeito de direitos e obrigações." },
    { question: "Quando inicia a personalidade da pessoa física?", answer: "A personalidade da pessoa física inicia com o nascimento com vida." },
    { question: "O nascido tem direitos? Se sim, cite um tipo de direito que ele possui.", answer: "Sim, o nascido tem direitos, como o direito à vida." },
    { question: "Quando é extinta a personalidade jurídica da pessoa física?", answer: "A personalidade jurídica da pessoa física se extingue com a morte." },
    { question: "O que é a desconsideração da personalidade jurídica?", answer: "É a medida judicial que permite alcançar bens pessoais de sócios e administradores para satisfazer dívidas da empresa." },
    { question: "O que é a desconsideração da personalidade jurídica direta e inversa?", answer: "Direta ocorre quando a personalidade jurídica da empresa é desconsiderada para alcançar os bens dos sócios. Inversa ocorre quando a personalidade jurídica dos sócios é desconsiderada para alcançar os bens da empresa." },
    { question: "O que é a teoria maior na desconsideração da personalidade jurídica? Quais são seus requisitos? Cite a previsão legal.", answer: "Teoria maior permite a desconsideração da personalidade jurídica quando há abuso da personalidade. Requisitos: confusão patrimonial, desvio de finalidade e fraude. Previsão: art. 50 do Código Civil." },
    { question: "Mudar o objeto da sociedade é considerado desvio de personalidade?", answer: "Sim, mudar o objeto da sociedade sem justificativa plausível pode ser considerado desvio de personalidade." },
    { question: "A desconsideração da personalidade jurídica também está dentro da teoria de consumo. Estamos diante da teoria maior ou menor da desconsideração?", answer: "Estamos diante da teoria maior da desconsideração da personalidade jurídica." },
    { question: "Na teoria menor, qual o requisito para ocorrer desconsideração da personalidade jurídica? Cite previsão legal.", answer: "Na teoria menor, o requisito é o abuso da personalidade. Previsão legal: art. 28 da Lei 8.884/94." },
    { question: "Na lei de crimes ambientais, a teoria é menor ou maior da desconsideração da personalidade jurídica?", answer: "Na lei de crimes ambientais, a teoria é maior." },
    { question: "A desconsideração da personalidade jurídica ocorre judicialmente ou extrajudicialmente? Cite previsão legal.", answer: "A desconsideração pode ocorrer judicialmente ou extrajudicialmente. Previsão: art. 50 do Código Civil e Lei 8.078/90." },
    { question: "Quem pode requerer a desconsideração da personalidade jurídica? Cite previsão legal.", answer: "Qualquer interessado pode requerer, inclusive o Ministério Público. Previsão legal: art. 50 do Código Civil." },
    { question: "Quem pode ser o alvo da desconsideração da personalidade jurídica? Cite previsão legal.", answer: "O alvo pode ser o sócio ou administrador. Previsão: art. 50 do Código Civil." },
    { question: "Cite dois exemplos de fonte do direito empresarial.", answer: "Exemplo 1: Constituição Federal; Exemplo 2: Código Civil Brasileiro." },
    { question: "Quais são os ramos do direito?", answer: "Os principais ramos são: Direito Constitucional, Direito Administrativo, Direito Civil, Direito Penal, entre outros." },
    { question: "O que é o princípio de liberdade de associação?", answer: "É o princípio que garante o direito de formar associações e sociedades, como empresas." },
    { question: "O que é o princípio da função social da empresa?", answer: "A empresa deve atender ao interesse coletivo e não apenas ao lucro dos sócios." },
    { question: "Quem é um empresário? Cite previsão legal.", answer: "Empresário é aquele que exerce profissionalmente atividade econômica organizada. Previsão: art. 966 do Código Civil." },
    { question: "Explique o conceito de sociedades empresariais.", answer: "Sociedade empresarial é aquela formada por pessoas que se unem para exercer atividades empresariais." },
    { question: "Cite um elemento que compõe a empresa.", answer: "Um dos elementos é o capital social." },
    { question: "Quem é o preposto? Cite uma função dele.", answer: "Preposto é a pessoa que representa a empresa em atos e contratos. Função: representar a empresa em audiências." },
    { question: "O que é direito?", answer: "Direito é o conjunto de normas que regulam a convivência entre as pessoas e a sociedade." },
    { question: "Quem são os incapazes de exercer pessoalmente os atos da vida civil?", answer: "São os menores de 16 anos, os alienados e os ébrios habituais." },
    { question: "O que é o princípio de liberdade de iniciativa?", answer: "É o direito de qualquer pessoa empreender e exercer atividades econômicas." },
    { question: "O que é o princípio de liberdade de concorrência?", answer: "É o direito de competir no mercado sem restrições indevidas." },
    { question: "O que é o princípio da inerência do risco?", answer: "É o princípio que estabelece que a atividade empresarial envolve riscos, que devem ser assumidos pelo empresário." },
    { question: "O que é o estabelecimento empresarial? Cite previsão legal.", answer: "Estabelecimento empresarial é o conjunto de bens organizados para o exercício da atividade empresarial. Previsão: art. 1.142 do Código Civil." },

    // Perguntas de análise SWOT
    { question: "O que significa SWOT?", answer: "SWOT é uma ferramenta de análise que identifica os pontos fortes (Strengths), pontos fracos (Weaknesses), oportunidades (Opportunities) e ameaças (Threats) de uma organização." },
    { question: "Quais são os pontos fortes na análise SWOT?", answer: "São as características internas de uma organização que dão vantagens competitivas no mercado." },
    { question: "Quais são os pontos fracos na análise SWOT?", answer: "São as características internas que prejudicam o desempenho de uma organização." },
    { question: "O que são oportunidades na análise SWOT?", answer: "São fatores externos que podem ser explorados pela organização para obter vantagem competitiva." },
    { question: "O que são ameaças na análise SWOT?", answer: "São fatores externos que representam riscos ou desafios para a organização." },

    // Perguntas de análise PESTEL
    { question: "O que é a análise PESTEL?", answer: "A análise PESTEL examina os fatores externos que podem impactar uma organização, como Política, Economia, Sociocultura, Tecnologia, Ecologia e Legalidade." },
    { question: "O que significa o 'P' na análise PESTEL?", answer: "O 'P' significa fatores Políticos, como a estabilidade política e as políticas públicas que afetam os negócios." },
    { question: "O que significa o 'E' na análise PESTEL?", answer: "O 'E' significa fatores Econômicos, como taxas de juros, inflação, crescimento econômico e poder de compra." },
    { question: "O que significa o 'S' na análise PESTEL?", answer: "O 'S' significa fatores Socioculturais, como as mudanças nos comportamentos, atitudes e valores da sociedade." },
    { question: "O que significa o 'T' na análise PESTEL?", answer: "O 'T' significa fatores Tecnológicos, como inovações, novos desenvolvimentos e impacto das novas tecnologias." },
    { question: "O que significa o 'E' (Ecologia) na análise PESTEL?", answer: "O 'E' refere-se aos fatores ecológicos, como leis ambientais, sustentabilidade e questões climáticas." },
    { question: "O que significa o 'L' na análise PESTEL?", answer: "O 'L' significa fatores Legais, como mudanças nas leis e regulamentações que podem impactar a operação da empresa." },
];

// Função para gerar os flashcards
function displayFlashcards() {
    const container = document.getElementById('flashcards-container');
    flashcards.forEach((card) => {
        const flashcard = document.createElement('div');
        flashcard.classList.add('flashcard');

        const flashcardInner = document.createElement('div');
        flashcardInner.classList.add('flashcard-inner');

        const front = document.createElement('div');
        front.classList.add('flashcard-front');
        front.innerHTML = `
            <div class="question">${card.question}</div>
        `;

        const back = document.createElement('div');
        back.classList.add('flashcard-back');
        back.innerHTML = `
            <div class="answer">${card.answer}</div>
        `;

        flashcardInner.appendChild(front);
        flashcardInner.appendChild(back);
        flashcard.appendChild(flashcardInner);
        container.appendChild(flashcard);
    });
}

// Exibir os flashcards assim que a página carregar
window.onload = displayFlashcards;
