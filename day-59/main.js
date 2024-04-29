"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(`\t\tits my day 59\n\n`);
// loops:while and for
// The “while” loop
let num_1 = 0;
while (num_1 <= 10) {
    console.log(`I LOVE PAKISTAN\n`);
    num_1++;
    // this is how we use while loop
}
// The “for” loop
let num_2 = 2;
for (let i = 0; i <= 10; i++) {
    console.log(`${num_2} x ${i} = ${num_2 * i}`);
    // this is the simplest way to use for loop
}
// do while loop structure
let num_3 = 2;
console.log("Even number between 0 and 10:");
do {
    num_3 += 2;
    console.log(`\t${num_3}`);
} while (num_3 % 2 === 0 && num_3 <= 10);
//do while loop is used when we want to execute atleast once either our condition false for the first time
// Breaking the loop
console.log(`\nUsing break statement: \n\t number between 0 and 10: and used break at 5`);
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(`\t${i}`); // we used break to break the loop when i = 5 it breaks and 5 never be prined
    // while all number till 10 will print in console
}
// Countinuing the loop
console.log(`\nUsing continue statement: \n\t number between 0 and 10: and used continue at 5`);
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(`\t${i}`); // we used continue to continue the loop when i = 5 it  continue and 5 never be prined
    // while all number till 10 will print in console
}
outer: for (let i = 0; i < 3; i++) {
    console.log(`Outer: ${i}`);
}
// Switch staements
let day = "tuesday";
switch (day) {
    case "saturday":
    case "sunday":
        console.log(`its my weekend`);
        break;
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
        // we can use multiple case in one switch statement
        console.log(`its my working day`);
        break;
    case "friday":
        console.log(`its my half day `);
        break;
}
let my_age = 19;
switch (my_age) {
    case 15:
        console.log(`you are very close`);
        break;
    //   case 19:
    //     console.log(`yes you gueesed correct`);
    //     break;
    case 25:
        console.log(`you gone far`);
        break;
    case 35:
        console.log(`not even close`);
        break;
    default:
        console.log(`you can't guess my age.`);
}
