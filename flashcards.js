fetch("flashcards.json")
  .then((response) => response.json())
  .then((cards) => {
    const container = document.getElementById("flashcard-container");

    cards.forEach((card) => {
      const cardElement = document.createElement("div");
      cardElement.className = "card";
      cardElement.innerHTML = `
        <div class="card-inner">
          <div class="card-front">${card.pergunta}</div>
          <div class="card-back">${card.resposta}</div>
        </div>
      `;
      container.appendChild(cardElement);
    });
  });
