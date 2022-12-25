/**
 * 
 * Lecture 8.197: Filtering Arrays with filter()
 * 
 * Robert Hieger
 * 12/24/2022
 * 
 * Objective: Demonstrate the filter() method exposed
 * by the Array object.
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
