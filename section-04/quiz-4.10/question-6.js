let sum = 0;
for (let i = 0; i < 5; i++) {
  console.log(`Outer Loop: Value of sum => ${sum}`);
  console.log(`Outer Loop: Value of i => ${i}\n`);
  for (let j = 0; j < 2; j++) {
    console.log(`Inner Loop: Value of j => ${j}\n`);
    if (i >= 2) {
      continue;
    }
    console.log(`Innner Loop: Value of i => ${i}`);
    console.log(`${sum} + ${i} + ${j} = ${sum + i +j}\n`);
    sum = sum + i + j;
  }
}
console.log(`Final Value of sum => ${sum}\n`);
