const nameFragments = [
  'Robert',
  'Hieger'
];

console.log('nameFragments[] =>');
console.table(nameFragments);

console.log('Creating copy of nameFragments[]...');

const copeiedNameFragments = [...nameFragments];

console.log('copiedNameFragments[] =>');
console.table(copeiedNameFragments);

console.log('Adding elements to nameFragments[]...');

nameFragments.push('Suzette', 'Rodriguez');

console.log('Contents of nameFragments[] =>');
console.table(nameFragments);
