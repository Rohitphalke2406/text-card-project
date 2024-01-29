function createCard() {
    var userInput = document.getElementById('userInput').value.trim();
  
    if (userInput !== '') {
      var cardContainer = document.getElementById('cardContainer');
  
      var card = document.createElement('div');
      card.classList.add('card');
      card.textContent = userInput;
  
      cardContainer.appendChild(card);
  
      // Clear the textarea after creating the card
      document.getElementById('userInput').value = '';
    } else {
      alert('Please enter some text!');
    }
  }
  