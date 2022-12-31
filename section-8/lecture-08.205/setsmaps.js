/**
 * 
 * Lecture 8.105: Working with Sets
 * 
 * Robert Hieger
 * December 30, 2022
 * 
 * OBJECTIVE: TBD.
 * 
 */

console.log('\n\n\tDEMONSTRATE SETS:');
console.log('\t----------------\n\n');

// OBJECTIVE #1: Declare Set and Test that a value is
// contained within it.

const ids = new Set([1, 2, 3]);

console.log(
  'OBJECTIVE #1: Declare a Set and Test that a Value' +
  ' is Contained Within It\n\n'
);

console.log(ids);

console.log(`\n1 is contained in set?\t${ids.has(1)}\n\n`);

// OBJECTIVE #2: Add duplicate value to set and
// demonstrate that the duplicate value is ignored
// and not added to list.

console.log(
  'OBJECTIVE #2: Add a duplicate and show that ' +
  '\nduplicate value is ignored and not added.\n\n'
);

ids.add(2);

console.log('ADDED VALUE OF 2 T0 SET...\n');
console.log('\nHere is our ids {} Set again!\n');
console.log(ids);
console.log(
  '\nAs you can see, no duplicate value of 2 was added.'
);

