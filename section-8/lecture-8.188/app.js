const hobbies = ['Sports', 'Cooking'];

console.log('hobbies[]: ', hobbies);
console.log('adding 1 element to hobbies with push()...');

hobbies.push('Reading');
console.log('hobbies[]: ', hobbies);

console.log('Adding 1 element to beginning of hobbies with unshift()...');

hobbies.unshift('Coding');
console.log('hobbies[]: ', hobbies);

console.log('Deleting the last element in hobbies[]...');
hobbies.pop();
console.log('hobbies[] => ',  hobbies);

console.log('Deleting the first element in hobbies[]...');
hobbies.shift();
console.log('hobbies[] => ', hobbies);

console.log('Changing the element at hobbies[1]...');
hobbies[1] = 'Coding';
console.log('hobbies[] => ', hobbies);

console.log('Adding an element that skips indices...');
// Very rarely used:
hobbies[5] = 'Reading';
console.log('hobbies[] => ', hobbies);

console.log('Accessing element at empty index...');
console.log('hobbies[4] => ', hobbies[4]);

console.log('Inserting element betwwen hobbies[0] and hobbies[1]...');
hobbies.splice(1, 0, 'Good Food');
console.log('hobbies[] => ', hobbies);

console.log('Deleting first element of hobbies[] using splice()...');
hobbies.splice(0, 1);
console.log('hobbies[] => ', hobbies);

console.log('Deleting last element of hobbies[] using splice()...');
hobbies.splice(-1, 1);
console.log('hobbies[] => ', hobbies);
