/**
 * 
 * Lecture 8.201: Arrays & Strings--split() and join()
 * 
 * Robert Hieger
 * 12/25/2022
 * 
 * Objective: TBD
 * 
 */

const data = 'new york;10.99;2000';

// Log Intro and Original Array Contents to Console.

console.log('\n\n\tDEMONSTRATION OF split() AND join():');
console.log('\t------------------------------------\n');

console.log(`\n\tValue of data String: '${data}'\n`);

// Demonstrate the split() Method:

// NOTE: the split() method is a String method, not
// an array method.

// Argument of separator between desired elements.
// In this case, semicolon. There is an optional
// argument that specifies a limit on the number
// of array elements returned.
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
