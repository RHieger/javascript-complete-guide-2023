const hobbies = ['Sports', 'Coding'];
console.log('hobbies =>');
console.table(hobbies);

console.log('Using splice() to add an element to hobbies[]...');

// Acts like unshift() but without as much overhead.
hobbies.splice(0, 0, 'Good Food');
console.log('hobbies[] =>');
console.table(hobbies);