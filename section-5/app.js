var name = 'Bobby';

if (name === 'Bobby') {
  // hobbies is global because it does not occur within a function,
  // and can be accessed outside of the if statement...strange behavior
  // var hobbies = ['Sports', 'Cooking'];
  // What happens when hobbies is declared with let?
  let hobbies = ['Sports', 'Cooking'];  // throws error hobbies is not defined
  console.table(hobbies);  // differs from instructor code, which uses log
}

function greet() {
  let age = 58;
  // shadowed variable. Will only be used by console.log()
  // inside the greet() function--local scope
  let name = 'Joanie';
  console.log(name, age, hobbies);
}

// console.log(name, age); // will not work because age is local scope

// With use of let keyword, hobbies[] is inaccessible to this outer scope
// usage of console.log(), because hobbies[] is declared in what is known
// as block scope--that is, within the confines of the curly braces defining
// the scope of a function, a control statement, but not an object. Objects
// do not allow declaration of variables, but depend on key-value pairs.
console.log(name, hobbies);  // This will display Bobby, name at global scope

greet();
