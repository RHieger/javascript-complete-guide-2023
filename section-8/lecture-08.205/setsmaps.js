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

console.log(`\n1 is contained in set?\t${ids.has(1)}`);
