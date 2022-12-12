/**
 * 
 * Lecture 8.185: Creating Arrays
 * 
 * Robert Hieger
 * 12/11/2022
 * 
 * Objective: Explore different methods of creating
 *            arrays in JavaScript.
 * 
 */

// Method #1: Most commonly used
const numbers = [1, 2, 3];
console.log(numbers);

// Method #2: Instantiating an Array Object
const moreNumbers = new Array();  // instantiates blank array
console.log(moreNumbers);

const evenMoreNumbers = new Array(
  1, 5
);  // Passing two elements to array constructor
console.log(evenMoreNumbers);

const yetMoreNumbers = new Array(5);  // instantiats array with
                                      // 5 empty elements
console.log(yetMoreNumbers);
