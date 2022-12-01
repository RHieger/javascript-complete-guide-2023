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
 * In addMovieHandler, create a movie object that
 * will be pushed to the movies datastore array.
 * The results of this push will be logged to the
 * console at this stage in the application's
 * development. Later, it will be rendered on
 * the web page.
 * 
 * Finally, when the "Add" button is clicked on the
 * add movie modal, the modal box fields should be
 * emptied and the modal and backdrop removed from
 * the screen. This is accomplished by making a
 * call to toggleMovieModal().
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
const entryDefaultMessage =
  document.getElementById('entry-text');

// Declare Datastore to contain movie objects:
const movies = [];

// Check length of movies array. If not empty,
// hide default message and display the movie(s).
const updateUI = () => {
  // TBD
};

// Callback Functions
const toggleBackDrop = () => {
  backDrop.classList.toggle('visible');
};

// Hides modal if present; displays if hiddenx
const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible');
  toggleBackDrop();
};

// Empties movie input fields
const clearMovieInput = () => {
  for (const input of userInput) {
    input.value = '';
  }
};

// Removes Modal and backdrop on "Cancel" button click
const cancelAddMovieHandler  = () => {
  toggleMovieModal();
  clearMovieInput();
};

// Removes backdrop any time modal closes
const backdropClickHandler = () => {
  toggleMovieModal();
};

// Handles creation of movie objects to be stored
// in movies array.
const addMovieHandler = () => {
  const titleValue = userInput[0].value;
  const imageUrlValue = userInput[1].value;
  const ratingValue = userInput[2].value;

  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
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

  // Holds movie object to be pushed to movies array:
  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  };

  movies.push(newMovie);

  // For Diagnostic purposes only
  console.log(movies);

  // Removes modal and backdrop
  toggleMovieModal();
  
  // Clear modal input fields
  clearMovieInput();
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
