'use strict';


// Define a evenNumbers variable and assign a function as value
// When executed the evenNumbers function will print even numbers between 0 and 100 as output
// Call this function 5 times
let evenNumbers = function() {
  for (let number = 0; number <= 100; number++) {
    number % 2 == 0 ? console.log(number) : '';
  }
}

for (let index = 0; index < 5; index++) {
  console.log(evenNumbers());
}


// Define a showName variable and assign a function as value
// Call this function 2 times
// When the showName function gets executed it will print your name with the following output format:
let showName = function() {
  let name = 'Marcelo';
  console.log(`===========\n= ${name} =\n===========`);
}

showName();
showName();


//Fibonacci

let fibonacci = function(){
  let inputNumber = Number(prompt("Enter a number?", 0));
  let n1 = 0;
  let n2 = 1;
  let sumPastValues = 0;

  if(isNaN(inputNumber) || inputNumber < 0){
    return 'Please enter a number greater than zero.';
  }
  else {
    if (inputNumber == 1){
      sumPastValues = 1;
    }
    else if (inputNumber >= 2){
      for (let arrayIndex = 2; arrayIndex < inputNumber; arrayIndex++) {
        sumPastValues =+ (n1+n2);
        n1 = n2;
        n2 = sumPastValues;
      }
    }
  }
  return sumPastValues;
}

console.log(fibonacci());