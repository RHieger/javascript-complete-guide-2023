/**
 * 
 *  OFFICIAL RULES OF ROCK PAPER SCISSORS:
 *  https://www.wrpsa.com/the-official-rules-of-rock-paper-scissors/
 * 
 */

const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "It's a draw!";
const RESULT_PLAYER_WINS = "You won!";
const RESULT_COMPUTER_WINS = "Computer won!";

let gameIsRunning = false;

const getPlayerChoice = function() {
  const selection = prompt(
    `${ ROCK }, ${ PAPER } or ${ SCISSORS }`, ""
    ).toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(
      `Invalid Choice! We chose ${ DEFAULT_USER_CHOICE } for you!`
      );
      return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function() {
  // Value used to determine computer choice:
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// Converted to Arrow Function
const getWinner = (compChoice, playerChoice) => 
  // if-if else-else block refactored as ternary statement
  compChoice === playerChoice
    ? RESULT_DRAW 
    : compChoice === ROCK && playerChoice === PAPER
    || compChoice === PAPER && playerChoice === SCISSORS
    || compChoice === SCISSORS && playerChoice === ROCK
    ? RESULT_PLAYER_WINS : RESULT_COMPUTER_WINS;
  // if (compChoice === playerChoice) {
  //   return RESULT_DRAW;
  // } else if (
  //   compChoice === ROCK && playerChoice === PAPER ||
  //   compChoice === PAPER && playerChoice === SCISSORS ||
  //   compChoice === SCISSORS && playerChoice === ROCK
  // ) {
  //   return RESULT_PLAYER_WINS;
  // } else {
  //   return RESULT_COMPUTER_WINS;
//   // }
// };

// This function was not in instructor's code. It enables
// starting a new game without reloading the page, as
// it resets the gamIsRunning boolean.
const gameReset = function() {
  gameIsRunning = false;
};

startGameBtn.addEventListener('click', function() {
  if (gameIsRunning) {
    return;
  }
  //console.log(`Player Selection: ${ selection }\n`);
  gameIsRunning = true;
  console.log("\nGame is starting...\n");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  console.log(winner, "\n");
  // As above, this function did not exist in instructor code.
  gameReset();
});
