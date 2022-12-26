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

const data = 'new york;10.99;2000';

// Log Intro and Original Array Contents to Console.

console.log('\n\n\tDEMONSTRATION OF split() AND join():');
console.log('\t------------------------------------\n');

console.log(`\n\tValue of data String: '${data}'\n`);

// Demonstrate the split() Method:
// NOTE: The split() method is a String method, not
// an array method.

// It takes an argument of separator between desired
// elements, in this case, semicolon. There is an
// optional argument that specifies a limit on the
// number of array elements returned.

const transformedData = data.split(';');

console.log(
  '\n\nDemonstration of split() Method (String Function):'
);
console.log(
  '-------------------------------------------------\n'
);

// Log new transformedData[] to console:
console.log('\ndata Transformed Into transformedData[]:')
console.table(transformedData);

// Demonstrate the join() Method:

const person = [ 'Robert', 'Hieger' ];

// NOTE: The join() method is an Array method, unlike its
// mirror image, the split() method.

console.log('\nDemonstration of the join() Method (Array Function):')
console.log('--------------------------------------------------\n\n');

console.log('Contents of person[] Array:');
console.table(person);

const transformedPerson = person.join(' ');

console.log(
  `\n\tValue of Transformed person[] Array: '${transformedPerson}'\n`
);
