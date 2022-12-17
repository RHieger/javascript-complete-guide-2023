/**
 * 
 * Lecture 8.191: Retrieving Indexes with indexOf()
 * and lastIndex()
 * 
 * Robert Hieger
 * 12/16/2022
 * 
 * Objective: Demonstrate the use of indexOf() and
 * lastIndex() to find the index of array elements.
 * 
 */

const testResults = [1, 5.3, 1.5, 10.99, -5, 10];

// Display original testResults Array.
console.log('\n\n\tDemonstrate cat() Method:');
console.log('\t------------------------\n\n');

console.log('\tOriginal testResults[] Array:')
console.log('\t', testResults);

// concat() storedResults with newElements[]
// NOTE: Instructor passed the array object literal to
// the concat() method, which certainly works. For myself,
// I prefer the specifity provided by identifying
// explicitly what is being concatenated.
const newElements = [3.99, 2];

const storedResults = testResults.concat(newElements);

// Log resulting storedResults[] to console.
console.log('\n\tContents of newElements[] Array:');
console.log('\t', newElements);

console.log(
  '\n\tUse concat() to concatenate newElements[]\n' +
  ' to testResults and save the new Array as storedResults[]:'
);

console.log('\n\tContents of new storedResults[] Array:');
console.log('\t', storedResults);
