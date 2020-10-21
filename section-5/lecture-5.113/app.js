// Task #1: Declare a variable with let Keyword

let firstName = "Bobby";

console.log("Task #1: Declare a Variable with let Keyword...\n");

function greet() {
  console.log(`Hello, ${firstName}!`);
}

console.log("name =>\n");

console.log(greet());

// Task #2: Demonstrate Local Scope

function greet2() {
  // Local scope variable:
  let age = 58;
  console.log(`Hello, ${firstName}`);
}

console.log("Task #2: Demonstrate Local Scope...\n");
console.log("greet2() =>\n");
console.log( greet2.toString() );
console.log("Log local variable age from greet2() =>\n");

function logAge()  {
  try {
    console.log(age);
  } catch (error) {
    console.warn(error);
  }
}

logAge();
