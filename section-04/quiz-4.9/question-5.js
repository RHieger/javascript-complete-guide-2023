let sum = 0;
console.log(`OUTER LOOP--\nInitial Value of sum: ${sum}`);
for (let i = 0; i < 3; i++) {
console.log(`OUTER LOOP--\nValue of i: ${i}`);
for (let j = 5; j > 2; j--) {
  console.log(`INNER LOOP--\nValue of j: ${j}`);
  sum = j + i;
  console.log(`INNER LOOP--\nNew Value of sum j + i: ${sum}`);
  }
}
