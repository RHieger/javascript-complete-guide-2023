/**
 * 
 * Lecture 9.232: call() and apply()
 * 
 * Robert Hieger
 * January 29, 2023
 * 
 * OBJECTIVE: This lecture demonstrates the use
 * of the call() and apply() methods exposed by
 * the Function() object.
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
    const { info, ...otherProperties } = movie;
    console.log(otherProperties);
    let text = movie.getFormattedTitle() + ' - ';
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
    id: Math.trunc(Math.random() * 1000) + 1000,
    getFormattedTitle: function() {
      // Make movie title all caps.
      return this.info.title.toUpperCase();
    }
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
