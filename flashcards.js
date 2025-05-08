document.addEventListener("DOMContentLoaded", () => {
  fetch('flashcards.json')
    .then(response => response.json())
    .then(data => {
      const flashcardsContainer = document.getElementById("flashcards-container");

      data.forEach(card => {
        const flashcard = document.createElement('div');
        flashcard.classList.add('flashcard');

        flashcard.innerHTML = `
          <div class="card-inner">
            <div class="card-front">
              <p>${card.question}</p>
            </div>
            <div class="card-back">
              <p>${card.answer}</p>
            </div>
          </div>
        `;

        flashcard.addEventListener("click", () => {
          flashcard.classList.toggle("flipped");
        });

        flashcardsContainer.appendChild(flashcard);
      });
    });
});
