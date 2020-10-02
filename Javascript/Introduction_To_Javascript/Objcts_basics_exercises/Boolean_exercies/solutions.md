## What is the difference between JavaScript and ECMAScript?

**ECMAScript** is a standard, **JavaScript** is an implementation of that standard.

## Who is Brendan Eich

**Brenfan Eich** is the creator of JAvascript

## How do you hide and show the Chrome console?

Control + Shift + J

## Research prompt and confirm - what do they do?

**prompt** prompt() function enables you to take user's input with 'Ok' and 'Cancel' buttons. prompt() function returns value entered by the user. It returns null if the user does not provide any input value.

**confirm** confirm() function display popup message with 'Ok' and 'Cancel' buttons. Use confirm() function to take user's confirmation to proceed.

## See what happens when you have multiple variables of the same name. Which one takes precedence?

**the last declared variable

##  What is the difference between null and undefined?

**Undefined** is a variable that is declared but not assigned a value
**Null** signifies an intentional absense of data

## What is NaN in JavaScript? What is the typeof NaN?

**NaN** short for "Not a Number" is the value gotten when Javascript does not know how to convert something to a number

**typeof NaN** is Number

## You can declare a variable by typing let thing;. What is the value of thing?

Variable name

## Boolean Logic Exercises
    2 == "2"; => true
    2 === 2; => true
    10 % 3; => 1
    10 % 3 === 1; => true
    true && false; => false
    false || true; => true
    true || false; => true



## Answer the following questions about this code block:

let isLearning = true;
if(isLearning){
    console.log("Keep it up!");
} else {
    console.log("Pretty sure you are learning....");
}

**What should the above code console.log?**  "Keep it up!"

**why do we not need to specify if(isLearning === true)? Why does if(isLearning) work on its own?**

Because it is already assigned to a boolean which can either be true or false



let firstvariable;
let secondvariable = "";
let thirdvariable = 1;
let secretMessage = "Shh!";

if(firstvariable){
    console.log("first");
} else if(firstvariable || secondvariable){
    console.log("second");
} else if(firstvariable || thirdvariable){
    console.log("third");
} else {
    console.log("fourth");
}


## What should the above code console.log? Why?

third. because false or true evaluates to true

## What is the value of firstvariable when it is initialized?

undefined

## Is the value of firstvariable a "truthy" value? Why?

No, the value is falsy because undefined == false.

## Is the value of secondvariable a "truthy" value? Why?

No, the value is falsy because empty string == false.

## Is the value of thirdvariable a "truthy" value? Why?

Yes, the value is true because the number 1 is truthy

 ## Part 3

 ## What is a falsey value? List all the falsey values in JavaScript.

 Falsy values are values that evaluates to false

 Example: 

undefined, 
null, 
NaN, 
0, 
"" (empty string), 
and false of course.