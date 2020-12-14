const mainHead = document.getElementById("main-title");
const uList = document.querySelector("ul");
const uListPrevSibling = uList.previousElementSibling;

// Change Style on mainHead
mainHead.style.color = "#ffffff";  // white
mainHead.style.backgroundColor = "#000000";  // black

// Capture first instance of <li>
const liFirst = document.querySelector('li');

// TASK #1: SELECT <ul> from child liFirst
const ulFromChild = liFirst.parentElement;
const headerFromSibling = ulFromChild.previousElementSibling;

console.log("liFirst =>\n");
console.log(liFirst, "\n");
console.log("SELECT <ul> from child liFirst =>\n");
console.log(ulFromChild, "\n");

// TASK #2: Select sibling element of <ul> (<heading>)
console.log("Sibling to <header>: <ul>\n");
console.log(ulFromChild, "\n");
console.log("Select previous element sibling of <ul> =>\n");
console.log(ulFromChild.previousElemenSibling, "\n")
