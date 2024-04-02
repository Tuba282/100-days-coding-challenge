"use strict";
console.log(`\t\tIts my day-27`);
//Question 79: Creating and Accessing Object Properties:
let bike = {
    name: "Dollo",
    model: "supper power scotty",
    year: 2019,
    color: "black",
};
console.log(bike);
//Question 80: Updating Object Properties
bike.model = "Tyota";
bike.color = "Purple";
//now console to check our Object updated or not
console.log(bike);
//yes it updated.
//now let's move to next question
//Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values
function object(pet) {
    console.log(`\n`);
    for (let every_animal in pet) {
        //@ts-ignore
        console.log(`${every_animal}: ${pet[every_animal]}`);
    }
}
object({
    name: "Mano",
    D_O_B: "12-15-2021",
    Nature: "friendly",
    color: "grey",
    height: "1.5feet",
});
console.log(`\n`);
//Question 82: Find the Length of a String: Write a function that takes a string as an argument and returns the number of characters in the string.
let person = "\nMujahid Ali Street no.5";
console.log(person.length);
let noun = ["name", "city", "village", "park", `age`, "gender"];
console.log(noun[2].length); //7
//we can count the legth of not only string but every datatype.
//Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
function change_cases(word) {
    return `word length :` + word.length + `\nword in lowercase:` + word.toLowerCase() + `\nword in uppercase:` + word.toUpperCase() + `\nword in camel case:` + word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
//output would be like this I guess
//word length: 8
//word in lowercase: pakistan
//word in uppercase: PAKISTAN
//word in camel case: Pakistan
//
//
console.log(change_cases('pakistan'));
//let move to next question
//Question 85: Finding the Position of a Substring:
function colour(...colors) {
    return colors.indexOf('white');
}
console.log(colour('blue', 'green', 'black', 'yellow', 'voilet', 'red', 'purple', 'pink', 'white'));
console.log(colour('blue', 'green', 'black', 'yellow', 'voilet', 'red', 'purple', 'pink', 'grey')); // the outcome of this will be `-1` cause we did'nt give the string to it and it could'nt found that
//Question 84: Replacing Text in a String:
function using_replace(line) {
    return line.replace(/bread/g, "cake.");
}
console.log(using_replace(`\nShe gave me a piece of bread`));
//the outcome would be "She gave me a piece of cake."
function using_includes(line) {
    return line.includes(`cub`);
}
console.log(using_includes(`she's keeping cub as her pet`)); //true
console.log(using_includes(`she's keeping cat as her pet`)); //false cause we gave word "cub to includes " and cub is'nt here in this line
//Question 87: Extracting a Substring:
function using_substring(line) {
    return line.substring(0, 34);
}
console.log(using_substring(`Hey People , Hope you all are good there and enjoying my party tonight...?`));
