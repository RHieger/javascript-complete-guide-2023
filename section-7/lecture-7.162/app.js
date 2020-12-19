const section = document.querySelector('section');
const btnReset = document.getElementById('reset');
const btnChange = document.getElementById('redBg');
const btnToggle = document.getElementById('toggle');

// TASK #1: Override .red-bg class to make section
// background-color blue
section.classList.remove('red-bg');
section.classList.add('blue-bg');
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

// TASK #4: Add event listener tied to button to
// change background to red.
btnChange.addEventListener('click', () => {
  section.style.backgroundColor = '';
  section.classList.toggle('red-bg');
  section.classList.toggle('blue-bg');
  section.classList.add('visible');
});

// TASK #5: Add event listener tied to button using
// using classList property of <section> to toggle
// visibility of the entire block.
btnToggle.addEventListener('click', () => {
  section.style.backgroundColor = '';
  section.classList.toggle('visible');
  section.classList.toggle('invisible');
  section.classList.toggle('blue-bg');
});

// NOTE: The above three button event listeners to not
// work flawlessly in every use case. Rather than spend
// a lot of time on fixing this now, I will return to
// this issue on a second pass through Section 7 of the
// course.
