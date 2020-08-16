const prices = [10.99, 5.99, 3.99, 6.59];

const tax = 0.19;

const filteredArray = prices.filter( (price, index, prices) => {
  return price > 6;
});

// NOTE: Original array remains untouched.
console.log('prices: ', prices);
console.log('filteredArray (prices > 6) => ', filteredArray);
