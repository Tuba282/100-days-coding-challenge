"use strict";
console.log(`\t\tday-25\n\n`);
//Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
{
    let letname = 'Tuba Jan';
    const cont_1 = 'Bushra jan';
    const cont_2 = 'Mamma';
    console.log(cont_1); // it will print "Bushra jan"
}
//console.log(cont_2); it'll print nothing showing error  cause it is out of braces
try {
    // console.log(cont_2);
}
catch (error) {
    // console.log(cont_2); it'll print nothing showing error  cause it is out of braces
}
//Question 73: Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.
function assign_var() {
    let var1 = 9; //here i am assinging a vriable 
    console.log(var1);
    var1 = 25; //here i am updating my valriable
    console.log(var1); // it would'nt give 9 
}
assign_var();
//Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
function swap() {
    let a = 5;
    let b = 9;
    console.log(`before values:\n a= ${a} and b= ${b}`);
    let swap = a; // it store a's value in swap now a is khali
    a = b; // now a has b's value and now b is khali
    b = swap;
    console.log(`\tnow after swapping a= ${a} and b= ${b} `);
}
swap();
//Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.
function assignment_operator() {
    let value = 9;
    console.log("Initial value:", value); //9
    value += 6;
    console.log("addition -value:", value); //15
    value -= 1;
    console.log("subtraction -value:", value); //14
    value *= 2;
    console.log("multiplication -value:", value); //28
    value /= 3;
    console.log("division -value:", value); // 8..
}
assignment_operator();
