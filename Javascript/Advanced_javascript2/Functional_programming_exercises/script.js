var myModule = (function() {

    // A private variable inside the scope of the IIFE that is 
    var privateVariable = "secret";

    // A private function inside the scope of the IIFE
    function privateFunction() {
        console.log("You just called the private function!");
    };

    // everything returned in the object is accessible publicly  
    return {
        // A public variable
        publicVariable: "You can see me!",

        // A public function utilizing privates
        displayPrivateVariable: function() {
            console.log(privateVariable);
        },
        invokePrivateFunction: function() {
            privateFunction();
        }
    };
})();

myModule.publicVariable; // "You can see me!"
myModule.displayPrivateVariable(); // "secret"

myModule.privateFunction; // undefined
myModule.privateVariable; // undefined
myModule.invokePrivateFunction();

// functional programming is a alternative to OOP and ivolves building programs with small reusable functions which should be pure functions.

// pure functions, when called many times with same input, always gives the same output, does not modify external state or change values outside their scope

// currying is the process of breaking down a function that takes multiple arguments into a series of function that take some subset of the augements

// design patterns egs: constructor, module, fascade, observer patterns etc.

// anti patterns in javascripts are: decalring lots of variables in the global scope, using eval functions, modifying Obeject prototypes.

// memory leaks occurs when theres memory that is not required but still allocated

// timers not cleared, DOM references and closure variables all cause memory leaks

// use strict mode to help with memory leaks.