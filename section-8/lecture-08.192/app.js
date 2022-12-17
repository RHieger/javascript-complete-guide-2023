/**
 * 
 * Lecture 8.192: Finding Stuff: find() & findIndex()
 * 
 * Robert Hieger
 * 12/17/2022
 * 
 * Objective: As discussed in Lecture 8.191, one inherint
 * limitation of both indexOf() and lastIndexOf() is that
 * they cannot handle searching of objects within an array.
 * 
 * This is because objects are reference data types—that is,
 * the object contains a reference to a memory address where
 * the object or objects are stored, not the object(s).
 * 
 * The object of this lecture is to explore two methods—
 * find() and findIndex() to show methods of finding the
 * address of objects.
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
