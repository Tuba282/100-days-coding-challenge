console.log("Hey Budy This is my Day-11 Challenge \n\n ");
//Question 31: No Users: Ensure your user list isn’t empty.
let my_list: string[] = [];
if (my_list.length === 0) {
    console.log("We need Somebody  who can fit in my List")
} else {
    console.log("We don't anyone in my list \n\n ")
}

//Question 32: Checking Usernames: Ensure uniqueness in usernames.
//Checking for uniqueness is crucial in user management. Use loops and conditionals to handle case-insensitive comparisons.


//Asharib Ali ka code
let current_users: string[] = ["user1", "admin", "user3", "user4", "user5"];
let new_users: string[] = ["User1", "User6", "user7", "admin", "User9"];

new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.\n\n`);
    }
});

//My code
let array_1: string[] = ['car', 'book', 'man'];
let array_2: string[] = ['man', 'pencil', 'road'];

array_2.forEach(array_2 => {

    if (array_1.some(array1 => array1.toLowerCase() === array_2.toLowerCase())) {
        console.log("Congrats you have been matched\n");
    } else {
        console.log("No You're not even closer...\n")
    }
});

//Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.

//Asharib Ali Ka code 
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(number => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    } else if (number === 2) {
        suffix = "nd";
    } else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);
});