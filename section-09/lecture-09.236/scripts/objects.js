/**
 * 
 * Lecture 9.236: Getters & Setters
 * 
 * Robert Hieger
 * February 4, 2023
 * 
 * OBJECTIVE: This lecture introduces the concept
 * of getters and setters in JavaScript objects.
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
      if (key !== 'title' && key !== '_title') {
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
      extraName.trim() === '' ||
      extraValue.trim() === ''
    ) {
      return;
  }
  const newMovie = {
    info: {
      set title(value) {
        if ( value.trim() === ' ' ) {
          this._title = 'DEFAULT';
          return; // prevent fall-through to
                  // assignment of "this"
        }
        this._title = value;
      },
      get title() {
        return this._title;
      },
      [extraName]: extraValue
    },
    // Assures that ID number is integer minimum of 1000.
    id: Math.trunc(Math.random() * 1000) + 1000,
    getFormattedTitle: function() {
      // Make movie title all caps.
      return this.info.title.toUpperCase();
    }
  };

  // Set title value
  newMovie.info.title = title;

  // Get title value
  console.log(newMovie.info.title);

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
