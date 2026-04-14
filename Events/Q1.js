let shifter = document.querySelector("#mode");
let curMode = "Light";  //dark
shifter.addEventListener("click",()=> {
    if(curMode==="Light"){
        curMode="Dark";
        document.querySelector("body").style.backgroundColor = "black";
        shifter.style.backgroundColor="white";
        shifter.style.color="black";
        shifter.innerText="Light";
    } else {
        curMode = "Light";
        document.querySelector("body").style.backgroundColor = "white";
        shifter.style.backgroundColor="black";
        shifter.style.color="white";
        shifter.innerText="Dark";
    }
    console.log(curMode);
})


// we can do this via two diff classes
// shifter.addEventListener("click",()=> {
//     if(curMode==="Light"){
//         curMode="Dark";
//         document.querySelector("body").classList.add("dark");
//         document.querySelector("body").classList.remove("light");

//     } else {
//         curMode = "Light";
//         document.querySelector("body").classList.add("light");
//         document.querySelector("body").classList.remove("dark");
//         
//     }
//     console.log(curMode);
// })