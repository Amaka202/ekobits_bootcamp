// Array Exercies

// Using a loop, iterate through this array and console.log all of the people.

let people = ["Greg", "Mary", "Devon", "James"];

for (person of people){
    console.log(person);
}

// Write the command to remove "Greg" from the array.

let removed = people.shift()

console.log(removed);

// Write the command to remove "James" from the array.

let removed2 = people.pop()

console.log(removed2);


// Write the command to add "Matt" to the front of the array.

people.unshift("Matt");

console.log(people);

// Write the command to add your name to the end of the array.

people.push("Amaka");
console.log(people);

// Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
//people = ["Matt", "Mary", "Devon", "Amaka"]

for(peep of people){
    if(peep == "Mary"){
        break
    }

  
    console.log(peep);
}


// Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".

newCopy = people.slice(2, people.length);

console.log(newCopy);

// Write the command that gives the indexOf where "Mary" is located.

console.log(people.indexOf("Mary"));

// Write the command that gives the indexOf where "Foo" is located (this should return -1).


console.log(people.indexOf("Foo"));