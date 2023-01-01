/**
 * 
 * Lecture 8.209: Understanding WeakMap
 * 
 * Robert Hieger
 * January 1, 2023
 * 
 * OBJECTIVE: Explore the utility of the WeakMap.
 *  
 */


// Object for use with WeakSet:

// NOTE: Weaksets are also capable of containing objects,
// not just strings.
let person = { name: 'Bobby' };

const persons = new WeakSet();

persons.add(person);

console.log(persons);
