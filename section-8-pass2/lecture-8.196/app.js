const prices = [10.99, 5.99, 3.99, 6.59];

console.log('prices[] =>');
console.table(prices);

/* COMMENTED OUT: REFACTORED BELOW FOR REVERSE SORT
   As reverseSortedPrices().
const sortedPrices = prices.sort( (a, b) => {
  if (a > b) {
    // 1 signifies second operand should remain
    // after the first.
    return 1;
  } else if (a === b) {
    // 0 signifies leaving both operands where
    // they are.
    return 0;
  } else {
    // -1 signifies second operand should move
    // before the first.
    return -1;
  }
});
*/

const reverseSortedPrices = prices.sort( (a, b) => {
  if (a > b) {
    // -1 signifies that second operand should move
    // before the first.
    return -1;
  } else if (a === b) {
    // 0 signifies leaving both operands where they are.
    return 0;
  } else {
    // 1 signifies that second operand should remain after
    // the first.
    return 1;
  }
});

console.log('reverseSortedPrices[] =>');
console.table(reverseSortedPrices);
