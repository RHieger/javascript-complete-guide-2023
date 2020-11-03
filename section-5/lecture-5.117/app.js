// These functions live in the JavaScript
// Heap (long term memory allocation)

function getUserName() {
  return prompt("Your Name: ", "");
}

function greet() {
  const userName = getUserName();
  console.log("\nHello, " + userName + "!\n");
}

// Task #1: Demonstrate Heap Storage:
console.log("Task #1: Demonstrate the JavaScript Heap...\n");
console.warn("\nThese functions live on the JavaScript Heap:\n");
console.log( "\n", getUserName.toString(), "\n" );
console.log( "\n", greet.toString(), "\n" );

// Task #2: Demonstrate Stack Storage:
console.log("\nTask #2: Demonstrate the JavaScript Stack...\n");
console.warn(
  "\nSEQUENCE:\n1. anonymous function calls greet() to Stack\n" +
  "2. greet() function calls getUserName() to Stack.\n" +
  "3. getUserName() returns prompt() placing it on Stack.\n" +
  "4. User inputs userName which is returned to greet().\n" +
  "5. prompt() is popped off the Stack.\n" +
  "6. console.log logs userName to console completing\n\xa0\xa0\xa0execution.\n" +
  "7. greet() is popped off the Stack.\n" +
  "8. Finally, the anonymous function that called everything\n\xa0\xa0\xa0else" +
  " is popped off the Stack (all items remain in Heap).\n\n"
);
console.log(
  "\ngreet() will be called (and placed on the Stack)" +
  "\nin 5 seconds...\n"
);

setTimeout(greet, 5_000);
