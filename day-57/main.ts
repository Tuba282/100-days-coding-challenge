console.log(`\t\tIts my day 56 of #100 days coding challenge\n\n`);

// Comparisons
/*
a > b
a < b
a >= b
a <= b.
a == b
sign == means the equality test, while a single one a = b means an assignment.
a != b.
*/
let a = 10;
let b = 20;
console.log(a > b); //false
console.log(a < b); //true
console.log(a <= b); //true
// A comparison result can be assigned to a variable, just like any value:
let result = 9 > 5;
console.log(result); // it will give me boolean value true

console.log(a >= b); //false
console.log(a == b); //false
console.log(a != b); //true
console.log(a === b); //false

// String conparision
/*      0=48
         1=49
         .
         .
         .
         9=57
         
         A=65
         B=66
         .
         .
         .
         Z=90 
         
         a=97
         z=122


 */
// For boolean values, true becomes 1 and false becomes 0.
console.log("Z" > "A"); // true
console.log("Glow" > "Glee"); // true
console.log("Bee" > "Be"); // true

// Conditional branching: if, '?'
/*
if (condition) {
    statement
}
*/
let year = 2024;
if (year === 2024) {
  console.log(`current year is ${year}`);
}
if (0) {
  //this condition is wrong
  console.log(`false`);
}
if (null) {
  // this condition is wrong

  console.log(`true`);
}
// The “else” clause
if (0) {
  console.log(`false`);
} else {
  console.log(`False because if (0) is wrong condition`);
}
if (year === 2024) {
  console.log(`This is current year`);
} else {
  console.log(`this is not current year`);
}
//Several conditions: “else if”
// Logical Operators
/*
    && -> AND
    || -> OR
    ! -> NOT
*/

if (year === 2024 || year >= 2024) {
  console.log(`this is current year`);
} else if (year !== 2024) {
  console.log(`this is not current year`);
} else {
  console.log(`there is some issue in your celender`);
}
// *************************************************
if (`A` > `a`) {
  console.log(`A is greater than a`);
} else if (`a` > `A`) {
  console.log(`a is greater than A`);
} else {
  console.log(`both are equal`);
}

// ********************************************
console.log(`*************Task*************`);
// // ********************************************
// if (a string with zero)
if (`0`) {
  console.log(`Yes Shown`);
} else {
  console.log(`not shown`);
}

/*
    Show the sign

    1, if the value is greater than zero,
    -1, if less than zero,
    0, if equals zero.

    */

let num = -9;
if (num > 0) {
  console.log(`1`);
} else if (num < 0) {
  console.log(`-1`);
} else if (num === 0) {
  console.log(`0`);
}
//their output will be -1

if (0 > 5) {
  console.dir(`0 is greater than 5`);
} else {
  console.dir(`5 is greater than 0`);
}

let login = "admin";
let message;
if (login === "admin") {
  message = "Hello"; //not working at all
  console.log(`Hello
    `);
} else {
  message = "Give me back my Hello"; // not working at all
}
