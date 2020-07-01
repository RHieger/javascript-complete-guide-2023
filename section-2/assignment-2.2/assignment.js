// Gets DOM element for Task 3.
const task3Element = document.getElementById('task-3');

/**
 * Task 1:
 * 
 * @function greet() -- generic message
 * 
 * @function myName(name) -- introduction
 * 
 */

 const greet = () => {
  alert('Hi, JavaScript can be fun! 🎹 🌈');
 };

 const myName = (name) => {
  alert(`Hi, my name is ${name}!`);
 };

 // Task 2: Directly call functions declared in Task 1

 greet();

 myName('Bobby');

/**
 * Task 3: Add Event Listener to Task 3 element
 * 
 * @event task3Element.addEventListener('click') -- alerts greeting
 * 
 */

 task3Element.addEventListener('click', greet);
 