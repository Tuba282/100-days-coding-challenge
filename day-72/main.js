"use strict";
console.log(`\n\n\tits my day 72 of 100 days coding challenge\n\n`);
// let's play with array
let fruits = [`apple`, `banana`, `mango`];
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push(`watermelon`);
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift(`orange`);
console.log(fruits);
fruits = ["orange", "banana", "watermelon", `mango`, `apple`];
console.log(fruits.slice(1, 4));
fruits.splice(2, 1, "peach", "lichi");
console.log(fruits);
// Type Union
let basket;
basket = "apple";
basket = 252;
basket = true;
// objects
// key : value
let my_obj = {
    name: "mohammad",
    age: 25,
    bio: () => {
        return `
        his name is ${my_obj.name}
        and he is ${my_obj.age} years old`;
    },
};
console.log(my_obj.bio());
// exercise
let student = [
    { name: "ali", age: 25, id: "IT-65" },
    { name: "ahmed", age: 21, id: "IT-42" },
    { name: "emad", age: 19, id: "IT-78" },
];
console.log(student[1].id);
let employee = "hira";
let friend = "hira";
// Type assertion
let data = 1000;
// Type assertion to treat "data" as a string
console.log(data);
