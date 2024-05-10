"use strict";
console.log(`\t\tits my day 68\n\n`);
// making tuple
let make_tuple = [1, true, `Ali`, 2, false, `Ahmed`, 2, false, `Anusha`];
console.log(make_tuple[2]); //Ali
// making enums 
// enums are used for many constant values
let a = 5;
let b = 5;
var calculator;
(function (calculator) {
    calculator[calculator["add"] = a + b] = "add";
    calculator[calculator["multiply"] = a * b] = "multiply";
    calculator[calculator["subtract"] = a - b] = "subtract";
    calculator[calculator["divide"] = a / b] = "divide";
})(calculator || (calculator = {}));
console.log();
