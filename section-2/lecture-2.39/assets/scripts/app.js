const defaultResult = 0;
let currentResult = 0;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function add(num1, num2) {
  const enteredNumber = getUserNumberInput();
  const calcDescription = `${currentResult} + ${enteredNumber}`
  currentResult += enteredNumber;
  outputResult(currentResult, calcDescription);
}

function subtract() {

}

function multiply() {

}

function divide() {
  
}

addBtn.addEventListener('click', add);
