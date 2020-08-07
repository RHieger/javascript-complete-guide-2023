const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

const task1Btn = document.getElementById('task1');
const task2Btn = document.getElementById('task2');

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

function arrayLoop() {
  console.log(`PASS #1 (Original Order):\n-----------------------\n`);
  let i = 0;
  numbers.forEach(element => {
    console.log(`Element #${i} => ${element}`);
    i++;
  });
  console.log(`PASS #2 (Descending Order Sort):\n
-----------------------------\n`);
  let j = 0;
  const reverseSortNums = numbers.sort( (a, b) => b-a );
  reverseSortNums.forEach(element => {
    console.log(`Element #${j} => ${element}`);
  });
} // STEP 2: Create an array of numbers (any numbers of your choice) and
// loop through the array in two different ways - outputting the numbers
// inside of the loop.

task1Btn.addEventListener('click', isGreaterThanPoint7);
task2Btn.addEventListener('click', arrayLoop);
