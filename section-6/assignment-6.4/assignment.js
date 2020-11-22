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



//  EVENT LISTENERS
task1.addEventListener("click", () => {
  console.log('\nsayHello() Function:\n');
  console.log("\n", sayHello.toString(), "\n");
  sayHello("Bobby");  
});