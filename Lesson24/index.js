'use strict';
let number;
let accumulator = 0;
outer: for (let i = 0; i < 1000; i++) {
  accumulator += i;
  if (i >= 400)  break outer;
}
alert(`Current value: ${accumulator}`)

// Show numbers from 0 to 10
for (let i = 0; i <= 10; i++) {
  console.log(`For loop ${i}`);
}

number = 0;
do {
  console.log(`Do loop ${number}`);
  number++;
}while (number<= 10);

number = 0;
while (number <= 10) {
  console.log(`While loop ${number}`);
  number++;
}

// Show numbers from 100 to 0
for (let i = 100; i >=0; i--) {
  console.log(`For loop ${i}`);
}

number = 100;
do {
  console.log(`Do loop ${number}`);
  number--;
}while (number<= 0);

number = 100;
while (number <= 0) {
  console.log(`While loop ${number}`);
  number--;
}

// Show even numbers between 0 and 100
for (let i = 0; i <= 100; i++) {
  if(i%2==0){
    console.log(`For loop ${i}`);
  }
}

number = 0;
do {
  if(number%2 == 0){
    console.log(`Do loop ${number}`);
  }
  number++;
}while (number<= 100);

number = 0;
while (number <= 100) {
  if(number%2 == 0){
    console.log(`While loop ${number}`);
  }
  number++;
}

//Print triangle
let line = '*';
for (let i = 0; i < 13; i++) {
  console.log(line);
  line = line + '*';
}
