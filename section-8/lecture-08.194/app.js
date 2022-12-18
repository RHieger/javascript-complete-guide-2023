/**
 * 
 * Lecture 8.194: Alternative to for Loops:
 * The forEach() Method
 * 
 * Robert Hieger
 * 12/17/2022
 * 
 * Objective: Demonstrate the utility of the forEach()
 * method and explore its differences from for().
 * 
 * Also, use forEach() to add tax to an array of prices.
 * 
 */

// Our new array for manipulation:
const prices = [10.99, 5.99, 3.99, 6.59];

console.log('\n\n\tforEach() USE CASE DEMO:');
console.log('\t-----------------------');

// Log prices to console:
console.log('\n\tContents of prices[]:');
console.table(prices);

console.log(
  '\n\tNow we use the forEach() Loop to calculate the' +
  ' grand total including sales tax.'
);

console.log(
  '\n\tBe sure to check the code in app.js to see how ' +
  'this was accomplished.'
);

// Tax Rate:
const salesTax = 0.08875;
const taxAdjustedPrices = [];

prices.forEach( (price, idx, prices) => {
  // Create object for each grand total:
  const grandTotal = {
    index: idx,
    basePrice: price,
    taxAdjustedPrice: price * (1 + salesTax)
  };
  taxAdjustedPrices.push(grandTotal);
});

// console.log(taxAdjustedPrices);
