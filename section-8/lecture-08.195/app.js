/**
 * 
 * Lecture 8.195: Transforming Data with map()
 * 
 * Robert Hieger
 * 12/24/2022
 * 
 * Objective: Demonstrate a simpler method of achieving
 * the same results as those in Lecture 8.194 by
 * employing the map() method, which manipulates the
 * existing array and returns a new array with the
 * specified changes.
 * 
 */

// NOTE: My original intention was to create the same more
// descriptive output found in my solution to Lecture 8.194,
// but this time, converting all dollar and fractional values
// to pennies, as TA Jost suggested. Because I found it
// rather daunting to get accurate results, I have opted to
// take the simpler route until I get more lecture concepts
// under my belt.

// Our new array for manipulation:
const prices = [
  10.99, 5.99, 3.99, 6.59
];

// Tax Rate
const tax = 0.08875;

// Log original prices[] array to console.
console.log('\n\n\tDEMO OF forEach() METHOD:');
console.log('\t------------------------\n\n');

console.table(prices);

// Log NYC Sales Tax Rate to Console:
console.log('\n\tNYC Sales Tax Rate:');
console.log('\t------------------');
console.log(`\tSales Tax: ${tax}`);

// Log Base Price, Tax, and Grand Total
// to console.

// Displays base price, sales tax and grand
// total for each element in the prices array.

const priceBreakdown = prices
  .map((price, idx, prices) => {
  const priceObj = {
    index: idx,
    price: price,
    salesTax: parseFloat((price * tax)),
    taxAdjPrice: parseFloat((price * (1 + tax)))
  };
  return priceObj;
});

// Output price data
console.log('\n\tPRICE LIST:');

console.log('\t', priceBreakdown);
