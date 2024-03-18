"use strict";
console.log(`***********************its my day 17**********************\n\n\n`);
//Question 49:Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
// Explain & TIP: Rest parameters allow a function to accept an indefinite number of arguments as an array, providing a way to handle multiple inputs gracefully.
function hobby(...hobbies) {
    hobbies.forEach((habbit) => {
        console.log(`I like ${habbit}`);
    });
    //  console.log(`I like ${hobbies}`);
}
hobby("dancing");
hobby("dancing", "cooking");
hobby("dancing", "cooking", "playing");
// second try
console.log("\n\n");
function my_bad(...bad) {
    bad.forEach((badness) => {
        console.log(`Ullo hon main mujy ${badness}  bhi nahi ata. \n\n English is not comes to me.\n`);
    });
}
my_bad("pakana", "dhona", "kamana");
//Question 50: Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.
// Explain & TIP: Template literals support multiline strings, making it easier to create readable text blocks that incorporate variables and expressions.
// Using template literals to define a multiline string
let myIdealDay = `\n\n\nMy ideal day would involve:
1. Waking up early and going for a jog.
2. Spending a few hours coding on a personal project.
3. Ending the day by reading a good book.`;
// Logging the multiline string to the console
console.log(myIdealDay);
let my_day = `\n\n\nMy day usually starts with :
1.with a good sleep
2.get my self ready for daily tasks of typescript.
3.offer prayer time to time.
4.go to bed.`;
console.log(my_day);
//
//let's try another example
let Ramadan = `\n\nIn RAMADAN You should do :
.recite QURAN-e-PAK.
.do lots of TASBEEH.
.and make duas.
 `;
console.log(Ramadan);
//Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
// Explain & TIP: Arrow functions provide a concise syntax for writing functions in JavaScript and TypeScript, making your code cleaner and more readable.
function num(width, height) {
    return width * height;
}
let Store = (width, height) => width * height;
console.log(num(5, 7));
// lets try another
function security(x, y) {
    return x + y;
}
console.log(security(5, 7));
