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
