const person1 = { name: 'Bobby' };
const person2 = { name: 'Carl' };

// Declare a Map():

const personData = new Map(
  [
    [
      person1,
      [ { date: 'yesterday', price: 10 } ]
    ],
    [
      person2,
      [ { date: 'tomorrow', price: 20 } ]
    ]
  ]
);

console.log('person1 =>\n', person1);

console.log('person2 =>\n', person2);

console.log('Declared Map() personData()...');

console.log('personData() =>\n');
console.log(personData);

// Getting data from personData():

console.log('Getting person1() from personData()...');
console.log( personData.get(person1) );
