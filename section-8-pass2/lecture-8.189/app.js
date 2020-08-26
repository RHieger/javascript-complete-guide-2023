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
