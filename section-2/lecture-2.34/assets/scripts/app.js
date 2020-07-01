const defaultResult = 0;
let currentResult = 0;

function add(num1, num2) {
  // Differs from instructor code: Uses shortcut notation
  currentResult += userInput.value;
  /**
   * TODO: Fix outputResult to output a string
   */
  outputResult(currentResult, '');
}

addBtn.addEventListener('click', add);

