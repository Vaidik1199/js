let marks = [ 85,97,44,37,76,60];

// find the avg marks of entire class.
let sum = 0;
for(let i = 0; i<marks.length; i++){
    sum = sum + marks[i];
}
console.log(sum);
console.log(sum/marks.length);

// i did it... 

// there is another way for doing this question

let add= 0;
for (let val of marks){
    add= add+ val;  // add+=val; 
}
console.log(add/marks.length);

// this is another method open arrays for beter undersranding