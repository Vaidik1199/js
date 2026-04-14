// Event Listeners

// node.addEventListener(event,callback)
// node.removeEventListner(event,callback)
// the callback refrence should be same to remove

// eventlisteners can be multiple 


let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click",(evt) =>{
    console.log("button1 waas clicked");
    console.log(evt);
    console.log(evt.type);
})
btn1.addEventListener("click",() => {
    console.log("button was clicked - handler2")
})

const handler3 = () => {
    console.log("button was clicked - handler3")
}
btn1.addEventListener("click",handler3);
btn1.addEventListener("click",() => {
    console.log("button was clicked - handler4")
})

btn1.removeEventListener("click",handler3);
