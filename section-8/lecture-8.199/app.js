const prices = [10.99, 5.99, 3.99, 6.59];

const tax = 0.19;

// NOTE: currentIndex and prices parameters are included
// only for completness here. Their values are never
// accessed in this implementation.
const sum = prices.reduce(
  (
    previousValue,
    currentValue,
    currentIndex,
    prices
  ) => {
    return previousValue + currentValue;
  }, 0);

  console.log('prices => ', prices);
  console.log('Output of prices.reduce() => ', sum);
