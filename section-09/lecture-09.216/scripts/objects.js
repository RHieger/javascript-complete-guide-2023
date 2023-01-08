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

