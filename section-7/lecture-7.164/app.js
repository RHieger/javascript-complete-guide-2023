/**
 * 
 * Lecture 7.164: Inserting DOM Elements
 * 
 * Robert Hieger
 * 11/26/2022
 * 
 * OBJECTIVE: Explore the difference between appendChild()
 * and append() methods. Specifically, this application
 * demonstrates how append() can append more than 1 item,
 * unlike appendChild().
 * 
 * Use prepend() method to insert an <li> before all other
 * <li> elements in <ul> element.
 * 
 */

// Capture <section>
const section = document.querySelector('section');

// Capture <ul>
const list = document.querySelector('ul');

// Capture <button>
const button = document.querySelector('button');

// Build and append new list item to <ul>:

// Create new <li> elements
const newLi1 = document.createElement('li');
const newLi2 = document.createElement('li');

// Create new <li> element to be prepended
const newLi3 = document.createElement('li');

// Set text nodes for both <li> elements
newLi1.textContent = 'Item 4';
newLi2.textContent = 'Item 5';
newLi3.textContent = 'Item 0';  // textContent for prepended item

// Set styling for new <li> element nodes
newLi1.style.color = 'blue';
newLi1.style.fontSize = '21px';
newLi2.style.color = 'blue';
newLi2.style.fontSize = '21px';
newLi3.style.color = 'white';
newLi3.style.fontSize = '21px';
newLi3.style.backgroundColor = 'blue';


// append() method appends both <li> elements
// at the same time, unlike appendChild()
list.append(newLi1, newLi2);

// prepend() method works same way as append(),
// only it inserts the node(s) at the beginning
// of the siblings in the node tree.
list.prepend(newLi3);

button.addEventListener('click', () => {
  section.classList.toggle('invisible');
});
