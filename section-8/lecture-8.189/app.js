const testResults = [1, 5.3, 1.5, 10.99, -5, 10];

// slice() with no parameters returns entire array.
console.log('testResults[] => ', testResults.slice());

// Because arrays are reference types, setting the value
// of another constant to the contents of this array does
// not create a new array, but a pointer to the existing
// one. Therefore, if anything is pushed or popped from
// the "new" array, the change is reflected in both
// constants--the original and the new one.

const storedResults = testResults;

console.log('testResults[] => ', testResults);
console.log('storedResults[] => ', storedResults);

console.log('Adding an element to testResults[]...');
testResults.push(5.91);  // this value will be added to both constants
console.log('testResults[] => ', testResults);
console.log('storedResults[] => ', storedResults);

console.log('Deleting last element in testResults[]...');
testResults.pop();
console.log('testResults[] => ', testResults);
console.log('storedRewsults[] => ', storedResults);

console.log('Making a copy of testResults[]...');
const storedResults2 = testResults.slice();
console.log('testResults[] => ', testResults);
console.log('storedResults2[] => ', storedResults2);

console.log('Adding an element to testResults[] ONLY...');
testResults.push(5.91);
console.log('testResults[] => ', testResults);
console.log('storedResults2[] => ', storedResults2);

console.log('Making a copy of part of testResults[]...');
const storedResults3 = testResults.slice(0, 2);
console.log('testResults[] => ', testResults);
console.log('storedResults3[] => ', storedResults3);

console.log('Making a copy of all elements from testResults[2]...');
const storedResults4 = testResults.slice(2);
console.log('testResults[] => ', testResults);
console.log('storedResults4[] => ', storedResults4);
