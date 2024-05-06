"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Type Annotations With Function
function square_root(num) {
    return Math.sqrt(num);
}
console.log(square_root(144)); //12
console.log(square_root(64)); //8
console.log(square_root(9)); //3
// Optional Parameter
function min_max(num1, num2, num3) {
    console.log(num1);
    console.log(num2);
    console.log(num3);
} //here num3 is optional parameter if we didn't give value to num3
//it will not effect any harm to our code.
min_max([14, 25, 4, 48], [20, 25, 14, 85]);
min_max([10, 45, 96, 12], [20, 78, 25, 98], 30);
// Default Parameter
function default_parameter(age, educ = "Masters") {
    console.log(`he is ${age} years old and donw with ${educ}`);
}
default_parameter(19);
default_parameter(19, "intermediate");
// Rest Parameter
function rest_parameter(...friends) {
    console.log(`I have alot of friends ${friends}...`);
}
rest_parameter(`akram`, 'noor'); // we can gfriends parameters as we want
// Anonymous Function
let anonymous_function = function (width, length) {
    // area of rectangle using anonymous function
    console.log(`the area of rectangle using anonymous function is ${width * length}`);
};
anonymous_function(5, 6);
// Arrow Function
let arrow_function = (length, breadth) => {
    // area of triangle using anonymous function
    console.log(0.5 * length * breadth);
};
arrow_function(9, 6);
// void & never
function void_function() {
    console.log("this is void function");
}
void_function();
function never_function() {
    throw new Error("this is never function");
}
