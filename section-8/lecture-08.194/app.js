/**
 * 
 * Lecture 8.194: Alternative to for Loops:
 * The forEach() Method
 * 
 * Robert Hieger
 * 12/23/2022
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

// NOTE: the output provided by the displayPriceData()
// function differs from the output provided by the
// instructor, which simply output the array of price
// objects using the prices.forEach() loop.

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

/* Commented Out temporarily
const displayPriceData = () => {
  prices.forEach( (basePrice, index, salesTax) => {
    const priceObj = {
      index: index,
      basePrice: basePrice,
      salesTax: (tax * basePrice).toFixed(2),
      grandTotal: (tax + basePrice).toFixed(2)
  };
    taxAdjustedPrices.push(priceObj);
    console.log(
      `\n\tBase Price:\n\t$${taxAdjustedPrices[index].basePrice}`
    );
    console.log(
      `\tSales Tax:\n\t$${taxAdjustedPrices[index].salesTax}`
    );
    console.log(
      `\tTOTAL:\n\t$${taxAdjustedPrices[index].grandTotal}\n\n`
    );
  });
};
*/

// Output price data
console.log('\n\tPRICE LIST:');
console.log('\t----------\n');

prices.forEach((price, idx, prices) => {
  const priceObj = {
    index: idx,
    basePrice: price,
    taxRate: parseFloat((price * tax).toFixed(2)),
    taxAdjPrice: parseFloat((price * (1 + tax)).toFixed(2))
  };
  taxAdjustedPrices.push(priceObj);
});

console.table(taxAdjustedPrices);

// displayPriceData();
