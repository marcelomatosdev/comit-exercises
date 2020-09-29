'use strict';
let number;
let accumulator = 0;
outer: for (let i = 0; i < 1000; i++) {
  accumulator += i;
  if (accumulator > 400)  break outer;
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

//Print triangle - For loop
for (let lineNumber = 0; lineNumber < 13; lineNumber++) {
  let stars = '*';
  for (let starCount = 0; starCount < lineNumber; starCount++) {
    stars = stars + '*';
  }
  console.log(`For loop ${stars}`);
}

//Print triangle - Do while loop
let lineNumber = 0;
do  {
  let stars = '*';
  for (let starCount = 0; starCount < lineNumber; starCount++) {
    stars = stars + '*';
  }
  console.log(`Do while loop ${stars}`);
  lineNumber++
} while (lineNumber < 13)


//Print triangle - While loop
lineNumber = 0;
while (lineNumber < 13){
  let stars = '*';
  for (let starCount = 0; starCount < lineNumber; starCount++) {
    stars = stars + '*';
  }
  console.log(`While loop ${stars}`);
  lineNumber++;
}


