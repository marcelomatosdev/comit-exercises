"use strict";

let movies = prompt("Enter your 3 favourite fruits separeted by comma: ");

let movieArray = movies.split(",");

movieArray.forEach((movie) => console.log(movie));
