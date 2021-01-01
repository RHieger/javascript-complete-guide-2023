const section = document.querySelector('section');
const uList = document.querySelector('ul');
const addElement = document.getElementById('add');
const addBeforeLast = document.getElementById('beforeLast');
const replaceFirst = document.getElementById('replaceFirstItem');
const addLi4 = document.getElementById('addItem4');
const cloneLastLi = document.getElementById('cloneItem4');
const newItem = document.createElement('li');
newItem.textContent = 'New Item';

const newListItem = document.createElement('li');
newListItem.textContent = 'Item 4';

addElement.addEventListener('click', () => {
  // TASK #1: Prepend newItem:
  uList.prepend(newItem);
});

addBeforeLast.addEventListener('click', () => {
  // TASK #2: Insert newItem before last item
  // using lastElementChild property and
  // before() method:
  uList.lastElementChild.before(newItem);
});

replaceFirst.addEventListener('click', () => {
  // TASK #3: Replace first <ul> list item with
  // newItem DOM element:
  uList.firstElementChild.replaceWith(newItem);
});

addLi4.addEventListener('click', () => {
  // TASK #4: Add new "Item 4" after last <li>
  // in unordered list:
  uList.lastElementChild.insertAdjacentElement('afterend', newListItem);
});

cloneLastLi.addEventListener('click', () => {
  // TASK #5 Clone Item 4 and append clone to
  // the end of undordered list:
  const cloneNewListItem = newListItem.cloneNode(true);
  uList.append(newListItem, cloneNewListItem);
});
