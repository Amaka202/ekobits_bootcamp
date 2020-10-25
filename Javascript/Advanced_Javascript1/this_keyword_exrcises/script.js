// PART 1
// What is the value of the keyword this in the following example:

var data = this;
console.log(data);
// answer: this here refers to the global object-window

// What does this function output? Why?

function logThis(){
    return this;
}

logThis();

// this here points to the windows object too because it is not inside any parents object nor explicitly bound to another object.

// What does this function output? Why?

var instructor = {
    firstName: 'Tim',
    sayHi: function(){
        console.log("Hello! " + this.firstName);
    }
}

instructor.sayHi()

// output: Hello Tim
// this here implicitly refers to the instructor object

// What does this function output? Why?

var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true
    },
    displayInfo: function(){
        console.log("Cat owner? " + this.catOwner);
    }
}

instructor.displayInfo()

// output: Cat owner? undefined
// this here implicitly refers to the instructor object. but because catOwner is located inside an object, this.catOwner does not have access to that object. this.info.catOwner works.

// What does this function output? Why?

var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.data.location;
        },
        data: {
            location: "Oakland"
        }
    },
}

instructor.info.displayLocation()

// output: oakland
// this here implicitly refers to the info object

// What does this function output? Why?

var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.location;
        },
        data: {
            location: "Oakland",
            logLocation: this.displayLocation
        }
    },
}

// instructor.info.data.logLocation()

// output: undefined
// logLocation is not a function

// Fix the following code:

var obj = {
    fullName: "Harry Potter",
    person: {
        
        sayHi: function(){
            return "This person's name is " + this.fullName
        }
    }
}

// fixed:

var obj = {
    fullName: "Harry Potter",
    person: {
        sayHi: function(){
            return "This person's name is " + obj.fullName
        }
    }
}

// List two examples of "array-like-objects" that we have seen.

// 1) aruguments
// 2) DOM node lists


// Write a function called sumEvenArguments which takes all of the arguments passed to a function and returns the sum of the even ones.

function sumEvenArguments(args) {
    args = [...arguments];
    let sum = 0;
    args.forEach(val => {
        if(val % 2 == 0){
            sum += val;
        }
    })
    return sum;
}

// Write a function called arrayFrom which converts an array-like-object into an array.

function arrayFrom(args) {
    args = [...arguments];
    return args;
}


// Write a function called invokeMax which accepts a function and a maximum amount. invokeMax should return a function that when called increments a counter. If the counter is greater than the maximum amount, the inner function should return "Maxed Out!"

function invokeMax(fn, maxNum) {
    let counter = 0;
    return function(){
        counter++;
        if(counter > maxNum){
            return "Maxed Out!";
        }else{
            return fn.apply(this.arguments);
        }
    }
}

function add(a,b){
    return a+b
}


var addOnlyThreeTimes = invokeMax(add,3);

// Write a function called guessingGame which takes in one parameter amount. The function should return another function that takes in a parameter called guess. In the outer function, you should create a variable called answer which is the result of a random number between 0 and 10 as well as a variable called guesses which should be set to 0.

// In the inner function, if the guess passed in is the same as the random number (defined in the outer function) - you should return the string "You got it!". If the guess is too high return "You're too high!" and if it is too low, return "You're too low!". You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.

// You will have to make use of closure to solve this problem.

function guessingGame(amount) {
    let answer = Math.floor(Math.random() * 11);
    let guesses = 0;
    return function (guess) {
        guesses ++;
        if(guess == answer && guesses !== amount){
            return "You got it!";
        }else if(guess > answer && guesses !== amount){
            return "You're too high!"
        }else if(guess < answer && guesses !== amount){
            return "You're too low!"
        }else{
            return "You are all done playing!"
        }

       
    }

}

let game = guessingGame(3);