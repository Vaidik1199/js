//second day fifth program 

//practice question 2 

// let marks = prompt("Enter the marks");

// if(90<= marks && marks<=100) {
//     console.log("Grade A");
// } else if (70 <= marks && marks <=89) {
//     console.log("Grade B");
// } else if (60 <= marks && marks <= 69) {
//     console.log("Grade C");
// } else if (50 <= marks && marks <= 59) {
//     console.log("Grade D");
// } else if (0 <= marks && marks <= 49) {
//     console.log("Grade F");
// } else {
//     console.log("Wrong Input !");
// }
  

//  another method 

let marks = prompt("Enter Your Score: ");
let grade;

if(90<= marks && marks<=100) {
    grade = "A";
} else if (70 <= marks && marks <=89) {
    grade = "B";
} else if (60 <= marks && marks <= 69) {
    grade = "C";
} else if (50 <= marks && marks <= 59) {
    grade = "D";
} else if (0 <= marks && marks <= 49) {
    grade = "F";
} else {
    grade = "Wrong Input!";
}

console.log("Your grade according to your grade system and inputed marks is : ",grade);

// this is the small method according to spaxce or time required to type. we use
// just another grade variable here 
// this variable helps up to mimimize content in statement ... 
// and aggregately we gave last output on screen by using the grade varible. 