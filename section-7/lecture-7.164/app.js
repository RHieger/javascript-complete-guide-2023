/**
 * 
 * Lecture 7.164: Inserting DOM Elements
 * 
 * Robert Hieger
 * 11/27/2022
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
const button2 = document.getElementsByTagName('button')[1];
const button3 = document.getElementsByTagName('button')[2];
const button4 = document.getElementsByTagName('button')[3];

// Style button and button4
button2.style.marginLeft = '6px';
button4.style.marginLeft = '6px';

// Indent button3
button3.style.marginLeft = '40px';

// Capture second list
const list2 = document.getElementById('hidden-list');

// Capture Instructive <h2>
const explanation = document.querySelector('h2');

// Set style for explanation
explanation.style.marginLeft = '40px';
explanation.style.fontWeight = 'bold';
explanation.style.color = '#007fff';  /* Azure */
explanation.style.marginTop = '50px';
explanation.style.marginBottom = '0';

// Build and append new list item to <ul>:

// Create new <li> elements
const newLi1 = document.createElement('li');
const newLi2 = document.createElement('li');

// Create new <li> element to be prepended
const newLi3 = document.createElement('li');
const newLi4 = document.createElement('li');

// Set text nodes for both <li> elements
newLi1.textContent = 'Item 4';
newLi2.textContent = 'Item 5';
newLi3.textContent = 'Item 0';  // textContent for prepended item
// textContent for prepended moveable item
newLi4.textContent = 'Moveable Item';

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

// prepend() newLi4 to list2
list2.firstElementChild.prepend(newLi4);

button.addEventListener('click', () => {
  section.classList.toggle('invisible');
});

button2.addEventListener( 'click', () => {
  explanation.classList.toggle('invisible');
  list2.classList.toggle('invisible');
  button3.classList.toggle('invisible');
  button4.classList.toggle('invisible');
});

// Select list2 <div>, traverse to first element child
// (<ul>), travere to last element child, and prepend
// moveable element (newLi4).
button3.addEventListener( 'click', () => {
  list2.firstElementChild
       .lastElementChild
       .before(newLi4);
});

button4.addEventListener( 'click', () => {
  list2.firstElementChild
       .lastElementChild
       .after(newLi4);
});