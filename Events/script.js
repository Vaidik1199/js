// Events in JS
// The change in state of an object is known as Event
// Events are fired fto notify code of "Interesting changes" that may affect code execution.

// Mouse Events (click,double click etc )
// keyboard events (keypress, keyup, keydown)
//  form events (submit etc)
// print event and many more

// Inline event handling is not goodway

// and external has more prefrence than internal...


// <button onclick="console.log('Button was clicked'); alert('Hello')">Click me</button>
//  <button ondblclick="console.log('Double clicked')">Click me twice</button>
//  <div onmouseover="console.log('you are hovering over div')">
//      This is a Box
//  </div>


// normal usual way of event handling 
let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("handler 1");
    let a = 25;
    a++;
    console.log(a);
}

// second one will be showing on screen.
// handler 2 in this case... 
btn1.onclick = () => {
    console.log("handler 2");
}

let box = document.querySelector("div");

box.onmouseover = () => {
    console.log("You are insider div");
}


// event object 
// special object containing info about even... 
// bg info
// all event handlers have acesss to the event object's properties and methods

// btn1.onclick = (evt) => {
//    console.log(evt);
//    console.log(evt.type);
//    console.log(evt.target);
//    console.log(evt.clientX, evt.clientY);
// }