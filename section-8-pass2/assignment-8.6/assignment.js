const myNumbers = [
  22, -6, 34, 99, 1.75,
  -39.78, 10, 1.55, 3, -66.23
];

const myNumberSet = new Set();

myNumberSet.add(1);
myNumberSet.add(22);
myNumberSet.add(37);
myNumberSet.add(65.32);
myNumberSet.add(-47);
myNumberSet.add(14);
myNumberSet.add(-3);
myNumberSet.add(-7);
myNumberSet.add(58);
myNumberSet.add(34.27);

const greaterThan5 = myNumbers.filter(number => number > 5);

const numberObject = myNumbers.map( number => {
  return {number: number};
});

const myNumbersProduct = myNumbers.reduce( (lastValue, currentValue) => {
  return lastValue * currentValue;
});

const findMaximum = ( (...myNumbers) => {
  let curMaximum = myNumbers[0];
  myNumbers.forEach( (number) => {
    if (number > curMaximum) {
      curMaximum = number;
    }
  });
  return curMaximum;
});

const maxNumber = findMaximum(...myNumbers);
  
const findMaxMin = ( (...numbers) => {
  let curMaximum = numbers[0];
  let curMinimum = numbers[0];
  myNumbers.forEach( (number) => {
    for (number of numbers) {
      if (number > curMaximum) {
        curMaximum = number;
      } else if (number < curMinimum) {
        curMinimum = number;
      }
    }
  });
  return [curMaximum, curMinimum];
});

const [maximum, minimum] = findMaxMin(...myNumbers);

const nextTask = () => {
  alert("PROCEED TO NEXT TASK.");
  console.clear();
};

const printTaskHeader = (taskNumber) => {
  console.log(`TASK #${taskNumber}:\n`);
}

const printMappedNumbers = () => {
  numberObject.forEach(object => console.log(object));
}

const exit = () => {
  alert("CLICK OK TO EXIT.");
}

const addToSet = (set, item) => {
  if ( set.has(item) ) {
    throw "ERROR: You have attempted to add a duplicate item to Set() object.";
  }
  try {
    set.add(item);
  } catch (err) {
    console.error(e);
  }
};

alert(`Contents of myNumbers[] Array:\n${myNumbers}`);

// EVENT LISTENERS:

const task1 = document.getElementById("task1");
task1.addEventListener("click", () => {
  printTaskHeader(1);
  console.log("myNumbers[] filtered for number > 5...");
  console.table(greaterThan5);
  nextTask();
  printTaskHeader(1);
  console.log("myNumbers[] mapped to array of objects...\n");
  printMappedNumbers();
  nextTask();
  printTaskHeader(1);
  console.log("myNumbers[] reduced to product of its elements...\n");
  console.table(myNumbersProduct);
  exit();
  console.clear();
});

const task2 = document.getElementById("task2");
task2.addEventListener("click", () => {
  printTaskHeader(2);
  console.log("Find maximum value in myNumbers[]...\n");
  console.log(`Maximum value: ${maxNumber}`);
  exit();
  console.clear();
});

const task3 = document.getElementById("task3");
task3.addEventListener("click", () => {
  printTaskHeader(3);
  console.log("Find maximum and minimum values in myNumbers[]...\n");
  console.log(`Maximum value: ${maximum}`);
  console.log(`Minimum value: ${minimum}`);
  exit();
  console.clear();
});

const task4 = document.getElementById("task4");
task4.addEventListener("click", () => {
  printTaskHeader(4);
  console.log("myNumberSet{} =>\n");
  console.log("{\n");
  myNumberSet.forEach(number => {
    console.log(`\t${number}`);
  });
  console.log("}\n");
  console.log("Attempting to add duplicate to myNumberSet{}...\n");
  addToSet(myNumberSet, -7);
});
