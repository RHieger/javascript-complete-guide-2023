const section = document.querySelector('section');
const uList = document.querySelector('ul');
const addElement = document.getElementById('add');
const addBeforeLast = document.getElementById('beforeLast');
const replaceFirst = document.getElementById('replaceFirstItem');

const newItem = document.createElement('li');
newItem.textContent = 'New Item';

addElement.addEventListener('click', () => {
  // TASK #1: Prepend newItem:
  uList.prepend(newItem);
});

addBeforeLast.addEventListener('click', () => {
  // TASK #2 Insert newItem before last item
  // using lastElementChild property and
  // before() method:
  uList.lastElementChild.before(newItem);
});

replaceFirst.addEventListener('click', () => {
  // TASK #3 Replace first <ul> list item with
  // newItem DOM element.
  uList.firstElementChild.replaceWith(newItem);
});
