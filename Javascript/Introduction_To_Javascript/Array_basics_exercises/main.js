// Create an array of your favorite foods (call it favoriteFoods). Make sure it has at least three elements.

let favoriteFoods = ["cake", "Beans", "Okpa", "Rice"];

// Access the second element in favoriteFoods.

console.log(favoriteFoods[1]);

// Change the last element in favoriteFoods to some other food.

favoriteFoods.splice(favoriteFoods.length - 1, 1, "Fio-Fio");

console.log(favoriteFoods);

// Remove the first element in favoriteFoods and store it in a variable called formerFavoriteFood.

let formerFavoriteFood = favoriteFoods.shift()

console.log(formerFavoriteFood);

// Add a favorite food to the back of the favoriteFoods array.

favoriteFoods.push("Milk");

console.log(favoriteFoods);

// Add a favorite food to the front of the favoriteFoods array.


favoriteFoods.unshift("Bread");

console.log(favoriteFoods)

// What happens when you try to pop from an empty array?

let emptyarr = [];

emptyarr.pop();

console.log(emptyarr);

// it returns undefined


// In the examples below, use splice to convert the first array to the second array:

// [2, 3, 4, 5] -> [2, 4, 5]

let arr2 = [2, 3, 4, 5];

arr2.splice(1, 1);

console.log(arr2);


// ["alpha", "gamma", "delta"] -> ["alpha", "beta", "gamma", "delta"]

let arr3 = ["alpha", "gamma", "delta"];

arr3.splice(1, 0, "beta");

console.log(arr3);

// [10,-10,-5,-3,2,1] -> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

let arr4 = [10,-10,-5,-3,2,1];

arr4.splice(1, 3, 9, 8, 7, 6, 5, 4, 3);

console.log(arr4);

let moviesIKnow = [
    "Wayne's World",
    "The Matrix",
    "Anchorman",
    "Bridesmaids"
];


//   Exercises 2

// Write the code necessary to do the following:

// Create an empty array called arr.

let arr =[];

// Add your first name to the arr variable

arr.push("Chiamaka");

// Add your last name to the end of the arr variable

arr.push("Umeh");

// Add your favorite color to the beginning of the arr variable

arr.unshift("Blue");

console.log(arr);

// Remove the favorite color from the arr variable (remember this is the fiirst value in the array - what method can you use to remove the first value in an array?)

arr.shift();

console.log(arr);

// Create another array called arr2.

let arr22 = [];

// Add your favorite number to arr2

arr22.push(28);

// Add the string "JavaScript" to the end of the arr2 variable

arr22.push("Javascript");

console.log(arr22)

// See if the value 42 exists in the arr2 array. Do this using the indexOf method. What does indexOf return to you if the value passed to it can not be found in the array?

console.log(arr22.indexOf(42)); //-1


// Create a new variable called combinedArr which is the result of your arr and arr2 variables combined into one array.

let combinedArr = arr.concat(arr22);

console.log(combinedArr);

let arr33 = ["JavaScript", "Python", "Ruby", "Java"];

// Return the following array: ["Python", "Ruby"].

let newarr = arr33.splice(1, 2);

console.log(newarr);

// Combine the array with the array ["Haskell", "Clojure"].

let newarr44 = arr33.concat(["Haskell", "Clojure"]);

console.log(newarr44);

// Return the string "JavaScript, Python, Ruby, Java".

let copyarr = arr33.slice();

console.log(copyarr)



let myList = [1, 3, 5, 2, 7, 4, 7, 5, 0, 4, 12, 45, 65]
let myListplus = [];

for (let i =0; i < myList.length; i * 2){
    myListplus.push(myList[i]);
    
}

console.log(myListplus);