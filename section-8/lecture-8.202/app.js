const prices = [10.99, 5.99, 3.99, 6.59];

const nameFragments = ['Robert', 'Hieger'];

// Spread operator copies contents of nameFragments
// into a new array.
const copiedNameFragments = [...nameFragments];

console.log('nameFragments => ', nameFragments);
console.log('copiedNameFragments => ', copiedNameFragments);

// Demonstrate that nameFragments and copiedNameFragments are
// actually two distinct objects with their own unique memory
// addresses. Changes to one do not affect the other.

nameFragments.push('Mr.');

console.log('Updated nameFragments[] => ', nameFragments);
console.log('copiedNameFragments[] => ', copiedNameFragments);

// Use spread operator to extract number values from
// array and use Math method to manipulate them.

console.log('prices[] => ', prices);
console.log( 'minimum price in prices[] =>',
Math.min(...prices) );
