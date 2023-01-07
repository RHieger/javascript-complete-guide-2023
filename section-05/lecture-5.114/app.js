// Task #1: Demonstrate "Hoisting"
console.log("Referencing Variable Declared with var Before it is Declared...\n");
console.log(`Name: ${firstName}`);

var firstName = "Bobby";

console.warn(
  "\nNOTE: There is no error, just an info" +
  " message that the variable is undefined." +
  "  This isbecause the variable has been declared, " +
  " but the JavaScript engine has not yet caught " +
  " up. Try again and see what happens:\n"
);

console.log(`\nName: ${firstName}\n`);
console.warn(
  "\nTHERE IT IS! This behavior is a result" +
  " of hoisting.\n"
);
