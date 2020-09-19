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

