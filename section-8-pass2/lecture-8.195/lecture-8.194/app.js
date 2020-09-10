const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

prices.forEach( (price, index, array) => {
  // NOTE: 2nd property is how this was treated in the
  // lecture material. I took it one step further by
  // using parseFloat() and toFixed() to limit output
  // to 2 decimal places. This output shows the rawTotal
  // and the fixed decimal output. Additionally, I show
  // the pre-tax price.
  const adjustedPrice = {
    index: index,
    price: price,
    rawTotal: price * (1 + tax),
    total: Number.parseFloat(price * (1 + tax)).toFixed(2)
  };
  taxAdjustedPrices.push(adjustedPrice);
});

console.log('prices[] =>');
console.table(prices);

console.log('taxAdjustedPrices[] =>');
console.log(taxAdjustedPrices);
