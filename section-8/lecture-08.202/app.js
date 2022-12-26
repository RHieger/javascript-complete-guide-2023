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

console.log(
  '\n\n\tDEMONSTRATE USE CASES of the spread ' +
  '(...) Operator:'
);
console.log(
  '\t--------------------------------------------------'
);

console.log(
  '\nUSE CASE #1: Making a Copy of an Array with the ' +
  '\n\t\t\t Spread (...) Operator:'
);

console.log('\n\nContents of nameFragments[] Array:');
console.table(nameFragments);

// OBJECTIVE #1: Create a copy of the nameFragments[] array
// using the spread (...) Operator:

const copiedNameFragments = [...nameFragments];

console.log(
  '\nHere is copiedNameFragments[] Created using Spread' +
  ' (...) Operator:'
);
console.table(copiedNameFragments);

// OBJECTIVE #2: Demonstrate that elements added to 
// copiedNameFragments[] are not also copied to
// nameFragments[] as they are two separate objects at
// two different memory addresses:

console.log(
  '\nNOTE: nameFragments[] and copiedNameFragments[] ' +
  'are two distinct objects\n\t  with different memory ' +
  'addresses. Now let\'s prove that! Let\'s add ' +
  '\n\t  \'Mr.\' to copiedNameFragments[]!\n'
);

copiedNameFragments.push('Mr.');

console.table(copiedNameFragments);

console.log('\nNow let\'s look at nameFragments[] Again:');
console.table(nameFragments);

console.log(
  '\n*********************************************' +
  '********************'
);
console.log(
  '\nAs you can see, changes to copiedNameFragments[] ' +
  'have absolutely\nno effect on nameFragments[]. This ' +
  'is due to the fact that both\nArrays are distinct objects ' +
  '\with separate memory addresses.'
);
console.log(
  '\n*********************************************' +
  '********************'
);

// Instructional Message:
console.log(
  '\n\n☞ NOTE: Due to length of output, scroll up or ' + 
  'down to view the\n\t\tfull sequence of events.'
);
