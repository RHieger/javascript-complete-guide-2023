const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
  console.log('Game is starting...');
}


// addEventListener is a method of the document() Object.
startGameBtn.addEventListener('click', startGame);

console.log(`startGame() is an Object: ${typeof(startGame)}\n`);
console.log("YES, but is a function an object? See for yourself:\n");
console.dir(startGame);
