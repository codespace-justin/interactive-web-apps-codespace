// ----- Overview of all concepts ----- //

/**--------------------------------------------------------
 * Creating Variables
 * ------------------------------------------------------*/

    let age = 20; // create variable age, give it value of 20
    console.log(age); // print age to console (20)

    age = 25; // reassign age = to 25;
    console.log(age); // print age to console (25)


// Null vs Undefined type

    let isEmployed = null; // deliberately assign something a value of nothing

    let hasCar; // assignment never happends, variable is only declared

/**--------------------------------------------------------
 * Objects Example
 * ------------------------------------------------------*/

// JavaScript Object:

    let person1 = {

        name : "Justin",
        employed : true,     //State or Variables as properties
        job : "Code Coach",
        telNo : 15,

        fullTitle : function() {      // Behaviour or Functionality as properties
            console.log(this.name + job) // this keyword is specific to objects. Used to reference this specific object
        }
    }


/**--------------------------------------------------------
 * DOM Basics
 * ------------------------------------------------------*/

 document.getElementById("name of css id"); // gives back an HTML element as a JavaScript Object
 document.getElementsByClassName("name of css class"); // gives back a list of HTML Elements (similar to array)
 innerHTML // allows you to manipulate text or child elements inside of HTML element
 on + "event" // allows you handle events that occur on HTML element and do something after
    /* 
    - eg:
     - onclick
     - onhover
     - etc.
    */
 classList += "enter class name" // allows you to add a class to an HTML object
