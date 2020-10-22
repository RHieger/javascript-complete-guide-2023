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

// Task 3: Demonstrate Peculiar Behavior of var Keyword
var myName = "Bobbyski";

console.log("\nTask #3: Demonstrate Peculiar\nBehavior of var keyword...\n");

console.log(`\nvar myName = ${myName}`);

if (myName === "Bobbyski") {
  var hobbies = ["Word Games", "Block Puzzles"];
  console.log(`myName = ${myName};\nhobbies = ${hobbies}\n`);
}

console.log("\nAccess hobbies outside of if statement that spawned it...\n");
console.log("\n", myName, hobbies);

function greet3() {
  console.log(`\nmyName: ${myName}`);
  console.log(`hobbies[] =>\n${hobbies}`);
}

console.log("\naccess myName and hobbies[] from within function below...\n");
console.log( "\n", greet3.toString() );
greet3();

// Task #4: Demonstrate Corrective Behavior of let Keyword
console.log("\nTask #4: Demonstrate Corrective\nBehavior of let Keyword...\n");

if (myName === "Bobbyski") {
  let myHobbies = ["Piano", "Reading"];
  console.log(`\nmyName: ${myName}\nmyHobbies:\n${myHobbies}`);
}

console.warn(
  "\nThe above data was logged from an if statement" +
  " and the let keyword was used\nto declare myHobbies[]\n"
);

console.log(
  "\nNOW try to log both myName and myHobbies\n" +
  "from outside of the if statement...\n"
  );

try {
  console.log(`myName: ${myName}\nmyHobbies[]:\n${myHobbies}\n`);
} catch (error) {
  console.warn("\n", error);
}

console.warn(
  "\nNOTE: Now local scope is respected.\n" +
  "This kind of scope is called Block Scope.\n"
  );
