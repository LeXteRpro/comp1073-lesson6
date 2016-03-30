// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";

var myVariable = "hello!";

console.log("myVariable " + myVariable);


var myArray = [
    "Orie Hulan",
    "Georgian Drive",
    "Barrie",
    "Ontario",
    40,
    true
];


console.log(myArray.splice(4, 0, '705-555-555') + "\n");

console.log("++++++++++++++++");

myArray[4] = "705-555-5000";

for (var index=0; index < myArray.length; index++) {
    console.log(myArray[index]);
}

myArray.push("My First Greeting!");

myArray.push("My Second Greeting!");

console.log(myArray);

})();

