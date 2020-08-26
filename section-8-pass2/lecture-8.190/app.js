const testResults = [1, 5.3, 1.5, 10.99, -5, 10];

console.log('testResults[] =>');
console.table(testResults);

console.log('Concatenating new values to store in new array...');

const storedResults = testResults.concat([3.99, 2]);

console.log('storedResults[] =>');
console.table(storedResults);
