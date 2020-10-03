const person1 = { name: 'Bobby' };
const person2 = { name: 'Joanie' };

console.log('ORIGINAL OBJECTS:\n\n');
console.log('person1() => ', person1);
console.log('person2() => ', person2);

console.log('Mapping additional data using object as key' +
' and returning nested array of key-value pairs...\n');

const date1 = new Date(2020, 9, 3, 14, 3, 35);
const date2 = new Date(2020, 8, 30, 18, 22, 37);

const personData =
new Map(
  [ [ person1, [ {date: date1.toString(), price: 35} ] ] ]
);

personData.set(
  person2,
  [ {
    date: date2.toString(),
    price: 27.95
  } ]
);

console.log('personData() =>\n');
console.log(personData);

console.log('Extracting Map data by referencing key object from personData()...\n');
console.log(personData.get(person1));

console.log('Adding to personData()...\n');
console.log('Extracting person2 data...\n');
console.log(personData.get(person2));
