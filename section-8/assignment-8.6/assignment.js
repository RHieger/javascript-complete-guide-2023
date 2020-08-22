const task1 = document.getElementById('task1');
const task2 = document.getElementById('task2');
const task3 = document.getElementById('task3');
const task4 = document.getElementById('task4');

const numbers = [1, 5, 7, 25, 36, 227, 58, 39, 22, -37];

const task1Handler = () => {
  console.log('numbers[] =>');
  console.table(numbers);
  
  const filteredSet = numbers.filter( number => number > 6 );
  console.log('numbers[] filtered for numbers > 5 =>');
  console.table(filteredSet);
  
  console.log('Map numbers[] to objects =>');
  const mappedNumbers = numbers.map( (value) => {
    const item = { number: value };
    return item;
  });
  console.log(mappedNumbers);

  console.log('Return reduced numbers[] =>');
  const product = numbers.reduce(
    (
      previousValue,
      currentValue,
      currentIndex,
      numbers
    ) => {
      return previousValue *= currentValue;
    }, 1);
  console.log('product of numbers[] =>');
  console.log(product);
}

  // EVENT LISTENERS:

task1.addEventListener('click', task1Handler);