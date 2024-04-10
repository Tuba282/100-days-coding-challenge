console.log(`\t\tIts My day-33 to day-34`);
let name = `javeria_ishtiaque_nay_khana_khaya`;
//using slice
console.log(name.slice(2, 6).toUpperCase()); //VERI
//using replace
console.log(`\n` + name.replace(/veria/g, "VERIA")); //jaVERIA_ishtiaque_nay_khana_khaya
//using split
console.log(`\n` + name.split("_")[2].toUpperCase()); //yaha ye split name sy by index number element lega or separatly usy uppercase kar k log karwaye ga
//to iska output :NAY
//using toUpperCase() and toLowerCase() and charAt() in one go
console.log(`\n` + name.charAt(0).toUpperCase() + name.slice(1, 17).toLowerCase());
//using substring()
//substring bhi slice() wala hi kam karta hai.
console.log(`\n` + name.substring(0, 2).toUpperCase() + name.slice(2, 17).toLowerCase());
//using splice()
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, 6);
console.log(arr);
//ok let's do question 97
//Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".
// Explain & TIP: Working with dates in JavaScript often requires formatting them in a specific way. The Date object provides methods to get the day, month, and year, which you can then assemble into any format you need.
// This function formats the current date as DD-MM-YYYY
function getting_date_with_correct_format() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0'); // Ensures the day is two digits
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Adds 1 because months are 0-indexed
    const year = String(now.getFullYear());
    // const time = String(now.getHours()).padStart(2, '0') + ":" + String(now.getMinutes()).padStart(2, '0') + ":" + String(now.getSeconds()).padStart(2, '0')+":" + String(now.getMilliseconds()).padStart(2, '0');
    return `${day}-${month}-${year}`;
}
console.log(getting_date_with_correct_format()); // Outputs the current date in DD-MM-YYYY format
// Shows today's date, neatly formatted.
let date = new Date();
console.log(`\n` + date.getDay() + "-" + String(date.getMonth()).padStart(2, '0') + "-" + String(date.getFullYear()).padStart(2, '0'));
console.log(`\n` + new Date().toLocaleString());
console.log(`\n` + new Date().toLocaleDateString());
// ----------------------------------------------------------------------------
// Generates a Date object for the next occurrence of a specific birthday
function getNextBirthday(month, day) {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day); // Months are 0-indexed
    if (birthday < today) {
        // If the birthday this year has already passed, use next year's date
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
// Replace with your birth month and day
const nextBirthday = getNextBirthday(1, 7); // Example: December 25th
console.log("Next birthday on:", nextBirthday.toLocaleDateString());
export {};
// Shows the date of the next birthday.
