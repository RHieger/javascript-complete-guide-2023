/**
 * 
 * Lecture 7.173: Opening a Modal by Changing CSS Classes
 * 
 * Robert Hieger
 * 11/29/2022
 * 
 * OBJECTIVE: Create EventListener to activate modal. Declare
 * named callback function to be used by event listener whose
 * purpose is to hide the modal if it is visible or reveal it
 * when it is hidden.
 * 
 */

// DOM Objects
const addMovieModal = document.getElementById('add-modal');
const addStartMovieButton =
  document.querySelector('header button');
const backDrop = document.getElementById('backdrop');

// Callback Functions
const toggleMovieModal = () => {
  // Hide modal if present; display if hidden.
  addMovieModal.classList.toggle('visible');
};

const toggleBackDrop = () => {
  backDrop.classList.toggle('visible');
};

// EventListeners
addStartMovieButton
  .addEventListener('click', () => {
    toggleMovieModal();
    toggleBackDrop();
  });
