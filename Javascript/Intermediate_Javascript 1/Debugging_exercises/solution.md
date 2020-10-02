## What does the throw keyword do?

**throw** can be used when to throw an error when something is done incorectly to return an error and stop code execution


## What does the finally keyword do?

**finally** keyword is used to specify codes that will execute regardless of an error being thrown


## What is the difference between a TypeError and ReferenceError?


**TypeError** occurs when you make incorrect use of certain types in javascript. That could mean trying to invoke something that is not a function, or accessing properties on undefined. while

**RefernceError** occurs when we try to access a variable that does not exist in that scope


## How do you create a snippet in the Chrome dev tools?

ctrl+shift+J to open the developer tools
Click on sources tab
under the sourches tab click snippets tab
click on New snippet to create a new snippet file

## In the Chrome dev tools, on the right hand side of the sources tab, there is a "pause" button which allows you to "pause on caught exceptions." What is an exception?

**exception** When a JavaScript statement generates an error, it is said to throw an exception

## How do we "catch" errors in JavaScript? Give an example with code for what that might look like.

by using the **catch** keyword

eg:

try {
    thisDoesNotExist;
} catch(err) {
    console.log("The error is ", err);
}


// fix the broken code and explain what was wrong

1) for(let i=0; i > 5; i++){
    console.log(i);
}

worng: infinit loop at line 45: i > 5, i will always be 5,
correct: 1 < 5;

2) function addIfEven(num){
    if(num % 2 = 0){
        return num + 5;
    }
    return num;
}

wrong: assignment sign (=) is used instead of eqaulity sign (==)
correct: function addIfEven(num){
    if(num % 2 =+ 0){
        return num + 5;
    }
    return num;
}


3) function loopToFive(){
    for(let i=0, i < 5, i++){
        console.log(i);
    }
}

wrong: syntax error. (,) was used instead of (;)
correct:function loopToFive(){
    for(let i=0; i < 5; i++){
        console.log(i);
    }
}

4) function displayEvenNumbers(){
    let numbers = [1,2,3,4,5,6,7,8];
    let evenNumbers = [];
    for(let i=0; i<numbers.length-1; i++;){
        if(numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // should return [2,4,6,8]
function displayEvenNumbers(){
    let numbers = [1,2,3,4,5,6,7,8];
    let evenNumbers = [];
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] % 2 == 0){
            evenNumbers.push(numbers[i]);
        }
           
    }

    return evenNumbers; 
}

// HINT - eight things need to be changed here for this to work!
// Start by fixing the syntax errors and then run the function to see what your output is.


**the eight errors**

1) line 84; synthaxError, 
    correct: no (;) after i++.

2)line 85; synthaxError, wrong use of assignment operator
    correct: (==) instead of (=);

3)line 84, wrong use of length keyword;
    correct: i < numbers.length.

4)line 85; wrong algorithm
    correct: if(numbers[i] % 2 == 0)

5) line 85; wrong synthax-if(numbers % 2 = 0); {
    correct: no (;) before if code block -if(numbers % 2 = 0){   

6) line 86; wrong alogorithm -evenNumbers.push(i);
    correct: evenNumbers.push(numbers[i]);        

7) wrong placement of return statement;
function displayEvenNumbers(){
    let numbers = [1,2,3,4,5,6,7,8];
    let evenNumbers = [];
    for(let i=0; i<numbers.length-1; i++;){
        if(numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}

correct:
function displayEvenNumbers(){
    let numbers = [1,2,3,4,5,6,7,8];
    let evenNumbers = [];
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] % 2 == 0){
            evenNumbers.push(numbers[i]);
        }
           
    }

    return evenNumbers; 
}
