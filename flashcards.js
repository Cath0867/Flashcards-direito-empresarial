// Carregar o JSON com as perguntas e respostas
fetch('flashcards.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('flashcards-container');

        data.forEach(card => {
            const flashcard = document.createElement('div');
            flashcard.classList.add('flashcard');
            
            const question = document.createElement('div');
            question.classList.add('question');
            question.innerText = card.pergunta;
            
            const answer = document.createElement('div');
            answer.classList.add('answer');
            answer.innerText = card.resposta;

            flashcard.appendChild(question);
            flashcard.appendChild(answer);

            flashcard.addEventListener('click', () => {
                flashcard.classList.toggle('flipped');
            });

            container.appendChild(flashcard);
        });
    })
    .catch(error => console.log('Erro ao carregar os flashcards:', error));
