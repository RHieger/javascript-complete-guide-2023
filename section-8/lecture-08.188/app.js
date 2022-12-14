/**
 * 
 * Lecture 8.188: The splice() Method
 * 
 * Robert Hieger
 * 12/13/2022
 * 
 * Objective: Explore and demonstrate the use
 * cases for the splice() method exposed by
 * the Array() object.
 * 
 */

// Instantiate hobbies array
const hobbies = ['Sports', 'Coding'];

console.log('\n\n\tOriginal hobbies array:');
console.log(hobbies);

// Use case for splice() where item is inserted
// at a specified index
hobbies.splice(1, 0, 'Good Food');

console.log(
  '\n\tUse splice() to insert element' +
  ' at a specified index:'
);
console.log('\t', hobbies);
