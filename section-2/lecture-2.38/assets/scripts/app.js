const defaultResult = 0;
let currentResult = 0;

function add(num1, num2) {
  const calcDescription = `${currentResult} + ${userInput.value}`
  currentResult += parseInt(userInput.value);
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);
