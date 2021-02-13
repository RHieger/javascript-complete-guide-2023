const mainHead = document.getElementById("main-title");
const uList = document.querySelector("ul");

// Change Style on mainHead
mainHead.style.color = "#ffffff";  // white
mainHead.style.backgroundColor = "#000000";  // black

// Select second child of uList and log to console.
console.log("Second child of unordered list =>\n");
console.log(uList.children[1]);

// Use childNodes property to  select all elements
// and their children (element or text node).
console.log("childNodes of uList =>\n");
console.log(uList.childNodes);
