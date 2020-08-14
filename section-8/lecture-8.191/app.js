const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];

console.log('testResults[] => ', testResults);

console.log('Creating copy of testResults[] with 2 new elements at the end...]');
const storedResults = testResults.concat([3.99, 2]);
console.log('testResults[] => ', testResults);
console.log('storedResults[] => ', storedResults);

// NOTE: The indexOf() method always returns the first index only
// that matches the search parameter if there is more than one
// instance of the same value.
console.log(`Index of value 1.5 => ${storedResults.indexOf(1.5)}`);

// NOTE: The lastIndexOf() method will find the last index
// of its search parameter, searching from the end of the
// array backward until it finds a match.
console.log(`Index last value instance of 1.5 => ${storedResults.lastIndexOf(1.5)}`);
