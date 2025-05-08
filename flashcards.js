const flashcards = [
    { question: "O que é a personalidade jurídica?", answer: "A personalidade jurídica é a capacidade que a pessoa tem de adquirir direitos e deveres." },
    { question: "Quando é iniciada a personalidade da pessoa física e jurídica?", answer: "A personalidade da pessoa física começa ao nascer com vida e da pessoa jurídica ao ser registrada." },
    { question: "O nascido tem direitos?", answer: "Sim, ele tem direitos, como o direito à herança, se nascer com vida." },
    { question: "Quando é extinta a personalidade jurídica da pessoa física?", answer: "A personalidade jurídica da pessoa física é extinta com a morte." },
    { question: "O que é a desconsideração da personalidade jurídica?", answer: "É o processo jurídico que permite que a proteção da personalidade jurídica seja ignorada para responsabilizar os sócios de uma empresa." },
    { question: "O que é a desconsideração da personalidade jurídica direta e inversa?", answer: "A desconsideração direta busca atingir o patrimônio da pessoa jurídica, enquanto a inversa busca atingir os sócios." },
    { question: "O que é a teoria maior na desconsideração da personalidade jurídica?", answer: "É a teoria que considera que a desconsideração pode ser aplicada para alcançar os sócios, mesmo que não haja abuso da personalidade jurídica." },
    { question: "Quais são os requisitos da desconsideração da personalidade jurídica?", answer: "Abuso da personalidade jurídica e confusão patrimonial." },
    { question: "Cite a previsão legal da desconsideração da personalidade jurídica.", answer: "Código Civil Brasileiro, Art. 50." },
    { question: "Mudar o objeto da sociedade é considerado desvio de personalidade?", answer: "Sim, pode ser considerado desvio de personalidade." },
    { question: "A desconsideração da personalidade jurídica também está dentro da teoria de consumo. Estamos diante da teoria maior ou menor?", answer: "Teoria menor." },
    { question: "Na teoria menor, qual o requisito para ocorrer desconsideração da personalidade jurídica?", answer: "O requisito é o abuso da personalidade jurídica." },
    { question: "Cite a previsão legal da desconsideração da personalidade jurídica na teoria menor.", answer: "Código Civil, Art. 50." },
    { question: "Na lei de crimes ambientais, a teoria é menor ou maior da desconsideração da personalidade jurídica?", answer: "Teoria maior." },
    { question: "A desconsideração da personalidade jurídica ocorre judicialmente ou extrajudicialmente?", answer: "A desconsideração ocorre judicialmente." },
    { question: "Quem pode requerer a desconsideração da personalidade jurídica?", answer: "O Ministério Público ou qualquer interessado." },
    { question: "Quem pode ser o alvo da desconsideração da personalidade jurídica?", answer: "Os sócios ou administradores da pessoa jurídica." },
    { question: "Cite dois exemplos de fontes do direito empresarial.", answer: "Leis e jurisprudência." },
    { question: "Quais são os ramos do direito?", answer: "Direito Civil, Direito Penal, Direito Empresarial, entre outros." },
    { question: "O que é o princípio de liberdade de associação?", answer: "É o princípio que garante a liberdade para constituir sociedades." },
    { question: "O que é o princípio da função social da empresa?", answer: "É o princípio que exige que a empresa cumpra uma função que beneficie a sociedade." },
    { question: "Quem é um empresário?", answer: "É a pessoa que exerce profissionalmente atividade econômica organizada para a produção ou circulação de bens ou serviços." },
    { question: "Cite previsão legal de quem é um empresário.", answer: "Código Civil, Art. 966." },
    { question: "Explique o conceito de sociedades empresariais.", answer: "Sociedades empresariais são aquelas que têm por objetivo o exercício de atividade econômica organizada." },
    { question: "Cite um elemento que compõe a empresa.", answer: "Capital social." },
    { question: "Quem é o preposto?", answer: "O preposto é a pessoa que representa a empresa em determinadas situações." },
    { question: "Cite uma função do preposto.", answer: "Representar a empresa em processos judiciais ou administrativos." },
    { question: "O que é direito?", answer: "É o conjunto de normas que regulam as relações sociais." },
    { question: "Quem são os incapazes de exercer pessoalmente os atos da vida civil?", answer: "Menores de idade, pessoas com deficiência mental, entre outros." },
    { question: "O que é o princípio de liberdade de iniciativa?", answer: "É o princípio que assegura o direito de livre iniciativa no exercício de atividades empresariais." },
    { question: "O que é o princípio de liberdade de concorrência?", answer: "É o princípio que assegura a livre concorrência entre os agentes econômicos." },
    { question: "O que é o princípio da inerência do risco?", answer: "É o princípio que estabelece que a atividade empresarial implica a assunção de riscos." },
    { question: "O que é o estabelecimento empresarial?", answer: "É o conjunto de bens organizados para o exercício da atividade empresarial." },
    { question: "Cite previsão legal do estabelecimento empresarial.", answer: "Código Civil, Art. 1.142." }
    // Adicione as 5 perguntas restantes
];

// Função para criar e exibir os flashcards
function createFlashcards() {
    const container = document.getElementById('flashcards-container');
    flashcards.forEach((card, index) => {
        const flashcard = document.createElement('div');
        flashcard.classList.add('flashcard');
        flashcard.innerHTML = `
            <div class="flashcard-content">
                <p class="question">${card.question}</p>
                <p class="answer">${card.answer}</p>
            </div>
        `;
        container.appendChild(flashcard);

        flashcard.addEventListener('click', () => {
            flashcard.classList.toggle('flipped');
        });
    });
}

// Chama a função para criar os flashcards quando a página carregar
window.onload = createFlashcards;
