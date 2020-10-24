// These functions live in the JavaScript
// Heap (long term memory allocation)

function getUserName() {
  return prompt("Your Name: ", "");
}

function greet() {
  const userName = getUserName();
  console.log("Hello, " + userName + "!");
}

// Task #1: Demonstrate Heap Storage.
console.log("Task #1: Demonstrate the JavaScript Heap...\n");
console.warn("\nThese functions live on the JavaScript Heap:\n");
console.log( "\n", getUserName.toString(), "\n" );
console.log( "\n", greet.toString(), "\n" );
