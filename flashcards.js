const flashcards = [
    { question: "O que é a personalidade jurídica?", answer: "A personalidade jurídica é a capacidade de uma pessoa ser titular de direitos e obrigações." },
    { question: "Quando é inicia a personalidade da pessoa física e da pessoa jurídica?", answer: "A pessoa física adquire personalidade no momento do nascimento, e a pessoa jurídica adquire com o registro do ato constitutivo." },
    { question: "O nascido tem direitos? Se sim, cite um tipo de direito que ele possui.", answer: "Sim, o nascido possui direitos, como o direito à vida e à herança." },
    { question: "Quando é extinta a personalidade jurídica da pessoa física?", answer: "A personalidade jurídica da pessoa física é extinta com a morte." },
    { question: "O que é a desconsideração da personalidade jurídica?", answer: "É a desconsideração de uma pessoa jurídica para responsabilizar diretamente seus sócios em situações de abuso." },
    { question: "O que é a desconsideração da personalidade jurídica direta e inversa?", answer: "A desconsideração direta envolve a responsabilização dos sócios pela empresa; a inversa ocorre quando se responsabiliza a empresa pelos atos dos sócios." },
    { question: "O que é a teoria maior na desconsideração da personalidade jurídica?", answer: "A teoria maior permite a desconsideração em casos de abuso da personalidade jurídica, independentemente da fraude." },
    { question: "Quais são seus requisitos? Cite a previsão legal.", answer: "Requisitos: abuso de personalidade, fraude, ou confusão patrimonial. Previsão legal: Código Civil, artigo 50." },
    { question: "Mudar o objeto da sociedade é considerado desvio de personalidade?", answer: "Sim, isso pode ser considerado um desvio de personalidade, caso o objeto seja alterado sem justificação." },
    { question: "A desconsideração da personalidade jurídica também está dentro da teoria de consumo?", answer: "Sim, especialmente em situações que envolvem relações de consumo." },
    { question: "Estamos diante da teoria maior ou menor da desconsideração?", answer: "Estamos diante da teoria maior, pois se considera a fraude ou abuso de direito." },
    { question: "Na teoria menor, qual o requisito para ocorrer desconsideração da personalidade jurídica?", answer: "Na teoria menor, é necessário comprovar a fraude ou o abuso da personalidade jurídica." },
    { question: "Cite previsão legal da desconsideração na teoria menor.", answer: "Previsão legal: Código Civil, artigo 50." },
    { question: "Na lei de crimes ambientais, a teoria é menor ou maior da desconsideração da personalidade jurídica?", answer: "A teoria adotada é a maior, pois permite desconsideração independente de fraude." },
    { question: "A desconsideração da personalidade jurídica ocorre judicialmente ou extrajudicialmente?", answer: "Pode ocorrer judicialmente, por meio de ação, ou extrajudicialmente, por acordo entre as partes." },
    { question: "Quem pode requerer a desconsideração da personalidade jurídica? Cite previsão legal.", answer: "Qualquer parte interessada pode requerer, conforme o artigo 50 do Código Civil." },
    { question: "Quem pode ser o alvo da desconsideração da personalidade jurídica? Cite previsão legal.", answer: "O alvo pode ser a própria empresa ou seus sócios, conforme o artigo 50 do Código Civil." },
    { question: "Cite dois exemplos de fonte do direito empresarial.", answer: "A legislação e os costumes são fontes do direito empresarial." },
    { question: "Quais são os ramos do direito?", answer: "Direito civil, direito penal, direito trabalhista, direito empresarial, entre outros." },
    { question: "O que é o princípio de liberdade de associação?", answer: "É a liberdade que os indivíduos têm de formar associações, incluindo sociedades empresariais." },
    { question: "O que é o princípio da função social da empresa?", answer: "O princípio de função social da empresa é o dever da empresa de colaborar com o desenvolvimento social e econômico." },
    { question: "Quem é um empresário? Cite previsão legal.", answer: "É aquele que exerce atividade econômica de forma profissional. Previsão legal: Código Civil, artigo 966." },
    { question: "Explique o conceito de sociedades empresariais.", answer: "São pessoas jurídicas que exercem atividade empresarial com o objetivo de obter lucro." },
    { question: "Cite um elemento que compõe a empresa.", answer: "O capital social é um dos elementos fundamentais para a constituição de uma empresa." },
    { question: "Quem é o preposto? Cite uma função dele.", answer: "O preposto é o representante legal da empresa. Sua função é representar a empresa em juízo ou em negociações." },
    { question: "O que é direito?", answer: "Direito é o conjunto de normas e princípios que regulam a convivência social." },
    { question: "Quem são os incapazes de exercer pessoalmente os atos da vida civil?", answer: "São os menores de idade, pessoas com deficiência mental, entre outros." },
    { question: "O que é o princípio de liberdade de iniciativa?", answer: "O princípio da liberdade de iniciativa garante aos indivíduos a liberdade para iniciar atividades econômicas." },
    { question: "O que é o princípio de liberdade de concorrência?", answer: "O princípio da liberdade de concorrência é a garantia de que todos podem competir no mercado de forma justa." },
    { question: "O que é o princípio da inerência do risco?", answer: "Esse princípio diz que todo empresário assume os riscos de sua atividade." },
    { question: "O que é o estabelecimento empresarial? Cite previsão legal.", answer: "É o local onde a empresa exerce suas atividades. Previsão legal: Código Civil, artigo 1.142." }
];

const flashcardsContainer = document.getElementById('flashcards-container');

// Função para criar os flashcards
flashcards.forEach((flashcard, index) => {
    const flashcardElement = document.createElement('div');
    flashcardElement.classList.add('flashcard');
    
    const flashcardInner = document.createElement('div');
    flashcardInner.classList.add('flashcard-inner');
    
    const flashcardFront = document.createElement('div');
    flashcardFront.classList.add('flashcard-front');
    flashcardFront.innerText = flashcard.question;
    
    const flashcardBack = document.createElement('div');
    flashcardBack.classList.add('flashcard-back');
    flashcardBack.innerText = flashcard.answer;
    
    flashcardInner.appendChild(flashcardFront);
    flashcardInner.appendChild(flashcardBack);
    
    flashcardElement.appendChild(flashcardInner);
    flashcardsContainer.appendChild(flashcardElement);
});
