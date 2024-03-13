"use strict";
console.log(`***********************day-10****************************`);
//Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.
let age = 25;
if (age < 4) {
    console.log(`The person is a baby.`);
}
else if (age > 10) {
    console.log(`The person is a teenager`);
}
else if (age > 20) {
    console.log(`The person is a adult`); //Result
}
else if (age > 35) {
    console.log(`The person is a man/woman(matured)`);
}
else if (age > 50) {
    console.log(`The person is growing Old`);
}
else {
    console.log(`The person is Very Old .`);
}
//Question 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.
let fruits = ['mango', 'grapes', 'apple', 'banana', 'peach', 'watermelon'];
if (fruits[1] == 'mango') {
    console.log(`This is correct fruits[1]=='mango'`);
}
else if (fruits[2] == 'banana') {
    console.log(`Yes fruits[2]== 'banana'`);
}
else if (fruits[5] == 'peach') {
    console.log(`Yeah Budy fruits[5]=='peach'`);
}
else if (fruits[5] == 'watermelon') {
    console.log(`offcourse fruits[5] =='watermelon' yeah bud`);
}
//Ashraib Ali ka code 
let favorite_fruits = ["apples", "bananas", "cherries"];
if (favorite_fruits.includes("mango")) {
    console.log("You really like bananas!");
}
if (fruits.includes('mango')) {
    console.log('Do you Like Mango...?');
}
else if (fruits.includes('banana')) {
    console.log('Do u like banana');
}
