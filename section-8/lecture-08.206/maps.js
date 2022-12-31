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

console.log(personData);

// Use the get() method:
console.log( personData.get(person1) );

// Add person2 to personData:
personData.set(
  person2,
  [
    { date: '2022-12-16', price: 100 }
  ]
);

console.log(personData);

// 4 Algorithms for looping through information in Map:
// Method #1 Using entries() Method
for ( const entry of personData.entries() ) {
  console.log(entry);
};

// Method #2 Using Array Destructuring
for ( const [key, value] of personData.entries() ) {
  console.log(key, value);
}

// Method #3 Using the keys() Method
for ( const key of personData.keys() ) {
  console.log(key);
};

// Method #4 Using the values() Method
for ( const value of personData.values() ) {
  console.log(value);
};
