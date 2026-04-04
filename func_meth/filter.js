// creates a new array by visiting each element of array that give true for a condition or filter applied 
// for ex
// all even elements 

let arr = [23,24,25,26,27,28];
let EvenArr = arr.filter( (val) => {
    return val%2 === 0;   // condition 
})

console.log(EvenArr);