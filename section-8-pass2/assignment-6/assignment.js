const myNumbers = [
  22, -6, 34, 99, 1.75,
  -39.78, 10, 1.55, 3, -66.23
];

alert(`Contents of myNumbers[] Array:\n${myNumbers}`);

const greaterThan5 = myNumbers.filter(number => number > 5);

// EVENT LISTENERS:

const item1 = document.getElementById("task1");
item1.addEventListener("click", () => {
  console.log("TASK #1:\n");
  console.log("myNumbers[] filtered for number > 5...");
  console.table(greaterThan5);
  alert("PROCEED TO NEXT TASK.");
  console.clear()
});
