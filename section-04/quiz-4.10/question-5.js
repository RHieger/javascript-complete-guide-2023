let sum = 0;
for (let i = 0; i < 5; i++) {
  console.log(`\nOuter Loop: Value of i => ${i}`);
  console.log(`Outer Loop: Value of sum => ${sum}\n`);
  for (let j = 0; j < 2; j++) {
    console.log(`Inner Loop: Value of j => ${j}`);
    console.log(`${sum} + ${i} + ${j} = ${sum + i + j}\n`);
    sum = sum + i + j;
    continue;
  }
}
console.log();