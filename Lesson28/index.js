'use strict'

let user = new Object();
console.log(user);
console.log(typeof(user));

user = {
  username: "batman",
  password: "hunter2"
};

console.log(user);

function access(username, password){
  if(username === "batman" && password === "hunter2"){
    alert("Access Granted");
  }else{
    alert("Access Denied");
  }
}

access(user.username, user.password);

let user2 = {
  username: "Wonderwoman",
  password: 123123,
  hello: function(username){
    console.log(`Hello, I am ${username}`);
  }
}

function updateUsername(newUsername){
  user2.username = newUsername;
}

user2.hello(user2.username);



updateUsername(prompt("Your username: "));
user2.hello(user2.username);

