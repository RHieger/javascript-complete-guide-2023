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
