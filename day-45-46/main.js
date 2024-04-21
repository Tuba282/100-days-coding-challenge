"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log(`its my day 45-46`);
const student = {
    name: "Ali",
    age: 22,
    city: "karachi",
    // roll_no:`Bs-008`,
    // section:'C',
    // address:`Street-1 `,
};
let jsonString_1 = JSON.stringify(student);
console.log(jsonString_1); // it will print my entire object in one line as JSON string
const toJsObj = '{"name":"Ali","age":22,"city":"karachi"}';
const json = JSON.parse(toJsObj);
console.log(json); //it will take my JSON string and parse it into a JavaScript object.
// ------------------------------------------------------------
//JSON.parse() JSON string  ko javaScript object me convert karta hai
//JSON.stringify() JavaScript object ko JSON string me convert karta hai.
// ------------------------------------------------------------
// JSON.parse() is used to convert a JSON string into a JavaScript object. This is particularly useful when dealing with data received as JSON from a web server or API.
//Converting a JavaScript object into a JSON string can be done using JSON.stringify().
//----------------------------------------------------------------------
const jsonString_2 = JSON.stringify(json, undefined, 2);
console.log(jsonString_2); // it print the object with spaces between items
const jsonString_3 = JSON.stringify(json, null, 4);
console.log(jsonString_3); // it print the object as it is now in code
// null karo ya undefined karo kam wahi kar raha hai. and this 3 is for indentation (spacing)
// // /------------------------------------------------------------------------------------------------------------------------------\//
try {
    let num = 7;
    for (let i = 0; i < 10; i++) {
        console.log(`\t\t${num} x ${i} = ${num * i}`);
    }
    throw new Error("Something is going wrong");
}
catch (error) {
    // Exception handler
    console.log("enter your table number again .", error.message);
}
// Sample code snippet for setting a breakpoint
console.log("Before breakpoint");
// Set a breakpoint on the following line using your browser's developer tools
console.log("This line has a breakpoint set on it in the browser's developer tools");
console.log("After breakpoint");
// To use breakpoints, open this code in your browser, open the developer tools, navigate to the Source tab, find this script, and click on the line number where you want to pause execution. When you reload or run your page, execution will pause at the breakpoint.
// ------------------------------------------------------------------
// Discuss the difference between default and named exports in JavaScript modules.
// JavaScript provides two main types of exports: default and named. A module can have only one default export, but multiple named exports. This flexibility supports various use cases in module design.
const default_1 = __importDefault(require("./default"));
//default export ke sath {} nahi lagy hain
let print = new default_1.default();
print.output();
//named export ke sath {}  lagy hain
const multiple_1 = require("./multiple");
console.log((0, multiple_1.add)(2, 3));
const multiple_2 = require("./multiple");
console.log((0, multiple_2.sub)(2, 3));
const multiple_3 = require("./multiple");
console.log((0, multiple_3.mul)(4, 5));
const multiple_4 = require("./multiple");
console.log((0, multiple_4.div)(14, 2));
