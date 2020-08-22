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
      // NOTE: This personData() will never log
      // to console because later setting of the
      // value for person2 is hoisted and thus,
      // the value below is overwritten.
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

// Setting data of person2() within personData()

console.log('Setting new value for person2 data in personData()...');

personData.set(
  person2,
  [
    { date: 'last week', price: 100 }
  ]
);

console.log('Getting new value for person2() data =>');
console.log( personData.get(person2) );

// 3 DIFFERENT METHODS TO OUTPUT ALL CONTENTS OF MAP:

// Method #1: personData.entries()
console.log('Log all personData using entries() method =>');
for ( const entry of personData.entries() ) {
  console.log(entry);
}