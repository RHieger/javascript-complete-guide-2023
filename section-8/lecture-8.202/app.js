const prices = [10.99, 5.99, 3.99, 6.59];

const nameFragments = ['Robert', 'Hieger'];

// Spread operator copies contents of nameFragments
// into a new array.
const copiedNameFragments = [...nameFragments];

console.log('nameFragments => ', nameFragments);
console.log('copiedNameFragments => ', copiedNameFragments);

// Demonstrate that nameFragments and copiedNameFragments are
// actually two distinct objects with their own unique memory
// addresses. Changes to one do not affect the other.

nameFragments.push('Mr.');

console.log('Updated nameFragments[] => ', nameFragments);
console.log('copiedNameFragments[] => ', copiedNameFragments);

// Use spread operator to extract number values from
// array and use Math method to manipulate them.
console.log('prices[] => ', prices);
console.log( 'minimum price in prices[] =>',
Math.min(...prices) );

const persons = [
  { name: 'Joe', age: 34 },
  { name: 'Jane', age: 25}
];

console.log('persons[] => ', persons);

// const copiedPersons = [...persons];
// Above commented out in favor of making an actual copy of the
// objects contained in the array persons, not just pointers to
// their memory addresses.

console.log('Making a copy of persons...');

const copiedPersons = persons.map(
  person => ({ name: person.name, age: person.age }) 
);

// console.log('persons[], copiedPersons[] => ', persons, copiedPersons);
// Commented out because change of pushed element gets hoisted and therefore,
// even though only 2 elements are recorded, the reference to the third
// element shows in both arrays.
// persons.push(
  // { name: 'Amanda', age: 32 }
// );

// NOTE: Referencing the first element of persons accesses the memory address
// containing that element, and therefore the change made below will be reflected
// in the output of both arrays.

// persons[0].age = 28;

console.log('copiedPersons[] => ', copiedPersons);
