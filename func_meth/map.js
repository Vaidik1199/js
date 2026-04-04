// same as foreach, 
// just like foreach do operation for every idx and thing


// diff is map gives new array or creates new array 

// map 
// creates a new array with the results of some operation. the value its callback return are used to form a new array.

// syntax:
// arr.map(callbackFxn(value,idx,arr))   //in general we dont use idx and arr while using foreach and map things

// let newArr = arr.map((val))=>{
//     return val*2;
// } 

let nums = [67,52,39];

// normal use of map 
// nums.map((val)=>{
//    console.log(val);
// });


// main use of map 
// creating new array
let newArr = nums.map((val)=> {
    return val*val;
});
// new array
console.log(newArr);

// if we print nums , it is there untouched...