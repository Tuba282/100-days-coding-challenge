"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(`\t\t its my day 66 od 100 days coding challenge\n\n`);
// Union Types
//variable can hold values of multiple types in union types.
let email = `tubajan`;
email = 123456;
function combine(num_1, num_2, text) {
    let result;
    if (typeof num_1 === "number" && typeof num_2 === "number") {
        result = num_1 + num_2 + "-" + text;
    }
    else {
        result = num_1.toString() + num_2.toString() + "-" + text;
    }
    console.log(result);
}
combine(28, 14, "as-number"); //here 28 and 14 adds like numbers do
combine("92", "42", "as-text"); //here 92 and 42 concat like strings do
combine(14, "42", "as-text"); //same as above
// Literal types
let pet;
pet = "cat";
pet = "dog";
// pet = "bird"; //error
console.log(pet); //dog
function check(num) {
    if (num === null) {
        console.log("no value");
    }
    else {
        console.log(num);
    }
}
check(null);
check(12);
let institute;
let new_institute = {
    T_name: "Akram",
    T_id: "IT-244",
    stu_name: "Ali",
    stu_id: "CS-3255",
    stu_class: "5th grade"
};
institute = new_institute;
console.log(institute);
