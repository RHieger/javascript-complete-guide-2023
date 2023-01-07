let sum = 0;
console.log(`BEFORE LOOP: Initial Value of sum => ${sum}`);
for (let i = 2; i <= 6; i++) {
  console.log(`INSIDE LOOP: Value of i => ${i}`);
  sum = sum + i;
  console.log(`INSIDE LOOP: Value of sum + i => ${sum}`);
}
console.log(`OUTSIDE LOOP Final Sum: ${sum}`);
