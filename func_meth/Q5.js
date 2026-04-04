const n = prompt("Put the Number you want that to be the size of list from 1 to N");

let arr=[];

for(let i = 0; i<n; i++){
    arr[i] = i+1;
}

console.log(arr);