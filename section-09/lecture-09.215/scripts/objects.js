/**
 * 
 * Lecture 9.215: Objects Recap
 * 
 * Robert Hieger
 * January 7, 2023
 * 
 * OBJECTIVE: Demonstrate creation of an object,
 * including a method to display alert box with
 * message 'Hi, there!'
 * 
 * Demonstrate how to access properties and/or
 * methods in the Object.
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
