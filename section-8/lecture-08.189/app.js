/**
 * 
 * Lecture 8.189: Selecting Ranges &
 * Creating Copies with slice()
 * 
 * Robert Hieger
 * 12/14/2022
 * 
 * Objective: Explore the functionality of the
 * Array.slice() method. Demonstrate diferent
 * use cases for this versatile method.
 * 
 */

// First let's show what happens if we simply set
// the value of an identifier to that contained
// within our array.

const testResults = [1, 5.3, 1.5, 10.99, -5, 10];

console.log('\n\n\tValue of testResults:');
console.log('\t', testResults.slice());

// Copy testResults[] to another variable.
let storedResults = testResults;

console.log('\n\tCopy testResults to storedResults:');

console.log('\n\tValue of storedResults:');
console.log('\t', storedResults);
console.log('\n\tValue of testResults:');
console.log('\t', testResults);

console.log('\n\tAs you can see, both arrays are identical.');

storedResults.pop();

console.log(
  '\n\tNow let\'s use pop() to remove last element' + 
  ' from storedResults:');
console.log('\n\tResult of storedResults.pop():');
console.log('\t', storedResults);

console.log('\n\tNow let\'s see the value of testResults:');
console.log('\t', testResults);

console.log(
  '\n\tWAIT A MINUTE! I didn\'t touch testResults!\n' +
  'Why is it also missing the last element?'
);

console.log(
  '\n\tOh, but you did touch testResults. Remember. Arrays are ' +
  'reference values.\n\tAnything you do to storedResults effects ' +
  'testResults because they are both at the same address.'
);
console.log('\n\tslice() can be of assistance here.');

// Create bonified copy of testResults
storedResults = testResults.slice();

console.log(
  '\n\tJust made true copy of testResults using slice().'
);
console.log(
  '\n\tProof that storedResults does not share ' +
  'the same memory address as testResults:'
);
console.log('\n\tstoredResults is equal to testResults?');
console.log('\t',storedResults === testResults);

testResults.splice(2, 1);

console.log(
  '\n\tNow let\'s remove the third element from testResults.'
);
console.log(
  '\n\t...and compare storedResults with\ntestResults again...'
);

// Reveal altered testResults[]
console.log('\n\tResulting Change to testResults[]:');
console.log('\t', testResults);