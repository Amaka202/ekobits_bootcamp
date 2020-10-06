// Add the necessary code to wait for the DOM to load to make sure that anything you manipulate in the DOM has loaded. You can do this either using window.onload or adding an event listener for DOMContentLoaded.


document.addEventListener("DOMContentLoaded", function(){
    let container = document.getElementById("container");

})

// Replace the text "Change me" with "Hello World!".

let changed = document.getElementById("change_heading");

changed.textContent = "Hello World!";

// When a user hovers over one of the colored boxes change the text to display the color that is being hovered over.

let brown = document.getElementsByClassName("brown")[0];
let green = document.getElementsByClassName("green")[0];
let blue = document.getElementsByClassName("blue")[0];
let yellow = document.getElementsByClassName("yellow")[0];

brown.addEventListener("mouseover", function () {
    brown.textContent = "brown";
    brown.style.color = "white";
});

brown.addEventListener("mouseleave", function () {
    brown.textContent = "";
    brown.style.color = "white";
});

green.addEventListener("mouseover", function () {
    green.textContent = "green";
    green.style.color = "white";
})

green.addEventListener("mouseleave", function () {
    green.textContent = "";
    green.style.color = "white";
})

blue.addEventListener("mouseover", function () {
    blue.textContent = "blue";
    blue.style.color = "white";
})

blue.addEventListener("mouseleave", function () {
    blue.textContent = "";
    blue.style.color = "white";
})

yellow.addEventListener("mouseover", function () {
    yellow.textContent = "yellow";
    yellow.style.color = "white";
})

yellow.addEventListener("mouseleave", function () {
    yellow.textContent = "";
    yellow.style.color = "white";
});

// Create a new div element.

let newDiv = document.createElement("div");

// Give your new div a class of purple and style it so that it has a background color of purple.

newDiv.classList.add("purple");

// Append your new div to the page to the section tag.

let section = document.getElementsByTagName("section")[0];

section.appendChild(newDiv);

// Create a racing game with the two cars. When the race button is pressed, the two cars should move across the screen until one of them is at the end of the screen. When one of the blocks reaches the end - you should alert "winner!"