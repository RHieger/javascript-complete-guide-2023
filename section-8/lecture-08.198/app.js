/**
 * 
 * Lecture 8.198: Where Arrow Functions Shine!
 * 
 * Robert Hieger
 * 12/25/2022
 * 
 * Objective: Refactor prices.filter() to take further
 * advantage of the arrow function as follows:
 * 
 * 1) Pass only the relevant argument to the function
 * (in this case, price).
 * 
 * 2) Since there is only one argument, remove the
 * parentheses and dispense with the curly braces,
 * which are no longer necessary.
 * 
 */

const prices = [
  10.99, 5.99, 3.99, 6.59
];

console.log('\n\n\tDEMO OF filter() METHOD:');
console.log('\t-----------------------\n');

console.log('\nContents of prices[]:');
console.table(prices);

// Perform filter() operation to produce filteredArray[]:

const filteredArray = prices
  .filter( (price, index, prices) => {
  return price > 6;
});

// Log new filteredArray[] to console:
console.log(
  '\nCreate filteredArray[] Using filter() Method:'
);

console.table(filteredArray);
