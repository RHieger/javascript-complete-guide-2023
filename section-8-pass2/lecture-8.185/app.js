// Create an array: Method #1 (Recommended)
const numbers = [1, 2, 3];

console.log('numbers[] array created using bracket notation =>');
console.table(numbers);

// Create an array using Array() constructor: Method #2

// will initialize empty array with length of 5
// const moreNumbers = new Array(5);

const moreNumbers = new Array(4, 5);

console.log('moreNumbers[] array created using Array() constructor =>');
console.table(moreNumbers);

// Create array with Array() Constructor
// Omitting new keyword: Method #3
const andMoreNumbers = Array(10, 12);

console.log('andMoreNumbers[] created with Array() constructor and' +
' omitting new keyword =>');
console.table(andMoreNumbers);

// Create array with Array.of(): Method #4
const yetMoreNumbers = Array.of(-10, -12);

console.log('yetMoreNumbers[] created using Array.of() =>');
console.table(yetMoreNumbers);

// Create array with Array.from(): Method #5
const myString = Array.from('Hello World!');

console.log('myString =>');
console.table(myString);

// Create Array from NodeList: Method #6
const listItems = document.querySelectorAll('li');

console.log('listItems =>');
console.log(listItems);
console.log('Converting listItems to array...');

const listArray = Array.from(listItems);

console.log('listArray[] =>');
console.log(listArray);