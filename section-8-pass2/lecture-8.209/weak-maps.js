let person = { name: 'Bobby' };
const personData = new WeakMap();

personData.set(person, "male");

// GIVEN: Some operations on above object added
// to personData WeakMap().

person = null;  // clear value from person.

// GIVEN: With WeakMap(), if an object is nulled
// and is not used elsewhere in the code, it will
// be cleared from the JavaScript heap, i.e. it
// will be garbage collected. Not so with Map().

console.log(personData);
