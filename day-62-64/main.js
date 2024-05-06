"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(`\t\tIts my day 62  \n\n`);
// Type Annotations
// 1. Basic Types
let my_name = "Abdul";
console.log("my name is :", my_name, "\n"); //two different methods
console.log(`my name is : ${my_name} \n`);
// 2. Arrays
let array_1 = [`Ali`, "Asad", `Ahmed`, "Muskan"];
console.log(array_1); //it will print array_1 in simple array format
console.log(array_1.slice(2).toString()); //it will print Ahmed
let array_2 = ["Ali", 1, "Asad", 2, "Ahmed", 3, "Muskan"];
console.log(array_2.filter((plant) => typeof plant === "number")); //it wil print only numbers from array_2
// 3. Objects
let my_obj = {
    name: "Abdul",
    age: "45",
    job: false,
    friends: {
        school: [`Ahmed`],
        college: [`Ali`],
        now: [`No-One`],
    },
};
//let print our object
console.log(`hey buddies my name is ${my_obj.name} and I am ${my_obj.age} Now ${my_obj.friends.now[0]} is friend but in old days I uesed to have friend ${my_obj.friends.school[0]} in college and ${my_obj.friends.school[0]} in school but being alone a really a good vibe.\n`);
// 3. Tuples
let make_tuple_1 = [`Ali`, 24, true, null, undefined];
console.log(make_tuple_1[2]); //it will print "true" from tuple
let make_tuple_2 = [`Ali`, 24, true, null, undefined];
//this is how we can make tuple multiple data declaration in one array.
// 5. Any
function dynamic(full_name) {
    return `hey his name is ${full_name}`;
}
console.log(dynamic(`Ali`));
// 6. Void
function using_void() {
    console.log(`I am using void function`);
}
using_void();
// 7. Null and Undefined
function using_null_and_undefined(num, city = "karachi") {
    if (num === null) {
        console.log(`yes our num is null`);
    }
    if (city === undefined) {
        console.log(`yes our city is undefined`);
    }
}
using_null_and_undefined(null, `Lahore`);
using_null_and_undefined(null, undefined);
// 9. Type Assertions
