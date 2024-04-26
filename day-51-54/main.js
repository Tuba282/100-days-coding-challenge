"use strict";
console.log(`\t\tits my day 53 of 100 days of coding challenge\n\n`);
//here I learn variables and data types
let hello;
hello = "hello world";
let message = hello;
alert(message);
alert(hello);
// we can delare multiple variable in one line
let user = "John", age = 25, hell = "Hello";
console.log(user, age, hell);
//#Variable naming rules
//1. Variable names can contain letters, digits, and underscores and must not begin with number
let userName = "Bushra Jan";
let test123 = 252585;
let _123;
let $123;
console.log(userName, test123);
let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"
alert($ + _); // 3
//#Reserve words cannot be used as variable names because they are used by the language itself.
/**
let let = 1;
let return ="hello";
let const = 45.9;
*/
//# const declaration means a value of variable can't change
const myBirthday = "18.04.1982";
console.log(myBirthday);
/**
 * Declare two variables: admin and name.
   Assign the value "John" to name.
   Copy the value from name to admin.
   Show the value of admin using alert (must output “John”).
 */
let admin;
// let name = "John";
// admin = name;
alert(admin);
/*
Create a variable with the name of our planet. How would you name such a variable?
Create a variable to store the name of a current visitor to a website. How would you name that variable?
*/
let myPlanet = "Earth";
let currentVisitor = "Tuba Jan";
console.log(`My planet is ${myPlanet} and my current visitor is ${currentVisitor}`);
console.log(`\t\tits my day 54 of 100 days of coding challenge\n\n`);
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
let fulname;
let person = "Ali Mujahid";
// Boolean
