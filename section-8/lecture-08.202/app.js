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

// Demonstrate that elements added to copiedNameFragments[]
// are not also copied to nameFragments[] as they are two
// separate objects at two different memory addresses:

console.log(
  '\nNOTE: nameFragments[] and copiedNameFragments[] ' +
  'are two distinct objects with different memory ' +
  'addresses. Now let\'s prove that! Let\'s add \'Mr.\' ' +
  'to copiedNameFragments[]!\n'
);

copiedNameFragments.push('Mr.');

console.table(copiedNameFragments);
