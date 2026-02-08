let marks = [97,34,56,66,77,35,24];
console.log(marks);

console.log(marks.length);// properties 

let heroes = ["ironman", "thor","Shaktiman"];

// array is also type of object datatype but we treat him different 
// instead of using like key we use index value.

marks[0]= 66;

// arrays are mutable but strings are immutable.
// and itrable means we can iterate or we can use loops on it 
// for ex, objects, strings,arrays.


// looping over an array 

// for loop 
// property used : length.
for(let idx = 0; idx < marks.length; idx++){
    console.log(marks[idx]);
}

for (let i =0; i < heroes.length; i++){
    console.log(heroes[i]);
}

// for of and for in 
//generally we use for of

for (let el of heroes){
    console.log(el);
}


// array methods 
// push , pop , shift , unshift , indexOf , includes , splice , slice , concat , join , reverse , sort
// push - add element at the end of the array
marks.push(45);
console.log(marks);

// pop - remove element from the end of the array
marks.pop();
console.log(marks);

console.log(marks.toString()); // convert array to string 
// does not change original array
// original array remains same

// concat() - joins multiple arrays & reeturn result 
let marvel_heroes = ["spiderman", "hulk", "captain america"];
let dc_heroes = ["batman", "superman", "flash"];
let indian_heroes = ["shaktiman", "doga", "nagraj"];
let all_heroes = marvel_heroes.concat(dc_heroes, indian_heroes);
console.log(all_heroes);

// unshift() - add element at the beginning of the array
marvel_heroes.unshift("antman");
console.log(marvel_heroes);



// shift() - remove element from the beginning of the array
let val = marvel_heroes.shift();
console.log("deleted",val);

console.log(marvel_heroes);


// slice method 
// does not change original array 

let heroes2 = ["thor","spiderman","ironman","antman","Dr.Strange"];
console.log(heroes2);


console.log(heroes2.slice(1,4));

//splice method 
// change original array

// splice(start,delcount,newele);

let arr= [1,2,3,4,5,6,7];
console.log(arr);
arr.splice(0,3,101,102);
console.log(arr);


// we can just add elements in it also.
arr.splice(2,0,103);
console.log(arr);


// we can delete also 
arr.splice(0,1);
console.log(arr);


// we can replace also
arr.splice(2,1,104);
console.log(arr);


//  we can use splice as slice also;
// arr.splice(3);
//console.log(arr);    the first three elements will get deleted....


// epmty slice will not do anything to array 
// arr.splice(); nothing will happen
