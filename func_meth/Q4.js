let arr = [87,93,89,90,99,76,69,88];

const Toppers = arr.filter( (val,idx) => {
    return idx, val>=90;
});

console.log(Toppers);