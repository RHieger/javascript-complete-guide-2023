const nameData = ['Robert', 'Hieger', 'Mr.', 58];

console.log('nameData =>');
console.table(nameData);

// Demonstrate destructing nameData

// NOTE: the constant names in the array bracket
// are assigned one after the other to each
// successive element in the nameData array.
const [ firstName, lastName, ...otherInformation ] = nameData;

console.log('Destructured nameData[] =>\n',
firstName, lastName, otherInformation);
