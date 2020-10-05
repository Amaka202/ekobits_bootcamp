// function each(arr, fn) {
//     // loop through the array
//         // call the function on each
    
//     arr.forEach(fn);    
// }

// each([1, 2, 3, 4, 5], function(val){
//     console.log(val);
// })

// each([1,2,3,4], function(val){
//     console.log(val*2);
// });

// // Write a function called map which accepts two parameters: an array and a callback. The map function should return a new array with the result of each value being passed to the callback function. Here's an example:


// function map(arr, fn) {
//     let newArr = []

//     newArr.push(arr.map(fn))
    
//     // for (i = 0; i < arr.length; i++){
//     //     newArr.push(fn(arr[i]));
//     // }

//     return newArr;
// }

// // Write a function called reject which accepts two parameters an array and a callback. The function should return a new array with all of the values that do not return true to the callback. Here are two examples:


// function reject(arr, fn) {
//     let newArray = []

//     newArray.push(arr.filter(fn));

//     return newArray;
// }


// function timers(){
//     console.log("hey I am practising timers");
// }

// setTimeout(timers, 1000);

// let timerId = setTimeout(function(){
//     console.log("Hello!");
// },1000);

// clearTimeout(timerId);


// let timerId1 = setInterval(function(){
//     console.log("HI!");
// },1000);

// setTimeout(function(){
//    clearTimeout(timerId1);
// },9000);


// let instructorModule = (function createInstructors(){
//     let instructors = ["Elie", "Matt", "Tim"];
//     return {
//         showInstructors: function displayAllInstructors(){
//             return instructors;
//         },
//         addInstructor: function addNewInstructor(instructor){
//             instructors.push(instructor)
//             return instructors;
//         }
//     }
// })();

// function createCounter() {
//     let count = 0;
//     return function () {
//         ++count;
//         return count
//     }
// }

// let firstCounter = createCounter();
// let secondCounter = createCounter();


// // Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log "DONE!" and stop.

function countDown(num) {
    
        let timerId3 = setInterval(function(){
            if (num > 0){
            console.log(num--)
            }else if (num == 0){
                console.log("Done!")
                clearInterval(timerId3);
            }
        }, 1000);
    }


// Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is 7, stop the timer and return the number of tries it took before we found 7.

function randomGame() {
    
    let timerId4 = setInterval(function(){
        let randomNum = (Math.ceil(Math.random() * 10));
        let counter = 0;
        
        
        if (randomNum != 7){
            ++counter;
            console.log(randomNum);
            console.log("counter: " + counter)
        }else if (randomNum == 7){
            console.log("Yea you got 7 after attempting" + " " + counter + " " + "times")
            // console.log(counter);
            clearInterval(timerId4);
        }
    }, 1000);
}


// Write a function called isEven which takes in a number and returns true if the number is even and returns false if it is not

let isEven = (num) => num % 2 == 0 ? true : false

// Write a function called isOdd which takes in a number and returns true if the number is odd and returns false if it is not

let isOdd = (num) => num % 2 == 1 ? true : false

// Write a function called isPrime which takes in a number and returns true if the number is a prime number (is greater than 1 and can only be divided in whole by itself and 1), otherwise returns false

const isPrime = num => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

//   Write a function called numberFact which takes in a number and a callback and returns the result of the callback with the number passed to it

function numberFact(num, fn) {
    return fn(num);
}
numberFact(59,isEven); // false
numberFact(59,isOdd); // true
numberFact(59,isPrime); // true

// Write a function called find. It should take in an array and a callback and return the first value found in the array that matches the condition.

function find(arr, fn) {
    for (let i = 0; i < arr.length; i++){
        return fn(arr[i]);
    }
}


// Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.

function speacialMultiply(params) {
    
}

 





