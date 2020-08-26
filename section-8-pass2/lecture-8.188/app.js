const hobbies = ['Sports', 'Coding'];

console.log('hobbies =>');
console.table(hobbies);

console.log('Using splice() to add an element to hobbies[]...');

// Acts like unshift() but without as much overhead.
hobbies.splice(0, 0, 'Good Food');
console.log('hobbies[] =>');
console.table(hobbies);

// Shift 'Good Food' one index to the right.
console.log('Shift \'Good Food\' one index to the right using splice()...');

hobbies.splice(0, 1); // first delete item at index 0
hobbies.splice(1, 0, 'Good Food'); // add back in at index 1
console.log('hobbies[] =>');
console.table(hobbies);

// Delete element at index 0 with splice()
console.log('Deleting hobbies[0]...');

hobbies.splice(0, 1);
console.table(hobbies);
