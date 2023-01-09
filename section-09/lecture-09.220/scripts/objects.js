/**
 * 
 * Lecture 9.220: Demo App & Shorthand Property Syntax
 * 
 * Robert Hieger
 * January 9, 2023
 * 
 * OBJECTIVE: Create a demo application that allows a
 * user to enter the name and additional information
 * about a favorite movie. Additionally, search
 * functionality will be included to enable a user to
 * search for a movie (ostensibly already entered).
 * 
 * Task #1: Capture the nodes necessary to reference
 * the two buttons--Add Movie and Search.
 * 
 * Task #2: Code the addMovieHandler() function.
 * 
 * Task #3: Add an event listener to "Add Movie" Button.
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
