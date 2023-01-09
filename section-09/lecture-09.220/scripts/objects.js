/**
 * 
 * Lecture 9.216: Adding, Modifying & Deleting Properties
 * 
 * Robert Hieger
 * January 7, 2023
 * 
 * OBJECTIVE: Explore manipulation of Object properties.
 * 
 * Objective #1: Demonstrate Adding a Property to the
 * person() Object.
 * 
 * Objective #2: Demonstrate Modifying a Property of
 * the person() Object.
 * 
 * Objective #3: Demonstrate Deleting a Property of
 * the person() Object.
 * 
 */

const person = {
  name: 'Bart',
  age: 45,
  hobbies: [
    'astronomy',
    'hiking'
  ],
  greet: function() {
    alert('Hi, there!');
  }
};

const displayObject = () => {
  for (const property in person) {
    console.log(`${property}: ${person[property]}`);
  }
};

console.log('\n\n\tAdding, Modifying & Deleting Properties');
console.log('\t---------------------------------------\n\n');

console.log('Here is the original person() Object:\n\n');
displayObject();

// Objective #1: Add isAdmin boolean to person().

console.log('\n\nOBJECTIVE #1: Add isAdmin to person():');
console.log('-------------------------------------\n\n');

console.log('Adding isAdmin Property...\n\n');

// Add new property to person()
person.isAdmin = true;

console.log('Here\'s the Updated person() Object:');
console.log('----------------------------------\n\n');
displayObject();

// Objective #2: Update the age property.

console.log('\n\nOBJECTIVE #2: Update the age Property:');
console.log('-------------------------------------\n\n');

console.log('Updating age Property...\n\n');

// Update age property:
person.age = 28;

console.log('Here\'s the Updated person() Object:');
console.log('----------------------------------\n\n');
displayObject();

// Objective #3: Delete a property from person().

console.log('\n\nOBJECTIVE #3: Delete age Property:\n\n');

console.log('Deleting age Property...\n\n');

// Delete age property:
delete person.age;

console.log('Here\'s the Updated person() Object:');
console.log('----------------------------------\n\n');
displayObject();
