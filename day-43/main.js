"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(`\t\tIts my day 43-44.\n`);
// traditional___function
function traditional___function(name, salary) {
    return `His name is ${name} and his salary is ${salary}`;
}
console.log(traditional___function("Shubham", 10000));
console.log(traditional___function("Akram", 20000));
// Arrow___function
// this is how we create an arrow function
let Arrow_function = (a, b) => a + b;
console.log(Arrow_function("Hello", "World"));
console.log(Arrow_function("Tuba", "Jan"));
let arrow_function = (x, y) => {
    let operation = { x, y };
    return operation;
};
console.log(arrow_function(5, 6));
let try_arrow_func = (name, marital_status) => {
    return `My name is ${name} and my marital status is ${marital_status}`;
};
console.log(try_arrow_func("Shubham", false));
let checking = [`akram`, 1, `sana`, 2, `shubham`, 3, `tuba`, 4, `mujahid`, 5];
let show_case = [1, 2, 3, 4, 5];
let show = checking.filter((item) => typeof item === "number");
console.log(show_case);
let show1 = show_case.map((x) => x * 2);
// console.log(show);
console.log(show1);
console.log(checking);
function Traditional(country, city) {
    console.log(`\n"${city}","${country}"`);
    const arrow_f = (gender, ...likes) => {
        console.log(`\n"${likes}","${gender}"`);
    };
    arrow_f(`female`, `to eat`, `to sleep`, `to code`, `to work`);
}
Traditional(`karachi`, `Pakistan`);
Traditional(`Tokyo`, `japan`);
Traditional(`Beijing`, `China`);
Traditional(`lahore`, `Pakistan`);
Traditional(`Washington`, `USA`);
