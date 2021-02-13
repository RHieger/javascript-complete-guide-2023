const section = document.querySelector('section');
const uList = document.querySelector('ul');
const addElement = document.getElementById('add');

addElement.addEventListener('click', () => {
  uList.insertAdjacentHTML('beforeend', '<li class="list-item">New Item</li>');
});