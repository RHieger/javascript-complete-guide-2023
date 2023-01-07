// Produces random number between 0 (including) and 1 (excluding)
const randomNumber = Math.random();

const task1Btn = document.getElementById('task1');
const task2Btn = document.getElementById('task2');
const task3Btn = document.getElementById('task3');
const task4Btn = document.getElementById('task4');

const numbers = [
  25,
  71,
  103,
  26,
  94,
  1000,
  157,
  356,
  -7,
  58
];

// STEP 1: Above is a variable that holds a random number between 0 and 1.
// Write code that shows an alert (with any message) when that number is
// greater than 0.7.

function isGreaterThanPoint7() {
  if (randomNumber > 0.7) {
    alert(`Random Number = ${randomNumber}
\n------------------------------\n
This is greater than 0.7.`);
  } else {
    alert(`Random Number = ${randomNumber}
\n------------------------------\n
This is not greater than 0.7.`);
  }
}

// STEP 2: Create an array of numbers (any numbers of your choice) and
// loop through the array in two different ways - outputting the numbers
// inside of the loop.

function arrayLoop() {
  console.log(`PASS #1 (Original Order):\n------------------------\n`);
  let i = 0;
  numbers.forEach(element => {
    console.log(`Element #${i} => ${element}`);
    i++;
  });
  console.log(`\nPASS #2 (Ascending Sort Order):
------------------------------\n`);
  let j = 0;
  const sortNums = numbers.sort( (a, b) => a-b );
  sortNums.forEach(element => {
    console.log(`Element #${j} => ${element}`);
    j++;
  });
}

// STEP 3: Adjust one of the loops from the last task such
// that it actually starts at the end (last element) of the
//array and loops to the first element. (As I wanted to
// preserve the loops from Step 3, I created a new
// loop that satisfies the requirements.

function reverseArrayLoop() {
  let k = 0;
  console.log('Reverse Sort of numbers[]:\n' +
  '--------------------------\n');
  const newArray = numbers.sort( (a, b) => b-a);
  newArray.forEach(element => {
    console.log(`Element #${k} => ${element}`);
    k++;
  });
}

// Create another random number (in a separate constant) and
// show an alert in two different scenarios: Both are greater
// 0.7 OR at least one of the two is NOT greater than 0.2.

function randomNumberDuo() {
  const newRandom = Math.random();

  if (randomNumber > 0.7 && newRandom > 0.7) {
    alert(`randomNumber = ${randomNumber}\nnewRandom = ${newRandom}\n
------------------------------
both randomNumber and newRandom are > 0.7!`);
  } else if (randomNumber <= 0.2) {
    alert(`randomNumber = ${randomNumber}\nnewRandom = ${newRandom}\n
------------------------------
randomNumber is <= 0.2`);
  } else if (newRandom <= 0.2) {
    alert(`randomNumber = ${randomNumber}\nnewRandom = ${newRandom}\n
------------------------------
newRandom <= 0.2`);
  }
}

task1Btn.addEventListener('click', isGreaterThanPoint7);
task2Btn.addEventListener('click', arrayLoop);
task3Btn.addEventListener('click', reverseArrayLoop);
task4Btn.addEventListener('click', randomNumberDuo);
