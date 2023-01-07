const defaultResult = 0;
let currentResult = 0;

function add(num1, num2) {
  currentResult += parseInt(userInput.value);
  outputResult(currentResult, '');
}

addBtn.addEventListener('click', add);
