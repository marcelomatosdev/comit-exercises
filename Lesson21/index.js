'use strict';

alert('Enter two numbers to see if the first is greater than the second');

let firstNumber = Number(prompt('Please enter the first number', 0));
let secondNumber = Number(prompt('Please enter the second number', 0));

let result = firstNumber > secondNumber;

confirm(`The answer is: ${result}`);