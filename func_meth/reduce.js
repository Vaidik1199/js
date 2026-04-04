// reduce method 
// gives only single value like sum 

let arr=[12,23,45,64,12,108];

const output = arr.reduce( (res,curr )=>{   //callbackfxn contaiins two values, which are previous value and current value
    return res+curr; // the return will be store again in the res
})

console.log(output);

const largest = arr.reduce( (res,cur) => {
    if(cur>res) {              //we can write 
        return cur;            //  return prev > cur ? prev : curr;
    }                          // insetead of this big 4 lines 
    return res;                // that 4 lines feels complex
})

console.log(largest);