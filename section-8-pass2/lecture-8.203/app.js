const nameFragments = [
  'Robert',
  'Hieger',
  'Mr.',
  58
];

console.log('nameFragments[] =>');
console.table(nameFragments);

// Destructure nameFragments:

const [firstName, lastName] = nameFragments;

console.log('Destructuring nameFragments[]...');
console.log(`[firstName, lastName] => ${firstName} ${lastName}`);

// Use destructuring to list out all properties in
// nameFragments array.

const [
  fName,
  lName,
  ...otherInformation
] = nameFragments;

console.log('Use array destructuring to extract all data...');
console.log('fName, lName, ...otherInformation =>');
console.log(fName, lName, ...otherInformation);
