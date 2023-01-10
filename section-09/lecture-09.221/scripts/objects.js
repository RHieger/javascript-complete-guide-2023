/**
 * 
 * Lecture 9.221: Rendering Elements Based on Objects
 * 
 * Robert Hieger
 * January 10, 2023
 * 
 * OBJECTIVE: In this lecture, the overall aim is to
 * refactor the logic from Lecture 9.220 so that rather
 * than logging the movie items to the JavaScript
 * console, they are rendered, using the DOM, to the
 * web page.
 * 
 * Task #1: Code the renderMovie() function.
 *  
 */

// Capture button nodes:
const addMovieBtn = document
  .getElementById('add-movie-btn');

const searchBtn = document.getElementById('search-btn');

// Datastore for Movie Objects:
const movies = [];

// Movie Functions:

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
  // FOR DIAGNOSTIC PURPOSES ONLY:
  console.log(movies);
};

// EVENT LISTENERS:

addMovieBtn.addEventListener('click', addMovieHandler);
