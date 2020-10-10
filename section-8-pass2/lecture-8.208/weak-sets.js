let person = { name: 'Bobby' };
const persons = new WeakSet();

persons.add(person);

// GIVEN: Some operations on above object added
// to persons WeakSet().

person = null;  // clear value from person.

// GIVEN: With WeakSet(), if an object is nulled
// and is not used elsewhere in the code, it will
// be cleared from the JavaScript heap, i.e. it
// will be garbage collected. Not so with Set().

console.log(persons);
