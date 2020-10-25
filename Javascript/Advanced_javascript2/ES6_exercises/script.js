// Convert the following es5 code blocks into es2015 code:

var person = {
    fullName: "Harry Potter",
    sayHi: function(){
        setTimeout(function(){
            console.log("Your name is " + this.fullName)
        }.bind(this),1000)
    }
}

let person = {
    fullName: "Harry Potter",
    sayHi: function(){
        setInterval(() => {
            console.log(`Your Name is ${this.fullName}`)
        },1000)
    }

}

var name = "Josie"
console.log("When " + name + " comes home, so good")

let name = "Josie";
console.log(`When ${name} comes home, so good`);

var DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50;

const DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50; //cannot be reassigned

var arr = [1,2]
var temp = arr[0]
arr[0] = arr[1]
arr[1] = temp

let arr = [1,2];
let [a,b] = arr;
[a, b] = [b, a];

function double(arr){
    return arr.map(function(val){
        return val*2
    });
}

let double = (arr) => {
    return arr.map(val => val *2);
}

var obj = {
    numbers: {
        a: 1,
        b: 2
    } 
}

var a = obj.numbers.a;
var b = obj.numbers.b;

let obj = {
    numbers: {
        a: 1,
        b: 2
    }
}

let {a, b} = obj.numbers;

function add(a, b){
    a = a || 12
    b = b || 13
    return a + b;
}

const add = (a=12, b=13) => {
    return a + b;
}

// The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.

// The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.


// Array.includes:The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.