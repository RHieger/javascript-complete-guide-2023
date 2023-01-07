/**
 * 
 * Lecture 7.163: Adding Elements via createElement()
 * 
 * Robert Hieger
 * 11/26/2022
 * 
 * OBJECTIVE: Dynamically inject an HTML element as a
 * sibling to those occuring within a <ul> element.
 * Naturally, the logical insertion would be an <li>
 * element, setting its text content to "Item 4."
 * 
 * Additionally, set the font size of the new <li> element
 * to 21px and set its color to blue. Finally append the
 * new element to the <ul> to make it visible within the
 * browser window.
 * 
 */

// Capture <section>
const section = document.querySelector('section');

// Capture <ul>
const list = document.querySelector('ul');

// Capture <button>
const button = document.querySelector('button');

// Build and append new list item to <ul>:

// Create new <li> element
const newListItem = document.createElement('li');
// Add text node to newListItem
newListItem.textContent = 'Item 4';
// Set color to blue and font size to 21px
newListItem.style.color = 'blue';
newListItem.style.fontSize = '21px';
// Append newListItem to list
list.appendChild(newListItem);

button.addEventListener('click', () => {
  section.classList.toggle('invisible');
});
