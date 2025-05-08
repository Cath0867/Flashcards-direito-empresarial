// Lista de flashcards - perguntas e respostas
const flashcards = [
    { question: "O que é a personalidade jurídica?", answer: "É a capacidade de uma pessoa ser sujeito de direitos e obrigações." },
    { question: "Quando inicia a personalidade da pessoa física?", answer: "A personalidade da pessoa física inicia com o nascimento com vida." },
    { question: "Quando inicia a personalidade da pessoa jurídica?", answer: "A personalidade jurídica começa com o registro do ato constitutivo." },
    { question: "O nascido tem direitos? Cite um exemplo.", answer: "Sim, o nascido tem direitos, como o direito à herança." },
    { question: "Quando é extinta a personalidade jurídica da pessoa física?", answer: "Quando ocorre o falecimento da pessoa." },
    { question: "O que é a desconsideração da personalidade jurídica?", answer: "É a forma de ignorar a personalidade jurídica para responsabilizar seus sócios ou administradores." },
    { question: "O que é a desconsideração da personalidade jurídica direta?", answer: "É quando se desconsidera a personalidade jurídica para atingir o patrimônio dos sócios." },
    { question: "O que é a desconsideração da personalidade jurídica inversa?", answer: "É quando a personalidade jurídica é desconsiderada para atingir o patrimônio da própria pessoa jurídica." },
    // Adicione outras perguntas conforme necessário...
];

// Função para criar os flashcards
function displayFlashcards() {
    const container = document.getElementById('flashcards-container');
    flashcards.forEach((card, index) => {
        const flashcard = document.createElement('div');
        flashcard.classList.add('flashcard');
        flashcard.innerHTML = `
            <div class="question">${card.question}</div>
            <div class="answer">${card.answer}</div>
        `;
        container.appendChild(flashcard);
    });
}

// Inicializa os flashcards
displayFlashcards();

