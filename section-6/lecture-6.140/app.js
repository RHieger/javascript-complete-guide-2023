const calculate = (resultHandler,  operation, ...numbers) => {
  const validateNumber= (number) => {
    return isNaN(number) ? 0 : number;
  };
  let returnValue = 0;
  for (const number of numbers) {
    if (operation === "ADD") {
      returnValue += validateNumber(number);
    } else {
      returnValue -= validateNumber(number);
    }
  }
  resultHandler(returnValue);
};

/* Commented out for reusable code of calculate()
// NOTE: This function has no callback function implemented yet.
const getDifference = (resultHandler, ...numbers) =>  {
  let difference = 0;
  for (const number of numbers) {
    difference -= number; 
  }
  resultHandler(difference);
};
*/
const showResult = (messageText, result) => {
  alert(
    messageText + result
  );
};

 calculate(showResult.bind(
   this, "The SUM of all numbers passed to calculate():\n"),
   "ADD", 5, 7, 10, -27, 'my text',14, 36, -2, 22, 96, -30
  );
 calculate(showResult.bind(
   this, "The DIFFERENCE of all numbers passed to calculate():\n"),
   "SUBTRACT", 5, 7, -13, -5, 12, -17);
