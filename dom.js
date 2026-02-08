
// Selecting with id

let heading = document.getElementById("header");
console.dir(heading);

// Selecting with class 

let heading2 = document.getElementsByClassName("heading");
console.log(heading2);
console.dir(heading2);

// Selecting with tag 

let para = document.getElementsByTagName("p");
console.log(para);
console.dir(para);

// Selecting with querySelector

// it will only select the first matching element
let elements = document.querySelector("p");
console.dir(elements);

// Selecting with querySelectorAll

let elems = document.querySelectorAll("p");
console.dir(elems);

// by using class name with querySelector or querySelectorAll

let head = document.querySelectorAll(".heading");
console.dir(head);