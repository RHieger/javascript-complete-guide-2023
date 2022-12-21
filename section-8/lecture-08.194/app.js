/**
 * 
 * Lecture 8.194: Alternative to for Loops:
 * The forEach() Method
 * 
 * Robert Hieger
 * 12/19/2022
 * 
 * Objective: Demonstrate the utility of the forEach()
 * method and explore its differences from for().
 * 
 * Also, use forEach() to add tax to an array of prices.
 * 
 */

// Our new array for manipulation:
const prices = [10.99, 5.99, 3.99, 6.59];

// Tax Rate
const salesTax = 0.08875;
const taxAdjustedPrices = [];

// Log original prices[] array to console.
console.log('\n\n\tDEMO OF forEach() METHOD:');
console.log('\t------------------------\n\n');

console.table(prices);

// Log NYC Sales Tax Rate to Console:
console.log('\n\tNYC Sales Tax Rate:');
console.log('\t------------------------');
console.log(`\tSales Tax: ${salesTax}`);

// Log Base Price, Tax, and Grand Total
// to console.

// Displays base price, sales tax and grand
// total for each element in the prices array.

const displayGrandTotals = () => {
  // TBD
};
