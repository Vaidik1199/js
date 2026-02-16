// for each is the method 
// abc.touppercase() so here touppercase is method


// if we  associate a function with perticular object 
// then this function is called as method

// ex 
// if we said uppercase will only be use for string then it will called as method 

//"abc".toUpperCase();


// for each 
// arr.forEach( callBackFunction )

// CallBackEquation : Here,It is a function to execuste for each element in the array!
// A callback is a function passed as an argument to another function. 

let arr = [1,2,3,4,5];
arr.forEach(function printVal(val){    // val means val at each index
    console.log(val);
});

let arr2 = [6,7,8,9,10];

arr2.forEach((val) => {
    console.log(val);
});

let arr3 = ["mumbai", "Delhi", "PuNe"];

arr3.forEach((val)=> {
    console.log(val.toUpperCase());
});