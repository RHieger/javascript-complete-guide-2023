const testResults = [1, 5.3, 1.5, 10.99, -5, 10];

console.log('testResults[] =>');
console.table(testResults);

// Create distinct copy with new memory address
// using slice()
const storedResults = testResults.slice();

console.log('Creating distinct copy of testResults[]...');

console.log('storedResults[] =>');
console.table(storedResults);

// Is storedResults[] === testResults[]
console.log(`storedResults === testResults:
${storedResults === testResults}`);

alert('WHY ARE THEY NOT EQUAL?\n-----------------------\n' +
'Arrays are reference types that store pointers to ' +
'the data they store. Therefore a true copy of an array' +
'has different memory addresses and is not exactly equal.');

// Use slice() to create a copy of a range of the elements
// in testResults:
console.log('Copying a range of values in testResults[]...');

const storedResults2 = testResults.slice(0, 2);

console.log('storedResults2[] =>');
console.table(storedResults2);

// Use slice() to create a copy of a range starting
// from a specified index to end of the array:
console.log('Copying testResults[] from index 2 to end...');

const storedResults3 = testResults.slice(2);
console.log('storedResults3[] =>');
console.table(storedResults3);

// Prove inequality of all 4 arrays
console.log(`testResults !== storedResults !== storedResults2
!== storedResults3: ${testResults !== storedResults !== storedResults2 !== storedResults3}`);
