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

// USE CASE #3:
// REMEMBER: Objects are reference types.
// Therefore, any changes made to a copy
// of an object is also made to the original.

const persons = [
  { name: 'Bobby', age: 58 },
  { name: 'Carl', age: 63}
];

const copiedPersons = [...persons];

console.log('persons[] =>');
console.table(persons);

console.log('copiedPersons[] =>');
console.table(copiedPersons);

persons.push(
  { name: 'Nathan', age: 106 }
);

console.log('Adding person to persons[]...');
console.log('persons[] =>');
console.table(persons);

console.log('copiedPersons[] =>');
console.table(copiedPersons);
console.log('persons[] and copiedPersons[] have discreet values.');

console.log('Changing age of persons[0]...');

persons[0].age = 37;

console.log('persons[] =>');
console.table(persons);

console.log('copiedPersons[] =>');
console.table(copiedPersons);

console.log(
  'WHAT?! Why did the age change in both arrays?\n\n' + 
  'REMEMBER. Objects are reference types. Changes ' +
  'made to property of object in one array would ' +
  'also be made to the same object in the ' +
  'copied array.'
);
