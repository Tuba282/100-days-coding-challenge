console.log(`\t\tDay-21\n\n`);

//Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.

// Explain & TIP: Enums are like special lists in your code that help you categorize things. They make your code cleaner and easier to understand.

enum vihicals {
  car,
  Bike,
  Truck,
  scooty,
  bus,
  cycle,
}
console.log(vihicals);
console.log(vihicals.Truck); //here it will only show the index number of object element.
console.log(`\n\n`);

enum animal{
  cat ,
  dog,
  elephant,
  lion,
  bear,
}
console.log(animal.dog);//here it will print only index number of dog in this list.

//Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

// Explain & TIP: This blueprint, called an interface, helps ensure all students have the same kind of information, making your code more organized.

interface student {
  name: string;
  age: number;
  subject: string[];
}

let Teacher: student = {
    name:'tubajan',
    age:19,
    subject:['maths','urdu','english']

};

console.log(`\n`);
console.log(Teacher);
console.log(`\nname :${Teacher.name} ,age is ${Teacher.age } enrolled in these subjects :${Teacher.subject} `);

//Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

// Explain & TIP: A type alias lets you create a custom type. It's like a shortcut for describing more complex information, such as the details of different shapes.

// Creating a custom type (type alias) for shapes that could be circles or rectangles
type Shape = {
    kind: "circle" | "rectangle";
    radius?: number; // Only for circles
    width?: number; // Only for rectangles
    height?: number; // Only for rectangles
};

// Describing a circle using our Shape type
let circle: Shape = {
    kind: "circle",
    radius: 5
};

// Describing a rectangle using our Shape type
let rectangle: Shape = {
    kind: "rectangle",
    width: 10,
    height: 20
};

// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle
// We made a flexible program that can describe different shapes in detail.