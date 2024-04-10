"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(`\t\t Day-34\n`);
function using_floor_property() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(using_floor_property());
console.log(Math.floor(10.5)); // it will give 10
console.log(Math.floor(8.2)); // it will give me  8
// cause floor() always return less round of number even if it is decimal greater then 5
function using_ceil_property(num) {
    return Math.ceil(num);
}
console.log(using_ceil_property(5.8)); // it will give 6
console.log(using_ceil_property(8.9)); // it will give 9
console.log(using_ceil_property(15.1)); // it will give 16
console.log(using_ceil_property(2.3)); // it will give 3
//cause ceil() always return greater round of number even if it is decimal less then 5
// there difference is like floor( like zameen) give us lesser number and ceil(like chhat) give us greater number.
// using MAX -/- MIN
let array = [4, 8, 12, 16, 20, 24];
console.log(Math.max(...array)); // I think it will give me24
console.log(Math.min(...array)); // I think it will give me 4
function using_max_and_min(array) {
    return `max value is ${Math.max(...array)} and min value is ${Math.min(...array)}
 maxvalue - minvalue = ${Math.max(...array) - Math.min(...array)}`;
}
array = [4, 8, 12, 16, 20, 24];
console.log(using_max_and_min(array)); // 20
//usibg Math.abs
console.log(Math.abs(-5)); // it will give me 5
console.log(Math.abs(10)); // it will give me 5
//abs = absolute value means when we give negative number it will give positive number
//using Math.sign
console.log(Math.sign(-5)); // it will give me -1
console.log(Math.sign(10)); // it will give me 1
//sign = sign means when we give negative number it will give -1 and when we give positive number it will give 1
//using Math.random()
function random() {
    return Math.floor(Math.random() * 10);
}
console.log(random());
