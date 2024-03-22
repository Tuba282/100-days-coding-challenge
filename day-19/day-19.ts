console.log(`\t\tits my day-19\n\n`);

//Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.

// Explain & TIP: We can use a special tool to go through each number in our list and make a new list with each number doubled.

// Starts with a list of numbers
// let numbers = [1, 2, 3, 4, 5];

// // Doubles each number
// let doubledNumbers = numbers.map(number => number * 2);

// // Shows the new list of doubled numbers
// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
// // This line takes each number, doubles it, and puts it in a new list.

//my try 1
let numbers = [1, 2, 3, 4, 5];

let TableOfNumber = numbers.map((element) => element * 3); //map() creates a new array with the results of calling a function for every array element. It returns a new array without altering the original array.

console.log(TableOfNumber);

//my try 2

let table = [6, 7, 8, 9];

let fouroftablenumber = table.map((element) => element * 4);
console.log(fouroftablenumber);

//my try 3 with foreach cuz it can double with forEach
console.log("\n\n");

let number = [1, 2, 3, 4];

number.forEach((element) => {
  console.log(`${element}`, element * 2);
});

// try with forEach again

let count = [1, 2, 3, 4, 5];

count.forEach((element) => {
  console.log(`\n${element}`, "* 5 =", element * 5);
});

//Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

// Explain & TIP: We can pick out just the words from a mixed bag of items, creating a list that includes only those words.

//Asharib Ali ka code

// A mixed bag of items
let mixedArray = [1, "apple", 2, "banana", true, "carrot"];

// Picks out only the words
let stringsArray = mixedArray.filter((item) => typeof item === "string");

// Shows the list of just words
console.log(stringsArray); // Output: ["apple", "banana", "carrot"]
// This line checks each item: if it's a word, it goes into the new list.

let array = ["ali", "jawwad", 282, 192, "tuba", 96, "bushra"];

let string_array = array.filter((element) => typeof element === "string");
let string_array2 = array.filter((element) => typeof element === "number");

console.log(`\n\n` + string_array);
console.log(`\n\n` + string_array2);

//let's try one last

let array1 = ["ali", "jawwad", 282, 194, "tuba", 98, "bushra", 258, 124];

let number_array = array1.filter((element) => typeof element === "number");

console.log(`\n\n` + number_array);

//Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.

// Explain & TIP: We can sum up all the grades and divide by the number of grades to find the average, giving us an idea of how well someone did overall.

// A list of grades
let grades = [88, 94, 72, 99, 53, 77];

// Calculates the average grade
let averageGrade =
  grades.reduce((total, grade) => total + grade, 0) / grades.length;

// Shows the average grade
console.log(averageGrade);
// First, we add up all the grades. Then, we divide by how many grades there are to get the average.


//let me mine

let average=[45,25,45,55,65]

let avg_of_number= average.reduce((element,add) => element+add,0) / average.length;

console.log(avg_of_number);
