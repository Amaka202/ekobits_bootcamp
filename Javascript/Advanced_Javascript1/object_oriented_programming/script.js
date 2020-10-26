//  Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber.

function Person(firstName, lastName, favoriteColor, favoriteNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
    this.multiplyFavoriteNumber = function(num){
        return num * this.favoriteNumber
    }

}

//  Refactor the following code so that there is no duplication inside the Child function.

function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

// function Child(firstName, lastName, favoriteColor, favoriteFood){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.favoriteColor = favoriteColor;
//     this.favoriteFood = favoriteFood;
// }

let Child = new Parent;

// prototypes exercises

//  Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber and favoriteFoods (which should be an array).


function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.favoriteFood = favoriteFood;
}

Person.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
};

var p = new Person("Shana", "Malarkin", "Green", 38);


// Overwrite the toString method from the Object prototype by creating a toString method for Person.

Person.prototype.toString = function(){
    return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`
} 

p.toString();

// Refernce Error firstName is not defined at Person.toString

// Add a property on the Person object called family which is an empty array.

p.family = []

// Implement your own version of Array.prototype.map


 
Array.prototype.myMap = function (fn) {
    let result = []
    for(let i = 0; i < this.length; i++){
        result.push(fn(this[i], i, this));
    }

    return result;
}

let arr = [1, 2, 3, 4]

console.log(arr.myMap(val => val * 2))

// Implement a function that reverses a string and place it on the String.prototype

String.prototype.reverse = function () {
    str = this.split("").reverse().join("")
    return str;
}

// Implement your own version of Function.prototype.bind


