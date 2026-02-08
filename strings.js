// day 6 VID3 concepts.
// strings

let str = "Vaidik Choudhary";
let str2 = "VivRichards";

str.length;

console.log(str[0], str[1]);
console.log(str2[4]);

// template litereals

let namo = `hello there my name is ${str}, my age is ${100 - 80} and my favioutrate cricketer is ${str2} `;
console.log(namo);

console.log(typeof namo);

// escape character 

console.log("Vaidik \nChoudhary");
console.log("Vaidik \t Choudhary");

// string methods 
let str3 = "VaidikChoudhary";
// str3.toUpperCase();
// console.log(str3);
// aata aaplyala vatel ki change hoil pn  nahi karan he asle fuction navin string banvatat 
// tyaala print karayche aslyas 

let newStr3 = str3.toUpperCase();
console.log(newStr3);

let str4 = "           Are re     bhau bhau    ...";
console.log(str4.trim());


// slice 
let str5 = "012345";
console.log(str5.slice(1,3));
console.log(str5.slice(1));
console.log(str5.slice(3));

//concatination 
let str6 ="Vaidik ";
let str7 = "Choudhary";
let res = str6.concat(str7);
console.log(res);

// by using plus sign we can aslo doing conctination here 
let res1= str6+str7;
console.log(res1);

//repalcement 

let bro = "brother";
console.log(bro.replace("o","a"));   // there is also replaceAll method to chanage all the value 

// index wale aahe kahitari bhau 
let bhau = "MazaBhau";
console.log(bhau.charAt(3));

