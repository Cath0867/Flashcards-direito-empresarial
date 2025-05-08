document.addEventListener('DOMContentLoaded', () => {
  fetch('flashcards.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('flashcards');
      data.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'flashcard';
        cardDiv.innerHTML = `<p>${card.question}</p>`;
        cardDiv.addEventListener('click', () => {
          if (cardDiv.classList.contains('revealed')) {
            cardDiv.innerHTML = `<p>${card.question}</p>`;
            cardDiv.classList.remove('revealed');
          } else {
            cardDiv.innerHTML = `<p>${card.answer}</p>`;
            cardDiv.classList.add('revealed');
          }
        });
        container.appendChild(cardDiv);
      });
    })
    .catch(error => {
      console.error('Erro ao carregar flashcards:', error);
      document.getElementById('flashcards').innerHTML = '<p>Erro ao carregar os flashcards.</p>';
    });
});
