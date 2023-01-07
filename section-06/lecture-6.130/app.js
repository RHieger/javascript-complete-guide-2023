const startGameBtn = document.getElementById('start-game-btn');

// function startGame() {
//   console.log('Game is starting...');
// }

// ABOVE COMMENTED OUT IN FAVOR OF THE REFACTORED
// CODE BELOW, WHICH USES AN ANONYMOUS FUNCTION:

// addEventListener is a method of the document() Object.

console.log("\nEvent Listener with Anonymous Function:\n");
console.log(`startGameBtn.addEventListener('click', function() {
  console.log("Game is starting...")
});\n`);

startGameBtn.addEventListener('click', function() {
  console.log("\nGame is starting...\n");
});
