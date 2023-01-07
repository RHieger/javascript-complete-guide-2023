/**
 * 
 * Lecture 8.208: Understanding Weakset
 * 
 * Robert Hieger
 * January 1, 2023
 * 
 * OBJECTIVE: Explore the utility of the Weakset.
 * 
 * Weaksets are so named because of their ability to
 * release objects for garbage collection without a
 * developer having to use the delete() method.
 * 
 * They save the developer from having to remember to
 * set the object to null or use the delete() method.
 * 
 * As garbage collection is an automatic feature of the
 * JavaScript engine, the developer has no way of knowing
 * when the garbage is collected, but Weakset assures
 * that it will be collected.
 * 
 */


// Object for use with WeakSet:

// NOTE: Weaksets are also capable of containing objects,
// not just strings.
let person = { name: 'Bobby' };

const persons = new WeakSet();

persons.add(person);

console.log(persons);
