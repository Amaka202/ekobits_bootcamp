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


