"use strict";

// setup your IIFE (Immediately Invoked Function Expression)

(function () {


    if(document.getElementById("home") != null) {
        console.log("Home Page");

    } else if (document.getElementById("projects") != null) {
        console.log("Projects Page");


    } else if (document.getElementById("contact") != null) {

        console.log("Contact Page");
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        var checkMeOut = document.getElementById("checkMeOut");
        var submitButton = document.getElementById("submitButton");

        // Checkbox Event Listener 
        checkMeOut.addEventListener("change", function () {

            if (checkMeOut.checked) {
                console.log("It's checked!");
            } else {
                 console.log("It's Unchecked!");
            } // end else
         }); // end addEventListener

        submitButton.addEventListener("click", function(event) {
                    event.preventDefault();
                    console.log("Email: " + email.value);
                    console.log("Password: " + password.value);
                });

        } // End else if

 })();





    
  // checkMeOut.onclick(function() {
    //     console.log("checkMeOut clicked");
    // });


      // (checkMeOut.checked) ? console.log("It's checked") ; console.log("It's checked");


   
     // a little nicer but counting down
    /*
    for(var index= paragraphData.length-1; index > -1; index--) {
        console.log(paragraphData[index]);
    }
    */
    
    
    /* even nicer but more complicated
    paragraphData.forEach(function(paragraph) {
        console.log(paragraph);
    });
    */
  
    //declared a named function way

//     function replaceFirstParagraph() {
//         console.log("inside replaceFirstParagraph function");
//         var firstParagraph;

//         firstParagraph = document.getElementById("firstParagraph");

//         firstParagraph.innerHTML = "My New Paragraph Data";
        
//     }

   
//     // call the replaceFirstParagraph function
//     replaceFirstParagraph();


// })();

