let person = { name: 'Bobby' };
const persons = new WeakSet();

persons.add(person);

console.log('persons{} => ', persons);

// Release person object for eventual garbage collection.
// NOTE: When person's value is removed from the heap
// cannot be controlled. JavaScript engine controls this.
person = null;

console.log('Set person() to null for garbage collection');
