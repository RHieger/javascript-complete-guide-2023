// TASK #1: Select Task 1 Item in 2 Different Ways; change color
//                  to white and background color to black.

// 1: Capture Task #1 in 2 Different Ways:
const taskSelection1 = document.getElementById("task-1");
const taskSelection2 = document.querySelector("li");



// EVENT LISTENERS:

taskSelection1.addEventListener("click", () => {
  taskSelection1.style.color = "white";
});

taskSelection2.addEventListener("click", () => {
  taskSelection2.style.backgroundColor = "black";
});