const myNumbers = [
  22, -6, 34, 99, 1.75,
  -39.78, 10, 1.55, 3, -66.23
];

alert(`Contents of myNumbers[] Array:\n${myNumbers}`);

const greaterThan5 = myNumbers.filter(number => number > 5);

const numberObject = myNumbers.map( number => {
  return {number: number};
});

const nextTask = () => {
  alert("PROCEED TO NEXT TASK.");
  console.table(greaterThan5);
}

const printTaskHeader = (taskNumber) => {
  console.log(`TASK #${taskNumber}:\n`);
}

const printMappedNumbers = () => {
  numberObject.forEach(object => console.log(object));
}

// EVENT LISTENERS:

const task1 = document.getElementById("task1");
task1.addEventListener("click", () => {
  printTaskHeader(1);
  console.log("myNumbers[] filtered for number > 5...");
  nextTask();
  printTaskHeader(1);
  console.log("myNumbers[] mapped to array of objects...\n");
  printMappedNumbers();
  nextTask();
  printTaskHeader(1);
});
