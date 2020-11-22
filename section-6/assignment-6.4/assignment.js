// Capture nodes for assignment event listeners:

const task1 = document.getElementById("task1");

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

const sayHello2 = (greeting, name) => {
  console.log(`${greeting}, ${name}!\n`);
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
});