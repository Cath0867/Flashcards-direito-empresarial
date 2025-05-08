fetch('flashcards.json')
    .then(response => response.json())
    .then(data => {
        const flashcardsContainer = document.getElementById('flashcards-container');
        data.flashcards.forEach(card => {
            const flashcardElement = document.createElement('div');
            flashcardElement.classList.add('flashcard');
            flashcardElement.innerHTML = `
                <div class="question">${card.question}</div>
                <div class="answer">${card.answer}</div>
            `;
            flashcardsContainer.appendChild(flashcardElement);
            
            // Adiciona a funcionalidade de click para girar o card
            flashcardElement.addEventListener('click', () => {
                flashcardElement.classList.toggle('clicked');
            });
        });
    })
    .catch(error => {
        console.error('Erro ao carregar os flashcards:', error);
    });
