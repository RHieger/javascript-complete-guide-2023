/**
 * 
 * Lecture 9.222: for-in Loops &
 * Outputting Dynamic Properties
 * 
 * Robert Hieger
 * January 10, 2023
 * 
 * OBJECTIVE: In Lecture 9.222, the aim is to refactor the
 * code from Lecture 9.221 such that the additional info
 * entered by the user will be appended to each movie list
 * item as well.
 * 
 * Task #1: Declare a private variable within the
 * renderMovie() function that references the title
 * property of the newMovie() object exposed by the
 * addMovieHandler() function.
 *  
 */

// Capture button nodes:
const addMovieBtn = document
  .getElementById('add-movie-btn');

const searchBtn = document.getElementById('search-btn');

// Datastore for Movie Objects:
const movies = [];

// Movie Functions:

const renderMovie = () => {
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
    movieElement.textContent = movie.info.title;
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
  renderMovie();
};

// EVENT LISTENERS:

addMovieBtn.addEventListener('click', addMovieHandler);
