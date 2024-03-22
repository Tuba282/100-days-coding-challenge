console.log(`\t\tIts my day-20\n\n`);
//Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.

// Explain & TIP: This program can handle any number of scores you give it, and it tells you the average score. Handy for seeing how well you did overall!

//let's do first

function average(...avg: number[]) {
  let total_score = avg.reduce((total, add) => total + add, 0) / avg.length;
  return total_score;
}
// average(15,48,89,25);
console.log(average(15, 48, 89, 25));
console.log(`\n\n`);

//chalo ek or banaty hain.
function count_average(...avg: number[]) {
  let total_count =
    avg.reduce((total, average) => total + average, 0) / avg.length;
  return total_count;
}

console.log(count_average(56, 45, 89, 98, 78));

console.log(`\n\n`);
function average_again(...avg: number[]) {
  let total_avg = avg.reduce((total, add) => total + add, 0) / avg.length;
  return total_avg;
}
let user_input = average_again(45, 25, 48, 96, 36);
console.log(`23  ` + user_input);

//Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

// Explain & TIP: Imagine you have a magic box that can add a specific number to any number you put in it. This program makes that magic box for you!

// This program makes a function that adds a specific number
function makeAdder(valueToAdd: number) {
  // This is the magic box. It takes a number and adds your special number to it
  return function (arg0: number) {
    return arg0 + valueToAdd;
  };
}
console.log(`\n\n`);
// Making a magic box that adds 5
let addFive = makeAdder(5);
console.log(addFive(10)); // If we put 10 in the box, it gives us 15
// We made a function (magic box) that adds 5 to any number.

//let make my own

function making_Magicbox(para1: number) {
  return function (para2: number) {
    return para1 + para2;
  };
}

console.log(`\n\n`);

let parameter = making_Magicbox(4);
console.log(parameter(20));

//Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.

// Explain & TIP: This is like a self-building lego set. Once you start it, it builds a user profile by itself and can tell you about the user.

// This profile sets itself up and can share info about the user
let userProfile = (function () {
  // The user's details are kept inside
  let name = "John";
  let age = 30;

  // This part shares the user's details
  return {
    displayInfo: function () {
      console.log(`Name: ${name}, Age: ${age}`);
    },
  };
})();

// Asking the profile to tell us about the user
userProfile.displayInfo(); // It says the user's name and age
// We made a self-setup profile that can talk about the user.

let myProfile = (function () {
  let name= "tuba jan";
  let age= 19;
  return {
    displayInfo: function () {
      console.log(`name ${name} age ${age}`);
    },
  };
})();
myProfile.displayInfo();
