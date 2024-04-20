"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myObj = void 0;
console.log(`\tit's my day 44 `);
const export_1 = require("./export");
(0, export_1.bio)(`john`, 4);
const export_2 = require("./export");
console.log(export_2.checking.filter((double) => double * 2));
//Answer[2, 4, 6, 8, 10]
const export_3 = require("./export");
export_3.array.forEach((person) => {
    console.log(`
    \they ${person}`);
});
exports.myObj = {
    name: "tuba-jan",
    occupasion: "programmer",
    age: 19,
};
// Define a class named 'Car'
class Car {
    // Properties with their types
    brand;
    model;
    year;
    // Constructor to initialize the properties
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    // Method to display information about the car
    display() {
        console.log(`This is a ${this.year} ${this.brand} ${this.model}.`);
    }
}
// Creating an instance of the Car class
const myCar = new Car(`\n` + "'Toyota'", "'Corolla'", 2021);
// Calling the method to display car information
myCar.display();
class bio_ {
    name;
    age;
    occupation;
    constructor(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }
    print() {
        console.log(`\n\they my name is ${this.name} ,I am ${this.age} years old and by occupation I am ${this.occupation}`);
    }
}
let lets_print = new bio_(`subhan`, 19, `programmer`);
lets_print.print();
class resume {
    person;
    age;
    experience;
    profession;
    marital_status;
    constructor(person, age, experience, profession, marital_status) {
        this.person = person;
        this.age = age;
        this.experience = experience;
        this.profession = profession;
        this.marital_status = marital_status;
    }
    output() {
        console.log(`
        person name: ${this.person} \n
        age of a person: ${this.age}\n
        profession: ${this.profession}\n
        experience: ${this.experience}\n
        marital_status: ${this.marital_status}`);
    }
}
let my_resume = new resume(`tuba Jan`, 19, 1, `programmer`, false);
my_resume.output();
// ---------------------------------------------------------------------------------
class pet {
    name;
    age;
    kind;
    constructor(name, age, kind) {
        this.name = name;
        this.age = age;
        this.kind = kind;
    }
    outcome() {
        console.log(`\n\t Hey! there  wanna meet my pet ,its name is ${this.name} she is ${this.age} years old she is ${this.kind} kind of pet`);
    }
}
let my_pet = new pet(`mano`, 3, false);
my_pet.outcome();
