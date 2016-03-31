// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";
    var output = "";
    var firstParagraph = document.getElementById("firstParagraph");


    // Instantiate new xhr
    var request = new XMLHttpRequest();
    request.open('GET', '../person.txt', true);
    request.addEventListener('readystatechange', function() {

        if (request.readyState === 4) {

           var person = {}; /* Var person = new Object(); */

           person = JSON.parse(request.responseText);

           console.log(person);


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

}

});

})();

