/**
 * 
 * Lecture 8.191: Retrieving Indexes with indexOf()
 * and lastIndexOf()
 * 
 * Robert Hieger
 * 12/16/2022
 * 
 * Objective: Demonstrate the use of indexOf() and
 * lastIndex() to find the index of array elements.
 * 
 */

const testResults = [1, 5.3, 1.5, 10.99, -5, 10];

// Log contents of testResults to console.
console.log('\n\n\tUSING indexOf() and lastIndex():');
console.log('\t------------------------------');

console.log('\n\tContent in testResults[]:');
console.log('\t', testResults);

// Use indexOf() to find index of 1.5 in testResults.
console.log('\n\tUse indexOf() to find index of 1.5:');
console.log('\t', testResults.indexOf(1.5));
