/**
 * 
 * Lecture 9.227: Object Destructuring
 * 
 * Robert Hieger
 * January 15, 2023
 * 
 * OBJECTIVE: In Lecture 9.227, the objective is to
 * refactor the renderMovies() function such that it
 * takes advantage of object destructuring so code
 * is streamlined and more adherent to DRY.
 *  
 */

// Capture button nodes:
const addMovieBtn = document
  .getElementById('add-movie-btn');

const searchBtn = document.getElementById('search-btn');

// Datastore for Movie Objects:
const movies = [];

// Movie Functions:

const renderMovies = (filter = '') => {
  // Capture required DOM element.
  const movieList = document
    .getElementById('movie-list');
  
  // Clear movie list if populated.
  // NOTE: Not ideal approach as it will result
  // in processing overhead every time the
  // function is called. Used here merely as
  // an expedient.
  movieList.innerHTML = '';

  // Reveal movieList if movies have been entered:
  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return; // allow escape from conditional
            // enabling setting of movieList
            // to empty string.
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter
    ? movies
    : movies.filter(
      movie => movie.info.title.includes(filter)
    );

  // Append new movies:
  filteredMovies.forEach( movie => {
    const movieElement = document.createElement('li');
    const { info } = movie;
    let text = info.title + ' - ';
    // Get additional input for movie list item:
    for (key in info) {
      if (key !== 'title') {
        text += `${key}: ${info[key]}`;
      }
    }
    movieElement.textContent = text;
    movieList.append(movieElement);
  });

};

const addMovieHandler = () => {
  
  // Capture required nodes:
  const title = document.getElementById('title').value;
  const extraName = document
    .getElementById('extra-name').value;
  const extraValue = document
    .getElementById('extra-value').value;
  
  // Validate user input:
  if (
      title.trim() === '' ||
      extraName.trim() === '' ||
      extraValue.trim() === ''
    ) {
      return;
  }
  const newMovie = {
    info: {
      title,
      [extraName]: extraValue
    },
    // Assures that ID number is integer minimum of 1000.
    id: Math.trunc(Math.random() * 1000) + 1000
  };
  movies.push(newMovie);
  // Display rendered movies:
  renderMovies();
};

const searchMovieHandler = () => {
  // Capture filter input element.
  const keyword = document
    .getElementById('filter-title').value;
  renderMovies(keyword);
};

// EVENT LISTENERS:

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
