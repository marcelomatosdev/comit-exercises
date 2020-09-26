'use strict';
let hour = Number(prompt("Please enter the current hour", 0))

if(hour < 0 || hour > 23) {
  alert('Please enter a number between 0 and 23');
}else if(hour < 8 || hour > 18) {
  alert('This hour is outside of office hours');
}else if(hour >= 8 && hour <= 18){
  alert("We are open!");
}