const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

const task1Btn = document.getElementById('task1');

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

task1Btn.addEventListener('click', isGreaterThanPoint7);