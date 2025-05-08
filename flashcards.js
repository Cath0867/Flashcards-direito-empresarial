document.addEventListener("DOMContentLoaded", function () {
    const flashcardsContainer = document.getElementById('flashcards-container');

    // Carrega o JSON com as perguntas e respostas
    fetch('flashcards.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(card => {
                const flashcard = document.createElement('div');
                flashcard.classList.add('flashcard');

                const question = document.createElement('div');
                question.classList.add('question');
                question.innerHTML = card.question;

                const answer = document.createElement('div');
                answer.classList.add('answer');
                answer.innerHTML = card.answer;

                flashcard.appendChild(question);
                flashcard.appendChild(answer);

                flashcard.addEventListener('click', () => {
                    flashcard.classList.toggle('flipped');
                });

                flashcardsContainer.appendChild(flashcard);
            });
        })
        .catch(error => console.error('Erro ao carregar os flashcards:', error));
});
