const defaultResult = 0;
let currentResult = 0;
let logEntries = [];

// Gets user input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log.
function createAndWriteOutput(
  operator,
  resultBeforeCalc,
  operand  // NOTE: instructor named this calcNumber
) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${operand}`;
  outputResult(currentResult, calcDescription);  // From vendor.js
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
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;  // Value prior to calculation
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;  // Value prior to calculation
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
