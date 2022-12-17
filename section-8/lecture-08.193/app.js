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

const personData = [
  { name: 'Max' },
  { name: 'Manuel'}
];

// Log personData to Console.

console.log('\n\n\tFINDING OBJECTS IN AN ARRAY:');
console.log('\t---------------------------\n');

console.log('\n\tHere is our personData[] Array:');
console.log('\t', personData);

// find() object whose value is 'Manuel'.

const manuel = personData
  .find( (person, index, people) => {
    return person.name === 'Manuel';
  });

// Log manuel() to console.
console.log(
  '\n\tUsing the find() method, now let\'s find the object' +
  ' whose value is Manuel and log it to the console.'
);
console.log('\tObject found: ', manuel);

// Use findIndex to locate the index at which the object
// whose value is "Max" resides.
const maxIndex = personData
.findIndex( (person, index, people) => {
  return person.name === 'Max';
});

console.log(
  '\n\tNow using the findIndex() method, let\'s find the index' +
  ' for the object whose value is \'Max\' and log it to' +
  ' the console.'
);
console.log('\tIndex for Max: ', maxIndex);
