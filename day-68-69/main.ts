console.log(`\t\tits my day 68 and 69\n\n`);
// making tuple

let make_tuple = [1, true, `Ali`, 2, false, `Ahmed`, 2, false, `Anusha`];
console.log(make_tuple[2]); //Ali

// making enums
// enums are used for many constant values

let a = 5;
let b = 5;

enum calculator {
  add = a + b,
  multiply = a * b,
  subtract = a - b,
  divide = a / b,
}

const addition: calculator = calculator.add;
console.log(addition);

const subtraction: calculator = calculator.subtract;
console.log(subtraction);

const mltiplication: calculator = calculator.multiply;
console.log(mltiplication);

const division: calculator = calculator.divide;
console.log(division);
