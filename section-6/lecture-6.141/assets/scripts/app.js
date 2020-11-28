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

/* THE FOLLOWING FUNCTIONS HAVE ALL BEEN
    REFACTORED INTO THE ONE ALL-PURPOSE
    calculate() FUNCTION BELOW.

    This was accomplished creating an operator variable
    and the bind() method.

function add(num1, num2) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;  // Value prior to calculation
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
  writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;  // Value prior to calculation
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
  writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
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
*/

function calculate(operation) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;  // Value prior to calculation
  let operator;
  if (operation === "ADD") {
    currentResult += enteredNumber;
    operator = "+";
  }  else if (operation === "SUBTRACT") {
    currentResult -= enteredNumber;
    operator = "-";
  } else if (operation === "MULTIPLY") {
    currentResult *= enteredNumber;
    operator = "*";
  } else {
    currentResult /= enteredNumber;
    operator = "/";
  }
  createAndWriteOutput(operator, initialResult, enteredNumber);
  writeToLog(operation, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener(
  "click",
  calculate.bind(this, "ADD")
);
subtractBtn.addEventListener(
  "click",
  calculate.bind(this, "SUBTRACT")
);
multiplyBtn.addEventListener(
  "click",
  calculate.bind(this, "MULTIPLY")
);
divideBtn.addEventListener(
  "click",
  calculate.bind(this, "DIVIDE")
);
