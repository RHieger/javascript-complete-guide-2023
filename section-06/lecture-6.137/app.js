const sumUp = (...numbers) => {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
};

const getDifference = (...numbers) => {
  let difference = 0;
  for (const number of numbers) {
    difference -= number;
  }
  return difference;
};

console.log(
  "SUM OF: [5, 7, 10, -27, 14, 36, -2, 22, 96, -30] =>\n"
  );
  console.log(`${  sumUp(5, 7, 10, -27, 14, 36, -2, 22, 96, -30)}\n`);

  console.log(
    "\nDIFFERENCE OF: [5, -7, 36, -22, 34, 78, -102, 22, -50] =>\n"
  );

  console.log(`${getDifference(5, -7, 36, -22, 34, 78, -102, 22, -50)}\n`);
  