/**
 * 
 * Lecture 8.106: Working with Maps
 * 
 * Robert Hieger
 * December 31, 2022
 * 
 * OBJECTIVE: TBD.
 * 
 */

console.log('\n\n\tDEMONSTRATE MAPS:');
console.log('\t----------------\n\n');

// 2 objects created for use with Map() Object
const person1 = { name: 'Joanie' };
const person2 = { name: 'Bobby' };

console.log('Created two objects--person1 and person2:\n');
console.log(person1, person2);

// OBJECTIVE #1: Create and log to console personData() map
// to link ancillary data to the objects declared above.

console.log(
  '\nOBJECTIVE #1: Add data to person1() and person2()\n' +
  'Objects by Creating personData() Map:\n'
);

const personData = new Map(
  [
    [
      person1,
      [
        { date: '2022-12-31', price: 10 }
      ]
    ]
  ]  
);

// Add person2 to personData:
personData.set(
  person2,
  [
    { date: '2022-12-16', price: 100 }
  ]
);

console.log(personData);

// OBJECTIVE #2: Use the get() method to choose
// an entry value by key.

console.log(
  '\nOBJECTIVE #2: Extract Entry Value by Key\n' +
  'Using get() Method:\n\n'
);

console.log('Extracting value of person1 key...\n\n');
console.log( personData.get(person1) );

// OBJECTIVE #3: Demonstrate 4 Algorithms for Extracting
// different pieces of data from personData() Map:

console.log(
  '\nOBJECTIVE #3: Use 4 Algorithms to Extract Specified\n' +
  'Data from personData() Map.\n\n' 
);
console.log(
  'Algorithm #1: Log Complete Entries Using\n' +
  'entries() Method...\n\n'
);

// Algorithm #1: Using entries() Method--logs complete Map() objects
for ( const entry of personData.entries() ) {
  console.log(entry);
};

// Algorithm #2: Using Array Destructuring--also logs
// complete objects

console.log(
  '\n\nAlgorithm #2: Log Complete Entries Using\n' +
  'Array Destructuring with entries() Method:\n\n'
);

for ( const [key, value] of personData.entries() ) {
  console.log(key, value);
}

// Algorithm #3: Using the keys() Method--logs only keys
// from the objects

console.log(
  '\n\nAlgorithm #3: Log only Keys of Entries ' +
  'Using the keys() Method:\n\n'
);

for ( const key of personData.keys() ) {
  console.log(key);
};

// Algorithm #4: Using the values() Method--logs only the
// values from the objects.

console.log(
  '\n\nAlgorithm #4: Log only Values of Entries ' +
  'Using the values() Method:\n\n'
);

for ( const value of personData.values() ) {
  console.log(value);
};
