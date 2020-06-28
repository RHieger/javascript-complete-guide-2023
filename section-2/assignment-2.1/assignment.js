/**
 * STEP 1: Create two variables, one for fictional user input, and
 * another to hold a result of a fictitious calculation.
 * 
 * @constant { integer } input -- fictious user entry
 * @var { integer } calculation -- result of calculation
 * 
 */

 const USER_INPUT = 29;

 let calcResult;

// STEP 2: Set result variable (calcResult) to 18 + value
// of USER_INPUT constant.

calcResult = 18 + USER_INPUT;

// STEP 3: Add 3 lines of code that change result variable
// (calcResult) by substraction, multiplication and division.

calcResult -= 2   // result = 45

calcResult *= 7;  // result is 315

calcResult /= 3;  // result is 105

// STEP 4: Did value in USER_INPUT change? NO, because it
// is a constant of primitive integer type and therefore
// not mutable.

// STEP 5: alert() result and user input variables in
// two separate alert() calls.

alert("Value of USER_INPUT is " + USER_INPUT + ".");

alert("Final value of calcResult is " + calcResult + ".");

// My added confirmation of USER_INPUT imutability:

alert(
  "CONFIRMATION THAT INITIAL VALUE OF USER_INPUT HAS NOT CHANGED: \n" +
  "-------------------------------------------------------------\n\n" +
  "Current Value of USER_INPUT: " + USER_INPUT
);
