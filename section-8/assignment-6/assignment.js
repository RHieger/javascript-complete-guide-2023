/**
 * 
 * Section 8, Assignment #6
 * 
 * Robert Hieger
 * January 6, 2023
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
  .filter(number => number > 5);

console.log('\n\nOperation #2: Create filteredArray[]\n\n');

console.log('Contents of filterdArray[], numbers > 5:\n');
console.table(filteredArray);

// Operation #3: Create mapped array of filteredArray so
// that each array element is mapped to an object, the
// property of which has the value of that element.

const mappedArray = filteredArray
  .map((number, idx, filteredArray) => {
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

console.log(
  'Product of numbers in filteredArray[]:\n\n'
);
console.log(reducedNumber);

// Operation #5: Iterate Over myNumbers[] to get
// maximum number in array.

const getMaxNum = (...data) => {
  let maxNum = myNumbers[0];
  for (const num of data) {
    if (num > maxNum) {
      maxNum = num;
    }
  }
  return maxNum;
};

console.log(
  '\nOperation #5: Iterate over myNumbers[]\n' +
  'to Get Maximum Number\n\n'
);
console.log('\nMaximum Number in myNumbers[]:\n');
console.log(getMaxNum(...myNumbers));

// Operation #6: Get Minimum and Maximum Values
// from myNumbers[].

const getMaxMinNum = (...data) => {
  // Stores current value for max and min
  let currentMax = myNumbers[0];
  let currentMin = myNumbers[0];

  for (const num of data) {
    if (num > currentMax) {
      currentMax = num;
    }
    if (num < currentMin) {
      currentMin = num;
    }
  }
  return [currentMax, currentMin];
};

console.log(
  '\n\nOperation #6: Get Minimum and Maximum\n' +
  'Values from myNumbers[]\n\n'
);

const maxMin = getMaxMinNum(...myNumbers);

console.log(
  'Minimum and Maximum Values from myNumbers[]:\n'
);
console.table(maxMin);
console.log(`\nMaximum Value: ${maxMin[0]}`);
console.log(`Minimum Value: ${maxMin[1]}\n\n`);

// Operation #7: Create a list that rejects any
// duplicate values that are added.

const users = new Set();

users.add('Angela Brown');
users.add('Joey Anderson');
users.add('Emily Norton');

console.log(
  'Operation #7: Create List and Prove that It\n' +
  'Will Not Allow Duplicate Entries:\n\n'
);

console.log('Contents of users {}:');
console.log(users);

// Attempt to add duplicate value:
users.add('Joey Anderson');

// Prove that no duplicate value is allowed.
console.log('\nAdding Duplicate of Joey Anderson...\n');
console.log('\nAnd here is users Set Again:');

console.log(users);
console.log(
  '\nAs you can see, the duplicate entry is discarded.'
);
