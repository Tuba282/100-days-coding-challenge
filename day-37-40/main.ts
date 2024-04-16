import { log } from "console";
import { type } from "os";

console.log(`\t\tIts my day day-36 to day 41 task \n\n`);

const my_pet_cat: any = {
  name: "kitty",
  age: 5,
  color: "white",
  nature: "kind",
  friend_s_cat: function () {
    console.log(`My friend's cat name is
         ${this.name} and he is ${this.age}
          years old and he is ${this.color}
           in color and he is ${this.nature}
            nature\n\n`);

    const sis_cat = () => {
      console.log(`My sister's cat is ${this.name}
            and he is ${this.age} years old and he is ${this.color}
             in color and he is ${this.nature} nature\n\n`);
    };

    sis_cat(); //in this property  still +has access to the properties of my_pet_cat
  },
};
my_pet_cat.friend_s_cat();

// using for loop

let fruits = ["apple", "mango", "banana"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`${i} ${fruits[i]}`);
}

console.log(`\n`);

//using while loop

let i = 1;
while (i <= 10) {
  console.log(`hey buddy  ! How 'is it going....? \n`);
  i += 2;
}

//using do while loop
let num = 4;
let x = 1;
console.log(`Table of 4`);

do {
  console.log(`\t\t${num} * ${x} = ${num * x}\n`);
  x++;
} while (x <= 10);

const names = ["tuba", "mamma", "junaid", "ali", "mujahid"];
if (names.includes("mujahid")) {
  console.log("mujahid is here\n\n");
}

for (let name of names) {
  console.log(`\t` + name);
}

//using switch
function logSeason(month: number): void {
  switch (month) {
    case 12:
    case 1:
    case 2:
      console.log("Winter");
      break;
    case 3:
    case 4:
    case 5:
      console.log("Spring");
      break;
    case 6:
    case 7:
    case 8:
      console.log("Summer");
      break;
    case 9:
    case 10:
    case 11:
      console.log("Fall");
      break;
    default:
      console.log("Invalid month");
      break;
  }
}

logSeason(8);
console.log(`\n`);

//express my routin work with switch caes
function routien(hour: number) {
  switch (hour) {
    case 7:
      console.log(`mamma is getting breakfast`);
      break;
    case 8:
    case 9:
    case 10:
      console.log(`wake up time and get to do some chores`);
      break;
    case 11:
    case 12:
      console.log(`take breakfast and`);
      console.log(`go back to work`);
      break;
    case 1:
    case 2:
    case 3:
      console.log(`arrival time of mamma`);
      break;
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
      console.log(`mamma is sleeping`);
      break;

    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
      console.log("its night");
      break;
  }
}
routien(5)

// Answer of Q12:
// Creates a new Map to store countries and their capitals
const countries = new Map<string, string>();
countries.set("USA", "Washington, D.C."); // Adds USA to the Map
countries.set("France", "Paris"); // Adds France to the Map
countries.set("Japan", "Tokyo"); // Adds Japan to the Map

console.log(countries);
// Logs the Map with the countries and their capitals.

// Answer of Q13:
// This function checks for "Canada" in the Map and logs its capital
function logCapitalOfCanada(countries: Map<string, string>): void {
  if (countries.has("Japan")) {
    console.log(`The capital of Japan is ${countries.get("Japan")}`);
  } else {
    console.log("Canada is not in the Map.");
  }
}

// Assuming countries Map from Question 112
logCapitalOfCanada(countries);
// Checks if Canada is in our Map and logs the capital if it exists.


// Creates a Map to store student IDs (keys) and names (values)
const students = new Map<number, string>();
students.set(1, "Alice");
students.set(2, "Bob");
students.set(3, "Charlie");

// Iterates over the Map and logs each student ID and name
students.forEach((name, id) => {
  console.log(`Student ID: ${id}, Name: ${name}`);
});
// This loop goes through each student and logs their ID and name.

console.log(`\n\n`);

let roll_No = new Map<number, string>();
roll_No.set(58,"Tuba Jan")
roll_No.set(59,"Nayab ")
roll_No.set(60,"Mamma")
roll_No.set(61,"Bushra Jan")
function roll_no( checking:Map<number, string>):void{
if(checking.has(58)){
  console.log(checking.get(58))
}
else{
  console.log("Not found")
}
}
roll_no(roll_No)