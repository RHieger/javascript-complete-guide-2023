const nameFragments = [
  'Robert',
  'Hieger'
];

// USE CASE #1:

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


// USE CASE #2:

const prices = [10.99, 5.99, 3.99, 6.59];

console.log('prices[] =>');
console.table(prices);

console.log('Minimum price in prices[] =>');

const minimumPrice = Math.min(...prices);

console.log(`minimumPrice => ${minimumPrice}`);
