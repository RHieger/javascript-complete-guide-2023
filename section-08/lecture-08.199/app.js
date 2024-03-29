/**
 * 
 * Lecture 8.199: The Important reduce() Method
 * 
 * Robert Hieger
 * 12/25/2022
 * 
 * Objective: Demonstrate the utility of the reduce
 * method and its ability to condense calculation
 * of a sum of number elements in an array.
 * 
 * Without reduce(), it would be possible to get the
 * sum of prices[] below using a for...of loop as
 * follows:
 * 
 * const sum = 0;
 * prices.forEach(price => sum+= price);
 * console.log(sum);  // expected result 27.56
 * 
 * As demonstrated herein, the reduce() method is a
 * more succinct and efficient algorithm.
 * 
 */

const prices = [
  10.99, 5.99, 3.99, 6.59
];

// Log Intro and Original Array Contents to Console.

console.log('\n\n\tDEMO OF reduce() METHOD:');
console.log('\t-----------------------\n');

console.log('\nContents of prices[] Array:');
console.table(prices);

// Demonstrate reduce() method in deriving a sum
// of all price elements in prices[].

console.log(
  '\n\n\tUse reduce() Method to Calculate Sum of prices[]:'
);

// Perform calculation:

/* NOTE: This implementation below lists all possible
   arguments to the reduce() method. However, the most
   frequently used would be previousValue and currentValue
   arguments.

   There follows the second parameter which is the start
   value for the object being created. Since we want a
   sum of the prices[] elements, we would start a 0.

   All of this works, but there is a more concise syntax
   as seen below this commented out code.

const sum = prices.reduce(
  (
    previousValue,
    currentValue,
    currentIndex,
    prices
  ) => {
    return previousValue + currentValue;
  }, 0
);
*/

const sum = prices
  .reduce(
    (previousValue, currentValue) =>
    previousValue + currentValue
  );

// Log resulting sum to console:
console.log(`\tSum of Above Prices: $${sum}`);
