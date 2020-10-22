'use strict';
let number1 = Number(prompt("Please enter the first number", 0))
let number2 = Number(prompt("Please enter the second number", 0))

if(number1 > number2) {
  alert(`${number1} is greater than ${number2}`);
}else if(number1 < number2) {
  alert(`${number1} is less than ${number2}`);
}else{
  alert("The number are the same");
}