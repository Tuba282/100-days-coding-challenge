"use strict";
console.log(`\t\tDay-21\n\n`);
//Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
// Explain & TIP: Enums are like special lists in your code that help you categorize things. They make your code cleaner and easier to understand.
var vihicals;
(function (vihicals) {
    vihicals[vihicals["car"] = 0] = "car";
    vihicals[vihicals["Bike"] = 1] = "Bike";
    vihicals[vihicals["Truck"] = 2] = "Truck";
    vihicals[vihicals["scooty"] = 3] = "scooty";
    vihicals[vihicals["bus"] = 4] = "bus";
    vihicals[vihicals["cycle"] = 5] = "cycle";
})(vihicals || (vihicals = {}));
console.log(vihicals);
console.log(vihicals.Truck); //here it will only show the index number of object element.
console.log(`\n\n`);
var animal;
(function (animal) {
    animal[animal["cat"] = 0] = "cat";
    animal[animal["dog"] = 1] = "dog";
    animal[animal["elephant"] = 2] = "elephant";
    animal[animal["lion"] = 3] = "lion";
    animal[animal["bear"] = 4] = "bear";
})(animal || (animal = {}));
console.log(animal.dog); //here it will print only index number of dog in this list.
let Teacher = {
    name: 'tubajan',
    age: 19,
    subject: ['maths', 'urdu', 'english']
};
console.log(`\n`);
console.log(Teacher);
console.log(`\nname :${Teacher.name} ,age is ${Teacher.age} enrolled in these subjects :${Teacher.subject} `);
// Describing a circle using our Shape type
let circle = {
    kind: "circle",
    radius: 5
};
// Describing a rectangle using our Shape type
let rectangle = {
    kind: "rectangle",
    width: 10,
    height: 20
};
// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle
// We made a flexible program that can describe different shapes in detail.
