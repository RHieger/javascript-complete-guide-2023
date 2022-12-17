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
