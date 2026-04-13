let btn = document.createElement("button");
btn.innerText ="Click me!";
btn.style.backgroundColor = "red";
btn.style.color="white";

let body = document.querySelector("body");
body.prepend(btn);