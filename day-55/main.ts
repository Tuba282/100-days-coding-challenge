console.log(`\t\tits my day 55 of 100 days of coding challenge\n\n`);

// Data Types
//There are eight basic data types in JavaScript.
let n = 123;
n = 12.345;
//Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.

// .Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.

// We can get it as a result of division by zero:

alert(1 / 0); // Infinity

// NaN is sticky. Any further mathematical operation on NaN returns NaN:

alert(NaN / 2); // NaN, such division is erroneous
alert(NaN + 1); // NaN
alert(3 * NaN); // NaN
// alert( "not a number" / 2 - 1 ); // NaN

// *********************************************************************

// BigInt
// when we want to work with big numbers, we use BigInt.
console.log(12154542654n);

// String
/*
Double quotes: "Hello".
Single quotes: 'Hello'.
Backticks: `Hello`.
*/
let fulname: "Tuba Jan";

let person = "Ali Mujahid";
// Boolean
let is_married = true;
let is_single = false;

// Null
let isNull = null;

// Symbol

let sym = Symbol("foo");

// Object
let man = {
  name: "Ali",
  age: 25,
};

typeof undefined // "undefined"

typeof 0 // "number"

typeof 100n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

typeof NaN // "number"  (4)


//#alert
/*This one we’ve seen already. It shows a message and waits for the user to press “OK”.

For example:

*/
alert("hey Beautifull people");

// #prompt
/*The prompt() method shows a modal window with an optional message prompting the user to input some text.

The result of the prompt is a string, or null if the user clicks “Cancel”.

It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.

title
The text to show the visitor.
default
An optional second parameter, the initial value for the input field.

*/
let how_old = prompt('How old are you?', `100`);

alert(`You are ${how_old} years old!`); // You are 100 years old!

// #confirm

// The confirm() method shows a modal dialog with an optional message and two buttons: OK and Cancel.

// The result is true if OK is pressed and false otherwise.

let is_adult = confirm("Are you 18 years old?");

alert(is_adult); // true if OK is pressed, false if Cancel is pressed

