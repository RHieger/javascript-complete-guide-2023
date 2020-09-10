const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];

console.log('testResults[] =>');
console.table(testResults);

console.log('Is 10.99 included in testResults[]?');
console.log(`10.99 is included in testResults[] => ${testResults.includes(10.99)}`);
