let fullName = "Umeh Chiamaka";

console.log(fullName);

let name = "Amaka";

let dayOfBirth = "Monday";

// Write some JavaScript that prompt's the user for their favorite color. Once the user has submitted a favorite color, log that color to the console along with a friendly message.

let userName = prompt('Hi there, what your name');
let favcolor = prompt(userName + " " + "what's your favorite color");

console.log(userName + " " + "likes" + " " + favcolor + ", awesome!!");

// Create a string that contains both single quotes and double quotes.

let myMessage = "This is my message and that's a very important message";

console.log(myMessage)


console.log(typeof(NaN));



// let myLuckyNum = Number(prompt("Hi there! could you guess my lucky number?"));

switch(myLuckyNum){
    case 8:
        console.log("really close, try again")
        break

    case 7:
        console.log("yea you got it!!! weldone")
        break 

    case 10:
        console.log("ahh, quite far form the answer try again")
        break

    case 20:
        console.log("No nah!, try again")
        break

    case 0:
        console.log("Nope, try again")
        break
    
    default:
        console.log("You no dey try at all! Try again")    
}

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

// Research Math.random here and write an if statement that console.log's "Over 0.5" if Math.random returns a number greater than 0.5. Otherwise console.log "Under 0.5".

let num = Math.random();

if (num > 0.5){
    console.log("Over 0.5")
} else{
    console.log("Under 0.5")
}