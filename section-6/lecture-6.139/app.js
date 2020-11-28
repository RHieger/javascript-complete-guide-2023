const sumUp = (resultHandler, ...numbers) => {
  const validateNumber= (number) => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (const number of numbers) {
    sum += validateNumber(number);
  }
  resultHandler(sum);
};

// NOTE: This function has no callback function implemented yet.
const getDifference = (...numbers) => {
  let difference = 0;
  for (const number of numbers) {
    difference -= number;
  }
  return difference;
};

const showResult = (result) => {
  alert(`SUM of Numbers Provided: ${result}\n`);
};

 sumUp(showResult, 5, 7, 10, -27, 'my text',14, 36, -2, 22, 96, -30);
