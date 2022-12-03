/**
 * 
 * Lecture 7.177: Deleting Movie Elements
 * 
 * Robert Hieger
 * 12/03/2022
 * 
 * OBJECTIVE: Remove a movie item from those displayed
 * on screen (DOM) and delete the corresponding element
 * stored in the movies[] array.
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

const addMovieModal = document.getElementById('add-modal');

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
  (id, title, imageUrl, rating) => {
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
    newMovieElement
      .addEventListener(
        'click', deleteMovieHandler.bind(null, )
    );
    listRoot.append(newMovieElement);
  };

  // Delete a Movie Element from the Screen
const deleteMovieHandler = (movieId) => {
  // Contains index of movieId
  // passed to function.
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
    id: Math.random().toString(),
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
    newMovie.id, newMovie.title,
    newMovie.image, newMovie.rating
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
