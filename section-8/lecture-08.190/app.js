/**
 * 
 * Lecture 8.190: Adding Arrays to Arrays with concat()
 * 
 * Robert Hieger
 * 12/16/2022
 * 
 * Objective: Demonstrate the concat() Method and
 * its utility in manipulating Arrays.
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
