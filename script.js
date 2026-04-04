
// window object 
// window object represents an open window in a browser.
// It is browser's object (not js')
// ans it is automatically created by browser
// it is a global object with lots of properties and methods.

// console.log use to print object as a element 
// console.dir is used to print object's prop and methods
// for ex console.dir(document);

// dom 
// when a webpage is loaded, the browser creates a DOM of the page
// tree like structure, with root, branches 
// and individual boxe is called as node or object

console.dir(document.body);
console.log(document.body);  // can do for head also etc etc

// childNodes: branches of nodes from one node;

// document.body.childNodes[1].innerText = "abcd";

// if we print script tag in head of html and 
// if we run console.dir(document.body); then it will show null;



// -------------------------------------------------------------------------------------------
// DOM Manipulation
// -------------------------------------------------------------------------------------------

// selecting with id 
let heading = document.getElementById("heading");
console.dir(heading);
// if there is no id present named heading 
// then it will return null 


//selecting with class
let headings = document.getElementsByClassName("heading4");
console.log(headings);
// getelementbyclassname returns HTMLcollection, it is like array, not exactly array.
// if there is no class present names headings 
/// then it will return empty htmlcollection



// selecting with tagname
let parahs = document.getElementsByTagName("p");
console.dir(parahs);
// return htmlcollection 


//-----------------------------------------------------------------------
// BEST way to select
// Query Selector
let firstelement = document.querySelector("p"); // it will return just paragraph
console.dir(firstelement);
// it returns first element matching p
// and if we want all the elements matching this p 
let allelements = document.querySelectorAll("p"); // it will return nodelist
console.dir(allelements);

// for getting by class by using queryselector we should use ".classname" that is it.

// we will see properties later tommorow or after two three days