"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(`\t its my day 41-44`);
// Question 121: Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.
// Explain & TIP: The continue statement can be used to skip over an iteration in a loop. It's particularly handy when you want to ignore specific cases without stopping the entire loop.
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
    // Answer: 1, 2, 3, 4, 6, 7, 8, 9, 10
}
console.log(`\n`);
// second try
let magicians = [
    "alice",
    "david",
    "charlie",
    "maryam",
    "tuba",
    "bushra",
    "nayab",
];
for (let x = 0; x < magicians.length; x++) {
    if (magicians[x] === "david") {
        continue;
    }
    console.log(`\n${magicians[x]} = No Doubt You are great magician`);
} //it will print the message for all magicians except david
//Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
console.log(`\n`);
// Explain & TIP: The break statement terminates the loop immediately. This is useful for stopping a loop when a certain condition is met, even if the loop's original termination condition hasn't been reached yet.
let num = 10;
while (num > 1) {
    console.log(num);
    num--;
    if (num === 5) {
        console.log("we can't print 5");
        continue;
    }
}
console.log(`\n`);
//second try
let guest_list = [
    "alice",
    "david",
    "charlie",
    "maryam",
    "tuba",
    "bushra",
    "nayab",
];
do {
    guest_list.shift();
    console.log(guest_list.toLocaleString());
    if (guest_list[0] === "tuba") {
        break;
    }
    //first it will remove the 1st element from the list and print the remaining list
    //AND iteration will happen then while condition would be checked and all this procedures will  repeated   it will break when tuba is found
} while (guest_list.length > 0);
console.log(`\n`);
// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
// Explain & TIP: To find a specific character in a string, you can iterate through each character and use a condition to check for vowels. The loop can stop once a vowel is found.
let str = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];
// for(let i=0;i<str.length;i++){
//     if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
//         break
//     }
//     console.log(str[i])
// }
for (let i = 0; i < str.length; i++) {
    if (str[i] === `a` ||
        str[i] === `e` ||
        str[i] === `i` ||
        str[i] === `o` ||
        str[i] === `u`) {
        break;
    }
    console.log(`${str[i]}`);
}
//Question 124: Create a function inside an object that returns the object's own name property using the this keyword.
// Explain & TIP: The this keyword in an object's method refers to the object itself, making it straightforward to access its properties from within its methods.
let student_details = {
    name: "nayab",
    eng_marks: 25,
    math_marks: 15,
    urdu_marks: 12,
    total_marks: 100,
    Result: function () {
        return `Her name is ${this.name} and she got very bad marks in all subjects

    English Marks : ${this.eng_marks} / ${this.total_marks}
    Math Marks : ${this.math_marks} / ${this.total_marks}
    Urdu Marks : ${this.urdu_marks} / ${this.total_marks}

    Total Marks : ${this.eng_marks + this.math_marks + this.urdu_marks} / 300

    very bad result got "poor"`;
    },
};
console.log(student_details.Result());
/**Question 125: Modify a method in an object to use the this keyword to access another property in the same object.

Explain & TIP: You can leverage the this keyword to interact with multiple properties within the same object, providing a cohesive way to manipulate internal data.
 */
let pet = {
    name: "mano",
    age: 5,
    certify: `Engineer`,
    nature: function () {
        console.log(`his name is ${this.name} and his age is ${this.age}`);
        const kind = () => {
            console.log(`here I am using inner method of function by calling my pet's name is ${this.name}`);
        };
        kind();
        const innerfunction = () => {
            console.log(`And I am Certify ${this.certify}`);
        };
        innerfunction();
    },
};
pet.nature();
let certificate = {
    name: "tuba",
    age: 12,
    certify: `Engineer`,
    result: function () {
        console.log(`\n`);
        console.log(`my name is ${this.name} and I am ${this.age} years old and I got very bad marks in all subjects`);
        let inner_function = () => {
            console.log(`And I am Certify ${this.certify}`);
        };
    },
};
certificate.result();
