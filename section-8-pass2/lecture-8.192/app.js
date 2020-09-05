const personData = [
  { name: 'Bobby', age: 58 },
  { name: 'Carl', age: 63 },
  { name: 'Bobby', age: 58 }
];

// Iterates over array and returns { name: 'Carl', age: 63 }
const carl = personData.find( (person, index) => {
  return person.name === 'Carl';
});

console.log('Find { name: \'Carl\' }...');
console.log('return person.name === \'Carl\' =>', carl);
