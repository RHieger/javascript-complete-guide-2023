const section = document.querySelector('section');
const btnReset = document.getElementById('reset');
const btnChange = document.getElementById('redBg');

// TASK #1: Override .red-bg class to make section
// background-color blue
section.style.backgroundColor = 'blue';

console.log('<secton> background-color changed to blue.\n');

// TASK #2: Goes beyond what lecture covered; create
// event listener that monitors <section> for when it
// is clicked, then removes background and resets text
// to black.

section.addEventListener('click', () => {
  section.className = '';
  section.style.backgroundColor = '';
});

// TASK #3: Goes well beyond what was covered in lecture.
// Create event listener tied to a button labeled with
// "Reset Background" that resets background to blue and
// foreground to white.

btnReset.addEventListener('click', () => {
  section.style.backgroundColor = 'blue';
  section.classList.add('white-fg');
});

// TASK #4: Add event listener tied to button using
// classList property of <section> to change background
// to red.

btnChange.addEventListener('click', () => {
  section.style.backgroundColor = '';
});