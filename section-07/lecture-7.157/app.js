const h1 = document.querySelector('h1');

// Change content of h1 tag:
h1.textContent= 'Some new title!';

// Change styling of h1 tag:
h1.style.color = '#ffffff';   // white
h1.style.backgroundColor = '#000000'; // black

const li = document.querySelector('li');

// Select parent node
const parent = li.parentNode;

// Find closest ancestor
const liAncestor = li.closest('body');

console.log('First List Item:');
console.log('---------------');
console.log(li);
console.log('\n');

console.log('Select Parent Node:');
console.log('------------------');
console.log(parent);
console.log('\n');

console.log('Select Closest Ancestor of List Item:');
console.log('------------------------------------');
console.log(liAncestor);
console.log('\n');
