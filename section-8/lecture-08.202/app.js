/**
 * 
 * Lecture 8.202: The Spread Operator (...)
 * 
 * Robert Hieger
 * 12/28/2022
 * 
 * Objective: Demonstrate several different use cases
 * for the spread operator (...).
 * 
 * OBJECTIVE #1: Create a copy of an array using
 * the spread operator (...).
 * 
 * OBJECTIVE #2: Demonstrate that elements added to a
 * copy of an array have no affect on the original array
 * as the arrays occupy distinct memory addresses.
 * 
 * OBJECTIVE #3: Find and output the smallest value
 * within an array of numbers using the spread operator
 * in conjunction with the Math.min() method.
 * 
 * OBJECTIVE #4: Demonstrate that copying an array of
 * objects using the spread operator (...) does not
 * copy the objects within the array as they are
 * reference values.
 * 
 * OBJECTIVE #5: Demonstrate creating a deep clone
 * of an array of objects such that the objects
 * themselves rather than solely their memory addresses,
 * are copied.
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

// OBJECTIVE #4: Demonstrate that using the spread operator to copy
// an array of objects does NOT copy the objects, because objects
// are reference values.

const people = [
  { name: 'Sam', age: 60 },
  { name: 'Jane Doe', age: 32 },
  { name: 'Joe Schmo', age: 65 }
];

console.log(
  '\nUSE CASE #4: Using the Spread Operator to Clone an ' +
  '\n\t\t\t Array of Objects:'
);

console.log('\nContents of the people[] Array:\n');

people.forEach( person => console.log(person) );

// Copy people[] array
const copiedPeople = [...people];

console.log(
  '\nHere\'s the contents of the new copiedPeople[] Array:\n'
);

copiedPeople.forEach( copiedPerson => console.log(copiedPerson) );

copiedPeople[1].name = 'Josephine Deerborn';
copiedPeople[1].age = 45;

console.log('\nLooks okay, right? But get ready for a surprise!\n');
console.log('\nLet\'s set the value of copiedPeople[1] to a new value.\n')
console.log('\nHere\'s copiedPeople once again:\n');

copiedPeople.forEach( copiedPerson => console.log(copiedPerson) );

console.log('\nNow let\'s take another look at people[]:\n');
people.forEach( person => console.log(person) );

// OBJECTIVE #5: Demonstrate Deep Clone Using map()

// Reset people array to original value:

people[1] = { name: 'Jane Doe', age: 32 };

console.log(
  '\nNOW WHAT? changing the value of the element ' +
  'at index 1\nof copiedPeople[] changes the value' +
  ' in both arrays. We\ndon\'t want that! There is a' +
  ' way out of this using the\nmap() method.\n\n'
);

console.log('First, let\'s reset the people[] array.\n\n');
console.log('Repaired people[] array:\n');
console.table(people);

const peopleCorrectedCopy = [
  ...people.map(
    person => (
      {
        name: person.name,
        age: person.age
      }
    )
  )
];

console.log('\nContents of new peopleCorrectedCopy[]:\n\n');
console.table(peopleCorrectedCopy);

console.log(
  'Now let\'s change the first element in this array!'
);

peopleCorrectedCopy[0] = {
  name: 'John Q. Public',
  age: 72
};

console.log('\nNow Let\'s see the changed array:\n');
console.table(peopleCorrectedCopy);

console.log(
  '\nNow let\'s see if the change affected the ' +
  'people[] array:\n'
);
console.table(people);

console.log(
  '\nAs you can see, there is no affect' +
  'on the people[]\narray. Bear in mind ' +
  'that this alorithm is not foolproof.\nIf ' +
  'even one element of the original array ' +
  'has an\nadditional property in its object ' +
  'it will be necessary\nto make yet more ' +
  'adjustments to make certain that a deep' +
  '\nclone is returned.\n'
);

// Instructional Message:
console.log(
  '\n\n☞ NOTE: Due to length of output, scroll up or ' + 
  'down to view the\n\t\tfull sequence of events.'
);
