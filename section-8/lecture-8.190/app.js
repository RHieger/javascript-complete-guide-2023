const testResults = [1, 5.3, 1.5, 10.99, -5, 10];

console.log('testResults[] => ', testResults);

console.log('Creating copy of testResults[] with 2 new elements at the end...]');
const storedResults = testResults.concat([3.99, 2]);
console.log('testResults[] => ', testResults);
console.log('storedResults[] => ', storedResults);
