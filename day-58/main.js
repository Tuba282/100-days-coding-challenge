"use strict";
// logical operator
// 1. &&
// 2. ||
// 3. !
Object.defineProperty(exports, "__esModule", { value: true });
console.log(true && true);
console.log(true || false);
// Logical operator
// 1. &&
// 2. ||
// 3. !
let and = true && true;
console.log(and + "Logical and operator" + typeof and);
let or = true || false;
console.log(or + "Logical or operator" + typeof or);
let not = !true;
console.log(not + "Logical not operator" + typeof not);
console.log(`***************Task*************`);
// What's the result of OR?
console.log(null || 2 || undefined);
//don't know
// What's the result of AND?
console.log(1 && null && 2);
//false
// Check the range between
let num = 9;
if (num > 0) {
    console.log("Positive");
}
else if (num < 0) {
    console.log("Negative");
}
else {
    console.log("Zero");
}
// Check the range outside
// Write an if condition to check that age is NOT between 14 and 90 inclusively.
let age = 25;
// Create two variants: the first one using NOT !, the second one – without it.
if (!!(age >= 14 && age <= 90)) {
    console.log("Age is correct");
}
/*
Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”

*/
let login = prompt("Enter login");
if (login === "Admin") {
    let password = prompt("Enter password");
    if (password === "TheMaster") {
        console.log(`Welcome`);
    }
    else if (password !== password) {
        console.log(`Wrong password`);
    }
    else {
        console.log(`Canceled`);
    }
}
else if (login === "") {
    console.log(`I don't know`);
}
else {
    console.log(`canceled`);
}
