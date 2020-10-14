'use strict';

function evenNumbers() {
  for (let number = 0; number < 100; number++) {
    number % 2 == 0 ? console.log(number) : '';
  }
}
evenNumbers();

function showUser(){
  let name = 'Marcelo';
  let age = 18;
  let phoneNumber = '204-444-5667';
  let streetAddress = 'This is my street address';
  let postalCode = 'R2W03L';
  let isMarried = true;

  let user = (
    `My name is ${name}\nI'm ${age} years old\nMy phone number is ${phoneNumber}\nMy address is ${streetAddress}\nMy postal code is ${postalCode}\nMarried? ${isMarried}
     `
  )
  return user;
}

console.log(showUser());