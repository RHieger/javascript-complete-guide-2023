const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
  console.log('Game is starting...');
}

// Object stores both property and a function
// as appears below in person() object

const person = {
  name: 'Bobby',
  greet: function() {
    console.log(`Hi, ${this.name}!`);
  }
}

// Here the greet function that is a member of
// the person() object is called. This function
// is known as a method because it occurs within
// an object. 
person.greet();

// addEventListener is a method of the document() Object.
startGameBtn.addEventListener('click', startGame);
