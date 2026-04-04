let arr=[12,34,56,78,34];

arr.forEach((val,idx)=> {
    console.log(idx,"-",val*val);
});


// another type of using arrowfxn by passing fxn in callback
// let arr5=[12,34,56,78,34];

// let calcSqr = (num,idx) => {
//     console.log(idx,num*num);
// };

// arr5.forEach(calcSqr);

// i wrote this in foreach.js