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

instructor.info.data.logLocation()

// output: undefined
// logLocation is not a function