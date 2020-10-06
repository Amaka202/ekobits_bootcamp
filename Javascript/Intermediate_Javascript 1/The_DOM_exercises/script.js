// Select the section with an id of container without using querySelector.

let container = document.getElementById("container");

// Select the section with an id of container using querySelector.

let container1 = document.querySelector("container");

// Select all of the list items with a class of "second".

let secondClass = document.getElementsByClassName("second");


// Select a list item with a class of third, but only the list item inside of the ol tag.

let thirdOl = document.getElementsByTagName("ol")[0];

// Give the section with an id of container the text "Hello!".

let para = document.createElement('p');

para.textContent = "Hello"

container.appendChild(para);

// Add the class main to the div with a class of footer.


let footerClass = document.getElementsByClassName("footer")[0];

footerClass.classList.add("main");

// Remove the class main on the div with a class of footer.

footerClass.classList.remove("main");

// Create a new li element.

let newLi = document.createElement("li");

// Give the li the text "four".

newLi.textContent = "four";

// Append the li to the ul element.

let ulList = document.getElementsByTagName("ul")[0];

ulList.appendChild(newLi);

// Loop over all of the lis inside the ol tag and give them a background color of "green".

let olList = document.getElementsByTagName["ol"];

for(let i = 0; i < olList.length; i++){
    olList[i].style.color = "red";
}

// Remove the div with a class of footer.

footerClass.classList.remove("footer");


