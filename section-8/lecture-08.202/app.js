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

console.log('\nUSE CASE #2: Making a Deep Clone of an Array:')

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

// OBJECTIVE #3: Use spread operator in conjunction with Math.min()
// to pull the elements from numbers[] as individual values, which
// are the only allowed data type for Math.min(). These elements are
// then analyzed my Math.min() and the smallest number is returned. 

const numbers = [10.99, 5.99, 3.99, 6.59];

console.log(
  '\nUSE CASE #3: Using the Spread Operator to Find the ' +
  'Lowest Value:'
);

console.log('\nRemember our numbers[] Array below?\n');
console.table(numbers);

console.log(
  '\nLet\'s use the spread operator to get the ' +
  'lowest value in numbers[]:'
);

console.log(`\nLowest Value in numbers[]: ${Math.min(...numbers)}\n`);

// Instructional Message:
console.log(
  '\n\n☞ NOTE: Due to length of output, scroll up or ' + 
  'down to view the\n\t\tfull sequence of events.'
);
