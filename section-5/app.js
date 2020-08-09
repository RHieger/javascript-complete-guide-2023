let name = 'Bobby';

function greet() {
  let age = 58;
  // shadowed variable. Will only be used by console.log()
  // inside the greet() function--local scope
  let name = 'Joanie';
  console.log(name, age);
}

// console.log(name, age); // will not work because age is local scope

console.log(name);  // This will display Bobby, name at global scope

greet();
