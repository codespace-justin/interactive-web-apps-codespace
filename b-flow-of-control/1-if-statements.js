/*----------------------------------------------------------
 * If Statement
 *--------------------------------------------------------*/

// ----- Example 1 ----- //

let booleanVariable = true
			// Condition
if (booleanVariable === true) { // start of body/functionality

	console.log("variable has a value of true"); // do something if condition is true

} // end of body/functionality


// ----- Example 2 ----- //

// declare a variable name and assign value
let name = "Justin";

if (name == "Samantha") { // if this condition is false, nothing will run
	console.log("Hello Samantha!")
}


/*-----------------------------------------------------------
 * If and Else
 *---------------------------------------------------------*/

// --- If Else Example --- //

let name = "Justin";

// first condition
if (name == "Samantha") {
	
	// if true this code will run
	console.log("Hello Samantha!")

} else {

  // if false this code will run
	console.log("You are not Samantha, your name is " + name);
}


/*-----------------------------------------------------------
 * Nested If Statements / Else-If
 *---------------------------------------------------------*/

/*
 * Author: Justin Jenecke
 * Module: Flow and Control 
 * Chapter: If Statements 
 * App: Nebank ATM APP
 */

console.log("\t\tNedbank ATM APP:"); 
console.log("-------------------------------\n")

// set account balance to 100, and name of bank to Absa

let balance= 112;
let bank = "Absa";

// Using && operater to check 2 conditions in one expression

if (balance> 20 && bank  == "Nedbank")  {

    balance = balance - 20;
    console.log("Your withdrawal was successfull"); // runs if both conditions are true
    console.log("You current bank account balance is " + balance)


} else if (balance < 20 && bank  == "Nedbank") {

    // runs if bank condition is true
    console.log("Your withdrawal was unsuccessfull.. Insufficient funds.");

} else {

    // if no conditions are true the default will run
    console.log("Invalid card. Please insert a valid Nedbank Bank Account \n to use the services of this ATM.");
}