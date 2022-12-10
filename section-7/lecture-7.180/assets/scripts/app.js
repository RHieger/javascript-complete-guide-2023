/**
 * 
 * Lecture 7.180: Finishing the App
 * 
 * Robert Hieger
 * 12/06/2022
 * 
 * OBJECTIVE: TBD
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


// DOM Objects
const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelector('input');
const textEntrySection = document.getElementById('entry-text-section');
const deleteMovieModal = document.getElementById('delete-modal');

// Empty array to hold movie objects
const movies = [];

// CALLBACK FUNCTIONS

// Hides backdrop when visible and
// reveals it when invisible
const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};
