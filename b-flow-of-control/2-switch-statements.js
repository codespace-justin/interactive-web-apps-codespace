/*----------------------------------------------------------
 * Switch Statement Example
 *--------------------------------------------------------*/

console.log("Switch Case Statement Example");

//Start with keyword switch (criteria to evaluate)
switch ("greet") {

    // case to compare against
    case "greet":
        // functionality here..
        console.log("Hello World!");
        // break statement takes you of switch
        break;

    case "socialize":
        console.log("Lets code together!");
        break;

    case "leave":
        // code here..
        console.log("Goodbye World.");
        break;

    // default case in case criteria isnt among prescribed cases
    // default is needed 9/10 times otherwise switch will repeat itself
    default:
        console.log("No valid input, sorry World... :(")
        console.log("Must be either 'greet', 'socialize' or 'goodbye' ")


} // dont forget to format code if copying.


/*----------------------------------------------------------
 * Switch Code Walkthrough
 *--------------------------------------------------------*/

/*
 * Author: Justin Jenecke
 * Module: Flow and Control 
 * Chapter: If Statements 
 * App: High School Grade Determining App
 */

console.clear();

console.log("App to determine what group you usually are at a certain age");

// create age variable
let ageInput = prompt("Please Input an age:");

//console.log("The type of the input was a " + typeof ageInput);

// create age var, and parse ageInput to Number
let age = parseInt(ageInput);

switch(age) {

    case 14: 
        console.log("Based on your age should be in the 8th Grade");
        break;

    case 15: 
        console.log("Based on your age should be in the 9th Grade");
        break;

    case 16 : 
        console.log("Based on your age should be in the 10th Grade");
        break;

    case 17 : 
        console.log("Based on your age should be in the 11th Grade");
        break;

    case 18 : 
        console.log("You should be in Matric by " + age + " years old.");
        break;

    // Cannot resolve conditions
    case (age > 18) :
        console.log("You are too old for high school");
        break;

    // Cannot resolve conditions
    case (age < 18) :
        console.log("You are too young for high school");
        break;

    default :
        console.log("You are either too young, or too old for High School");

}

// What you do is attempt to include a condition inside of a case