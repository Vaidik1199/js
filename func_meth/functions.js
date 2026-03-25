function myf() {
    console.log("ewww");
    console.log(123);
}

myf();


// minimizing redundancy is the key 

function myf2(msg) {  // parameter or argument-> input, here msg
    console.log(msg);
}
myf2("I love Js");
// we know parameter and argument is same  but still
//there is way of pronouncing them with diff position
// in function defination we should call it parameter
// in call we should call it as argument
// but both are same

// can take more than two parameters 
function myf3(a,n){   // 
    console.log(a,n)  // also can do operations like (a*n)
}
myf3("hey",99);

// using return function 

function sum(x,y){
    add = x + y;
    return add;
}
//here x and y parameteres are just local variable
// scope is block, will died after block :)

let res = sum(3,4);
console.log(res);


// Arrow Funcitons 
// type of writing a function in compact way 

// sub function ex
//function sub(a,b){
//    return a-b;
//}
 
// so instead of doing this we can use arrow function in it
const arrowSub = (a,b) => {
    console.log(a-b); // can use return a-b;
}
arrowSub(12,7);
// we generally uses arrow functions for smaller tasks


// we can also use arrowfunction without input 
const printHello = () => console.log("hello man!");
// we can make it one liner also ewww, without taking input
// but using curly craces is good practice!
printHello();