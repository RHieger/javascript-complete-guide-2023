const defaultResult = 0;
let currentResult = 0;

function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

// Expected return value: 3
currentResult = add(1, 2);

// Expected value is stringified version of above calculation.
let calculationDescription = `( ${defaultResult} + (1 + 2) )`;

outputResult(currentResult, calculationDescription);
