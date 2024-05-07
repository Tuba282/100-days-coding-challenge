console.log(`\t\t its my day 66 od 100 days coding challenge\n\n`);


// Union Types
//variable can hold values of multiple types in union types.

let email: string | number = `tubajan`;
email = 123456;
// ---------------------------------------------------------------------------------

// Type Aliases with Union types

type join = string | number;
type print = "as-number" | "as-text";

function combine(num_1: join, num_2: join, text: print) {
  let result;
  if (typeof num_1 === "number" && typeof num_2 === "number") {
    result = num_1 + num_2 + "-" + text;
  } else {
    result = num_1.toString() + num_2.toString() + "-" + text;
  }

  console.log(result);
}
combine(28, 14, "as-number"); //here 28 and 14 adds like numbers do
combine("92", "42", "as-text"); //here 92 and 42 concat like strings do
combine(14, "42", "as-text"); //same as above

// ---------------------------------------------------------------------------------
// Literal types

let pet: "cat" | "dog";
pet = "cat";
pet = "dog";

// pet = "bird"; //error

console.log(pet); //dog
// ---------------------------------------------------------------------------------

// Nullable types

type uasage = number | null;

function check(num: uasage) {
  if (num === null) {
    console.log("no value");
  } else {
    console.log(num);
  }
}
check(null);
check(12);
// check("string");we can't give string it is not assigned in uasage

// ---------------------------------------------------------------------------------
// Intersection Type

type techer ={
    T_name: string
    T_id: string
}
type student ={
    stu_name: string
    stu_id: string
    stu_class: string
}

let institute : techer & student;
let new_institute ={
    T_name: "Akram",
    T_id: "IT-244",
    stu_name: "Ali",
    stu_id: "CS-3255",
    stu_class: "5th grade"
}
console.log(new_institute);

// ---------------------------------------------------------------------------------
