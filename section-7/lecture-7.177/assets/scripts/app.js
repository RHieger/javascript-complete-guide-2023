/**
 * 
 * Lecture 7.176: Rendering Movie Items on the Screen
 * 
 * Robert Hieger
 * 12/01/2022
 * 
 * OBJECTIVE: Overall, the objective is to render movie
 * components on the screen, not just in the JavaScript
 * console. To do this, it is necessary to create a DOM
 * object that captures the default message appearing on
 * the screen. This will make it possible to hide this
 * message when a movie component is rendered to the
 * browser window.
 * 
 * Two helper functions are declared to be called by the
 * event listener attached to the "Add" button in the
 * modal that appears to allow entry of movie data.
 * 
 * The first function determines whether the movies[]
 * array is empty or if it is not. If it's not empty,
 * i.e. a movie has been entered, or one is already
 * there, the default message is hidden. If the array
 * is empty the default mesage is made visible again.
 * 
 * The second function renders the movie component to
 * the screen and is also called by the event listener
 * wired to the "Add" button.
 * 
 * Example Image URLs:
 *   1. The Tall Guy
 *      https://m.media-amazon.com/images/I/51N9GBFJTWL.jpg
 *
 *   2. My Cousin Vinny
 *      https://m.media-amazon.com/images/I/51B5VNCN7QL.jpg
 * 
 *   3. Life Stinks
 *      https://m.media-amazon.com/images/I/5146F7FCH9L.jpg
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
  if (movies.length === 0) {
    entryDefaultMessage.style.display = 'block';
  } else {
    entryDefaultMessage.style.display = 'none';   
  }
};

// Render Movie Element to Screen
const renderMovieElement =
  (title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML =
    `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
    `;
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
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

  // Insert new movie into DOM and display on page
  renderMovieElement(
    newMovie.title, newMovie.image, newMovie.rating
  );

  // Hide default entry message
  updateUI();
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
