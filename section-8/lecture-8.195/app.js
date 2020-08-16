const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map( (price, index, prices) => {
  const adjustedPrices = {
    index: index,
    taxAdjustedPrice: price * (1 + tax)
  };
  return adjustedPrices;
});

console.log('Pre-Tax Prices => ', prices);
console.log('Tax-Adjusted Prices => ', taxAdjustedPrices);
