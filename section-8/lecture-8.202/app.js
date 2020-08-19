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
