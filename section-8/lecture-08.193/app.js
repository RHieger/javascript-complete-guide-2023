/**
 * 
 * Lecture 8.193: Is it Included?
 * 
 * Robert Hieger
 * 12/17/2022
 * 
 * Objective: Demonstrate the use of the included() method,
 * which searches an array to see if a specified value is
 * included within it. The function returns true or false,
 * but does not return the object itself.
 * 
 */

// testResults revisited:
const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];

console.log('\n\n\tDEMONSTRATION OF THE includes() METHOD:');
console.log('\t--------------------------------------');

console.log('\n\tLet\'s revisit the testResults[] Array:');
console.log('\t', testResults);

console.log(
  '\n\tNow let\'s test to see whether 10.99 is included' +
  ' in the elements of testResults[]:'
);

const elementIsPresent = testResults.includes(10.99);

console.log('\n\t10.99 is included: ', elementIsPresent);
