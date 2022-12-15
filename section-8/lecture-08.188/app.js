/**
 * 
 * Lecture 8.188: The splice() Method
 * 
 * Robert Hieger
 * 12/14/2022
 * 
 * Objective: Explore and demonstrate the use
 * cases for the splice() method exposed by
 * the Array() object.
 * 
 */

// Instantiate hobbies array
let hobbies = ['Sports', 'Coding'];

console.log('\n\n\tOriginal hobbies array:');
console.log(hobbies);

// Use case for splice() where item is inserted
// at a specified index

// Array.splice(
//  starting index,
//  number of items to delete,
//  items to add
// )
hobbies.splice(1, 0, 'Good Food');

console.log(
  '\n\tUse splice() to insert element' +
  ' at a specified index:'
);
console.log('\t', hobbies);

// Use case for splice where an item
// is deleted
hobbies.splice(0, 1);

console.log(
  '\n\tUse splice() to delete ' +
  'one element at index 0:'
);
console.log('\t', hobbies);

// Use splice() method to flush all elements
// from the array.
hobbies = ['Sports', 'Good Food', 'Coding'];
console.log('\n\thobbies[] restored:');
console.log('\t', hobbies);
hobbies.splice(0); // Because no count of elements
                  // to be removed is provided,
                  // all elements are removed.
console.log(
  '\n\tUse splice(0) to flush ' + 
  'all elements from the array:'
);
console.log('\t', hobbies);
