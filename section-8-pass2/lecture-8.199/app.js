const prices = [10.99, 5.99, 3.99, 6.59];
const filteredPrices = prices.filter(price => price > 6.00);

console.log('prices[] =>');
console.table(prices);

console.log('prices[] filtered for price > 6.00 =>');
console.table(filteredPrices);
