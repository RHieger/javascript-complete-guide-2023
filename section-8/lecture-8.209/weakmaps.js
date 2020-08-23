let person = { name: 'Bobby' };
const personData = new WeakMap();

console.log('Setting a key for personData()...');
personData.set(person, { age: 58 });
console.log('personData() => ', personData);

console.log('Setting person() to null for garbage collection...;');
person = null;

console.log('personData() => ', personData);
console.log('NOTE: JavaScript engine controls when garbage is ' +
  'collected, which is why it still shows up above.');
