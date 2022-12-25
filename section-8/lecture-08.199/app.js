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

/* Temporarily Commented Out
console.log('\n\n\tDEMO OF filter() METHOD:');
console.log('\t-----------------------\n');
*/
