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

// Deleting an Element from an Array: Method #3
// pop() -- deletes element from the end of array
console.log('Deleting the last element from hobbies[]: pop()...');

hobbies.pop();
console.log('hobbies[] =>');
console.table(hobbies);

// Deleting an Element from an Array: Method #4
// shift() -- deletes the element at index 0
console.log('Deleting the first element from hobbies[]: shift()...');

hobbies.shift();
console.log('hobbies[] =>');
console.table(hobbies);

// Changing value of element by index
console.log('Changing value of hobbies[1]...');

hobbies[1] = 'Coding';
console.log('hobbies[] =>');
console.table(hobbies);

// Adding an element at specified index beyond the
// scope of the array => new value + x empty
// elements before it:
console.log('Setting value of element beyond last index of hobbies[]...');

hobbies[5] = 'Sports';
console.log('Resulting hobbies[] =>');
console.table(hobbies);
console.log('Proof of empty elements in hobbies[] =>');
console.log(`Value of hobbies[3] => ${hobbies[3]}`);
