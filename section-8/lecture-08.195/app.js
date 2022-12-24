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

// Our new array for manipulation:
const prices = [10.99, 5.99, 3.99, 6.59];

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

// Array to which price taxes and total data
// will be pushed.
const taxAdjustedPrices = [];

// Displays base price, sales tax and grand
// total for each element in the prices array.

// NOTE: The output provided by my forEach() loop
// differs from the output provided by the instructor
// which simply output the array of price objects
// using the prices.forEach() loop.

// I have chosen to code a more elaborate output that
// includes the tax rate (in this case NYC), the base
// price, and finally, the total, all clearly labeled
// in console.log() statements.

// To do this, I used the as-yet-not-covered mathematical
// toFixed() function to assure that the resulting float
// values contained only 2 decmial places, as they would
// in a money figure.

/**
 * 
 * INSTRUCTOR'S ORIGINAL CODE:
 * 
 * prices.forEach((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  taxAdjustedPrices.push(priceObj);
});

console.log(taxAdjustedPrices);
 */

// Output price data
console.log('\n\tPRICE LIST:');
console.log('\t----------\n');

prices.forEach((price, idx, prices) => {
  const priceObj = {
    index: idx,
    price: price,
    salesTax: parseFloat((price * tax).toFixed(2)),
    taxAdjPrice: parseFloat((price * (1 + tax)).toFixed(2))
  };
  taxAdjustedPrices.push(priceObj);
  console.log(
    `\n\tBase Price:\t$${taxAdjustedPrices[idx].price}`
  );
  console.log(
    `\tSales Tax\t$${taxAdjustedPrices[idx].salesTax}`
  );
  console.log(
    `\tTotal:\t$${taxAdjustedPrices[idx].taxAdjPrice}`
  );
});
