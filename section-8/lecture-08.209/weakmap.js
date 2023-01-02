/**
 * 
 * Lecture 8.209: Understanding WeakMap
 * 
 * Robert Hieger
 * January 1, 2023
 * 
 * OBJECTIVE: Explore the utility of the WeakMap.
 * 
 * The WeakMap object shares many of the same properties
 * as the WeakSet.
 * 
 * It has in common with WeakSet() the get(), set(),
 * and delete methods. It also allows garbage collection
 * of data to take place without the developer having
 * to remember to set an object to null.
 *  
 */

// Object for use with WeakMap:

let person = { name: 'Bobby' };

const personData = new WeakMap();

personData.set(person, 'Extra Info!');

console.log(personData);
