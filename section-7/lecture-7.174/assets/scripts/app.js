const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;

const toggleBackDrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible');
  toggleBackDrop();
};

const cancelAddMovie = () => {
  toggleMovieModal();
};

const addMovieHandler = () => {

};

const backdropClickHandler = () => {
  toggleMovieModal();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', toggleMovieModal);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
