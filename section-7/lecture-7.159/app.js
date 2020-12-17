const uList = document.body
              .firstElementChild
              .nextElementSibling;

const firstListItem = uList.firstElementChild;
const uList2 = document.querySelector("ul");

// TASK #1: Select first element child of <ul>
console.log("Select the first element child of <ul> =>\n");
console.log(firstListItem, "\n");

// TASK #2: Select first element child of <ul>
// using QuerySelector()
console.log("Select first element child of <ul> using querySelector()...\n");
console.log(uList2.firstElementChild, "\n");
