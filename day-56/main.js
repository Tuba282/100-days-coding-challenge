"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(`\t\tits my day 55 of 100 days of coding challenge\n\n`);
// Type Conversions
// String Conversion
/*
 
String conversion happens when we need the string form of a value.

For example, alert(value) does it to show the value.

We can also call the String(value) function to convert a value to a string:
 */
// let value = true;
// prompt(typeof value); // boolean
// let new_value = value.toString(); // now value is a string "true"
// prompt(typeof new_value); // string
// Number Conversion
let str = "123";
let num = Number(str); // becomes a number 123
console.log(num);
// Terms: “unary”, “binary”, “operand”
/*
An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.
*/
let x = 7, y = 2;
console.log(x - y);
// Maths Arithmatic  Operations including + - * / % **
// all are binary operators and not coplex exacpt the % and **
console.log(7 + 9);
console.log(9 - 2);
console.log(2 * 8);
console.log(14 / 2);
console.log(15 % 6); //2.5
console.log(2 ** 3); //8
// string concatination
let con = "2" + " " + "worlds";
console.log(con);
let con2 = "hello" + " " + 5;
console.log(con2);
//Addition
let add = 5 + 5;
console.log(add);
// Increment and Decrement
let inc = 5;
inc++;
console.log(inc);
let dec = 5;
dec--;
console.log(dec);
// Operator precedence
// ++ increment
// -- decreament
// ** exponent
// * mulpyplication
// / division
// + addition
// - subtraction
// = Asignment operator
// we use = to assign value to a variable
let n = 9;
let m = 5;
console.log(`**********Task*************`);
// The postfix and prefix forms
// What are the final values of all variables a, b, c and d after the code below?
let a = 1, b = 1;
let c = ++a; // ?
let d = b++; // ?
console.log(a); //1
console.log(b); //1
console.log(c); //2
console.log(d); //1
// Assignment operator
// What are the values of p and t after the code below?
let p = 2;
let t = 1 + (p *= 2);
console.log(t); //5
// Type conversions
// /What are results of these expressions?
