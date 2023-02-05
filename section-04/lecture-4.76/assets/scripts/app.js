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

function writeToLog(
    operationIdentifier,
    previousResult,
    operand,
    currentResult
  ) {
    const logEntry = {
      operation: operationIdentifier,
      previousResult: previousResult,
      operand: operand,
      currentResult: currentResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);  
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;  // Value prior to calculation
  let mathOperator;  // Symbol for math operation
  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else {
    currentResult -= enteredNumber;
    mathOperator = '-';
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult('ADD');
}

function subtract() {
  calculateResult('SUBTRACT');
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;  // Value prior to calculation
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;  // Value prior to calculation
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
