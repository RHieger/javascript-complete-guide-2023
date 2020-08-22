let person = { name: 'Bobby' };
const personData = new WeakMap();

console.log('Setting a key for personData()...');
personData.set( person, { age: 58 } );

console.log('personData() => ', personData);