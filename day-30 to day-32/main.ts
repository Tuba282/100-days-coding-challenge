import chalk from "chalk";

console.log(`\t\tIts mt day 30 to day 32\n`);

//Question 88: Rounding to the Nearest Integer:
function rounding_number(num_1: number) {
  return Math.round(num_1);
}
console.log(
  chalk.bgBlueBright`Round of 12.6 is ` + ` ` + rounding_number(12.6)
);
console.log(
  chalk.bgBlueBright`\nRound of 48.7 is ` + ` ` + rounding_number(48.7)
);
console.log(
  chalk.bgBlueBright`\nRound of 72.5 is ` + ` ` + rounding_number(72.5)
);
console.log(
  chalk.bgBlueBright`\nRound of 25.2 is ` + ` ` + rounding_number(25.2)
);

//Question 89: Converting Strings to Numbers:

function Converting(int: string, float: string) {
  return `${parseInt(int)} ${parseFloat(float)}`;
}
console.log(
  chalk.bgGray`\nconverting  this string='154.66' into integer and float ` +
    ` ` +
    Converting("154.66", "154.66")
);

//Question 90:Checking if a Value is NaN:(not a number)
// isNaN()

function Checking(num: any) {
  console.log(`\n`);

  return isNaN(num);
}
console.log(Checking(`checking`)); //true isNaN checks the given value is type number or not
//if yes its shows `false`
console.log(Checking(458)); //and if not a number then it gives `true`

//Question 91: Create an array of your three favorite fruits and add a new fruit to the end of the array.
//using .push()

function add_element_from_the_end(...element: any) {
  // let array=[]
  // array.push(element);
  console.log(element);
}
add_element_from_the_end(`nayab`, `tuba`);

function using_push(element: any) {
  let array = [`red`, `green`];
  console.log(array);
  array.push(element);
  console.log(array);
}
using_push(`yellow`);

//Question 92: Write a function to remove the last element from an array and return the removed element.
console.log(`\n`);
//using .pop()

function using_pop() {
  let temp = [`cpu`, `monitor`, "mouse", `keyboard`];
  let remove_element = temp[3];
  temp.pop();
  console.log(`this is the removed element =  ` + remove_element);
}
using_pop();

//Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
/*using `indexOf`and `replace` */

function fruits() {
  // Array of fruits
  let array = ["Apple", "Banana", "Grapes", "Orange"];

  // Find the index of "Banana" in the array
  const index = array.indexOf(`Banana`);

  // Check if "Banana" exists in the array
  if (index !== -1) {
    // Log the index of "Banana"
    console.log(`The index of "Banana" is: ${index}`);

    // Replace "Banana" with "Mango"
    array[index] = "Mango";
  }

  // Log the modified array
  console.log(array);
}
fruits();

//Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.

//The .map() method transforms each item in an array according to a specific function and returns a new array with the transformed items.

let word = ["apple", "banana", "grapes", "orange"];

let mao = word.map((x) => x.length);
console.log(mao);

//Question 95: Use the .filter() method to create a new array that contains only the even numbers from an array of numbers.
//The .filter() method creates a new array with all elements that pass the test implemented by the provided function.

let num = [25, 35, 19, 38, 34, 12, 11, 4, 28, 9, 10];

console.log(`\n these are te numbers greater then 20`);
let filter_2 = num.filter((x) => x > 20);
console.log(filter_2);

console.log(`\n these even numbers are greater then 20`);
let filter_1 = num.filter((x) => (x % 2 == 0) && (x > 20)); //this is the way to check the number is even or not
console.log(filter_1);

//Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
// Explain & TIP: The .reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
console.log(`\n`);

let sum = [5, 7, 8];
console.log(`ye array tha = ${sum}`);
console.log(`ye array ka sum hai jo .reduce() use karny k bad mila hai = ${sum.reduce((x, y) => x + y, 0)}`);
