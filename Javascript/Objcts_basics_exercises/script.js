// Write the command to add the language "Go" to the end of the languages array.

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push("Go");

console.log(programming);

// Change the difficulty to the value of 7.

programming.difficulty = 7;

// Using the delete keyword, write the command to remove the jokes key from the programming object.

delete programming.jokes;

// Using the delete keyword, write the command to remove the jokes key from the programming object.

programming.isFun = true;

// Using a loop, iterate through the languages array and console.log all of the languages.

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

for (let key in programming){
    for (let lang of languages){
        console.log(lang);
    }
}

// Using a loop, console.log all of the keys in the programming object.

for (let key in programming){
        console.log(key)
    }


// // Using a loop, console.log all of the value in the programming object.

for (let value in programming){
    console.log(programming[value])
}   

