/**
 * 
 * Lecture 7.158: Selecting Sibling Elements
 * 
 * Robert Hieger
 * 11/25/2022
 * 
 * OBJECTIVE: Capture previous sibling element and
 * next sibling element. Demonstrate how nextSibling
 * method might return a text node, and that
 * using nextElementSibling method prevents this
 * from happening.
 * 
 */

// Show differences between parentNode, parentElementNode,
// previousSiblingNode, previousElementSiblingNode,
// nextSiblingNode and nextElementSiblingMode.

// Change h1 heading and its styling
const h1 = document.querySelector('h1');
h1.textContent = 'Some new title!';

h1.style.color = '#ffffff';             // white
h1.style.backgroundColor = '#000000';   // black

// Capture first li element
// NOTE: Because querySelector() only returns the
// first match it finds, the <li> returned is the
// first one within the <ul> tags.
const li = document.querySelector('li');

// Capture parent node
const ul = li.parentNode;

// returns previous sibling node
// NOTE: Because the previous sibling is a text node,
// previousSibling returns a text node, not the header
// that was intended. This requires previousElementSibling.
const header = ul.previousSibling;

// returns previous element sibling node
const header2 = ul.previousElementSibling;

// returns next sibling node
// NOTE: Because the next sibling is a text node,
// nextSibling returns a text node, not the ul
// element that was intended. This requires the
// nextElementSibling method.
const input1 = ul.nextSibling;

// returns next element sibling node
const input2 = ul.nextElementSibling;

console.log('DEMO: Selecting Sibling Elements:');
console.log('--------------------------------\n\n');

console.log('SELECT PREVIOUS SIBLING FOR <ul>:');
console.log('--------------------------------\n\n');

console.log('Returns text node:');
console.log(header.nodeName);
console.log('\n\n');

console.log('Returns <header> element node:');
console.log(header2);
console.log('\n\n');

console.log('SELECT NEXT SIBLING FOR <ul>:');
console.log('----------------------------\n\n');
console.log('Returns text node:');
console.log(input1);

console.log('SELECT NEXT SIBLING FOR <ul>:');
console.log('----------------------------\n\n');
console.log('Returns <input> element node:');
console.log(input2);
