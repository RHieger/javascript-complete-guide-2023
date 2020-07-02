const defaultResult = 0;
let currentResult = 0;

function add(num1, num2) {
  const enteredNumber = parsInt(userInput.value);
  const calcDescription = `${currentResult} + ${enteredNumber}`
  currentResult += enteredNumber;
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);
