// Capture nodes for assignment event listeners:

const task1 = document.getElementById("task1");
const task2 = document.getElementById("task2");
const task3 = document.getElementById("task3");
const task4 = document.getElementById("task4");

// TASK #1: Refactor sayHello() as Arrow Function:
/*
function sayHello(name) {
  console.log('Hi ' + name);
}
*/

const sayHello = (name) => {
  console.log(`Hi, ${name}!\n`);
};

// TASK #2 Refactor sayHello() with 3 Different Syntaxes

const sayHello2 = (greeting, name) => console.log(`${greeting}, ${name}!\n`);

const sayHello3 = () =>  console.log("Hello, Soda!");

const sayHello4 = (greeting) => greeting;

// TASK #3: Refactor sayHello() to Use a Default Argument

const sayHello5 = (greeting = "Goov Morning!\n") => greeting;

// TASK #4 checkInput Function to take Indeterminate Number
// of Arguments

const checkInput = (callBack, ...myStrings) => {
  // Checks to see if no values have been passed to function:
  let isEmptyString = false;
  for (const string of myStrings) {
    if (!string) {
      isEmptyString = true;
      break;
    }
  }
  if (!isEmptyString) {
    callBack();
  } else if (isEmptyString) {
    alert("There is an empty string in this collection!");
  }
};

//  EVENT LISTENERS
task1.addEventListener("click", () => {
  console.clear();
  console.log('\nsayHello() Function:\n');
  console.log("\n", sayHello.toString(), "\n\n");
  sayHello("Bobby"); 
});

task2.addEventListener("click",  () => {
  console.clear();
  console.log("\nsayHello2() Function:\n");
  console.log("\n", sayHello2.toString(), "\n\n");
  sayHello2("Hello there", "Bobby");
  console.log("\nsayHello3() Function:\n");
  console.log("\n", sayHello3.toString(), "\n\n");
  sayHello3();
  console.log("\nsayHello4() Function:\n");
  console.log("\n", sayHello4.toString(), "\n\n");
  console.log(sayHello4("Good morrow to you both.\n"));
});

task3.addEventListener("click", () => {
  console.clear();
  console.log("\nsayHello5() Function:\n");
  console.log("\n", sayHello5.toString(), "\n\n");
  console.log("Using Default Argument...\n\n");
  console.log(sayHello5());
  console.log("\nUsing Passed Argument...\n\n");
  console.log(sayHello5("Hello, Bobby!\n"));
}); 

task4.addEventListener("click", () => {
  console.clear();
  console.log("\ncheckInput() Function:\n");
  console.log("\n", checkInput.toString(), "\n\n");
  checkInput( () => {
    console.log("All strings are not empty strings!");
  }, "Thing1", "Thing2", "fart", "endorsement", "confound");
  checkInput( () => {

  }, "Guilty as charged", "firecracker", "pretentious", "");
});
