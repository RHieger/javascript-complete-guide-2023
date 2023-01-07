const defaultResult = 0;
let currentResult = 0;

function add(num1, num2) {
  const result = num1 + num2;
  alert(`${num1} + ${num2} = ${result}`);
}

add(1, 2);
add(5, 5);

// Expected return value: 14
currentResult = (currentResult + 10) * 3 / 2 - 1;

// Expected value is stringified version of above calculation. Due
let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);
