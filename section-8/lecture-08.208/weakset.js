/**
 * 
 * Lecture 8.208: Understanding Weakset
 * 
 * Robert Hieger
 * January 1, 2023
 * 
 * OBJECTIVE: TBD.
 * 
 */

// Object for use with WeakSet:
// NOTE: Sets are also capable of containing objects,
// not just strings.
let person = { name: 'Bobby' };

const persons = new WeakSet();

persons.add(person);

console.log(persons);
