const mainHead = document.getElementById("main-title");
const uList = document.querySelector("ul");

// Change Style on mainHead
mainHead.style.color = "#ffffff";  // white
mainHead.style.backgroundColor = "#000000";  // black

// Task #1: Capture first instance of <li>
const liFirst = document.querySelector('li');

console.log("First Instance of <li> element =>\n");
console.log(liFirst, "\n");

// Task #2 Select parent node of first instance of <li>
const firstLiParent = liFirst.parentNode;

console.log("Parent Node to first instance of <li> =>\n");
console.log(firstLiParent, "\n");