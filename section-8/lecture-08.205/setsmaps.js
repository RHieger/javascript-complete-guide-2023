/**
 * 
 * Lecture 8.105: Working with Sets
 * 
 * Robert Hieger
 * December 30, 2022
 * 
 * OBJECTIVE: TBD.
 * 
 */

console.log('\n\n\tDEMONSTRATE SETS:');
console.log('\t----------------\n\n');

// OBJECTIVE #1: Declare Set and Test that a value is
// contained within it.

const ids = new Set([1, 2, 3]);

console.log(
  'OBJECTIVE #1: Declare a Set and Test that a Value' +
  ' is Contained Within It\n\n'
);

console.log(ids);

console.log(`\n1 is contained in set?\t${ids.has(1)}\n\n`);

// OBJECTIVE #2: Add duplicate value to set and
// demonstrate that the duplicate value is ignored
// and not added to list.

console.log(
  'OBJECTIVE #2: Add a duplicate and show that ' +
  '\nduplicate value is ignored and not added.\n\n'
);

ids.add(2);

console.log('ADDED VALUE OF 2 T0 SET...\n');
console.log('\nHere is our ids {} Set again!\n');
console.log(ids);
console.log(
  '\nAs you can see, no duplicate value of 2 was added.\n\n'
);

// OBJECTIVE #3: View all entries of a set with the
// entries method and log to console with for...of
// loop. Demonstrate that to avoid the odd output of
// each entry being array of the value listed twice,
// it is also possible to do the for...of loop and 
// reference only the 0 index of each entry.

console.log(
  'OBJECTIVE #3: Iterate Over All Entries in' +
  ' ids {} Set Using entries Method.\n\n'
);

// Loop over all entries of ids {}

console.log('Entries in ids {} Set:\n')
for ( let entry of ids.entries() ) {
  console.log(entry);
};

console.log(
  '\nWhy is each entry comprised of the same value ' +
  '\nrepeated twice in an array? This is because the ' +
  '\nentries() method returns an array of the value of' +
  '\neach entry twice. But we can solve this by ' +
  'accessing\nonly the 0 index of each entry.\n\n' +
  'Here is a more meaningful output:\n\n'
);

console.log('Entries in ids {} Set:\n');
for (entry of ids.entries()) {
  console.log(`Entry Value: ${entry[0]}`)
};

// OBJECTIVE #4: Delete an entry using the
// delete() method.

console.log(
  '\n\nOBJECTIVE #4: Delete an Entry with delete() Method.'
);

ids.delete(3);

console.log('\nDELETED ENTRY AT INDEX 2...\n\n');
console.log('Here is our ids {} Set again!\n\n');
console.log(ids);
