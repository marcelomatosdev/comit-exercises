'use strict';

let age = 18;
let firstName = 'Marcelo';
let courseCompleted = false;
let finalScore = null;
let winningNumbers;

console.log('age: ', typeof age);
console.log('First Name: ', typeof firstName);
console.log('Completed Course: ', typeof courseCompleted);
console.log('Final Score: ', typeof finalScore);
console.log('Winning Numbers: ', typeof winningNumbers);
console.log('age: ',  age);
console.log('First Name: ',  firstName);
console.log('Completed Course: ',  courseCompleted);
console.log('Final Score: ',  finalScore);
console.log('Winning Numbers: ',  winningNumbers);


age = String(age);
firstName = Boolean(firstName);
courseCompleted = Number(courseCompleted);

console.log('Converted age: ', typeof age);
console.log('Converted First Name: ', typeof firstName);
console.log('Converted Completed Course: ', typeof courseCompleted);
console.log('Converted age: ',  age);
console.log('Converted First Name: ',  firstName);
console.log('Converted Completed Course: ',  courseCompleted);
