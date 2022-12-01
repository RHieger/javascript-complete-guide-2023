/**
 * 
 * Lecture 7.175: Creating a Movie in JavaScript
 *                and Clearing the Input
 * 
 * Robert Hieger
 * 11/30/2022
 * 
 * OBJECTIVE: Declare a Datastore Array to contain
 * movie objects.
 * 
 * TBD
 * 
 */

// DOM Objects
const addMovieModal = document.getElementById('add-modal');
const addStartMovieButton =
  document.querySelector('header button');
const backDrop = document.getElementById('backdrop');
const cancelAddMovieButton =
  addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton =
  cancelAddMovieButton.nextElementSibling;
const userInput = addMovieModal.querySelectorAll('input');

// Callback Functions
const toggleBackDrop = () => {
  backDrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
  // Hide modal if present; display if hidden.
  addMovieModal.classList.toggle('visible');
  toggleBackDrop();
};

const cancelAddMovieHandler  = () => {
  toggleMovieModal();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

const addMovieHandler = () => {
  const titleValue = userInput[0].value;
  const imgUrlValue = userInput[1].value;
  const ratingValue = userInput[2].value;

  if (
    titleValue.trim() === '' ||
    imgUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert(
      'Please enter valid values' +
      ' (rating between 1 and 5).'
    );
    return;
  }
};

// EventListeners
addStartMovieButton
  .addEventListener('click', () => {
    toggleMovieModal();
  });

backDrop
  .addEventListener( 'click', backdropClickHandler );

cancelAddMovieButton
  .addEventListener('click', cancelAddMovieHandler);

confirmAddMovieButton
  .addEventListener('click', addMovieHandler);
