/**
 * 
 * Lecture 8.203: Understanding Array Destructuring
 * 
 * Robert Hieger
 * 12/30/2022
 * 
 * Objective: TBD.
 */

const nameFragments = [ 'Sam', 'Rogers', 'Mr.', 42  ];

console.log('\n\n\tDEMONSTRATE USE OF ARRAY DESTRUCTURING:');
console.log('\t--------------------------------------\n');

console.log('\nWe start with the nameFragments[] array:');
console.table(nameFragments);

console.log(
  '\n\nNow we will destructure the above array' +
  ' breaking it into\nits constituent elements to' +
  ' create a string object, using\nthe following' +
  ' syntax:\n\n' +
  'const [firstName, lastName, ...additionalData] ' 
  + '= nameFragments;\n\n'
);

// Destructure the array:
const [
  firstName, lastName,
  ...additionalData
] = nameFragments;

console.log(
  '\nWhat the above statement does is to' +
  ' break apart the above\narray into strings' +
  ' that can then be assembled however we\nsee' +
  ' fit. "...additionalData" uses the rest ' +
  'operator to\nextract all remaining data ' +
  'from the array. Note, however,\nthat because ' +
  'the rest of the data is two array elements,' +
  '\nthey will not be transformed into a string.'
);

console.log(
  '\n\nHere is the output of the destructured array:\n'
);

// Output destructured array:

console.log(firstName, lastName);
console.log('\nAdditional Data:\n');
console.table(additionalData);
