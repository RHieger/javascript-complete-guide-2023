const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

// THE WAY ALREADY EXPLORED:

console.log('prices => ', prices);
for (const price of prices) {
  taxAdjustedPrices.push( price * (1 + tax) );
}

console.log('Tax Adjusted Prices => ', taxAdjustedPrices);

// ANOTHER WAY OF DOING THE ABOVE:

console.log('Outputting Tax Adjusted Prices Using forEach():');

prices.forEach( (price, index, prices) => {
  const adjustedPrice = {
    index: index,
    taxAdjustedPrice: price * (1 + tax)
  };
  taxAdjustedPrices.push(adjustedPrice);
  console.log(adjustedPrice);
});
