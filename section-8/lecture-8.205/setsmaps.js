const ids = new Set([1, 2, 3]);

console.log('ids >', ids);

// Does ids have 1?

console.log('Does ids have 1? => ', ids.has(1));

// Iterate through entries of set:

console.log('Entries in ids set =>');

for ( const entry of ids.entries() ) {
  console.log(entry);
}

console.log('Values in ids set =>');

for ( const value of ids.values() ) {
  console.log(value);
}
