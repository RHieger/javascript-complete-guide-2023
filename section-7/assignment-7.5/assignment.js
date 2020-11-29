// TASK #1: Select Task 1 Item in 2 Different Ways; change color
//                  to white and background color to black.


// Capture Task #1 in 2 Different Ways:
const taskSelection1 = document.getElementById("task-1");
const taskSelection2 = document.querySelector("li");
const taskSelection3 = document.getElementById("task-2");
const taskSelection4 = document.getElementById("task-3");

// TASK #2: Change Document Title in <head> to "Assignment - Solved!"
//                  using two different means of querying the <title> element,
//                  one using the document property, and the other using
//                  the specific element property in which <title> resides.

// Capture Task #2 Element in 2 Different Ways:
const windowTitle1 = document.head.querySelector("title");
const windowTitle2 = document.head;

// TASK #3: Select <h1> and change its content to "Assignment - Solved!"

// Capture Task #3 Element:
const mainHead = document.querySelector("h1");

// EVENT LISTENERS:

taskSelection1.addEventListener("click", () => {
  taskSelection1.style.color = "white";
});

taskSelection2.addEventListener("click", () => {
  taskSelection2.style.backgroundColor = "black";
});

taskSelection3.addEventListener("click", () => {
  windowTitle1.textContent = "Assignment - Solved!";
});

taskSelection4.addEventListener("click", () => {
  mainHead.textContent = "Assignment - Solved!";
});
