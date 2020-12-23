const section = document.querySelector('section');
const uList = document.querySelector('ul');
const addElement = document.getElementById('add');

addElement.addEventListener('click', () => {
  const newItem = document.createElement('li');
  newItem.textContent = 'New Item';
  // TASK #1: Prepend newItem:
  uList.prepend(newItem);
});
