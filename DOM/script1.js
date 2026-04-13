let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

console.log(para.setAttribute("class","paragraph"));



//
div.style.backgroundColor="grey";
// div.style.fontSize="25px";
// div.innerText="Hello";
// div.style.visibility="hidden";



// Insertion of element

// two steps process
// this is creation
let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);

// now we will showcase or add
// 4 methods are there
// 1. node.append(el)   //inside
// 2. node.prepend(el)  //inside
// 3. node.before(el)   //outside
// 4. node.after(el)    //outside

div.append(newBtn);   // if i want it at last  
// div.prepend(newBtn); // if i want it at start
// div.before(newBtn);
// div.after(newBtn);


let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i> Hi, i am New! </i>";

document.querySelector("body").prepend(newHeading);


// deletion of element

para.remove();
newHeading.remove();



// Homework 
// .appendChild();
// .removeChild();