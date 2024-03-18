"use strict";
console.log(`**********************Its my day-16**************************`);
// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
// Explain & TIP: Objects can also contain functions (methods) that can perform actions using the object's properties. This introduces method definition within objects.
let laptop = {
    make: "Dell",
    model: "XPS 15",
    year: 2021,
    describe: function () {
        console.log(`This laptop is a ${laptop.year} ${this.make} ${this.model}.`);
    },
};
laptop.describe();
//my code
let book = {
    name: "The 7 Seas",
    author: "The great author TUBA JAN",
    publish_date: 1975,
    popularity: "more than we can think",
    discription: function () {
        console.log(`hey I want the book named ${this.name} by ${book.author} and its popularity is ${this.popularity} in ${book.publish_date}\n Thank you`);
    },
};
book.discription();
//yet another
let my_info = {
    name: "Tuba Jan",
    age: 19,
    field: "AI Generative, Web3.0,Meteverse",
    institude: "Governor IT Initiative",
    venue: "Governor House",
    details: function () {
        console.log(`hello there I am ${this.name} and ${my_info.age} years old ,which I am studying is ${this.field} at ${this.institude} and yeah that's it.\n\n`);
    },
};
my_info.details();
//Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
// Explain & TIP: Destructuring can also be used to quickly extract elements from arrays of objects, simplifying access to complex data structures.
// this is teach us how to make  array object 
let books = [
    { name: "7 seas", year: 2019, auther: "the great Tuba Jan" },
    { name: "6 pillas", year: 2025, auther: "the great Tuba Jan" },
    { name: "the land", year: 2024, auther: "the great Tuba Jan" },
];
let [books1, books2, books3] = books; // acha ye kam srif array object me kiya ja sakta hai.
console.log(books1);
console.log(books2);
console.log(books3);
//Asharib Ali ka code
let laptops = [
    { make: "Dell", model: "XPS 15", year: 2021 },
    { make: "Apple", model: "MacBook Pro", year: 2020 },
    { make: "HP", model: "Spectre x360", year: 2021 },
];
let [laptop1, laptop2, laptop3] = laptops;
console.log(laptop3);
console.log(laptop1);
//one more time
let pet = [
    { pet_animal: "cat", adoption_year: 2021, nature: "lovely and naughty" },
    { pet_animal: "dog", adoption_year: 2021, nature: "lovely and naughty" },
    { pet_animal: "parrot", adoption_year: 2021, nature: "lovely and naughty" },
    { pet_animal: "puppy", adoption_year: 2021, nature: "lovely and naughty" },
    { pet_animal: "cub", adoption_year: 2021, nature: "lovely and naughty" },
];
let [pet1, pet2, pet3, pet4, pet5] = pet;
console.log(pet5);
//Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
// Explain & TIP: The spread operator can be used in conjunction with array methods like sort() to combine and manipulate arrays efficiently.
let pricesSet1 = [1200, 1500, 1100];
let pricesSet2 = [1000, 1300, 1600];
let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
console.log(combinedPrices);
// my try 
let price1 = [12, 15, 17];
let price2 = [10, 14, 29];
let combine_prices = [...price1, ...price2].sort((x, y) => x - y);
console.log(combine_prices);
// let's make another try
let friend = ['a', 'y', 'A', '$'];
let anemy = ['A', 'y', "="];
let combine = [...friend, ...anemy].sort();
console.log(combine);
//one more
const originalArray = [1, 2, 3];
const copyArray = originalArray; //[1, 2, 3]
console.log(copyArray);
