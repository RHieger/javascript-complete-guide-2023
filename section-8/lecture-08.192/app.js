/**
 * 
 * Lecture 8.192: Finding Stuff: find() & findIndex()
 * 
 * Robert Hieger
 * 12/17/2022
 * 
 * Objective: As discussed in Lecture 8.191, one inherint
 * limitation of both indexOf() and lastIndexOf() is that
 * they cannot handle searching of objects within an array.
 * 
 * This is because objects are reference data types—that is,
 * the object contains a reference to a memory address where
 * the object or objects are stored, not the object(s).
 * 
 * The object of this lecture is to explore two methods—
 * find() and findIndex() to show methods of finding the
 * address of objects.
 * 
 */

const testResults = [1, 5.3, 1.5, 10.99, -5, 10];

// Log contents of testResults to console.
console.log('\n\n\tUSING indexOf() and lastIndex():');
console.log('\t------------------------------');

console.log('\n\tContent in testResults[]:');
console.log('\t', testResults);

// Use indexOf() to find index of 1.5 in testResults.
console.log('\n\tUse indexOf() to find index of 1.5:');
console.log('\t', testResults.indexOf(1.5));

// Demonstrate that indexOf() only returns index of
// the first match.

console.log(
  '\n\tindexOf() only returns index of first\n' +
  ' match. Watch this!'
);

// Insert value of 1.5 after 10.99 in testResults.
testResults.splice(4, 0, 1.5);

console.log('\n\tLet\'s insert 1.5 in an element after 10.99.');
console.log('\tHere\'s the edited array:');
console.log('\n\t', testResults);

console.log('\n\tNow let\'s get the index of 1.5 again:');
console.log('\tIndex of 1.5: ', testResults.indexOf(1.5));

// Demonstrate the Use of lastIndexOf():

console.log(
  '\n\tWe still get the same index of 2, but no' +
  ' index for the second instance. What to do?\n' +
  '\n\tEnter the lastIndexOf() method.'
);

console.log('\n\tIndex for Last Instance of 1.5:');
console.log(
  '\tLast Instance of 1.5: ',
  testResults.lastIndexOf(1.5)
);

console.log(
  '\n\n\tThis time lastIndexOf() searches from' +
  ' right to left and finds index 4 for the ' +
  'lastIndexOf() as no other instances occur ' +
  'after index 4.'
);
