const data = 'newyork;10.99;2000';

console.log('data =>', data);

// Split string into array.

const transformedData = data.split(';');

console.log('Transform data into array...');
console.table(transformedData);

const nameFragments = [
  'Robert',
  'Hieger'
];

console.log('nameFragments[] =>');
console.table(nameFragments);

// Join array into string.

const fullName = nameFragments.join(' ');

console.log('Merge nameFragments[] into string...');
console.log(`fullname => ${fullName}`);
