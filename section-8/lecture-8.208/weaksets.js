let person = { name: 'Bobby' };

const persons = new WeakSet();

persons.add(person);

console.log('persons{} => ', persons);
