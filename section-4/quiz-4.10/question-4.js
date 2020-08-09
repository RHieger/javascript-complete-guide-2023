let sum = 0;
for (let i = 0; i < 5; i++) {
  console.log(`Outer Loop: Value of i => ${i}`);
  console.log(`Outer Loop: Value of sum => ${sum}\n`);
  for (let j = 0; j < 2; j++) {
    sum = sum + i + j;
    console.log(`Inner Loop: Value of j => ${j}`);
    break; // ceases execution of inner loop
  }
}

console.log(`Value of sum => ${sum}\n`);
