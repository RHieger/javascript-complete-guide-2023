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

/* Temporarily Commented Out
console.log('\n\n\tDEMO OF filter() METHOD:');
console.log('\t-----------------------\n');

console.log('\nContents of prices[]:');
console.table(prices);

console.log('\n\tThe sort() Method:');
console.log('-----------------\n');

// Sort prices in ascending order.
// NOTE: By default, sort() will parse the values of
// an array as a string, which will produce different
// results than a numeric ascending sort.
// 
// A variant of the sort method allows the comparison
// of two values to see which is greater and reverses
// order wherever necessary, as seen in the example
// stored to sortedPrices[].
const sortedPrices = prices.sort( (a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return
  }
});

console.log('\nprices[] Array Sorted in Ascending Order:');
console.table(sortedPrices);

console.log('\n\tThe reverse() Method:');
console.log('\t--------------------\n');

const reversedArray = prices.reverse();

console.log('\tThe prices[] Array Sorted in Reverse Order:');

console.table(reversedArray);
*/