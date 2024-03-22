"use strict";
console.log("****************its my day 18 ***************");
// Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
// Explain & TIP: Just like a box can contain smaller boxes, objects can contain other objects. This helps organize related information neatly.
let smart_phone = {
    name: "Samsung A-14",
    model: 2022,
    key_features: {
        size_display: "16.72cm",
        battery: "600mAh",
        storage: "160gb",
    },
};
console.log(smart_phone);
let my_pet = {
    name: "mano",
    color: "brownish",
    height: "2 feet",
    key_features: {
        obidient: "sometimes",
        status: "single",
    },
};
console.log(my_pet);
// asharib ali ka code just for understanding
// Sets up details about a smartphone
let smartphone = {
    make: "Samsung",
    model: "Galaxy S21",
    specs: {
        storage: "128GB",
        screenSize: "6.2 inches",
        batteryLife: "18 hours",
    },
};
// Shows what we've set up about the smartphone
console.log(smartphone);
//Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
// Explain & TIP: Breaking down a complex list into simpler parts makes it easier to work with and understand specific pieces of information.
// A list showing a programmer's skills in detail
let developerSkills = {
    languages: ["JavaScript", "TypeScript", "Python"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"],
};
// Getting specific skills from the list
let { languages, frameworks, tools } = developerSkills;
// Showing a skill from each category
console.log(`Language: ${languages[0]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`);
// my code
let my_info = {
    known_languages: ["C", "C++", "Typescript"],
    projects: ["BFFP", "CafeExpress", "Paradise Hotel"],
    use: ["HTML", "CSS", "Javascript"],
};
let { known_languages, projects, use } = my_info;
console.log(`\n\tI used to make projrcts like ${(projects[0], projects[1], projects[2])} with the help of ${(use[0], use[1], use[2])} and now i am studying ${known_languages[2]}\n\n`);
//let's try another
let day = {
    morn: ["jog", "breakfast", "goto office"],
    evening: ["lunch", "nap", "way to home"],
    night: ["dinner", "book reading", "go to bed"],
};
let { morn, evening, night } = day;
console.log(`\n\ttoday I took my ${day.morn[1]} and due to lazy habbit I ran for the ${day.morn[2]}, after sometime took a little ${day.evening[1]} and do lots of ${day.night[1]} and then ${day.evening[2]} and directly ${day.night[2]}. that's my day.`);
//Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
// Explain & TIP: This is like having labels you can rewrite anytime, which is great for when you need to adjust your list based on new information.
// A way to make a flexible list
function createObjectWithDynamicKey(key, value) {
    let dynamicObject = {};
    // Setting up a section in the list with a changeable name
    //@ts-ignore
    dynamicObject[key] = value;
    return dynamicObject;
}
// Using the flexible list setup for a user's preference
let userPreference = createObjectWithDynamicKey("theme", "dark");
// Showing the user's choice
console.log(userPreference);
function getting_something(key, value) {
    let something = {};
    // @ts-ignore
    getting_something[key] = value;
    return something;
}
let user_input = getting_something("mobile", "samsung");
console.log(user_input);
//let 's make another
function smart_mobile(key, value) {
    let now_phone = {};
    //@ts-ignore
    now_phone[key] = value;
    return now_phone;
}
let user1_input = smart_mobile("phone", "samsung");
console.log(user1_input);
