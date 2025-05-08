// Função para carregar o arquivo JSON e renderizar os flashcards
fetch('flashcards.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('flashcards-container');
    data.forEach(card => {
      const flashcard = document.createElement('div');
      flashcard.classList.add('flashcard');
      
      const question = document.createElement('div');
      question.classList.add('question');
      question.textContent = card.question;
      
      const answer = document.createElement('div');
      answer.classList.add('answer');
      answer.textContent = card.answer;
      answer.style.display = 'none'; // Começa oculto
      
      flashcard.appendChild(question);
      flashcard.appendChild(answer);
      
      flashcard.addEventListener('click', () => {
        // Alterna a exibição da resposta ao clicar
        if (answer.style.display === 'none') {
          answer.style.display = 'block';
        } else {
          answer.style.display = 'none';
        }
      });
      
      container.appendChild(flashcard);
    });
  })
  .catch(error => {
    console.error('Erro ao carregar os flashcards:', error);
  });
