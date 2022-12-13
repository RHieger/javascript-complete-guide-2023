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

// Method #1: push()—adds element to end of array
hobbies.push('Reading');
console.log('\n\tNew Element Pushed to the Array:');
console.log('\t', hobbies);

// Method #2: unshift()—adds element to beginning of array
hobbies.unshift('Coding');
console.log('\n\tUse unshift() to Add Element to ' +
            'Beginning of Array'
);
console.log('\t', hobbies);

// Method #3 pop()—deletes the last element in an array.
hobbies.pop();
console.log('\n\tUse pop() to Delete Element ' +
            'from the End of the Array'
);
console.log('\t', hobbies);
