const myNumbers = [
  22, -6, 34, 99, 1.75,
  -39.78, 10, 1.55, 3, -66.23
];

const greaterThan5 = myNumbers.filter(number => number > 5);

const numberObject = myNumbers.map( number => {
  return {number: number};
});

const myNumbersProduct = myNumbers.reduce( (lastValue, currentValue) => {
  return lastValue * currentValue;
});

const nextTask = () => {
  alert("PROCEED TO NEXT TASK.");
  console.clear();
}

const printTaskHeader = (taskNumber) => {
  console.log(`TASK #${taskNumber}:\n`);
}

const printMappedNumbers = () => {
  numberObject.forEach(object => console.log(object));
}

const exit = () => {
  alert("CLICK OK TO EXIT.");
}

alert(`Contents of myNumbers[] Array:\n${myNumbers}`);

// EVENT LISTENERS:

const task1 = document.getElementById("task1");
task1.addEventListener("click", () => {
  printTaskHeader(1);
  console.log("myNumbers[] filtered for number > 5...");
  console.table(greaterThan5);
  nextTask();
  printTaskHeader(1);
  console.log("myNumbers[] mapped to array of objects...\n");
  printMappedNumbers();
  nextTask();
  printTaskHeader(1);
  console.log("myNumbers[] reduced to product of its elements...\n");
  console.table(myNumbersProduct);
  exit();
  console.clear();
});
