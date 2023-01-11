/**
 * 
 * Lecture 9.223: Adding the Filter Functionality
 * 
 * Robert Hieger
 * January 10, 2023
 * 
 * OBJECTIVE: In Lecture 9.223, now that movies are
 * output to the web page correctly, the objective of
 * this lecture assignment is to implement a filtering
 * functionality that will display only the movies
 * that contain the keywords provided by the user.
 *  
 */

// Capture button nodes:
const addMovieBtn = document
  .getElementById('add-movie-btn');

const searchBtn = document.getElementById('search-btn');

// Datastore for Movie Objects:
const movies = [];

// Movie Functions:

const renderMovies = () => {
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

  // Append new movies:
  movies.forEach( movie => {
    const movieElement = document.createElement('li');
    let text = movie.info.title + ' - ';
    // Get additional input for movie list item:
    for (key in movie.info) {
      if (key !== 'title') {
        text += `${key}: ${movie.info[key]}`;
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
  // TBD.
};

// EVENT LISTENERS:

addMovieBtn.addEventListener('click', addMovieHandler);
