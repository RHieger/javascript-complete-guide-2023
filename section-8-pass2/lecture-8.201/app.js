const data = 'newyork;10.99;2000';

console.log('data =>', data);

// Split string into array.

const transformedData = data.split(';');

console.log('Transform data into array...');
console.table(transformedData);
