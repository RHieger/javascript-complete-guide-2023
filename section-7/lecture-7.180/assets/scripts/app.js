const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

const deleteMovieHandler = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById('movie-list');
  // ES6 Method:
  listRoot.children[movieIndex].remove();
  // ES5 Method (Backward compatibility for older browsers)
  // listRoot.removeChild(listRoot.children[movieIndex]);
};

const closeMovieDeletionModal = () => {
  toggleBackDrop();
  deleteMovieModal.classList.remove('visible');
};

const startDeleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add('visible');
  toggleBackDrop();
  const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
  const confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

  cancelDeletionButton.addEventListener('click', closeMovieDeletionModal);
  confirmDeletionButton.addEventListener(
    'click',
    deleteMovieHandler.bind(null, movieId)
  );
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `
  newMovieElement.addEventListener(
    'click', startDeleteMovieHandler.bind(null, id)
  );
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
};

const toggleBackDrop = () => {
  backdrop.classList.toggle('visible');
};

const closeMovieModal = () => {
  addMovieModal.classList.remove('visible');
};

const showMovieModal = () => {
  addMovieModal.classList.add('visible');
  toggleBackDrop();
};

const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = '';
  }
};

const cancelAddMovieHandler = () => {
  closeMovieModal();
  clearMovieInput();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim () === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert(
      'Please enter valid values and rating between 1 and 5.'
      );
      return;
  }

  const newMovie = {
    id: Math.round(Math.random().toString() * 1_000),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  };

  movies.push(newMovie);
  // NOTE: the console log below is more
  // elaborate than the one provided by
  // the author, offering a formatted
  // message with title, image and rating
  // broken into 4 lines.
  console.log(
    '\nMovie Entered:\n' +
    'ID: ' + movies[0].id, '\n' +
    'Title: ' + movies[0].title, '\n' +
    'Cover Art URL:\n' + movies[0].image, '\n' +
    'Rating: ' + movies[0].rating, '\n'
  );
  closeMovieModal();
  toggleBackDrop();
  clearMovieInput();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
  clearMovieInput();
};

startAddMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
