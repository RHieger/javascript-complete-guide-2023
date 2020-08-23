const numbers = [1, 2, 3];  // most common way of creating array

// Less common way to create array using constructor
const moreNumbers = new Array();

const stringArray = new Array('Hi!', 'Welcome!');

// Just one argument to the Array constructor will
// return an empty array with the number of elemnts
// specified in that one argument. Slower performance
// than prevalent declaration type.
// const yetMoreNumbers = new Array(5);

// More useful means of declaring an array.
// This will take an array-like object and
// split it into individual elements.
const yetMoreNumbers = Array.from('Hello!');

// Another way of declaring an array. Very rarely
// used, and slower performance than prevalent
// declaration type.
// const stillMoreNumbers = Array.of(4, 5, 6);

// Create a node list from nodes in the DOM:
const listItems = document.querySelectorAll('li');

const arrayListItems = Array.from(listItems);

console.log(numbers);
console.log(moreNumbers);  // will log empty array
console.log(stringArray);
console.log(yetMoreNumbers);
// console.log(stillMoreNumbers);
console.log(arrayListItems);