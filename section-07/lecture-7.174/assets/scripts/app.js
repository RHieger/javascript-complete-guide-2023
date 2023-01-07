/**
 * 
 * Lecture 7.174: Fetching and Validating User Input
 * 
 * Robert Hieger
 * 11/30/2022
 * 
 * OBJECTIVE: Declare a DOM object to capture the "Add"
 * button in the movie modal. Create an event listener
 * that triggers upon clicking the "Add" button and does
 * a basic validation on the user input to make sure of
 * the following:
 * 
 * 1. That all inputs are not blank.
 * 2. That any individual input is not blank.
 * 3. That user input for the movie rating is an
 *    integer between 1 and 5. Less than 1 will
 *    return false, as will 6 or -3, for example.
 * 4. If any of the above conditions evaluate to
 *    false, an alert box is triggered with a
 *    message that the rating must be between
 *    1 and 5.
 * 
 * This alert box is limited at this point in that no
 * matter what the error, it only speaks of the movie
 * rating being incorrect.
 * 
 * I can imagine a refactoring that might include a
 * switch statement that would display different
 * alert boxes for different errors.
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
