/**
 * 
 * Lecture 7.180: Finishing the App
 * 
 * Robert Hieger
 * 12/10/2022
 * 
 * OBJECTIVE: TBD
 * 
 * SOME SAMPLE URLs for movie images:
 * 
 * 1. The Tall Guy
 *    https://m.media-amazon.com/images/I/51N9GBFJTWL.jpg
 * 
 * 2. My Cousin Vinny
 *    https://m.media-amazon.com/images/I/51B5VNCN7QL.jpg
 * 
 * 3. Life Stinks
 *    https://m.media-amazon.com/images/I/5146F7FCH9L.jpg
 * 
 * 4. Harry Potter and the Order of the Phoenix
 *    https://images.squarespace-cdn.com/content/v1/5c71c7d8aadd342945360ba1/1580415741004-5K6ZFHXVINGT91CV90IG/HP5+Ultimate+Edition+Blu-Ray.jpg?format=1500w
 * 
 */


// DOM Objects
const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelector('input');
const textEntrySection = document.getElementById('entry-text-section');
const deleteMovieModal = document.getElementById('delete-modal');

// Empty array to hold movie objects
const movies = [];

// CALLBACK FUNCTIONS

// Hides backdrop when visible and
// reveals it when invisible
const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

// Reveals default text entry message if
// movies[] array is empty; hides if
// there is a movie object to be added
// to the DOM
const updateUI = () => {
  if (movies.length === 0) {
    textEntrySection.style.display = 'block';
  } else {
    textEntrySection.style.display = 'none';
  }
};

// Hides movie deletion modal
const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModal
    .classList.remove('visible');
};

// Handles deletion of a movie card
const deleteMovieHandler = movieId => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove();
  updateUI();
};

// This callback is called by an eventListener when a movie
// that listens for a click on the surface of a movie card
// and responds by revealing the delete movie modal
const startDeleteMovieHandler = movieId => {
  deleteMovieModal.classList.add('visible');
  toggleBackdrop();

  //DOM objects
  const cancelDeletionButton =
    deleteMovieModal.querySelector('.btn--passive');
  let confirmDeletionButton =
    deleteMovieModal.querySelector('.btn--danger');
  
    confirmDeletionButton.replaceWith(confirmDeletionButton
      .cloneNode(true));
    
    confirmDeletionButton =
      deleteMovieModal.querySelector('.btn--danger');

    // Reset event listeners
    cancelDeletionButton.removeEventListener('click', closeMovieDeletionModal);
    cancelDeletionButton.addEventListener('click', closeMovieDeletionModal);
    confirmDeletionButton.addEventListener(
      'click',
      deleteMovieHandler.bind(null, movieId)
    );
};

// Renders a movie card for movie listing
const renderNewMovieElement =
  (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
      <div class="movie-element__image">
        <img src="${imageUrl}" alt="${title}">
      <div>
      <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
      </div>
    `;
    newMovieElement.addEventListener(
      'click',
      startDeleteMovieHandler.bind(null, id)
    );
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
};

// Closes movie entry modal
const closeMovieModal = () => {
  addMovieModal.classList.remove('visible');
};

// Reveals movie modal for user input
const showMovieModal = () => {
  addMovieModal.classList.add('visible');
  toggleBackdrop();
};

// Clears user input from movie entry modal
const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = '';
  }
};

// Cancels any input to movie entry modal
// and closes modal
const cancelAddMovieHandler = () => {
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
};

// Sets value for image and text nodes
// of movie card
const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Please enter valid values (rating ' + ratingValue +
      'between 1 and 5.)');
    return;
  }

  const newMovie = {
    id: (Math.random() * 100).truncate.toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  };

  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

// Assures that the movie modal, the
// movie deletion modal and the movie
// inputs are cleared.
const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
  clearMovieInput();
};

// EVENT LISTENERS
startAddMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
