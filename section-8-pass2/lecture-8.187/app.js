const hobbies = ['Sports', 'Cooking'];
console.log('hobbies =>');
console.table(hobbies);

// Adding an Element to an Array: Method #1
// push() -- adds element to end of array
console.log('Adding an element to hobbies[]...');

hobbies.push('Reading');

console.log('hobbies[] =>');
console.table(hobbies);

// Adding an Element to an Array: #Method #2
// unshift() -- adds element to end of array
console.log('Adding an element to the beginning of hobbies[]...');

hobbies.unshift('Coding');

console.log('hobbies[] =>');
console.table(hobbies);
