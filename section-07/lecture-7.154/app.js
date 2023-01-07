const h1 = document.getElementById('main-title');

// Change properties of h1:

h1.textContent = 'Some new title!';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

// Select and add to text content of last list item
// in unordered list:
const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Changed!)';

// const listItemElements = document.querySelectorAll('li');
const listItemElements = document.getElementsByTagName('li');

for (const listItemElement of listItemElements) {
  console.dir(listItemElement);
}
