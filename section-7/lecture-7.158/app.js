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
const ul1 = ul.nextSibling;

// returns next element sibling node
const ul2 = ul.nextElementSibling;