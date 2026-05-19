// class is a program code template for creating objects 
// those objects will have some state (variables) & some behaviour (functions) inside it.

// class MyClass {
//     constructor() {...}
//     myMethod() {...}
// }

// let myObj = new MyClass();

class ToyotaCar {

    constructor(){ // we can put arguments in it, like brand, milage, etc etc without using another fxn
        console.log("creating new object");
    }
    start() {
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

    setBrand(brand) {
        this.brand = brand; // here variable and property both having same name, there is nothing wrong in it
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("legender");


// constructor -- it is the method (special) -- the word constructor is the reserved keyword, means onlu constructor will have the name constructor no one have that rights
// - automatically invoked by new (line number 9)
// - intializes object 
