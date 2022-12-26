/**
 * 
 * Lecture 8.202: The Spread Operator (...)
 * 
 * Robert Hieger
 * 12/26/2022
 * 
 * Objective: TBD.
 * 
 */

const nameFragments = [ 'Robert', 'Hieger' ];

// Log Intro and Original Array Contents to Console.

console.log('\n\n\tDEMONSTRATION OF spread(...) Method:');
console.log('\t------------------------------------\n');

console.log('\n\nContents of nameFragments[] Array:');
console.table(nameFragments);

// Create a copy of the nameFragments[] array using
// the spread(...) Operator:

const copiedNameFragments = [...nameFragments];

console.log(
  '\nHere is copiedNameFragments[] Created using Spread' +
  ' (...) Operator:'
);
console.table(copiedNameFragments);
