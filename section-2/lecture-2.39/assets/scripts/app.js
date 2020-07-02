const defaultResult = 0;
let currentResult = 0;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(
  operator,
  resultBeforeCalc,
  operand  // NOTE: instructor named this calcNumber
) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${operand}`;
  outputResult(currentResult, calcDescription);
}

function add(num1, num2) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;  // Value prior to calculation
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;  // Value prior to calculation
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply() {

}

function divide() {

}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);