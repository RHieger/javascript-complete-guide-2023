const person1 = { name: 'Bobby' };
const person2 = { name: 'Joanie' };

console.log('ORIGINAL OBJECTS:\n\n');
console.log('person1() => ', person1);
console.log('person2() => ', person2);

console.log('Mapping additional data using object as key' +
' and returning nested array of key-value pairs...\n');

const personData =
new Map(
  [ [ person1, [ {date: Date(2020, 10, 3, 14, 3, 35).toString(), price: 35} ] ] ]
);

console.log('personData{} =>\n');
console.log(personData);
