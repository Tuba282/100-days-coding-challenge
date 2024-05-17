"use strict";
console.log(`\t\t\n\nits my day 71 of coding challenge\n\n`);
// Simple generic example
function identity(arg) {
    return arg;
}
const result1 = identity("hello");
const result3 = identity("world");
// generic function with different types
function multiple_types(arg) {
    return arg;
}
const again1 = multiple_types(254);
const again2 = multiple_types(`Hello Pakistan`);
const again3 = multiple_types(true);
const again4 = multiple_types([`mango`, 'apple', 'banana']);
// Generic Function `testType`
function testType(value) {
    return `The type of value is ${typeof value}`;
}
const test_result1 = testType(254);
const test_result2 = testType(true);
const test_result3 = testType(`Hello`);
//Generic Class `User`
class lady {
    constructor(lady_name) {
        this.lady_name = lady_name;
    }
    get_lady_name() {
        return this.lady_name;
    }
}
const lady_again = new lady(`Soofia`);
console.log(lady_again.get_lady_name());
