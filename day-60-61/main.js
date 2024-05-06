"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(`its my day 60 of 100 days coding challenge\n\n`);
// Function Declaration
function start() {
    return `It is simple function\n\n`;
}
console.log(start());
// local variables function
function localVariables() {
    // local variables
    let full_name = "it is local variable\n";
    return full_name;
}
console.log(localVariables());
// console.log(full_name);
//Cannot find name 'full_name'.
// A variable declared inside a function is only visible inside that function.
// Outer variables / parameters
let hello = "Aadmin";
function name(hello, age) {
    return `Hello ${hello} your age is ${age}\n\n`;
}
console.log(name(hello, 20));
// here I used outer variable as parameter and in call function I used outer variable as argument
function cityCountry(city, country) {
    return `${city}, ${country}`;
}
console.log(cityCountry("Lahore", "Pakistan"));
console.log(cityCountry("Beijing", "China"));
// Default values
console.log(`\n\n`);
let city_Country = (city, country = "Pakistan") => {
    console.log(`${city}, ${country}`);
};
city_Country("Karachi");
city_Country("Tokyo", "Japan");
city_Country("Washington DC", "US");
// Function Declaration
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 5));
// Function Expression
let sum2 = function (a, b) {
    return a + b;
};
console.log(sum2(2, 8));
