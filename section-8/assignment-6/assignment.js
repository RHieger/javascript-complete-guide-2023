/**
 * 
 * Section 8, Assignment #6
 * 
 * Robert Hieger
 * January 2, 2023
 * 
 * OBJECTIVES: Review Arrays and Iterables.
 * 
 * Task #1 Array Manipulation
 * 
 * 1) Create an array of numbers. Log to console.
 * 
 */

console.log('\n\n\tREVIEW ARRAYS & ITERABLES');
console.log('\t-------------------------\n\n');

// Operation #1: Log number array to console.

const myNumbers = [
  1, 2, 3, 5, 35, 78, 128, 256, 512, 1024
];

console.log('\n\nTask #1: Create Array of Numbers:\n\n');
console.log('Operation #1: Log myNumbers[] to console:\n\n');
console.log('Contents of myNumbers[]:\n');
console.table(myNumbers);

// Operation #2: Apply filter() Such that only numbers
// > 5 are included. Log to console.

const filteredArray = myNumbers
  .filter( number => number >5 );

console.log('\n\nOperation #2: Create filteredArray[]\n\n');

console.log('Contents of filterdArray[], numbers > 5:\n');
console.table(filteredArray);

// Operation #3: Create mapped array of filteredArray so
// that each array element is mapped to an object, the
// property of which has the value of that element.

const mappedArray = filteredArray
  .map( (number, idx, filteredArray) => {
    const filteredNumber =
    {
      index: idx,
      element: number,
      index: idx
    }
    return filteredNumber;
});

console.log(
  '\n\nOperation #3: Map filteredArray[] to Array ' +
  'of Objects:\n\n')
console.log('Contents of New mappedArray\n');
mappedArray.forEach( 
  (element) => console.log(element)
);

// Operation 4: Reduce filteredArray[].
console.log(
  '\n\nOperation 4: Reduce filteredArray[]--' +
  '(product of all elements):\n\n'
);

let newValue = 0;

const reducedNumber = filteredArray.reduce(
  (addativeValue, newValue) => 
  newValue *= addativeValue
);

console.log('Reduced Value of filteredArray[]\n');
console.log(reducedNumber);
