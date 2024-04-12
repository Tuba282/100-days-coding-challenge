"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("\t\t it's my day-36 challenge of #100-day-coding-challenge");
let orignal_array = [1, `akram`, 3, `bilal`, 5, `waseem`, 7, `ahmed`, 9, `noor`];
// const splice = orignal_array.splice(1, 3,"tuba")
// it will remove from akram to bilal and replace with `tuba`
const splice = orignal_array.filter(item => item !== "akram" && item !== "bilal" && item !== "waseem" && item !== "ahmed" && item !== "noor");
// in this I only print the numbers 
const numbers = splice.filter(item => typeof item === "number");
console.log(splice);
console.log(numbers);
console.log(orignal_array);
let only_string = orignal_array.filter(item => typeof item === "string");
//it will print only string from the orignal_array without destroying its orignal form
console.log(only_string);
// i 
let joined = orignal_array.join(` anas `);
console.log(joined); // it will print `anas` after every array element
let concat = orignal_array.concat(` mamma `);
// I think it will print `mamma` at the end of the orignal_array
console.log(concat);
let array = [`canada`, 'japan', `america`, 'india', "pakistan", `brazil`];
console.log(`\n Sorted array :\n\n` + array.slice().sort());
console.log(`\n Orignal Array :\n\n` + String(array));
console.log(`\n Reversed Array :\n\n` + String(array.slice().sort().reverse()));
let use_includes_1 = array.includes(`america`);
let use_includes_2 = array.includes(`tuba`);
console.log(use_includes_1); //true
console.log(use_includes_2); //false
let new_array = [2, 4, 5, 6, 8, 10, 11];
let use_map = new_array.map(x => x * 2); //it will make a new array and store double of every element 
console.log(use_map);
let use_reduce = new_array.reduce((a, b) => ((a + b) / new_array.length) * 100);
console.log(Math.floor(use_reduce));
let use_filter = new_array.filter(x => x % 2 === 0); //it will make a new array and store only even numbers
console.log(use_filter);
let array_part2 = [`akram`, `bilal`, `waseem`, `ahmed`];
array_part2.forEach(element => {
    console.log(`\n break a leg ${element}`);
});
console.log(array_part2.indexOf(`bilal`)); // it will return 1
console.log(array_part2.indexOf(`tuba`)); //it will return -1 cause tuba is not in the array
let use_replace = `i want to use replace method`;
console.log(use_replace);
console.log(use_replace.replace(`want`, `need`));
let array_part3 = [2, 4, 6, 8, 10];
let check_every = array_part3.every(element => element % 2 === 0);
let checkevery = array_part3.every(element => element % 3 === 0);
console.log(checkevery);
console.log(check_every); // it will give boolean answer true or false
console.log(array_part3.some(element => typeof element === "string"));
//it will give boolean answer true or false
let use_find = array_part3.find(element => typeof element === "string");
// it will return false cause it will not find the first element string which is actually number.
console.log(`\n\torignal array : ` + array_part3); //orignal array
console.log(`\n\tusing shift : ` + array_part3.shift() + `\n ${array_part3}`); //Removes the first element from an array
console.log(`\n\tusing unshift : ` + array_part3.unshift(49) + `\n ${array_part3}`); //Adds an element to the beginning of an array
console.log(`\n\tusing pop : ` + array_part3.pop() + `\n ${array_part3}`); //Removes the last element from an array
console.log(`\n\tusing push : ` + array_part3.push(1004) + `\n ${array_part3}`); //Adds an element to the end of an array
function checking(number) {
    return number % 2 === 0 && number % 4 === 0;
}
console.log(checking(12)); // Outputs: true
console.log(checking(14)); // Outputs: true
function string_matching(string_1, string_2) {
    return string_1.toLowerCase() === string_2.toUpperCase();
}
console.log(string_matching(`waseem`, `WASEEM`)); // Outputs: true
console.log(string_matching(`Tuba`, `Tuba`)); // Outputs: false
