let userInput = prompt("ENTER YOUR FULL NAME :- ");

let removeSpace = userInput.replace(/\s+/g,"");
let lowerCaseOfName = removeSpace.toLowerCase();
let countOfName = lowerCaseOfName.length;

let userName = "@"+lowerCaseOfName+countOfName;
console.log(userName);
