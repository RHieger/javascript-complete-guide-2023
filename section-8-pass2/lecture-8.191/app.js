const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];

console.log('testResults[] =>');
console.table(testResults);

console.log('Find index of 1.5...');

// NOTE: If there is more than one instance of the parameter value
// in indexOf(), only the index of the first instance is returned. 
console.log(`testResults.indexOf(1.5) => ${testResults.indexOf(1.5)}`);

console.log('Find index of last instance of 1.5...');


console.log(`testResults.lastIndexOf(1.5) => ${testResults.lastIndexOf(1.5)}`);

// NOTE: indexOf() and lastIndexOf() work ONLY with
// primitive types, NOT reference types. Above we used
// values that occurred within an array. WATCH WHAT
// HAPPENS WHEN A PROPERTY OF AN OBJECT IS PASSED TO
// THESE METHODS:

const personData = [
  { name: 'Bobby', age: 58 },
  { name: 'Carl', age: 63 },
  { name: 'Bobby', age: 58 }
];

console.log('Find index of personData.indexOf( { name: \'Carl\' } )...');

// Returns -1: response indexOf() gives when it cannot find the index
console.log(`personData.indexOf( { name: 'Carl' } ) => ${personData.indexOf( { name: 'Carl' } )}`);

console.log('Find index of personData.lastIndexOf( { name: \'Bobby\' } )...');

// Returns -1: response lastIndexOf() gives when it cannot find the index
console.log(`personData.lastIndexOf( { name: 'Bobby' } ) => ${personData.lastIndexOf( { name: 'Bobby' } )}`);
