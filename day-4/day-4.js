"use strict";
console.log("***************Day-4**********************\n\n");
// Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.
let mamma = 'My mother'; //Here I am adding comments 
console.log(`${mamma} is a very good person.she is doing very hard for us so we can stand on our own feet.`); //In this question we have create a variable called mamma and print a message .
//Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.
//My first try
let array_1 = ['tuba', 'bushra', 'mamma', 'nayab', 'asani', 'pareshani'];
for (let i = 0; i < array_1.length; i++) {
    console.log(array_1[i]);
}
//Ashraib Ali Ka code hai.
let names = ["Alice", "Bob", "Charlie"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//further practise
let array_2 = ['anmol', 'nayab', 'mamma', 'bushra', 'tuba', 'arosa', 'barera'];
for (let j = 0; j < array_2.length; j++) {
    console.log(array_2[j] + '=' + array_2);
} // is me kuch  kharabi hai
//ye banana hai.
//array_3[0] = anmol 
//array_3[1] = nayab 
//array_3[2] = mamma 
//array_3[3] = bushra 
let array_3 = ['anmol', 'nayab', 'mamma', 'bushra', 'tuba', 'arosa', 'barera'];
for (let a = 1; a < array_3.length; a++) {
    for (let b = 1; b < array_3.length; b++) {
        console.log(`\narray_3[${a}]` + '=' + array_3[b]);
    }
    console.log('\n\n');
} //ye q ni desire output de raha
// let make another one
for (let c = 1; c < array_3.length; c++) {
    for (let d = 1; d >= array_3.length; d++) {
        console.log(`\narray_3[${c}]` + '=' + array_3[d]);
    }
}
//Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
for (let x = 0; x < array_3.length; x++) {
    console.log(array_3[x] + 'Hello How`s your work going.? ');
}
