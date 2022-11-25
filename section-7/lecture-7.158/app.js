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

// Capture previous node
// NOTE: The previousNode() method returns node
// regardless of its type, so because the previous
// node to li is a text node, it is returned.