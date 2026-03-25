let arr = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(arr);
console.log(arr.length);

arr.shift(0);
console.log(arr);
console.log(arr.length);

arr.splice(1,1,"Ola");
console.log(arr);

arr.push("Amazon");
console.log(arr);