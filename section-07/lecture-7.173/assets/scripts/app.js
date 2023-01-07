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
 * Additionally, declare another EventListner on backDrop node.
 * This EventListener will make a callback to a new function
 * called backdropClickHandler, which will hide the backdrop
 * by making an internal reference to toggleMovieModal, which
 * in turn calls toggleBackDrop.
 * 
 * The end result should be that clicking on the backdrop after
 * opening the modal will hide the modal and remove the backdrop.
 * Clicking the "Cancel" button on modal will also hide the modal
 * and remove the backdrop.
 * 
 */

// DOM Objects
const addMovieModal = document.getElementById('add-modal');
const addStartMovieButton =
  document.querySelector('header button');
const backDrop = document.getElementById('backdrop');
const cancelAddMovieButton =
  addMovieModal.querySelector('.btn--passive');

// Callback Functions
const toggleBackDrop = () => {
  backDrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
  // Hide modal if present; display if hidden.
  addMovieModal.classList.toggle('visible');
  toggleBackDrop();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

const cancelAddMovie = () => {
  toggleMovieModal();
};

// EventListeners
addStartMovieButton
  .addEventListener('click', () => {
    toggleMovieModal();
  });

backDrop
  .addEventListener( 'click', backdropClickHandler );

cancelAddMovieButton
  .addEventListener('click', cancelAddMovie);
