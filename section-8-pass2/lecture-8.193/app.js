const personData = [
  { name: 'Bobby', age: 58 },
  { name: 'Carl', age: 63 },
  { name: 'Bobby', age: 58 }
];

// Iterates over array and returns { name: 'Carl', age: 63 }
const carl = personData.find( (person, index) => {
  return person.name === 'Carl';
});

// NOTE: find() does not create a copy when it returns a value.
// Therefore, any change made to that value is made to the actual
// value in the array, bit to a new copy.
console.log('Find { name: \'Carl\' }...');
console.log('return person.name === \'Carl\' =>', carl);

// Return index of { name: 'Bobby' }.
const bobbyIndex = personData.findIndex( (person, index, personData) => {
  return person.name === 'Bobby';
});

console.log('Find index of person.name === \'Bobby\'...');
//NOTE: Just as with indexOf(), only first instance of object is returned.
console.log('return person.name === Bobby =>', bobbyIndex);
