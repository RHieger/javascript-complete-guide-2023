/**
 * 
 * Lecture 8.187: push(), pop(), unshift(), shift()--
 * Adding and Removing Elements
 * 
 * Robert Hieger
 * 12/12/2022
 * 
 * Objective: Explore and demonstrate the above four
 * methods exposed by the Array() object.
 * 
 */

// Add Data to an Array

const hobbies = ['Sports', 'Cooking'];

console.log('\n\n\tOriginal Array: ');
console.log('\t', hobbies);

// Method 1: push()—adds element to end of array
hobbies.push('Reading');
console.log('\n\tNew Element Pushed to the Array:');
console.log('\t', hobbies);