/**
 * 
 * Lecture 7.160: Styling DOM Elements
 * 
 * Robert Hieger
 * 11/25/2022
 * 
 * OBJECTIVE: Explore various means of applying styles
 * to DOM elements thus changing the appearance of a
 * web page. The focus of the lecture narrows down to
 * safely and accurately toggling the visibility of a
 * styled DOM element.
 * 
 */

// Capture <section>
const section = document.querySelector('section');

// Capture button
const button = document.querySelector('button');

// Method #1 of revealing or hiding <section>
// NOTE: Prone to error as classes may change over
// time and this forces the developer to constantly
// keep track of what classes are present and
// applied, as well as which ones are removed. It
// is therefore commented out within the eventListener
// wired to <button>.

button.addEventListener('click', () => {
//   if (section.className === 'red-bg visible') {
//     section.className = 'red-bg invisible';
//   } else {
//     section.className = 'red-bg visible';
//   }

  // Method #2 of revealing or hiding <section>--
  // the toggle() method. 1 line of code replaces 5
  // and with greater accuracy and safety.
  
  section.classList.toggle('invisible');

});
