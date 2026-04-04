//day 3 program 1 

//for loop 

//5 times statemenet print 
for (let i = 1; i <= 5; i++) {
    console.log("hello There");
}

//calculate sum of 1 to 5
let sum = 0;
for (let i = 1; i<=5;i++) {
    sum = sum + i;
}
console.log(sum);

// while condition 
let i = 1;
while (i<=5) {
    console.log("i = ", i);
    i++;
}

// do while loop 
let j = 1;
do {
    console.log("j= ", j);
    j++;
} while (j <= 5);

// for of loop 
let str = "Vaidik";
let size = 0;
for (let i of str) {
    console.log(i);
    size++;
}
console.log(size);

//for in loop 

let student= {
    name : "Vaidik Choudhary",
    age : 20,
    cgpa : 8,
    isPass : true
};

for(let i in student) {
    console.log("key = ",i, "value = ", student[i]);
}
