// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";

    var output = "";
    var firstParagraph = document.getElementById("firstParagraph");

    var person = {

        "age": 40,
        "name": "Orie",
        "address": "1 Georgian Drive",
        "city": "Barrie",
        "province":"Ontario",

        "familyNames": [
        "Harrison",
        "Marissa",
        "Dino",
        "Alexander"
        ],

        "sayHello": function(){
            output += "<br><hr><br>"
            output += person.name + " says hello";
        }
        
    }; /* Var person = new Object(); */



// for every key in the Person Object, loop...
for(var key in person) {

    if (key == "familyNames") {

        output += "<br>Family Names: <br>";

        output += "<hr><br>";

        output += "<ul>";

        for(var index = 0; index < person.familyNames.length; index++) {
            output += "<li>" + person.familyNames[index];
        } // close for loop
        output += "</ul>";
    } // close if statement


    // Check if the key is the sayHello method
    else if (key == "sayHello") {
        person.sayHello();
    }

    // For all other cases, do the following...
    else {
        output += person[key] + "<br>";
    } // else statement
}


firstParagraph.innerHTML = output;

})();

