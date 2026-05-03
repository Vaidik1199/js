const student ={
    fullname : "Vaidik Choudhary",
    marks: 94.4,
    printMarks  : function(){
        console.log("marks =", this.marks);
    },
};

const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
};

const karanArjun  = {
    salary : 50000,
    calcTax() {
        console.log("tax rate is 20%");
    },
};

karanArjun.__proto__ = employee;

// if objects and prototypes have same method
// object's method will be used