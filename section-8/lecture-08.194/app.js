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
const tax = 0.08875;

// Log original prices[] array to console.
console.log('\n\n\tDEMO OF forEach() METHOD:');
console.log('\t------------------------\n\n');

console.table(prices);

// Log NYC Sales Tax Rate to Console:
console.log('\n\tNYC Sales Tax Rate:');
console.log('\t------------------------');
console.log(`\tSales Tax: ${tax}`);

// Log Base Price, Tax, and Grand Total
// to console.

// Array to which price taxes and total data
// will be pushed.
const taxAdjustedPrices = [];

// Displays base price, sales tax and grand
// total for each element in the prices array.
const displayPriceData = () => {
  prices.forEach( (basePrice) => {
    const priceObj = {
      price: basePrice,
      salesTax: parseFloat((basePrice * tax)
        .toFixed(2)),
      grandTotal: parseFloat( (basePrice + tax)
        .toFixed(2))
  };
    taxAdjustedPrices.push(priceObj);
  });
  console.log(taxAdjustedPrices);
};

displayPriceData();

/*
const displayGrandTotals = (idx, basePrice, tax, total) => {
  const total = basePrice + salesTax;
  const priceObject = {
    index: idx,
    price: basePrice,
    salesTax: (basePrice * tax).toFixed(2),
    grandTotal: total
  };
  prices.forEach((idx, basePrice, salesTax, grandTotal) => {
    taxAdjustedPrices.push(priceObject);
  });
  console.log(taxAdjustedPrices);
};
*/